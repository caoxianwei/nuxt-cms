import Router from 'koa-router';
import path from 'path'
import * as handle from '../utils/handlers'
import koaBody from 'koa-body'

const router = new Router()

function uploadConfig(uri) {
  return{
    multipart: true,
    formidable:{
      uploadDir:path.join(__dirname,`../../static/uploads${uri}`),
      keepExtensions: true,    // 保持文件的后缀
      maxFieldsSize:2 * 1024 * 1024  // 限制2M
    }
  }
}

router
  .post('/',koaBody(uploadConfig('')), async(ctx, next) => {
    try {
      handle.filePath(ctx,'')
    }catch (e) {
      handle.error(ctx,e)
    }
  })
  .post('/thumb',koaBody(uploadConfig('/thumb')), async(ctx, next) => {
    try {
      handle.filePath(ctx,'/thumb')
    }catch (e) {
      handle.error(ctx,e)
    }
  })

export default router
