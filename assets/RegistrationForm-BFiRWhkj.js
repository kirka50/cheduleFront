import{u as U,a as r,b,d as z,e as a,w as o,o as E,g as j,i as C}from"./index-CSAw4n1e.js";import{m as v}from"./makeRequest--D6H4PBn.js";import{V as T}from"./VForm-DOpHzAUv.js";import{V as F}from"./VContainer-xRcxSafA.js";import{V as f}from"./VRow-D3FyJnmk.js";import{V as c}from"./VCol-C9Z2bFCP.js";import{V as p}from"./VTextField-CPLJnINL.js";import{V as N}from"./VBtn-Bf_26vuj.js";import"./index-DDyBXC6a.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CbX0ch3G.js";import"./VProgressCircular-Bx8uC_u5.js";const S=async(i,s)=>await v({method:"POST",url:"auth/token/login/",data:{username:i,password:s}}),B=async(i,s,u)=>await v({method:"POST",url:"auth/users/",data:{email:u,username:i,password:s}}),O={class:"reg"},W={__name:"RegistrationForm",setup(i){const s=U(),u=r(""),n=r(""),d=r(""),V=r(!1),m=r(!1),g=r(!0),h=r([e=>e?!0:"Требуется ввести логин",e=>(e==null?void 0:e.length)>=3?!0:"Логин должен быть больше 3-х символов"]),_=[e=>e?!0:"Требуется ввести пароль",e=>(e==null?void 0:e.length)>=3?!0:"Пароль должен быть больше 3-х символов"],w=[e=>e?!0:"Требуется ввести почту",e=>new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(e)?!0:"Неверный формат почты"];async function x(e,t){await S(e,t).then(l=>{console.log(l),l.status===200&&(s.updateToken(l.data.auth_token),console.log("sdasda"),C.push("/me"))}).catch(l=>{l.response.status===400&&console.log("dadadad")})}async function k(e){e.preventDefault(),m.value=!0,await B(n.value,d.value,u.value).then(t=>{t.response.status===400?g.value="jopa":t.status===200&&x(n.value,d.value),m.value=!1}).catch(t=>{console.log(t),m.value=!1})}const y=()=>{if(new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}").test(u.value))return!0},R=b(()=>!(n.value.length>=3&&d.value.length>=3&&y()));return(e,t)=>(E(),z("div",O,[a(T,{modelValue:V.value,"onUpdate:modelValue":t[3]||(t[3]=l=>V.value=l),class:"w-100"},{default:o(()=>[a(F,null,{default:o(()=>[a(f,{justify:"center"},{default:o(()=>[a(c,{cols:"12",md:"4"},{default:o(()=>[a(p,{placeholder:"Email",modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=l=>u.value=l),rules:w,variant:"outlined"},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{justify:"center"},{default:o(()=>[a(c,{cols:"12",md:"4"},{default:o(()=>[a(p,{placeholder:"Логин",modelValue:n.value,"onUpdate:modelValue":t[1]||(t[1]=l=>n.value=l),rules:[...h.value,g.value],variant:"outlined"},null,8,["modelValue","rules"])]),_:1})]),_:1}),a(f,{justify:"center"},{default:o(()=>[a(c,{cols:"12",md:"4"},{default:o(()=>[a(p,{placeholder:"Пароль",modelValue:d.value,"onUpdate:modelValue":t[2]||(t[2]=l=>d.value=l),rules:_,variant:"outlined"},null,8,["modelValue"])]),_:1})]),_:1}),a(f,{justify:"center"},{default:o(()=>[a(c,{"align-self":"end",cols:"12",md:"4"},{default:o(()=>[a(N,{type:"submit",loading:m.value,color:"blue",class:"confirm--button",block:"",onClick:k,disabled:R.value},{default:o(()=>[j(" Зарегистрироваться ")]),_:1},8,["loading","disabled"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{W as default};