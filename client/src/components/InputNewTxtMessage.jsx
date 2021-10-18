import React, {useState} from 'react'
import axios from 'axios'


const NewMsg = (props) => {
    const {setMessageAdded} = props

    const [newMessage, setNewMessage] = useState({
        to: '',
        from: '',
        body: '',
    })

const addNewMessage = async (event) => {
    event.preventDefault()
    try {
        const response = await axios.post('http://localhost:7000/newmessage', newMessage)
       setMessageAdded(true)
        return response
    } catch(error) {
        return error
    }
}


return (
        <div className="customerinput">
            <form action="">
                <label htmlFor="to">Recipient:</label>
                    <input type="text" name="to" id="to" value={newMessage.to} onChange={(event) => setNewMessage({to: event.target.value})} required />
                <label htmlFor="from">From:</label>
                    <input type="text" name="from" id="from" value={newMessage.from} onChange={(event) => setNewMessage({...newMessage, from: event.target.value})} required />  
                <label htmlFor="body">Body:</label>
                    <input type="text" name="body" id="body" value={newMessage.body} onChange={(event) => setNewMessage({...newMessage, body: event.target.value})} required /> 
                <button variant="primary" size="lg" className="addmessage" onClick={(event) => addNewMessage(event)}>Create New Message</button>
            </form>
        </div>
    )  
  }

  export default NewMsg

