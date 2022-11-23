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
  
  // START crud methods //

  const depsGet = (id) => {
    const url = process.env.REACT_APP_BACKEND_URL  + "/portal/accounts/" + id + "/deposits"
    fetch(url, {
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
  } // END TRANSGET() //

  const histGet = (id) => {
    const url = process.env.REACT_APP_BACKEND_URL  + "/portal/accounts/" + id + "/history"
      fetch(url, {
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
        console.log(data.data.History)
          setHist(data.data.History)
      })
  }// END HISTGET() //

  const transPost = async(e, id) => {
      e.preventDefault()
      console.log('Transaction Post')
        console.log(e.target.name.value, e.target.amount.value)
        const url = process.env.REACT_APP_BACKEND_URL + '/portal/accounts/' + id + '/transactions'
        const newTransBody = {
          name: e.target.name.value,
          amount: e.target.amount.value,
          category: e.target.category.value,
          description: e.target.description.value
        }
        try {
          await fetch(url, {
            method: 'POST',
            body: JSON.stringify(newTransBody),
            credentials: "include",
            headers: {
              'Content-Type': 'application/json'
            }          
          })
          .then(res => {
            if(res.status === 201) {
              return res.json()
            } else {
              console.log('RES STATUS NOT 200')
              return []
            }
          }).then(data => {
              console.log(data.data)
              // props.acctsGet()
          })     
        }
        catch (err) {
          console.log('Error => ', err);
        }
  }

  const depPost = async (e, id) => {
    e.preventDefault()
    console.log('Deposit Post')
      console.log(e.target.name.value, e.target.amount.value)
      const url = process.env.REACT_APP_BACKEND_URL + '/portal/accounts/' + id + '/deposits'
      const newDepBody = {
        name: e.target.name.value,
        amount: e.target.amount.value
      }
      try {
        await fetch(url, {
          method: 'POST',
          body: JSON.stringify(newDepBody),
          credentials: "include",
          headers: {
            'Content-Type': 'application/json'
          }          
        })
        .then(res => {
          if(res.status === 201) {
            return res.json()
          } else {
            console.log('RES STATUS NOT 200')
            return []
          }
        }).then(data => {
            console.log(data.data)
            // props.acctsGet()
        })     
      }
      catch (err) {
        console.log('Error => ', err);
      }
  }

  const transPut = async(e, aid, id) => {
    e.preventDefault()
      console.log('Transaction Put')
        console.log(e.target.name.value, e.target.amount.value)
        const url = process.env.REACT_APP_BACKEND_URL + '/portal/accounts/' + aid + '/transactions/' + id
        const editedTransBody = {
          name: (e.target.name.value)
            ? e.target.name.value : e.target.name.placeholder,
          amount: (e.target.amount.value)
            ? e.target.amount.value : e.target.amount.placeholder,
          category: (e.target.category.value)
            ? e.target.category.value : e.target.category.placeholder,
          description: (e.target.description.value)
            ? e.target.description.value : e.target.description.placeholder
        }
        console.log(editedTransBody)
        try {
          await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(editedTransBody),
            credentials: "include",
            headers: {
              'Content-Type': 'application/json'
            }          
          })
          .then(res => {
            if(res.status === 200) {
              return res.json()
            } else {
              console.log('RES STATUS NOT 200')
              return []
            }
          }).then(data => {
              console.log(data.data)
              // props.acctsGet()
          })     
        }
        catch (err) {
          console.log('Error => ', err);
        }
  }
  const depPut = () => {}

  const transDel = () => {}
  const depDel = () => {}

  // need to add PUT ADD and DELETE routes for deposits and transactions here //


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
                <Deposit id={props.acct.id} deps={deps} depPost={depPost} depsGet={depsGet}/>
                <Transaction id={props.acct.id} trans={trans} transPost={transPost} transPut={transPut} transGet={transGet}/>
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