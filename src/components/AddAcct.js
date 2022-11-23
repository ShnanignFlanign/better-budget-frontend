import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddAcct = (props) => {
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
        props.acctPost(e)
        setForm({
          name: '',
          balance: ''
        })
        handleClose()
    }
    return( 
<>
      <Button variant="primary" onClick={handleShow}>
        Add Account
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Account Name: </label>
                <input type="text" id="name" name="name" onChange={handleChange}/>
                <label htmlFor="balance">Balance: </label>
                <input type="balance" id="balance" name="balance" onChange={handleChange}/>
                <input type="submit" value="Add Account" />
            </form>
        </Modal.Body>
      </Modal>
    </>
    )

}

export default AddAcct