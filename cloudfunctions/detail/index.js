// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const db = cloud.database();
// 云函数入口函数
exports.main = async (event) => {
  const data = await db.collection(event.database).doc(Number(event.id)).get();

  return {
    code: 200,
    ...data
  };
}