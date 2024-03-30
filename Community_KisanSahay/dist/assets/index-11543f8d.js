function k1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function N1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var W_={exports:{}},mu={},G_={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wo=Symbol.for("react.element"),D1=Symbol.for("react.portal"),x1=Symbol.for("react.fragment"),O1=Symbol.for("react.strict_mode"),L1=Symbol.for("react.profiler"),V1=Symbol.for("react.provider"),M1=Symbol.for("react.context"),b1=Symbol.for("react.forward_ref"),U1=Symbol.for("react.suspense"),F1=Symbol.for("react.memo"),$1=Symbol.for("react.lazy"),Mm=Symbol.iterator;function j1(t){return t===null||typeof t!="object"?null:(t=Mm&&t[Mm]||t["@@iterator"],typeof t=="function"?t:null)}var K_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q_=Object.assign,X_={};function os(t,e,n){this.props=t,this.context=e,this.refs=X_,this.updater=n||K_}os.prototype.isReactComponent={};os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Y_(){}Y_.prototype=os.prototype;function cf(t,e,n){this.props=t,this.context=e,this.refs=X_,this.updater=n||K_}var hf=cf.prototype=new Y_;hf.constructor=cf;Q_(hf,os.prototype);hf.isPureReactComponent=!0;var bm=Array.isArray,J_=Object.prototype.hasOwnProperty,df={current:null},Z_={key:!0,ref:!0,__self:!0,__source:!0};function ev(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)J_.call(e,r)&&!Z_.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Wo,type:t,key:s,ref:o,props:i,_owner:df.current}}function B1(t,e){return{$$typeof:Wo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ff(t){return typeof t=="object"&&t!==null&&t.$$typeof===Wo}function z1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Um=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?z1(""+t.key):e.toString(36)}function Ja(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Wo:case D1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Rc(o,0):r,bm(i)?(n="",t!=null&&(n=t.replace(Um,"$&/")+"/"),Ja(i,e,n,"",function(u){return u})):i!=null&&(ff(i)&&(i=B1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Um,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",bm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Rc(s,a);o+=Ja(s,e,n,l,i)}else if(l=j1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Rc(s,a++),o+=Ja(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ia(t,e,n){if(t==null)return t;var r=[],i=0;return Ja(t,r,"","",function(s){return e.call(n,s,i++)}),r}function q1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tt={current:null},Za={transition:null},H1={ReactCurrentDispatcher:tt,ReactCurrentBatchConfig:Za,ReactCurrentOwner:df};H.Children={map:Ia,forEach:function(t,e,n){Ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ia(t,function(){e++}),e},toArray:function(t){return Ia(t,function(e){return e})||[]},only:function(t){if(!ff(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=os;H.Fragment=x1;H.Profiler=L1;H.PureComponent=cf;H.StrictMode=O1;H.Suspense=U1;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H1;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Q_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=df.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)J_.call(e,l)&&!Z_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Wo,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:M1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:V1,_context:t},t.Consumer=t};H.createElement=ev;H.createFactory=function(t){var e=ev.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:b1,render:t}};H.isValidElement=ff;H.lazy=function(t){return{$$typeof:$1,_payload:{_status:-1,_result:t},_init:q1}};H.memo=function(t,e){return{$$typeof:F1,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=Za.transition;Za.transition={};try{t()}finally{Za.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return tt.current.useCallback(t,e)};H.useContext=function(t){return tt.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return tt.current.useDeferredValue(t)};H.useEffect=function(t,e){return tt.current.useEffect(t,e)};H.useId=function(){return tt.current.useId()};H.useImperativeHandle=function(t,e,n){return tt.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return tt.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return tt.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return tt.current.useMemo(t,e)};H.useReducer=function(t,e,n){return tt.current.useReducer(t,e,n)};H.useRef=function(t){return tt.current.useRef(t)};H.useState=function(t){return tt.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return tt.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return tt.current.useTransition()};H.version="18.2.0";G_.exports=H;var I=G_.exports;const tv=N1(I),W1=k1({__proto__:null,default:tv},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=I,K1=Symbol.for("react.element"),Q1=Symbol.for("react.fragment"),X1=Object.prototype.hasOwnProperty,Y1=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,J1={key:!0,ref:!0,__self:!0,__source:!0};function nv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)X1.call(e,r)&&!J1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:K1,type:t,key:s,ref:o,props:i,_owner:Y1.current}}mu.Fragment=Q1;mu.jsx=nv;mu.jsxs=nv;W_.exports=mu;var S=W_.exports,Ph={},rv={exports:{}},Et={},iv={exports:{}},sv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,j){var z=O.length;O.push(j);e:for(;0<z;){var me=z-1>>>1,Re=O[me];if(0<i(Re,j))O[me]=j,O[z]=Re,z=me;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var j=O[0],z=O.pop();if(z!==j){O[0]=z;e:for(var me=0,Re=O.length,Ea=Re>>>1;me<Ea;){var wr=2*(me+1)-1,Sc=O[wr],Er=wr+1,Ta=O[Er];if(0>i(Sc,z))Er<Re&&0>i(Ta,Sc)?(O[me]=Ta,O[Er]=z,me=Er):(O[me]=Sc,O[wr]=z,me=wr);else if(Er<Re&&0>i(Ta,z))O[me]=Ta,O[Er]=z,me=Er;else break e}}return j}function i(O,j){var z=O.sortIndex-j.sortIndex;return z!==0?z:O.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,y=!1,_=!1,v=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(O){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=O)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function w(O){if(_=!1,g(O),!y)if(n(l)!==null)y=!0,Ic(R);else{var j=n(u);j!==null&&Ac(w,j.startTime-O)}}function R(O,j){y=!1,_&&(_=!1,m(L),L=-1),p=!0;var z=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||O&&!Lt());){var me=h.callback;if(typeof me=="function"){h.callback=null,d=h.priorityLevel;var Re=me(h.expirationTime<=j);j=t.unstable_now(),typeof Re=="function"?h.callback=Re:h===n(l)&&r(l),g(j)}else r(l);h=n(l)}if(h!==null)var Ea=!0;else{var wr=n(u);wr!==null&&Ac(w,wr.startTime-j),Ea=!1}return Ea}finally{h=null,d=z,p=!1}}var C=!1,N=null,L=-1,Q=5,B=-1;function Lt(){return!(t.unstable_now()-B<Q)}function ws(){if(N!==null){var O=t.unstable_now();B=O;var j=!0;try{j=N(!0,O)}finally{j?Es():(C=!1,N=null)}}else C=!1}var Es;if(typeof f=="function")Es=function(){f(ws)};else if(typeof MessageChannel<"u"){var Vm=new MessageChannel,P1=Vm.port2;Vm.port1.onmessage=ws,Es=function(){P1.postMessage(null)}}else Es=function(){v(ws,0)};function Ic(O){N=O,C||(C=!0,Es())}function Ac(O,j){L=v(function(){O(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,Ic(R))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var z=d;d=j;try{return O()}finally{d=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,j){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var z=d;d=O;try{return j()}finally{d=z}},t.unstable_scheduleCallback=function(O,j,z){var me=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?me+z:me):z=me,O){case 1:var Re=-1;break;case 2:Re=250;break;case 5:Re=1073741823;break;case 4:Re=1e4;break;default:Re=5e3}return Re=z+Re,O={id:c++,callback:j,priorityLevel:O,startTime:z,expirationTime:Re,sortIndex:-1},z>me?(O.sortIndex=z,e(u,O),n(l)===null&&O===n(u)&&(_?(m(L),L=-1):_=!0,Ac(w,z-me))):(O.sortIndex=Re,e(l,O),y||p||(y=!0,Ic(R))),O},t.unstable_shouldYield=Lt,t.unstable_wrapCallback=function(O){var j=d;return function(){var z=d;d=j;try{return O.apply(this,arguments)}finally{d=z}}}})(sv);iv.exports=sv;var Z1=iv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov=I,vt=Z1;function A(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var av=new Set,co={};function Zr(t,e){Bi(t,e),Bi(t+"Capture",e)}function Bi(t,e){for(co[t]=e,t=0;t<e.length;t++)av.add(e[t])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kh=Object.prototype.hasOwnProperty,eA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fm={},$m={};function tA(t){return kh.call($m,t)?!0:kh.call(Fm,t)?!1:eA.test(t)?$m[t]=!0:(Fm[t]=!0,!1)}function nA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function rA(t,e,n,r){if(e===null||typeof e>"u"||nA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Fe[t]=new nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Fe[e]=new nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Fe[t]=new nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Fe[t]=new nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Fe[t]=new nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Fe[t]=new nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Fe[t]=new nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Fe[t]=new nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Fe[t]=new nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var pf=/[\-:]([a-z])/g;function mf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(pf,mf);Fe[e]=new nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(pf,mf);Fe[e]=new nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(pf,mf);Fe[e]=new nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Fe[t]=new nt(t,1,!1,t.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Fe[t]=new nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function gf(t,e,n,r){var i=Fe.hasOwnProperty(e)?Fe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(rA(e,n,i,r)&&(n=null),r||i===null?tA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kn=ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Aa=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),yf=Symbol.for("react.strict_mode"),Nh=Symbol.for("react.profiler"),lv=Symbol.for("react.provider"),uv=Symbol.for("react.context"),_f=Symbol.for("react.forward_ref"),Dh=Symbol.for("react.suspense"),xh=Symbol.for("react.suspense_list"),vf=Symbol.for("react.memo"),On=Symbol.for("react.lazy"),cv=Symbol.for("react.offscreen"),jm=Symbol.iterator;function Ts(t){return t===null||typeof t!="object"?null:(t=jm&&t[jm]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,Cc;function Ls(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Pc=!1;function kc(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ls(t):""}function iA(t){switch(t.tag){case 5:return Ls(t.type);case 16:return Ls("Lazy");case 13:return Ls("Suspense");case 19:return Ls("SuspenseList");case 0:case 2:case 15:return t=kc(t.type,!1),t;case 11:return t=kc(t.type.render,!1),t;case 1:return t=kc(t.type,!0),t;default:return""}}function Oh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gi:return"Fragment";case mi:return"Portal";case Nh:return"Profiler";case yf:return"StrictMode";case Dh:return"Suspense";case xh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case uv:return(t.displayName||"Context")+".Consumer";case lv:return(t._context.displayName||"Context")+".Provider";case _f:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vf:return e=t.displayName||null,e!==null?e:Oh(t.type)||"Memo";case On:e=t._payload,t=t._init;try{return Oh(t(e))}catch{}}return null}function sA(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oh(e);case 8:return e===yf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function oA(t){var e=hv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sa(t){t._valueTracker||(t._valueTracker=oA(t))}function dv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=hv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lh(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fv(t,e){e=e.checked,e!=null&&gf(t,"checked",e,!1)}function Vh(t,e){fv(t,e);var n=ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Mh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Mh(t,e.type,ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Mh(t,e,n){(e!=="number"||_l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vs=Array.isArray;function Ni(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ir(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function bh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(A(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(A(92));if(Vs(n)){if(1<n.length)throw Error(A(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ir(n)}}function pv(t,e){var n=ir(e.value),r=ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,gv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ho(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aA=["Webkit","ms","Moz","O"];Object.keys(Ws).forEach(function(t){aA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ws[e]=Ws[t]})});function yv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ws.hasOwnProperty(t)&&Ws[t]?(""+e).trim():e+"px"}function _v(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=yv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var lA=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fh(t,e){if(e){if(lA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(A(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(A(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(A(61))}if(e.style!=null&&typeof e.style!="object")throw Error(A(62))}}function $h(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jh=null;function wf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bh=null,Di=null,xi=null;function Wm(t){if(t=Qo(t)){if(typeof Bh!="function")throw Error(A(280));var e=t.stateNode;e&&(e=wu(e),Bh(t.stateNode,t.type,e))}}function vv(t){Di?xi?xi.push(t):xi=[t]:Di=t}function wv(){if(Di){var t=Di,e=xi;if(xi=Di=null,Wm(t),e)for(t=0;t<e.length;t++)Wm(e[t])}}function Ev(t,e){return t(e)}function Tv(){}var Nc=!1;function Iv(t,e,n){if(Nc)return t(e,n);Nc=!0;try{return Ev(t,e,n)}finally{Nc=!1,(Di!==null||xi!==null)&&(Tv(),wv())}}function fo(t,e){var n=t.stateNode;if(n===null)return null;var r=wu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(A(231,e,typeof n));return n}var zh=!1;if(Tn)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){zh=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{zh=!1}function uA(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Gs=!1,vl=null,wl=!1,qh=null,cA={onError:function(t){Gs=!0,vl=t}};function hA(t,e,n,r,i,s,o,a,l){Gs=!1,vl=null,uA.apply(cA,arguments)}function dA(t,e,n,r,i,s,o,a,l){if(hA.apply(this,arguments),Gs){if(Gs){var u=vl;Gs=!1,vl=null}else throw Error(A(198));wl||(wl=!0,qh=u)}}function ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Av(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gm(t){if(ei(t)!==t)throw Error(A(188))}function fA(t){var e=t.alternate;if(!e){if(e=ei(t),e===null)throw Error(A(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gm(i),t;if(s===r)return Gm(i),e;s=s.sibling}throw Error(A(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(A(189))}}if(n.alternate!==r)throw Error(A(190))}if(n.tag!==3)throw Error(A(188));return n.stateNode.current===n?t:e}function Sv(t){return t=fA(t),t!==null?Rv(t):null}function Rv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Rv(t);if(e!==null)return e;t=t.sibling}return null}var Cv=vt.unstable_scheduleCallback,Km=vt.unstable_cancelCallback,pA=vt.unstable_shouldYield,mA=vt.unstable_requestPaint,ge=vt.unstable_now,gA=vt.unstable_getCurrentPriorityLevel,Ef=vt.unstable_ImmediatePriority,Pv=vt.unstable_UserBlockingPriority,El=vt.unstable_NormalPriority,yA=vt.unstable_LowPriority,kv=vt.unstable_IdlePriority,gu=null,en=null;function _A(t){if(en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(gu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ft=Math.clz32?Math.clz32:EA,vA=Math.log,wA=Math.LN2;function EA(t){return t>>>=0,t===0?32:31-(vA(t)/wA|0)|0}var Ca=64,Pa=4194304;function Ms(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ms(a):(s&=o,s!==0&&(r=Ms(s)))}else o=n&~i,o!==0?r=Ms(o):s!==0&&(r=Ms(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ft(e),i=1<<n,r|=t[n],e&=~i;return r}function TA(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IA(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ft(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=TA(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Hh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nv(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function Dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ft(e),t[e]=n}function AA(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Tf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Dv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xv,If,Ov,Lv,Vv,Wh=!1,ka=[],Wn=null,Gn=null,Kn=null,po=new Map,mo=new Map,Vn=[],SA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qm(t,e){switch(t){case"focusin":case"focusout":Wn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":mo.delete(e.pointerId)}}function As(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Qo(e),e!==null&&If(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function RA(t,e,n,r,i){switch(e){case"focusin":return Wn=As(Wn,t,e,n,r,i),!0;case"dragenter":return Gn=As(Gn,t,e,n,r,i),!0;case"mouseover":return Kn=As(Kn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return po.set(s,As(po.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,mo.set(s,As(mo.get(s)||null,t,e,n,r,i)),!0}return!1}function Mv(t){var e=Rr(t.target);if(e!==null){var n=ei(e);if(n!==null){if(e=n.tag,e===13){if(e=Av(n),e!==null){t.blockedOn=e,Vv(t.priority,function(){Ov(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function el(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jh=r,n.target.dispatchEvent(r),jh=null}else return e=Qo(n),e!==null&&If(e),t.blockedOn=n,!1;e.shift()}return!0}function Xm(t,e,n){el(t)&&n.delete(e)}function CA(){Wh=!1,Wn!==null&&el(Wn)&&(Wn=null),Gn!==null&&el(Gn)&&(Gn=null),Kn!==null&&el(Kn)&&(Kn=null),po.forEach(Xm),mo.forEach(Xm)}function Ss(t,e){t.blockedOn===e&&(t.blockedOn=null,Wh||(Wh=!0,vt.unstable_scheduleCallback(vt.unstable_NormalPriority,CA)))}function go(t){function e(i){return Ss(i,t)}if(0<ka.length){Ss(ka[0],t);for(var n=1;n<ka.length;n++){var r=ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Wn!==null&&Ss(Wn,t),Gn!==null&&Ss(Gn,t),Kn!==null&&Ss(Kn,t),po.forEach(e),mo.forEach(e),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)Mv(n),n.blockedOn===null&&Vn.shift()}var Oi=kn.ReactCurrentBatchConfig,Il=!0;function PA(t,e,n,r){var i=Y,s=Oi.transition;Oi.transition=null;try{Y=1,Af(t,e,n,r)}finally{Y=i,Oi.transition=s}}function kA(t,e,n,r){var i=Y,s=Oi.transition;Oi.transition=null;try{Y=4,Af(t,e,n,r)}finally{Y=i,Oi.transition=s}}function Af(t,e,n,r){if(Il){var i=Gh(t,e,n,r);if(i===null)jc(t,e,r,Al,n),Qm(t,r);else if(RA(i,t,e,n,r))r.stopPropagation();else if(Qm(t,r),e&4&&-1<SA.indexOf(t)){for(;i!==null;){var s=Qo(i);if(s!==null&&xv(s),s=Gh(t,e,n,r),s===null&&jc(t,e,r,Al,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else jc(t,e,r,null,n)}}var Al=null;function Gh(t,e,n,r){if(Al=null,t=wf(r),t=Rr(t),t!==null)if(e=ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Av(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function bv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gA()){case Ef:return 1;case Pv:return 4;case El:case yA:return 16;case kv:return 536870912;default:return 16}default:return 16}}var Bn=null,Sf=null,tl=null;function Uv(){if(tl)return tl;var t,e=Sf,n=e.length,r,i="value"in Bn?Bn.value:Bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return tl=i.slice(t,1<r?1-r:void 0)}function nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function Ym(){return!1}function Tt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Na:Ym,this.isPropagationStopped=Ym,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rf=Tt(as),Ko=ce({},as,{view:0,detail:0}),NA=Tt(Ko),xc,Oc,Rs,yu=ce({},Ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(xc=t.screenX-Rs.screenX,Oc=t.screenY-Rs.screenY):Oc=xc=0,Rs=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),Jm=Tt(yu),DA=ce({},yu,{dataTransfer:0}),xA=Tt(DA),OA=ce({},Ko,{relatedTarget:0}),Lc=Tt(OA),LA=ce({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),VA=Tt(LA),MA=ce({},as,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bA=Tt(MA),UA=ce({},as,{data:0}),Zm=Tt(UA),FA={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$A={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jA={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BA(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jA[t])?!!e[t]:!1}function Cf(){return BA}var zA=ce({},Ko,{key:function(t){if(t.key){var e=FA[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$A[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cf,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qA=Tt(zA),HA=ce({},yu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eg=Tt(HA),WA=ce({},Ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cf}),GA=Tt(WA),KA=ce({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),QA=Tt(KA),XA=ce({},yu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),YA=Tt(XA),JA=[9,13,27,32],Pf=Tn&&"CompositionEvent"in window,Ks=null;Tn&&"documentMode"in document&&(Ks=document.documentMode);var ZA=Tn&&"TextEvent"in window&&!Ks,Fv=Tn&&(!Pf||Ks&&8<Ks&&11>=Ks),tg=String.fromCharCode(32),ng=!1;function $v(t,e){switch(t){case"keyup":return JA.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function eS(t,e){switch(t){case"compositionend":return jv(e);case"keypress":return e.which!==32?null:(ng=!0,tg);case"textInput":return t=e.data,t===tg&&ng?null:t;default:return null}}function tS(t,e){if(yi)return t==="compositionend"||!Pf&&$v(t,e)?(t=Uv(),tl=Sf=Bn=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fv&&e.locale!=="ko"?null:e.data;default:return null}}var nS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nS[t.type]:e==="textarea"}function Bv(t,e,n,r){vv(r),e=Sl(e,"onChange"),0<e.length&&(n=new Rf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qs=null,yo=null;function rS(t){Zv(t,0)}function _u(t){var e=wi(t);if(dv(e))return t}function iS(t,e){if(t==="change")return e}var zv=!1;if(Tn){var Vc;if(Tn){var Mc="oninput"in document;if(!Mc){var ig=document.createElement("div");ig.setAttribute("oninput","return;"),Mc=typeof ig.oninput=="function"}Vc=Mc}else Vc=!1;zv=Vc&&(!document.documentMode||9<document.documentMode)}function sg(){Qs&&(Qs.detachEvent("onpropertychange",qv),yo=Qs=null)}function qv(t){if(t.propertyName==="value"&&_u(yo)){var e=[];Bv(e,yo,t,wf(t)),Iv(rS,e)}}function sS(t,e,n){t==="focusin"?(sg(),Qs=e,yo=n,Qs.attachEvent("onpropertychange",qv)):t==="focusout"&&sg()}function oS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return _u(yo)}function aS(t,e){if(t==="click")return _u(e)}function lS(t,e){if(t==="input"||t==="change")return _u(e)}function uS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:uS;function _o(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!kh.call(e,i)||!jt(t[i],e[i]))return!1}return!0}function og(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ag(t,e){var n=og(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=og(n)}}function Hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wv(){for(var t=window,e=_l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_l(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cS(t){var e=Wv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hv(n.ownerDocument.documentElement,n)){if(r!==null&&kf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ag(n,s);var o=ag(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hS=Tn&&"documentMode"in document&&11>=document.documentMode,_i=null,Kh=null,Xs=null,Qh=!1;function lg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qh||_i==null||_i!==_l(r)||(r=_i,"selectionStart"in r&&kf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xs&&_o(Xs,r)||(Xs=r,r=Sl(Kh,"onSelect"),0<r.length&&(e=new Rf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}function Da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vi={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},bc={},Gv={};Tn&&(Gv=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function vu(t){if(bc[t])return bc[t];if(!vi[t])return t;var e=vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Gv)return bc[t]=e[n];return t}var Kv=vu("animationend"),Qv=vu("animationiteration"),Xv=vu("animationstart"),Yv=vu("transitionend"),Jv=new Map,ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){Jv.set(t,e),Zr(e,[t])}for(var Uc=0;Uc<ug.length;Uc++){var Fc=ug[Uc],dS=Fc.toLowerCase(),fS=Fc[0].toUpperCase()+Fc.slice(1);ur(dS,"on"+fS)}ur(Kv,"onAnimationEnd");ur(Qv,"onAnimationIteration");ur(Xv,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Yv,"onTransitionEnd");Bi("onMouseEnter",["mouseout","mouseover"]);Bi("onMouseLeave",["mouseout","mouseover"]);Bi("onPointerEnter",["pointerout","pointerover"]);Bi("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pS=new Set("cancel close invalid load scroll toggle".split(" ").concat(bs));function cg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,dA(r,e,void 0,t),t.currentTarget=null}function Zv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;cg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;cg(i,a,u),s=l}}}if(wl)throw t=qh,wl=!1,qh=null,t}function ne(t,e){var n=e[ed];n===void 0&&(n=e[ed]=new Set);var r=t+"__bubble";n.has(r)||(e0(e,t,2,!1),n.add(r))}function $c(t,e,n){var r=0;e&&(r|=4),e0(n,t,r,e)}var xa="_reactListening"+Math.random().toString(36).slice(2);function vo(t){if(!t[xa]){t[xa]=!0,av.forEach(function(n){n!=="selectionchange"&&(pS.has(n)||$c(n,!1,t),$c(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xa]||(e[xa]=!0,$c("selectionchange",!1,e))}}function e0(t,e,n,r){switch(bv(e)){case 1:var i=PA;break;case 4:i=kA;break;default:i=Af}n=i.bind(null,e,n,t),i=void 0,!zh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function jc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Rr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Iv(function(){var u=s,c=wf(n),h=[];e:{var d=Jv.get(t);if(d!==void 0){var p=Rf,y=t;switch(t){case"keypress":if(nl(n)===0)break e;case"keydown":case"keyup":p=qA;break;case"focusin":y="focus",p=Lc;break;case"focusout":y="blur",p=Lc;break;case"beforeblur":case"afterblur":p=Lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Jm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xA;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=GA;break;case Kv:case Qv:case Xv:p=VA;break;case Yv:p=QA;break;case"scroll":p=NA;break;case"wheel":p=YA;break;case"copy":case"cut":case"paste":p=bA;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=eg}var _=(e&4)!==0,v=!_&&t==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,g;f!==null;){g=f;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=fo(f,m),w!=null&&_.push(wo(f,w,g)))),v)break;f=f.return}0<_.length&&(d=new p(d,y,null,n,c),h.push({event:d,listeners:_}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==jh&&(y=n.relatedTarget||n.fromElement)&&(Rr(y)||y[In]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Rr(y):null,y!==null&&(v=ei(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(_=Jm,w="onMouseLeave",m="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=eg,w="onPointerLeave",m="onPointerEnter",f="pointer"),v=p==null?d:wi(p),g=y==null?d:wi(y),d=new _(w,f+"leave",p,n,c),d.target=v,d.relatedTarget=g,w=null,Rr(c)===u&&(_=new _(m,f+"enter",y,n,c),_.target=g,_.relatedTarget=v,w=_),v=w,p&&y)t:{for(_=p,m=y,f=0,g=_;g;g=li(g))f++;for(g=0,w=m;w;w=li(w))g++;for(;0<f-g;)_=li(_),f--;for(;0<g-f;)m=li(m),g--;for(;f--;){if(_===m||m!==null&&_===m.alternate)break t;_=li(_),m=li(m)}_=null}else _=null;p!==null&&hg(h,d,p,_,!1),y!==null&&v!==null&&hg(h,v,y,_,!0)}}e:{if(d=u?wi(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var R=iS;else if(rg(d))if(zv)R=lS;else{R=oS;var C=sS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(R=aS);if(R&&(R=R(t,u))){Bv(h,R,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Mh(d,"number",d.value)}switch(C=u?wi(u):window,t){case"focusin":(rg(C)||C.contentEditable==="true")&&(_i=C,Kh=u,Xs=null);break;case"focusout":Xs=Kh=_i=null;break;case"mousedown":Qh=!0;break;case"contextmenu":case"mouseup":case"dragend":Qh=!1,lg(h,n,c);break;case"selectionchange":if(hS)break;case"keydown":case"keyup":lg(h,n,c)}var N;if(Pf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else yi?$v(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Fv&&n.locale!=="ko"&&(yi||L!=="onCompositionStart"?L==="onCompositionEnd"&&yi&&(N=Uv()):(Bn=c,Sf="value"in Bn?Bn.value:Bn.textContent,yi=!0)),C=Sl(u,L),0<C.length&&(L=new Zm(L,t,null,n,c),h.push({event:L,listeners:C}),N?L.data=N:(N=jv(n),N!==null&&(L.data=N)))),(N=ZA?eS(t,n):tS(t,n))&&(u=Sl(u,"onBeforeInput"),0<u.length&&(c=new Zm("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=N))}Zv(h,e)})}function wo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=fo(t,n),s!=null&&r.unshift(wo(t,s,i)),s=fo(t,e),s!=null&&r.push(wo(t,s,i))),t=t.return}return r}function li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function hg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=fo(n,s),l!=null&&o.unshift(wo(n,l,a))):i||(l=fo(n,s),l!=null&&o.push(wo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var mS=/\r\n?/g,gS=/\u0000|\uFFFD/g;function dg(t){return(typeof t=="string"?t:""+t).replace(mS,`
`).replace(gS,"")}function Oa(t,e,n){if(e=dg(e),dg(t)!==e&&n)throw Error(A(425))}function Rl(){}var Xh=null,Yh=null;function Jh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zh=typeof setTimeout=="function"?setTimeout:void 0,yS=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(t){return fg.resolve(null).then(t).catch(vS)}:Zh;function vS(t){setTimeout(function(){throw t})}function Bc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),go(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);go(e)}function Qn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),Kt="__reactFiber$"+ls,Eo="__reactProps$"+ls,In="__reactContainer$"+ls,ed="__reactEvents$"+ls,wS="__reactListeners$"+ls,ES="__reactHandles$"+ls;function Rr(t){var e=t[Kt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[In]||n[Kt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pg(t);t!==null;){if(n=t[Kt])return n;t=pg(t)}return e}t=n,n=t.parentNode}return null}function Qo(t){return t=t[Kt]||t[In],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(A(33))}function wu(t){return t[Eo]||null}var td=[],Ei=-1;function cr(t){return{current:t}}function se(t){0>Ei||(t.current=td[Ei],td[Ei]=null,Ei--)}function Z(t,e){Ei++,td[Ei]=t.current,t.current=e}var sr={},Qe=cr(sr),at=cr(!1),Ur=sr;function zi(t,e){var n=t.type.contextTypes;if(!n)return sr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function lt(t){return t=t.childContextTypes,t!=null}function Cl(){se(at),se(Qe)}function mg(t,e,n){if(Qe.current!==sr)throw Error(A(168));Z(Qe,e),Z(at,n)}function t0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(A(108,sA(t)||"Unknown",i));return ce({},n,r)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Ur=Qe.current,Z(Qe,t),Z(at,at.current),!0}function gg(t,e,n){var r=t.stateNode;if(!r)throw Error(A(169));n?(t=t0(t,e,Ur),r.__reactInternalMemoizedMergedChildContext=t,se(at),se(Qe),Z(Qe,t)):se(at),Z(at,n)}var dn=null,Eu=!1,zc=!1;function n0(t){dn===null?dn=[t]:dn.push(t)}function TS(t){Eu=!0,n0(t)}function hr(){if(!zc&&dn!==null){zc=!0;var t=0,e=Y;try{var n=dn;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}dn=null,Eu=!1}catch(i){throw dn!==null&&(dn=dn.slice(t+1)),Cv(Ef,hr),i}finally{Y=e,zc=!1}}return null}var Ti=[],Ii=0,kl=null,Nl=0,It=[],At=0,Fr=null,fn=1,pn="";function Tr(t,e){Ti[Ii++]=Nl,Ti[Ii++]=kl,kl=t,Nl=e}function r0(t,e,n){It[At++]=fn,It[At++]=pn,It[At++]=Fr,Fr=t;var r=fn;t=pn;var i=32-Ft(r)-1;r&=~(1<<i),n+=1;var s=32-Ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,fn=1<<32-Ft(e)+i|n<<i|r,pn=s+t}else fn=1<<s|n<<i|r,pn=t}function Nf(t){t.return!==null&&(Tr(t,1),r0(t,1,0))}function Df(t){for(;t===kl;)kl=Ti[--Ii],Ti[Ii]=null,Nl=Ti[--Ii],Ti[Ii]=null;for(;t===Fr;)Fr=It[--At],It[At]=null,pn=It[--At],It[At]=null,fn=It[--At],It[At]=null}var yt=null,pt=null,ae=!1,Ut=null;function i0(t,e){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function yg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yt=t,pt=Qn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yt=t,pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Fr!==null?{id:fn,overflow:pn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yt=t,pt=null,!0):!1;default:return!1}}function nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rd(t){if(ae){var e=pt;if(e){var n=e;if(!yg(t,e)){if(nd(t))throw Error(A(418));e=Qn(n.nextSibling);var r=yt;e&&yg(t,e)?i0(r,n):(t.flags=t.flags&-4097|2,ae=!1,yt=t)}}else{if(nd(t))throw Error(A(418));t.flags=t.flags&-4097|2,ae=!1,yt=t}}}function _g(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yt=t}function La(t){if(t!==yt)return!1;if(!ae)return _g(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jh(t.type,t.memoizedProps)),e&&(e=pt)){if(nd(t))throw s0(),Error(A(418));for(;e;)i0(t,e),e=Qn(e.nextSibling)}if(_g(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(A(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pt=Qn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pt=null}}else pt=yt?Qn(t.stateNode.nextSibling):null;return!0}function s0(){for(var t=pt;t;)t=Qn(t.nextSibling)}function qi(){pt=yt=null,ae=!1}function xf(t){Ut===null?Ut=[t]:Ut.push(t)}var IS=kn.ReactCurrentBatchConfig;function Mt(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Dl=cr(null),xl=null,Ai=null,Of=null;function Lf(){Of=Ai=xl=null}function Vf(t){var e=Dl.current;se(Dl),t._currentValue=e}function id(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Li(t,e){xl=t,Of=Ai=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ot=!0),t.firstContext=null)}function Nt(t){var e=t._currentValue;if(Of!==t)if(t={context:t,memoizedValue:e,next:null},Ai===null){if(xl===null)throw Error(A(308));Ai=t,xl.dependencies={lanes:0,firstContext:t}}else Ai=Ai.next=t;return e}var Cr=null;function Mf(t){Cr===null?Cr=[t]:Cr.push(t)}function o0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Mf(e)):(n.next=i.next,i.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ln=!1;function bf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Xn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,An(t,n)}return i=r.interleaved,i===null?(e.next=e,Mf(r)):(e.next=i.next,i.next=e),r.interleaved=e,An(t,n)}function rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tf(t,n)}}function vg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ol(t,e,n,r){var i=t.updateQueue;Ln=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,p=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=ce({},h,d);break e;case 2:Ln=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);jr|=o,t.lanes=o,t.memoizedState=h}}function wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(A(191,i));i.call(r)}}}var l0=new ov.Component().refs;function sd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tu={isMounted:function(t){return(t=t._reactInternals)?ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=et(),i=Jn(t),s=vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&($t(e,t,i,r),rl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=et(),i=Jn(t),s=vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Xn(t,s,i),e!==null&&($t(e,t,i,r),rl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=et(),r=Jn(t),i=vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Xn(t,i,r),e!==null&&($t(e,t,r,n),rl(e,t,r))}};function Eg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!_o(n,r)||!_o(i,s):!0}function u0(t,e,n){var r=!1,i=sr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nt(s):(i=lt(e)?Ur:Qe.current,r=e.contextTypes,s=(r=r!=null)?zi(t,i):sr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tu.enqueueReplaceState(e,e.state,null)}function od(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=l0,bf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nt(s):(s=lt(e)?Ur:Qe.current,i.context=zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(sd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tu.enqueueReplaceState(i,i.state,null),Ol(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(A(309));var r=n.stateNode}if(!r)throw Error(A(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===l0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(A(284));if(!n._owner)throw Error(A(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(A(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ig(t){var e=t._init;return e(t._payload)}function c0(t){function e(m,f){if(t){var g=m.deletions;g===null?(m.deletions=[f],m.flags|=16):g.push(f)}}function n(m,f){if(!t)return null;for(;f!==null;)e(m,f),f=f.sibling;return null}function r(m,f){for(m=new Map;f!==null;)f.key!==null?m.set(f.key,f):m.set(f.index,f),f=f.sibling;return m}function i(m,f){return m=Zn(m,f),m.index=0,m.sibling=null,m}function s(m,f,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<f?(m.flags|=2,f):g):(m.flags|=2,f)):(m.flags|=1048576,f)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,f,g,w){return f===null||f.tag!==6?(f=Xc(g,m.mode,w),f.return=m,f):(f=i(f,g),f.return=m,f)}function l(m,f,g,w){var R=g.type;return R===gi?c(m,f,g.props.children,w,g.key):f!==null&&(f.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===On&&Ig(R)===f.type)?(w=i(f,g.props),w.ref=Cs(m,f,g),w.return=m,w):(w=ul(g.type,g.key,g.props,null,m.mode,w),w.ref=Cs(m,f,g),w.return=m,w)}function u(m,f,g,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Yc(g,m.mode,w),f.return=m,f):(f=i(f,g.children||[]),f.return=m,f)}function c(m,f,g,w,R){return f===null||f.tag!==7?(f=Vr(g,m.mode,w,R),f.return=m,f):(f=i(f,g),f.return=m,f)}function h(m,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Xc(""+f,m.mode,g),f.return=m,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Aa:return g=ul(f.type,f.key,f.props,null,m.mode,g),g.ref=Cs(m,null,f),g.return=m,g;case mi:return f=Yc(f,m.mode,g),f.return=m,f;case On:var w=f._init;return h(m,w(f._payload),g)}if(Vs(f)||Ts(f))return f=Vr(f,m.mode,g,null),f.return=m,f;Va(m,f)}return null}function d(m,f,g,w){var R=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return R!==null?null:a(m,f,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Aa:return g.key===R?l(m,f,g,w):null;case mi:return g.key===R?u(m,f,g,w):null;case On:return R=g._init,d(m,f,R(g._payload),w)}if(Vs(g)||Ts(g))return R!==null?null:c(m,f,g,w,null);Va(m,g)}return null}function p(m,f,g,w,R){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,a(f,m,""+w,R);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Aa:return m=m.get(w.key===null?g:w.key)||null,l(f,m,w,R);case mi:return m=m.get(w.key===null?g:w.key)||null,u(f,m,w,R);case On:var C=w._init;return p(m,f,g,C(w._payload),R)}if(Vs(w)||Ts(w))return m=m.get(g)||null,c(f,m,w,R,null);Va(f,w)}return null}function y(m,f,g,w){for(var R=null,C=null,N=f,L=f=0,Q=null;N!==null&&L<g.length;L++){N.index>L?(Q=N,N=null):Q=N.sibling;var B=d(m,N,g[L],w);if(B===null){N===null&&(N=Q);break}t&&N&&B.alternate===null&&e(m,N),f=s(B,f,L),C===null?R=B:C.sibling=B,C=B,N=Q}if(L===g.length)return n(m,N),ae&&Tr(m,L),R;if(N===null){for(;L<g.length;L++)N=h(m,g[L],w),N!==null&&(f=s(N,f,L),C===null?R=N:C.sibling=N,C=N);return ae&&Tr(m,L),R}for(N=r(m,N);L<g.length;L++)Q=p(N,m,L,g[L],w),Q!==null&&(t&&Q.alternate!==null&&N.delete(Q.key===null?L:Q.key),f=s(Q,f,L),C===null?R=Q:C.sibling=Q,C=Q);return t&&N.forEach(function(Lt){return e(m,Lt)}),ae&&Tr(m,L),R}function _(m,f,g,w){var R=Ts(g);if(typeof R!="function")throw Error(A(150));if(g=R.call(g),g==null)throw Error(A(151));for(var C=R=null,N=f,L=f=0,Q=null,B=g.next();N!==null&&!B.done;L++,B=g.next()){N.index>L?(Q=N,N=null):Q=N.sibling;var Lt=d(m,N,B.value,w);if(Lt===null){N===null&&(N=Q);break}t&&N&&Lt.alternate===null&&e(m,N),f=s(Lt,f,L),C===null?R=Lt:C.sibling=Lt,C=Lt,N=Q}if(B.done)return n(m,N),ae&&Tr(m,L),R;if(N===null){for(;!B.done;L++,B=g.next())B=h(m,B.value,w),B!==null&&(f=s(B,f,L),C===null?R=B:C.sibling=B,C=B);return ae&&Tr(m,L),R}for(N=r(m,N);!B.done;L++,B=g.next())B=p(N,m,L,B.value,w),B!==null&&(t&&B.alternate!==null&&N.delete(B.key===null?L:B.key),f=s(B,f,L),C===null?R=B:C.sibling=B,C=B);return t&&N.forEach(function(ws){return e(m,ws)}),ae&&Tr(m,L),R}function v(m,f,g,w){if(typeof g=="object"&&g!==null&&g.type===gi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Aa:e:{for(var R=g.key,C=f;C!==null;){if(C.key===R){if(R=g.type,R===gi){if(C.tag===7){n(m,C.sibling),f=i(C,g.props.children),f.return=m,m=f;break e}}else if(C.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===On&&Ig(R)===C.type){n(m,C.sibling),f=i(C,g.props),f.ref=Cs(m,C,g),f.return=m,m=f;break e}n(m,C);break}else e(m,C);C=C.sibling}g.type===gi?(f=Vr(g.props.children,m.mode,w,g.key),f.return=m,m=f):(w=ul(g.type,g.key,g.props,null,m.mode,w),w.ref=Cs(m,f,g),w.return=m,m=w)}return o(m);case mi:e:{for(C=g.key;f!==null;){if(f.key===C)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(m,f.sibling),f=i(f,g.children||[]),f.return=m,m=f;break e}else{n(m,f);break}else e(m,f);f=f.sibling}f=Yc(g,m.mode,w),f.return=m,m=f}return o(m);case On:return C=g._init,v(m,f,C(g._payload),w)}if(Vs(g))return y(m,f,g,w);if(Ts(g))return _(m,f,g,w);Va(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(m,f.sibling),f=i(f,g),f.return=m,m=f):(n(m,f),f=Xc(g,m.mode,w),f.return=m,m=f),o(m)):n(m,f)}return v}var Hi=c0(!0),h0=c0(!1),Xo={},tn=cr(Xo),To=cr(Xo),Io=cr(Xo);function Pr(t){if(t===Xo)throw Error(A(174));return t}function Uf(t,e){switch(Z(Io,e),Z(To,t),Z(tn,Xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uh(e,t)}se(tn),Z(tn,e)}function Wi(){se(tn),se(To),se(Io)}function d0(t){Pr(Io.current);var e=Pr(tn.current),n=Uh(e,t.type);e!==n&&(Z(To,t),Z(tn,n))}function Ff(t){To.current===t&&(se(tn),se(To))}var le=cr(0);function Ll(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function $f(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var il=kn.ReactCurrentDispatcher,Hc=kn.ReactCurrentBatchConfig,$r=0,ue=null,Ae=null,Pe=null,Vl=!1,Ys=!1,Ao=0,AS=0;function $e(){throw Error(A(321))}function jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function Bf(t,e,n,r,i,s){if($r=s,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,il.current=t===null||t.memoizedState===null?PS:kS,t=n(r,i),Ys){s=0;do{if(Ys=!1,Ao=0,25<=s)throw Error(A(301));s+=1,Pe=Ae=null,e.updateQueue=null,il.current=NS,t=n(r,i)}while(Ys)}if(il.current=Ml,e=Ae!==null&&Ae.next!==null,$r=0,Pe=Ae=ue=null,Vl=!1,e)throw Error(A(300));return t}function zf(){var t=Ao!==0;return Ao=0,t}function Gt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?ue.memoizedState=Pe=t:Pe=Pe.next=t,Pe}function Dt(){if(Ae===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=Ae.next;var e=Pe===null?ue.memoizedState:Pe.next;if(e!==null)Pe=e,Ae=t;else{if(t===null)throw Error(A(310));Ae=t,t={memoizedState:Ae.memoizedState,baseState:Ae.baseState,baseQueue:Ae.baseQueue,queue:Ae.queue,next:null},Pe===null?ue.memoizedState=Pe=t:Pe=Pe.next=t}return Pe}function So(t,e){return typeof e=="function"?e(t):e}function Wc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=Ae,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if(($r&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ue.lanes|=c,jr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,jt(r,e.memoizedState)||(ot=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ue.lanes|=s,jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(A(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jt(s,e.memoizedState)||(ot=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function f0(){}function p0(t,e){var n=ue,r=Dt(),i=e(),s=!jt(r.memoizedState,i);if(s&&(r.memoizedState=i,ot=!0),r=r.queue,qf(y0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Pe!==null&&Pe.memoizedState.tag&1){if(n.flags|=2048,Ro(9,g0.bind(null,n,r,i,e),void 0,null),ke===null)throw Error(A(349));$r&30||m0(n,e,i)}return i}function m0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function g0(t,e,n,r){e.value=n,e.getSnapshot=r,_0(e)&&v0(t)}function y0(t,e,n){return n(function(){_0(e)&&v0(t)})}function _0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function v0(t){var e=An(t,1);e!==null&&$t(e,t,1,-1)}function Ag(t){var e=Gt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=CS.bind(null,ue,t),[e.memoizedState,t]}function Ro(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function w0(){return Dt().memoizedState}function sl(t,e,n,r){var i=Gt();ue.flags|=t,i.memoizedState=Ro(1|e,n,void 0,r===void 0?null:r)}function Iu(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(Ae!==null){var o=Ae.memoizedState;if(s=o.destroy,r!==null&&jf(r,o.deps)){i.memoizedState=Ro(e,n,s,r);return}}ue.flags|=t,i.memoizedState=Ro(1|e,n,s,r)}function Sg(t,e){return sl(8390656,8,t,e)}function qf(t,e){return Iu(2048,8,t,e)}function E0(t,e){return Iu(4,2,t,e)}function T0(t,e){return Iu(4,4,t,e)}function I0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A0(t,e,n){return n=n!=null?n.concat([t]):null,Iu(4,4,I0.bind(null,e,t),n)}function Hf(){}function S0(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function R0(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&jf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function C0(t,e,n){return $r&21?(jt(n,e)||(n=Nv(),ue.lanes|=n,jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ot=!0),t.memoizedState=n)}function SS(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Hc.transition;Hc.transition={};try{t(!1),e()}finally{Y=n,Hc.transition=r}}function P0(){return Dt().memoizedState}function RS(t,e,n){var r=Jn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},k0(t))N0(e,n);else if(n=o0(t,e,n,r),n!==null){var i=et();$t(n,t,r,i),D0(n,e,r)}}function CS(t,e,n){var r=Jn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(k0(t))N0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,jt(a,o)){var l=e.interleaved;l===null?(i.next=i,Mf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=o0(t,e,i,r),n!==null&&(i=et(),$t(n,t,r,i),D0(n,e,r))}}function k0(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function N0(t,e){Ys=Vl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Tf(t,n)}}var Ml={readContext:Nt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},PS={readContext:Nt,useCallback:function(t,e){return Gt().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:Sg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sl(4194308,4,I0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return sl(4,2,t,e)},useMemo:function(t,e){var n=Gt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RS.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=Gt();return t={current:t},e.memoizedState=t},useState:Ag,useDebugValue:Hf,useDeferredValue:function(t){return Gt().memoizedState=t},useTransition:function(){var t=Ag(!1),e=t[0];return t=SS.bind(null,t[1]),Gt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,i=Gt();if(ae){if(n===void 0)throw Error(A(407));n=n()}else{if(n=e(),ke===null)throw Error(A(349));$r&30||m0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sg(y0.bind(null,r,s,t),[t]),r.flags|=2048,Ro(9,g0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Gt(),e=ke.identifierPrefix;if(ae){var n=pn,r=fn;n=(r&~(1<<32-Ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ao++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=AS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kS={readContext:Nt,useCallback:S0,useContext:Nt,useEffect:qf,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:R0,useReducer:Wc,useRef:w0,useState:function(){return Wc(So)},useDebugValue:Hf,useDeferredValue:function(t){var e=Dt();return C0(e,Ae.memoizedState,t)},useTransition:function(){var t=Wc(So)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:f0,useSyncExternalStore:p0,useId:P0,unstable_isNewReconciler:!1},NS={readContext:Nt,useCallback:S0,useContext:Nt,useEffect:qf,useImperativeHandle:A0,useInsertionEffect:E0,useLayoutEffect:T0,useMemo:R0,useReducer:Gc,useRef:w0,useState:function(){return Gc(So)},useDebugValue:Hf,useDeferredValue:function(t){var e=Dt();return Ae===null?e.memoizedState=t:C0(e,Ae.memoizedState,t)},useTransition:function(){var t=Gc(So)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:f0,useSyncExternalStore:p0,useId:P0,unstable_isNewReconciler:!1};function Gi(t,e){try{var n="",r=e;do n+=iA(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Kc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DS=typeof WeakMap=="function"?WeakMap:Map;function x0(t,e,n){n=vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ul||(Ul=!0,yd=r),ad(t,e)},n}function O0(t,e,n){n=vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){ad(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ad(t,e),typeof r!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new DS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=HS.bind(null,t,e,n),e.then(t,t))}function Cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Pg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vn(-1,1),e.tag=2,Xn(n,e,1))),n.lanes|=1),t)}var xS=kn.ReactCurrentOwner,ot=!1;function Je(t,e,n,r){e.child=t===null?h0(e,null,n,r):Hi(e,t.child,n,r)}function kg(t,e,n,r,i){n=n.render;var s=e.ref;return Li(e,i),r=Bf(t,e,n,r,s,i),n=zf(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(ae&&n&&Nf(e),e.flags|=1,Je(t,e,r,i),e.child)}function Ng(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Zf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,L0(t,e,s,r,i)):(t=ul(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_o,n(o,r)&&t.ref===e.ref)return Sn(t,e,i)}return e.flags|=1,t=Zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function L0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(_o(s,r)&&t.ref===e.ref)if(ot=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ot=!0);else return e.lanes=t.lanes,Sn(t,e,i)}return ld(t,e,n,r,i)}function V0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(Ri,dt),dt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(Ri,dt),dt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(Ri,dt),dt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(Ri,dt),dt|=r;return Je(t,e,i,n),e.child}function M0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ld(t,e,n,r,i){var s=lt(n)?Ur:Qe.current;return s=zi(e,s),Li(e,i),n=Bf(t,e,n,r,s,i),r=zf(),t!==null&&!ot?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Sn(t,e,i)):(ae&&r&&Nf(e),e.flags|=1,Je(t,e,n,i),e.child)}function Dg(t,e,n,r,i){if(lt(n)){var s=!0;Pl(e)}else s=!1;if(Li(e,i),e.stateNode===null)ol(t,e),u0(e,n,r),od(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nt(u):(u=lt(n)?Ur:Qe.current,u=zi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Tg(e,o,r,u),Ln=!1;var d=e.memoizedState;o.state=d,Ol(e,r,o,i),l=e.memoizedState,a!==r||d!==l||at.current||Ln?(typeof c=="function"&&(sd(e,n,c,r),l=e.memoizedState),(a=Ln||Eg(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,a0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Mt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nt(l):(l=lt(n)?Ur:Qe.current,l=zi(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Tg(e,o,r,l),Ln=!1,d=e.memoizedState,o.state=d,Ol(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||at.current||Ln?(typeof p=="function"&&(sd(e,n,p,r),y=e.memoizedState),(u=Ln||Eg(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return ud(t,e,n,r,s,i)}function ud(t,e,n,r,i,s){M0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gg(e,n,!1),Sn(t,e,s);r=e.stateNode,xS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hi(e,t.child,null,s),e.child=Hi(e,null,a,s)):Je(t,e,a,s),e.memoizedState=r.state,i&&gg(e,n,!0),e.child}function b0(t){var e=t.stateNode;e.pendingContext?mg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mg(t,e.context,!1),Uf(t,e.containerInfo)}function xg(t,e,n,r,i){return qi(),xf(i),e.flags|=256,Je(t,e,n,r),e.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function hd(t){return{baseLanes:t,cachePool:null,transitions:null}}function U0(t,e,n){var r=e.pendingProps,i=le.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(le,i&1),t===null)return rd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ru(o,r,0,null),t=Vr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=hd(n),e.memoizedState=cd,t):Wf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return OS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Zn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Zn(a,s):(s=Vr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?hd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=cd,r}return s=t.child,t=s.sibling,r=Zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wf(t,e){return e=Ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,r){return r!==null&&xf(r),Hi(e,t.child,null,n),t=Wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function OS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Kc(Error(A(422))),Ma(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ru({mode:"visible",children:r.children},i,0,null),s=Vr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hi(e,t.child,null,o),e.child.memoizedState=hd(o),e.memoizedState=cd,s);if(!(e.mode&1))return Ma(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(A(419)),r=Kc(s,r,void 0),Ma(t,e,o,r)}if(a=(o&t.childLanes)!==0,ot||a){if(r=ke,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,An(t,i),$t(r,t,i,-1))}return Jf(),r=Kc(Error(A(421))),Ma(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=WS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,pt=Qn(i.nextSibling),yt=e,ae=!0,Ut=null,t!==null&&(It[At++]=fn,It[At++]=pn,It[At++]=Fr,fn=t.id,pn=t.overflow,Fr=e),e=Wf(e,r.children),e.flags|=4096,e)}function Og(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),id(t.return,e,n)}function Qc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function F0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Je(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Og(t,n,e);else if(t.tag===19)Og(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(le,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ll(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Qc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ll(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Qc(e,!0,n,null,s);break;case"together":Qc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Sn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(A(153));if(e.child!==null){for(t=e.child,n=Zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function LS(t,e,n){switch(e.tag){case 3:b0(e),qi();break;case 5:d0(e);break;case 1:lt(e.type)&&Pl(e);break;case 4:Uf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(Dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?U0(t,e,n):(Z(le,le.current&1),t=Sn(t,e,n),t!==null?t.sibling:null);Z(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return F0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,V0(t,e,n)}return Sn(t,e,n)}var $0,dd,j0,B0;$0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dd=function(){};j0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pr(tn.current);var s=null;switch(n){case"input":i=Lh(t,i),r=Lh(t,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=bh(t,i),r=bh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Rl)}Fh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(co.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(co.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};B0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ps(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function VS(t,e,n){var r=e.pendingProps;switch(Df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(e),null;case 1:return lt(e.type)&&Cl(),je(e),null;case 3:return r=e.stateNode,Wi(),se(at),se(Qe),$f(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(La(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ut!==null&&(wd(Ut),Ut=null))),dd(t,e),je(e),null;case 5:Ff(e);var i=Pr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)j0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(A(166));return je(e),null}if(t=Pr(tn.current),La(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Kt]=e,r[Eo]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<bs.length;i++)ne(bs[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Bm(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":qm(r,s),ne("invalid",r)}Fh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Oa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Oa(r.textContent,a,t),i=["children",""+a]):co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":Sa(r),zm(r,s,!0);break;case"textarea":Sa(r),Hm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Rl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Kt]=e,t[Eo]=r,$0(t,e,!1,!1),e.stateNode=t;e:{switch(o=$h(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<bs.length;i++)ne(bs[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":Bm(t,r),i=Lh(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ne("invalid",t);break;case"textarea":qm(t,r),i=bh(t,r),ne("invalid",t);break;default:i=r}Fh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_v(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&gv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ho(t,l):typeof l=="number"&&ho(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",t):l!=null&&gf(t,s,l,o))}switch(n){case"input":Sa(t),zm(t,r,!1);break;case"textarea":Sa(t),Hm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ir(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ni(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ni(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return je(e),null;case 6:if(t&&e.stateNode!=null)B0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(A(166));if(n=Pr(Io.current),Pr(tn.current),La(e)){if(r=e.stateNode,n=e.memoizedProps,r[Kt]=e,(s=r.nodeValue!==n)&&(t=yt,t!==null))switch(t.tag){case 3:Oa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Oa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=e,e.stateNode=r}return je(e),null;case 13:if(se(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&pt!==null&&e.mode&1&&!(e.flags&128))s0(),qi(),e.flags|=98560,s=!1;else if(s=La(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(A(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(A(317));s[Kt]=e}else qi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;je(e),s=!1}else Ut!==null&&(wd(Ut),Ut=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?Se===0&&(Se=3):Jf())),e.updateQueue!==null&&(e.flags|=4),je(e),null);case 4:return Wi(),dd(t,e),t===null&&vo(e.stateNode.containerInfo),je(e),null;case 10:return Vf(e.type._context),je(e),null;case 17:return lt(e.type)&&Cl(),je(e),null;case 19:if(se(le),s=e.memoizedState,s===null)return je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ps(s,!1);else{if(Se!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ll(t),o!==null){for(e.flags|=128,Ps(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(le,le.current&1|2),e.child}t=t.sibling}s.tail!==null&&ge()>Ki&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ll(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ps(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ae)return je(e),null}else 2*ge()-s.renderingStartTime>Ki&&n!==1073741824&&(e.flags|=128,r=!0,Ps(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ge(),e.sibling=null,n=le.current,Z(le,r?n&1|2:n&1),e):(je(e),null);case 22:case 23:return Yf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?dt&1073741824&&(je(e),e.subtreeFlags&6&&(e.flags|=8192)):je(e),null;case 24:return null;case 25:return null}throw Error(A(156,e.tag))}function MS(t,e){switch(Df(e),e.tag){case 1:return lt(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Wi(),se(at),se(Qe),$f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ff(e),null;case 13:if(se(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(A(340));qi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(le),null;case 4:return Wi(),null;case 10:return Vf(e.type._context),null;case 22:case 23:return Yf(),null;case 24:return null;default:return null}}var ba=!1,qe=!1,bS=typeof WeakSet=="function"?WeakSet:Set,x=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(t,e,r)}else n.current=null}function fd(t,e,n){try{n()}catch(r){fe(t,e,r)}}var Lg=!1;function US(t,e){if(Xh=Il,t=Wv(),kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yh={focusedElem:t,selectionRange:n},Il=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,v=y.memoizedState,m=e.stateNode,f=m.getSnapshotBeforeUpdate(e.elementType===e.type?_:Mt(e.type,_),v);m.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(A(163))}}catch(w){fe(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return y=Lg,Lg=!1,y}function Js(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&fd(e,n,s)}i=i.next}while(i!==r)}}function Au(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function pd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function z0(t){var e=t.alternate;e!==null&&(t.alternate=null,z0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Kt],delete e[Eo],delete e[ed],delete e[wS],delete e[ES])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q0(t){return t.tag===5||t.tag===3||t.tag===4}function Vg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function md(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(r!==4&&(t=t.child,t!==null))for(md(t,e,n),t=t.sibling;t!==null;)md(t,e,n),t=t.sibling}function gd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}var xe=null,bt=!1;function Dn(t,e,n){for(n=n.child;n!==null;)H0(t,e,n),n=n.sibling}function H0(t,e,n){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(gu,n)}catch{}switch(n.tag){case 5:qe||Si(n,e);case 6:var r=xe,i=bt;xe=null,Dn(t,e,n),xe=r,bt=i,xe!==null&&(bt?(t=xe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):xe.removeChild(n.stateNode));break;case 18:xe!==null&&(bt?(t=xe,n=n.stateNode,t.nodeType===8?Bc(t.parentNode,n):t.nodeType===1&&Bc(t,n),go(t)):Bc(xe,n.stateNode));break;case 4:r=xe,i=bt,xe=n.stateNode.containerInfo,bt=!0,Dn(t,e,n),xe=r,bt=i;break;case 0:case 11:case 14:case 15:if(!qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&fd(n,e,o),i=i.next}while(i!==r)}Dn(t,e,n);break;case 1:if(!qe&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,e,a)}Dn(t,e,n);break;case 21:Dn(t,e,n);break;case 22:n.mode&1?(qe=(r=qe)||n.memoizedState!==null,Dn(t,e,n),qe=r):Dn(t,e,n);break;default:Dn(t,e,n)}}function Mg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bS),e.forEach(function(r){var i=GS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:xe=a.stateNode,bt=!1;break e;case 3:xe=a.stateNode.containerInfo,bt=!0;break e;case 4:xe=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if(xe===null)throw Error(A(160));H0(s,o,i),xe=null,bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){fe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)W0(e,t),e=e.sibling}function W0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vt(e,t),Wt(t),r&4){try{Js(3,t,t.return),Au(3,t)}catch(_){fe(t,t.return,_)}try{Js(5,t,t.return)}catch(_){fe(t,t.return,_)}}break;case 1:Vt(e,t),Wt(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Vt(e,t),Wt(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var i=t.stateNode;try{ho(i,"")}catch(_){fe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&fv(i,s),$h(a,o);var u=$h(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?_v(i,h):c==="dangerouslySetInnerHTML"?gv(i,h):c==="children"?ho(i,h):gf(i,c,h,u)}switch(a){case"input":Vh(i,s);break;case"textarea":pv(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ni(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ni(i,!!s.multiple,s.defaultValue,!0):Ni(i,!!s.multiple,s.multiple?[]:"",!1))}i[Eo]=s}catch(_){fe(t,t.return,_)}}break;case 6:if(Vt(e,t),Wt(t),r&4){if(t.stateNode===null)throw Error(A(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){fe(t,t.return,_)}}break;case 3:if(Vt(e,t),Wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{go(e.containerInfo)}catch(_){fe(t,t.return,_)}break;case 4:Vt(e,t),Wt(t);break;case 13:Vt(e,t),Wt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Qf=ge())),r&4&&Mg(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qe=(u=qe)||c,Vt(e,t),qe=u):Vt(e,t),Wt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(h=x=c;x!==null;){switch(d=x,p=d.child,d.tag){case 0:case 11:case 14:case 15:Js(4,d,d.return);break;case 1:Si(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){fe(r,n,_)}}break;case 5:Si(d,d.return);break;case 22:if(d.memoizedState!==null){Ug(h);continue}}p!==null?(p.return=d,x=p):Ug(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=yv("display",o))}catch(_){fe(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){fe(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Vt(e,t),Wt(t),r&4&&Mg(t);break;case 21:break;default:Vt(e,t),Wt(t)}}function Wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q0(n)){var r=n;break e}n=n.return}throw Error(A(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ho(i,""),r.flags&=-33);var s=Vg(t);gd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Vg(t);md(t,a,o);break;default:throw Error(A(161))}}catch(l){fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function FS(t,e,n){x=t,G0(t)}function G0(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ba;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qe;a=ba;var u=qe;if(ba=o,(qe=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?Fg(i):l!==null?(l.return=o,x=l):Fg(i);for(;s!==null;)x=s,G0(s),s=s.sibling;x=i,ba=a,qe=u}bg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):bg(t)}}function bg(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qe||Au(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Mt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&go(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(A(163))}qe||e.flags&512&&pd(e)}catch(d){fe(e,e.return,d)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function Ug(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function Fg(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Au(4,e)}catch(l){fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){fe(e,i,l)}}var s=e.return;try{pd(e)}catch(l){fe(e,s,l)}break;case 5:var o=e.return;try{pd(e)}catch(l){fe(e,o,l)}}}catch(l){fe(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var $S=Math.ceil,bl=kn.ReactCurrentDispatcher,Gf=kn.ReactCurrentOwner,Pt=kn.ReactCurrentBatchConfig,K=0,ke=null,Ee=null,Me=0,dt=0,Ri=cr(0),Se=0,Co=null,jr=0,Su=0,Kf=0,Zs=null,it=null,Qf=0,Ki=1/0,hn=null,Ul=!1,yd=null,Yn=null,Ua=!1,zn=null,Fl=0,eo=0,_d=null,al=-1,ll=0;function et(){return K&6?ge():al!==-1?al:al=ge()}function Jn(t){return t.mode&1?K&2&&Me!==0?Me&-Me:IS.transition!==null?(ll===0&&(ll=Nv()),ll):(t=Y,t!==0||(t=window.event,t=t===void 0?16:bv(t.type)),t):1}function $t(t,e,n,r){if(50<eo)throw eo=0,_d=null,Error(A(185));Go(t,n,r),(!(K&2)||t!==ke)&&(t===ke&&(!(K&2)&&(Su|=n),Se===4&&Mn(t,Me)),ut(t,r),n===1&&K===0&&!(e.mode&1)&&(Ki=ge()+500,Eu&&hr()))}function ut(t,e){var n=t.callbackNode;IA(t,e);var r=Tl(t,t===ke?Me:0);if(r===0)n!==null&&Km(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Km(n),e===1)t.tag===0?TS($g.bind(null,t)):n0($g.bind(null,t)),_S(function(){!(K&6)&&hr()}),n=null;else{switch(Dv(r)){case 1:n=Ef;break;case 4:n=Pv;break;case 16:n=El;break;case 536870912:n=kv;break;default:n=El}n=tw(n,K0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function K0(t,e){if(al=-1,ll=0,K&6)throw Error(A(327));var n=t.callbackNode;if(Vi()&&t.callbackNode!==n)return null;var r=Tl(t,t===ke?Me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=$l(t,r);else{e=r;var i=K;K|=2;var s=X0();(ke!==t||Me!==e)&&(hn=null,Ki=ge()+500,Lr(t,e));do try{zS();break}catch(a){Q0(t,a)}while(1);Lf(),bl.current=s,K=i,Ee!==null?e=0:(ke=null,Me=0,e=Se)}if(e!==0){if(e===2&&(i=Hh(t),i!==0&&(r=i,e=vd(t,i))),e===1)throw n=Co,Lr(t,0),Mn(t,r),ut(t,ge()),n;if(e===6)Mn(t,r);else{if(i=t.current.alternate,!(r&30)&&!jS(i)&&(e=$l(t,r),e===2&&(s=Hh(t),s!==0&&(r=s,e=vd(t,s))),e===1))throw n=Co,Lr(t,0),Mn(t,r),ut(t,ge()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(A(345));case 2:Ir(t,it,hn);break;case 3:if(Mn(t,r),(r&130023424)===r&&(e=Qf+500-ge(),10<e)){if(Tl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){et(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Zh(Ir.bind(null,t,it,hn),e);break}Ir(t,it,hn);break;case 4:if(Mn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$S(r/1960))-r,10<r){t.timeoutHandle=Zh(Ir.bind(null,t,it,hn),r);break}Ir(t,it,hn);break;case 5:Ir(t,it,hn);break;default:throw Error(A(329))}}}return ut(t,ge()),t.callbackNode===n?K0.bind(null,t):null}function vd(t,e){var n=Zs;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=$l(t,e),t!==2&&(e=it,it=n,e!==null&&wd(e)),t}function wd(t){it===null?it=t:it.push.apply(it,t)}function jS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Mn(t,e){for(e&=~Kf,e&=~Su,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ft(e),r=1<<n;t[n]=-1,e&=~r}}function $g(t){if(K&6)throw Error(A(327));Vi();var e=Tl(t,0);if(!(e&1))return ut(t,ge()),null;var n=$l(t,e);if(t.tag!==0&&n===2){var r=Hh(t);r!==0&&(e=r,n=vd(t,r))}if(n===1)throw n=Co,Lr(t,0),Mn(t,e),ut(t,ge()),n;if(n===6)throw Error(A(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ir(t,it,hn),ut(t,ge()),null}function Xf(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Ki=ge()+500,Eu&&hr())}}function Br(t){zn!==null&&zn.tag===0&&!(K&6)&&Vi();var e=K;K|=1;var n=Pt.transition,r=Y;try{if(Pt.transition=null,Y=1,t)return t()}finally{Y=r,Pt.transition=n,K=e,!(K&6)&&hr()}}function Yf(){dt=Ri.current,se(Ri)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yS(n)),Ee!==null)for(n=Ee.return;n!==null;){var r=n;switch(Df(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:Wi(),se(at),se(Qe),$f();break;case 5:Ff(r);break;case 4:Wi();break;case 13:se(le);break;case 19:se(le);break;case 10:Vf(r.type._context);break;case 22:case 23:Yf()}n=n.return}if(ke=t,Ee=t=Zn(t.current,null),Me=dt=e,Se=0,Co=null,Kf=Su=jr=0,it=Zs=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Cr=null}return t}function Q0(t,e){do{var n=Ee;try{if(Lf(),il.current=Ml,Vl){for(var r=ue.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Vl=!1}if($r=0,Pe=Ae=ue=null,Ys=!1,Ao=0,Gf.current=null,n===null||n.return===null){Se=1,Co=e,Ee=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Cg(o);if(p!==null){p.flags&=-257,Pg(p,o,a,s,e),p.mode&1&&Rg(s,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Rg(s,u,e),Jf();break e}l=Error(A(426))}}else if(ae&&a.mode&1){var v=Cg(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Pg(v,o,a,s,e),xf(Gi(l,a));break e}}s=l=Gi(l,a),Se!==4&&(Se=2),Zs===null?Zs=[s]:Zs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=x0(s,l,e);vg(s,m);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Yn===null||!Yn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=O0(s,a,e);vg(s,w);break e}}s=s.return}while(s!==null)}J0(n)}catch(R){e=R,Ee===n&&n!==null&&(Ee=n=n.return);continue}break}while(1)}function X0(){var t=bl.current;return bl.current=Ml,t===null?Ml:t}function Jf(){(Se===0||Se===3||Se===2)&&(Se=4),ke===null||!(jr&268435455)&&!(Su&268435455)||Mn(ke,Me)}function $l(t,e){var n=K;K|=2;var r=X0();(ke!==t||Me!==e)&&(hn=null,Lr(t,e));do try{BS();break}catch(i){Q0(t,i)}while(1);if(Lf(),K=n,bl.current=r,Ee!==null)throw Error(A(261));return ke=null,Me=0,Se}function BS(){for(;Ee!==null;)Y0(Ee)}function zS(){for(;Ee!==null&&!pA();)Y0(Ee)}function Y0(t){var e=ew(t.alternate,t,dt);t.memoizedProps=t.pendingProps,e===null?J0(t):Ee=e,Gf.current=null}function J0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=MS(n,e),n!==null){n.flags&=32767,Ee=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Se=6,Ee=null;return}}else if(n=VS(n,e,dt),n!==null){Ee=n;return}if(e=e.sibling,e!==null){Ee=e;return}Ee=e=t}while(e!==null);Se===0&&(Se=5)}function Ir(t,e,n){var r=Y,i=Pt.transition;try{Pt.transition=null,Y=1,qS(t,e,n,r)}finally{Pt.transition=i,Y=r}return null}function qS(t,e,n,r){do Vi();while(zn!==null);if(K&6)throw Error(A(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(A(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(AA(t,s),t===ke&&(Ee=ke=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ua||(Ua=!0,tw(El,function(){return Vi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pt.transition,Pt.transition=null;var o=Y;Y=1;var a=K;K|=4,Gf.current=null,US(t,n),W0(n,t),cS(Yh),Il=!!Xh,Yh=Xh=null,t.current=n,FS(n),mA(),K=a,Y=o,Pt.transition=s}else t.current=n;if(Ua&&(Ua=!1,zn=t,Fl=i),s=t.pendingLanes,s===0&&(Yn=null),_A(n.stateNode),ut(t,ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ul)throw Ul=!1,t=yd,yd=null,t;return Fl&1&&t.tag!==0&&Vi(),s=t.pendingLanes,s&1?t===_d?eo++:(eo=0,_d=t):eo=0,hr(),null}function Vi(){if(zn!==null){var t=Dv(Fl),e=Pt.transition,n=Y;try{if(Pt.transition=null,Y=16>t?16:t,zn===null)var r=!1;else{if(t=zn,zn=null,Fl=0,K&6)throw Error(A(331));var i=K;for(K|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:Js(8,c,s)}var h=c.child;if(h!==null)h.return=c,x=h;else for(;x!==null;){c=x;var d=c.sibling,p=c.return;if(z0(c),c===u){x=null;break}if(d!==null){d.return=p,x=d;break}x=p}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var v=_.sibling;_.sibling=null,_=v}while(_!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Js(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,x=m;break e}x=s.return}}var f=t.current;for(x=f;x!==null;){o=x;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,x=g;else e:for(o=f;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Au(9,a)}}catch(R){fe(a,a.return,R)}if(a===o){x=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,x=w;break e}x=a.return}}if(K=i,hr(),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(gu,t)}catch{}r=!0}return r}finally{Y=n,Pt.transition=e}}return!1}function jg(t,e,n){e=Gi(n,e),e=x0(t,e,1),t=Xn(t,e,1),e=et(),t!==null&&(Go(t,1,e),ut(t,e))}function fe(t,e,n){if(t.tag===3)jg(t,t,n);else for(;e!==null;){if(e.tag===3){jg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yn===null||!Yn.has(r))){t=Gi(n,t),t=O0(e,t,1),e=Xn(e,t,1),t=et(),e!==null&&(Go(e,1,t),ut(e,t));break}}e=e.return}}function HS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=et(),t.pingedLanes|=t.suspendedLanes&n,ke===t&&(Me&n)===n&&(Se===4||Se===3&&(Me&130023424)===Me&&500>ge()-Qf?Lr(t,0):Kf|=n),ut(t,e)}function Z0(t,e){e===0&&(t.mode&1?(e=Pa,Pa<<=1,!(Pa&130023424)&&(Pa=4194304)):e=1);var n=et();t=An(t,e),t!==null&&(Go(t,e,n),ut(t,n))}function WS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z0(t,n)}function GS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(A(314))}r!==null&&r.delete(e),Z0(t,n)}var ew;ew=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||at.current)ot=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ot=!1,LS(t,e,n);ot=!!(t.flags&131072)}else ot=!1,ae&&e.flags&1048576&&r0(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ol(t,e),t=e.pendingProps;var i=zi(e,Qe.current);Li(e,n),i=Bf(null,e,r,t,i,n);var s=zf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,lt(r)?(s=!0,Pl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bf(e),i.updater=Tu,e.stateNode=i,i._reactInternals=e,od(e,r,t,n),e=ud(null,e,r,!0,s,n)):(e.tag=0,ae&&s&&Nf(e),Je(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ol(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=QS(r),t=Mt(r,t),i){case 0:e=ld(null,e,r,t,n);break e;case 1:e=Dg(null,e,r,t,n);break e;case 11:e=kg(null,e,r,t,n);break e;case 14:e=Ng(null,e,r,Mt(r.type,t),n);break e}throw Error(A(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),ld(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),Dg(t,e,r,i,n);case 3:e:{if(b0(e),t===null)throw Error(A(387));r=e.pendingProps,s=e.memoizedState,i=s.element,a0(t,e),Ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gi(Error(A(423)),e),e=xg(t,e,r,n,i);break e}else if(r!==i){i=Gi(Error(A(424)),e),e=xg(t,e,r,n,i);break e}else for(pt=Qn(e.stateNode.containerInfo.firstChild),yt=e,ae=!0,Ut=null,n=h0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qi(),r===i){e=Sn(t,e,n);break e}Je(t,e,r,n)}e=e.child}return e;case 5:return d0(e),t===null&&rd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Jh(r,i)?o=null:s!==null&&Jh(r,s)&&(e.flags|=32),M0(t,e),Je(t,e,o,n),e.child;case 6:return t===null&&rd(e),null;case 13:return U0(t,e,n);case 4:return Uf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hi(e,null,r,n):Je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),kg(t,e,r,i,n);case 7:return Je(t,e,e.pendingProps,n),e.child;case 8:return Je(t,e,e.pendingProps.children,n),e.child;case 12:return Je(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(Dl,r._currentValue),r._currentValue=o,s!==null)if(jt(s.value,o)){if(s.children===i.children&&!at.current){e=Sn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=vn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),id(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(A(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),id(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Li(e,n),i=Nt(i),r=r(i),e.flags|=1,Je(t,e,r,n),e.child;case 14:return r=e.type,i=Mt(r,e.pendingProps),i=Mt(r.type,i),Ng(t,e,r,i,n);case 15:return L0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Mt(r,i),ol(t,e),e.tag=1,lt(r)?(t=!0,Pl(e)):t=!1,Li(e,n),u0(e,r,i),od(e,r,i,n),ud(null,e,r,!0,t,n);case 19:return F0(t,e,n);case 22:return V0(t,e,n)}throw Error(A(156,e.tag))};function tw(t,e){return Cv(t,e)}function KS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(t,e,n,r){return new KS(t,e,n,r)}function Zf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function QS(t){if(typeof t=="function")return Zf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_f)return 11;if(t===vf)return 14}return 2}function Zn(t,e){var n=t.alternate;return n===null?(n=Rt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ul(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Zf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gi:return Vr(n.children,i,s,e);case yf:o=8,i|=8;break;case Nh:return t=Rt(12,n,e,i|2),t.elementType=Nh,t.lanes=s,t;case Dh:return t=Rt(13,n,e,i),t.elementType=Dh,t.lanes=s,t;case xh:return t=Rt(19,n,e,i),t.elementType=xh,t.lanes=s,t;case cv:return Ru(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lv:o=10;break e;case uv:o=9;break e;case _f:o=11;break e;case vf:o=14;break e;case On:o=16,r=null;break e}throw Error(A(130,t==null?t:typeof t,""))}return e=Rt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Vr(t,e,n,r){return t=Rt(7,t,r,e),t.lanes=n,t}function Ru(t,e,n,r){return t=Rt(22,t,r,e),t.elementType=cv,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=Rt(6,t,null,e),t.lanes=n,t}function Yc(t,e,n){return e=Rt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function XS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ep(t,e,n,r,i,s,o,a,l){return t=new XS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bf(s),t}function YS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nw(t){if(!t)return sr;t=t._reactInternals;e:{if(ei(t)!==t||t.tag!==1)throw Error(A(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(lt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(A(171))}if(t.tag===1){var n=t.type;if(lt(n))return t0(t,n,e)}return e}function rw(t,e,n,r,i,s,o,a,l){return t=ep(n,r,!0,t,i,s,o,a,l),t.context=nw(null),n=t.current,r=et(),i=Jn(n),s=vn(r,i),s.callback=e??null,Xn(n,s,i),t.current.lanes=i,Go(t,i,r),ut(t,r),t}function Cu(t,e,n,r){var i=e.current,s=et(),o=Jn(i);return n=nw(n),e.context===null?e.context=n:e.pendingContext=n,e=vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Xn(i,e,o),t!==null&&($t(t,i,o,s),rl(t,i,o)),o}function jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tp(t,e){Bg(t,e),(t=t.alternate)&&Bg(t,e)}function JS(){return null}var iw=typeof reportError=="function"?reportError:function(t){console.error(t)};function np(t){this._internalRoot=t}Pu.prototype.render=np.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(A(409));Cu(t,e,null,null)};Pu.prototype.unmount=np.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){Cu(null,t,null,null)}),e[In]=null}};function Pu(t){this._internalRoot=t}Pu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&Mv(t)}};function rp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zg(){}function ZS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=jl(o);s.call(u)}}var o=rw(e,r,t,0,null,!1,!1,"",zg);return t._reactRootContainer=o,t[In]=o.current,vo(t.nodeType===8?t.parentNode:t),Br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=jl(l);a.call(u)}}var l=ep(t,0,!1,null,null,!1,!1,"",zg);return t._reactRootContainer=l,t[In]=l.current,vo(t.nodeType===8?t.parentNode:t),Br(function(){Cu(e,l,n,r)}),l}function Nu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=jl(o);a.call(l)}}Cu(e,o,t,i)}else o=ZS(n,e,t,i,r);return jl(o)}xv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ms(e.pendingLanes);n!==0&&(Tf(e,n|1),ut(e,ge()),!(K&6)&&(Ki=ge()+500,hr()))}break;case 13:Br(function(){var r=An(t,1);if(r!==null){var i=et();$t(r,t,1,i)}}),tp(t,1)}};If=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=et();$t(e,t,134217728,n)}tp(t,134217728)}};Ov=function(t){if(t.tag===13){var e=Jn(t),n=An(t,e);if(n!==null){var r=et();$t(n,t,e,r)}tp(t,e)}};Lv=function(){return Y};Vv=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Bh=function(t,e,n){switch(e){case"input":if(Vh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wu(r);if(!i)throw Error(A(90));dv(r),Vh(r,i)}}}break;case"textarea":pv(t,n);break;case"select":e=n.value,e!=null&&Ni(t,!!n.multiple,e,!1)}};Ev=Xf;Tv=Br;var eR={usingClientEntryPoint:!1,Events:[Qo,wi,wu,vv,wv,Xf]},ks={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},tR={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sv(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||JS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{gu=Fa.inject(tR),en=Fa}catch{}}Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eR;Et.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rp(e))throw Error(A(200));return YS(t,e,null,n)};Et.createRoot=function(t,e){if(!rp(t))throw Error(A(299));var n=!1,r="",i=iw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ep(t,1,!1,null,null,n,!1,r,i),t[In]=e.current,vo(t.nodeType===8?t.parentNode:t),new np(e)};Et.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(A(188)):(t=Object.keys(t).join(","),Error(A(268,t)));return t=Sv(e),t=t===null?null:t.stateNode,t};Et.flushSync=function(t){return Br(t)};Et.hydrate=function(t,e,n){if(!ku(e))throw Error(A(200));return Nu(null,t,e,!0,n)};Et.hydrateRoot=function(t,e,n){if(!rp(t))throw Error(A(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=iw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rw(e,null,t,1,n??null,i,!1,s,o),t[In]=e.current,vo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Pu(e)};Et.render=function(t,e,n){if(!ku(e))throw Error(A(200));return Nu(null,t,e,!1,n)};Et.unmountComponentAtNode=function(t){if(!ku(t))throw Error(A(40));return t._reactRootContainer?(Br(function(){Nu(null,null,t,!1,function(){t._reactRootContainer=null,t[In]=null})}),!0):!1};Et.unstable_batchedUpdates=Xf;Et.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ku(n))throw Error(A(200));if(t==null||t._reactInternals===void 0)throw Error(A(38));return Nu(t,e,n,!1,r)};Et.version="18.2.0-next-9e3b772b8-20220608";function sw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sw)}catch(t){console.error(t)}}sw(),rv.exports=Et;var nR=rv.exports,qg=nR;Ph.createRoot=qg.createRoot,Ph.hydrateRoot=qg.hydrateRoot;const rR="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAYAAAD6+a2dAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAABgAAAAYADwa0LPAAAAB3RJTUUH5gkBChonodWdTQAADIVJREFUeNrtnX1UVVXawH/PuUIIfgJOZoCjoGlOH0LaiFQiRuZ6tV5zFLUPy/xYoTLmV2Uqpk0141gqOKWVY8tE6XNqtUoE8c0JVxqpaX686kySuSwVGdEK5Z5n/rjca4If517u5ULc3z93sdfez372s5+zz3P2s88BAgQI0HgRfyvQ2FiTnv93NTt3Nt8wViFxccYyfQINC/NUnjlWnkfOnIHKP6P7948oT40XY/9+q+0DDuBjVo9Zn6dmUpJUShaSlUUqk+Cmm3zVn7wgT6Hbt8tV9vuRCROGfZ46SeSzzy5Z398G+rXimvibjMlIQQERugiCg+tMgROSAWfPEscKSE4e3j+lp0hRUfVqTfxloNzc3FxVm61yQMQCNDLSWGm2Q8LDGWW0h6ZNdVPlfyAkRFtLMYSE6H6jBWoY/tLXXeQBFWThQla7OfH3EIH+61/me8ZJZOhQI98+BBVhpxGG5OYyRVdAhw5XlON0uDCuQbOyHIXx8TX0rCuDrFpUqGpGRQXtsSdBly5mEfuQmBip4Dpo4jdH9DZSKTMhNNScr8Hw4otut/8nh2HKlLTsfqNEFi50lq8+XdBTdcoU+VD/BAsWuC13sZEBcXFpm/t+LXLwoLPcZ4Zffbqgp5pXXy0LeAxJTJSl9iRo00adCsF1vurbn5jXmxuhZUuQVI8E5LMcTp+uXiwTuQ/OnMEzqdBO46FzZ+BrOO8AXl9S33xzwwbVhAQZYg6HQYMkR5dDmzbe7qfeEmlkg83mbbGy14wH8XzFHsJDaLNm1Yu9tgLkHMzfp+Ztt8kA8xHo2hUkEGJ6k3DjO9RmA43ypl1r7QCuK9418QEuylymw4EDPM1uWLpU5pEAZ87UqDdJ28CmTaRfWGyOlRKksNCYrsth3LjqzXQWxRAWxjGeRNPTaUtvJDb2Smp57ACue/wQ+w40Pj5wxV8ec5axANLSRo7s21ekuBi4+LN5+sXbj7in72yRr792/OX8/QX3O35yHl6/SM1Nm2grvWHr1ivp5XEM4Aru/i1vI7W4NwXwKrpVFiJBQVbru70C5HyybpSa0dGS0ciCu1pi3KX/Czk5OS/mz1UzK0teJg/5+ecaFatuAWnpd74vsmePs3j1PzY8o9qtmzHdXAe9e1dvZn7oePyUEYyDSZNAV1jRy20H0KQmu6FLF0Ete1kAYL2+A5060RaQRYs0k94XqyaZMuf8Pf68AxjLNAZNTtZM5iJLltRoV1z1gD0FSxPvxLIDOHfu7In6GERHU0fP8ZJPKhoSokNJQJKT+atMh4QEs6PeAW3b/qLeCjh6lEjuhi++MB7WxVBYqC0kDSoq6kJXn1JqXovY7d4OtCw7gGvLdpZeh/h+584s1wchOlqOGh8h6elM0t7QujWHdDGAHKrWwMZ9EB3NSYDoaG0q++H22zVR98DSpVIkXeHwYV/rzV8lHc6dY53WXtYv0C7Gl6AKmuBR+6n6EVJeXr3cchDo2qv3NaM0E8LDjbbyAWRkcEAnQevWbg/4WUyIiGCKIZCRoaskwhM5bvd73P4j1DS05fbOx7nq5Ut452LlVpEYIw9qpomtPwVUJWl8YLMLB/p/cg0MHqzTmAzNm9da4E5dCy1ayGC9GQYP9rX+xkDZBj/+SJE8D7t2uS2g6jk+5+H14Wrecsva5vkPqdmjh6zWFjBhgtvy3mUXfPll9RyAS1+rcpzZOV8Zzun5+jYPQYJHy9xl5WfqZEhIcCZrfDUOFw8SCqtWudKyVnFu4KRKLrJ1q7mMB5AtW2jOE/Db31qW4+x3tCTCxImXqmbdAarSsr6yl7yhZRATIx/yAvgg7RsqxWCzmc+ShcbE+GocrvHcryfg5EluJRZmz/Z4RXCXPBbDjh1XOgfgxHIwd0E+3gfbPvqS9ISQEHawsPbSLsPL5mQkJAQk06f9VOFyBACWLDEn6vsQGiqRtlBo3pwpmg3WN25qyO+jR6Gy0uwlm+DUKbXrCXTXrpH9U3qKcemJd1Jv8vBSKo9DWZni3ei5Rj8HmYWWlRGKzR9b164YARPHLzfXSmAR/QGMKrvZZ7mpT92b4OJIBN/DoUP0JBq9SJKktvL/Iq9Debn24/+RkhJ/j7e+UG8cQO/VD8A02c8TSF6e1zuo5C3Iy3PsB5imv8dbX6g3DuBSqL38HvLy+Eru/OVWqMeM4wzs3i1rmQ/5+f4eX32j3jmAayUAIDtbinkNPv1U1sgGx07YFbhXngLTlF7cgW7caCjvQnb2hXIDOKk3QWB15F1NhHPngBJ4803drK0gP58tZEP37syTz9FrrnHVn8YgOHJE+5prYNs2SqUP8sMP2s7fI6nf1FsHqI704iv4/nvHX598Atrhgih+BjsBBHnA37o2JOrdLSBA3RJwgEZOwAEaOQ0mBvi1YQaZ10GzZvzNGAy33Was4Tj06KEl7IV27eQL5sKxY9qfZ9DiYmM3KcjGjVrGLCgr85YeAQeoa8KJQjt3Nh5psh2ZOFEPmyMgOFiTiKqqEQWgI9gEv/kNkIzcfbd9CdPgrrukTFehr72mK6UZFBcbb5CGWHg8vgQBB/Ax5oOsQUWMJ+RGJD5ec3UuMnasIxdgnfNZUvkOGTNGDlCIRkU5Tjx98IGnO5yBGMBHaKIMAsOQ/5F+yMCBmqtvwdixXusg1bEyOCb+0Ud1sBR5klUMrABeRgfbukFQEAP0FXT0aHaby5Du3X3WXyZzISGBcn0eIiKMCvsbMG0aYGkLLLACeAlXUNfN/CfMmMFh3058DZwnhl6w/QGGDrXaLLAC1BLZxusQGSmZRjlMn45NRzheD28YBFYATwliDsTGmj/LUsjMpDtlDWninTSgFcCYB2A8oyVocLC9JddDSIh25DhSWclbegP600+1fSy6Uv86QG+HXr3oqRth1CjW6UB/W6Y21GMHcBjcvN18Be3cWe7QCcjQoXZTFyPR0ZzkFIAU4/j+TleaIkeO6Fxpia5dK3NkKrJ3L5huHpK6EMdjlmHwtHkt3HMPW9gI/fv72zreot45gHnEXAJNm8rfZSU6fLicZQxy661c6axgBduhXTvQx5HJk/UPZje0oEAKyETeeYdSyQS73aoe56P5ysfQ0aPZwrd1GtTVEZZjgKBgYyfiiwMVVUvrXGmJduki240w9NlnOasDHRPvId1kJ5KSYq40zsGMGSzmW4iJcV3R1QnXTLDZdLKuQDt1EsyDMGcOh+XqhjTx8h29EevvQlo/Fr5Cv0ErK4GB3jhNq+MdL30Sbr6LDBuG8jiSmMgWvvWqQYo1GNq3V3gdZs5kr1wPFRXmy9IVSkqMs7yKGob+mXKkfXtaUoI0aaI36pPe1KOu0FacgxMnsHis1vIKYKba76jNW7bOLVGzWDugcXFkyT5k/nyCuRcSE+vMQpPYDVddJUcdr2trqbZGYmN5lBa/hs/VyVNyGo4ds1rf8oAlWGKRU6cAy8IBuEVKoGlTYz5dkCFDtCP/gKQk5vv2/H9jRT80r0d/+MFqfcsOYD5kHEFLS43FGnS5W4DzSpcI/Qni4mSZZCLjxunr+ohXXvYMcFmMz2Q7bN9uub7VivvCPv0cOXbMjNJOVYc1L8R5pT/CNmTkSFpKCTJ1qk4LTHydcIMMg1On5NXSAbBjh9Vmbodza6ILQ1VTUszx9n1oXJyRwx6kY0ddI8Nh/Hjn69j+tkej40duhbVrh4/u11wkLc1qM7eDHnuYeRg9cMBoQnN4+mmdyT7o08cx8QH8hf7OuBaWLXO3ndu5gJF7U8LFOHSIZnyMeP+TqAHc5CzvQ1HR8J7J/4HCQnebe5wMModJKTp1Kq9yCior/W2HRkeV3Y0JlKN//KOIiHiQA/HYAUZGpowSY8sWpkkU+mSD3DRp0HzDazB79rDyfivFuPIXQS9Frff0VFVVRdasK/geXnqJk+xyfKgwgC+QT0iGpUvTVvaziaSn11qetxXM2VowSHXGDGL1Wpg3j3XcV5svYDR6nLfYqit++MF+H4k895y3xPvsGxk5N+ZHqnbvLkd4D7KzdQkV0KtX3Vit4SMTuQo2b5YKXkUzMmq71F+yn7oaUI6uV9U+fXjJuBvGjJHlmgQDBugsfg+tWtWVHvWOqg0cPtdv4OOPJVPvhOXLh5X02wwbNnga3FnFb1/5fuXlL7aqGRTUalpZFtx8s9mBj5AbbiCVBRAby0GZDJGRfKYzoUULWvGe4x8mNAycaVlXdi5GJ6LHj+vvjEVw9Kg+R3f46qvTb7fsBtu2jRt/Sw8xLrLDGiBAgAABAgQIECCAt/kvM0G98R+QJHEAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDktMDFUMTA6MjY6MzkrMDA6MDCBjcn+AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA5LTAxVDEwOjI2OjM5KzAwOjAw8NBxQgAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMi0wOS0wMVQxMDoyNjozOSswMDowMKfFUJ0AAAAASUVORK5CYII=";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},iR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},aw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ow(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):iR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new sR;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oR=function(t){const e=ow(t);return aw.encodeByteArray(e,!0)},Bl=function(t){return oR(t).replace(/\./g,"")},lw=function(t){try{return aw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=()=>aR().__FIREBASE_DEFAULTS__,uR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},cR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lw(t[1]);return e&&JSON.parse(e)},Du=()=>{try{return lR()||uR()||cR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uw=t=>{var e,n;return(n=(e=Du())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},cw=t=>{const e=uw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},hw=()=>{var t;return(t=Du())===null||t===void 0?void 0:t.config},dw=t=>{var e;return(e=Du())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Bl(JSON.stringify(n)),Bl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function fR(){var t;const e=(t=Du())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mR(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gR(){return!fR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ip(){try{return typeof indexedDB=="object"}catch{return!1}}function mw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function yR(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="FirebaseError";class Ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_R,Object.setPrototypeOf(this,Ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ti.prototype.create)}}class ti{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?vR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ot(i,a,r)}}function vR(t,e){return t.replace(wR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wR=/\{\$([^}]+)}/g;function ER(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hg(s)&&Hg(o)){if(!Qi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Us(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Fs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function TR(t,e){const n=new IR(t,e);return n.subscribe.bind(n)}class IR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AR(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Jc),i.error===void 0&&(i.error=Jc),i.complete===void 0&&(i.complete=Jc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Jc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=1e3,RR=2,CR=4*60*60*1e3,PR=.5;function Wg(t,e=SR,n=RR){const r=e*Math.pow(n,t),i=Math.round(PR*r*(Math.random()-.5)*2);return Math.min(CR,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(DR(e))try{this.getOrInitializeService({instanceIdentifier:Ar})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ar){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ar){return this.instances.has(e)}getOptions(e=Ar){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:NR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ar){return this.component?this.component.multipleInstances?e:Ar:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NR(t){return t===Ar?void 0:t}function DR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new kR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(W||(W={}));const OR={debug:W.DEBUG,verbose:W.VERBOSE,info:W.INFO,warn:W.WARN,error:W.ERROR,silent:W.SILENT},LR=W.INFO,VR={[W.DEBUG]:"log",[W.VERBOSE]:"log",[W.INFO]:"info",[W.WARN]:"warn",[W.ERROR]:"error"},MR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=VR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xu{constructor(e){this.name=e,this._logLevel=LR,this._logHandler=MR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in W))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,W.DEBUG,...e),this._logHandler(this,W.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,W.VERBOSE,...e),this._logHandler(this,W.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,W.INFO,...e),this._logHandler(this,W.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,W.WARN,...e),this._logHandler(this,W.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,W.ERROR,...e),this._logHandler(this,W.ERROR,...e)}}const bR=(t,e)=>e.some(n=>t instanceof n);let Gg,Kg;function UR(){return Gg||(Gg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function FR(){return Kg||(Kg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gw=new WeakMap,Ed=new WeakMap,yw=new WeakMap,Zc=new WeakMap,sp=new WeakMap;function $R(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(er(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gw.set(n,t)}).catch(()=>{}),sp.set(e,t),e}function jR(t){if(Ed.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Ed.set(t,e)}let Td={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ed.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function BR(t){Td=t(Td)}function zR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(eh(this),e,...n);return yw.set(r,e.sort?e.sort():[e]),er(r)}:FR().includes(t)?function(...e){return t.apply(eh(this),e),er(gw.get(this))}:function(...e){return er(t.apply(eh(this),e))}}function qR(t){return typeof t=="function"?zR(t):(t instanceof IDBTransaction&&jR(t),bR(t,UR())?new Proxy(t,Td):t)}function er(t){if(t instanceof IDBRequest)return $R(t);if(Zc.has(t))return Zc.get(t);const e=qR(t);return e!==t&&(Zc.set(t,e),sp.set(e,t)),e}const eh=t=>sp.get(t);function _w(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(er(o.result),l.oldVersion,l.newVersion,er(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const HR=["get","getKey","getAll","getAllKeys","count"],WR=["put","add","delete","clear"],th=new Map;function Qg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(th.get(e))return th.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=WR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||HR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return th.set(e,s),s}BR(t=>({...t,get:(e,n,r)=>Qg(e,n)||t.get(e,n,r),has:(e,n)=>!!Qg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(KR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function KR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Id="@firebase/app",Xg="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr=new xu("@firebase/app"),QR="@firebase/app-compat",XR="@firebase/analytics-compat",YR="@firebase/analytics",JR="@firebase/app-check-compat",ZR="@firebase/app-check",eC="@firebase/auth",tC="@firebase/auth-compat",nC="@firebase/database",rC="@firebase/database-compat",iC="@firebase/functions",sC="@firebase/functions-compat",oC="@firebase/installations",aC="@firebase/installations-compat",lC="@firebase/messaging",uC="@firebase/messaging-compat",cC="@firebase/performance",hC="@firebase/performance-compat",dC="@firebase/remote-config",fC="@firebase/remote-config-compat",pC="@firebase/storage",mC="@firebase/storage-compat",gC="@firebase/firestore",yC="@firebase/firestore-compat",_C="firebase",vC="10.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="[DEFAULT]",wC={[Id]:"fire-core",[QR]:"fire-core-compat",[YR]:"fire-analytics",[XR]:"fire-analytics-compat",[ZR]:"fire-app-check",[JR]:"fire-app-check-compat",[eC]:"fire-auth",[tC]:"fire-auth-compat",[nC]:"fire-rtdb",[rC]:"fire-rtdb-compat",[iC]:"fire-fn",[sC]:"fire-fn-compat",[oC]:"fire-iid",[aC]:"fire-iid-compat",[lC]:"fire-fcm",[uC]:"fire-fcm-compat",[cC]:"fire-perf",[hC]:"fire-perf-compat",[dC]:"fire-rc",[fC]:"fire-rc-compat",[pC]:"fire-gcs",[mC]:"fire-gcs-compat",[gC]:"fire-fst",[yC]:"fire-fst-compat","fire-js":"fire-js",[_C]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map,EC=new Map,Sd=new Map;function Yg(t,e){try{t.container.addComponent(e)}catch(n){zr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Bt(t){const e=t.name;if(Sd.has(e))return zr.debug(`There were multiple attempts to register component ${e}.`),!1;Sd.set(e,t);for(const n of zl.values())Yg(n,t);for(const n of EC.values())Yg(n,t);return!0}function dr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Xt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},tr=new ti("app","Firebase",TC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw tr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=vC;function vw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ad,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw tr.create("bad-app-name",{appName:String(i)});if(n||(n=hw()),!n)throw tr.create("no-options");const s=zl.get(i);if(s){if(Qi(n,s.options)&&Qi(r,s.config))return s;throw tr.create("duplicate-app",{appName:i})}const o=new xR(i);for(const l of Sd.values())o.addComponent(l);const a=new IC(n,r,o);return zl.set(i,a),a}function Ou(t=Ad){const e=zl.get(t);if(!e&&t===Ad&&hw())return vw();if(!e)throw tr.create("no-app",{appName:t});return e}function ct(t,e,n){var r;let i=(r=wC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zr.warn(a.join(" "));return}Bt(new xt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="firebase-heartbeat-database",SC=1,Po="firebase-heartbeat-store";let nh=null;function ww(){return nh||(nh=_w(AC,SC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Po)}catch(n){console.warn(n)}}}}).catch(t=>{throw tr.create("idb-open",{originalErrorMessage:t.message})})),nh}async function RC(t){try{const n=(await ww()).transaction(Po),r=await n.objectStore(Po).get(Ew(t));return await n.done,r}catch(e){if(e instanceof Ot)zr.warn(e.message);else{const n=tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zr.warn(n.message)}}}async function Jg(t,e){try{const r=(await ww()).transaction(Po,"readwrite");await r.objectStore(Po).put(e,Ew(t)),await r.done}catch(n){if(n instanceof Ot)zr.warn(n.message);else{const r=tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zr.warn(r.message)}}}function Ew(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=1024,PC=30*24*60*60*1e3;class kC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new DC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Zg();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=PC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zg(),{heartbeatsToSend:r,unsentEntries:i}=NC(this._heartbeatsCache.heartbeats),s=Bl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Zg(){return new Date().toISOString().substring(0,10)}function NC(t,e=CC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ey(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ey(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class DC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ip()?mw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Jg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ey(t){return Bl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xC(t){Bt(new xt("platform-logger",e=>new GR(e),"PRIVATE")),Bt(new xt("heartbeat",e=>new kC(e),"PRIVATE")),ct(Id,Xg,t),ct(Id,Xg,"esm2017"),ct("fire-js","")}xC("");function op(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Tw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OC=Tw,Iw=new ti("auth","Firebase",Tw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=new xu("@firebase/auth");function LC(t,...e){ql.logLevel<=W.WARN&&ql.warn(`Auth (${ni}): ${t}`,...e)}function cl(t,...e){ql.logLevel<=W.ERROR&&ql.error(`Auth (${ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw ap(t,...e)}function nn(t,...e){return ap(t,...e)}function Aw(t,e,n){const r=Object.assign(Object.assign({},OC()),{[e]:n});return new ti("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return Aw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ap(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Iw.create(t,...e)}function M(t,e,...n){if(!t)throw ap(e,...n)}function mn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw cl(e),new Error(e)}function Rn(t,e){t||mn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VC(){return ty()==="http:"||ty()==="https:"}function ty(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VC()||pw()||"connection"in navigator)?navigator.onLine:!0}function bC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=dR()||pR()}get(){return MC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC=new Jo(3e4,6e4);function fr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nn(t,e,n,r,i={}){return Rw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Yo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Sw.fetch()(Cw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Rw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UC),e);try{const i=new jC(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw $a(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $a(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw $a(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw $a(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Aw(t,c,u);zt(t,c)}}catch(i){if(i instanceof Ot)throw i;zt(t,"network-request-failed",{message:String(i)})}}async function Zo(t,e,n,r,i={}){const s=await Nn(t,e,n,r,i);return"mfaPendingCredential"in s&&zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Cw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?lp(t.config,i):`${t.config.apiScheme}://${i}`}function $C(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),FC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $a(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=nn(t,e,r);return i.customData._tokenResponse=n,i}function ny(t){return t!==void 0&&t.enterprise!==void 0}class BC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $C(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function zC(t,e){return Nn(t,"GET","/v2/recaptchaConfig",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qC(t,e){return Nn(t,"POST","/v1/accounts:delete",e)}async function Pw(t,e){return Nn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HC(t,e=!1){const n=te(t),r=await n.getIdToken(e),i=up(r);M(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:to(rh(i.auth_time)),issuedAtTime:to(rh(i.iat)),expirationTime:to(rh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rh(t){return Number(t)*1e3}function up(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return cl("JWT malformed, contained fewer than 3 sections"),null;try{const i=lw(n);return i?JSON.parse(i):(cl("Failed to decode base64 JWT payload"),null)}catch(i){return cl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ry(t){const e=up(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ot&&WC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xi(t,Pw(n,{idToken:r}));M(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?kw(s.providerUserInfo):[],a=QC(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Cd(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function KC(t){const e=te(t);await Hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QC(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function kw(t){return t.map(e=>{var{providerId:n}=e,r=op(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XC(t,e){const n=await Rw(t,{},async()=>{const r=Yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Cw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YC(t,e){return Nn(t,"POST","/v2/accounts:revokeToken",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ry(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=ry(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await XC(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mi;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mi,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class gn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=op(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HC(this,e)}reload(){return KC(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await Xi(this,qC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:R,providerData:C,stsTokenManager:N}=n;M(g&&N,e,"internal-error");const L=Mi.fromJSON(this.name,N);M(typeof g=="string",e,"internal-error"),xn(h,e.name),xn(d,e.name),M(typeof w=="boolean",e,"internal-error"),M(typeof R=="boolean",e,"internal-error"),xn(p,e.name),xn(y,e.name),xn(_,e.name),xn(v,e.name),xn(m,e.name),xn(f,e.name);const Q=new gn({uid:g,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:R,photoURL:y,phoneNumber:p,tenantId:_,stsTokenManager:L,createdAt:m,lastLoginAt:f});return C&&Array.isArray(C)&&(Q.providerData=C.map(B=>Object.assign({},B))),v&&(Q._redirectEventId=v),Q}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mi;i.updateFromServerResponse(n);const s=new gn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Hl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];M(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?kw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Mi;a.updateFromIdToken(r);const l=new gn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Cd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=new Map;function yn(t){Rn(t instanceof Function,"Expected a class definition");let e=iy.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nw.type="NONE";const sy=Nw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t,e,n){return`firebase:${t}:${e}:${n}`}class bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hl(this.userKey,i.apiKey,s),this.fullPersistenceKey=hl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bi(yn(sy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||yn(sy);const o=hl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=gn._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new bi(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new bi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ow(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vw(e))return"Blackberry";if(Mw(e))return"Webos";if(cp(e))return"Safari";if((e.includes("chrome/")||xw(e))&&!e.includes("edge/"))return"Chrome";if(Lw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dw(t=Ie()){return/firefox\//i.test(t)}function cp(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xw(t=Ie()){return/crios\//i.test(t)}function Ow(t=Ie()){return/iemobile/i.test(t)}function Lw(t=Ie()){return/android/i.test(t)}function Vw(t=Ie()){return/blackberry/i.test(t)}function Mw(t=Ie()){return/webos/i.test(t)}function Lu(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JC(t=Ie()){var e;return Lu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZC(){return mR()&&document.documentMode===10}function bw(t=Ie()){return Lu(t)||Lw(t)||Mw(t)||Vw(t)||/windows phone/i.test(t)||Ow(t)}function eP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t,e=[]){let n;switch(t){case"Browser":n=oy(Ie());break;case"Worker":n=`${oy(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nP(t,e={}){return Nn(t,"GET","/v2/passwordPolicy",fr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rP=6;class iP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ay(this),this.idTokenSubscription=new ay(this),this.beforeStateQueue=new tP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Iw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await bi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Pw(this,{idToken:e}),r=await gn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(wn(this));const n=e?te(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nP(this),n=new iP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ti("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await bi.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Uw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ri(t){return te(t)}class ay{constructor(e){this.auth=e,this.observer=null,this.addObserver=TR(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oP(t){Vu=t}function Fw(t){return Vu.loadJS(t)}function aP(){return Vu.recaptchaEnterpriseScript}function lP(){return Vu.gapiScript}function uP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cP="recaptcha-enterprise",hP="NO_RECAPTCHA";class dP{constructor(e){this.type=cP,this.auth=ri(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{zC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new BC(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;ny(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(hP)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&ny(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=aP();l.length!==0&&(l+=a),Fw(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function ly(t,e,n,r=!1){const i=new dP(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Pd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await ly(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await ly(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fP(t,e){const n=dr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qi(s,e??{}))return i;zt(i,"already-initialized")}return n.initialize({options:e})}function pP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mP(t,e,n){const r=ri(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=$w(e),{host:o,port:a}=gP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yP()}function $w(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gP(t){const e=$w(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:uy(o)}}}function uy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,n){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}async function _P(t,e){return Nn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vP(t,e){return Zo(t,"POST","/v1/accounts:signInWithPassword",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}async function EP(t,e){return Zo(t,"POST","/v1/accounts:signInWithEmailLink",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends hp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pd(e,n,"signInWithPassword",vP);case"emailLink":return wP(e,{email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pd(e,r,"signUpPassword",_P);case"emailLink":return EP(e,{idToken:n,email:this._email,oobCode:this._password});default:zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ui(t,e){return Zo(t,"POST","/v1/accounts:signInWithIdp",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TP="http://localhost";class qr extends hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=op(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ui(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ui(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ui(e,n)}buildRequest(){const e={requestUri:TP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AP(t){const e=Us(Fs(t)).link,n=e?Us(Fs(e)).deep_link_id:null,r=Us(Fs(t)).deep_link_id;return(r?Us(Fs(r)).link:null)||r||n||e||t}class dp{constructor(e){var n,r,i,s,o,a;const l=Us(Fs(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=IP((i=l.mode)!==null&&i!==void 0?i:null);M(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=AP(e);try{return new dp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(){this.providerId=us.PROVIDER_ID}static credential(e,n){return ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dp.parseLink(n);return M(r,"argument-error"),ko._fromEmailAndCode(e,r.code,r.tenantId)}}us.PROVIDER_ID="password";us.EMAIL_PASSWORD_SIGN_IN_METHOD="password";us.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends jw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends ea{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ea{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ea{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SP(t,e){return Zo(t,"POST","/v1/accounts:signUp",fr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await gn._fromIdTokenResponse(e,r,i),o=cy(r);return new Hr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=cy(r);return new Hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function cy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl extends Ot{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Wl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Wl(e,n,r,i)}}function Bw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Wl._fromErrorAndOperation(t,s,e,r):s})}async function RP(t,e,n=!1){const r=await Xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CP(t,e,n=!1){const{auth:r}=t;if(Xt(r.app))return Promise.reject(wn(r));const i="reauthenticate";try{const s=await Xi(t,Bw(r,i,e,t),n);M(s.idToken,r,"internal-error");const o=up(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&zt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zw(t,e,n=!1){if(Xt(t.app))return Promise.reject(wn(t));const r="signIn",i=await Bw(t,r,e),s=await Hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function PP(t,e){return zw(ri(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(t){const e=ri(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function kP(t,e,n){if(Xt(t.app))return Promise.reject(wn(t));const r=ri(t),o=await Pd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",SP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&qw(t),l}),a=await Hr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function NP(t,e,n){return Xt(t.app)?Promise.reject(wn(t)):PP(te(t),us.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qw(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DP(t,e){return Nn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=te(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Xi(r,DP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function OP(t,e,n,r){return te(t).onIdTokenChanged(e,n,r)}function LP(t,e,n){return te(t).beforeAuthStateChanged(e,n)}function VP(t,e,n,r){return te(t).onAuthStateChanged(e,n,r)}function MP(t){return te(t).signOut()}const Gl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gl,"1"),this.storage.removeItem(Gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(){const t=Ie();return cp(t)||Lu(t)}const UP=1e3,FP=10;class Ww extends Hw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=bP()&&eP(),this.fallbackToPolling=bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ZC()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,FP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ww.type="LOCAL";const $P=Ww;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gw extends Hw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gw.type="SESSION";const Kw=Gw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await jP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=fp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(){return window}function zP(t){rn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function qP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function WP(){return Qw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="firebaseLocalStorageDb",GP=1,Kl="firebaseLocalStorage",Yw="fbase_key";class ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bu(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function KP(){const t=indexedDB.deleteDatabase(Xw);return new ta(t).toPromise()}function kd(){const t=indexedDB.open(Xw,GP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kl,{keyPath:Yw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kl)?e(r):(r.close(),await KP(),e(await kd()))})})}async function hy(t,e,n){const r=bu(t,!0).put({[Yw]:e,value:n});return new ta(r).toPromise()}async function QP(t,e){const n=bu(t,!1).get(e),r=await new ta(n).toPromise();return r===void 0?null:r.value}function dy(t,e){const n=bu(t,!0).delete(e);return new ta(n).toPromise()}const XP=800,YP=3;class Jw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mu._getInstance(WP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await qP(),!this.activeServiceWorker)return;this.sender=new BP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kd();return await hy(e,Gl,"1"),await dy(e,Gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>hy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>QP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>dy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bu(i,!1).getAll();return new ta(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Jw.type="LOCAL";const JP=Jw;new Jo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(t,e){return e?yn(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp extends hp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ui(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ui(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ui(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ek(t){return zw(t.auth,new pp(t),t.bypassAuthState)}function tk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),CP(n,new pp(t),t.bypassAuthState)}async function nk(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),RP(n,new pp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ek;case"linkViaPopup":case"linkViaRedirect":return nk;case"reauthViaPopup":case"reauthViaRedirect":return tk;default:zt(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=new Jo(2e3,1e4);class Ci extends Zw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ci.currentPopupAction&&Ci.currentPopupAction.cancel(),Ci.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=fp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ci.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,rk.get())};e()}}Ci.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="pendingRedirect",dl=new Map;class sk extends Zw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dl.get(this.auth._key());if(!e){try{const r=await ok(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dl.set(this.auth._key(),e)}return this.bypassAuthState||dl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ok(t,e){const n=uk(e),r=lk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function ak(t,e){dl.set(t._key(),e)}function lk(t){return yn(t._redirectPersistence)}function uk(t){return hl(ik,t.config.apiKey,t.name)}async function ck(t,e,n=!1){if(Xt(t.app))return Promise.reject(wn(t));const r=ri(t),i=ZP(r,e),o=await new sk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=10*60*1e3;class dk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!eE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hk&&this.cachedEventUids.clear(),this.cachedEventUids.has(fy(e))}saveEventToCache(e){this.cachedEventUids.add(fy(e)),this.lastProcessedEventTime=Date.now()}}function fy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e={}){return Nn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,gk=/^https?/;async function yk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await pk(t);for(const n of e)try{if(_k(n))return}catch{}zt(t,"unauthorized-domain")}function _k(t){const e=Rd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!gk.test(n))return!1;if(mk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk=new Jo(3e4,6e4);function py(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wk(t){return new Promise((e,n)=>{var r,i,s;function o(){py(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{py(),n(nn(t,"network-request-failed"))},timeout:vk.get()})}if(!((i=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rn().gapi)===null||s===void 0)&&s.load)o();else{const a=uP("iframefcb");return rn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},Fw(`${lP()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fl=null,e})}let fl=null;function Ek(t){return fl=fl||wk(t),fl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk=new Jo(5e3,15e3),Ik="__/auth/iframe",Ak="emulator/auth/iframe",Sk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ck(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?lp(e,Ak):`https://${t.config.authDomain}/${Ik}`,r={apiKey:e.apiKey,appName:t.name,v:ni},i=Rk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Yo(r).slice(1)}`}async function Pk(t){const e=await Ek(t),n=rn().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:Ck(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=rn().setTimeout(()=>{s(o)},Tk.get());function l(){rn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nk=500,Dk=600,xk="_blank",Ok="http://localhost";class my{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Lk(t,e,n,r=Nk,i=Dk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},kk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ie().toLowerCase();n&&(a=xw(u)?xk:n),Dw(u)&&(e=e||Ok,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(JC(u)&&a!=="_self")return Vk(e||"",a),new my(null);const h=window.open(e||"",a,c);M(h,t,"popup-blocked");try{h.focus()}catch{}return new my(h)}function Vk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="__/auth/handler",bk="emulator/auth/handler",Uk=encodeURIComponent("fac");async function gy(t,e,n,r,i,s){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ni,eventId:i};if(e instanceof jw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ER(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ea){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${Uk}=${encodeURIComponent(l)}`:"";return`${Fk(t)}?${Yo(a).slice(1)}${u}`}function Fk({config:t}){return t.emulator?lp(t,bk):`https://${t.authDomain}/${Mk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih="webStorageSupport";class $k{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kw,this._completeRedirectFn=ck,this._overrideRedirectResult=ak}async _openPopup(e,n,r,i){var s;Rn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await gy(e,n,r,Rd(),i);return Lk(e,o,fp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await gy(e,n,r,Rd(),i);return zP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Pk(e),r=new dk(e);return n.register("authEvent",i=>(M(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ih,{type:ih},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ih];o!==void 0&&n(!!o),zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=yk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bw()||cp()||Lu()}}const jk=$k;var yy="@firebase/auth",_y="1.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function qk(t){Bt(new xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Uw(t)},u=new sP(r,i,s,l);return pP(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Bt(new xt("auth-internal",e=>{const n=ri(e.getProvider("auth").getImmediate());return(r=>new Bk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ct(yy,_y,zk(t)),ct(yy,_y,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=5*60,Wk=dw("authIdTokenMaxAge")||Hk;let vy=null;const Gk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Wk)return;const i=n==null?void 0:n.token;vy!==i&&(vy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Kk(t=Ou()){const e=dr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fP(t,{popupRedirectResolver:jk,persistence:[JP,$P,Kw]}),r=dw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Gk(s.toString());LP(n,o,()=>o(n.currentUser)),OP(n,a=>o(a))}}const i=uw("auth");return i&&mP(n,`http://${i}`),n}function Qk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}oP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=nn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Qk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});qk("Browser");var Xk="firebase",Yk="10.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ct(Xk,Yk,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="firebasestorage.googleapis.com",nE="storageBucket",Jk=2*60*1e3,Zk=10*60*1e3,eN=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends Ot{constructor(e,n,r=0){super(sh(e),`Firebase Storage: ${n} (${sh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,de.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return sh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(oe||(oe={}));function sh(t){return"storage/"+t}function mp(){const t="An unknown error occurred, please check the error payload for server response.";return new de(oe.UNKNOWN,t)}function tN(t){return new de(oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function nN(t){return new de(oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function rN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new de(oe.UNAUTHENTICATED,t)}function iN(){return new de(oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sN(t){return new de(oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function rE(){return new de(oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iE(){return new de(oe.CANCELED,"User canceled the upload/download.")}function oN(t){return new de(oe.INVALID_URL,"Invalid URL '"+t+"'.")}function aN(t){return new de(oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function lN(){return new de(oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nE+"' property when initializing the app?")}function sE(){return new de(oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function uN(){return new de(oe.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function cN(){return new de(oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function hN(t){return new de(oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Nd(t){return new de(oe.INVALID_ARGUMENT,t)}function oE(){return new de(oe.APP_DELETED,"The Firebase app was deleted.")}function dN(t){return new de(oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function no(t,e){return new de(oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ns(t){throw new de(oe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=mt.makeFromUrl(e,n)}catch{return new mt(e,"")}if(r.path==="")return r;throw aN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},_=n===tE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",m=new RegExp(`^https?://${_}/${i}/${v}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:p,indices:y,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<g.length;w++){const R=g[w],C=R.regex.exec(e);if(C){const N=C[R.indices.bucket];let L=C[R.indices.path];L||(L=""),r=new mt(N,L),R.postModify(r);break}}if(r==null)throw oN(e);return r}}class fN{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...v){u||(u=!0,e.apply(null,v))}function h(v){i=setTimeout(()=>{i=null,t(p,l())},v)}function d(){s&&clearTimeout(s)}function p(v,...m){if(u){d();return}if(v){d(),c.call(null,v,...m);return}if(l()||o){d(),c.call(null,v,...m);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let y=!1;function _(v){y||(y=!0,d(),!u&&(i!==null?(v||(a=2),clearTimeout(i),h(0)):v||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function mN(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gN(t){return t!==void 0}function yN(t){return typeof t=="function"}function _N(t){return typeof t=="object"&&!Array.isArray(t)}function Uu(t){return typeof t=="string"||t instanceof String}function wy(t){return gp()&&t instanceof Blob}function gp(){return typeof Blob<"u"}function Ey(t,e,n,r){if(r<e)throw Nd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Nd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function aE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Mr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Mr||(Mr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ja(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Mr.NO_ERROR,l=s.getStatus();if(!a||lE(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===Mr.ABORT;r(!1,new ja(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ja(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());gN(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=mp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?oE():iE();o(l)}else{const l=rE();o(l)}};this.canceled_?n(!1,new ja(!1,null,!0)):this.backoffId_=pN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ja{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function wN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function EN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function TN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function IN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function AN(t,e,n,r,i,s,o=!0){const a=aE(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return TN(u,e),wN(u,n),EN(u,s),IN(u,r),new vN(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SN(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function RN(...t){const e=SN();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(gp())return new Blob(t);throw new de(oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function CN(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t){if(typeof atob>"u")throw hN("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class oh{constructor(e,n){this.data=e,this.contentType=n||null}}function kN(t,e){switch(t){case Yt.RAW:return new oh(uE(e));case Yt.BASE64:case Yt.BASE64URL:return new oh(cE(t,e));case Yt.DATA_URL:return new oh(DN(e),xN(e))}throw mp()}function uE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function NN(t){let e;try{e=decodeURIComponent(t)}catch{throw no(Yt.DATA_URL,"Malformed data URL.")}return uE(e)}function cE(t,e){switch(t){case Yt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw no(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Yt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw no(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=PN(e)}catch(i){throw i.message.includes("polyfill")?i:no(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class hE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw no(Yt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=ON(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function DN(t){const e=new hE(t);return e.base64?cE(Yt.BASE64,e.rest):NN(e.rest)}function xN(t){return new hE(t).contentType}function ON(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n){let r=0,i="";wy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(wy(this.data_)){const r=this.data_,i=CN(r,e,n);return i===null?null:new jn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new jn(r,!0)}}static getBlob(...e){if(gp()){const n=e.map(r=>r instanceof jn?r.data_:r);return new jn(RN.apply(null,n))}else{const n=e.map(o=>Uu(o)?kN(Yt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new jn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){let e;try{e=JSON.parse(t)}catch{return null}return _N(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function VN(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function fE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t,e){return e}class Ye{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||MN}}let Ba=null;function bN(t){return!Uu(t)||t.length<2?t:fE(t)}function pE(){if(Ba)return Ba;const t=[];t.push(new Ye("bucket")),t.push(new Ye("generation")),t.push(new Ye("metageneration")),t.push(new Ye("name","fullPath",!0));function e(s,o){return bN(o)}const n=new Ye("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ye("size");return i.xform=r,t.push(i),t.push(new Ye("timeCreated")),t.push(new Ye("updated")),t.push(new Ye("md5Hash",null,!0)),t.push(new Ye("cacheControl",null,!0)),t.push(new Ye("contentDisposition",null,!0)),t.push(new Ye("contentEncoding",null,!0)),t.push(new Ye("contentLanguage",null,!0)),t.push(new Ye("contentType",null,!0)),t.push(new Ye("metadata","customMetadata",!0)),Ba=t,Ba}function UN(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new mt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function FN(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return UN(r,t),r}function mE(t,e,n){const r=dE(e);return r===null?null:FN(t,r,n)}function $N(t,e,n,r){const i=dE(e);if(i===null||!Uu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),p=na(d,n,r),y=aE({alt:"media",token:u});return p+y})[0]}function gE(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class cs{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t){if(!t)throw mp()}function yp(t,e){function n(r,i){const s=mE(t,i,e);return En(s!==null),s}return n}function jN(t,e){function n(r,i){const s=mE(t,i,e);return En(s!==null),$N(s,i,t.host,t._protocol)}return n}function ra(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=iN():i=rN():n.getStatus()===402?i=nN(t.bucket):n.getStatus()===403?i=sN(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function yE(t){const e=ra(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=tN(t.path)),s.serverResponse=i.serverResponse,s}return n}function BN(t,e,n){const r=e.fullServerUrl(),i=na(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new cs(i,s,yp(t,n),o);return a.errorHandler=yE(e),a}function zN(t,e,n){const r=e.fullServerUrl(),i=na(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new cs(i,s,jN(t,n),o);return a.errorHandler=yE(e),a}function qN(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _E(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=qN(null,e)),r}function HN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let w=0;w<2;w++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=_E(e,r,i),c=gE(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",p=jn.getBlob(h,r,d);if(p===null)throw sE();const y={name:u.fullPath},_=na(s,t.host,t._protocol),v="POST",m=t.maxUploadRetryTime,f=new cs(_,v,yp(t,n),m);return f.urlParams=y,f.headers=o,f.body=p.uploadData(),f.errorHandler=ra(e),f}class Ql{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function _p(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{En(!1)}return En(!!n&&(e||["active"]).indexOf(n)!==-1),n}function WN(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=_E(e,r,i),a={name:o.fullPath},l=na(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=gE(o,n),d=t.maxUploadRetryTime;function p(_){_p(_);let v;try{v=_.getResponseHeader("X-Goog-Upload-URL")}catch{En(!1)}return En(Uu(v)),v}const y=new cs(l,u,p,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=ra(e),y}function GN(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=_p(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{En(!1)}h||En(!1);const d=Number(h);return En(!isNaN(d)),new Ql(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new cs(n,o,s,a);return l.headers=i,l.errorHandler=ra(e),l}const Ty=256*1024;function KN(t,e,n,r,i,s,o,a){const l=new Ql(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw uN();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c;let p="";c===0?p="finalize":u===c?p="upload, finalize":p="upload";const y={"X-Goog-Upload-Command":p,"X-Goog-Upload-Offset":`${l.current}`},_=r.slice(h,d);if(_===null)throw sE();function v(w,R){const C=_p(w,["active","final"]),N=l.current+c,L=r.size();let Q;return C==="final"?Q=yp(e,s)(w,R):Q=null,new Ql(N,L,C==="final",Q)}const m="POST",f=e.maxUploadRetryTime,g=new cs(n,m,v,f);return g.headers=y,g.body=_.uploadData(),g.progressCallback=a||null,g.errorHandler=ra(t),g}const rt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ah(t){switch(t){case"running":case"pausing":case"canceling":return rt.RUNNING;case"paused":return rt.PAUSED;case"success":return rt.SUCCESS;case"canceled":return rt.CANCELED;case"error":return rt.ERROR;default:return rt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n,r){if(yN(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class XN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ns("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ns("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ns("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ns("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ns("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class YN extends XN{initXhr(){this.xhr_.responseType="text"}}function hi(){return new YN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=pE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(oe.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(lE(i.status,[]))if(s)i=rE();else{this.sleepTime=Math.max(this.sleepTime*2,eN),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(oe.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=WN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,hi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=GN(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,hi,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ty*this._chunkMultiplier,n=new Ql(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=KN(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,hi,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ty*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=BN(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,hi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=HN(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,hi,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=iE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ah(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new QN(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ah(this._state)){case rt.SUCCESS:ui(this._resolve.bind(null,this.snapshot))();break;case rt.CANCELED:case rt.ERROR:const n=this._reject;ui(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ah(this._state)){case rt.RUNNING:case rt.PAUSED:e.next&&ui(e.next.bind(e,this.snapshot))();break;case rt.SUCCESS:e.complete&&ui(e.complete.bind(e))();break;case rt.CANCELED:case rt.ERROR:e.error&&ui(e.error.bind(e,this._error))();break;default:e.error&&ui(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){this._service=e,n instanceof mt?this._location=n:this._location=mt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wr(e,n)}get root(){const e=new mt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fE(this._location.path)}get storage(){return this._service}get parent(){const e=LN(this._location.path);if(e===null)return null;const n=new mt(this._location.bucket,e);return new Wr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw dN(e)}}function ZN(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new JN(t,new jn(e),n)}function eD(t){t._throwIfRoot("getDownloadURL");const e=zN(t.storage,t._location,pE());return t.storage.makeRequestWithTokens(e,hi).then(n=>{if(n===null)throw cN();return n})}function tD(t,e){const n=VN(t._location.path,e),r=new mt(t._location.bucket,n);return new Wr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(t){return/^[A-Za-z]+:\/\//.test(t)}function rD(t,e){return new Wr(t,e)}function vE(t,e){if(t instanceof vp){const n=t;if(n._bucket==null)throw lN();const r=new Wr(n,n._bucket);return e!=null?vE(r,e):r}else return e!==void 0?tD(t,e):t}function iD(t,e){if(e&&nD(e)){if(t instanceof vp)return rD(t,e);throw Nd("To use ref(service, url), the first argument must be a Storage instance.")}else return vE(t,e)}function Iy(t,e){const n=e==null?void 0:e[nE];return n==null?null:mt.makeFromBucketSpec(n,t)}function sD(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:fw(i,t.app.options.projectId))}class vp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=tE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Jk,this._maxUploadRetryTime=Zk,this._requests=new Set,i!=null?this._bucket=mt.makeFromBucketSpec(i,this._host):this._bucket=Iy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=mt.makeFromBucketSpec(this._url,e):this._bucket=Iy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ey("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ey("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new fN(oE());{const o=AN(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ay="@firebase/storage",Sy="0.12.3";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wE="storage";function EE(t,e,n){return t=te(t),ZN(t,e,n)}function TE(t){return t=te(t),eD(t)}function IE(t,e){return t=te(t),iD(t,e)}function oD(t=Ou(),e){t=te(t);const r=dr(t,wE).getImmediate({identifier:e}),i=cw("storage");return i&&aD(r,...i),r}function aD(t,e,n,r={}){sD(t,e,n,r)}function lD(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new vp(n,r,i,e,ni)}function uD(){Bt(new xt(wE,lD,"PUBLIC").setMultipleInstances(!0)),ct(Ay,Sy,""),ct(Ay,Sy,"esm2017")}uD();var cD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},k,wp=wp||{},U=cD||self;function Fu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ia(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function hD(t){return Object.prototype.hasOwnProperty.call(t,lh)&&t[lh]||(t[lh]=++dD)}var lh="closure_uid_"+(1e9*Math.random()>>>0),dD=0;function fD(t,e,n){return t.call.apply(t.bind,arguments)}function pD(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function We(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?We=fD:We=pD,We.apply(null,arguments)}function za(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function De(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function pr(){this.s=this.s,this.o=this.o}var mD=0;pr.prototype.s=!1;pr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),mD!=0)&&hD(this)};pr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const AE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ep(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ry(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Fu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ge(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var gD=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};U.addEventListener("test",n,e),U.removeEventListener("test",n,e)}catch{}return t}();function No(t){return/^[\s\xa0]*$/.test(t)}function $u(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function Qt(t){return $u().indexOf(t)!=-1}function Tp(t){return Tp[" "](t),t}Tp[" "]=function(){};function yD(t,e){var n=ux;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var _D=Qt("Opera"),Yi=Qt("Trident")||Qt("MSIE"),SE=Qt("Edge"),Dd=SE||Yi,RE=Qt("Gecko")&&!($u().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge"))&&!(Qt("Trident")||Qt("MSIE"))&&!Qt("Edge"),vD=$u().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge");function CE(){var t=U.document;return t?t.documentMode:void 0}var xd;e:{var uh="",ch=function(){var t=$u();if(RE)return/rv:([^\);]+)(\)|;)/.exec(t);if(SE)return/Edge\/([\d\.]+)/.exec(t);if(Yi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(vD)return/WebKit\/(\S+)/.exec(t);if(_D)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ch&&(uh=ch?ch[1]:""),Yi){var hh=CE();if(hh!=null&&hh>parseFloat(uh)){xd=String(hh);break e}}xd=uh}var Od;if(U.document&&Yi){var Cy=CE();Od=Cy||parseInt(xd,10)||void 0}else Od=void 0;var wD=Od;function Do(t,e){if(Ge.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(RE){e:{try{Tp(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ED[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Do.$.h.call(this)}}De(Do,Ge);var ED={2:"touch",3:"pen",4:"mouse"};Do.prototype.h=function(){Do.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var sa="closure_listenable_"+(1e6*Math.random()|0),TD=0;function ID(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++TD,this.fa=this.ia=!1}function ju(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Ip(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function AD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function PE(t){const e={};for(const n in t)e[n]=t[n];return e}const Py="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Py.length;s++)n=Py[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Bu(t){this.src=t,this.g={},this.h=0}Bu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Vd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new ID(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Ld(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=AE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ju(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ap="closure_lm_"+(1e6*Math.random()|0),dh={};function NE(t,e,n,r,i){if(r&&r.once)return xE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)NE(t,e[s],n,r,i);return null}return n=Cp(n),t&&t[sa]?t.O(e,n,ia(r)?!!r.capture:!!r,i):DE(t,e,n,!1,r,i)}function DE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ia(i)?!!i.capture:!!i,a=Rp(t);if(a||(t[Ap]=a=new Bu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=SD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)gD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(LE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function SD(){function t(n){return e.call(t.src,t.listener,n)}const e=RD;return t}function xE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)xE(t,e[s],n,r,i);return null}return n=Cp(n),t&&t[sa]?t.P(e,n,ia(r)?!!r.capture:!!r,i):DE(t,e,n,!0,r,i)}function OE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)OE(t,e[s],n,r,i);else r=ia(r)?!!r.capture:!!r,n=Cp(n),t&&t[sa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Vd(s,n,r,i),-1<n&&(ju(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Rp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vd(e,n,r,i)),(n=-1<t?e[t]:null)&&Sp(n))}function Sp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[sa])Ld(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(LE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Rp(e))?(Ld(n,t),n.h==0&&(n.src=null,e[Ap]=null)):ju(t)}}}function LE(t){return t in dh?dh[t]:dh[t]="on"+t}function RD(t,e){if(t.fa)t=!0;else{e=new Do(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Sp(t),t=n.call(r,e)}return t}function Rp(t){return t=t[Ap],t instanceof Bu?t:null}var fh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cp(t){return typeof t=="function"?t:(t[fh]||(t[fh]=function(e){return t.handleEvent(e)}),t[fh])}function Ne(){pr.call(this),this.i=new Bu(this),this.S=this,this.J=null}De(Ne,pr);Ne.prototype[sa]=!0;Ne.prototype.removeEventListener=function(t,e,n,r){OE(this,t,e,n,r)};function be(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ge(e,t);else if(e instanceof Ge)e.target=e.target||t;else{var i=e;e=new Ge(r,t),kE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=qa(o,r,!0,e)&&i}if(o=e.g=t,i=qa(o,r,!0,e)&&i,i=qa(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=qa(o,r,!1,e)&&i}Ne.prototype.N=function(){if(Ne.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ju(n[r]);delete t.g[e],t.h--}}this.J=null};Ne.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ne.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function qa(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Ld(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Pp=U.JSON.stringify;class CD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function PD(){var t=kp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kD{constructor(){this.h=this.g=null}add(e,n){const r=VE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var VE=new CD(()=>new ND,t=>t.reset());class ND{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function DD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function xD(t){U.setTimeout(()=>{throw t},0)}let xo,Oo=!1,kp=new kD,ME=()=>{const t=U.Promise.resolve(void 0);xo=()=>{t.then(OD)}};var OD=()=>{for(var t;t=PD();){try{t.h.call(t.g)}catch(n){xD(n)}var e=VE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Oo=!1};function zu(t,e){Ne.call(this),this.h=t||1,this.g=e||U,this.j=We(this.qb,this),this.l=Date.now()}De(zu,Ne);k=zu.prototype;k.ga=!1;k.T=null;k.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),be(this,"tick"),this.ga&&(Np(this),this.start()))}};k.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Np(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}k.N=function(){zu.$.N.call(this),Np(this),delete this.g};function Dp(t,e,n){if(typeof t=="function")n&&(t=We(t,n));else if(t&&typeof t.handleEvent=="function")t=We(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function bE(t){t.g=Dp(()=>{t.g=null,t.i&&(t.i=!1,bE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class LD extends pr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:bE(this)}N(){super.N(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lo(t){pr.call(this),this.h=t,this.g={}}De(Lo,pr);var ky=[];function UE(t,e,n,r){Array.isArray(n)||(n&&(ky[0]=n.toString()),n=ky);for(var i=0;i<n.length;i++){var s=NE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function FE(t){Ip(t.g,function(e,n){this.g.hasOwnProperty(n)&&Sp(e)},t),t.g={}}Lo.prototype.N=function(){Lo.$.N.call(this),FE(this)};Lo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qu(){this.g=!0}qu.prototype.Ea=function(){this.g=!1};function VD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function MD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Pi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+UD(t,n)+(r?" "+r:"")})}function bD(t,e){t.info(function(){return"TIMEOUT: "+e})}qu.prototype.info=function(){};function UD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Pp(n)}catch{return e}}var ii={},Ny=null;function Hu(){return Ny=Ny||new Ne}ii.Ta="serverreachability";function $E(t){Ge.call(this,ii.Ta,t)}De($E,Ge);function Vo(t){const e=Hu();be(e,new $E(e))}ii.STAT_EVENT="statevent";function jE(t,e){Ge.call(this,ii.STAT_EVENT,t),this.stat=e}De(jE,Ge);function Ze(t){const e=Hu();be(e,new jE(e,t))}ii.Ua="timingevent";function BE(t,e){Ge.call(this,ii.Ua,t),this.size=e}De(BE,Ge);function oa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var Wu={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},zE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function xp(){}xp.prototype.h=null;function Dy(t){return t.h||(t.h=t.i())}function qE(){}var aa={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Op(){Ge.call(this,"d")}De(Op,Ge);function Lp(){Ge.call(this,"c")}De(Lp,Ge);var Md;function Gu(){}De(Gu,xp);Gu.prototype.g=function(){return new XMLHttpRequest};Gu.prototype.i=function(){return{}};Md=new Gu;function la(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Lo(this),this.P=FD,t=Dd?125:void 0,this.V=new zu(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new HE}function HE(){this.i=null,this.g="",this.h=!1}var FD=45e3,WE={},bd={};k=la.prototype;k.setTimeout=function(t){this.P=t};function Ud(t,e,n){t.L=1,t.A=Qu(Cn(e)),t.u=n,t.S=!0,GE(t,null)}function GE(t,e){t.G=Date.now(),ua(t),t.B=Cn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),tT(n.i,"t",r),t.o=0,n=t.l.J,t.h=new HE,t.g=TT(t.l,n?e:null,!t.u),0<t.O&&(t.M=new LD(We(t.Pa,t,t.g),t.O)),UE(t.U,t.g,"readystatechange",t.nb),e=t.I?PE(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Vo(),VD(t.j,t.v,t.B,t.m,t.W,t.u)}k.nb=function(t){t=t.target;const e=this.M;e&&Jt(t)==3?e.l():this.Pa(t)};k.Pa=function(t){try{if(t==this.g)e:{const c=Jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Dd||this.g&&(this.h.h||this.g.ja()||Vy(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?Vo(3):Vo(2)),Ku(this);var n=this.g.da();this.ca=n;t:if(KE(this)){var r=Vy(this.g);t="";var i=r.length,s=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kr(this),ro(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,MD(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!No(a)){var u=a;break t}}u=null}if(n=u)Pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fd(this,n);else{this.i=!1,this.s=3,Ze(12),kr(this),ro(this);break e}}this.S?(QE(this,c,o),Dd&&this.i&&c==3&&(UE(this.U,this.V,"tick",this.mb),this.V.start())):(Pi(this.j,this.m,o,null),Fd(this,o)),c==4&&kr(this),this.i&&!this.J&&(c==4?_T(this.l,this):(this.i=!1,ua(this)))}else ox(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ze(12)):(this.s=0,Ze(13)),kr(this),ro(this)}}}catch{}finally{}};function KE(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function QE(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=$D(t,n),i==bd){e==4&&(t.s=4,Ze(14),r=!1),Pi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==WE){t.s=4,Ze(15),Pi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Pi(t.j,t.m,i,null),Fd(t,i);KE(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ze(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),$p(e),e.M=!0,Ze(11))):(Pi(t.j,t.m,n,"[Invalid Chunked Response]"),kr(t),ro(t))}k.mb=function(){if(this.g){var t=Jt(this.g),e=this.g.ja();this.o<e.length&&(Ku(this),QE(this,t,e),this.i&&t!=4&&ua(this))}};function $D(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?bd:(n=Number(e.substring(n,r)),isNaN(n)?WE:(r+=1,r+n>e.length?bd:(e=e.slice(r,r+n),t.o=r+n,e)))}k.cancel=function(){this.J=!0,kr(this)};function ua(t){t.Y=Date.now()+t.P,XE(t,t.P)}function XE(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=oa(We(t.lb,t),e)}function Ku(t){t.C&&(U.clearTimeout(t.C),t.C=null)}k.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(bD(this.j,this.B),this.L!=2&&(Vo(),Ze(17)),kr(this),this.s=2,ro(this)):XE(this,this.Y-t)};function ro(t){t.l.H==0||t.J||_T(t.l,t)}function kr(t){Ku(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Np(t.V),FE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Fd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||$d(n.i,t))){if(!t.K&&$d(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Jl(n),Zu(n);else break e;Fp(n),Ze(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=oa(We(n.ib,n),6e3));if(1>=iT(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Nr(n,11)}else if((t.K||n.g==t)&&Jl(n),!No(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Vp(s,s.h),s.h=null))}if(r.F){const _=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,re(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=ET(r,r.J?r.pa:null,r.Y),o.K){sT(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Ku(a),ua(a)),r.g=o}else gT(r);0<n.j.length&&ec(n)}else u[0]!="stop"&&u[0]!="close"||Nr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Nr(n,7):Up(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Vo(4)}catch{}}function jD(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Fu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function BD(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Fu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function YE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Fu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=BD(t),r=jD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var JE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function br(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof br){this.h=t.h,Xl(this,t.j),this.s=t.s,this.g=t.g,Yl(this,t.m),this.l=t.l;var e=t.i,n=new Mo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xy(this,n),this.o=t.o}else t&&(e=String(t).match(JE))?(this.h=!1,Xl(this,e[1]||"",!0),this.s=$s(e[2]||""),this.g=$s(e[3]||"",!0),Yl(this,e[4]),this.l=$s(e[5]||"",!0),xy(this,e[6]||"",!0),this.o=$s(e[7]||"")):(this.h=!1,this.i=new Mo(null,this.h))}br.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,Oy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,Oy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?WD:HD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,KD)),t.join("")};function Cn(t){return new br(t)}function Xl(t,e,n){t.j=n?$s(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Yl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xy(t,e,n){e instanceof Mo?(t.i=e,QD(t.i,t.h)):(n||(e=js(e,GD)),t.i=new Mo(e,t.h))}function re(t,e,n){t.i.set(e,n)}function Qu(t){return re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function $s(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Oy=/[#\/\?@]/g,HD=/[#\?:]/g,WD=/[#\?]/g,GD=/[#\?@]/g,KD=/#/g;function Mo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function mr(t){t.g||(t.g=new Map,t.h=0,t.i&&zD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}k=Mo.prototype;k.add=function(t,e){mr(this),this.i=null,t=hs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ZE(t,e){mr(t),e=hs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function eT(t,e){return mr(t),e=hs(t,e),t.g.has(e)}k.forEach=function(t,e){mr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};k.ta=function(){mr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};k.Z=function(t){mr(this);let e=[];if(typeof t=="string")eT(this,t)&&(e=e.concat(this.g.get(hs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};k.set=function(t,e){return mr(this),this.i=null,t=hs(this,t),eT(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};k.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function tT(t,e,n){ZE(t,e),0<n.length&&(t.i=null,t.g.set(hs(t,e),Ep(n)),t.h+=n.length)}k.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function hs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function QD(t,e){e&&!t.j&&(mr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(ZE(this,r),tT(this,i,n))},t)),t.j=e}var XD=class{constructor(t,e){this.g=t,this.map=e}};function nT(t){this.l=t||YD,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ka&&U.g.Ka()&&U.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YD=10;function rT(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function iT(t){return t.h?1:t.g?t.g.size:0}function $d(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Vp(t,e){t.g?t.g.add(e):t.h=e}function sT(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}nT.prototype.cancel=function(){if(this.i=oT(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function oT(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ep(t.i)}var JD=class{stringify(t){return U.JSON.stringify(t,void 0)}parse(t){return U.JSON.parse(t,void 0)}};function ZD(){this.g=new JD}function ex(t,e,n){const r=n||"";try{YE(t,function(i,s){let o=i;ia(i)&&(o=Pp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function tx(t,e){const n=new qu;if(U.Image){const r=new Image;r.onload=za(Ha,n,r,"TestLoadImage: loaded",!0,e),r.onerror=za(Ha,n,r,"TestLoadImage: error",!1,e),r.onabort=za(Ha,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=za(Ha,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ha(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Xu(t){this.l=t.ec||null,this.j=t.ob||!1}De(Xu,xp);Xu.prototype.g=function(){return new Yu(this.l,this.j)};Xu.prototype.i=function(t){return function(){return t}}({});function Yu(t,e){Ne.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Mp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}De(Yu,Ne);var Mp=0;k=Yu.prototype;k.open=function(t,e){if(this.readyState!=Mp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bo(this)};k.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||U).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};k.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ca(this)),this.readyState=Mp};k.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bo(this)),this.g&&(this.readyState=3,bo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;aT(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function aT(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}k.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ca(this):bo(this),this.readyState==3&&aT(this)}};k.Za=function(t){this.g&&(this.response=this.responseText=t,ca(this))};k.Ya=function(t){this.g&&(this.response=t,ca(this))};k.ka=function(){this.g&&ca(this)};function ca(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bo(t)}k.setRequestHeader=function(t,e){this.v.append(t,e)};k.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};k.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function bo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Yu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var nx=U.JSON.parse;function pe(t){Ne.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=lT,this.L=this.M=!1}De(pe,Ne);var lT="",rx=/^https?$/i,ix=["POST","PUT"];k=pe.prototype;k.Oa=function(t){this.M=t};k.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Md.g(),this.C=this.u?Dy(this.u):Dy(Md),this.g.onreadystatechange=We(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Ly(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&t instanceof U.FormData,!(0<=AE(ix,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{hT(this),0<this.B&&((this.L=sx(this.g))?(this.g.timeout=this.B,this.g.ontimeout=We(this.ua,this)):this.A=Dp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ly(this,s)}};function sx(t){return Yi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}k.ua=function(){typeof wp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,be(this,"timeout"),this.abort(8))};function Ly(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,uT(t),Ju(t)}function uT(t){t.F||(t.F=!0,be(t,"complete"),be(t,"error"))}k.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,be(this,"complete"),be(this,"abort"),Ju(this))};k.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ju(this,!0)),pe.$.N.call(this)};k.La=function(){this.s||(this.G||this.v||this.l?cT(this):this.kb())};k.kb=function(){cT(this)};function cT(t){if(t.h&&typeof wp<"u"&&(!t.C[1]||Jt(t)!=4||t.da()!=2)){if(t.v&&Jt(t)==4)Dp(t.La,0,t);else if(be(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(JE)[1]||null;!i&&U.self&&U.self.location&&(i=U.self.location.protocol.slice(0,-1)),r=!rx.test(i?i.toLowerCase():"")}n=r}if(n)be(t,"complete"),be(t,"success");else{t.m=6;try{var s=2<Jt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",uT(t)}}finally{Ju(t)}}}}function Ju(t,e){if(t.g){hT(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||be(t,"ready");try{n.onreadystatechange=r}catch{}}}function hT(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}k.isActive=function(){return!!this.g};function Jt(t){return t.g?t.g.readyState:0}k.da=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};k.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};k.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),nx(e)}};function Vy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case lT:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function ox(t){const e={};t=(t.g&&2<=Jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(No(t[r]))continue;var n=DD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}AD(e,function(r){return r.join(", ")})}k.Ia=function(){return this.m};k.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dT(t){let e="";return Ip(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function bp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=dT(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):re(t,e,n))}function Ds(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fT(t){this.Ga=0,this.j=[],this.l=new qu,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ds("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ds("baseRetryDelayMs",5e3,t),this.hb=Ds("retryDelaySeedMs",1e4,t),this.eb=Ds("forwardChannelMaxRetries",2,t),this.xa=Ds("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new nT(t&&t.concurrentRequestLimit),this.Ja=new ZD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}k=fT.prototype;k.ra=8;k.H=1;function Up(t){if(pT(t),t.H==3){var e=t.W++,n=Cn(t.I);if(re(n,"SID",t.K),re(n,"RID",e),re(n,"TYPE","terminate"),ha(t,n),e=new la(t,t.l,e),e.L=2,e.A=Qu(Cn(n)),n=!1,U.navigator&&U.navigator.sendBeacon)try{n=U.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&U.Image&&(new Image().src=e.A,n=!0),n||(e.g=TT(e.l,null),e.g.ha(e.A)),e.G=Date.now(),ua(e)}wT(t)}function Zu(t){t.g&&($p(t),t.g.cancel(),t.g=null)}function pT(t){Zu(t),t.u&&(U.clearTimeout(t.u),t.u=null),Jl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function ec(t){if(!rT(t.i)&&!t.m){t.m=!0;var e=t.Na;xo||ME(),Oo||(xo(),Oo=!0),kp.add(e,t),t.C=0}}function ax(t,e){return iT(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=oa(We(t.Na,t,e),vT(t,t.C)),t.C++,!0)}k.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new la(this,this.l,t);let s=this.s;if(this.U&&(s?(s=PE(s),kE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=mT(this,i,e),n=Cn(this.I),re(n,"RID",t),re(n,"CVER",22),this.F&&re(n,"X-HTTP-Session-Id",this.F),ha(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(dT(s)))+"&"+e:this.o&&bp(n,this.o,s)),Vp(this.i,i),this.bb&&re(n,"TYPE","init"),this.P?(re(n,"$req",e),re(n,"SID","null"),i.aa=!0,Ud(i,n,null)):Ud(i,n,e),this.H=2}}else this.H==3&&(t?My(this,t):this.j.length==0||rT(this.i)||My(this))};function My(t,e){var n;e?n=e.m:n=t.W++;const r=Cn(t.I);re(r,"SID",t.K),re(r,"RID",n),re(r,"AID",t.V),ha(t,r),t.o&&t.s&&bp(r,t.o,t.s),n=new la(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=mT(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Vp(t.i,n),Ud(n,r,e)}function ha(t,e){t.na&&Ip(t.na,function(n,r){re(e,r,n)}),t.h&&YE({},function(n,r){re(e,r,n)})}function mT(t,e,n){n=Math.min(t.j.length,n);var r=t.h?We(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{ex(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function gT(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;xo||ME(),Oo||(xo(),Oo=!0),kp.add(e,t),t.A=0}}function Fp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=oa(We(t.Ma,t),vT(t,t.A)),t.A++,!0)}k.Ma=function(){if(this.u=null,yT(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oa(We(this.jb,this),t)}};k.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ze(10),Zu(this),yT(this))};function $p(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function yT(t){t.g=new la(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Cn(t.wa);re(e,"RID","rpc"),re(e,"SID",t.K),re(e,"AID",t.V),re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&re(e,"TO",t.qa),re(e,"TYPE","xmlhttp"),ha(t,e),t.o&&t.s&&bp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Qu(Cn(e)),n.u=null,n.S=!0,GE(n,t)}k.ib=function(){this.v!=null&&(this.v=null,Zu(this),Fp(this),Ze(19))};function Jl(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function _T(t,e){var n=null;if(t.g==e){Jl(t),$p(t),t.g=null;var r=2}else if($d(t.i,e))n=e.F,sT(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=Hu(),be(r,new BE(r,n)),ec(t)}else gT(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&ax(t,e)||r==2&&Fp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Nr(t,5);break;case 4:Nr(t,10);break;case 3:Nr(t,6);break;default:Nr(t,2)}}}function vT(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Nr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=We(t.pb,t);n||(n=new br("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||Xl(n,"https"),Qu(n)),tx(n.toString(),r)}else Ze(2);t.H=0,t.h&&t.h.za(e),wT(t),pT(t)}k.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ze(2)):(this.l.info("Failed to ping google.com"),Ze(1))};function wT(t){if(t.H=0,t.ma=[],t.h){const e=oT(t.i);(e.length!=0||t.j.length!=0)&&(Ry(t.ma,e),Ry(t.ma,t.j),t.i.i.length=0,Ep(t.j),t.j.length=0),t.h.ya()}}function ET(t,e,n){var r=n instanceof br?Cn(n):new br(n);if(r.g!="")e&&(r.g=e+"."+r.g),Yl(r,r.m);else{var i=U.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new br(null);r&&Xl(s,r),e&&(s.g=e),i&&Yl(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&re(r,n,e),re(r,"VER",t.ra),ha(t,r),r}function TT(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new pe(new Xu({ob:n})):new pe(t.va),e.Oa(t.J),e}k.isActive=function(){return!!this.h&&this.h.isActive(this)};function IT(){}k=IT.prototype;k.Ba=function(){};k.Aa=function(){};k.za=function(){};k.ya=function(){};k.isActive=function(){return!0};k.Va=function(){};function Zl(){if(Yi&&!(10<=Number(wD)))throw Error("Environmental error: no available transport.")}Zl.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){Ne.call(this),this.g=new fT(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!No(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!No(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ds(this)}De(wt,Ne);wt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ze(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=ET(t,null,t.Y),ec(t)};wt.prototype.close=function(){Up(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Pp(t),t=n);e.j.push(new XD(e.fb++,t)),e.H==3&&ec(e)};wt.prototype.N=function(){this.g.h=null,delete this.j,Up(this.g),delete this.g,wt.$.N.call(this)};function AT(t){Op.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}De(AT,Op);function ST(){Lp.call(this),this.status=1}De(ST,Lp);function ds(t){this.g=t}De(ds,IT);ds.prototype.Ba=function(){be(this.g,"a")};ds.prototype.Aa=function(t){be(this.g,new AT(t))};ds.prototype.za=function(t){be(this.g,new ST)};ds.prototype.ya=function(){be(this.g,"b")};function lx(){this.blockSize=-1}function qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}De(qt,lx);qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ph(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)ph(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){ph(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){ph(this,r),i=0;break}}this.h=i,this.i+=e};qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function J(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var ux={};function jp(t){return-128<=t&&128>t?yD(t,function(e){return new J([e|0],0>e?-1:0)}):new J([t|0],0>t?-1:0)}function Zt(t){if(isNaN(t)||!isFinite(t))return Fi;if(0>t)return Le(Zt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=jd;return new J(e,0)}function RT(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Le(RT(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zt(Math.pow(e,8)),r=Fi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Zt(Math.pow(e,s)),r=r.R(s).add(Zt(o))):(r=r.R(n),r=r.add(Zt(o)))}return r}var jd=4294967296,Fi=jp(0),Bd=jp(1),by=jp(16777216);k=J.prototype;k.ea=function(){if(St(this))return-Le(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:jd+r)*e,e*=jd}return t};k.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(_n(this))return"0";if(St(this))return"-"+Le(this).toString(t);for(var e=Zt(Math.pow(t,6)),n=this,r="";;){var i=tu(n,e).g;n=eu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,_n(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};k.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function _n(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function St(t){return t.h==-1}k.X=function(t){return t=eu(this,t),St(t)?-1:_n(t)?0:1};function Le(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new J(n,~t.h).add(Bd)}k.abs=function(){return St(this)?Le(this):this};k.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new J(n,n[n.length-1]&-2147483648?-1:0)};function eu(t,e){return t.add(Le(e))}k.R=function(t){if(_n(this)||_n(t))return Fi;if(St(this))return St(t)?Le(this).R(Le(t)):Le(Le(this).R(t));if(St(t))return Le(this.R(Le(t)));if(0>this.X(by)&&0>t.X(by))return Zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Wa(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Wa(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Wa(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Wa(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new J(n,0)};function Wa(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function xs(t,e){this.g=t,this.h=e}function tu(t,e){if(_n(e))throw Error("division by zero");if(_n(t))return new xs(Fi,Fi);if(St(t))return e=tu(Le(t),e),new xs(Le(e.g),Le(e.h));if(St(e))return e=tu(t,Le(e)),new xs(Le(e.g),e.h);if(30<t.g.length){if(St(t)||St(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Bd,r=e;0>=r.X(t);)n=Uy(n),r=Uy(r);var i=ci(n,1),s=ci(r,1);for(r=ci(r,2),n=ci(n,2);!_n(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ci(r,1),n=ci(n,1)}return e=eu(t,i.R(e)),new xs(i,e)}for(i=Fi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Zt(n),o=s.R(e);St(o)||0<o.X(t);)n-=r,s=Zt(n),o=s.R(e);_n(s)&&(s=Bd),i=i.add(s),t=eu(t,o)}return new xs(i,t)}k.gb=function(t){return tu(this,t).h};k.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new J(n,this.h&t.h)};k.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new J(n,this.h|t.h)};k.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new J(n,this.h^t.h)};function Uy(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new J(n,t.h)}function ci(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new J(i,t.h)}Zl.prototype.createWebChannel=Zl.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;Wu.NO_ERROR=0;Wu.TIMEOUT=8;Wu.HTTP_ERROR=6;zE.COMPLETE="complete";qE.EventType=aa;aa.OPEN="a";aa.CLOSE="b";aa.ERROR="c";aa.MESSAGE="d";Ne.prototype.listen=Ne.prototype.O;pe.prototype.listenOnce=pe.prototype.P;pe.prototype.getLastError=pe.prototype.Sa;pe.prototype.getLastErrorCode=pe.prototype.Ia;pe.prototype.getStatus=pe.prototype.da;pe.prototype.getResponseJson=pe.prototype.Wa;pe.prototype.getResponseText=pe.prototype.ja;pe.prototype.send=pe.prototype.ha;pe.prototype.setWithCredentials=pe.prototype.Oa;qt.prototype.digest=qt.prototype.l;qt.prototype.reset=qt.prototype.reset;qt.prototype.update=qt.prototype.j;J.prototype.add=J.prototype.add;J.prototype.multiply=J.prototype.R;J.prototype.modulo=J.prototype.gb;J.prototype.compare=J.prototype.X;J.prototype.toNumber=J.prototype.ea;J.prototype.toString=J.prototype.toString;J.prototype.getBits=J.prototype.D;J.fromNumber=Zt;J.fromString=RT;var cx=function(){return new Zl},hx=function(){return Hu()},mh=Wu,dx=zE,fx=ii,Fy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ga=qE,px=pe,mx=qt,$i=J;const $y="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs="10.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=new xu("@firebase/firestore");function Os(){return Gr.logLevel}function P(t,...e){if(Gr.logLevel<=W.DEBUG){const n=e.map(Bp);Gr.debug(`Firestore (${fs}): ${t}`,...n)}}function un(t,...e){if(Gr.logLevel<=W.ERROR){const n=e.map(Bp);Gr.error(`Firestore (${fs}): ${t}`,...n)}}function Ji(t,...e){if(Gr.logLevel<=W.WARN){const n=e.map(Bp);Gr.warn(`Firestore (${fs}): ${t}`,...n)}}function Bp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t="Unexpected state"){const e=`FIRESTORE (${fs}) INTERNAL ASSERTION FAILED: `+t;throw un(e),new Error(e)}function ee(t,e){t||b()}function $(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class D extends Ot{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class gx{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class yx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class _x{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new sn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new sn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{P("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(P("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new sn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(P("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ee(typeof r.accessToken=="string"),new CT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ee(e===null||typeof e=="string"),new ze(e)}}class vx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class wx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new vx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ex{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&P("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,P("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{P("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):P("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ee(typeof n.token=="string"),this.R=n.token,new Ex(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ix(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ix(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function X(t,e){return t<e?-1:t>e?1:0}function Zi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new D(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new D(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new D(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new D(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ye(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.timestamp=e}static fromTimestamp(e){return new F(e)}static min(){return new F(new ye(0,0))}static max(){return new F(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n,r){n===void 0?n=0:n>e.length&&b(),r===void 0?r=e.length-n:r>e.length-n&&b(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Uo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Uo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends Uo{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new D(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const Ax=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Uo{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return Ax.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new D(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new D(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new D(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new D(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.path=e}static fromPath(e){return new V(ie.fromString(e))}static fromName(e){return new V(ie.fromString(e).popFirst(5))}static empty(){return new V(ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new V(new ie(e.slice()))}}function Sx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=F.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new or(i,V.empty(),e)}function Rx(t){return new or(t.readTime,t.key,-1)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(F.min(),V.empty(),-1)}static max(){return new or(F.max(),V.empty(),-1)}}function Cx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:X(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Px)throw t;P("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new T((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof T?n:T.resolve(n)}catch(n){return T.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):T.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):T.reject(n)}static resolve(e){return new T((n,r)=>{n(e)})}static reject(e){return new T((n,r)=>{r(e)})}static waitFor(e){return new T((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=T.resolve(!1);for(const r of e)n=n.next(i=>i?T.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new T((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new T((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new sn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new io(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=qp(r.target.error);this.V.reject(new io(e,i))}}static open(e,n,r,i){try{return new zp(n,e.transaction(i,r))}catch(s){throw new io(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(P("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new Dx(n)}}class Dr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Dr.S(Ie())===12.2&&un("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return P("SimpleDb","Removing database:",e),Sr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ip())return!1;if(Dr.C())return!0;const e=Ie(),n=Dr.S(e),r=0<n&&n<10,i=Dr.v(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(P("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new io(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new D(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new D(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new io(e,o))},i.onupgradeneeded=s=>{P("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.N(o,i.transaction,s.oldVersion,this.version).next(()=>{P("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=zp.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.g(),u)).catch(u=>(a.abort(u),T.reject(u))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(P("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Nx{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Sr(this.k.delete())}}class io extends D{constructor(e,n){super(E.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function fa(t){return t.name==="IndexedDbTransactionError"}class Dx{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(P("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(P("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Sr(r)}add(e){return P("SimpleDb","ADD",this.store.name,e,e),Sr(this.store.add(e))}get(e){return Sr(this.store.get(e)).next(n=>(n===void 0&&(n=null),P("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return P("SimpleDb","DELETE",this.store.name,e),Sr(this.store.delete(e))}count(){return P("SimpleDb","COUNT",this.store.name),Sr(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new T((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.G(s,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new T((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}H(e,n){P("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(s,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new T((r,i)=>{n.onerror=s=>{const o=qp(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new T((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new Nx(a),u=n(a.primaryKey,a.value,l);if(u instanceof T){const c=u.catch(h=>(l.done(),T.reject(h)));r.push(c)}l.isDone?i():l.$===null?a.continue():a.continue(l.$)}}).next(()=>T.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Sr(t){return new T((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=qp(r.target.error);n(i)}})}let jy=!1;function qp(t){const e=Dr.S(Ie());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new D("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return jy||(jy=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Hp._e=-1;function tc(t){return t==null}function nu(t){return t===0&&1/t==-1/0}function xx(t){return typeof t=="number"&&Number.isInteger(t)&&!nu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function si(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new he(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ka(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ka(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ka(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ka(this.root,e,this.comparator,!0)}}class Ka{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Oe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zy(this.data.getIterator())}getIteratorFrom(e){return new zy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class zy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new gt([])}unionWith(e){let n=new Ue(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new NT("Invalid base64 string: "+s):s}}(e);return new Xe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Xe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const Ox=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(t){if(ee(!!t),typeof t=="string"){let e=0;const n=Ox.exec(t);if(ee(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:we(t.seconds),nanos:we(t.nanos)}}function we(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Kr(t){return typeof t=="string"?Xe.fromBase64String(t):Xe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Gp(t){const e=t.mapValue.fields.__previous_value__;return Wp(e)?Gp(e):e}function Fo(t){const e=ar(t.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class $o{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new $o("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $o&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wp(t)?4:Vx(t)?9007199254740991:10:b()}function cn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fo(t).isEqual(Fo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ar(i.timestampValue),a=ar(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Kr(i.bytesValue).isEqual(Kr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return we(i.geoPointValue.latitude)===we(s.geoPointValue.latitude)&&we(i.geoPointValue.longitude)===we(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return we(i.integerValue)===we(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=we(i.doubleValue),a=we(s.doubleValue);return o===a?nu(o)===nu(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Zi(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(By(o)!==By(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!cn(o[l],a[l])))return!1;return!0}(t,e);default:return b()}}function jo(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function es(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return X(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return X(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=we(s.integerValue||s.doubleValue),l=we(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return qy(t.timestampValue,e.timestampValue);case 4:return qy(Fo(t),Fo(e));case 5:return X(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Kr(s),l=Kr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=X(a[u],l[u]);if(c!==0)return c}return X(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=X(we(s.latitude),we(o.latitude));return a!==0?a:X(we(s.longitude),we(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=es(a[u],l[u]);if(c)return c}return X(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Qa.mapValue&&o===Qa.mapValue)return 0;if(s===Qa.mapValue)return 1;if(o===Qa.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const d=X(l[h],c[h]);if(d!==0)return d;const p=es(a[l[h]],u[c[h]]);if(p!==0)return p}return X(l.length,c.length)}(t.mapValue,e.mapValue);default:throw b()}}function qy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return X(t,e);const n=ar(t),r=ar(e),i=X(n.seconds,r.seconds);return i!==0?i:X(n.nanos,r.nanos)}function ts(t){return zd(t)}function zd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ar(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Kr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return V.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=zd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${zd(n.fields[o])}`;return i+"}"}(t.mapValue):b()}function Hy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function qd(t){return!!t&&"integerValue"in t}function Kp(t){return!!t&&"arrayValue"in t}function Wy(t){return!!t&&"nullValue"in t}function Gy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pl(t){return!!t&&"mapValue"in t}function so(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return si(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=so(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=so(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Vx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=so(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=so(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){si(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new st(so(this.value))}}function DT(t){const e=[];return si(t.fields,(n,r)=>{const i=new Ve([n]);if(pl(r)){const s=DT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new He(e,0,F.min(),F.min(),F.min(),st.empty(),0)}static newFoundDocument(e,n,r,i){return new He(e,1,n,F.min(),r,i,0)}static newNoDocument(e,n){return new He(e,2,n,F.min(),F.min(),st.empty(),0)}static newUnknownDocument(e,n){return new He(e,3,n,F.min(),F.min(),st.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e,n){this.position=e,this.inclusive=n}}function Ky(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Qy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n="asc"){this.field=e,this.dir=n}}function Mx(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{}class Te extends xT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ux(e,n,r):n==="array-contains"?new jx(e,r):n==="in"?new Bx(e,r):n==="not-in"?new zx(e,r):n==="array-contains-any"?new qx(e,r):new Te(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Fx(e,r):new $x(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(es(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends xT{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Ht(e,n)}matches(e){return OT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function OT(t){return t.op==="and"}function LT(t){return bx(t)&&OT(t)}function bx(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function Hd(t){if(t instanceof Te)return t.field.canonicalString()+t.op.toString()+ts(t.value);if(LT(t))return t.filters.map(e=>Hd(e)).join(",");{const e=t.filters.map(n=>Hd(n)).join(",");return`${t.op}(${e})`}}function VT(t,e){return t instanceof Te?function(r,i){return i instanceof Te&&r.op===i.op&&r.field.isEqual(i.field)&&cn(r.value,i.value)}(t,e):t instanceof Ht?function(r,i){return i instanceof Ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&VT(o,i.filters[a]),!0):!1}(t,e):void b()}function MT(t){return t instanceof Te?function(n){return`${n.field.canonicalString()} ${n.op} ${ts(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(MT).join(" ,")+"}"}(t):"Filter"}class Ux extends Te{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}}class Fx extends Te{constructor(e,n){super(e,"in",n),this.keys=bT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $x extends Te{constructor(e,n){super(e,"not-in",n),this.keys=bT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}class jx extends Te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Kp(n)&&jo(n.arrayValue,this.value)}}class Bx extends Te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&jo(this.value.arrayValue,n)}}class zx extends Te{constructor(e,n){super(e,"not-in",n)}matches(e){if(jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!jo(this.value.arrayValue,n)}}class qx extends Te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Kp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Xy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Hx(t,e,n,r,i,s,o)}function Qp(t){const e=$(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ts(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ts(r)).join(",")),e.ce=n}return e.ce}function Xp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Mx(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!VT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qy(t.startAt,e.startAt)&&Qy(t.endAt,e.endAt)}function Wd(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Wx(t,e,n,r,i,s,o,a){return new pa(t,e,n,r,i,s,o,a)}function nc(t){return new pa(t)}function Yy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UT(t){return t.collectionGroup!==null}function oo(t){const e=$(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ue(Ve.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new iu(s,r))}),n.has(Ve.keyField().canonicalString())||e.le.push(new iu(Ve.keyField(),r))}return e.le}function on(t){const e=$(t);return e.he||(e.he=Gx(e,oo(t))),e.he}function Gx(t,e){if(t.limitType==="F")return Xy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new iu(i.field,s)});const n=t.endAt?new ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ru(t.startAt.position,t.startAt.inclusive):null;return Xy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gd(t,e){const n=t.filters.concat([e]);return new pa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Kd(t,e,n){return new pa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function rc(t,e){return Xp(on(t),on(e))&&t.limitType===e.limitType}function FT(t){return`${Qp(on(t))}|lt:${t.limitType}`}function di(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>MT(i)).join(", ")}]`),tc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ts(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ts(i)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function ic(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):V.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of oo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Ky(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,oo(r),i)||r.endAt&&!function(o,a,l){const u=Ky(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,oo(r),i))}(t,e)}function Kx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $T(t){return(e,n)=>{let r=!1;for(const i of oo(t)){const s=Qx(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Qx(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?es(l,u):b()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){si(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return kT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx=new he(V.comparator);function Pn(){return Xx}const jT=new he(V.comparator);function Bs(...t){let e=jT;for(const n of t)e=e.insert(n.key,n);return e}function BT(t){let e=jT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function xr(){return ao()}function zT(){return ao()}function ao(){return new ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const Yx=new he(V.comparator),Jx=new Ue(V.comparator);function q(...t){let e=Jx;for(const n of t)e=e.add(n);return e}const Zx=new Ue(X);function eO(){return Zx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qT(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nu(e)?"-0":e}}function HT(t){return{integerValue:""+t}}function tO(t,e){return xx(e)?HT(e):qT(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this._=void 0}}function nO(t,e,n){return t instanceof Bo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Wp(s)&&(s=Gp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ns?GT(t,e):t instanceof zo?KT(t,e):function(i,s){const o=WT(i,s),a=Jy(o)+Jy(i.Ie);return qd(o)&&qd(i.Ie)?HT(a):qT(i.serializer,a)}(t,e)}function rO(t,e,n){return t instanceof ns?GT(t,e):t instanceof zo?KT(t,e):n}function WT(t,e){return t instanceof su?function(r){return qd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Bo extends sc{}class ns extends sc{constructor(e){super(),this.elements=e}}function GT(t,e){const n=QT(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class zo extends sc{constructor(e){super(),this.elements=e}}function KT(t,e){let n=QT(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class su extends sc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Jy(t){return we(t.integerValue||t.doubleValue)}function QT(t){return Kp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e,n){this.field=e,this.transform=n}}function iO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ns&&i instanceof ns||r instanceof zo&&i instanceof zo?Zi(r.elements,i.elements,cn):r instanceof su&&i instanceof su?cn(r.Ie,i.Ie):r instanceof Bo&&i instanceof Bo}(t.transform,e.transform)}class sO{constructor(e,n){this.version=e,this.transformResults=n}}class an{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new an}static exists(e){return new an(void 0,e)}static updateTime(e){return new an(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class oc{}function YT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ZT(t.key,an.none()):new ma(t.key,t.data,an.none());{const n=t.data,r=st.empty();let i=new Ue(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new gr(t.key,r,new gt(i.toArray()),an.none())}}function oO(t,e,n){t instanceof ma?function(i,s,o){const a=i.value.clone(),l=e_(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof gr?function(i,s,o){if(!ml(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=e_(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(JT(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function lo(t,e,n,r){return t instanceof ma?function(s,o,a,l){if(!ml(s.precondition,o))return a;const u=s.value.clone(),c=t_(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof gr?function(s,o,a,l){if(!ml(s.precondition,o))return a;const u=t_(s.fieldTransforms,l,o),c=o.data;return c.setAll(JT(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return ml(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function aO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=WT(r.transform,i||null);s!=null&&(n===null&&(n=st.empty()),n.set(r.field,s))}return n||null}function Zy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Zi(r,i,(s,o)=>iO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ma extends oc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gr extends oc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function JT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function e_(t,e,n){const r=new Map;ee(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,rO(o,a,n[i]))}return r}function t_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nO(s,o,e))}return r}class ZT extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lO extends oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&oO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=lo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=zT();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=YT(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(F.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),q())}isEqual(e){return this.batchId===e.batchId&&Zi(this.mutations,e.mutations,(n,r)=>Zy(n,r))&&Zi(this.baseMutations,e.baseMutations,(n,r)=>Zy(n,r))}}class Yp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ee(e.mutations.length===r.length);let i=function(){return Yx}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Yp(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve,G;function dO(t){switch(t){default:return b();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function eI(t){if(t===void 0)return un("GRPC error has no .code"),E.UNKNOWN;switch(t){case ve.OK:return E.OK;case ve.CANCELLED:return E.CANCELLED;case ve.UNKNOWN:return E.UNKNOWN;case ve.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ve.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ve.INTERNAL:return E.INTERNAL;case ve.UNAVAILABLE:return E.UNAVAILABLE;case ve.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ve.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ve.NOT_FOUND:return E.NOT_FOUND;case ve.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ve.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ve.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ve.ABORTED:return E.ABORTED;case ve.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ve.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ve.DATA_LOSS:return E.DATA_LOSS;default:return b()}}(G=ve||(ve={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO=new $i([4294967295,4294967295],0);function n_(t){const e=fO().encode(t),n=new mx;return n.update(e),new Uint8Array(n.digest())}function r_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new $i([n,r],0),new $i([i,s],0)]}class Jp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new zs(`Invalid padding: ${n}`);if(r<0)throw new zs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new zs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new zs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=$i.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply($i.fromNumber(r)));return i.compare(pO)===1&&(i=new $i([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=n_(e),[r,i]=r_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Jp(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=n_(e),[r,i]=r_(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class zs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ac(F.min(),i,new he(X),Pn(),q())}}class ga{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ga(r,n,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class tI{constructor(e,n){this.targetId=e,this.fe=n}}class nI{constructor(e,n,r=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class i_{constructor(){this.ge=0,this.pe=o_(),this.ye=Xe.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=q(),n=q(),r=q();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:b()}}),new ga(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=o_()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,ee(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class mO{constructor(e){this.Be=e,this.ke=new Map,this.qe=Pn(),this.Qe=s_(),this.Ke=new he(X)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:b()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Wd(s))if(r===0){const o=new V(s.path);this.We(n,o,He.newNoDocument(o,F.min()))}else ee(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Kr(r).toUint8Array()}catch(l){if(l instanceof NT)return Ji("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Jp(o,i,s)}catch(l){return Ji(l instanceof zs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Wd(a.target)){const l=new V(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,He.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=q();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new ac(e,n,this.Ke,this.qe,r);return this.qe=Pn(),this.Qe=s_(),this.Ke=new he(X),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new i_,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ue(X),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||P("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new i_),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function s_(){return new he(V.comparator)}function o_(){return new he(V.comparator)}const gO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),yO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),_O=(()=>({and:"AND",or:"OR"}))();class vO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qd(t,e){return t.useProto3Json||tc(e)?e:{value:e}}function ou(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function rI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function wO(t,e){return ou(t,e.toTimestamp())}function ln(t){return ee(!!t),F.fromTimestamp(function(n){const r=ar(n);return new ye(r.seconds,r.nanos)}(t))}function Zp(t,e){return Xd(t,e).canonicalString()}function Xd(t,e){const n=function(i){return new ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function iI(t){const e=ie.fromString(t);return ee(uI(e)),e}function Yd(t,e){return Zp(t.databaseId,e.path)}function gh(t,e){const n=iI(e);if(n.get(1)!==t.databaseId.projectId)throw new D(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new D(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(oI(n))}function sI(t,e){return Zp(t.databaseId,e)}function EO(t){const e=iI(t);return e.length===4?ie.emptyPath():oI(e)}function Jd(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oI(t){return ee(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function a_(t,e,n){return{name:Yd(t,e),fields:n.value.mapValue.fields}}function TO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(ee(c===void 0||typeof c=="string"),Xe.fromBase64String(c||"")):(ee(c===void 0||c instanceof Uint8Array),Xe.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?E.UNKNOWN:eI(u.code);return new D(c,u.message||"")}(o);n=new nI(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=gh(t,r.document.name),s=ln(r.document.updateTime),o=r.document.createTime?ln(r.document.createTime):F.min(),a=new st({mapValue:{fields:r.document.fields}}),l=He.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new gl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=gh(t,r.document),s=r.readTime?ln(r.readTime):F.min(),o=He.newNoDocument(i,s),a=r.removedTargetIds||[];n=new gl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=gh(t,r.document),s=r.removedTargetIds||[];n=new gl([],s,i,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hO(i,s),a=r.targetId;n=new tI(a,o)}}return n}function IO(t,e){let n;if(e instanceof ma)n={update:a_(t,e.key,e.value)};else if(e instanceof ZT)n={delete:Yd(t,e.key)};else if(e instanceof gr)n={update:a_(t,e.key,e.data),updateMask:xO(e.fieldMask)};else{if(!(e instanceof lO))return b();n={verify:Yd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Bo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ns)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof su)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw b()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:wO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:b()}(t,e.precondition)),n}function AO(t,e){return t&&t.length>0?(ee(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?ln(i.updateTime):ln(s);return o.isEqual(F.min())&&(o=ln(s)),new sO(o,i.transformResults||[])}(n,e))):[]}function SO(t,e){return{documents:[sI(t,e.path)]}}function RO(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=sI(t,i);const s=function(u){if(u.length!==0)return lI(Ht.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(c=>function(d){return{field:fi(d.field),direction:kO(d.dir)}}(c))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Qd(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ut:n,parent:i}}function CO(t){let e=EO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ee(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const d=aI(h);return d instanceof Ht&&LT(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new iu(pi(y.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,tc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,p=h.values||[];return new ru(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,p=h.values||[];return new ru(p,d)}(n.endAt)),Wx(e,i,o,s,a,"F",l,u)}function PO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return b()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=pi(n.unaryFilter.field);return Te.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=pi(n.unaryFilter.field);return Te.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=pi(n.unaryFilter.field);return Te.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=pi(n.unaryFilter.field);return Te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return b()}}(t):t.fieldFilter!==void 0?function(n){return Te.create(pi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(r=>aI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return b()}}(n.compositeFilter.op))}(t):b()}function kO(t){return gO[t]}function NO(t){return yO[t]}function DO(t){return _O[t]}function fi(t){return{fieldPath:t.canonicalString()}}function pi(t){return Ve.fromServerFormat(t.fieldPath)}function lI(t){return t instanceof Te?function(n){if(n.op==="=="){if(Gy(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NAN"}};if(Wy(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gy(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NOT_NAN"}};if(Wy(n.value))return{unaryFilter:{field:fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fi(n.field),op:NO(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const r=n.getFilters().map(i=>lI(i));return r.length===1?r[0]:{compositeFilter:{op:DO(n.op),filters:r}}}(t):b()}function xO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,i,s=F.min(),o=F.min(),a=Xe.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e){this.ct=e}}function LO(t){const e=CO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(){this._n=new MO}addToCollectionParentIndex(e,n){return this._n.add(n),T.resolve()}getCollectionParents(e,n){return T.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return T.resolve()}deleteFieldIndex(e,n){return T.resolve()}deleteAllFieldIndexes(e){return T.resolve()}createTargetIndexes(e,n){return T.resolve()}getDocumentsMatchingTarget(e,n){return T.resolve(null)}getIndexType(e,n){return T.resolve(0)}getFieldIndexes(e,n){return T.resolve([])}getNextCollectionGroupToUpdate(e){return T.resolve(null)}getMinOffset(e,n){return T.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return T.resolve(or.min())}updateCollectionGroup(e,n,r){return T.resolve()}updateIndexEntries(e,n){return T.resolve()}}class MO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ue(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new rs(0)}static Ln(){return new rs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(){this.changes=new ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?T.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&lo(r.mutation,i,gt.empty(),ye.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,q()).next(()=>r))}getLocalViewOfDocuments(e,n,r=q()){const i=xr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Bs();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,q()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Pn();const o=ao(),a=function(){return ao()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof gr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),lo(c.mutation,u,c.mutation.getFieldMask(),ye.now())):o.set(u.key,gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new UO(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ao();let i=new he((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||gt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||q()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=zT();c.forEach(d=>{if(!s.has(d)){const p=YT(n.get(d),r.get(d));p!==null&&h.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return T.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return V.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):T.resolve(xr());let a=-1,l=s;return o.next(u=>T.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?T.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,q())).next(c=>({batchId:a,changes:BT(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=Bs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Bs();return this.indexManager.getCollectionParents(e,s).next(a=>T.forEach(a,l=>{const u=function(h,d){return new pa(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,He.newInvalidDocument(c)))});let a=Bs();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&lo(c.mutation,u,gt.empty(),ye.now()),ic(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return T.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ln(i.createTime)}}(n)),T.resolve()}getNamedQuery(e,n){return T.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:LO(i.bundledQuery),readTime:ln(i.readTime)}}(n)),T.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(){this.overlays=new he(V.comparator),this.hr=new Map}getOverlay(e,n){return T.resolve(this.overlays.get(n))}getOverlays(e,n){const r=xr();return T.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),T.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),T.resolve()}getOverlaysForCollection(e,n,r){const i=xr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return T.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new he((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=xr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=xr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return T.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cO(n,r));let s=this.hr.get(n);s===void 0&&(s=q(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this.Pr=new Ue(Ce.Ir),this.Tr=new Ue(Ce.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Ce(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Ce(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new V(new ie([])),r=new Ce(n,e),i=new Ce(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new V(new ie([])),r=new Ce(n,e),i=new Ce(n,e+1);let s=q();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ce(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ce{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return V.comparator(e.key,n.key)||X(e.pr,n.pr)}static Er(e,n){return X(e.pr,n.pr)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Ue(Ce.Ir)}checkEmpty(e){return T.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Ce(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return T.resolve(o)}lookupMutationBatch(e,n){return T.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return T.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return T.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return T.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ce(n,0),i=new Ce(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),T.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(X);return n.forEach(i=>{const s=new Ce(i,0),o=new Ce(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),T.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Ce(new V(s),0);let a=new Ue(X);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),T.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ee(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return T.forEach(n.mutations,i=>{const s=new Ce(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Ce(n,0),i=this.wr.firstAfterOrEqual(r);return T.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,T.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.vr=e,this.docs=function(){return new he(V.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return T.resolve(r?r.document.mutableCopy():He.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():He.newInvalidDocument(i))}),T.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Pn();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Cx(Rx(c),r)<=0||(i.has(c.key)||ic(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return T.resolve(s)}getAllFromCollectionGroup(e,n,r,i){b()}Fr(e,n){return T.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qO(this)}getSize(e){return T.resolve(this.size)}}class qO extends bO{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),T.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(e){this.persistence=e,this.Mr=new ps(n=>Qp(n),Xp),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.Or=0,this.Nr=new em,this.targetCount=0,this.Lr=rs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),T.resolve()}getLastRemoteSnapshotVersion(e){return T.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return T.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),T.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),T.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new rs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,T.resolve()}updateTargetData(e,n){return this.qn(n),T.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,T.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),T.waitFor(s).next(()=>i)}getTargetCount(e){return T.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return T.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),T.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),T.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),T.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return T.resolve(r)}containsKey(e,n){return T.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WO{constructor(e,n){this.Br={},this.overlays={},this.kr=new Hp(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new HO(this),this.indexManager=new VO,this.remoteDocumentCache=function(i){return new zO(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new OO(n),this.$r=new $O(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new jO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new BO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){P("MemoryPersistence","Starting transaction:",e);const i=new GO(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return T.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class GO extends kx{constructor(e){super(),this.currentSequenceNumber=e}}class tm{constructor(e){this.persistence=e,this.zr=new em,this.jr=null}static Hr(e){return new tm(e)}get Jr(){if(this.jr)return this.jr;throw b()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),T.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),T.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),T.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return T.forEach(this.Jr,r=>{const i=V.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,F.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return T.or([()=>T.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=q(),i=q();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new nm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return gR()?8:Dr.v(Ie())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new KO;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Os()<=W.DEBUG&&P("QueryEngine","SDK will not create cache indexes for query:",di(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),T.resolve()):(Os()<=W.DEBUG&&P("QueryEngine","Query:",di(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Os()<=W.DEBUG&&P("QueryEngine","The SDK decides to create cache indexes for query:",di(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):T.resolve())}ji(e,n){if(Yy(n))return T.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Kd(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=q(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,Kd(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return Yy(n)||i.isEqual(F.min())?T.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?T.resolve(null):(Os()<=W.DEBUG&&P("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),di(n)),this.es(e,o,n,Sx(i,-1)).next(a=>a))})}Zi(e,n){let r=new Ue($T(e));return n.forEach((i,s)=>{ic(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Os()<=W.DEBUG&&P("QueryEngine","Using full collection scan to execute query:",di(n)),this.zi.getDocumentsMatchingQuery(e,n,or.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new he(X),this.rs=new ps(s=>Qp(s),Xp),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FO(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function YO(t,e,n,r){return new XO(t,e,n,r)}async function cI(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=q();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function JO(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,d=h.keys();let p=T.resolve();return d.forEach(y=>{p=p.next(()=>c.getEntry(l,y)).next(_=>{const v=u.docVersions.get(y);ee(v!==null),_.version.compareTo(v)<0&&(h.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=q();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hI(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function ZO(t,e){const n=$(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(Xe.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(h,p),function(_,v,m){return _.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:m.addedDocuments.size+m.modifiedDocuments.size+m.removedDocuments.size>0}(d,p,c)&&a.push(n.Qr.updateTargetData(s,p))});let l=Pn(),u=q();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(eL(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(F.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return T.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function eL(t,e,n){let r=q(),i=q();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Pn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(F.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):P("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function tL(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nL(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,T.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Zd(t,e,n){const r=$(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!fa(o))throw o;P("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function l_(t,e,n){const r=$(t);let i=F.min(),s=q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=$(l),d=h.rs.get(c);return d!==void 0?T.resolve(h.ns.get(d)):h.Qr.getTargetData(u,c)}(r,o,on(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:F.min(),n?s:q())).next(a=>(rL(r,Kx(e),a),{documents:a,hs:s})))}function rL(t,e,n){let r=t.ss.get(e)||F.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class u_{constructor(){this.activeTargetIds=eO()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iL{constructor(){this.no=new u_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new u_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){P("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){P("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xa=null;function yh(){return Xa===null?Xa=function(){return 268435456+Math.round(2147483648*Math.random())}():Xa++,"0x"+Xa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be="WebChannelConnection";class lL extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=yh(),l=this.bo(n,r.toUriEncodedString());P("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(P("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Ji("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=oL[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=yh();return new Promise((o,a)=>{const l=new px;l.setWithCredentials(!0),l.listenOnce(dx.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case mh.NO_ERROR:const c=l.getResponseJson();P(Be,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case mh.TIMEOUT:P(Be,`RPC '${e}' ${s} timed out`),a(new D(E.DEADLINE_EXCEEDED,"Request time out"));break;case mh.HTTP_ERROR:const h=l.getStatus();if(P(Be,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(v){const m=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(m)>=0?m:E.UNKNOWN}(p.status);a(new D(y,p.message))}else a(new D(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new D(E.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{P(Be,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);P(Be,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=yh(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=cx(),a=hx(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");P(Be,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let d=!1,p=!1;const y=new aL({lo:v=>{p?P(Be,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(P(Be,`Opening RPC '${e}' stream ${i} transport.`),h.open(),d=!0),P(Be,`RPC '${e}' stream ${i} sending:`,v),h.send(v))},ho:()=>h.close()}),_=(v,m,f)=>{v.listen(m,g=>{try{f(g)}catch(w){setTimeout(()=>{throw w},0)}})};return _(h,Ga.EventType.OPEN,()=>{p||P(Be,`RPC '${e}' stream ${i} transport opened.`)}),_(h,Ga.EventType.CLOSE,()=>{p||(p=!0,P(Be,`RPC '${e}' stream ${i} transport closed`),y.Vo())}),_(h,Ga.EventType.ERROR,v=>{p||(p=!0,Ji(Be,`RPC '${e}' stream ${i} transport errored:`,v),y.Vo(new D(E.UNAVAILABLE,"The operation could not be completed")))}),_(h,Ga.EventType.MESSAGE,v=>{var m;if(!p){const f=v.data[0];ee(!!f);const g=f,w=g.error||((m=g[0])===null||m===void 0?void 0:m.error);if(w){P(Be,`RPC '${e}' stream ${i} received error:`,w);const R=w.status;let C=function(Q){const B=ve[Q];if(B!==void 0)return eI(B)}(R),N=w.message;C===void 0&&(C=E.INTERNAL,N="Unknown error status: "+R+" with message "+w.message),p=!0,y.Vo(new D(C,N)),h.close()}else P(Be,`RPC '${e}' stream ${i} received:`,f),y.mo(f)}}),_(a,fx.STAT_EVENT,v=>{v.stat===Fy.PROXY?P(Be,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Fy.NOPROXY&&P(Be,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}function _h(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(t){return new vO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&P("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new dI(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(un(n.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new D(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return P("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(P("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class uL extends fI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=TO(this.serializer,e),r=function(s){if(!("targetChange"in s))return F.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?F.min():o.readTime?ln(o.readTime):F.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Jd(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Wd(l)?{documents:SO(s,l)}:{query:RO(s,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=rI(s,o.resumeToken);const u=Qd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(F.min())>0){a.readTime=ou(s,o.snapshotVersion.toTimestamp());const u=Qd(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=PO(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Jd(this.serializer),n.removeTarget=e,this.t_(n)}}class cL extends fI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(ee(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=AO(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.T_(r,n)}return ee(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Jd(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IO(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new D(E.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,Xd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new D(E.UNKNOWN,s.toString())})}vo(e,n,r,i,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Xd(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new D(E.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class dL{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(un(n),this.g_=!1):P("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{oi(this)&&(P("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=$(l);u.v_.add(4),await ya(u),u.x_.set("Unknown"),u.v_.delete(4),await uc(u)}(this))})}),this.x_=new dL(r,i)}}async function uc(t){if(oi(t))for(const e of t.F_)await e(!0)}async function ya(t){for(const e of t.F_)await e(!1)}function pI(t,e){const n=$(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),om(n)?sm(n):ms(n).Jo()&&im(n,e))}function rm(t,e){const n=$(t),r=ms(n);n.C_.delete(e),r.Jo()&&mI(n,e),n.C_.size===0&&(r.Jo()?r.Xo():oi(n)&&n.x_.set("Unknown"))}function im(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ms(t).c_(e)}function mI(t,e){t.O_.Oe(e),ms(t).l_(e)}function sm(t){t.O_=new mO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ms(t).start(),t.x_.p_()}function om(t){return oi(t)&&!ms(t).Ho()&&t.C_.size>0}function oi(t){return $(t).v_.size===0}function gI(t){t.O_=void 0}async function pL(t){t.C_.forEach((e,n)=>{im(t,e)})}async function mL(t,e){gI(t),om(t)?(t.x_.S_(e),sm(t)):t.x_.set("Unknown")}async function gL(t,e,n){if(t.x_.set("Online"),e instanceof nI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){P("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await au(t,r)}else if(e instanceof gl?t.O_.$e(e):e instanceof tI?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(F.min()))try{const r=await hI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken(Xe.EMPTY_BYTE_STRING,c.snapshotVersion)),mI(s,l);const h=new qn(c.target,l,u,c.sequenceNumber);im(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){P("RemoteStore","Failed to raise snapshot:",r),await au(t,r)}}async function au(t,e,n){if(!fa(e))throw e;t.v_.add(1),await ya(t),t.x_.set("Offline"),n||(n=()=>hI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{P("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await uc(t)})}function yI(t,e){return e().catch(n=>au(t,n,e))}async function cc(t){const e=$(t),n=lr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;yL(e);)try{const i=await tL(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,_L(e,i)}catch(i){await au(e,i)}_I(e)&&vI(e)}function yL(t){return oi(t)&&t.D_.length<10}function _L(t,e){t.D_.push(e);const n=lr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function _I(t){return oi(t)&&!lr(t).Ho()&&t.D_.length>0}function vI(t){lr(t).start()}async function vL(t){lr(t).d_()}async function wL(t){const e=lr(t);for(const n of t.D_)e.I_(n.mutations)}async function EL(t,e,n){const r=t.D_.shift(),i=Yp.from(r,e,n);await yI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cc(t)}async function TL(t,e){e&&lr(t).P_&&await async function(r,i){if(function(o){return dO(o)&&o!==E.ABORTED}(i.code)){const s=r.D_.shift();lr(r).Zo(),await yI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await cc(r)}}(t,e),_I(t)&&vI(t)}async function h_(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),P("RemoteStore","RemoteStore received new credentials");const r=oi(n);n.v_.add(3),await ya(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await uc(n)}async function IL(t,e){const n=$(t);e?(n.v_.delete(2),await uc(n)):e||(n.v_.add(2),await ya(n),n.x_.set("Unknown"))}function ms(t){return t.N_||(t.N_=function(n,r,i){const s=$(n);return s.R_(),new uL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:pL.bind(null,t),To:mL.bind(null,t),u_:gL.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),om(t)?sm(t):t.x_.set("Unknown")):(await t.N_.stop(),gI(t))})),t.N_}function lr(t){return t.L_||(t.L_=function(n,r,i){const s=$(n);return s.R_(),new cL(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:vL.bind(null,t),To:TL.bind(null,t),E_:wL.bind(null,t),T_:EL.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await cc(t)):(await t.L_.stop(),t.D_.length>0&&(P("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new sn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new am(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new D(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lm(t,e){if(un("AsyncQueue",`${e}: ${t}`),fa(t))return new D(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=Bs(),this.sortedSet=new he(this.comparator)}static emptySet(e){return new ji(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ji)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ji;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this.B_=new he(V.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):b():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class is{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new is(e,n,ji.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class SL{constructor(){this.queries=new ps(e=>FT(e),rc),this.onlineState="Unknown",this.W_=new Set}}async function um(t,e){const n=$(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.K_()&&e.U_()&&(r=2):(s=new AL,r=e.U_()?0:1);try{switch(r){case 0:s.q_=await n.onListen(i,!0);break;case 1:s.q_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=lm(o,`Initialization of query '${di(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.Q_.push(e),e.G_(n.onlineState),s.q_&&e.z_(s.q_)&&hm(n)}async function cm(t,e){const n=$(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Q_.indexOf(e);o>=0&&(s.Q_.splice(o,1),s.Q_.length===0?i=e.U_()?0:1:!s.K_()&&e.U_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function RL(t,e){const n=$(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.Q_)a.z_(i)&&(r=!0);o.q_=i}}r&&hm(n)}function CL(t,e,n){const r=$(t),i=r.queries.get(e);if(i)for(const s of i.Q_)s.onError(n);r.queries.delete(e)}function hm(t){t.W_.forEach(e=>{e.next()})}var ef,f_;(f_=ef||(ef={})).j_="default",f_.Cache="cache";class dm{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==ef.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.key=e}}class EI{constructor(e){this.key=e}}class PL{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=q(),this.mutatedKeys=q(),this.ha=$T(e),this.Pa=new ji(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new d_,i=n?n.Pa:this.Pa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),p=ic(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let v=!1;d&&p?d.data.isEqual(p.data)?y!==_&&(r.track({type:3,doc:p}),v=!0):this.da(d,p)||(r.track({type:2,doc:p}),v=!0,(l&&this.ha(p,l)>0||u&&this.ha(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),v=!0):d&&!p&&(r.track({type:1,doc:d}),v=!0,(l||u)&&(a=!0)),v&&(p?(o=o.add(p),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:s}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((c,h)=>function(p,y){const _=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return _(p)-_(y)}(c.type,h.type)||this.ha(c.doc,h.doc)),this.Aa(r),i=i!=null&&i;const a=n&&!i?this.Ra():[],l=this.la.size===0&&this.current&&!i?1:0,u=l!==this.ca;return this.ca=l,o.length!==0||u?{snapshot:new is(this.query,e.Pa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new d_,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=q(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new EI(r))}),this.la.forEach(r=>{e.has(r)||n.push(new wI(r))}),n}fa(e){this.ua=e.hs,this.la=q();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return is.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class kL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NL{constructor(e){this.key=e,this.pa=!1}}class DL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new ps(a=>FT(a),rc),this.Sa=new Map,this.ba=new Set,this.Da=new he(V.comparator),this.Ca=new Map,this.va=new em,this.Fa={},this.Ma=new Map,this.xa=rs.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function xL(t,e,n=!0){const r=CI(t);let i;const s=r.wa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ga()):i=await TI(r,e,n,!0),i}async function OL(t,e){const n=CI(t);await TI(n,e,!0,!1)}async function TI(t,e,n,r){const i=await nL(t.localStore,on(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await LL(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&pI(t.remoteStore,i),a}async function LL(t,e,n,r,i){t.Na=(h,d,p)=>async function(_,v,m,f){let g=v.view.Ta(m);g.Xi&&(g=await l_(_.localStore,v.query,!1).then(({documents:N})=>v.view.Ta(N,g)));const w=f&&f.targetChanges.get(v.targetId),R=f&&f.targetMismatches.get(v.targetId)!=null,C=v.view.applyChanges(g,_.isPrimaryClient,w,R);return m_(_,v.targetId,C.Va),C.snapshot}(t,h,d,p);const s=await l_(t.localStore,e,!0),o=new PL(e,s.hs),a=o.Ta(s.documents),l=ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);m_(t,n,u.Va);const c=new kL(e,n,o);return t.wa.set(e,c),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),u.snapshot}async function VL(t,e,n){const r=$(t),i=r.wa.get(e),s=r.Sa.get(i.targetId);if(s.length>1)return r.Sa.set(i.targetId,s.filter(o=>!rc(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zd(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&rm(r.remoteStore,i.targetId),tf(r,i.targetId)}).catch(da)):(tf(r,i.targetId),await Zd(r.localStore,i.targetId,!0))}async function ML(t,e){const n=$(t),r=n.wa.get(e),i=n.Sa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rm(n.remoteStore,r.targetId))}async function bL(t,e,n){const r=qL(t);try{const i=await function(o,a){const l=$(o),u=ye.now(),c=a.reduce((p,y)=>p.add(y.key),q());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Pn(),_=q();return l.os.getEntries(p,c).next(v=>{y=v,y.forEach((m,f)=>{f.isValidDocument()||(_=_.add(m))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,y)).next(v=>{h=v;const m=[];for(const f of a){const g=aO(f,h.get(f.key).overlayedDocument);g!=null&&m.push(new gr(f.key,g,DT(g.value.mapValue),an.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,m,a)}).next(v=>{d=v;const m=v.applyToLocalDocumentSet(h,_);return l.documentOverlayCache.saveOverlays(p,v.batchId,m)})}).then(()=>({batchId:d.batchId,changes:BT(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Fa[o.currentUser.toKey()];u||(u=new he(X)),u=u.insert(a,l),o.Fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await _a(r,i.changes),await cc(r.remoteStore)}catch(i){const s=lm(i,"Failed to persist write");n.reject(s)}}async function II(t,e){const n=$(t);try{const r=await ZO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ca.get(s);o&&(ee(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.pa=!0:i.modifiedDocuments.size>0?ee(o.pa):i.removedDocuments.size>0&&(ee(o.pa),o.pa=!1))}),await _a(n,r,e)}catch(r){await da(r)}}function p_(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wa.forEach((s,o)=>{const a=o.view.G_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=$(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const d of h.Q_)d.G_(a)&&(u=!0)}),u&&hm(l)}(r.eventManager,e),i.length&&r.ya.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UL(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ca.get(e),s=i&&i.key;if(s){let o=new he(V.comparator);o=o.insert(s,He.newNoDocument(s,F.min()));const a=q().add(s),l=new ac(F.min(),new Map,new he(X),o,a);await II(r,l),r.Da=r.Da.remove(s),r.Ca.delete(e),fm(r)}else await Zd(r.localStore,e,!1).then(()=>tf(r,e,n)).catch(da)}async function FL(t,e){const n=$(t),r=e.batch.batchId;try{const i=await JO(n.localStore,e);SI(n,r,null),AI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _a(n,i)}catch(i){await da(i)}}async function $L(t,e,n){const r=$(t);try{const i=await function(o,a){const l=$(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(ee(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);SI(r,e,n),AI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _a(r,i)}catch(i){await da(i)}}function AI(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function SI(t,e,n){const r=$(t);let i=r.Fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Fa[r.currentUser.toKey()]=i}}function tf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||RI(t,r)})}function RI(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(rm(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),fm(t))}function m_(t,e,n){for(const r of n)r instanceof wI?(t.va.addReference(r.key,e),jL(t,r)):r instanceof EI?(P("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||RI(t,r.key)):b()}function jL(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(P("SyncEngine","New document in limbo: "+n),t.ba.add(r),fm(t))}function fm(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new V(ie.fromString(e)),r=t.xa.next();t.Ca.set(r,new NL(n)),t.Da=t.Da.insert(n,r),pI(t.remoteStore,new qn(on(nc(n.path)),r,"TargetPurposeLimboResolution",Hp._e))}}async function _a(t,e,n){const r=$(t),i=[],s=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=nm.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ya.u_(i),await async function(l,u){const c=$(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>T.forEach(u,d=>T.forEach(d.qi,p=>c.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>T.forEach(d.Qi,p=>c.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!fa(h))throw h;P("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const d=h.targetId;if(!h.fromCache){const p=c.ns.get(d),y=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(y);c.ns=c.ns.insert(d,_)}}}(r.localStore,s))}async function BL(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){P("SyncEngine","User change. New user:",e.toKey());const r=await cI(n.localStore,e);n.currentUser=e,function(s,o){s.Ma.forEach(a=>{a.forEach(l=>{l.reject(new D(E.CANCELLED,o))})}),s.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _a(n,r.us)}}function zL(t,e){const n=$(t),r=n.Ca.get(e);if(r&&r.pa)return q().add(r.key);{let i=q();const s=n.Sa.get(e);if(!s)return i;for(const o of s){const a=n.wa.get(o);i=i.unionWith(a.view.Ia)}return i}}function CI(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=II.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=zL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UL.bind(null,e),e.ya.u_=RL.bind(null,e.eventManager),e.ya.La=CL.bind(null,e.eventManager),e}function qL(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=FL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$L.bind(null,e),e}class g_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=lc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return YO(this.persistence,new QO,e.initialUser,this.serializer)}createPersistence(e){return new WO(tm.Hr,this.serializer)}createSharedClientState(e){return new iL}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HL{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>p_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BL.bind(null,this.syncEngine),await IL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new SL}()}createDatastore(e){const n=lc(e.databaseInfo.databaseId),r=function(s){return new lL(s)}(e.databaseInfo);return function(s,o,a,l){return new hL(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new fL(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>p_(this.syncEngine,n,0),function(){return c_.D()?new c_:new sL}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new DL(i,s,o,a,l,u);return c&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=$(r);P("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await ya(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=PT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{P("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(P("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new D(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new sn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=lm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vh(t,e){t.asyncQueue.verifyOperationInProgress(),P("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function y_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KL(t);P("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>h_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>h_(e.remoteStore,i)),t._onlineComponents=e}function GL(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function KL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){P("FirestoreClient","Using user provided OfflineComponentProvider");try{await vh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!GL(n))throw n;Ji("Error using user provided cache. Falling back to memory cache: "+n),await vh(t,new g_)}}else P("FirestoreClient","Using default OfflineComponentProvider"),await vh(t,new g_);return t._offlineComponents}async function PI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(P("FirestoreClient","Using user provided OnlineComponentProvider"),await y_(t,t._uninitializedComponentsProvider._online)):(P("FirestoreClient","Using default OnlineComponentProvider"),await y_(t,new HL))),t._onlineComponents}function QL(t){return PI(t).then(e=>e.syncEngine)}async function lu(t){const e=await PI(t),n=e.eventManager;return n.onListen=xL.bind(null,e.syncEngine),n.onUnlisten=VL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=OL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ML.bind(null,e.syncEngine),n}function XL(t,e,n={}){const r=new sn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new pm({next:d=>{o.enqueueAndForget(()=>cm(s,h));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new D(E.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new D(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new dm(nc(a.path),c,{includeMetadataChanges:!0,ta:!0});return um(s,h)}(await lu(t),t.asyncQueue,e,n,r)),r.promise}function YL(t,e,n={}){const r=new sn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new pm({next:d=>{o.enqueueAndForget(()=>cm(s,h)),d.fromCache&&l.source==="server"?u.reject(new D(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),h=new dm(a,c,{includeMetadataChanges:!0,ta:!0});return um(s,h)}(await lu(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t,e,n){if(!n)throw new D(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JL(t,e,n,r){if(e===!0&&r===!0)throw new D(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function v_(t){if(!V.isDocumentKey(t))throw new D(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function w_(t){if(V.isDocumentKey(t))throw new D(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":b()}function kt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new D(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hc(t);throw new D(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new D(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new D(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new D(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new D(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new D(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class dc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new E_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new D(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new D(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new E_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gx;switch(r.type){case"firstParty":return new wx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new D(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=__.get(n);r&&(P("ComponentProvider","Removing Datastore"),__.delete(n),r.terminate())}(this),Promise.resolve()}}function ZL(t,e,n,r={}){var i;const s=(t=kt(t,dc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=ze.MOCK_USER;else{a=fw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new D(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ze(u)}t._authCredentials=new yx(new CT(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ai(this.firestore,e,this._query)}}class Ke{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}}class nr extends ai{constructor(e,n,r){super(e,n,nc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new V(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function eV(t,e,...n){if(t=te(t),NI("collection","path",e),t instanceof dc){const r=ie.fromString(e,...n);return w_(r),new nr(t,null,r)}{if(!(t instanceof Ke||t instanceof nr))throw new D(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return w_(r),new nr(t.firestore,null,r)}}function Ct(t,e,...n){if(t=te(t),arguments.length===1&&(e=PT.newId()),NI("doc","path",e),t instanceof dc){const r=ie.fromString(e,...n);return v_(r),new Ke(t,null,new V(r))}{if(!(t instanceof Ke||t instanceof nr))throw new D(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return v_(r),new Ke(t.firestore,t instanceof nr?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new dI(this,"async_queue_retry"),this.cu=()=>{const n=_h();n&&P("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=_h();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=_h();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new sn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!fa(e))throw e;P("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw un("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const i=am.createAndSchedule(this,e,n,r,s=>this.Iu(s));return this.su.push(i),i}lu(){this.ou&&b()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}function T_(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Xr extends dc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new tV}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||DI(this),this._firestoreClient.terminate()}}function nV(t,e){const n=typeof t=="object"?t:Ou(),r=typeof t=="string"?t:e||"(default)",i=dr(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=cw("firestore");s&&ZL(i,...s)}return i}function fc(t){return t._firestoreClient||DI(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function DI(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new Lx(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,kI(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new WL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ss(Xe.fromBase64String(e))}catch(n){throw new D(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ss(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new D(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new D(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new D(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV=/^__.*__$/;class iV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ma(e,this.data,n,this.fieldTransforms)}}class xI{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new gr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function OI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class mc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Ru(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new mc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.pu(e),i}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.mu({path:r,gu:!1});return i.Ru(),i}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return uu(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(OI(this.Vu)&&rV.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class sV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||lc(e)}Cu(e,n,r,i=!1){return new mc({Vu:e,methodName:n,Du:r,path:Ve.emptyPath(),gu:!1,bu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gm(t){const e=t._freezeSettings(),n=lc(t._databaseId);return new sV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oV(t,e,n,r,i,s={}){const o=t.Cu(s.merge||s.mergeFields?2:0,e,n,i);vm("Data must be an object, but it was:",o,r);const a=LI(r,o);let l,u;if(s.merge)l=new gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=nf(e,h,n);if(!o.contains(d))throw new D(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);MI(c,d)||c.push(d)}l=new gt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new iV(new st(a),l,u)}class gc extends va{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gc}}function aV(t,e,n){return new mc({Vu:3,Du:e.settings.Du,methodName:t._methodName,gu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ym extends va{_toFieldTransform(e){return new XT(e.path,new Bo)}isEqual(e){return e instanceof ym}}class _m extends va{constructor(e,n){super(e),this.vu=n}_toFieldTransform(e){const n=aV(this,e,!0),r=this.vu.map(s=>gs(s,n)),i=new ns(r);return new XT(e.path,i)}isEqual(e){return e instanceof _m&&Qi(this.vu,e.vu)}}function lV(t,e,n,r){const i=t.Cu(1,e,n);vm("Data must be an object, but it was:",i,r);const s=[],o=st.empty();si(r,(l,u)=>{const c=wm(e,l,n);u=te(u);const h=i.yu(c);if(u instanceof gc)s.push(c);else{const d=gs(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new gt(s);return new xI(o,a,i.fieldTransforms)}function uV(t,e,n,r,i,s){const o=t.Cu(1,e,n),a=[nf(e,r,n)],l=[i];if(s.length%2!=0)throw new D(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(nf(e,s[d])),l.push(s[d+1]);const u=[],c=st.empty();for(let d=a.length-1;d>=0;--d)if(!MI(u,a[d])){const p=a[d];let y=l[d];y=te(y);const _=o.yu(p);if(y instanceof gc)u.push(p);else{const v=gs(y,_);v!=null&&(u.push(p),c.set(p,v))}}const h=new gt(u);return new xI(c,h,o.fieldTransforms)}function cV(t,e,n,r=!1){return gs(n,t.Cu(r?4:3,e))}function gs(t,e){if(VI(t=te(t)))return vm("Unsupported field value:",e,t),LI(t,e);if(t instanceof va)return function(r,i){if(!OI(i.Vu))throw i.Su(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Su(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=gs(a,i.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tO(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ye.fromDate(r);return{timestampValue:ou(i.serializer,s)}}if(r instanceof ye){const s=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ou(i.serializer,s)}}if(r instanceof mm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ss)return{bytesValue:rI(i.serializer,r._byteString)};if(r instanceof Ke){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Zp(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Su(`Unsupported field value: ${hc(r)}`)}(t,e)}function LI(t,e){const n={};return kT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):si(t,(r,i)=>{const s=gs(i,e.fu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function VI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof mm||t instanceof ss||t instanceof Ke||t instanceof va)}function vm(t,e,n){if(!VI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=hc(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function nf(t,e,n){if((e=te(e))instanceof pc)return e._internalPath;if(typeof e=="string")return wm(t,e);throw uu("Field path arguments must be of type string or ",t,!1,void 0,n)}const hV=new RegExp("[~\\*/\\[\\]]");function wm(t,e,n){if(e.search(hV)>=0)throw uu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pc(...e.split("."))._internalPath}catch{throw uu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new D(E.INVALID_ARGUMENT,a+t+l)}function MI(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new dV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Em("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class dV extends bI{data(){return super.data()}}function Em(t,e){return typeof e=="string"?wm(t,e):e instanceof pc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new D(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Tm{}class fV extends Tm{}function pV(t,e,...n){let r=[];e instanceof Tm&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof Im).length,a=s.filter(l=>l instanceof yc).length;if(o>1||o>0&&a>0)throw new D(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class yc extends fV{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new yc(e,n,r)}_apply(e){const n=this._parse(e);return FI(e._query,n),new ai(e.firestore,e.converter,Gd(e._query,n))}_parse(e){const n=gm(e.firestore);return function(s,o,a,l,u,c,h){let d;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new D(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){A_(h,c);const p=[];for(const y of h)p.push(I_(l,s,y));d={arrayValue:{values:p}}}else d=I_(l,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||A_(h,c),d=cV(a,o,h,c==="in"||c==="not-in");return Te.create(u,c,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function mV(t,e,n){const r=e,i=Em("where",t);return yc._create(i,r,n)}class Im extends Tm{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Im(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)FI(o,l),o=Gd(o,l)}(e._query,n),new ai(e.firestore,e.converter,Gd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function I_(t,e,n){if(typeof(n=te(n))=="string"){if(n==="")throw new D(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!UT(e)&&n.indexOf("/")!==-1)throw new D(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ie.fromString(n));if(!V.isDocumentKey(r))throw new D(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hy(t,new V(r))}if(n instanceof Ke)return Hy(t,n._key);throw new D(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hc(n)}.`)}function A_(t,e){if(!Array.isArray(t)||t.length===0)throw new D(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function FI(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new D(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new D(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class gV{convertValue(e,n="none"){switch(Qr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return we(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw b()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return si(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new mm(we(e.latitude),we(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Fo(e));default:return null}}convertTimestamp(e){const n=ar(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);ee(uI(r));const i=new $o(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||un(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yV(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $I extends bI{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Em("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yl extends $I{data(e={}){return super.data(e)}}class jI{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new qs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new yl(this._firestore,this._userDataWriter,r.key,r,new qs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new D(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new yl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new yl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new qs(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:_V(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function _V(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vV(t){t=kt(t,Ke);const e=kt(t.firestore,Xr);return XL(fc(e),t._key).then(n=>qI(e,t,n))}class Am extends gV{constructor(e){super(),this.firestore=e}convertBytes(e){return new ss(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,n)}}function wV(t){t=kt(t,ai);const e=kt(t.firestore,Xr),n=fc(e),r=new Am(e);return UI(t._query),YL(n,t._query).then(i=>new jI(e,r,t,i))}function rf(t,e,n){t=kt(t,Ke);const r=kt(t.firestore,Xr),i=yV(t.converter,e,n);return zI(r,[oV(gm(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,an.none())])}function ki(t,e,n,...r){t=kt(t,Ke);const i=kt(t.firestore,Xr),s=gm(i);let o;return o=typeof(e=te(e))=="string"||e instanceof pc?uV(s,"updateDoc",t._key,e,n,r):lV(s,"updateDoc",t._key,e),zI(i,[o.toMutation(t._key,an.exists(!0))])}function BI(t,...e){var n,r,i;t=te(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||T_(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(T_(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof Ke)u=kt(t.firestore,Xr),c=nc(t._key.path),l={next:h=>{e[o]&&e[o](qI(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=kt(t,ai);u=kt(h.firestore,Xr),c=h._query;const d=new Am(u);l={next:p=>{e[o]&&e[o](new jI(u,d,h,p))},error:e[o+1],complete:e[o+2]},UI(t._query)}return function(d,p,y,_){const v=new pm(_),m=new dm(p,v,y);return d.asyncQueue.enqueueAndForget(async()=>um(await lu(d),m)),()=>{v.Qa(),d.asyncQueue.enqueueAndForget(async()=>cm(await lu(d),m))}}(fc(u),c,a,l)}function zI(t,e){return function(r,i){const s=new sn;return r.asyncQueue.enqueueAndForget(async()=>bL(await QL(r),i,s)),s.promise}(fc(t),e)}function qI(t,e,n){const r=n.docs.get(e._key),i=new Am(t);return new $I(t,i,e._key,r,new qs(n.hasPendingWrites,n.fromCache),e.converter)}function cu(){return new ym("serverTimestamp")}function S_(...t){return new _m("arrayUnion",t)}(function(e,n=!0){(function(i){fs=i})(ni),Bt(new xt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Xr(new _x(r.getProvider("auth-internal")),new Tx(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new D(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $o(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ct($y,"4.5.1",e),ct($y,"4.5.1","esm2017")})();const HI="@firebase/installations",Sm="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=1e4,GI=`w:${Sm}`,KI="FIS_v2",EV="https://firebaseinstallations.googleapis.com/v1",TV=60*60*1e3,IV="installations",AV="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yr=new ti(IV,AV,SV);function QI(t){return t instanceof Ot&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI({projectId:t}){return`${EV}/projects/${t}/installations`}function YI(t){return{token:t.token,requestStatus:2,expiresIn:CV(t.expiresIn),creationTime:Date.now()}}async function JI(t,e){const r=(await e.json()).error;return Yr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ZI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function RV(t,{refreshToken:e}){const n=ZI(t);return n.append("Authorization",PV(e)),n}async function e1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function CV(t){return Number(t.replace("s","000"))}function PV(t){return`${KI} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kV({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=XI(t),i=ZI(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:KI,appId:t.appId,sdkVersion:GI},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await e1(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:YI(u.authToken)}}else throw await JI("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NV(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DV=/^[cdef][\w-]{21}$/,sf="";function xV(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=OV(t);return DV.test(n)?n:sf}catch{return sf}}function OV(t){return NV(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=new Map;function r1(t,e){const n=_c(t);i1(n,e),LV(n,e)}function i1(t,e){const n=n1.get(t);if(n)for(const r of n)r(e)}function LV(t,e){const n=VV();n&&n.postMessage({key:t,fid:e}),MV()}let Or=null;function VV(){return!Or&&"BroadcastChannel"in self&&(Or=new BroadcastChannel("[Firebase] FID Change"),Or.onmessage=t=>{i1(t.data.key,t.data.fid)}),Or}function MV(){n1.size===0&&Or&&(Or.close(),Or=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bV="firebase-installations-database",UV=1,Jr="firebase-installations-store";let wh=null;function Rm(){return wh||(wh=_w(bV,UV,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jr)}}})),wh}async function hu(t,e){const n=_c(t),i=(await Rm()).transaction(Jr,"readwrite"),s=i.objectStore(Jr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&r1(t,e.fid),e}async function s1(t){const e=_c(t),r=(await Rm()).transaction(Jr,"readwrite");await r.objectStore(Jr).delete(e),await r.done}async function vc(t,e){const n=_c(t),i=(await Rm()).transaction(Jr,"readwrite"),s=i.objectStore(Jr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&r1(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cm(t){let e;const n=await vc(t.appConfig,r=>{const i=FV(r),s=$V(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===sf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function FV(t){const e=t||{fid:xV(),registrationStatus:0};return o1(e)}function $V(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Yr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=jV(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:BV(t)}:{installationEntry:e}}async function jV(t,e){try{const n=await kV(t,e);return hu(t.appConfig,n)}catch(n){throw QI(n)&&n.customData.serverCode===409?await s1(t.appConfig):await hu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function BV(t){let e=await R_(t.appConfig);for(;e.registrationStatus===1;)await t1(100),e=await R_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Cm(t);return r||n}return e}function R_(t){return vc(t,e=>{if(!e)throw Yr.create("installation-not-found");return o1(e)})}function o1(t){return zV(t)?{fid:t.fid,registrationStatus:0}:t}function zV(t){return t.registrationStatus===1&&t.registrationTime+WI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qV({appConfig:t,heartbeatServiceProvider:e},n){const r=HV(t,n),i=RV(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:GI,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await e1(()=>fetch(r,a));if(l.ok){const u=await l.json();return YI(u)}else throw await JI("Generate Auth Token",l)}function HV(t,{fid:e}){return`${XI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pm(t,e=!1){let n;const r=await vc(t.appConfig,s=>{if(!a1(s))throw Yr.create("not-registered");const o=s.authToken;if(!e&&KV(o))return s;if(o.requestStatus===1)return n=WV(t,e),s;{if(!navigator.onLine)throw Yr.create("app-offline");const a=XV(s);return n=GV(t,a),a}});return n?await n:r.authToken}async function WV(t,e){let n=await C_(t.appConfig);for(;n.authToken.requestStatus===1;)await t1(100),n=await C_(t.appConfig);const r=n.authToken;return r.requestStatus===0?Pm(t,e):r}function C_(t){return vc(t,e=>{if(!a1(e))throw Yr.create("not-registered");const n=e.authToken;return YV(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function GV(t,e){try{const n=await qV(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await hu(t.appConfig,r),n}catch(n){if(QI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await s1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await hu(t.appConfig,r)}throw n}}function a1(t){return t!==void 0&&t.registrationStatus===2}function KV(t){return t.requestStatus===2&&!QV(t)}function QV(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+TV}function XV(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function YV(t){return t.requestStatus===1&&t.requestTime+WI<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JV(t){const e=t,{installationEntry:n,registrationPromise:r}=await Cm(e);return r?r.catch(console.error):Pm(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZV(t,e=!1){const n=t;return await e2(n),(await Pm(n,e)).token}async function e2(t){const{registrationPromise:e}=await Cm(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t2(t){if(!t||!t.options)throw Eh("App Configuration");if(!t.name)throw Eh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Eh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Eh(t){return Yr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1="installations",n2="installations-internal",r2=t=>{const e=t.getProvider("app").getImmediate(),n=t2(e),r=dr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},i2=t=>{const e=t.getProvider("app").getImmediate(),n=dr(e,l1).getImmediate();return{getId:()=>JV(n),getToken:i=>ZV(n,i)}};function s2(){Bt(new xt(l1,r2,"PUBLIC")),Bt(new xt(n2,i2,"PRIVATE"))}s2();ct(HI,Sm);ct(HI,Sm,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="analytics",o2="firebase_id",a2="origin",l2=60*1e3,u2="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",km="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new xu("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c2={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},_t=new ti("analytics","Analytics",c2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(t){if(!t.startsWith(km)){const e=_t.create("invalid-gtag-resource",{gtagURL:t});return ht.warn(e.message),""}return t}function u1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function d2(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function f2(t,e){const n=d2("firebase-js-sdk-policy",{createScriptURL:h2}),r=document.createElement("script"),i=`${km}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function p2(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function m2(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await u1(n)).find(u=>u.measurementId===i);l&&await e[l.appId]}}catch(a){ht.error(a)}t("config",i,s)}async function g2(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await u1(n);for(const l of o){const u=a.find(h=>h.measurementId===l),c=u&&e[u.appId];if(c)s.push(c);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){ht.error(s)}}function y2(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await g2(t,e,n,a,l)}else if(s==="config"){const[a,l]=o;await m2(t,e,n,r,a,l)}else if(s==="consent"){const[a]=o;t("consent","update",a)}else if(s==="get"){const[a,l,u]=o;t("get",a,l,u)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){ht.error(a)}}return i}function _2(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=y2(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function v2(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(km)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=30,E2=1e3;class T2{constructor(e={},n=E2){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const c1=new T2;function I2(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function A2(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:I2(r)},s=u2.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw _t.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function S2(t,e=c1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw _t.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw _t.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new P2;return setTimeout(async()=>{a.abort()},n!==void 0?n:l2),h1({appId:r,apiKey:i,measurementId:s},o,a,e)}async function h1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=c1){var s;const{appId:o,measurementId:a}=t;try{await R2(r,e)}catch(l){if(a)return ht.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await A2(t);return i.deleteThrottleMetadata(o),l}catch(l){const u=l;if(!C2(u)){if(i.deleteThrottleMetadata(o),a)return ht.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw l}const c=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Wg(n,i.intervalMillis,w2):Wg(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+c,backoffCount:n+1};return i.setThrottleMetadata(o,h),ht.debug(`Calling attemptFetch again in ${c} millis`),h1(t,h,r,i)}}function R2(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(_t.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function C2(t){if(!(t instanceof Ot)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class P2{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function k2(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(){if(ip())try{await mw()}catch(t){return ht.warn(_t.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ht.warn(_t.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function D2(t,e,n,r,i,s,o){var a;const l=S2(t);l.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&ht.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>ht.error(p)),e.push(l);const u=N2().then(p=>{if(p)return r.getId()}),[c,h]=await Promise.all([l,u]);v2(s)||f2(s,c.measurementId),i("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[a2]="firebase",d.update=!0,h!=null&&(d[o2]=h),i("config",c.measurementId,d),c.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e){this.app=e}_delete(){return delete uo[this.app.options.appId],Promise.resolve()}}let uo={},P_=[];const k_={};let Th="dataLayer",O2="gtag",N_,d1,D_=!1;function L2(){const t=[];if(pw()&&t.push("This is a browser extension environment."),yR()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=_t.create("invalid-analytics-context",{errorInfo:e});ht.warn(n.message)}}function V2(t,e,n){L2();const r=t.options.appId;if(!r)throw _t.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ht.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw _t.create("no-api-key");if(uo[r]!=null)throw _t.create("already-exists",{id:r});if(!D_){p2(Th);const{wrappedGtag:s,gtagCore:o}=_2(uo,P_,k_,Th,O2);d1=s,N_=o,D_=!0}return uo[r]=D2(t,P_,k_,e,N_,Th,n),new x2(t)}function M2(t=Ou()){t=te(t);const e=dr(t,du);return e.isInitialized()?e.getImmediate():b2(t)}function b2(t,e={}){const n=dr(t,du);if(n.isInitialized()){const i=n.getImmediate();if(Qi(e,n.getOptions()))return i;throw _t.create("already-initialized")}return n.initialize({options:e})}function U2(t,e,n,r){t=te(t),k2(d1,uo[t.app.options.appId],e,n,r).catch(i=>ht.error(i))}const x_="@firebase/analytics",O_="0.10.2";function F2(){Bt(new xt(du,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return V2(r,i,n)},"PUBLIC")),Bt(new xt("analytics-internal",t,"PRIVATE")),ct(x_,O_),ct(x_,O_,"esm2017");function t(e){try{const n=e.getProvider(du).getImmediate();return{logEvent:(r,i,s)=>U2(n,r,i,s)}}catch(n){throw _t.create("interop-component-reg-failed",{reason:n})}}}F2();const $2={apiKey:"AIzaSyAIdNi_zy7RtC22SaA8hWfBUd40mNCA2vY",authDomain:"kisan-sahay.firebaseapp.com",projectId:"kisan-sahay",storageBucket:"kisan-sahay.appspot.com",messagingSenderId:"1067726330097",appId:"1:1067726330097:web:0d9fbec35f44feefe17150",measurementId:"G-TN1G486X3Y"},j2=vw($2),wc=Kk(),f1=oD(),ft=nV();M2(j2);/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qo(){return qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qo.apply(this,arguments)}var Hn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Hn||(Hn={}));const L_="popstate";function B2(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return of("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:fu(i)}return q2(e,n,null,t)}function _e(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function p1(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function z2(){return Math.random().toString(36).substr(2,8)}function V_(t,e){return{usr:t.state,key:t.key,idx:e}}function of(t,e,n,r){return n===void 0&&(n=null),qo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ys(e):e,{state:n,key:e&&e.key||r||z2()})}function fu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ys(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function q2(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Hn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(qo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=Hn.Pop;let v=c(),m=v==null?null:v-u;u=v,l&&l({action:a,location:_.location,delta:m})}function d(v,m){a=Hn.Push;let f=of(_.location,v,m);n&&n(f,v),u=c()+1;let g=V_(f,u),w=_.createHref(f);try{o.pushState(g,"",w)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(w)}s&&l&&l({action:a,location:_.location,delta:1})}function p(v,m){a=Hn.Replace;let f=of(_.location,v,m);n&&n(f,v),u=c();let g=V_(f,u),w=_.createHref(f);o.replaceState(g,"",w),s&&l&&l({action:a,location:_.location,delta:0})}function y(v){let m=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof v=="string"?v:fu(v);return f=f.replace(/ $/,"%20"),_e(m,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,m)}let _={get action(){return a},get location(){return t(i,o)},listen(v){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(L_,h),l=v,()=>{i.removeEventListener(L_,h),l=null}},createHref(v){return e(i,v)},createURL:y,encodeLocation(v){let m=y(v);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:d,replace:p,go(v){return o.go(v)}};return _}var M_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(M_||(M_={}));function H2(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ys(e):e,i=Nm(r.pathname||"/",n);if(i==null)return null;let s=m1(t);W2(s);let o=null;for(let a=0;o==null&&a<s.length;++a){let l=iM(i);o=tM(s[a],l)}return o}function m1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=rr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(_e(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),m1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Z2(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of g1(s.path))i(s,o,l)}),e}function g1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=g1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function W2(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eM(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const G2=/^:[\w-]+$/,K2=3,Q2=2,X2=1,Y2=10,J2=-2,b_=t=>t==="*";function Z2(t,e){let n=t.split("/"),r=n.length;return n.some(b_)&&(r+=J2),e&&(r+=Q2),n.filter(i=>!b_(i)).reduce((i,s)=>i+(G2.test(s)?K2:s===""?X2:Y2),r)}function eM(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tM(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nM({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:rr([i,c.pathname]),pathnameBase:lM(rr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=rr([i,c.pathnameBase]))}return s}function nM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rM(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{let{paramName:d,isOptional:p}=c;if(d==="*"){let _=a[h]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[h];return p&&!y?u[d]=void 0:u[d]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function rM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),p1(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function iM(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return p1(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Nm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function sM(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ys(t):t;return{pathname:n?n.startsWith("/")?n:oM(n,e):e,search:uM(r),hash:cM(i)}}function oM(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ih(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function aM(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Dm(t,e){let n=aM(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function xm(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ys(t):(i=qo({},t),_e(!i.pathname||!i.pathname.includes("?"),Ih("?","pathname","search",i)),_e(!i.pathname||!i.pathname.includes("#"),Ih("#","pathname","hash",i)),_e(!i.search||!i.search.includes("#"),Ih("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=sM(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const rr=t=>t.join("/").replace(/\/\/+/g,"/"),lM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),uM=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cM=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function hM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const y1=["post","put","patch","delete"];new Set(y1);const dM=["get",...y1];new Set(dM);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ho.apply(this,arguments)}const Om=I.createContext(null),fM=I.createContext(null),yr=I.createContext(null),Ec=I.createContext(null),_r=I.createContext({outlet:null,matches:[],isDataRoute:!1}),_1=I.createContext(null);function pM(t,e){let{relative:n}=e===void 0?{}:e;_s()||_e(!1);let{basename:r,navigator:i}=I.useContext(yr),{hash:s,pathname:o,search:a}=w1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:rr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function _s(){return I.useContext(Ec)!=null}function wa(){return _s()||_e(!1),I.useContext(Ec).location}function v1(t){I.useContext(yr).static||I.useLayoutEffect(t)}function Tc(){let{isDataRoute:t}=I.useContext(_r);return t?CM():mM()}function mM(){_s()||_e(!1);let t=I.useContext(Om),{basename:e,future:n,navigator:r}=I.useContext(yr),{matches:i}=I.useContext(_r),{pathname:s}=wa(),o=JSON.stringify(Dm(i,n.v7_relativeSplatPath)),a=I.useRef(!1);return v1(()=>{a.current=!0}),I.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let h=xm(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:rr([e,h.pathname])),(c.replace?r.replace:r.push)(h,c.state,c)},[e,r,o,s,t])}function w1(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=I.useContext(yr),{matches:i}=I.useContext(_r),{pathname:s}=wa(),o=JSON.stringify(Dm(i,r.v7_relativeSplatPath));return I.useMemo(()=>xm(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function gM(t,e){return yM(t,e)}function yM(t,e,n,r){_s()||_e(!1);let{navigator:i}=I.useContext(yr),{matches:s}=I.useContext(_r),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=wa(),c;if(e){var h;let v=typeof e=="string"?ys(e):e;l==="/"||(h=v.pathname)!=null&&h.startsWith(l)||_e(!1),c=v}else c=u;let d=c.pathname||"/",p=d;if(l!=="/"){let v=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(v.length).join("/")}let y=H2(t,{pathname:p}),_=TM(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:rr([l,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:rr([l,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),s,n,r);return e&&_?I.createElement(Ec.Provider,{value:{location:Ho({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:Hn.Pop}},_):_}function _M(){let t=RM(),e=hM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},e),n?I.createElement("pre",{style:i},n):null,s)}const vM=I.createElement(_M,null);class wM extends I.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?I.createElement(_r.Provider,{value:this.props.routeContext},I.createElement(_1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function EM(t){let{routeContext:e,match:n,children:r}=t,i=I.useContext(Om);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(_r.Provider,{value:e},r)}function TM(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id]));c>=0||_e(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let h=o[c];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=c),h.route.id){let{loaderData:d,errors:p}=n,y=h.route.loader&&d[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||y){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,h,d)=>{let p,y=!1,_=null,v=null;n&&(p=a&&h.route.id?a[h.route.id]:void 0,_=h.route.errorElement||vM,l&&(u<0&&d===0?(PM("route-fallback",!1),y=!0,v=null):u===d&&(y=!0,v=h.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,d+1)),f=()=>{let g;return p?g=_:y?g=v:h.route.Component?g=I.createElement(h.route.Component,null):h.route.element?g=h.route.element:g=c,I.createElement(EM,{match:h,routeContext:{outlet:c,matches:m,isDataRoute:n!=null},children:g})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?I.createElement(wM,{location:n.location,revalidation:n.revalidation,component:_,error:p,children:f(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):f()},null)}var E1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(E1||{}),pu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pu||{});function IM(t){let e=I.useContext(Om);return e||_e(!1),e}function AM(t){let e=I.useContext(fM);return e||_e(!1),e}function SM(t){let e=I.useContext(_r);return e||_e(!1),e}function T1(t){let e=SM(),n=e.matches[e.matches.length-1];return n.route.id||_e(!1),n.route.id}function RM(){var t;let e=I.useContext(_1),n=AM(pu.UseRouteError),r=T1(pu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function CM(){let{router:t}=IM(E1.UseNavigateStable),e=T1(pu.UseNavigateStable),n=I.useRef(!1);return v1(()=>{n.current=!0}),I.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ho({fromRouteId:e},s)))},[t,e])}const U_={};function PM(t,e,n){!e&&!U_[t]&&(U_[t]=!0)}function kM(t){let{to:e,replace:n,state:r,relative:i}=t;_s()||_e(!1);let{future:s,static:o}=I.useContext(yr),{matches:a}=I.useContext(_r),{pathname:l}=wa(),u=Tc(),c=xm(e,Dm(a,s.v7_relativeSplatPath),l,i==="path"),h=JSON.stringify(c);return I.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:i}),[u,h,i,n,r]),null}function Hs(t){_e(!1)}function NM(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Hn.Pop,navigator:s,static:o=!1,future:a}=t;_s()&&_e(!1);let l=e.replace(/^\/*/,"/"),u=I.useMemo(()=>({basename:l,navigator:s,static:o,future:Ho({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ys(r));let{pathname:c="/",search:h="",hash:d="",state:p=null,key:y="default"}=r,_=I.useMemo(()=>{let v=Nm(c,l);return v==null?null:{location:{pathname:v,search:h,hash:d,state:p,key:y},navigationType:i}},[l,c,h,d,p,y,i]);return _==null?null:I.createElement(yr.Provider,{value:u},I.createElement(Ec.Provider,{children:n,value:_}))}function DM(t){let{children:e,location:n}=t;return gM(af(e),n)}new Promise(()=>{});function af(t,e){e===void 0&&(e=[]);let n=[];return I.Children.forEach(t,(r,i)=>{if(!I.isValidElement(r))return;let s=[...e,i];if(r.type===I.Fragment){n.push.apply(n,af(r.props.children,s));return}r.type!==Hs&&_e(!1),!r.props.index||!r.props.children||_e(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=af(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lf(){return lf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lf.apply(this,arguments)}function xM(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function OM(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function LM(t,e){return t.button===0&&(!e||e==="_self")&&!OM(t)}const VM=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],MM="6";try{window.__reactRouterVersion=MM}catch{}const bM="startTransition",F_=W1[bM];function UM(t){let{basename:e,children:n,future:r,window:i}=t,s=I.useRef();s.current==null&&(s.current=B2({window:i,v5Compat:!0}));let o=s.current,[a,l]=I.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=I.useCallback(h=>{u&&F_?F_(()=>l(h)):l(h)},[l,u]);return I.useLayoutEffect(()=>o.listen(c),[o,c]),I.createElement(NM,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const FM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$M=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,I1=I.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,d=xM(e,VM),{basename:p}=I.useContext(yr),y,_=!1;if(typeof u=="string"&&$M.test(u)&&(y=u,FM))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),R=Nm(w.pathname,p);w.origin===g.origin&&R!=null?u=R+w.search+w.hash:_=!0}catch{}let v=pM(u,{relative:i}),m=jM(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function f(g){r&&r(g),g.defaultPrevented||m(g)}return I.createElement("a",lf({},d,{href:y||v,onClick:_||s?r:f,ref:n,target:l}))});var $_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})($_||($_={}));var j_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(j_||(j_={}));function jM(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Tc(),u=wa(),c=w1(t,{relative:o});return I.useCallback(h=>{if(LM(h,n)){h.preventDefault();let d=r!==void 0?r:fu(u)===fu(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}const BM=()=>{const[t,e]=I.useState(!1),[n,r]=I.useState(!1),i=Tc(),s=async o=>{r(!0),o.preventDefault();const a=o.target[0].value,l=o.target[1].value,u=o.target[2].value,c=o.target[3].files[0];try{const h=await kP(wc,l,u),d=new Date().getTime(),p=IE(f1,`${a+d}`);await EE(p,c).then(()=>{TE(p).then(async y=>{try{await xP(h.user,{displayName:a,photoURL:y}),await rf(Ct(ft,"users",h.user.uid),{uid:h.user.uid,displayName:a,email:l,photoURL:y}),await rf(Ct(ft,"userChats",h.user.uid),{}),i("/")}catch(_){console.log(_),e(!0),r(!1)}})})}catch{e(!0),r(!1)}};return S.jsx("div",{className:"formContainer",children:S.jsxs("div",{className:"formWrapper",children:[S.jsx("span",{className:"title",children:"Kisan Sahay"}),S.jsx("span",{className:"title1",children:"Register"}),S.jsxs("form",{onSubmit:s,children:[S.jsx("input",{type:"text",placeholder:" Enter Display Name"}),S.jsx("input",{type:"email",placeholder:"Enter Email"}),S.jsx("input",{type:"password",placeholder:"Enter Password"}),S.jsx("input",{style:{display:"none"},type:"file",id:"file"}),S.jsxs("label",{htmlFor:"file",children:[S.jsx("img",{src:rR,alt:""}),S.jsx("span",{children:"Add your Avatar"})]}),S.jsx("button",{disabled:n,children:"Sign up"}),n&&"Uploading and compressing the image please wait...",t&&S.jsx("span",{children:"Something went wrong"})]}),S.jsxs("p",{children:["You do have an account? ",S.jsx(I1,{to:"/register",children:"Login"})]})]})})},zM=()=>{const[t,e]=I.useState(!1),n=Tc(),r=async i=>{i.preventDefault();const s=i.target[0].value,o=i.target[1].value;try{await NP(wc,s,o),n("/")}catch{e(!0)}};return S.jsx("div",{className:"formContainer",children:S.jsxs("div",{className:"formWrapper",children:[S.jsx("span",{className:"title",children:"Kisan Sahay"}),S.jsx("span",{className:"title1",children:"Login"}),S.jsxs("form",{onSubmit:r,children:[S.jsx("input",{type:"email",placeholder:"Enter Email"}),S.jsx("input",{type:"password",placeholder:"Enter Password"}),S.jsx("button",{children:"Sign in"}),t&&S.jsx("span",{children:"Something went wrong"})]}),S.jsxs("p",{children:["Don't have an account? ",S.jsx(I1,{to:"/register",children:"Register"})]})]})})},vr=I.createContext(),qM=({children:t})=>{const[e,n]=I.useState({});return I.useEffect(()=>{const r=VP(wc,i=>{n(i),console.log(i)});return()=>{r()}},[]),S.jsx(vr.Provider,{value:{currentUser:e},children:t})},HM=()=>{const{currentUser:t}=I.useContext(vr);return S.jsxs("div",{className:"navbar",children:[S.jsx("span",{className:"logo",children:"Kisan Sahay"}),S.jsxs("div",{className:"user",children:[S.jsx("img",{src:t.photoURL,alt:""}),S.jsx("span",{children:t.displayName}),S.jsx("button",{onClick:()=>MP(wc),children:"Logout"})]})]})},WM=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(null),[i,s]=I.useState(!1),{currentUser:o}=I.useContext(vr),a=async()=>{const c=pV(eV(ft,"users"),mV("displayName","==",t));try{(await wV(c)).forEach(d=>{r(d.data())})}catch{s(!0)}},l=c=>{c.code==="Enter"&&a()},u=async()=>{const c=o.uid>n.uid?o.uid+n.uid:n.uid+o.uid;try{(await vV(Ct(ft,"chats",c))).exists()||(await rf(Ct(ft,"chats",c),{messages:[]}),await ki(Ct(ft,"userChats",o.uid),{[c+".userInfo"]:{uid:n.uid,displayName:n.displayName,photoURL:n.photoURL},[c+".date"]:cu()}),await ki(Ct(ft,"userChats",n.uid),{[c+".userInfo"]:{uid:o.uid,displayName:o.displayName,photoURL:o.photoURL},[c+".date"]:cu()}))}catch{}r(null),e("")};return S.jsxs("div",{className:"search",children:[S.jsx("div",{className:"searchForm",children:S.jsx("input",{type:"text",placeholder:"Find a user",onKeyDown:l,onChange:c=>e(c.target.value),value:t})}),i&&S.jsx("span",{children:"User not found!"}),n&&S.jsxs("div",{className:"userChat",onClick:u,children:[S.jsx("img",{src:n.photoURL,alt:""}),S.jsx("div",{className:"userChatInfo",children:S.jsx("span",{children:n.displayName})})]})]})},vs=I.createContext(),GM=({children:t})=>{const{currentUser:e}=I.useContext(vr),n={chatId:"null",user:{}},r=(o,a)=>{switch(a.type){case"CHANGE_USER":return{user:a.payload,chatId:e.uid>a.payload.uid?e.uid+a.payload.uid:a.payload.uid+e.uid};default:return o}},[i,s]=I.useReducer(r,n);return S.jsx(vs.Provider,{value:{data:i,dispatch:s},children:t})},KM=()=>{var s;const[t,e]=I.useState([]),{currentUser:n}=I.useContext(vr),{dispatch:r}=I.useContext(vs);I.useEffect(()=>{const o=()=>{const a=BI(Ct(ft,"userChats",n.uid),l=>{e(l.data())});return()=>{a()}};n.uid&&o()},[n.uid]);const i=o=>{r({type:"CHANGE_USER",payload:o})};return S.jsx("div",{className:"chats",children:(s=Object.entries(t))==null?void 0:s.sort((o,a)=>a[1].date-o[1].date).map(o=>{var a;return S.jsxs("div",{className:"userChat",onClick:()=>i(o[1].userInfo),children:[S.jsx("img",{src:o[1].userInfo.photoURL,alt:""}),S.jsxs("div",{className:"userChatInfo",children:[S.jsx("span",{children:o[1].userInfo.displayName}),S.jsx("p",{children:(a=o[1].lastMessage)==null?void 0:a.text})]})]},o[0])})})},QM=()=>S.jsxs("div",{className:"sidebar",children:[S.jsx(HM,{}),S.jsx(WM,{}),S.jsx(KM,{})]}),XM=({message:t})=>{const{currentUser:e}=I.useContext(vr),{data:n}=I.useContext(vs),r=I.useRef();return I.useEffect(()=>{var i;(i=r.current)==null||i.scrollIntoView({behavior:"smooth"})},[t]),S.jsxs("div",{ref:r,className:`message ${t.senderId===e.uid&&"owner"}`,children:[S.jsx("div",{className:"messageInfo",children:S.jsx("img",{src:t.senderId===e.uid?e.photoURL:n.user.photoURL,alt:""})}),S.jsxs("div",{className:"messageContent",children:[S.jsx("p",{children:t.text}),t.img&&S.jsx("img",{src:t.img,alt:""})]})]})},YM=()=>{const[t,e]=I.useState([]),{data:n}=I.useContext(vs);return I.useEffect(()=>{const r=BI(Ct(ft,"chats",n.chatId),i=>{i.exists()&&e(i.data().messages)});return()=>{r()}},[n.chatId]),console.log(t),S.jsx("div",{className:"messages",children:t.map(r=>S.jsx(XM,{message:r},r.id))})},JM="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgEAQAAACJ4248AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfmCB8RAzQjvjAGAAAEuUlEQVRYw+2WbUyTVxTH/7cvdFiBOBCKqJCROlJETQQaUVpeu4mxH5ZCidkyUWOiuBmRaBRJIL4lhPnyZR/QxBpRtmqyhtWiRVeftsaAG0t0+AIuoqmausdMrUUstWcfNgh0ILBWlyX7f7p57rnn/s59zj33AP/rLxExZt9ZX2+PUan+FQAbpaVxHJH9w9bWd7mvYHiwSSwGACoSCP65u6mL2TMPH6bpS5dCHRmJAoWCrX72jJLv3MF3Ph9mb9+u9joc3O8FBdDv2wefSBTyjmWvX6OtszPQWl+fz3heBK9Kha8WLRqaJ0NMDLB4MW77/WSWyZAP4IlcjhqlMmxhp2dnC57qdDbKymJGo1CYmBgdjVqFIlDvdOKV1SqILC9/udHn01z3eofWOH+LiqJboZ8Aq4uKCijq6khXUYHPzpwZnuAqMzI4joirNJvDFuk46tZFRHArvV7upscznHDezT09rMHpZKoRVEEyGoXCjtTo6FAB0s/4fJjL83g8ffqkF3HGrVvtshcvOI6Ia+E4e+acOaFAcJX37nEc0agrd9GQlNSti4gINrZRURESGhtpkVgMpcuFWSoV7Tt6NNSTAEbUgYvZCQmitL4+vqip6W9G94uKAAD8li3u1pQUttXtRld+vo1CT8phB6Ks+Hi8EolwPS4u2IjVuly0FmCppaUyV2wsaePjoXC58pnfHzaAN2ng52PHJO+vX08b8/KAvDxI/H6WvG1bqJtPGkBz3eu98rFSOXhArydPQgJLb2tTJV679s4AAGDJg5cvoTcY3mRjNAqFCTXNzSx1yRKqKi5Wa3p7J/I7pYeHk+bm2mN27RrrphAxJnMcOYKj5eW0IzmZfWS1XjQkJYUNwLFLqWRRbW3Uuns3v/P06WAIR3FjI+kqKqB0uaA3mehSSorortV6wRAbGzKAjdLSApVmM30rlWIez8Oj1Y6E4A7U1FBtVRXm8Ty+1mik35eVQWCxoEChEPdbLDYav+JNCGCj2bMFm86fR09cHMkPHmQtCxbgi9u3hyA46+bNWLxnD37xeLCypERddfNmZtbgoDSytJQ1OJ1Iz84WfGoyWXokkikDtFtjYgRLzWaUzZ2LBadOqROrq1VVjx7531Or8cONG/BotZAcOoT9Ph9UOp36x6tXh9ZmZvb3S26tWIGfurqwvrBQ+sJoHKtwjQtwJSkyMuKBxYL9Cxcy07lz0jurVzMWCABAYafbzfY2NAAAJH6/4LFer86wWoN9KH99/tz/TUkJWG8vPFqt8MumJiLGJgUw+IlGgw9ycrC3o2Pggk6XmTU4OMpgVnU1OCK2bN263C6TaTw/hZ1udyBXo4HS5SJdRcUlpKdPCmDa5+3taFy7VlC7fPnIxmRIFL9mTaBWo1H5jx+fKI/yWV8fW5aTQ/2rVuWhu3tMo+GGxHH27EQOwyGu9f79Uc+xsO7Jkz9Dk8uJ3m5n7HDMmIEbMhnm8fxwVi6b+fAh12K3Y5ZKZX964sSlu83NlBL038MgQfO0aYHs6moExGIaaGkZlZGcVS5nB9rbaUdy8ts8AQDA3o4O4cniYhb8vSM1Onpgx4YNODR/Pps5dvEIReTxetmqy5dfbzEYwtFP/Pf1B63n8BCweUoHAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA4LTMxVDE3OjAzOjUyKzAwOjAwAqs7ggAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOC0zMVQxNzowMzo1MiswMDowMHP2gz4AAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjItMDgtMzFUMTc6MDM6NTIrMDA6MDAk46LhAAAAAElFTkSuQmCC";var uf={exports:{}},B_=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof window.msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto);if(B_){var z_=new Uint8Array(16);uf.exports=function(){return B_(z_),z_}}else{var q_=new Array(16);uf.exports=function(){for(var e=0,n;e<16;e++)e&3||(n=Math.random()*4294967296),q_[e]=n>>>((e&3)<<3)&255;return q_}}var A1=uf.exports,S1=[];for(var Ya=0;Ya<256;++Ya)S1[Ya]=(Ya+256).toString(16).substr(1);function ZM(t,e){var n=e||0,r=S1;return[r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],"-",r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]],r[t[n++]]].join("")}var R1=ZM,eb=A1,tb=R1,H_,Ah,Sh=0,Rh=0;function nb(t,e,n){var r=e&&n||0,i=e||[];t=t||{};var s=t.node||H_,o=t.clockseq!==void 0?t.clockseq:Ah;if(s==null||o==null){var a=eb();s==null&&(s=H_=[a[0]|1,a[1],a[2],a[3],a[4],a[5]]),o==null&&(o=Ah=(a[6]<<8|a[7])&16383)}var l=t.msecs!==void 0?t.msecs:new Date().getTime(),u=t.nsecs!==void 0?t.nsecs:Rh+1,c=l-Sh+(u-Rh)/1e4;if(c<0&&t.clockseq===void 0&&(o=o+1&16383),(c<0||l>Sh)&&t.nsecs===void 0&&(u=0),u>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");Sh=l,Rh=u,Ah=o,l+=122192928e5;var h=((l&268435455)*1e4+u)%4294967296;i[r++]=h>>>24&255,i[r++]=h>>>16&255,i[r++]=h>>>8&255,i[r++]=h&255;var d=l/4294967296*1e4&268435455;i[r++]=d>>>8&255,i[r++]=d&255,i[r++]=d>>>24&15|16,i[r++]=d>>>16&255,i[r++]=o>>>8|128,i[r++]=o&255;for(var p=0;p<6;++p)i[r+p]=s[p];return e||tb(i)}var rb=nb,ib=A1,sb=R1;function ob(t,e,n){var r=e&&n||0;typeof t=="string"&&(e=t==="binary"?new Array(16):null,t=null),t=t||{};var i=t.random||(t.rng||ib)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,e)for(var s=0;s<16;++s)e[r+s]=i[s];return e||sb(i)}var ab=ob,lb=rb,C1=ab,Lm=C1;Lm.v1=lb;Lm.v4=C1;var Ch=Lm;const ub=()=>{const[t,e]=I.useState(""),[n,r]=I.useState(null),{currentUser:i}=I.useContext(vr),{data:s}=I.useContext(vs),o=async()=>{if(n){const a=IE(f1,Ch.v4()),l=EE(a,n);l.on(u=>{},()=>{TE(l.snapshot.ref).then(async u=>{await ki(Ct(ft,"chats",s.chatId),{messages:S_({id:Ch.v4(),text:t,senderId:i.uid,date:ye.now(),img:u})})})})}else await ki(Ct(ft,"chats",s.chatId),{messages:S_({id:Ch.v4(),text:t,senderId:i.uid,date:ye.now()})});await ki(Ct(ft,"userChats",i.uid),{[s.chatId+".lastMessage"]:{text:t},[s.chatId+".date"]:cu()}),await ki(Ct(ft,"userChats",s.user.uid),{[s.chatId+".lastMessage"]:{text:t},[s.chatId+".date"]:cu()}),e(""),r(null)};return S.jsxs("div",{className:"input",children:[S.jsx("input",{type:"text",placeholder:"Type here...",onChange:a=>e(a.target.value),value:t}),S.jsxs("div",{className:"send",children:[S.jsx("input",{type:"file",style:{display:"none"},id:"file",onChange:a=>r(a.target.files[0])}),S.jsx("label",{htmlFor:"file",children:S.jsx("img",{src:JM,alt:""})}),S.jsx("button",{onClick:o,children:"Send"})]})]})},cb=()=>{var e;const{data:t}=I.useContext(vs);return S.jsxs("div",{className:"chat",children:[S.jsx("div",{className:"chatInfo",children:S.jsx("span",{children:(e=t.user)==null?void 0:e.displayName})}),S.jsx(YM,{}),S.jsx(ub,{})]})},hb=()=>S.jsx("div",{className:"home",children:S.jsxs("div",{className:"container",children:[S.jsx(QM,{}),S.jsx(cb,{})]})});function db(){const{currentUser:t}=I.useContext(vr),e=({children:n})=>t?n:S.jsx(kM,{to:"/login"});return S.jsx(UM,{children:S.jsx(DM,{children:S.jsxs(Hs,{path:"/",children:[S.jsx(Hs,{index:!0,element:S.jsx(e,{children:S.jsx(hb,{})})}),S.jsx(Hs,{path:"login",element:S.jsx(zM,{})}),S.jsx(Hs,{path:"register",element:S.jsx(BM,{})})]})})})}const fb=Ph.createRoot(document.getElementById("root"));fb.render(S.jsx(qM,{children:S.jsx(GM,{children:S.jsx(tv.StrictMode,{children:S.jsx(db,{})})})}));
