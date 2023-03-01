const mongoose=require('mongoose');

const issueSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    labels:[
        {
            type:String
        }
    ],
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Project'
    }
},
{
    timestamps:true
});

const Issue=mongoose.model('Issue',issueSchema);
module.exports=Issue;