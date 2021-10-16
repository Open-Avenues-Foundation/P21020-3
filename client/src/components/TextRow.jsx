import React from 'react'

const TextRow = (props) => {
  const {text} = props

  return (
    <tr>
      <td>{text.id}</td>
      <td>{text.to}</td>
      <td>{text.from}</td>
      <td>{text.body}</td>
    </tr>
  )
}

export default TextRow