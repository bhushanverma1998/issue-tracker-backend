const express=require('express');
const router=express.Router();
const projectController=require("../controllers/project_controllers");

//All Post Routes
router.post('/create',projectController.create);
router.post('/create_issue',projectController.createIssue);
router.post('/filter_search',projectController.filterBySearch);

//All Get Routes
router.get('/:id',projectController.getProject);


module.exports=router;