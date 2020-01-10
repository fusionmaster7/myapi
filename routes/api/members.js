const express = require('express');
const router = express.Router();
const members = require('../../Members');

//Gets all Members
router.get('/',function(req,res){
  res.json(members);
});

//Gets specific members
router.get('/:id',function(req,res){
  const found = members.some(member=>member.id===parseInt(req.params.id));
  if(found){
    res.json(members.filter(member=>member.id===parseInt(req.params.id)));
  }else{
    res.status(400).send("Such a member does not exist");
  }
});

//Create a new member
router.post('/',function(req,res){
  const newMember = {
    id: req.body.id,
    name: req.body.name
  };
  if(!newMember.id||!newMember.name){
    res.status(400).send('Please enter the complete details');
  }else{
    members.push(newMember);
    res.send("New member created");
  }
});

//Updates and existing member
router.put('/:id',function(req,res){
  const found = members.some(member=>member.id===parseInt(req.params.id));
  if(found){
    const updatedMember = req.body;
    members.forEach((member)=>{
      if(member.id===parseInt(req.params.id)){
        member.name = updatedMember.name;
        res.send("Member updated succesfully");
      }
    });
  }else{
    res.status(400).send("Member not found");
  }
})

module.exports = router;
