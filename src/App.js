import React, { useState } from "react";
import './App.css';
import Contacts from './components/Contacts';
import Header from "./components/Header"
import styled from "styled-components";

const Placeholder = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  color: rgba(0, 0, 0, 0.45);
  span {
    font-size: 32px;
    color: #525252;
  }
`;

const ChatPlaceholder = styled.img`
  width: 350px;
  height: 240px;
  border-radius: 50%;
  object-fit: contain;
`;

function App() {

   const [selectedChat, setChat] = useState();
  return (
    <div className='App'>
     <Contacts  setChat={setChat}/>
      {selectedChat ? 
      <Header/> : <Placeholder>
        <ChatPlaceholder src= "/whatsapp-clone/welcome-placeholder.jpeg" />
        <span>Keep your phone connected</span>
        whatsapp connects your phone to sync msg
        </Placeholder>}
    </div>
  );
}

export default App;
