

var ObjectID = require('mongodb').ObjectID

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const contests = require('./contests')
var jwt = require('jwt-simple');
var appMongo = require("./appMongo")
var users_col = new appMongo("user64","user")
var contest_col = new appMongo("user64","contests")


function verifyUser(req,res,next){
    console.log("verifying user...")
    //res.redirect('http://google.com');

    var id_token = req.body.id_token
    try{
        var user = jwt.decode(id_token, "ufPvTKRsGu3y9A4GlUyLETBf",true);
        if(user.email_verified){
            console.log("user authenticated")
            res.locals.user = user;  
            next()
        }
        else{
            res.redirect('http://google.com');
        }

    }catch(error){
        console.log(error)
        res.status(301).redirect("http://localhost:3000/login")
    } 
}




app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


app.post('/adduser',(req,res,next)=>{
    const user = req.body.user
    users_col.connect((col)=>{
        col.update({ uid: user.sub},
            {details:user,uid:user.sub},{upsert:1})
    },req,res,next)
})

app.post("/addcontri",verifyUser,(req,res,next)=>{
    const body = req.body
    const user = res.locals.user
    console.log(res.locals.user)
    console.log(body)
    console.log("added")
    contest_col.connect((col)=>{
        col.findOneAndUpdate({_id:new ObjectID(body.cid)},{ $addToSet: {contris: [{subm:body.subm,uid:user.sub} ] }},(err,result)=>{
            console.log(result)
            users_col.connect((col)=>{
                col.findOneAndUpdate({uid:user.sub},{$addToSet:{contests:[new ObjectID(result._id)]}})
            })

        })

    },req,res,next)

    //res.send({asdf:"adsf"})
})

app.get("/verifycontest",(req,res,next)=>{
    const cid = req.query.cid
    console.log(cid)
    contest_col.connect((col)=>{
        try{
            col.findOne({_id:new ObjectID(cid)},(err,result)=>{
                
                if(result && !null){
                    res.send(result)
                }
                else{
                    res.send({error:"unable to load contest"})
                }
                
            })
        }
        catch(err){
            console.log(err)
            res.send({error:"invalid token",id:2})

        }
    })
})

app.get("/getcontestoverview",(req,res,next)=>{
    const cid = req.query.cid
    console.log("cid")
    contest_col.connect((col)=>{
        try{
            console.log("try")
            col.find({_id:new ObjectID(cid)}).project({logs:0}).toArray((err,result)=>{
                console.log(result,"overview")
                if(result.length){
                    res.send(result[0])
                }
                else{
                    res.send({error:"unable to load contest"})
                }
                
            })
        }
        catch(err){
            console.log(err)
            res.send({error:"invalid token",id:2})

        }
    })
})

app.use('/contests',contests)


var port = 5001

app.listen(port , () => console.log('Example app listening on port ' + port))