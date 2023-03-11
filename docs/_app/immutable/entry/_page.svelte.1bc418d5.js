import{S as B,i as H,s as K,k as b,q as L,a as T,l as x,m as A,r as U,h as p,c as R,n as _,b as F,G as g,J as ue,H as W,K as X,L as he,e as te,u as Y,g as O,v as de,f as ge,d as M,y as J,z as q,A as z,B as Q,w as pe,M as me,N as _e,o as Ee}from"../chunks/index.d3eba4ba.js";const y={FRAMEWORK:"Framework",LANGUAGE:"Language",PATTERN_TYPE:"Pattern Type",PLATFORM:"Platform",USE_CASE:"Use Case"},ve=[{name:"OAuth2",category:y.FRAMEWORK,tag:"framework:oauth2"},{name:"React",category:y.FRAMEWORK,tag:"framework:react"},{name:"Go",category:y.LANGUAGE,tag:"language:go"},{name:"Java",category:y.LANGUAGE,tag:"language:java"},{name:"JavaScript",category:y.LANGUAGE,tag:"language:javascript"},{name:"JSON",category:y.LANGUAGE,tag:"language:json"},{name:"Ruby",category:y.LANGUAGE,tag:"language:ruby"},{name:"TypeScript",category:y.LANGUAGE,tag:"language:typescript"},{name:"YAML",category:y.LANGUAGE,tag:"language:yaml"},{name:"Literal",category:y.PATTERN_TYPE,tag:"pattern_type:literal"},{name:"Regular Expression",category:y.PATTERN_TYPE,tag:"pattern_type:regexp"},{name:"Structural",category:y.PATTERN_TYPE,tag:"pattern_type:structural"},{name:"Docker",category:y.PLATFORM,tag:"platform:docker"},{name:"Kubernetes",category:y.PLATFORM,tag:"platform:kubernetes"},{name:"Code Health",category:y.USE_CASE,tag:"use_case:code_health"},{name:"Code Intelligence",category:y.USE_CASE,tag:"use_case:code_intelligence"},{name:"Code Reuse",category:y.USE_CASE,tag:"use_case:code_reuse"},{name:"DevOps",category:y.USE_CASE,tag:"use_case:devops"},{name:"Security",category:y.USE_CASE,tag:"use_case:security"}];function be(){return y}function xe(){let r=ve;return r.forEach(e=>e.selected=!1),r}function le(r,e,l){const t=r.slice();return t[8]=e[l],t}function ae(r,e,l){const t=r.slice();return t[11]=e[l],t}function se(r){let e,l=r[11].name+"",t,a,f,n;function u(){return r[5](r[11])}return{c(){e=b("button"),t=L(l),this.h()},l(s){e=x(s,"BUTTON",{class:!0});var o=A(e);t=U(o,l),o.forEach(p),this.h()},h(){_(e,"class",a=(r[11].selected?"bg-slate-300":"bg-slate-100")+" whitespace-nowrap border-solid border-2 border-black rounded-full p-1 m-1")},m(s,o){F(s,e,o),g(e,t),f||(n=ue(e,"click",u),f=!0)},p(s,o){r=s,o&1&&l!==(l=r[11].name+"")&&Y(t,l),o&1&&a!==(a=(r[11].selected?"bg-slate-300":"bg-slate-100")+" whitespace-nowrap border-solid border-2 border-black rounded-full p-1 m-1")&&_(e,"class",a)},d(s){s&&p(e),f=!1,n()}}}function re(r){let e,l=r[11].category===r[8]&&se(r);return{c(){l&&l.c(),e=te()},l(t){l&&l.l(t),e=te()},m(t,a){l&&l.m(t,a),F(t,e,a)},p(t,a){t[11].category===t[8]?l?l.p(t,a):(l=se(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&p(e)}}}function ne(r){let e,l,t=r[8]+"",a,f,n,u,s=r[0],o=[];for(let i=0;i<s.length;i+=1)o[i]=re(ae(r,s,i));return{c(){e=b("details"),l=b("summary"),a=L(t),f=T(),n=b("div");for(let i=0;i<o.length;i+=1)o[i].c();u=T(),this.h()},l(i){e=x(i,"DETAILS",{class:!0});var c=A(e);l=x(c,"SUMMARY",{class:!0});var h=A(l);a=U(h,t),h.forEach(p),f=R(c),n=x(c,"DIV",{class:!0});var w=A(n);for(let S=0;S<o.length;S+=1)o[S].l(w);w.forEach(p),u=R(c),c.forEach(p),this.h()},h(){_(l,"class","text-base font-bold"),_(n,"class","flex flex-row flex-wrap"),_(e,"class","bg-slate-100 m-2 p-4 flex flex-column rounded-xl open:bg-slate-200 duration-300 w-full")},m(i,c){F(i,e,c),g(e,l),g(l,a),g(e,f),g(e,n);for(let h=0;h<o.length;h+=1)o[h].m(n,null);g(e,u)},p(i,c){if(c&7){s=i[0];let h;for(h=0;h<s.length;h+=1){const w=ae(i,s,h);o[h]?o[h].p(w,c):(o[h]=re(w),o[h].c(),o[h].m(n,null))}for(;h<o.length;h+=1)o[h].d(1);o.length=s.length}},d(i){i&&p(e),X(o,i)}}}function Ae(r){let e,l,t,a,f,n,u=Object.values(r[1]),s=[];for(let o=0;o<u.length;o+=1)s[o]=ne(le(r,u,o));return{c(){e=b("button"),l=L("Clear All"),t=T(),a=b("div");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=x(o,"BUTTON",{class:!0});var i=A(e);l=U(i,"Clear All"),i.forEach(p),t=R(o),a=x(o,"DIV",{class:!0});var c=A(a);for(let h=0;h<s.length;h+=1)s[h].l(c);c.forEach(p),this.h()},h(){_(e,"class","border-solid border-2 border-black rounded-full p-1 m-1 bg-slate-200"),_(a,"class","flex flex-row flex-wrap w-full")},m(o,i){F(o,e,i),g(e,l),F(o,t,i),F(o,a,i);for(let c=0;c<s.length;c+=1)s[c].m(a,null);f||(n=ue(e,"click",r[3]),f=!0)},p(o,[i]){if(i&7){u=Object.values(o[1]);let c;for(c=0;c<u.length;c+=1){const h=le(o,u,c);s[c]?s[c].p(h,i):(s[c]=ne(h),s[c].c(),s[c].m(a,null))}for(;c<s.length;c+=1)s[c].d(1);s.length=u.length}},i:W,o:W,d(o){o&&p(e),o&&p(t),o&&p(a),X(s,o),f=!1,n()}}}function ye(r,e,l){let{appliedFilters:t}=e;const a=he();let f=xe();const n=be();function u(c){c.selected=!c.selected,s()}function s(){l(4,t=f.filter(h=>h.selected));let c=[];t.forEach(h=>{c.push(h.tag)}),a("filter",{tags:c}),l(4,t),l(0,f)}function o(){l(4,t=[]),a("filter",{tags:[]}),f.forEach(c=>c.selected=!1),l(0,f)}const i=c=>u(c);return r.$$set=c=>{"appliedFilters"in c&&l(4,t=c.appliedFilters)},[f,n,u,o,t,i]}class we extends B{constructor(e){super(),H(this,e,ye,Ae,K,{appliedFilters:4})}}function oe(r,e,l){const t=r.slice();return t[1]=e[l],t}function ce(r){let e,l=r[1]+"",t,a;return{c(){e=b("div"),t=L(l),a=T(),this.h()},l(f){e=x(f,"DIV",{class:!0});var n=A(e);t=U(n,l),a=R(n),n.forEach(p),this.h()},h(){_(e,"class","rounded-full bg-slate-100 p-1 m-1")},m(f,n){F(f,e,n),g(e,t),g(e,a)},p(f,n){n&1&&l!==(l=f[1]+"")&&Y(t,l)},d(f){f&&p(e)}}}function $e(r){let e,l,t=r[0].name+"",a,f,n,u=r[0].description+"",s,o,i,c,h,w=r[0].syntax+"",S,N,$,k,D,P,C=r[0].tags,d=[];for(let m=0;m<C.length;m+=1)d[m]=ce(oe(r,C,m));return{c(){e=b("details"),l=b("summary"),a=L(t),f=T(),n=b("div"),s=L(u),o=T(),i=b("div");for(let m=0;m<d.length;m+=1)d[m].c();c=T(),h=b("code"),S=L(w),N=T(),$=b("div"),k=b("a"),D=L("view on sourcegraph.com"),this.h()},l(m){e=x(m,"DETAILS",{class:!0});var E=A(e);l=x(E,"SUMMARY",{class:!0});var v=A(l);a=U(v,t),v.forEach(p),f=R(E),n=x(E,"DIV",{class:!0});var G=A(n);s=U(G,u),G.forEach(p),o=R(E),i=x(E,"DIV",{class:!0});var V=A(i);for(let Z=0;Z<d.length;Z+=1)d[Z].l(V);V.forEach(p),c=R(E),h=x(E,"CODE",{class:!0});var I=A(h);S=U(I,w),I.forEach(p),N=R(E),$=x(E,"DIV",{class:!0});var j=A($);k=x(j,"A",{href:!0,target:!0,rel:!0});var ee=A(k);D=U(ee,"view on sourcegraph.com"),ee.forEach(p),j.forEach(p),E.forEach(p),this.h()},h(){_(l,"class","text-base font-bold"),_(n,"class","p-2 text-base italic"),_(i,"class","pb-3 flex flex-row flex-wrap"),_(h,"class","bg-white text-base font-bold whitespace-nowrap overflow-scroll rounded-xl p-2"),_(k,"href",P=r[0].exampleLink),_(k,"target","_blank"),_(k,"rel","noreferrer"),_($,"class","text-center text-blue-600 visited:text-purple-600 pt-2"),_(e,"class","bg-slate-100 m-2 p-4 flex flex-row rounded-xl open:bg-slate-200 duration-300")},m(m,E){F(m,e,E),g(e,l),g(l,a),g(e,f),g(e,n),g(n,s),g(e,o),g(e,i);for(let v=0;v<d.length;v+=1)d[v].m(i,null);g(e,c),g(e,h),g(h,S),g(e,N),g(e,$),g($,k),g(k,D)},p(m,[E]){if(E&1&&t!==(t=m[0].name+"")&&Y(a,t),E&1&&u!==(u=m[0].description+"")&&Y(s,u),E&1){C=m[0].tags;let v;for(v=0;v<C.length;v+=1){const G=oe(m,C,v);d[v]?d[v].p(G,E):(d[v]=ce(G),d[v].c(),d[v].m(i,null))}for(;v<d.length;v+=1)d[v].d(1);d.length=C.length}E&1&&w!==(w=m[0].syntax+"")&&Y(S,w),E&1&&P!==(P=m[0].exampleLink)&&_(k,"href",P)},i:W,o:W,d(m){m&&p(e),X(d,m)}}}function ke(r,e,l){let{result:t}=e;return r.$$set=a=>{"result"in a&&l(0,t=a.result)},[t]}class Se extends B{constructor(e){super(),H(this,e,ke,$e,K,{result:0})}}function ie(r,e,l){const t=r.slice();return t[1]=e[l],t}function fe(r){let e,l;return e=new Se({props:{result:r[1]}}),{c(){J(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){z(e,t,a),l=!0},p(t,a){const f={};a&1&&(f.result=t[1]),e.$set(f)},i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}function Te(r){let e,l,t=r[0],a=[];for(let n=0;n<t.length;n+=1)a[n]=fe(ie(r,t,n));const f=n=>M(a[n],1,1,()=>{a[n]=null});return{c(){e=b("div");for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){e=x(n,"DIV",{class:!0});var u=A(e);for(let s=0;s<a.length;s+=1)a[s].l(u);u.forEach(p),this.h()},h(){_(e,"class","flex flex-col p-2 w-full")},m(n,u){F(n,e,u);for(let s=0;s<a.length;s+=1)a[s].m(e,null);l=!0},p(n,[u]){if(u&1){t=n[0];let s;for(s=0;s<t.length;s+=1){const o=ie(n,t,s);a[s]?(a[s].p(o,u),O(a[s],1)):(a[s]=fe(o),a[s].c(),O(a[s],1),a[s].m(e,null))}for(de(),s=t.length;s<a.length;s+=1)f(s);ge()}},i(n){if(!l){for(let u=0;u<t.length;u+=1)O(a[u]);l=!0}},o(n){a=a.filter(Boolean);for(let u=0;u<a.length;u+=1)M(a[u]);l=!1},d(n){n&&p(e),X(a,n)}}}function Re(r,e,l){let{filteredExamples:t}=e;return r.$$set=a=>{"filteredExamples"in a&&l(0,t=a.filteredExamples)},[t]}class Fe extends B{constructor(e){super(),H(this,e,Re,Te,K,{filteredExamples:0})}}function Le(r){let e,l,t,a,f,n,u,s,o,i,c,h,w,S,N,$,k,D;i=new we({}),i.$on("filter",r[1]),i.$on("reset",r[2]);function P(d){r[3](d)}let C={};return r[0]!==void 0&&(C.filteredExamples=r[0]),$=new Fe({props:C}),pe.push(()=>me($,"filteredExamples",P)),{c(){e=b("div"),l=b("h1"),t=L("Sourcegraph Search Examples"),a=T(),f=b("div"),n=b("div"),u=b("h2"),s=L("Filters"),o=T(),J(i.$$.fragment),c=T(),h=b("div"),w=b("h2"),S=L("Examples"),N=T(),J($.$$.fragment),this.h()},l(d){e=x(d,"DIV",{class:!0});var m=A(e);l=x(m,"H1",{class:!0});var E=A(l);t=U(E,"Sourcegraph Search Examples"),E.forEach(p),m.forEach(p),a=R(d),f=x(d,"DIV",{class:!0});var v=A(f);n=x(v,"DIV",{class:!0});var G=A(n);u=x(G,"H2",{class:!0});var V=A(u);s=U(V,"Filters"),V.forEach(p),o=R(G),q(i.$$.fragment,G),G.forEach(p),c=R(v),h=x(v,"DIV",{class:!0});var I=A(h);w=x(I,"H2",{class:!0});var j=A(w);S=U(j,"Examples"),j.forEach(p),N=R(I),q($.$$.fragment,I),I.forEach(p),v.forEach(p),this.h()},h(){_(l,"class","p-4 text-4xl text-center"),_(e,"class","w-full"),_(u,"class","p-2 text-3xl"),_(n,"class","flex flex-col p-4 w-1/4"),_(w,"class","p-2 text-3xl"),_(h,"class","flex flex-col p-4 w-3/4"),_(f,"class","w-full flex flex-row p-4")},m(d,m){F(d,e,m),g(e,l),g(l,t),F(d,a,m),F(d,f,m),g(f,n),g(n,u),g(u,s),g(n,o),z(i,n,null),g(f,c),g(f,h),g(h,w),g(w,S),g(h,N),z($,h,null),D=!0},p(d,[m]){const E={};!k&&m&1&&(k=!0,E.filteredExamples=d[0],_e(()=>k=!1)),$.$set(E)},i(d){D||(O(i.$$.fragment,d),O($.$$.fragment,d),D=!0)},o(d){M(i.$$.fragment,d),M($.$$.fragment,d),D=!1},d(d){d&&p(e),d&&p(a),d&&p(f),Q(i),Q($)}}}function Ue(r,e){return r.filter(t=>t.tags.includes(e))}function Ge(r,e,l){let t=[],a=[];Ee(async()=>{let s=window.location.href;s.endsWith("/")&&(s=s.slice(0,-1)),t=await(await fetch(`${s}/examples.json`)).json(),l(0,a=t)});function f(s){l(0,a=t),s.detail.tags.forEach(i=>{l(0,a=Ue(a,i))})}function n(){l(0,a=t)}function u(s){a=s,l(0,a)}return[a,f,n,u]}class Ce extends B{constructor(e){super(),H(this,e,Ge,Le,K,{})}}function De(r){let e,l;return e=new Ce({}),{c(){J(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,a){z(e,t,a),l=!0},p:W,i(t){l||(O(e.$$.fragment,t),l=!0)},o(t){M(e.$$.fragment,t),l=!1},d(t){Q(e,t)}}}class Ie extends B{constructor(e){super(),H(this,e,null,De,K,{})}}export{Ie as default};