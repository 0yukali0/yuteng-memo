"use strict";(self.webpackChunk_0_yukali_0_github_io=self.webpackChunk_0_yukali_0_github_io||[]).push([[5865],{8135:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var a=t(4848),l=t(8453);const s={id:"flyte_concept",title:"flyte\u57fa\u672c\u4ecb\u7d39"},o="\u57fa\u672c",r={id:"kubernetes-native/mlops/flyte/flyte_concept",title:"flyte\u57fa\u672c\u4ecb\u7d39",description:"1. Task",source:"@site/docs/kubernetes-native/mlops/flyte/concept.md",sourceDirName:"kubernetes-native/mlops/flyte",slug:"/kubernetes-native/mlops/flyte/flyte_concept",permalink:"/docs/kubernetes-native/mlops/flyte/flyte_concept",draft:!1,unlisted:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/kubernetes-native/mlops/flyte/concept.md",tags:[],version:"current",frontMatter:{id:"flyte_concept",title:"flyte\u57fa\u672c\u4ecb\u7d39"}},i={},u=[{value:"\u8a3b\u518aworkflow",id:"\u8a3b\u518aworkflow",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"\u57fa\u672c",children:"\u57fa\u672c"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Task"}),"\n",(0,a.jsx)(n.li,{children:"Workflow"}),"\n",(0,a.jsx)(n.li,{children:"LaunchPlan\nTask\u8207workflow\u4f7f\u7528@task\u8207@workflow\u4f86\u6a19\u8a8c\uff0c\u4e14\u5169\u8005\u7686\u662f\u5f37\u578b\u614b\u3002\nWorkflow\u53ef\u4ee5\u4e92\u76f8\u517c\u5bb9\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from typing import List\nfrom math import sqrt\nfrom flytekit import task, workflow, LaunchPlan\n@task\ndef mean(values: List[float]) -> float:\n    return sum(values) / len(values)\n\n@task\ndef standard_deviation(values: List[float], mu: float) -> float:\n    variance = sum([(x - mu) ** 2 for x in values])\n    return sqrt(variance)\n\n@task\ndef standard_scale(values: List[float], mu: float, sigma: float) -> List[float]:\n    return [(x - mu) / sigma for x in values]\n\n@workflow\ndef standard_scale_workflow(values: List[float]) -> List[float]:\n    mu = mean(values=values)\n    sigma = standard_deviation(values=values, mu=mu)\n    return standard_scale(values=values, mu=mu, sigma=sigma)\n\nmean(values=[float(i) for i in range(1, 11)])\ntry:\n    mean(values="tmp")\n    standard_scale_workflow(values=[float(i) for i in range(1, 11)])\nexcept Exception as e:\n    print(e)\n# stateful workflow\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u7372\u5f97\u904e\u5f80\u7d50\u679c\uff0c\u7701\u6642\u9593\uff0c\u985e\u4f3cgit\u3002\nstandard_scale_launch_plan = LaunchPlan.get_or_create(\n    standard_scale_workflow,\n    name="standard_scale_lp",\n    default_inputs={"values": [3.0, 4.0, 5.0]}\n)\n# Plan\u4e5f\u7b97workflow\uff0c\u53ef\u4ee5\u88ab\u5305\u542b\u5728workflow\u4e2d\u3002\n@workflow\ndef workflow_with_launchplan(num_samples: int, seed: int) -> List[float]:\n    data = generate_data(num_samples=num_samples, seed=seed)\n    return standard_scale_launch_plan(values=data)\n\nworkflow_with_launchplan(num_samples=10, seed=3)\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u90a3workflow\u4e4b\u9593\u7684\u95dc\u4fc2\u9664\u4e86\u4e0a\u9762\u76f4\u63a5\u5728code\u88e1\u9762\u5beb\u95dc\u4fc2\u4e4b\u5916\u3002\n\u4e5f\u53ef\u4ee5\u5728workflow\u4e2d\u76f4\u63a5\u63cf\u5beb\u4f9d\u8cf4\u95dc\u4fc2"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"@workflow\ndef wf():\n    # t1 -> t2 -> wf\n    promise1 = task1()\n    promise2 = task2()\n    promise3 = wf()\n    promise1 >> promise2\n    promeis2 >> promise3\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u8a3b\u518aworkflow",children:"\u8a3b\u518aworkflow"})]})}function f(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var a=t(6540);const l={},s=a.createContext(l);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);