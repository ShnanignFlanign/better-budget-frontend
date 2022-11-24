import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Signin = (props) => {
  // START MODAL STATE //
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // END MODAL STATE // 

  // START USERLOGIN STATE //
  const emptyForm = {email: '', password: ''}
    const [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
      setForm((prev) => ({...form, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      props.signIn(e)
      setForm({
        email: '',
        password: ''
      })
      handleClose()
    }
  // END USER LOGIN STATE //
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="email">Email: </Form.Label>
                <Form.Control type="text" id="email" name="email" placeholder="Enter Email" onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="password">Password: </Form.Label>
                <Form.Control type="password" id="password" name="password" onChange={handleChange}/>
              </Form.Group>
                
                <Button variant="primary" type="submit">Sign In</Button>
            </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signin;