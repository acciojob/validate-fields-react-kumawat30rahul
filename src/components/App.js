import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const [errorTrue,setErrorTrue] = useState(true);

  const usernameHandler = (e) => {
    setUsername(e.target.value)
  }
  const passwrodHandler = (e) => {
    setPassword(e.target.value)
  }

  const button = () => {
    if((username === "" && password === "") || (username === "") || (password === "")){
      setErrorTrue(true)
      setError("Both username and password are required.")
    }else{
      setError(false)
    }
  }
  return (
    <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        {setErrorTrue && <p id="errorMessage">{error}</p>}
        <button type="submit" onClick={button}>Log in</button>
    </div>
  )
}

export default App