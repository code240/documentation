"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[814],{9280:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=s(4848),t=s(8453);const l={sidebar_position:4},o="Node Js installation using NVM",i={id:"aws- amazon web server/node-js-installation",title:"Node Js installation using NVM",description:"Lets see how can we setup nodejs using nvm on our server (Ubuntu 22.04).",source:"@site/docs/aws- amazon web server/node-js-installation.md",sourceDirName:"aws- amazon web server",slug:"/aws- amazon web server/node-js-installation",permalink:"/docs/aws- amazon web server/node-js-installation",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Setup laravel project",permalink:"/docs/aws- amazon web server/laravel-setup"},next:{title:"How to setup nodejs project?",permalink:"/docs/aws- amazon web server/node-js-project-setup"}},r={},d=[{value:"Step 1: Update Package Repository",id:"step-1-update-package-repository",level:3},{value:"Install Prerequisites",id:"install-prerequisites",level:3},{value:"Download and Install NVM on Ubuntu",id:"download-and-install-nvm-on-ubuntu",level:3},{value:"Verify NVM Installation on Ubuntu",id:"verify-nvm-installation-on-ubuntu",level:3},{value:"Install Node.js Using NVM",id:"install-nodejs-using-nvm",level:3},{value:"Switch Between Node.js Versions",id:"switch-between-nodejs-versions",level:3},{value:"Install NPM :",id:"install-npm-",level:3}];function c(n){const e={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"node-js-installation-using-nvm",children:"Node Js installation using NVM"}),"\n",(0,a.jsx)(e.p,{children:"Lets see how can we setup nodejs using nvm on our server (Ubuntu 22.04)."}),"\n",(0,a.jsx)(e.h3,{id:"step-1-update-package-repository",children:"Step 1: Update Package Repository"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"sudo apt-get update\n"})}),"\n",(0,a.jsx)(e.h3,{id:"install-prerequisites",children:"Install Prerequisites"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"sudo apt install curl\n"})}),"\n",(0,a.jsx)(e.h3,{id:"download-and-install-nvm-on-ubuntu",children:"Download and Install NVM on Ubuntu"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\r\n\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'export NVM_DIR="$HOME/.nvm"\r\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\r\n[ -s "$NVM_DIR/bash_completion" ] && \\. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion\n'})}),"\n",(0,a.jsx)(e.h3,{id:"verify-nvm-installation-on-ubuntu",children:"Verify NVM Installation on Ubuntu"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"nvm --version\n"})}),"\n",(0,a.jsx)(e.h3,{id:"install-nodejs-using-nvm",children:"Install Node.js Using NVM"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"nvm install --lts\r\nor \r\nnvm install version\r\n- nvm install 18\n"})}),"\n",(0,a.jsx)(e.h3,{id:"switch-between-nodejs-versions",children:"Switch Between Node.js Versions"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"nvm ls\r\nnvm use <version>\r\nnvm use 18\n"})}),"\n",(0,a.jsx)(e.h3,{id:"install-npm-",children:"Install NPM :"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"sudo apt-get install npm\n"})})]})}function u(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(c,{...n})}):c(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>i});var a=s(6540);const t={},l=a.createContext(t);function o(n){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),a.createElement(l.Provider,{value:e},n.children)}}}]);