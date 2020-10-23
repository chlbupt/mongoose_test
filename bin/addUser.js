const UserModel = require('../model/user')

const user = new UserModel({
  username: 'lisi',
  password: '12223232133',
  name: '李四',
  age: 20,
  sex: '男',
  tel: 121432313112
})

user.save()