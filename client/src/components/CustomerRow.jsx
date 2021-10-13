import React from 'react'

const CustomerRow = (props) => {
  const {customer} = props

  return (
    <tr>
      <td>{customer.id}</td>
      <td>{customer.firstName}</td>
      <td>{customer.lastName}</td>
      <td>{customer.email}</td>
      <td>{customer.phoneNumber}</td>
      <td>{customer.city}</td>
      <td>{customer.state}</td>
      <td>{customer.lastOrderDate}</td>
      <td>{customer.lastOrderPrice}</td>
    </tr>
  )
}

export default CustomerRow