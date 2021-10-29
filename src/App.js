import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import React, { useState } from 'react';

export default function App() {

  const [users, setUsers] = useState([]); //Array to manage Users in state - default empty Array

  function makeAPICall() {
    axios.get("https://randomuser.me/api/?results=2") //Request Data from randomuser API with Axios
      .then(res => {                                  
        console.log(res.data);                        //log the result
        setUsers(res.data.results)                    //update the state
      });
  }

  return (
    <div className="App">
      <Button variant="primary" id="UserButton" onClick={makeAPICall}>Generiere Neue User</Button>
      <h1>Beispiel-User Liste</h1>
      <ul id="UserList">
        {/* Mapping each entry of the users Array to a <li> element and setting the user names as content*/}
        {users.map(user => <li key={user.login.uuid} >{user.name.title}{" "}{user.name.first}{" "}{user.name.last}</li> )}
      </ul>
    </div>
  );
}