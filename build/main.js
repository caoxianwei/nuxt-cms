require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_tools_file__ = __webpack_require__(32);
/* harmony export (immutable) */ exports["d"] = success;
/* harmony export (immutable) */ exports["c"] = data;
/* harmony export (immutable) */ exports["b"] = error;
/* unused harmony export message */
/* harmony export (immutable) */ exports["a"] = filePath;


function success(ctx) {
  return ctx.body = {
    success: true
  };
}

function data(ctx, data, total) {
  return ctx.body = {
    success: true,
    data: data,
    total: total
  };
}

function error(ctx, error) {
  console.error(error);
  return ctx.body = {
    success: false,
    message: error.message
  };
}

function message(ctx, message) {
  console.error(error);
  return ctx.body = {
    success: false,
    message: message
  };
}

function filePath(ctx, uri) {
  var file = ctx.request.files.file;

  var fileName = void 0,
      filePath = void 0;
  if (file.length > 0) {
    filePath = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = file[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var f = _step.value;

        fileName = __WEBPACK_IMPORTED_MODULE_0__utils_tools_file__["a" /* default */].getFileName(f.path);
        var fPath = "/uploads" + uri + "/" + fileName;
        filePath.push({ name: f.name, url: fPath });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return ctx.body = {
      success: true,
      data: filePath
    };
  } else {
    fileName = __WEBPACK_IMPORTED_MODULE_0__utils_tools_file__["a" /* default */].getFileName(file.path);
    filePath = "/uploads" + uri + "/" + fileName;

    return ctx.body = {
      success: true,
      data: {
        name: file.name,
        url: filePath
      }
    };
  }
}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nodemailer__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nodemailer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nodemailer__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return options; });
/* unused harmony export sleep */
/* harmony export (immutable) */ exports["b"] = pagination;
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return sendMail; });


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var config = __webpack_require__(4);

var options = {
  toJSON: {
    virtuals: true,
    versionKey: false,
    transform: function transform(doc, ret) {
      delete ret._id;
      return ret;
    }
  }
};

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, time);
  });
}

function pagination(ctx) {
  var query = ctx.query;
  var _query$pageIndex = query.pageIndex,
      pageIndex = _query$pageIndex === undefined ? 1 : _query$pageIndex,
      _query$pageSize = query.pageSize,
      pageSize = _query$pageSize === undefined ? 100 : _query$pageSize,
      _query$pageSort = query.pageSort,
      pageSort = _query$pageSort === undefined ? 'createdAt' : _query$pageSort;

  var skip = (Number(pageIndex) - 1) * Number(pageSize);
  var limit = Number(pageSize);
  var sort = {};
  sort[pageSort] = -1;
  delete query.pageIndex;
  delete query.pageSize;
  delete query.pageSort;
  return {
    query: query,
    skip: skip,
    limit: limit,
    sort: sort
  };
}

