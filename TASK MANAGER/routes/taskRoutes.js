const { getTasks, createTask, updateTask } = require("../controllers/TaskController");

const taskRoutes =(req,res)=>{
    if(req.method =='GET'){
        getTasks(req,res);
    
    }else if(req.method== 'POST'){
        createTaskk(req,res)
    }else if (req.method =='PATCH'){
        updateTask(req,res)
    }else if(req.method == 'DELETE'){
        deleteTask(req.res)
    } else{
        res.writeHead(404, 'data not found', {'content-type': 'applcation/json'})
        res.end(JSON.stringify({
            message: 'unknown method required.'
        }))
    }
}

module.exports= taskRoutes;