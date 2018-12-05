import mongoose from 'mongoose'

import * as handle from '../utils/handlers'
import {options} from '../utils'

//model
const Schema = mongoose.Schema
const schema = new Schema({
  name: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
},options)

//controller
const Tag = mongoose.model('Tag', schema)
const tag = {
  list: async(ctx, next) => {
    let query = ctx.query
    try {
      let records = await Tag.find(query)
        .sort({ 'updatedAt': -1 })
        .exec()
      handle.data(ctx,records)
    } catch (e) {
      handle.error(ctx,e)
    }
  }
}

export {Tag,tag}
