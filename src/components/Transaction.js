import React, { useState } from 'react';
import { Button, ButtonGroup, Table } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import AddTrans from './AddTrans';
import EditTrans from './EditTrans';
import TransDel from './TransDel';

const Transaction = (props) => {
    // START MODAL STATE //
    const [fullScreen, setFullScreen] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setFullScreen(true);
        setShow(true);
    }

    return (
      <>
        <Button variant="outline-dark" onClick={() => {handleShow(); props.transGet(props.id)}}>Transactions</Button>
          <Modal show={show} fullscreen={fullScreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Transactions</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {(props.trans.length > 0)
                ? <> 
                <Table striped bordered hover responsive="md" size="sm">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Options:</th>
                    </tr>
                    </thead>
                    <tbody>
                {props.trans.slice(0).reverse().map((tran, i) => {
                    return(
                    <tr key={tran.id}>
                        <td>{tran.date}</td>
                        <td>{tran.name}</td>
                        <td>${tran.amount} </td>
                        <td>{tran.category}</td>
                        <td>{tran.description}</td>
                        <td>
                            <ButtonGroup>
                                <EditTrans setShow={setShow} tran={tran} id={tran.id} aid={props.id} transPut={props.transPut}></EditTrans>
                                <TransDel transDel={props.transDel} id={tran.id} aid={props.id}/>
                            </ButtonGroup>
                        </td>
                    </tr>
                    )
                })}
                    </tbody>
                </Table>
                </>
                : <>
                <h1>No Account Withdrawals</h1>
                </>
                }
                
                
            </Modal.Body>
            <Modal.Footer>
                <ButtonGroup>
                    <AddTrans id={props.id} transPost={props.transPost}/>
                </ButtonGroup>
            </Modal.Footer>
          </Modal>
      </>
    );
  }
  
  export default Transaction;