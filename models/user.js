const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId : String
});

const userScema2 = new Schema({
    githubId:String
});

mongoose.model('User' , userSchema);
mongoose.model('gituser' , userScema2);