var sendMail = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(to, subject, html) {
    var transporter, mailOptions, res;
    return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!to || !subject || !html)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt('return', '缺少字段');

          case 2:
            transporter = __WEBPACK_IMPORTED_MODULE_1_nodemailer___default.a.createTransport({
              host: 'smtp.exmail.qq.com',
              service: 'qq', //QQ邮箱
              port: 465,
              secure: true,
              auth: {
                user: config.SMTPConfig.user,
                pass: config.SMTPConfig.pass
              }
            });
            mailOptions = {
              from: config.SMTPConfig.user,
              to: to,
              subject: subject,
              html: html
            };
            _context.next = 6;
            return transporter.sendMail(mailOptions);

          case 6:
            res = _context.sent;
            return _context.abrupt('return', res);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function sendMail(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 4 */
/***/ function(module, exports) {

var env = process.env.__ENV;

console.log('env:', process.env.__ENV);

module.exports = {
  secret: 'nuxt-koa-mongoose-pwa',
  app: {
    domain: env === 'production' ? 'http://120.25.159.24:3000' : env === 'uat' ? 'http://120.25.159.24:3000' : 'http://localhost:3000',
    host: '0.0.0.0',
    port: 3000
  },
  admin: {
    role: '超级管理员',
    username: 'paddy',
    password: 'paddy',
    name: 'paddy',
    email: 'patricknieh@qq.com'
  },
  mongodb: {
    host: '127.0.0.1',
    database: 'nuxt-cms',
    port: 25015,
    username: 'paddy',
    password: 'paddy123'
  },
  SMTPConfig: {
    user: 'patricknieh@qq.com',
    pass: 'Art18926990080'
  }
};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__static_gt_slide__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return user; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









var config = __webpack_require__(4);

//model
var Schema = __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.Schema;
var schema = new Schema({
  role: {
    type: String,
    default: '用户'
  },
  avatar: {
    type: String,
    default: '/icon.png'
  },
  username: {
    type: String,
    default: '',
    index: true
  },
  password: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  email: {
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
}, __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* options */]);

//statics
schema.statics = {
  findByRole: function findByRole(role, cb) {
    return this.find({ role: role }, cb);
  }

  //methods
};schema.methods = {
  sayHi: function sayHi() {
    console.log('Hi, welcome ' + this.name);
  }

  //query
};schema.query = {
  byName: function byName(name) {
    return this.where({ username: new RegExp(name, 'i') });
  }

  //controller
};var User = __WEBPACK_IMPORTED_MODULE_3_mongoose___default.a.model('User', schema);
var user = {
  register: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      var body, email, username, password, emailRecord, usernameRecord;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = ctx.request.body;
              email = body.email, username = body.username, password = body.password;
              _context.prev = 2;
              _context.next = 5;
              return User.findOne({ email: email });

            case 5:
              emailRecord = _context.sent;

              if (emailRecord) ctx.throw('此邮箱已经注册过，如忘记密码请重置密码');

              _context.next = 9;
              return User.findOne({ username: username });

            case 9:
              usernameRecord = _context.sent;

              if (usernameRecord) ctx.throw('此用户名已被使用，换一个再试试');

              body.password = __WEBPACK_IMPORTED_MODULE_2_md5___default()(password);
              _context.next = 14;
              return User.create(body);

            case 14:
              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["d" /* success */](ctx);
              _context.next = 20;
              break;

            case 17:
              _context.prev = 17;
              _context.t0 = _context['catch'](2);

              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["b" /* error */](ctx, _context.t0);

            case 20:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[2, 17]]);
    }));

    function register(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return register;
  }(),
  login: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
      var _ctx$request$body, username, password, geetest_challenge, geetest_validate, geetest_seccode, success, _user, token;

      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password, geetest_challenge = _ctx$request$body.geetest_challenge, geetest_validate = _ctx$request$body.geetest_validate, geetest_seccode = _ctx$request$body.geetest_seccode;

              password = __WEBPACK_IMPORTED_MODULE_2_md5___default()(password);
              _context2.prev = 2;
              _context2.next = 5;
              return __WEBPACK_IMPORTED_MODULE_5__static_gt_slide__["a" /* default */].validate(ctx.session.failback, {
                geetest_challenge: geetest_challenge,
                geetest_validate: geetest_validate,
                geetest_seccode: geetest_seccode
              });

            case 5:
              success = _context2.sent;

              if (!success) ctx.throw('GT 验证失败');
              // 验证用户
              _context2.next = 9;
              return User.findOne({ username: username, password: password });

            case 9:
              _user = _context2.sent;

              if (!_user) ctx.throw('用户名或密码错');

              token = __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.sign({ userId: _user.id, userName: _user.username }, config.secret);

              ctx.cookies.set('token', token);
              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["c" /* data */](ctx, { token: token });
              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t0 = _context2['catch'](2);

              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["b" /* error */](ctx, _context2.t0);

            case 19:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this, [[2, 16]]);
    }));

    function login(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return login;
  }(),
  logout: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              try {
                ctx.cookies.set('token', null);
                __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["d" /* success */](ctx);
              } catch (e) {
                __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["b" /* error */](ctx, e);
              }

            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this);
    }));

    function logout(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return logout;
  }(),
  resetPassword: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
      var _ctx$request$body2, username, email, code, newPassword;

      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _ctx$request$body2 = ctx.request.body, username = _ctx$request$body2.username, email = _ctx$request$body2.email, code = _ctx$request$body2.code, newPassword = _ctx$request$body2.newPassword;
              _context4.prev = 1;

              if (!username || !email || !code || !newPassword) ctx.throw('缺少字段');
              if (code != ctx.session.validateCode) ctx.throw('验证码不正确');

              _context4.next = 6;
              return User.updateOne({ username: username, email: email }, { password: __WEBPACK_IMPORTED_MODULE_2_md5___default()(newPassword), updatedAt: Date.now() });

            case 6:
              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["d" /* success */](ctx);
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4['catch'](1);

              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["b" /* error */](ctx, _context4.t0);

            case 12:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this, [[1, 9]]);
    }));

    function resetPassword(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return resetPassword;
  }(),
  getUserInfo: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
      var token, decoded, _user2;

      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              token = ctx.params.token;
              _context5.prev = 1;
              _context5.next = 4;
              return __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.verify(token, config.secret);

            case 4:
              decoded = _context5.sent;
              _context5.next = 7;
              return User.findById(decoded.userId, '-password');

            case 7:
              _user2 = _context5.sent;

              if (!_user2) ctx.throw('无记录');
              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["c" /* data */](ctx, _user2);
              _context5.next = 15;
              break;

            case 12:
              _context5.prev = 12;
              _context5.t0 = _context5['catch'](1);

              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["b" /* error */](ctx, _context5.t0);

            case 15:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this, [[1, 12]]);
    }));

    function getUserInfo(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return getUserInfo;
  }(),
  getUserInfoById: function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(ctx, next) {
      var id, _user3;

      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = ctx.query.id;
              _context6.prev = 1;
              _context6.next = 4;
              return User.findById(id, { name: 1, role: 1 });

            case 4:
              _user3 = _context6.sent;

              if (!_user3) ctx.throw('无记录');
              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["c" /* data */](ctx, _user3);
              _context6.next = 12;
              break;

            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6['catch'](1);

              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["b" /* error */](ctx, _context6.t0);

            case 12:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this, [[1, 9]]);
    }));

    function getUserInfoById(_x11, _x12) {
      return _ref6.apply(this, arguments);
    }

    return getUserInfoById;
  }(),
  patchUserInfo: function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(ctx, next) {
      var id, body, _user4;

      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              id = ctx.params.id;
              body = ctx.request.body;
              _context7.prev = 2;

              if (body.password) ctx.throw('包含禁止修改的字段');

              _context7.next = 6;
              return User.findById(id);

            case 6:
              _user4 = _context7.sent;

              if (!_user4) ctx.throw('用户不存在');
              if (_user4.role === '超级管理员') ctx.throw('超级管理员不允许修改');

              //修改密码

              if (!(body.oldPassword && body.newPassword)) {
                _context7.next = 15;
                break;
              }

              if (_user4.password !== __WEBPACK_IMPORTED_MODULE_2_md5___default()(body.oldPassword)) ctx.throw('原密码不正确');
              _context7.next = 13;
              return User.findByIdAndUpdate(id, { password: __WEBPACK_IMPORTED_MODULE_2_md5___default()(body.newPassword), updatedAt: Date.now() });

            case 13:
              _context7.next = 19;
              break;

            case 15:
              if (body.role === '超级管理员') ctx.throw('超级管理员只能有一个');
              //修改其他信息
              body.updatedAt = Date.now();
              _context7.next = 19;
              return User.findByIdAndUpdate(id, body);

            case 19:
              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["d" /* success */](ctx);
              _context7.next = 25;
              break;

            case 22:
              _context7.prev = 22;
              _context7.t0 = _context7['catch'](2);

              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["b" /* error */](ctx, _context7.t0);

            case 25:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this, [[2, 22]]);
    }));

    function patchUserInfo(_x13, _x14) {
      return _ref7.apply(this, arguments);
    }

    return patchUserInfo;
  }(),
  deleteUser: function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(ctx, next) {
      var username, findUser;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              username = ctx.params.username;
              _context8.prev = 1;
              _context8.next = 4;
              return User.findOne({ username: username });

            case 4:
              findUser = _context8.sent;

              if (!findUser) ctx.throw('用户不存在');
              if (findUser.role === '超级管理员') ctx.throw('超级管理员不允许删除');
              _context8.next = 9;
              return User.findOneAndDelete({ username: username });

            case 9:
              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["d" /* success */](ctx);
              _context8.next = 15;
              break;

            case 12:
              _context8.prev = 12;
              _context8.t0 = _context8['catch'](1);

              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["b" /* error */](ctx, _context8.t0);

            case 15:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this, [[1, 12]]);
    }));

    function deleteUser(_x15, _x16) {
      return _ref8.apply(this, arguments);
    }

    return deleteUser;
  }(),
  list: function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee9(ctx, next) {
      var page, count, users;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              page = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* pagination */])(ctx);
              _context9.prev = 1;
              _context9.next = 4;
              return User.countDocuments(page.query);

            case 4:
              count = _context9.sent;
              _context9.next = 7;
              return User.find(page.query).select({ password: 0 }).sort(page.sort).skip(page.skip).limit(page.limit).exec();

            case 7:
              users = _context9.sent;

              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["c" /* data */](ctx, users, count);
              _context9.next = 14;
              break;

            case 11:
              _context9.prev = 11;
              _context9.t0 = _context9['catch'](1);

              __WEBPACK_IMPORTED_MODULE_4__utils_handlers__["b" /* error */](ctx, _context9.t0);

            case 14:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, _this, [[1, 11]]);
    }));

    function list(_x17, _x18) {
      return _ref9.apply(this, arguments);
    }

    return list;
  }()
};



/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa-body");

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Tag; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return tag; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






//model
var Schema = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Schema;
var schema = new Schema({
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
}, __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* options */]);

//controller
var Tag = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('Tag', schema);
var tag = {
  list: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      var query, records;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = ctx.query;
              _context.prev = 1;
              _context.next = 4;
              return Tag.find(query).sort({ 'updatedAt': -1 }).exec();

            case 4:
              records = _context.sent;

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["c" /* data */](ctx, records);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context.t0);

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[1, 8]]);
    }));

    function list(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return list;
  }()
};



/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gt3_sdk__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gt3_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_gt3_sdk__);

var captcha = new __WEBPACK_IMPORTED_MODULE_0_gt3_sdk___default.a({
  geetest_id: 'e6721cd02ebe3ee262c9b84337367787',
  geetest_key: 'a2a4a900f75241998c442274f3e1e492'
});

/* harmony default export */ exports["a"] = captcha;

/***/ },
/* 12 */
/***/ function(module, exports) {

module.exports = require("md5");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var webpack = __webpack_require__(39);
var config = __webpack_require__(4);
var path = __webpack_require__(7);
module.exports = {
  head: {
    title: 'NUXT-CMS',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }, { name: 'renderer', content: 'webkit' }, { name: 'author', content: 'paddy' }, { name: 'apple-mobile-web-app-capable', content: 'yes' }, { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }, { hid: 'description', name: 'description', content: '' }, { hid: 'keywords', name: 'keywords', content: '' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, { rel: 'apple-touch-icon', href: '/icon.png' }],
    script: [{ src: '/cnzz.js' }, { src: '//cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js' }, { src: '/gt.js' }]
  },
  css: ['~/scss/main.scss'],
  loading: false,
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios', '@nuxtjs/proxy'],
  plugins: ['~/plugins/components', '~/plugins/filters', '~/plugins/directives', '~/plugins/i18n', '~/plugins/axios', '~/plugins/element-ui', '~/plugins/mint-ui', '~/plugins/vue-awesome-swiper', '~/plugins/vue-quill-editor'],
  router: {
    middleware: ['route']
  },
  build: {
    analyze: process.env.__ENV === 'development' ? true : false,
    extractCSS: true,
    cssSourceMap: false,
    maxChunkSize: 100000,
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    },
    postcss: [__webpack_require__(36)({
      remUnit: 15 // 转换基本单位
    })],
    plugins: [new webpack.ProvidePlugin({
      // '_': 'lodash'
    })],
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.entry['polyfill'] = ['babel-polyfill'];
        // 添加 alias 配置
        Object.assign(config.resolve.alias, {
          'utils': path.resolve(__dirname, 'utils')
        });
      }
      // console.log('webpack config:', config)
    }
  },
  env: {
    __ENV: process.env.__ENV
  },
  axios: {
    baseURL: config.app.domain + '/api'
    // credentials: true,
    // proxy:true
  },
  proxy: {
    // '/api2': 'http://example.com'
  },
  manifest: {
    name: 'nuxt-cms',
    description: 'A pwa program',
    theme_color: '#618cb9'
  }
};
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__middlewares_check_token__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__middlewares_check_admin__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_common__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_user__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__controllers_comment__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__controllers_article__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controllers_tag__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__controllers_logo__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__controllers_contact__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__controllers_like__ = __webpack_require__(27);




