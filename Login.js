import React,{useState} from "react";

function Login({setPage}){

const [user,setUser]=useState("");
const [pass,setPass]=useState("");
const [msg,setMsg]=useState("");

function login(){

if(user==="admin" && pass==="1234"){

setPage("review");

}
else{

setMsg("Invalid Login");

}

}

return(

<div style={{textAlign:"center"}}>

<h2>Login</h2>

<input placeholder="username" onChange={e=>setUser(e.target.value)}/>

<br/>

<input type="password" placeholder="password" onChange={e=>setPass(e.target.value)}/>

<br/>

<button onClick={login}>Login</button>

<p>{msg}</p>

</div>

);

}

export default Login;
