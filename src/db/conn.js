const mongoose =  require("mongoose");

mongoose.connect("mongodb://localhost:27017/pregister").then(()=>{
    console.log(`connection sucessful`);
}).catch((e)=>{
    console.log(`no connection`);
})