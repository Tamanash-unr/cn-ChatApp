import { useState, useEffect } from 'react';
import Message from './Message';
import { userImage, getRandomId } from './';
import './MessageContainer.css'

function MessageContainer (props) {
    const { getConversationData, currentUser, getUserData, onSend } = props;
    const [conversationData, setConversationData] = useState();

    useEffect(()=>{
        setConversationData(getConversationData());
    },[getConversationData, conversationData])

    // Show Empty message Container if Conversation Data is Undefined
    if(conversationData === undefined){
        return (
            <div className="message-container"></div>
        );
    }

    // Get User Data for the contact in the Conversation
    const userData = getUserData(conversationData.contactId);

    // Handle when user sends a new text message in the coversation
    function handleSendData(evt){
        if(document.getElementById('message-input').value == ''){
            return;
        }

        let message = {
            id: getRandomId(10, 999),
            userId: currentUser,
            messageText: document.getElementById('message-input').value
        }

        document.getElementById('message-input').value = ''

        onSend(conversationData.conversationId, message);
    }

    return (
    <div className="message-container">
        <div className='message-container-info'>
            <img className="profile-pic" width="60px" height="60px" src={userImage(userData)} alt="..."/>
            <strong>{userData.name}</strong>
        </div>
        <div className='message-area'>
            {conversationData.messages.map((message) => {
                return <Message key={message.id} type={message.userId === currentUser ? "send" : "receive" } id={message.userId} content={message.messageText} getUserData={getUserData}/>
            })}
        </div>
        <div className='message-input'>
            <textarea id="message-input" placeholder='Type your Message Here...'/>
            <button onClick={handleSendData}>
                <i className='fa fa-paper-plane'/>
            </button>
        </div>
    </div>
    );
}

export default MessageContainer;