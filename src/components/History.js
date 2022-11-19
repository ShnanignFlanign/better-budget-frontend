import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const History = (props) => {
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
        <Button variant="outline-dark" onClick={() => {handleShow(); props.histGet(props.id)}}>History</Button>
        <Modal fullscreen={fullScreen} show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>History</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>Date: 2/2/2</Col>
                    <Col>Type: dep/trans</Col>
                    <Col>Name: """"</Col>
                    <Col>Amount: $$$ </Col>
                </Row>
            </Modal.Body>
          </Modal>
      </>
    );
  }
  
  export default History;