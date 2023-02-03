const express = require("express");
const app = express();
app.use(express.static(__dirname+'/public'))

app.use('/views',require('./Routes/view'))
app.listen(5000,(err)=>{
    if(err) throw err
    else console.log('server is running on port 5000')
})

