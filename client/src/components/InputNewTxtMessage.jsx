import React, { useState } from 'react'
import axios from 'axios'
import './overall.css'

const NewMsg = (props) => {
    const {setMessageAdded} = props

    const [newMessage, setNewMessage] = useState({
        to: '',
        from: '',
        body: '',
    })

const addNewMessage = async (event) => {
    event.preventDefault()
    console.log(newMessage)
    try {
        const response = await axios.post('http://localhost:7000/newmessage', newMessage)
       setMessageAdded(true)
        return response
    } catch(error) {
        return error
    }
}

return (
        <div class="textinput" className="textinput">
            <h3>Send a Text!</h3>
            <form action="">
                <label htmlFor="to">Recipient:</label>
                    <input type="tel" name="to" id="to" value={newMessage.to} onChange={(event) => setNewMessage({...newMessage, to: event.target.value})} required /><br />
                <label htmlFor="body">body:</label>
                    <input type="text" name="body" id="body" value={newMessage.body} onChange={(event) => setNewMessage({...newMessage, body: event.target.value})} required /><br />
                
                <button variant="primary" size="lg" className="sendmessage" onClick={(event) => addNewMessage(event)}>Send New Text</button>
            </form>
        </div>
    )  
  }

export default NewMsg


