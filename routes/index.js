const express=require('express');
const Project = require('../models/project');
const router=express.Router();

router.get('/',async (req,res)=>{
    const projects=await Project.find();
    return res.render('home',{
        title:"Home - Issue Tracker",
        projects:projects
    });
})

router.use('/projects',require('./project'));

module.exports=router;