import React, { useState } from 'react';
import { Button, ButtonGroup, Table, Modal } from 'react-bootstrap';
import AddDep from './AddDep'
import EditDep from './EditDep';
import DepDel from './DepDel';

const Deposit = (props) => {
    // START MODAL STATE //
    const [fullScreen, setFullScreen] = useState(false);
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setFullScreen(true);
        setShow(true);
    }

    return (
      <>
        <Button variant="outline-dark" onClick={() => {handleShow(); props.depsGet(props.id)}}>Deposits</Button>
          <Modal fullscreen={fullScreen} show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Deposits</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {(props.deps.length > 0) 
                ? <>
                <Table striped bordered hover responsive="md" size="sm">
                    <thead>
                    <tr>
                        <th>Date:</th>
                        <th>Name:</th>
                        <th>Amount:</th>
                        <th>Options:</th>
                    </tr>
                    </thead>
                    <tbody>
                {props.deps.slice(0).reverse().map((dep, i) => {
                    return(
                    <tr key={dep.id}>
                        <td>{dep.date}</td>
                        <td>{dep.name}</td>
                        <td>${dep.amount}</td>
                        <td>
                            <ButtonGroup>
                                <EditDep dep={dep} id={dep.id} aid={props.id} depPut={props.depPut}></EditDep>
                                <DepDel depDel={props.depDel} id={dep.id} aid={props.id} />
                            </ButtonGroup>
                        </td>
                    </tr>
                    )
                })}
                    </tbody>
                </Table>
                </>
                : <>
                <h1>No Deposits On This Account</h1>
                </>
            }
                
                
            </Modal.Body>
            <Modal.Footer>
                <AddDep id={props.id} depPost={props.depPost} >Add Deposit</AddDep>
            </Modal.Footer>
          </Modal>
      </>
    );
  }
  
  export default Deposit;