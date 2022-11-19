import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Deposit = (props) => {
    // START MODAL STATE //
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // END MODAL STATE // 
  
    // START PROP HANDLE STATE //
  
      //NEED EDIT ACCT SUBMIT HANDLER//
      //NEED DELETE ACCT SUBMIT HANDLER// 
      
  
    // END PROP HANDLE STATE //
    return (
      <>
        <Button variant="outline-dark" onClick={() => {handleShow(); props.depsGet(props.id)}}>Deposits</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Deposits</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.deps.map((dep, i) => {
                    return(
                    <Row key={dep.id}>
                        <Col>Name: {dep.name}</Col>
                        <Col>Amount: ${dep.amount}</Col>
                        <Col>Date: {dep.date}</Col>
                        <Col><Button variant="outline-danger">Edit</Button></Col>
                        <Col><Button variant="outline-danger">Delete</Button></Col>
                    </Row>
                    )
                })}
                
            </Modal.Body>
            <Modal.Footer>
                <Button>Add Deposit</Button>
            </Modal.Footer>
          </Modal>
      </>
    );
  }
  
  export default Deposit;