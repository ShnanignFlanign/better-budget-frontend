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
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" onChange={handleChange}/>
                <label htmlFor="amount">Amount: </label>
                <input type="amount" id="amount" name="amount" onChange={handleChange}/>
                <label htmlFor="category">Category: </label>
                <Form.Select htmlFor='category' id="category" name="category" onChange={handleChange}>
                    <option>Food</option>
                    <option>Apparel</option>
                    <option>Bill - Utilities</option>
                    <option>Bill - Entertainment</option>
                    <option>Emergency</option>
                    <option>Other</option>
                </Form.Select>
                <label htmlFor="description">Description: </label>
                <textarea type="description" id="description" name="description"></textarea>
                <input type="submit" value="Confirm" />
            </form>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default AddTrans