var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();

//链接数据库
__webpack_require__(26);

//controllers









router
//tool
.get('/gt/register-slide', __WEBPACK_IMPORTED_MODULE_3__controllers_common__["a" /* gtRegister */]).post('/get-code', __WEBPACK_IMPORTED_MODULE_3__controllers_common__["b" /* getCode */]).post('/send-email', __WEBPACK_IMPORTED_MODULE_3__controllers_common__["c" /* sendEmail */])
//user
.post('/user', __WEBPACK_IMPORTED_MODULE_4__controllers_user__["a" /* user */].register).get('/user/:token', __WEBPACK_IMPORTED_MODULE_1__middlewares_check_token__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__controllers_user__["a" /* user */].getUserInfo).get('/user', __WEBPACK_IMPORTED_MODULE_1__middlewares_check_token__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__controllers_user__["a" /* user */].getUserInfoById).patch('/user/:id', __WEBPACK_IMPORTED_MODULE_1__middlewares_check_token__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__controllers_user__["a" /* user */].patchUserInfo)
// .delete('/user/:username', checkToken, user.deleteUser)
.post('/user/login', __WEBPACK_IMPORTED_MODULE_4__controllers_user__["a" /* user */].login).post('/user/logout', __WEBPACK_IMPORTED_MODULE_1__middlewares_check_token__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__controllers_user__["a" /* user */].logout).post('/user/reset-password', __WEBPACK_IMPORTED_MODULE_1__middlewares_check_token__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__controllers_user__["a" /* user */].resetPassword).get('/users', __WEBPACK_IMPORTED_MODULE_1__middlewares_check_token__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__controllers_user__["a" /* user */].list)
//article
.post('/article', __WEBPACK_IMPORTED_MODULE_6__controllers_article__["a" /* article */].post).get('/article/:id', __WEBPACK_IMPORTED_MODULE_6__controllers_article__["a" /* article */].get).patch('/article/:id', __WEBPACK_IMPORTED_MODULE_6__controllers_article__["a" /* article */].patch).delete('/article/:id', __WEBPACK_IMPORTED_MODULE_2__middlewares_check_admin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__controllers_article__["a" /* article */].del).get('/articles', __WEBPACK_IMPORTED_MODULE_6__controllers_article__["a" /* article */].list).get('/articles/search/:keyword', __WEBPACK_IMPORTED_MODULE_6__controllers_article__["a" /* article */].listBySearch).get('/articles/tag/:tag', __WEBPACK_IMPORTED_MODULE_6__controllers_article__["a" /* article */].listByTag)
//comment
.post('/comment', __WEBPACK_IMPORTED_MODULE_5__controllers_comment__["a" /* comment */].post).get('/comments', __WEBPACK_IMPORTED_MODULE_5__controllers_comment__["a" /* comment */].list).delete('/comment/:id', __WEBPACK_IMPORTED_MODULE_2__middlewares_check_admin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__controllers_comment__["a" /* comment */].del)
//like
.post('/like', __WEBPACK_IMPORTED_MODULE_10__controllers_like__["a" /* like */].post).get('/likes', __WEBPACK_IMPORTED_MODULE_10__controllers_like__["a" /* like */].list).delete('/like/:id', __WEBPACK_IMPORTED_MODULE_10__controllers_like__["a" /* like */].del)
//tag
.get('/tags', __WEBPACK_IMPORTED_MODULE_7__controllers_tag__["a" /* tag */].list)
//contact
.post('/contact', __WEBPACK_IMPORTED_MODULE_9__controllers_contact__["a" /* contact */].post).get('/contact/:id', __WEBPACK_IMPORTED_MODULE_9__controllers_contact__["a" /* contact */].get).get('/contacts', __WEBPACK_IMPORTED_MODULE_9__controllers_contact__["a" /* contact */].list)
//logo
.post('/logo', __WEBPACK_IMPORTED_MODULE_8__controllers_logo__["a" /* logo */].post).get('/logo/:id', __WEBPACK_IMPORTED_MODULE_8__controllers_logo__["a" /* logo */].get).patch('/logo/:id', __WEBPACK_IMPORTED_MODULE_8__controllers_logo__["a" /* logo */].patch).delete('/logo/:id', __WEBPACK_IMPORTED_MODULE_2__middlewares_check_admin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_8__controllers_logo__["a" /* logo */].del).get('/logos', __WEBPACK_IMPORTED_MODULE_8__controllers_logo__["a" /* logo */].list);

/* harmony default export */ exports["a"] = router;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_body__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_body__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a();

function uploadConfig(uri) {
  return {
    multipart: true,
    formidable: {
      uploadDir: __WEBPACK_IMPORTED_MODULE_2_path___default.a.join(__dirname, '../../static/uploads' + uri),
      keepExtensions: true, // 保持文件的后缀
      maxFieldsSize: 2 * 1024 * 1024 // 限制2M
    }
  };
}

router.post('/', __WEBPACK_IMPORTED_MODULE_4_koa_body___default()(uploadConfig('')), function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["a" /* filePath */](ctx, '');
            } catch (e) {
              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["b" /* error */](ctx, e);
            }

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}()).post('/thumb', __WEBPACK_IMPORTED_MODULE_4_koa_body___default()(uploadConfig('/thumb')), function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            try {
              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["a" /* filePath */](ctx, '/thumb');
            } catch (e) {
              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["b" /* error */](ctx, e);
            }

          case 1:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ exports["a"] = router;
/* WEBPACK VAR INJECTION */}.call(exports, "server/routes"))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var time = {
  //获取毫秒数
  getMillisecond: function getMillisecond(num, type) {
    switch (type) {
      case 'day':
        return num * 24 * 60 * 60 * 1000;
        break;
      case 'hour':
        return num * 60 * 60 * 1000;
        break;
      case 'minute':
        return num * 60 * 1000;
        break;
      case 'second':
        return num * 1000;
        break;
    }
  },
  //转换毫秒数
  formatMillisecond: function formatMillisecond(num, to) {
    switch (to) {
      case 'day':
        return num / 24 / 60 / 60 / 1000;
        break;
      case 'hour':
        return num / 60 / 60 / 1000;
        break;
      case 'minute':
        return num / 60 / 1000;
        break;
      case 'second':
        return num / 1000;
        break;
    }
  },
  //随机间歇执行
  nextTime: 0,
  frequency: function frequency(callback, speed) {
    var _this = this;

    return setInterval(function () {
      var now = new Date().getTime();
      if (now >= _this.nextTime) {
        callback();
        _this.nextTime = now + Math.random() * speed;
      }
    }, 300);
  }
};

/* harmony default export */ exports["a"] = time;

/***/ },
/* 17 */
/***/ function(module, exports) {

module.exports = require("@koa/cors");

/***/ },
/* 18 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 19 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ },
/* 20 */
/***/ function(module, exports) {

module.exports = require("koa-static");

/***/ },
/* 21 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_promise_async__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_promise_async___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_promise_async__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tag__ = __webpack_require__(10);
/* unused harmony export Article */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return article; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









