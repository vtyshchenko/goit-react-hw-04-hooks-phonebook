(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"AddContact_form__bU793",input:"AddContact_input__1ikse",label:"AddContact_label__2t3jA",button:"AddContact_button__1-BL-"}},,,,function(e,t,n){e.exports={componenet:"Phonebook_componenet__2hpso",title:"Phonebook_title__2MIbi"}},,function(e,t,n){e.exports={input:"Filter_input__3dEfW",label:"Filter_label__25Til"}},,,function(e,t,n){e.exports={button:"ContactsItem_button__EYi4x"}},function(e,t,n){e.exports={item:"Contacts_item__34sdt"}},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(10),r=n.n(o),s=(n(18),n(19),n(9)),i=n(3),l=n(6),u=n.n(l),b=n(11),d=n.n(b),m=n(0),j=function(e){var t=e.item,n=e.onDelete;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("span",{children:[t.name,": ",t.number]}),Object(m.jsx)("button",{className:d.a.button,type:"button",onClick:function(){return n(t.id)},children:"Delete"})]})},h=n(12),p=n.n(h);var f=function(e){var t=e.contctsList,n=e.onDelete;return t.length>0?Object(m.jsx)("ul",{children:t.map((function(e){return Object(m.jsx)("li",{className:p.a.item,children:Object(m.jsx)(j,{item:e,onDelete:n})},e.id)}))}):Object(m.jsx)("p",{children:"No contacts here"})},O=n(13),x=n(2),_=n.n(x);var g=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(i.a)(n,2),o=c[0],r=c[1],s=Object(a.useState)(""),l=Object(i.a)(s,2),u=l[0],b=l[1],d=function(e){var t=e.target,n=t.name,a=t.value;"number"===n?b(a):r(a)};return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=Object(O.a)();t({namePeople:o,number:u,id:n}),r(""),b("")},className:_.a.form,children:[Object(m.jsxs)("label",{className:_.a.label,children:["Name",Object(m.jsx)("input",{className:_.a.input,type:"text",name:"namePeople",placeholder:"John Jonson",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:d})]}),Object(m.jsxs)("label",{className:_.a.label,children:["Number",Object(m.jsx)("input",{className:_.a.input,type:"tel",name:"number",placeholder:"123-55-66",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:d})]}),Object(m.jsx)("button",{className:_.a.button,type:"submit",children:"Add contact"})]})},v=n(8),C=n.n(v);var N=function(e){var t=e.onChange,n=e.filter;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("label",{className:C.a.label,children:["Find contscts by name",Object(m.jsx)("input",{className:C.a.input,type:"text",name:"name",placeholder:"John Jonson",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:t})]})})};var A=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),r=Object(i.a)(o,2),l=r[0],b=r[1];Object(a.useEffect)((function(){var e=localStorage.getItem("contacts");e&&(e=JSON.parse(e))&&c(Object(s.a)(e))}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var d=function(){var e=l.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),j=n.length>1;return Object(m.jsxs)("div",{className:u.a.componenet,children:[Object(m.jsx)("h1",{className:u.a.title,children:"Phonebook"}),Object(m.jsx)(g,{onSubmit:function(e){var t=e.id,a=e.namePeople,o=e.number;n.find((function(e){return a.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(a," is alredy in contacts")):c((function(e){return[].concat(Object(s.a)(e),[{id:t,name:a,number:o}])}))}}),Object(m.jsx)("h2",{className:u.a.title,children:"Contacts"}),j&&Object(m.jsx)(N,{filter:l,onChange:function(e){b(e.target.value)}}),Object(m.jsx)(f,{contctsList:d,onDelete:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))})),localStorage.setItem("contacts",JSON.stringify(n))}})]})};var S=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(A,{})})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),y()}],[[21,1,2]]]);
//# sourceMappingURL=main.a81de269.chunk.js.map