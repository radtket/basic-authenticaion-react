(this["webpackJsonpreact-context-authentication"]=this["webpackJsonpreact-context-authentication"]||[]).push([[0],{4:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(3),s=n.n(l),u=n(1);const c=()=>{return(e=1e3,new Promise(t=>setTimeout(t,e))).then(()=>({username:"elmo"}));var e},o=Object(r.createContext)(),i=e=>{let{status:t,error:n,children:r}=e;return"pending"===t?a.a.createElement("h1",null,"Loading"):"error"===t?a.a.createElement("div",null,"Oh no",a.a.createElement("div",null,a.a.createElement("pre",null,n.message))):r},m=()=>{const e=Object(r.useContext)(o),t="pending"===e.status,n="error"===e.status,a="success"===e.status,l=e.user&&a;return Object(u.a)(Object(u.a)({},e),{},{isPending:t,isError:n,isSuccess:a,isAuthenticated:l})},h=e=>{let{children:t}=e;const[n,l]=Object(r.useState)({status:"pending",error:null,user:null});return Object(r.useEffect)(()=>{c().then(e=>l({status:"success",error:null,user:e}),e=>l({status:"error",error:e,user:null}))},[]),a.a.createElement(o.Provider,{value:n},a.a.createElement(i,Object(u.a)(Object(u.a)({},n),{},{children:t})))};var E=()=>{const{user:e}=m();return a.a.createElement("p",null,"Hello ",e.username)};var d=()=>a.a.createElement("p",null,"This is an awesome app!");var p=()=>{const{user:e}=m();return a.a.createElement("p",null,"I am so happy to have you here ",e.username,".")};var v=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(E,null),a.a.createElement(p,null),a.a.createElement(d,null));var g=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement("p",null,"Please login"),a.a.createElement("p",null,"You must login to read the message"));var b=()=>{const{user:e}=m();return e?a.a.createElement(v,null):a.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(h,null,a.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})}},[[4,1,2]]]);
//# sourceMappingURL=main.164bf15f.chunk.js.map