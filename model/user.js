const mongoose = require('./db.js')

var UserSchema = mongoose.Schema({
  username:{
    type: String,
    unique: true
  },
  password: String,
  name: String,
  age:Number,
  sex: String,
  tel:Number,
  status:{
    type: Number,
    default:1
  }
})

const UserModel = mongoose.model('User', UserSchema, 'user')
module.exports = UserModel