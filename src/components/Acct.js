import React, { useState } from 'react';
import { Button, ButtonGroup, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Deposit from './Deposit';
import Transaction from './Transaction';
import History from './History';


const Account = (props) => {
  // START MODAL STATE //
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // END MODAL STATE // 
  const [trans, setTrans] = useState([])
  const [deps, setDeps] = useState([])
  const [hist, setHist] = useState([])
  // START ACCT HANDLE STATE //

  const depsGet = (id) => {
    const url = process.env.REACT_APP_BACKEND_URL  + "/portal/accounts/" + id + "/deposits"
    fetch(url, {
      // withCredentials: true,
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
        if(res.status === 200) {
        return res.json()
        } else {
        return []
        }
    }).then(data => {
        console.log(data.data)
        setDeps(data.data)
    })
  } // END DEPSGET() // 
  const transGet = (id) => {
      const url = process.env.REACT_APP_BACKEND_URL  + "/portal/accounts/" + id + "/transactions"
      fetch(url, {
        // withCredentials: true,
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
          if(res.status === 200) {
          return res.json()
          } else {
          return []
          }
      }).then(data => {
          console.log(data.data)
          setTrans(data.data)
      })
  }
  const histGet = (id) => {
    const url = process.env.REACT_APP_BACKEND_URL  + "/portal/accounts/" + id + "/history"
      fetch(url, {
        // withCredentials: true,
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
          if(res.status === 200) {
          return res.json()
          } else {
          return []
          }
      }).then(data => {
          setHist(data.data)
      })
  }
    

  // END PROP HANDLE STATE //
  return (
    <>
    <Card size="md" >
        <Card.Title>Account Name: {props.acct.name} </Card.Title>
        
        <Card.Body>
          <Row>
            <Col>Balance: ${props.acct.balance} </Col>
            <Col></Col>
            
          </Row>
          
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col>
              <ButtonGroup className="me2">
                <History id={props.acct.id} hist={hist} histGet={histGet}/>
                <Deposit id={props.acct.id} deps={deps} depsGet={depsGet}/>
                <Transaction id={props.acct.id} trans={trans} transGet={transGet}/>
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