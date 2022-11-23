import React from 'react';
import { Form, Card, Button } from "react-bootstrap";
import Select from 'react-select'

function Forms() {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const handleFormSubmit=(e)=>{

  }
  
  return (

    <div  className="formData">
    <form  className="flex flex-col">
      <div style={{ display: "flex",justifyContent: "center" }}>
        <Card classname="my-3"style={{ width: "50%" }}>
          <Card.Header  as="h5">Create Interview</Card.Header>
          <Card.Body>
          
             <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <input
                className="form-control expandInputboxes"
                type="datetime-local"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <input
                className="form-control expandInputboxes"
                type="datetime-local"
               
              />
            </Form.Group>

            <label>Select Participants : </label>
            <Select isMulti closeMenuOnselect={true} className="basic-multi-select mb-3" 
            classNamePrefix="select" onSubmit={handleFormSubmit} options={options} />

            <Button classname="mb-2" type="submit" variant="primary">
              Submit
            </Button>
          </Card.Body>
        </Card>
      </div>
    </form> 
    
  </div>
  )
}

export default Forms