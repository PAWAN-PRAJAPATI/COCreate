const bodyParser = require('body-parser')

var jwt = require('jwt-simple');

const express = require('express')

const app = express.Router()
var ObjectID = require('mongodb').ObjectID

var appMongo = require("./appMongo")

var contests_col = new appMongo("user64","contests")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


function verifyUser(req,res,next){

    var id_token = req.body.id_token
    var user = jwt.decode(id_token, "ufPvTKRsGu3y9A4GlUyLETBf",true);
    if(user.email_verified){
        console.log("user authenticated")
    }
    console.log(user)
    next()
}
app.post('/submission',verifyUser, function (req, res, next) {
    //console.log('Request Type:', req.method)
    res.send(JSON.stringify({asdf:"asd"}))
})

app.get('/',(req,res,next)=>{

    /*
    console.log(req.body)
    var id_token = req.body.id_token
    var token = jwt.decode(id_token, "ufPvTKRsGu3y9A4GlUyLETBf",true);
    //console.log(token)
    */
    //console.log(req.body)    
    console.log("/contest")
    contests_col.connect((col)=>{

        col.find({}).project({title:1,logs:1,disc:1}).toArray(function(err,result){
            console.log(result)
            res.send(result)
        })
        console.log("connected")
    },req,res,next)

    console.log("/contests")
})



module.exports = app