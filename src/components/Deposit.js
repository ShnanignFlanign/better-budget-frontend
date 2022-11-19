import React, { useState } from 'react';
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Deposit = (props) => {
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
        <Button variant="outline-dark" onClick={() => {handleShow(); props.depsGet(props.id)}}>Deposits</Button>
          <Modal fullscreen={fullScreen} show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Deposits</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.deps.map((dep, i) => {
                    return(
                    <Row key={dep.id}>
                        <Col>Date: {dep.date}</Col>
                        <Col>Name: {dep.name}</Col>
                        <Col>Amount: ${dep.amount}</Col>
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
                <Button>Add Deposit</Button>
            </Modal.Footer>
          </Modal>
      </>
    );
  }
  
  export default Deposit;