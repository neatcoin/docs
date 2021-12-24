(self.webpackChunkneatcoin_docs=self.webpackChunkneatcoin_docs||[]).push([[594],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1181:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={title:"DNS resolver"},c={unversionedId:"nomo/resolver",id:"nomo/resolver",isDocsHomePage:!1,title:"DNS resolver",description:"To resolve Neatcoin domains in your browser, you can use one of the",source:"@site/docs/nomo/resolver.md",sourceDirName:"nomo",slug:"/nomo/resolver",permalink:"/docs/nomo/resolver",editUrl:"https://github.com/neatcoin/neatcoin.org/edit/master/docs/nomo/resolver.md",version:"current",frontMatter:{title:"DNS resolver"},sidebar:"docsSidebar",previous:{title:"Auction domains",permalink:"/docs/nomo/auction"},next:{title:"Atomic swap",permalink:"/docs/atomic-swap"}},l=[{value:"Firefox",id:"firefox",children:[]},{value:"Chrome",id:"chrome",children:[]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To resolve Neatcoin domains in your browser, you can use one of the\nhosted DNS resolver, via DNS-over-HTTPS. Neatcoin is a decentralized\nnetwork, so it is also possible to run the resolvers yourself."),(0,i.kt)("p",null,"The addresses for the hosted DNS resolvers are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Neatcoin mainnet"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"https://dns.neatcoin.org/dns-query")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Vodka testnet"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"https://vodka.dns.neatcoin.org/dns-query"))),(0,i.kt)("h2",{id:"firefox"},"Firefox"),(0,i.kt)("p",null,"Follow the official guide to ",(0,i.kt)("a",{parentName:"p",href:"https://support.mozilla.org/en-US/kb/firefox-dns-over-https#w_manually-enabling-and-disabling-dns-over-https"},"enable\nDNS-over-HTTPS"),'. Switch\nprovider to "custom", and enter the URL\n',(0,i.kt)("inlineCode",{parentName:"p"},"https://dns.neatcoin.org/dns-query"),". You are now able to resolve\nNeatcoin domain names."),(0,i.kt)("h2",{id:"chrome"},"Chrome"),(0,i.kt)("p",null,'Navigate to settings, select "privacy & security" > "security". Tick\n"use secure DNS", choose "custom" provider, and enter the URL\n',(0,i.kt)("inlineCode",{parentName:"p"},"https://dns.neatcoin.org/dns-query"),". You are now able to resolve\nNeatcoin domain names."))}p.isMDXComponent=!0}}]);