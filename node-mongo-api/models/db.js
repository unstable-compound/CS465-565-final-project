//express
//express-handlebars
//mongoose
// body-parser
//nodemon
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/EmployeeDB",{ useUnifiedTopology:true,useNewUrlParser:true }, (error)=>{
    if(!error)
    {
        console.log("Success");
        
    }
    else{
        console.log("error connecting to db")
    }
});
require('./employee.model');
