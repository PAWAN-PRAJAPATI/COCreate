import axios from 'axios'
import Cookies from 'universal-cookie';



const cookies = new Cookies();

const url = "http://localhost:5001"
export function sendUser(user){
  fetch(url+"/adduser", {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
    },
    body:JSON.stringify({user:user})
  })
    .then((response) => response.json())
    .then((responseJson) =>{
        console.log(responseJson)
    })
    .catch((error) =>{
      console.error(error);
  });
  
}

export function mySubmission(subm,id_token,cid,callback){
  fetch(url+"/addcontri", {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
    },
    body:JSON.stringify({id_token:id_token,subm:subm,cid:cid})
  })
    .then((response) => response.json())
    .then((responseJson) =>{
        console.log(responseJson)
        callback(responseJson)
    })
    .catch((error) =>{
      callback(error)
      console.error(error);
  });
}

export function getUser(callback){
    const id_token = cookies.get("id_token")
    if(id_token && id_token!="logout"){
      fetch('https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=' + id_token)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        
        if(!responseJson.email_verified){
          
          window.location = "http://localhost:3000/login"
          return
        }
        
        callback(responseJson)
      })
      .catch((error) => {
        //console.log(error,"err get user");
        //callback(error)
        window.location = "http://localhost:3000/login"
        return
      });
  }
  else{
    //callback("no cookie")
    window.location = "http://localhost:3000/login"
    return
  }
}


export function getContestContris(callback,cid){

  fetch(url+"/getcontestcontris?cid=" + cid)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log("getcontestcontri success")
    callback(responseJson)
  })
  .catch((error) => {
    console.log("getcontestcontri error")
    console.error(error);
    callback(error)
  }); 

}

export function verifyContest(callback,cid){

  fetch(url+"/verifycontest?cid=" + cid)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log("getContest success")
    callback(responseJson)
  })
  .catch((error) => {
    console.log("getContest error")
    console.error(error);
    callback(error)
  }); 

}


export function getContestOverview(callback,cid){
  console.log("getcontestoverview")
  fetch(url+"/getcontestoverview?cid=" + cid)
  .then((response) => response.json())
  .then((responseJson) => {
    console.log("getContest success")
    callback(responseJson)
  })
  .catch((error) => {
    console.log("getContest error")
    console.error(error);
    callback(error)
  }); 

}

export function getAllContests(callback){
    console.log("getAllContests")
    var _ = fetch(url+"/contests")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("getAllContests success")
        callback(responseJson)
      })
      .catch((error) => {
        console.log("getAllContests error")
        console.error(error);
        callback(error)
      }); 
}

export function updateContact(contact){
    console.log("Update")
    return fetch('http://localhost:5000/contacts/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      })
        .then((response) => response.json())
        .then((responseJson) =>{
            console.log(responseJson)
        })
        .catch((error) =>{
            console.error(error);
    });
    
}