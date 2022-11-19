import React, { useState } from 'react';
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Transaction = (props) => {
    // START MODAL STATE //
    const [fullScreen, setFullScreen] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setFullScreen(true);
        setShow(true);
    }
    // END MODAL STATE // 
  
    // START PROP HANDLE STATE //
  
      //NEED EDIT ACCT SUBMIT HANDLER//
      //NEED DELETE ACCT SUBMIT HANDLER// 
      
  
    // END PROP HANDLE STATE //
    return (
      <>
        <Button variant="outline-dark" onClick={() => {handleShow(); props.transGet(props.id)}}>Transactions</Button>
          <Modal show={show} fullscreen={fullScreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Transactions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.trans.map((tran, i) => {
                    return(
                    <Row key={tran.id}>
                        <Col>Date: {tran.date}</Col>
                        <Col>Name: {tran.name}</Col>
                        <Col>Amount: ${tran.amount} </Col>
                        <Col>Category: {tran.category}</Col>
                        <Col>Description: {tran.description}</Col>
                        <Col>
                            <ButtonGroup>
                                <Button variant="outline-danger">Edit</Button>
                                <Button variant="outline-danger">Delete</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    )
                })}
                
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