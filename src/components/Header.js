import React, {useState} from 'react'; 
import {Nav,Button, ButtonGroup} from "react-bootstrap";
import Register from './Register';
import Signin from './Signin';


const Header = (props) => {

    return(
        <>
            <Nav>
            { (props.user.username) 
            ? <Button variant="primary" onClick={props.logOut}>Sign Out</Button> 
            : <ButtonGroup>
                <Register userReg={props.userReg} /> 
                <Signin signIn={props.signIn} />
            </ButtonGroup>
             }
            </Nav>
        </>
    )
}

export default Header;