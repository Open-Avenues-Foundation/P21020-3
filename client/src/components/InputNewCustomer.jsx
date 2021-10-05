import React from "react"

const NewCustomer = () => {
    return (
        <div className="customerinput">
            <form action="">
                <label htmlFor="firstname">First Name:</label>
                    <input type="text" name="fname" id="fname" required />
                <label htmlFor="lastname">Last Name:</label>
                    <input type="text" name="lname" id="lname" required />  
                <label htmlFor="email">Email Address:</label>
                    <input type="text" name="email" id="email" required />
                <label htmlFor="phonenumber">Phone Number:</label>
                    <input type="text" name="phonenumber" id="phonenumber" required />
                <label htmlFor="city">City:</label>
                    <input type="text" name="city" id="city" required />  
                <label htmlFor="state">State:</label>
                    <input type="text" name="state" id="state" required />
                <button className="addcustomer">Create New Customer</button>
            </form>
        </div>
    )  
  }
  
  export default NewCustomer