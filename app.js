var express     = require("express"),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');
    // ToDo        = require('./models/todo');

// Requiring Routes
var indexRoutes = require("./routes/index");
var allRoutes   = require("./routes/all");

var dbUrl = "mongodb://localhost:27017/todo_app";

mongoose.connect(dbUrl, {useNewUrlParser: true, useFindAndModify: false});

var middlewareValidation = function(req, res, next){
    next();
    // if(req.headers["special-header"]){
    // Cabeçalho especial.
    //     next();
    // }else{
    //     res.status(403).json({error: "Forbidden"});
    // }
}

app.use(middlewareValidation);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/todo/all", allRoutes);
app.use("/todo", indexRoutes);

app.listen(3000, () => {
    console.log("Server has Started");
});