import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

const CSVUpload = (props) => {
    const [upload, setUpload] = useState(null)
    const { setUserAdded } = props

    const submitForm = () => {
        console.log(upload)
        const formData = new FormData();
        formData.append("file", upload);
      
        axios({
            method: 'post',
            url: 'http://localhost:7000/customerUploads',
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
          .then((res) => {
            setUserAdded(true)
            alert("File Upload success");
          })
          .catch((err) => alert("Error with Upload"));
      };
    
    return(
        <>
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload CSV</Form.Label>
            <Form.Control type="file" onChange={event => setUpload(event.target.files[0])} />
            <Button variant="primary" onClick={submitForm}>Upload</Button>{' '}
        </Form.Group>
        </>)

}

export default CSVUpload