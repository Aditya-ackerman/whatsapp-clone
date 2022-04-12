import React from 'react';
import styled from "styled-components";
import { messagesList } from "../mockdata";
import './subcss.css';

const MessageDiv = styled.div`
  display: flex;
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  margin: 5px 15px;
`;
const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  padding: 8px 10px;
  border-radius: 4px;
  max-width: 50%;
  color: #303030;
  font-size: 14px;
`;

export default function Header() {
  return (
    <div className='container-1'>
      <header className='pheader'>
       <img className='proimg' src="/whatsapp-clone/search-icon.svg"/>
       Aditya
      </header>
      <div className='msgcontainer' >
        {messagesList.map((messageData)=>
         <MessageDiv isYours={messageData.senderID==0}>
                  <Message isYours={messageData.senderID==0}>
                 {messageData.text}
                 </Message>
            </MessageDiv>)}
      </div>
    <div className='chatbox'>
      <div className='scontainer'> 
      <img className='emojimg' src="/whatsapp-clone/search-icon.svg"/><input className='searchinput' placeholder='Type a Message'/></div>
    </div>
        </div>
  )
}
