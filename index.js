const express = require('express');
const app = express();
const path = require('path');

//Sets static path.
app.use(express.static(path.join(__dirname,'public')));


const members = [
  {
    id: 1,
    name: 'Hardik'
  },
  {
    id: 2,
    name: 'Mangesh'
  }
];

//Returns all members.
app.get('/api/members',function(req,res){
  res.json(members);
});

app.listen(3000);
