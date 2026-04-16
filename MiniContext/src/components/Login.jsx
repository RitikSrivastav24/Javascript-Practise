import React,{useState,useContext} from 'react'
import userContext from '../context/UserContext'
function Login() {
    const [username, setUserName]= useState('');
    const [password,setPassword]= useState('')
    const {setUser}= useContext(userContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser({username,password})
    }
  return (
    <div>Login
    <input type="text" placeholder="username" value={username}
    onChange={(e)=>setUserName(e.target.value)}/>
    <input type="password" placeholder='password'
    value={password}
    onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={handleSubmit}></button>
    </div>
  )
}

export default Login