//model
var Schema = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.Schema;
var schema = new Schema({
  type: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  thumb: {
    type: String,
    default: ''
  },
  content: {
    type: String,
    default: ''
  },
  view: {
    type: Number,
    default: 0
  },
  status: {
    type: Number,
    default: 0 //0:未发布 1:已发布
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tags: [{
    type: Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, __WEBPACK_IMPORTED_MODULE_4__utils__["a" /* options */]);

//controller
var Article = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('Article', schema);
var article = {
  post: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
      var body, type, tags, title, content, user;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              body = ctx.request.body;
              type = body.type, tags = body.tags, title = body.title, content = body.content, user = body.user;
              _context2.prev = 2;

              if (!type || !tags || !title || !content || !user) ctx.throw('缺少字段');

              // 查询标签集合，没有就插入新标签
              // 查询出该文章所有标签的id
              body.tags = [];

              _context2.next = 7;
              return __WEBPACK_IMPORTED_MODULE_1_promise_async___default.a.each(tags, function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(item, callback) {
                  var tag;
                  return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return __WEBPACK_IMPORTED_MODULE_5__tag__["b" /* Tag */].findOneAndUpdate({ name: item }, { name: item }, { new: true, upsert: true, setDefaultsOnInsert: true });

                        case 2:
                          tag = _context.sent;

                          body.tags.push(tag._id);
                          callback(); //very important

                        case 5:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this);
                }));

                return function (_x3, _x4) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 7:
              _context2.next = 9;
              return Article.create(body);

            case 9:
              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["d" /* success */](ctx);
              _context2.next = 15;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2['catch'](2);

              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["b" /* error */](ctx, _context2.t0);

            case 15:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this, [[2, 12]]);
    }));

    function post(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return post;
  }(),
  get: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
      var id, record, preArticle, nextArticle, temp, pre, _next, result;

      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = ctx.params.id;
              _context3.prev = 1;
              _context3.next = 4;
              return Article.findById(id).populate({
                path: 'tags',
                select: 'name'
              }).populate({
                path: 'user',
                select: 'name'
              }).exec();

            case 4:
              record = _context3.sent;
              _context3.next = 7;
              return Article.findByIdAndUpdate(id, { view: record.view + 1 });

            case 7:
              _context3.next = 9;
              return Article.find({ 'createdAt': { '$lt': record.createdAt } }).select('title').sort({ _id: -1 }).limit(1);

            case 9:
              preArticle = _context3.sent;
              _context3.next = 12;
              return Article.find({ 'createdAt': { '$gt': record.createdAt } }).select('title').sort({ _id: 1 }).limit(1);

            case 12:
              nextArticle = _context3.sent;
              temp = {};
              pre = preArticle[0] ? preArticle[0] : {};
              _next = nextArticle[0] ? nextArticle[0] : {};
              result = Object.assign(temp, record._doc, { pre: pre }, { next: _next });

              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["c" /* data */](ctx, result);
              _context3.next = 23;
              break;

            case 20:
              _context3.prev = 20;
              _context3.t0 = _context3['catch'](1);

              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["b" /* error */](ctx, _context3.t0);

            case 23:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this, [[1, 20]]);
    }));

    function get(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return get;
  }(),
  patch: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
      var id, body, user, tags, res;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              id = ctx.params.id;
              body = ctx.request.body;
              user = body.user, tags = body.tags;
              _context5.prev = 3;

              if (user) ctx.throw('禁止修改字段');

              body.tags = [];
              _context5.next = 8;
              return __WEBPACK_IMPORTED_MODULE_1_promise_async___default.a.each(tags, function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(item, callback) {
                  var tag;
                  return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return __WEBPACK_IMPORTED_MODULE_5__tag__["b" /* Tag */].findOneAndUpdate({ name: item }, { name: item }, { new: true, upsert: true, setDefaultsOnInsert: true });

                        case 2:
                          tag = _context4.sent;

                          body.tags.push(tag._id);
                          callback();

                        case 5:
                        case 'end':
                          return _context4.stop();
                      }
                    }
                  }, _callee4, _this);
                }));

                return function (_x9, _x10) {
                  return _ref5.apply(this, arguments);
                };
              }());

            case 8:

              body.updatedAt = Date.now();
              _context5.next = 11;
              return Article.findByIdAndUpdate(id, body);

            case 11:
              res = _context5.sent;

              if (!res) ctx.throw('无记录');
              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["d" /* success */](ctx);
              _context5.next = 19;
              break;

            case 16:
              _context5.prev = 16;
              _context5.t0 = _context5['catch'](3);

              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["b" /* error */](ctx, _context5.t0);

            case 19:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this, [[3, 16]]);
    }));

    function patch(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return patch;
  }(),
  del: function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee6(ctx, next) {
      var id, res;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              id = ctx.params.id;
              _context6.prev = 1;
              _context6.next = 4;
              return Article.findByIdAndDelete(id);

            case 4:
              res = _context6.sent;

              if (!res) ctx.throw('无记录');
              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["d" /* success */](ctx);
              _context6.next = 12;
              break;

            case 9:
              _context6.prev = 9;
              _context6.t0 = _context6['catch'](1);

              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["b" /* error */](ctx, _context6.t0);

            case 12:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, _this, [[1, 9]]);
    }));

    function del(_x11, _x12) {
      return _ref6.apply(this, arguments);
    }

    return del;
  }(),
  list: function () {
    var _ref7 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee7(ctx, next) {
      var page, count, records;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              page = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* pagination */])(ctx);
              _context7.prev = 1;
              _context7.next = 4;
              return Article.countDocuments(page.query);

            case 4:
              count = _context7.sent;
              _context7.next = 7;
              return Article.find(page.query).populate({
                path: 'user',
                select: 'name'
              }).populate({
                path: 'tags',
                select: 'name'
              }).sort(page.sort).skip(page.skip).limit(page.limit).exec();

            case 7:
              records = _context7.sent;

              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["c" /* data */](ctx, records, count);
              _context7.next = 14;
              break;

            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7['catch'](1);

              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["b" /* error */](ctx, _context7.t0);

            case 14:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, _this, [[1, 11]]);
    }));

    function list(_x13, _x14) {
      return _ref7.apply(this, arguments);
    }

    return list;
  }(),
  listBySearch: function () {
    var _ref8 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee8(ctx, next) {
      var keyword, page, reg, conditions, count, records;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              keyword = ctx.params.keyword;
              page = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* pagination */])(ctx);
              reg = new RegExp(decodeURIComponent(keyword), 'i');
              conditions = { $or: [{ title: { $regex: reg } }, { content: { $regex: reg } }] };
              _context8.prev = 4;
              _context8.next = 7;
              return Article.count(conditions);

            case 7:
              count = _context8.sent;
              _context8.next = 10;
              return Article.find(conditions).populate({
                path: 'user',
                select: 'name'
              }).populate({
                path: 'tags',
                select: 'name'
              }).sort(page.sort).skip(page.skip).limit(page.limit).exec();

            case 10:
              records = _context8.sent;

              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["c" /* data */](ctx, records, count);
              _context8.next = 17;
              break;

            case 14:
              _context8.prev = 14;
              _context8.t0 = _context8['catch'](4);

              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["b" /* error */](ctx, _context8.t0);

            case 17:
            case 'end':
              return _context8.stop();
          }
        }
      }, _callee8, _this, [[4, 14]]);
    }));

    function listBySearch(_x15, _x16) {
      return _ref8.apply(this, arguments);
    }

    return listBySearch;
  }(),
  listByTag: function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee9(ctx, next) {
      var tag, page, conditions, count, records;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              tag = ctx.params.tag;
              page = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* pagination */])(ctx);
              conditions = { tags: { $all: [tag] } };
              _context9.prev = 3;
              _context9.next = 6;
              return Article.countDocuments(conditions);

            case 6:
              count = _context9.sent;
              _context9.next = 9;
              return Article.find(conditions).populate({
                path: 'user',
                select: 'name'
              }).populate({
                path: 'tags',
                select: 'name'
              }).sort(page.sort).skip(page.skip).limit(page.limit).exec();

            case 9:
              records = _context9.sent;

              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["c" /* data */](ctx, records, count);
              _context9.next = 16;
              break;

            case 13:
              _context9.prev = 13;
              _context9.t0 = _context9['catch'](3);

              __WEBPACK_IMPORTED_MODULE_3__utils_handlers__["b" /* error */](ctx, _context9.t0);

            case 16:
            case 'end':
              return _context9.stop();
          }
        }
      }, _callee9, _this, [[3, 13]]);
    }));

    function listByTag(_x17, _x18) {
      return _ref9.apply(this, arguments);
    }

    return listByTag;
  }()
};



