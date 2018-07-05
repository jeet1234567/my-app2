var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
var config = require("./config");
  
var db = mongo.connect("mongodb://localhost:27017/my-app2", function(err, response){  
   if(err){ console.log( err); }  
   else{ console.log('Connected to MongoDB' + db); }  
//    else{ console.log('Connected to ' + db, ' + ', response); } 
});  
  
   
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  
  
 var Schema = mongo.Schema;  
  
var ProductSchema = new Schema({      
 productName: { type: String },       
 weight: { type: Number },   
 price: { type: Number },
},{ versionKey: false });  
   
  
var model = mongo.model('products', ProductSchema, 'products');  
  
app.post("/api/SaveUser",function(req,res){   
 var mod = new model(req.body);  
//  if(req.body.mode =="Save")  
 //{  
    mod.save(function(err,data){  
      if(err){  
         res.send(err);                
      }  
      else{        
          res.send({data:"Record has been Inserted..!!"});  
      }  
 });  
//}  
// else   
// {  
//  model.findByIdAndUpdate(req.body.id, { name: req.body.name, address: req.body.address},  
//    function(err,data) {  
//    if (err) {  
//    res.send(err);         
//    }  
//    else{        
//           res.send({data:"Record has been Updated..!!"});  
//      }  
//  });  
  
  
// }  
 })  
  
 app.post("/api/deleteProduct",function(req,res){      
    model.remove({ _id: req.body.id }, function(err) {    
     if(err){    
         res.send(err);    
     }    
     else{      
            res.send({data:"Record has been Deleted..!!"});               
        }    
 });    
   })  
  
  
  
 app.get("/api/getProducts",function(req,res){  
    model.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });  
  })  
  
  
app.listen(4000, function () {  
    
 console.log('Example app listening on port 4000!')  
})  