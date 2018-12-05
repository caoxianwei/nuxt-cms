import mongoose from 'mongoose'

import * as handle from '../utils/handlers'
import {options,pagination} from "../utils"

//model
const Schema = mongoose.Schema
const schema = new Schema({
  like: {
    type: Boolean,
    default: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  article:{
    type: Schema.Types.ObjectId,
    ref: 'Article',
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
const Like = mongoose.model('Like', schema)
const like = {
  post: async(ctx, next) => {
    let body = ctx.request.body
    let { user, article } = body

    try{
      if(!user || !article) ctx.throw('缺少字段')
      let res = await Like.create(body)
      handle.data(ctx,res)
    }catch (e) {
      handle.error(ctx,e)
    }
  },
  del: async(ctx, next) => {
    let {id} = ctx.params

    try{
      let res = await Like.findByIdAndDelete(id)
      if(!res) ctx.throw('无记录')
      handle.success(ctx)
    }catch (e) {
      handle.error(ctx,e)
    }
  },
  list: async(ctx, next) => {
    let page = pagination(ctx)
    try{
      let count = await Like.countDocuments(page.query)
      let records = await Like.find(page.query)
        .populate({
          path: 'user',
          select: 'name avatar'
        })
        .sort(page.sort)
        .skip(page.skip)
        .limit(page.limit)
        .exec()
      handle.data(ctx,records,count)
    }catch (e) {
      handle.error(ctx,e)
    }
  }
}

export {Like,like}
