import{s as x,b as y,k as de,l as ne,m as L,n as oe,C as me,p as fe,q as ge,v as he,j as pe,x as ye,y as we,z as Z,A as be,B as ke,a as D,D as Y,E as le,F as Se,e as r,G as j,T as Ve,H as ue,I as Ce,_ as Ee,u as Me,J as Te,d as G,K as xe,w as M,i as I,o as $,L as J,M as K,N as Be,g as _e,t as Re,r as Le,c as Pe}from"./index-XpyYEwP0.js";import"./index-3l8bI6ml.js";import{m as Ie,u as He,V as Ne,a as De}from"./VMain-Feoq1vWB.js";import{a as Ye,m as $e,b as We,c as Ue,d as Ae,e as Oe,f as Q,g as Xe,h as ze,i as Fe,t as qe,u as Ze,V as je,R as ee}from"./index-CMpqphda.js";import{u as Ge,V as H,a as N,b as W}from"./scopeId-DsQN3m52.js";import{u as Je}from"./ssrBoot-BaYAS6no.js";import{V as Ke}from"./VAvatar-liwFZfw9.js";import{V as Qe,a as et}from"./VAppBarNavIcon-CcPfBIvk.js";import"./VProgressCircular-BQ1T_fbM.js";import"./index-FNzzcpX8.js";import"./VBtn-FKLMCNJp.js";function tt(e){let{rootEl:c,isSticky:m,layoutItemStyles:s}=e;const t=x(!1),a=x(0),h=y(()=>{const f=typeof t.value=="boolean"?"top":t.value;return[m.value?{top:"auto",bottom:"auto",height:void 0}:void 0,t.value?{[f]:de(a.value)}:{top:s.value.top}]});ne(()=>{L(m,f=>{f?window.addEventListener("scroll",b,{passive:!0}):window.removeEventListener("scroll",b)},{immediate:!0})}),oe(()=>{window.removeEventListener("scroll",b)});let p=0;function b(){const f=p>window.scrollY?"up":"down",l=c.value.getBoundingClientRect(),n=parseFloat(s.value.top??0),d=window.scrollY-Math.max(0,a.value-n),o=l.height+Math.max(a.value,n)-window.scrollY-window.innerHeight,S=parseFloat(getComputedStyle(c.value).getPropertyValue("--v-body-scroll-y"))||0;l.height<window.innerHeight-n?(t.value="top",a.value=n):f==="up"&&t.value==="bottom"||f==="down"&&t.value==="top"?(a.value=window.scrollY+l.top-S,t.value=!0):f==="down"&&o<=0?(a.value=0,t.value="bottom"):f==="up"&&d<=0&&(S?t.value!=="top"&&(a.value=-d+S+n,t.value="top"):(a.value=l.top+d,t.value="top")),p=window.scrollY}return{isStuck:t,stickyStyles:h}}const at=100,nt=20;function te(e){return(e<0?-1:1)*Math.sqrt(Math.abs(e))*1.41421356237}function ae(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let c=0;for(let m=e.length-1;m>0;m--){if(e[m].t===e[m-1].t)continue;const s=te(c),t=(e[m].d-e[m-1].d)/(e[m].t-e[m-1].t);c+=(t-s)*Math.abs(t),m===e.length-1&&(c*=.5)}return te(c)*1e3}function ot(){const e={};function c(t){Array.from(t.changedTouches).forEach(a=>{(e[a.identifier]??(e[a.identifier]=new me(nt))).push([t.timeStamp,a])})}function m(t){Array.from(t.changedTouches).forEach(a=>{delete e[a.identifier]})}function s(t){var f;const a=(f=e[t])==null?void 0:f.values().reverse();if(!a)throw new Error(`No samples for touch id ${t}`);const h=a[0],p=[],b=[];for(const l of a){if(h[0]-l[0]>at)break;p.push({t:l[0],d:l[1].clientX}),b.push({t:l[0],d:l[1].clientY})}return{x:ae(p),y:ae(b),get direction(){const{x:l,y:n}=this,[d,o]=[Math.abs(l),Math.abs(n)];return d>o&&l>=0?"right":d>o&&l<=0?"left":o>d&&n>=0?"down":o>d&&n<=0?"up":lt()}}}return{addMovement:c,endTouch:m,getVelocity:s}}function lt(){throw new Error}function ut(e){let{isActive:c,isTemporary:m,width:s,touchless:t,position:a}=e;ne(()=>{window.addEventListener("touchstart",B,{passive:!0}),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",C,{passive:!0})}),oe(()=>{window.removeEventListener("touchstart",B),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",C)});const h=y(()=>["left","right"].includes(a.value)),{addMovement:p,endTouch:b,getVelocity:f}=ot();let l=!1;const n=x(!1),d=x(0),o=x(0);let S;function w(i,u){return(a.value==="left"?i:a.value==="right"?document.documentElement.clientWidth-i:a.value==="top"?i:a.value==="bottom"?document.documentElement.clientHeight-i:T())-(u?s.value:0)}function P(i){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const v=a.value==="left"?(i-o.value)/s.value:a.value==="right"?(document.documentElement.clientWidth-i-o.value)/s.value:a.value==="top"?(i-o.value)/s.value:a.value==="bottom"?(document.documentElement.clientHeight-i-o.value)/s.value:T();return u?Math.max(0,Math.min(1,v)):v}function B(i){if(t.value)return;const u=i.changedTouches[0].clientX,v=i.changedTouches[0].clientY,g=25,V=a.value==="left"?u<g:a.value==="right"?u>document.documentElement.clientWidth-g:a.value==="top"?v<g:a.value==="bottom"?v>document.documentElement.clientHeight-g:T(),E=c.value&&(a.value==="left"?u<s.value:a.value==="right"?u>document.documentElement.clientWidth-s.value:a.value==="top"?v<s.value:a.value==="bottom"?v>document.documentElement.clientHeight-s.value:T());(V||E||c.value&&m.value)&&(l=!0,S=[u,v],o.value=w(h.value?u:v,c.value),d.value=P(h.value?u:v),b(i),p(i))}function _(i){const u=i.changedTouches[0].clientX,v=i.changedTouches[0].clientY;if(l){if(!i.cancelable){l=!1;return}const V=Math.abs(u-S[0]),E=Math.abs(v-S[1]);(h.value?V>E&&V>3:E>V&&E>3)?(n.value=!0,l=!1):(h.value?E:V)>3&&(l=!1)}if(!n.value)return;i.preventDefault(),p(i);const g=P(h.value?u:v,!1);d.value=Math.max(0,Math.min(1,g)),g>1?o.value=w(h.value?u:v,!0):g<0&&(o.value=w(h.value?u:v,!1))}function C(i){if(l=!1,!n.value)return;p(i),n.value=!1;const u=f(i.changedTouches[0].identifier),v=Math.abs(u.x),g=Math.abs(u.y);(h.value?v>g&&v>400:g>v&&g>3)?c.value=u.direction===({left:"right",right:"left",top:"down",bottom:"up"}[a.value]||T()):c.value=d.value>.5}const R=y(()=>n.value?{transform:a.value==="left"?`translateX(calc(-100% + ${d.value*s.value}px))`:a.value==="right"?`translateX(calc(100% - ${d.value*s.value}px))`:a.value==="top"?`translateY(calc(-100% + ${d.value*s.value}px))`:a.value==="bottom"?`translateY(calc(100% - ${d.value*s.value}px))`:T(),transition:"none"}:void 0);return{isDragging:n,dragProgress:d,dragStyles:R}}function T(){throw new Error}const it=["start","end","left","right","top","bottom"],rt=fe({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>it.includes(e)},sticky:Boolean,...Ye(),...$e(),...ge(),...We(),...Ie(),...Ue(),...Ae({tag:"nav"}),...he()},"VNavigationDrawer"),st=pe()({name:"VNavigationDrawer",props:rt(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,c){let{attrs:m,emit:s,slots:t}=c;const{isRtl:a}=ye(),{themeClasses:h}=we(e),{borderClasses:p}=Oe(e),{backgroundColorClasses:b,backgroundColorStyles:f}=Q(Z(e,"color")),{elevationClasses:l}=Xe(e),{displayClasses:n,mobile:d}=be(e),{roundedClasses:o}=ze(e),S=Fe(),w=ke(e,"modelValue",null,k=>!!k),{ssrBootStyles:P}=Je(),{scopeId:B}=Ge(),_=D(),C=x(!1),R=y(()=>e.rail&&e.expandOnHover&&C.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),i=y(()=>qe(e.location,a.value)),u=y(()=>!e.permanent&&(d.value||e.temporary)),v=y(()=>e.sticky&&!u.value&&i.value!=="bottom");Y(()=>e.expandOnHover&&e.rail!=null,()=>{L(C,k=>s("update:rail",!k))}),Y(()=>!e.disableResizeWatcher,()=>{L(u,k=>!e.permanent&&Ce(()=>w.value=!k))}),Y(()=>!e.disableRouteWatcher&&!!S,()=>{L(S.currentRoute,()=>u.value&&(w.value=!1))}),L(()=>e.permanent,k=>{k&&(w.value=!0)}),le(()=>{e.modelValue!=null||u.value||(w.value=e.permanent||!d.value)});const{isDragging:g,dragProgress:V,dragStyles:E}=ut({isActive:w,isTemporary:u,width:R,touchless:Z(e,"touchless"),position:i}),U=y(()=>{const k=u.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):R.value;return g.value?k*V.value:k}),{layoutItemStyles:A,layoutItemScrimStyles:ie}=He({id:e.name,order:y(()=>parseInt(e.order,10)),position:i,layoutSize:U,elementSize:R,active:y(()=>w.value||g.value),disableTransitions:y(()=>g.value),absolute:y(()=>e.absolute||v.value&&typeof O.value!="string")}),{isStuck:O,stickyStyles:re}=tt({rootEl:_,isSticky:v,layoutItemStyles:A}),X=Q(y(()=>typeof e.scrim=="string"?e.scrim:null)),se=y(()=>({...g.value?{opacity:V.value*.2,transition:"none"}:void 0,...ie.value}));Se({VList:{bgColor:"transparent"}});function ce(){C.value=!0}function ve(){C.value=!1}return Ze(()=>{const k=t.image||e.image;return r(ue,null,[r(e.tag,j({ref:_,onMouseenter:ce,onMouseleave:ve,class:["v-navigation-drawer",`v-navigation-drawer--${i.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":C.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":u.value,"v-navigation-drawer--active":w.value,"v-navigation-drawer--sticky":v.value},h.value,b.value,p.value,n.value,l.value,o.value,e.class],style:[f.value,A.value,E.value,P.value,re.value,e.style]},B,m),{default:()=>{var z,F,q;return[k&&r("div",{key:"image",class:"v-navigation-drawer__img"},[t.image?r(je,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{alt:"",cover:!0,height:"inherit",src:e.image}}},t.image):r(Ke,{key:"image-img",alt:"",cover:!0,height:"inherit",src:e.image},null)]),t.prepend&&r("div",{class:"v-navigation-drawer__prepend"},[(z=t.prepend)==null?void 0:z.call(t)]),r("div",{class:"v-navigation-drawer__content"},[(F=t.default)==null?void 0:F.call(t)]),t.append&&r("div",{class:"v-navigation-drawer__append"},[(q=t.append)==null?void 0:q.call(t)])]}}),r(Ve,{name:"fade-transition"},{default:()=>[u.value&&(g.value||w.value)&&!!e.scrim&&r("div",j({class:["v-navigation-drawer__scrim",X.backgroundColorClasses.value],style:[se.value,X.backgroundColorStyles.value],onClick:()=>w.value=!1},B),null)]})])}),{isStuck:O}}}),ct={class:"container"},vt={class:"user--account"},dt={__name:"UserAccount",setup(e){const c=D(!1),m=Me(),s=Te(),t=D([""]),a=D([{page:"personal",description:"Мои данные",icon:"mdi-account-school"},{page:"schedule",description:"Расписание",icon:"mdi-calendar-range"},{page:"record",description:"Успеваемость",icon:"mdi-book-account"},{page:"jobs",description:"Портфолио",icon:"mdi-briefcase"}]);function h(){return I.currentRoute.value.path.split("/")[2]}le(()=>{console.log(s),t.value=[h()]});function p(l){I.push({path:`/me${l}/`,state:{page:l.value}})}function b(){I.push("/auth/login"),m.removeUser()}const f=l=>l==t.value;return(l,n)=>{const d=Le("router-view");return $(),G("div",ct,[xe("div",vt,[r(Ne,{class:"fill-height overflow-auto"},{default:M(()=>[r(st,{"expand-on-hover":"",location:"left",modelValue:c.value,"onUpdate:modelValue":n[5]||(n[5]=o=>c.value=o)},{default:M(()=>[r(H,{density:"comfortable",selected:t.value,"onUpdate:selected":n[1]||(n[1]=o=>t.value=o)},{default:M(()=>[r(N,{"prepend-icon":"mdi-account",subtitle:"Личный кабинет",title:J(m).getUser.userFirstName,onClick:n[0]||(n[0]=o=>p("")),active:f(""),value:""},null,8,["title","active"])]),_:1},8,["selected"]),r(W),r(H,null,{default:M(()=>[K(r(N,{class:"cursor-pointer",title:"Hub","prepend-icon":"mdi-hub",onClick:n[2]||(n[2]=o=>J(I).push("/hub"))},null,512),[[ee]])]),_:1}),r(W),r(H,{density:"comfortable",selected:t.value,"onUpdate:selected":n[3]||(n[3]=o=>t.value=o)},{default:M(()=>[($(!0),G(ue,null,Be(a.value,o=>($(),Pe(N,{"prepend-icon":o.icon,title:o.description,value:o.page,onClick:S=>p("/"+o.page),active:f(o.page)},null,8,["prepend-icon","title","value","onClick","active"]))),256))]),_:1},8,["selected"]),r(W),r(H,null,{default:M(()=>[K(r(N,{class:"cursor-pointer",title:"Выйти","prepend-icon":"mdi-logout",onClick:n[4]||(n[4]=o=>b())},null,512),[[ee]])]),_:1})]),_:1},8,["modelValue"]),r(De,null,{default:M(()=>[r(Qe,{disabled:"true"},{default:M(()=>[r(et,{onClick:n[6]||(n[6]=o=>c.value=!c.value),icon:"mdi-menu"}),_e(" "+Re(),1)]),_:1}),r(d)]),_:1})]),_:1})])])}}},Ct=Ee(dt,[["__scopeId","data-v-9e127a1d"]]);export{Ct as default};
