import{D as Ce,az as Pe,p as $,a as _,an as q,ai as ce,M as B,ak as D,aA as De,b as x,O as ue,a5 as N,a3 as me,$ as fe,aB as Ae,aC as Ve,a1 as Te,a2 as pe,aD as ye,v as z,am as Ie,G as j,V as We,K as ze,aE as Be,a0 as qe,N as je,aF as $e,R as Ye,j as Ge,z as Ue,U as Ke,T as Xe,Y as Ze,af as Je,e as I,aG as Qe,q as et,ap as tt,al as nt,F as ot,aj as at}from"./index-98N-1Y_Q.js";import{g as rt,B as ne,c as ge,n as it,a as lt,s as st}from"./forwardRefs-DWGaNmQL.js";import{C as he,D as oe,E as ae,F as we,G as be,m as ct,z as ut,B as ft,k as vt,A as dt,q as mt,H as yt,u as gt,M as ht}from"./index-DjpVXYcW.js";import{u as wt}from"./scopeId-BY8OXUar.js";const X=new WeakMap;function bt(e,n){Object.keys(n).forEach(t=>{if(Ce(t)){const o=Pe(t),a=X.get(e);if(n[t]==null)a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))});else if(!a||![...a].some(r=>r[0]===o&&r[1]===n[t])){e.addEventListener(o,n[t]);const r=a||new Set;r.add([o,n[t]]),X.has(e)||X.set(e,r)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function Et(e,n){Object.keys(n).forEach(t=>{if(Ce(t)){const o=Pe(t),a=X.get(e);a==null||a.forEach(r=>{const[l,i]=r;l===o&&(e.removeEventListener(o,i),a.delete(r))})}else e.removeAttribute(t)})}function Le(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function St(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?xt(e):ve(e))return e;e=e.parentElement}return document.scrollingElement}function J(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(ve(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function ve(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function xt(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function kt(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}function Ot(){return!0}function Fe(e,n,t){if(!e||Me(e,t)===!1)return!1;const o=Le(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(r=>r==null?void 0:r.contains(e.target))}function Me(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Ot)(e)}function Ct(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&Fe(e,n,t)&&setTimeout(()=>{Me(e,t)&&o&&o(e)},0)}function Ee(e,n){const t=Le(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const Pt={mounted(e,n){const t=a=>Ct(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=Fe(a,e,n)};Ee(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Ee(e,t=>{var r;if(!t||!((r=e._clickOutside)!=null&&r[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function re(e,n){return{x:e.x+n.x,y:e.y+n.y}}function At(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Se(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,r=t==="top"?0:t==="bottom"?n.height:t;return re({x:a,y:r},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,r=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return re({x:a,y:r},n)}return re({x:n.width/2,y:n.height/2},n)}const Re={static:Bt,connected:Ft},Tt=$({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Re},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function pt(e,n){const t=_({}),o=_();q&&ce(()=>!!(n.isActive.value&&e.locationStrategy),r=>{var l,i;B(()=>e.locationStrategy,r),D(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(l=e.locationStrategy(n,e,t))==null?void 0:l.updateLocation:o.value=(i=Re[e.locationStrategy](n,e,t))==null?void 0:i.updateLocation});function a(r){var l;(l=o.value)==null||l.call(o,r)}return{contentStyles:t,updateLocation:o}}function Bt(){}function Lt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=it(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Ft(e,n,t){(Array.isArray(e.target.value)||kt(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:r}=De(()=>{const c=he(n.location,e.isRtl.value),u=n.origin==="overlap"?c:n.origin==="auto"?oe(c):he(n.origin,e.isRtl.value);return c.side===u.side&&c.align===ae(u).align?{preferredAnchor:we(c),preferredOrigin:we(u)}:{preferredAnchor:c,preferredOrigin:u}}),[l,i,m,f]=["minWidth","minHeight","maxWidth","maxHeight"].map(c=>x(()=>{const u=parseFloat(n[c]);return isNaN(u)?1/0:u})),y=x(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const c=n.offset.split(" ").map(parseFloat);return c.length<2&&c.push(0),c}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let g=!1;const k=new ResizeObserver(()=>{g&&O()});B([e.target,e.contentEl],(c,u)=>{let[A,T]=c,[E,h]=u;E&&!Array.isArray(E)&&k.unobserve(E),A&&!Array.isArray(A)&&k.observe(A),h&&k.unobserve(h),T&&k.observe(T)},{immediate:!0}),D(()=>{k.disconnect()});function O(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const c=rt(e.target.value),u=Lt(e.contentEl.value,e.isRtl.value),A=J(e.contentEl.value),T=12;A.length||(A.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(u.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),u.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const E=A.reduce((S,w)=>{const v=w.getBoundingClientRect(),d=new ne({x:w===document.documentElement?0:v.x,y:w===document.documentElement?0:v.y,width:w.clientWidth,height:w.clientHeight});return S?new ne({x:Math.max(S.left,d.left),y:Math.max(S.top,d.top),width:Math.min(S.right,d.right)-Math.max(S.left,d.left),height:Math.min(S.bottom,d.bottom)-Math.max(S.top,d.top)}):d},void 0);E.x+=T,E.y+=T,E.width-=T*2,E.height-=T*2;let h={anchor:a.value,origin:r.value};function V(S){const w=new ne(u),v=Se(S.anchor,c),d=Se(S.origin,w);let{x:M,y:L}=At(v,d);switch(S.anchor.side){case"top":L-=y.value[0];break;case"bottom":L+=y.value[0];break;case"left":M-=y.value[0];break;case"right":M+=y.value[0];break}switch(S.anchor.align){case"top":L-=y.value[1];break;case"bottom":L+=y.value[1];break;case"left":M-=y.value[1];break;case"right":M+=y.value[1];break}return w.x+=M,w.y+=L,w.width=Math.min(w.width,m.value),w.height=Math.min(w.height,f.value),{overflows:ge(w,E),x:M,y:L}}let F=0,C=0;const s={x:0,y:0},p={x:!1,y:!1};let ee=-1;for(;!(ee++>10);){const{x:S,y:w,overflows:v}=V(h);F+=S,C+=w,u.x+=S,u.y+=w;{const d=be(h.anchor),M=v.x.before||v.x.after,L=v.y.before||v.y.after;let Y=!1;if(["x","y"].forEach(P=>{if(P==="x"&&M&&!p.x||P==="y"&&L&&!p.y){const R={anchor:{...h.anchor},origin:{...h.origin}},U=P==="x"?d==="y"?ae:oe:d==="y"?oe:ae;R.anchor=U(R.anchor),R.origin=U(R.origin);const{overflows:W}=V(R);(W[P].before<=v[P].before&&W[P].after<=v[P].after||W[P].before+W[P].after<(v[P].before+v[P].after)/2)&&(h=R,Y=p[P]=!0)}}),Y)continue}v.x.before&&(F+=v.x.before,u.x+=v.x.before),v.x.after&&(F-=v.x.after,u.x-=v.x.after),v.y.before&&(C+=v.y.before,u.y+=v.y.before),v.y.after&&(C-=v.y.after,u.y-=v.y.after);{const d=ge(u,E);s.x=E.width-d.x.before-d.x.after,s.y=E.height-d.y.before-d.y.after,F+=d.x.before,u.x+=d.x.before,C+=d.y.before,u.y+=d.y.before}break}const te=be(h.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${h.anchor.side} ${h.anchor.align}`,transformOrigin:`${h.origin.side} ${h.origin.align}`,top:N(ie(C)),left:e.isRtl.value?void 0:N(ie(F)),right:e.isRtl.value?N(ie(-F)):void 0,minWidth:N(te==="y"?Math.min(l.value,c.width):l.value),maxWidth:N(xe(me(s.x,l.value===1/0?0:l.value,m.value))),maxHeight:N(xe(me(s.y,i.value===1/0?0:i.value,f.value)))}),{available:s,contentBox:u}}return B(()=>[a.value,r.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>O()),ue(()=>{const c=O();if(!c)return;const{available:u,contentBox:A}=c;A.height>u.y&&requestAnimationFrame(()=>{O(),requestAnimationFrame(()=>{O()})})}),{updateLocation:O}}function ie(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function xe(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let le=!0;const Q=[];function Mt(e){!le||Q.length?(Q.push(e),se()):(le=!1,e(),se())}let ke=-1;function se(){cancelAnimationFrame(ke),ke=requestAnimationFrame(()=>{const e=Q.shift();e&&e(),Q.length?se():le=!0})}const Z={none:null,close:_t,block:Ht,reposition:Dt},Rt=$({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in Z}},"VOverlay-scroll-strategies");function Nt(e,n){if(!q)return;let t;fe(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Ae(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=Z[e.scrollStrategy])==null||o.call(Z,n,e,t)}))}),D(()=>{t==null||t.stop()})}function _t(e){function n(t){e.isActive.value=!1}Ne(e.targetEl.value??e.contentEl.value,n)}function Ht(e,n){var l;const t=(l=e.root.value)==null?void 0:l.offsetParent,o=[...new Set([...J(e.targetEl.value,n.contained?t:void 0),...J(e.contentEl.value,n.contained?t:void 0)])].filter(i=>!i.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,r=(i=>ve(i)&&i)(t||document.documentElement);r&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((i,m)=>{i.style.setProperty("--v-body-scroll-x",N(-i.scrollLeft)),i.style.setProperty("--v-body-scroll-y",N(-i.scrollTop)),i!==document.documentElement&&i.style.setProperty("--v-scrollbar-offset",N(a)),i.classList.add("v-overlay-scroll-blocked")}),D(()=>{o.forEach((i,m)=>{const f=parseFloat(i.style.getPropertyValue("--v-body-scroll-x")),y=parseFloat(i.style.getPropertyValue("--v-body-scroll-y")),g=i.style.scrollBehavior;i.style.scrollBehavior="auto",i.style.removeProperty("--v-body-scroll-x"),i.style.removeProperty("--v-body-scroll-y"),i.style.removeProperty("--v-scrollbar-offset"),i.classList.remove("v-overlay-scroll-blocked"),i.scrollLeft=-f,i.scrollTop=-y,i.style.scrollBehavior=g}),r&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Dt(e,n,t){let o=!1,a=-1,r=-1;function l(i){Mt(()=>{var y,g;const m=performance.now();(g=(y=e.updateLocation).value)==null||g.call(y,i),o=(performance.now()-m)/(1e3/60)>2})}r=(typeof requestIdleCallback>"u"?i=>i():requestIdleCallback)(()=>{t.run(()=>{Ne(e.targetEl.value??e.contentEl.value,i=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{l(i)})})):l(i)})})}),D(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(r),cancelAnimationFrame(a)})}function Ne(e,n){const t=[document,...J(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),D(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const Vt=Symbol.for("vuetify:v-menu"),It=$({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function Wt(e,n){let t=()=>{};function o(l){t==null||t();const i=Number(l?e.openDelay:e.closeDelay);return new Promise(m=>{t=Ve(i,()=>{n==null||n(l),m(l)})})}function a(){return o(!0)}function r(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:r}}const zt=$({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...It()},"VOverlay-activator");function qt(e,n){let{isActive:t,isTop:o}=n;const a=Te("useActivator"),r=_();let l=!1,i=!1,m=!0;const f=x(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),y=x(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!f.value),{runOpenDelay:g,runCloseDelay:k}=Wt(e,s=>{s===(e.openOnHover&&l||f.value&&i)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==s&&(m=!0),t.value=s)}),O=_(),c={onClick:s=>{s.stopPropagation(),r.value=s.currentTarget||s.target,t.value||(O.value=[s.clientX,s.clientY]),t.value=!t.value},onMouseenter:s=>{var p;(p=s.sourceCapabilities)!=null&&p.firesTouchEvents||(l=!0,r.value=s.currentTarget||s.target,g())},onMouseleave:s=>{l=!1,k()},onFocus:s=>{Ie(s.target,":focus-visible")!==!1&&(i=!0,s.stopPropagation(),r.value=s.currentTarget||s.target,g())},onBlur:s=>{i=!1,s.stopPropagation(),k()}},u=x(()=>{const s={};return y.value&&(s.onClick=c.onClick),e.openOnHover&&(s.onMouseenter=c.onMouseenter,s.onMouseleave=c.onMouseleave),f.value&&(s.onFocus=c.onFocus,s.onBlur=c.onBlur),s}),A=x(()=>{const s={};if(e.openOnHover&&(s.onMouseenter=()=>{l=!0,g()},s.onMouseleave=()=>{l=!1,k()}),f.value&&(s.onFocusin=()=>{i=!0,g()},s.onFocusout=()=>{i=!1,k()}),e.closeOnContentClick){const p=pe(Vt,null);s.onClick=()=>{t.value=!1,p==null||p.closeParents()}}return s}),T=x(()=>{const s={};return e.openOnHover&&(s.onMouseenter=()=>{m&&(l=!0,m=!1,g())},s.onMouseleave=()=>{l=!1,k()}),s});B(o,s=>{s&&(e.openOnHover&&!l&&(!f.value||!i)||f.value&&!i&&(!e.openOnHover||!l))&&(t.value=!1)}),B(t,s=>{s||setTimeout(()=>{O.value=void 0})},{flush:"post"});const E=_();fe(()=>{E.value&&ue(()=>{r.value=ye(E.value)})});const h=_(),V=x(()=>e.target==="cursor"&&O.value?O.value:h.value?ye(h.value):_e(e.target,a)||r.value),F=x(()=>Array.isArray(V.value)?void 0:V.value);let C;return B(()=>!!e.activator,s=>{s&&q?(C=Ae(),C.run(()=>{jt(e,a,{activatorEl:r,activatorEvents:u})})):C&&C.stop()},{flush:"post",immediate:!0}),D(()=>{C==null||C.stop()}),{activatorEl:r,activatorRef:E,target:V,targetEl:F,targetRef:h,activatorEvents:u,contentEvents:A,scrimEvents:T}}function jt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;B(()=>e.activator,(m,f)=>{if(f&&m!==f){const y=i(f);y&&l(y)}m&&ue(()=>r())},{immediate:!0}),B(()=>e.activatorProps,()=>{r()}),D(()=>{l()});function r(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;m&&bt(m,z(a.value,f))}function l(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:i(),f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;m&&Et(m,z(a.value,f))}function i(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const f=_e(m,n);return o.value=(f==null?void 0:f.nodeType)===Node.ELEMENT_NODE?f:void 0,o.value}}function _e(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let r=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;r!=null&&r.hasAttribute("data-no-activator");)r=r.parentNode;t=r}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function $t(){if(!q)return j(!1);const{ssr:e}=We();if(e){const n=j(!1);return ze(()=>{n.value=!0}),n}else return j(!0)}const Yt=$({eager:Boolean},"lazy");function Gt(e,n){const t=j(!1),o=x(()=>t.value||e.eager||n.value);B(n,()=>t.value=!0);function a(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:o,onAfterLeave:a}}const Oe=Symbol.for("vuetify:stack"),G=Be([]);function Ut(e,n,t){const o=Te("useStack"),a=!t,r=pe(Oe,void 0),l=Be({activeChildren:new Set});qe(Oe,l);const i=j(+n.value);ce(e,()=>{var g;const y=(g=G.at(-1))==null?void 0:g[1];i.value=y?y+10:+n.value,a&&G.push([o.uid,i.value]),r==null||r.activeChildren.add(o.uid),D(()=>{if(a){const k=je(G).findIndex(O=>O[0]===o.uid);G.splice(k,1)}r==null||r.activeChildren.delete(o.uid)})});const m=j(!0);a&&fe(()=>{var g;const y=((g=G.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>m.value=y)});const f=x(()=>!l.activeChildren.size);return{globalTop:$e(m),localTop:f,stackStyles:x(()=>({zIndex:i.value}))}}function Kt(e){return{teleportTarget:x(()=>{const t=e.value;if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Xt(e){const{modelValue:n,color:t,...o}=e;return I(at,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&I("div",z({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const Zt=$({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...zt(),...ct(),...ut(),...Yt(),...Tt(),...Rt(),...Ye(),...ft()},"VOverlay"),nn=Ge()({name:"VOverlay",directives:{ClickOutside:Pt},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...Zt()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const r=Ue(e,"modelValue"),l=x({get:()=>r.value,set:b=>{b&&e.disabled||(r.value=b)}}),{teleportTarget:i}=Kt(x(()=>e.attach||e.contained)),{themeClasses:m}=Ke(e),{rtlClasses:f,isRtl:y}=Xe(),{hasContent:g,onAfterLeave:k}=Gt(e,l),O=vt(x(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:c,localTop:u,stackStyles:A}=Ut(l,Ze(e,"zIndex"),e._disableGlobalStack),{activatorEl:T,activatorRef:E,target:h,targetEl:V,targetRef:F,activatorEvents:C,contentEvents:s,scrimEvents:p}=qt(e,{isActive:l,isTop:u}),{dimensionStyles:ee}=dt(e),te=$t(),{scopeId:S}=wt();B(()=>e.disabled,b=>{b&&(l.value=!1)});const w=_(),v=_(),d=_(),{contentStyles:M,updateLocation:L}=pt(e,{isRtl:y,contentEl:d,target:h,isActive:l});Nt(e,{root:w,contentEl:d,targetEl:V,isActive:l,updateLocation:L});function Y(b){a("click:outside",b),e.persistent?K():l.value=!1}function P(b){return l.value&&c.value&&(!e.scrim||b.target===v.value)}q&&B(l,b=>{b?window.addEventListener("keydown",R):window.removeEventListener("keydown",R)},{immediate:!0}),Je(()=>{q&&window.removeEventListener("keydown",R)});function R(b){var H,de;b.key==="Escape"&&c.value&&(e.persistent?K():(l.value=!1,(H=d.value)!=null&&H.contains(document.activeElement)&&((de=T.value)==null||de.focus())))}const U=mt();ce(()=>e.closeOnBack,()=>{yt(U,b=>{c.value&&l.value?(b(!1),e.persistent?K():l.value=!1):b()})});const W=_();B(()=>l.value&&(e.absolute||e.contained)&&i.value==null,b=>{if(b){const H=St(w.value);H&&H!==document.scrollingElement&&(W.value=H.scrollTop)}});function K(){e.noClickAnimation||d.value&&lt(d.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:st})}function He(){k(),a("afterLeave")}return gt(()=>{var b;return I(ot,null,[(b=t.activator)==null?void 0:b.call(t,{isActive:l.value,props:z({ref:E,targetRef:F},C.value,e.activatorProps)}),te.value&&g.value&&I(Qe,{disabled:!i.value,to:i.value},{default:()=>[I("div",z({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":l.value,"v-overlay--contained":e.contained},m.value,f.value,e.class],style:[A.value,{"--v-overlay-opacity":e.opacity,top:N(W.value)},e.style],ref:w},S,o),[I(Xt,z({color:O,modelValue:l.value&&!!e.scrim,ref:v},p.value),null),I(ht,{appear:!0,persisted:!0,transition:e.transition,target:h.value,onAfterLeave:He},{default:()=>{var H;return[et(I("div",z({ref:d,class:["v-overlay__content",e.contentClass],style:[ee.value,M.value]},s.value,e.contentProps),[(H=t.default)==null?void 0:H.call(t,{isActive:l})]),[[tt,l.value],[nt("click-outside"),{handler:Y,closeConditional:P,include:()=>[T.value]}]])]}})])]})])}),{activatorEl:T,scrimEl:v,target:h,animateClick:K,contentEl:d,globalTop:c,localTop:u,updateLocation:L}}});export{nn as V,Vt as a,St as g,Zt as m};