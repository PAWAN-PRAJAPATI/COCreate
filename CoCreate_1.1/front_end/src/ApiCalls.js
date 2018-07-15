import axios from 'axios'



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

export function mySubmission(sub,id_token,callback){
  fetch(url+"/contests/submission", {
    method: 'POST',
    headers: {
      'Content-Type':'application/json',
    },
    body:JSON.stringify({id_token:id_token,sub:sub})
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