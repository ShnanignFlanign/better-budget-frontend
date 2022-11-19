import React, { useState } from 'react';
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Transaction = (props) => {
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
        <Button variant="outline-dark" onClick={() => {handleShow(); props.transGet(props.id)}}>Transactions</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Transactions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>Name: """""</Col>
                    <Col>Amount: $$$ </Col>
                    <Col>Category: """"</Col>
                    <Col>Date: 2/2/2</Col>
                    <Col>Description: """"</Col>
                    <Col><Button variant="outline-danger">Edit Form</Button></Col>
                    <Col><Button variant="outline-danger">Delete Form</Button></Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup>
                    <Button>Add Transaction</Button>
                </ButtonGroup>
            </Modal.Footer>
          </Modal>
      </>
    );
  }
  
  export default Transaction;