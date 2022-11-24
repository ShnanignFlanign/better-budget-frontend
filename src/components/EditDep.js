import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

const EditDep = (props) => {
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
        props.depPut(e, props.aid, props.id)
        setForm({
          name: '',
          amount: '',
        })
        handleClose()
    }
    return( 
<>
      <Button variant="outline-danger" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor="name">Name: </Form.Label>
                <Form.Control type="text" id="name" name="name" onChange={handleChange} placeholder={props.dep.name} />
            </Form.Group>
            <Form.Group>
                <Form.Label htmlFor="amount">Amount: </Form.Label>
                <Form.Control type="amount" id="amount" name="amount" onChange={handleChange} placeholder={props.dep.amount} />
            </Form.Group>
            <Button variant="primary" type="submit">Confirm</Button>
            </Form>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default EditDep