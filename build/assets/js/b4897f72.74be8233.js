"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[880],{6222:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=t(4848),i=t(8453);const s={sidebar_position:5},o="How to setup reactjs project?",a={id:"aws- amazon web server/react-js-project-setup",title:"How to setup reactjs project?",description:"Lets see how can we setup reactjs project on our server using nginx (Ubuntu 22.04).",source:"@site/docs/aws- amazon web server/react-js-project-setup.md",sourceDirName:"aws- amazon web server",slug:"/aws- amazon web server/react-js-project-setup",permalink:"/docs/aws- amazon web server/react-js-project-setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"How to setup nodejs project?",permalink:"/docs/aws- amazon web server/node-js-project-setup"},next:{title:"How to setup mysql database on server?",permalink:"/docs/aws- amazon web server/mysql-installation"}},c={},l=[{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Create build",id:"create-build",level:3},{value:"Create a new Nginx configuration file for your subdomain",id:"create-a-new-nginx-configuration-file-for-your-subdomain",level:3},{value:"Add the following configuration",id:"add-the-following-configuration",level:3},{value:"Enable the new configuration by creating a symbolic link:",id:"enable-the-new-configuration-by-creating-a-symbolic-link",level:3},{value:"Test the Nginx configuration:",id:"test-the-nginx-configuration",level:3},{value:"Restart Nginx to apply the changes",id:"restart-nginx-to-apply-the-changes",level:3},{value:"Configure DNS",id:"configure-dns",level:3}];function d(e){const n={code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"how-to-setup-reactjs-project",children:"How to setup reactjs project?"}),"\n",(0,r.jsx)(n.p,{children:"Lets see how can we setup reactjs project on our server using nginx (Ubuntu 22.04)."}),"\n",(0,r.jsx)(n.h3,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo npm install \n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-build",children:"Create build"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now configure build path to the nginx configuration."}),"\n",(0,r.jsx)(n.h1,{id:"configure-nginx",children:"Configure Nginx"}),"\n",(0,r.jsx)(n.h3,{id:"create-a-new-nginx-configuration-file-for-your-subdomain",children:"Create a new Nginx configuration file for your subdomain"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nano /etc/nginx/sites-available/test-react.webwings.tech\n"})}),"\n",(0,r.jsx)(n.h3,{id:"add-the-following-configuration",children:"Add the following configuration"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"server {\r\n    listen 80;\r\n    server_name test-react.webwings.tech; #  Replace it with your own domain \r\n\r\n    root /var/www/html/projects/react/build; # Replace with the path to your build directory\r\n    index index.html;\r\n\r\n    location / {\r\n        try_files $uri /index.html;\r\n    }\r\n\r\n    error_log /var/log/nginx/react-app.error.log;\r\n    access_log /var/log/nginx/react-app.access.log;\r\n}\r\n\n"})}),"\n",(0,r.jsx)(n.h3,{id:"enable-the-new-configuration-by-creating-a-symbolic-link",children:"Enable the new configuration by creating a symbolic link:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ln -s /etc/nginx/sites-available/test-react.webwings.tech /etc/nginx/sites-enabled/\n"})}),"\n",(0,r.jsx)(n.h3,{id:"test-the-nginx-configuration",children:"Test the Nginx configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo nginx -t\n"})}),"\n",(0,r.jsx)(n.h3,{id:"restart-nginx-to-apply-the-changes",children:"Restart Nginx to apply the changes"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo systemctl restart nginx\n"})}),"\n",(0,r.jsx)(n.h3,{id:"configure-dns",children:"Configure DNS"}),"\n",(0,r.jsx)(n.p,{children:"Ensure that the DNS settings for test-react.webwings.tech are correctly configured to point to the IP address of your server."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var r=t(6540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);