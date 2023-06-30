import { useState, useEffect } from 'react';
import ConversationCard from './ConversationCard';
import './Conversations.css'

function Conversations (props) {
    const { conversationData, getUserData, updateConversationId, currentUser } = props;
    const [conversations, setConversations] = useState(props.conversationData);
    const contacts = conversationData.map((conv) => getUserData(conv.contactId));

    useEffect(() => {
        setConversations(conversationData);
     }, [conversationData]);

    function handleSearch(evt){
        let searchResults = [];

        if(evt.target.value != "" && evt.target.value.length > 2){
            contacts.forEach(element => {
                if(element.name.toLowerCase().includes(evt.target.value.toLowerCase())){
                    let result = conversations.find((conv) => conv.contactId === element.id);
                    if(!searchResults.includes(result)){
                        searchResults.push(result);
                    }
                }
            });

            setConversations(searchResults);
        } else {
            setConversations(conversationData);
        }
    }

    return (
    <div className="conversation-container">
        <div className='search'>
            <input type='text' placeholder='Search' onChange={handleSearch}/>
            <i className="fa fa-search search-icon"></i>
        </div>
        <div className='add-conversation'>
            <strong>CONVERSATIONS</strong>
            <img style={{cursor: 'pointer'}} width="35" height="35" src="https://img.icons8.com/pastel-glyph/64/ffffff/plus--v1.png" alt="plus--v1" onClick={() => console.log("New Conv")}/>
        </div>
        <div className='conversation-list'>
            {conversations.map((conversation) =>{ 
                return <ConversationCard key={conversation.conversationId} data={conversation} getUser={getUserData} updateConversationId={updateConversationId} currentUser={currentUser}/>
            })}
        </div>
    </div>
    );
}

export default Conversations;