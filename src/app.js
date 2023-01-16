const express  =  require("express");
const app  = express();
const path = require("path");
const pug = require("pug");
require("./db/conn");
const Patient = require("./modles/registers.pug");
const { plugin } = require("mongoose");
const port = process.env.PORT || 3000;
const static_path = path.join(__dirname,"../public")
const template_path = path.join(__dirname,"../templates/views")
const partials_path = path.join(__dirname,"../templates/partials")
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static(static_path))
app.set("view engine","pug");
app.set("views",template_path);
//hbs.registerPartials(partials_path);
app.get("/",(req,res)=>{
    res.render("index.pug")
});
//creating a new user in our database
app.post("/index",async(req,res)=>{
   try{
       const registerPatient = new Patient(req.body);
       await registerPatient.save();
       res.status(201).render("index.pug");
   }catch(error){
       res.status(400).send(error);

   }
});

app.listen(port ,()=>{
    console.log(`server is running at port no ${port}`);
})