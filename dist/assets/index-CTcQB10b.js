const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-DZT4cw3E.js","assets/router-CeqegR0t.js","assets/vendor-D3F3s8fL.js","assets/ui-QaDUGiM1.js","assets/ProductsPage-DKi69Ure.js","assets/useProducts-C7o3hJ7o.js","assets/ProductDetailPage-HzOJBE2R.js","assets/AboutPage-ONRtfcUN.js","assets/ContactPage-HJrFuxxR.js","assets/PrivacyPage-B1NpClDW.js","assets/TermsPage-CvQLrkqT.js"])))=>i.map(i=>d[i]);
import{r as ge,a as ye}from"./vendor-D3F3s8fL.js";import{r as h,L as v,u as ve,B as be,R as je,a as N}from"./router-CeqegR0t.js";import{X as W,S as D,L,a as Q,M as we,T as Z,b as Ne,P as Ee,c as _e}from"./ui-QaDUGiM1.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();var U={exports:{}},T={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function Ce(){if(ee)return T;ee=1;var t=ge(),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,n=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(p,m,u){var o,l={},c=null,f=null;u!==void 0&&(c=""+u),m.key!==void 0&&(c=""+m.key),m.ref!==void 0&&(f=m.ref);for(o in m)a.call(m,o)&&!i.hasOwnProperty(o)&&(l[o]=m[o]);if(p&&p.defaultProps)for(o in m=p.defaultProps,m)l[o]===void 0&&(l[o]=m[o]);return{$$typeof:r,type:p,key:c,ref:f,props:l,_owner:n.current}}return T.Fragment=s,T.jsx=d,T.jsxs=d,T}var te;function Se(){return te||(te=1,U.exports=Ce()),U.exports}var e=Se(),A={},re;function Ie(){if(re)return A;re=1;var t=ye();return A.createRoot=t.createRoot,A.hydrateRoot=t.hydrateRoot,A}var Te=Ie();const Re="modulepreload",Pe=function(t){return"/"+t},se={},E=function(r,s,a){let n=Promise.resolve();if(s&&s.length>0){let m=function(u){return Promise.all(u.map(o=>Promise.resolve(o).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),p=d?.nonce||d?.getAttribute("nonce");n=m(s.map(u=>{if(u=Pe(u),u in se)return;se[u]=!0;const o=u.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${l}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Re,o||(c.as="script"),c.crossOrigin="",c.href=u,p&&c.setAttribute("nonce",p),document.head.appendChild(c),o)return new Promise((f,x)=>{c.addEventListener("load",f),c.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(d){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=d,window.dispatchEvent(p),!p.defaultPrevented)throw d}return n.then(d=>{for(const p of d||[])p.status==="rejected"&&i(p.reason);return r().catch(i)})};throw new Error("Missing required Shopify environment variables");const P=async(t,r)=>(console.warn("Shopify not configured, returning empty data"),{products:{edges:[],pageInfo:{hasNextPage:!1,endCursor:null}}}),Oe=`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        field
        message
      }
    }
  }
`,ke=`
  query getCustomer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      firstName
      lastName
      email
      phone
      acceptsMarketing
      createdAt
      defaultAddress {
        id
        address1
        address2
        city
        company
        country
        firstName
        lastName
        phone
        province
        zip
      }
      addresses(first: 10) {
        edges {
          node {
            id
            address1
            address2
            city
            company
            country
            firstName
            lastName
            phone
            province
            zip
          }
        }
      }
    }
  }
