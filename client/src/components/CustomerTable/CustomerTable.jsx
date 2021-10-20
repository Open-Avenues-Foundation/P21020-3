import React from "react"
import { Spinner, Table } from 'react-bootstrap'
import CustomerRow from '../CustomerRow'
import './CustomerTable.css'

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
        <td colspan="9">
          There is nothing to display, please add some customers
        </td>
      </tr>
    )
  }
    return (
      <>
      {customers.map(customer => {
        return (<CustomerRow customer={customer}/>)
      })} 
      </>
    )
  }

  return (
    <div class="customer-table">
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
          <th>Last Order Date</th>
          <th>Last Order Price</th>
        </tr>
      </thead>
      <tbody>
        {displayCustomers()}
      </tbody>
    </Table>
    </div>
      )
}

export default CustomerTable