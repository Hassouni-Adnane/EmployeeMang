import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "employeemanag",
})

con.connect(function(err){
    if(err){
        console.log("error in connection");
    }
    else{
        console.log("connected");
    }
})

app.post('/login', (req, res) =>{
    const sql = "SELECT * FROM user WHERE email= ? AND password = ?"
    con.query(sql, [req.body.user, req.body.psw], (err, result)=>{
        if(err) return res.json({Status: "error", Error: "error in running query"});
        if(result.length > 0) return res.json({Status: "success"})
        else return res.json({Status: "error", Error: "wrong email or password"})
    })
})

app.post('/creat', (req, res) => {
    //console.log(req.file); for this to work we need to install `multer` and `path` in our project packages
    const sql = "INSERT INTO emoloyee(`name`, `email`, `password`, `address`, `image`) VALUES(?, ?, ?, ?, ?)"
    con.query(sql, [req.body.name, req.body.email, req.body.password, req.body.address, req.body.image],
        (err, result)=>{
            if(err) return res.json({Status: "error", Error: err});
            if (result.affectedRows > 0) {
                return res.json({ Status: "success" });
            } else {
                return res.json({ Status: "error", Error: "Insertion failed" });
            }})})

app.listen(8081, ()=> {
    console.log("running");
})