/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);
/* unused harmony export Comment */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return comment; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






//model
var Schema = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Schema;
var schema = new Schema({
  content: {
    type: String,
    default: ''
  },
  reply: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* options */]);

//controller
var Comment = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('Comment', schema);
var comment = {
  post: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      var body, content, user, article;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = ctx.request.body;
              content = body.content, user = body.user, article = body.article;
              _context.prev = 2;

              if (!content || !user || !article) ctx.throw('缺少字段');
              _context.next = 6;
              return Comment.create(body);

            case 6:
              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["d" /* success */](ctx);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](2);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context.t0);

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[2, 9]]);
    }));

    function post(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return post;
  }(),
  del: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
      var id, res;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = ctx.params.id;
              _context2.prev = 1;
              _context2.next = 4;
              return Comment.findByIdAndDelete(id);

            case 4:
              res = _context2.sent;

              if (!res) ctx.throw('无记录');
              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["d" /* success */](ctx);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](1);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context2.t0);

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this, [[1, 9]]);
    }));

    function del(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return del;
  }(),
  list: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
      var page, count, records;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              page = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* pagination */])(ctx);
              _context3.prev = 1;
              _context3.next = 4;
              return Comment.countDocuments(page.query);

            case 4:
              count = _context3.sent;
              _context3.next = 7;
              return Comment.find(page.query).populate({
                path: 'user',
                select: 'name avatar'
              }).populate({
                path: 'reply',
                select: 'name'
              }).populate({
                path: 'article',
                select: 'user title',
                populate: { path: 'user', select: 'name' }
              }).sort(page.sort).skip(page.skip).limit(page.limit).exec();

            case 7:
              records = _context3.sent;

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["c" /* data */](ctx, records, count);
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3['catch'](1);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context3.t0);

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this, [[1, 11]]);
    }));

    function list(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return list;
  }()
};



/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_tools_number__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_gt_slide__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getCode; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return sendEmail; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return gtRegister; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








// getCode
var getCode = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var _ctx$request$body, username, email, user, n, code, html;

    return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, email = _ctx$request$body.email;
            _context.prev = 1;

            if (!username || !email) ctx.throw('缺少字段');
            _context.next = 5;
            return __WEBPACK_IMPORTED_MODULE_5__user__["b" /* User */].findOne({ username: username, email: email });

          case 5:
            user = _context.sent;

            if (!user) ctx.throw('用户名和邮箱不匹配');

            n = ctx.session.views || 0;

            ctx.session.views = ++n;
            if (ctx.session.views > 3) ctx.throw('获取验证码太频繁，请10分钟后再试！');

            code = __WEBPACK_IMPORTED_MODULE_2__utils_tools_number__["a" /* default */].randomCode(6);

            ctx.session.validateCode = code;
            html = '<div>\u9A8C\u8BC1\u7801\uFF1A <span style="font-size: 20px;color:#ff4c29;">' + code + '</span> 10\u5206\u949F\u5185\u6709\u6548</div>';
            _context.next = 15;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* sendMail */])(email, '获取验证码', html);

          case 15:
            __WEBPACK_IMPORTED_MODULE_1__utils_handlers__["d" /* success */](ctx);
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context['catch'](1);

            __WEBPACK_IMPORTED_MODULE_1__utils_handlers__["b" /* error */](ctx, _context.t0);

          case 21:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 18]]);
  }));

  return function getCode(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// sendEmail
var sendEmail = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var _ctx$request$body2, to, subject, html, res;

    return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ctx$request$body2 = ctx.request.body, to = _ctx$request$body2.to, subject = _ctx$request$body2.subject, html = _ctx$request$body2.html;
            _context2.prev = 1;

            if (!to || !subject || !html) ctx.throw('缺少字段');
            _context2.next = 5;
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* sendMail */])(to, subject, html);

          case 5:
            res = _context2.sent;

            __WEBPACK_IMPORTED_MODULE_1__utils_handlers__["c" /* data */](ctx, res);
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](1);

            __WEBPACK_IMPORTED_MODULE_1__utils_handlers__["b" /* error */](ctx, _context2.t0);

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[1, 9]]);
  }));

  return function sendEmail(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// gtRegister
var gtRegister = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    var res;
    return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return __WEBPACK_IMPORTED_MODULE_4__static_gt_slide__["a" /* default */].register(null);

          case 3:
            res = _context3.sent;

            if (!res.success) {
              // 进入 failback，如果一直进入此模式，请检查服务器到极验服务器是否可访问
              ctx.session.failback = true;
              ctx.body = res;
            } else {
              // 正常模式
              ctx.session.failback = false;
              ctx.body = res;
            }
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3['catch'](0);

            ctx.body = _context3.t0;

          case 10:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this, [[0, 7]]);
  }));

  return function gtRegister(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_tools_check__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__(5);
/* unused harmony export Contact */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return contact; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }









//model
var Schema = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Schema;
var schema = new Schema({
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
}, __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* options */]);

//controller
var Contact = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('Contact', schema);
var contact = {
  post: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      var body, res, toUsers, admin, html;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = ctx.request.body;
              _context.prev = 1;
              _context.next = 4;
              return Contact.create(body);

            case 4:
              res = _context.sent;


              //给所有管理员发送邮件
              toUsers = '';
              _context.next = 8;
              return __WEBPACK_IMPORTED_MODULE_5__user__["b" /* User */].find({ role: '管理员' });

            case 8:
              admin = _context.sent;

              if (!__WEBPACK_IMPORTED_MODULE_4__utils_tools_check__["a" /* default */].isEmpty(admin)) {
                if (admin.length < 2) {
                  toUsers = admin[0].email;
                } else {
                  admin.forEach(function (item) {
                    toUsers += item.email + ',';
                  });
                }
              }
              html = '<div>\u59D3\u540D\uFF1A' + body.name + '</div><div>\u7535\u8BDD\uFF1A' + body.phone + '</div><div>\u5185\u5BB9\uFF1A' + body.message + '</div>';
              _context.next = 13;
              return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* sendMail */])(toUsers, '您有新的信息', html);

            case 13:

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["c" /* data */](ctx, res);
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context['catch'](1);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context.t0);

            case 19:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[1, 16]]);
    }));

    function post(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return post;
  }(),
  get: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
      var id, record;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = ctx.params.id;
              _context2.prev = 1;
              _context2.next = 4;
              return Contact.findById(id);

            case 4:
              record = _context2.sent;

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["c" /* data */](ctx, record);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](1);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context2.t0);

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this, [[1, 8]]);
    }));

    function get(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return get;
  }(),
  list: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
      var page, count, records;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              page = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* pagination */])(ctx);
              _context3.prev = 1;
              _context3.next = 4;
              return Contact.countDocuments(page.query);

            case 4:
              count = _context3.sent;
              _context3.next = 7;
              return Contact.find(page.query).sort(page.sort).skip(page.skip).limit(page.limit).exec();

            case 7:
              records = _context3.sent;

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["c" /* data */](ctx, records, count);
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3['catch'](1);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context3.t0);

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this, [[1, 11]]);
    }));

    function list(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return list;
  }()
};



/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__(5);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






//config
var config = __webpack_require__(4);
var options = {
  useNewUrlParser: true
};
var url = 'mongodb://' + config.mongodb.username + ':' + config.mongodb.password + '@' + config.mongodb.host + ':' + config.mongodb.port + '/' + config.mongodb.database;

//mongoose设置
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect(url, options); //建立链接
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Promise = global.Promise; //将mongoose自行封装的promise，改为 ES6 标准
__WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.set('useFindAndModify', false); //use native findOneAndUpdate()

//db
var db = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connection;
db.on('error', console.error.bind(console, '连接错误信息:'));
db.once('open', _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
  var adminInfo, user;
  return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('链接数据库成功！');
          // 初始化管理员信息
          adminInfo = config.admin;

          adminInfo.password = __WEBPACK_IMPORTED_MODULE_2_md5___default()(adminInfo.password);

          _context.next = 5;
          return __WEBPACK_IMPORTED_MODULE_3__user__["b" /* User */].findOne({ role: adminInfo.role });

        case 5:
          user = _context.sent;

          if (user) {
            _context.next = 10;
            break;
          }

          _context.next = 9;
          return __WEBPACK_IMPORTED_MODULE_3__user__["b" /* User */].create(adminInfo);

        case 9:
          console.log('超级管理员初始化成功！');

        case 10:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this);
})));

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);
/* unused harmony export Like */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return like; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






