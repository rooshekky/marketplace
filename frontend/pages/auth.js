
import {useState} from 'react';

export default function Auth(){
const [creds,setCreds]=useState(null);

const signup=async()=>{
 const r=await fetch("http://localhost:3001/auth/signup",{method:"POST"});
 const d=await r.json();
 setCreds(d);
 setTimeout(()=>window.location='/',8000);
}

return(
<div style={{background:'#0b1220',color:'white',minHeight:'100vh',padding:'20px'}}>
<h1>Auth</h1>
<button onClick={signup}>Generate Account</button>
{creds&&(
<div>
<p>{creds.username}</p>
<p>{creds.password}</p>
</div>
)}
</div>
)}
