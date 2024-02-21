"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[622],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>O});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function s(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,O=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?t.createElement(O,i(i({ref:n},c),{},{components:o})):t.createElement(O,i({ref:n},c))}));function O(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=o[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},970:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var t=o(7462),r=(o(7294),o(3905));const a={id:"buildozone",title:"ozone\u53e2\u96c6\u5efa\u7acb"},i="\u5efa\u7acbOzone",s={unversionedId:"ozone/buildozone",id:"ozone/buildozone",title:"ozone\u53e2\u96c6\u5efa\u7acb",description:"\u8a2d\u5b9a.bashrc",source:"@site/docs/ozone/buildozone.md",sourceDirName:"ozone",slug:"/ozone/buildozone",permalink:"/docs/ozone/buildozone",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/ozone/buildozone.md",tags:[],version:"current",frontMatter:{id:"buildozone",title:"ozone\u53e2\u96c6\u5efa\u7acb"},sidebar:"tutorialSidebar",previous:{title:"kubernetes\u53e2\u96c6\u5efa\u7acb",permalink:"/docs/k8s/buildkubernetes"},next:{title:"Ray\u5206\u6563\u5f0f\u8a13\u7df4-\u764c\u75c7\u7d30\u80de\u8a3a\u65b7",permalink:"/docs/ray/train/kaggle/cancerwithray"}},l={},p=[{value:"\u8a2d\u5b9a.bashrc",id:"\u8a2d\u5b9abashrc",level:2},{value:"ozone/etc/hadoop/ozone-env.sg",id:"ozoneetchadoopozone-envsg",level:2},{value:"\u5efa\u8cc7\u6599\u593e",id:"\u5efa\u8cc7\u6599\u593e",level:2},{value:"ozone/etc/hadoop/ozone-site.xml",id:"ozoneetchadoopozone-sitexml",level:2},{value:"\u50b3\u5230\u500b\u4e3b\u6a5f",id:"\u50b3\u5230\u500b\u4e3b\u6a5f",level:2},{value:"\u5404\u4e3b\u6a5f\u555f\u52d5scm\u8207om",id:"\u5404\u4e3b\u6a5f\u555f\u52d5scm\u8207om",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...o}=e;return(0,r.kt)(d,(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5efa\u7acbozone"},"\u5efa\u7acbOzone"),(0,r.kt)("h2",{id:"\u8a2d\u5b9abashrc"},"\u8a2d\u5b9a.bashrc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# JAVA\nexport JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64\nexport PATH=$JAVA_HOME/bin:$PATH\n\n# Ozone\nexport OZONE_HOME=/opt/ozone\nexport PATH=$PATH:$OZONE_HOME/bin\n")),(0,r.kt)("h2",{id:"ozoneetchadoopozone-envsg"},"ozone/etc/hadoop/ozone-env.sg"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64\nexport OZONE_HOME=/opt/ozone\nexport OZONE_CONF_DIR=${OZONE_HOME}/etc/hadoop\nexport OZONE_LOG_DIR=${OZONE_HOME}/logs\n")),(0,r.kt)("h2",{id:"\u5efa\u8cc7\u6599\u593e"},"\u5efa\u8cc7\u6599\u593e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# ozone\nmkdir logs\n")),(0,r.kt)("h2",{id:"ozoneetchadoopozone-sitexml"},"ozone/etc/hadoop/ozone-site.xml"),(0,r.kt)("p",null,"\u7522\u751f\u914d\u7f6e\u6a94\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ozone genconf /opt/ozone/etc/hadoop\n")),(0,r.kt)("p",null,"\u66f4\u6539localhost\u70ba\u5404\u4e3b\u6a5f\u540d\u7a31(/etc/hosts)\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<property>\n        <name>ozone.om.address</name>\n        <value>s1,s2</value>\n        <tag>OM, REQUIRED</tag>\n        <description>\n      The address of the Ozone OM service. This allows clients to discover\n      the address of the OM.\n    </description>\n    </property>\n    <property>\n        <name>ozone.metadata.dirs</name>\n        <value>/opt/ozone/data</value>\n        <tag>OZONE, OM, SCM, CONTAINER, STORAGE, REQUIRED</tag>\n        <description>\n      This setting is the fallback location for SCM, OM, Recon and DataNodes\n      to store their metadata. This setting may be used only in test/PoC\n      clusters to simplify configuration.\n\n      For production clusters or any time you care about performance, it is\n      recommended that ozone.om.db.dirs, ozone.scm.db.dirs and\n      dfs.container.ratis.datanode.storage.dir be configured separately.\n    </description>\n    </property>\n    <property>\n        <name>ozone.scm.client.address</name>\n        <value>s1,s2</value>\n        <tag>OZONE, SCM, REQUIRED</tag>\n        <description>\n      The address of the Ozone SCM client service. This is a required setting.\n\n      It is a string in the host:port format. The port number is optional\n      and defaults to 9860.\n    </description>\n    </property>\n    <property>\n        <name>ozone.scm.names</name>\n        <value>s1, s2</value>\n        <tag>OZONE, REQUIRED</tag>\n        <description>\n      The value of this property is a set of DNS | DNS:PORT | IP\n      Address | IP:PORT. Written as a comma separated string. e.g. scm1,\n      scm2:8020, 7.7.7.7:7777.\n      This property allows datanodes to discover where SCM is, so that\n      datanodes can send heartbeat to SCM.\n    </description>\n    </property>\n")),(0,r.kt)("h2",{id:"\u50b3\u5230\u500b\u4e3b\u6a5f"},"\u50b3\u5230\u500b\u4e3b\u6a5f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scp -rq ./ozone s2:/home/user\nsudo mv ozone /opt \n")),(0,r.kt)("h2",{id:"\u5404\u4e3b\u6a5f\u555f\u52d5scm\u8207om"},"\u5404\u4e3b\u6a5f\u555f\u52d5scm\u8207om"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ozone scm --init\nozone om --init\nozone --daemon start scm\nozone --daemon start om\nozone --daemon start datanode\n")))}u.isMDXComponent=!0}}]);