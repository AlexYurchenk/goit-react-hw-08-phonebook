(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[6],{217:function(e,t,a){e.exports={form:"RegisterView_form__jLkqR",textField:"RegisterView_textField__KY2Kj"}},247:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var r=a(70),n=a(2),i=a(0),s=a(21),o=a(26),l=a(27),c=a(244),u=a(239),m=a(71),b=a(217),d=a.n(b);function p(){var e=Object(s.b)(),t=Object(s.c)(o.b.getLoading),a=Object(i.useState)(""),b=Object(r.a)(a,2),p=b[0],j=b[1],f=Object(i.useState)(""),h=Object(r.a)(f,2),g=h[0],O=h[1],v=Object(i.useState)(""),w=Object(r.a)(v,2),x=w[0],y=w[1],_=function(e){var t=e.target,a=t.name,r=t.value;switch(a){case"name":return j(r);case"email":return O(r);case"password":return y(r);default:return}};return Object(n.jsxs)("form",{onSubmit:function(t){return t.preventDefault(),""===p.trim()||""===g.trim()||""===x.trim()?l.b.error("Please fill in all fields!"):x.length<7?l.b.info("Passwords must be at least 7 characters long!"):(e(o.a.register({name:p,email:g,password:x})),j(""),O(""),void y(""))},className:d.a.form,autoComplete:"off",children:[Object(n.jsx)(c.a,{label:"Name",variant:"outlined",color:"primary",type:"text",name:"name",value:p,onChange:_,className:d.a.textField}),Object(n.jsx)(c.a,{label:"Email",variant:"outlined",color:"primary",type:"email",name:"email",value:g,onChange:_,className:d.a.textField}),Object(n.jsx)(c.a,{label:"Password",variant:"outlined",color:"primary",type:"password",name:"password",value:x,onChange:_,className:d.a.textField}),!t&&Object(n.jsx)(u.a,{fullWidth:!0,variant:"contained",color:"primary",size:"large",type:"submit",children:"Sign up"}),t&&Object(n.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=register-view.5fd2ff46.chunk.js.map