`,O="shopify_customer_token",q="shopify_token_expiry",Ae=async(t,r)=>{try{const s=await P(Oe,{input:{email:t,password:r}}),{customerAccessToken:a,customerUserErrors:n}=s.customerAccessTokenCreate;if(n.length>0)throw new Error(n[0].message);if(!a)throw new Error("Authentication failed");return localStorage.setItem(O,a.accessToken),localStorage.setItem(q,a.expiresAt),a.accessToken}catch(s){throw console.error("Authentication error:",s),s}},z=async t=>{try{return(await P(ke,{customerAccessToken:t})).customer}catch(r){throw console.error("Failed to fetch customer data:",r),new Error("Failed to fetch customer data")}},De=()=>{const t=localStorage.getItem(O),r=localStorage.getItem(q);if(!t||!r)return!1;const s=new Date(r);return new Date>=s?(localStorage.removeItem(O),localStorage.removeItem(q),!1):!0},H=()=>De()?localStorage.getItem(O):null,ie=()=>{localStorage.removeItem(O),localStorage.removeItem(q)},Le={customer:null,isAuthenticated:!1,loading:!1,error:null},qe=(t,r)=>{switch(r.type){case"SET_LOADING":return{...t,loading:r.payload};case"SET_ERROR":return{...t,error:r.payload,loading:!1};case"LOGIN_SUCCESS":return{...t,customer:r.payload,isAuthenticated:!0,loading:!1,error:null};case"SET_CUSTOMER":return{...t,customer:r.payload,isAuthenticated:!0};case"LOGOUT":return ie(),{...t,customer:null,isAuthenticated:!1,loading:!1,error:null};default:return t}},le=h.createContext(void 0),Me=({children:t})=>{const[r,s]=h.useReducer(qe,Le);h.useEffect(()=>{(async()=>{const m=H();if(m)try{s({type:"SET_LOADING",payload:!0});const u=await z(m);s({type:"SET_CUSTOMER",payload:u})}catch(u){console.error("Failed to initialize auth:",u),ie()}finally{s({type:"SET_LOADING",payload:!1})}})()},[]);const a=async(p,m)=>{try{s({type:"SET_LOADING",payload:!0}),s({type:"SET_ERROR",payload:null});const u=await Ae(p,m),o=await z(u);s({type:"LOGIN_SUCCESS",payload:o})}catch(u){const o=u instanceof Error?u.message:"Login failed";throw s({type:"SET_ERROR",payload:o}),u}},n=()=>{s({type:"LOGOUT"})},d={...r,login:a,logout:n,refreshCustomer:async()=>{const p=H();if(p)try{const m=await z(p);s({type:"SET_CUSTOMER",payload:m})}catch(m){console.error("Failed to refresh customer:",m),n()}}};return e.jsx(le.Provider,{value:d,children:t})},ce=()=>{const t=h.useContext(le);if(!t)throw new Error("useCustomer must be used within a CustomerProvider");return t},$e={items:[],isOpen:!1,loading:!1,error:null,total:0},de=(t,r)=>{switch(r.type){case"ADD_ITEM":{const s=t.items.find(i=>i.variantId===r.payload.variantId);let a;s?a=t.items.map(i=>i.variantId===r.payload.variantId?{...i,quantity:i.quantity+r.payload.quantity}:i):a=[...t.items,r.payload];const n=a.reduce((i,d)=>i+parseFloat(d.price.amount)*d.quantity,0);return{...t,items:a,total:n}}case"REMOVE_ITEM":{const s=t.items.filter(n=>n.variantId!==r.payload),a=s.reduce((n,i)=>n+parseFloat(i.price.amount)*i.quantity,0);return{...t,items:s,total:a}}case"UPDATE_QUANTITY":{if(r.payload.quantity<=0)return de(t,{type:"REMOVE_ITEM",payload:r.payload.variantId});const s=t.items.map(n=>n.variantId===r.payload.variantId?{...n,quantity:r.payload.quantity}:n),a=s.reduce((n,i)=>n+parseFloat(i.price.amount)*i.quantity,0);return{...t,items:s,total:a}}case"CLEAR_CART":return{...t,items:[],total:0};case"SET_LOADING":return{...t,loading:r.payload};case"SET_ERROR":return{...t,error:r.payload,loading:!1};case"TOGGLE_CART":return{...t,isOpen:!t.isOpen};case"OPEN_CART":return{...t,isOpen:!0};case"CLOSE_CART":return{...t,isOpen:!1};default:return t}},ue=h.createContext(void 0),ae="shopify_cart",Ue=({children:t})=>{const[r,s]=h.useReducer(de,$e);h.useEffect(()=>{try{const l=localStorage.getItem(ae);l&&JSON.parse(l).items.forEach(f=>{s({type:"ADD_ITEM",payload:f})})}catch(l){console.error("Failed to load cart from storage:",l)}},[]),h.useEffect(()=>{try{localStorage.setItem(ae,JSON.stringify({items:r.items,total:r.total}))}catch(l){console.error("Failed to save cart to storage:",l)}},[r.items,r.total]);const o={...r,addItem:l=>{s({type:"ADD_ITEM",payload:l})},removeItem:l=>{s({type:"REMOVE_ITEM",payload:l})},updateQuantity:(l,c)=>{s({type:"UPDATE_QUANTITY",payload:{variantId:l,quantity:c}})},clearCart:()=>{s({type:"CLEAR_CART"})},toggleCart:()=>{s({type:"TOGGLE_CART"})},openCart:()=>{s({type:"OPEN_CART"})},closeCart:()=>{s({type:"CLOSE_CART"})}};return e.jsx(ue.Provider,{value:o,children:t})},K=()=>{const t=h.useContext(ue);if(!t)throw new Error("useCart must be used within a CartProvider");return t},bt=`
  query getProducts($first: Int!, $after: String) {
    products(first: $first, after: $after) {
      edges {
        node {
          id
          title
          handle
          description
          descriptionHtml
          vendor
          productType
          tags
          
          images(first: 5) {
            edges {
              node {
                id
                url
                altText
                width
                height
              }
            }
          }
          
          variants(first: 3) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`,jt=`
  query getProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      vendor
      productType
      tags
      
      images(first: 10) {
        edges {
          node {
            id
            url
            altText
            width
            height
          }
        }
      }
      
      variants(first: 10) {
        edges {
          node {
            id
            title
            price {
              amount
              currencyCode
            }
            availableForSale
            quantityAvailable
            selectedOptions {
              name
              value
            }
          }
        }
      }
      
      options {
        id
        name
        values
      }
      
      seo {
        description
        title
      }
    }
  }
`,ze=`
  query searchProducts($query: String!, $first: Int!) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          title
          handle
          description
          images(first: 1) {
            edges {
              node {
                id
                url
                altText
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`,Y=(t,r)=>new Intl.NumberFormat("en-US",{style:"currency",currency:r}).format(parseFloat(t)),Ge=({isOpen:t,onClose:r})=>{const[s,a]=h.useState(""),[n,i]=h.useState([]),[d,p]=h.useState(!1),[m,u]=h.useState(!1),o=h.useRef(null);h.useEffect(()=>(t?(document.body.style.overflow="hidden",setTimeout(()=>{o.current?.focus()},100)):(document.body.style.overflow="unset",a(""),i([]),u(!1)),()=>{document.body.style.overflow="unset"}),[t]),h.useEffect(()=>{const c=f=>{f.key==="Escape"&&r()};return t&&document.addEventListener("keydown",c),()=>{document.removeEventListener("keydown",c)}},[t,r]);const l=async c=>{if(!c.trim()){i([]),u(!1);return}p(!0),u(!0);try{const x=(await P(ze,{query:c,first:20})).products.edges.map(g=>({...g.node,images:g.node.images?.edges?.map(b=>b.node)||[],variants:g.node.variants?.edges?.map(b=>b.node)||[]}));i(x)}catch(f){console.error("Search error:",f),i([])}finally{p(!1)}};return h.useEffect(()=>{const c=setTimeout(()=>{s.length>0?l(s):(i([]),u(!1))},300);return()=>clearTimeout(c)},[s]),t?e.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto",children:e.jsxs("div",{className:"flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[e.jsx("div",{className:"fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity",onClick:r}),e.jsx("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen",children:"​"}),e.jsxs("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full",children:[e.jsxs("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx("h3",{className:"text-lg font-medium leading-6 text-gray-900",children:"Search Products"}),e.jsxs("button",{type:"button",className:"bg-white rounded-md text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sea-green",onClick:r,children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(W,{className:"h-6 w-6"})]})]}),e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(D,{className:"h-5 w-5 text-gray-400"})}),e.jsx("input",{ref:o,type:"text",value:s,onChange:c=>a(c.target.value),placeholder:"Search for products...",className:"block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-sea-green focus:border-sea-green"})]})]}),e.jsxs("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 max-h-96 overflow-y-auto",children:[d&&e.jsxs("div",{className:"flex items-center justify-center py-8",children:[e.jsx(L,{className:"w-6 h-6 animate-spin text-sea-green mr-2"}),e.jsx("span",{className:"text-gray-600",children:"Searching..."})]}),!d&&m&&n.length===0&&e.jsxs("div",{className:"text-center py-8",children:[e.jsxs("p",{className:"text-gray-500",children:['No products found for "',s,'"']}),e.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Try different keywords"})]}),!d&&!m&&s.length===0&&e.jsxs("div",{className:"text-center py-8",children:[e.jsx(D,{className:"w-12 h-12 text-gray-300 mx-auto mb-2"}),e.jsx("p",{className:"text-gray-500",children:"Start typing to search products"})]}),n.length>0&&e.jsx("div",{className:"space-y-2",children:n.map(c=>{const f=c.variants?.[0],x=c.images?.[0];return e.jsxs(v,{to:`/products/${c.handle}`,onClick:r,className:"flex items-center p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200 hover:border-gray-300",children:[x?e.jsx("img",{src:x.url,alt:x.altText||c.title,className:"w-16 h-16 rounded-md object-cover flex-shrink-0"}):e.jsx("div",{className:"w-16 h-16 bg-gray-200 rounded-md flex items-center justify-center flex-shrink-0",children:e.jsx("span",{className:"text-gray-400 text-xs",children:"No Image"})}),e.jsxs("div",{className:"ml-4 flex-1 min-w-0",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-900 truncate",children:c.title}),c.description&&e.jsx("p",{className:"text-sm text-gray-500 truncate",children:c.description}),f&&e.jsx("p",{className:"text-sm font-semibold text-sea-green",children:Y(f.price.amount,f.price.currencyCode)})]})]},c.id)})})]}),n.length>0&&e.jsx("div",{className:"bg-white px-4 py-3 sm:px-6 border-t border-gray-200",children:e.jsxs(v,{to:`/products?search=${encodeURIComponent(s)}`,onClick:r,className:"text-sea-green hover:text-dartmouth-green font-medium text-sm",children:['View all results for "',s,'" →']})})]})]})}):null};var Fe=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","$","%","*","+",",","-",".",":",";","=","?","@","[","]","^","_","{","|","}","~"],R=t=>{let r=0;for(let s=0;s<t.length;s++){let a=t[s],n=Fe.indexOf(a);r=r*83+n}return r},G=t=>{let r=t/255;return r<=.04045?r/12.92:Math.pow((r+.055)/1.055,2.4)},F=t=>{let r=Math.max(0,Math.min(1,t));return r<=.0031308?Math.trunc(r*12.92*255+.5):Math.trunc((1.055*Math.pow(r,.4166666666666667)-.055)*255+.5)},Ve=t=>t<0?-1:1,V=(t,r)=>Ve(t)*Math.pow(Math.abs(t),r),ne=class extends Error{constructor(t){super(t),this.name="ValidationError",this.message=t}},He=t=>{if(!t||t.length<6)throw new ne("The blurhash string must be at least 6 characters");let r=R(t[0]),s=Math.floor(r/9)+1,a=r%9+1;if(t.length!==4+2*a*s)throw new ne(`blurhash length mismatch: length is ${t.length} but it should be ${4+2*a*s}`)},Ye=t=>{let r=t>>16,s=t>>8&255,a=t&255;return[G(r),G(s),G(a)]},Be=(t,r)=>{let s=Math.floor(t/361),a=Math.floor(t/19)%19,n=t%19;return[V((s-9)/9,2)*r,V((a-9)/9,2)*r,V((n-9)/9,2)*r]},Xe=(t,r,s,a)=>{He(t),a=a|1;let n=R(t[0]),i=Math.floor(n/9)+1,d=n%9+1,p=(R(t[1])+1)/166,m=new Array(d*i);for(let l=0;l<m.length;l++)if(l===0){let c=R(t.substring(2,6));m[l]=Ye(c)}else{let c=R(t.substring(4+l*2,6+l*2));m[l]=Be(c,p*a)}let u=r*4,o=new Uint8ClampedArray(u*s);for(let l=0;l<s;l++)for(let c=0;c<r;c++){let f=0,x=0,g=0;for(let _=0;_<i;_++)for(let j=0;j<d;j++){let S=Math.cos(Math.PI*c*j/r)*Math.cos(Math.PI*l*_/s),I=m[j+_*d];f+=I[0]*S,x+=I[1]*S,g+=I[2]*S}let b=F(f),C=F(x),k=F(g);o[4*c+0+l*u]=b,o[4*c+1+l*u]=C,o[4*c+2+l*u]=k,o[4*c+3+l*u]=255}return o},Je=Xe,We=Object.defineProperty,Ke=Object.defineProperties,Qe=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,me=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable,oe=(t,r,s)=>r in t?We(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,B=(t,r)=>{for(var s in r||(r={}))me.call(r,s)&&oe(t,s,r[s]);if(M)for(var s of M(r))he.call(r,s)&&oe(t,s,r[s]);return t},X=(t,r)=>Ke(t,Qe(r)),pe=(t,r)=>{var s={};for(var a in t)me.call(t,a)&&r.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&M)for(var a of M(t))r.indexOf(a)<0&&he.call(t,a)&&(s[a]=t[a]);return s},fe=class extends h.PureComponent{constructor(){super(...arguments),this.canvas=null,this.handleRef=t=>{this.canvas=t,this.draw()},this.draw=()=>{let{hash:t,height:r,punch:s,width:a}=this.props;if(this.canvas){let n=Je(t,a,r,s),i=this.canvas.getContext("2d"),d=i.createImageData(a,r);d.data.set(n),i.putImageData(d,0,0)}}}componentDidUpdate(){this.draw()}render(){let t=this.props,{hash:r,height:s,width:a}=t,n=pe(t,["hash","height","width"]);return h.createElement("canvas",X(B({},n),{height:s,width:a,ref:this.handleRef}))}};fe.defaultProps={height:128,width:128};var Ze={position:"absolute",top:0,bottom:0,left:0,right:0,width:"100%",height:"100%"},xe=class extends h.PureComponent{componentDidUpdate(){if(this.props.resolutionX<=0)throw new Error("resolutionX must be larger than zero");if(this.props.resolutionY<=0)throw new Error("resolutionY must be larger than zero")}render(){let t=this.props,{hash:r,height:s,width:a,punch:n,resolutionX:i,resolutionY:d,style:p}=t,m=pe(t,["hash","height","width","punch","resolutionX","resolutionY","style"]);return h.createElement("div",X(B({},m),{style:X(B({display:"inline-block",height:s,width:a},p),{position:"relative"})}),h.createElement(fe,{hash:r,height:d,width:i,punch:n,style:Ze}))}};xe.defaultProps={height:128,width:128,resolutionX:32,resolutionY:32};const y={src:"/images/logo/HNEEDS_s2utqr_c_scale,w_200.png",srcSet:["/images/logo/HNEEDS_s2utqr_c_scale,w_200.png 1x","/images/logo/HNEEDS_s2utqr_c_scale,w_604.png 2x","/images/logo/HNEEDS_s2utqr_c_scale,w_862.png 3x"].join(", "),webpSrcSet:["/images/logo/HNEEDS_s2utqr_c_scale,w_200.webp 1x","/images/logo/HNEEDS_s2utqr_c_scale,w_604.webp 2x","/images/logo/HNEEDS_s2utqr_c_scale,w_862.webp 3x"].join(", "),sizes:"(max-width: 640px) 150px, 200px",blurhash:"LGG+db-P7Nt1cuWFR+R+?INGD%eo",width:1400,height:364,aspectRatio:"1400 / 364"},et=({src:t,blurhash:r,alt:s,width:a,height:n,className:i="",style:d,sizes:p,srcSet:m,sources:u,loading:o="lazy",decoding:l="async",fetchpriority:c})=>{const[f,x]=h.useState(!1),[g,b]=h.useState(!1),[C,k]=h.useState(!1),_=h.useRef(null),j=h.useRef(null);h.useEffect(()=>{if(o==="eager"){b(!0);return}const w=new IntersectionObserver($=>{$[0].isIntersecting&&(b(!0),w.disconnect())},{rootMargin:"50px",threshold:.1});return j.current&&w.observe(j.current),()=>w.disconnect()},[o]);const S=()=>{x(!0),k(!1)},I=()=>{k(!0),x(!1)};return e.jsxs("div",{ref:j,className:`relative overflow-hidden ${i}`,style:{width:a,height:n,...d},children:[!f&&!C&&e.jsx("div",{className:"absolute inset-0",children:e.jsx(xe,{hash:r,width:a,height:n,resolutionX:32,resolutionY:32,punch:1,className:"w-full h-full"})}),g&&e.jsxs("picture",{className:`absolute inset-0 w-full h-full transition-opacity duration-500 ${f?"opacity-100":"opacity-0"}`,children:[u?.map((w,$)=>e.jsx("source",{type:w.type,srcSet:w.srcSet,sizes:w.sizes},`${w.srcSet}-${$}`)),e.jsx("img",{ref:_,src:t,srcSet:m,sizes:p,alt:s,width:a,height:n,loading:o,decoding:l,fetchPriority:c,onLoad:S,onError:I,className:"w-full h-full object-contain"})]}),C&&e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-celadon-2 to-mint rounded-xl flex items-center justify-center",children:e.jsx("span",{className:"text-dartmouth-green font-medium",children:"Image unavailable"})}),g&&!f&&!C&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-mint-2"})})]})},tt=()=>{const{items:t,toggleCart:r}=K(),[s,a]=h.useState(!1),[n,i]=h.useState(!1),d=t.reduce((p,m)=>p+m.quantity,0);return e.jsxs("div",{children:[e.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200 backdrop-blur-sm bg-white/95",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between items-center h-16",children:[e.jsx(v,{to:"/",className:"flex items-center w-[140px] sm:w-[200px]","aria-label":"H-NEEDS home",children:e.jsx(et,{src:y.src,srcSet:y.srcSet,sizes:y.sizes,sources:[{type:"image/webp",srcSet:y.webpSrcSet,sizes:y.sizes}],blurhash:y.blurhash,alt:"H-NEEDS logo",width:y.width,height:y.height,className:"w-full",style:{width:"100%",height:"auto",maxWidth:"100%",aspectRatio:y.aspectRatio},loading:"eager",decoding:"async",fetchpriority:"high"})}),e.jsxs("nav",{className:"hidden md:flex space-x-8",children:[e.jsx(v,{to:"/products",className:"text-dartmouth-green hover:text-sea-green transition-colors font-medium",children:"Products"}),e.jsx(v,{to:"/about",className:"text-dartmouth-green hover:text-sea-green transition-colors font-medium",children:"About"}),e.jsx(v,{to:"/contact",className:"text-dartmouth-green hover:text-sea-green transition-colors font-medium",children:"Contact"})]}),e.jsxs("div",{className:"hidden md:flex items-center space-x-4",children:[e.jsx("button",{type:"button",onClick:()=>i(!0),className:"text-dartmouth-green hover:text-sea-green transition-colors p-2","aria-label":"Search",children:e.jsx(D,{className:"w-5 h-5"})}),e.jsxs("button",{type:"button",onClick:r,className:"relative text-dartmouth-green hover:text-sea-green transition-colors p-2 min-w-[2.5rem] min-h-[2.5rem] flex items-center justify-center","aria-label":`Shopping cart with ${d} items`,children:[e.jsx(Q,{className:"w-5 h-5"}),d>0&&e.jsx("span",{className:"absolute -top-1 -right-1 bg-sea-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center min-w-[1.25rem]",children:d})]})]}),e.jsx("button",{type:"button",className:"md:hidden text-dartmouth-green hover:text-sea-green transition-colors",onClick:()=>a(!s),"aria-label":"Toggle mobile menu",children:s?e.jsx(W,{className:"w-6 h-6"}):e.jsx(we,{className:"w-6 h-6"})})]})}),s&&e.jsx("div",{className:"md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200",children:e.jsxs("div",{className:"px-4 py-2 space-y-1",children:[e.jsx(v,{to:"/products",className:"block px-3 py-2 text-dartmouth-green hover:text-sea-green transition-colors font-medium",onClick:()=>a(!1),children:"Products"}),e.jsx(v,{to:"/about",className:"block px-3 py-2 text-dartmouth-green hover:text-sea-green transition-colors font-medium",onClick:()=>a(!1),children:"About"}),e.jsx(v,{to:"/contact",className:"block px-3 py-2 text-dartmouth-green hover:text-sea-green transition-colors font-medium",onClick:()=>a(!1),children:"Contact"}),e.jsxs("div",{className:"flex items-center justify-end px-3 py-2 border-t border-gray-200 mt-2",children:[e.jsx("button",{type:"button",onClick:()=>{i(!0),a(!1)},className:"text-dartmouth-green hover:text-sea-green transition-colors mr-4","aria-label":"Search",children:e.jsx(D,{className:"w-5 h-5"})}),e.jsxs("button",{type:"button",onClick:()=>{r(),a(!1)},className:"relative text-dartmouth-green hover:text-sea-green transition-colors","aria-label":`Shopping cart with ${d} items`,children:[e.jsx(Q,{className:"w-5 h-5"}),d>0&&e.jsx("span",{className:"absolute -top-1 -right-1 bg-sea-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center",children:d})]})]})]})})]}),e.jsx(Ge,{isOpen:n,onClose:()=>i(!1)})]})},J=({variant:t="primary",size:r="md",loading:s=!1,fullWidth:a=!1,icon:n,children:i,className:d="",disabled:p,...m})=>{const u="inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",o={primary:"bg-sea-green hover:bg-dartmouth-green text-white focus:ring-sea-green shadow-lg hover:shadow-xl transition-all duration-200",secondary:"bg-mint-2 hover:bg-sea-green text-white focus:ring-mint-2 shadow-lg hover:shadow-xl transition-all duration-200",outline:"border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50 focus:ring-gray-500",ghost:"text-dartmouth-green hover:text-brunswick-green hover:bg-nyanza focus:ring-sea-green",danger:"bg-red-600 hover:bg-red-700 text-white focus:ring-red-500"},l={sm:"px-3 py-2 text-sm",md:"px-4 py-2 text-base",lg:"px-6 py-3 text-lg"},c=[u,o[t],l[r],a?"w-full":"",d].join(" ");return e.jsxs("button",{className:c,disabled:p||s,...m,children:[s?e.jsx(L,{className:"w-4 h-4 animate-spin mr-2"}):n?e.jsx("span",{className:"mr-2",children:n}):null,i]})},rt=`
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 250) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`,st=`
  mutation cartBuyerIdentityUpdate($cartId: ID!, $buyerIdentity: CartBuyerIdentityInput!) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: $buyerIdentity) {
      cart {
        id
        checkoutUrl
      }
      userErrors {
        field
        message
      }
    }
  }
`,at=()=>{const{items:t,clearCart:r}=K(),{isAuthenticated:s}=ce(),[a,n]=h.useState(!1),i=async()=>{try{n(!0);const p=t.map(l=>({merchandiseId:l.variantId,quantity:l.quantity})),m=await P(rt,{input:{lines:p}}),{cart:u,userErrors:o}=m.cartCreate;if(o.length>0)throw new Error(o[0].message);if(s){const l=H();l&&await P(st,{cartId:u.id,buyerIdentity:{customerAccessToken:l}})}r(),window.location.href=u.checkoutUrl}catch(p){console.error("Checkout error:",p),alert("Failed to create checkout. Please try again.")}finally{n(!1)}},d=()=>{i()};return t.length===0?null:e.jsx("div",{children:e.jsx(J,{onClick:d,loading:a,fullWidth:!0,variant:"primary",children:"Checkout"})})},nt=()=>{const{items:t,isOpen:r,closeCart:s,removeItem:a,updateQuantity:n,clearCart:i,total:d}=K(),{isAuthenticated:p}=ce();if(!r)return null;const m=(o,l)=>{l<1?a(o):n(o,l)},u=()=>{window.confirm("Are you sure you want to clear all items from your cart?")&&i()};return e.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[e.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50",onClick:s}),e.jsx("div",{className:"absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl",children:e.jsxs("div",{className:"flex h-full flex-col",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-gray-200 px-4 py-3",children:[e.jsxs("h2",{className:"text-lg font-medium text-gray-900",children:["Shopping Cart (",t.length,")"]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[t.length>0&&e.jsx("button",{type:"button",onClick:u,className:"text-red-400 hover:text-red-600 transition-colors p-1",title:"Clear all items",children:e.jsx(Z,{className:"h-4 w-4"})}),e.jsx("button",{type:"button",onClick:s,className:"text-gray-400 hover:text-gray-600 transition-colors",children:e.jsx(W,{className:"h-6 w-6"})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-4",children:t.length===0?e.jsx("div",{className:"flex h-full items-center justify-center",children:e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-gray-500 text-lg",children:"Your cart is empty"}),e.jsx("p",{className:"text-gray-400 text-sm mt-1",children:"Add some products to get started"})]})}):e.jsx("div",{className:"space-y-4",children:t.map(o=>e.jsxs("div",{className:"flex items-center space-x-4",children:[o.image&&e.jsx("img",{src:o.image.url,alt:o.image.altText||o.title,className:"h-16 w-16 rounded-lg object-cover",width:"64",height:"64",loading:"lazy",decoding:"async"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:"text-sm font-medium text-gray-900 truncate min-h-[1.25rem]",children:o.title}),o.variant.selectedOptions.length>0&&e.jsx("p",{className:"text-xs text-gray-500 min-h-[1rem]",children:o.variant.selectedOptions.map(l=>l.value).join(", ")}),e.jsx("p",{className:"text-sm font-medium text-gray-900 min-h-[1.25rem]",children:Y(o.price.amount,o.price.currencyCode)})]}),e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("button",{type:"button",onClick:()=>m(o.variantId,o.quantity-1),className:"p-1 text-gray-400 hover:text-gray-600 transition-colors",children:e.jsx(Ne,{className:"h-4 w-4"})}),e.jsx("span",{className:"w-8 text-center text-sm font-medium",children:o.quantity}),e.jsx("button",{type:"button",onClick:()=>m(o.variantId,o.quantity+1),className:"p-1 text-gray-400 hover:text-gray-600 transition-colors",children:e.jsx(Ee,{className:"h-4 w-4"})}),e.jsx("button",{type:"button",onClick:()=>a(o.variantId),className:"p-1 text-red-400 hover:text-red-600 transition-colors ml-2",children:e.jsx(_e,{className:"h-4 w-4"})})]})]},o.variantId))})}),t.length>0&&e.jsxs("div",{className:"border-t border-gray-200 px-4 py-4 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-lg font-medium",children:[e.jsx("span",{children:"Total:"}),e.jsx("span",{children:Y(d.toString(),t[0]?.price.currencyCode||"USD")})]}),e.jsx(at,{}),e.jsx(J,{onClick:s,variant:"outline",fullWidth:!0,children:"Continue Shopping"}),e.jsxs(J,{onClick:u,variant:"ghost",fullWidth:!0,className:"text-red-600 hover:text-red-700 hover:bg-red-50",children:[e.jsx(Z,{className:"w-4 h-4 mr-2"}),"Clear All Items"]})]})]})})]})},ot=({size:t="md",className:r="",text:s="Loading...",inline:a=!1})=>{const n={sm:"w-4 h-4",md:"w-8 h-8",lg:"w-12 h-12"};return a?e.jsxs("div",{className:`inline-flex items-center ${r}`,children:[e.jsx(L,{className:`animate-spin text-green-600 ${n[t]} mr-2`}),s&&e.jsx("span",{className:"text-sm text-gray-600",children:s})]}):e.jsx("div",{className:`flex items-center justify-center ${r}`,children:e.jsxs("div",{className:"flex flex-col items-center",children:[e.jsx(L,{className:`animate-spin text-green-600 ${n[t]}`}),s&&e.jsx("p",{className:"mt-2 text-sm text-gray-600",children:s})]})})},it=({children:t})=>{const r=ve();return h.useEffect(()=>{window.scrollTo(0,0)},[r.pathname]),e.jsx(e.Fragment,{children:t})},lt=h.lazy(()=>E(()=>import("./HomePage-DZT4cw3E.js"),__vite__mapDeps([0,1,2,3])).then(t=>({default:t.HomePage}))),ct=h.lazy(()=>E(()=>import("./ProductsPage-DKi69Ure.js"),__vite__mapDeps([4,5,1,2,3])).then(t=>({default:t.ProductsPage}))),dt=h.lazy(()=>E(()=>import("./ProductDetailPage-HzOJBE2R.js"),__vite__mapDeps([6,1,2,5,3])).then(t=>({default:t.ProductDetailPage}))),ut=h.lazy(()=>E(()=>import("./AboutPage-ONRtfcUN.js"),__vite__mapDeps([7,3,1,2])).then(t=>({default:t.AboutPage}))),mt=h.lazy(()=>E(()=>import("./ContactPage-HJrFuxxR.js"),__vite__mapDeps([8,1,2,3])).then(t=>({default:t.ContactPage}))),ht=h.lazy(()=>E(()=>import("./PrivacyPage-B1NpClDW.js"),__vite__mapDeps([9,3,1,2])).then(t=>({default:t.PrivacyPage}))),pt=h.lazy(()=>E(()=>import("./TermsPage-CvQLrkqT.js"),__vite__mapDeps([10,3,1,2])).then(t=>({default:t.TermsPage})));function ft(){return e.jsx(Me,{children:e.jsx(Ue,{children:e.jsx(be,{children:e.jsxs("div",{className:"min-h-screen bg-white flex flex-col",children:[e.jsx(tt,{}),e.jsx("main",{className:"flex-1 pt-16",children:e.jsx(it,{children:e.jsx(h.Suspense,{fallback:e.jsx("div",{className:"min-h-64 flex items-center justify-center",children:e.jsx(ot,{size:"lg"})}),children:e.jsxs(je,{children:[e.jsx(N,{path:"/",element:e.jsx(lt,{})}),e.jsx(N,{path:"/products",element:e.jsx(ct,{})}),e.jsx(N,{path:"/products/:handle",element:e.jsx(dt,{})}),e.jsx(N,{path:"/about",element:e.jsx(ut,{})}),e.jsx(N,{path:"/contact",element:e.jsx(mt,{})}),e.jsx(N,{path:"/privacy",element:e.jsx(ht,{})}),e.jsx(N,{path:"/terms",element:e.jsx(pt,{})}),e.jsx(N,{path:"*",element:e.jsxs("div",{className:"max-w-4xl mx-auto px-4 py-16 text-center",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Page Not Found"}),e.jsx("p",{className:"text-gray-600",children:"The page you're looking for doesn't exist."})]})})]})})})}),e.jsx(nt,{})]})})})})}Te.createRoot(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(ft,{})}));export{J as B,bt as G,ot as L,E as _,jt as a,Y as f,e as j,P as s,K as u};
