import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Account from './components/Acct'


function App() {
  // START STATE SETTERS // 
  const [user, setUser] = useState({})
  const [accts, setAccts] = useState([])
  
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
      }
      catch (err) {
        console.log('Error => ', err);
      }
  }// END sign in // 

  const userReg = () => {}

  const logOut = async (e) => {
    e.preventDefault()
    const url = process.env.REACT_APP_BACKEND_URL + '/user/logout'
    try {
      const response = await fetch(url, {
        method: 'GET',
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
  }// END log out //

  const acctsGet = () => {
    const url = process.env.REACT_APP_BACKEND_URL  + "/portal/accounts/"
    fetch(url, {
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


  const acctPost = async (e) => {
    e.preventDefault()
    console.log('Acct Post')
      console.log(e.target.name.value, e.target.balance.value)
      const url = process.env.REACT_APP_BACKEND_URL + '/portal/accounts/'
      const newAcctBody = {
        name: e.target.name.value,
        balance: e.target.balance.value
      }
      try {
        await fetch(url, {
          method: 'POST',
          body: JSON.stringify(newAcctBody),
          credentials: "include",
          headers: {
            'Content-Type': 'application/json'
          }          
        })
        .then(res => {
          if(res.status === 201) {
            return res.json()
          } else {
            console.log('RES STATUS NOT 200')
            return []
          }
        }).then(data => {
            console.log(data.data)
            acctsGet()
        })     
      }
      catch (err) {
        console.log('Error => ', err);
      }
  }
  
  const acctPut = () => {}

  const acctDel = () => {}

  
  return (
    <div className="App">
      <Header acctPost={acctPost} user={user} logOut={logOut} signIn={signIn} />
      { (user.username) 
      ? <h1>{user.username}'s Accounts </h1> 
      : <h1>Welcome</h1> } 

      { accts.map((acct, i) => {
        return(
        <Account key={acct.id} acct={acct}></Account>
        )
      })}
      {/* Put logged in view vs logged out view in one terinary operator. No need for user portal component or AcctItem component. Welcome Component can just show example accounts */}
      
    </div>
  );
}

export default App;
