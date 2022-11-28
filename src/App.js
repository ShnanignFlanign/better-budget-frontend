import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Account from './components/Acct';
import AddAcct from './components/AddAcct';
import Welcome from './components/Welcome';


function App() {
  // START STATE SETTERS // 
  const [user, setUser] = useState({})
  const [accts, setAccts] = useState([])
  
  // END STATE SETTERS //

  const signIn = async (e) => {
    e.preventDefault()
    console.log('User Login')
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
            setUser(data.data)
            acctsGet()
        })     
      }
      catch (err) {
        console.log('Error => ', err);
      }
  }// END sign in // 

  const userReg = async (e) => {
    e.preventDefault()
    console.log('User Register')
      console.log(e.target.email.value)
      const url = process.env.REACT_APP_BACKEND_URL + '/user/signup'
      const regBody = {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value
      }
      try {
        await fetch(url, {
          method: 'POST',
          body: JSON.stringify(regBody),
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
            setUser(data.data)
            acctsGet()
        })     
      }
      catch (err) {
        console.log('Error => ', err);
      }
  }

  const logOut = async (e) => {
    e.preventDefault()
    console.log("Log Out")
    const url = process.env.REACT_APP_BACKEND_URL + '/user/logout'
    try {
      const response = await fetch(url, {
        method: 'GET',
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
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
    console.log("Accounts Get")
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
            acctsGet()
        })     
      }
      catch (err) {
        console.log('Error => ', err);
      }
  }
  
  const acctPut = async(e, id) => {
    e.preventDefault()
      console.log('Account Put')
        console.log(e.target.name.value, e.target.balance.value)
        const url = process.env.REACT_APP_BACKEND_URL + '/portal/accounts/' + id
        const editedAcctBody = {
          name: (e.target.name.value)
            ? e.target.name.value : e.target.name.placeholder,
          balance: (e.target.balance.value)
            ? e.target.balance.value : e.target.balance.placeholder
        }
        console.log(editedAcctBody)
        try {
          await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(editedAcctBody),
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
              acctsGet()
          })     
        }
        catch (err) {
          console.log('Error => ', err);
        }    
  }

  const acctDel = async(e, id) => {
    e.preventDefault()
      console.log('Account Delete')
        const url = process.env.REACT_APP_BACKEND_URL + '/portal/accounts/' + id
        fetch(url, {
          method: 'DELETE',
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
          acctsGet()
        })
  }

  
  return (
    <div className="App">
      <Header user={user} logOut={logOut} userReg={userReg} signIn={signIn} />
      { (user.username) 
      ?<> <h1>Better Budget</h1> 
      <h4>{user.username}'s Accounts</h4>
      <AddAcct acctPost={acctPost}/>
      { accts.map((acct, i) => {
        return(
        <Account acctDel={acctDel} acctsGet={acctsGet} key={acct.id} acct={acct} acctPut={acctPut}></Account>
        )
      })}
      </>
      : <Welcome></Welcome> } 
      
    </div>
  );
}

export default App;
