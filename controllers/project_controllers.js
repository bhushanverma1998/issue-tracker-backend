const Issue = require('../models/issue');
const Project = require('../models/project');

module.exports.create = async (req, res) => {
    // console.log(req.body);
    try {
        const project = new Project(req.body);
        await project.save();
        if (project) {
            return res.status(200).redirect('/');
        }
        return res.status(401).render('home');
    } catch (error) {
        return res.status(500).render('somethingwentwrong', {
            title: "Something Went Wrong!"
        });
    }
}

module.exports.getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate('issues');
        const issues = project.issues;
        const authorData=[];
        for(let issue of issues){
            if(!authorData.includes(issue.author)){
                authorData.push(issue.author);
            }
        }
        if (project) {
            return res.status(200).render('project_details', {
                title: "Project Details - Issue Tracker App",
                project: project,
                issuesList: issues,
                authors:authorData
            });
        }
        return res.status(404).redirect('/');
    } catch (error) {
        return res.status(500).render('somethingwentwrong', {
            title: "Something Went Wrong!"
        });
    }
}

module.exports.createIssue = async (req, res) => {
    try {
        const project = await Project.findById(req.body.projectId);
        if (project) {
            const labelsList = (req.body.labels).split(",");
            const issue = new Issue({
                title: (req.body.title).toLowerCase(),
                description: (req.body.description).toLowerCase(),
                author: (req.body.author).toLowerCase(),
                projectId: req.body.projectId,
                labels: labelsList
            });
            if (issue) {
                await issue.save();
                project.issues.push(issue._id);
                await project.save();
                return res.status(200).redirect('back');
            }
        }
        return res.status(401).redirect('/');
    } catch (error) {
        return res.status(500).render('somethingwentwrong', {
            title: "Something Went Wrong!"
        });
    }
}

module.exports.filterBySearch = async (req, res) => {
    try {
        const projects = await Project.findOne({ _id: req.body.projectId }).populate('issues');
        let filteredArray = [];

        for (let project of projects.issues) {
            console.log('project loop')
            if(req.body.search){
                if ((project.title).includes(req.body.search) || (project.description).includes(req.body.search)) {
                    filteredArray.push(project);
                }
            }
            if(req.body.author){
                if((project.author).includes((req.body.author).toLowerCase())){
                    filteredArray.push(project);
                }
            }
        }
        return res.status(200).render('project_details', {
            title: "Project Details - Issue Tracker",
            project: projects,
            issuesList: filteredArray,
            authors:[req.body.author]
        });

    } catch (error) {
        return res.status(500).render('somethingwentwrong', {
            title: "Something Went Wrong!"
        });
    }
}