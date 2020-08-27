let mongoose = require('mongoose');


// mongoose.connect('mongodb://localhost:27017/sDB', 
// )
// // .then(()=>{
// //     console.log('db connected');

// // }).catch((err)=>{
// //     console.log(err);

// })

// mongoose.connect("mongodb://localhost:27017",
mongoose.connect("mongodb+srv://SardarSahotra:sardarns@cluster0-nk9lq.mongodb.net/test?retryWrites=true&w=majority",

    { useNewUrlParser: true, useUnifiedTopology: true }, (err, connection) => {
        console.log(err || connection)
    }).then(()=>{
        console.log('db connected');
        
    })


