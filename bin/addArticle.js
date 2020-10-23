const ArticleModel = require('../model/article')

// const article = new ArticleModel({
//   title: '习近平访问美国',
//   cid: '5f925a0a3535c33390672acb',
//   author_id: '5f925bce5f37a623581909cd',
//   author_name: '李四',
//   description: '习近平访问美国 此处省略300字',
//   content: '习近平访问美国 此处省略1000字'
// })

const article = new ArticleModel({
  title: '这是一个国内新闻2222',
  cid: '5f925a6d6333721e64dad6d8',
  author_id: '5f925b95519f5d2c24f486f4',
  author_name: '张三',
  description: '习近平访问美国 此处省略300字',
  content: '习近平访问美国 此处省略1000字'
})

article.save()