//model
var Schema = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Schema;
var schema = new Schema({
  like: {
    type: Boolean,
    default: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  article: {
    type: Schema.Types.ObjectId,
    ref: 'Article'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* options */]);

//controller
var Like = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('Like', schema);
var like = {
  post: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      var body, user, article, res;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = ctx.request.body;
              user = body.user, article = body.article;
              _context.prev = 2;

              if (!user || !article) ctx.throw('缺少字段');
              _context.next = 6;
              return Like.create(body);

            case 6:
              res = _context.sent;

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["c" /* data */](ctx, res);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context['catch'](2);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context.t0);

            case 13:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[2, 10]]);
    }));

    function post(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return post;
  }(),
  del: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
      var id, res;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = ctx.params.id;
              _context2.prev = 1;
              _context2.next = 4;
              return Like.findByIdAndDelete(id);

            case 4:
              res = _context2.sent;

              if (!res) ctx.throw('无记录');
              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["d" /* success */](ctx);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](1);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context2.t0);

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this, [[1, 9]]);
    }));

    function del(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return del;
  }(),
  list: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
      var page, count, records;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              page = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* pagination */])(ctx);
              _context3.prev = 1;
              _context3.next = 4;
              return Like.countDocuments(page.query);

            case 4:
              count = _context3.sent;
              _context3.next = 7;
              return Like.find(page.query).populate({
                path: 'user',
                select: 'name avatar'
              }).sort(page.sort).skip(page.skip).limit(page.limit).exec();

            case 7:
              records = _context3.sent;

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["c" /* data */](ctx, records, count);
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3['catch'](1);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context3.t0);

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this, [[1, 11]]);
    }));

    function list(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return list;
  }()
};



/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);
/* unused harmony export Logo */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return logo; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






//model
var Schema = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.Schema;
var schema = new Schema({
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
}, __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* options */]);

//controller
var Logo = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model('Logo', schema);
var logo = {
  post: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
      var body, res;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = ctx.request.body;
              _context.prev = 1;

              if (!body.link || !body.name) ctx.throw('缺少字段');
              _context.next = 5;
              return Logo.create(body);

            case 5:
              res = _context.sent;

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["c" /* data */](ctx, res);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](1);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context.t0);

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this, [[1, 9]]);
    }));

    function post(_x, _x2) {
      return _ref.apply(this, arguments);
    }

    return post;
  }(),
  get: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
      var id, record;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = ctx.params.id;
              _context2.prev = 1;
              _context2.next = 4;
              return Logo.findById(id);

            case 4:
              record = _context2.sent;

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["c" /* data */](ctx, record);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2['catch'](1);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context2.t0);

            case 11:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this, [[1, 8]]);
    }));

    function get(_x3, _x4) {
      return _ref2.apply(this, arguments);
    }

    return get;
  }(),
  patch: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
      var id, body, res;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = ctx.params.id;
              body = ctx.request.body;
              _context3.prev = 2;

              body.updatedAt = Date.now();
              _context3.next = 6;
              return Logo.findByIdAndUpdate(id, body);

            case 6:
              res = _context3.sent;

              if (!res) ctx.throw('无记录');
              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["d" /* success */](ctx);
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3['catch'](2);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context3.t0);

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, _this, [[2, 11]]);
    }));

    function patch(_x5, _x6) {
      return _ref3.apply(this, arguments);
    }

    return patch;
  }(),
  del: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
      var id, res;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              id = ctx.params.id;
              _context4.prev = 1;
              _context4.next = 4;
              return Logo.findByIdAndDelete(id);

            case 4:
              res = _context4.sent;

              if (!res) ctx.throw('无记录');
              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["d" /* success */](ctx);
              _context4.next = 12;
              break;

            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4['catch'](1);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context4.t0);

            case 12:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this, [[1, 9]]);
    }));

    function del(_x7, _x8) {
      return _ref4.apply(this, arguments);
    }

    return del;
  }(),
  list: function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee5(ctx, next) {
      var page, count, records;
      return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              page = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* pagination */])(ctx);
              _context5.prev = 1;
              _context5.next = 4;
              return Logo.countDocuments(page.query);

            case 4:
              count = _context5.sent;
              _context5.next = 7;
              return Logo.find(page.query).sort(page.sort).skip(page.skip).limit(page.limit).exec();

            case 7:
              records = _context5.sent;

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["c" /* data */](ctx, records, count);
              _context5.next = 14;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5['catch'](1);

              __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context5.t0);

            case 14:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, _this, [[1, 11]]);
    }));

    function list(_x9, _x10) {
      return _ref5.apply(this, arguments);
    }

    return list;
  }()
};



