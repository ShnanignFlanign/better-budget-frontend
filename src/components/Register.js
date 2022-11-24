import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

const Register = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //START FORM STATE
  const emptyForm = {username: '', email: '', password: ''}
  const [form, setForm] = useState(emptyForm)

  const handleChange = (e) => {
    setForm((prev) => ({...form, [e.target.name]: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.userReg(e)
    setForm({
      username: '',
      email: '',
      password: ''
    })
    handleClose()
  }
// END USER LOGIN STATE //

  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="username">Username: </Form.Label>
              <Form.Control type="text" id="username" name="username" placeholder="Create a Username" onChange={handleChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email: </Form.Label>
              <Form.Control type="text" id="email" name="email" placeholder="Enter Email" onChange={handleChange}/>
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password: </Form.Label>
              <Form.Control type="password" id="password" name="password" placeholder="Enter a good password" onChange={handleChange}/>
            </Form.Group>
              <Button variant="primary" type="submit">Sign In</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Register;

