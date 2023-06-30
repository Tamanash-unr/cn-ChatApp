import { useState, useEffect } from 'react';
import contactList from '../DummyData/dummyContacts.json';
import conversationList from '../DummyData/dummyConversations.json';
import './App.css';
import Conversations from './Conversations';
import MessageContainer from './MessageContainer';

function App() {
  const loggedInUser = "myUser";
  const [contacts, setContacts] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState("");

  useEffect(()=>{
    setContacts(contactList);
    setConversations(conversationList);
  },[]);
  
  function getUserData(userId){
    const userIndex = contacts.map(user => user.id).indexOf(userId);

    return contacts[userIndex];
  }

  function getConversationData(){
    const convIndex = conversations.map(conv => conv.conversationId).indexOf(currentConversationId);

    return conversations[convIndex];
  }

  function updateCurrentConversationId(id){
    setCurrentConversationId(id);
  }

  function updateConversation(conversationId, message){
    const conversationIndex = conversations.map((conv) => conv.conversationId).indexOf(conversationId);

    let updatedConversation = [...conversations];
    updatedConversation[conversationIndex].messages.push(message);

    console.log(updatedConversation)

    setConversations(updatedConversation);
  }

  return (
    <div className="main-container">
        <Conversations conversationData={conversations} currentUser={loggedInUser} getUserData={getUserData} updateConversationId={updateCurrentConversationId} />
        <MessageContainer getConversationData={getConversationData} currentUser={loggedInUser} getUserData={getUserData} onSend={updateConversation} />
    </div>
  );
}

export default App;
