"use strict";(self.webpackChunk_0_yukali_0_github_io=self.webpackChunk_0_yukali_0_github_io||[]).push([[8952],{2986:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var t=n(4848),i=n(8453);const r={id:"mllib-linear",title:"linear"},l=void 0,o={id:"hadoop-native/spark/spark_mllib/mllib-linear",title:"linear",description:"SVM",source:"@site/docs/hadoop-native/spark/spark_mllib/mllib-linear.md",sourceDirName:"hadoop-native/spark/spark_mllib",slug:"/hadoop-native/spark/spark_mllib/mllib-linear",permalink:"/docs/hadoop-native/spark/spark_mllib/mllib-linear",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hadoop-native/spark/spark_mllib/mllib-linear.md",tags:[],version:"current",frontMatter:{id:"mllib-linear",title:"linear"}},s={},d=[{value:"SVM",id:"svm",level:2},{value:"LogisticRegression",id:"logisticregression",level:2}];function p(e){const a={code:"code",h2:"h2",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"svm",children:"SVM"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'from pyspark.mllib.classification import SVMWithSGD, SVMModel\nfrom pyspark.mllib.regression import LabeledPoint\n\n# Load and parse the data\ndef parsePoint(line):\n    values = [float(x) for x in line.split(\' \')]\n    return LabeledPoint(values[0], values[1:])\n\ndata = sc.textFile("data/mllib/sample_svm_data.txt")\nparsedData = data.map(parsePoint)\n\n# Build the model\nmodel = SVMWithSGD.train(parsedData, iterations=100)\n\n# Evaluating the model on training data\nlabelsAndPreds = parsedData.map(lambda p: (p.label, model.predict(p.features)))\ntrainErr = labelsAndPreds.filter(lambda lp: lp[0] != lp[1]).count() / float(parsedData.count())\nprint("Training Error = " + str(trainErr))\n\n# Save and load model\nmodel.save(sc, "target/tmp/pythonSVMWithSGDModel")\nsameModel = SVMModel.load(sc, "target/tmp/pythonSVMWithSGDModel")\n'})}),"\n",(0,t.jsx)(a.h2,{id:"logisticregression",children:"LogisticRegression"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-python",children:'from pyspark.mllib.classification import LogisticRegressionWithLBFGS, LogisticRegressionModel\nfrom pyspark.mllib.regression import LabeledPoint\n\n\n# Build the model\nmodel = LogisticRegressionWithLBFGS.train(parsedData)\n\n# Evaluating the model on training data\nlabelsAndPreds = parsedData.map(lambda p: (p.label, model.predict(p.features)))\ntrainErr = labelsAndPreds.filter(lambda lp: lp[0] != lp[1]).count() / float(parsedData.count())\nprint("Training Error = " + str(trainErr))\n\n# Save and load model\nmodel.save(sc, "target/tmp/pythonLogisticRegressionWithLBFGSModel")\nsameModel = LogisticRegressionModel.load(sc, "target/tmp/pythonLogisticRegressionWithLBFGSModel")\n'})})]})}function c(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>l,x:()=>o});var t=n(6540);const i={},r=t.createContext(i);function l(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);