
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");

  const usernameHandler = (e) => {
    setUsername(e.target.value)
  }
  const passwrodHandler = (e) => {
    setPassword(e.target.value)
  }

  const button = () => {
    if((username === "" && password === "") || (username === "") || (password === "")){
      setError("Both username and password are required.")
    }else{
      let para = document.getElementById('errorMessage')
      para.style.display = 'none'
    }
  }
  return (
    <div>
        <label htmlfor="username">Username</label>
        <input type="text" id="username" />
        <label htmlfor="password">Password</label>
        <input type="password" id="password" />
        <p id="errorMessage">{error}</p>
        <button type="submit" onClick={button}>Log in</button>
    </div>
  )
}

export default App
