import{a2 as g,b as t,aY as k,r as C,c as N,o as _,w as l,a,a0 as f,a5 as p,aE as S,aZ as U,_ as q}from"./index-FncgJiGX.js";import{w as A,y as B,K as I,V as P,al as E,a5 as s,S as M}from"./VForm-BLtTM9hf.js";import{V as T}from"./VMain-DVWPVU6U.js";import{V as j,a as V}from"./VRow-BrET6DZQ.js";import"./tag-Bt6abj--.js";const z={class:"d-flex align-center justify-center"},F={class:"mt-6 text-caption"},R=g({__name:"index",setup($){const b=A(),i=t(""),r=t(""),d=t(""),n=t(""),c=t(""),u=t(!1),m=t(!1),x=k(),w=()=>{if(i.value&&r.value&&d.value&&n.value){const v={firstName:i.value,lastName:r.value,email:d.value,password:n.value};b.createAccount(v).then(()=>{x.push("/login")}).catch(e=>{console.error("Erro ao registrar:",e)})}else console.error("Todos os campos são obrigatórios")};return(v,e)=>{const y=C("router-link");return _(),N(U,null,{default:l(()=>[a(T,{class:"d-flex align-center justify-center"},{default:l(()=>[a(B,{fluid:"",class:"text-center pa-4"},{default:l(()=>[f("div",z,[a(I,{size:"26",class:"mr-1 d-block pb-9"},{default:l(()=>e[7]||(e[7]=[p(" mdi-circle-outline ")])),_:1}),e[8]||(e[8]=f("h2",{class:"font-weight-regular new-font"}," HabitManager ",-1))]),a(P,{class:"form-card mx-auto px-6 py-8 elevation-0","max-width":"460",rounded:"xl"},{default:l(()=>[a(E,{onSubmit:S(w,["prevent"])},{default:l(()=>[a(j,{dense:"",class:"mb-4"},{default:l(()=>[a(V,{cols:"12",sm:"6"},{default:l(()=>[a(s,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=o=>i.value=o),label:"Primeiro Nome","prepend-inner-icon":"mdi-account",variant:"outlined",density:"comfortable","hide-details":"",required:""},null,8,["modelValue"])]),_:1}),a(V,{cols:"12",sm:"6"},{default:l(()=>[a(s,{modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=o=>r.value=o),label:"Ultimo Nome","prepend-inner-icon":"mdi-account",variant:"outlined",density:"comfortable","hide-details":"",required:""},null,8,["modelValue"])]),_:1})]),_:1}),a(s,{modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=o=>d.value=o),label:"Email","prepend-inner-icon":"mdi-email-outline",variant:"outlined",density:"comfortable",class:"mb-4","hide-details":"",required:""},null,8,["modelValue"]),a(s,{modelValue:n.value,"onUpdate:modelValue":e[3]||(e[3]=o=>n.value=o),type:u.value?"text":"password",label:"Senha","prepend-inner-icon":"mdi-lock-outline","append-inner-icon":u.value?"mdi-eye-off":"mdi-eye",variant:"outlined",density:"comfortable",class:"mb-4","hide-details":"",required:"","onClick:appendInner":e[4]||(e[4]=o=>u.value=!u.value)},null,8,["modelValue","type","append-inner-icon"]),a(s,{modelValue:c.value,"onUpdate:modelValue":e[5]||(e[5]=o=>c.value=o),type:m.value?"text":"password",label:"Confirmar Senha","prepend-inner-icon":"mdi-lock-check-outline","append-inner-icon":m.value?"mdi-eye-off":"mdi-eye",variant:"outlined",density:"comfortable",class:"mb-4","hide-details":"",required:"",rules:[o=>o===n.value||"As senhas não coincidem"],"onClick:appendInner":e[6]||(e[6]=o=>m.value=!m.value)},null,8,["modelValue","type","append-inner-icon","rules"]),a(M,{type:"submit",block:"",color:"blue-darken-2",size:"large",rounded:"xl",elevation:"1"},{default:l(()=>e[9]||(e[9]=[p(" Criar Conta ")])),_:1})]),_:1}),f("div",F,[e[11]||(e[11]=p(" Já tem uma conta? ")),a(y,{to:"/login",class:"font-weight-medium text-blue"},{default:l(()=>e[10]||(e[10]=[p(" Login ")])),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}}),Y=q(R,[["__scopeId","data-v-f92cb6ba"]]);export{Y as default};