/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_user__ = __webpack_require__(5);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var config = __webpack_require__(4);
var checkAdmin = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var token, decoded, username, id, user;
    return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            token = ctx.cookies.get('token') ? ctx.cookies.get('token') : ctx.get('token');
            _context.prev = 1;

            if (!token) ctx.throw('Please login');
            decoded = __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.verify(token, config.secret);
            username = decoded.userName;
            id = decoded.userId;

            if (!username || !id) ctx.throw('Verify token fail');

            _context.next = 9;
            return __WEBPACK_IMPORTED_MODULE_3__controllers_user__["b" /* User */].findOne({ _id: id, username: username });

          case 9:
            user = _context.sent;

            if (!user) ctx.throw('Token invalid');
            if (user.role != '超级管理员') ctx.throw('权限不够');

            _context.next = 14;
            return next();

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context['catch'](1);

            __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context.t0);

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 16]]);
  }));

  return function checkAdmin(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ exports["a"] = checkAdmin;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_handlers__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_user__ = __webpack_require__(5);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var config = __webpack_require__(4);
var checkToken = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var token, decoded, username, id, user;
    return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // 可以从cookie里面获得token，也可以从request header里获取token
            token = ctx.cookies.get('token') ? ctx.cookies.get('token') : ctx.get('token');
            _context.prev = 1;

            if (!token) ctx.throw('Please login');
            decoded = __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.verify(token, config.secret);
            username = decoded.userName;
            id = decoded.userId;

            if (!username || !id) ctx.throw('Verify token fail');

            _context.next = 9;
            return __WEBPACK_IMPORTED_MODULE_3__controllers_user__["b" /* User */].findOne({ _id: id, username: username });

          case 9:
            user = _context.sent;

            if (!user) ctx.throw('Token invalid');

            _context.next = 13;
            return next();

          case 13:
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](1);

            __WEBPACK_IMPORTED_MODULE_2__utils_handlers__["b" /* error */](ctx, _context.t0);

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[1, 15]]);
  }));

  return function checkToken(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ exports["a"] = checkToken;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var check = {
  isBrowser: function isBrowser() {
    var userAgent = navigator.userAgent,
        isOpera = userAgent.indexOf("Opera") > -1,
        isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera,
        isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1,
        isEdge = userAgent.indexOf("Edge") > -1 && !isIE,
        isFF = userAgent.indexOf("Firefox") > -1,
        isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1,
        isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1;

    // console.log(userAgent)
    if (isIE) {
      var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
      reIE.test(userAgent);
      var fIEVersion = parseFloat(RegExp["$1"]);
      return { name: 'IE', version: fIEVersion };
    }
    if (isIE11) return { name: 'IE11', version: 11 };
    if (isEdge) return { name: 'Edge', version: 0 };
    if (isFF) return { name: 'Firefox', version: 0 };
    if (isOpera) return { name: 'Opera', version: 0 };
    if (isSafari) return { name: 'Safari', version: 0 };
    if (isChrome) return { name: 'Chrome', version: 0 };
  },
  isString: function isString(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'String';
  },
  isNumber: function isNumber(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
  },
  isBoolean: function isBoolean(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean';
  },
  isFunction: function isFunction(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function';
  },
  isNull: function isNull(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
  },
  isUndefined: function isUndefined(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
  },
  isObj: function isObj(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
  },
  isArray: function isArray(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
  },
  isDate: function isDate(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date';
  },
  isError: function isError(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error';
  },
  isSymbol: function isSymbol(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol';
  },
  isPromise: function isPromise(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise';
  },
  isSet: function isSet(o) {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set';
  },
  isEmpty: function isEmpty(o) {
    if (JSON.stringify(o) === "{}" || JSON.stringify(o) === "[]") return true;
    return false;
  },
  isFalse: function isFalse(o) {
    if (!o || o === 'null' || o === 'undefined' || o === 'false' || o === 'NaN') return true;
    return false;
  },
  isInt: function isInt(str) {
    return (/^-?\d+$/.test(str)
    );
  },
  isPhone: function isPhone(str) {
    return (/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
    );
  },
  isTel: function isTel(str) {
    return (/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    );
  },
  isUser: function isUser(str) {
    return (/^[a-zA-Z]\w{1,17}$/.test(str)
    ); //用户名以字母开头，长度在1~18之间，只能包含字母、数字和下划线
  },
  isPassword: function isPassword(str) {
    return (/^[a-zA-Z]\w{5,17}$/.test(str)
    ); //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
  },
  isPostal: function isPostal(str) {
    return (/[1-9]\d{5}(?!\d)/.test(str)
    ); //邮政编码
  },
  isQQ: function isQQ(str) {
    return (/^[1-9][0-9]{4,9}$/.test(str)
    );
  },
  isEmail: function isEmail(str) {
    return (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str)
    );
  },
  isMoney: function isMoney(str) {
    return (/^\d*(?:\.\d{0,2})?$/.test(str)
    ); //金额(小数点2位)
  },
  isURL: function isURL(str) {
    return (/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
    );
  },
  isIP: function isIP(str) {
    return (/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str)
    );
  },
  isEnglish: function isEnglish(str) {
    return (/^[a-zA-Z]+$/.test(str)
    );
  },
  isChinese: function isChinese(str) {
    return (/^[\u4E00-\u9FA5]+$/.test(str)
    );
  },
  isLower: function isLower(str) {
    return (/^[a-z]+$/.test(str)
    );
  },
  isUpper: function isUpper(str) {
    return (/^[A-Z]+$/.test(str)
    );
  },
  isHTML: function isHTML(str) {
    return (/<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
    );
  },
  isSpace: function isSpace(str) {
    return (/\s/.test(str)
    );
  },
  isIdCard: function isIdCard(str) {
    return (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    );
  },
  isBankCard: function isBankCard(str) {
    return (/^\d{16}|\d{19}$/.test(str)
    );
  },
  isIos: function isIos() {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
      //安卓手机
      // return "Android";
      return false;
    } else if (u.indexOf('iPhone') > -1) {
      //苹果手机
      // return "iPhone";
      return true;
    } else if (u.indexOf('iPad') > -1) {
      //iPad
      // return "iPad";
      return false;
    } else if (u.indexOf('Windows Phone') > -1) {
      //winphone手机
      // return "Windows Phone";
      return false;
    } else {
      return false;
    }
  },
  isPC: function isPC() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  },
  isCardID: function isCardID(sId) {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
      alert('你输入的身份证长度或格式错误');
      return false;
    }
    //身份证城市
    var aCity = {
      11: "北京",
      12: "天津",
      13: "河北",
      14: "山西",
      15: "内蒙古",
      21: "辽宁",
      22: "吉林",
      23: "黑龙江",
      31: "上海",
      32: "江苏",
      33: "浙江",
      34: "安徽",
      35: "福建",
      36: "江西",
      37: "山东",
      41: "河南",
      42: "湖北",
      43: "湖南",
      44: "广东",
      45: "广西",
      46: "海南",
      50: "重庆",
      51: "四川",
      52: "贵州",
      53: "云南",
      54: "西藏",
      61: "陕西",
      62: "甘肃",
      63: "青海",
      64: "宁夏",
      65: "新疆",
      71: "台湾",
      81: "香港",
      82: "澳门",
      91: "国外"
    };
    if (!aCity[parseInt(sId.substr(0, 2))]) {
      alert('你的身份证地区非法');
      return false;
    }

    // 出生日期验证
    var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
        d = new Date(sBirthday);
    if (sBirthday != d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate()) {
      alert('身份证上的出生日期非法');
      return false;
    }

    // 身份证号码校验
    var sum = 0,
        weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        codes = "10X98765432";
    for (var i = 0; i < sId.length - 1; i++) {
      sum += sId[i] * weights[i];
    }
    var last = codes[sum % 11]; //计算出来的最后一位身份证号码
    if (sId[sId.length - 1] != last) {
      alert('你输入的身份证号非法');
      return false;
    }
    return true;
  }
};
/* harmony default export */ exports["a"] = check;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var file = {
  /*格式文件大小单位*/
  formatSize: function formatSize(num) {
    var fsize = parseFloat(num, 2);
    var fileSizeString = void 0;
    if (fsize < 1024) {
      fileSizeString = fsize.toFixed(2) + "B";
    } else if (fsize < 1048576) {
      fileSizeString = (fsize / 1024).toFixed(2) + "KB";
    } else if (fsize < 1073741824) {
      fileSizeString = (fsize / 1024 / 1024).toFixed(2) + "MB";
    } else if (fsize < 1024 * 1024 * 1024) {
      fileSizeString = (fsize / 1024 / 1024 / 1024).toFixed(2) + "GB";
    } else {
      fileSizeString = "0B";
    }
    return fileSizeString;
  },
  /*获取文件的后缀名*/
  getExt: function getExt(fileName) {
    if (fileName.lastIndexOf(".") == -1) return fileName;
    var pos = fileName.lastIndexOf(".") + 1;
    return fileName.substring(pos, fileName.length).toLowerCase();
  },
  /*获取文件名称*/
  getName: function getName(fileName) {
    var pos = fileName.lastIndexOf(".");
    if (pos == -1) {
      return fileName;
    } else {
      return fileName.substring(0, pos);
    }
  },
  /*根据路径获取文件全名*/
  getFileName: function getFileName(path) {
    var fileFormat = path.split("/");
    return fileFormat[fileFormat.length - 1];
  },
  isImageFileName: function isImageFileName(fileName) {
    return (/(gif|jpg|jpeg|png|GIF|JPG|PNG)$/ig.test(fileName)
    );
  },
  isVideoFileName: function isVideoFileName(fileName) {
    return (/(mp4|mp3|flv|wav)$/ig.test(fileName)
    );
  },
  isDocumentFileName: function isDocumentFileName(fileName) {
    return (/(doc|docx|xls|xlsx|pdf|txt|ppt|pptx|rar|zip|html|jsp|sql|htm|shtml|xml)$/ig.test(fileName)
    );
  },
  isOfficeFileName: function isOfficeFileName(fileName) {
    return (/(doc|docx|xls|xlsx|pdf|txt|ppt|pptx)$/ig.test(fileName)
    );
  }
};
/* harmony default export */ exports["a"] = file;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
var num = {
  // 随机数范围
  random: function random(min, max) {
    if (arguments.length === 2) {
      return Math.floor(min + Math.random() * (max + 1 - min));
    } else {
      return null;
    }
  },
  /**
   * 抽奖概率
   * @param goods 奖品池，如：['一等奖'，'二等奖']
   * @param odds 概率数组，如：[0.1.0.9]
   * @returns {*}
   */
  randomGoods: function randomGoods(goods, odds) {
    var sum = 0,
        factor = 0,
        random = Math.random();

    for (var i = odds.length - 1; i >= 0; i--) {
      sum += odds[i]; // 统计概率总和
    };
    random *= sum; // 生成概率随机数
    for (var _i = odds.length - 1; _i >= 0; _i--) {
      factor += odds[_i];
      if (random <= factor) return goods[_i];
    };
    return null;
  },
  //随机验证码
  randomCode: function randomCode(len) {
    var code = '';
    var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (var i = 0; i < len; i++) {
      var index = Math.floor(Math.random() * 10);
      code += random[index];
    }
    return code;
  },
  // 将数字转换成对应的中文小写
  formatSmallChinese: function formatSmallChinese(num) {
    var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
    var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
    var a = ("" + num).replace(/(^0*)/g, "").split("."),
        k = 0,
        re = "";
    for (var i = a[0].length - 1; i >= 0; i--) {
      switch (k) {
        case 0:
          re = BB[7] + re;
          break;
        case 4:
          if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$").test(a[0])) re = BB[4] + re;
          break;
        case 8:
          re = BB[5] + re;
          BB[7] = BB[5];
          k = 0;
          break;
      }
      if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0) re = AA[0] + re;
      if (a[0].charAt(i) != 0) re = AA[a[0].charAt(i)] + BB[k % 4] + re;
      k++;
    }

    if (a.length > 1) // 加上小数部分(如果有小数部分)
      {
        re += BB[6];
        for (var _i2 = 0; _i2 < a[1].length; _i2++) {
          re += AA[a[1].charAt(_i2)];
        }
      }
    if (re == '一十') re = "十";
    if (re.match(/^一/) && re.length == 3) re = re.replace("一", "");
    return re;
  },
  // 数字金钱表示
  formatMoney: function formatMoney(num) {
    var str = num.toString();
    var newStr = "";
    var count = 0;

    if (str.indexOf(".") == -1) {
      for (var i = str.length - 1; i >= 0; i--) {
        if (count % 3 == 0 && count != 0) {
          newStr = str.charAt(i) + "," + newStr;
        } else {
          newStr = str.charAt(i) + newStr;
        }
        count++;
      }
      str = newStr + ".00"; //自动补小数点后两位
      return str;
    } else {
      for (var _i3 = str.indexOf(".") - 1; _i3 >= 0; _i3--) {
        if (count % 3 == 0 && count != 0) {
          newStr = str.charAt(_i3) + "," + newStr; //碰到3的倍数则加上“,”号
        } else {
          newStr = str.charAt(_i3) + newStr; //逐个字符相接起来
        }
        count++;
      }
      str = newStr + (str + "00").substr((str + "00").indexOf("."), 3);
      return str;
    }
  },
  // 中文大写金钱表示
  formatBigMoney: function formatBigMoney(money) {
    //汉字的数字
    var cnNums = new Array('零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖');
    //基本单位
    var cnIntRadice = new Array('', '拾', '佰', '仟');
    //对应整数部分扩展单位
    var cnIntUnits = new Array('', '万', '亿', '兆');
    //对应小数部分单位
    var cnDecUnits = new Array('角', '分', '毫', '厘');
    //整数金额时后面跟的字符
    var cnInteger = '整';
    //整型完以后的单位
    var cnIntLast = '元';
    //最大处理的数字
    var maxNum = 999999999999999.9999;
    //金额整数部分
    var integerNum;
    //金额小数部分
    var decimalNum;
    //输出的中文金额字符串
    var chineseStr = '';
    //分离金额后用的数组，预定义
    var parts;
    if (money == '') {
      return '';
    }
    money = parseFloat(money);
    if (money >= maxNum) {
      //超出最大处理数字
      return '';
    }
    if (money == 0) {
      chineseStr = cnNums[0] + cnIntLast + cnInteger;
      return chineseStr;
    }
    //转换为字符串
    money = money.toString();
    if (money.indexOf('.') == -1) {
      integerNum = money;
      decimalNum = '';
    } else {
      parts = money.split('.');
      integerNum = parts[0];
      decimalNum = parts[1].substr(0, 4);
    }
    //获取整型部分转换
    if (parseInt(integerNum, 10) > 0) {
      var zeroCount = 0;
      var IntLen = integerNum.length;
      for (var i = 0; i < IntLen; i++) {
        var n = integerNum.substr(i, 1);
        var p = IntLen - i - 1;
        var q = p / 4;
        var m = p % 4;
        if (n == '0') {
          zeroCount++;
        } else {
          if (zeroCount > 0) {
            chineseStr += cnNums[0];
          }
          //归零
          zeroCount = 0;
          chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
        }
        if (m == 0 && zeroCount < 4) {
          chineseStr += cnIntUnits[q];
        }
      }
      chineseStr += cnIntLast;
    }
    //小数部分
    if (decimalNum != '') {
      var decLen = decimalNum.length;
      for (var i = 0; i < decLen; i++) {
        var n = decimalNum.substr(i, 1);
        if (n != '0') {
          chineseStr += cnNums[Number(n)] + cnDecUnits[i];
        }
      }
    }
    if (chineseStr == '') {
      chineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (decimalNum == '') {
      chineseStr += cnInteger;
    }
    return chineseStr;
  },
  //数字单位
  numberUnit: function numberUnit(num) {
    switch (true) {
      case num > 999999999:
        return (num / 1000000000).toFixed(2) + " \u5341\u4EBF";
        break;
      case num > 99999999:
        return (num / 100000000).toFixed(2) + " \u4EBF";
        break;
      case num > 9999999:
        return (num / 10000000).toFixed(2) + " \u5343\u4E07";
        break;
      case num > 999999:
        return (num / 1000000).toFixed(2) + " \u767E\u4E07";
        break;
      case num > 99999:
        return (num / 100000).toFixed(2) + " \u5341\u4E07";
        break;
      case num > 9999:
        return (num / 10000).toFixed(2) + " \u4E07";
        break;
      default:
        return num;
    }
  }
};
/* harmony default export */ exports["a"] = num;

