//CRUD operations related to Employee
const express = require("express");       //request statement
//const mongoose = require("mongoose");
var router = express.Router();
//const EmployeeModel = mongoose.model("Employee")

router.get('/',(req,res)=>{
    //res.json('sample text');
   res.render("employee/addOrEdit",{
       viewTitle : "Insert Employee"
   });
});
   
module.exports = router;