webpackJsonp([21],{1355:function(t,e,o){var n=o(304)(o(921),o(923),function(t){o(918)},null,null);t.exports=n.exports},840:function(t,e,o){var n=o(304)(o(843),o(844),function(t){o(841)},null,null);t.exports=n.exports},841:function(t,e,o){var n=o(842);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(590)("73382b27",n,!0,{})},842:function(t,e,o){(t.exports=o(589)()).push([t.i,".footer p{height:20px;line-height:20px}.footer p span{padding-right:6px;padding-left:6px;color:#888;font-size:10px}.footer p span.dark{color:#ccc}.footer p.interrelated span{border-right:1px solid #888}.footer p.interrelated span.last-span{border-right:0}",""])},843:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(83);e.default={props:["copyright"],mounted:function(){this.setFooterCopyright()},methods:{setFooterCopyright:function(){window.location.hostname===n.a.dianxinURI?this.$refs.footer.innerText="":window.location.hostname===n.a.demoURI?this.$refs.footer.innerText="":window.location.hostname===n.a.wangdaURI&&(this.$refs.footer.innerText="")}}}},844:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"footer",staticClass:"footer"},[o("div",{staticClass:"footer-main"},[o("p",{staticClass:"interrelated"},[o("span",{staticClass:"last-span"},[t._v(t._s(t.copyright))])]),t._v(" "),o("p",[o("span",{staticClass:"dark"},[t._v("©"+t._s((new Date).getFullYear())+" "+t._s(t.copyright)+"™ 版权所有")])])])])},staticRenderFns:[]}},918:function(t,e,o){var n=o(919);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(590)("7f52c2dc",n,!0,{})},919:function(t,e,o){(t.exports=o(589)()).push([t.i,".inlogin,.loign-title{color:#4A4A4A}.login-bg{width:100%;min-height:100%;height:auto;background:url("+o(920)+");background-size:cover}.header{background-color:#fff}.header-content{height:100px;line-height:100px;width:90%;margin:0 auto;padding-top:20px}.login-logo{height:60px}.content{width:80%;overflow:hidden;margin:0 auto}.loign-title{margin-bottom:10px}.login-form{width:33%;float:right;margin:10% auto 0;background:#F1F6FA;border-radius:2px;padding:2% 3% 0}.login-input input{height:44px;font-size:15px}.ivu-input-group-append,.ivu-input-group-prepend{padding:4px 15px}.ivu-input-group{font-size:15px}.login-bg .ivu-btn{font-size:15px;padding:10px}.login-bg .ivu-icon{font-size:20px}.ivu-checkbox-wrapper{margin-top:6px}.forgetPassword-btn.ivu-btn.ivu-btn-text{float:right;padding:6px;font-size:12px;color:#dcdcdc}.login-form button{height:44px}.login-bg .ivu-form-item-error .ivu-input-group-prepend{background-color:#eee}",""])},920:function(t,e,o){t.exports=o.p+"static/img/login.8d89a99.jpg"},921:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(84),s=o.n(n),i=o(305),a=o.n(i),r=o(306),l=o.n(r),d=o(307),u=o(83),p=o(122),c=o(840),g=o.n(c),m=o(82);e.default={components:{iFooter:g.a},data:function(){return{brandURI:"",copyright:"SoaringNova",selectAutomaticLogin:!1,userModel:{username:"",password:""},userRule:{username:[{required:!0,message:"请填写用户名",trigger:"blur"}],password:[{required:!0,message:"请填写密码",trigger:"blur"},{type:"string",min:6,message:"密码长度不能小于6位",trigger:"blur"}]}}},mounted:function(){clearInterval(u.a.clearSetInterval),u.a.ifHome=!1,this.selectAutomaticLogin=!1,p.a.getCookie(m.a.COOKIE_NAME)&&(u.a.authToken=p.a.getCookie(m.a.COOKIE_NAME),this.getUserInfo()),this.setLoginLogo()},methods:{setLoginLogo:function(){window.location.hostname===u.a.dianxinURI?(this.$refs["login-logo"].style.display="none",document.title="中国电信"):window.location.hostname===u.a.demoURI?(this.$refs["login-logo"].style.display="none",document.title="demo"):window.location.hostname===u.a.wangdaURI?(this.$refs["login-logo"].style.display="none",document.title="网达"):(document.title="善贾",this.brandURI=o(922))},getUserInfo:function(){var o=this;return l()(a.a.mark(function t(){var e;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d._32();case 2:(e=t.sent)&&200===e.code&&o.setSession(e);case 4:case"end":return t.stop()}},t,o)}))()},enterSubmit:function(t){this.handleSubmit(t)},handleSubmit:function(t){var e,n=this;this.$refs[t].validate((e=l()(a.a.mark(function t(e){var o;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=5;break}return t.next=3,d.a(n.userModel.username,n.userModel.password);case 3:(o=t.sent)&&200===o.code?(n.$Message.success("登录成功!"),n.selectAutomaticLogin?p.a.setingCookie(m.a.COOKIE_NAME,o.data.auth_token,15):p.a.setingCookie(m.a.COOKIE_NAME,o.data.auth_token),n.setSession(o)):n.$Message.error("账号或密码错误");case 5:case"end":return t.stop()}},t,n)})),function(t){return e.apply(this,arguments)}))},automaticLogin:function(t){this.selectAutomaticLogin=t},setSession:function(t){var e="";u.a.authToken=t.data.auth_token.toString(),t.data.position&&window.sessionStorage.setItem("position",t.data.position),window.sessionStorage.setItem("token",t.data.auth_token.toString()),0<t.data.stores.length&&window.sessionStorage.setItem("storeToken",t.data.stores[0].store_token),window.sessionStorage.setItem("managementPermissions",t.data.permissions.management.toString()),null!==t.data.permissions.stores?window.sessionStorage.setItem("storesPermissions",s()(t.data.permissions.stores)):u.a.TabMenuShow=!1,t.data.stores&&(window.sessionStorage.setItem("storesList",s()(t.data.stores)),1===t.data.stores.length?(0<t.data.stores.length&&(window.sessionStorage.setItem("storeId",t.data.stores[0].store_id),window.sessionStorage.setItem("dataSource",t.data.stores[0].data_source)),e="/index"):e="/salesclerkManage/clerkManage/department"),window.sessionStorage.setItem("userName",t.data.username),this.$router.push({path:e,params:{username:t.data.username}})}}}},922:function(t,e,o){t.exports=o.p+"static/img/loginlogo.79a7bb4.png"},923:function(t,e){t.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"fade"}},[o("div",{staticStyle:{height:"100%","padding-bottom":"100px"}},[o("div",{staticClass:"login-bg"},[o("div",{staticClass:"header"},[o("div",{staticClass:"header-content"},[o("img",{ref:"login-logo",staticClass:"login-logo",attrs:{src:this.brandURI}})])]),e._v(" "),o("div",{staticClass:"content"},[o("Form",{ref:"login-form",staticClass:"login-form",attrs:{model:e.userModel,rules:e.userRule}},[o("h1",{staticClass:"loign-title"},[e._v("登录")]),e._v(" "),o("Form-item",{attrs:{prop:"username"}},[o("Input",{staticClass:"login-input",attrs:{type:"text",placeholder:"请输入账号"},model:{value:e.userModel.username,callback:function(t){e.$set(e.userModel,"username",t)},expression:"userModel.username"}},[o("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),e._v(" "),o("Form-item",{attrs:{prop:"password"}},[o("Input",{staticClass:"login-input",attrs:{type:"password",placeholder:"请输入密码"},on:{"on-enter":function(t){e.enterSubmit("login-form")}},model:{value:e.userModel.password,callback:function(t){e.$set(e.userModel,"password",t)},expression:"userModel.password"}},[o("Icon",{attrs:{slot:"prepend",type:"ios-locked-outline"},slot:"prepend"})],1)],1),e._v(" "),o("Form-item",[o("Button",{staticStyle:{width:"100%","background-color":"#F1942C",border:"0"},attrs:{type:"primary"},on:{click:function(t){e.handleSubmit("login-form")}}},[e._v("登录\n                        ")])],1),e._v(" "),o("Form-item",[o("Checkbox",{on:{"on-change":e.automaticLogin}},[o("span",{staticClass:"inlogin"},[e._v("自动登录")])]),e._v(" "),o("Button",{staticClass:"forgetPassword-btn",attrs:{type:"text"}},[e._v("忘记密码")])],1)],1)],1)]),e._v(" "),o("iFooter",{attrs:{copyright:this.copyright}})],1)])},staticRenderFns:[]}}});