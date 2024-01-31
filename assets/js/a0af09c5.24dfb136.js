"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={id:"datasciencelondonwithray",title:"DataScienceLondonWithRay"},i="Ray\u4f7f\u7528\u6848\u4f8b:DataScienceLondon",l={unversionedId:"ray/train/kaggle/datasciencelondonwithray",id:"ray/train/kaggle/datasciencelondonwithray",title:"DataScienceLondonWithRay",description:"\u8cc7\u6599\u4f86\u6e90",source:"@site/docs/ray/train/kaggle/DataScienceLondon.md",sourceDirName:"ray/train/kaggle",slug:"/ray/train/kaggle/datasciencelondonwithray",permalink:"/docs/ray/train/kaggle/datasciencelondonwithray",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/ray/train/kaggle/DataScienceLondon.md",tags:[],version:"current",frontMatter:{id:"datasciencelondonwithray",title:"DataScienceLondonWithRay"},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7d39",permalink:"/docs/ray/train/"},next:{title:"Ray Train\u652f\u63f4\u4e4bframework",permalink:"/docs/ray/train/supported_framwork"}},c={},s=[{value:"\u8cc7\u6599\u4f86\u6e90",id:"\u8cc7\u6599\u4f86\u6e90",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ray\u4f7f\u7528\u6848\u4f8bdatasciencelondon"},"Ray\u4f7f\u7528\u6848\u4f8b:DataScienceLondon"),(0,a.kt)("h2",{id:"\u8cc7\u6599\u4f86\u6e90"},"\u8cc7\u6599\u4f86\u6e90"),(0,a.kt)("p",null,"\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"train.csv"),"\u8207",(0,a.kt)("inlineCode",{parentName:"p"},"trainLabels.csv"),"\u4f5c\u70baX\u8207Y\u3002\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("a",{parentName:"em",href:"https://www.kaggle.com/c/data-science-london-scikit-learn/data"},"https://www.kaggle.com/c/data-science-london-scikit-learn/data")))),(0,a.kt)("p",null,"'''python\nimport torch\nfrom torch import nn\nfrom torch.utils.data import Dataset\nfrom torch.utils.data import DataLoader\nimport pandas as pd"),(0,a.kt)("p",null,"class CustomDataloader(Dataset):\ndef ",(0,a.kt)("strong",{parentName:"p"},"init"),"(self, x, y):\nself.dataset = x\nself.labels = y\ndef ",(0,a.kt)("strong",{parentName:"p"},"len"),"(self):\nreturn len(self.labels)\ndef ",(0,a.kt)("strong",{parentName:"p"},"getitem"),"(self, idx):\nx = self.dataset.iloc","[idx]","\ny = self.labels.iloc","[idx, 0]","\nreturn torch.tensor(x.values).float(), torch.tensor(","[y]",").float()"),(0,a.kt)("p",null,'def createTrainDataset():\ntrain_x = pd.read_csv("train.csv")\ntrain_y = pd.read_csv("trainLabels.csv")\nreturn CustomDataloader(x=train_x, y=train_y)'),(0,a.kt)("p",null,"class NeuralNetwork(nn.Module):\ndef ",(0,a.kt)("strong",{parentName:"p"},"init"),"(self):\nsuper().",(0,a.kt)("strong",{parentName:"p"},"init"),"()\nself.linear_relu_stack = nn.Sequential(\nnn.Linear(40, 40),\nnn.ReLU(),\nnn.Linear(40, 40),\nnn.ReLU(),\nnn.Linear(40, 1),\nnn.Sigmoid(),\n)\ndef forward(self, x):\nreturn self.linear_relu_stack(x)"),(0,a.kt)("p",null,'def train(dataloader, model, criterion, optimizer):\nfor epoch in range(5):\nfor X, y in dataloader:\noptimizer.zero_grad()\nX, y = X.to(device), y.to(device)\npred = model(X)\nloss = criterion(pred, y)\nloss.backward()\noptimizer.step()\nprint(f"epoch: {epoch}, loss: {loss.item()}")'),(0,a.kt)("p",null,'device = (\n"cuda"\nif torch.cuda.is_available()\nelse "cpu"\n)'),(0,a.kt)("p",null,"model = NeuralNetwork().to(device)\ncriterion = nn.BCELoss()\noptimizer = torch.optim.SGD(model.parameters(), lr=1e-3)\ndataloader = DataLoader(createTrainDataset(), batch_size)\ntrain(dataloader, model, criterion, optimizer)\n'''"))}u.isMDXComponent=!0}}]);