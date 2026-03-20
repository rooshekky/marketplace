
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = "secret";

let users = [];
let listings = [];

// generate creds
function genUser(){
  return {
    username: "user_" + Math.random().toString(36).substring(2,7),
    password: Math.random().toString(36).substring(2,10)
  }
}

// signup
app.post('/auth/signup', async (req,res)=>{
  const creds = genUser();
  const hash = await bcrypt.hash(creds.password,10);
  const user = { id: users.length+1, username: creds.username, password: hash, balance: 0 };
  users.push(user);

  const token = jwt.sign({id:user.id}, JWT_SECRET);

  res.json({...creds, token});
});

// login
app.post('/auth/login', async (req,res)=>{
  const user = users.find(u=>u.username===req.body.username);
  if(!user) return res.status(401).send("invalid");

  const valid = await bcrypt.compare(req.body.password, user.password);
  if(!valid) return res.status(401).send("invalid");

  const token = jwt.sign({id:user.id}, JWT_SECRET);
  res.json({token});
});

// listings
app.get('/listings',(req,res)=> res.json(listings));

app.post('/listings',(req,res)=>{
  const l = { id:listings.length+1, ...req.body };
  listings.push(l);
  res.json(l);
});

app.listen(3001, ()=> console.log("API running"));
