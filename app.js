const express = require('express');

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const form = "<form method=\"post\" action=\"http://localhost:3000\">"
  +"  <input id= \"palindrome\" type=\"text\" name=\"name\" value=\"\">"
  +"  <br>"
  +"  <input type=\"submit\" name=\"submit\" value=\"Add palindrome\">"
  +"</form>"
  +"<form method=\"get\" action=\"http://localhost:3000\palindromes\">"
  +  "<input type=\"submit\" value=\"All palindromes\">"
  +"</form>";

var palindromes = []

Object.defineProperty(app, 'capacity', {
  value: 10
})

Object.defineProperty(app, 'timeout', {
  value: 10 * 60 * 1000
})

palindromes.push = function () {
  if (this.length >= app.capacity) {
   
    clearTimeout(this.shift().pid)
  }
  return Array.prototype.push.apply(this, arguments)
}

function palindromeCheck(string) {
  palindrome = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
  for(i=0;i< (palindrome.length)/2 ; i++) {
    if(palindrome[i] != palindrome.slice(-1-i)[0]){
      return false;
    }
  }
  return true;
}

 app.get("/", function (req, res) {
    res.status(200).send(form);
  });

  app.get('/palindromes', function (req, res) {
    res.status(200).send(form);
    res.json(palindromes.map(data => data.q))
    console.log(palindromes)
  })

  app.post("/", function (req, res) {
    var string = req.body.name;
    if (palindromeCheck(string)){
      palindromes.push({
        q: string,
        pid: setTimeout(() => palindromes.shift(), app.timeout)
      })
      res.json(true)
      
    } else {
      res.json(false)
     
    }
 
});


module.exports = app;