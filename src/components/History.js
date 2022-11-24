import React, { useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

const History = (props) => {
    // START MODAL STATE //
    const [fullScreen, setFullScreen] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setFullScreen(true);
        setShow(true);
    }
 
    return (
      <>
        <Button variant="outline-dark" onClick={() => {handleShow(); props.histGet(props.id)}}>History</Button>
        <Modal fullscreen={fullScreen} show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Account History</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {(props.hist.length > 0)
                ? <>
                <Table striped bordered hover responsive="md" size="sm">
                    <thead>
                    <tr>
                        <td>Type</td>
                        <td>Date</td>
                        <td>Name</td>
                        <td>Amount</td>
                    </tr>
                    </thead>
                    <tbody>
                {props.hist.slice(0).reverse().map((hist, i) => {
                    return(
                    <tr key={i}>
                        {(hist.type === "deposit")
                        ?<td>{hist.type.toUpperCase()}</td> :<td>WITHDRAWAL</td>}
                        <td>{hist.date}</td>
                        <td>{hist.name}</td>
                        <td>${hist.amount}</td>
                    </tr>
                    )
                })}
                    </tbody>
                </Table>

                
                </> 
                : <>
                <h1>Account History Will Appear Here</h1>
                </>
                }
            
            </Modal.Body>
          </Modal>
      </>
    );
  }
  
  export default History;