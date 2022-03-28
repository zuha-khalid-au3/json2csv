const express = require('express');
const mongoose = require('mongoose');
const app = express();
// mongoose.connect(`mongodb+srv://siraj:siraj123@cluster0.w3rtc.mongodb.net/gh?retryWrites=true&w=majority`, 
//   {
//     useNewUrlParser: "true",
//   }
// );
// mongoose.connection.on("error", err => {
//   console.log("err", err)
// })
// mongoose.connection.on("connected", (err, res) => {
//   console.log("mongoose is connected")
// })

const uri ='mongodb+srv://siraj:siraj123@cluster0.w3rtc.mongodb.net/gh?authSource=admin&replicaSet=atlas-d0mbui-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'
mongoose
  .connect(uri, {
   keepAlive: 1,
   useNewUrlParser: true,
  })
  .then(() => console.log('mongoDB connected...'));
app.use('/', require('./route'))


app.listen('3000',()=>{
  console.log("running express")
})