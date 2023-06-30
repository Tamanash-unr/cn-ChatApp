import { useState, useEffect } from 'react';
import contactList from '../DummyData/dummyContacts.json';
import conversationList from '../DummyData/dummyConversations.json';
import './App.css';
import Conversations from './Conversations';
import MessageContainer from './MessageContainer';
import NewConversation from './NewConversation';

function App() {
  const loggedInUser = "myUser";
  const [contacts, setContacts] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [currentConversationId, setCurrentConversationId] = useState("");
  const [addingConversation, setAddingConversation] = useState(false);

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

  function updateConversationMessages(conversationId, message){
    const conversationIndex = conversations.map((conv) => conv.conversationId).indexOf(conversationId);

    let updatedConversation = [...conversations];
    updatedConversation[conversationIndex].messages.push(message);

    console.log(updatedConversation)

    setConversations(updatedConversation);
  }

  function handleUpdateConversation(newConversation){
    let updatedConversation = [...conversations];
    const conversationIndex = updatedConversation.map((conv) => conv.contactId).indexOf(newConversation.contactId);

    if(conversationIndex === -1){
      updatedConversation.push(newConversation);
      setConversations(updatedConversation);
    } else {
      setCurrentConversationId(updatedConversation[conversationIndex].conversationId);
    }

    setAddingConversation(false);
  }

  return (
    <div className="main-container">
        {addingConversation && <NewConversation 
                                  contacts={contacts} 
                                  currentUser={loggedInUser} 
                                  showNewConvDialog={setAddingConversation}
                                  updateConversation={handleUpdateConversation}
                                />
        }

        <Conversations 
          conversationData={conversations}
          currentUser={loggedInUser} 
          getUserData={getUserData} 
          updateConversationId={updateCurrentConversationId} 
          showNewConvDialog={setAddingConversation} 
        />

        <MessageContainer 
          getConversationData={getConversationData} 
          currentUser={loggedInUser} 
          getUserData={getUserData} 
          onSend={updateConversationMessages} 
        />
    </div>
  );
}

export default App;
