import React from 'react'
import { useState } from 'react';
import { Button } from 'bootstrap';
function Alert(props) {
    const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="primary" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{props.heading}</Alert.Heading>
        <p>
        {props.message}
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}


export default Alert