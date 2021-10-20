import axios from "axios"
import React, { useState } from "react"
import './overall.css'


const NewCustomer = (props) => {
    const {setUserAdded} = props

    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        city: '',
        state: '',
        lastOrderDate: '',
        lastOrderPrice: ''
    })

const addNewUser = async (event) => {
    event.preventDefault()
    try {
        const response = await axios.post('http://localhost:7000/newCustomer', newUser)
        setUserAdded(true)
        return response
    } catch(error) {
        return error
    }
}

    return (
        <div className="customerinput">
            <h3>Input a New Customer</h3>
            <form action="">
                <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="fname" value={newUser.firstName} onChange={(event) => setNewUser({...newUser, firstName: event.target.value})} required />
                <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name="lastName" id="lname" value={newUser.lastName} onChange={(event) => setNewUser({...newUser, lastName: event.target.value})} required />  
                <label htmlFor="email">Email Address:</label>
                    <input type="text" name="email" id="email" value={newUser.email} onChange={(event) => setNewUser({...newUser, email: event.target.value})} required />
                <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="text" name="phoneNumber" id="phonenumber" value={newUser.phoneNumber} onChange={(event) => setNewUser({...newUser, phoneNumber: event.target.value})} required />
                <label htmlFor="city">City:</label>
                    <input type="text" name="city" id="city" value={newUser.city} onChange={(event) => setNewUser({...newUser, city: event.target.value})} required />  
                <label htmlFor="state">State:</label>
                    <input type="text" name="state" id="state" value={newUser.state} onChange={(event) => setNewUser({...newUser, state: event.target.value})} required />
                <label htmlFor="lastOrderDate">Last Order Date:</label>
                    <input type="text" name="lastOrderDate" id="lastOrderDate" value={newUser.lastOrderDate} onChange={(event) => setNewUser({...newUser, lastOrderDate: event.target.value})} required />
                <label htmlFor="lastOrderPrice">Last Order Price:</label>
                    <input type="text" name="lastOrderPrice" id="lastOrderPrice" value={newUser.lastOrderPrice} onChange={(event) => setNewUser({...newUser, lastOrderPrice: event.target.value})} required />
                <button variant="primary" size="lg" className="addcustomer" onClick={(event) => addNewUser(event)}>Create New Customer</button>
            </form>
        </div>
    )  
  }
  
  export default NewCustomer