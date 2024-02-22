"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=s,k=d["".concat(a,".").concat(b)]||d[b]||p[b]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:s,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const o={id:"buildkubernetes",title:"kubernetes\u53e2\u96c6\u5efa\u7acb"},i="\u555f\u52d5k8s\u6d41\u7a0b",l={unversionedId:"kubernetes-native/kubernetes/buildkubernetes",id:"kubernetes-native/kubernetes/buildkubernetes",title:"kubernetes\u53e2\u96c6\u5efa\u7acb",description:"\u5b89\u88dd container runtime",source:"@site/docs/kubernetes-native/kubernetes/installCluster.md",sourceDirName:"kubernetes-native/kubernetes",slug:"/kubernetes-native/kubernetes/buildkubernetes",permalink:"/docs/kubernetes-native/kubernetes/buildkubernetes",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/kubernetes/installCluster.md",tags:[],version:"current",frontMatter:{id:"buildkubernetes",title:"kubernetes\u53e2\u96c6\u5efa\u7acb"},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7d39",permalink:"/docs/intro"},next:{title:"Metal-LB\u5b89\u88dd",permalink:"/docs/kubernetes-native/kubernetes/metallb"}},a={},u=[{value:"\u5b89\u88dd container runtime",id:"\u5b89\u88dd-container-runtime",level:2},{value:"linux kernel\u7db2\u8def\u8a2d\u5b9a",id:"linux-kernel\u7db2\u8def\u8a2d\u5b9a",level:2},{value:"kubeadm\u3001kubectl\u3001kubelet",id:"kubeadmkubectlkubelet",level:2},{value:"K8s\u555f\u52d5",id:"k8s\u555f\u52d5",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,s.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u555f\u52d5k8s\u6d41\u7a0b"},"\u555f\u52d5k8s\u6d41\u7a0b"),(0,s.kt)("h2",{id:"\u5b89\u88dd-container-runtime"},"\u5b89\u88dd container runtime"),(0,s.kt)("p",null,"\u63a1\u7528CRI-O\uff0c\u7562\u7adf\u662fk8s\u5b98\u65b9\u5be6\u4f5c\u7684CRI\u5951\u5408runtime"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'OS="xUbuntu_22.04"\nVERSION="1.28"\n\necho "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/ /" | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list\necho "deb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable:/cri-o:/$VERSION/$OS/ /" | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable:cri-o:$VERSION.list\n# gpg\ncurl -L https://download.opensuse.org/repositories/devel:kubic:libcontainers:stable:cri-o:$VERSION/$OS/Release.key | sudo apt-key --keyring /etc/apt/trusted.gpg.d/libcontainers.gpg add -\ncurl -L https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/$OS/Release.key | sudo apt-key --keyring /etc/apt/trusted.gpg.d/libcontainers.gpg add -\n# \u66f4\u65b0\u8f09\u9ede\nsudo apt-get update\nsudo apt-get install cri-o cri-o-runc cri-tools -y\n# \u670d\u52d9\u91cd\u555f\nsudo systemctl daemon-reload\nsudo systemctl enable crio --now\n')),(0,s.kt)("h2",{id:"linux-kernel\u7db2\u8def\u8a2d\u5b9a"},"linux kernel\u7db2\u8def\u8a2d\u5b9a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"cat <<EOF | sudo tee /etc/modules-load.d/k8s.conf\noverlay\nbr_netfilter\nEOF\n\nsudo modprobe overlay\nsudo modprobe br_netfilter\n\n# sysctl params required by setup, params persist across reboots\ncat <<EOF | sudo tee /etc/sysctl.d/k8s.conf\nnet.bridge.bridge-nf-call-iptables  = 1\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.ipv4.ip_forward                 = 1\nEOF\n\n# Apply sysctl params without reboot\nsudo sysctl --system\n")),(0,s.kt)("h2",{id:"kubeadmkubectlkubelet"},"kubeadm\u3001kubectl\u3001kubelet"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo apt-get update\nsudo apt-get install -y apt-transport-https ca-certificates curl gpg\ncurl -fsSL https://pkgs.k8s.io/core:/stable:/v1.29/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg\necho 'deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.29/deb/ /' | sudo tee /etc/apt/sources.list.d/kubernetes.list\nsudo apt-get update\nsudo apt-get install -y kubelet kubeadm kubectl\n")),(0,s.kt)("h2",{id:"k8s\u555f\u52d5"},"K8s\u555f\u52d5"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"sudo kubeadm init --pod-network-cidr=10.244.0.0/16 --cri-socket=unix:///var/run/crio/crio.sock\nmkdir -p $HOME/.kube\nsudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config\nsudo chown $(id -u):$(id -g) $HOME/.kube/config\nkubectl apply -f https://github.com/flannel-io/flannel/releases/latest/download/kube-flannel.yml\n")))}p.isMDXComponent=!0}}]);