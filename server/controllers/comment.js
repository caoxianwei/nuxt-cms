import mongoose from 'mongoose'

import * as handle from '../utils/handlers'
import {options,pagination} from "../utils"

//model
const Schema = mongoose.Schema
const schema = new Schema({
  content: {
    type: String,
    default: ''
  },
  reply: {
    type: Schema.Types.ObjectId,
    ref: 'User',
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
const Comment =  mongoose.model('Comment', schema)
const comment = {
  post: async(ctx, next) => {
    let body = ctx.request.body
    let { content, user, article } = body

    try{
      if(!content || !user || !article) ctx.throw('缺少字段')
      await Comment.create(body)
      handle.success(ctx)
    }catch (e) {
      handle.error(ctx,e)
    }
  },
  del: async(ctx, next) => {
    let {id} = ctx.params

    try{
      let res = await Comment.findByIdAndDelete(id)
      if(!res) ctx.throw('无记录')
      handle.success(ctx)
    }catch (e) {
      handle.error(ctx,e)
    }
  },
  list: async(ctx, next) => {
    let page = pagination(ctx)
    try{
      let count = await Comment.countDocuments(page.query)
      let records = await Comment.find(page.query)
        .populate({
          path: 'user',
          select: 'name avatar'
        })
        .populate({
          path: 'reply',
          select: 'name'
        })
        .populate({
          path: 'article',
          select: 'user title',
          populate: {path: 'user',select: 'name'}
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

export {Comment,comment}
