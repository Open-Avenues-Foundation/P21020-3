import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        fetchCustomers()
    }, [])

    const fetchCustomers = async() => {
        let { data } = await axios.get('http://localhost:3000/customers')

        setCustomers(data)
    }

    return(
        <div className="container">
            <p>Search for Customer By:</p>
            <select name="customeridentifier" id="customeridentifier">
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="email">Email Address</option>
                <option value="phoneNumber">Phone Number</option>
                <option value="city">City</option>
                <option value="state">State</option>
                <option value="lastOrderPrice">Last Order Date</option>
                <option value="lastOrderDate">Last Order Price</option>
            </select>
            <input type="text" className="searchbar" name="searchbar" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
            {
                customers.filter(customer => customer.firstname.toLowerCase().includes(searchTerm.toLowerCase()).map(customer => {
                    return(<tbody>{customer}</tbody>)
                }))
            }
        </div>
    )
}


export default Search