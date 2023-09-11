(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function x(){}function Q(t){return t()}function R(){return Object.create(null)}function L(t){t.forEach(Q)}function U(t){return typeof t=="function"}function nt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ot(t){return Object.keys(t).length===0}function rt(t,e,n){t.insertBefore(e,n||null)}function X(t){t.parentNode&&t.parentNode.removeChild(t)}function ct(t){return document.createElement(t)}function st(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function it(t){return Array.from(t.childNodes)}let D;function v(t){D=t}const w=[],K=[],j=[],V=[],lt=Promise.resolve();let z=!1;function ut(){z||(z=!0,lt.then(Y))}function B(t){j.push(t)}const H=new Set;let y=0;function Y(){if(y!==0)return;const t=D;do{try{for(;y<w.length;){const e=w[y];y++,v(e),at(e.$$)}}catch(e){throw w.length=0,y=0,e}for(v(null),w.length=0,y=0;K.length;)K.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];H.has(n)||(H.add(n),n())}j.length=0}while(w.length);for(;V.length;)V.pop()();z=!1,H.clear(),v(t)}function at(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const ft=new Set;function dt(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function ht(t,e,n,c){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),c||B(()=>{const i=t.$$.on_mount.map(Q).filter(U);t.$$.on_destroy?t.$$.on_destroy.push(...i):L(i),t.$$.on_mount=[]}),o.forEach(B)}function mt(t,e){const n=t.$$;n.fragment!==null&&(L(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(w.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function $t(t,e,n,c,r,o,i,f=[-1]){const d=D;v(t);const s=t.$$={fragment:null,ctx:[],props:o,update:x,not_equal:r,bound:R(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:R(),dirty:f,skip_bound:!1,root:e.target||d.$$.root};i&&i(s.root);let m=!1;if(s.ctx=n?n(t,e.props||{},(a,p,...u)=>{const h=u.length?u[0]:p;return s.ctx&&r(s.ctx[a],s.ctx[a]=h)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](h),m&&pt(t,a)),p}):[],s.update(),m=!0,L(s.before_update),s.fragment=c?c(s.ctx):!1,e.target){if(e.hydrate){const a=it(e.target);s.fragment&&s.fragment.l(a),a.forEach(X)}else s.fragment&&s.fragment.c();e.intro&&dt(t.$$.fragment),ht(t,e.target,e.anchor,e.customElement),Y()}v(d)}class gt{$destroy(){mt(this,1),this.$destroy=x}$on(e,n){if(!U(n))return x;const c=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return c.push(n),()=>{const r=c.indexOf(n);r!==-1&&c.splice(r,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function g(){}function F(t){return t()}function W(){return Object.create(null)}function O(t){t.forEach(F)}function I(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _t(t){return Object.keys(t).length===0}function _(t,e){t.appendChild(e)}function A(t,e,n){t.insertBefore(e,n||null)}function N(t){t.parentNode&&t.parentNode.removeChild(t)}function Z(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function bt(t){return document.createTextNode(t)}function wt(){return bt("")}function l(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function xt(t){const e={};for(const n of t)e[n.name]=n.value;return e}let S;function E(t){S=t}function vt(){if(!S)throw new Error("Function called outside component initialization");return S}function Et(t){vt().$$.on_mount.push(t)}const k=[],G=[],C=[],J=[],At=Promise.resolve();let P=!1;function Nt(){P||(P=!0,At.then(tt))}function q(t){C.push(t)}const T=new Set;let b=0;function tt(){if(b!==0)return;const t=S;do{try{for(;b<k.length;){const e=k[b];b++,E(e),St(e.$$)}}catch(e){throw k.length=0,b=0,e}for(E(null),k.length=0,b=0;G.length;)G.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];T.has(n)||(T.add(n),n())}C.length=0}while(k.length);for(;J.length;)J.pop()();P=!1,T.clear(),E(t)}function St(t){if(t.fragment!==null){t.update(),O(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const Ot=new Set;function jt(t,e){t&&t.i&&(Ot.delete(t),t.i(e))}function Ct(t,e,n,c){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),c||q(()=>{const i=t.$$.on_mount.map(F).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...i):O(i),t.$$.on_mount=[]}),o.forEach(q)}function Lt(t,e){const n=t.$$;n.fragment!==null&&(O(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Mt(t,e){t.$$.dirty[0]===-1&&(k.push(t),Nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ht(t,e,n,c,r,o,i,f=[-1]){const d=S;E(t);const s=t.$$={fragment:null,ctx:[],props:o,update:g,not_equal:r,bound:W(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:W(),dirty:f,skip_bound:!1,root:e.target||d.$$.root};i&&i(s.root);let m=!1;if(s.ctx=n?n(t,e.props||{},(a,p,...u)=>{const h=u.length?u[0]:p;return s.ctx&&r(s.ctx[a],s.ctx[a]=h)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](h),m&&Mt(t,a)),p}):[],s.update(),m=!0,O(s.before_update),s.fragment=c?c(s.ctx):!1,e.target){if(e.hydrate){const a=kt(e.target);s.fragment&&s.fragment.l(a),a.forEach(N)}else s.fragment&&s.fragment.c();e.intro&&jt(t.$$.fragment),Ct(t,e.target,e.anchor,e.customElement),tt()}E(d)}let et;typeof HTMLElement=="function"&&(et=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(F).filter(I);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){O(this.$$.on_disconnect)}$destroy(){Lt(this,1),this.$destroy=g}$on(t,e){if(!I(e))return g;const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const c=n.indexOf(e);c!==-1&&n.splice(c,1)}}$set(t){this.$$set&&!_t(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function Tt(t,e,n){const c=t.slice();return c[4]=e[n],c}function zt(t,e,n){const c=t.slice();return c[7]=e[n],c}function Bt(t){let e;return{c(){e=$("line"),l(e,"class","minor"),l(e,"y1","42"),l(e,"y2","45"),l(e,"transform","rotate("+6*(t[4]+t[7])+")")},m(n,c){A(n,e,c)},p:g,d(n){n&&N(e)}}}function It(t){let e,n,c=[1,2,3,4],r=[];for(let o=0;o<4;o+=1)r[o]=Bt(zt(t,c,o));return{c(){e=$("line");for(let o=0;o<4;o+=1)r[o].c();n=wt(),l(e,"class","major"),l(e,"y1","35"),l(e,"y2","45"),l(e,"transform","rotate("+30*t[4]+")")},m(o,i){A(o,e,i);for(let f=0;f<4;f+=1)r[f].m(o,i);A(o,n,i)},p:g,d(o){o&&N(e),Z(r,o),o&&N(n)}}}function Pt(t){let e,n,c,r,o,i,f,d,s,m,a=[0,5,10,15,20,25,30,35,40,45,50,55],p=[];for(let u=0;u<12;u+=1)p[u]=It(Tt(t,a,u));return{c(){e=$("svg"),n=$("circle");for(let u=0;u<12;u+=1)p[u].c();c=$("line"),o=$("line"),f=$("g"),d=$("line"),s=$("line"),this.c=g,l(n,"class","clock-face"),l(n,"r","48"),l(c,"class","hour"),l(c,"y1","2"),l(c,"y2","-20"),l(c,"transform",r="rotate("+(30*t[2]+t[1]/2)+")"),l(o,"class","minute"),l(o,"y1","4"),l(o,"y2","-30"),l(o,"transform",i="rotate("+(6*t[1]+t[0]/10)+")"),l(d,"class","second"),l(d,"y1","10"),l(d,"y2","-38"),l(s,"class","second-counterweight"),l(s,"y1","10"),l(s,"y2","2"),l(f,"transform",m="rotate("+6*t[0]+")"),l(e,"viewBox","-50 -50 100 100")},m(u,h){A(u,e,h),_(e,n);for(let M=0;M<12;M+=1)p[M].m(e,null);_(e,c),_(e,o),_(e,f),_(f,d),_(f,s)},p(u,[h]){h&6&&r!==(r="rotate("+(30*u[2]+u[1]/2)+")")&&l(c,"transform",r),h&3&&i!==(i="rotate("+(6*u[1]+u[0]/10)+")")&&l(o,"transform",i),h&1&&m!==(m="rotate("+6*u[0]+")")&&l(f,"transform",m)},i:g,o:g,d(u){u&&N(e),Z(p,u)}}}function qt(t,e,n){let c,r,o,i=new Date;return Et(()=>{const f=setInterval(()=>{n(3,i=new Date)},1e3);return()=>{clearInterval(f)}}),t.$$.update=()=>{t.$$.dirty&8&&n(2,c=i.getHours()),t.$$.dirty&8&&n(1,r=i.getMinutes()),t.$$.dirty&8&&n(0,o=i.getSeconds())},[o,r,c,i]}class Dt extends et{constructor(e){super(),this.shadowRoot.innerHTML="<style>svg{width:100%;height:100%}.clock-face{stroke:#333;fill:white}.minor{stroke:#999;stroke-width:0.5}.major{stroke:#333;stroke-width:1}.hour{stroke:#333}.minute{stroke:#666}.second,.second-counterweight{stroke:rgb(180,0,0)}.second-counterweight{stroke-width:3}</style>",Ht(this,{target:this.shadowRoot,props:xt(this.attributes),customElement:!0},qt,Pt,yt,{},null),e&&e.target&&A(e.target,this,e.anchor)}}customElements.define("my-component",Dt);function Ft(t){let e;return{c(){e=ct("main"),e.innerHTML=`<h1 class="svelte-1wszdkc">Hello World!</h1> 
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p> 

  <p class="container svelte-1wszdkc"><my-component></my-component></p>`,st(e,"class","svelte-1wszdkc")},m(n,c){rt(n,e,c)},p:x,i:x,o:x,d(n){n&&X(e)}}}class Rt extends gt{constructor(e){super(),$t(this,e,null,Ft,nt,{})}}new Rt({target:document.getElementById("app")});
