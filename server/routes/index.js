import Router from 'koa-router'
import checkToken from '../middlewares/check-token'
import checkAdmin from '../middlewares/check-admin'

const router = new Router()

//链接数据库
require('../controllers')

//controllers
import * as common from '../controllers/common'
import {user} from '../controllers/user'
import {comment} from '../controllers/comment'
import {article} from '../controllers/article'
import {tag} from '../controllers/tag'
import {logo} from '../controllers/logo'
import {contact} from '../controllers/contact'
import {like} from '../controllers/like'

router
  //tool
  .get('/gt/register-slide', common.gtRegister)
  .post('/get-code', common.getCode)
  .post('/send-email', common.sendEmail)
  //user
  .post('/user', user.register)
  .get('/user/:token', checkToken, user.getUserInfo)
  .get('/user', checkToken, user.getUserInfoById)
  .patch('/user/:id', checkToken, user.patchUserInfo)
  // .delete('/user/:username', checkToken, user.deleteUser)
  .post('/user/login', user.login)
  .post('/user/logout', checkToken, user.logout)
  .post('/user/reset-password', checkToken, user.resetPassword)
  .get('/users', checkToken, user.list)
  //article
  .post('/article', article.post)
  .get('/article/:id', article.get)
  .patch('/article/:id', article.patch)
  .delete('/article/:id',checkAdmin, article.del)
  .get('/articles', article.list)
  .get('/articles/search/:keyword', article.listBySearch)
  .get('/articles/tag/:tag', article.listByTag)
  //comment
  .post('/comment', comment.post)
  .get('/comments', comment.list)
  .delete('/comment/:id',checkAdmin, comment.del)
  //like
  .post('/like', like.post)
  .get('/likes', like.list)
  .delete('/like/:id', like.del)
  //tag
  .get('/tags', tag.list)
  //contact
  .post('/contact',contact.post)
  .get('/contact/:id', contact.get)
  .get('/contacts', contact.list)
  //logo
  .post('/logo', logo.post)
  .get('/logo/:id', logo.get)
  .patch('/logo/:id', logo.patch)
  .delete('/logo/:id',checkAdmin, logo.del)
  .get('/logos', logo.list)

export default router
