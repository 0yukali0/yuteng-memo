"use strict";(self.webpackChunk_0_yukali_0_github_io=self.webpackChunk_0_yukali_0_github_io||[]).push([[6619],{5384:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>t,toc:()=>p});var n=r(4848),d=r(8453);const i={id:"buildzookeeper",title:"zookeeper\u53e2\u96c6\u5efa\u7acb"},s="Zookeeper\u591a\u7bc0\u9ede\u5b89\u88dd",t={id:"hadoop-native/zookeeper/buildzookeeper",title:"zookeeper\u53e2\u96c6\u5efa\u7acb",description:"\u8a2d\u5b9a/etc/hosts",source:"@site/docs/hadoop-native/zookeeper/buildzookeeper.md",sourceDirName:"hadoop-native/zookeeper",slug:"/hadoop-native/zookeeper/buildzookeeper",permalink:"/docs/hadoop-native/zookeeper/buildzookeeper",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hadoop-native/zookeeper/buildzookeeper.md",tags:[],version:"current",frontMatter:{id:"buildzookeeper",title:"zookeeper\u53e2\u96c6\u5efa\u7acb"}},c={},p=[{value:"\u8a2d\u5b9a/etc/hosts",id:"\u8a2d\u5b9aetchosts",level:2},{value:"\u8a2d\u5b9a.bashrc",id:"\u8a2d\u5b9abashrc",level:2},{value:"\u4e0b\u8f09zookeeper",id:"\u4e0b\u8f09zookeeper",level:2},{value:"zoo.cfg\u914d\u7f6e\u6a94\u8a2d\u5b9a",id:"zoocfg\u914d\u7f6e\u6a94\u8a2d\u5b9a",level:2},{value:"\u5efa\u8cc7\u6599\u593e",id:"\u5efa\u8cc7\u6599\u593e",level:2},{value:"\u6bcf\u53f0\u4e3b\u6a5fmyid\u5efa\u7acb",id:"\u6bcf\u53f0\u4e3b\u6a5fmyid\u5efa\u7acb",level:2},{value:"\u8907\u88fdzookeeper\u5230\u6bcf\u53f0\u4e3b\u6a5f",id:"\u8907\u88fdzookeeper\u5230\u6bcf\u53f0\u4e3b\u6a5f",level:2},{value:"\u555f\u52d5zookeeper",id:"\u555f\u52d5zookeeper",level:2}];function a(e){const o={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"zookeeper\u591a\u7bc0\u9ede\u5b89\u88dd",children:"Zookeeper\u591a\u7bc0\u9ede\u5b89\u88dd"})}),"\n",(0,n.jsx)(o.h2,{id:"\u8a2d\u5b9aetchosts",children:"\u8a2d\u5b9a/etc/hosts"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-script",children:"s1 192.168.0.170\ns2 192.168.0.171\n"})}),"\n",(0,n.jsx)(o.h2,{id:"\u8a2d\u5b9abashrc",children:"\u8a2d\u5b9a.bashrc"}),"\n",(0,n.jsx)(o.p,{children:"\u914d\u7f6e\u5f8c\u8acbsource .bashrc"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"export JAVA_HOME=/usr/lib/jvm/java-1.8.0-openjdk-amd64\nexport PATH=$JAVA_HOME/bin:$PATH\nexport ZOOKEEPER_HOME=/opt/zookeeper\nexport PATH=$PATH:$ZOOKEEPER_HOME/bin\n"})}),"\n",(0,n.jsx)(o.h2,{id:"\u4e0b\u8f09zookeeper",children:"\u4e0b\u8f09zookeeper"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-script",children:"# /home/hadoop\nwget https://dlcdn.apache.org/zookeeper/zookeeper-3.9.1/apache-zookeeper-3.9.1-bin.tar.gz\ntar -zxf apache-zookeeper-3.9.1-bin.tar.gz\nmv apache-zookeeper-3.9.1-bin zookeeper\n"})}),"\n",(0,n.jsx)(o.h2,{id:"zoocfg\u914d\u7f6e\u6a94\u8a2d\u5b9a",children:"zoo.cfg\u914d\u7f6e\u6a94\u8a2d\u5b9a"}),"\n",(0,n.jsx)(o.p,{children:"\u5efa\u7acbzoo.cfg"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"cp zoo_sample.cfg zoo.cfg\n"})}),"\n",(0,n.jsx)(o.p,{children:"\u6703\u5c07zookeeper\u653e\u5230***/opt***\uff0c\u4e26\u8a2d\u5b9azookeeper\u8cc7\u6599\u593e\u4e2d\u5275\u8cc7\u6599\u593e\u4f86\u5b58data\u8207log\u3002\n\u9700\u8981\u8a2d\u5b9azoo.cfg\uff0c\u901a\u77e5zookeeper\u914d\u7f6e"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"#data\u8207log\u8def\u5f91\u8a2d\u5b9a\ndataDir=/opt/zookeeper/data\ndataLogDir=/opt/zookeeper/logs\n\n#zookeeper port\u9810\u8a2d\u5c31\u662f2181\u5c31\u662f\u4e86...\nclientPort=2181\nmaxClientCnxns=60\nmaxSessionTimeout=30000\nminSessionTimeout=30000\n\n# zookeeper\u591a\u7bc0\u9ede\u914d\u7f6e\uff0c\u683c\u5f0f\u70baserver.myid=ip:2888:3888\n# myid\u5c0d\u61c9data/myid\u5167\u5bb9\u7684\u503c\nserver.0=s1:2888:3888\nserver.1=s2:2888:3888\n"})}),"\n",(0,n.jsx)(o.h2,{id:"\u5efa\u8cc7\u6599\u593e",children:"\u5efa\u8cc7\u6599\u593e"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"# /home/hadoop\nmkdir zookeeper/data\nmkdir zookeeper/logs\n"})}),"\n",(0,n.jsx)(o.h2,{id:"\u6bcf\u53f0\u4e3b\u6a5fmyid\u5efa\u7acb",children:"\u6bcf\u53f0\u4e3b\u6a5fmyid\u5efa\u7acb"}),"\n",(0,n.jsx)(o.p,{children:"\u4e3b\u6a5f1 master"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"echo 0 > zookeeper/data/myid\n"})}),"\n",(0,n.jsx)(o.p,{children:"\u4e3b\u6a5f2 slave"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"echo 1 > zookeeper/data/myid\n"})}),"\n",(0,n.jsx)(o.h2,{id:"\u8907\u88fdzookeeper\u5230\u6bcf\u53f0\u4e3b\u6a5f",children:"\u8907\u88fdzookeeper\u5230\u6bcf\u53f0\u4e3b\u6a5f"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"# \u6211\u6709\u8dd1ssh\u7121\u5bc6\u78bc\u767b\u5165\uff0c\u6c92\u6709\u7684\u8a71\u8acb\u7528user@ip:\u8def\u5f91\nscp -rq zookeeper slave:/home/hadoop/\nsudo mv zookeeper /opt  \n"})}),"\n",(0,n.jsx)(o.h2,{id:"\u555f\u52d5zookeeper",children:"\u555f\u52d5zookeeper"}),"\n",(0,n.jsx)(o.p,{children:"\u6bcf\u53f0\u4e3b\u6a5f\u7686\u8dd1"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"zkServer.sh start\n"})})]})}function l(e={}){const{wrapper:o}={...(0,d.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},8453:(e,o,r)=>{r.d(o,{R:()=>s,x:()=>t});var n=r(6540);const d={},i=n.createContext(d);function s(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);