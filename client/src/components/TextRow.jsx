import React from 'react'

const TextRow = (props) => {
  const {text} = props

  return (
    <tr>
      <td>{text.id}</td>
      <td>{text.messageRecipient}</td>
      <td>{text.messageBody}</td>
      <td>{text.messageStatus}</td>
    </tr>
  )
}

export default TextRow