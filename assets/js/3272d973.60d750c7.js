"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[9518],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),i=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=i(e.components);return t.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||y[m]||o;return n?t.createElement(f,l(l({ref:r},p),{},{components:n})):t.createElement(f,l({ref:r},p))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7779:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=n(7462),a=(n(7294),n(3905));const o={id:"ray_core_concept",title:"Ray core\u4ecb\u7d39"},l="Ray Core",c={unversionedId:"kubernetes-native/mlops/ray/core/ray_core_concept",id:"kubernetes-native/mlops/ray/core/ray_core_concept",title:"Ray core\u4ecb\u7d39",description:"\u4e00\u822c\u4f86\u8aaa\uff0c\u5982\u679c\u4f60\u662f\u76f4\u63a5\u8dd1python\u7bc4\u4f8b\uff0c\u7bc4\u4f8b\u88e1\u7684ray.init()",source:"@site/docs/kubernetes-native/mlops/ray/core/concept.md",sourceDirName:"kubernetes-native/mlops/ray/core",slug:"/kubernetes-native/mlops/ray/core/ray_core_concept",permalink:"/docs/kubernetes-native/mlops/ray/core/ray_core_concept",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/mlops/ray/core/concept.md",tags:[],version:"current",frontMatter:{id:"ray_core_concept",title:"Ray core\u4ecb\u7d39"},sidebar:"tutorialSidebar",previous:{title:"kubeflow\u5b89\u88dd",permalink:"/docs/kubernetes-native/mlops/kubeflow/buildkubeflow"},next:{title:"Ray core\u7bc4\u4f8b\u4ecb\u7d39",permalink:"/docs/kubernetes-native/mlops/ray/core/ray_core_example"}},s={},i=[{value:"Task",id:"task",level:2},{value:"Nested remote func",id:"nested-remote-func",level:3},{value:"Ray generators",id:"ray-generators",level:3},{value:"\u975e\u540c\u6b65\u4f5c\u6cd5(\u9ad8\u6548)",id:"\u975e\u540c\u6b65\u4f5c\u6cd5\u9ad8\u6548",level:4},{value:"Actors",id:"actors",level:2}],p={toc:i},u="wrapper";function y(e){let{components:r,...n}=e;return(0,a.kt)(u,(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ray-core"},"Ray Core"),(0,a.kt)("p",null,"\u4e00\u822c\u4f86\u8aaa\uff0c\u5982\u679c\u4f60\u662f\u76f4\u63a5\u8dd1python\u7bc4\u4f8b\uff0c\u7bc4\u4f8b\u88e1\u7684",(0,a.kt)("strong",{parentName:"p"},"ray.init()")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Tasks"),"\u70baRay\u5e73\u884c\u7684\u975e\u540c\u6b65\u51fd\u6578\u5305\u88dd\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Actors"),"\u8207Task\u985e\u4f3c\uff0c\u70baclass\u7b49\u7d1a\u7684stateful worker\u3002\n\u7576\u4f60\u4f7f\u7528vm\u3001k8s\u4f86\u5efa\u7acbray cluster\u6642\uff0c\u5c31\u9700\u8981\u9060\u7aef\u63d0\u4ea4\u7684\u65b9\u6cd5\uff0c\u4e5f\u5c31\u662f",(0,a.kt)("strong",{parentName:"li"},"@remote")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Objects"),"\u70ba",(0,a.kt)("strong",{parentName:"li"},"Task"),"\u8207",(0,a.kt)("strong",{parentName:"li"},"Actors"),"\u5728Ray cluster\u7d71\u4e00interface\uff0c\u53ea\u8981\u5728ray\u88e1\u4f60\u90fd\u80fd\u627e\u5230\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Placement groups"),"\u70baTasks\u8207actors\u5728ray cluster\u7684\u6392\u7a0b\u6a5f\u5236\uff0c\u4e3b\u8981\u7528\u65bcgang scheduling")),(0,a.kt)("h2",{id:"task"},"Task"),(0,a.kt)("h3",{id:"nested-remote-func"},"Nested remote func"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import ray\n@ray.remote(num_cpus=1, num=gpus=1)\ndef f():\n  return 1\n# Blocking call\nprint(ray.get(f.remote()))\n")),(0,a.kt)("h3",{id:"ray-generators"},"Ray generators"),(0,a.kt)("p",null,"\u57fa\u672c\u4e0a\uff0c\u8ddfpython generator\u4f7f\u7528\u662f\u4e00\u6a23\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@ray.remote\ndef f():\n  for i in range(5):\n    if i == 1:\n        raise ValueError\n    yield i\ntry:\n    for obj_ref in f.remote():\n        print(ray.get(obj_ref))\nexcept ValueError as e:\n    print(e)\n")),(0,a.kt)("p",null,"\u7576\u4f7f\u7528class\u7b49\u7d1a\u7684actor\u6642\uff0c\u5247\u5c0d\u61c9",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u822c"),"\u3001",(0,a.kt)("strong",{parentName:"p"},"async"),"\u8207",(0,a.kt)("strong",{parentName:"p"},"thread"),"\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"actor -> \u4f7f\u7528def"),(0,a.kt)("li",{parentName:"ol"},"async actor -> \u4f7f\u7528async def\uff0c\u4e5f\u5c31\u662fnonblocking\u3002"),(0,a.kt)("li",{parentName:"ol"},"thread actor -> \u8a2d\u5b9a\u6700\u5927\u5e73\u884c\u6578\uff0cray.remote(max_concurrency=N)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"@ray.remote\nclass actor:\n    def f(self):\n        for i in range(5):\n            yield i\n@ray.remote\nclass asyncActor:\n    async def f(self):\n        for i in range(5):\n            yield i\n@ray.remote(max_concurrency=5)\nclass threadActor:\n    def f(self):\n        for i in range(5):\n            yield i\n\nactor = Actor.remote()\nfor ref in actor.f.remote():\n    print(ray.get(ref))\n\nactor = AsyncActor.remote()\nfor ref in actor.f.remote():\n    print(ray.get(ref))\n\nactor = ThreadedActor.remote()\nfor ref in actor.f.remote():\n    print(ray.get(ref))\n# \u7576\u6c92\u7528\u6216\u4e0d\u7e7c\u7e8cgenerator\u8a18\u5f97\u522a\n# gen = threadActor.remote()\n# del gen\n")),(0,a.kt)("p",null,"\u4f46\u5982\u679c\u518d\u591a\u884c\u6642\uff0c\u6703\u5c0e\u81f4\u7121\u9810\u8b66\u505c\u6b62\uff0c\u5c31\u9700\u8981\u900f\u904e",(0,a.kt)("strong",{parentName:"p"},"ray.cancel()"),"\uff0c\u8b93\u57f7\u884c",(0,a.kt)("strong",{parentName:"p"},"next(gen)"),"\u5c31\u6703\u5674\u51facancel\u932f\u8aa4",(0,a.kt)("strong",{parentName:"p"},"TaskCancelledError"),"\uff0c\u7372\u77e5\u9019\u662f\u5408\u7406\u95dc\u9589\u3002\n\u90a3\u554f\u984c\u4f86\u4e86\uff0c\u7576\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"async actor"),"\u6216",(0,a.kt)("strong",{parentName:"p"},"thread actor"),"\u6642\uff0c\u4f86\u6e90\u70ba\u975e\u540c\u6b65\uff0c\u5404\u505a\u5404\u7684\u3002"),(0,a.kt)("h4",{id:"\u975e\u540c\u6b65\u4f5c\u6cd5\u9ad8\u6548"},"\u975e\u540c\u6b65\u4f5c\u6cd5(\u9ad8\u6548)"),(0,a.kt)("p",null,"\u63a5\u6536\u7aef\u4e5f\u9700\u8981\u76f8\u61c9\u4fee\u6539\uff0c\u8b93\u4f86\u6e90\u7aef\u8ddf\u63a5\u6536\u7aef\u90fd\u662f\u975e\u540c\u6b65\uff0c\u512a\u5316\u6548\u80fd\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u900f\u904easyncio\u8207await"),(0,a.kt)("li",{parentName:"ol"},"\u900f\u904eray.wait\n\u900f\u904easyncio\u9054\u5230\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import asyncio\n@ray.remote\ndef task():\n    for i in range(5):\n        time.sleep(1)\n        yield i\nasync def async_task():\n    async for ref in task.remote():\n        print(await ref)\nasync def main():\n    t1 = async_task()\n    t2 = async_task()\n    await asyncio.gather(t1, t2)\nasyncio.run(main())\n")),(0,a.kt)("p",null,"\u900f\u904eray.wait\u6642\uff0c\u7576generator\u672a\u5b8c\u6210\u6642\uff0c\u90fd\u6703\u5f85\u5728unready\u4e2d\uff0c\u76f4\u5230\u5143\u7d20\u5674\u5149\uff0c\u624d\u6703\u88ab\u6b78\u5165ready\u3002\n\u5176\u4e2d\u5340\u5206\u8a72remote func\u662f\u5426\u70bagenerator\u8acb\u7528",(0,a.kt)("strong",{parentName:"p"},"ObjectRefGenerator"),"\u5340\u5206\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from ray._raylet import ObjectRefGenerator\n@ray.remote\ndef generator_task():\n    for i in range(5):\n        time.sleep(5)\n        yield i\ngen = [generator_task.remote()]\nready, unready = [], [*gen, *ref]\nresult = []\nwhile unready:\n    ready, unready = ray.wait(unready)\n    for r in ready:\n        if isinstance(r, ObjectRefGenerator):\n            try:\n                ref = next(r)\n                result.append(ray.get(ref))\n            except StopIteration:\n                pass\n            else:\n                unready.append(r)\n        else:\n            result.append(ray.get(r))\n")),(0,a.kt)("h2",{id:"actors"},"Actors"),(0,a.kt)("p",null,"Actor\u53ef\u4ee5\u4e1f\u5165Task\uff0c\u5efa\u7acb\u591a\u500bObject\u6307\u5411\u540c\u4e00Actor\uff0c\u5e73\u884c\u904b\u884c\u3002\n\u4ee5\u4e0b\u70ba\u5b98\u65b9\u7bc4\u4f8b\uff0c\u6bcf\u79d2Actor\u7684value+3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import ray\nimport time\n@ray.remote(num_cpus=2)\nclass Counter:\n    def __init__(self):\n        self.value = 0\n    def increment(self):\n        self.value += 1\n        return self.value\n    def get_counter(self):\n        return self.value\n\n@ray.remote\ndef f(counter):\n    for _ in range(10):\n        time.sleep(1)\n        counter.increment.remote() # call class func\n\ncounter = Counter.remote() # call class\n[f.remote(counter) for _ in range(3)] #\u6bcf\u79d2+3\nfor _ in range(10):\n    time.sleep(0.1)\n    print(ray.get(counter.get_counter.remote()))\n")),(0,a.kt)("p",null,"Actor\u4f7f\u7528",(0,a.kt)("strong",{parentName:"p"},"generator"),"\u6216",(0,a.kt)("strong",{parentName:"p"},"cancel"),"\u53ef\u4ee5\u56de\u982d\u770b\u4e0a\u500b\u7ae0\u7bc0\u3002"))}y.isMDXComponent=!0}}]);