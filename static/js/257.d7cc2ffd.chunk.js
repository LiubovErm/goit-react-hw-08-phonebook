"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[257],{257:function(n,e,t){t.r(e),t.d(e,{default:function(){return bn}});var r,o,i,a,u,c,s=t(3682),l=t(9439),d=t(2791),h=t(8989),m=t(168),p=t(6444),f=t(828),x=p.ZP.label(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: ","px;\n"])),(function(n){return n.theme.space[3]})),b=p.ZP.input(o||(o=(0,m.Z)(["\n  max-width: 500px;\n  margin-top: ","px;\n  padding: ","px;\n"])),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]})),g=p.ZP.button(i||(i=(0,m.Z)(["\n  cursor: pointer;  \n  display:flex;\n  justify-content:center;\n  width: 180px;\n  border: none;\n  border-radius: ",";\n  padding: ","px;\n  margin-top: ","px;\n  margin-bottom: ","px;\n  background-color:",";\n  color:",";\n  :hover,\n  :focus {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.space[5]}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.normal})),Z=(0,p.ZP)(f.yAv)(a||(a=(0,m.Z)(["\n  margin-left: 10px;\n"]))),w=t(5984),j=t(3194),v=t.n(j),y=t(3329);function C(){var n=(0,d.useState)(""),e=(0,l.Z)(n,2),t=e[0],r=e[1],o=(0,d.useState)(""),i=(0,l.Z)(o,2),a=i[0],u=i[1],c=(0,w.x0)(),m=(0,w.x0)(),p=(0,h.wY)().data,f=(0,h.Tn)(),j=(0,l.Z)(f,1)[0],C=function(n){var e=n.currentTarget,t=e.name,o=e.value;switch(t){case"name":r(o);break;case"number":u(o);break;default:return console.log("error")}},P=function(){r(""),u("")};return(0,y.jsxs)(s.x,{as:"form",onSubmit:function(n){n.preventDefault();var e={id:(0,w.x0)(),name:t,number:a};p.find((function(n){return n.name.toLowerCase()===t.toLowerCase()}))?v().Notify.failure("".concat(t," is already in contacts")):(j(e),v().Notify.success("\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e")),P()},autoComplete:"off",display:"flex",flexDirection:"column",maxWidth:500,mx:"auto",children:[(0,y.jsxs)(x,{htmlFor:c,children:["Name",(0,y.jsx)(b,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:t,onChange:C,id:c,placeholder:"\u0406\u043c\u044f \u041f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",autoComplete:"off"})]}),(0,y.jsxs)(x,{htmlFor:m,children:["Number",(0,y.jsx)(b,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:a,onChange:C,id:m,placeholder:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",autoComplete:"off"})]}),(0,y.jsxs)(g,{type:"submit",children:["Add contact",(0,y.jsx)(Z,{})]})]})}var P,k,F,z,N,S,A,L,V,_,I,T,W,Y,q,D=p.ZP.label(u||(u=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),J=p.ZP.input(c||(c=(0,m.Z)(["\n  width: 500px;\n  margin: 20px auto 0 auto;\n  padding: ","px;;\n"])),(function(n){return n.theme.space[3]})),M=t(5048),B=t(6895),E=function(){var n=(0,M.I0)();return(0,y.jsxs)(D,{children:["Filter by name",(0,y.jsx)(J,{type:"text",onChange:function(e){return n((0,B.M6)(e.target.value))},placeholder:"\u042f \u0448\u0443\u043a\u0430\u044e..."})]})},K=t(6546),O=p.ZP.div(P||(P=(0,m.Z)(["\n  z-index: 1;\n  overflow: hidden;\n"]))),Q=t(5861),U=t(7757),$=t.n(U),G=t(5705),H=p.ZP.div(k||(k=(0,m.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),R=(0,p.ZP)(G.l0)(F||(F=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 370px;\n  border-radius: ",";\n  padding: ","px;\n  background-color: #C55F05;\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[4]})),X=p.ZP.label(z||(z=(0,m.Z)(["\n  color: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.colors.white}),(function(n){return n.theme.fontSizes.s})),nn=(0,p.ZP)(G.gN)(N||(N=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  margin-top:","px;\n  border-radius: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.space[2]}),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.colors.white})),en=p.ZP.button(S||(S=(0,m.Z)(["\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  font-size: ",";\n  background-color: ",";\n  border-radius: ",";\n  padding: ","px;\n  border:none;\n  :hover,\n  :focus {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.colors.orange}),(function(n){return n.theme.radii.round}),(function(n){return n.theme.space[2]}),(function(n){return n.theme.shadows.normal})),tn=p.ZP.button(A||(A=(0,m.Z)(["\n  cursor: pointer;  \n  font-size: 12px;\n  border-radius: ",";\n  border: none;\n  margin-top:","px;\n  padding: ","px;\n  background-color:",";\n  color:",";\n  :hover,\n  :focus {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.radii.normal}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.green}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.normal})),rn=t(6053),on=function(n){var e,t,r=n.initialFormValues,o=(0,d.useState)(null===(e=r[0])||void 0===e?void 0:e.name),i=(0,l.Z)(o,2),a=i[0],u=i[1],c=(0,d.useState)(null===(t=r[0])||void 0===t?void 0:t.number),s=(0,l.Z)(c,2),m=s[0],p=s[1],f=(0,h.wv)(),x=(0,l.Z)(f,1)[0],b=(0,M.I0)(),g=function(n){var e=n.target;switch(e.name){case"name":return u(e.value);case"number":return p(e.value);default:return}},Z=function(){var n=(0,Q.Z)($().mark((function n(e){var t;return $().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.resetForm,n.prev=1,console.log("initialFormValues",r),n.next=5,x({id:r[0].id,name:a,number:m});case 5:t(),b((0,K.F)(!1)),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0),b((0,K.F)(!1));case 13:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}();return(0,y.jsxs)(H,{children:[(0,y.jsx)(G.J9,{initialValues:r,onSubmit:Z,children:(0,y.jsxs)(R,{children:[(0,y.jsxs)(X,{children:["Name",(0,y.jsx)(nn,{type:"text",name:"name",value:a,onChange:g})]}),(0,y.jsxs)(X,{children:["Number",(0,y.jsx)(nn,{type:"tel",name:"number",value:m,onChange:g})]}),(0,y.jsx)(tn,{type:"submit",children:"Update contact"})]})}),(0,y.jsx)(en,{onClick:function(){b((0,K.F)(!1))},children:(0,y.jsx)(rn.nfZ,{})})]})},an=function(){var n=(0,h.wY)().data;return(0,y.jsx)(y.Fragment,{children:(0,y.jsx)(O,{children:n&&(0,y.jsx)(on,{initialFormValues:n})})})},un=p.ZP.li(L||(L=(0,m.Z)(["\n  margin-bottom: ","px;\n  display: flex;\n  justify-content: space-between;\n  align-items:center;\n"])),(function(n){return n.theme.space[2]})),cn=p.ZP.div(V||(V=(0,m.Z)(["\n  display: flex;\n  width: 70%;\n  justify-content: space-between;\n"]))),sn=p.ZP.span(_||(_=(0,m.Z)(["\n font-weight: ",";\n"])),(function(n){return n.theme.fontWeights.bold})),ln=p.ZP.span(I||(I=(0,m.Z)(["\n margin-left: ","px;\n"])),(function(n){return n.theme.space[4]})),dn=p.ZP.button(T||(T=(0,m.Z)(["\n  cursor: pointer;  \n  width:30px;\n  height:30px;\n  border-radius: ",";\n  border: none;\n  padding: ","px;\n  background-color:",";\n  color:",";\n  :hover,\n  :focus {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.radii.round}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.red}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.normal})),hn=p.ZP.button(W||(W=(0,m.Z)(["\n  cursor: pointer;  \n  width:30px;\n  height:30px;\n  border-radius: ",";\n  border: none;\n  margin-left:  ","px;\n  padding: ","px;\n  background-color:",";\n  color:",";\n  :hover,\n  :focus {\n    box-shadow: ",";\n  }\n"])),(function(n){return n.theme.radii.round}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.space[3]}),(function(n){return n.theme.colors.orange}),(function(n){return n.theme.colors.white}),(function(n){return n.theme.shadows.normal})),mn=function(n){var e=n.name,t=n.number,r=n.id,o=(0,h.Nt)(),i=(0,l.Z)(o,2),a=i[0],u=i[1].isLoading,c=(0,M.I0)(),s=(0,M.v9)((function(n){return n.modal.isOpen}));return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(un,{id:r,children:[(0,y.jsxs)(cn,{children:[(0,y.jsxs)(sn,{children:[e,":"]}),(0,y.jsx)(ln,{children:t})]}),(0,y.jsx)(hn,{type:"button",onClick:function(){c((0,K.F)("editContact"))},disabled:u,children:(0,y.jsx)(f.a8C,{})}),(0,y.jsx)(dn,{type:"button",onClick:function(n){a(n.currentTarget.parentElement.id),v().Notify.success("\u0412\u0438\u0434\u0430\u043b\u0435\u043d\u043e")},children:(0,y.jsx)(f.sQZ,{})})]}),"editContact"===s&&(0,y.jsx)(an,{id:r})]})},pn=p.ZP.ul(Y||(Y=(0,m.Z)(["\n  list-style: none;\n"]))),fn=p.ZP.p(q||(q=(0,m.Z)(["\n  text-align: center;\n"]))),xn=function(){var n=(0,h.wY)().data,e=void 0===n?[]:n,t=(0,M.v9)((function(n){return(0,B.zK)(n)})).filter,r=e.filter((function(n){return n.name.toLowerCase().includes(t.toLowerCase())}));return(0,y.jsx)(pn,{children:r.length>0?r.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,y.jsx)(mn,{id:e,name:t,number:r},e)})):(0,y.jsx)(fn,{children:"\u041d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e \u043d\u0456\u0447\u043e\u0433\u043e"})})};function bn(){return(0,y.jsxs)(s.x,{mx:"auto",maxWidth:500,children:[(0,y.jsx)("h2",{children:"Phonebook"}),(0,y.jsx)(C,{}),(0,y.jsx)("h2",{children:"Contacts"}),(0,y.jsx)(E,{}),(0,y.jsx)(xn,{})]})}}}]);
//# sourceMappingURL=257.d7cc2ffd.chunk.js.map