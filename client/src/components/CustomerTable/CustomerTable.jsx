import React from "react"
import { Spinner, Table } from 'react-bootstrap'

const CustomerTable = props => {
  const {customers, isLoading} = props

  const displayCustomers = () => {
    if (isLoading) {
      return (
        <tr>
          <td colspan="8">
            <Spinner animation="border" variant="info" />
          </td>
        </tr>
      )
    }
    if (customers.length === 0) {
    return (
      <tr>
        <td colspan="8">
          There is nothing to display, please add some customers
        </td>
      </tr>
    )
  } else {
      return customers.map((customer, index) => {
        <tr>
          <td>{customer.id}</td>
          <td>{customer.firstName}</td>
          <td>{customer.lastName}</td>
          <td>{customer.email}</td>
          <td>{customer.phoneNumber}</td>
          <td>{customer.city}</td>
          <td>{customer.state}</td>
          <td>Delete</td>
        </tr>
      })
  }
}
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>E-mail</th>
          <th>Phone Number</th>
          <th>City</th>
          <th>State</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {displayCustomers()}
      </tbody>
    </Table>
      )
}

export default CustomerTable