const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/olymics",{
    // useNewUrlparser:true, // debrugation warring 
    // useUnifiedTopology:true
}).then(()=>{
    console.log(" Connection Successful ");
}).catch((e)=>{
console.log(e);
})
