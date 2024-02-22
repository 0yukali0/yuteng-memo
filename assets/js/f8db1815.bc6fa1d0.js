"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[154],{3905:(r,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var t=n(7294);function a(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function i(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.push.apply(n,t)}return n}function o(r){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(r,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}))}return r}function l(r,e){if(null==r)return{};var n,t,a=function(r,e){if(null==r)return{};var n,t,a={},i=Object.keys(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(a[n]=r[n]);return a}(r,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(r,n)&&(a[n]=r[n])}return a}var c=t.createContext({}),p=function(r){var e=t.useContext(c),n=e;return r&&(n="function"==typeof r?r(e):o(o({},e),r)),n},u=function(r){var e=p(r.components);return t.createElement(c.Provider,{value:e},r.children)},f="mdxType",y={inlineCode:"code",wrapper:function(r){var e=r.children;return t.createElement(t.Fragment,{},e)}},s=t.forwardRef((function(r,e){var n=r.components,a=r.mdxType,i=r.originalType,c=r.parentName,u=l(r,["components","mdxType","originalType","parentName"]),f=p(n),s=a,d=f["".concat(c,".").concat(s)]||f[s]||y[s]||i;return n?t.createElement(d,o(o({ref:e},u),{},{components:n})):t.createElement(d,o({ref:e},u))}));function d(r,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof r||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=r,l[f]="string"==typeof r?r:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5961:(r,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=n(7462),a=(n(7294),n(3905));const i={id:"ray_overview_train",title:"Ray Train\u5927\u7db1"},o="Ray Train\u5927\u7db1",l={unversionedId:"AI/framework/ray/train/ray_overview_train",id:"AI/framework/ray/train/ray_overview_train",title:"Ray Train\u5927\u7db1",description:"AI\u8a13\u7df4\u7a0b\u5f0f\u8207Ray\u7684\u642d\u914d\u6709\u4e09\u8655\u53ef\u8abf\u6574\u3002",source:"@site/docs/AI/framework/ray/train/train_overviw.md",sourceDirName:"AI/framework/ray/train",slug:"/AI/framework/ray/train/ray_overview_train",permalink:"/docs/AI/framework/ray/train/ray_overview_train",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/AI/framework/ray/train/train_overviw.md",tags:[],version:"current",frontMatter:{id:"ray_overview_train",title:"Ray Train\u5927\u7db1"},sidebar:"tutorialSidebar",previous:{title:"Ray Train\u652f\u63f4\u4e4bframework",permalink:"/docs/AI/framework/ray/train/ray_train_framework"},next:{title:"hadoop\u53e2\u96c6\u5efa\u7acb",permalink:"/docs/hadoop-native/hadoop/buildhadoop"}},c={},p=[{value:"Training function",id:"training-function",level:2},{value:"Worker",id:"worker",level:2},{value:"Scaling configuration",id:"scaling-configuration",level:3},{value:"Trainer",id:"trainer",level:2}],u={toc:p},f="wrapper";function y(r){let{components:e,...n}=r;return(0,a.kt)(f,(0,t.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ray-train\u5927\u7db1"},"Ray Train\u5927\u7db1"),(0,a.kt)("p",null,"AI\u8a13\u7df4\u7a0b\u5f0f\u8207Ray\u7684\u642d\u914d\u6709\u4e09\u8655\u53ef\u8abf\u6574\u3002\n\u5206\u5225\u70ba",(0,a.kt)("inlineCode",{parentName:"p"},"training function"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Worker"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Trainer"),"\u3002"),(0,a.kt)("h2",{id:"training-function"},"Training function"),(0,a.kt)("p",null,"\u5efa\u7acb\u6a21\u578b\u3001loss\u503c\u8a08\u7b97\u7b49\u7b49,\u539f\u5148\u55ae\u6a5f\u7a0b\u5f0f\u79fb\u82b1\u63a5\u6728\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"def train_func():\n    # user-defined training function of each worker\n")),(0,a.kt)("h2",{id:"worker"},"Worker"),(0,a.kt)("p",null,"\u6bcf\u500bworker\u542b\u6709training function\u5167\u5bb9\u4e26\u57f7\u884c\u3002"),(0,a.kt)("h3",{id:"scaling-configuration"},"Scaling configuration"),(0,a.kt)("p",null,"Scaling configuration\u8a2d\u5b9aworker\u7e3d\u6578\uff0c\u5404\u500bworker\u8cc7\u6e90\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from ray.train import ScalingConfig\n\nscaling_config = ScalingConfig(num_worker=2, use_GPU=False)\n")),(0,a.kt)("h2",{id:"trainer"},"Trainer"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Ray Trainer"),"\u4f9d\u64da\u63d0\u4f9b\u4e4b",(0,a.kt)("inlineCode",{parentName:"p"},"training_func"),"\u8207",(0,a.kt)("inlineCode",{parentName:"p"},"scaling configuration"),"\u69cb\u51fa\u76f8\u61c9\u6578\u91cf\u7684worker\uff0c\u57f7\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"training function"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from ray.train.torch import TorchTrainer\n\ntrainer = TorchTrainer(train_func, scaling_config=scaling_config)\ntrain.fit()\n")))}y.isMDXComponent=!0}}]);