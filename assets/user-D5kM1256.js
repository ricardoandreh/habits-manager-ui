import{b as t,aZ as x,r as y,c as g,o as k,w as o,a,$ as c,aE as C,a5 as f,aX as N}from"./index-BRhzpIri.js";import{_ as P}from"./tag-DjfejXIF.js";import{V as U}from"./VMain-DQ9_Qplm.js";import{w as _,ai as q,V as A,ah as B,a2 as n,P as I}from"./VForm-BLxt1ewU.js";import{V as F,a as v}from"./VRow-CWcGi0rQ.js";const $={class:"mt-6 text-caption"},j={__name:"user",setup(E){const r=t(""),u=t(""),m=t(""),s=t(""),p=t(""),d=t(!1),i=t(!1),V=x(),b=()=>{if(s.value!==p.value){alert("Passwords do not match!");return}console.log("User created:",{firstName:r.value,lastName:u.value,email:m.value,password:s.value}),V.push("/login")};return(L,e)=>{const w=y("router-link");return k(),g(N,null,{default:o(()=>[a(U,{class:"d-flex align-center justify-center"},{default:o(()=>[a(_,{fluid:"",class:"text-center pa-4"},{default:o(()=>[a(q,{src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-blue.png","max-width":"60",class:"mx-auto mb-6"}),e[10]||(e[10]=c("h2",{class:"text-h5 font-weight-bold mb-6"},"Create Your Account",-1)),a(A,{class:"form-card mx-auto px-6 py-8 elevation-6","max-width":"460",rounded:"xl"},{default:o(()=>[a(B,{onSubmit:C(b,["prevent"])},{default:o(()=>[a(F,{dense:"",class:"mb-4"},{default:o(()=>[a(v,{cols:"12",sm:"6"},{default:o(()=>[a(n,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l),label:"First Name","prepend-inner-icon":"mdi-account",variant:"outlined",density:"comfortable","hide-details":"",required:""},null,8,["modelValue"])]),_:1}),a(v,{cols:"12",sm:"6"},{default:o(()=>[a(n,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=l=>u.value=l),label:"Last Name","prepend-inner-icon":"mdi-account",variant:"outlined",density:"comfortable","hide-details":"",required:""},null,8,["modelValue"])]),_:1})]),_:1}),a(n,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=l=>m.value=l),label:"Email","prepend-inner-icon":"mdi-email-outline",variant:"outlined",density:"comfortable",class:"mb-4","hide-details":"",required:""},null,8,["modelValue"]),a(n,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=l=>s.value=l),type:d.value?"text":"password",label:"Password","prepend-inner-icon":"mdi-lock-outline","append-inner-icon":d.value?"mdi-eye-off":"mdi-eye","onClick:appendInner":e[4]||(e[4]=l=>d.value=!d.value),variant:"outlined",density:"comfortable",class:"mb-4","hide-details":"",required:""},null,8,["modelValue","type","append-inner-icon"]),a(n,{modelValue:p.value,"onUpdate:modelValue":e[5]||(e[5]=l=>p.value=l),type:i.value?"text":"password",label:"Confirm Password","prepend-inner-icon":"mdi-lock-check-outline","append-inner-icon":i.value?"mdi-eye-off":"mdi-eye","onClick:appendInner":e[6]||(e[6]=l=>i.value=!i.value),variant:"outlined",density:"comfortable",class:"mb-4","hide-details":"",required:""},null,8,["modelValue","type","append-inner-icon"]),a(I,{type:"submit",block:"",color:"blue-darken-2",size:"large",rounded:"xl",elevation:"1"},{default:o(()=>e[7]||(e[7]=[f(" Create Account ")])),_:1})]),_:1}),c("div",$,[e[9]||(e[9]=f(" Already have an account? ")),a(w,{to:"/login",class:"font-weight-medium text-blue"},{default:o(()=>e[8]||(e[8]=[f(" Log in ")])),_:1})])]),_:1})]),_:1})]),_:1})]),_:1})}}},S=P(j,[["__scopeId","data-v-29ac697c"]]);export{S as default};
