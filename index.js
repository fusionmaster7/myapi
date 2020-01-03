const express = require('express');
const path = require('path');
const app = express();

const members = [
  {
    id: 1,
    name: 'Hardik',
    status: 'active'
  },
  {
    id: 2,
    name: 'Soumya',
    status: 'active'
  },
  {
    id: 3,
    name: 'Seema',
    status: 'inactive'
  }
];

app.get('/api/members',function(req,res){
  res.json(members);
});

app.use(express.static(path.join(__dirname,'public')));

app.listen(3000);
