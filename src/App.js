import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import Header from './components/Header';
import Account from './components/Acct'


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
          // withCredentials: true,
          credentials: "include",
          headers: {
            'Content-Type': 'application/json'
          }          
        })
        .then(res => {
          if(res.status === 200) {
            return res.json()
          } else {
            console.log('RES STATUS NOT 200')
            return []
          }
        }).then(data => {
            console.log(data.data)
            setUser(data.data)
            acctsGet()
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
        // withCredentials: true,
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log(response)
      if (response.status === 200) {
        console.log("Logged Out User")
        setUser({})
        setAccts([])
      } else {
        console.log("STATUS NOT 200")
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }

  const acctsGet = () => {
    const url = process.env.REACT_APP_BACKEND_URL  + "/portal/accounts/"
    fetch(url, {
      // withCredentials: true,
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
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
  const depsGet = (id) => {
    const url = process.env.REACT_APP_BACKEND_URL  + "/portal/accounts/" + id + "/deposits"
    fetch(url, {
      // withCredentials: true,
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
        if(res.status === 200) {
        return res.json()
        } else {
        return []
        }
    }).then(data => {
        console.log(data.data[0])
    })
  }
  const transGet = (id) => {
      const url = process.env.REACT_APP_BACKEND_URL  + "/portal/accounts/" + id + "/transactions"
      fetch(url, {
        // withCredentials: true,
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
          if(res.status === 200) {
          return res.json()
          } else {
          return []
          }
      }).then(data => {
          console.log(data.data[0])
      })
  }
  const histGet = (id) => {
    const url = process.env.REACT_APP_BACKEND_URL  + "/portal/accounts/" + id + "/history"
      fetch(url, {
        // withCredentials: true,
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(res => {
          if(res.status === 200) {
          return res.json()
          } else {
          return []
          }
      }).then(data => {
          console.log("Deposits:",data.data.Deposits[0], "Transactions:", data.data.Transactions[0])
      })
  }

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
      <Header user={user} logOut={logOut} signIn={signIn} />
      { (user.username) 
      ? <h1>{user.username}'s Accounts </h1> 
      : <h1>Welcome</h1> } 

      { accts.map((acct, i) => {
        return(
        <Account histGet={histGet} depsGet={depsGet} transGet={transGet} key={acct.id} acct={acct}></Account>
        )
      })}
      
    </div>
  );
}

export default App;
