import React, {useState} from 'react'; 
import {Nav,Button} from "react-bootstrap";
import Register from './Register';
import Signin from './Signin';
import AddAcct from './AddAcct';

const Header = (props) => {

    return(
        <>
            <Nav>
            { (props.user.username) 
            ?<>
                <Button variant="primary" onClick={props.logOut}>Sign Out</Button> 
                <AddAcct acctPost={props.acctPost}> </AddAcct>
            </>
            : <>
                <Register/> 
                <Signin signIn={props.signIn} />
            </> }
                
                
            </Nav>
            
        </>
    )
}

export default Header;