import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

const AddTrans = (props) => {
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
        props.transPost(e, props.id)
        setForm({
          name: '',
          amount: '',
          category: '',
          description: ''
        })
        handleClose()
    }
    return( 
<>
      <Button variant="primary" onClick={handleShow}>
        Add Transaction
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Transaction</Modal.Title>
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
              <Form.Group>
                <Form.Label htmlFor="category">Category: </Form.Label>
                <Form.Select htmlFor='category' id="category" name="category" onChange={handleChange}>
                    <option>Food</option>
                    <option>Apparel</option>
                    <option>Bill - Utilities</option>
                    <option>Bill - Entertainment</option>
                    <option>Emergency</option>
                    <option>Other</option>
                </Form.Select>
              </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="description">Description: </Form.Label>
                  <Form.Control as="textarea" type="description" id="description" name="description"/>
                </Form.Group>
                <Button variant="primary" type="submit">Confirm</Button>
            </Form>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default AddTrans