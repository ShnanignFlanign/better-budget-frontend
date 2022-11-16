import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" onChange={handleChange}/>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" onChange={handleChange}/>
                <input type="submit" value="Sign In" />
            </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signin;