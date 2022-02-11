webpackJsonp([1],{"+rkr":function(e,t,n){"use strict";var a=n("mtWM"),r=n.n(a),s={name:"UserBalance",data:function(){return{username:"none",balance:0}},created:function(){this.username=this.$route.params.username;let e=this;r.a.get("http://127.0.0.1:8000/user/balance/"+this.username).then(t=>{e.balance=t.data.balance})}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user_balance",attrs:{id:"UserBalance"}},[n("h2",[e._v(e._s(e.username))]),e._v(" "),n("h2",[e._v("Tu saldo es: "),n("span",[e._v("  "+e._s(e.balance)+" COP ")])])])},staticRenderFns:[]};var o=n("VU/8")(s,u,!1,function(e){n("VaLy")},null,null);t.a=o.exports},"2uXD":function(e,t){},IQYs:function(e,t,n){"use strict";var a=n("mtWM"),r=n.n(a),s={name:"UserTransaction",data:function(){return{username:"none",value:""}},methods:{processTransaction:function(){let e={username:this.username,value:this.value};r.a.put("http://127.0.0.1:8000/user/transaction/",e,{headers:{}}).then(e=>{alert("Transaction Correcta, Saldo Restante: "+e.data.actual_balance)}).catch(e=>{alert("ERROR Transaction Incorrecta: Saldo Insuficiente")})}},created:function(){this.username=this.$route.params.username}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"UserTransaction"}},[n("div",{staticClass:"continer_user_transaction"},[n("h2",[e._v(" Transacción "+e._s(e.username))]),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.processTransaction(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{type:"tetx",placeholder:"Valor"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),e._v(" "),n("br"),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Hacer Transacción")])])])])},staticRenderFns:[]};var o=n("VU/8")(s,u,!1,function(e){n("VQgQ")},null,null);t.a=o.exports},Jngz:function(e,t){},M93x:function(e,t,n){"use strict";n("/ocq");var a={name:"App",data:function(){return{is_auth:localStorage.getItem("isAuth")||!1}},components:{},methods:{updateAuth:function(){if(this.is_auth=localStorage.getItem("isAuth")||!1,0==this.is_auth)this.$router.push({name:"user_auth"});else{let e=localStorage.getItem("current_username");this.$router.push({name:"user",params:{username:e}})}},logIn:function(e){localStorage.setItem("current_username",e),localStorage.setItem("isAuth",!0),this.updateAuth()},logOut:function(){localStorage.removeItem("isAuth"),localStorage.removeItem("current_username"),this.updateAuth()},init:function(){if("user"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"user",params:{username:e}})}},getBalance:function(){if("user_balance"!=this.$route.name){let e=localStorage.getItem("current_username");this.$router.push({name:"user_balance",params:{username:e}})}},doTransaction:function(){let e=localStorage.getItem("current_username");this.$router.push({name:"user_transaction",params:{username:e}})}},created:function(){this.$router.push({name:"root"}),this.updateAuth()}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("div",{staticClass:"header"},[n("h1",[e._v("Banco UN")]),e._v(" "),n("nav",[e.is_auth?n("button",{on:{click:e.init}},[e._v(" Inicio ")]):e._e(),e._v(" "),e.is_auth?n("button",{on:{click:e.getBalance}},[e._v(" Saldo ")]):e._e(),e._v(" "),e.is_auth?n("button",{on:{click:e.doTransaction}},[e._v(" Transacción ")]):e._e(),e._v(" "),e.is_auth?n("button",{on:{click:e.logOut}},[e._v("Cerrar Sesión")]):e._e()])]),e._v(" "),n("div",{staticClass:"main-component"},[n("router-view",{on:{"log-in":e.logIn}})],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer"},[t("h2",[this._v("Misión TIC 2022")])])}]};var s=n("VU/8")(a,r,!1,function(e){n("2uXD")},null,null);t.a=s.exports},N6IS:function(e,t,n){"use strict";var a=n("mtWM"),r=n.n(a),s={name:"UserAuth",data:function(){return{user_in:{username:"",password:""}}},methods:{processAuthUser:function(){var e=this;r.a.post("http://127.0.0.1:8000/user/auth/",e.user_in,{headers:{}}).then(t=>{alert("Autenticación Exitosa"),e.$emit("log-in",e.user_in.username)}).catch(e=>{"404"==e.response.status&&alert("ERROR 404: Usuario no encontrado."),"403"==e.response.status&&alert("ERROR 403: Contraseña Erronea.")})}}},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"auth_user",attrs:{id:"AuthUser"}},[n("div",{staticClass:"container_auth_user"},[n("h2",[e._v("Autenticarse")]),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.processAuthUser(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_in.username,expression:"user_in.username"}],attrs:{type:"text",placeholder:"Username"},domProps:{value:e.user_in.username},on:{input:function(t){t.target.composing||e.$set(e.user_in,"username",t.target.value)}}}),e._v(" "),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.user_in.password,expression:"user_in.password"}],attrs:{type:"password",placeholder:"Password"},domProps:{value:e.user_in.password},on:{input:function(t){t.target.composing||e.$set(e.user_in,"password",t.target.value)}}}),e._v(" "),n("br"),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Iniciar Sesion")])])])])},staticRenderFns:[]};var o=n("VU/8")(s,u,!1,function(e){n("Jngz")},null,null);t.a=o.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),r=n("M93x"),s=n("/ocq"),u=n("cHtD");a.a.use(s.a),a.a.config.productionTip=!1,new a.a({router:u.a,el:"#app",components:{App:r.a},template:"<App/>"})},QZiT:function(e,t){},VQgQ:function(e,t){},VaLy:function(e,t){},cHtD:function(e,t,n){"use strict";(function(e){var a=n("/ocq"),r=n("jyJz"),s=n("N6IS"),u=n("+rkr"),o=n("IQYs"),i=n("M93x");const c=new a.a({mode:"history",base:e,routes:[{path:"/",name:"root",component:i.a},{path:"/user/:username",name:"user",component:r.a},{path:"/user/auth",name:"user_auth",component:s.a},{path:"/user/balance/:username",name:"user_balance",component:u.a},{path:"/user/transaction/:username",name:"user_transaction",component:o.a}]});t.a=c}).call(t,"/")},jyJz:function(e,t,n){"use strict";var a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"User"}},[t("h2",[this._v("Hola  "),t("span",[this._v(" "+this._s(this.username)+", ")]),this._v("  ¡Bienvenido!")])])},staticRenderFns:[]};var r=n("VU/8")({name:"User",data:function(){return{username:"none"}},created:function(){this.username=this.$route.params.username}},a,!1,function(e){n("QZiT")},null,null);t.a=r.exports}},["NHnr"]);
//# sourceMappingURL=app.f768c55ca0d7b5830cfb.js.map