"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[194],{7194:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(4942),r=n(1413),s=n(9439),c=n(9434),o=n(2791),i={name:"",phone:""},l="myContactsForm_form__7K569",u="myContactsForm_button__CST9o",m=function(e){return e.contacts.items},d=function(e){var t=e.contacts,n=e.filter;if(!n)return t.items;var a=n.toLowerCase();return t.items.filter((function(e){return e.name.toLowerCase().includes(a)}))},h=function(e){return e.contacts.loading},p=n(30),f=n(184),_=function(){var e=(0,o.useState)((0,r.Z)({},i)),t=(0,s.Z)(e,2),n=t[0],d=t[1],h=(0,c.v9)(m),_=(0,c.I0)(),x=function(e){var t=e.target,n=t.name,s=t.value;d((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},n,s))}))},v=n.name,j=n.phone;return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(e){var t=e.name,n=e.phone,a=t.toLowerCase();if(h.find((function(e){return e.name.toLowerCase()===a})))return alert("".concat(t," is already in contacts")),!1;_((0,p.uK)({name:t,phone:n}))}((0,r.Z)({},n)),d((0,r.Z)({},i))},className:l,children:[(0,f.jsx)("input",{value:v,onChange:x,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,f.jsx)("input",{value:j,onChange:x,type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,f.jsx)("button",{type:"submit",className:u,children:"Add contact"})]})},x="contactItem_item__VUf3q",v="contactItem_name__KstQc",j="contactItem_number__5f4gx",C="contactItem_deleteBtn__JT2zm",b=function(e){var t=e.id,n=e.name,a=e.phone,r=(0,c.I0)();return(0,f.jsxs)("li",{className:x,children:[(0,f.jsxs)("p",{className:v,children:[n,":"]}),(0,f.jsx)("p",{className:j,children:a}),(0,f.jsx)("button",{type:"button",className:C,onClick:function(){return function(e){r((0,p.GK)(e))}(t)},children:"Delete"})]})},y="myContactList_list__n9HoE",w=function(){var e=(0,c.v9)(d),t=(0,c.I0)();(0,o.useEffect)((function(){t((0,p.yF)())}),[t]);var n=Boolean(e.length);return(0,f.jsxs)("div",{children:[n&&(0,f.jsx)("ul",{className:y,children:e.map((function(e){var t=e.id,n=e.name,a=e.phone;return(0,f.jsx)(b,{id:t,name:n,phone:a},t)}))}),!n&&(0,f.jsx)("p",{children:"No contacts in list, yet"})]})},g=n(5653),N=function(e){return e.filter},Z="myContactsFilter_wrapper__ApCxS",F="myContactsFilter_label__IiMGa",I=function(){var e=(0,c.v9)(N),t=(0,c.I0)();return(0,f.jsxs)("div",{className:Z,children:[(0,f.jsx)("label",{className:F,htmlFor:"filter",children:"Find contacts by name"}),(0,f.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){var n=e.target;t((0,g.T)(n.value))}})]})},k=n(643),A="loader_wrapper__9FssT",L=function(){return(0,f.jsx)("div",{className:A,children:(0,f.jsx)(k.Bb,{height:"80",width:"80",radius:"9",color:"green",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:"wrapper-class"})})},z=function(){var e=(0,c.v9)(h);return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:"Phonebook"}),(0,f.jsx)(_,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(I,{}),e&&(0,f.jsx)(L,{}),(0,f.jsx)(w,{})]})},S=function(){return(0,f.jsx)("div",{children:(0,f.jsx)(z,{})})}}}]);
//# sourceMappingURL=194.01b524b6.chunk.js.map