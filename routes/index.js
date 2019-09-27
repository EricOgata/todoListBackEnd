var express = require("express");
var router  = express.Router();
var TODO    = require("../models/todo");
var moment  = require('moment');

router.get('/', function(req, res){ // Show All Todos (non-completed).
    // Get all TODOs from DB
    TODO.find({completed: false}).select('id title date').exec(function(err, todos){
        if(err)
            res.status(500).json({error: 'Something failed!'});
        else{
            res.status(200).json({
                message: "Success",
                numberOfRegisters: todos.length,
                data: todos
            })
        }
    });
});

router.post('/', function(req, res){ // Create new TODO
    var newToDo = {
        title: req.body.title,
        date: moment(req.body.date, "DD/MM/YYYY").format(),
        description: req.body.description,
        completed: false,
    }
    TODO.create( newToDo, function(err, todo){
        if(err)
            res.status(500).json({error: 'Something failed!'});
        else{
            // console.log("New Todo Added: \n" + todo);
            res.status(200).json({message: "Added Successfully", id: todo._id});
        }            
    });
});

router.get('/:id', function(req, res){ // Read Single TODO
    TODO.findById(req.params.id).exec(function(err, todo){
        if(err){
            res.status(404).json({
                message: "Todo " + req.params.id + " not found"
            })
        }else{
            res.status(200).json({
                message: "Register Found.",                
                todo: todo
            });
        }
    });
});

router.post('/:id', function(req, res){ // Update Single Todo  
    // Padrão de data aceito: DD/MM/YYYY
    /* 
    * A data, ao ser salva no MongoDB, é convertida para o UTC (tempo universal coordenado)
    * Talvez seja interessante, no retorno, modificar para o UTC -3:00 (Horário de brasília)
    */ 
    var toDoData = {
        title: req.body.title,
        date: moment(req.body.date, "DD/MM/YYYY").format(),
        description: req.body.description,
        completed: req.body.completed,
    }
    TODO.findByIdAndUpdate(req.params.id, toDoData).exec(function(err, editedToDo){
        if(err)
            res.status(500).json({
                message: "Failed to update ToDo"
            })
        else{
            res.status(200).json({
                message: "Register Updated",
                todo: editedToDo
            });
        }
    });
})

// Complete ToDo Status: /todo/{id}/complete
router.get('/:id/complete', function(req, res){
    TODO.findByIdAndUpdate(req.params.id, {completed: true}).exec(function(err, editedToDo){
        if(err)
            res.status(500).json({
                message: "Failed to update ToDo"
            })
        else{
            res.status(200).json({
                message: "ToDo Completed",
                todo: editedToDo
            })
        }
    });
});

// Delete Single Todo
router.delete('/:id', function(req, res){ 
    TODO.findByIdAndRemove(req.params.id).exec(function(err, removedToDo){
        if(err)
            res.status(500).json({
                message: "Failed to remove To Do"
            })
        else{
            if(removedToDo)
                res.status(200).json({
                    message: "ToDo Removed",
                    todo: removedToDo
                })
            else
                res.status(500).json({
                    message: "This To Do has already been removed"
                })
        }
    });
});

module.exports = router;