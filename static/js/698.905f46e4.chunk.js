"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[698],{698:function(e,n,t){t.r(n),t.d(n,{default:function(){return _}});var r=t(413);function a(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l="textField_wrapper__50VcK",i="textField_field__38YRA",s=t(791),o=t(382),u=t(184),c=["label","handleChange"],d=function(e){var n=e.label,t=e.handleChange,d=a(e,c),m=(0,s.useMemo)((function(){return(0,o.x0)()}),[]);return(0,u.jsxs)("div",{className:l,children:[(0,u.jsx)("label",{htmlFor:m,children:n}),(0,u.jsx)("input",(0,r.Z)({className:i,id:m,onChange:t},d))]})},m="button_btn__aZIRC",h=function(e){var n=e.children,t=e.type,r=void 0===t?"submit":t;return(0,u.jsx)("button",{type:r,className:m,children:n})},p=t(942),f=t(439),b=function(e){var n=e.initialState,t=e.onSubmit,a=(0,s.useState)((0,r.Z)({},n)),l=(0,f.Z)(a,2),i=l[0],o=l[1];return{state:i,setState:o,handleChange:function(e){var n=e.target;o((function(e){var t=n.name,a=n.value,l=n.checked,i="checkbox"===n.type?l:a;return(0,r.Z)((0,r.Z)({},e),{},(0,p.Z)({},t,i))}))},handleSubmit:function(e){e.preventDefault(),t((0,r.Z)({},i)),o((0,r.Z)({},n))}}},x={name:{type:"text",name:"name",required:!0,label:"User name",placeholder:"User name"},email:{type:"email",name:"email",required:!0,label:"User email",placeholder:"User email"},password:{type:"text",name:"password",required:!0,label:"User password",placeholder:"User password"}},g={name:"",email:"",password:""},j="registerForm_form__Rfx+b",v=function(e){var n=e.onSubmit,t=b({initialState:g,onSubmit:n}),a=t.state,l=t.handleChange,i=t.handleSubmit;return console.log(a),(0,u.jsxs)("form",{onSubmit:i,className:j,children:[(0,u.jsx)(d,(0,r.Z)({handleChange:l},x.name)),(0,u.jsx)(d,(0,r.Z)({handleChange:l},x.email)),(0,u.jsx)(d,(0,r.Z)({handleChange:l},x.password)),(0,u.jsx)(h,{children:"Register"})]})},_=function(){return(0,u.jsxs)("div",{children:[(0,u.jsx)("h2",{children:"Register Page"}),(0,u.jsx)(v,{})]})}}}]);
//# sourceMappingURL=698.905f46e4.chunk.js.map