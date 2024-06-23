import{a as S,an as _,af as p,M as E,aD as V,aF as O,p as R,a1 as N,y as T,a0 as B,a2 as U,Y as I,b as m,aE as $,z as A,K as F,a8 as D,a9 as W,aL as q,n as L,R as Y,j,U as H,a5 as J,$ as Q,e as x}from"./index-98N-1Y_Q.js";import{m as X,g as Z,h as K,w as ee,r as z,P as te,u as se}from"./index-DjpVXYcW.js";function ne(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const i=S(),t=S();if(_){const s=new ResizeObserver(n=>{e==null||e(n,s),n.length&&(o==="content"?t.value=n[0].contentRect:t.value=n[0].target.getBoundingClientRect())});p(()=>{s.disconnect()}),E(i,(n,f)=>{f&&(s.unobserve(V(f)),t.value=void 0),n&&s.observe(V(n))},{flush:"post"})}return{resizeRef:i,contentRect:O(t)}}const oe=R({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),ce=R({value:null,disabled:Boolean,selectedClass:String},"group-item");function de(e,o){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=N("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const s=T();B(Symbol.for(`${o.description}:id`),s);const n=U(o,null);if(!n){if(!i)return n;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${o.description}`)}const f=I(e,"value"),h=m(()=>!!(n.disabled.value||e.disabled));n.register({id:s,value:f,disabled:h},t),p(()=>{n.unregister(s)});const v=m(()=>n.isSelected(s)),C=m(()=>v.value&&[n.selectedClass.value,e.selectedClass]);return E(v,g=>{t.emit("group:selected",{value:g})},{flush:"sync"}),{id:s,isSelected:v,toggle:()=>n.select(s,!v.value),select:g=>n.select(s,g),selectedClass:C,value:f,disabled:h,group:n}}function fe(e,o){let i=!1;const t=$([]),s=A(e,"modelValue",[],a=>a==null?[]:M(t,W(a)),a=>{const r=re(t,a);return e.multiple?r:r[0]}),n=N("useGroup");function f(a,r){const u=a,l=Symbol.for(`${o.description}:id`),c=q(l,n==null?void 0:n.vnode).indexOf(r);L(u.value)==null&&(u.value=c),c>-1?t.splice(c,0,u):t.push(u)}function h(a){if(i)return;v();const r=t.findIndex(u=>u.id===a);t.splice(r,1)}function v(){const a=t.find(r=>!r.disabled);a&&e.mandatory==="force"&&!s.value.length&&(s.value=[a.id])}F(()=>{v()}),p(()=>{i=!0});function C(a,r){const u=t.find(l=>l.id===a);if(!(r&&(u!=null&&u.disabled)))if(e.multiple){const l=s.value.slice(),d=l.findIndex(b=>b===a),c=~d;if(r=r??!c,c&&e.mandatory&&l.length<=1||!c&&e.max!=null&&l.length+1>e.max)return;d<0&&r?l.push(a):d>=0&&!r&&l.splice(d,1),s.value=l}else{const l=s.value.includes(a);if(e.mandatory&&l)return;s.value=r??!l?[a]:[]}}function g(a){if(e.multiple,s.value.length){const r=s.value[0],u=t.findIndex(c=>c.id===r);let l=(u+a)%t.length,d=t[l];for(;d.disabled&&l!==u;)l=(l+a)%t.length,d=t[l];if(d.disabled)return;s.value=[t[l].id]}else{const r=t.find(u=>!u.disabled);r&&(s.value=[r.id])}}const y={register:f,unregister:h,selected:s,select:C,disabled:I(e,"disabled"),prev:()=>g(t.length-1),next:()=>g(1),isSelected:a=>s.value.includes(a),selectedClass:m(()=>e.selectedClass),items:m(()=>t),getItemIndex:a=>ae(t,a)};return B(o,y),y}function ae(e,o){const i=M(e,[o]);return i.length?e.findIndex(t=>t.id===i[0]):-1}function M(e,o){const i=[];return o.forEach(t=>{const s=e.find(f=>D(t,f.value)),n=e[t];(s==null?void 0:s.value)!=null?i.push(s.id):n!=null&&i.push(n.id)}),i}function re(e,o){const i=[];return o.forEach(t=>{const s=e.findIndex(n=>n.id===t);if(~s){const n=e[s];i.push(n.value!=null?n.value:s)}}),i}const le=R({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...X(),...Z(),...K({tag:"div"}),...Y()},"VProgressCircular"),me=j()({name:"VProgressCircular",props:le(),setup(e,o){let{slots:i}=o;const t=20,s=2*Math.PI*t,n=S(),{themeClasses:f}=H(e),{sizeClasses:h,sizeStyles:v}=ee(e),{textColorClasses:C,textColorStyles:g}=z(I(e,"color")),{textColorClasses:y,textColorStyles:a}=z(I(e,"bgColor")),{intersectionRef:r,isIntersecting:u}=te(),{resizeRef:l,contentRect:d}=ne(),c=m(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),b=m(()=>Number(e.width)),P=m(()=>v.value?Number(e.size):d.value?d.value.width:Math.max(b.value,32)),w=m(()=>t/(1-b.value/P.value)*2),k=m(()=>b.value/P.value*w.value),G=m(()=>J((100-c.value)/100*s));return Q(()=>{r.value=n.value,l.value=n.value}),se(()=>x(e.tag,{ref:n,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":u.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},f.value,h.value,C.value,e.class],style:[v.value,g.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:c.value},{default:()=>[x("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${w.value} ${w.value}`},[x("circle",{class:["v-progress-circular__underlay",y.value],style:a.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":k.value,"stroke-dasharray":s,"stroke-dashoffset":0},null),x("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":k.value,"stroke-dasharray":s,"stroke-dashoffset":G.value},null)]),i.default&&x("div",{class:"v-progress-circular__content"},[i.default({value:c.value})])]})),{}}});export{me as V,fe as a,ce as b,de as c,oe as m,ne as u};