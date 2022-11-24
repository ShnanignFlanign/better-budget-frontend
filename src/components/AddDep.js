import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

const AddDep = (props) => {
    // START MODAL STATE //
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // END MODAL STATE // 

    const emptyForm = {name: '', balance: ''}
    const [form, setForm] = useState(emptyForm)

    const handleChange = (e) => {
        setForm((prev) => ({...form, [e.target.name]: e.target.value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.depPost(e, props.id)
        setForm({
          name: '',
          amount: ''
        })
        handleClose()
    }
    return( 
<>
      <Button variant="primary" onClick={handleShow}>
        Add Deposit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label htmlFor="name">Name: </Form.Label>
                <Form.Control type="text" id="name" name="name" onChange={handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="amount">Amount: </Form.Label>
                <Form.Control type="amount" id="amount" name="amount" onChange={handleChange}/>
              </Form.Group>
              <Button variant="primary" type="submit">Confirm</Button>
            </Form>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default AddDep