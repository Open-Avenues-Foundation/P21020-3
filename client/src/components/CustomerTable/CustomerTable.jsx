import React from "react"
import { Table } from 'react-bootstrap'

const CustomerTable = () => {
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>motta@gmail.com</td>
          <td>(508) 476-3211</td>
          <td>Boston</td>
          <td>MA</td>
          <td>edit/delete</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Fox</td>
          <td>Mulder</td>
          <td>fmulder@gmail.com</td>
          <td>(508) 476-3211</td>
          <td>Boston</td>
          <td>MA</td>
          <td>edit/delete</td>
        </tr>
      </tbody>
    </Table>
      )
}

export default CustomerTable