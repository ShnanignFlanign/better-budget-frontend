import React, { useState } from 'react';
import { Button, ButtonGroup, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Account = (props) => {
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
    <Card size="md" >
        <Card.Title>Account Name</Card.Title>
        
        <Card.Body>
          <Row>
            <Col>Balance:</Col>
            <Col>$$$$$</Col>
            
          </Row>
          
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <ButtonGroup className="me2">
                <Button variant="outline-dark">History</Button>
                <Button variant="outline-dark">Deposits</Button>
                <Button variant="outline-dark">Transactions</Button> 
              </ButtonGroup>
            </Col>
              
            <Col>
              <ButtonGroup>
                <Button variant="outline-danger" onClick={handleShow}>Edit</Button>
                <Button variant="outline-danger">Delete</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Card.Footer>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Future Edit Form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>Form Here</ListGroup.Item>
                    <ListGroup.Item>For Editing Account Info</ListGroup.Item>
                </ListGroup>

            </Modal.Body>
            <Modal.Footer>
              
            </Modal.Footer>
        </Modal>
      </Card>
    </>
  );
}

export default Account;