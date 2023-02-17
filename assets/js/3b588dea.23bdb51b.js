"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8578],{1666:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={title:"OneMax Problem",data:new Date("2021-05-02T16:41:47.000Z"),sidebar_position:2},i=void 0,o={unversionedId:"evolutionary computation/max-one problem",id:"evolutionary computation/max-one problem",title:"OneMax Problem",description:"OneMax\u95ee\u9898\u662f\u9057\u4f20\u7b97\u6cd5\u7684\u5165\u95e8\u95ee\u9898\uff1a\u5982\u4f55\u4f7f\u4e00\u6bb5\u957f\u5ea6\u56fa\u5b9a\u7684\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u6240\u6709\u4f4d\u7f6e\u4e0a\u6570\u5b57\u4e4b\u548c\u6700\u5927\u3002",source:"@site/Project/Coding/evolutionary computation/max-one problem.md",sourceDirName:"evolutionary computation",slug:"/evolutionary computation/max-one problem",permalink:"/Coding/evolutionary computation/max-one problem",draft:!1,tags:[],version:"current",lastUpdatedBy:"waleyGithub",lastUpdatedAt:1676356127,formattedLastUpdatedAt:"2023\u5e742\u670814\u65e5",sidebarPosition:2,frontMatter:{title:"OneMax Problem",data:"2021-05-02T16:41:47.000Z",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"An Introduction to Genetic Algorithms",permalink:"/Coding/evolutionary computation/Introduction"},next:{title:"FlappyBird",permalink:"/Coding/evolutionary computation/FlappyBird"}},p={},m=[{value:"\u5b9a\u4e49\u4e2a\u4f53",id:"\u5b9a\u4e49\u4e2a\u4f53",level:2},{value:"\u5b9a\u4e49\u9057\u4f20\u64cd\u4f5c",id:"\u5b9a\u4e49\u9057\u4f20\u64cd\u4f5c",level:2},{value:"\u4e3b\u4f53\u90e8\u5206",id:"\u4e3b\u4f53\u90e8\u5206",level:2},{value:"\u6700\u4f18\u4e2a\u4f53",id:"\u6700\u4f18\u4e2a\u4f53",level:2},{value:"\u8bb0\u5f55\u6570\u636e",id:"\u8bb0\u5f55\u6570\u636e",level:2},{value:"\u6570\u636e\u53ef\u89c6\u5316",id:"\u6570\u636e\u53ef\u89c6\u5316",level:2}],s={toc:m};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OneMax\u95ee\u9898\u662f\u9057\u4f20\u7b97\u6cd5\u7684\u5165\u95e8\u95ee\u9898\uff1a\u5982\u4f55\u4f7f\u4e00\u6bb5\u957f\u5ea6\u56fa\u5b9a\u7684\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u6240\u6709\u4f4d\u7f6e\u4e0a\u6570\u5b57\u4e4b\u548c\u6700\u5927\u3002"),"\n\u4e0b\u9762\u4ee5\u957f\u5ea610\u4e3a\u4f8b\u3002"),(0,r.kt)("h1",{id:"\u6240\u9700\u73af\u5883"},"\u6240\u9700\u73af\u5883"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/release/python-394/"},"Python 3.9")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://deap.readthedocs.io/en/master/"},"DEAP Library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jupyter.org"},"Juypter Notebook"))),(0,r.kt)("h1",{id:"\u4ee3\u7801"},"\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import random\nfrom deap import algorithms, base, creator, tools\n")),(0,r.kt)("h2",{id:"\u5b9a\u4e49\u4e2a\u4f53"},"\u5b9a\u4e49\u4e2a\u4f53"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'creator.create("FitnessMax", base.Fitness, weights=(1.0,))\ncreator.create("Individual", list, fitness=creator.FitnessMax)\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"toolbox = base.Toolbox()\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'toolbox.register("attr_bool", random.randint, 0, 1)\ntoolbox.register("individual", tools.initRepeat, creator.Individual, toolbox.attr_bool, n=100)\ntoolbox.register("population", tools.initRepeat, list, toolbox.individual)\n')),(0,r.kt)("h2",{id:"\u5b9a\u4e49\u9057\u4f20\u64cd\u4f5c"},"\u5b9a\u4e49\u9057\u4f20\u64cd\u4f5c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def evalOneMax(individual): \n    return (sum(individual),)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'toolbox.register("evaluate", evalOneMax)\ntoolbox.register("select", tools.selTournament, tournsize=3)\n\ntoolbox.register("mate", tools.cxUniform, indpb=0.1)\ntoolbox.register("mutate", tools.mutFlipBit, indpb=0.01)\n\nlogbook = tools.Logbook()\n')),(0,r.kt)("h2",{id:"\u4e3b\u4f53\u90e8\u5206"},"\u4e3b\u4f53\u90e8\u5206"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'pop = toolbox.population(n=300)\n\nfitnesses = list(map(toolbox.evaluate, pop)) \nfor ind, fit in zip(pop, fitnesses):\n    ind.fitness.values = fit\n\nNGEN = 50\n\nfor g in range(NGEN):\n   print("-- Generation %i --" % g)\n   \n   offspring = toolbox.select(pop, len(pop))\n   offspring = list(map(toolbox.clone, offspring))\n   \n   for child1, child2 in zip(offspring[::2], offspring[1::2]): \n       toolbox.mate(child1, child2)\n       del child1.fitness.values\n       del child2.fitness.values\n       \n   for mutant in offspring: \n       toolbox.mutate(mutant) \n       del mutant.fitness.values\n       \n   invalid_ind = [ind for ind in offspring if not ind.fitness.valid] \n   fitnesses = map(toolbox.evaluate, invalid_ind)\n   for ind, fit in zip(invalid_ind, fitnesses):\n       ind.fitness.values = fit\n       \n   pop[:] = offspring\n')),(0,r.kt)("h2",{id:"\u6700\u4f18\u4e2a\u4f53"},"\u6700\u4f18\u4e2a\u4f53"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'best_ind = tools.selBest(pop, 1)[0]\nprint("Best individual is %s" % (best_ind)) \nprint("With fitness %s" % (best_ind.fitness.values))\n')),(0,r.kt)("p",null,"Best individual is ","[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]"," With fitness 100.0"),(0,r.kt)("h2",{id:"\u8bb0\u5f55\u6570\u636e"},"\u8bb0\u5f55\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"stats = tools.Statistics(key=lambda ind: ind.fitness.values)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import numpy \nstats.register("avg", numpy.mean) \nstats.register("std", numpy.std) \nstats.register("min", numpy.min) \nstats.register("max", numpy.max)\n')),(0,r.kt)("p",null,"{'avg': 98.19, 'std': 1.2438783434618248, 'min': 93.0, 'max': 100.0}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"record = stats.compile(pop)\nprint(record)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"logbook = tools.Logbook()\nlogbook.record(gen=0, evals=30, **record)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'logbook.header = "gen", "avg", "evals", "std", "min", "max"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"print(logbook)\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"gen"),(0,r.kt)("th",{parentName:"tr",align:null},"avg"),(0,r.kt)("th",{parentName:"tr",align:null},"evals"),(0,r.kt)("th",{parentName:"tr",align:null},"std"),(0,r.kt)("th",{parentName:"tr",align:null},"min"),(0,r.kt)("th",{parentName:"tr",align:null},"max"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"98.19"),(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"1.24388"),(0,r.kt)("td",{parentName:"tr",align:null},"93"),(0,r.kt)("td",{parentName:"tr",align:null},"100")))),(0,r.kt)("h2",{id:"\u6570\u636e\u53ef\u89c6\u5316"},"\u6570\u636e\u53ef\u89c6\u5316"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import matplotlib.pyplot as plt \n%matplotlib inline\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'gen = logbook.select("gen")\navgs = logbook.select("avg")\nstds = logbook.select("std")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"plt.rc('axes', labelsize=14)\nplt.rc('xtick', labelsize=14)\nplt.rc('ytick', labelsize=14)\nplt.rc('legend', fontsize=14)\nfig, ax1 = plt.subplots()\nline1 = ax1.errorbar(gen, avgs, yerr=stds, errorevery=2) \nax1.set_xlabel(\"Generation\")\nax1.set_ylabel(\"Mean Fitness\")\n")),(0,r.kt)("p",null,"Text(0, 0.5, 'Mean Fitness')"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"oneMax",src:n(6142).Z,width:"405",height:"271"})))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),g=r,u=c["".concat(p,".").concat(g)]||c[g]||d[g]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},6142:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);