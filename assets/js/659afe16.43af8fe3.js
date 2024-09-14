"use strict";(self.webpackChunk_0_yukali_0_github_io=self.webpackChunk_0_yukali_0_github_io||[]).push([[1368],{937:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var i=t(4848),o=t(8453);const r={id:"pythonPingPong",title:"python prometheus ping\u7bc4\u4f8b"},s="ping\u7bc4\u4f8b",p={id:"kubernetes-native/monitor/prometheus/client/python/pythonPingPong",title:"python prometheus ping\u7bc4\u4f8b",description:"\u7a0b\u5f0f\u78bc",source:"@site/docs/kubernetes-native/monitor/prometheus/client/python/ping.md",sourceDirName:"kubernetes-native/monitor/prometheus/client/python",slug:"/kubernetes-native/monitor/prometheus/client/python/pythonPingPong",permalink:"/docs/kubernetes-native/monitor/prometheus/client/python/pythonPingPong",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/kubernetes-native/monitor/prometheus/client/python/ping.md",tags:[],version:"current",frontMatter:{id:"pythonPingPong",title:"python prometheus ping\u7bc4\u4f8b"}},a={},c=[{value:"\u7a0b\u5f0f\u78bc",id:"\u7a0b\u5f0f\u78bc",level:2},{value:"Docker file",id:"docker-file",level:2},{value:"Kubernetes deployment",id:"kubernetes-deployment",level:2},{value:"Prometheus Service Monitor",id:"prometheus-service-monitor",level:2},{value:"\u78ba\u8a8dServiceMonitor\u751f\u6548",id:"\u78ba\u8a8dservicemonitor\u751f\u6548",level:2},{value:"\u9810\u671f\u756b\u9762",id:"\u9810\u671f\u756b\u9762",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"ping\u7bc4\u4f8b",children:"ping\u7bc4\u4f8b"})}),"\n",(0,i.jsx)(n.h2,{id:"\u7a0b\u5f0f\u78bc",children:"\u7a0b\u5f0f\u78bc"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from flask import Flask, Response\nfrom prometheus_client import Counter, generate_latest\n\napp = Flask(__name__)\nmetricName = \"ping_count\"\nmetricDes = \"count the number of visit /ping \"\ncounter = Counter(metricName, metricDes)\n\n@app.route('/metrics')\ndef metrics():\n    return Response(generate_latest(counter), mimetype='text/plain')\n\n@app.route('/pong')\ndef ping():\n    counter.inc(1)\n    return \"pong\"\n\nif __name__ == '__main__':\n    app.run(host='0.0.0.0', port=5000)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"docker-file",children:"Docker file"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'FROM python\nRUN pip install -U Flask\nRUN pip install prometheus-client\nENTRYPOINT ["python", "ping.py"]\n'})}),"\n",(0,i.jsx)(n.h2,{id:"kubernetes-deployment",children:"Kubernetes deployment"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apiVersion: v1\nkind: Service\nmetadata:\n  name: ping-service\n  labels:\n    app: ping\nspec:\n  type: LoadBalancer\n  selector:\n    app: ping\n  ports:\n    - name: backend\n      port: 30000\n      targetPort: 5000\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: ping-deployment\n  labels:\n    app: ping\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: ping\n  template:\n    metadata:\n      labels:\n        app: ping\n    spec:\n      containers:\n      - name: ping\n        image: 0yukali0/ping:python\n        ports:\n        - containerPort: 5000\n"})}),"\n",(0,i.jsx)(n.h2,{id:"prometheus-service-monitor",children:"Prometheus Service Monitor"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  name: ping-monitor\n  namespace: grafana\n  labels:\n    release: grafana\nspec:\n  jobLabel: jobLabel\n  selector:\n    matchLabels:\n      app: ping\n  namespaceSelector:\n    matchNames:\n    - default\n  endpoints:\n  - path: /metrics\n    port: backend\n    scrapeTimeout: 30s\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u78ba\u8a8dservicemonitor\u751f\u6548",children:"\u78ba\u8a8dServiceMonitor\u751f\u6548"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Traget Rule",src:t(5656).A+"",width:"1903",height:"438"})}),"\n",(0,i.jsx)(n.h2,{id:"\u9810\u671f\u756b\u9762",children:"\u9810\u671f\u756b\u9762"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Prometheus",src:t(3752).A+"",width:"908",height:"896"})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3752:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ping-python-result-c6f15059feb29265e117b439e090bf30.png"},5656:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/ping-python-target-ff881a3ee3a9871cf1a561fade6e5c3a.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>p});var i=t(6540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function p(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);