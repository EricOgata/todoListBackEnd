var express = require("express");
var router  = express.Router();
var TODO    = require("../models/todo");
var moment  = require('moment');

// Get all TODOs from DB
router.get('/', function(req, res){    
    TODO.find({}).exec(function(err, todos){
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
})

// Delete All Todos
router.delete('/', function(req, res){
    TODO.deleteMany({}).exec(function(err){
        if(err)
            res.status(500).json({error: 'Something failed!'});
        else
            res.status(200).json({
                message: "Você deletou todos os registros com sucesso."
            });
    });
});

// Show All by Date
router.get('/:date', function(req, res){

    var gteDate = moment(req.params.date, "DD_MM_YYYY");
    var ltDate = moment(req.params.date, "DD_MM_YYYY").add(1, 'd');

    var searchData = {
        date : {
            $gte:  gteDate,
            $lt:   ltDate
        }
    }

    TODO.find(searchData).exec(function(err, returnedData){
        if(err)
            res.status(500).json({error: 'an error has occurred.'})
        else{
            res.status(200).json({
                message: "Success",
                numberOfRegisters: returnedData.length,
                data: returnedData
            })
        }
    });
});

module.exports = router;