webpackJsonp([10],{KdxW:function(e,t,r){"use strict";var n=r("mvHQ"),i=r.n(n),s={isBrowser:function(){var e=navigator.userAgent,t=e.indexOf("Opera")>-1,r=e.indexOf("compatible")>-1&&e.indexOf("MSIE")>-1&&!t,n=e.indexOf("Trident")>-1&&e.indexOf("rv:11.0")>-1,i=e.indexOf("Edge")>-1&&!r,s=e.indexOf("Firefox")>-1,o=e.indexOf("Safari")>-1&&-1==e.indexOf("Chrome"),a=e.indexOf("Chrome")>-1&&e.indexOf("Safari")>-1;return r?(new RegExp("MSIE (\\d+\\.\\d+);").test(e),{name:"IE",version:parseFloat(RegExp.$1)}):n?{name:"IE11",version:11}:i?{name:"Edge",version:0}:s?{name:"Firefox",version:0}:t?{name:"Opera",version:0}:o?{name:"Safari",version:0}:a?{name:"Chrome",version:0}:void 0},isString:function(e){return"String"===Object.prototype.toString.call(e).slice(8,-1)},isNumber:function(e){return"Number"===Object.prototype.toString.call(e).slice(8,-1)},isBoolean:function(e){return"Boolean"===Object.prototype.toString.call(e).slice(8,-1)},isFunction:function(e){return"Function"===Object.prototype.toString.call(e).slice(8,-1)},isNull:function(e){return"Null"===Object.prototype.toString.call(e).slice(8,-1)},isUndefined:function(e){return"Undefined"===Object.prototype.toString.call(e).slice(8,-1)},isObj:function(e){return"Object"===Object.prototype.toString.call(e).slice(8,-1)},isArray:function(e){return"Array"===Object.prototype.toString.call(e).slice(8,-1)},isDate:function(e){return"Date"===Object.prototype.toString.call(e).slice(8,-1)},isError:function(e){return"Error"===Object.prototype.toString.call(e).slice(8,-1)},isSymbol:function(e){return"Symbol"===Object.prototype.toString.call(e).slice(8,-1)},isPromise:function(e){return"Promise"===Object.prototype.toString.call(e).slice(8,-1)},isSet:function(e){return"Set"===Object.prototype.toString.call(e).slice(8,-1)},isEmpty:function(e){return"{}"===i()(e)||"[]"===i()(e)},isFalse:function(e){return!e||"null"===e||"undefined"===e||"false"===e||"NaN"===e},isInt:function(e){return/^-?\d+$/.test(e)},isPhone:function(e){return/^1[3|4|5|6|7|8|9][0-9]{9}$/.test(e)},isTel:function(e){return/^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(e)},isUser:function(e){return/^[a-zA-Z]\w{1,17}$/.test(e)},isPassword:function(e){return/^[a-zA-Z]\w{5,17}$/.test(e)},isPostal:function(e){return/[1-9]\d{5}(?!\d)/.test(e)},isQQ:function(e){return/^[1-9][0-9]{4,9}$/.test(e)},isEmail:function(e){return/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(e)},isMoney:function(e){return/^\d*(?:\.\d{0,2})?$/.test(e)},isURL:function(e){return/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(e)},isIP:function(e){return/((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(e)},isEnglish:function(e){return/^[a-zA-Z]+$/.test(e)},isChinese:function(e){return/^[\u4E00-\u9FA5]+$/.test(e)},isLower:function(e){return/^[a-z]+$/.test(e)},isUpper:function(e){return/^[A-Z]+$/.test(e)},isHTML:function(e){return/<("[^"]*"|'[^']*'|[^'">])*>/.test(e)},isSpace:function(e){return/\s/.test(e)},isIdCard:function(e){return/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(e)},isBankCard:function(e){return/^\d{16}|\d{19}$/.test(e)},isIos:function(){var e=navigator.userAgent;return!(e.indexOf("Android")>-1||e.indexOf("Linux")>-1)&&(e.indexOf("iPhone")>-1||!(e.indexOf("iPad")>-1)&&(e.indexOf("Windows Phone"),!1))},isPC:function(){for(var e=navigator.userAgent,t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],r=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){r=!1;break}return r},isCardID:function(e){if(!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(e))return alert("你输入的身份证长度或格式错误"),!1;if(!{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[parseInt(e.substr(0,2))])return alert("你的身份证地区非法"),!1;var t=(e.substr(6,4)+"-"+Number(e.substr(10,2))+"-"+Number(e.substr(12,2))).replace(/-/g,"/"),r=new Date(t);if(t!=r.getFullYear()+"/"+(r.getMonth()+1)+"/"+r.getDate())return alert("身份证上的出生日期非法"),!1;for(var n=0,i=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],s=0;s<e.length-1;s++)n+=e[s]*i[s];var o="10X98765432"[n%11];return e[e.length-1]==o||(alert("你输入的身份证号非法"),!1)}};t.a=s},RCTd:function(e,t,r){"use strict";var n=r("Xxa5"),i=r.n(n),s=r("exGp"),o=r.n(s),a=r("KdxW");t.a={layout:"login",data:function(){var e=this;return{isWait:!0,form:{username:"",password:"",passwordAgain:"",email:"",name:""},rules:{username:[{required:!0,message:"必须设置一个登录账号/用户名",trigger:"blur"}],password:[{validator:function(t,r,n){""===r?n(new Error("请输入密码")):(""!==e.form.passwordAgain&&e.$refs.form.validateField("passwordAgain"),n())},trigger:"blur"}],passwordAgain:[{validator:function(t,r,n){""===r?n(new Error("请再次输入密码")):r!==e.form.password?n(new Error("两次输入密码不一致!")):n()},trigger:"blur"}],email:[{validator:function(e,t,r){return t?a.a.isEmail(t)?void r():r(new Error("电子邮件格式不正确")):r(new Error("请输入电子邮箱"))},trigger:"blur"}],name:[{required:!0,message:"请输入昵称",trigger:"blur"}]}}},methods:{register:function(){var e=o()(i.a.mark(function e(t){var r=this;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$refs[t].validate(function(){var e=o()(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,r.$store.dispatch("REGISTER",r.form);case 3:(n=e.sent).success?(r.$message({message:"注册成功！",type:"success"}),r.$router.push("/sign-in")):r.$message.error(n.message),e.next=9;break;case 7:return r.$message.error("提交失败"),e.abrupt("return");case 9:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}}},wQEm:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"sign-page flex-center-c"},[r("div",{staticClass:"panel"},[e._m(0),r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules}},[r("el-form-item",{attrs:{prop:"email"}},[r("el-input",{attrs:{placeholder:"电子邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",{attrs:{prop:"name"}},[r("el-input",{attrs:{placeholder:"昵称"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"登录账号/用户名"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),r("el-form-item",{attrs:{prop:"passwordAgain"}},[r("el-input",{attrs:{type:"password",placeholder:"确认密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.register("form")}},model:{value:e.form.passwordAgain,callback:function(t){e.$set(e.form,"passwordAgain",t)},expression:"form.passwordAgain"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.register("form")}}},[e._v("提 交")])],1),r("div",{staticClass:"no-account"},[e._v("已经有账号？"),r("nuxt-link",{attrs:{to:"/sign-in"}},[e._v("立即登录")])],1)],1)],1)])};n._withStripped=!0;var i={render:n,staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo"},[t("span",[this._v("注 册")])])}]};t.a=i},wb9F:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("RCTd"),i=r("wQEm"),s=r("VU/8")(n.a,i.a,!1,null,null,null);s.options.__file="pages/sign-up.vue",t.default=s.exports}});