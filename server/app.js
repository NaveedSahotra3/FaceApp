const express = require('express');
const body = require("body-parser")
var fs = require('fs');
var  multer = require('multer')
// var path = require('path')

const upload = require('../server/db/multer')
const fileupload = require ('express-fileupload')
const path = require('path');
const cors = require('cors')
const app = express();
app.use(cors());

app.use(
    
  body.urlencoded({extended: false})
)
app.use(
  body.json()
)

app.use(fileupload());



var customConfig = multer.diskStorage({
  destination: function (req, file, next) {
      next(null, path.join( __dirname, '../../server/uploads'))
  },
  filename: function (req, file, next) {
      next(null, Math.random() + '-' + file.originalname)
   
  }
})

var upload1 = multer({ storage: customConfig })

app.post('/upload', upload.any('img') , (req,res)=>{

  console.log(req.body)
  // if(req.files == null){

  //   return res.status(400).json({msg: 'No file uploaded'})
  // }
  // const file = req.files.file;
  // file.mv(`${__dirname}/uploads/${$file.name}`, err =>{
  //   if(err){
  //     console.log(err)
  //     return res.status(500).send(err);
  //   }
  //   res.json({fileName:file.name, filePath:  `/uploads/${file.name}`})
  // })

})

app.listen(8080, ()=> console.log("severr is starting.."))