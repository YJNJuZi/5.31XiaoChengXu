// 云函数入口文件
const cloud = require('wx-server-sdk')
//取对应的数据库集合
const todos = db.collection('list5-31')

cloud.init()//初始化云函数

// 云函数入口函数
exports.main = async (event, context) => {
  console.log(event) //用来接收前端传参用的
  return event.number
}