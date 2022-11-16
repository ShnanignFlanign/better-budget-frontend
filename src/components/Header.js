import React, {useState} from 'react'; 
import {Nav,Button,Navbar,Container,Image} from "react-bootstrap";
import Register from './Register';
import Signin from './Signin';

const Header = (props) => {

    return(
        <>
            <Nav>
                <Register/>
                <Signin signIn={props.signIn} />
                <Button variant="primary" onClick={props.logOut}>
                    Sign Out
                </Button>
            </Nav>
            
        </>
    )
}

export default Header;