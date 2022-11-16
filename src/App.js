import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Header from './components/Header';



function App() {
  // START STATE SETTERS // 
  const [user, setUser] = useState({})
  const [accts, setAccts] = useState([])
  const [trans, setTrans] = useState([])
  const [deps, setDeps] = useState([])
  // END STATE SETTERS //

  const signIn = async (e) => {
    e.preventDefault()
    console.log('loginUser')
      console.log(e.target.email.value)
      const url = process.env.REACT_APP_BACKEND_URL + '/user/login'
      const loginBody = {
        email: e.target.email.value,
        password: e.target.password.value
      }
      try {
        await fetch(url, {
          method: 'POST',
          body: JSON.stringify(loginBody),
          headers: {
            'Content-Type': 'application/json',
            'Connection': 'keep-alive'
          },
          credentials: "include"
        })
        .then(res => {
          if(res.status === 200) {
            return res.json()
          } else {
            return []
          }
        }).then(data => {
            console.log(data.data)
            setUser(data.data)
        })     
        
        // if (resJson.status === 200) {
        //   console.log("Logged in!")
        //   // acctsGet()
        // }
      }
      catch (err) {
        console.log('Error => ', err);
      }
  }
  const userReg = () => {}
  const logOut = async (e) => {
    e.preventDefault()
    const url = process.env.REACT_APP_BACKEND_URL + '/user/logout'
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
      if (response.status === 201) {
        console.log("Logged Out User")
        setUser({})
        setAccts([])
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  const acctsGet = () => {
    const url = process.env.REACT_APP_BACKEND_URL  + "/portal/accounts/"
    fetch(url, {
      credentials: "include"
    })
    .then(res => {
        if(res.status === 200) {
        return res.json()
        } else {
        return []
        }
    }).then(data => {
        console.log(data.data)
        setAccts(data.data)
    })
  }// END ACCTSGET() //
  const depsGet = () => {}
  const transGet = () => {}
  const histGet = () => {}

  const acctPost = () => {}
  const transPost = () => {}
  const depPost = () => {}

  const acctPut = () => {}
  const transPut = () => {}
  const depPut = () => {}

  const acctDel = () => {}
  const transDel = () => {}
  const depDel = () => {}
  
  return (
    <div className="App">
      <Header logOut={logOut} signIn={signIn} />
      <Button onClick={acctsGet}>Account Get</Button> 
    </div>
  );
}

export default App;
