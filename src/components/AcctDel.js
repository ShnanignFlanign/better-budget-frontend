import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const AcctDel = (props) => {
    // START MODAL STATE //
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // END MODAL STATE // 


    const handleSubmit = (e) => {
        e.preventDefault()
        props.acctDel(e, props.id)
        handleClose()
    }
    return( 
<>
      <Button variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3>Delete this account?</h3>
        <ButtonGroup>
                <Button variant="outline-danger" onClick={handleClose}>Cancel</Button>
                <Button variant="outline-danger" onClick={handleSubmit}>Delete</Button>
              </ButtonGroup>
            </Modal.Body>
      </Modal>
    </>
    )
}

export default AcctDel;