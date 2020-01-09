const express = require('express');
const path = require('path');
const route = require('./routes/api/members.js');
const app = express();

//Sets Body Parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Sets public Folder
app.use(express.static(path.join(__dirname,'public')));

//Router middleware
app.use('/api/members',route);

app.listen(3000);
