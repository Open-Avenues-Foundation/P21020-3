import React from 'react'


const Search = (props) => {
    let {setSearchTerm, searchTerm, searchParam, setSearchParam} = props
     return(
        <div className="container">
            <p>Search for Customer By:</p>
            <select name="customeridentifier" id="customeridentifier" value={searchParam} onChange={event => {
                setSearchParam(event.target.value)
            }}>
                <option value="id">ID</option>
                <option value="firstName">First Name</option>
                <option value="lastName">Last Name</option>
                <option value="email">Email Address</option>
                <option value="phoneNumber">Phone Number</option>
                <option value="city">City</option>
                <option value="state">State</option>
            </select>
            <input type="text" className="searchbar" name="searchbar" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
         
        </div>
    )
}


export default Search