const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const contests = require('./contests')
var jwt = require('jwt-simple');
var appMongo = require("./appMongo")

/*
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
*/

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var users_col = new appMongo("user64","user")

app.post('/adduser',(req,res,next)=>{
    const user = req.body.user
    users_col.connect((col)=>{
        col.update({ email: user.email},
            {details:user,email:user.email},{upsert:1})
    },req,res,next)
})


app.use('/contests',contests)


var port = 5001

app.listen(port , () => console.log('Example app listening on port ' + port))