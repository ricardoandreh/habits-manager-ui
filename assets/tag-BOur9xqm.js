import{p as h,f as d,m as i,s as l,L as c,O as g}from"./index-tPBZ1Xvo.js";const S=(t,s)=>{const n=t.__vccOpts||t;for(const[e,o]of s)n[e]=o;return n},x=h({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function y(t){return{dimensionStyles:d(()=>{const n={},e=i(t.height),o=i(t.maxHeight),a=i(t.maxWidth),m=i(t.minHeight),r=i(t.minWidth),u=i(t.width);return e!=null&&(n.height=e),o!=null&&(n.maxHeight=o),a!=null&&(n.maxWidth=a),m!=null&&(n.minHeight=m),r!=null&&(n.minWidth=r),u!=null&&(n.width=u),n})}}function b(){const t=l(!1);return c(()=>{window.requestAnimationFrame(()=>{t.value=!0})}),{ssrBootStyles:d(()=>t.value?void 0:{transition:"none !important"}),isBooted:g(t)}}const H=h({tag:{type:[String,Object,Function],default:"div"}},"tag");export{S as _,x as a,b,H as m,y as u};
