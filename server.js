const express = require("express");

const bcrypt = require("bcrypt");
const saltRounds= 10;

const jwt = require("jsonwebtoken");
const SECRET_KEY = "qwerty&#$%@!rD553Dfr4";

const app = express();

//hashing - Generate salt, generated salt will be used to hash the pswd.
//hashing the password -

// app.post("/register", (req,res)=>{
//     console.log(req.query);
//     bcrypt.genSalt(saltRounds, (err, salt)=>{
//         if(err) console.log(err);
//         else {
//             bcrypt.hash(req.query.password, salt, (err, hashPswd)=>{
//                 if(err) console.log(err)
//                //else console.log("SALT******", salt)//
//                 else console.log("HASHED PSWD", hashPswd);
//             })
//         }
// })
// res.send({
//      status:"User registration completed"
//     }) 
// })                                                                   //For Explaining Purpose 

//OR

app.post("/register", (req,res)=>{
    bcrypt.hash(req.query.password, saltRounds, (err, hashPswd)=>{
        if(err) console.log(err);
        else console.log("PSWD", hashPswd);
})
res.send({
        status:"User registration completed"
    })                                                                //For Writing Purpose
})


// app.post("/login", (req,res)=>{
//         console.log(req.query);

// res.send({
//         status:"User login successfully"
//     }) 
// })

                                                                
//JWT Token -
//creating the token for the user -

app.post("/login", (req,res)=>{
    const token = jwt.sign(req.query, SECRET_KEY)
    //console.log(token);
    res.send({
        token : token
    })

    const decodedUser = jwt.decode(token, SECRET_KEY);
    console.log(decodedUser);
})


app.listen(3001, () => {
    console.log("Server is running at port 3001");
});



// bcrypt -

// Very first we will be creating a salt rounds variable which will define that how much complex hashing you want for your text . ideal value ranges from 5 - 15.

// bcrypt firstly generates a salt using genSalt function which takes in saltRounds and callback function as a parameter, this function returns the salt value.

// after this bcrypt hash the value using salt by hash function, this function takes in three param first is text and salt and callback function. This callback function will give you hashedPswd.