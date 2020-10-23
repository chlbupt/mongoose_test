const mongoose = require('./db.js')

const ArticleCateSchema = mongoose.Schema({
  title:{
    type: String,
    unique: true
  },
  description:String,
  addTime:{
    type:Date
  }
})

const ArticleCateModel = mongoose.model('ArticleCate', ArticleCateSchema, 'articlecate')

module.exports = ArticleCateModel