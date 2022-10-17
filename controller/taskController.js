const Task = require('../model/taskModel')
const taskController={
    index:async(req,res)=>{
        const taskList= await Task.find({})
        // console.log('task=',tasklist);
        res.render('index',{ tasks:taskList})
    },
    new:async(req,res)=>{
        res.render('create')
    },
    edit:async(req,res)=>{
        const id = req.params.id // to read ref id from router

        const data = await Task.findById({_id: id})
        // console.log('single data=',data)
        res.render('update',{ task: data})
    },
    createTask: async (req,res) => {
        // console.log('data=',req.body);
        const { title, content, start, end, user } = req.body

        const newTask = Task({title, content, start, end, user})
        // console.log('data=',newTask);
        newTask.save()
        console.log('task created successfully');
        res.redirect(`/`)
    },
    updatetask: async (req,res)=>{
        const data = req.body
        // console.log('update data =', data);
        await Task.findByIdAndUpdate({_id: req.params.id },data)
        console.log('task updated')
        res.redirect(`/`)
    },
    deleteTask:async(req,res)=>{
        const id = req.params.id
        await Task.findByIdAndDelete({_id: req.params.id })
        console.log('deleted success');
        res.redirect(`/`)


    }
}
module.exports=taskController