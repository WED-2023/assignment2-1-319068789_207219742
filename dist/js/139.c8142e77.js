"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[139],{4139:(r,s,e)=>{e.r(s),e.d(s,{default:()=>c});var t=function(){var r=this,s=r._self._c;return s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[r._v("Login")]),s("b-form",{on:{submit:function(s){return s.preventDefault(),r.onLogin.apply(null,arguments)}}},[s("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[s("b-form-input",{attrs:{id:"Username",type:"text",state:r.validateState("username")},model:{value:r.$v.form.username.$model,callback:function(s){r.$set(r.$v.form.username,"$model",s)},expression:"$v.form.username.$model"}}),s("b-form-invalid-feedback",[r._v(" Username is required ")])],1),s("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[s("b-form-input",{attrs:{id:"Password",type:"password",state:r.validateState("password")},model:{value:r.$v.form.password.$model,callback:function(s){r.$set(r.$v.form.password,"$model",s)},expression:"$v.form.password.$model"}}),s("b-form-invalid-feedback",[r._v(" Password is required ")])],1),s("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[r._v("Login")]),s("div",{staticClass:"mt-2"},[r._v(" Do not have an account yet? "),s("router-link",{attrs:{to:"register"}},[r._v(" Register in here")])],1)],1),r.form.submitError?s("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[r._v(" Login failed: "+r._s(r.form.submitError)+" ")]):r._e()],1)},o=[],a=e(6835),n=e(8534),i=(e(7658),e(379)),l=e(9239);const m={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:i.C1},password:{required:i.C1}}},methods:{validateState:function(r){var s=this.$v.form[r],e=s.$dirty,t=s.$error;return e?!t:null},Login:function(){var r=this;return(0,n.Z)((0,a.Z)().mark((function s(){var e;return(0,a.Z)().wrap((function(s){while(1)switch(s.prev=s.next){case 0:try{e=!0,(0,l.sD)(r.form.username,r.form.password,e),console.log(r.$root.store.login),r.$root.store.login(r.form.username),r.$router.push("/")}catch(t){console.log(t.response),r.form.submitError=t.response.data.message}case 1:case"end":return s.stop()}}),s)})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},u=m;var d=e(1001),f=(0,d.Z)(u,t,o,!1,null,"7a96c5b1",null);const c=f.exports}}]);
//# sourceMappingURL=139.c8142e77.js.map