import NewConversationCard from './NewConversationCard';
import './NewConversation.css'

// ---- Component for adding/starting a new Conversation ----

const NewConversation = (props) => {
    const { contacts, currentUser, showNewConvDialog, updateConversation } = props;

    return (
        <div className='modal' style={{display: 'block' }}>
            <div className="modal-content">
                <div className="modal-heading">
                    <h2>New Conversation</h2>
                    <i className='fa fa-times-circle' onClick={() => showNewConvDialog(false)}></i>
                </div>
                {contacts.map((contact)=>{
                    return <NewConversationCard
                                key={contact.id}
                                userData={contact}
                                currentUser={currentUser}
                                updateConversation={updateConversation}
                            />
                })}
            </div>
        </div>
    );
}

export default NewConversation;