import './ConversationCard.css'

function ConversationCard (props) {
    const { data, getUser, updateConversationId, currentUser } = props;

    const userData = getUser(data.contactId);

    function userImage(){
        if(userData.profilePic === "") {
            return "https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-user-avatar-icon-profile-silhouette-png-image_5173766.png";
        }

        return userData.profilePic;
    }

    function lastMessage(){
        let lastText = "";

        if(data.messages.length > 0){
            const message = data.messages[data.messages.length - 1];
            lastText = message.userId === currentUser ? "You: " + message.messageText : message.messageText;
        }

        return lastText;
    }

    return (
        <div className='conv-card-container' onClick={() => updateConversationId(data.conversationId)}>
            <img className="profile-pic"  width="100px" height="100px" src={userImage()} alt="..."/>
            <div className='conv-info'>
                <strong>{userData.name}</strong>
                <small>{lastMessage()}</small>
            </div>
        </div>
    )
}

export default ConversationCard;