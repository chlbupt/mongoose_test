const ArticleCateModel = require('../model/articlecate')

const cate = new ArticleCateModel({
  title: '国内新闻',
  description: '国内新闻'
})

cate.save()