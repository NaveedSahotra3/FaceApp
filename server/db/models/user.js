let mongoose = require('mongoose');


let userSchema = mongoose.Schema({
    FirstName: {type: String  } ,
    LastName: {type: String  } ,
    email: {type: String } ,
    psw: {type: String  } ,
    birthday_day: {type: String } ,
    birthday_month: {type: String  } ,
    birthday_year: {type: String  } ,
    Gender : {type: String  } ,
    img : {type: String  } ,

    // img : {type: String , required:true} ,
    profile: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Formaa"
    }

   
});


let User = mongoose.model('user', userSchema);


module.exports = User;
