import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import React, { useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);

  function makeAPICall() {
    axios.get("https://randomuser.me/api/?results=2")
      .then(res => {
        console.log(res.data);
        setUsers(res.data.results)
      })
  }

  return (
    <div className="App">
      <Button variant="primary" id="UserButton" onClick={makeAPICall}>Generiere Neue User</Button>
      <h1>Beispiel-User Liste</h1>
      <ul id="UserList">
        {users.map(user => <li key={user.login.uuid} >{user.name.title}{" "}{user.name.first}{" "}{user.name.last}</li> )}
      </ul>
    </div>
  );
}

export default App;
