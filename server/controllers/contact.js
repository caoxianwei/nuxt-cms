import mongoose from 'mongoose'

import * as handle from '../utils/handlers'
import {options,pagination,sendMail} from '../utils'
import T from '../../utils/tools/check'

import {User} from "./user"

//model
const Schema = mongoose.Schema
const schema = new Schema({
  name: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
},options)

//controller
const Contact = mongoose.model('Contact', schema)
const contact = {
  post: async(ctx, next) => {
    let body = ctx.request.body

    try{
      let res = await Contact.create(body)

      //给所有管理员发送邮件
      let toUsers = ''
      let admin = await User.find({role:'管理员'})
      if(!T.isEmpty(admin)){
        if(admin.length<2){
          toUsers = admin[0].email
        }else {
          admin.forEach(item=>{
            toUsers += `${item.email},`
          })
        }
      }
      let html = `<div>姓名：${body.name}</div><div>电话：${body.phone}</div><div>内容：${body.message}</div>`
      await sendMail(toUsers,'您有新的信息',html)

      handle.data(ctx,res)
    }catch (e) {
      handle.error(ctx,e)
    }
  },
  get: async(ctx, next) => {
    let {id} = ctx.params

    try{
      let record = await Contact.findById(id)
      handle.data(ctx,record)
    }catch (e) {
      handle.error(ctx,e)
    }
  },
  list: async(ctx, next) => {
    let page = pagination(ctx)
    try {
      let count = await Contact.countDocuments(page.query)
      let records = await Contact.find(page.query)
        .sort(page.sort)
        .skip(page.skip)
        .limit(page.limit)
        .exec()
      handle.data(ctx,records,count)
    } catch (e) {
      handle.error(ctx,e)
    }
  }
}

export {Contact,contact}
