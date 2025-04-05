import{p as x,n as z,v as j,ag as K,ab as w,g as A,Q as h,Z as G,f as o,ai as p,t as s,l as U,a as d,P as ee,y as le,s as _,b as ae,aY as E,J as S,U as te,W as ne,X as oe,F as ue,a8 as D,A as ie,H as ce,_ as H}from"./index-BRhzpIri.js";import{L as re,R as se,I as de,aa as ve,F as fe,N as me,u as be,a8 as Ve,a9 as L,ab as ye}from"./VForm-BLxt1ewU.js";const M=Symbol.for("vuetify:selection-control-group"),q=x({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:w,trueIcon:w,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:K},...j(),...re(),...z()},"SelectionControlGroup"),Ce=x({...q({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");A()({name:"VSelectionControlGroup",props:Ce(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:r}=u;const l=h(e,"modelValue"),a=G(),v=o(()=>e.id||`v-selection-control-group-${a}`),c=o(()=>e.name||v.value),t=new Set;return ee(M,{modelValue:l,forceUpdate:()=>{t.forEach(n=>n())},onForceUpdate:n=>{t.add(n),le(()=>{t.delete(n)})}}),p({[e.defaultsTarget]:{color:s(e,"color"),disabled:s(e,"disabled"),density:s(e,"density"),error:s(e,"error"),inline:s(e,"inline"),modelValue:l,multiple:o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:c,falseIcon:s(e,"falseIcon"),trueIcon:s(e,"trueIcon"),readonly:s(e,"readonly"),ripple:s(e,"ripple"),type:s(e,"type"),valueComparator:s(e,"valueComparator")}}),U(()=>{var n;return d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=r.default)==null?void 0:n.call(r)])}),{}}});const J=x({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...j(),...q()},"VSelectionControl");function ke(e){const u=ue(M,void 0),{densityClasses:r}=fe(e),l=h(e,"modelValue"),a=o(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=o(()=>e.falseValue!==void 0?e.falseValue:!1),c=o(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),t=o({get(){const m=u?u.modelValue.value:l.value;return c.value?D(m).some(i=>e.valueComparator(i,a.value)):e.valueComparator(m,a.value)},set(m){if(e.readonly)return;const i=m?a.value:v.value;let b=i;c.value&&(b=m?[...D(l.value),i]:D(l.value).filter(f=>!e.valueComparator(f,a.value))),u?u.modelValue.value=b:l.value=b}}),{textColorClasses:n,textColorStyles:V}=me(o(()=>{if(!(e.error||e.disabled))return t.value?e.color:e.baseColor})),{backgroundColorClasses:C,backgroundColorStyles:k}=be(o(()=>t.value&&!e.error&&!e.disabled?e.color:e.baseColor)),g=o(()=>t.value?e.trueIcon:e.falseIcon);return{group:u,densityClasses:r,trueValue:a,falseValue:v,model:t,textColorClasses:n,textColorStyles:V,backgroundColorClasses:C,backgroundColorStyles:k,icon:g}}const N=A()({name:"VSelectionControl",directives:{Ripple:se},inheritAttrs:!1,props:J(),emits:{"update:modelValue":e=>!0},setup(e,u){let{attrs:r,slots:l}=u;const{group:a,densityClasses:v,icon:c,model:t,textColorClasses:n,textColorStyles:V,backgroundColorClasses:C,backgroundColorStyles:k,trueValue:g}=ke(e),m=G(),i=_(!1),b=_(!1),f=ae(),I=o(()=>e.id||`input-${m}`),P=o(()=>!e.disabled&&!e.readonly);a==null||a.onForceUpdate(()=>{f.value&&(f.value.checked=t.value)});function B(y){P.value&&(i.value=!0,ce(y.target,":focus-visible")!==!1&&(b.value=!0))}function F(){i.value=!1,b.value=!1}function W(y){y.stopPropagation()}function X(y){if(!P.value){f.value&&(f.value.checked=t.value);return}e.readonly&&a&&ie(()=>a.forceUpdate()),t.value=y.target.checked}return U(()=>{var T,$;const y=l.label?l.label({label:e.label,props:{for:I.value}}):e.label,[Y,Z]=E(r),R=d("input",S({ref:f,checked:t.value,disabled:!!e.disabled,id:I.value,onBlur:F,onFocus:B,onInput:X,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:g.value,name:e.name,"aria-checked":e.type==="checkbox"?t.value:void 0},Z),null);return d("div",S({class:["v-selection-control",{"v-selection-control--dirty":t.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":i.value,"v-selection-control--focus-visible":b.value,"v-selection-control--inline":e.inline},v.value,e.class]},Y,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",n.value],style:V.value},[(T=l.default)==null?void 0:T.call(l,{backgroundColorClasses:C,backgroundColorStyles:k}),te(d("div",{class:["v-selection-control__input"]},[(($=l.input)==null?void 0:$.call(l,{model:t,textColorClasses:n,textColorStyles:V,backgroundColorClasses:C,backgroundColorStyles:k,inputNode:R,icon:c.value,props:{onFocus:B,onBlur:F,id:I.value}}))??d(oe,null,[c.value&&d(de,{key:"icon",icon:c.value},null),R])]),[[ne("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),y&&d(ve,{for:I.value,onClick:W},{default:()=>[y]})])}),{isFocused:i,input:f}}}),Q=x({indeterminate:Boolean,indeterminateIcon:{type:w,default:"$checkboxIndeterminate"},...J({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),O=A()({name:"VCheckboxBtn",props:Q(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,u){let{slots:r}=u;const l=h(e,"indeterminate"),a=h(e,"modelValue");function v(n){l.value&&(l.value=!1)}const c=o(()=>l.value?e.indeterminateIcon:e.falseIcon),t=o(()=>l.value?e.indeterminateIcon:e.trueIcon);return U(()=>{const n=H(N.filterProps(e),["modelValue"]);return d(N,S(n,{modelValue:a.value,"onUpdate:modelValue":[V=>a.value=V,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:c.value,trueIcon:t.value,"aria-checked":l.value?"mixed":void 0}),r)}),{}}}),Ie=x({...ye(),...H(Q(),["inline"])},"VCheckbox"),Se=A()({name:"VCheckbox",inheritAttrs:!1,props:Ie(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,u){let{attrs:r,slots:l}=u;const a=h(e,"modelValue"),{isFocused:v,focus:c,blur:t}=Ve(e),n=G(),V=o(()=>e.id||`checkbox-${n}`);return U(()=>{const[C,k]=E(r),g=L.filterProps(e),m=O.filterProps(e);return d(L,S({class:["v-checkbox",e.class]},C,g,{modelValue:a.value,"onUpdate:modelValue":i=>a.value=i,id:V.value,focused:v.value,style:e.style}),{...l,default:i=>{let{id:b,messagesId:f,isDisabled:I,isReadonly:P,isValid:B}=i;return d(O,S(m,{id:b.value,"aria-describedby":f.value,disabled:I.value,readonly:P.value},k,{error:B.value===!1,modelValue:a.value,"onUpdate:modelValue":F=>a.value=F,onFocus:c,onBlur:t}),l)}})}),{}}});export{Se as V,O as a};
