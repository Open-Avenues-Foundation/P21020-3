import React, {useState} from 'react'
import axios from 'axios';


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
                <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" id="lname" value={newUser.lastName} onChange={(event) => setNewUser({...newUser, lastName: event.target.value})} required />  
                <label htmlFor="email">Email Address:</label>
                    <input type="text" name="email" id="email" value={newUser.email} onChange={(event) => setNewUser({...newUser, email: event.target.value})} required /> 
                <button variant="primary" size="lg" className="addcustomer" onClick={(event) => addNewUser(event)}>Create New Customer</button>
            </form>
        </div>
    )  
  }


