const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', function(req, res, next) {
  fs.readFile('users.json', function(err,data){
    if (err) {
      console.log(err)
    } else {
      // const users = JSON.parse(data);
      res.send(JSON.parse(data));
    }
  })
});

router.post('/add', function(req, res, next) {
  fs.readFile('users.json', function(err,data){
    if (err) {
      console.log(err)
    } 
    const users = JSON.parse(data);

    const addUser = {
      userName: req.body.userName,
      userEmail: req.body.userEmail,
    };
    users.push(addUser);
    const userEmails = users.map(user => user.userEmail); //to only get userEmail KEY

    fs.writeFile("mails.txt", JSON.stringify(userEmails, null, 2), function(err){
      if(err) {
        console.log(err);
      }
    })
    res.send(users);
    
  })
});

//just for testing
router.get('/form', function(req,res){
  let form = /*html*/`
  <p id="checkForm"><p>
  <form action="/form" method="post">
    <label>Name</label>
    <input id="userName" type="text" name="name" />
    <label>Email</label>
    <input id="userEmail" type="email" name="email" />
  </form>
  `;
res.send(form);
})

module.exports = router;

