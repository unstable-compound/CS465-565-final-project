const mongoose = require("mongoose");
var employeeSchema = new mongoose.Schema({      //object and constructor
    fullName: {                                 //fields
        type : String,      
    },
    email: {
        type : String,  
    },
    mobile: {
        type : String,  
    },
    city: {
        type : String,  
    },
});
mongoose.model("Employee",employeeSchema)    //by default it will use the name of collections