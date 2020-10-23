var mongoose=require('./db.js')

var ArticleSchema = mongoose.Schema({
  title:{
    type: String, unique: true
  },
  cid:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ArticleCate'
  },
  author_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  author_name:{
    type: String,
  },
  description:String,
  content: String
})

var ArticleModel = mongoose.model('Article', ArticleSchema, 'article')

module.exports = ArticleModel