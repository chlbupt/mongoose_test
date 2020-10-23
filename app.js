// const express = require('express')
// const ejs = require('ejs')
// const bodyParser = require('body-parser')



// app.listen(3000, () => {
//   console.log('Listening at port: 3000');
// })

const ArticleModel = require('./model/article')
const ArticleCateModel = require('./model/articlecate')
const UserModel = require('./model/user')

// ArticleModel.find({}, (err, docs) => {
//   if(err){
//     console.log(err);
//     return

//   }

//   console.log(docs);
// })

// ArticleModel.aggregate([
//   {
//     $lookup:{
//       from: 'articlecate',
//       localField: 'cid',
//       foreignField: '_id',
//       as: 'cate'
//     }
//   },
//   {
//     $lookup:{
//       from: 'user',
//       localField: 'author_id',
//       foreignField: '_id',
//       as: 'user'
//     }
//   }
// ], function(err, docs){
//   if(err){
//     console.log(err);
//     return
//   }

//   console.log(JSON.stringify(docs));
// })
 
ArticleModel.find().populate('cid').populate('author_id').exec((err, docs) => {
  if(err){
    console.log(err);
    return
  }
  console.log(JSON.stringify(docs));
})