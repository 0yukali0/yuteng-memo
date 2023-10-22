"use strict";(self.webpackChunk_0yukali0=self.webpackChunk_0yukali0||[]).push([[109],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>f});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),d=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=d(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8524:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=n(7462),a=(n(7294),n(3905));const o={id:"supported_framwork",title:"Ray Train\u652f\u63f4\u4e4bframework"},i="Ray train\u652f\u6301\u4e4bframerwork",l={unversionedId:"ray/train/supported_framwork",id:"ray/train/supported_framwork",title:"Ray Train\u652f\u63f4\u4e4bframework",description:"Pytorch",source:"@site/docs/ray/train/train_framework.md",sourceDirName:"ray/train",slug:"/ray/train/supported_framwork",permalink:"/docs/ray/train/supported_framwork",draft:!1,editUrl:"https://github.com/0yukali0/0yukali0.github.io/docs/ray/train/train_framework.md",tags:[],version:"current",frontMatter:{id:"supported_framwork",title:"Ray Train\u652f\u63f4\u4e4bframework"},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7d39",permalink:"/docs/ray/train/"},next:{title:"Ray Train\u5927\u7db1",permalink:"/docs/ray/train/overview"}},s={},d=[{value:"Pytorch",id:"pytorch",level:2},{value:"\u5b58\u53d6ray model\u4e4b\u8a13\u7df4\u8cc7\u8a0a",id:"\u5b58\u53d6ray-model\u4e4b\u8a13\u7df4\u8cc7\u8a0a",level:3},{value:"Pytorch lightning",id:"pytorch-lightning",level:2},{value:"Hugging Face Transformers",id:"hugging-face-transformers",level:2},{value:"Hugging Face Accelerate",id:"hugging-face-accelerate",level:2},{value:"DeepSpeed",id:"deepspeed",level:2},{value:"Tensorflow &amp;  Keras",id:"tensorflow---keras",level:2},{value:"XGBoost &amp; LightGBM",id:"xgboost--lightgbm",level:2},{value:"Horovod",id:"horovod",level:2}],c={toc:d},p="wrapper";function m(e){let{components:r,...n}=e;return(0,a.kt)(p,(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ray-train\u652f\u6301\u4e4bframerwork"},"Ray train\u652f\u6301\u4e4bframerwork"),(0,a.kt)("h2",{id:"pytorch"},"Pytorch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import tempfile\n\nfrom torchvision.models import resnet18\nfrom torchvision.dataset import FashionMNIST\nfrom torchvision.transform import toTensor, Normalize, Compose\n\nimport torch\nfrom torch.utils.data import DataLoader\nfrom torch.optim import Adam\nfrom torch.nn import CrossEntropyLoss\n\n# Model\nfunc build_model(distributed_model=None):\n    model = restnet18(num_classes=10)\n    model.conv1 = torch.nn.Conv2d( 1, 64, kernel_size(7,7), stride=(2,2), padding=(3,3), bias=False)\n    criterion = CrossEntropyLoss()\n    if distributed_model is not None:\n        model = distributed_model(model)\n    optimizer = Adam(model.parameters(), lr=0.001)\n    return model, criterion, optimizer\n\n\n# Data\nfunc build_dataloader(distributed_loader=None):\n    transform = Compose([ToTensor(), Normalize((0.5,), (0.5,))])\n    train_data = FashionMNIST(\'./data\', train=True, download=True, transform=transform)\n    train_loader = DataLoader(train_data, batch_size=128, shuffle=True)\n    if distributed_loader is not None:\n        train_loader = distributed_loader(train_loader)\n    return train_loader\n\n# Training\nfunc training(get_model=None, get_data=None, distributed_report=None, checkpoint_func=None)\n    model, criterion, optimizer = build_model()\n    train_loader = build_dataloader()\n\n    if get_model is not None:\n        model, criterion, optimizer = get_model\n    if get_data is not None:\n        train_loader = get_data()\n\n    for epoch in range(10):\n        for images, labels in train_loeader:\n            ouputs = model(images)\n            loss = criterion(outputs, labels)\n            optimizer.zero_grad()\n            loss.backward()\n            optimizer.step()\n        # Save nth epoch result\n        checkpoint_dir = tempfile.gettempdir()\n        checkpoint_path = checkpoint_dir + "/model.checkpoint"\n        torch.save(model.state_dict(), checkpoint_path)\n        if distributed_report is not None and checkpoint_func is not None:\n            distributed_report(\n                {"loss": loss.item()},\n                checkpoint=checkpoint_func(checkpoint_dir)\n            )\n\nfrom ray.train.torch import TorchTrainer\nfrom ray.train import ScalingConfig, Checkpoint\n\n# Traning With Ray\nfunc train_func(config):\n    training(\n    build_model(ray.train.torch.prepare_model),\n        build_dataloader(ray.train.torch.prepare_data_loader),\n        ray_train.report,\n        Checkpoint.from_directory\n    )\n\ntrainer = TorchTrainer(\n    train_func,\n    scaling_config=ScalingConfig(num_worker=2, use_gpu=False)\n)\nresult = train.fit()\n')),(0,a.kt)("h3",{id:"\u5b58\u53d6ray-model\u4e4b\u8a13\u7df4\u8cc7\u8a0a"},"\u5b58\u53d6ray model\u4e4b\u8a13\u7df4\u8cc7\u8a0a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c3\u6578"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7bc4\u4f8b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u529f\u80fd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metrics"),(0,a.kt)("td",{parentName:"tr",align:null},"result.metrics"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a13\u7df4\u6307\u6a19\u56de\u5831")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"checkpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"result.checkpoint"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6700\u65b0\u4e00\u6b21\u7684\u8a13\u7df4\u56de\u5831")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"path"),(0,a.kt)("td",{parentName:"tr",align:null},"result.path"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5b58log\u7684\u8def\u5f91")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"error"),(0,a.kt)("td",{parentName:"tr",align:null},"result.error"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8a13\u7df4\u5931\u6557\u8cc7\u8a0a\u56de\u5831")))),(0,a.kt)("h2",{id:"pytorch-lightning"},"Pytorch lightning"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import torch\nimport torch.utils.data import DataLoader\nfrom torch.nn import CrossEntropyLoss\nfrom torch.optim import Adam\n\nimport pytorch_lightning as pl\n\nfrom torchvision.models import resnet18\nfrom torchvision.datasets import FashionMNIST\nfrom torchvision.transforms import ToTensor, Normalize, Compose\n\nclass ImageClassifier(pl.LightningModule):\n    def __init__(self):\n        super(ImageClassifier, self).__init__()\n    self.model = resnet18(num_classes=10)\n    self.model.conv1 = torch.nn.Conv2d(1, 64, kernel_size=(7,7), stride=(2,2), padding=(3,3), bias=False)\n    self.criterion = CrossEntropyLoss())\n\n    def forward(self, x):\n    return self.model(x)\n\n    def train_step(self, batch, batch_idx):\n    x, y = batch\n    outputs = self.forward(x)\n    loss = self.criterion(outputs, y)\n    self.log("loss", loss, on_step=True, prog_bar=True)\n    return loss\n\n    def configure_optimizer(self):\n    return Adam(self.model.parameters(), lr=0.001)\n\nfunc build_dataloader(distributed_loader=None):\n    transform = Compose([ToTensor(), Normalize((0.5,), (0.5,))])\n    train_data = FashionMNIST(\'./data\', train=True, download=True, transform=transform)\n    train_loader = DataLoader(train_data, batch_size=128, shuffle=True)\n    if distributed_loader is not None:\n        train_loader = distributed_loader(train_loader)\n    return train_loader\n\ndef train_func(config):\n    model = ImageClassifier()\n\n    # Add some parameters in pl.Trainer\n    # Parameters include devices, accelerator, strategy, plugins and callbacks\n    trainer = pl.Trainer(\n        max_epochs = 10,\n    devices="auto",\n    accelerator="auto",\n    strategy=ray.train.lightning.RayDDPStrategy(),\n    plugins=[ray.train.lightning.RayLightningEnvironment()],\n    callbacks=[ray.train.lightning.RayTrainRportCallback()],\n    )\n\n    trainer = ray.train.lightning.prepare_trainer(trainer)\n    trainer.fit(model, train_dataloaders=build_dataloader())\n\ntrainer =TorchTrainer(\n        train_func,\n    ScalingConfig(num_worker=2, use_gpu=True),\n    )\nresult = trainer.fit()\n\n\n')),(0,a.kt)("h2",{id:"hugging-face-transformers"},"Hugging Face Transformers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import numpy as np\nimport evaluate\nfrom datasets import load_dataset\nfrom transformers import (\n    Trainer,\n    TrainingArguments,\n    AutoTokenizer,\n    AutoModelForSequenceClassification,\n)\n\n# Encapsulate the data processing and prepare the basic huggingface model.\ndef general_train():\n    dataset = load_dataset("yelp_review_full")\n    tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")\n\n    def tokenize_function(examples):\n        return tokenizer(examples["text"], padding="max_length", truncation=True)\n\n    small_train_dataset = dataset["train"].select(range(1000)).map(\n        tokenize_function,\n        batch=True,\n    )\n    small_eval_dataset = dataset["test"].select(range(1000)).map(\n        tokenize_function,\n        batch=True,\n    )\n\n    # Model\n    model = AutoModelForSequenceClassification.from_pretrained(\n        "bert-base-cased",\n        num_labels=5\n    )\n\n    # Metrics\n    metric = evaluate.load("accuracy")\n\n    def compute_metrics(eval_pred):\n        logits, labels = eval_pred\n        predications = np.argmax(logits, axis=-1)\n        return metric.compute(\n            predictions=predictions,\n            references=labels\n        )\n\n    training_args = TrainingArguments(\n        output_dir="test_trainer",\n        evaluation_strategy="epoch",\n        report_to="none"\n    )\n\n    trainer = Trainer(\n        model=model,\n        args=trainging_args,\n        train_dataset=small_train_dataset,\n        eval_dataset=small_eval_dataset,\n        compute_metrics=compute_metrics,\n    )\n\nimport ray.train.huggingface.transformers\nfrom ray.train. import ScalingConfig\nfrom ray.train.torch import TorchTrainer\n\n# Encapsulate the training and the evaluation after the model fits the ray config.\ndef train_func(config):\n    trainer = general_train()\n    trainer.add_callback(\n        ray.train.huggingface..transformers.RayTrainReportCallback(),\n    )\n    trainer = ray.train.huggingface.transformers.prepare_trainer(trainer)\n\n    trainer.train()\n\nray_trainer = TorchTrainer(\n    train_func,\n    scaling_config=ScalingConfig(\n        num_worker=4,\n        use_gpu=True,\n    )\n)\nray_trainer.fit()\n')),(0,a.kt)("h2",{id:"hugging-face-accelerate"},"Hugging Face Accelerate"),(0,a.kt)("h2",{id:"deepspeed"},"DeepSpeed"),(0,a.kt)("h2",{id:"tensorflow---keras"},"Tensorflow &  Keras"),(0,a.kt)("h2",{id:"xgboost--lightgbm"},"XGBoost & LightGBM"),(0,a.kt)("h2",{id:"horovod"},"Horovod"))}m.isMDXComponent=!0}}]);