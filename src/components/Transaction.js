import React, { useState } from 'react';
import { Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import AddTrans from './AddTrans';
import EditTrans from './EditTrans';

const Transaction = (props) => {
    // START MODAL STATE //
    const [fullScreen, setFullScreen] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setFullScreen(true);
        setShow(true);
    }

    return (
      <>
        <Button variant="outline-dark" onClick={() => {handleShow(); props.transGet(props.id)}}>Transactions</Button>
          <Modal show={show} fullscreen={fullScreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Transactions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {(props.trans.length > 0)
                ? <> 
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
                                <EditTrans tran={tran} id={tran.id} aid={props.id} transPut={props.transPut}></EditTrans>
                                <Button variant="outline-danger">Delete</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    )
                })}
                </>
                : <>
                <h1>No Account Withdrawals</h1>
                </>
                }
                
                
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup>
                    <AddTrans id={props.id} transPost={props.transPost}/>
                </ButtonGroup>
            </Modal.Footer>
          </Modal>
      </>
    );
  }
  
  export default Transaction;