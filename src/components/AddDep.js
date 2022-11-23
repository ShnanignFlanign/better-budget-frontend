import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

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
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" onChange={handleChange}/>
                <label htmlFor="amount">Amount: </label>
                <input type="amount" id="amount" name="amount" onChange={handleChange}/>
                <input type="submit" value="Confirm" />
            </form>
        </Modal.Body>
      </Modal>
    </>
    )
}

export default AddDep