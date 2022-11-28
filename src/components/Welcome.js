import React from 'react';
import { ButtonGroup, Row, Col, Card } from 'react-bootstrap';
import SampleModal from './SampleModal';
const Welcome = () => {

    return (
        <>
        <h1>Better Budget</h1>
        <h4>Create Bank Accounts And Track Transactions</h4>
        <Card size="md" >
            <Card.Title>Account Name: Sample Acct</Card.Title>
            <Card.Body>
            <Row>
                <Col>Balance: $$ </Col>
                <Col></Col>
            </Row>
            </Card.Body>
            <Card.Footer>
            <Row>
                <Col>
                    <ButtonGroup className="me2">
                        <SampleModal/>
                        <SampleModal/>
                        <SampleModal/>
                    </ButtonGroup>
                </Col>
            </Row>
            </Card.Footer>
        </Card>

       
        </>
    )
}


export default Welcome