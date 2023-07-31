import React, { useState } from 'react';
import './App.css';
import data from './result.json'

function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [isUser, setIsUser] = useState(false);
  const [result, setResult] = useState({})
  console.log(data);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    data.map(ele => {
      if (ele.Username === user && ele['Unique Password'] === pass) {
        setResult(`${ele.Name} ${ele.Class} ${ele['Sec  A']} ${ele['Sec B ']} ${ele['Sec C ']} `);
        setIsUser(true);
      }
    })
  }
  return (
    <div className="login-container">
      { !isUser ? <><h2>Login</h2>
      <div className="form-group">
        <label >Username:</label>
        <input type="text" id="username" name="username" value={user} onChange={evt => setUser(evt.target.value)} required />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" id="password" name="password" value={pass} onChange={evt => setPass(evt.target.value)} required />
      </div>
      <div className="form-group">
        <button onClick={evt => handleSubmit(evt)}>Login</button>
      </div></> : <><h2>{result}</h2>
      </> }
  </div>
  );
}

export default App;