/***/ },
/* 34 */
/***/ function(module, exports) {

module.exports = require("gt3-sdk");

/***/ },
/* 35 */
/***/ function(module, exports) {

module.exports = require("nodemailer");

/***/ },
/* 36 */
/***/ function(module, exports) {

module.exports = require("postcss-px2rem");

/***/ },
/* 37 */
/***/ function(module, exports) {

module.exports = require("promise-async");

/***/ },
/* 38 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 39 */
/***/ function(module, exports) {

module.exports = require("webpack");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_static__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_body__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_koa_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_koa_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_session__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_koa_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_koa_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__koa_cors__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__koa_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__koa_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_tools_time__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__routes__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__routes_upload__ = __webpack_require__(15);


//启动服务

var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, router, host, port, nuxtConfig, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            router = new __WEBPACK_IMPORTED_MODULE_4_koa_router___default.a();


            app.keys = [config.secret];

            host = process.env.HOST || config.app.host;
            port = process.env.PORT || config.app.port;

            // static

            app.use(__WEBPACK_IMPORTED_MODULE_3_koa_static___default()(__WEBPACK_IMPORTED_MODULE_8_path___default.a.join(__dirname, '../static')));

            // session
            app.use(__WEBPACK_IMPORTED_MODULE_6_koa_session___default()(serverConfig.session, app));

            //cors
            app.use(__WEBPACK_IMPORTED_MODULE_7__koa_cors___default()(serverConfig.cors));

            //routes
            router.use('/api', __WEBPACK_IMPORTED_MODULE_5_koa_body___default()(), __WEBPACK_IMPORTED_MODULE_10__routes__["a" /* default */].routes());
            router.use('/upload', __WEBPACK_IMPORTED_MODULE_11__routes_upload__["a" /* default */].routes());

            app.use(router.routes());
            app.use(router.allowedMethods());

            // Import and Set Nuxt.js options
            nuxtConfig = __webpack_require__(13);

            nuxtConfig.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](nuxtConfig);

            // Build in development

            if (!nuxtConfig.dev) {
              _context2.next = 19;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 19;
            return builder.build();

          case 19:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0__Users_paddy_coding_nuxt_cms_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            promise.then(resolve).catch(reject); // nuxt.render passes a rejected promise into callback on error.
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port);

          case 22:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }












//routes



//config
var config = __webpack_require__(4);
var serverConfig = {
  session: {
    key: 'koa:sess',
    maxAge: __WEBPACK_IMPORTED_MODULE_9__utils_tools_time__["a" /* default */].getMillisecond(10, 'minute'),
    autoCommit: true,
    overwrite: true,
    httpOnly: true,
    signed: true,
    rolling: false,
    renew: false
  },
  cors: {
    // credentials: true,
    // methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    // origin: `${config.app.domain}`  //前端带cookie访问需要设置跨域源
  }
};

start();
/* WEBPACK VAR INJECTION */}.call(exports, "server"))

/***/ }
/******/ ]);
//# sourceMappingURL=main.map