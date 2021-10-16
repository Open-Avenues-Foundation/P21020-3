import React from "react"
import { Spinner, Table } from 'react-bootstrap'
import TextRow from '../TextRow'

const TextTable = props => {
  const {texts, isLoading} = props

  const displayTextMessage = () => {
    if (isLoading) {
      return (
        <tr>
          <td colspan="8">
            <Spinner animation="border" variant="info" />
          </td>
        </tr>
      )
    }

    if (texts.length === 0) {
    return (
      <tr>
        <td colspan="9">
          There is nothing to display, please add a text message.
        </td>
      </tr>
    )
  }
    return (
      <>
      {texts.map(text => {
        return (<TextRow text={text}/>)
      })} 
      </>
    )
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Text To</th>
          <th>Text From</th>
          <th>Text Body</th>
        </tr>
      </thead>
      <tbody>
        {/* {displayTexts()} */}
      </tbody>
    </Table>
      )
}
export default TextTable