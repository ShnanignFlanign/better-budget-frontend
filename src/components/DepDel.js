import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const DepDel = (props) => {
    // START MODAL STATE //
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // END MODAL STATE // 


    const handleSubmit = (e) => {
        console.log("handle submit was hit!")
        handleClose()
    }
    return( 
<>
      <Button variant="outline-danger" onClick={handleShow}>
        Delete
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3>Delete this deposit?</h3>
        <ButtonGroup>
                <Button variant="outline-danger" onClick={handleClose}>Cancel</Button>
                <Button variant="outline-danger" onClick={handleSubmit}>Delete</Button>
              </ButtonGroup>
            </Modal.Body>
      </Modal>
    </>
    )
}

export default DepDel;