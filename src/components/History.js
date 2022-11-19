import React, { useState } from 'react';
import { Button, ButtonGroup, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const History = (props) => {
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
        <Button variant="outline-dark" onClick={() => {handleShow(); props.histGet(props.id)}}>History</Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>History</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>Type: dep/trans</Col>
                    <Col>Amount: $$$ </Col>
                    <Col>Date: 2/2/2</Col>
                </Row>
            </Modal.Body>
          </Modal>
      </>
    );
  }
  
  export default History;