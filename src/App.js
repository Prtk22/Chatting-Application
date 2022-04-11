import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { FormControl, Input, InputLabel } from '@mui/material';
import './App.css';
import db from "./firebase";
import Message from "./Message";
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';


function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    
  ]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection("messages").orderBy('timestamp','desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUsername(prompt("Enter your name"));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
     
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello {username}</h1>

      <FormControl>
      <InputLabel>Enter the message</InputLabel>
      <Input value={input} onChange={event => setInput(event.target.value)}/>
      <Button disabled={!input} variant='outlined' color='primary' type='submit' onClick={sendMessage}>Send message</Button>
      </FormControl>  
 
      <FlipMove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username={username} message={message} />
          
        ))
      }
      </FlipMove>
      
    </div>
  );
}

export default App;
