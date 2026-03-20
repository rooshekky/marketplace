
import {useState} from 'react';
import Layout from "../components/Layout";

export default function Create(){
const [title,setTitle]=useState('');
const [price,setPrice]=useState('');

const submit=async()=>{
 await fetch("http://localhost:3001/listings",{method:"POST",
 headers:{"Content-Type":"application/json"},
 body:JSON.stringify({title,price})
 });
 alert("created");
}

return(
<Layout>
<h1>Create Listing</h1>
<input placeholder="title" onChange={e=>setTitle(e.target.value)} /><br/>
<input placeholder="price" onChange={e=>setPrice(e.target.value)} /><br/>
<button onClick={submit}>Create</button>
</Layout>
)}
