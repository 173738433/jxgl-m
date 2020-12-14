
import { post, get } from './serverApi'


//首页数据
export const getreportForm = async(data) => {
  return await get('/jixie', { params: data })
}

//树状结构数据
export const tree = async(data) => {
  return await get('/navigate-tree', { params: data })
}

//机械结构详情页数据
export const getMechanical = async(data) => {
  return await get('/details', { params: data })
}

//机械类别详情页数据
export const postMechanicalType = async(data) => {
  return await post('/category', { params: data })
}