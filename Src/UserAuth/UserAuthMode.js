const mongoose=require("mongoose")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    emailId:{
        type:String,
        required: "enter email address",
        unique:true,
        trim:true
    },
    username:{
        type:String,
        required: "enter username",
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    organisingMeetings: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'meetings',
        },
    ],
    attendingMeetings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'meetings',
        },
    ],
})

UserSchema.pre("save",function(next,done){
    let user=this;
    //console.log(user)
    bcrypt.hash(user.password, 10, function(err, hash) {
         if (err){
             next(err)
         }
         //console.log(hash)
         user.password=hash;
         next();
 
     });
})

UserSchema.methods.validatePassword = function(password,cb) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    })

};

UserSchema.methods.generateJWT = function() {
   // console.log(process.env.JWTSECREAT,"67")
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);

    return jwt.sign({
        email: this.emailId,
        id: this._id,
        exp: parseInt(expirationDate.getTime() / 1000, 10),
    },process.env.JWTSECREAT);
}

UserSchema.methods.toAuthJSON = function(res) {
    //console.log("i, JSON")
    res.cookie('JWT', this.generateJWT(), {
        maxAge: 86_400_000,
        httpOnly: true
        });
       // console.log(res.cookie.JWT)

    return {
        user: this,
        token: this.generateJWT(),
    };
};
const UserModel=mongoose.model("users",UserSchema);

exports.UsersModel=UserModel;


