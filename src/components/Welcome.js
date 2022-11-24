import React, { useState } from 'react';
import { Button, ButtonGroup, Row, Col, Card } from 'react-bootstrap';
import SampleModal from './SampleModal';
const Welcome = () => {

    return (
        <>
        <h1>Welcome</h1>
        <h4>Create Banks Accounts And Track Transactions</h4>
        <Card size="md" >
            <Card.Title>Account Name: Acct Name Here</Card.Title>
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