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
 
    return (
      <>
        <Button variant="outline-dark" onClick={() => {handleShow(); props.histGet(props.id)}}>History</Button>
        <Modal fullscreen={fullScreen} show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Account History</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {(props.hist.length > 0)
                ? <>
                {props.hist.map((hist, i) => {
                    return(
                    <Row key={i}>
                        <Col>{hist.type}</Col>
                        <Col>Date: {hist.date}</Col>
                        <Col>Name: {hist.name}</Col>
                        <Col>Amount: ${hist.amount}</Col>
                    </Row>
                    )
                })}
                </> 
                : <>
                <h1>Account History Will Appear Here</h1>
                </>
                }
            
            </Modal.Body>
          </Modal>
      </>
    );
  }
  
  export default History;