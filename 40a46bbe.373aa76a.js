(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{117:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),u=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,m=s["".concat(c,".").concat(b)]||s[b]||p[b]||a;return n?o.a.createElement(m,i(i({ref:t},d),{},{components:n})):o.a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<a;d++)c[d]=n[d];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),a=(n(0),n(117)),c={title:"Create your own backend",sidebar_label:"Own backend"},i={unversionedId:"dev-doctor/backend/own",id:"dev-doctor/backend/own",isDocsHomePage:!1,title:"Create your own backend",description:"1. Create an account on your hosting platform",source:"@site/docs/dev-doctor/backend/own.md",slug:"/dev-doctor/backend/own",permalink:"/docs/dev-doctor/backend/own",editUrl:"https://github.com/LinwoodCloud/website/edit/master/docs/dev-doctor/backend/own.md",version:"current",sidebar_label:"Own backend",sidebar:"dev-doctor",previous:{title:"Backend",permalink:"/docs/dev-doctor/backend/overview"},next:{title:"Backend Collection",permalink:"/docs/dev-doctor/backend/collection"}},l=[],d={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Create an account on your hosting platform"),Object(a.b)("li",{parentName:"ol"},"Download the template or click on Use template: ",Object(a.b)("a",{parentName:"li",href:"https://github.com/LinwoodCloud/dev-doctor-backend"},"https://github.com/LinwoodCloud/dev-doctor-backend"),"."),Object(a.b)("li",{parentName:"ol"},"Change the url to your backend in the index.html"),Object(a.b)("li",{parentName:"ol"},"Create a courses folder and copy the config.yml from the example course. The properties should be self explained."),Object(a.b)("li",{parentName:"ol"},"Change the config.yml to your preferences. Add all courses to your folders. The properties should be self explained."),Object(a.b)("li",{parentName:"ol"},"Publish this site with github pages or other hosting solution. Static site hosting is also supported. The domain should be the same as the domain in the index.html."),Object(a.b)("li",{parentName:"ol"},"On github pages, the default domain on organsiation is ",Object(a.b)("a",{parentName:"li",href:"https://ORGANISATION.github.io/REPOSITORY"},"https://ORGANISATION.github.io/REPOSITORY")," or on users is ",Object(a.b)("a",{parentName:"li",href:"https://USER.github.io/REPOSITORY"},"https://USER.github.io/REPOSITORY")),Object(a.b)("li",{parentName:"ol"},"Test your site by opening your website.")))}u.isMDXComponent=!0}}]);