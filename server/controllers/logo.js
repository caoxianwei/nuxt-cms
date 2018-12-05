import mongoose from 'mongoose'

import * as handle from '../utils/handlers'
import {options,pagination} from '../utils'

//model
const Schema = mongoose.Schema
const schema = new Schema({
  name: {
    type: String,
    default: ''
  },
  imgPath: {
    type: String,
    default: ''
  },
  link: {
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
const Logo = mongoose.model('Logo', schema)
const logo = {
  post: async(ctx, next) => {
    let body = ctx.request.body

    try{
      if(!body.link || !body.name) ctx.throw('缺少字段')
      let res = await Logo.create(body)
      handle.data(ctx,res)
    }catch (e) {
      handle.error(ctx,e)
    }
  },
  get: async(ctx, next) => {
    let {id} = ctx.params

    try{
      let record = await Logo.findById(id)
      handle.data(ctx,record)
    }catch (e) {
      handle.error(ctx,e)
    }
  },
  patch: async(ctx, next) => {
    let {id} = ctx.params
    let body = ctx.request.body

    try{
      body.updatedAt = Date.now()
      let res = await Logo.findByIdAndUpdate(id,body)
      if(!res) ctx.throw('无记录')
      handle.success(ctx)
    }catch (e) {
      handle.error(ctx,e)
    }
  },
  del: async(ctx, next) => {
    let {id} = ctx.params

    try{
      let res = await Logo.findByIdAndDelete(id)
      if(!res) ctx.throw('无记录')
      handle.success(ctx)
    }catch (e) {
      handle.error(ctx,e)
    }
  },
  list: async(ctx, next) => {
    let page = pagination(ctx)
    try {
      let count = await Logo.countDocuments(page.query)
      let records = await Logo.find(page.query)
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

export {Logo,logo}
