import './subcss.css';
import React from 'react'
import { contactList } from "../mockdata";


const Contacts =(props)=>{

  const {userData, setChat} = props;
    return (<div onClick={() => setChat(userData)} className='contactItem'><img className='proimg' src={userData.profilePic}/>
            <div>
                 <div className='contactName'>{userData.name}</div>
                 <div className='msgText'>{userData.lastText}</div>
            </div>
             <span className='msgTime'>{userData.lastTextTime}</span>    
         </div>);
};


export default function (props) {
  return (
    <div className='container'>
        <div className='proinfo'><img className='proimg' src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F359168.jpg&imgrefurl=https%3A%2F%2Fwallpaperaccess.com%2Fbeautiful-scenery&tbnid=MPWqWA-UifMdyM&vet=12ahUKEwiW2aybgYr3AhVoktgFHe1mBggQMygCegUIARDlAQ..i&docid=5kzh-6JdCAKs6M&w=1600&h=873&q=beautiful%20scenery&ved=2ahUKEwiW2aybgYr3AhVoktgFHe1mBggQMygCegUIARDlAQ'/>
        </div>
      <section className='sbox'><div className='scontainer'> <img src="/whatsapp-clone/search-icon.svg" /><input className='searchinput' placeholder='Search or start chat'/></div></section>
       {contactList.map((userData)=>(<Contacts userData = {userData} setChat = {props.setChat}/>))}
    </div>
  )
}
