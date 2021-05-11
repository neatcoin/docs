(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(86)),o={id:"mimblewimble",title:"Mimblewimble Privacy Transaction"},l={unversionedId:"mimblewimble",id:"mimblewimble",isDocsHomePage:!1,title:"Mimblewimble Privacy Transaction",description:"This article describes specific aspects of how Mimblewimble might be incoperated in Neatcoin.",source:"@site/docs/mimblewimble.md",slug:"/mimblewimble",permalink:"/docs/mimblewimble",editUrl:"https://github.com/neatcoin/neatcoin.org/edit/master/website/docs/mimblewimble.md",version:"current",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"Nomo DNS",permalink:"/docs/nomo"}},s=[{value:"Status",id:"status",children:[]},{value:"Crypto library",id:"crypto-library",children:[]},{value:"Mimblewimble",id:"mimblewimble",children:[]},{value:"Proof-of-stake",id:"proof-of-stake",children:[]},{value:"Slashing",id:"slashing",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This article describes specific aspects of how Mimblewimble might be incoperated in Neatcoin."),Object(i.b)("h2",{id:"status"},"Status"),Object(i.b)("p",null,"Things on this page has not yet been implemented."),Object(i.b)("h2",{id:"crypto-library"},"Crypto library"),Object(i.b)("p",null,"The project does not aim at writing any base-level crypto\nlibraries. We use whatever is available at hands. This means:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Curve25519 for all Mimblewimble transaction handlings."),Object(i.b)("li",{parentName:"ul"},"Bls12_381 for proof-of-stake pairing operations.")),Object(i.b)("p",null,"Readers may notice that we do not use the same crypto as in Grin\n(which uses secp256k1). Thanks to the dalek and schnorrkel project in\nRust, curve25519 has already got sufficient support for running\noperations needed for Mimblewimble."),Object(i.b)("h2",{id:"mimblewimble"},"Mimblewimble"),Object(i.b)("p",null,"The transaction format and all mimblewimble operations will mostly\nresemble what looks like in Grin."),Object(i.b)("h2",{id:"proof-of-stake"},"Proof-of-stake"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"Coinbase")," output and kernel feature is removed. In replacement,\nwe introduce two new features ",Object(i.b)("inlineCode",{parentName:"p"},"Stake")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Reward"),"."),Object(i.b)("p",null,"All proof-of-stake data structures live in a place outside of\nMimblewimble. We can think of them as a ",Object(i.b)("strong",{parentName:"p"},"validator set")," with a ",Object(i.b)("em",{parentName:"p"},"BLS\npublic key")," and ",Object(i.b)("em",{parentName:"p"},"current rewards"),"."),Object(i.b)("p",null,"Both the ",Object(i.b)("inlineCode",{parentName:"p"},"Stake")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Reward")," kernel feature will have a reference to\na ",Object(i.b)("em",{parentName:"p"},"BLS public key"),"."),Object(i.b)("p",null,"If an output contains the ",Object(i.b)("inlineCode",{parentName:"p"},"Stake")," feature, it initiates an intention\nto validate. It reveals the staker's BLS public key, but does not\nreveal the amount. In addition to the normal rangeproof to make sure\nthe amount is a non-negative value, an additional rangeproof is\ncarried out to make sure the amount is greater than ",Object(i.b)("em",{parentName:"p"},"64\nNEAT"),". Otherwise, the block is considered invalid."),Object(i.b)("p",null,"All ",Object(i.b)("inlineCode",{parentName:"p"},"Stake")," outputs are immediately forbidden to be used as inputs. At\nthe end of the block, their validator keys are added to the\nproof-of-stake validator set. We use the same strategy as in eth2 to\ngive all validators the same voting rights."),Object(i.b)("p",null,"From this point on, the proof-of-stake functions exactly the same as\nEth2's beacon chain proof-of-stake specifications."),Object(i.b)("p",null,"The proof-of-stake algorithm will accumate rewards. Upon reaching a\nthreshold, validators can send ",Object(i.b)("inlineCode",{parentName:"p"},"Reward")," inputs on the Mimblewimble\nside to mint those coins to be usable."),Object(i.b)("p",null,"The proof-of-stake side has specific transactions for sending\nattestations and handling slashing reportings. Those transactions are\nnot in any way related to Mimblewimble transactions."),Object(i.b)("p",null,"Either voluntarily or forced, a validator can exit staking. In this\ncase, the validator set state maintains the data until the exit\nperiod. After that, ",Object(i.b)("inlineCode",{parentName:"p"},"Stake"),"-featured outputs are re-allowed to be used\nas other transaction's inputs."),Object(i.b)("h2",{id:"slashing"},"Slashing"),Object(i.b)("p",null,"A validator can be slashed if it malfunctions. In this case, rewards\ncan go negative. The ",Object(i.b)("inlineCode",{parentName:"p"},"Stake"),"-featured outputs will continue to be\nforbidden to be used even when the validator exits."))}b.isMDXComponent=!0},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return n?r.a.createElement(d,l(l({ref:t},c),{},{components:n})):r.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);