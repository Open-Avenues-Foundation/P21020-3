import React from 'react'

const NewMsg = () => {
        <div className="customerinput">
            <form action="">
                <label htmlFor="firstname">To:</label>
                    <input type="text" name="tofield" id="tofield" required /><br />
                <label htmlFor="lastname">Message Body:</label>
                    <input type="text" name="msgbody" id="msgbody" size="60" required />
                <button className="addcustomer">Create New Message</button>
            </form>
        </div>
}

export default NewMsg
