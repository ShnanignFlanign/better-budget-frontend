import React, { useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const Account = (props) => {
  // START MODAL STATE //
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // END MODAL STATE // 

  // START PROP HANDLE STATE //
//   const emptyForm = {email: '', password: ''}
//     const [form, setForm] = useState(emptyForm)

//     const handleChange = (e) => {
//       setForm((prev) => ({...form, [e.target.name]: e.target.value}))
//     }

//     const handleSubmit = (e) => {
//       e.preventDefault()
//       props.signIn(e)
//       setForm({
//         email: '',
//         password: ''
//       })
//       handleClose()
//     }
  // END PROP HANDLE STATE //
  return (
    <>
    <Card>
        <Card.Title>Account Name</Card.Title>
        <Card.Subtitle>Balance</Card.Subtitle>
        
        <Card.Body>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>
        </Card.Body>
        <Card.Footer>
            <Button variant="primary">History</Button>
            <Button variant="primary">Deposits</Button>
            <Button variant="primary">Transactions</Button> 
        </Card.Footer>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Account Name</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup variant="flush">
                    <ListGroup.Item>Name:</ListGroup.Item>
                    <ListGroup.Item>Balance:</ListGroup.Item>
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary">Edit</Button>
                <Button variant="primary">Delete</Button>
            </Modal.Footer>
        </Modal>
      </Card>
    </>
  );
}

export default Account;