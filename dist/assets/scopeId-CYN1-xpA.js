import{p as B,R as te,j as _,U as ne,Y as b,b as v,a5 as oe,e as d,a2 as $,G as T,a0 as E,N as w,a as I,z as Q,af as Se,a1 as he,y as Je,aH as Qe,I as M,q as be,ap as Xe,ad as ce,M as Ze,aI as et,al as tt,F as de,v as ve,a8 as nt,ae as V,x as pe,W as at,as as lt}from"./index-Cgmj9m30.js";import{d as it}from"./index-Bd5M16pI.js";import{m as j,r as Ce,u as G,h as H,V as X,M as st,c as ke,d as Ie,z as we,e as Ae,f as Ve,s as rt,i as Pe,R as ut,x as ot,n as Le,v as ct,l as Be,A as Oe,o as xe,p as Me,y as dt,b as fe,k as vt}from"./index-3sM0vgw6.js";import{u as ft}from"./ssrBoot-CWzIX7z6.js";import{c as _e,a as me}from"./VAvatar-CDWhb2EJ.js";const mt=B({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...j(),...te()},"VDivider"),yt=_()({name:"VDivider",props:mt(),setup(e,i){let{attrs:t}=i;const{themeClasses:n}=ne(e),{textColorClasses:l,textColorStyles:a}=Ce(b(e,"color")),s=v(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=oe(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=oe(e.thickness)),r});return G(()=>d("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,l.value,e.class],style:[s.value,a.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),Z=Symbol.for("vuetify:list");function Fe(){const e=$(Z,{hasPrepend:T(!1),updateHasPrepend:()=>null}),i={hasPrepend:T(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return E(Z,i),e}function Te(){return $(Z,null)}const ae=e=>{const i={activate:t=>{let{id:n,value:l,activated:a}=t;return n=w(n),e&&!l&&a.size===1&&a.has(n)||(l?a.add(n):a.delete(n)),a},in:(t,n,l)=>{let a=new Set;for(const s of t||[])a=i.activate({id:s,value:!0,activated:new Set(a),children:n,parents:l});return a},out:t=>Array.from(t)};return i},De=e=>{const i=ae(e);return{activate:n=>{let{activated:l,id:a,...s}=n;a=w(a);const r=l.has(a)?new Set([a]):new Set;return i.activate({...s,id:a,activated:r})},in:(n,l,a)=>{let s=new Set;return n!=null&&n.length&&(s=i.in(n.slice(0,1),l,a)),s},out:(n,l,a)=>i.out(n,l,a)}},gt=e=>{const i=ae(e);return{activate:n=>{let{id:l,activated:a,children:s,...r}=n;return l=w(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...r})},in:i.in,out:i.out}},St=e=>{const i=De(e);return{activate:n=>{let{id:l,activated:a,children:s,...r}=n;return l=w(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...r})},in:i.in,out:i.out}},ht={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let s=l.get(i);for(;s!=null;)a.add(s),s=l.get(s);return a}else return n.delete(i),n},select:()=>null},je={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=l.get(i);for(n.add(i);a!=null&&a!==i;)n.add(a),a=l.get(a);return n}else n.delete(i);return n},select:()=>null},bt={open:je.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let s=l.get(i);for(;s!=null;)a.push(s),s=l.get(s);return new Set(a)}},le=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=w(n),e&&!l){const s=Array.from(a.entries()).reduce((r,p)=>{let[m,y]=p;return y==="on"&&r.push(m),r},[]);if(s.length===1&&s[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},Ge=e=>{const i=le(e);return{select:n=>{let{selected:l,id:a,...s}=n;a=w(a);const r=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...s,id:a,selected:r})},in:(n,l,a)=>{let s=new Map;return n!=null&&n.length&&(s=i.in(n.slice(0,1),l,a)),s},out:(n,l,a)=>i.out(n,l,a)}},pt=e=>{const i=le(e);return{select:n=>{let{id:l,selected:a,children:s,...r}=n;return l=w(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...r})},in:i.in,out:i.out}},Ct=e=>{const i=Ge(e);return{select:n=>{let{id:l,selected:a,children:s,...r}=n;return l=w(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...r})},in:i.in,out:i.out}},kt=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:s,parents:r}=t;n=w(n);const p=new Map(a),m=[n];for(;m.length;){const S=m.shift();a.set(S,l?"on":"off"),s.has(S)&&m.push(...s.get(S))}let y=r.get(n);for(;y;){const S=s.get(y),h=S.every(o=>a.get(o)==="on"),u=S.every(o=>!a.has(o)||a.get(o)==="off");a.set(y,h?"on":u?"off":"indeterminate"),y=r.get(y)}return e&&!l&&Array.from(a.entries()).reduce((h,u)=>{let[o,c]=u;return c==="on"&&h.push(o),h},[]).length===0?p:a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,s]of t.entries())s==="on"&&!n.has(a)&&l.push(a);return l}};return i},D=Symbol.for("vuetify:nested"),Ne={id:T(),root:{register:()=>null,unregister:()=>null,parents:I(new Map),children:I(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:I(!1),selectable:I(!1),opened:I(new Set),activated:I(new Set),selected:I(new Map),selectedValues:I([])}},It=B({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function],selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,activated:Array,selected:Array,mandatory:Boolean},"nested"),wt=e=>{let i=!1;const t=I(new Map),n=I(new Map),l=Q(e,"opened",e.opened,u=>new Set(u),u=>[...u.values()]),a=v(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;switch(e.activeStrategy){case"leaf":return gt(e.mandatory);case"single-leaf":return St(e.mandatory);case"independent":return ae(e.mandatory);case"single-independent":default:return De(e.mandatory)}}),s=v(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return Ct(e.mandatory);case"leaf":return pt(e.mandatory);case"independent":return le(e.mandatory);case"single-independent":return Ge(e.mandatory);case"classic":default:return kt(e.mandatory)}}),r=v(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return bt;case"single":return ht;case"multiple":default:return je}}),p=Q(e,"activated",e.activated,u=>a.value.in(u,t.value,n.value),u=>a.value.out(u,t.value,n.value)),m=Q(e,"selected",e.selected,u=>s.value.in(u,t.value,n.value),u=>s.value.out(u,t.value,n.value));Se(()=>{i=!0});function y(u){const o=[];let c=u;for(;c!=null;)o.unshift(c),c=n.value.get(c);return o}const S=he("nested"),h={id:T(),root:{opened:l,activatable:b(e,"activatable"),selectable:b(e,"selectable"),activated:p,selected:m,selectedValues:v(()=>{const u=[];for(const[o,c]of m.value.entries())c==="on"&&u.push(o);return u}),register:(u,o,c)=>{o&&u!==o&&n.value.set(u,o),c&&t.value.set(u,[]),o!=null&&t.value.set(o,[...t.value.get(o)||[],u])},unregister:u=>{if(i)return;t.value.delete(u);const o=n.value.get(u);if(o){const c=t.value.get(o)??[];t.value.set(o,c.filter(f=>f!==u))}n.value.delete(u),l.value.delete(u)},open:(u,o,c)=>{S.emit("click:open",{id:u,value:o,path:y(u),event:c});const f=r.value.open({id:u,value:o,opened:new Set(l.value),children:t.value,parents:n.value,event:c});f&&(l.value=f)},openOnSelect:(u,o,c)=>{const f=r.value.select({id:u,value:o,selected:new Map(m.value),opened:new Set(l.value),children:t.value,parents:n.value,event:c});f&&(l.value=f)},select:(u,o,c)=>{S.emit("click:select",{id:u,value:o,path:y(u),event:c});const f=s.value.select({id:u,value:o,selected:new Map(m.value),children:t.value,parents:n.value,event:c});f&&(m.value=f),h.root.openOnSelect(u,o,c)},activate:(u,o,c)=>{if(!e.activatable)return h.root.select(u,!0,c);S.emit("click:activate",{id:u,value:o,path:y(u),event:c});const f=a.value.activate({id:u,value:o,activated:new Set(p.value),children:t.value,parents:n.value,event:c});f&&(p.value=f)},children:t,parents:n}};return E(D,h),h.root},Re=(e,i)=>{const t=$(D,Ne),n=Symbol(Je()),l=v(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(s,r)=>t.root.open(l.value,s,r),openOnSelect:(s,r)=>t.root.openOnSelect(l.value,s,r),isOpen:v(()=>t.root.opened.value.has(l.value)),parent:v(()=>t.root.parents.value.get(l.value)),activate:(s,r)=>t.root.activate(l.value,s,r),isActivated:v(()=>t.root.activated.value.has(w(l.value))),select:(s,r)=>t.root.select(l.value,s,r),isSelected:v(()=>t.root.selected.value.get(w(l.value))==="on"),isIndeterminate:v(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:v(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),Se(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&E(D,a),a},At=()=>{const e=$(D,Ne);E(D,{...e,isGroupActivator:!0})},Vt=Qe({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return At(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),Pt=B({activeColor:String,baseColor:String,color:String,collapseIcon:{type:M,default:"$collapse"},expandIcon:{type:M,default:"$expand"},prependIcon:M,appendIcon:M,fluid:Boolean,subgroup:Boolean,title:String,value:null,...j(),...H()},"VListGroup"),ye=_()({name:"VListGroup",props:Pt(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=Re(b(e,"value"),!0),s=v(()=>`v-list-group--id-${String(a.value)}`),r=Te(),{isBooted:p}=ft();function m(u){l(!n.value,u)}const y=v(()=>({onClick:m,class:"v-list-group__header",id:s.value})),S=v(()=>n.value?e.collapseIcon:e.expandIcon),h=v(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&S.value,appendIcon:e.appendIcon||!e.subgroup&&S.value,title:e.title,value:e.value}}));return G(()=>d(e.tag,{class:["v-list-group",{"v-list-group--prepend":r==null?void 0:r.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&d(X,{defaults:h.value},{default:()=>[d(Vt,null,{default:()=>[t.activator({props:y.value,isOpen:n.value})]})]}),d(st,{transition:{component:it},disabled:!p.value},{default:()=>{var u;return[be(d("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(u=t.default)==null?void 0:u.call(t)]),[[Xe,n.value]])]}})]})),{isOpen:n}}}),Lt=_e("v-list-item-subtitle"),Bt=_e("v-list-item-title"),Ot=B({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:M,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:M,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:ce(),onClickOnce:ce(),...ke(),...j(),...Ie(),...we(),...Ae(),...Ve(),...rt(),...H(),...te(),...Pe({variant:"text"})},"VListItem"),ge=_()({name:"VListItem",directives:{Ripple:ut},props:Ot(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=ot(e,t),s=v(()=>e.value===void 0?a.href.value:e.value),{activate:r,isActivated:p,select:m,isSelected:y,isIndeterminate:S,isGroupActivator:h,root:u,parent:o,openOnSelect:c}=Re(s,!1),f=Te(),P=v(()=>{var g;return e.active!==!1&&(e.active||((g=a.isActive)==null?void 0:g.value)||(u.activatable.value?p.value:y.value))}),F=v(()=>e.link!==!1&&a.isLink.value),A=v(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!f&&(u.selectable.value||u.activatable.value||e.value!=null))),O=v(()=>e.rounded||e.nav),x=v(()=>e.color??e.activeColor),U=v(()=>({color:P.value?x.value??e.baseColor:e.baseColor,variant:e.variant}));Ze(()=>{var g;return(g=a.isActive)==null?void 0:g.value},g=>{g&&o.value!=null&&u.open(o.value,!0),g&&c(g)},{immediate:!0});const{themeClasses:K}=ne(e),{borderClasses:W}=Le(e),{colorClasses:z,colorStyles:q,variantClasses:L}=ct(U),{densityClasses:C}=Be(e),{dimensionStyles:N}=Oe(e),{elevationClasses:Ue}=xe(e),{roundedClasses:Ke}=Me(O),We=v(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),Y=v(()=>({isActive:P.value,select:m,isSelected:y.value,isIndeterminate:S.value}));function ie(g){var R;l("click",g),!(h||!A.value)&&((R=a.navigate)==null||R.call(a,g),u.activatable.value?r(!p.value,g):(u.selectable.value||e.value!=null)&&m(!y.value,g))}function ze(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),ie(g))}return G(()=>{const g=F.value?"a":e.tag,R=n.title||e.title!=null,qe=n.subtitle||e.subtitle!=null,se=!!(e.appendAvatar||e.appendIcon),Ye=!!(se||n.append),re=!!(e.prependAvatar||e.prependIcon),J=!!(re||n.prepend);return f==null||f.updateHasPrepend(J),e.activeColor&&et("active-color",["color","base-color"]),be(d(g,{class:["v-list-item",{"v-list-item--active":P.value,"v-list-item--disabled":e.disabled,"v-list-item--link":A.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!J&&(f==null?void 0:f.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&P.value},K.value,W.value,z.value,C.value,Ue.value,We.value,Ke.value,L.value,e.class],style:[q.value,N.value,e.style],href:a.href.value,tabindex:A.value?f?-2:0:void 0,onClick:ie,onKeydown:A.value&&!F.value&&ze},{default:()=>{var ue;return[dt(A.value||P.value,"v-list-item"),J&&d("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?d(X,{key:"prepend-defaults",disabled:!re,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var k;return[(k=n.prepend)==null?void 0:k.call(n,Y.value)]}}):d(de,null,[e.prependAvatar&&d(me,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(fe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),d("div",{class:"v-list-item__spacer"},null)]),d("div",{class:"v-list-item__content","data-no-activator":""},[R&&d(Bt,{key:"title"},{default:()=>{var k;return[((k=n.title)==null?void 0:k.call(n,{title:e.title}))??e.title]}}),qe&&d(Lt,{key:"subtitle"},{default:()=>{var k;return[((k=n.subtitle)==null?void 0:k.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(ue=n.default)==null?void 0:ue.call(n,Y.value)]),Ye&&d("div",{key:"append",class:"v-list-item__append"},[n.append?d(X,{key:"append-defaults",disabled:!se,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var k;return[(k=n.append)==null?void 0:k.call(n,Y.value)]}}):d(de,null,[e.appendIcon&&d(fe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(me,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),d("div",{class:"v-list-item__spacer"},null)])]}}),[[tt("ripple"),A.value&&e.ripple]])}),{isGroupActivator:h,isSelected:y,list:f,select:m}}}),xt=B({color:String,inset:Boolean,sticky:Boolean,title:String,...j(),...H()},"VListSubheader"),Mt=_()({name:"VListSubheader",props:xt(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=Ce(b(e,"color"));return G(()=>{const a=!!(t.default||e.title);return d(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[a&&d("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),_t=B({items:Array,returnObject:Boolean},"VListChildren"),$e=_()({name:"VListChildren",props:_t(),setup(e,i){let{slots:t}=i;return Fe(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var h,u;let{children:s,props:r,type:p,raw:m}=a;if(p==="divider")return((h=t.divider)==null?void 0:h.call(t,{props:r}))??d(yt,r,null);if(p==="subheader")return((u=t.subheader)==null?void 0:u.call(t,{props:r}))??d(Mt,r,null);const y={subtitle:t.subtitle?o=>{var c;return(c=t.subtitle)==null?void 0:c.call(t,{...o,item:m})}:void 0,prepend:t.prepend?o=>{var c;return(c=t.prepend)==null?void 0:c.call(t,{...o,item:m})}:void 0,append:t.append?o=>{var c;return(c=t.append)==null?void 0:c.call(t,{...o,item:m})}:void 0,title:t.title?o=>{var c;return(c=t.title)==null?void 0:c.call(t,{...o,item:m})}:void 0},S=ye.filterProps(r);return s?d(ye,ve({value:r==null?void 0:r.value},S),{activator:o=>{let{props:c}=o;const f={...r,...c,value:e.returnObject?m:r.value};return t.header?t.header({props:f}):d(ge,f,y)},default:()=>d($e,{items:s},t)}):t.item?t.item({props:r}):d(ge,ve(r,{value:e.returnObject?m:r.value}),y)}))}}}),Ft=B({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:nt}},"list-items");function ee(e,i){const t=V(i,e.itemTitle,i),n=V(i,e.itemValue,t),l=V(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?pe(i,["children"]):i:void 0:V(i,e.itemProps),s={title:t,value:n,...a};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(l)?Ee(e,l):void 0,raw:i}}function Ee(e,i){const t=[];for(const n of i)t.push(ee(e,n));return t}function Ut(e){const i=v(()=>Ee(e,e.items)),t=v(()=>i.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(s=>s!==null)),a.map(s=>e.returnObject&&typeof s=="string"?ee(e,s):i.value.find(r=>e.valueComparator(s,r.value))||ee(e,s))}function l(a){return e.returnObject?a.map(s=>{let{raw:r}=s;return r}):a.map(s=>{let{value:r}=s;return r})}return{items:i,transformIn:n,transformOut:l}}function Tt(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function Dt(e,i){const t=V(i,e.itemType,"item"),n=Tt(i)?i:V(i,e.itemTitle),l=V(i,e.itemValue,void 0),a=V(i,e.itemChildren),s=e.itemProps===!0?pe(i,["children"]):V(i,e.itemProps),r={title:n,value:l,...s};return{type:t,title:r.title,value:r.value,props:r,children:t==="item"&&a?He(e,a):void 0,raw:i}}function He(e,i){const t=[];for(const n of i)t.push(Dt(e,n));return t}function jt(e){return{items:v(()=>He(e,e.items))}}const Gt=B({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...It({selectStrategy:"single-leaf",openStrategy:"list"}),...ke(),...j(),...Ie(),...we(),...Ae(),itemType:{type:String,default:"type"},...Ft(),...Ve(),...H(),...te(),...Pe({variant:"text"})},"VList"),Kt=_()({name:"VList",props:Gt(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=jt(e),{themeClasses:l}=ne(e),{backgroundColorClasses:a,backgroundColorStyles:s}=vt(b(e,"bgColor")),{borderClasses:r}=Le(e),{densityClasses:p}=Be(e),{dimensionStyles:m}=Oe(e),{elevationClasses:y}=xe(e),{roundedClasses:S}=Me(e),{children:h,open:u,parents:o,select:c}=wt(e),f=v(()=>e.lines?`v-list--${e.lines}-line`:void 0),P=b(e,"activeColor"),F=b(e,"baseColor"),A=b(e,"color");Fe(),at({VListGroup:{activeColor:P,baseColor:F,color:A,expandIcon:b(e,"expandIcon"),collapseIcon:b(e,"collapseIcon")},VListItem:{activeClass:b(e,"activeClass"),activeColor:P,baseColor:F,color:A,density:b(e,"density"),disabled:b(e,"disabled"),lines:b(e,"lines"),nav:b(e,"nav"),slim:b(e,"slim"),variant:b(e,"variant")}});const O=T(!1),x=I();function U(C){O.value=!0}function K(C){O.value=!1}function W(C){var N;!O.value&&!(C.relatedTarget&&((N=x.value)!=null&&N.contains(C.relatedTarget)))&&L()}function z(C){if(x.value){if(C.key==="ArrowDown")L("next");else if(C.key==="ArrowUp")L("prev");else if(C.key==="Home")L("first");else if(C.key==="End")L("last");else return;C.preventDefault()}}function q(C){O.value=!0}function L(C){if(x.value)return lt(x.value,C)}return G(()=>d(e.tag,{ref:x,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,r.value,p.value,y.value,f.value,S.value,e.class],style:[s.value,m.value,e.style],tabindex:e.disabled||O.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:U,onFocusout:K,onFocus:W,onKeydown:z,onMousedown:q},{default:()=>[d($e,{items:n.value,returnObject:e.returnObject},t)]})),{open:u,select:c,focus:L,children:h,parents:o}}});function Wt(){const i=he("useScopeId").vnode.scopeId;return{scopeId:i?{[i]:""}:void 0}}export{Kt as V,ge as a,yt as b,ye as c,Ut as d,Ft as m,Wt as u};