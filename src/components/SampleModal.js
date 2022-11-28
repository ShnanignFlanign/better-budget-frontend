import React, { useState } from 'react';
import {Button, Modal, Table} from 'react-bootstrap'

const SampleModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const rows = [0,0,0,0,0]

    return (
        <>
            <Button variant="outline-dark" onClick={handleShow}>Account Details</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Account Transactions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Table striped bordered hover responsive="md" size="sm"> 
                    <thead>
                        <tr>
                            <td>Date</td>
                            <td>Amount</td>
                            <td>Name</td>
                            <td>Category</td>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row, i) => {
                            return(
                                <tr key={i}>
                                <td>1/1/11</td>
                                <td>$$$$</td>
                                <td>MyExpense</td>
                                <td>Food</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SampleModal