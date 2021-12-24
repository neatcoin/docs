(self.webpackChunkneatcoin_docs=self.webpackChunkneatcoin_docs||[]).push([[1],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,h=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8920:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],l={id:"democracy",title:"Democracy"},s={unversionedId:"democracy",id:"democracy",isDocsHomePage:!1,title:"Democracy",description:"This Neatcoin Laws article describes the Neatcoin democracy module.",source:"@site/laws/democracy.md",sourceDirName:".",slug:"/democracy",permalink:"/laws/democracy",editUrl:"https://github.com/neatcoin/neatcoin.org/edit/master/laws/democracy.md",version:"current",frontMatter:{id:"democracy",title:"Democracy"},sidebar:"lawsSidebar",previous:{title:"Overview",permalink:"/laws/"}},c=[{value:"Governance bodies",id:"governance-bodies",children:[{value:"Users",id:"users",children:[]},{value:"Council",id:"council",children:[]},{value:"Technical Committee",id:"technical-committee",children:[]}]},{value:"Governance matters",id:"governance-matters",children:[{value:"Users",id:"users-1",children:[]},{value:"Council",id:"council-1",children:[]},{value:"Technical Committee",id:"technical-committee-1",children:[]}]},{value:"Voting rules",id:"voting-rules",children:[{value:"Referendums",id:"referendums",children:[]},{value:"Council Motions",id:"council-motions",children:[]},{value:"Technical Committee Motions",id:"technical-committee-motions",children:[]}]}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This Neatcoin Laws article describes the Neatcoin democracy module."),(0,o.kt)("h2",{id:"governance-bodies"},"Governance bodies"),(0,o.kt)("p",null,"In Neatcoin, three different governance bodies exist."),(0,o.kt)("h3",{id:"users"},"Users"),(0,o.kt)("p",null,"Anyone who owns Neatcoin automatically becomes a Neatcoin User. The right is\nautomatic, and instant. The moment one owns Neatcoin, one can start to\nparticipate in Neatcoin governance matters. The other two governance bodies,\ncouncil and technical committee, are directly or indirectly elected by Neatcoin\nUsers."),(0,o.kt)("p",null,"The voting right of a Neatcoin User depends on the amount of coins the User\nowns. Once a User ceases to own Neatcoin, it ceases to be a Neatcoin User."),(0,o.kt)("h3",{id:"council"},"Council"),(0,o.kt)("p",null,"Neatcoin Council consists of 7 seats (Prime Council Members and Council\nMembers), 30 Runners Up, and a number of Candidates."),(0,o.kt)("p",null,"Council Members have equal voting rights. Runners Up and Candidates do not have\nvoting rights."),(0,o.kt)("p",null,"Council Members serve for one Council Term. A Council Term lasts 24 hours. Users\n(including Council Members, Runners Up and Candidates) can choose to vote on\nCouncil Members, Runners Up and Candidates by locking coins. Each new Council\nTerm, an election is held based on the Phragmen election algorithm. The first 7\nelected becomes Council Members. The next 30 elected becomes Runners Up. Anyone\nelected below this or have zero backing are removed. The first elected also gets\nthe Prime Council Member status."),(0,o.kt)("p",null,"All Neatcoin Users can choose to become a Candidate at any time."),(0,o.kt)("h3",{id:"technical-committee"},"Technical Committee"),(0,o.kt)("p",null,"Neatcoin Technical Committee consists of an arbitrary number of seats (Prime\nTechnical Committee Member and Technical Committee Members)."),(0,o.kt)("p",null,"Prime Technical Committee Member and Technical Comittee Members are appointed\nthrough Referendums."),(0,o.kt)("h2",{id:"governance-matters"},"Governance matters"),(0,o.kt)("p",null,"Users, Council and Technical Committee decide on different governance matters."),(0,o.kt)("h3",{id:"users-1"},"Users"),(0,o.kt)("p",null,"Users, through Referendum, can decide on all governance matters. In particular,\nanything that is considered to be a Root Matter can only be decided directly by\nusers. Those Root Matters include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Conducting a runtime upgrade."),(0,o.kt)("li",{parentName:"ul"},"Blacklist a proposal from being tabled again."),(0,o.kt)("li",{parentName:"ul"},"Appoint Prime Technical Committee Member and Technical Committee Members."),(0,o.kt)("li",{parentName:"ul"},"Appoint identity registrar."),(0,o.kt)("li",{parentName:"ul"},"Decide on inflation rate."),(0,o.kt)("li",{parentName:"ul"},"Decide on staking validator count."),(0,o.kt)("li",{parentName:"ul"},"Other Root Matters.")),(0,o.kt)("h3",{id:"council-1"},"Council"),(0,o.kt)("p",null,"Council Members, through Council Motions, can decide on a limited number of\ngovernance matters. Those include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Table an external super-majority, simple-majority and simple-default\nReferendum for Users to vote on."),(0,o.kt)("li",{parentName:"ul"},"Approve and disapprove treasury proposals, tips and bounties."),(0,o.kt)("li",{parentName:"ul"},"Cancel a Referendum when it is in the voting phrase."),(0,o.kt)("li",{parentName:"ul"},"Cancel staking slashes."),(0,o.kt)("li",{parentName:"ul"},"Other governance matters Council Members can vote through Council Motions.")),(0,o.kt)("h3",{id:"technical-committee-1"},"Technical Committee"),(0,o.kt)("p",null,"Technical Committee, through Technical Committee Motions, can decide on a\nlimited number of governance matters. Those include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cancel a Referendum when it is in the proposing phrase."),(0,o.kt)("li",{parentName:"ul"},"Fast-track a simple-majority and simple-default Referendum."),(0,o.kt)("li",{parentName:"ul"},"Other governance matters Technical Committee Members can vote through\nTechnical Committee Motions.")),(0,o.kt)("h2",{id:"voting-rules"},"Voting rules"),(0,o.kt)("p",null,"Users, Council Members and Technical Committee Members decide by voting, and\nthey follow different voting rules."),(0,o.kt)("h3",{id:"referendums"},"Referendums"),(0,o.kt)("p",null,"Referendums are the voting rules for Users."),(0,o.kt)("h4",{id:"referendum-statuses"},"Referendum statuses"),(0,o.kt)("p",null,"Depending how a referendum was tabled and as democracy terms advance, a\nreferendum goes through different statuses:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Proposed"),": A referendum is tabled by Users. It will enter Super-Majority\nVoting status next, or get cancelled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Externally proposed with super-majority voting"),": A referendum is tabled by\nagreement of Council. It will enter Super-Majority Voting status next, or get\ncancelled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Externally proposed with simple-majority voting"),": A referendum is tabled by\nagreement of Council. It will enter Simple-Majority Voting status next, or get\ncancelled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Externally proposed with simple-default voting"),": A referendum is tabled by\nagreement of Council. It will enter Simple-Default Voting status next, or get\ncancelled."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Super-majority voting"),": A referendum under voting under super-majority\nrule. It will either get passed and enter Activating status, or get rejected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simple-majority voting"),": A referendum under voting under simple-majority\nrule. It will either get passed and enter Activating status, or get rejected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Simple-default voting"),": A referendum under voting under simple-default\nrule. It will either get passed and enter Activating status, or get rejected."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Acticating"),": A referendum that has passed voting and will be activated in 8\ndays. Any User has the ability to submit preimage for a Referendum. If a\npreimage is submitted in time, the referendum will be executed. Otherwise, the\nreferendum fails.")),(0,o.kt)("h4",{id:"democracy-terms"},"Democracy terms"),(0,o.kt)("p",null,"Democracy terms are the general way Referendums advance statuses. Each democracy\nterm lasts 7 days."),(0,o.kt)("p",null,"When a new democracy term is started, a referendum, in one of ",(0,o.kt)("strong",{parentName:"p"},"Proposed"),",\n",(0,o.kt)("strong",{parentName:"p"},"Externally proposed with super-majority voting"),", ",(0,o.kt)("strong",{parentName:"p"},"Externally proposed with\nsimple-majority voting")," or ",(0,o.kt)("strong",{parentName:"p"},"Externally proposed with simple-default voting"),"\nstatuses gets put in one of ",(0,o.kt)("strong",{parentName:"p"},"Super-majority voting"),", ",(0,o.kt)("strong",{parentName:"p"},"Simple-majority\nvoting")," or ",(0,o.kt)("strong",{parentName:"p"},"Simple-default voting"),". Proposed and Externally Proposed\nreferendums alternate. For Proposed referendum, the one with the highest backing\nwins, regardless of submission time."),(0,o.kt)("h4",{id:"fast-tracking"},"Fast tracking"),(0,o.kt)("p",null,"Technical Committee Members, through Technical Committee Motions, can fast track\na referendum under ",(0,o.kt)("strong",{parentName:"p"},"Externally proposed with simple-majority voting")," or\n",(0,o.kt)("strong",{parentName:"p"},"Externally proposed with simple-default voting")," status. The fast track\nreferendum does not follow normal democracy terms."),(0,o.kt)("p",null,"A fast track referendum has a minimum voting period of 1 day."),(0,o.kt)("h3",{id:"council-motions"},"Council Motions"),(0,o.kt)("p",null,"Each Council Member has equal voting rights for every Council Motion."),(0,o.kt)("p",null,"In case of abstain, a Council Member's vote is decided as:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Aye, if more than half of Council Members voted Aye."),(0,o.kt)("li",{parentName:"ol"},"Aye, if Prime Council Member voted Aye, and if (1) does not hold."),(0,o.kt)("li",{parentName:"ol"},"Nay, otherwise.")),(0,o.kt)("p",null,"For a Council Motion to pass, it must have more than threshold number of Council\nMembers voted Aye. The thresholds are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To propose an external super-majority referendum: at least 50%."),(0,o.kt)("li",{parentName:"ul"},"To propose an external simple-majority referendum: at least 80%."),(0,o.kt)("li",{parentName:"ul"},"To propose an external simple-default referendum: 100%."),(0,o.kt)("li",{parentName:"ul"},"To cancel a referendum under voting: 100%."),(0,o.kt)("li",{parentName:"ul"},"To cancel a staking slash: 100%."),(0,o.kt)("li",{parentName:"ul"},"To approve a treasury proposal: at least 80%."),(0,o.kt)("li",{parentName:"ul"},"To reject a treasury proposal: at least 50%.")),(0,o.kt)("p",null,"In the case of proposing an external referendum, Technical Committee Members\nhave the chance to veto a proposal."),(0,o.kt)("h3",{id:"technical-committee-motions"},"Technical Committee Motions"),(0,o.kt)("p",null,"Each Technical Committee Member has equal voting rights for every Technical Committee Motion."),(0,o.kt)("p",null,"In case of abstain, a Technical Committee Member's vote is decided as:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Aye, if Prime Technical Committee Member voted Aye."),(0,o.kt)("li",{parentName:"ol"},"Nay, otherwise.")),(0,o.kt)("p",null,"For a Technical Committee Motion to pass, it must have more than threshold\nnumber of Technical Committee Members voted Aye. The thresholds are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To fast track a proposal: 100%."),(0,o.kt)("li",{parentName:"ul"},"To cancel a referendum under proposing: 100%.")))}u.isMDXComponent=!0}}]);