(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const L of document.querySelectorAll('link[rel="modulepreload"]'))r(L);new MutationObserver(L=>{for(const a of L)if(a.type==="childList")for(const e of a.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&r(e)}).observe(document,{childList:!0,subtree:!0});function n(L){const a={};return L.integrity&&(a.integrity=L.integrity),L.referrerPolicy&&(a.referrerPolicy=L.referrerPolicy),L.crossOrigin==="use-credentials"?a.credentials="include":L.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(L){if(L.ep)return;L.ep=!0;const a=n(L);fetch(L.href,a)}})();function Br(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var z0={exports:{}},B6={},R0={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w3=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),Yr=Symbol.for("react.strict_mode"),Qr=Symbol.for("react.profiler"),Xr=Symbol.for("react.provider"),Kr=Symbol.for("react.context"),Gr=Symbol.for("react.forward_ref"),qr=Symbol.for("react.suspense"),Jr=Symbol.for("react.memo"),lL=Symbol.for("react.lazy"),fl=Symbol.iterator;function tL(t){return t===null||typeof t!="object"?null:(t=fl&&t[fl]||t["@@iterator"],typeof t=="function"?t:null)}var N0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D0=Object.assign,F0={};function v2(t,l,n){this.props=t,this.context=l,this.refs=F0,this.updater=n||N0}v2.prototype.isReactComponent={};v2.prototype.setState=function(t,l){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,l,"setState")};v2.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function I0(){}I0.prototype=v2.prototype;function K8(t,l,n){this.props=t,this.context=l,this.refs=F0,this.updater=n||N0}var G8=K8.prototype=new I0;G8.constructor=K8;D0(G8,v2.prototype);G8.isPureReactComponent=!0;var cl=Array.isArray,A0=Object.prototype.hasOwnProperty,q8={current:null},U0={key:!0,ref:!0,__self:!0,__source:!0};function j0(t,l,n){var r,L={},a=null,e=null;if(l!=null)for(r in l.ref!==void 0&&(e=l.ref),l.key!==void 0&&(a=""+l.key),l)A0.call(l,r)&&!U0.hasOwnProperty(r)&&(L[r]=l[r]);var i=arguments.length-2;if(i===1)L.children=n;else if(1<i){for(var f=Array(i),c=0;c<i;c++)f[c]=arguments[c+2];L.children=f}if(t&&t.defaultProps)for(r in i=t.defaultProps,i)L[r]===void 0&&(L[r]=i[r]);return{$$typeof:w3,type:t,key:a,ref:e,props:L,_owner:q8.current}}function nL(t,l){return{$$typeof:w3,type:t.type,key:l,ref:t.ref,props:t.props,_owner:t._owner}}function J8(t){return typeof t=="object"&&t!==null&&t.$$typeof===w3}function rL(t){var l={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return l[n]})}var dl=/\/+/g;function c7(t,l){return typeof t=="object"&&t!==null&&t.key!=null?rL(""+t.key):l.toString(36)}function q3(t,l,n,r,L){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var e=!1;if(t===null)e=!0;else switch(a){case"string":case"number":e=!0;break;case"object":switch(t.$$typeof){case w3:case Wr:e=!0}}if(e)return e=t,L=L(e),t=r===""?"."+c7(e,0):r,cl(L)?(n="",t!=null&&(n=t.replace(dl,"$&/")+"/"),q3(L,l,n,"",function(c){return c})):L!=null&&(J8(L)&&(L=nL(L,n+(!L.key||e&&e.key===L.key?"":(""+L.key).replace(dl,"$&/")+"/")+t)),l.push(L)),1;if(e=0,r=r===""?".":r+":",cl(t))for(var i=0;i<t.length;i++){a=t[i];var f=r+c7(a,i);e+=q3(a,l,n,f,L)}else if(f=tL(t),typeof f=="function")for(t=f.call(t),i=0;!(a=t.next()).done;)a=a.value,f=r+c7(a,i++),e+=q3(a,l,n,f,L);else if(a==="object")throw l=String(t),Error("Objects are not valid as a React child (found: "+(l==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":l)+"). If you meant to render a collection of children, use an array instead.");return e}function O3(t,l,n){if(t==null)return t;var r=[],L=0;return q3(t,r,"","",function(a){return l.call(n,a,L++)}),r}function LL(t){if(t._status===-1){var l=t._result;l=l(),l.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=l)}if(t._status===1)return t._result.default;throw t._result}var C1={current:null},J3={transition:null},aL={ReactCurrentDispatcher:C1,ReactCurrentBatchConfig:J3,ReactCurrentOwner:q8};function B0(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:O3,forEach:function(t,l,n){O3(t,function(){l.apply(this,arguments)},n)},count:function(t){var l=0;return O3(t,function(){l++}),l},toArray:function(t){return O3(t,function(l){return l})||[]},only:function(t){if(!J8(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};O.Component=v2;O.Fragment=$r;O.Profiler=Qr;O.PureComponent=K8;O.StrictMode=Yr;O.Suspense=qr;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=aL;O.act=B0;O.cloneElement=function(t,l,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=D0({},t.props),L=t.key,a=t.ref,e=t._owner;if(l!=null){if(l.ref!==void 0&&(a=l.ref,e=q8.current),l.key!==void 0&&(L=""+l.key),t.type&&t.type.defaultProps)var i=t.type.defaultProps;for(f in l)A0.call(l,f)&&!U0.hasOwnProperty(f)&&(r[f]=l[f]===void 0&&i!==void 0?i[f]:l[f])}var f=arguments.length-2;if(f===1)r.children=n;else if(1<f){i=Array(f);for(var c=0;c<f;c++)i[c]=arguments[c+2];r.children=i}return{$$typeof:w3,type:t.type,key:L,ref:a,props:r,_owner:e}};O.createContext=function(t){return t={$$typeof:Kr,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Xr,_context:t},t.Consumer=t};O.createElement=j0;O.createFactory=function(t){var l=j0.bind(null,t);return l.type=t,l};O.createRef=function(){return{current:null}};O.forwardRef=function(t){return{$$typeof:Gr,render:t}};O.isValidElement=J8;O.lazy=function(t){return{$$typeof:lL,_payload:{_status:-1,_result:t},_init:LL}};O.memo=function(t,l){return{$$typeof:Jr,type:t,compare:l===void 0?null:l}};O.startTransition=function(t){var l=J3.transition;J3.transition={};try{t()}finally{J3.transition=l}};O.unstable_act=B0;O.useCallback=function(t,l){return C1.current.useCallback(t,l)};O.useContext=function(t){return C1.current.useContext(t)};O.useDebugValue=function(){};O.useDeferredValue=function(t){return C1.current.useDeferredValue(t)};O.useEffect=function(t,l){return C1.current.useEffect(t,l)};O.useId=function(){return C1.current.useId()};O.useImperativeHandle=function(t,l,n){return C1.current.useImperativeHandle(t,l,n)};O.useInsertionEffect=function(t,l){return C1.current.useInsertionEffect(t,l)};O.useLayoutEffect=function(t,l){return C1.current.useLayoutEffect(t,l)};O.useMemo=function(t,l){return C1.current.useMemo(t,l)};O.useReducer=function(t,l,n){return C1.current.useReducer(t,l,n)};O.useRef=function(t){return C1.current.useRef(t)};O.useState=function(t){return C1.current.useState(t)};O.useSyncExternalStore=function(t,l,n){return C1.current.useSyncExternalStore(t,l,n)};O.useTransition=function(){return C1.current.useTransition()};O.version="18.3.1";R0.exports=O;var b4=R0.exports;const eL=Br(b4);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iL=b4,fL=Symbol.for("react.element"),cL=Symbol.for("react.fragment"),dL=Object.prototype.hasOwnProperty,pL=iL.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hL={key:!0,ref:!0,__self:!0,__source:!0};function W0(t,l,n){var r,L={},a=null,e=null;n!==void 0&&(a=""+n),l.key!==void 0&&(a=""+l.key),l.ref!==void 0&&(e=l.ref);for(r in l)dL.call(l,r)&&!hL.hasOwnProperty(r)&&(L[r]=l[r]);if(t&&t.defaultProps)for(r in l=t.defaultProps,l)L[r]===void 0&&(L[r]=l[r]);return{$$typeof:fL,type:t,key:a,ref:e,props:L,_owner:pL.current}}B6.Fragment=cL;B6.jsx=W0;B6.jsxs=W0;z0.exports=B6;var S4=z0.exports,j7={},$0={exports:{}},q1={},Y0={exports:{}},Q0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function l(C,x){var T=C.length;C.push(x);l:for(;0<T;){var U=T-1>>>1,W=C[U];if(0<L(W,x))C[U]=x,C[T]=W,T=U;else break l}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var x=C[0],T=C.pop();if(T!==x){C[0]=T;l:for(var U=0,W=C.length,M5=W>>>1;U<M5;){var s1=2*(U+1)-1,c4=C[s1],Z5=s1+1,P3=C[Z5];if(0>L(c4,T))Z5<W&&0>L(P3,c4)?(C[U]=P3,C[Z5]=T,U=Z5):(C[U]=c4,C[s1]=T,U=s1);else if(Z5<W&&0>L(P3,T))C[U]=P3,C[Z5]=T,U=Z5;else break l}}return x}function L(C,x){var T=C.sortIndex-x.sortIndex;return T!==0?T:C.id-x.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var e=Date,i=e.now();t.unstable_now=function(){return e.now()-i}}var f=[],c=[],d=1,h=null,o=3,M=!1,Z=!1,u=!1,m=typeof setTimeout=="function"?setTimeout:null,s=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(C){for(var x=n(c);x!==null;){if(x.callback===null)r(c);else if(x.startTime<=C)r(c),x.sortIndex=x.expirationTime,l(f,x);else break;x=n(c)}}function b(C){if(u=!1,k(C),!Z)if(n(f)!==null)Z=!0,A(V);else{var x=n(c);x!==null&&P(b,x.startTime-C)}}function V(C,x){Z=!1,u&&(u=!1,s(H),H=-1),M=!0;var T=o;try{for(k(x),h=n(f);h!==null&&(!(h.expirationTime>x)||C&&!E());){var U=h.callback;if(typeof U=="function"){h.callback=null,o=h.priorityLevel;var W=U(h.expirationTime<=x);x=t.unstable_now(),typeof W=="function"?h.callback=W:h===n(f)&&r(f),k(x)}else r(f);h=n(f)}if(h!==null)var M5=!0;else{var s1=n(c);s1!==null&&P(b,s1.startTime-x),M5=!1}return M5}finally{h=null,o=T,M=!1}}var g=!1,_=null,H=-1,v=5,w=-1;function E(){return!(t.unstable_now()-w<v)}function R(){if(_!==null){var C=t.unstable_now();w=C;var x=!0;try{x=_(!0,C)}finally{x?D():(g=!1,_=null)}}else g=!1}var D;if(typeof p=="function")D=function(){p(R)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,r1=I.port2;I.port1.onmessage=R,D=function(){r1.postMessage(null)}}else D=function(){m(R,0)};function A(C){_=C,g||(g=!0,D())}function P(C,x){H=m(function(){C(t.unstable_now())},x)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){Z||M||(Z=!0,A(V))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):v=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return o},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(C){switch(o){case 1:case 2:case 3:var x=3;break;default:x=o}var T=o;o=x;try{return C()}finally{o=T}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,x){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var T=o;o=C;try{return x()}finally{o=T}},t.unstable_scheduleCallback=function(C,x,T){var U=t.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?U+T:U):T=U,C){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=T+W,C={id:d++,callback:x,priorityLevel:C,startTime:T,expirationTime:W,sortIndex:-1},T>U?(C.sortIndex=T,l(c,C),n(f)===null&&C===n(c)&&(u?(s(H),H=-1):u=!0,P(b,T-U))):(C.sortIndex=W,l(f,C),Z||M||(Z=!0,A(V))),C},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(C){var x=o;return function(){var T=o;o=x;try{return C.apply(this,arguments)}finally{o=T}}}})(Q0);Y0.exports=Q0;var oL=Y0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uL=b4,X1=oL;function y(t){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)l+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var X0=new Set,n3={};function F5(t,l){o2(t,l),o2(t+"Capture",l)}function o2(t,l){for(n3[t]=l,t=0;t<l.length;t++)X0.add(l[t])}var z4=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),B7=Object.prototype.hasOwnProperty,sL=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pl={},hl={};function kL(t){return B7.call(hl,t)?!0:B7.call(pl,t)?!1:sL.test(t)?hl[t]=!0:(pl[t]=!0,!1)}function ML(t,l,n,r){if(n!==null&&n.type===0)return!1;switch(typeof l){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ZL(t,l,n,r){if(l===null||typeof l>"u"||ML(t,l,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!l;case 4:return l===!1;case 5:return isNaN(l);case 6:return isNaN(l)||1>l}return!1}function S1(t,l,n,r,L,a,e){this.acceptsBooleans=l===2||l===3||l===4,this.attributeName=r,this.attributeNamespace=L,this.mustUseProperty=n,this.propertyName=t,this.type=l,this.sanitizeURL=a,this.removeEmptyString=e}var b1={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){b1[t]=new S1(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var l=t[0];b1[l]=new S1(l,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){b1[t]=new S1(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){b1[t]=new S1(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){b1[t]=new S1(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){b1[t]=new S1(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){b1[t]=new S1(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){b1[t]=new S1(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){b1[t]=new S1(t,5,!1,t.toLowerCase(),null,!1,!1)});var l9=/[\-:]([a-z])/g;function t9(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var l=t.replace(l9,t9);b1[l]=new S1(l,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var l=t.replace(l9,t9);b1[l]=new S1(l,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var l=t.replace(l9,t9);b1[l]=new S1(l,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){b1[t]=new S1(t,1,!1,t.toLowerCase(),null,!1,!1)});b1.xlinkHref=new S1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){b1[t]=new S1(t,1,!1,t.toLowerCase(),null,!0,!0)});function n9(t,l,n,r){var L=b1.hasOwnProperty(l)?b1[l]:null;(L!==null?L.type!==0:r||!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(ZL(l,n,L,r)&&(n=null),r||L===null?kL(l)&&(n===null?t.removeAttribute(l):t.setAttribute(l,""+n)):L.mustUseProperty?t[L.propertyName]=n===null?L.type===3?!1:"":n:(l=L.attributeName,r=L.attributeNamespace,n===null?t.removeAttribute(l):(L=L.type,n=L===3||L===4&&n===!0?"":""+n,r?t.setAttributeNS(r,l,n):t.setAttribute(l,n))))}var A4=uL.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z3=Symbol.for("react.element"),B5=Symbol.for("react.portal"),W5=Symbol.for("react.fragment"),r9=Symbol.for("react.strict_mode"),W7=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),G0=Symbol.for("react.context"),L9=Symbol.for("react.forward_ref"),$7=Symbol.for("react.suspense"),Y7=Symbol.for("react.suspense_list"),a9=Symbol.for("react.memo"),j4=Symbol.for("react.lazy"),q0=Symbol.for("react.offscreen"),ol=Symbol.iterator;function C2(t){return t===null||typeof t!="object"?null:(t=ol&&t[ol]||t["@@iterator"],typeof t=="function"?t:null)}var n1=Object.assign,d7;function N2(t){if(d7===void 0)try{throw Error()}catch(n){var l=n.stack.trim().match(/\n( *(at )?)/);d7=l&&l[1]||""}return`
`+d7+t}var p7=!1;function h7(t,l){if(!t||p7)return"";p7=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(l)if(l=function(){throw Error()},Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(c){var r=c}Reflect.construct(t,[],l)}else{try{l.call()}catch(c){r=c}t.call(l.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var L=c.stack.split(`
`),a=r.stack.split(`
`),e=L.length-1,i=a.length-1;1<=e&&0<=i&&L[e]!==a[i];)i--;for(;1<=e&&0<=i;e--,i--)if(L[e]!==a[i]){if(e!==1||i!==1)do if(e--,i--,0>i||L[e]!==a[i]){var f=`
`+L[e].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=e&&0<=i);break}}}finally{p7=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?N2(t):""}function bL(t){switch(t.tag){case 5:return N2(t.type);case 16:return N2("Lazy");case 13:return N2("Suspense");case 19:return N2("SuspenseList");case 0:case 2:case 15:return t=h7(t.type,!1),t;case 11:return t=h7(t.type.render,!1),t;case 1:return t=h7(t.type,!0),t;default:return""}}function Q7(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case W5:return"Fragment";case B5:return"Portal";case W7:return"Profiler";case r9:return"StrictMode";case $7:return"Suspense";case Y7:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case G0:return(t.displayName||"Context")+".Consumer";case K0:return(t._context.displayName||"Context")+".Provider";case L9:var l=t.render;return t=t.displayName,t||(t=l.displayName||l.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case a9:return l=t.displayName||null,l!==null?l:Q7(t.type)||"Memo";case j4:l=t._payload,t=t._init;try{return Q7(t(l))}catch{}}return null}function VL(t){var l=t.type;switch(t.tag){case 24:return"Cache";case 9:return(l.displayName||"Context")+".Consumer";case 10:return(l._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=l.render,t=t.displayName||t.name||"",l.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return l;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q7(l);case 8:return l===r9?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof l=="function")return l.displayName||l.name||null;if(typeof l=="string")return l}return null}function f5(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function J0(t){var l=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function HL(t){var l=J0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,l),r=""+t[l];if(!t.hasOwnProperty(l)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var L=n.get,a=n.set;return Object.defineProperty(t,l,{configurable:!0,get:function(){return L.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(t,l,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){t._valueTracker=null,delete t[l]}}}}function R3(t){t._valueTracker||(t._valueTracker=HL(t))}function lt(t){if(!t)return!1;var l=t._valueTracker;if(!l)return!0;var n=l.getValue(),r="";return t&&(r=J0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(l.setValue(t),!0):!1}function o6(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function X7(t,l){var n=l.checked;return n1({},l,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ul(t,l){var n=l.defaultValue==null?"":l.defaultValue,r=l.checked!=null?l.checked:l.defaultChecked;n=f5(l.value!=null?l.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:l.type==="checkbox"||l.type==="radio"?l.checked!=null:l.value!=null}}function tt(t,l){l=l.checked,l!=null&&n9(t,"checked",l,!1)}function K7(t,l){tt(t,l);var n=f5(l.value),r=l.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}l.hasOwnProperty("value")?G7(t,l.type,n):l.hasOwnProperty("defaultValue")&&G7(t,l.type,f5(l.defaultValue)),l.checked==null&&l.defaultChecked!=null&&(t.defaultChecked=!!l.defaultChecked)}function sl(t,l,n){if(l.hasOwnProperty("value")||l.hasOwnProperty("defaultValue")){var r=l.type;if(!(r!=="submit"&&r!=="reset"||l.value!==void 0&&l.value!==null))return;l=""+t._wrapperState.initialValue,n||l===t.value||(t.value=l),t.defaultValue=l}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function G7(t,l,n){(l!=="number"||o6(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var D2=Array.isArray;function L2(t,l,n,r){if(t=t.options,l){l={};for(var L=0;L<n.length;L++)l["$"+n[L]]=!0;for(n=0;n<t.length;n++)L=l.hasOwnProperty("$"+t[n].value),t[n].selected!==L&&(t[n].selected=L),L&&r&&(t[n].defaultSelected=!0)}else{for(n=""+f5(n),l=null,L=0;L<t.length;L++){if(t[L].value===n){t[L].selected=!0,r&&(t[L].defaultSelected=!0);return}l!==null||t[L].disabled||(l=t[L])}l!==null&&(l.selected=!0)}}function q7(t,l){if(l.dangerouslySetInnerHTML!=null)throw Error(y(91));return n1({},l,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kl(t,l){var n=l.value;if(n==null){if(n=l.children,l=l.defaultValue,n!=null){if(l!=null)throw Error(y(92));if(D2(n)){if(1<n.length)throw Error(y(93));n=n[0]}l=n}l==null&&(l=""),n=l}t._wrapperState={initialValue:f5(n)}}function nt(t,l){var n=f5(l.value),r=f5(l.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),l.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ml(t){var l=t.textContent;l===t._wrapperState.initialValue&&l!==""&&l!==null&&(t.value=l)}function rt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function J7(t,l){return t==null||t==="http://www.w3.org/1999/xhtml"?rt(l):t==="http://www.w3.org/2000/svg"&&l==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var N3,Lt=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(l,n,r,L){MSApp.execUnsafeLocalFunction(function(){return t(l,n,r,L)})}:t}(function(t,l){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=l;else{for(N3=N3||document.createElement("div"),N3.innerHTML="<svg>"+l.valueOf().toString()+"</svg>",l=N3.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;l.firstChild;)t.appendChild(l.firstChild)}});function r3(t,l){if(l){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=l;return}}t.textContent=l}var B2={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mL=["Webkit","ms","Moz","O"];Object.keys(B2).forEach(function(t){mL.forEach(function(l){l=l+t.charAt(0).toUpperCase()+t.substring(1),B2[l]=B2[t]})});function at(t,l,n){return l==null||typeof l=="boolean"||l===""?"":n||typeof l!="number"||l===0||B2.hasOwnProperty(t)&&B2[t]?(""+l).trim():l+"px"}function et(t,l){t=t.style;for(var n in l)if(l.hasOwnProperty(n)){var r=n.indexOf("--")===0,L=at(n,l[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,L):t[n]=L}}var _L=n1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function l8(t,l){if(l){if(_L[t]&&(l.children!=null||l.dangerouslySetInnerHTML!=null))throw Error(y(137,t));if(l.dangerouslySetInnerHTML!=null){if(l.children!=null)throw Error(y(60));if(typeof l.dangerouslySetInnerHTML!="object"||!("__html"in l.dangerouslySetInnerHTML))throw Error(y(61))}if(l.style!=null&&typeof l.style!="object")throw Error(y(62))}}function t8(t,l){if(t.indexOf("-")===-1)return typeof l.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var n8=null;function e9(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var r8=null,a2=null,e2=null;function Zl(t){if(t=x3(t)){if(typeof r8!="function")throw Error(y(280));var l=t.stateNode;l&&(l=X6(l),r8(t.stateNode,t.type,l))}}function it(t){a2?e2?e2.push(t):e2=[t]:a2=t}function ft(){if(a2){var t=a2,l=e2;if(e2=a2=null,Zl(t),l)for(t=0;t<l.length;t++)Zl(l[t])}}function ct(t,l){return t(l)}function dt(){}var o7=!1;function pt(t,l,n){if(o7)return t(l,n);o7=!0;try{return ct(t,l,n)}finally{o7=!1,(a2!==null||e2!==null)&&(dt(),ft())}}function L3(t,l){var n=t.stateNode;if(n===null)return null;var r=X6(n);if(r===null)return null;n=r[l];l:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break l;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(y(231,l,typeof n));return n}var L8=!1;if(z4)try{var S2={};Object.defineProperty(S2,"passive",{get:function(){L8=!0}}),window.addEventListener("test",S2,S2),window.removeEventListener("test",S2,S2)}catch{L8=!1}function gL(t,l,n,r,L,a,e,i,f){var c=Array.prototype.slice.call(arguments,3);try{l.apply(n,c)}catch(d){this.onError(d)}}var W2=!1,u6=null,s6=!1,a8=null,vL={onError:function(t){W2=!0,u6=t}};function yL(t,l,n,r,L,a,e,i,f){W2=!1,u6=null,gL.apply(vL,arguments)}function wL(t,l,n,r,L,a,e,i,f){if(yL.apply(this,arguments),W2){if(W2){var c=u6;W2=!1,u6=null}else throw Error(y(198));s6||(s6=!0,a8=c)}}function I5(t){var l=t,n=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,l.flags&4098&&(n=l.return),t=l.return;while(t)}return l.tag===3?n:null}function ht(t){if(t.tag===13){var l=t.memoizedState;if(l===null&&(t=t.alternate,t!==null&&(l=t.memoizedState)),l!==null)return l.dehydrated}return null}function bl(t){if(I5(t)!==t)throw Error(y(188))}function CL(t){var l=t.alternate;if(!l){if(l=I5(t),l===null)throw Error(y(188));return l!==t?null:t}for(var n=t,r=l;;){var L=n.return;if(L===null)break;var a=L.alternate;if(a===null){if(r=L.return,r!==null){n=r;continue}break}if(L.child===a.child){for(a=L.child;a;){if(a===n)return bl(L),t;if(a===r)return bl(L),l;a=a.sibling}throw Error(y(188))}if(n.return!==r.return)n=L,r=a;else{for(var e=!1,i=L.child;i;){if(i===n){e=!0,n=L,r=a;break}if(i===r){e=!0,r=L,n=a;break}i=i.sibling}if(!e){for(i=a.child;i;){if(i===n){e=!0,n=a,r=L;break}if(i===r){e=!0,r=a,n=L;break}i=i.sibling}if(!e)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?t:l}function ot(t){return t=CL(t),t!==null?ut(t):null}function ut(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var l=ut(t);if(l!==null)return l;t=t.sibling}return null}var st=X1.unstable_scheduleCallback,Vl=X1.unstable_cancelCallback,SL=X1.unstable_shouldYield,xL=X1.unstable_requestPaint,i1=X1.unstable_now,TL=X1.unstable_getCurrentPriorityLevel,i9=X1.unstable_ImmediatePriority,kt=X1.unstable_UserBlockingPriority,k6=X1.unstable_NormalPriority,EL=X1.unstable_LowPriority,Mt=X1.unstable_IdlePriority,W6=null,g4=null;function PL(t){if(g4&&typeof g4.onCommitFiberRoot=="function")try{g4.onCommitFiberRoot(W6,t,void 0,(t.current.flags&128)===128)}catch{}}var u4=Math.clz32?Math.clz32:RL,OL=Math.log,zL=Math.LN2;function RL(t){return t>>>=0,t===0?32:31-(OL(t)/zL|0)|0}var D3=64,F3=4194304;function F2(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function M6(t,l){var n=t.pendingLanes;if(n===0)return 0;var r=0,L=t.suspendedLanes,a=t.pingedLanes,e=n&268435455;if(e!==0){var i=e&~L;i!==0?r=F2(i):(a&=e,a!==0&&(r=F2(a)))}else e=n&~L,e!==0?r=F2(e):a!==0&&(r=F2(a));if(r===0)return 0;if(l!==0&&l!==r&&!(l&L)&&(L=r&-r,a=l&-l,L>=a||L===16&&(a&4194240)!==0))return l;if(r&4&&(r|=n&16),l=t.entangledLanes,l!==0)for(t=t.entanglements,l&=r;0<l;)n=31-u4(l),L=1<<n,r|=t[n],l&=~L;return r}function NL(t,l){switch(t){case 1:case 2:case 4:return l+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DL(t,l){for(var n=t.suspendedLanes,r=t.pingedLanes,L=t.expirationTimes,a=t.pendingLanes;0<a;){var e=31-u4(a),i=1<<e,f=L[e];f===-1?(!(i&n)||i&r)&&(L[e]=NL(i,l)):f<=l&&(t.expiredLanes|=i),a&=~i}}function e8(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Zt(){var t=D3;return D3<<=1,!(D3&4194240)&&(D3=64),t}function u7(t){for(var l=[],n=0;31>n;n++)l.push(t);return l}function C3(t,l,n){t.pendingLanes|=l,l!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,l=31-u4(l),t[l]=n}function FL(t,l){var n=t.pendingLanes&~l;t.pendingLanes=l,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=l,t.mutableReadLanes&=l,t.entangledLanes&=l,l=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var L=31-u4(n),a=1<<L;l[L]=0,r[L]=-1,t[L]=-1,n&=~a}}function f9(t,l){var n=t.entangledLanes|=l;for(t=t.entanglements;n;){var r=31-u4(n),L=1<<r;L&l|t[r]&l&&(t[r]|=l),n&=~L}}var F=0;function bt(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vt,c9,Ht,mt,_t,i8=!1,I3=[],q4=null,J4=null,l5=null,a3=new Map,e3=new Map,W4=[],IL="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hl(t,l){switch(t){case"focusin":case"focusout":q4=null;break;case"dragenter":case"dragleave":J4=null;break;case"mouseover":case"mouseout":l5=null;break;case"pointerover":case"pointerout":a3.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":e3.delete(l.pointerId)}}function x2(t,l,n,r,L,a){return t===null||t.nativeEvent!==a?(t={blockedOn:l,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[L]},l!==null&&(l=x3(l),l!==null&&c9(l)),t):(t.eventSystemFlags|=r,l=t.targetContainers,L!==null&&l.indexOf(L)===-1&&l.push(L),t)}function AL(t,l,n,r,L){switch(l){case"focusin":return q4=x2(q4,t,l,n,r,L),!0;case"dragenter":return J4=x2(J4,t,l,n,r,L),!0;case"mouseover":return l5=x2(l5,t,l,n,r,L),!0;case"pointerover":var a=L.pointerId;return a3.set(a,x2(a3.get(a)||null,t,l,n,r,L)),!0;case"gotpointercapture":return a=L.pointerId,e3.set(a,x2(e3.get(a)||null,t,l,n,r,L)),!0}return!1}function gt(t){var l=g5(t.target);if(l!==null){var n=I5(l);if(n!==null){if(l=n.tag,l===13){if(l=ht(n),l!==null){t.blockedOn=l,_t(t.priority,function(){Ht(n)});return}}else if(l===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function l6(t){if(t.blockedOn!==null)return!1;for(var l=t.targetContainers;0<l.length;){var n=f8(t.domEventName,t.eventSystemFlags,l[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);n8=r,n.target.dispatchEvent(r),n8=null}else return l=x3(n),l!==null&&c9(l),t.blockedOn=n,!1;l.shift()}return!0}function ml(t,l,n){l6(t)&&n.delete(l)}function UL(){i8=!1,q4!==null&&l6(q4)&&(q4=null),J4!==null&&l6(J4)&&(J4=null),l5!==null&&l6(l5)&&(l5=null),a3.forEach(ml),e3.forEach(ml)}function T2(t,l){t.blockedOn===l&&(t.blockedOn=null,i8||(i8=!0,X1.unstable_scheduleCallback(X1.unstable_NormalPriority,UL)))}function i3(t){function l(L){return T2(L,t)}if(0<I3.length){T2(I3[0],t);for(var n=1;n<I3.length;n++){var r=I3[n];r.blockedOn===t&&(r.blockedOn=null)}}for(q4!==null&&T2(q4,t),J4!==null&&T2(J4,t),l5!==null&&T2(l5,t),a3.forEach(l),e3.forEach(l),n=0;n<W4.length;n++)r=W4[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<W4.length&&(n=W4[0],n.blockedOn===null);)gt(n),n.blockedOn===null&&W4.shift()}var i2=A4.ReactCurrentBatchConfig,Z6=!0;function jL(t,l,n,r){var L=F,a=i2.transition;i2.transition=null;try{F=1,d9(t,l,n,r)}finally{F=L,i2.transition=a}}function BL(t,l,n,r){var L=F,a=i2.transition;i2.transition=null;try{F=4,d9(t,l,n,r)}finally{F=L,i2.transition=a}}function d9(t,l,n,r){if(Z6){var L=f8(t,l,n,r);if(L===null)g7(t,l,r,b6,n),Hl(t,r);else if(AL(L,t,l,n,r))r.stopPropagation();else if(Hl(t,r),l&4&&-1<IL.indexOf(t)){for(;L!==null;){var a=x3(L);if(a!==null&&Vt(a),a=f8(t,l,n,r),a===null&&g7(t,l,r,b6,n),a===L)break;L=a}L!==null&&r.stopPropagation()}else g7(t,l,r,null,n)}}var b6=null;function f8(t,l,n,r){if(b6=null,t=e9(r),t=g5(t),t!==null)if(l=I5(t),l===null)t=null;else if(n=l.tag,n===13){if(t=ht(l),t!==null)return t;t=null}else if(n===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;t=null}else l!==t&&(t=null);return b6=t,null}function vt(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TL()){case i9:return 1;case kt:return 4;case k6:case EL:return 16;case Mt:return 536870912;default:return 16}default:return 16}}var Y4=null,p9=null,t6=null;function yt(){if(t6)return t6;var t,l=p9,n=l.length,r,L="value"in Y4?Y4.value:Y4.textContent,a=L.length;for(t=0;t<n&&l[t]===L[t];t++);var e=n-t;for(r=1;r<=e&&l[n-r]===L[a-r];r++);return t6=L.slice(t,1<r?1-r:void 0)}function n6(t){var l=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&l===13&&(t=13)):t=l,t===10&&(t=13),32<=t||t===13?t:0}function A3(){return!0}function _l(){return!1}function J1(t){function l(n,r,L,a,e){this._reactName=n,this._targetInst=L,this.type=r,this.nativeEvent=a,this.target=e,this.currentTarget=null;for(var i in t)t.hasOwnProperty(i)&&(n=t[i],this[i]=n?n(a):a[i]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?A3:_l,this.isPropagationStopped=_l,this}return n1(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=A3)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=A3)},persist:function(){},isPersistent:A3}),l}var y2={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},h9=J1(y2),S3=n1({},y2,{view:0,detail:0}),WL=J1(S3),s7,k7,E2,$6=n1({},S3,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:o9,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==E2&&(E2&&t.type==="mousemove"?(s7=t.screenX-E2.screenX,k7=t.screenY-E2.screenY):k7=s7=0,E2=t),s7)},movementY:function(t){return"movementY"in t?t.movementY:k7}}),gl=J1($6),$L=n1({},$6,{dataTransfer:0}),YL=J1($L),QL=n1({},S3,{relatedTarget:0}),M7=J1(QL),XL=n1({},y2,{animationName:0,elapsedTime:0,pseudoElement:0}),KL=J1(XL),GL=n1({},y2,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qL=J1(GL),JL=n1({},y2,{data:0}),vl=J1(JL),la={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ta={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},na={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ra(t){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(t):(t=na[t])?!!l[t]:!1}function o9(){return ra}var La=n1({},S3,{key:function(t){if(t.key){var l=la[t.key]||t.key;if(l!=="Unidentified")return l}return t.type==="keypress"?(t=n6(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ta[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:o9,charCode:function(t){return t.type==="keypress"?n6(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?n6(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),aa=J1(La),ea=n1({},$6,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yl=J1(ea),ia=n1({},S3,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:o9}),fa=J1(ia),ca=n1({},y2,{propertyName:0,elapsedTime:0,pseudoElement:0}),da=J1(ca),pa=n1({},$6,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ha=J1(pa),oa=[9,13,27,32],u9=z4&&"CompositionEvent"in window,$2=null;z4&&"documentMode"in document&&($2=document.documentMode);var ua=z4&&"TextEvent"in window&&!$2,wt=z4&&(!u9||$2&&8<$2&&11>=$2),wl=" ",Cl=!1;function Ct(t,l){switch(t){case"keyup":return oa.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function St(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $5=!1;function sa(t,l){switch(t){case"compositionend":return St(l);case"keypress":return l.which!==32?null:(Cl=!0,wl);case"textInput":return t=l.data,t===wl&&Cl?null:t;default:return null}}function ka(t,l){if($5)return t==="compositionend"||!u9&&Ct(t,l)?(t=yt(),t6=p9=Y4=null,$5=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return wt&&l.locale!=="ko"?null:l.data;default:return null}}var Ma={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sl(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l==="input"?!!Ma[t.type]:l==="textarea"}function xt(t,l,n,r){it(r),l=V6(l,"onChange"),0<l.length&&(n=new h9("onChange","change",null,n,r),t.push({event:n,listeners:l}))}var Y2=null,f3=null;function Za(t){At(t,0)}function Y6(t){var l=X5(t);if(lt(l))return t}function ba(t,l){if(t==="change")return l}var Tt=!1;if(z4){var Z7;if(z4){var b7="oninput"in document;if(!b7){var xl=document.createElement("div");xl.setAttribute("oninput","return;"),b7=typeof xl.oninput=="function"}Z7=b7}else Z7=!1;Tt=Z7&&(!document.documentMode||9<document.documentMode)}function Tl(){Y2&&(Y2.detachEvent("onpropertychange",Et),f3=Y2=null)}function Et(t){if(t.propertyName==="value"&&Y6(f3)){var l=[];xt(l,f3,t,e9(t)),pt(Za,l)}}function Va(t,l,n){t==="focusin"?(Tl(),Y2=l,f3=n,Y2.attachEvent("onpropertychange",Et)):t==="focusout"&&Tl()}function Ha(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Y6(f3)}function ma(t,l){if(t==="click")return Y6(l)}function _a(t,l){if(t==="input"||t==="change")return Y6(l)}function ga(t,l){return t===l&&(t!==0||1/t===1/l)||t!==t&&l!==l}var k4=typeof Object.is=="function"?Object.is:ga;function c3(t,l){if(k4(t,l))return!0;if(typeof t!="object"||t===null||typeof l!="object"||l===null)return!1;var n=Object.keys(t),r=Object.keys(l);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var L=n[r];if(!B7.call(l,L)||!k4(t[L],l[L]))return!1}return!0}function El(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pl(t,l){var n=El(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=l&&r>=l)return{node:n,offset:l-t};t=r}l:{for(;n;){if(n.nextSibling){n=n.nextSibling;break l}n=n.parentNode}n=void 0}n=El(n)}}function Pt(t,l){return t&&l?t===l?!0:t&&t.nodeType===3?!1:l&&l.nodeType===3?Pt(t,l.parentNode):"contains"in t?t.contains(l):t.compareDocumentPosition?!!(t.compareDocumentPosition(l)&16):!1:!1}function Ot(){for(var t=window,l=o6();l instanceof t.HTMLIFrameElement;){try{var n=typeof l.contentWindow.location.href=="string"}catch{n=!1}if(n)t=l.contentWindow;else break;l=o6(t.document)}return l}function s9(t){var l=t&&t.nodeName&&t.nodeName.toLowerCase();return l&&(l==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||l==="textarea"||t.contentEditable==="true")}function va(t){var l=Ot(),n=t.focusedElem,r=t.selectionRange;if(l!==n&&n&&n.ownerDocument&&Pt(n.ownerDocument.documentElement,n)){if(r!==null&&s9(n)){if(l=r.start,t=r.end,t===void 0&&(t=l),"selectionStart"in n)n.selectionStart=l,n.selectionEnd=Math.min(t,n.value.length);else if(t=(l=n.ownerDocument||document)&&l.defaultView||window,t.getSelection){t=t.getSelection();var L=n.textContent.length,a=Math.min(r.start,L);r=r.end===void 0?a:Math.min(r.end,L),!t.extend&&a>r&&(L=r,r=a,a=L),L=Pl(n,a);var e=Pl(n,r);L&&e&&(t.rangeCount!==1||t.anchorNode!==L.node||t.anchorOffset!==L.offset||t.focusNode!==e.node||t.focusOffset!==e.offset)&&(l=l.createRange(),l.setStart(L.node,L.offset),t.removeAllRanges(),a>r?(t.addRange(l),t.extend(e.node,e.offset)):(l.setEnd(e.node,e.offset),t.addRange(l)))}}for(l=[],t=n;t=t.parentNode;)t.nodeType===1&&l.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<l.length;n++)t=l[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ya=z4&&"documentMode"in document&&11>=document.documentMode,Y5=null,c8=null,Q2=null,d8=!1;function Ol(t,l,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;d8||Y5==null||Y5!==o6(r)||(r=Y5,"selectionStart"in r&&s9(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Q2&&c3(Q2,r)||(Q2=r,r=V6(c8,"onSelect"),0<r.length&&(l=new h9("onSelect","select",null,l,n),t.push({event:l,listeners:r}),l.target=Y5)))}function U3(t,l){var n={};return n[t.toLowerCase()]=l.toLowerCase(),n["Webkit"+t]="webkit"+l,n["Moz"+t]="moz"+l,n}var Q5={animationend:U3("Animation","AnimationEnd"),animationiteration:U3("Animation","AnimationIteration"),animationstart:U3("Animation","AnimationStart"),transitionend:U3("Transition","TransitionEnd")},V7={},zt={};z4&&(zt=document.createElement("div").style,"AnimationEvent"in window||(delete Q5.animationend.animation,delete Q5.animationiteration.animation,delete Q5.animationstart.animation),"TransitionEvent"in window||delete Q5.transitionend.transition);function Q6(t){if(V7[t])return V7[t];if(!Q5[t])return t;var l=Q5[t],n;for(n in l)if(l.hasOwnProperty(n)&&n in zt)return V7[t]=l[n];return t}var Rt=Q6("animationend"),Nt=Q6("animationiteration"),Dt=Q6("animationstart"),Ft=Q6("transitionend"),It=new Map,zl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function o5(t,l){It.set(t,l),F5(l,[t])}for(var H7=0;H7<zl.length;H7++){var m7=zl[H7],wa=m7.toLowerCase(),Ca=m7[0].toUpperCase()+m7.slice(1);o5(wa,"on"+Ca)}o5(Rt,"onAnimationEnd");o5(Nt,"onAnimationIteration");o5(Dt,"onAnimationStart");o5("dblclick","onDoubleClick");o5("focusin","onFocus");o5("focusout","onBlur");o5(Ft,"onTransitionEnd");o2("onMouseEnter",["mouseout","mouseover"]);o2("onMouseLeave",["mouseout","mouseover"]);o2("onPointerEnter",["pointerout","pointerover"]);o2("onPointerLeave",["pointerout","pointerover"]);F5("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));F5("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));F5("onBeforeInput",["compositionend","keypress","textInput","paste"]);F5("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));F5("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));F5("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var I2="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sa=new Set("cancel close invalid load scroll toggle".split(" ").concat(I2));function Rl(t,l,n){var r=t.type||"unknown-event";t.currentTarget=n,wL(r,l,void 0,t),t.currentTarget=null}function At(t,l){l=(l&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],L=r.event;r=r.listeners;l:{var a=void 0;if(l)for(var e=r.length-1;0<=e;e--){var i=r[e],f=i.instance,c=i.currentTarget;if(i=i.listener,f!==a&&L.isPropagationStopped())break l;Rl(L,i,c),a=f}else for(e=0;e<r.length;e++){if(i=r[e],f=i.instance,c=i.currentTarget,i=i.listener,f!==a&&L.isPropagationStopped())break l;Rl(L,i,c),a=f}}}if(s6)throw t=a8,s6=!1,a8=null,t}function Y(t,l){var n=l[s8];n===void 0&&(n=l[s8]=new Set);var r=t+"__bubble";n.has(r)||(Ut(l,t,2,!1),n.add(r))}function _7(t,l,n){var r=0;l&&(r|=4),Ut(n,t,r,l)}var j3="_reactListening"+Math.random().toString(36).slice(2);function d3(t){if(!t[j3]){t[j3]=!0,X0.forEach(function(n){n!=="selectionchange"&&(Sa.has(n)||_7(n,!1,t),_7(n,!0,t))});var l=t.nodeType===9?t:t.ownerDocument;l===null||l[j3]||(l[j3]=!0,_7("selectionchange",!1,l))}}function Ut(t,l,n,r){switch(vt(l)){case 1:var L=jL;break;case 4:L=BL;break;default:L=d9}n=L.bind(null,l,n,t),L=void 0,!L8||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(L=!0),r?L!==void 0?t.addEventListener(l,n,{capture:!0,passive:L}):t.addEventListener(l,n,!0):L!==void 0?t.addEventListener(l,n,{passive:L}):t.addEventListener(l,n,!1)}function g7(t,l,n,r,L){var a=r;if(!(l&1)&&!(l&2)&&r!==null)l:for(;;){if(r===null)return;var e=r.tag;if(e===3||e===4){var i=r.stateNode.containerInfo;if(i===L||i.nodeType===8&&i.parentNode===L)break;if(e===4)for(e=r.return;e!==null;){var f=e.tag;if((f===3||f===4)&&(f=e.stateNode.containerInfo,f===L||f.nodeType===8&&f.parentNode===L))return;e=e.return}for(;i!==null;){if(e=g5(i),e===null)return;if(f=e.tag,f===5||f===6){r=a=e;continue l}i=i.parentNode}}r=r.return}pt(function(){var c=a,d=e9(n),h=[];l:{var o=It.get(t);if(o!==void 0){var M=h9,Z=t;switch(t){case"keypress":if(n6(n)===0)break l;case"keydown":case"keyup":M=aa;break;case"focusin":Z="focus",M=M7;break;case"focusout":Z="blur",M=M7;break;case"beforeblur":case"afterblur":M=M7;break;case"click":if(n.button===2)break l;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=YL;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=fa;break;case Rt:case Nt:case Dt:M=KL;break;case Ft:M=da;break;case"scroll":M=WL;break;case"wheel":M=ha;break;case"copy":case"cut":case"paste":M=qL;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=yl}var u=(l&4)!==0,m=!u&&t==="scroll",s=u?o!==null?o+"Capture":null:o;u=[];for(var p=c,k;p!==null;){k=p;var b=k.stateNode;if(k.tag===5&&b!==null&&(k=b,s!==null&&(b=L3(p,s),b!=null&&u.push(p3(p,b,k)))),m)break;p=p.return}0<u.length&&(o=new M(o,Z,null,n,d),h.push({event:o,listeners:u}))}}if(!(l&7)){l:{if(o=t==="mouseover"||t==="pointerover",M=t==="mouseout"||t==="pointerout",o&&n!==n8&&(Z=n.relatedTarget||n.fromElement)&&(g5(Z)||Z[R4]))break l;if((M||o)&&(o=d.window===d?d:(o=d.ownerDocument)?o.defaultView||o.parentWindow:window,M?(Z=n.relatedTarget||n.toElement,M=c,Z=Z?g5(Z):null,Z!==null&&(m=I5(Z),Z!==m||Z.tag!==5&&Z.tag!==6)&&(Z=null)):(M=null,Z=c),M!==Z)){if(u=gl,b="onMouseLeave",s="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(u=yl,b="onPointerLeave",s="onPointerEnter",p="pointer"),m=M==null?o:X5(M),k=Z==null?o:X5(Z),o=new u(b,p+"leave",M,n,d),o.target=m,o.relatedTarget=k,b=null,g5(d)===c&&(u=new u(s,p+"enter",Z,n,d),u.target=k,u.relatedTarget=m,b=u),m=b,M&&Z)t:{for(u=M,s=Z,p=0,k=u;k;k=U5(k))p++;for(k=0,b=s;b;b=U5(b))k++;for(;0<p-k;)u=U5(u),p--;for(;0<k-p;)s=U5(s),k--;for(;p--;){if(u===s||s!==null&&u===s.alternate)break t;u=U5(u),s=U5(s)}u=null}else u=null;M!==null&&Nl(h,o,M,u,!1),Z!==null&&m!==null&&Nl(h,m,Z,u,!0)}}l:{if(o=c?X5(c):window,M=o.nodeName&&o.nodeName.toLowerCase(),M==="select"||M==="input"&&o.type==="file")var V=ba;else if(Sl(o))if(Tt)V=_a;else{V=Ha;var g=Va}else(M=o.nodeName)&&M.toLowerCase()==="input"&&(o.type==="checkbox"||o.type==="radio")&&(V=ma);if(V&&(V=V(t,c))){xt(h,V,n,d);break l}g&&g(t,o,c),t==="focusout"&&(g=o._wrapperState)&&g.controlled&&o.type==="number"&&G7(o,"number",o.value)}switch(g=c?X5(c):window,t){case"focusin":(Sl(g)||g.contentEditable==="true")&&(Y5=g,c8=c,Q2=null);break;case"focusout":Q2=c8=Y5=null;break;case"mousedown":d8=!0;break;case"contextmenu":case"mouseup":case"dragend":d8=!1,Ol(h,n,d);break;case"selectionchange":if(ya)break;case"keydown":case"keyup":Ol(h,n,d)}var _;if(u9)l:{switch(t){case"compositionstart":var H="onCompositionStart";break l;case"compositionend":H="onCompositionEnd";break l;case"compositionupdate":H="onCompositionUpdate";break l}H=void 0}else $5?Ct(t,n)&&(H="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(H="onCompositionStart");H&&(wt&&n.locale!=="ko"&&($5||H!=="onCompositionStart"?H==="onCompositionEnd"&&$5&&(_=yt()):(Y4=d,p9="value"in Y4?Y4.value:Y4.textContent,$5=!0)),g=V6(c,H),0<g.length&&(H=new vl(H,t,null,n,d),h.push({event:H,listeners:g}),_?H.data=_:(_=St(n),_!==null&&(H.data=_)))),(_=ua?sa(t,n):ka(t,n))&&(c=V6(c,"onBeforeInput"),0<c.length&&(d=new vl("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=_))}At(h,l)})}function p3(t,l,n){return{instance:t,listener:l,currentTarget:n}}function V6(t,l){for(var n=l+"Capture",r=[];t!==null;){var L=t,a=L.stateNode;L.tag===5&&a!==null&&(L=a,a=L3(t,n),a!=null&&r.unshift(p3(t,a,L)),a=L3(t,l),a!=null&&r.push(p3(t,a,L))),t=t.return}return r}function U5(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nl(t,l,n,r,L){for(var a=l._reactName,e=[];n!==null&&n!==r;){var i=n,f=i.alternate,c=i.stateNode;if(f!==null&&f===r)break;i.tag===5&&c!==null&&(i=c,L?(f=L3(n,a),f!=null&&e.unshift(p3(n,f,i))):L||(f=L3(n,a),f!=null&&e.push(p3(n,f,i)))),n=n.return}e.length!==0&&t.push({event:l,listeners:e})}var xa=/\r\n?/g,Ta=/\u0000|\uFFFD/g;function Dl(t){return(typeof t=="string"?t:""+t).replace(xa,`
`).replace(Ta,"")}function B3(t,l,n){if(l=Dl(l),Dl(t)!==l&&n)throw Error(y(425))}function H6(){}var p8=null,h8=null;function o8(t,l){return t==="textarea"||t==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var u8=typeof setTimeout=="function"?setTimeout:void 0,Ea=typeof clearTimeout=="function"?clearTimeout:void 0,Fl=typeof Promise=="function"?Promise:void 0,Pa=typeof queueMicrotask=="function"?queueMicrotask:typeof Fl<"u"?function(t){return Fl.resolve(null).then(t).catch(Oa)}:u8;function Oa(t){setTimeout(function(){throw t})}function v7(t,l){var n=l,r=0;do{var L=n.nextSibling;if(t.removeChild(n),L&&L.nodeType===8)if(n=L.data,n==="/$"){if(r===0){t.removeChild(L),i3(l);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=L}while(n);i3(l)}function t5(t){for(;t!=null;t=t.nextSibling){var l=t.nodeType;if(l===1||l===3)break;if(l===8){if(l=t.data,l==="$"||l==="$!"||l==="$?")break;if(l==="/$")return null}}return t}function Il(t){t=t.previousSibling;for(var l=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(l===0)return t;l--}else n==="/$"&&l++}t=t.previousSibling}return null}var w2=Math.random().toString(36).slice(2),H4="__reactFiber$"+w2,h3="__reactProps$"+w2,R4="__reactContainer$"+w2,s8="__reactEvents$"+w2,za="__reactListeners$"+w2,Ra="__reactHandles$"+w2;function g5(t){var l=t[H4];if(l)return l;for(var n=t.parentNode;n;){if(l=n[R4]||n[H4]){if(n=l.alternate,l.child!==null||n!==null&&n.child!==null)for(t=Il(t);t!==null;){if(n=t[H4])return n;t=Il(t)}return l}t=n,n=t.parentNode}return null}function x3(t){return t=t[H4]||t[R4],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function X5(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(y(33))}function X6(t){return t[h3]||null}var k8=[],K5=-1;function u5(t){return{current:t}}function Q(t){0>K5||(t.current=k8[K5],k8[K5]=null,K5--)}function $(t,l){K5++,k8[K5]=t.current,t.current=l}var c5={},v1=u5(c5),P1=u5(!1),O5=c5;function u2(t,l){var n=t.type.contextTypes;if(!n)return c5;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===l)return r.__reactInternalMemoizedMaskedChildContext;var L={},a;for(a in n)L[a]=l[a];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=l,t.__reactInternalMemoizedMaskedChildContext=L),L}function O1(t){return t=t.childContextTypes,t!=null}function m6(){Q(P1),Q(v1)}function Al(t,l,n){if(v1.current!==c5)throw Error(y(168));$(v1,l),$(P1,n)}function jt(t,l,n){var r=t.stateNode;if(l=l.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var L in r)if(!(L in l))throw Error(y(108,VL(t)||"Unknown",L));return n1({},n,r)}function _6(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||c5,O5=v1.current,$(v1,t),$(P1,P1.current),!0}function Ul(t,l,n){var r=t.stateNode;if(!r)throw Error(y(169));n?(t=jt(t,l,O5),r.__reactInternalMemoizedMergedChildContext=t,Q(P1),Q(v1),$(v1,t)):Q(P1),$(P1,n)}var x4=null,K6=!1,y7=!1;function Bt(t){x4===null?x4=[t]:x4.push(t)}function Na(t){K6=!0,Bt(t)}function s5(){if(!y7&&x4!==null){y7=!0;var t=0,l=F;try{var n=x4;for(F=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}x4=null,K6=!1}catch(L){throw x4!==null&&(x4=x4.slice(t+1)),st(i9,s5),L}finally{F=l,y7=!1}}return null}var G5=[],q5=0,g6=null,v6=0,t4=[],n4=0,z5=null,E4=1,P4="";function H5(t,l){G5[q5++]=v6,G5[q5++]=g6,g6=t,v6=l}function Wt(t,l,n){t4[n4++]=E4,t4[n4++]=P4,t4[n4++]=z5,z5=t;var r=E4;t=P4;var L=32-u4(r)-1;r&=~(1<<L),n+=1;var a=32-u4(l)+L;if(30<a){var e=L-L%5;a=(r&(1<<e)-1).toString(32),r>>=e,L-=e,E4=1<<32-u4(l)+L|n<<L|r,P4=a+t}else E4=1<<a|n<<L|r,P4=t}function k9(t){t.return!==null&&(H5(t,1),Wt(t,1,0))}function M9(t){for(;t===g6;)g6=G5[--q5],G5[q5]=null,v6=G5[--q5],G5[q5]=null;for(;t===z5;)z5=t4[--n4],t4[n4]=null,P4=t4[--n4],t4[n4]=null,E4=t4[--n4],t4[n4]=null}var Y1=null,B1=null,X=!1,o4=null;function $t(t,l){var n=r4(5,null,null,0);n.elementType="DELETED",n.stateNode=l,n.return=t,l=t.deletions,l===null?(t.deletions=[n],t.flags|=16):l.push(n)}function jl(t,l){switch(t.tag){case 5:var n=t.type;return l=l.nodeType!==1||n.toLowerCase()!==l.nodeName.toLowerCase()?null:l,l!==null?(t.stateNode=l,Y1=t,B1=t5(l.firstChild),!0):!1;case 6:return l=t.pendingProps===""||l.nodeType!==3?null:l,l!==null?(t.stateNode=l,Y1=t,B1=null,!0):!1;case 13:return l=l.nodeType!==8?null:l,l!==null?(n=z5!==null?{id:E4,overflow:P4}:null,t.memoizedState={dehydrated:l,treeContext:n,retryLane:1073741824},n=r4(18,null,null,0),n.stateNode=l,n.return=t,t.child=n,Y1=t,B1=null,!0):!1;default:return!1}}function M8(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Z8(t){if(X){var l=B1;if(l){var n=l;if(!jl(t,l)){if(M8(t))throw Error(y(418));l=t5(n.nextSibling);var r=Y1;l&&jl(t,l)?$t(r,n):(t.flags=t.flags&-4097|2,X=!1,Y1=t)}}else{if(M8(t))throw Error(y(418));t.flags=t.flags&-4097|2,X=!1,Y1=t}}}function Bl(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Y1=t}function W3(t){if(t!==Y1)return!1;if(!X)return Bl(t),X=!0,!1;var l;if((l=t.tag!==3)&&!(l=t.tag!==5)&&(l=t.type,l=l!=="head"&&l!=="body"&&!o8(t.type,t.memoizedProps)),l&&(l=B1)){if(M8(t))throw Yt(),Error(y(418));for(;l;)$t(t,l),l=t5(l.nextSibling)}if(Bl(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(y(317));l:{for(t=t.nextSibling,l=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(l===0){B1=t5(t.nextSibling);break l}l--}else n!=="$"&&n!=="$!"&&n!=="$?"||l++}t=t.nextSibling}B1=null}}else B1=Y1?t5(t.stateNode.nextSibling):null;return!0}function Yt(){for(var t=B1;t;)t=t5(t.nextSibling)}function s2(){B1=Y1=null,X=!1}function Z9(t){o4===null?o4=[t]:o4.push(t)}var Da=A4.ReactCurrentBatchConfig;function P2(t,l,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,t));var L=r,a=""+t;return l!==null&&l.ref!==null&&typeof l.ref=="function"&&l.ref._stringRef===a?l.ref:(l=function(e){var i=L.refs;e===null?delete i[a]:i[a]=e},l._stringRef=a,l)}if(typeof t!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,t))}return t}function $3(t,l){throw t=Object.prototype.toString.call(l),Error(y(31,t==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":t))}function Wl(t){var l=t._init;return l(t._payload)}function Qt(t){function l(s,p){if(t){var k=s.deletions;k===null?(s.deletions=[p],s.flags|=16):k.push(p)}}function n(s,p){if(!t)return null;for(;p!==null;)l(s,p),p=p.sibling;return null}function r(s,p){for(s=new Map;p!==null;)p.key!==null?s.set(p.key,p):s.set(p.index,p),p=p.sibling;return s}function L(s,p){return s=a5(s,p),s.index=0,s.sibling=null,s}function a(s,p,k){return s.index=k,t?(k=s.alternate,k!==null?(k=k.index,k<p?(s.flags|=2,p):k):(s.flags|=2,p)):(s.flags|=1048576,p)}function e(s){return t&&s.alternate===null&&(s.flags|=2),s}function i(s,p,k,b){return p===null||p.tag!==6?(p=P7(k,s.mode,b),p.return=s,p):(p=L(p,k),p.return=s,p)}function f(s,p,k,b){var V=k.type;return V===W5?d(s,p,k.props.children,b,k.key):p!==null&&(p.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===j4&&Wl(V)===p.type)?(b=L(p,k.props),b.ref=P2(s,p,k),b.return=s,b):(b=c6(k.type,k.key,k.props,null,s.mode,b),b.ref=P2(s,p,k),b.return=s,b)}function c(s,p,k,b){return p===null||p.tag!==4||p.stateNode.containerInfo!==k.containerInfo||p.stateNode.implementation!==k.implementation?(p=O7(k,s.mode,b),p.return=s,p):(p=L(p,k.children||[]),p.return=s,p)}function d(s,p,k,b,V){return p===null||p.tag!==7?(p=S5(k,s.mode,b,V),p.return=s,p):(p=L(p,k),p.return=s,p)}function h(s,p,k){if(typeof p=="string"&&p!==""||typeof p=="number")return p=P7(""+p,s.mode,k),p.return=s,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case z3:return k=c6(p.type,p.key,p.props,null,s.mode,k),k.ref=P2(s,null,p),k.return=s,k;case B5:return p=O7(p,s.mode,k),p.return=s,p;case j4:var b=p._init;return h(s,b(p._payload),k)}if(D2(p)||C2(p))return p=S5(p,s.mode,k,null),p.return=s,p;$3(s,p)}return null}function o(s,p,k,b){var V=p!==null?p.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return V!==null?null:i(s,p,""+k,b);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case z3:return k.key===V?f(s,p,k,b):null;case B5:return k.key===V?c(s,p,k,b):null;case j4:return V=k._init,o(s,p,V(k._payload),b)}if(D2(k)||C2(k))return V!==null?null:d(s,p,k,b,null);$3(s,k)}return null}function M(s,p,k,b,V){if(typeof b=="string"&&b!==""||typeof b=="number")return s=s.get(k)||null,i(p,s,""+b,V);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case z3:return s=s.get(b.key===null?k:b.key)||null,f(p,s,b,V);case B5:return s=s.get(b.key===null?k:b.key)||null,c(p,s,b,V);case j4:var g=b._init;return M(s,p,k,g(b._payload),V)}if(D2(b)||C2(b))return s=s.get(k)||null,d(p,s,b,V,null);$3(p,b)}return null}function Z(s,p,k,b){for(var V=null,g=null,_=p,H=p=0,v=null;_!==null&&H<k.length;H++){_.index>H?(v=_,_=null):v=_.sibling;var w=o(s,_,k[H],b);if(w===null){_===null&&(_=v);break}t&&_&&w.alternate===null&&l(s,_),p=a(w,p,H),g===null?V=w:g.sibling=w,g=w,_=v}if(H===k.length)return n(s,_),X&&H5(s,H),V;if(_===null){for(;H<k.length;H++)_=h(s,k[H],b),_!==null&&(p=a(_,p,H),g===null?V=_:g.sibling=_,g=_);return X&&H5(s,H),V}for(_=r(s,_);H<k.length;H++)v=M(_,s,H,k[H],b),v!==null&&(t&&v.alternate!==null&&_.delete(v.key===null?H:v.key),p=a(v,p,H),g===null?V=v:g.sibling=v,g=v);return t&&_.forEach(function(E){return l(s,E)}),X&&H5(s,H),V}function u(s,p,k,b){var V=C2(k);if(typeof V!="function")throw Error(y(150));if(k=V.call(k),k==null)throw Error(y(151));for(var g=V=null,_=p,H=p=0,v=null,w=k.next();_!==null&&!w.done;H++,w=k.next()){_.index>H?(v=_,_=null):v=_.sibling;var E=o(s,_,w.value,b);if(E===null){_===null&&(_=v);break}t&&_&&E.alternate===null&&l(s,_),p=a(E,p,H),g===null?V=E:g.sibling=E,g=E,_=v}if(w.done)return n(s,_),X&&H5(s,H),V;if(_===null){for(;!w.done;H++,w=k.next())w=h(s,w.value,b),w!==null&&(p=a(w,p,H),g===null?V=w:g.sibling=w,g=w);return X&&H5(s,H),V}for(_=r(s,_);!w.done;H++,w=k.next())w=M(_,s,H,w.value,b),w!==null&&(t&&w.alternate!==null&&_.delete(w.key===null?H:w.key),p=a(w,p,H),g===null?V=w:g.sibling=w,g=w);return t&&_.forEach(function(R){return l(s,R)}),X&&H5(s,H),V}function m(s,p,k,b){if(typeof k=="object"&&k!==null&&k.type===W5&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case z3:l:{for(var V=k.key,g=p;g!==null;){if(g.key===V){if(V=k.type,V===W5){if(g.tag===7){n(s,g.sibling),p=L(g,k.props.children),p.return=s,s=p;break l}}else if(g.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===j4&&Wl(V)===g.type){n(s,g.sibling),p=L(g,k.props),p.ref=P2(s,g,k),p.return=s,s=p;break l}n(s,g);break}else l(s,g);g=g.sibling}k.type===W5?(p=S5(k.props.children,s.mode,b,k.key),p.return=s,s=p):(b=c6(k.type,k.key,k.props,null,s.mode,b),b.ref=P2(s,p,k),b.return=s,s=b)}return e(s);case B5:l:{for(g=k.key;p!==null;){if(p.key===g)if(p.tag===4&&p.stateNode.containerInfo===k.containerInfo&&p.stateNode.implementation===k.implementation){n(s,p.sibling),p=L(p,k.children||[]),p.return=s,s=p;break l}else{n(s,p);break}else l(s,p);p=p.sibling}p=O7(k,s.mode,b),p.return=s,s=p}return e(s);case j4:return g=k._init,m(s,p,g(k._payload),b)}if(D2(k))return Z(s,p,k,b);if(C2(k))return u(s,p,k,b);$3(s,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,p!==null&&p.tag===6?(n(s,p.sibling),p=L(p,k),p.return=s,s=p):(n(s,p),p=P7(k,s.mode,b),p.return=s,s=p),e(s)):n(s,p)}return m}var k2=Qt(!0),Xt=Qt(!1),y6=u5(null),w6=null,J5=null,b9=null;function V9(){b9=J5=w6=null}function H9(t){var l=y6.current;Q(y6),t._currentValue=l}function b8(t,l,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&l)!==l?(t.childLanes|=l,r!==null&&(r.childLanes|=l)):r!==null&&(r.childLanes&l)!==l&&(r.childLanes|=l),t===n)break;t=t.return}}function f2(t,l){w6=t,b9=J5=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&l&&(E1=!0),t.firstContext=null)}function i4(t){var l=t._currentValue;if(b9!==t)if(t={context:t,memoizedValue:l,next:null},J5===null){if(w6===null)throw Error(y(308));J5=t,w6.dependencies={lanes:0,firstContext:t}}else J5=J5.next=t;return l}var v5=null;function m9(t){v5===null?v5=[t]:v5.push(t)}function Kt(t,l,n,r){var L=l.interleaved;return L===null?(n.next=n,m9(l)):(n.next=L.next,L.next=n),l.interleaved=n,N4(t,r)}function N4(t,l){t.lanes|=l;var n=t.alternate;for(n!==null&&(n.lanes|=l),n=t,t=t.return;t!==null;)t.childLanes|=l,n=t.alternate,n!==null&&(n.childLanes|=l),n=t,t=t.return;return n.tag===3?n.stateNode:null}var B4=!1;function _9(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gt(t,l){t=t.updateQueue,l.updateQueue===t&&(l.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function O4(t,l){return{eventTime:t,lane:l,tag:0,payload:null,callback:null,next:null}}function n5(t,l,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,N&2){var L=r.pending;return L===null?l.next=l:(l.next=L.next,L.next=l),r.pending=l,N4(t,n)}return L=r.interleaved,L===null?(l.next=l,m9(r)):(l.next=L.next,L.next=l),r.interleaved=l,N4(t,n)}function r6(t,l,n){if(l=l.updateQueue,l!==null&&(l=l.shared,(n&4194240)!==0)){var r=l.lanes;r&=t.pendingLanes,n|=r,l.lanes=n,f9(t,n)}}function $l(t,l){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var L=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var e={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?L=a=e:a=a.next=e,n=n.next}while(n!==null);a===null?L=a=l:a=a.next=l}else L=a=l;n={baseState:r.baseState,firstBaseUpdate:L,lastBaseUpdate:a,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=l:t.next=l,n.lastBaseUpdate=l}function C6(t,l,n,r){var L=t.updateQueue;B4=!1;var a=L.firstBaseUpdate,e=L.lastBaseUpdate,i=L.shared.pending;if(i!==null){L.shared.pending=null;var f=i,c=f.next;f.next=null,e===null?a=c:e.next=c,e=f;var d=t.alternate;d!==null&&(d=d.updateQueue,i=d.lastBaseUpdate,i!==e&&(i===null?d.firstBaseUpdate=c:i.next=c,d.lastBaseUpdate=f))}if(a!==null){var h=L.baseState;e=0,d=c=f=null,i=a;do{var o=i.lane,M=i.eventTime;if((r&o)===o){d!==null&&(d=d.next={eventTime:M,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});l:{var Z=t,u=i;switch(o=l,M=n,u.tag){case 1:if(Z=u.payload,typeof Z=="function"){h=Z.call(M,h,o);break l}h=Z;break l;case 3:Z.flags=Z.flags&-65537|128;case 0:if(Z=u.payload,o=typeof Z=="function"?Z.call(M,h,o):Z,o==null)break l;h=n1({},h,o);break l;case 2:B4=!0}}i.callback!==null&&i.lane!==0&&(t.flags|=64,o=L.effects,o===null?L.effects=[i]:o.push(i))}else M={eventTime:M,lane:o,tag:i.tag,payload:i.payload,callback:i.callback,next:null},d===null?(c=d=M,f=h):d=d.next=M,e|=o;if(i=i.next,i===null){if(i=L.shared.pending,i===null)break;o=i,i=o.next,o.next=null,L.lastBaseUpdate=o,L.shared.pending=null}}while(!0);if(d===null&&(f=h),L.baseState=f,L.firstBaseUpdate=c,L.lastBaseUpdate=d,l=L.shared.interleaved,l!==null){L=l;do e|=L.lane,L=L.next;while(L!==l)}else a===null&&(L.shared.lanes=0);N5|=e,t.lanes=e,t.memoizedState=h}}function Yl(t,l,n){if(t=l.effects,l.effects=null,t!==null)for(l=0;l<t.length;l++){var r=t[l],L=r.callback;if(L!==null){if(r.callback=null,r=n,typeof L!="function")throw Error(y(191,L));L.call(r)}}}var T3={},v4=u5(T3),o3=u5(T3),u3=u5(T3);function y5(t){if(t===T3)throw Error(y(174));return t}function g9(t,l){switch($(u3,l),$(o3,t),$(v4,T3),t=l.nodeType,t){case 9:case 11:l=(l=l.documentElement)?l.namespaceURI:J7(null,"");break;default:t=t===8?l.parentNode:l,l=t.namespaceURI||null,t=t.tagName,l=J7(l,t)}Q(v4),$(v4,l)}function M2(){Q(v4),Q(o3),Q(u3)}function qt(t){y5(u3.current);var l=y5(v4.current),n=J7(l,t.type);l!==n&&($(o3,t),$(v4,n))}function v9(t){o3.current===t&&(Q(v4),Q(o3))}var q=u5(0);function S6(t){for(var l=t;l!==null;){if(l.tag===13){var n=l.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return l}else if(l.tag===19&&l.memoizedProps.revealOrder!==void 0){if(l.flags&128)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var w7=[];function y9(){for(var t=0;t<w7.length;t++)w7[t]._workInProgressVersionPrimary=null;w7.length=0}var L6=A4.ReactCurrentDispatcher,C7=A4.ReactCurrentBatchConfig,R5=0,t1=null,d1=null,h1=null,x6=!1,X2=!1,s3=0,Fa=0;function V1(){throw Error(y(321))}function w9(t,l){if(l===null)return!1;for(var n=0;n<l.length&&n<t.length;n++)if(!k4(t[n],l[n]))return!1;return!0}function C9(t,l,n,r,L,a){if(R5=a,t1=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,L6.current=t===null||t.memoizedState===null?ja:Ba,t=n(r,L),X2){a=0;do{if(X2=!1,s3=0,25<=a)throw Error(y(301));a+=1,h1=d1=null,l.updateQueue=null,L6.current=Wa,t=n(r,L)}while(X2)}if(L6.current=T6,l=d1!==null&&d1.next!==null,R5=0,h1=d1=t1=null,x6=!1,l)throw Error(y(300));return t}function S9(){var t=s3!==0;return s3=0,t}function Z4(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return h1===null?t1.memoizedState=h1=t:h1=h1.next=t,h1}function f4(){if(d1===null){var t=t1.alternate;t=t!==null?t.memoizedState:null}else t=d1.next;var l=h1===null?t1.memoizedState:h1.next;if(l!==null)h1=l,d1=t;else{if(t===null)throw Error(y(310));d1=t,t={memoizedState:d1.memoizedState,baseState:d1.baseState,baseQueue:d1.baseQueue,queue:d1.queue,next:null},h1===null?t1.memoizedState=h1=t:h1=h1.next=t}return h1}function k3(t,l){return typeof l=="function"?l(t):l}function S7(t){var l=f4(),n=l.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=t;var r=d1,L=r.baseQueue,a=n.pending;if(a!==null){if(L!==null){var e=L.next;L.next=a.next,a.next=e}r.baseQueue=L=a,n.pending=null}if(L!==null){a=L.next,r=r.baseState;var i=e=null,f=null,c=a;do{var d=c.lane;if((R5&d)===d)f!==null&&(f=f.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};f===null?(i=f=h,e=r):f=f.next=h,t1.lanes|=d,N5|=d}c=c.next}while(c!==null&&c!==a);f===null?e=r:f.next=i,k4(r,l.memoizedState)||(E1=!0),l.memoizedState=r,l.baseState=e,l.baseQueue=f,n.lastRenderedState=r}if(t=n.interleaved,t!==null){L=t;do a=L.lane,t1.lanes|=a,N5|=a,L=L.next;while(L!==t)}else L===null&&(n.lanes=0);return[l.memoizedState,n.dispatch]}function x7(t){var l=f4(),n=l.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=t;var r=n.dispatch,L=n.pending,a=l.memoizedState;if(L!==null){n.pending=null;var e=L=L.next;do a=t(a,e.action),e=e.next;while(e!==L);k4(a,l.memoizedState)||(E1=!0),l.memoizedState=a,l.baseQueue===null&&(l.baseState=a),n.lastRenderedState=a}return[a,r]}function Jt(){}function ln(t,l){var n=t1,r=f4(),L=l(),a=!k4(r.memoizedState,L);if(a&&(r.memoizedState=L,E1=!0),r=r.queue,x9(rn.bind(null,n,r,t),[t]),r.getSnapshot!==l||a||h1!==null&&h1.memoizedState.tag&1){if(n.flags|=2048,M3(9,nn.bind(null,n,r,L,l),void 0,null),o1===null)throw Error(y(349));R5&30||tn(n,l,L)}return L}function tn(t,l,n){t.flags|=16384,t={getSnapshot:l,value:n},l=t1.updateQueue,l===null?(l={lastEffect:null,stores:null},t1.updateQueue=l,l.stores=[t]):(n=l.stores,n===null?l.stores=[t]:n.push(t))}function nn(t,l,n,r){l.value=n,l.getSnapshot=r,Ln(l)&&an(t)}function rn(t,l,n){return n(function(){Ln(l)&&an(t)})}function Ln(t){var l=t.getSnapshot;t=t.value;try{var n=l();return!k4(t,n)}catch{return!0}}function an(t){var l=N4(t,1);l!==null&&s4(l,t,1,-1)}function Ql(t){var l=Z4();return typeof t=="function"&&(t=t()),l.memoizedState=l.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:k3,lastRenderedState:t},l.queue=t,t=t.dispatch=Ua.bind(null,t1,t),[l.memoizedState,t]}function M3(t,l,n,r){return t={tag:t,create:l,destroy:n,deps:r,next:null},l=t1.updateQueue,l===null?(l={lastEffect:null,stores:null},t1.updateQueue=l,l.lastEffect=t.next=t):(n=l.lastEffect,n===null?l.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,l.lastEffect=t)),t}function en(){return f4().memoizedState}function a6(t,l,n,r){var L=Z4();t1.flags|=t,L.memoizedState=M3(1|l,n,void 0,r===void 0?null:r)}function G6(t,l,n,r){var L=f4();r=r===void 0?null:r;var a=void 0;if(d1!==null){var e=d1.memoizedState;if(a=e.destroy,r!==null&&w9(r,e.deps)){L.memoizedState=M3(l,n,a,r);return}}t1.flags|=t,L.memoizedState=M3(1|l,n,a,r)}function Xl(t,l){return a6(8390656,8,t,l)}function x9(t,l){return G6(2048,8,t,l)}function fn(t,l){return G6(4,2,t,l)}function cn(t,l){return G6(4,4,t,l)}function dn(t,l){if(typeof l=="function")return t=t(),l(t),function(){l(null)};if(l!=null)return t=t(),l.current=t,function(){l.current=null}}function pn(t,l,n){return n=n!=null?n.concat([t]):null,G6(4,4,dn.bind(null,l,t),n)}function T9(){}function hn(t,l){var n=f4();l=l===void 0?null:l;var r=n.memoizedState;return r!==null&&l!==null&&w9(l,r[1])?r[0]:(n.memoizedState=[t,l],t)}function on(t,l){var n=f4();l=l===void 0?null:l;var r=n.memoizedState;return r!==null&&l!==null&&w9(l,r[1])?r[0]:(t=t(),n.memoizedState=[t,l],t)}function un(t,l,n){return R5&21?(k4(n,l)||(n=Zt(),t1.lanes|=n,N5|=n,t.baseState=!0),l):(t.baseState&&(t.baseState=!1,E1=!0),t.memoizedState=n)}function Ia(t,l){var n=F;F=n!==0&&4>n?n:4,t(!0);var r=C7.transition;C7.transition={};try{t(!1),l()}finally{F=n,C7.transition=r}}function sn(){return f4().memoizedState}function Aa(t,l,n){var r=L5(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kn(t))Mn(l,n);else if(n=Kt(t,l,n,r),n!==null){var L=w1();s4(n,t,r,L),Zn(n,l,r)}}function Ua(t,l,n){var r=L5(t),L={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kn(t))Mn(l,L);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=l.lastRenderedReducer,a!==null))try{var e=l.lastRenderedState,i=a(e,n);if(L.hasEagerState=!0,L.eagerState=i,k4(i,e)){var f=l.interleaved;f===null?(L.next=L,m9(l)):(L.next=f.next,f.next=L),l.interleaved=L;return}}catch{}finally{}n=Kt(t,l,L,r),n!==null&&(L=w1(),s4(n,t,r,L),Zn(n,l,r))}}function kn(t){var l=t.alternate;return t===t1||l!==null&&l===t1}function Mn(t,l){X2=x6=!0;var n=t.pending;n===null?l.next=l:(l.next=n.next,n.next=l),t.pending=l}function Zn(t,l,n){if(n&4194240){var r=l.lanes;r&=t.pendingLanes,n|=r,l.lanes=n,f9(t,n)}}var T6={readContext:i4,useCallback:V1,useContext:V1,useEffect:V1,useImperativeHandle:V1,useInsertionEffect:V1,useLayoutEffect:V1,useMemo:V1,useReducer:V1,useRef:V1,useState:V1,useDebugValue:V1,useDeferredValue:V1,useTransition:V1,useMutableSource:V1,useSyncExternalStore:V1,useId:V1,unstable_isNewReconciler:!1},ja={readContext:i4,useCallback:function(t,l){return Z4().memoizedState=[t,l===void 0?null:l],t},useContext:i4,useEffect:Xl,useImperativeHandle:function(t,l,n){return n=n!=null?n.concat([t]):null,a6(4194308,4,dn.bind(null,l,t),n)},useLayoutEffect:function(t,l){return a6(4194308,4,t,l)},useInsertionEffect:function(t,l){return a6(4,2,t,l)},useMemo:function(t,l){var n=Z4();return l=l===void 0?null:l,t=t(),n.memoizedState=[t,l],t},useReducer:function(t,l,n){var r=Z4();return l=n!==void 0?n(l):l,r.memoizedState=r.baseState=l,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Aa.bind(null,t1,t),[r.memoizedState,t]},useRef:function(t){var l=Z4();return t={current:t},l.memoizedState=t},useState:Ql,useDebugValue:T9,useDeferredValue:function(t){return Z4().memoizedState=t},useTransition:function(){var t=Ql(!1),l=t[0];return t=Ia.bind(null,t[1]),Z4().memoizedState=t,[l,t]},useMutableSource:function(){},useSyncExternalStore:function(t,l,n){var r=t1,L=Z4();if(X){if(n===void 0)throw Error(y(407));n=n()}else{if(n=l(),o1===null)throw Error(y(349));R5&30||tn(r,l,n)}L.memoizedState=n;var a={value:n,getSnapshot:l};return L.queue=a,Xl(rn.bind(null,r,a,t),[t]),r.flags|=2048,M3(9,nn.bind(null,r,a,n,l),void 0,null),n},useId:function(){var t=Z4(),l=o1.identifierPrefix;if(X){var n=P4,r=E4;n=(r&~(1<<32-u4(r)-1)).toString(32)+n,l=":"+l+"R"+n,n=s3++,0<n&&(l+="H"+n.toString(32)),l+=":"}else n=Fa++,l=":"+l+"r"+n.toString(32)+":";return t.memoizedState=l},unstable_isNewReconciler:!1},Ba={readContext:i4,useCallback:hn,useContext:i4,useEffect:x9,useImperativeHandle:pn,useInsertionEffect:fn,useLayoutEffect:cn,useMemo:on,useReducer:S7,useRef:en,useState:function(){return S7(k3)},useDebugValue:T9,useDeferredValue:function(t){var l=f4();return un(l,d1.memoizedState,t)},useTransition:function(){var t=S7(k3)[0],l=f4().memoizedState;return[t,l]},useMutableSource:Jt,useSyncExternalStore:ln,useId:sn,unstable_isNewReconciler:!1},Wa={readContext:i4,useCallback:hn,useContext:i4,useEffect:x9,useImperativeHandle:pn,useInsertionEffect:fn,useLayoutEffect:cn,useMemo:on,useReducer:x7,useRef:en,useState:function(){return x7(k3)},useDebugValue:T9,useDeferredValue:function(t){var l=f4();return d1===null?l.memoizedState=t:un(l,d1.memoizedState,t)},useTransition:function(){var t=x7(k3)[0],l=f4().memoizedState;return[t,l]},useMutableSource:Jt,useSyncExternalStore:ln,useId:sn,unstable_isNewReconciler:!1};function p4(t,l){if(t&&t.defaultProps){l=n1({},l),t=t.defaultProps;for(var n in t)l[n]===void 0&&(l[n]=t[n]);return l}return l}function V8(t,l,n,r){l=t.memoizedState,n=n(r,l),n=n==null?l:n1({},l,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var q6={isMounted:function(t){return(t=t._reactInternals)?I5(t)===t:!1},enqueueSetState:function(t,l,n){t=t._reactInternals;var r=w1(),L=L5(t),a=O4(r,L);a.payload=l,n!=null&&(a.callback=n),l=n5(t,a,L),l!==null&&(s4(l,t,L,r),r6(l,t,L))},enqueueReplaceState:function(t,l,n){t=t._reactInternals;var r=w1(),L=L5(t),a=O4(r,L);a.tag=1,a.payload=l,n!=null&&(a.callback=n),l=n5(t,a,L),l!==null&&(s4(l,t,L,r),r6(l,t,L))},enqueueForceUpdate:function(t,l){t=t._reactInternals;var n=w1(),r=L5(t),L=O4(n,r);L.tag=2,l!=null&&(L.callback=l),l=n5(t,L,r),l!==null&&(s4(l,t,r,n),r6(l,t,r))}};function Kl(t,l,n,r,L,a,e){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,a,e):l.prototype&&l.prototype.isPureReactComponent?!c3(n,r)||!c3(L,a):!0}function bn(t,l,n){var r=!1,L=c5,a=l.contextType;return typeof a=="object"&&a!==null?a=i4(a):(L=O1(l)?O5:v1.current,r=l.contextTypes,a=(r=r!=null)?u2(t,L):c5),l=new l(n,a),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=q6,t.stateNode=l,l._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=L,t.__reactInternalMemoizedMaskedChildContext=a),l}function Gl(t,l,n,r){t=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(n,r),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(n,r),l.state!==t&&q6.enqueueReplaceState(l,l.state,null)}function H8(t,l,n,r){var L=t.stateNode;L.props=n,L.state=t.memoizedState,L.refs={},_9(t);var a=l.contextType;typeof a=="object"&&a!==null?L.context=i4(a):(a=O1(l)?O5:v1.current,L.context=u2(t,a)),L.state=t.memoizedState,a=l.getDerivedStateFromProps,typeof a=="function"&&(V8(t,l,a,n),L.state=t.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof L.getSnapshotBeforeUpdate=="function"||typeof L.UNSAFE_componentWillMount!="function"&&typeof L.componentWillMount!="function"||(l=L.state,typeof L.componentWillMount=="function"&&L.componentWillMount(),typeof L.UNSAFE_componentWillMount=="function"&&L.UNSAFE_componentWillMount(),l!==L.state&&q6.enqueueReplaceState(L,L.state,null),C6(t,n,L,r),L.state=t.memoizedState),typeof L.componentDidMount=="function"&&(t.flags|=4194308)}function Z2(t,l){try{var n="",r=l;do n+=bL(r),r=r.return;while(r);var L=n}catch(a){L=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:l,stack:L,digest:null}}function T7(t,l,n){return{value:t,source:null,stack:n??null,digest:l??null}}function m8(t,l){try{console.error(l.value)}catch(n){setTimeout(function(){throw n})}}var $a=typeof WeakMap=="function"?WeakMap:Map;function Vn(t,l,n){n=O4(-1,n),n.tag=3,n.payload={element:null};var r=l.value;return n.callback=function(){P6||(P6=!0,E8=r),m8(t,l)},n}function Hn(t,l,n){n=O4(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var L=l.value;n.payload=function(){return r(L)},n.callback=function(){m8(t,l)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){m8(t,l),typeof r!="function"&&(r5===null?r5=new Set([this]):r5.add(this));var e=l.stack;this.componentDidCatch(l.value,{componentStack:e!==null?e:""})}),n}function ql(t,l,n){var r=t.pingCache;if(r===null){r=t.pingCache=new $a;var L=new Set;r.set(l,L)}else L=r.get(l),L===void 0&&(L=new Set,r.set(l,L));L.has(n)||(L.add(n),t=ee.bind(null,t,l,n),l.then(t,t))}function Jl(t){do{var l;if((l=t.tag===13)&&(l=t.memoizedState,l=l!==null?l.dehydrated!==null:!0),l)return t;t=t.return}while(t!==null);return null}function l0(t,l,n,r,L){return t.mode&1?(t.flags|=65536,t.lanes=L,t):(t===l?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(l=O4(-1,1),l.tag=2,n5(n,l,1))),n.lanes|=1),t)}var Ya=A4.ReactCurrentOwner,E1=!1;function y1(t,l,n,r){l.child=t===null?Xt(l,null,n,r):k2(l,t.child,n,r)}function t0(t,l,n,r,L){n=n.render;var a=l.ref;return f2(l,L),r=C9(t,l,n,r,a,L),n=S9(),t!==null&&!E1?(l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~L,D4(t,l,L)):(X&&n&&k9(l),l.flags|=1,y1(t,l,r,L),l.child)}function n0(t,l,n,r,L){if(t===null){var a=n.type;return typeof a=="function"&&!F9(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(l.tag=15,l.type=a,mn(t,l,a,r,L)):(t=c6(n.type,null,r,l,l.mode,L),t.ref=l.ref,t.return=l,l.child=t)}if(a=t.child,!(t.lanes&L)){var e=a.memoizedProps;if(n=n.compare,n=n!==null?n:c3,n(e,r)&&t.ref===l.ref)return D4(t,l,L)}return l.flags|=1,t=a5(a,r),t.ref=l.ref,t.return=l,l.child=t}function mn(t,l,n,r,L){if(t!==null){var a=t.memoizedProps;if(c3(a,r)&&t.ref===l.ref)if(E1=!1,l.pendingProps=r=a,(t.lanes&L)!==0)t.flags&131072&&(E1=!0);else return l.lanes=t.lanes,D4(t,l,L)}return _8(t,l,n,r,L)}function _n(t,l,n){var r=l.pendingProps,L=r.children,a=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(l.mode&1))l.memoizedState={baseLanes:0,cachePool:null,transitions:null},$(t2,A1),A1|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,l.lanes=l.childLanes=1073741824,l.memoizedState={baseLanes:t,cachePool:null,transitions:null},l.updateQueue=null,$(t2,A1),A1|=t,null;l.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,$(t2,A1),A1|=r}else a!==null?(r=a.baseLanes|n,l.memoizedState=null):r=n,$(t2,A1),A1|=r;return y1(t,l,L,n),l.child}function gn(t,l){var n=l.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(l.flags|=512,l.flags|=2097152)}function _8(t,l,n,r,L){var a=O1(n)?O5:v1.current;return a=u2(l,a),f2(l,L),n=C9(t,l,n,r,a,L),r=S9(),t!==null&&!E1?(l.updateQueue=t.updateQueue,l.flags&=-2053,t.lanes&=~L,D4(t,l,L)):(X&&r&&k9(l),l.flags|=1,y1(t,l,n,L),l.child)}function r0(t,l,n,r,L){if(O1(n)){var a=!0;_6(l)}else a=!1;if(f2(l,L),l.stateNode===null)e6(t,l),bn(l,n,r),H8(l,n,r,L),r=!0;else if(t===null){var e=l.stateNode,i=l.memoizedProps;e.props=i;var f=e.context,c=n.contextType;typeof c=="object"&&c!==null?c=i4(c):(c=O1(n)?O5:v1.current,c=u2(l,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof e.getSnapshotBeforeUpdate=="function";h||typeof e.UNSAFE_componentWillReceiveProps!="function"&&typeof e.componentWillReceiveProps!="function"||(i!==r||f!==c)&&Gl(l,e,r,c),B4=!1;var o=l.memoizedState;e.state=o,C6(l,r,e,L),f=l.memoizedState,i!==r||o!==f||P1.current||B4?(typeof d=="function"&&(V8(l,n,d,r),f=l.memoizedState),(i=B4||Kl(l,n,i,r,o,f,c))?(h||typeof e.UNSAFE_componentWillMount!="function"&&typeof e.componentWillMount!="function"||(typeof e.componentWillMount=="function"&&e.componentWillMount(),typeof e.UNSAFE_componentWillMount=="function"&&e.UNSAFE_componentWillMount()),typeof e.componentDidMount=="function"&&(l.flags|=4194308)):(typeof e.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=r,l.memoizedState=f),e.props=r,e.state=f,e.context=c,r=i):(typeof e.componentDidMount=="function"&&(l.flags|=4194308),r=!1)}else{e=l.stateNode,Gt(t,l),i=l.memoizedProps,c=l.type===l.elementType?i:p4(l.type,i),e.props=c,h=l.pendingProps,o=e.context,f=n.contextType,typeof f=="object"&&f!==null?f=i4(f):(f=O1(n)?O5:v1.current,f=u2(l,f));var M=n.getDerivedStateFromProps;(d=typeof M=="function"||typeof e.getSnapshotBeforeUpdate=="function")||typeof e.UNSAFE_componentWillReceiveProps!="function"&&typeof e.componentWillReceiveProps!="function"||(i!==h||o!==f)&&Gl(l,e,r,f),B4=!1,o=l.memoizedState,e.state=o,C6(l,r,e,L);var Z=l.memoizedState;i!==h||o!==Z||P1.current||B4?(typeof M=="function"&&(V8(l,n,M,r),Z=l.memoizedState),(c=B4||Kl(l,n,c,r,o,Z,f)||!1)?(d||typeof e.UNSAFE_componentWillUpdate!="function"&&typeof e.componentWillUpdate!="function"||(typeof e.componentWillUpdate=="function"&&e.componentWillUpdate(r,Z,f),typeof e.UNSAFE_componentWillUpdate=="function"&&e.UNSAFE_componentWillUpdate(r,Z,f)),typeof e.componentDidUpdate=="function"&&(l.flags|=4),typeof e.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof e.componentDidUpdate!="function"||i===t.memoizedProps&&o===t.memoizedState||(l.flags|=4),typeof e.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&o===t.memoizedState||(l.flags|=1024),l.memoizedProps=r,l.memoizedState=Z),e.props=r,e.state=Z,e.context=f,r=c):(typeof e.componentDidUpdate!="function"||i===t.memoizedProps&&o===t.memoizedState||(l.flags|=4),typeof e.getSnapshotBeforeUpdate!="function"||i===t.memoizedProps&&o===t.memoizedState||(l.flags|=1024),r=!1)}return g8(t,l,n,r,a,L)}function g8(t,l,n,r,L,a){gn(t,l);var e=(l.flags&128)!==0;if(!r&&!e)return L&&Ul(l,n,!1),D4(t,l,a);r=l.stateNode,Ya.current=l;var i=e&&typeof n.getDerivedStateFromError!="function"?null:r.render();return l.flags|=1,t!==null&&e?(l.child=k2(l,t.child,null,a),l.child=k2(l,null,i,a)):y1(t,l,i,a),l.memoizedState=r.state,L&&Ul(l,n,!0),l.child}function vn(t){var l=t.stateNode;l.pendingContext?Al(t,l.pendingContext,l.pendingContext!==l.context):l.context&&Al(t,l.context,!1),g9(t,l.containerInfo)}function L0(t,l,n,r,L){return s2(),Z9(L),l.flags|=256,y1(t,l,n,r),l.child}var v8={dehydrated:null,treeContext:null,retryLane:0};function y8(t){return{baseLanes:t,cachePool:null,transitions:null}}function yn(t,l,n){var r=l.pendingProps,L=q.current,a=!1,e=(l.flags&128)!==0,i;if((i=e)||(i=t!==null&&t.memoizedState===null?!1:(L&2)!==0),i?(a=!0,l.flags&=-129):(t===null||t.memoizedState!==null)&&(L|=1),$(q,L&1),t===null)return Z8(l),t=l.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(l.mode&1?t.data==="$!"?l.lanes=8:l.lanes=1073741824:l.lanes=1,null):(e=r.children,t=r.fallback,a?(r=l.mode,a=l.child,e={mode:"hidden",children:e},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=e):a=t7(e,r,0,null),t=S5(t,r,n,null),a.return=l,t.return=l,a.sibling=t,l.child=a,l.child.memoizedState=y8(n),l.memoizedState=v8,t):E9(l,e));if(L=t.memoizedState,L!==null&&(i=L.dehydrated,i!==null))return Qa(t,l,e,r,i,L,n);if(a){a=r.fallback,e=l.mode,L=t.child,i=L.sibling;var f={mode:"hidden",children:r.children};return!(e&1)&&l.child!==L?(r=l.child,r.childLanes=0,r.pendingProps=f,l.deletions=null):(r=a5(L,f),r.subtreeFlags=L.subtreeFlags&14680064),i!==null?a=a5(i,a):(a=S5(a,e,n,null),a.flags|=2),a.return=l,r.return=l,r.sibling=a,l.child=r,r=a,a=l.child,e=t.child.memoizedState,e=e===null?y8(n):{baseLanes:e.baseLanes|n,cachePool:null,transitions:e.transitions},a.memoizedState=e,a.childLanes=t.childLanes&~n,l.memoizedState=v8,r}return a=t.child,t=a.sibling,r=a5(a,{mode:"visible",children:r.children}),!(l.mode&1)&&(r.lanes=n),r.return=l,r.sibling=null,t!==null&&(n=l.deletions,n===null?(l.deletions=[t],l.flags|=16):n.push(t)),l.child=r,l.memoizedState=null,r}function E9(t,l){return l=t7({mode:"visible",children:l},t.mode,0,null),l.return=t,t.child=l}function Y3(t,l,n,r){return r!==null&&Z9(r),k2(l,t.child,null,n),t=E9(l,l.pendingProps.children),t.flags|=2,l.memoizedState=null,t}function Qa(t,l,n,r,L,a,e){if(n)return l.flags&256?(l.flags&=-257,r=T7(Error(y(422))),Y3(t,l,e,r)):l.memoizedState!==null?(l.child=t.child,l.flags|=128,null):(a=r.fallback,L=l.mode,r=t7({mode:"visible",children:r.children},L,0,null),a=S5(a,L,e,null),a.flags|=2,r.return=l,a.return=l,r.sibling=a,l.child=r,l.mode&1&&k2(l,t.child,null,e),l.child.memoizedState=y8(e),l.memoizedState=v8,a);if(!(l.mode&1))return Y3(t,l,e,null);if(L.data==="$!"){if(r=L.nextSibling&&L.nextSibling.dataset,r)var i=r.dgst;return r=i,a=Error(y(419)),r=T7(a,r,void 0),Y3(t,l,e,r)}if(i=(e&t.childLanes)!==0,E1||i){if(r=o1,r!==null){switch(e&-e){case 4:L=2;break;case 16:L=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:L=32;break;case 536870912:L=268435456;break;default:L=0}L=L&(r.suspendedLanes|e)?0:L,L!==0&&L!==a.retryLane&&(a.retryLane=L,N4(t,L),s4(r,t,L,-1))}return D9(),r=T7(Error(y(421))),Y3(t,l,e,r)}return L.data==="$?"?(l.flags|=128,l.child=t.child,l=ie.bind(null,t),L._reactRetry=l,null):(t=a.treeContext,B1=t5(L.nextSibling),Y1=l,X=!0,o4=null,t!==null&&(t4[n4++]=E4,t4[n4++]=P4,t4[n4++]=z5,E4=t.id,P4=t.overflow,z5=l),l=E9(l,r.children),l.flags|=4096,l)}function a0(t,l,n){t.lanes|=l;var r=t.alternate;r!==null&&(r.lanes|=l),b8(t.return,l,n)}function E7(t,l,n,r,L){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:L}:(a.isBackwards=l,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=L)}function wn(t,l,n){var r=l.pendingProps,L=r.revealOrder,a=r.tail;if(y1(t,l,r.children,n),r=q.current,r&2)r=r&1|2,l.flags|=128;else{if(t!==null&&t.flags&128)l:for(t=l.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&a0(t,n,l);else if(t.tag===19)a0(t,n,l);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===l)break l;for(;t.sibling===null;){if(t.return===null||t.return===l)break l;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if($(q,r),!(l.mode&1))l.memoizedState=null;else switch(L){case"forwards":for(n=l.child,L=null;n!==null;)t=n.alternate,t!==null&&S6(t)===null&&(L=n),n=n.sibling;n=L,n===null?(L=l.child,l.child=null):(L=n.sibling,n.sibling=null),E7(l,!1,L,n,a);break;case"backwards":for(n=null,L=l.child,l.child=null;L!==null;){if(t=L.alternate,t!==null&&S6(t)===null){l.child=L;break}t=L.sibling,L.sibling=n,n=L,L=t}E7(l,!0,n,null,a);break;case"together":E7(l,!1,null,null,void 0);break;default:l.memoizedState=null}return l.child}function e6(t,l){!(l.mode&1)&&t!==null&&(t.alternate=null,l.alternate=null,l.flags|=2)}function D4(t,l,n){if(t!==null&&(l.dependencies=t.dependencies),N5|=l.lanes,!(n&l.childLanes))return null;if(t!==null&&l.child!==t.child)throw Error(y(153));if(l.child!==null){for(t=l.child,n=a5(t,t.pendingProps),l.child=n,n.return=l;t.sibling!==null;)t=t.sibling,n=n.sibling=a5(t,t.pendingProps),n.return=l;n.sibling=null}return l.child}function Xa(t,l,n){switch(l.tag){case 3:vn(l),s2();break;case 5:qt(l);break;case 1:O1(l.type)&&_6(l);break;case 4:g9(l,l.stateNode.containerInfo);break;case 10:var r=l.type._context,L=l.memoizedProps.value;$(y6,r._currentValue),r._currentValue=L;break;case 13:if(r=l.memoizedState,r!==null)return r.dehydrated!==null?($(q,q.current&1),l.flags|=128,null):n&l.child.childLanes?yn(t,l,n):($(q,q.current&1),t=D4(t,l,n),t!==null?t.sibling:null);$(q,q.current&1);break;case 19:if(r=(n&l.childLanes)!==0,t.flags&128){if(r)return wn(t,l,n);l.flags|=128}if(L=l.memoizedState,L!==null&&(L.rendering=null,L.tail=null,L.lastEffect=null),$(q,q.current),r)break;return null;case 22:case 23:return l.lanes=0,_n(t,l,n)}return D4(t,l,n)}var Cn,w8,Sn,xn;Cn=function(t,l){for(var n=l.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===l)break;for(;n.sibling===null;){if(n.return===null||n.return===l)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};w8=function(){};Sn=function(t,l,n,r){var L=t.memoizedProps;if(L!==r){t=l.stateNode,y5(v4.current);var a=null;switch(n){case"input":L=X7(t,L),r=X7(t,r),a=[];break;case"select":L=n1({},L,{value:void 0}),r=n1({},r,{value:void 0}),a=[];break;case"textarea":L=q7(t,L),r=q7(t,r),a=[];break;default:typeof L.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=H6)}l8(n,r);var e;n=null;for(c in L)if(!r.hasOwnProperty(c)&&L.hasOwnProperty(c)&&L[c]!=null)if(c==="style"){var i=L[c];for(e in i)i.hasOwnProperty(e)&&(n||(n={}),n[e]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(n3.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in r){var f=r[c];if(i=L!=null?L[c]:void 0,r.hasOwnProperty(c)&&f!==i&&(f!=null||i!=null))if(c==="style")if(i){for(e in i)!i.hasOwnProperty(e)||f&&f.hasOwnProperty(e)||(n||(n={}),n[e]="");for(e in f)f.hasOwnProperty(e)&&i[e]!==f[e]&&(n||(n={}),n[e]=f[e])}else n||(a||(a=[]),a.push(c,n)),n=f;else c==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,i=i?i.__html:void 0,f!=null&&i!==f&&(a=a||[]).push(c,f)):c==="children"?typeof f!="string"&&typeof f!="number"||(a=a||[]).push(c,""+f):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(n3.hasOwnProperty(c)?(f!=null&&c==="onScroll"&&Y("scroll",t),a||i===f||(a=[])):(a=a||[]).push(c,f))}n&&(a=a||[]).push("style",n);var c=a;(l.updateQueue=c)&&(l.flags|=4)}};xn=function(t,l,n,r){n!==r&&(l.flags|=4)};function O2(t,l){if(!X)switch(t.tailMode){case"hidden":l=t.tail;for(var n=null;l!==null;)l.alternate!==null&&(n=l),l=l.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?l||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function H1(t){var l=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(l)for(var L=t.child;L!==null;)n|=L.lanes|L.childLanes,r|=L.subtreeFlags&14680064,r|=L.flags&14680064,L.return=t,L=L.sibling;else for(L=t.child;L!==null;)n|=L.lanes|L.childLanes,r|=L.subtreeFlags,r|=L.flags,L.return=t,L=L.sibling;return t.subtreeFlags|=r,t.childLanes=n,l}function Ka(t,l,n){var r=l.pendingProps;switch(M9(l),l.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return H1(l),null;case 1:return O1(l.type)&&m6(),H1(l),null;case 3:return r=l.stateNode,M2(),Q(P1),Q(v1),y9(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(W3(l)?l.flags|=4:t===null||t.memoizedState.isDehydrated&&!(l.flags&256)||(l.flags|=1024,o4!==null&&(z8(o4),o4=null))),w8(t,l),H1(l),null;case 5:v9(l);var L=y5(u3.current);if(n=l.type,t!==null&&l.stateNode!=null)Sn(t,l,n,r,L),t.ref!==l.ref&&(l.flags|=512,l.flags|=2097152);else{if(!r){if(l.stateNode===null)throw Error(y(166));return H1(l),null}if(t=y5(v4.current),W3(l)){r=l.stateNode,n=l.type;var a=l.memoizedProps;switch(r[H4]=l,r[h3]=a,t=(l.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(L=0;L<I2.length;L++)Y(I2[L],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":ul(r,a),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},Y("invalid",r);break;case"textarea":kl(r,a),Y("invalid",r)}l8(n,a),L=null;for(var e in a)if(a.hasOwnProperty(e)){var i=a[e];e==="children"?typeof i=="string"?r.textContent!==i&&(a.suppressHydrationWarning!==!0&&B3(r.textContent,i,t),L=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(a.suppressHydrationWarning!==!0&&B3(r.textContent,i,t),L=["children",""+i]):n3.hasOwnProperty(e)&&i!=null&&e==="onScroll"&&Y("scroll",r)}switch(n){case"input":R3(r),sl(r,a,!0);break;case"textarea":R3(r),Ml(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=H6)}r=L,l.updateQueue=r,r!==null&&(l.flags|=4)}else{e=L.nodeType===9?L:L.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rt(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=e.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=e.createElement(n,{is:r.is}):(t=e.createElement(n),n==="select"&&(e=t,r.multiple?e.multiple=!0:r.size&&(e.size=r.size))):t=e.createElementNS(t,n),t[H4]=l,t[h3]=r,Cn(t,l,!1,!1),l.stateNode=t;l:{switch(e=t8(n,r),n){case"dialog":Y("cancel",t),Y("close",t),L=r;break;case"iframe":case"object":case"embed":Y("load",t),L=r;break;case"video":case"audio":for(L=0;L<I2.length;L++)Y(I2[L],t);L=r;break;case"source":Y("error",t),L=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),L=r;break;case"details":Y("toggle",t),L=r;break;case"input":ul(t,r),L=X7(t,r),Y("invalid",t);break;case"option":L=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},L=n1({},r,{value:void 0}),Y("invalid",t);break;case"textarea":kl(t,r),L=q7(t,r),Y("invalid",t);break;default:L=r}l8(n,L),i=L;for(a in i)if(i.hasOwnProperty(a)){var f=i[a];a==="style"?et(t,f):a==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Lt(t,f)):a==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&r3(t,f):typeof f=="number"&&r3(t,""+f):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(n3.hasOwnProperty(a)?f!=null&&a==="onScroll"&&Y("scroll",t):f!=null&&n9(t,a,f,e))}switch(n){case"input":R3(t),sl(t,r,!1);break;case"textarea":R3(t),Ml(t);break;case"option":r.value!=null&&t.setAttribute("value",""+f5(r.value));break;case"select":t.multiple=!!r.multiple,a=r.value,a!=null?L2(t,!!r.multiple,a,!1):r.defaultValue!=null&&L2(t,!!r.multiple,r.defaultValue,!0);break;default:typeof L.onClick=="function"&&(t.onclick=H6)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break l;case"img":r=!0;break l;default:r=!1}}r&&(l.flags|=4)}l.ref!==null&&(l.flags|=512,l.flags|=2097152)}return H1(l),null;case 6:if(t&&l.stateNode!=null)xn(t,l,t.memoizedProps,r);else{if(typeof r!="string"&&l.stateNode===null)throw Error(y(166));if(n=y5(u3.current),y5(v4.current),W3(l)){if(r=l.stateNode,n=l.memoizedProps,r[H4]=l,(a=r.nodeValue!==n)&&(t=Y1,t!==null))switch(t.tag){case 3:B3(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&B3(r.nodeValue,n,(t.mode&1)!==0)}a&&(l.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[H4]=l,l.stateNode=r}return H1(l),null;case 13:if(Q(q),r=l.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(X&&B1!==null&&l.mode&1&&!(l.flags&128))Yt(),s2(),l.flags|=98560,a=!1;else if(a=W3(l),r!==null&&r.dehydrated!==null){if(t===null){if(!a)throw Error(y(318));if(a=l.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(y(317));a[H4]=l}else s2(),!(l.flags&128)&&(l.memoizedState=null),l.flags|=4;H1(l),a=!1}else o4!==null&&(z8(o4),o4=null),a=!0;if(!a)return l.flags&65536?l:null}return l.flags&128?(l.lanes=n,l):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(l.child.flags|=8192,l.mode&1&&(t===null||q.current&1?p1===0&&(p1=3):D9())),l.updateQueue!==null&&(l.flags|=4),H1(l),null);case 4:return M2(),w8(t,l),t===null&&d3(l.stateNode.containerInfo),H1(l),null;case 10:return H9(l.type._context),H1(l),null;case 17:return O1(l.type)&&m6(),H1(l),null;case 19:if(Q(q),a=l.memoizedState,a===null)return H1(l),null;if(r=(l.flags&128)!==0,e=a.rendering,e===null)if(r)O2(a,!1);else{if(p1!==0||t!==null&&t.flags&128)for(t=l.child;t!==null;){if(e=S6(t),e!==null){for(l.flags|=128,O2(a,!1),r=e.updateQueue,r!==null&&(l.updateQueue=r,l.flags|=4),l.subtreeFlags=0,r=n,n=l.child;n!==null;)a=n,t=r,a.flags&=14680066,e=a.alternate,e===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,a.type=e.type,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return $(q,q.current&1|2),l.child}t=t.sibling}a.tail!==null&&i1()>b2&&(l.flags|=128,r=!0,O2(a,!1),l.lanes=4194304)}else{if(!r)if(t=S6(e),t!==null){if(l.flags|=128,r=!0,n=t.updateQueue,n!==null&&(l.updateQueue=n,l.flags|=4),O2(a,!0),a.tail===null&&a.tailMode==="hidden"&&!e.alternate&&!X)return H1(l),null}else 2*i1()-a.renderingStartTime>b2&&n!==1073741824&&(l.flags|=128,r=!0,O2(a,!1),l.lanes=4194304);a.isBackwards?(e.sibling=l.child,l.child=e):(n=a.last,n!==null?n.sibling=e:l.child=e,a.last=e)}return a.tail!==null?(l=a.tail,a.rendering=l,a.tail=l.sibling,a.renderingStartTime=i1(),l.sibling=null,n=q.current,$(q,r?n&1|2:n&1),l):(H1(l),null);case 22:case 23:return N9(),r=l.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(l.flags|=8192),r&&l.mode&1?A1&1073741824&&(H1(l),l.subtreeFlags&6&&(l.flags|=8192)):H1(l),null;case 24:return null;case 25:return null}throw Error(y(156,l.tag))}function Ga(t,l){switch(M9(l),l.tag){case 1:return O1(l.type)&&m6(),t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 3:return M2(),Q(P1),Q(v1),y9(),t=l.flags,t&65536&&!(t&128)?(l.flags=t&-65537|128,l):null;case 5:return v9(l),null;case 13:if(Q(q),t=l.memoizedState,t!==null&&t.dehydrated!==null){if(l.alternate===null)throw Error(y(340));s2()}return t=l.flags,t&65536?(l.flags=t&-65537|128,l):null;case 19:return Q(q),null;case 4:return M2(),null;case 10:return H9(l.type._context),null;case 22:case 23:return N9(),null;case 24:return null;default:return null}}var Q3=!1,m1=!1,qa=typeof WeakSet=="function"?WeakSet:Set,S=null;function l2(t,l){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){L1(t,l,r)}else n.current=null}function C8(t,l,n){try{n()}catch(r){L1(t,l,r)}}var e0=!1;function Ja(t,l){if(p8=Z6,t=Ot(),s9(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else l:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var L=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break l}var e=0,i=-1,f=-1,c=0,d=0,h=t,o=null;t:for(;;){for(var M;h!==n||L!==0&&h.nodeType!==3||(i=e+L),h!==a||r!==0&&h.nodeType!==3||(f=e+r),h.nodeType===3&&(e+=h.nodeValue.length),(M=h.firstChild)!==null;)o=h,h=M;for(;;){if(h===t)break t;if(o===n&&++c===L&&(i=e),o===a&&++d===r&&(f=e),(M=h.nextSibling)!==null)break;h=o,o=h.parentNode}h=M}n=i===-1||f===-1?null:{start:i,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(h8={focusedElem:t,selectionRange:n},Z6=!1,S=l;S!==null;)if(l=S,t=l.child,(l.subtreeFlags&1028)!==0&&t!==null)t.return=l,S=t;else for(;S!==null;){l=S;try{var Z=l.alternate;if(l.flags&1024)switch(l.tag){case 0:case 11:case 15:break;case 1:if(Z!==null){var u=Z.memoizedProps,m=Z.memoizedState,s=l.stateNode,p=s.getSnapshotBeforeUpdate(l.elementType===l.type?u:p4(l.type,u),m);s.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var k=l.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(b){L1(l,l.return,b)}if(t=l.sibling,t!==null){t.return=l.return,S=t;break}S=l.return}return Z=e0,e0=!1,Z}function K2(t,l,n){var r=l.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var L=r=r.next;do{if((L.tag&t)===t){var a=L.destroy;L.destroy=void 0,a!==void 0&&C8(l,n,a)}L=L.next}while(L!==r)}}function J6(t,l){if(l=l.updateQueue,l=l!==null?l.lastEffect:null,l!==null){var n=l=l.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==l)}}function S8(t){var l=t.ref;if(l!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof l=="function"?l(t):l.current=t}}function Tn(t){var l=t.alternate;l!==null&&(t.alternate=null,Tn(l)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(l=t.stateNode,l!==null&&(delete l[H4],delete l[h3],delete l[s8],delete l[za],delete l[Ra])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function En(t){return t.tag===5||t.tag===3||t.tag===4}function i0(t){l:for(;;){for(;t.sibling===null;){if(t.return===null||En(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue l;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function x8(t,l,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,l?n.nodeType===8?n.parentNode.insertBefore(t,l):n.insertBefore(t,l):(n.nodeType===8?(l=n.parentNode,l.insertBefore(t,n)):(l=n,l.appendChild(t)),n=n._reactRootContainer,n!=null||l.onclick!==null||(l.onclick=H6));else if(r!==4&&(t=t.child,t!==null))for(x8(t,l,n),t=t.sibling;t!==null;)x8(t,l,n),t=t.sibling}function T8(t,l,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,l?n.insertBefore(t,l):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(T8(t,l,n),t=t.sibling;t!==null;)T8(t,l,n),t=t.sibling}var k1=null,h4=!1;function U4(t,l,n){for(n=n.child;n!==null;)Pn(t,l,n),n=n.sibling}function Pn(t,l,n){if(g4&&typeof g4.onCommitFiberUnmount=="function")try{g4.onCommitFiberUnmount(W6,n)}catch{}switch(n.tag){case 5:m1||l2(n,l);case 6:var r=k1,L=h4;k1=null,U4(t,l,n),k1=r,h4=L,k1!==null&&(h4?(t=k1,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):k1.removeChild(n.stateNode));break;case 18:k1!==null&&(h4?(t=k1,n=n.stateNode,t.nodeType===8?v7(t.parentNode,n):t.nodeType===1&&v7(t,n),i3(t)):v7(k1,n.stateNode));break;case 4:r=k1,L=h4,k1=n.stateNode.containerInfo,h4=!0,U4(t,l,n),k1=r,h4=L;break;case 0:case 11:case 14:case 15:if(!m1&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){L=r=r.next;do{var a=L,e=a.destroy;a=a.tag,e!==void 0&&(a&2||a&4)&&C8(n,l,e),L=L.next}while(L!==r)}U4(t,l,n);break;case 1:if(!m1&&(l2(n,l),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){L1(n,l,i)}U4(t,l,n);break;case 21:U4(t,l,n);break;case 22:n.mode&1?(m1=(r=m1)||n.memoizedState!==null,U4(t,l,n),m1=r):U4(t,l,n);break;default:U4(t,l,n)}}function f0(t){var l=t.updateQueue;if(l!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new qa),l.forEach(function(r){var L=fe.bind(null,t,r);n.has(r)||(n.add(r),r.then(L,L))})}}function d4(t,l){var n=l.deletions;if(n!==null)for(var r=0;r<n.length;r++){var L=n[r];try{var a=t,e=l,i=e;l:for(;i!==null;){switch(i.tag){case 5:k1=i.stateNode,h4=!1;break l;case 3:k1=i.stateNode.containerInfo,h4=!0;break l;case 4:k1=i.stateNode.containerInfo,h4=!0;break l}i=i.return}if(k1===null)throw Error(y(160));Pn(a,e,L),k1=null,h4=!1;var f=L.alternate;f!==null&&(f.return=null),L.return=null}catch(c){L1(L,l,c)}}if(l.subtreeFlags&12854)for(l=l.child;l!==null;)On(l,t),l=l.sibling}function On(t,l){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(d4(l,t),M4(t),r&4){try{K2(3,t,t.return),J6(3,t)}catch(u){L1(t,t.return,u)}try{K2(5,t,t.return)}catch(u){L1(t,t.return,u)}}break;case 1:d4(l,t),M4(t),r&512&&n!==null&&l2(n,n.return);break;case 5:if(d4(l,t),M4(t),r&512&&n!==null&&l2(n,n.return),t.flags&32){var L=t.stateNode;try{r3(L,"")}catch(u){L1(t,t.return,u)}}if(r&4&&(L=t.stateNode,L!=null)){var a=t.memoizedProps,e=n!==null?n.memoizedProps:a,i=t.type,f=t.updateQueue;if(t.updateQueue=null,f!==null)try{i==="input"&&a.type==="radio"&&a.name!=null&&tt(L,a),t8(i,e);var c=t8(i,a);for(e=0;e<f.length;e+=2){var d=f[e],h=f[e+1];d==="style"?et(L,h):d==="dangerouslySetInnerHTML"?Lt(L,h):d==="children"?r3(L,h):n9(L,d,h,c)}switch(i){case"input":K7(L,a);break;case"textarea":nt(L,a);break;case"select":var o=L._wrapperState.wasMultiple;L._wrapperState.wasMultiple=!!a.multiple;var M=a.value;M!=null?L2(L,!!a.multiple,M,!1):o!==!!a.multiple&&(a.defaultValue!=null?L2(L,!!a.multiple,a.defaultValue,!0):L2(L,!!a.multiple,a.multiple?[]:"",!1))}L[h3]=a}catch(u){L1(t,t.return,u)}}break;case 6:if(d4(l,t),M4(t),r&4){if(t.stateNode===null)throw Error(y(162));L=t.stateNode,a=t.memoizedProps;try{L.nodeValue=a}catch(u){L1(t,t.return,u)}}break;case 3:if(d4(l,t),M4(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{i3(l.containerInfo)}catch(u){L1(t,t.return,u)}break;case 4:d4(l,t),M4(t);break;case 13:d4(l,t),M4(t),L=t.child,L.flags&8192&&(a=L.memoizedState!==null,L.stateNode.isHidden=a,!a||L.alternate!==null&&L.alternate.memoizedState!==null||(z9=i1())),r&4&&f0(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(m1=(c=m1)||d,d4(l,t),m1=c):d4(l,t),M4(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(S=t,d=t.child;d!==null;){for(h=S=d;S!==null;){switch(o=S,M=o.child,o.tag){case 0:case 11:case 14:case 15:K2(4,o,o.return);break;case 1:l2(o,o.return);var Z=o.stateNode;if(typeof Z.componentWillUnmount=="function"){r=o,n=o.return;try{l=r,Z.props=l.memoizedProps,Z.state=l.memoizedState,Z.componentWillUnmount()}catch(u){L1(r,n,u)}}break;case 5:l2(o,o.return);break;case 22:if(o.memoizedState!==null){d0(h);continue}}M!==null?(M.return=o,S=M):d0(h)}d=d.sibling}l:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{L=h.stateNode,c?(a=L.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(i=h.stateNode,f=h.memoizedProps.style,e=f!=null&&f.hasOwnProperty("display")?f.display:null,i.style.display=at("display",e))}catch(u){L1(t,t.return,u)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(u){L1(t,t.return,u)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break l;for(;h.sibling===null;){if(h.return===null||h.return===t)break l;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:d4(l,t),M4(t),r&4&&f0(t);break;case 21:break;default:d4(l,t),M4(t)}}function M4(t){var l=t.flags;if(l&2){try{l:{for(var n=t.return;n!==null;){if(En(n)){var r=n;break l}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var L=r.stateNode;r.flags&32&&(r3(L,""),r.flags&=-33);var a=i0(t);T8(t,a,L);break;case 3:case 4:var e=r.stateNode.containerInfo,i=i0(t);x8(t,i,e);break;default:throw Error(y(161))}}catch(f){L1(t,t.return,f)}t.flags&=-3}l&4096&&(t.flags&=-4097)}function le(t,l,n){S=t,zn(t)}function zn(t,l,n){for(var r=(t.mode&1)!==0;S!==null;){var L=S,a=L.child;if(L.tag===22&&r){var e=L.memoizedState!==null||Q3;if(!e){var i=L.alternate,f=i!==null&&i.memoizedState!==null||m1;i=Q3;var c=m1;if(Q3=e,(m1=f)&&!c)for(S=L;S!==null;)e=S,f=e.child,e.tag===22&&e.memoizedState!==null?p0(L):f!==null?(f.return=e,S=f):p0(L);for(;a!==null;)S=a,zn(a),a=a.sibling;S=L,Q3=i,m1=c}c0(t)}else L.subtreeFlags&8772&&a!==null?(a.return=L,S=a):c0(t)}}function c0(t){for(;S!==null;){var l=S;if(l.flags&8772){var n=l.alternate;try{if(l.flags&8772)switch(l.tag){case 0:case 11:case 15:m1||J6(5,l);break;case 1:var r=l.stateNode;if(l.flags&4&&!m1)if(n===null)r.componentDidMount();else{var L=l.elementType===l.type?n.memoizedProps:p4(l.type,n.memoizedProps);r.componentDidUpdate(L,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=l.updateQueue;a!==null&&Yl(l,a,r);break;case 3:var e=l.updateQueue;if(e!==null){if(n=null,l.child!==null)switch(l.child.tag){case 5:n=l.child.stateNode;break;case 1:n=l.child.stateNode}Yl(l,e,n)}break;case 5:var i=l.stateNode;if(n===null&&l.flags&4){n=i;var f=l.memoizedProps;switch(l.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(l.memoizedState===null){var c=l.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&i3(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}m1||l.flags&512&&S8(l)}catch(o){L1(l,l.return,o)}}if(l===t){S=null;break}if(n=l.sibling,n!==null){n.return=l.return,S=n;break}S=l.return}}function d0(t){for(;S!==null;){var l=S;if(l===t){S=null;break}var n=l.sibling;if(n!==null){n.return=l.return,S=n;break}S=l.return}}function p0(t){for(;S!==null;){var l=S;try{switch(l.tag){case 0:case 11:case 15:var n=l.return;try{J6(4,l)}catch(f){L1(l,n,f)}break;case 1:var r=l.stateNode;if(typeof r.componentDidMount=="function"){var L=l.return;try{r.componentDidMount()}catch(f){L1(l,L,f)}}var a=l.return;try{S8(l)}catch(f){L1(l,a,f)}break;case 5:var e=l.return;try{S8(l)}catch(f){L1(l,e,f)}}}catch(f){L1(l,l.return,f)}if(l===t){S=null;break}var i=l.sibling;if(i!==null){i.return=l.return,S=i;break}S=l.return}}var te=Math.ceil,E6=A4.ReactCurrentDispatcher,P9=A4.ReactCurrentOwner,e4=A4.ReactCurrentBatchConfig,N=0,o1=null,c1=null,M1=0,A1=0,t2=u5(0),p1=0,Z3=null,N5=0,l7=0,O9=0,G2=null,x1=null,z9=0,b2=1/0,w4=null,P6=!1,E8=null,r5=null,X3=!1,Q4=null,O6=0,q2=0,P8=null,i6=-1,f6=0;function w1(){return N&6?i1():i6!==-1?i6:i6=i1()}function L5(t){return t.mode&1?N&2&&M1!==0?M1&-M1:Da.transition!==null?(f6===0&&(f6=Zt()),f6):(t=F,t!==0||(t=window.event,t=t===void 0?16:vt(t.type)),t):1}function s4(t,l,n,r){if(50<q2)throw q2=0,P8=null,Error(y(185));C3(t,n,r),(!(N&2)||t!==o1)&&(t===o1&&(!(N&2)&&(l7|=n),p1===4&&$4(t,M1)),z1(t,r),n===1&&N===0&&!(l.mode&1)&&(b2=i1()+500,K6&&s5()))}function z1(t,l){var n=t.callbackNode;DL(t,l);var r=M6(t,t===o1?M1:0);if(r===0)n!==null&&Vl(n),t.callbackNode=null,t.callbackPriority=0;else if(l=r&-r,t.callbackPriority!==l){if(n!=null&&Vl(n),l===1)t.tag===0?Na(h0.bind(null,t)):Bt(h0.bind(null,t)),Pa(function(){!(N&6)&&s5()}),n=null;else{switch(bt(r)){case 1:n=i9;break;case 4:n=kt;break;case 16:n=k6;break;case 536870912:n=Mt;break;default:n=k6}n=jn(n,Rn.bind(null,t))}t.callbackPriority=l,t.callbackNode=n}}function Rn(t,l){if(i6=-1,f6=0,N&6)throw Error(y(327));var n=t.callbackNode;if(c2()&&t.callbackNode!==n)return null;var r=M6(t,t===o1?M1:0);if(r===0)return null;if(r&30||r&t.expiredLanes||l)l=z6(t,r);else{l=r;var L=N;N|=2;var a=Dn();(o1!==t||M1!==l)&&(w4=null,b2=i1()+500,C5(t,l));do try{Le();break}catch(i){Nn(t,i)}while(!0);V9(),E6.current=a,N=L,c1!==null?l=0:(o1=null,M1=0,l=p1)}if(l!==0){if(l===2&&(L=e8(t),L!==0&&(r=L,l=O8(t,L))),l===1)throw n=Z3,C5(t,0),$4(t,r),z1(t,i1()),n;if(l===6)$4(t,r);else{if(L=t.current.alternate,!(r&30)&&!ne(L)&&(l=z6(t,r),l===2&&(a=e8(t),a!==0&&(r=a,l=O8(t,a))),l===1))throw n=Z3,C5(t,0),$4(t,r),z1(t,i1()),n;switch(t.finishedWork=L,t.finishedLanes=r,l){case 0:case 1:throw Error(y(345));case 2:m5(t,x1,w4);break;case 3:if($4(t,r),(r&130023424)===r&&(l=z9+500-i1(),10<l)){if(M6(t,0)!==0)break;if(L=t.suspendedLanes,(L&r)!==r){w1(),t.pingedLanes|=t.suspendedLanes&L;break}t.timeoutHandle=u8(m5.bind(null,t,x1,w4),l);break}m5(t,x1,w4);break;case 4:if($4(t,r),(r&4194240)===r)break;for(l=t.eventTimes,L=-1;0<r;){var e=31-u4(r);a=1<<e,e=l[e],e>L&&(L=e),r&=~a}if(r=L,r=i1()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*te(r/1960))-r,10<r){t.timeoutHandle=u8(m5.bind(null,t,x1,w4),r);break}m5(t,x1,w4);break;case 5:m5(t,x1,w4);break;default:throw Error(y(329))}}}return z1(t,i1()),t.callbackNode===n?Rn.bind(null,t):null}function O8(t,l){var n=G2;return t.current.memoizedState.isDehydrated&&(C5(t,l).flags|=256),t=z6(t,l),t!==2&&(l=x1,x1=n,l!==null&&z8(l)),t}function z8(t){x1===null?x1=t:x1.push.apply(x1,t)}function ne(t){for(var l=t;;){if(l.flags&16384){var n=l.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var L=n[r],a=L.getSnapshot;L=L.value;try{if(!k4(a(),L))return!1}catch{return!1}}}if(n=l.child,l.subtreeFlags&16384&&n!==null)n.return=l,l=n;else{if(l===t)break;for(;l.sibling===null;){if(l.return===null||l.return===t)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function $4(t,l){for(l&=~O9,l&=~l7,t.suspendedLanes|=l,t.pingedLanes&=~l,t=t.expirationTimes;0<l;){var n=31-u4(l),r=1<<n;t[n]=-1,l&=~r}}function h0(t){if(N&6)throw Error(y(327));c2();var l=M6(t,0);if(!(l&1))return z1(t,i1()),null;var n=z6(t,l);if(t.tag!==0&&n===2){var r=e8(t);r!==0&&(l=r,n=O8(t,r))}if(n===1)throw n=Z3,C5(t,0),$4(t,l),z1(t,i1()),n;if(n===6)throw Error(y(345));return t.finishedWork=t.current.alternate,t.finishedLanes=l,m5(t,x1,w4),z1(t,i1()),null}function R9(t,l){var n=N;N|=1;try{return t(l)}finally{N=n,N===0&&(b2=i1()+500,K6&&s5())}}function D5(t){Q4!==null&&Q4.tag===0&&!(N&6)&&c2();var l=N;N|=1;var n=e4.transition,r=F;try{if(e4.transition=null,F=1,t)return t()}finally{F=r,e4.transition=n,N=l,!(N&6)&&s5()}}function N9(){A1=t2.current,Q(t2)}function C5(t,l){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ea(n)),c1!==null)for(n=c1.return;n!==null;){var r=n;switch(M9(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&m6();break;case 3:M2(),Q(P1),Q(v1),y9();break;case 5:v9(r);break;case 4:M2();break;case 13:Q(q);break;case 19:Q(q);break;case 10:H9(r.type._context);break;case 22:case 23:N9()}n=n.return}if(o1=t,c1=t=a5(t.current,null),M1=A1=l,p1=0,Z3=null,O9=l7=N5=0,x1=G2=null,v5!==null){for(l=0;l<v5.length;l++)if(n=v5[l],r=n.interleaved,r!==null){n.interleaved=null;var L=r.next,a=n.pending;if(a!==null){var e=a.next;a.next=L,r.next=e}n.pending=r}v5=null}return t}function Nn(t,l){do{var n=c1;try{if(V9(),L6.current=T6,x6){for(var r=t1.memoizedState;r!==null;){var L=r.queue;L!==null&&(L.pending=null),r=r.next}x6=!1}if(R5=0,h1=d1=t1=null,X2=!1,s3=0,P9.current=null,n===null||n.return===null){p1=1,Z3=l,c1=null;break}l:{var a=t,e=n.return,i=n,f=l;if(l=M1,i.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var c=f,d=i,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var o=d.alternate;o?(d.updateQueue=o.updateQueue,d.memoizedState=o.memoizedState,d.lanes=o.lanes):(d.updateQueue=null,d.memoizedState=null)}var M=Jl(e);if(M!==null){M.flags&=-257,l0(M,e,i,a,l),M.mode&1&&ql(a,c,l),l=M,f=c;var Z=l.updateQueue;if(Z===null){var u=new Set;u.add(f),l.updateQueue=u}else Z.add(f);break l}else{if(!(l&1)){ql(a,c,l),D9();break l}f=Error(y(426))}}else if(X&&i.mode&1){var m=Jl(e);if(m!==null){!(m.flags&65536)&&(m.flags|=256),l0(m,e,i,a,l),Z9(Z2(f,i));break l}}a=f=Z2(f,i),p1!==4&&(p1=2),G2===null?G2=[a]:G2.push(a),a=e;do{switch(a.tag){case 3:a.flags|=65536,l&=-l,a.lanes|=l;var s=Vn(a,f,l);$l(a,s);break l;case 1:i=f;var p=a.type,k=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(r5===null||!r5.has(k)))){a.flags|=65536,l&=-l,a.lanes|=l;var b=Hn(a,i,l);$l(a,b);break l}}a=a.return}while(a!==null)}In(n)}catch(V){l=V,c1===n&&n!==null&&(c1=n=n.return);continue}break}while(!0)}function Dn(){var t=E6.current;return E6.current=T6,t===null?T6:t}function D9(){(p1===0||p1===3||p1===2)&&(p1=4),o1===null||!(N5&268435455)&&!(l7&268435455)||$4(o1,M1)}function z6(t,l){var n=N;N|=2;var r=Dn();(o1!==t||M1!==l)&&(w4=null,C5(t,l));do try{re();break}catch(L){Nn(t,L)}while(!0);if(V9(),N=n,E6.current=r,c1!==null)throw Error(y(261));return o1=null,M1=0,p1}function re(){for(;c1!==null;)Fn(c1)}function Le(){for(;c1!==null&&!SL();)Fn(c1)}function Fn(t){var l=Un(t.alternate,t,A1);t.memoizedProps=t.pendingProps,l===null?In(t):c1=l,P9.current=null}function In(t){var l=t;do{var n=l.alternate;if(t=l.return,l.flags&32768){if(n=Ga(n,l),n!==null){n.flags&=32767,c1=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{p1=6,c1=null;return}}else if(n=Ka(n,l,A1),n!==null){c1=n;return}if(l=l.sibling,l!==null){c1=l;return}c1=l=t}while(l!==null);p1===0&&(p1=5)}function m5(t,l,n){var r=F,L=e4.transition;try{e4.transition=null,F=1,ae(t,l,n,r)}finally{e4.transition=L,F=r}return null}function ae(t,l,n,r){do c2();while(Q4!==null);if(N&6)throw Error(y(327));n=t.finishedWork;var L=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(y(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(FL(t,a),t===o1&&(c1=o1=null,M1=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||X3||(X3=!0,jn(k6,function(){return c2(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=e4.transition,e4.transition=null;var e=F;F=1;var i=N;N|=4,P9.current=null,Ja(t,n),On(n,t),va(h8),Z6=!!p8,h8=p8=null,t.current=n,le(n),xL(),N=i,F=e,e4.transition=a}else t.current=n;if(X3&&(X3=!1,Q4=t,O6=L),a=t.pendingLanes,a===0&&(r5=null),PL(n.stateNode),z1(t,i1()),l!==null)for(r=t.onRecoverableError,n=0;n<l.length;n++)L=l[n],r(L.value,{componentStack:L.stack,digest:L.digest});if(P6)throw P6=!1,t=E8,E8=null,t;return O6&1&&t.tag!==0&&c2(),a=t.pendingLanes,a&1?t===P8?q2++:(q2=0,P8=t):q2=0,s5(),null}function c2(){if(Q4!==null){var t=bt(O6),l=e4.transition,n=F;try{if(e4.transition=null,F=16>t?16:t,Q4===null)var r=!1;else{if(t=Q4,Q4=null,O6=0,N&6)throw Error(y(331));var L=N;for(N|=4,S=t.current;S!==null;){var a=S,e=a.child;if(S.flags&16){var i=a.deletions;if(i!==null){for(var f=0;f<i.length;f++){var c=i[f];for(S=c;S!==null;){var d=S;switch(d.tag){case 0:case 11:case 15:K2(8,d,a)}var h=d.child;if(h!==null)h.return=d,S=h;else for(;S!==null;){d=S;var o=d.sibling,M=d.return;if(Tn(d),d===c){S=null;break}if(o!==null){o.return=M,S=o;break}S=M}}}var Z=a.alternate;if(Z!==null){var u=Z.child;if(u!==null){Z.child=null;do{var m=u.sibling;u.sibling=null,u=m}while(u!==null)}}S=a}}if(a.subtreeFlags&2064&&e!==null)e.return=a,S=e;else l:for(;S!==null;){if(a=S,a.flags&2048)switch(a.tag){case 0:case 11:case 15:K2(9,a,a.return)}var s=a.sibling;if(s!==null){s.return=a.return,S=s;break l}S=a.return}}var p=t.current;for(S=p;S!==null;){e=S;var k=e.child;if(e.subtreeFlags&2064&&k!==null)k.return=e,S=k;else l:for(e=p;S!==null;){if(i=S,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:J6(9,i)}}catch(V){L1(i,i.return,V)}if(i===e){S=null;break l}var b=i.sibling;if(b!==null){b.return=i.return,S=b;break l}S=i.return}}if(N=L,s5(),g4&&typeof g4.onPostCommitFiberRoot=="function")try{g4.onPostCommitFiberRoot(W6,t)}catch{}r=!0}return r}finally{F=n,e4.transition=l}}return!1}function o0(t,l,n){l=Z2(n,l),l=Vn(t,l,1),t=n5(t,l,1),l=w1(),t!==null&&(C3(t,1,l),z1(t,l))}function L1(t,l,n){if(t.tag===3)o0(t,t,n);else for(;l!==null;){if(l.tag===3){o0(l,t,n);break}else if(l.tag===1){var r=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(r5===null||!r5.has(r))){t=Z2(n,t),t=Hn(l,t,1),l=n5(l,t,1),t=w1(),l!==null&&(C3(l,1,t),z1(l,t));break}}l=l.return}}function ee(t,l,n){var r=t.pingCache;r!==null&&r.delete(l),l=w1(),t.pingedLanes|=t.suspendedLanes&n,o1===t&&(M1&n)===n&&(p1===4||p1===3&&(M1&130023424)===M1&&500>i1()-z9?C5(t,0):O9|=n),z1(t,l)}function An(t,l){l===0&&(t.mode&1?(l=F3,F3<<=1,!(F3&130023424)&&(F3=4194304)):l=1);var n=w1();t=N4(t,l),t!==null&&(C3(t,l,n),z1(t,n))}function ie(t){var l=t.memoizedState,n=0;l!==null&&(n=l.retryLane),An(t,n)}function fe(t,l){var n=0;switch(t.tag){case 13:var r=t.stateNode,L=t.memoizedState;L!==null&&(n=L.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(l),An(t,n)}var Un;Un=function(t,l,n){if(t!==null)if(t.memoizedProps!==l.pendingProps||P1.current)E1=!0;else{if(!(t.lanes&n)&&!(l.flags&128))return E1=!1,Xa(t,l,n);E1=!!(t.flags&131072)}else E1=!1,X&&l.flags&1048576&&Wt(l,v6,l.index);switch(l.lanes=0,l.tag){case 2:var r=l.type;e6(t,l),t=l.pendingProps;var L=u2(l,v1.current);f2(l,n),L=C9(null,l,r,t,L,n);var a=S9();return l.flags|=1,typeof L=="object"&&L!==null&&typeof L.render=="function"&&L.$$typeof===void 0?(l.tag=1,l.memoizedState=null,l.updateQueue=null,O1(r)?(a=!0,_6(l)):a=!1,l.memoizedState=L.state!==null&&L.state!==void 0?L.state:null,_9(l),L.updater=q6,l.stateNode=L,L._reactInternals=l,H8(l,r,t,n),l=g8(null,l,r,!0,a,n)):(l.tag=0,X&&a&&k9(l),y1(null,l,L,n),l=l.child),l;case 16:r=l.elementType;l:{switch(e6(t,l),t=l.pendingProps,L=r._init,r=L(r._payload),l.type=r,L=l.tag=de(r),t=p4(r,t),L){case 0:l=_8(null,l,r,t,n);break l;case 1:l=r0(null,l,r,t,n);break l;case 11:l=t0(null,l,r,t,n);break l;case 14:l=n0(null,l,r,p4(r.type,t),n);break l}throw Error(y(306,r,""))}return l;case 0:return r=l.type,L=l.pendingProps,L=l.elementType===r?L:p4(r,L),_8(t,l,r,L,n);case 1:return r=l.type,L=l.pendingProps,L=l.elementType===r?L:p4(r,L),r0(t,l,r,L,n);case 3:l:{if(vn(l),t===null)throw Error(y(387));r=l.pendingProps,a=l.memoizedState,L=a.element,Gt(t,l),C6(l,r,null,n);var e=l.memoizedState;if(r=e.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:e.cache,pendingSuspenseBoundaries:e.pendingSuspenseBoundaries,transitions:e.transitions},l.updateQueue.baseState=a,l.memoizedState=a,l.flags&256){L=Z2(Error(y(423)),l),l=L0(t,l,r,n,L);break l}else if(r!==L){L=Z2(Error(y(424)),l),l=L0(t,l,r,n,L);break l}else for(B1=t5(l.stateNode.containerInfo.firstChild),Y1=l,X=!0,o4=null,n=Xt(l,null,r,n),l.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(s2(),r===L){l=D4(t,l,n);break l}y1(t,l,r,n)}l=l.child}return l;case 5:return qt(l),t===null&&Z8(l),r=l.type,L=l.pendingProps,a=t!==null?t.memoizedProps:null,e=L.children,o8(r,L)?e=null:a!==null&&o8(r,a)&&(l.flags|=32),gn(t,l),y1(t,l,e,n),l.child;case 6:return t===null&&Z8(l),null;case 13:return yn(t,l,n);case 4:return g9(l,l.stateNode.containerInfo),r=l.pendingProps,t===null?l.child=k2(l,null,r,n):y1(t,l,r,n),l.child;case 11:return r=l.type,L=l.pendingProps,L=l.elementType===r?L:p4(r,L),t0(t,l,r,L,n);case 7:return y1(t,l,l.pendingProps,n),l.child;case 8:return y1(t,l,l.pendingProps.children,n),l.child;case 12:return y1(t,l,l.pendingProps.children,n),l.child;case 10:l:{if(r=l.type._context,L=l.pendingProps,a=l.memoizedProps,e=L.value,$(y6,r._currentValue),r._currentValue=e,a!==null)if(k4(a.value,e)){if(a.children===L.children&&!P1.current){l=D4(t,l,n);break l}}else for(a=l.child,a!==null&&(a.return=l);a!==null;){var i=a.dependencies;if(i!==null){e=a.child;for(var f=i.firstContext;f!==null;){if(f.context===r){if(a.tag===1){f=O4(-1,n&-n),f.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?f.next=f:(f.next=d.next,d.next=f),c.pending=f}}a.lanes|=n,f=a.alternate,f!==null&&(f.lanes|=n),b8(a.return,n,l),i.lanes|=n;break}f=f.next}}else if(a.tag===10)e=a.type===l.type?null:a.child;else if(a.tag===18){if(e=a.return,e===null)throw Error(y(341));e.lanes|=n,i=e.alternate,i!==null&&(i.lanes|=n),b8(e,n,l),e=a.sibling}else e=a.child;if(e!==null)e.return=a;else for(e=a;e!==null;){if(e===l){e=null;break}if(a=e.sibling,a!==null){a.return=e.return,e=a;break}e=e.return}a=e}y1(t,l,L.children,n),l=l.child}return l;case 9:return L=l.type,r=l.pendingProps.children,f2(l,n),L=i4(L),r=r(L),l.flags|=1,y1(t,l,r,n),l.child;case 14:return r=l.type,L=p4(r,l.pendingProps),L=p4(r.type,L),n0(t,l,r,L,n);case 15:return mn(t,l,l.type,l.pendingProps,n);case 17:return r=l.type,L=l.pendingProps,L=l.elementType===r?L:p4(r,L),e6(t,l),l.tag=1,O1(r)?(t=!0,_6(l)):t=!1,f2(l,n),bn(l,r,L),H8(l,r,L,n),g8(null,l,r,!0,t,n);case 19:return wn(t,l,n);case 22:return _n(t,l,n)}throw Error(y(156,l.tag))};function jn(t,l){return st(t,l)}function ce(t,l,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function r4(t,l,n,r){return new ce(t,l,n,r)}function F9(t){return t=t.prototype,!(!t||!t.isReactComponent)}function de(t){if(typeof t=="function")return F9(t)?1:0;if(t!=null){if(t=t.$$typeof,t===L9)return 11;if(t===a9)return 14}return 2}function a5(t,l){var n=t.alternate;return n===null?(n=r4(t.tag,l,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=l,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,l=t.dependencies,n.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function c6(t,l,n,r,L,a){var e=2;if(r=t,typeof t=="function")F9(t)&&(e=1);else if(typeof t=="string")e=5;else l:switch(t){case W5:return S5(n.children,L,a,l);case r9:e=8,L|=8;break;case W7:return t=r4(12,n,l,L|2),t.elementType=W7,t.lanes=a,t;case $7:return t=r4(13,n,l,L),t.elementType=$7,t.lanes=a,t;case Y7:return t=r4(19,n,l,L),t.elementType=Y7,t.lanes=a,t;case q0:return t7(n,L,a,l);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case K0:e=10;break l;case G0:e=9;break l;case L9:e=11;break l;case a9:e=14;break l;case j4:e=16,r=null;break l}throw Error(y(130,t==null?t:typeof t,""))}return l=r4(e,n,l,L),l.elementType=t,l.type=r,l.lanes=a,l}function S5(t,l,n,r){return t=r4(7,t,r,l),t.lanes=n,t}function t7(t,l,n,r){return t=r4(22,t,r,l),t.elementType=q0,t.lanes=n,t.stateNode={isHidden:!1},t}function P7(t,l,n){return t=r4(6,t,null,l),t.lanes=n,t}function O7(t,l,n){return l=r4(4,t.children!==null?t.children:[],t.key,l),l.lanes=n,l.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},l}function pe(t,l,n,r,L){this.tag=l,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=u7(0),this.expirationTimes=u7(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=u7(0),this.identifierPrefix=r,this.onRecoverableError=L,this.mutableSourceEagerHydrationData=null}function I9(t,l,n,r,L,a,e,i,f){return t=new pe(t,l,n,i,f),l===1?(l=1,a===!0&&(l|=8)):l=0,a=r4(3,null,null,l),t.current=a,a.stateNode=t,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},_9(a),t}function he(t,l,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B5,key:r==null?null:""+r,children:t,containerInfo:l,implementation:n}}function Bn(t){if(!t)return c5;t=t._reactInternals;l:{if(I5(t)!==t||t.tag!==1)throw Error(y(170));var l=t;do{switch(l.tag){case 3:l=l.stateNode.context;break l;case 1:if(O1(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break l}}l=l.return}while(l!==null);throw Error(y(171))}if(t.tag===1){var n=t.type;if(O1(n))return jt(t,n,l)}return l}function Wn(t,l,n,r,L,a,e,i,f){return t=I9(n,r,!0,t,L,a,e,i,f),t.context=Bn(null),n=t.current,r=w1(),L=L5(n),a=O4(r,L),a.callback=l??null,n5(n,a,L),t.current.lanes=L,C3(t,L,r),z1(t,r),t}function n7(t,l,n,r){var L=l.current,a=w1(),e=L5(L);return n=Bn(n),l.context===null?l.context=n:l.pendingContext=n,l=O4(a,e),l.payload={element:t},r=r===void 0?null:r,r!==null&&(l.callback=r),t=n5(L,l,e),t!==null&&(s4(t,L,e,a),r6(t,L,e)),e}function R6(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function u0(t,l){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<l?n:l}}function A9(t,l){u0(t,l),(t=t.alternate)&&u0(t,l)}function oe(){return null}var $n=typeof reportError=="function"?reportError:function(t){console.error(t)};function U9(t){this._internalRoot=t}r7.prototype.render=U9.prototype.render=function(t){var l=this._internalRoot;if(l===null)throw Error(y(409));n7(t,l,null,null)};r7.prototype.unmount=U9.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var l=t.containerInfo;D5(function(){n7(null,t,null,null)}),l[R4]=null}};function r7(t){this._internalRoot=t}r7.prototype.unstable_scheduleHydration=function(t){if(t){var l=mt();t={blockedOn:null,target:t,priority:l};for(var n=0;n<W4.length&&l!==0&&l<W4[n].priority;n++);W4.splice(n,0,t),n===0&&gt(t)}};function j9(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function L7(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function s0(){}function ue(t,l,n,r,L){if(L){if(typeof r=="function"){var a=r;r=function(){var c=R6(e);a.call(c)}}var e=Wn(l,r,t,0,null,!1,!1,"",s0);return t._reactRootContainer=e,t[R4]=e.current,d3(t.nodeType===8?t.parentNode:t),D5(),e}for(;L=t.lastChild;)t.removeChild(L);if(typeof r=="function"){var i=r;r=function(){var c=R6(f);i.call(c)}}var f=I9(t,0,!1,null,null,!1,!1,"",s0);return t._reactRootContainer=f,t[R4]=f.current,d3(t.nodeType===8?t.parentNode:t),D5(function(){n7(l,f,n,r)}),f}function a7(t,l,n,r,L){var a=n._reactRootContainer;if(a){var e=a;if(typeof L=="function"){var i=L;L=function(){var f=R6(e);i.call(f)}}n7(l,e,t,L)}else e=ue(n,l,t,L,r);return R6(e)}Vt=function(t){switch(t.tag){case 3:var l=t.stateNode;if(l.current.memoizedState.isDehydrated){var n=F2(l.pendingLanes);n!==0&&(f9(l,n|1),z1(l,i1()),!(N&6)&&(b2=i1()+500,s5()))}break;case 13:D5(function(){var r=N4(t,1);if(r!==null){var L=w1();s4(r,t,1,L)}}),A9(t,1)}};c9=function(t){if(t.tag===13){var l=N4(t,134217728);if(l!==null){var n=w1();s4(l,t,134217728,n)}A9(t,134217728)}};Ht=function(t){if(t.tag===13){var l=L5(t),n=N4(t,l);if(n!==null){var r=w1();s4(n,t,l,r)}A9(t,l)}};mt=function(){return F};_t=function(t,l){var n=F;try{return F=t,l()}finally{F=n}};r8=function(t,l,n){switch(l){case"input":if(K7(t,n),l=n.name,n.type==="radio"&&l!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+l)+'][type="radio"]'),l=0;l<n.length;l++){var r=n[l];if(r!==t&&r.form===t.form){var L=X6(r);if(!L)throw Error(y(90));lt(r),K7(r,L)}}}break;case"textarea":nt(t,n);break;case"select":l=n.value,l!=null&&L2(t,!!n.multiple,l,!1)}};ct=R9;dt=D5;var se={usingClientEntryPoint:!1,Events:[x3,X5,X6,it,ft,R9]},z2={findFiberByHostInstance:g5,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ke={bundleType:z2.bundleType,version:z2.version,rendererPackageName:z2.rendererPackageName,rendererConfig:z2.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A4.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ot(t),t===null?null:t.stateNode},findFiberByHostInstance:z2.findFiberByHostInstance||oe,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var K3=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!K3.isDisabled&&K3.supportsFiber)try{W6=K3.inject(ke),g4=K3}catch{}}q1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se;q1.createPortal=function(t,l){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!j9(l))throw Error(y(200));return he(t,l,null,n)};q1.createRoot=function(t,l){if(!j9(t))throw Error(y(299));var n=!1,r="",L=$n;return l!=null&&(l.unstable_strictMode===!0&&(n=!0),l.identifierPrefix!==void 0&&(r=l.identifierPrefix),l.onRecoverableError!==void 0&&(L=l.onRecoverableError)),l=I9(t,1,!1,null,null,n,!1,r,L),t[R4]=l.current,d3(t.nodeType===8?t.parentNode:t),new U9(l)};q1.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var l=t._reactInternals;if(l===void 0)throw typeof t.render=="function"?Error(y(188)):(t=Object.keys(t).join(","),Error(y(268,t)));return t=ot(l),t=t===null?null:t.stateNode,t};q1.flushSync=function(t){return D5(t)};q1.hydrate=function(t,l,n){if(!L7(l))throw Error(y(200));return a7(null,t,l,!0,n)};q1.hydrateRoot=function(t,l,n){if(!j9(t))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,L=!1,a="",e=$n;if(n!=null&&(n.unstable_strictMode===!0&&(L=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(e=n.onRecoverableError)),l=Wn(l,null,t,1,n??null,L,!1,a,e),t[R4]=l.current,d3(t),r)for(t=0;t<r.length;t++)n=r[t],L=n._getVersion,L=L(n._source),l.mutableSourceEagerHydrationData==null?l.mutableSourceEagerHydrationData=[n,L]:l.mutableSourceEagerHydrationData.push(n,L);return new r7(l)};q1.render=function(t,l,n){if(!L7(l))throw Error(y(200));return a7(null,t,l,!1,n)};q1.unmountComponentAtNode=function(t){if(!L7(t))throw Error(y(40));return t._reactRootContainer?(D5(function(){a7(null,null,t,!1,function(){t._reactRootContainer=null,t[R4]=null})}),!0):!1};q1.unstable_batchedUpdates=R9;q1.unstable_renderSubtreeIntoContainer=function(t,l,n,r){if(!L7(n))throw Error(y(200));if(t==null||t._reactInternals===void 0)throw Error(y(38));return a7(t,l,n,!1,r)};q1.version="18.3.1-next-f1338f8080-20240426";function Yn(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yn)}catch(t){console.error(t)}}Yn(),$0.exports=q1;var Me=$0.exports,k0=Me;j7.createRoot=k0.createRoot,j7.hydrateRoot=k0.hydrateRoot;const Ze=`<svg width="1264" height="715" viewBox="0 0 1264 715" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M317.439 703.954L316.134 705.818L324.598 714.175L325.902 712.311L317.439 703.954Z" fill="black"/>\r
<path d="M306.901 703.954L305.597 705.818L314.061 714.175L315.365 712.311L306.901 703.954Z" fill="black"/>\r
<path d="M296.364 703.954L295.06 705.818L303.523 714.174L304.828 712.31L296.364 703.954Z" fill="black"/>\r
<path d="M338.497 693.275L337.192 695.139L345.656 703.496L346.96 701.632L338.497 693.275Z" fill="black"/>\r
<path d="M306.884 693.275L305.58 695.139L314.044 703.496L315.348 701.632L306.884 693.275Z" fill="black"/>\r
<path d="M296.348 693.275L295.043 695.139L303.507 703.495L304.811 701.631L296.348 693.275Z" fill="black"/>\r
<path d="M349.043 682.617L347.739 684.481L356.203 692.838L357.507 690.974L349.043 682.617Z" fill="black"/>\r
<path d="M317.432 682.616L316.128 684.48L324.591 692.837L325.896 690.973L317.432 682.616Z" fill="black"/>\r
<path d="M359.589 671.968L358.284 673.832L366.748 682.189L368.053 680.325L359.589 671.968Z" fill="black"/>\r
<path d="M338.513 671.967L337.209 673.831L345.672 682.188L346.977 680.324L338.513 671.967Z" fill="black"/>\r
<path d="M327.977 671.967L326.672 673.831L335.136 682.188L336.44 680.324L327.977 671.967Z" fill="black"/>\r
<path d="M370.109 661.289L368.805 663.153L377.268 671.509L378.573 669.645L370.109 661.289Z" fill="black"/>\r
<path d="M359.572 661.289L358.268 663.153L366.731 671.509L368.036 669.645L359.572 661.289Z" fill="black"/>\r
<path d="M349.034 661.288L347.73 663.152L356.194 671.509L357.498 669.645L349.034 661.288Z" fill="black"/>\r
<path d="M380.655 650.635L379.35 652.499L387.814 660.856L389.118 658.992L380.655 650.635Z" fill="black"/>\r
<path d="M370.118 650.635L368.813 652.499L377.277 660.856L378.581 658.992L370.118 650.635Z" fill="black"/>\r
<path d="M401.739 639.977L400.435 641.841L408.899 650.198L410.203 648.334L401.739 639.977Z" fill="black"/>\r
<path d="M391.202 639.976L389.898 641.84L398.361 650.196L399.666 648.332L391.202 639.976Z" fill="black"/>\r
<path d="M422.795 629.303L421.491 631.167L429.955 639.523L431.259 637.659L422.795 629.303Z" fill="black"/>\r
<path d="M412.258 629.302L410.954 631.166L419.417 639.523L420.722 637.659L412.258 629.302Z" fill="black"/>\r
<path d="M401.721 629.302L400.417 631.166L408.88 639.523L410.185 637.659L401.721 629.302Z" fill="black"/>\r
<path d="M433.341 618.649L432.037 620.513L440.501 628.869L441.805 627.005L433.341 618.649Z" fill="black"/>\r
<path d="M412.267 618.649L410.962 620.513L419.426 628.869L420.73 627.005L412.267 618.649Z" fill="black"/>\r
<path d="M401.729 618.649L400.425 620.513L408.889 628.869L410.193 627.005L401.729 618.649Z" fill="black"/>\r
<path d="M443.888 607.994L442.583 609.858L451.047 618.215L452.351 616.351L443.888 607.994Z" fill="black"/>\r
<path d="M422.814 607.99L421.51 609.854L429.973 618.21L431.278 616.346L422.814 607.99Z" fill="black"/>\r
<path d="M412.277 607.991L410.972 609.855L419.436 618.211L420.74 616.347L412.277 607.991Z" fill="black"/>\r
<path d="M464.946 597.316L463.641 599.18L472.105 607.537L473.409 605.673L464.946 597.316Z" fill="black"/>\r
<path d="M454.408 597.316L453.104 599.18L461.567 607.537L462.872 605.673L454.408 597.316Z" fill="black"/>\r
<path d="M433.334 597.316L432.029 599.18L440.493 607.536L441.797 605.672L433.334 597.316Z" fill="black"/>\r
<path d="M422.796 597.316L421.492 599.18L429.955 607.536L431.26 605.672L422.796 597.316Z" fill="black"/>\r
<path d="M475.491 586.662L474.187 588.526L482.65 596.883L483.954 595.019L475.491 586.662Z" fill="black"/>\r
<path d="M443.878 586.667L442.574 588.531L451.037 596.887L452.342 595.023L443.878 586.667Z" fill="black"/>\r
<path d="M433.341 586.662L432.037 588.526L440.501 596.882L441.805 595.018L433.341 586.662Z" fill="black"/>\r
<path d="M422.805 586.662L421.501 588.526L429.964 596.883L431.269 595.019L422.805 586.662Z" fill="black"/>\r
<path d="M264.745 586.66L263.441 588.524L271.904 596.88L273.209 595.016L264.745 586.66Z" fill="black"/>\r
<path d="M254.208 586.66L252.904 588.524L261.367 596.88L262.672 595.016L254.208 586.66Z" fill="black"/>\r
<path d="M243.671 586.66L242.366 588.524L250.83 596.88L252.134 595.016L243.671 586.66Z" fill="black"/>\r
<path d="M1149.89 576.017L1148.58 577.881L1157.05 586.238L1158.35 584.374L1149.89 576.017Z" fill="black"/>\r
<path d="M1139.35 576.017L1138.05 577.881L1146.51 586.238L1147.81 584.374L1139.35 576.017Z" fill="black"/>\r
<path d="M1097.2 576.016L1095.9 577.88L1104.36 586.237L1105.67 584.373L1097.2 576.016Z" fill="black"/>\r
<path d="M928.605 576.014L927.3 577.878L935.764 586.235L937.068 584.371L928.605 576.014Z" fill="black"/>\r
<path d="M896.992 576.014L895.688 577.878L904.152 586.235L905.456 584.371L896.992 576.014Z" fill="black"/>\r
<path d="M791.62 576.013L790.315 577.877L798.779 586.233L800.083 584.369L791.62 576.013Z" fill="black"/>\r
<path d="M749.471 576.006L748.167 577.87L756.63 586.227L757.935 584.363L749.471 576.006Z" fill="black"/>\r
<path d="M665.172 576.012L663.868 577.876L672.331 586.232L673.636 584.368L665.172 576.012Z" fill="black"/>\r
<path d="M623.022 576.011L621.718 577.875L630.181 586.231L631.486 584.367L623.022 576.011Z" fill="black"/>\r
<path d="M486.038 576.004L484.734 577.867L493.198 586.224L494.502 584.36L486.038 576.004Z" fill="black"/>\r
<path d="M454.426 576.009L453.121 577.873L461.585 586.229L462.889 584.365L454.426 576.009Z" fill="black"/>\r
<path d="M443.887 576.013L442.583 577.877L451.047 586.233L452.351 584.369L443.887 576.013Z" fill="black"/>\r
<path d="M433.351 576.008L432.046 577.872L440.51 586.229L441.814 584.365L433.351 576.008Z" fill="black"/>\r
<path d="M327.977 576.007L326.673 577.871L335.137 586.227L336.441 584.363L327.977 576.007Z" fill="black"/>\r
<path d="M317.44 576.007L316.136 577.871L324.599 586.227L325.904 584.363L317.44 576.007Z" fill="black"/>\r
<path d="M306.903 576.007L305.599 577.871L314.062 586.227L315.367 584.363L306.903 576.007Z" fill="black"/>\r
<path d="M296.365 576.006L295.061 577.87L303.524 586.227L304.829 584.363L296.365 576.006Z" fill="black"/>\r
<path d="M201.53 576.005L200.226 577.869L208.689 586.226L209.994 584.362L201.53 576.005Z" fill="black"/>\r
<path d="M190.993 576.005L189.688 577.869L198.152 586.226L199.456 584.362L190.993 576.005Z" fill="black"/>\r
<path d="M180.455 576.005L179.151 577.869L187.614 586.225L188.919 584.361L180.455 576.005Z" fill="black"/>\r
<path d="M169.918 576.005L168.614 577.869L177.077 586.225L178.381 584.361L169.918 576.005Z" fill="black"/>\r
<path d="M1160.41 565.332L1159.1 567.196L1167.57 575.552L1168.87 573.688L1160.41 565.332Z" fill="black"/>\r
<path d="M949.662 565.329L948.358 567.193L956.821 575.55L958.126 573.686L949.662 565.329Z" fill="black"/>\r
<path d="M939.125 565.329L937.82 567.193L946.284 575.55L947.588 573.686L939.125 565.329Z" fill="black"/>\r
<path d="M896.976 565.329L895.672 567.193L904.135 575.549L905.44 573.685L896.976 565.329Z" fill="black"/>\r
<path d="M802.14 565.334L800.835 567.198L809.299 575.554L810.603 573.69L802.14 565.334Z" fill="black"/>\r
<path d="M749.454 565.333L748.149 567.197L756.613 575.554L757.917 573.69L749.454 565.333Z" fill="black"/>\r
<path d="M686.23 565.327L684.926 567.19L693.39 575.547L694.694 573.683L686.23 565.327Z" fill="black"/>\r
<path d="M623.006 565.326L621.702 567.19L630.165 575.546L631.47 573.682L623.006 565.326Z" fill="black"/>\r
<path d="M612.469 565.325L611.165 567.19L619.628 575.546L620.933 573.682L612.469 565.325Z" fill="black"/>\r
<path d="M496.559 565.324L495.254 567.189L503.718 575.545L505.022 573.681L496.559 565.324Z" fill="black"/>\r
<path d="M454.41 565.324L453.106 567.188L461.57 575.544L462.874 573.68L454.41 565.324Z" fill="black"/>\r
<path d="M443.871 565.328L442.566 567.192L451.03 575.548L452.334 573.684L443.871 565.328Z" fill="black"/>\r
<path d="M349.036 565.324L347.732 567.188L356.195 575.544L357.5 573.68L349.036 565.324Z" fill="black"/>\r
<path d="M338.499 565.323L337.195 567.187L345.658 575.543L346.963 573.679L338.499 565.323Z" fill="black"/>\r
<path d="M159.365 565.321L158.061 567.185L166.524 575.541L167.829 573.677L159.365 565.321Z" fill="black"/>\r
<path d="M148.827 565.322L147.522 567.186L155.986 575.542L157.29 573.678L148.827 565.322Z" fill="black"/>\r
<path d="M138.29 565.321L136.986 567.185L145.449 575.542L146.754 573.678L138.29 565.321Z" fill="black"/>\r
<path d="M1170.95 554.678L1169.65 556.542L1178.11 564.898L1179.42 563.034L1170.95 554.678Z" fill="black"/>\r
<path d="M1086.66 554.684L1085.35 556.548L1093.82 564.904L1095.12 563.04L1086.66 554.684Z" fill="black"/>\r
<path d="M960.209 554.676L958.904 556.54L967.368 564.896L968.672 563.032L960.209 554.676Z" fill="black"/>\r
<path d="M896.985 554.681L895.68 556.545L904.144 564.902L905.448 563.038L896.985 554.681Z" fill="black"/>\r
<path d="M812.685 554.68L811.381 556.544L819.844 564.9L821.149 563.036L812.685 554.68Z" fill="black"/>\r
<path d="M749.463 554.674L748.159 556.538L756.622 564.894L757.927 563.03L749.463 554.674Z" fill="black"/>\r
<path d="M623.015 554.678L621.71 556.542L630.174 564.898L631.478 563.034L623.015 554.678Z" fill="black"/>\r
<path d="M612.477 554.677L611.172 556.541L619.636 564.898L620.94 563.034L612.477 554.677Z" fill="black"/>\r
<path d="M507.103 554.676L505.799 556.54L514.263 564.896L515.567 563.032L507.103 554.676Z" fill="black"/>\r
<path d="M464.954 554.676L463.649 556.54L472.113 564.896L473.417 563.032L464.954 554.676Z" fill="black"/>\r
<path d="M454.416 554.676L453.112 556.54L461.576 564.896L462.88 563.032L454.416 554.676Z" fill="black"/>\r
<path d="M443.878 554.68L442.574 556.544L451.037 564.9L452.342 563.036L443.878 554.68Z" fill="black"/>\r
<path d="M380.656 554.675L379.352 556.539L387.815 564.895L389.12 563.031L380.656 554.675Z" fill="black"/>\r
<path d="M370.118 554.674L368.814 556.538L377.278 564.895L378.582 563.031L370.118 554.674Z" fill="black"/>\r
<path d="M127.76 554.672L126.456 556.536L134.919 564.892L136.224 563.028L127.76 554.672Z" fill="black"/>\r
<path d="M117.223 554.671L115.918 556.535L124.382 564.892L125.686 563.028L117.223 554.671Z" fill="black"/>\r
<path d="M1192.04 544.031L1190.73 545.895L1199.2 554.252L1200.5 552.388L1192.04 544.031Z" fill="black"/>\r
<path d="M1097.2 544.03L1095.9 545.894L1104.36 554.25L1105.67 552.386L1097.2 544.03Z" fill="black"/>\r
<path d="M1086.66 544.03L1085.36 545.894L1093.82 554.25L1095.13 552.386L1086.66 544.03Z" fill="black"/>\r
<path d="M970.754 544.028L969.45 545.892L977.913 554.249L979.218 552.385L970.754 544.028Z" fill="black"/>\r
<path d="M907.531 544.021L906.226 545.885L914.69 554.242L915.994 552.378L907.531 544.021Z" fill="black"/>\r
<path d="M896.992 544.027L895.688 545.891L904.152 554.248L905.456 552.384L896.992 544.027Z" fill="black"/>\r
<path d="M823.232 544.026L821.927 545.89L830.391 554.247L831.696 552.383L823.232 544.026Z" fill="black"/>\r
<path d="M760.008 544.025L758.703 545.889L767.167 554.246L768.472 552.382L760.008 544.025Z" fill="black"/>\r
<path d="M749.471 544.02L748.167 545.884L756.63 554.24L757.935 552.376L749.471 544.02Z" fill="black"/>\r
<path d="M717.859 544.025L716.554 545.889L725.018 554.245L726.322 552.381L717.859 544.025Z" fill="black"/>\r
<path d="M623.022 544.024L621.718 545.888L630.182 554.244L631.486 552.38L623.022 544.024Z" fill="black"/>\r
<path d="M612.485 544.024L611.181 545.888L619.645 554.244L620.949 552.38L612.485 544.024Z" fill="black"/>\r
<path d="M517.65 544.022L516.345 545.886L524.809 554.243L526.113 552.379L517.65 544.022Z" fill="black"/>\r
<path d="M475.5 544.022L474.196 545.886L482.659 554.242L483.964 552.378L475.5 544.022Z" fill="black"/>\r
<path d="M464.963 544.022L463.658 545.886L472.122 554.242L473.427 552.378L464.963 544.022Z" fill="black"/>\r
<path d="M454.426 544.021L453.121 545.885L461.585 554.242L462.889 552.378L454.426 544.021Z" fill="black"/>\r
<path d="M391.202 544.021L389.898 545.885L398.361 554.241L399.666 552.377L391.202 544.021Z" fill="black"/>\r
<path d="M96.1562 544.017L94.8518 545.881L103.316 554.238L104.62 552.374L96.1562 544.017Z" fill="black"/>\r
<path d="M1202.56 533.352L1201.25 535.216L1209.72 543.572L1211.02 541.708L1202.56 533.352Z" fill="black"/>\r
<path d="M1097.19 533.35L1095.88 535.214L1104.34 543.571L1105.65 541.707L1097.19 533.35Z" fill="black"/>\r
<path d="M1086.65 533.35L1085.34 535.214L1093.81 543.571L1095.11 541.707L1086.65 533.35Z" fill="black"/>\r
<path d="M1044.5 533.35L1043.19 535.214L1051.66 543.57L1052.96 541.706L1044.5 533.35Z" fill="black"/>\r
<path d="M1033.96 533.35L1032.66 535.214L1041.12 543.57L1042.43 541.706L1033.96 533.35Z" fill="black"/>\r
<path d="M1023.42 533.35L1022.12 535.214L1030.58 543.57L1031.89 541.706L1023.42 533.35Z" fill="black"/>\r
<path d="M981.274 533.349L979.97 535.213L988.434 543.57L989.738 541.706L981.274 533.349Z" fill="black"/>\r
<path d="M918.051 533.348L916.746 535.212L925.21 543.568L926.514 541.704L918.051 533.348Z" fill="black"/>\r
<path d="M907.513 533.342L906.209 535.206L914.673 543.562L915.977 541.698L907.513 533.342Z" fill="black"/>\r
<path d="M896.976 533.348L895.672 535.212L904.136 543.568L905.44 541.704L896.976 533.348Z" fill="black"/>\r
<path d="M759.99 533.346L758.686 535.21L767.15 543.567L768.454 541.703L759.99 533.346Z" fill="black"/>\r
<path d="M749.454 533.34L748.149 535.204L756.613 543.561L757.917 541.697L749.454 533.34Z" fill="black"/>\r
<path d="M728.378 533.346L727.074 535.21L735.537 543.566L736.842 541.702L728.378 533.346Z" fill="black"/>\r
<path d="M623.006 533.344L621.701 535.208L630.165 543.565L631.469 541.701L623.006 533.344Z" fill="black"/>\r
<path d="M612.468 533.344L611.163 535.208L619.627 543.565L620.931 541.701L612.468 533.344Z" fill="black"/>\r
<path d="M528.17 533.343L526.865 535.207L535.329 543.564L536.634 541.7L528.17 533.343Z" fill="black"/>\r
<path d="M475.483 533.343L474.179 535.207L482.642 543.564L483.947 541.7L475.483 533.343Z" fill="black"/>\r
<path d="M464.946 533.343L463.641 535.207L472.105 543.563L473.409 541.699L464.946 533.343Z" fill="black"/>\r
<path d="M454.408 533.342L453.104 535.206L461.568 543.563L462.872 541.699L454.408 533.342Z" fill="black"/>\r
<path d="M412.259 533.342L410.954 535.206L419.418 543.563L420.722 541.699L412.259 533.342Z" fill="black"/>\r
<path d="M85.6017 533.338L84.2974 535.202L92.7611 543.559L94.0655 541.695L85.6017 533.338Z" fill="black"/>\r
<path d="M75.0644 533.337L73.76 535.201L82.2238 543.558L83.5281 541.694L75.0644 533.337Z" fill="black"/>\r
<path d="M1213.1 522.692L1211.8 524.555L1220.26 532.912L1221.57 531.048L1213.1 522.692Z" fill="black"/>\r
<path d="M1107.73 522.69L1106.43 524.554L1114.89 532.911L1116.19 531.047L1107.73 522.69Z" fill="black"/>\r
<path d="M1097.19 522.69L1095.89 524.554L1104.35 532.911L1105.66 531.047L1097.19 522.69Z" fill="black"/>\r
<path d="M1086.66 522.69L1085.35 524.554L1093.82 532.911L1095.12 531.047L1086.66 522.69Z" fill="black"/>\r
<path d="M1065.58 522.696L1064.28 524.56L1072.74 532.917L1074.05 531.053L1065.58 522.696Z" fill="black"/>\r
<path d="M1023.43 522.689L1022.13 524.554L1030.59 532.91L1031.9 531.046L1023.43 522.689Z" fill="black"/>\r
<path d="M1002.36 522.689L1001.05 524.553L1009.52 532.91L1010.82 531.046L1002.36 522.689Z" fill="black"/>\r
<path d="M991.821 522.689L990.516 524.553L998.98 532.91L1000.28 531.046L991.821 522.689Z" fill="black"/>\r
<path d="M928.597 522.688L927.292 524.553L935.756 532.909L937.06 531.045L928.597 522.688Z" fill="black"/>\r
<path d="M918.06 522.688L916.755 524.553L925.219 532.909L926.523 531.045L918.06 522.688Z" fill="black"/>\r
<path d="M907.522 522.694L906.217 524.558L914.681 532.915L915.985 531.051L907.522 522.694Z" fill="black"/>\r
<path d="M770.538 522.687L769.233 524.551L777.697 532.908L779.001 531.044L770.538 522.687Z" fill="black"/>\r
<path d="M760 522.687L758.696 524.551L767.16 532.907L768.464 531.043L760 522.687Z" fill="black"/>\r
<path d="M738.925 522.687L737.621 524.551L746.085 532.907L747.389 531.043L738.925 522.687Z" fill="black"/>\r
<path d="M633.553 522.686L632.248 524.549L640.712 532.906L642.016 531.042L633.553 522.686Z" fill="black"/>\r
<path d="M623.015 522.685L621.711 524.549L630.174 532.906L631.479 531.042L623.015 522.685Z" fill="black"/>\r
<path d="M612.478 522.685L611.173 524.549L619.637 532.906L620.941 531.042L612.478 522.685Z" fill="black"/>\r
<path d="M538.715 522.69L537.411 524.554L545.875 532.91L547.179 531.046L538.715 522.69Z" fill="black"/>\r
<path d="M486.029 522.689L484.725 524.553L493.189 532.909L494.493 531.045L486.029 522.689Z" fill="black"/>\r
<path d="M475.493 522.684L474.188 524.548L482.652 532.904L483.957 531.04L475.493 522.684Z" fill="black"/>\r
<path d="M464.956 522.684L463.651 524.548L472.115 532.904L473.42 531.04L464.956 522.684Z" fill="black"/>\r
<path d="M422.806 522.683L421.501 524.547L429.965 532.904L431.27 531.04L422.806 522.683Z" fill="black"/>\r
<path d="M64.5378 522.68L63.2334 524.544L71.6971 532.901L73.0015 531.037L64.5378 522.68Z" fill="black"/>\r
<path d="M1223.65 512.038L1222.35 513.902L1230.81 522.258L1232.11 520.394L1223.65 512.038Z" fill="black"/>\r
<path d="M1107.74 512.043L1106.44 513.907L1114.9 522.263L1116.2 520.399L1107.74 512.043Z" fill="black"/>\r
<path d="M1097.2 512.042L1095.9 513.907L1104.36 522.263L1105.67 520.399L1097.2 512.042Z" fill="black"/>\r
<path d="M1086.67 512.043L1085.36 513.907L1093.83 522.264L1095.13 520.4L1086.67 512.043Z" fill="black"/>\r
<path d="M1076.13 512.042L1074.82 513.907L1083.29 522.263L1084.59 520.399L1076.13 512.042Z" fill="black"/>\r
<path d="M1023.44 512.042L1022.14 513.906L1030.6 522.262L1031.9 520.398L1023.44 512.042Z" fill="black"/>\r
<path d="M1002.37 512.042L1001.06 513.906L1009.53 522.262L1010.83 520.398L1002.37 512.042Z" fill="black"/>\r
<path d="M928.606 512.041L927.301 513.905L935.765 522.261L937.069 520.397L928.606 512.041Z" fill="black"/>\r
<path d="M918.068 512.04L916.764 513.904L925.227 522.261L926.532 520.397L918.068 512.04Z" fill="black"/>\r
<path d="M907.531 512.035L906.226 513.898L914.69 522.255L915.994 520.391L907.531 512.035Z" fill="black"/>\r
<path d="M854.844 512.034L853.539 513.898L862.003 522.255L863.307 520.391L854.844 512.034Z" fill="black"/>\r
<path d="M770.546 512.039L769.242 513.903L777.705 522.259L779.01 520.395L770.546 512.039Z" fill="black"/>\r
<path d="M760.008 512.038L758.704 513.902L767.168 522.259L768.472 520.395L760.008 512.038Z" fill="black"/>\r
<path d="M749.471 512.033L748.167 513.897L756.63 522.253L757.935 520.389L749.471 512.033Z" fill="black"/>\r
<path d="M633.56 512.037L632.255 513.901L640.719 522.258L642.023 520.394L633.56 512.037Z" fill="black"/>\r
<path d="M623.022 512.037L621.718 513.901L630.182 522.257L631.486 520.393L623.022 512.037Z" fill="black"/>\r
<path d="M612.486 512.037L611.182 513.901L619.645 522.257L620.95 520.393L612.486 512.037Z" fill="black"/>\r
<path d="M549.262 512.036L547.958 513.9L556.421 522.256L557.726 520.392L549.262 512.036Z" fill="black"/>\r
<path d="M496.575 512.035L495.27 513.899L503.734 522.256L505.038 520.392L496.575 512.035Z" fill="black"/>\r
<path d="M486.039 512.03L484.735 513.894L493.199 522.25L494.503 520.386L486.039 512.03Z" fill="black"/>\r
<path d="M475.501 512.035L474.197 513.899L482.661 522.256L483.965 520.392L475.501 512.035Z" fill="black"/>\r
<path d="M464.964 512.034L463.659 513.898L472.123 522.255L473.427 520.391L464.964 512.034Z" fill="black"/>\r
<path d="M433.351 512.034L432.047 513.898L440.511 522.255L441.815 520.391L433.351 512.034Z" fill="black"/>\r
<path d="M54.0077 512.03L52.7034 513.894L61.1671 522.25L62.4715 520.386L54.0077 512.03Z" fill="black"/>\r
<path d="M1234.17 501.365L1232.87 503.229L1241.33 511.586L1242.63 509.722L1234.17 501.365Z" fill="black"/>\r
<path d="M1118.26 501.358L1116.96 503.222L1125.42 511.578L1126.72 509.714L1118.26 501.358Z" fill="black"/>\r
<path d="M1107.72 501.364L1106.42 503.228L1114.88 511.584L1116.19 509.72L1107.72 501.364Z" fill="black"/>\r
<path d="M1097.19 501.364L1095.88 503.228L1104.34 511.584L1105.65 509.72L1097.19 501.364Z" fill="black"/>\r
<path d="M1086.65 501.363L1085.34 503.227L1093.81 511.584L1095.11 509.72L1086.65 501.363Z" fill="black"/>\r
<path d="M1023.42 501.362L1022.12 503.226L1030.58 511.583L1031.89 509.719L1023.42 501.362Z" fill="black"/>\r
<path d="M1012.89 501.357L1011.58 503.221L1020.05 511.577L1021.35 509.713L1012.89 501.357Z" fill="black"/>\r
<path d="M949.663 501.361L948.359 503.225L956.823 511.582L958.127 509.718L949.663 501.361Z" fill="black"/>\r
<path d="M939.126 501.361L937.821 503.225L946.285 511.582L947.589 509.718L939.126 501.361Z" fill="black"/>\r
<path d="M928.589 501.361L927.284 503.225L935.748 511.582L937.052 509.718L928.589 501.361Z" fill="black"/>\r
<path d="M918.051 501.361L916.746 503.225L925.21 511.582L926.514 509.718L918.051 501.361Z" fill="black"/>\r
<path d="M865.364 501.361L864.06 503.225L872.524 511.581L873.828 509.717L865.364 501.361Z" fill="black"/>\r
<path d="M781.066 501.36L779.762 503.224L788.225 511.58L789.53 509.716L781.066 501.36Z" fill="black"/>\r
<path d="M770.529 501.359L769.224 503.223L777.688 511.58L778.992 509.716L770.529 501.359Z" fill="black"/>\r
<path d="M759.991 501.359L758.687 503.223L767.151 511.58L768.455 509.716L759.991 501.359Z" fill="black"/>\r
<path d="M644.081 501.352L642.776 503.216L651.24 511.573L652.544 509.709L644.081 501.352Z" fill="black"/>\r
<path d="M633.544 501.358L632.239 503.222L640.703 511.578L642.007 509.714L633.544 501.358Z" fill="black"/>\r
<path d="M623.006 501.357L621.702 503.221L630.165 511.578L631.47 509.714L623.006 501.357Z" fill="black"/>\r
<path d="M559.782 501.357L558.478 503.221L566.942 511.578L568.246 509.714L559.782 501.357Z" fill="black"/>\r
<path d="M496.559 501.356L495.254 503.22L503.718 511.576L505.022 509.712L496.559 501.356Z" fill="black"/>\r
<path d="M486.022 501.351L484.717 503.215L493.181 511.571L494.485 509.707L486.022 501.351Z" fill="black"/>\r
<path d="M475.484 501.356L474.179 503.22L482.643 511.576L483.947 509.712L475.484 501.356Z" fill="black"/>\r
<path d="M1244.72 490.711L1243.41 492.576L1251.88 500.932L1253.18 499.068L1244.72 490.711Z" fill="black"/>\r
<path d="M1118.27 490.704L1116.96 492.568L1125.43 500.924L1126.73 499.06L1118.27 490.704Z" fill="black"/>\r
<path d="M1107.73 490.71L1106.43 492.574L1114.89 500.93L1116.2 499.066L1107.73 490.71Z" fill="black"/>\r
<path d="M1097.19 490.71L1095.89 492.574L1104.35 500.931L1105.66 499.066L1097.19 490.71Z" fill="black"/>\r
<path d="M1023.43 490.708L1022.13 492.572L1030.59 500.929L1031.9 499.065L1023.43 490.708Z" fill="black"/>\r
<path d="M960.209 490.702L958.904 492.566L967.368 500.923L968.672 499.059L960.209 490.702Z" fill="black"/>\r
<path d="M949.672 490.708L948.368 492.572L956.831 500.928L958.136 499.064L949.672 490.708Z" fill="black"/>\r
<path d="M939.135 490.708L937.831 492.572L946.294 500.928L947.599 499.064L939.135 490.708Z" fill="black"/>\r
<path d="M928.598 490.707L927.293 492.571L935.757 500.928L937.061 499.064L928.598 490.707Z" fill="black"/>\r
<path d="M875.911 490.707L874.606 492.571L883.07 500.927L884.375 499.063L875.911 490.707Z" fill="black"/>\r
<path d="M781.075 490.706L779.771 492.57L788.234 500.926L789.539 499.062L781.075 490.706Z" fill="black"/>\r
<path d="M770.538 490.706L769.233 492.57L777.697 500.926L779.001 499.062L770.538 490.706Z" fill="black"/>\r
<path d="M644.09 490.699L642.786 492.563L651.249 500.919L652.554 499.055L644.09 490.699Z" fill="black"/>\r
<path d="M633.552 490.704L632.247 492.568L640.711 500.924L642.015 499.06L633.552 490.704Z" fill="black"/>\r
<path d="M623.015 490.704L621.711 492.568L630.174 500.924L631.479 499.06L623.015 490.704Z" fill="black"/>\r
<path d="M570.328 490.703L569.024 492.567L577.488 500.924L578.792 499.06L570.328 490.703Z" fill="black"/>\r
<path d="M507.104 490.702L505.8 492.566L514.264 500.923L515.568 499.059L507.104 490.702Z" fill="black"/>\r
<path d="M496.567 490.702L495.262 492.566L503.726 500.923L505.03 499.059L496.567 490.702Z" fill="black"/>\r
<path d="M486.031 490.697L484.727 492.561L493.191 500.917L494.495 499.053L486.031 490.697Z" fill="black"/>\r
<path d="M475.493 490.702L474.188 492.566L482.652 500.922L483.957 499.058L475.493 490.702Z" fill="black"/>\r
<path d="M443.879 490.706L442.574 492.57L451.038 500.926L452.343 499.062L443.879 490.706Z" fill="black"/>\r
<path d="M43.4621 490.696L42.1577 492.56L50.6215 500.917L51.9258 499.053L43.4621 490.696Z" fill="black"/>\r
<path d="M1139.35 480.05L1138.05 481.914L1146.51 490.271L1147.82 488.407L1139.35 480.05Z" fill="black"/>\r
<path d="M1128.81 480.05L1127.51 481.914L1135.97 490.27L1137.28 488.406L1128.81 480.05Z" fill="black"/>\r
<path d="M1118.28 480.056L1116.97 481.92L1125.44 490.277L1126.74 488.413L1118.28 480.056Z" fill="black"/>\r
<path d="M1107.74 480.05L1106.44 481.914L1114.9 490.27L1116.2 488.406L1107.74 480.05Z" fill="black"/>\r
<path d="M1033.98 480.049L1032.67 481.913L1041.14 490.269L1042.44 488.405L1033.98 480.049Z" fill="black"/>\r
<path d="M1023.44 480.049L1022.14 481.913L1030.6 490.269L1031.9 488.405L1023.44 480.049Z" fill="black"/>\r
<path d="M970.755 480.048L969.45 481.912L977.914 490.269L979.218 488.405L970.755 480.048Z" fill="black"/>\r
<path d="M960.218 480.054L958.914 481.918L967.377 490.275L968.682 488.411L960.218 480.054Z" fill="black"/>\r
<path d="M949.68 480.048L948.376 481.912L956.84 490.268L958.144 488.404L949.68 480.048Z" fill="black"/>\r
<path d="M939.143 480.048L937.839 481.912L946.302 490.268L947.607 488.404L939.143 480.048Z" fill="black"/>\r
<path d="M886.457 480.047L885.152 481.911L893.616 490.268L894.92 488.404L886.457 480.047Z" fill="black"/>\r
<path d="M791.621 480.046L790.317 481.91L798.78 490.267L800.085 488.403L791.621 480.046Z" fill="black"/>\r
<path d="M781.084 480.046L779.78 481.91L788.243 490.267L789.548 488.403L781.084 480.046Z" fill="black"/>\r
<path d="M665.174 480.045L663.869 481.909L672.333 490.265L673.637 488.401L665.174 480.045Z" fill="black"/>\r
<path d="M654.636 480.045L653.332 481.909L661.796 490.265L663.1 488.401L654.636 480.045Z" fill="black"/>\r
<path d="M644.098 480.05L642.794 481.914L651.257 490.271L652.562 488.407L644.098 480.05Z" fill="black"/>\r
<path d="M633.562 480.045L632.257 481.909L640.721 490.265L642.025 488.401L633.562 480.045Z" fill="black"/>\r
<path d="M580.874 480.044L579.57 481.908L588.034 490.265L589.338 488.401L580.874 480.044Z" fill="black"/>\r
<path d="M507.114 480.043L505.81 481.908L514.273 490.264L515.578 488.4L507.114 480.043Z" fill="black"/>\r
<path d="M496.577 480.043L495.272 481.908L503.736 490.264L505.04 488.4L496.577 480.043Z" fill="black"/>\r
<path d="M486.038 480.048L484.734 481.912L493.198 490.269L494.502 488.405L486.038 480.048Z" fill="black"/>\r
<path d="M32.9345 480.039L31.6301 481.903L40.0937 490.259L41.3981 488.395L32.9345 480.039Z" fill="black"/>\r
<path d="M1181.48 469.377L1180.18 471.242L1188.64 479.598L1189.95 477.734L1181.48 469.377Z" fill="black"/>\r
<path d="M1170.95 469.371L1169.64 471.235L1178.11 479.591L1179.41 477.727L1170.95 469.371Z" fill="black"/>\r
<path d="M1139.34 469.377L1138.03 471.241L1146.49 479.598L1147.8 477.734L1139.34 469.377Z" fill="black"/>\r
<path d="M1128.8 469.377L1127.49 471.241L1135.96 479.598L1137.26 477.734L1128.8 469.377Z" fill="black"/>\r
<path d="M1118.26 469.371L1116.96 471.235L1125.42 479.591L1126.72 477.727L1118.26 469.371Z" fill="black"/>\r
<path d="M1044.5 469.376L1043.19 471.24L1051.66 479.596L1052.96 477.732L1044.5 469.376Z" fill="black"/>\r
<path d="M1033.96 469.376L1032.66 471.24L1041.12 479.597L1042.43 477.733L1033.96 469.376Z" fill="black"/>\r
<path d="M981.275 469.375L979.971 471.239L988.435 479.596L989.739 477.732L981.275 469.375Z" fill="black"/>\r
<path d="M970.738 469.375L969.434 471.239L977.897 479.596L979.202 477.731L970.738 469.375Z" fill="black"/>\r
<path d="M960.2 469.369L958.896 471.233L967.36 479.59L968.664 477.726L960.2 469.369Z" fill="black"/>\r
<path d="M949.663 469.375L948.359 471.239L956.822 479.596L958.127 477.732L949.663 469.375Z" fill="black"/>\r
<path d="M802.141 469.368L800.837 471.232L809.301 479.588L810.605 477.724L802.141 469.368Z" fill="black"/>\r
<path d="M791.603 469.373L790.299 471.237L798.762 479.593L800.067 477.729L791.603 469.373Z" fill="black"/>\r
<path d="M707.305 469.372L706.001 471.236L714.465 479.592L715.769 477.728L707.305 469.372Z" fill="black"/>\r
<path d="M696.768 469.366L695.464 471.23L703.927 479.587L705.232 477.723L696.768 469.366Z" fill="black"/>\r
<path d="M665.155 469.371L663.851 471.236L672.315 479.592L673.619 477.728L665.155 469.371Z" fill="black"/>\r
<path d="M654.618 469.371L653.314 471.235L661.778 479.592L663.082 477.728L654.618 469.371Z" fill="black"/>\r
<path d="M644.082 469.366L642.777 471.23L651.241 479.586L652.545 477.722L644.082 469.366Z" fill="black"/>\r
<path d="M633.544 469.371L632.239 471.235L640.703 479.591L642.007 477.727L633.544 469.371Z" fill="black"/>\r
<path d="M517.633 469.37L516.329 471.234L524.792 479.59L526.097 477.726L517.633 469.37Z" fill="black"/>\r
<path d="M507.096 469.369L505.792 471.233L514.255 479.59L515.56 477.726L507.096 469.369Z" fill="black"/>\r
<path d="M496.559 469.369L495.254 471.233L503.718 479.59L505.022 477.725L496.559 469.369Z" fill="black"/>\r
<path d="M486.022 469.364L484.717 471.228L493.181 479.584L494.485 477.72L486.022 469.364Z" fill="black"/>\r
<path d="M317.424 469.367L316.12 471.231L324.583 479.587L325.888 477.723L317.424 469.367Z" fill="black"/>\r
<path d="M306.886 469.367L305.582 471.231L314.046 479.587L315.35 477.723L306.886 469.367Z" fill="black"/>\r
<path d="M296.349 469.367L295.045 471.231L303.509 479.587L304.813 477.723L296.349 469.367Z" fill="black"/>\r
<path d="M285.812 469.367L284.507 471.231L292.971 479.587L294.275 477.723L285.812 469.367Z" fill="black"/>\r
<path d="M275.275 469.367L273.97 471.231L282.434 479.587L283.738 477.723L275.275 469.367Z" fill="black"/>\r
<path d="M264.737 469.367L263.433 471.231L271.896 479.587L273.201 477.723L264.737 469.367Z" fill="black"/>\r
<path d="M233.125 469.366L231.82 471.23L240.284 479.587L241.588 477.723L233.125 469.366Z" fill="black"/>\r
<path d="M222.588 469.366L221.283 471.23L229.747 479.586L231.051 477.722L222.588 469.366Z" fill="black"/>\r
<path d="M212.051 469.366L210.747 471.23L219.21 479.586L220.515 477.722L212.051 469.366Z" fill="black"/>\r
<path d="M201.514 469.366L200.209 471.23L208.673 479.586L209.977 477.722L201.514 469.366Z" fill="black"/>\r
<path d="M190.976 469.365L189.671 471.229L198.135 479.586L199.439 477.722L190.976 469.365Z" fill="black"/>\r
<path d="M22.3783 469.363L21.074 471.227L29.5376 479.584L30.8419 477.72L22.3783 469.363Z" fill="black"/>\r
<path d="M1202.57 458.724L1201.26 460.588L1209.73 468.945L1211.03 467.081L1202.57 458.724Z" fill="black"/>\r
<path d="M1192.03 458.724L1190.73 460.588L1199.19 468.945L1200.49 467.081L1192.03 458.724Z" fill="black"/>\r
<path d="M1149.88 458.723L1148.58 460.587L1157.04 468.944L1158.34 467.08L1149.88 458.723Z" fill="black"/>\r
<path d="M1139.34 458.723L1138.04 460.587L1146.5 468.944L1147.81 467.08L1139.34 458.723Z" fill="black"/>\r
<path d="M1128.81 458.723L1127.5 460.587L1135.97 468.944L1137.27 467.08L1128.81 458.723Z" fill="black"/>\r
<path d="M1118.27 458.717L1116.96 460.581L1125.43 468.937L1126.73 467.073L1118.27 458.717Z" fill="black"/>\r
<path d="M1044.51 458.722L1043.2 460.586L1051.67 468.943L1052.97 467.079L1044.51 458.722Z" fill="black"/>\r
<path d="M1033.97 458.722L1032.67 460.586L1041.13 468.943L1042.43 467.079L1033.97 458.722Z" fill="black"/>\r
<path d="M981.284 458.721L979.979 460.585L988.443 468.942L989.747 467.078L981.284 458.721Z" fill="black"/>\r
<path d="M970.747 458.721L969.443 460.585L977.906 468.942L979.211 467.078L970.747 458.721Z" fill="black"/>\r
<path d="M960.21 458.715L958.905 460.579L967.369 468.935L968.673 467.072L960.21 458.715Z" fill="black"/>\r
<path d="M896.985 458.72L895.681 460.584L904.144 468.94L905.449 467.077L896.985 458.72Z" fill="black"/>\r
<path d="M812.687 458.719L811.383 460.583L819.846 468.94L821.151 467.076L812.687 458.719Z" fill="black"/>\r
<path d="M802.15 458.714L800.845 460.578L809.309 468.934L810.613 467.07L802.15 458.714Z" fill="black"/>\r
<path d="M791.612 458.719L790.308 460.583L798.771 468.939L800.076 467.075L791.612 458.719Z" fill="black"/>\r
<path d="M728.388 458.718L727.084 460.582L735.548 468.939L736.852 467.075L728.388 458.718Z" fill="black"/>\r
<path d="M717.851 458.718L716.546 460.582L725.01 468.938L726.314 467.074L717.851 458.718Z" fill="black"/>\r
<path d="M665.164 458.717L663.86 460.581L672.323 468.938L673.628 467.074L665.164 458.717Z" fill="black"/>\r
<path d="M654.628 458.717L653.323 460.581L661.787 468.938L663.091 467.074L654.628 458.717Z" fill="black"/>\r
<path d="M644.091 458.712L642.787 460.576L651.25 468.932L652.555 467.068L644.091 458.712Z" fill="black"/>\r
<path d="M591.404 458.711L590.1 460.575L598.563 468.932L599.868 467.068L591.404 458.711Z" fill="black"/>\r
<path d="M517.642 458.715L516.337 460.579L524.801 468.936L526.105 467.072L517.642 458.715Z" fill="black"/>\r
<path d="M507.104 458.716L505.8 460.58L514.263 468.936L515.568 467.072L507.104 458.716Z" fill="black"/>\r
<path d="M496.568 458.715L495.263 460.579L503.727 468.936L505.031 467.072L496.568 458.715Z" fill="black"/>\r
<path d="M486.031 458.71L484.727 460.574L493.191 468.93L494.495 467.067L486.031 458.71Z" fill="black"/>\r
<path d="M338.507 458.713L337.202 460.577L345.666 468.934L346.97 467.07L338.507 458.713Z" fill="black"/>\r
<path d="M327.97 458.713L326.666 460.577L335.13 468.934L336.434 467.07L327.97 458.713Z" fill="black"/>\r
<path d="M190.985 458.712L189.68 460.576L198.144 468.932L199.448 467.068L190.985 458.712Z" fill="black"/>\r
<path d="M180.447 458.711L179.143 460.575L187.606 468.932L188.911 467.068L180.447 458.711Z" fill="black"/>\r
<path d="M169.911 458.711L168.606 460.575L177.07 468.932L178.374 467.068L169.911 458.711Z" fill="black"/>\r
<path d="M22.3871 458.709L21.0828 460.573L29.5464 468.93L30.8507 467.066L22.3871 458.709Z" fill="black"/>\r
<path d="M1213.11 448.064L1211.81 449.928L1220.27 458.285L1221.58 456.421L1213.11 448.064Z" fill="black"/>\r
<path d="M1160.43 448.064L1159.12 449.928L1167.59 458.284L1168.89 456.42L1160.43 448.064Z" fill="black"/>\r
<path d="M1149.89 448.063L1148.58 449.927L1157.05 458.284L1158.35 456.42L1149.89 448.063Z" fill="black"/>\r
<path d="M1139.35 448.063L1138.05 449.927L1146.51 458.284L1147.82 456.42L1139.35 448.063Z" fill="black"/>\r
<path d="M1128.81 448.063L1127.51 449.927L1135.97 458.284L1137.28 456.42L1128.81 448.063Z" fill="black"/>\r
<path d="M1055.05 448.063L1053.75 449.927L1062.21 458.283L1063.52 456.419L1055.05 448.063Z" fill="black"/>\r
<path d="M1044.52 448.062L1043.21 449.926L1051.68 458.283L1052.98 456.419L1044.52 448.062Z" fill="black"/>\r
<path d="M991.83 448.062L990.525 449.926L998.989 458.282L1000.29 456.418L991.83 448.062Z" fill="black"/>\r
<path d="M981.292 448.062L979.988 449.926L988.452 458.282L989.756 456.418L981.292 448.062Z" fill="black"/>\r
<path d="M970.755 448.062L969.45 449.926L977.914 458.282L979.218 456.418L970.755 448.062Z" fill="black"/>\r
<path d="M907.531 448.067L906.226 449.931L914.69 458.287L915.994 456.423L907.531 448.067Z" fill="black"/>\r
<path d="M812.696 448.06L811.392 449.924L819.855 458.28L821.16 456.416L812.696 448.06Z" fill="black"/>\r
<path d="M802.158 448.065L800.854 449.929L809.317 458.286L810.621 456.422L802.158 448.065Z" fill="black"/>\r
<path d="M738.934 448.059L737.63 449.923L746.093 458.28L747.398 456.416L738.934 448.059Z" fill="black"/>\r
<path d="M675.711 448.059L674.407 449.923L682.871 458.279L684.175 456.415L675.711 448.059Z" fill="black"/>\r
<path d="M665.174 448.058L663.869 449.922L672.333 458.279L673.637 456.415L665.174 448.058Z" fill="black"/>\r
<path d="M654.636 448.058L653.332 449.922L661.796 458.279L663.1 456.415L654.636 448.058Z" fill="black"/>\r
<path d="M601.949 448.058L600.645 449.922L609.109 458.278L610.413 456.414L601.949 448.058Z" fill="black"/>\r
<path d="M528.189 448.057L526.884 449.921L535.348 458.277L536.652 456.413L528.189 448.057Z" fill="black"/>\r
<path d="M517.651 448.057L516.347 449.921L524.811 458.277L526.115 456.413L517.651 448.057Z" fill="black"/>\r
<path d="M507.114 448.056L505.81 449.92L514.273 458.277L515.578 456.413L507.114 448.056Z" fill="black"/>\r
<path d="M496.577 448.056L495.272 449.92L503.736 458.277L505.04 456.413L496.577 448.056Z" fill="black"/>\r
<path d="M370.129 448.055L368.824 449.919L377.288 458.276L378.592 456.412L370.129 448.055Z" fill="black"/>\r
<path d="M359.591 448.056L358.287 449.92L366.751 458.277L368.055 456.413L359.591 448.056Z" fill="black"/>\r
<path d="M159.383 448.053L158.079 449.917L166.542 458.273L167.847 456.409L159.383 448.053Z" fill="black"/>\r
<path d="M148.846 448.054L147.541 449.918L156.005 458.274L157.309 456.41L148.846 448.054Z" fill="black"/>\r
<path d="M1234.17 437.391L1232.87 439.256L1241.33 447.612L1242.63 445.748L1234.17 437.391Z" fill="black"/>\r
<path d="M1160.41 437.39L1159.11 439.254L1167.57 447.611L1168.87 445.747L1160.41 437.39Z" fill="black"/>\r
<path d="M1149.87 437.39L1148.57 439.254L1157.03 447.611L1158.34 445.747L1149.87 437.39Z" fill="black"/>\r
<path d="M1139.34 437.39L1138.03 439.254L1146.49 447.611L1147.8 445.747L1139.34 437.39Z" fill="black"/>\r
<path d="M1065.57 437.386L1064.27 439.25L1072.73 447.607L1074.04 445.743L1065.57 437.386Z" fill="black"/>\r
<path d="M1055.04 437.389L1053.73 439.253L1062.2 447.61L1063.5 445.746L1055.04 437.389Z" fill="black"/>\r
<path d="M1044.5 437.389L1043.2 439.253L1051.66 447.609L1052.96 445.745L1044.5 437.389Z" fill="black"/>\r
<path d="M1002.35 437.389L1001.05 439.253L1009.51 447.609L1010.81 445.745L1002.35 437.389Z" fill="black"/>\r
<path d="M991.813 437.388L990.508 439.253L998.972 447.609L1000.28 445.745L991.813 437.388Z" fill="black"/>\r
<path d="M981.275 437.388L979.971 439.252L988.435 447.609L989.739 445.745L981.275 437.388Z" fill="black"/>\r
<path d="M918.052 437.387L916.748 439.252L925.211 447.608L926.516 445.744L918.052 437.387Z" fill="black"/>\r
<path d="M823.216 437.386L821.911 439.25L830.375 447.607L831.679 445.743L823.216 437.386Z" fill="black"/>\r
<path d="M812.678 437.386L811.374 439.25L819.837 447.607L821.142 445.743L812.678 437.386Z" fill="black"/>\r
<path d="M759.992 437.385L758.688 439.249L767.151 447.606L768.455 445.742L759.992 437.385Z" fill="black"/>\r
<path d="M696.768 437.382L695.464 439.246L703.927 447.603L705.232 445.739L696.768 437.382Z" fill="black"/>\r
<path d="M686.23 437.385L684.926 439.249L693.39 447.605L694.694 445.741L686.23 437.385Z" fill="black"/>\r
<path d="M675.693 437.385L674.389 439.249L682.852 447.605L684.157 445.741L675.693 437.385Z" fill="black"/>\r
<path d="M665.155 437.384L663.851 439.248L672.315 447.605L673.619 445.741L665.155 437.384Z" fill="black"/>\r
<path d="M612.47 437.384L611.165 439.248L619.629 447.604L620.933 445.74L612.47 437.384Z" fill="black"/>\r
<path d="M528.171 437.383L526.866 439.247L535.33 447.603L536.634 445.739L528.171 437.383Z" fill="black"/>\r
<path d="M517.633 437.383L516.329 439.247L524.792 447.603L526.097 445.739L517.633 437.383Z" fill="black"/>\r
<path d="M507.096 437.383L505.792 439.247L514.255 447.603L515.56 445.739L507.096 437.383Z" fill="black"/>\r
<path d="M496.559 437.382L495.254 439.246L503.718 447.602L505.022 445.738L496.559 437.382Z" fill="black"/>\r
<path d="M391.185 437.381L389.881 439.245L398.345 447.601L399.649 445.737L391.185 437.381Z" fill="black"/>\r
<path d="M380.648 437.381L379.344 439.245L387.808 447.601L389.112 445.737L380.648 437.381Z" fill="black"/>\r
<path d="M138.29 437.378L136.986 439.242L145.449 447.598L146.754 445.734L138.29 437.378Z" fill="black"/>\r
<path d="M11.8442 437.371L10.5398 439.235L19.0034 447.591L20.3077 445.727L11.8442 437.371Z" fill="black"/>\r
<path d="M1244.72 426.738L1243.41 428.602L1251.88 436.959L1253.18 435.095L1244.72 426.738Z" fill="black"/>\r
<path d="M1170.96 426.737L1169.65 428.601L1178.12 436.958L1179.42 435.094L1170.96 426.737Z" fill="black"/>\r
<path d="M1160.42 426.737L1159.11 428.601L1167.58 436.958L1168.88 435.094L1160.42 426.737Z" fill="black"/>\r
<path d="M1149.88 426.737L1148.58 428.601L1157.04 436.957L1158.34 435.093L1149.88 426.737Z" fill="black"/>\r
<path d="M1076.12 426.736L1074.82 428.6L1083.28 436.956L1084.58 435.092L1076.12 426.736Z" fill="black"/>\r
<path d="M1065.58 426.736L1064.28 428.6L1072.74 436.956L1074.05 435.092L1065.58 426.736Z" fill="black"/>\r
<path d="M1055.05 426.736L1053.74 428.6L1062.2 436.956L1063.51 435.092L1055.05 426.736Z" fill="black"/>\r
<path d="M1002.36 426.735L1001.05 428.599L1009.52 436.955L1010.82 435.091L1002.36 426.735Z" fill="black"/>\r
<path d="M991.822 426.735L990.517 428.599L998.981 436.955L1000.29 435.091L991.822 426.735Z" fill="black"/>\r
<path d="M928.598 426.734L927.293 428.598L935.757 436.954L937.061 435.09L928.598 426.734Z" fill="black"/>\r
<path d="M833.762 426.733L832.457 428.597L840.921 436.953L842.225 435.089L833.762 426.733Z" fill="black"/>\r
<path d="M823.224 426.733L821.92 428.597L830.384 436.953L831.688 435.089L823.224 426.733Z" fill="black"/>\r
<path d="M770.538 426.732L769.233 428.596L777.697 436.953L779.001 435.089L770.538 426.732Z" fill="black"/>\r
<path d="M696.776 426.731L695.471 428.595L703.935 436.951L705.239 435.088L696.776 426.731Z" fill="black"/>\r
<path d="M686.239 426.731L684.935 428.595L693.399 436.951L694.703 435.087L686.239 426.731Z" fill="black"/>\r
<path d="M675.702 426.731L674.397 428.595L682.861 436.951L684.165 435.087L675.702 426.731Z" fill="black"/>\r
<path d="M623.015 426.73L621.711 428.594L630.174 436.95L631.479 435.086L623.015 426.73Z" fill="black"/>\r
<path d="M538.716 426.729L537.412 428.593L545.875 436.95L547.18 435.086L538.716 426.729Z" fill="black"/>\r
<path d="M528.18 426.729L526.875 428.593L535.339 436.95L536.643 435.086L528.18 426.729Z" fill="black"/>\r
<path d="M517.642 426.729L516.338 428.593L524.801 436.95L526.106 435.085L517.642 426.729Z" fill="black"/>\r
<path d="M507.105 426.729L505.801 428.593L514.264 436.949L515.569 435.085L507.105 426.729Z" fill="black"/>\r
<path d="M401.732 426.728L400.428 428.592L408.891 436.948L410.196 435.084L401.732 426.728Z" fill="black"/>\r
<path d="M127.761 426.724L126.457 428.588L134.92 436.945L136.225 435.081L127.761 426.724Z" fill="black"/>\r
<path d="M11.8505 426.722L10.5461 428.586L19.0097 436.942L20.3141 435.078L11.8505 426.722Z" fill="black"/>\r
<path d="M1255.26 416.081L1253.96 417.945L1262.42 426.301L1263.73 424.437L1255.26 416.081Z" fill="black"/>\r
<path d="M1192.04 416.08L1190.73 417.944L1199.2 426.301L1200.5 424.437L1192.04 416.08Z" fill="black"/>\r
<path d="M1181.5 416.08L1180.2 417.944L1188.66 426.301L1189.97 424.437L1181.5 416.08Z" fill="black"/>\r
<path d="M1170.97 416.094L1169.66 417.958L1178.12 426.314L1179.43 424.45L1170.97 416.094Z" fill="black"/>\r
<path d="M1160.43 416.08L1159.12 417.944L1167.59 426.3L1168.89 424.436L1160.43 416.08Z" fill="black"/>\r
<path d="M1086.67 416.079L1085.36 417.943L1093.83 426.3L1095.13 424.436L1086.67 416.079Z" fill="black"/>\r
<path d="M1076.13 416.079L1074.82 417.943L1083.29 426.299L1084.59 424.435L1076.13 416.079Z" fill="black"/>\r
<path d="M1065.59 416.092L1064.29 417.956L1072.75 426.312L1074.06 424.448L1065.59 416.092Z" fill="black"/>\r
<path d="M1002.37 416.078L1001.06 417.942L1009.53 426.298L1010.83 424.435L1002.37 416.078Z" fill="black"/>\r
<path d="M991.83 416.078L990.525 417.942L998.989 426.298L1000.29 424.434L991.83 416.078Z" fill="black"/>\r
<path d="M939.144 416.077L937.839 417.941L946.303 426.298L947.607 424.434L939.144 416.077Z" fill="black"/>\r
<path d="M844.307 416.076L843.003 417.94L851.467 426.297L852.771 424.433L844.307 416.076Z" fill="black"/>\r
<path d="M833.77 416.076L832.466 417.94L840.929 426.297L842.234 424.433L833.77 416.076Z" fill="black"/>\r
<path d="M823.234 416.076L821.929 417.94L830.393 426.297L831.698 424.433L823.234 416.076Z" fill="black"/>\r
<path d="M781.084 416.075L779.78 417.939L788.243 426.296L789.548 424.432L781.084 416.075Z" fill="black"/>\r
<path d="M717.86 416.074L716.555 417.939L725.019 426.295L726.323 424.431L717.86 416.074Z" fill="black"/>\r
<path d="M707.322 416.074L706.018 417.938L714.482 426.295L715.786 424.431L707.322 416.074Z" fill="black"/>\r
<path d="M696.784 416.086L695.48 417.95L703.943 426.307L705.248 424.443L696.784 416.086Z" fill="black"/>\r
<path d="M686.248 416.074L684.944 417.938L693.408 426.295L694.712 424.431L686.248 416.074Z" fill="black"/>\r
<path d="M633.562 416.074L632.257 417.938L640.721 426.294L642.025 424.43L633.562 416.074Z" fill="black"/>\r
<path d="M623.024 416.074L621.72 417.938L630.184 426.294L631.488 424.43L623.024 416.074Z" fill="black"/>\r
<path d="M538.724 416.084L537.42 417.948L545.884 426.305L547.188 424.441L538.724 416.084Z" fill="black"/>\r
<path d="M528.189 416.073L526.884 417.937L535.348 426.293L536.652 424.429L528.189 416.073Z" fill="black"/>\r
<path d="M517.65 416.072L516.346 417.936L524.81 426.293L526.114 424.429L517.65 416.072Z" fill="black"/>\r
<path d="M507.114 416.072L505.81 417.936L514.273 426.293L515.578 424.429L507.114 416.072Z" fill="black"/>\r
<path d="M412.278 416.071L410.973 417.935L419.437 426.292L420.741 424.428L412.278 416.071Z" fill="black"/>\r
<path d="M117.233 416.068L115.929 417.932L124.393 426.288L125.697 424.424L117.233 416.068Z" fill="black"/>\r
<path d="M1.32244 416.067L0.0180664 417.931L8.48174 426.288L9.78611 424.424L1.32244 416.067Z" fill="black"/>\r
<path d="M1255.25 405.405L1253.94 407.269L1262.41 415.626L1263.71 413.761L1255.25 405.405Z" fill="black"/>\r
<path d="M1202.56 405.404L1201.25 407.268L1209.72 415.625L1211.02 413.761L1202.56 405.404Z" fill="black"/>\r
<path d="M1192.02 405.404L1190.72 407.268L1199.18 415.625L1200.49 413.76L1192.02 405.404Z" fill="black"/>\r
<path d="M1181.48 405.404L1180.18 407.268L1188.64 415.625L1189.95 413.76L1181.48 405.404Z" fill="black"/>\r
<path d="M1170.95 405.404L1169.64 407.268L1178.11 415.625L1179.41 413.761L1170.95 405.404Z" fill="black"/>\r
<path d="M1086.65 405.403L1085.34 407.267L1093.81 415.624L1095.11 413.759L1086.65 405.403Z" fill="black"/>\r
<path d="M1076.11 405.403L1074.81 407.267L1083.27 415.623L1084.58 413.759L1076.11 405.403Z" fill="black"/>\r
<path d="M1065.57 405.403L1064.27 407.267L1072.73 415.623L1074.04 413.759L1065.57 405.403Z" fill="black"/>\r
<path d="M1002.35 405.402L1001.05 407.266L1009.51 415.622L1010.81 413.758L1002.35 405.402Z" fill="black"/>\r
<path d="M949.664 405.401L948.359 407.265L956.823 415.622L958.127 413.758L949.664 405.401Z" fill="black"/>\r
<path d="M854.828 405.4L853.523 407.264L861.987 415.621L863.291 413.757L854.828 405.4Z" fill="black"/>\r
<path d="M844.291 405.4L842.987 407.264L851.45 415.62L852.755 413.756L844.291 405.4Z" fill="black"/>\r
<path d="M833.753 405.4L832.448 407.264L840.912 415.62L842.217 413.756L833.753 405.4Z" fill="black"/>\r
<path d="M781.067 405.399L779.762 407.263L788.226 415.62L789.53 413.756L781.067 405.399Z" fill="black"/>\r
<path d="M728.38 405.398L727.076 407.262L735.54 415.619L736.844 413.755L728.38 405.398Z" fill="black"/>\r
<path d="M717.842 405.398L716.538 407.262L725.002 415.619L726.306 413.755L717.842 405.398Z" fill="black"/>\r
<path d="M707.305 405.398L706.001 407.262L714.465 415.619L715.769 413.755L707.305 405.398Z" fill="black"/>\r
<path d="M696.768 405.398L695.464 407.262L703.927 415.618L705.232 413.754L696.768 405.398Z" fill="black"/>\r
<path d="M633.544 405.397L632.24 407.261L640.703 415.618L642.008 413.754L633.544 405.397Z" fill="black"/>\r
<path d="M549.246 405.396L547.941 407.26L556.405 415.617L557.709 413.753L549.246 405.396Z" fill="black"/>\r
<path d="M538.708 405.396L537.404 407.26L545.867 415.617L547.172 413.753L538.708 405.396Z" fill="black"/>\r
<path d="M528.171 405.396L526.867 407.26L535.331 415.617L536.635 413.753L528.171 405.396Z" fill="black"/>\r
<path d="M517.634 405.396L516.33 407.26L524.794 415.616L526.098 413.752L517.634 405.396Z" fill="black"/>\r
<path d="M507.097 405.396L505.792 407.26L514.256 415.616L515.56 413.752L507.097 405.396Z" fill="black"/>\r
<path d="M422.798 405.394L421.493 407.258L429.957 415.615L431.261 413.751L422.798 405.394Z" fill="black"/>\r
<path d="M117.216 405.391L115.911 407.255L124.375 415.611L125.679 413.747L117.216 405.391Z" fill="black"/>\r
<path d="M1.30437 405.389L0 407.253L8.46367 415.61L9.76804 413.746L1.30437 405.389Z" fill="black"/>\r
<path d="M1255.25 394.748L1253.95 396.612L1262.41 404.969L1263.72 403.105L1255.25 394.748Z" fill="black"/>\r
<path d="M1213.1 394.747L1211.8 396.611L1220.26 404.968L1221.57 403.104L1213.1 394.747Z" fill="black"/>\r
<path d="M1202.57 394.747L1201.26 396.611L1209.73 404.968L1211.03 403.104L1202.57 394.747Z" fill="black"/>\r
<path d="M1192.03 394.747L1190.73 396.611L1199.19 404.968L1200.49 403.104L1192.03 394.747Z" fill="black"/>\r
<path d="M1107.73 394.746L1106.43 396.61L1114.89 404.967L1116.2 403.103L1107.73 394.746Z" fill="black"/>\r
<path d="M1097.19 394.746L1095.89 396.61L1104.35 404.967L1105.66 403.103L1097.19 394.746Z" fill="black"/>\r
<path d="M1086.66 394.746L1085.35 396.61L1093.82 404.967L1095.12 403.103L1086.66 394.746Z" fill="black"/>\r
<path d="M1076.12 394.746L1074.82 396.61L1083.28 404.966L1084.58 403.102L1076.12 394.746Z" fill="black"/>\r
<path d="M1002.36 394.745L1001.05 396.609L1009.52 404.965L1010.82 403.102L1002.36 394.745Z" fill="black"/>\r
<path d="M970.747 394.745L969.443 396.609L977.906 404.965L979.211 403.101L970.747 394.745Z" fill="black"/>\r
<path d="M960.21 394.757L958.905 396.621L967.369 404.978L968.673 403.114L960.21 394.757Z" fill="black"/>\r
<path d="M854.837 394.756L853.532 396.62L861.996 404.976L863.3 403.112L854.837 394.756Z" fill="black"/>\r
<path d="M844.299 394.743L842.995 396.607L851.458 404.964L852.763 403.1L844.299 394.743Z" fill="black"/>\r
<path d="M738.926 394.742L737.622 396.606L746.086 404.963L747.39 403.099L738.926 394.742Z" fill="black"/>\r
<path d="M728.389 394.742L727.085 396.606L735.548 404.962L736.853 403.098L728.389 394.742Z" fill="black"/>\r
<path d="M717.852 394.742L716.547 396.606L725.011 404.962L726.315 403.098L717.852 394.742Z" fill="black"/>\r
<path d="M644.089 394.752L642.785 396.616L651.249 404.973L652.553 403.109L644.089 394.752Z" fill="black"/>\r
<path d="M633.553 394.741L632.249 396.605L640.712 404.961L642.017 403.097L633.553 394.741Z" fill="black"/>\r
<path d="M549.254 394.74L547.95 396.604L556.413 404.961L557.718 403.097L549.254 394.74Z" fill="black"/>\r
<path d="M538.715 394.751L537.411 396.615L545.875 404.971L547.179 403.107L538.715 394.751Z" fill="black"/>\r
<path d="M528.18 394.74L526.875 396.604L535.339 404.96L536.643 403.096L528.18 394.74Z" fill="black"/>\r
<path d="M517.642 394.739L516.338 396.603L524.801 404.96L526.106 403.096L517.642 394.739Z" fill="black"/>\r
<path d="M433.344 394.738L432.04 396.602L440.503 404.959L441.808 403.095L433.344 394.738Z" fill="black"/>\r
<path d="M106.687 394.735L105.383 396.599L113.846 404.955L115.151 403.091L106.687 394.735Z" fill="black"/>\r
<path d="M1.31414 394.734L0.00976562 396.598L8.47344 404.954L9.77781 403.09L1.31414 394.734Z" fill="black"/>\r
<path d="M1255.26 384.097L1253.96 385.961L1262.42 394.318L1263.73 392.454L1255.26 384.097Z" fill="black"/>\r
<path d="M1244.73 384.097L1243.42 385.961L1251.89 394.318L1253.19 392.454L1244.73 384.097Z" fill="black"/>\r
<path d="M1234.19 384.097L1232.88 385.961L1241.35 394.318L1242.65 392.453L1234.19 384.097Z" fill="black"/>\r
<path d="M1223.65 384.097L1222.35 385.961L1230.81 394.318L1232.11 392.454L1223.65 384.097Z" fill="black"/>\r
<path d="M1213.11 384.097L1211.81 385.961L1220.27 394.318L1221.58 392.454L1213.11 384.097Z" fill="black"/>\r
<path d="M991.831 384.094L990.526 385.958L998.99 394.315L1000.29 392.451L991.831 384.094Z" fill="black"/>\r
<path d="M981.293 384.094L979.989 385.958L988.452 394.315L989.757 392.451L981.293 384.094Z" fill="black"/>\r
<path d="M865.382 384.092L864.078 385.956L872.541 394.313L873.846 392.449L865.382 384.092Z" fill="black"/>\r
<path d="M854.846 384.093L853.541 385.957L862.005 394.313L863.309 392.449L854.846 384.093Z" fill="black"/>\r
<path d="M781.084 384.091L779.78 385.955L788.243 394.312L789.548 392.448L781.084 384.091Z" fill="black"/>\r
<path d="M770.547 384.091L769.242 385.956L777.706 394.312L779.01 392.448L770.547 384.091Z" fill="black"/>\r
<path d="M760.009 384.091L758.705 385.955L767.169 394.312L768.473 392.448L760.009 384.091Z" fill="black"/>\r
<path d="M749.472 384.091L748.167 385.955L756.631 394.311L757.935 392.447L749.472 384.091Z" fill="black"/>\r
<path d="M738.934 384.091L737.63 385.955L746.094 394.311L747.398 392.447L738.934 384.091Z" fill="black"/>\r
<path d="M654.636 384.09L653.332 385.954L661.796 394.31L663.1 392.446L654.636 384.09Z" fill="black"/>\r
<path d="M644.099 384.09L642.794 385.954L651.258 394.31L652.562 392.446L644.099 384.09Z" fill="black"/>\r
<path d="M549.262 384.088L547.958 385.952L556.422 394.309L557.726 392.445L549.262 384.088Z" fill="black"/>\r
<path d="M538.726 384.088L537.421 385.952L545.885 394.309L547.189 392.445L538.726 384.088Z" fill="black"/>\r
<path d="M528.189 384.088L526.884 385.952L535.348 394.309L536.652 392.445L528.189 384.088Z" fill="black"/>\r
<path d="M517.651 384.088L516.347 385.952L524.811 394.309L526.115 392.445L517.651 384.088Z" fill="black"/>\r
<path d="M243.68 384.085L242.376 385.949L250.84 394.305L252.144 392.441L243.68 384.085Z" fill="black"/>\r
<path d="M233.143 384.084L231.838 385.948L240.302 394.305L241.606 392.441L233.143 384.084Z" fill="black"/>\r
<path d="M222.606 384.084L221.301 385.948L229.765 394.305L231.069 392.441L222.606 384.084Z" fill="black"/>\r
<path d="M212.069 384.084L210.765 385.948L219.228 394.305L220.533 392.441L212.069 384.084Z" fill="black"/>\r
<path d="M201.532 384.084L200.227 385.948L208.691 394.305L209.995 392.441L201.532 384.084Z" fill="black"/>\r
<path d="M190.994 384.084L189.69 385.948L198.154 394.304L199.458 392.44L190.994 384.084Z" fill="black"/>\r
<path d="M180.457 384.084L179.152 385.948L187.616 394.304L188.92 392.44L180.457 384.084Z" fill="black"/>\r
<path d="M169.919 384.084L168.615 385.948L177.079 394.304L178.383 392.44L169.919 384.084Z" fill="black"/>\r
<path d="M106.695 384.083L105.391 385.947L113.855 394.303L115.159 392.439L106.695 384.083Z" fill="black"/>\r
<path d="M1.32244 384.082L0.0180664 385.946L8.48174 394.303L9.78611 392.438L1.32244 384.082Z" fill="black"/>\r
<path d="M875.903 373.411L874.599 375.275L883.063 383.631L884.367 381.767L875.903 373.411Z" fill="black"/>\r
<path d="M865.366 373.41L864.062 375.274L872.525 383.631L873.83 381.767L865.366 373.41Z" fill="black"/>\r
<path d="M654.619 373.408L653.314 375.272L661.778 383.628L663.083 381.764L654.619 373.408Z" fill="black"/>\r
<path d="M549.246 373.407L547.942 375.271L556.406 383.627L557.71 381.763L549.246 373.407Z" fill="black"/>\r
<path d="M538.707 373.418L537.403 375.282L545.867 383.638L547.171 381.774L538.707 373.418Z" fill="black"/>\r
<path d="M528.171 373.407L526.867 375.271L535.331 383.627L536.635 381.763L528.171 373.407Z" fill="black"/>\r
<path d="M517.634 373.406L516.33 375.27L524.794 383.627L526.098 381.763L517.634 373.406Z" fill="black"/>\r
<path d="M443.873 373.402L442.569 375.266L451.033 383.623L452.337 381.759L443.873 373.402Z" fill="black"/>\r
<path d="M275.276 373.404L273.972 375.268L282.435 383.624L283.74 381.76L275.276 373.404Z" fill="black"/>\r
<path d="M264.739 373.404L263.434 375.268L271.898 383.624L273.202 381.76L264.739 373.404Z" fill="black"/>\r
<path d="M148.829 373.402L147.524 375.266L155.988 383.622L157.292 381.758L148.829 373.402Z" fill="black"/>\r
<path d="M138.291 373.402L136.987 375.266L145.45 383.623L146.755 381.759L138.291 373.402Z" fill="black"/>\r
<path d="M127.754 373.402L126.449 375.266L134.913 383.622L136.217 381.758L127.754 373.402Z" fill="black"/>\r
<path d="M106.679 373.402L105.375 375.266L113.838 383.622L115.143 381.758L106.679 373.402Z" fill="black"/>\r
<path d="M1.30608 373.401L0.00170898 375.265L8.46538 383.622L9.76975 381.758L1.30608 373.401Z" fill="black"/>\r
<path d="M886.449 362.76L885.145 364.624L893.608 372.98L894.913 371.116L886.449 362.76Z" fill="black"/>\r
<path d="M875.911 362.76L874.607 364.624L883.071 372.98L884.375 371.116L875.911 362.76Z" fill="black"/>\r
<path d="M865.374 362.759L864.07 364.623L872.533 372.98L873.838 371.116L865.374 362.759Z" fill="black"/>\r
<path d="M665.165 362.757L663.861 364.621L672.324 372.978L673.629 371.114L665.165 362.757Z" fill="black"/>\r
<path d="M549.254 362.755L547.95 364.619L556.413 372.976L557.718 371.112L549.254 362.755Z" fill="black"/>\r
<path d="M538.717 362.756L537.413 364.62L545.876 372.976L547.181 371.112L538.717 362.756Z" fill="black"/>\r
<path d="M528.18 362.755L526.875 364.619L535.339 372.976L536.643 371.112L528.18 362.755Z" fill="black"/>\r
<path d="M517.642 362.755L516.338 364.619L524.801 372.976L526.106 371.112L517.642 362.755Z" fill="black"/>\r
<path d="M306.896 362.752L305.592 364.616L314.056 372.973L315.36 371.109L306.896 362.752Z" fill="black"/>\r
<path d="M296.359 362.752L295.055 364.616L303.518 372.972L304.823 371.108L296.359 362.752Z" fill="black"/>\r
<path d="M117.225 362.75L115.92 364.614L124.384 372.97L125.688 371.106L117.225 362.75Z" fill="black"/>\r
<path d="M106.687 362.75L105.383 364.614L113.846 372.97L115.151 371.106L106.687 362.75Z" fill="black"/>\r
<path d="M1.31341 362.749L0.0090332 364.613L8.47262 372.969L9.777 371.105L1.31341 362.749Z" fill="black"/>\r
<path d="M886.457 352.103L885.152 353.967L893.616 362.323L894.92 360.459L886.457 352.103Z" fill="black"/>\r
<path d="M875.92 352.103L874.616 353.967L883.08 362.323L884.384 360.459L875.92 352.103Z" fill="black"/>\r
<path d="M665.174 352.101L663.869 353.965L672.333 362.321L673.637 360.457L665.174 352.101Z" fill="black"/>\r
<path d="M559.801 352.1L558.496 353.964L566.96 362.32L568.264 360.456L559.801 352.1Z" fill="black"/>\r
<path d="M549.263 352.099L547.959 353.963L556.423 362.32L557.727 360.456L549.263 352.099Z" fill="black"/>\r
<path d="M538.725 352.11L537.421 353.974L545.885 362.33L547.189 360.466L538.725 352.11Z" fill="black"/>\r
<path d="M528.189 352.099L526.884 353.963L535.348 362.319L536.652 360.455L528.189 352.099Z" fill="black"/>\r
<path d="M454.428 352.098L453.123 353.962L461.587 362.318L462.891 360.454L454.428 352.098Z" fill="black"/>\r
<path d="M317.443 352.097L316.138 353.961L324.602 362.317L325.906 360.453L317.443 352.097Z" fill="black"/>\r
<path d="M106.696 352.094L105.392 353.958L113.856 362.315L115.16 360.451L106.696 352.094Z" fill="black"/>\r
<path d="M96.1586 352.094L94.8542 353.958L103.318 362.314L104.622 360.45L96.1586 352.094Z" fill="black"/>\r
<path d="M1.32317 352.093L0.0187988 353.957L8.48247 362.314L9.78684 360.45L1.32317 352.093Z" fill="black"/>\r
<path d="M896.978 341.427L895.673 343.291L904.137 351.647L905.441 349.783L896.978 341.427Z" fill="black"/>\r
<path d="M886.44 341.427L885.136 343.291L893.6 351.647L894.904 349.783L886.44 341.427Z" fill="black"/>\r
<path d="M675.694 341.424L674.389 343.288L682.853 351.644L684.157 349.78L675.694 341.424Z" fill="black"/>\r
<path d="M559.784 341.423L558.479 343.287L566.943 351.643L568.247 349.779L559.784 341.423Z" fill="black"/>\r
<path d="M549.246 341.422L547.942 343.286L556.405 351.643L557.71 349.779L549.246 341.422Z" fill="black"/>\r
<path d="M538.709 341.423L537.404 343.287L545.868 351.643L547.172 349.779L538.709 341.423Z" fill="black"/>\r
<path d="M528.171 341.422L526.867 343.286L535.331 351.643L536.635 349.779L528.171 341.422Z" fill="black"/>\r
<path d="M454.411 341.421L453.106 343.285L461.57 351.642L462.874 349.778L454.411 341.421Z" fill="black"/>\r
<path d="M327.962 341.42L326.658 343.284L335.121 351.64L336.426 349.776L327.962 341.42Z" fill="black"/>\r
<path d="M106.679 341.417L105.375 343.281L113.838 351.637L115.142 349.773L106.679 341.417Z" fill="black"/>\r
<path d="M75.0668 341.416L73.7625 343.28L82.226 351.637L83.5304 349.773L75.0668 341.416Z" fill="black"/>\r
<path d="M1.30511 341.416L0.000732422 343.28L8.46432 351.637L9.7687 349.773L1.30511 341.416Z" fill="black"/>\r
<path d="M907.523 330.783L906.219 332.647L914.683 341.003L915.987 339.139L907.523 330.783Z" fill="black"/>\r
<path d="M896.986 330.77L895.682 332.634L904.145 340.991L905.45 339.127L896.986 330.77Z" fill="black"/>\r
<path d="M886.449 330.77L885.145 332.634L893.608 340.991L894.913 339.127L886.449 330.77Z" fill="black"/>\r
<path d="M675.703 330.767L674.399 332.632L682.862 340.988L684.167 339.124L675.703 330.767Z" fill="black"/>\r
<path d="M559.792 330.766L558.488 332.63L566.952 340.987L568.256 339.123L559.792 330.766Z" fill="black"/>\r
<path d="M549.255 330.766L547.951 332.63L556.414 340.986L557.719 339.122L549.255 330.766Z" fill="black"/>\r
<path d="M538.716 330.777L537.412 332.641L545.875 340.997L547.18 339.133L538.716 330.777Z" fill="black"/>\r
<path d="M528.18 330.766L526.876 332.63L535.34 340.986L536.644 339.122L528.18 330.766Z" fill="black"/>\r
<path d="M464.957 330.765L463.652 332.629L472.116 340.986L473.42 339.122L464.957 330.765Z" fill="black"/>\r
<path d="M338.508 330.763L337.204 332.627L345.668 340.984L346.972 339.12L338.508 330.763Z" fill="black"/>\r
<path d="M106.688 330.761L105.384 332.625L113.847 340.981L115.152 339.117L106.688 330.761Z" fill="black"/>\r
<path d="M64.5383 330.76L63.2339 332.624L71.6976 340.981L73.0019 339.117L64.5383 330.76Z" fill="black"/>\r
<path d="M1.31487 330.76L0.010498 332.624L8.47417 340.981L9.77854 339.117L1.31487 330.76Z" fill="black"/>\r
<path d="M918.07 320.119L916.766 321.983L925.229 330.34L926.534 328.476L918.07 320.119Z" fill="black"/>\r
<path d="M907.532 320.119L906.228 321.983L914.692 330.34L915.996 328.476L907.532 320.119Z" fill="black"/>\r
<path d="M896.995 320.119L895.691 321.983L904.154 330.34L905.459 328.476L896.995 320.119Z" fill="black"/>\r
<path d="M686.248 320.117L684.944 321.981L693.408 330.337L694.712 328.473L686.248 320.117Z" fill="black"/>\r
<path d="M559.801 320.115L558.496 321.979L566.96 330.335L568.264 328.471L559.801 320.115Z" fill="black"/>\r
<path d="M549.263 320.115L547.959 321.979L556.423 330.335L557.727 328.471L549.263 320.115Z" fill="black"/>\r
<path d="M538.726 320.115L537.421 321.979L545.885 330.335L547.189 328.471L538.726 320.115Z" fill="black"/>\r
<path d="M528.19 320.115L526.885 321.979L535.349 330.335L536.653 328.471L528.19 320.115Z" fill="black"/>\r
<path d="M464.965 320.113L463.661 321.977L472.124 330.334L473.429 328.47L464.965 320.113Z" fill="black"/>\r
<path d="M349.054 320.112L347.75 321.976L356.214 330.333L357.518 328.469L349.054 320.112Z" fill="black"/>\r
<path d="M54.0092 320.108L52.7048 321.972L61.1685 330.329L62.4729 328.465L54.0092 320.108Z" fill="black"/>\r
<path d="M1.32244 320.108L0.0180664 321.972L8.48174 330.329L9.78611 328.465L1.32244 320.108Z" fill="black"/>\r
<path d="M918.053 309.437L916.748 311.301L925.212 319.658L926.516 317.794L918.053 309.437Z" fill="black"/>\r
<path d="M907.515 309.449L906.211 311.313L914.675 319.67L915.979 317.806L907.515 309.449Z" fill="black"/>\r
<path d="M686.232 309.435L684.928 311.299L693.391 319.655L694.696 317.791L686.232 309.435Z" fill="black"/>\r
<path d="M559.784 309.433L558.48 311.297L566.944 319.654L568.248 317.79L559.784 309.433Z" fill="black"/>\r
<path d="M549.247 309.433L547.943 311.297L556.406 319.654L557.711 317.79L549.247 309.433Z" fill="black"/>\r
<path d="M538.708 309.444L537.404 311.308L545.867 319.664L547.172 317.8L538.708 309.444Z" fill="black"/>\r
<path d="M528.172 309.433L526.868 311.297L535.332 319.653L536.636 317.789L528.172 309.433Z" fill="black"/>\r
<path d="M464.948 309.432L463.644 311.296L472.107 319.653L473.412 317.789L464.948 309.432Z" fill="black"/>\r
<path d="M349.038 309.431L347.733 311.295L356.197 319.651L357.501 317.787L349.038 309.431Z" fill="black"/>\r
<path d="M117.217 309.428L115.913 311.292L124.376 319.648L125.681 317.784L117.217 309.428Z" fill="black"/>\r
<path d="M1.30608 309.427L0.00170898 311.291L8.46538 319.648L9.76975 317.784L1.30608 309.427Z" fill="black"/>\r
<path d="M928.598 298.784L927.294 300.648L935.757 309.004L937.062 307.14L928.598 298.784Z" fill="black"/>\r
<path d="M918.061 298.783L916.757 300.647L925.22 309.004L926.525 307.14L918.061 298.783Z" fill="black"/>\r
<path d="M696.777 298.792L695.472 300.656L703.936 309.013L705.24 307.149L696.777 298.792Z" fill="black"/>\r
<path d="M559.792 298.779L558.488 300.643L566.952 309L568.256 307.136L559.792 298.779Z" fill="black"/>\r
<path d="M549.255 298.779L547.951 300.643L556.414 309L557.719 307.136L549.255 298.779Z" fill="black"/>\r
<path d="M538.717 298.79L537.413 300.654L545.876 309.01L547.181 307.146L538.717 298.79Z" fill="black"/>\r
<path d="M528.181 298.779L526.877 300.643L535.34 309L536.645 307.136L528.181 298.779Z" fill="black"/>\r
<path d="M464.957 298.778L463.653 300.642L472.117 308.999L473.421 307.135L464.957 298.778Z" fill="black"/>\r
<path d="M359.584 298.777L358.28 300.641L366.743 308.997L368.048 307.133L359.584 298.777Z" fill="black"/>\r
<path d="M43.4645 298.773L42.1602 300.637L50.6238 308.994L51.9282 307.13L43.4645 298.773Z" fill="black"/>\r
<path d="M11.8515 298.775L10.5471 300.639L19.0108 308.995L20.3151 307.131L11.8515 298.775Z" fill="black"/>\r
<path d="M939.145 288.133L937.84 289.997L946.304 298.353L947.608 296.489L939.145 288.133Z" fill="black"/>\r
<path d="M928.607 288.133L927.302 289.997L935.766 298.353L937.07 296.489L928.607 288.133Z" fill="black"/>\r
<path d="M918.07 288.132L916.766 289.997L925.229 298.353L926.534 296.489L918.07 288.132Z" fill="black"/>\r
<path d="M696.787 288.13L695.482 289.994L703.946 298.35L705.25 296.486L696.787 288.13Z" fill="black"/>\r
<path d="M559.801 288.128L558.496 289.992L566.96 298.349L568.264 296.485L559.801 288.128Z" fill="black"/>\r
<path d="M549.264 288.128L547.959 289.992L556.423 298.348L557.727 296.484L549.264 288.128Z" fill="black"/>\r
<path d="M538.727 288.128L537.422 289.992L545.886 298.348L547.19 296.484L538.727 288.128Z" fill="black"/>\r
<path d="M464.965 288.127L463.661 289.991L472.124 298.347L473.429 296.483L464.965 288.127Z" fill="black"/>\r
<path d="M359.592 288.126L358.288 289.99L366.752 298.346L368.056 296.482L359.592 288.126Z" fill="black"/>\r
<path d="M127.771 288.123L126.467 289.987L134.93 298.343L136.235 296.479L127.771 288.123Z" fill="black"/>\r
<path d="M32.9352 288.121L31.6309 289.985L40.0944 298.342L41.3988 296.478L32.9352 288.121Z" fill="black"/>\r
<path d="M11.8605 288.121L10.5562 289.985L19.0197 298.341L20.3241 296.477L11.8605 288.121Z" fill="black"/>\r
<path d="M949.665 277.451L948.361 279.315L956.824 287.671L958.129 285.807L949.665 277.451Z" fill="black"/>\r
<path d="M939.127 277.451L937.823 279.315L946.287 287.671L947.591 285.807L939.127 277.451Z" fill="black"/>\r
<path d="M928.59 277.45L927.286 279.315L935.749 287.671L937.054 285.807L928.59 277.45Z" fill="black"/>\r
<path d="M707.307 277.448L706.002 279.312L714.466 287.669L715.77 285.804L707.307 277.448Z" fill="black"/>\r
<path d="M559.784 277.446L558.48 279.31L566.944 287.667L568.248 285.803L559.784 277.446Z" fill="black"/>\r
<path d="M549.247 277.446L547.943 279.31L556.406 287.666L557.711 285.802L549.247 277.446Z" fill="black"/>\r
<path d="M538.709 277.457L537.404 279.321L545.868 287.677L547.172 285.813L538.709 277.457Z" fill="black"/>\r
<path d="M464.948 277.445L463.644 279.309L472.107 287.666L473.412 285.802L464.948 277.445Z" fill="black"/>\r
<path d="M359.575 277.444L358.271 279.308L366.734 287.664L368.038 285.8L359.575 277.444Z" fill="black"/>\r
<path d="M138.292 277.441L136.988 279.305L145.451 287.662L146.756 285.798L138.292 277.441Z" fill="black"/>\r
<path d="M949.674 266.8L948.369 268.664L956.833 277.021L958.137 275.157L949.674 266.8Z" fill="black"/>\r
<path d="M939.136 266.8L937.832 268.664L946.296 277.02L947.6 275.156L939.136 266.8Z" fill="black"/>\r
<path d="M707.315 266.797L706.01 268.661L714.474 277.017L715.778 275.153L707.315 266.797Z" fill="black"/>\r
<path d="M559.792 266.795L558.488 268.659L566.952 277.016L568.256 275.152L559.792 266.795Z" fill="black"/>\r
<path d="M549.255 266.795L547.951 268.659L556.414 277.015L557.719 275.151L549.255 266.795Z" fill="black"/>\r
<path d="M538.718 266.795L537.413 268.659L545.877 277.015L547.181 275.151L538.718 266.795Z" fill="black"/>\r
<path d="M464.957 266.794L463.653 268.658L472.116 277.014L473.421 275.15L464.957 266.794Z" fill="black"/>\r
<path d="M349.046 266.792L347.741 268.656L356.205 277.013L357.509 275.149L349.046 266.792Z" fill="black"/>\r
<path d="M148.838 266.79L147.533 268.654L155.997 277.01L157.301 275.146L148.838 266.79Z" fill="black"/>\r
<path d="M22.3888 266.788L21.0845 268.652L29.5481 277.009L30.8524 275.145L22.3888 266.788Z" fill="black"/>\r
<path d="M960.22 256.155L958.916 258.019L967.379 266.376L968.684 264.512L960.22 256.155Z" fill="black"/>\r
<path d="M949.683 256.143L948.378 258.007L956.842 266.364L958.146 264.5L949.683 256.143Z" fill="black"/>\r
<path d="M939.145 256.143L937.84 258.007L946.304 266.364L947.608 264.5L939.145 256.143Z" fill="black"/>\r
<path d="M707.324 256.14L706.02 258.004L714.483 266.361L715.788 264.497L707.324 256.14Z" fill="black"/>\r
<path d="M559.802 256.139L558.497 258.003L566.961 266.359L568.265 264.495L559.802 256.139Z" fill="black"/>\r
<path d="M549.264 256.139L547.959 258.003L556.423 266.359L557.728 264.495L549.264 256.139Z" fill="black"/>\r
<path d="M538.726 256.149L537.421 258.013L545.885 266.37L547.189 264.506L538.726 256.149Z" fill="black"/>\r
<path d="M464.966 256.138L463.662 258.002L472.125 266.358L473.43 264.494L464.966 256.138Z" fill="black"/>\r
<path d="M349.055 256.136L347.751 258L356.214 266.357L357.519 264.493L349.055 256.136Z" fill="black"/>\r
<path d="M159.384 256.134L158.079 257.998L166.543 266.355L167.847 264.49L159.384 256.134Z" fill="black"/>\r
<path d="M22.3989 256.132L21.0945 257.996L29.5582 266.353L30.8625 264.489L22.3989 256.132Z" fill="black"/>\r
<path d="M970.74 245.467L969.435 247.331L977.899 255.688L979.203 253.824L970.74 245.467Z" fill="black"/>\r
<path d="M960.202 245.467L958.898 247.331L967.361 255.687L968.666 253.823L960.202 245.467Z" fill="black"/>\r
<path d="M949.665 245.467L948.361 247.331L956.824 255.687L958.129 253.823L949.665 245.467Z" fill="black"/>\r
<path d="M717.844 245.464L716.54 247.328L725.003 255.684L726.308 253.82L717.844 245.464Z" fill="black"/>\r
<path d="M559.784 245.462L558.48 247.326L566.944 255.682L568.248 253.818L559.784 245.462Z" fill="black"/>\r
<path d="M549.247 245.462L547.943 247.326L556.406 255.682L557.711 253.818L549.247 245.462Z" fill="black"/>\r
<path d="M538.71 245.461L537.405 247.325L545.869 255.682L547.173 253.818L538.71 245.461Z" fill="black"/>\r
<path d="M338.5 245.459L337.196 247.323L345.659 255.68L346.964 253.816L338.5 245.459Z" fill="black"/>\r
<path d="M180.44 245.457L179.136 247.321L187.6 255.678L188.904 253.814L180.44 245.457Z" fill="black"/>\r
<path d="M169.903 245.457L168.599 247.321L177.063 255.678L178.367 253.814L169.903 245.457Z" fill="black"/>\r
<path d="M32.9181 245.455L31.6138 247.319L40.0774 255.676L41.3818 253.812L32.9181 245.455Z" fill="black"/>\r
<path d="M970.748 234.811L969.443 236.675L977.907 245.031L979.211 243.167L970.748 234.811Z" fill="black"/>\r
<path d="M960.211 234.822L958.907 236.686L967.371 245.043L968.675 243.179L960.211 234.822Z" fill="black"/>\r
<path d="M717.853 234.807L716.549 236.671L725.012 245.028L726.317 243.164L717.853 234.807Z" fill="black"/>\r
<path d="M559.793 234.805L558.489 236.669L566.953 245.026L568.257 243.162L559.793 234.805Z" fill="black"/>\r
<path d="M549.256 234.805L547.952 236.669L556.415 245.026L557.72 243.162L549.256 234.805Z" fill="black"/>\r
<path d="M538.718 234.816L537.413 236.68L545.877 245.037L547.181 243.173L538.718 234.816Z" fill="black"/>\r
<path d="M454.42 234.804L453.115 236.669L461.579 245.025L462.883 243.161L454.42 234.804Z" fill="black"/>\r
<path d="M327.972 234.803L326.668 236.667L335.131 245.023L336.436 243.159L327.972 234.803Z" fill="black"/>\r
<path d="M317.435 234.803L316.13 236.667L324.594 245.023L325.898 243.159L317.435 234.803Z" fill="black"/>\r
<path d="M212.062 234.802L210.758 236.666L219.221 245.022L220.526 243.158L212.062 234.802Z" fill="black"/>\r
<path d="M201.525 234.802L200.22 236.666L208.684 245.022L209.988 243.158L201.525 234.802Z" fill="black"/>\r
<path d="M190.987 234.801L189.683 236.665L198.146 245.022L199.451 243.158L190.987 234.801Z" fill="black"/>\r
<path d="M32.9272 234.8L31.6228 236.664L40.0865 245.02L41.3908 243.156L32.9272 234.8Z" fill="black"/>\r
<path d="M981.294 224.159L979.99 226.023L988.453 234.38L989.758 232.516L981.294 224.159Z" fill="black"/>\r
<path d="M970.758 224.159L969.453 226.023L977.917 234.38L979.221 232.516L970.758 224.159Z" fill="black"/>\r
<path d="M728.399 224.156L727.094 226.02L735.558 234.377L736.862 232.513L728.399 224.156Z" fill="black"/>\r
<path d="M717.861 224.156L716.557 226.02L725.02 234.377L726.325 232.513L717.861 224.156Z" fill="black"/>\r
<path d="M559.802 224.154L558.497 226.018L566.961 234.375L568.265 232.511L559.802 224.154Z" fill="black"/>\r
<path d="M549.264 224.154L547.959 226.018L556.423 234.375L557.728 232.511L549.264 224.154Z" fill="black"/>\r
<path d="M538.727 224.154L537.422 226.018L545.886 234.375L547.19 232.511L538.727 224.154Z" fill="black"/>\r
<path d="M528.19 224.154L526.885 226.018L535.349 234.374L536.653 232.51L528.19 224.154Z" fill="black"/>\r
<path d="M454.428 224.153L453.124 226.017L461.588 234.373L462.892 232.509L454.428 224.153Z" fill="black"/>\r
<path d="M296.369 224.151L295.064 226.015L303.528 234.372L304.832 232.508L296.369 224.151Z" fill="black"/>\r
<path d="M285.831 224.151L284.527 226.015L292.991 234.371L294.295 232.507L285.831 224.151Z" fill="black"/>\r
<path d="M275.294 224.151L273.99 226.015L282.453 234.371L283.758 232.507L275.294 224.151Z" fill="black"/>\r
<path d="M264.757 224.15L263.452 226.014L271.916 234.371L273.22 232.507L264.757 224.15Z" fill="black"/>\r
<path d="M254.219 224.15L252.915 226.014L261.378 234.371L262.683 232.507L254.219 224.15Z" fill="black"/>\r
<path d="M243.682 224.15L242.378 226.014L250.842 234.371L252.146 232.507L243.682 224.15Z" fill="black"/>\r
<path d="M233.145 224.15L231.84 226.014L240.304 234.371L241.608 232.507L233.145 224.15Z" fill="black"/>\r
<path d="M43.4733 224.148L42.1689 226.012L50.6326 234.368L51.937 232.504L43.4733 224.148Z" fill="black"/>\r
<path d="M991.814 213.478L990.51 215.342L998.973 223.698L1000.28 221.834L991.814 213.478Z" fill="black"/>\r
<path d="M981.277 213.478L979.973 215.342L988.436 223.698L989.741 221.834L981.277 213.478Z" fill="black"/>\r
<path d="M728.382 213.475L727.077 215.339L735.541 223.695L736.845 221.831L728.382 213.475Z" fill="black"/>\r
<path d="M549.247 213.472L547.943 215.336L556.406 223.693L557.711 221.829L549.247 213.472Z" fill="black"/>\r
<path d="M538.709 213.483L537.404 215.347L545.868 223.704L547.172 221.84L538.709 213.483Z" fill="black"/>\r
<path d="M528.173 213.472L526.869 215.336L535.332 223.693L536.637 221.829L528.173 213.472Z" fill="black"/>\r
<path d="M443.875 213.468L442.571 215.332L451.034 223.689L452.339 221.825L443.875 213.468Z" fill="black"/>\r
<path d="M53.9936 213.467L52.6892 215.331L61.1529 223.687L62.4573 221.823L53.9936 213.467Z" fill="black"/>\r
<path d="M1002.36 202.827L1001.06 204.691L1009.52 213.047L1010.82 211.183L1002.36 202.827Z" fill="black"/>\r
<path d="M991.823 202.827L990.519 204.691L998.983 213.047L1000.29 211.183L991.823 202.827Z" fill="black"/>\r
<path d="M981.286 202.827L979.981 204.691L988.445 213.047L989.749 211.183L981.286 202.827Z" fill="black"/>\r
<path d="M728.391 202.824L727.086 204.688L735.55 213.044L736.854 211.18L728.391 202.824Z" fill="black"/>\r
<path d="M549.256 202.821L547.952 204.685L556.415 213.042L557.72 211.178L549.256 202.821Z" fill="black"/>\r
<path d="M538.718 202.821L537.414 204.685L545.878 213.041L547.182 211.177L538.718 202.821Z" fill="black"/>\r
<path d="M528.181 202.821L526.877 204.685L535.34 213.041L536.645 211.177L528.181 202.821Z" fill="black"/>\r
<path d="M443.882 202.824L442.578 204.688L451.041 213.044L452.346 211.18L443.882 202.824Z" fill="black"/>\r
<path d="M54.0019 202.815L52.6975 204.679L61.1611 213.036L62.4655 211.172L54.0019 202.815Z" fill="black"/>\r
<path d="M1002.37 192.17L1001.06 194.034L1009.53 202.391L1010.83 200.527L1002.37 192.17Z" fill="black"/>\r
<path d="M991.831 192.17L990.527 194.034L998.991 202.391L1000.29 200.526L991.831 192.17Z" fill="black"/>\r
<path d="M728.399 192.167L727.094 194.031L735.558 202.387L736.862 200.523L728.399 192.167Z" fill="black"/>\r
<path d="M549.264 192.165L547.959 194.029L556.423 202.385L557.728 200.521L549.264 192.165Z" fill="black"/>\r
<path d="M538.726 192.175L537.421 194.039L545.885 202.395L547.189 200.531L538.726 192.175Z" fill="black"/>\r
<path d="M528.19 192.165L526.886 194.029L535.35 202.385L536.654 200.521L528.19 192.165Z" fill="black"/>\r
<path d="M433.355 192.164L432.05 194.028L440.514 202.384L441.818 200.52L433.355 192.164Z" fill="black"/>\r
<path d="M64.5483 192.159L63.2439 194.023L71.7076 202.38L73.0119 200.516L64.5483 192.159Z" fill="black"/>\r
<path d="M1012.89 181.494L1011.59 183.358L1020.05 191.714L1021.35 189.85L1012.89 181.494Z" fill="black"/>\r
<path d="M1002.35 181.494L1001.05 183.358L1009.51 191.714L1010.82 189.85L1002.35 181.494Z" fill="black"/>\r
<path d="M728.382 181.49L727.077 183.354L735.541 191.711L736.845 189.847L728.382 181.49Z" fill="black"/>\r
<path d="M549.248 181.488L547.943 183.352L556.407 191.709L557.711 189.844L549.248 181.488Z" fill="black"/>\r
<path d="M538.711 181.488L537.406 183.352L545.87 191.708L547.174 189.844L538.711 181.488Z" fill="black"/>\r
<path d="M528.173 181.488L526.869 183.352L535.332 191.708L536.637 189.844L528.173 181.488Z" fill="black"/>\r
<path d="M422.799 181.487L421.495 183.351L429.959 191.707L431.263 189.843L422.799 181.487Z" fill="black"/>\r
<path d="M85.6049 181.482L84.3005 183.346L92.7641 191.703L94.0685 189.839L85.6049 181.482Z" fill="black"/>\r
<path d="M75.0678 181.482L73.7634 183.346L82.227 191.702L83.5314 189.838L75.0678 181.482Z" fill="black"/>\r
<path d="M1023.44 170.837L1022.13 172.701L1030.59 181.058L1031.9 179.194L1023.44 170.837Z" fill="black"/>\r
<path d="M1012.9 170.849L1011.59 172.713L1020.06 181.07L1021.36 179.206L1012.9 170.849Z" fill="black"/>\r
<path d="M728.391 170.834L727.086 172.698L735.55 181.054L736.854 179.19L728.391 170.834Z" fill="black"/>\r
<path d="M538.718 170.842L537.413 172.706L545.877 181.062L547.181 179.198L538.718 170.842Z" fill="black"/>\r
<path d="M528.182 170.832L526.877 172.695L535.341 181.052L536.645 179.188L528.182 170.832Z" fill="black"/>\r
<path d="M517.645 170.831L516.34 172.695L524.804 181.052L526.108 179.188L517.645 170.831Z" fill="black"/>\r
<path d="M412.271 170.83L410.967 172.694L419.43 181.051L420.735 179.187L412.271 170.83Z" fill="black"/>\r
<path d="M96.1523 170.827L94.8479 172.691L103.312 181.047L104.616 179.183L96.1523 170.827Z" fill="black"/>\r
<path d="M1033.98 160.186L1032.68 162.05L1041.14 170.407L1042.45 168.543L1033.98 160.186Z" fill="black"/>\r
<path d="M1023.44 160.186L1022.14 162.05L1030.6 170.407L1031.91 168.543L1023.44 160.186Z" fill="black"/>\r
<path d="M1012.91 160.187L1011.6 162.05L1020.07 170.407L1021.37 168.543L1012.91 160.187Z" fill="black"/>\r
<path d="M538.727 160.18L537.423 162.044L545.887 170.401L547.191 168.537L538.727 160.18Z" fill="black"/>\r
<path d="M528.19 160.18L526.886 162.044L535.35 170.4L536.654 168.536L528.19 160.18Z" fill="black"/>\r
<path d="M517.653 160.18L516.349 162.044L524.812 170.4L526.117 168.536L517.653 160.18Z" fill="black"/>\r
<path d="M401.742 160.179L400.438 162.043L408.902 170.399L410.206 168.535L401.742 160.179Z" fill="black"/>\r
<path d="M391.205 160.178L389.901 162.042L398.364 170.399L399.669 168.535L391.205 160.178Z" fill="black"/>\r
<path d="M117.235 160.175L115.931 162.039L124.394 170.396L125.699 168.532L117.235 160.175Z" fill="black"/>\r
<path d="M106.698 160.175L105.393 162.039L113.857 170.395L115.161 168.531L106.698 160.175Z" fill="black"/>\r
<path d="M22.3989 160.174L21.0945 162.038L29.5582 170.394L30.8625 168.53L22.3989 160.174Z" fill="black"/>\r
<path d="M1044.5 149.504L1043.2 151.368L1051.66 159.725L1052.97 157.861L1044.5 149.504Z" fill="black"/>\r
<path d="M1033.96 149.505L1032.66 151.369L1041.12 159.725L1042.43 157.861L1033.96 149.505Z" fill="black"/>\r
<path d="M1023.43 149.504L1022.12 151.368L1030.59 159.725L1031.89 157.861L1023.43 149.504Z" fill="black"/>\r
<path d="M538.71 149.509L537.405 151.373L545.869 159.729L547.173 157.865L538.71 149.509Z" fill="black"/>\r
<path d="M528.173 149.499L526.869 151.362L535.332 159.719L536.637 157.855L528.173 149.499Z" fill="black"/>\r
<path d="M517.636 149.498L516.331 151.362L524.795 159.719L526.099 157.855L517.636 149.498Z" fill="black"/>\r
<path d="M391.188 149.497L389.884 151.361L398.347 159.717L399.652 157.853L391.188 149.497Z" fill="black"/>\r
<path d="M380.651 149.497L379.346 151.361L387.81 159.718L389.114 157.854L380.651 149.497Z" fill="black"/>\r
<path d="M127.755 149.494L126.451 151.358L134.915 159.714L136.219 157.85L127.755 149.494Z" fill="black"/>\r
<path d="M117.218 149.494L115.914 151.358L124.377 159.714L125.682 157.85L117.218 149.494Z" fill="black"/>\r
<path d="M22.3823 149.493L21.0779 151.357L29.5416 159.713L30.8459 157.849L22.3823 149.493Z" fill="black"/>\r
<path d="M1044.51 138.851L1043.21 140.715L1051.67 149.071L1052.97 147.207L1044.51 138.851Z" fill="black"/>\r
<path d="M1033.97 138.85L1032.67 140.715L1041.13 149.071L1042.44 147.207L1033.97 138.85Z" fill="black"/>\r
<path d="M728.392 138.847L727.087 140.711L735.551 149.068L736.855 147.203L728.392 138.847Z" fill="black"/>\r
<path d="M528.182 138.845L526.877 140.709L535.341 149.065L536.645 147.201L528.182 138.845Z" fill="black"/>\r
<path d="M517.645 138.845L516.34 140.709L524.804 149.065L526.108 147.201L517.645 138.845Z" fill="black"/>\r
<path d="M507.107 138.845L505.803 140.709L514.266 149.065L515.571 147.201L507.107 138.845Z" fill="black"/>\r
<path d="M370.122 138.843L368.818 140.707L377.281 149.063L378.586 147.199L370.122 138.843Z" fill="black"/>\r
<path d="M359.585 138.843L358.28 140.707L366.744 149.063L368.048 147.199L359.585 138.843Z" fill="black"/>\r
<path d="M148.839 138.84L147.535 140.704L155.998 149.061L157.303 147.197L148.839 138.84Z" fill="black"/>\r
<path d="M138.302 138.84L136.997 140.704L145.461 149.06L146.765 147.196L138.302 138.84Z" fill="black"/>\r
<path d="M1055.06 128.2L1053.75 130.064L1062.22 138.42L1063.52 136.556L1055.06 128.2Z" fill="black"/>\r
<path d="M1044.52 128.199L1043.21 130.064L1051.68 138.42L1052.98 136.556L1044.52 128.199Z" fill="black"/>\r
<path d="M728.399 128.196L727.095 130.06L735.559 138.416L736.863 136.552L728.399 128.196Z" fill="black"/>\r
<path d="M517.653 128.193L516.349 130.057L524.812 138.414L526.117 136.55L517.653 128.193Z" fill="black"/>\r
<path d="M507.116 128.193L505.812 130.057L514.276 138.413L515.58 136.549L507.116 128.193Z" fill="black"/>\r
<path d="M338.518 128.191L337.214 130.055L345.677 138.411L346.982 136.547L338.518 128.191Z" fill="black"/>\r
<path d="M327.981 128.191L326.677 130.055L335.14 138.411L336.444 136.547L327.981 128.191Z" fill="black"/>\r
<path d="M317.445 128.19L316.14 130.055L324.604 138.411L325.908 136.547L317.445 128.19Z" fill="black"/>\r
<path d="M190.997 128.189L189.692 130.053L198.156 138.409L199.46 136.545L190.997 128.189Z" fill="black"/>\r
<path d="M180.458 128.189L179.154 130.053L187.617 138.409L188.922 136.545L180.458 128.189Z" fill="black"/>\r
<path d="M169.921 128.189L168.617 130.053L177.081 138.409L178.385 136.545L169.921 128.189Z" fill="black"/>\r
<path d="M32.936 128.187L31.6316 130.051L40.0952 138.408L41.3996 136.544L32.936 128.187Z" fill="black"/>\r
<path d="M1065.58 117.53L1064.27 119.394L1072.74 127.75L1074.04 125.886L1065.58 117.53Z" fill="black"/>\r
<path d="M1055.04 117.518L1053.73 119.382L1062.2 127.738L1063.5 125.874L1055.04 117.518Z" fill="black"/>\r
<path d="M507.099 117.511L505.795 119.376L514.259 127.732L515.563 125.868L507.099 117.511Z" fill="black"/>\r
<path d="M496.561 117.511L495.257 119.375L503.721 127.732L505.025 125.868L496.561 117.511Z" fill="black"/>\r
<path d="M296.353 117.509L295.048 119.373L303.512 127.729L304.816 125.865L296.353 117.509Z" fill="black"/>\r
<path d="M285.815 117.509L284.511 119.373L292.974 127.729L294.279 125.865L285.815 117.509Z" fill="black"/>\r
<path d="M275.278 117.509L273.973 119.373L282.437 127.729L283.741 125.865L275.278 117.509Z" fill="black"/>\r
<path d="M264.741 117.509L263.436 119.373L271.9 127.729L273.204 125.865L264.741 117.509Z" fill="black"/>\r
<path d="M254.204 117.508L252.899 119.372L261.363 127.729L262.667 125.865L254.204 117.508Z" fill="black"/>\r
<path d="M243.666 117.509L242.362 119.373L250.826 127.729L252.13 125.865L243.666 117.509Z" fill="black"/>\r
<path d="M233.129 117.508L231.825 119.372L240.288 127.729L241.593 125.865L233.129 117.508Z" fill="black"/>\r
<path d="M222.591 117.508L221.287 119.372L229.751 127.729L231.055 125.865L222.591 117.508Z" fill="black"/>\r
<path d="M212.054 117.508L210.75 119.372L219.213 127.729L220.518 125.865L212.054 117.508Z" fill="black"/>\r
<path d="M43.4572 117.506L42.1528 119.37L50.6164 127.726L51.9208 125.862L43.4572 117.506Z" fill="black"/>\r
<path d="M1076.12 106.867L1074.82 108.731L1083.28 117.088L1084.59 115.224L1076.12 106.867Z" fill="black"/>\r
<path d="M1065.59 106.867L1064.28 108.731L1072.74 117.087L1074.05 115.223L1065.59 106.867Z" fill="black"/>\r
<path d="M1055.05 106.867L1053.74 108.731L1062.21 117.087L1063.51 115.223L1055.05 106.867Z" fill="black"/>\r
<path d="M717.854 106.863L716.55 108.727L725.014 117.083L726.318 115.219L717.854 106.863Z" fill="black"/>\r
<path d="M507.107 106.86L505.803 108.724L514.266 117.08L515.571 115.216L507.107 106.86Z" fill="black"/>\r
<path d="M496.571 106.86L495.266 108.724L503.73 117.08L505.034 115.216L496.571 106.86Z" fill="black"/>\r
<path d="M486.033 106.86L484.728 108.724L493.192 117.08L494.496 115.216L486.033 106.86Z" fill="black"/>\r
<path d="M43.4653 106.854L42.1609 108.718L50.6245 117.075L51.9289 115.211L43.4653 106.854Z" fill="black"/>\r
<path d="M1086.67 96.2105L1085.36 98.0745L1093.83 106.431L1095.13 104.567L1086.67 96.2105Z" fill="black"/>\r
<path d="M1076.13 96.2105L1074.83 98.0745L1083.29 106.431L1084.59 104.567L1076.13 96.2105Z" fill="black"/>\r
<path d="M1065.6 96.2225L1064.29 98.0865L1072.75 106.443L1074.06 104.579L1065.6 96.2225Z" fill="black"/>\r
<path d="M496.579 96.2036L495.275 98.0677L503.738 106.424L505.043 104.56L496.579 96.2036Z" fill="black"/>\r
<path d="M486.041 96.2135L484.736 98.0775L493.2 106.434L494.504 104.57L486.041 96.2135Z" fill="black"/>\r
<path d="M54.0116 96.1986L52.7073 98.0626L61.1709 106.419L62.4753 104.555L54.0116 96.1986Z" fill="black"/>\r
<path d="M1097.19 85.534L1095.88 87.398L1104.35 95.7545L1105.65 93.8905L1097.19 85.534Z" fill="black"/>\r
<path d="M1086.65 85.5342L1085.35 87.3983L1093.81 95.7548L1095.12 93.8907L1086.65 85.5342Z" fill="black"/>\r
<path d="M1076.11 85.534L1074.81 87.398L1083.27 95.7545L1084.58 93.8905L1076.11 85.534Z" fill="black"/>\r
<path d="M486.024 85.527L484.72 87.3909L493.184 95.7474L494.488 93.8835L486.024 85.527Z" fill="black"/>\r
<path d="M475.487 85.5262L474.183 87.3902L482.647 95.7467L483.951 93.8828L475.487 85.5262Z" fill="black"/>\r
<path d="M53.9946 85.5211L52.6902 87.3851L61.1539 95.7416L62.4582 93.8776L53.9946 85.5211Z" fill="black"/>\r
<path d="M1107.73 74.8778L1106.43 76.7418L1114.89 85.0983L1116.2 83.2343L1107.73 74.8778Z" fill="black"/>\r
<path d="M1097.2 74.8775L1095.89 76.7415L1104.36 85.098L1105.66 83.234L1097.2 74.8775Z" fill="black"/>\r
<path d="M1086.66 74.8777L1085.36 76.7418L1093.82 85.0983L1095.12 83.2342L1086.66 74.8777Z" fill="black"/>\r
<path d="M475.496 74.8702L474.192 76.7342L482.655 85.0907L483.96 83.2267L475.496 74.8702Z" fill="black"/>\r
<path d="M464.959 74.8699L463.654 76.7339L472.118 85.0905L473.422 83.2264L464.959 74.8699Z" fill="black"/>\r
<path d="M75.0783 74.8659L73.7739 76.7299L82.2376 85.0864L83.542 83.2224L75.0783 74.8659Z" fill="black"/>\r
<path d="M64.5409 74.8657L63.2366 76.7297L71.7002 85.0862L73.0046 83.2222L64.5409 74.8657Z" fill="black"/>\r
<path d="M1118.28 64.2273L1116.98 66.0912L1125.44 74.4478L1126.74 72.5838L1118.28 64.2273Z" fill="black"/>\r
<path d="M1107.74 64.2269L1106.44 66.0909L1114.9 74.4474L1116.21 72.5834L1107.74 64.2269Z" fill="black"/>\r
<path d="M1097.21 64.2263L1095.9 66.0904L1104.37 74.4469L1105.67 72.5829L1097.21 64.2263Z" fill="black"/>\r
<path d="M1086.67 64.2266L1085.36 66.0906L1093.83 74.4472L1095.13 72.5831L1086.67 64.2266Z" fill="black"/>\r
<path d="M464.967 64.2189L463.662 66.0829L472.126 74.4395L473.43 72.5754L464.967 64.2189Z" fill="black"/>\r
<path d="M454.429 64.2186L453.125 66.0827L461.589 74.4392L462.893 72.5752L454.429 64.2186Z" fill="black"/>\r
<path d="M443.892 64.2221L442.588 66.0861L451.051 74.4426L452.356 72.5786L443.892 64.2221Z" fill="black"/>\r
<path d="M85.6237 64.2141L84.3193 66.0781L92.783 74.4346L94.0874 72.5706L85.6237 64.2141Z" fill="black"/>\r
<path d="M1118.26 53.557L1116.96 55.421L1125.42 63.7775L1126.73 61.9135L1118.26 53.557Z" fill="black"/>\r
<path d="M1107.73 53.5448L1106.42 55.4088L1114.89 63.7653L1116.19 61.9013L1107.73 53.5448Z" fill="black"/>\r
<path d="M1097.19 53.5445L1095.88 55.4085L1104.35 63.765L1105.65 61.901L1097.19 53.5445Z" fill="black"/>\r
<path d="M454.413 53.5371L453.109 55.4012L461.572 63.7577L462.877 61.8936L454.413 53.5371Z" fill="black"/>\r
<path d="M443.876 53.5346L442.571 55.3986L451.035 63.7551L452.339 61.8911L443.876 53.5346Z" fill="black"/>\r
<path d="M96.144 53.5329L94.8396 55.3969L103.303 63.7534L104.608 61.8894L96.144 53.5329Z" fill="black"/>\r
<path d="M1128.81 42.8939L1127.51 44.758L1135.97 53.1144L1137.27 51.2504L1128.81 42.8939Z" fill="black"/>\r
<path d="M1118.27 42.8943L1116.97 44.7582L1125.43 53.1147L1126.74 51.2507L1118.27 42.8943Z" fill="black"/>\r
<path d="M1107.74 42.8934L1106.43 44.7574L1114.89 53.1138L1116.2 51.2499L1107.74 42.8934Z" fill="black"/>\r
<path d="M443.884 42.8891L442.579 44.7531L451.043 53.1096L452.347 51.2455L443.884 42.8891Z" fill="black"/>\r
<path d="M433.347 42.8852L432.042 44.7492L440.506 53.1056L441.81 51.2416L433.347 42.8852Z" fill="black"/>\r
<path d="M422.809 42.885L421.505 44.749L429.968 53.1054L431.273 51.2414L422.809 42.885Z" fill="black"/>\r
<path d="M106.69 42.881L105.385 44.7451L113.849 53.1015L115.153 51.2375L106.69 42.881Z" fill="black"/>\r
<path d="M1139.36 32.2377L1138.05 34.1017L1146.51 42.4583L1147.82 40.5942L1139.36 32.2377Z" fill="black"/>\r
<path d="M1128.82 32.2374L1127.51 34.1015L1135.98 42.458L1137.28 40.594L1128.82 32.2374Z" fill="black"/>\r
<path d="M1118.28 32.2491L1116.98 34.1131L1125.44 42.4696L1126.75 40.6057L1118.28 32.2491Z" fill="black"/>\r
<path d="M1107.74 32.237L1106.44 34.101L1114.9 42.4575L1116.21 40.5936L1107.74 32.237Z" fill="black"/>\r
<path d="M422.818 32.2289L421.514 34.093L429.977 42.4495L431.282 40.5855L422.818 32.2289Z" fill="black"/>\r
<path d="M412.28 32.2293L410.976 34.0933L419.44 42.4498L420.744 40.5858L412.28 32.2293Z" fill="black"/>\r
<path d="M401.743 32.2289L400.439 34.093L408.903 42.4495L410.207 40.5855L401.743 32.2289Z" fill="black"/>\r
<path d="M127.774 32.2258L126.47 34.0898L134.933 42.4463L136.238 40.5823L127.774 32.2258Z" fill="black"/>\r
<path d="M401.726 21.5519L400.422 23.416L408.885 31.7724L410.19 29.9084L401.726 21.5519Z" fill="black"/>\r
<path d="M391.189 21.5517L389.885 23.4157L398.348 31.7722L399.652 29.9081L391.189 21.5517Z" fill="black"/>\r
<path d="M380.652 21.5515L379.347 23.4155L387.811 31.7719L389.115 29.9079L380.652 21.5515Z" fill="black"/>\r
<path d="M159.368 21.5491L158.064 23.4131L166.528 31.7695L167.832 29.9055L159.368 21.5491Z" fill="black"/>\r
<path d="M148.831 21.5488L147.527 23.4128L155.99 31.7692L157.295 29.9052L148.831 21.5488Z" fill="black"/>\r
<path d="M138.294 21.5485L136.989 23.4125L145.453 31.769L146.757 29.905L138.294 21.5485Z" fill="black"/>\r
<path d="M370.124 10.8952L368.82 12.7592L377.283 21.1157L378.588 19.2517L370.124 10.8952Z" fill="black"/>\r
<path d="M359.587 10.895L358.282 12.759L366.746 21.1155L368.05 19.2515L359.587 10.895Z" fill="black"/>\r
<path d="M349.049 10.8952L347.745 12.7592L356.208 21.1157L357.513 19.2517L349.049 10.8952Z" fill="black"/>\r
<path d="M338.512 10.895L337.207 12.759L345.671 21.1155L346.975 19.2515L338.512 10.895Z" fill="black"/>\r
<path d="M190.989 10.8936L189.685 12.7576L198.149 21.1141L199.453 19.2501L190.989 10.8936Z" fill="black"/>\r
<path d="M180.452 10.8933L179.148 12.7573L187.611 21.1138L188.916 19.2498L180.452 10.8933Z" fill="black"/>\r
<path d="M169.915 10.8931L168.61 12.7571L177.074 21.1136L178.378 19.2496L169.915 10.8931Z" fill="black"/>\r
<path d="M338.52 0.243412L337.216 2.10742L345.679 10.4639L346.984 8.59993L338.52 0.243412Z" fill="black"/>\r
<path d="M327.983 0.243168L326.678 2.10718L335.142 10.4637L336.446 8.59969L327.983 0.243168Z" fill="black"/>\r
<path d="M317.445 0.243168L316.141 2.10718L324.605 10.4637L325.909 8.59969L317.445 0.243168Z" fill="black"/>\r
<path d="M306.908 0.242924L305.604 2.10693L314.067 10.4635L315.372 8.59944L306.908 0.242924Z" fill="black"/>\r
<path d="M296.37 0.242679L295.066 2.10669L303.53 10.4632L304.834 8.5992L296.37 0.242679Z" fill="black"/>\r
<path d="M285.833 0.242924L284.529 2.10693L292.992 10.4635L294.297 8.59944L285.833 0.242924Z" fill="black"/>\r
<path d="M275.296 0.242679L273.991 2.10669L282.455 10.4632L283.759 8.5992L275.296 0.242679Z" fill="black"/>\r
<path d="M264.758 0.242557L263.454 2.10657L271.918 10.4631L273.222 8.59908L264.758 0.242557Z" fill="black"/>\r
<path d="M254.221 0.242191L252.917 2.1062L261.38 10.4627L262.685 8.59871L254.221 0.242191Z" fill="black"/>\r
<path d="M243.684 0.241947L242.379 2.10596L250.843 10.4625L252.147 8.59847L243.684 0.241947Z" fill="black"/>\r
<path d="M233.146 0.241947L231.842 2.10596L240.306 10.4625L241.61 8.59847L233.146 0.241947Z" fill="black"/>\r
<path d="M222.61 0.241703L221.305 2.10571L229.769 10.4622L231.073 8.59822L222.61 0.241703Z" fill="black"/>\r
<path d="M212.072 0.241947L210.768 2.10596L219.232 10.4625L220.536 8.59847L212.072 0.241947Z" fill="black"/>\r
<path d="M201.535 0.241703L200.23 2.10571L208.694 10.4622L209.999 8.59822L201.535 0.241703Z" fill="black"/>\r
<path d="M324.195 703.775L316.39 712.993L317.829 714.712L325.633 705.494L324.195 703.775Z" fill="black"/>\r
<path d="M313.657 703.774L305.852 712.992L307.291 714.711L315.095 705.493L313.657 703.774Z" fill="black"/>\r
<path d="M303.119 703.774L295.314 712.992L296.753 714.711L304.557 705.493L303.119 703.774Z" fill="black"/>\r
<path d="M345.255 693.094L337.451 702.312L338.89 704.031L346.694 694.813L345.255 693.094Z" fill="black"/>\r
<path d="M313.641 693.093L305.837 702.311L307.275 704.029L315.08 694.811L313.641 693.093Z" fill="black"/>\r
<path d="M303.103 693.092L295.299 702.31L296.737 704.029L304.542 694.811L303.103 693.092Z" fill="black"/>\r
<path d="M355.813 682.41L348.008 691.628L349.447 693.347L357.252 684.128L355.813 682.41Z" fill="black"/>\r
<path d="M324.197 682.415L316.392 691.633L317.831 693.352L325.636 684.134L324.197 682.415Z" fill="black"/>\r
<path d="M366.348 671.788L358.543 681.006L359.982 682.725L367.787 673.507L366.348 671.788Z" fill="black"/>\r
<path d="M345.272 671.787L337.467 681.005L338.906 682.724L346.71 673.506L345.272 671.787Z" fill="black"/>\r
<path d="M334.734 671.786L326.93 681.004L328.369 682.723L336.173 673.505L334.734 671.786Z" fill="black"/>\r
<path d="M376.87 661.106L369.066 670.324L370.505 672.043L378.309 662.825L376.87 661.106Z" fill="black"/>\r
<path d="M366.332 661.106L358.528 670.324L359.967 672.043L367.771 662.825L366.332 661.106Z" fill="black"/>\r
<path d="M355.795 661.105L347.99 670.324L349.429 672.042L357.233 662.824L355.795 661.105Z" fill="black"/>\r
<path d="M387.417 650.453L379.612 659.671L381.051 661.39L388.855 652.172L387.417 650.453Z" fill="black"/>\r
<path d="M376.879 650.453L369.074 659.671L370.513 661.389L378.318 652.171L376.879 650.453Z" fill="black"/>\r
<path d="M408.511 639.77L400.707 648.988L402.145 650.706L409.95 641.488L408.511 639.77Z" fill="black"/>\r
<path d="M397.971 639.775L390.167 648.993L391.606 650.712L399.41 641.494L397.971 639.775Z" fill="black"/>\r
<path d="M429.561 629.12L421.757 638.338L423.196 640.057L431 630.839L429.561 629.12Z" fill="black"/>\r
<path d="M419.023 629.12L411.219 638.338L412.658 640.056L420.462 630.838L419.023 629.12Z" fill="black"/>\r
<path d="M408.485 629.119L400.681 638.337L402.119 640.056L409.924 630.838L408.485 629.119Z" fill="black"/>\r
<path d="M440.108 618.467L432.303 627.685L433.742 629.404L441.546 620.186L440.108 618.467Z" fill="black"/>\r
<path d="M419.031 618.466L411.227 627.684L412.666 629.403L420.47 620.185L419.031 618.466Z" fill="black"/>\r
<path d="M408.494 618.465L400.69 627.683L402.129 629.402L409.933 620.184L408.494 618.465Z" fill="black"/>\r
<path d="M450.654 607.814L442.85 617.032L444.289 618.75L452.093 609.532L450.654 607.814Z" fill="black"/>\r
<path d="M429.586 607.788L421.781 617.006L423.22 618.725L431.025 609.507L429.586 607.788Z" fill="black"/>\r
<path d="M419.05 607.781L411.246 616.999L412.685 618.718L420.489 609.5L419.05 607.781Z" fill="black"/>\r
<path d="M471.717 597.127L463.912 606.345L465.351 608.064L473.156 598.846L471.717 597.127Z" fill="black"/>\r
<path d="M461.178 597.127L453.374 606.345L454.813 608.064L462.617 598.846L461.178 597.127Z" fill="black"/>\r
<path d="M440.1 597.131L432.296 606.349L433.735 608.068L441.539 598.85L440.1 597.131Z" fill="black"/>\r
<path d="M429.562 597.131L421.758 606.349L423.197 608.068L431.001 598.85L429.562 597.131Z" fill="black"/>\r
<path d="M482.263 586.474L474.459 595.692L475.898 597.411L483.702 588.193L482.263 586.474Z" fill="black"/>\r
<path d="M450.645 586.482L442.841 595.7L444.28 597.419L452.084 588.201L450.645 586.482Z" fill="black"/>\r
<path d="M440.11 586.478L432.305 595.696L433.744 597.415L441.549 588.197L440.11 586.478Z" fill="black"/>\r
<path d="M429.571 586.477L421.766 595.695L423.205 597.414L431.009 588.196L429.571 586.477Z" fill="black"/>\r
<path d="M271.501 586.47L263.696 595.688L265.135 597.407L272.94 588.189L271.501 586.47Z" fill="black"/>\r
<path d="M260.963 586.469L253.158 595.687L254.597 597.406L262.402 588.188L260.963 586.469Z" fill="black"/>\r
<path d="M250.424 586.469L242.62 595.687L244.059 597.406L251.863 588.188L250.424 586.469Z" fill="black"/>\r
<path d="M1156.7 575.85L1148.9 585.068L1150.34 586.787L1158.14 577.569L1156.7 575.85Z" fill="black"/>\r
<path d="M1146.17 575.85L1138.36 585.068L1139.8 586.787L1147.6 577.569L1146.17 575.85Z" fill="black"/>\r
<path d="M1104.01 575.848L1096.21 585.066L1097.65 586.785L1105.45 577.567L1104.01 575.848Z" fill="black"/>\r
<path d="M935.405 575.841L927.601 585.059L929.04 586.777L936.844 577.559L935.405 575.841Z" fill="black"/>\r
<path d="M903.791 575.839L895.987 585.057L897.426 586.776L905.23 577.558L903.791 575.839Z" fill="black"/>\r
<path d="M798.411 575.835L790.606 585.053L792.045 586.771L799.85 577.553L798.411 575.835Z" fill="black"/>\r
<path d="M756.259 575.833L748.455 585.051L749.894 586.77L757.698 577.552L756.259 575.833Z" fill="black"/>\r
<path d="M671.955 575.829L664.151 585.047L665.59 586.766L673.394 577.548L671.955 575.829Z" fill="black"/>\r
<path d="M629.803 575.827L621.999 585.045L623.438 586.764L631.242 577.546L629.803 575.827Z" fill="black"/>\r
<path d="M492.808 575.821L485.004 585.039L486.443 586.758L494.247 577.54L492.808 575.821Z" fill="black"/>\r
<path d="M461.195 575.82L453.391 585.038L454.829 586.756L462.634 577.538L461.195 575.82Z" fill="black"/>\r
<path d="M450.654 575.828L442.85 585.046L444.288 586.765L452.093 577.547L450.654 575.828Z" fill="black"/>\r
<path d="M440.118 575.824L432.313 585.042L433.752 586.761L441.556 577.543L440.118 575.824Z" fill="black"/>\r
<path d="M334.737 575.819L326.933 585.037L328.371 586.756L336.176 577.538L334.737 575.819Z" fill="black"/>\r
<path d="M324.199 575.819L316.395 585.037L317.833 586.756L325.638 577.538L324.199 575.819Z" fill="black"/>\r
<path d="M313.661 575.818L305.857 585.036L307.296 586.755L315.1 577.537L313.661 575.818Z" fill="black"/>\r
<path d="M303.123 575.818L295.319 585.036L296.757 586.754L304.562 577.536L303.123 575.818Z" fill="black"/>\r
<path d="M208.281 575.814L200.476 585.032L201.915 586.75L209.72 577.532L208.281 575.814Z" fill="black"/>\r
<path d="M197.742 575.813L189.938 585.031L191.377 586.75L199.181 577.532L197.742 575.813Z" fill="black"/>\r
<path d="M187.205 575.812L179.401 585.03L180.839 586.749L188.644 577.531L187.205 575.812Z" fill="black"/>\r
<path d="M176.667 575.812L168.862 585.03L170.301 586.749L178.105 577.531L176.667 575.812Z" fill="black"/>\r
<path d="M1167.23 565.169L1159.42 574.387L1160.86 576.106L1168.66 566.888L1167.23 565.169Z" fill="black"/>\r
<path d="M956.465 565.16L948.661 574.378L950.1 576.097L957.904 566.879L956.465 565.16Z" fill="black"/>\r
<path d="M945.928 565.159L938.124 574.378L939.562 576.096L947.367 566.878L945.928 565.159Z" fill="black"/>\r
<path d="M903.776 565.158L895.971 574.376L897.41 576.095L905.215 566.877L903.776 565.158Z" fill="black"/>\r
<path d="M808.933 565.159L801.129 574.377L802.568 576.096L810.372 566.878L808.933 565.159Z" fill="black"/>\r
<path d="M756.243 565.157L748.438 574.375L749.877 576.094L757.682 566.876L756.243 565.157Z" fill="black"/>\r
<path d="M693.016 565.148L685.211 574.366L686.65 576.085L694.454 566.867L693.016 565.148Z" fill="black"/>\r
<path d="M629.788 565.146L621.983 574.364L623.422 576.082L631.227 566.864L629.788 565.146Z" fill="black"/>\r
<path d="M619.25 565.145L611.445 574.363L612.884 576.082L620.689 566.864L619.25 565.145Z" fill="black"/>\r
<path d="M503.331 565.14L495.527 574.358L496.966 576.077L504.77 566.859L503.331 565.14Z" fill="black"/>\r
<path d="M461.179 565.138L453.375 574.356L454.814 576.075L462.618 566.857L461.179 565.138Z" fill="black"/>\r
<path d="M450.639 565.143L442.835 574.361L444.274 576.08L452.078 566.862L450.639 565.143Z" fill="black"/>\r
<path d="M355.808 565.108L348.004 574.326L349.442 576.045L357.247 566.827L355.808 565.108Z" fill="black"/>\r
<path d="M345.268 565.114L337.464 574.332L338.902 576.051L346.707 566.833L345.268 565.114Z" fill="black"/>\r
<path d="M166.123 565.108L158.319 574.326L159.757 576.045L167.562 566.827L166.123 565.108Z" fill="black"/>\r
<path d="M155.587 565.101L147.783 574.319L149.222 576.038L157.026 566.82L155.587 565.101Z" fill="black"/>\r
<path d="M145.05 565.101L137.246 574.319L138.684 576.038L146.489 566.82L145.05 565.101Z" fill="black"/>\r
<path d="M1177.77 554.516L1169.97 563.734L1171.41 565.453L1179.21 556.235L1177.77 554.516Z" fill="black"/>\r
<path d="M1093.47 554.512L1085.66 563.731L1087.1 565.449L1094.91 556.231L1093.47 554.512Z" fill="black"/>\r
<path d="M967.012 554.507L959.208 563.725L960.646 565.444L968.451 556.226L967.012 554.507Z" fill="black"/>\r
<path d="M903.784 554.504L895.979 563.722L897.418 565.441L905.223 556.223L903.784 554.504Z" fill="black"/>\r
<path d="M819.479 554.5L811.675 563.718L813.114 565.437L820.918 556.219L819.479 554.5Z" fill="black"/>\r
<path d="M756.252 554.497L748.448 563.715L749.887 565.434L757.691 556.216L756.252 554.497Z" fill="black"/>\r
<path d="M629.796 554.492L621.992 563.71L623.431 565.428L631.235 556.21L629.796 554.492Z" fill="black"/>\r
<path d="M619.258 554.492L611.453 563.71L612.892 565.428L620.696 556.21L619.258 554.492Z" fill="black"/>\r
<path d="M513.878 554.487L506.073 563.705L507.512 565.424L515.316 556.206L513.878 554.487Z" fill="black"/>\r
<path d="M471.726 554.485L463.921 563.703L465.36 565.422L473.165 556.204L471.726 554.485Z" fill="black"/>\r
<path d="M461.187 554.485L453.383 563.703L454.822 565.421L462.626 556.203L461.187 554.485Z" fill="black"/>\r
<path d="M450.646 554.493L442.842 563.711L444.281 565.43L452.085 556.212L450.646 554.493Z" fill="black"/>\r
<path d="M387.419 554.487L379.615 563.705L381.054 565.423L388.858 556.205L387.419 554.487Z" fill="black"/>\r
<path d="M376.882 554.486L369.077 563.704L370.516 565.423L378.321 556.205L376.882 554.486Z" fill="black"/>\r
<path d="M134.507 554.475L126.703 563.693L128.142 565.412L135.946 556.194L134.507 554.475Z" fill="black"/>\r
<path d="M123.969 554.474L116.165 563.692L117.604 565.411L125.408 556.193L123.969 554.474Z" fill="black"/>\r
<path d="M1198.86 543.863L1191.05 553.081L1192.49 554.8L1200.29 545.582L1198.86 543.863Z" fill="black"/>\r
<path d="M1104.01 543.859L1096.21 553.077L1097.65 554.796L1105.45 545.578L1104.01 543.859Z" fill="black"/>\r
<path d="M1093.48 543.859L1085.67 553.077L1087.11 554.795L1094.92 545.577L1093.48 543.859Z" fill="black"/>\r
<path d="M977.558 543.854L969.754 553.072L971.192 554.791L978.997 545.573L977.558 543.854Z" fill="black"/>\r
<path d="M914.33 543.851L906.526 553.069L907.965 554.788L915.769 545.57L914.33 543.851Z" fill="black"/>\r
<path d="M903.792 543.85L895.988 553.068L897.427 554.787L905.231 545.569L903.792 543.85Z" fill="black"/>\r
<path d="M830.026 543.847L822.221 553.065L823.66 554.784L831.464 545.566L830.026 543.847Z" fill="black"/>\r
<path d="M766.798 543.844L758.993 553.062L760.432 554.781L768.236 545.563L766.798 543.844Z" fill="black"/>\r
<path d="M756.26 543.844L748.456 553.062L749.894 554.781L757.699 545.563L756.26 543.844Z" fill="black"/>\r
<path d="M724.645 543.843L716.841 553.061L718.28 554.779L726.084 545.561L724.645 543.843Z" fill="black"/>\r
<path d="M629.804 543.838L622 553.056L623.438 554.775L631.243 545.557L629.804 543.838Z" fill="black"/>\r
<path d="M619.266 543.838L611.462 553.056L612.9 554.775L620.705 545.557L619.266 543.838Z" fill="black"/>\r
<path d="M524.424 543.834L516.62 553.052L518.058 554.77L525.863 545.552L524.424 543.834Z" fill="black"/>\r
<path d="M482.272 543.832L474.468 553.05L475.906 554.768L483.711 545.55L482.272 543.832Z" fill="black"/>\r
<path d="M471.734 543.832L463.929 553.05L465.368 554.768L473.172 545.55L471.734 543.832Z" fill="black"/>\r
<path d="M461.196 543.831L453.391 553.049L454.83 554.768L462.634 545.55L461.196 543.831Z" fill="black"/>\r
<path d="M397.965 543.833L390.161 553.051L391.6 554.77L399.404 545.552L397.965 543.833Z" fill="black"/>\r
<path d="M102.901 543.82L95.0967 553.038L96.5355 554.757L104.34 545.539L102.901 543.82Z" fill="black"/>\r
<path d="M1209.38 533.182L1201.57 542.4L1203.01 544.119L1210.82 534.901L1209.38 533.182Z" fill="black"/>\r
<path d="M1104 533.177L1096.19 542.395L1097.63 544.114L1105.44 534.896L1104 533.177Z" fill="black"/>\r
<path d="M1093.46 533.177L1085.66 542.395L1087.1 544.114L1094.9 534.896L1093.46 533.177Z" fill="black"/>\r
<path d="M1051.31 533.175L1043.5 542.393L1044.94 544.112L1052.75 534.894L1051.31 533.175Z" fill="black"/>\r
<path d="M1040.77 533.175L1032.97 542.393L1034.41 544.111L1042.21 534.893L1040.77 533.175Z" fill="black"/>\r
<path d="M1030.23 533.174L1022.43 542.392L1023.87 544.111L1031.67 534.893L1030.23 533.174Z" fill="black"/>\r
<path d="M988.081 533.172L980.276 542.39L981.715 544.109L989.519 534.891L988.081 533.172Z" fill="black"/>\r
<path d="M924.853 533.169L917.049 542.387L918.488 544.106L926.292 534.888L924.853 533.169Z" fill="black"/>\r
<path d="M914.314 533.169L906.51 542.387L907.949 544.106L915.753 534.888L914.314 533.169Z" fill="black"/>\r
<path d="M903.777 533.169L895.972 542.387L897.411 544.106L905.215 534.888L903.777 533.169Z" fill="black"/>\r
<path d="M766.783 533.162L758.979 542.38L760.417 544.099L768.222 534.881L766.783 533.162Z" fill="black"/>\r
<path d="M756.245 533.162L748.44 542.38L749.879 544.099L757.684 534.881L756.245 533.162Z" fill="black"/>\r
<path d="M735.169 533.161L727.365 542.379L728.804 544.098L736.608 534.88L735.169 533.161Z" fill="black"/>\r
<path d="M629.789 533.156L621.984 542.374L623.423 544.093L631.228 534.875L629.789 533.156Z" fill="black"/>\r
<path d="M619.25 533.156L611.446 542.374L612.885 544.093L620.689 534.875L619.25 533.156Z" fill="black"/>\r
<path d="M534.946 533.152L527.142 542.37L528.581 544.089L536.385 534.871L534.946 533.152Z" fill="black"/>\r
<path d="M482.256 533.15L474.452 542.368L475.891 544.087L483.695 534.869L482.256 533.15Z" fill="black"/>\r
<path d="M471.718 533.15L463.914 542.368L465.353 544.087L473.157 534.868L471.718 533.15Z" fill="black"/>\r
<path d="M461.18 533.149L453.376 542.367L454.815 544.086L462.619 534.868L461.18 533.149Z" fill="black"/>\r
<path d="M419.026 533.152L411.222 542.37L412.661 544.089L420.465 534.871L419.026 533.152Z" fill="black"/>\r
<path d="M92.3484 533.137L84.5439 542.355L85.9828 544.074L93.7872 534.856L92.3484 533.137Z" fill="black"/>\r
<path d="M81.81 533.137L74.0056 542.355L75.4444 544.074L83.2488 534.856L81.81 533.137Z" fill="black"/>\r
<path d="M1219.92 522.529L1212.12 531.747L1213.56 533.466L1221.36 524.248L1219.92 522.529Z" fill="black"/>\r
<path d="M1114.54 522.525L1106.74 531.743L1108.18 533.462L1115.98 524.244L1114.54 522.525Z" fill="black"/>\r
<path d="M1104.01 522.524L1096.2 531.742L1097.64 533.461L1105.45 524.243L1104.01 522.524Z" fill="black"/>\r
<path d="M1093.47 522.523L1085.66 531.742L1087.1 533.46L1094.91 524.242L1093.47 522.523Z" fill="black"/>\r
<path d="M1072.39 522.529L1064.59 531.747L1066.03 533.465L1073.83 524.247L1072.39 522.529Z" fill="black"/>\r
<path d="M1030.24 522.521L1022.44 531.739L1023.88 533.457L1031.68 524.239L1030.24 522.521Z" fill="black"/>\r
<path d="M1009.17 522.52L1001.36 531.738L1002.8 533.457L1010.6 524.239L1009.17 522.52Z" fill="black"/>\r
<path d="M998.626 522.519L990.822 531.737L992.26 533.456L1000.06 524.238L998.626 522.519Z" fill="black"/>\r
<path d="M935.399 522.517L927.594 531.735L929.033 533.454L936.837 524.236L935.399 522.517Z" fill="black"/>\r
<path d="M924.861 522.516L917.057 531.734L918.495 533.453L926.3 524.235L924.861 522.516Z" fill="black"/>\r
<path d="M914.322 522.522L906.518 531.74L907.956 533.458L915.761 524.24L914.322 522.522Z" fill="black"/>\r
<path d="M777.329 522.51L769.525 531.728L770.963 533.447L778.768 524.229L777.329 522.51Z" fill="black"/>\r
<path d="M766.791 522.509L758.986 531.727L760.425 533.446L768.23 524.228L766.791 522.509Z" fill="black"/>\r
<path d="M745.714 522.508L737.91 531.726L739.349 533.445L747.153 524.227L745.714 522.508Z" fill="black"/>\r
<path d="M640.334 522.504L632.53 531.722L633.969 533.441L641.773 524.223L640.334 522.504Z" fill="black"/>\r
<path d="M629.797 522.503L621.993 531.721L623.431 533.44L631.236 524.222L629.797 522.503Z" fill="black"/>\r
<path d="M619.259 522.503L611.455 531.721L612.893 533.44L620.698 524.222L619.259 522.503Z" fill="black"/>\r
<path d="M545.491 522.505L537.687 531.722L539.126 533.441L546.93 524.223L545.491 522.505Z" fill="black"/>\r
<path d="M492.801 522.502L484.997 531.72L486.436 533.439L494.24 524.221L492.801 522.502Z" fill="black"/>\r
<path d="M482.265 522.497L474.46 531.715L475.899 533.433L483.703 524.215L482.265 522.497Z" fill="black"/>\r
<path d="M471.727 522.496L463.922 531.714L465.361 533.433L473.165 524.215L471.727 522.496Z" fill="black"/>\r
<path d="M429.58 522.475L421.776 531.693L423.215 533.412L431.019 524.194L429.58 522.475Z" fill="black"/>\r
<path d="M71.2931 522.456L63.4888 531.674L64.9276 533.393L72.732 524.175L71.2931 522.456Z" fill="black"/>\r
<path d="M1230.47 511.876L1222.67 521.094L1224.11 522.813L1231.91 513.595L1230.47 511.876Z" fill="black"/>\r
<path d="M1114.55 511.871L1106.75 521.089L1108.19 522.808L1115.99 513.59L1114.55 511.871Z" fill="black"/>\r
<path d="M1104.02 511.87L1096.21 521.088L1097.65 522.807L1105.45 513.589L1104.02 511.87Z" fill="black"/>\r
<path d="M1093.48 511.87L1085.67 521.088L1087.11 522.807L1094.92 513.589L1093.48 511.87Z" fill="black"/>\r
<path d="M1082.94 511.869L1075.13 521.087L1076.57 522.806L1084.38 513.588L1082.94 511.869Z" fill="black"/>\r
<path d="M1030.25 511.867L1022.45 521.085L1023.88 522.804L1031.69 513.585L1030.25 511.867Z" fill="black"/>\r
<path d="M1009.17 511.866L1001.37 521.084L1002.81 522.803L1010.61 513.585L1009.17 511.866Z" fill="black"/>\r
<path d="M935.407 511.863L927.603 521.081L929.041 522.8L936.846 513.582L935.407 511.863Z" fill="black"/>\r
<path d="M924.869 511.862L917.065 521.08L918.504 522.799L926.308 513.581L924.869 511.862Z" fill="black"/>\r
<path d="M914.332 511.862L906.527 521.08L907.966 522.799L915.77 513.581L914.332 511.862Z" fill="black"/>\r
<path d="M861.641 511.859L853.837 521.077L855.275 522.796L863.08 513.578L861.641 511.859Z" fill="black"/>\r
<path d="M777.337 511.856L769.533 521.074L770.972 522.793L778.776 513.575L777.337 511.856Z" fill="black"/>\r
<path d="M766.799 511.855L758.995 521.074L760.433 522.792L768.238 513.574L766.799 511.855Z" fill="black"/>\r
<path d="M756.261 511.855L748.457 521.073L749.895 522.792L757.7 513.574L756.261 511.855Z" fill="black"/>\r
<path d="M640.343 511.85L632.539 521.068L633.978 522.787L641.782 513.569L640.343 511.85Z" fill="black"/>\r
<path d="M629.805 511.85L622.001 521.068L623.44 522.786L631.244 513.568L629.805 511.85Z" fill="black"/>\r
<path d="M619.267 511.849L611.462 521.067L612.901 522.786L620.705 513.568L619.267 511.849Z" fill="black"/>\r
<path d="M556.039 511.846L548.235 521.064L549.674 522.783L557.478 513.565L556.039 511.846Z" fill="black"/>\r
<path d="M503.349 511.844L495.545 521.062L496.983 522.78L504.788 513.562L503.349 511.844Z" fill="black"/>\r
<path d="M492.811 511.844L485.006 521.062L486.445 522.78L494.249 513.563L492.811 511.844Z" fill="black"/>\r
<path d="M482.273 511.843L474.468 521.061L475.907 522.78L483.711 513.562L482.273 511.843Z" fill="black"/>\r
<path d="M471.734 511.842L463.93 521.06L465.369 522.779L473.173 513.561L471.734 511.842Z" fill="black"/>\r
<path d="M440.119 511.846L432.315 521.064L433.754 522.783L441.558 513.565L440.119 511.846Z" fill="black"/>\r
<path d="M60.7502 511.829L52.9458 521.047L54.3846 522.766L62.189 513.548L60.7502 511.829Z" fill="black"/>\r
<path d="M1240.99 501.195L1233.19 510.413L1234.63 512.131L1242.43 502.913L1240.99 501.195Z" fill="black"/>\r
<path d="M1125.08 501.189L1117.27 510.407L1118.71 512.126L1126.51 502.908L1125.08 501.189Z" fill="black"/>\r
<path d="M1114.54 501.189L1106.73 510.407L1108.17 512.126L1115.98 502.908L1114.54 501.189Z" fill="black"/>\r
<path d="M1104 501.188L1096.2 510.406L1097.63 512.125L1105.44 502.907L1104 501.188Z" fill="black"/>\r
<path d="M1093.46 501.188L1085.66 510.406L1087.1 512.125L1094.9 502.907L1093.46 501.188Z" fill="black"/>\r
<path d="M1030.23 501.185L1022.43 510.403L1023.87 512.122L1031.67 502.904L1030.23 501.185Z" fill="black"/>\r
<path d="M1019.7 501.185L1011.89 510.403L1013.33 512.122L1021.13 502.904L1019.7 501.185Z" fill="black"/>\r
<path d="M956.468 501.182L948.664 510.4L950.102 512.119L957.907 502.901L956.468 501.182Z" fill="black"/>\r
<path d="M945.93 501.182L938.125 510.4L939.564 512.118L947.369 502.9L945.93 501.182Z" fill="black"/>\r
<path d="M935.392 501.181L927.588 510.399L929.026 512.118L936.831 502.9L935.392 501.181Z" fill="black"/>\r
<path d="M924.854 501.18L917.049 510.398L918.488 512.117L926.293 502.899L924.854 501.18Z" fill="black"/>\r
<path d="M872.164 501.178L864.359 510.396L865.798 512.115L873.602 502.897L872.164 501.178Z" fill="black"/>\r
<path d="M787.86 501.174L780.055 510.392L781.494 512.111L789.299 502.893L787.86 501.174Z" fill="black"/>\r
<path d="M777.322 501.174L769.518 510.392L770.956 512.111L778.761 502.893L777.322 501.174Z" fill="black"/>\r
<path d="M766.784 501.174L758.979 510.392L760.418 512.11L768.222 502.892L766.784 501.174Z" fill="black"/>\r
<path d="M650.865 501.169L643.061 510.387L644.499 512.105L652.304 502.887L650.865 501.169Z" fill="black"/>\r
<path d="M640.328 501.168L632.523 510.386L633.962 512.105L641.766 502.887L640.328 501.168Z" fill="black"/>\r
<path d="M629.789 501.168L621.985 510.386L623.424 512.104L631.228 502.886L629.789 501.168Z" fill="black"/>\r
<path d="M566.562 501.165L558.758 510.383L560.196 512.102L568.001 502.884L566.562 501.165Z" fill="black"/>\r
<path d="M503.334 501.162L495.529 510.38L496.968 512.098L504.773 502.88L503.334 501.162Z" fill="black"/>\r
<path d="M492.795 501.162L484.991 510.38L486.43 512.098L494.234 502.881L492.795 501.162Z" fill="black"/>\r
<path d="M482.257 501.161L474.453 510.379L475.892 512.098L483.696 502.88L482.257 501.161Z" fill="black"/>\r
<path d="M1251.54 490.541L1243.74 499.759L1245.17 501.478L1252.98 492.26L1251.54 490.541Z" fill="black"/>\r
<path d="M1125.08 490.536L1117.28 499.754L1118.72 501.473L1126.52 492.255L1125.08 490.536Z" fill="black"/>\r
<path d="M1114.55 490.535L1106.74 499.753L1108.18 501.472L1115.99 492.254L1114.55 490.535Z" fill="black"/>\r
<path d="M1104.01 490.534L1096.2 499.753L1097.64 501.471L1105.45 492.253L1104.01 490.534Z" fill="black"/>\r
<path d="M1030.24 490.532L1022.44 499.75L1023.88 501.468L1031.68 492.25L1030.24 490.532Z" fill="black"/>\r
<path d="M967.014 490.529L959.209 499.747L960.648 501.466L968.453 492.248L967.014 490.529Z" fill="black"/>\r
<path d="M956.477 490.528L948.672 499.746L950.111 501.465L957.916 492.247L956.477 490.528Z" fill="black"/>\r
<path d="M945.938 490.528L938.133 499.746L939.572 501.465L947.377 492.247L945.938 490.528Z" fill="black"/>\r
<path d="M935.4 490.527L927.596 499.746L929.035 501.464L936.839 492.246L935.4 490.527Z" fill="black"/>\r
<path d="M882.71 490.525L874.906 499.743L876.345 501.462L884.149 492.244L882.71 490.525Z" fill="black"/>\r
<path d="M787.868 490.521L780.064 499.739L781.503 501.458L789.307 492.24L787.868 490.521Z" fill="black"/>\r
<path d="M777.33 490.52L769.525 499.738L770.964 501.457L778.769 492.239L777.33 490.52Z" fill="black"/>\r
<path d="M650.873 490.515L643.069 499.733L644.508 501.452L652.312 492.234L650.873 490.515Z" fill="black"/>\r
<path d="M640.336 490.514L632.531 499.732L633.97 501.451L641.775 492.233L640.336 490.514Z" fill="black"/>\r
<path d="M629.798 490.514L621.993 499.732L623.432 501.451L631.236 492.233L629.798 490.514Z" fill="black"/>\r
<path d="M577.108 490.512L569.303 499.73L570.742 501.449L578.546 492.231L577.108 490.512Z" fill="black"/>\r
<path d="M513.88 490.509L506.075 499.727L507.514 501.446L515.319 492.228L513.88 490.509Z" fill="black"/>\r
<path d="M503.342 490.509L495.537 499.727L496.976 501.445L504.78 492.227L503.342 490.509Z" fill="black"/>\r
<path d="M492.804 490.508L484.999 499.726L486.438 501.445L494.242 492.227L492.804 490.508Z" fill="black"/>\r
<path d="M482.266 490.507L474.462 499.725L475.901 501.444L483.705 492.226L482.266 490.507Z" fill="black"/>\r
<path d="M450.649 490.515L442.845 499.733L444.284 501.452L452.088 492.234L450.649 490.515Z" fill="black"/>\r
<path d="M50.2055 490.493L42.4011 499.711L43.8399 501.43L51.6443 492.212L50.2055 490.493Z" fill="black"/>\r
<path d="M1146.17 479.884L1138.36 489.102L1139.8 490.82L1147.61 481.602L1146.17 479.884Z" fill="black"/>\r
<path d="M1135.63 479.883L1127.83 489.101L1129.26 490.819L1137.07 481.601L1135.63 479.883Z" fill="black"/>\r
<path d="M1125.09 479.889L1117.29 489.107L1118.73 490.825L1126.53 481.607L1125.09 479.889Z" fill="black"/>\r
<path d="M1114.55 479.882L1106.75 489.1L1108.19 490.819L1115.99 481.601L1114.55 479.882Z" fill="black"/>\r
<path d="M1040.79 479.879L1032.98 489.097L1034.42 490.816L1042.23 481.598L1040.79 479.879Z" fill="black"/>\r
<path d="M1030.25 479.878L1022.45 489.096L1023.88 490.815L1031.69 481.597L1030.25 479.878Z" fill="black"/>\r
<path d="M977.56 479.876L969.756 489.094L971.195 490.813L978.999 481.595L977.56 479.876Z" fill="black"/>\r
<path d="M967.021 479.882L959.217 489.1L960.656 490.818L968.46 481.6L967.021 479.882Z" fill="black"/>\r
<path d="M956.485 479.875L948.681 489.093L950.119 490.812L957.924 481.594L956.485 479.875Z" fill="black"/>\r
<path d="M945.946 479.874L938.141 489.092L939.58 490.811L947.385 481.593L945.946 479.874Z" fill="black"/>\r
<path d="M893.256 479.872L885.451 489.09L886.89 490.809L894.694 481.591L893.256 479.872Z" fill="black"/>\r
<path d="M798.414 479.868L790.61 489.086L792.049 490.805L799.853 481.587L798.414 479.868Z" fill="black"/>\r
<path d="M787.876 479.867L780.072 489.086L781.511 490.804L789.315 481.586L787.876 479.867Z" fill="black"/>\r
<path d="M671.959 479.862L664.154 489.081L665.593 490.799L673.398 481.581L671.959 479.862Z" fill="black"/>\r
<path d="M661.42 479.862L653.615 489.08L655.054 490.799L662.858 481.581L661.42 479.862Z" fill="black"/>\r
<path d="M650.881 479.867L643.077 489.085L644.516 490.804L652.32 481.586L650.881 479.867Z" fill="black"/>\r
<path d="M640.344 479.861L632.54 489.079L633.979 490.798L641.783 481.58L640.344 479.861Z" fill="black"/>\r
<path d="M587.654 479.859L579.85 489.076L581.288 490.795L589.093 481.577L587.654 479.859Z" fill="black"/>\r
<path d="M513.888 479.856L506.084 489.074L507.523 490.792L515.327 481.574L513.888 479.856Z" fill="black"/>\r
<path d="M503.35 479.855L495.545 489.073L496.984 490.792L504.789 481.574L503.35 479.855Z" fill="black"/>\r
<path d="M492.811 479.86L485.006 489.078L486.445 490.796L494.249 481.579L492.811 479.86Z" fill="black"/>\r
<path d="M39.6884 479.813L31.884 489.031L33.3228 490.75L41.1273 481.532L39.6884 479.813Z" fill="black"/>\r
<path d="M1188.3 469.203L1180.5 478.421L1181.94 480.14L1189.74 470.922L1188.3 469.203Z" fill="black"/>\r
<path d="M1177.77 469.203L1169.96 478.421L1171.4 480.139L1179.21 470.921L1177.77 469.203Z" fill="black"/>\r
<path d="M1146.15 469.202L1138.35 478.42L1139.79 480.139L1147.59 470.92L1146.15 469.202Z" fill="black"/>\r
<path d="M1135.61 469.201L1127.81 478.419L1129.25 480.138L1137.05 470.919L1135.61 469.201Z" fill="black"/>\r
<path d="M1125.08 469.2L1117.27 478.418L1118.71 480.137L1126.52 470.919L1125.08 469.2Z" fill="black"/>\r
<path d="M1051.31 469.197L1043.51 478.415L1044.94 480.134L1052.75 470.916L1051.31 469.197Z" fill="black"/>\r
<path d="M1040.77 469.197L1032.97 478.415L1034.41 480.134L1042.21 470.916L1040.77 469.197Z" fill="black"/>\r
<path d="M988.082 469.194L980.278 478.412L981.717 480.131L989.521 470.913L988.082 469.194Z" fill="black"/>\r
<path d="M977.545 469.194L969.741 478.412L971.18 480.131L978.984 470.913L977.545 469.194Z" fill="black"/>\r
<path d="M967.007 469.193L959.202 478.411L960.641 480.13L968.446 470.912L967.007 469.193Z" fill="black"/>\r
<path d="M956.468 469.193L948.664 478.411L950.103 480.13L957.907 470.912L956.468 469.193Z" fill="black"/>\r
<path d="M808.937 469.187L801.133 478.405L802.572 480.124L810.376 470.906L808.937 469.187Z" fill="black"/>\r
<path d="M798.398 469.186L790.594 478.404L792.033 480.123L799.837 470.905L798.398 469.186Z" fill="black"/>\r
<path d="M714.094 469.182L706.29 478.4L707.729 480.119L715.533 470.901L714.094 469.182Z" fill="black"/>\r
<path d="M703.557 469.182L695.752 478.4L697.191 480.119L704.996 470.901L703.557 469.182Z" fill="black"/>\r
<path d="M671.942 469.18L664.138 478.398L665.577 480.117L673.381 470.899L671.942 469.18Z" fill="black"/>\r
<path d="M661.405 469.18L653.601 478.398L655.039 480.117L662.844 470.899L661.405 469.18Z" fill="black"/>\r
<path d="M650.867 469.18L643.062 478.398L644.501 480.117L652.305 470.899L650.867 469.18Z" fill="black"/>\r
<path d="M640.328 469.179L632.524 478.397L633.962 480.116L641.767 470.898L640.328 469.179Z" fill="black"/>\r
<path d="M524.41 469.174L516.606 478.392L518.045 480.111L525.849 470.893L524.41 469.174Z" fill="black"/>\r
<path d="M513.873 469.174L506.068 478.392L507.507 480.111L515.312 470.893L513.873 469.174Z" fill="black"/>\r
<path d="M503.334 469.173L495.53 478.391L496.969 480.11L504.773 470.892L503.334 469.173Z" fill="black"/>\r
<path d="M492.796 469.172L484.992 478.39L486.431 480.109L494.235 470.891L492.796 469.172Z" fill="black"/>\r
<path d="M324.186 469.17L316.382 478.388L317.821 480.107L325.625 470.889L324.186 469.17Z" fill="black"/>\r
<path d="M313.648 469.169L305.844 478.387L307.283 480.106L315.087 470.888L313.648 469.169Z" fill="black"/>\r
<path d="M303.111 469.169L295.306 478.387L296.745 480.106L304.549 470.888L303.111 469.169Z" fill="black"/>\r
<path d="M292.572 469.169L284.768 478.387L286.207 480.106L294.011 470.888L292.572 469.169Z" fill="black"/>\r
<path d="M282.034 469.168L274.23 478.386L275.669 480.105L283.473 470.887L282.034 469.168Z" fill="black"/>\r
<path d="M271.497 469.168L263.692 478.386L265.131 480.104L272.936 470.886L271.497 469.168Z" fill="black"/>\r
<path d="M239.882 469.166L232.078 478.384L233.516 480.103L241.321 470.885L239.882 469.166Z" fill="black"/>\r
<path d="M229.344 469.166L221.54 478.384L222.979 480.103L230.783 470.885L229.344 469.166Z" fill="black"/>\r
<path d="M218.807 469.165L211.002 478.383L212.441 480.102L220.245 470.884L218.807 469.165Z" fill="black"/>\r
<path d="M208.268 469.165L200.464 478.383L201.903 480.102L209.707 470.884L208.268 469.165Z" fill="black"/>\r
<path d="M197.73 469.164L189.926 478.382L191.365 480.101L199.169 470.883L197.73 469.164Z" fill="black"/>\r
<path d="M29.1225 469.156L21.3181 478.374L22.7569 480.093L30.5613 470.875L29.1225 469.156Z" fill="black"/>\r
<path d="M1209.39 458.551L1201.58 467.769L1203.02 469.487L1210.83 460.269L1209.39 458.551Z" fill="black"/>\r
<path d="M1198.85 458.551L1191.05 467.769L1192.49 469.487L1200.29 460.269L1198.85 458.551Z" fill="black"/>\r
<path d="M1156.7 458.548L1148.9 467.766L1150.33 469.485L1158.14 460.267L1156.7 458.548Z" fill="black"/>\r
<path d="M1146.16 458.548L1138.36 467.766L1139.8 469.485L1147.6 460.267L1146.16 458.548Z" fill="black"/>\r
<path d="M1135.62 458.547L1127.82 467.765L1129.26 469.484L1137.06 460.266L1135.62 458.547Z" fill="black"/>\r
<path d="M1125.09 458.547L1117.28 467.765L1118.72 469.484L1126.52 460.266L1125.09 458.547Z" fill="black"/>\r
<path d="M1051.32 458.544L1043.51 467.762L1044.95 469.481L1052.76 460.262L1051.32 458.544Z" fill="black"/>\r
<path d="M1040.78 458.543L1032.98 467.761L1034.42 469.48L1042.22 460.262L1040.78 458.543Z" fill="black"/>\r
<path d="M988.09 458.541L980.286 467.759L981.725 469.478L989.529 460.259L988.09 458.541Z" fill="black"/>\r
<path d="M977.553 458.54L969.749 467.758L971.188 469.477L978.992 460.259L977.553 458.54Z" fill="black"/>\r
<path d="M967.015 458.54L959.21 467.758L960.649 469.477L968.454 460.259L967.015 458.54Z" fill="black"/>\r
<path d="M903.786 458.537L895.982 467.755L897.421 469.474L905.225 460.256L903.786 458.537Z" fill="black"/>\r
<path d="M819.483 458.533L811.678 467.752L813.117 469.47L820.921 460.252L819.483 458.533Z" fill="black"/>\r
<path d="M808.945 458.533L801.141 467.751L802.58 469.47L810.384 460.252L808.945 458.533Z" fill="black"/>\r
<path d="M798.407 458.532L790.603 467.75L792.042 469.469L799.846 460.251L798.407 458.532Z" fill="black"/>\r
<path d="M735.179 458.53L727.375 467.748L728.813 469.466L736.618 460.248L735.179 458.53Z" fill="black"/>\r
<path d="M724.641 458.529L716.836 467.747L718.275 469.466L726.079 460.248L724.641 458.529Z" fill="black"/>\r
<path d="M671.951 458.527L664.146 467.745L665.585 469.463L673.39 460.245L671.951 458.527Z" fill="black"/>\r
<path d="M661.413 458.526L653.608 467.744L655.047 469.463L662.852 460.245L661.413 458.526Z" fill="black"/>\r
<path d="M650.875 458.526L643.07 467.744L644.509 469.463L652.313 460.245L650.875 458.526Z" fill="black"/>\r
<path d="M598.185 458.524L590.38 467.742L591.819 469.461L599.624 460.243L598.185 458.524Z" fill="black"/>\r
<path d="M524.419 458.52L516.615 467.738L518.054 469.457L525.858 460.239L524.419 458.52Z" fill="black"/>\r
<path d="M513.881 458.52L506.076 467.738L507.515 469.457L515.319 460.239L513.881 458.52Z" fill="black"/>\r
<path d="M503.342 458.519L495.538 467.737L496.977 469.456L504.781 460.238L503.342 458.519Z" fill="black"/>\r
<path d="M492.804 458.519L485 467.737L486.439 469.456L494.243 460.238L492.804 458.519Z" fill="black"/>\r
<path d="M345.27 458.517L337.466 467.735L338.905 469.454L346.709 460.236L345.27 458.517Z" fill="black"/>\r
<path d="M334.734 458.517L326.929 467.735L328.368 469.454L336.172 460.236L334.734 458.517Z" fill="black"/>\r
<path d="M197.738 458.511L189.934 467.729L191.373 469.447L199.177 460.229L197.738 458.511Z" fill="black"/>\r
<path d="M187.2 458.51L179.396 467.728L180.835 469.447L188.639 460.229L187.2 458.51Z" fill="black"/>\r
<path d="M176.663 458.51L168.858 467.728L170.297 469.446L178.102 460.228L176.663 458.51Z" fill="black"/>\r
<path d="M29.1305 458.503L21.3262 467.721L22.765 469.44L30.5694 460.222L29.1305 458.503Z" fill="black"/>\r
<path d="M1219.94 447.898L1212.13 457.116L1213.57 458.834L1221.37 449.617L1219.94 447.898Z" fill="black"/>\r
<path d="M1167.25 447.895L1159.44 457.113L1160.88 458.832L1168.68 449.614L1167.25 447.895Z" fill="black"/>\r
<path d="M1156.71 447.895L1148.9 457.113L1150.34 458.832L1158.15 449.614L1156.71 447.895Z" fill="black"/>\r
<path d="M1146.17 447.894L1138.36 457.112L1139.8 458.831L1147.61 449.613L1146.17 447.894Z" fill="black"/>\r
<path d="M1135.63 447.894L1127.83 457.112L1129.27 458.831L1137.07 449.613L1135.63 447.894Z" fill="black"/>\r
<path d="M1061.86 447.891L1054.06 457.109L1055.5 458.828L1063.3 449.61L1061.86 447.891Z" fill="black"/>\r
<path d="M1051.33 447.89L1043.52 457.108L1044.96 458.827L1052.77 449.609L1051.33 447.89Z" fill="black"/>\r
<path d="M998.637 447.888L990.833 457.106L992.271 458.825L1000.08 449.607L998.637 447.888Z" fill="black"/>\r
<path d="M988.099 447.888L980.295 457.106L981.734 458.825L989.538 449.607L988.099 447.888Z" fill="black"/>\r
<path d="M977.561 447.887L969.757 457.105L971.196 458.824L979 449.606L977.561 447.887Z" fill="black"/>\r
<path d="M914.332 447.89L906.528 457.108L907.967 458.827L915.771 449.609L914.332 447.89Z" fill="black"/>\r
<path d="M819.491 447.88L811.686 457.098L813.125 458.817L820.93 449.599L819.491 447.88Z" fill="black"/>\r
<path d="M808.952 447.885L801.148 457.103L802.587 458.822L810.391 449.604L808.952 447.885Z" fill="black"/>\r
<path d="M745.725 447.877L737.921 457.095L739.36 458.813L747.164 449.596L745.725 447.877Z" fill="black"/>\r
<path d="M682.497 447.874L674.692 457.092L676.131 458.811L683.936 449.593L682.497 447.874Z" fill="black"/>\r
<path d="M671.959 447.874L664.154 457.092L665.593 458.811L673.398 449.593L671.959 447.874Z" fill="black"/>\r
<path d="M661.421 447.873L653.616 457.091L655.055 458.81L662.86 449.592L661.421 447.873Z" fill="black"/>\r
<path d="M608.731 447.871L600.927 457.089L602.366 458.808L610.17 449.589L608.731 447.871Z" fill="black"/>\r
<path d="M534.964 447.867L527.16 457.085L528.599 458.804L536.403 449.586L534.964 447.867Z" fill="black"/>\r
<path d="M524.426 447.867L516.622 457.085L518.061 458.804L525.865 449.586L524.426 447.867Z" fill="black"/>\r
<path d="M513.889 447.866L506.085 457.084L507.524 458.803L515.328 449.585L513.889 447.866Z" fill="black"/>\r
<path d="M503.351 447.866L495.546 457.084L496.985 458.803L504.79 449.585L503.351 447.866Z" fill="black"/>\r
<path d="M376.9 447.842L369.095 457.06L370.534 458.779L378.339 449.561L376.9 447.842Z" fill="black"/>\r
<path d="M366.364 447.835L358.56 457.053L359.999 458.772L367.803 449.554L366.364 447.835Z" fill="black"/>\r
<path d="M166.142 447.834L158.337 457.052L159.776 458.771L167.581 449.553L166.142 447.834Z" fill="black"/>\r
<path d="M155.606 447.828L147.801 457.046L149.24 458.765L157.045 449.547L155.606 447.828Z" fill="black"/>\r
<path d="M1241 437.225L1233.19 446.443L1234.63 448.162L1242.43 438.944L1241 437.225Z" fill="black"/>\r
<path d="M1167.23 437.222L1159.43 446.44L1160.86 448.158L1168.67 438.94L1167.23 437.222Z" fill="black"/>\r
<path d="M1156.69 437.221L1148.89 446.439L1150.33 448.158L1158.13 438.94L1156.69 437.221Z" fill="black"/>\r
<path d="M1146.15 437.221L1138.35 446.439L1139.79 448.158L1147.59 438.94L1146.15 437.221Z" fill="black"/>\r
<path d="M1072.39 437.197L1064.58 446.415L1066.02 448.134L1073.83 438.916L1072.39 437.197Z" fill="black"/>\r
<path d="M1061.85 437.216L1054.04 446.434L1055.48 448.153L1063.29 438.935L1061.85 437.216Z" fill="black"/>\r
<path d="M1051.31 437.216L1043.51 446.434L1044.95 448.153L1052.75 438.935L1051.31 437.216Z" fill="black"/>\r
<path d="M1009.16 437.214L1001.36 446.432L1002.79 448.151L1010.6 438.933L1009.16 437.214Z" fill="black"/>\r
<path d="M998.621 437.214L990.817 446.432L992.256 448.151L1000.06 438.933L998.621 437.214Z" fill="black"/>\r
<path d="M988.083 437.213L980.279 446.431L981.718 448.15L989.522 438.932L988.083 437.213Z" fill="black"/>\r
<path d="M924.855 437.21L917.051 446.428L918.489 448.147L926.294 438.929L924.855 437.21Z" fill="black"/>\r
<path d="M830.013 437.206L822.208 446.424L823.647 448.143L831.452 438.925L830.013 437.206Z" fill="black"/>\r
<path d="M819.475 437.205L811.67 446.423L813.109 448.142L820.914 438.924L819.475 437.205Z" fill="black"/>\r
<path d="M766.784 437.203L758.98 446.421L760.419 448.14L768.223 438.922L766.784 437.203Z" fill="black"/>\r
<path d="M703.559 437.182L695.755 446.4L697.194 448.119L704.998 438.901L703.559 437.182Z" fill="black"/>\r
<path d="M693.019 437.2L685.214 446.418L686.653 448.136L694.458 438.919L693.019 437.2Z" fill="black"/>\r
<path d="M682.481 437.199L674.676 446.417L676.115 448.136L683.92 438.918L682.481 437.199Z" fill="black"/>\r
<path d="M671.942 437.199L664.138 446.417L665.577 448.136L673.381 438.918L671.942 437.199Z" fill="black"/>\r
<path d="M619.252 437.196L611.448 446.414L612.887 448.133L620.691 438.915L619.252 437.196Z" fill="black"/>\r
<path d="M534.948 437.192L527.144 446.41L528.583 448.129L536.387 438.911L534.948 437.192Z" fill="black"/>\r
<path d="M524.41 437.191L516.606 446.409L518.045 448.128L525.849 438.91L524.41 437.191Z" fill="black"/>\r
<path d="M513.872 437.191L506.067 446.409L507.506 448.128L515.311 438.91L513.872 437.191Z" fill="black"/>\r
<path d="M503.334 437.19L495.529 446.408L496.968 448.127L504.773 438.909L503.334 437.19Z" fill="black"/>\r
<path d="M397.958 437.17L390.154 446.388L391.593 448.107L399.397 438.889L397.958 437.17Z" fill="black"/>\r
<path d="M387.42 437.169L379.615 446.387L381.054 448.106L388.859 438.888L387.42 437.169Z" fill="black"/>\r
<path d="M145.046 437.159L137.242 446.377L138.681 448.096L146.485 438.878L145.046 437.159Z" fill="black"/>\r
<path d="M18.5898 437.157L10.7854 446.375L12.2244 448.094L20.0287 438.876L18.5898 437.157Z" fill="black"/>\r
<path d="M1251.54 426.575L1243.74 435.793L1245.18 437.512L1252.98 428.294L1251.54 426.575Z" fill="black"/>\r
<path d="M1177.78 426.556L1169.97 435.773L1171.41 437.492L1179.21 428.274L1177.78 426.556Z" fill="black"/>\r
<path d="M1167.24 426.571L1159.43 435.789L1160.87 437.508L1168.68 428.29L1167.24 426.571Z" fill="black"/>\r
<path d="M1156.7 426.571L1148.9 435.789L1150.33 437.507L1158.14 428.289L1156.7 426.571Z" fill="black"/>\r
<path d="M1082.93 426.567L1075.13 435.785L1076.57 437.504L1084.37 428.286L1082.93 426.567Z" fill="black"/>\r
<path d="M1072.4 426.551L1064.59 435.769L1066.03 437.488L1073.83 428.27L1072.4 426.551Z" fill="black"/>\r
<path d="M1061.86 426.566L1054.05 435.784L1055.49 437.503L1063.3 428.285L1061.86 426.566Z" fill="black"/>\r
<path d="M1009.17 426.563L1001.36 435.781L1002.8 437.5L1010.61 428.282L1009.17 426.563Z" fill="black"/>\r
<path d="M998.629 426.563L990.824 435.781L992.263 437.5L1000.07 428.282L998.629 426.563Z" fill="black"/>\r
<path d="M935.4 426.56L927.596 435.778L929.035 437.497L936.839 428.279L935.4 426.56Z" fill="black"/>\r
<path d="M840.558 426.555L832.754 435.773L834.193 437.492L841.997 428.274L840.558 426.555Z" fill="black"/>\r
<path d="M830.021 426.555L822.216 435.773L823.655 437.492L831.46 428.274L830.021 426.555Z" fill="black"/>\r
<path d="M777.33 426.553L769.525 435.771L770.964 437.489L778.769 428.271L777.33 426.553Z" fill="black"/>\r
<path d="M703.567 426.535L695.762 435.753L697.201 437.472L705.005 428.254L703.567 426.535Z" fill="black"/>\r
<path d="M693.026 426.548L685.221 435.766L686.66 437.485L694.465 428.267L693.026 426.548Z" fill="black"/>\r
<path d="M682.488 426.548L674.683 435.766L676.122 437.485L683.927 428.267L682.488 426.548Z" fill="black"/>\r
<path d="M629.798 426.545L621.993 435.763L623.432 437.482L631.236 428.264L629.798 426.545Z" fill="black"/>\r
<path d="M545.496 426.529L537.692 435.747L539.131 437.465L546.935 428.247L545.496 426.529Z" fill="black"/>\r
<path d="M534.955 426.541L527.151 435.759L528.59 437.477L536.394 428.259L534.955 426.541Z" fill="black"/>\r
<path d="M524.417 426.541L516.613 435.759L518.052 437.477L525.856 428.259L524.417 426.541Z" fill="black"/>\r
<path d="M513.879 426.54L506.075 435.758L507.514 437.477L515.318 428.259L513.879 426.54Z" fill="black"/>\r
<path d="M408.505 426.517L400.7 435.735L402.139 437.454L409.943 428.236L408.505 426.517Z" fill="black"/>\r
<path d="M134.518 426.506L126.713 435.724L128.152 437.442L135.956 428.224L134.518 426.506Z" fill="black"/>\r
<path d="M18.5956 426.509L10.7913 435.727L12.2301 437.446L20.0345 428.228L18.5956 426.509Z" fill="black"/>\r
<path d="M1262.09 415.897L1254.28 425.115L1255.72 426.834L1263.53 417.616L1262.09 415.897Z" fill="black"/>\r
<path d="M1198.86 415.895L1191.06 425.113L1192.5 426.832L1200.3 417.614L1198.86 415.895Z" fill="black"/>\r
<path d="M1188.32 415.894L1180.52 425.112L1181.96 426.831L1189.76 417.613L1188.32 415.894Z" fill="black"/>\r
<path d="M1177.78 415.913L1169.98 425.131L1171.42 426.85L1179.22 417.632L1177.78 415.913Z" fill="black"/>\r
<path d="M1167.25 415.894L1159.44 425.112L1160.88 426.831L1168.69 417.613L1167.25 415.894Z" fill="black"/>\r
<path d="M1093.48 415.891L1085.68 425.109L1087.11 426.828L1094.92 417.61L1093.48 415.891Z" fill="black"/>\r
<path d="M1082.94 415.89L1075.14 425.108L1076.58 426.827L1084.38 417.609L1082.94 415.89Z" fill="black"/>\r
<path d="M1072.4 415.908L1064.6 425.126L1066.04 426.845L1073.84 417.627L1072.4 415.908Z" fill="black"/>\r
<path d="M1009.18 415.887L1001.37 425.105L1002.81 426.824L1010.62 417.606L1009.18 415.887Z" fill="black"/>\r
<path d="M998.639 415.886L990.835 425.105L992.274 426.823L1000.08 417.605L998.639 415.886Z" fill="black"/>\r
<path d="M945.949 415.885L938.145 425.103L939.583 426.821L947.388 417.603L945.949 415.885Z" fill="black"/>\r
<path d="M851.108 415.881L843.303 425.099L844.742 426.818L852.547 417.6L851.108 415.881Z" fill="black"/>\r
<path d="M840.57 415.881L832.765 425.099L834.204 426.817L842.009 417.599L840.57 415.881Z" fill="black"/>\r
<path d="M830.031 415.88L822.227 425.098L823.666 426.817L831.47 417.599L830.031 415.88Z" fill="black"/>\r
<path d="M787.88 415.878L780.075 425.096L781.514 426.815L789.318 417.597L787.88 415.878Z" fill="black"/>\r
<path d="M724.652 415.876L716.848 425.094L718.287 426.813L726.091 417.595L724.652 415.876Z" fill="black"/>\r
<path d="M714.114 415.875L706.31 425.093L707.748 426.812L715.553 417.594L714.114 415.875Z" fill="black"/>\r
<path d="M703.573 415.891L695.769 425.109L697.208 426.828L705.012 417.61L703.573 415.891Z" fill="black"/>\r
<path d="M693.037 415.875L685.233 425.093L686.672 426.811L694.476 417.593L693.037 415.875Z" fill="black"/>\r
<path d="M640.348 415.872L632.544 425.09L633.983 426.809L641.787 417.591L640.348 415.872Z" fill="black"/>\r
<path d="M629.81 415.872L622.005 425.09L623.444 426.809L631.249 417.591L629.81 415.872Z" fill="black"/>\r
<path d="M545.503 415.884L537.698 425.102L539.137 426.821L546.941 417.603L545.503 415.884Z" fill="black"/>\r
<path d="M534.968 415.868L527.164 425.086L528.602 426.805L536.407 417.587L534.968 415.868Z" fill="black"/>\r
<path d="M524.43 415.868L516.626 425.086L518.065 426.805L525.869 417.587L524.43 415.868Z" fill="black"/>\r
<path d="M513.892 415.867L506.088 425.086L507.527 426.804L515.331 417.586L513.892 415.867Z" fill="black"/>\r
<path d="M419.049 415.87L411.244 425.088L412.683 426.807L420.488 417.589L419.049 415.87Z" fill="black"/>\r
<path d="M123.985 415.857L116.18 425.075L117.619 426.794L125.424 417.576L123.985 415.857Z" fill="black"/>\r
<path d="M8.06562 415.855L0.26123 425.073L1.70012 426.792L9.50451 417.574L8.06562 415.855Z" fill="black"/>\r
<path d="M1262.07 405.24L1254.27 414.458L1255.71 416.177L1263.51 406.959L1262.07 405.24Z" fill="black"/>\r
<path d="M1209.38 405.237L1201.58 414.455L1203.02 416.174L1210.82 406.956L1209.38 405.237Z" fill="black"/>\r
<path d="M1198.84 405.237L1191.04 414.455L1192.48 416.174L1200.28 406.956L1198.84 405.237Z" fill="black"/>\r
<path d="M1188.31 405.236L1180.5 414.454L1181.94 416.173L1189.75 406.955L1188.31 405.236Z" fill="black"/>\r
<path d="M1177.77 405.22L1169.96 414.438L1171.4 416.157L1179.21 406.939L1177.77 405.22Z" fill="black"/>\r
<path d="M1093.46 405.232L1085.66 414.45L1087.1 416.169L1094.9 406.951L1093.46 405.232Z" fill="black"/>\r
<path d="M1082.93 405.231L1075.12 414.449L1076.56 416.168L1084.36 406.95L1082.93 405.231Z" fill="black"/>\r
<path d="M1072.39 405.216L1064.58 414.434L1066.02 416.153L1073.83 406.935L1072.39 405.216Z" fill="black"/>\r
<path d="M1009.16 405.228L1001.36 414.446L1002.79 416.165L1010.6 406.947L1009.16 405.228Z" fill="black"/>\r
<path d="M956.47 405.226L948.666 414.444L950.104 416.162L957.909 406.944L956.47 405.226Z" fill="black"/>\r
<path d="M861.629 405.207L853.824 414.425L855.263 416.144L863.068 406.926L861.629 405.207Z" fill="black"/>\r
<path d="M851.089 405.221L843.284 414.439L844.723 416.157L852.527 406.939L851.089 405.221Z" fill="black"/>\r
<path d="M840.552 405.22L832.747 414.438L834.186 416.157L841.991 406.939L840.552 405.22Z" fill="black"/>\r
<path d="M787.861 405.217L780.056 414.435L781.495 416.154L789.299 406.936L787.861 405.217Z" fill="black"/>\r
<path d="M735.171 405.215L727.366 414.433L728.805 416.152L736.61 406.934L735.171 405.215Z" fill="black"/>\r
<path d="M724.633 405.215L716.829 414.433L718.268 416.152L726.072 406.934L724.633 405.215Z" fill="black"/>\r
<path d="M714.095 405.214L706.291 414.432L707.729 416.151L715.534 406.933L714.095 405.214Z" fill="black"/>\r
<path d="M703.559 405.2L695.755 414.418L697.194 416.137L704.998 406.919L703.559 405.2Z" fill="black"/>\r
<path d="M640.328 405.211L632.524 414.429L633.963 416.147L641.767 406.929L640.328 405.211Z" fill="black"/>\r
<path d="M556.024 405.206L548.22 414.424L549.659 416.143L557.463 406.925L556.024 405.206Z" fill="black"/>\r
<path d="M545.489 405.193L537.685 414.411L539.123 416.13L546.928 406.912L545.489 405.193Z" fill="black"/>\r
<path d="M534.948 405.205L527.144 414.423L528.583 416.142L536.387 406.924L534.948 405.205Z" fill="black"/>\r
<path d="M524.41 405.205L516.606 414.423L518.045 416.142L525.849 406.923L524.41 405.205Z" fill="black"/>\r
<path d="M513.872 405.205L506.067 414.423L507.506 416.142L515.311 406.923L513.872 405.205Z" fill="black"/>\r
<path d="M429.573 405.182L421.769 414.4L423.207 416.119L431.012 406.901L429.573 405.182Z" fill="black"/>\r
<path d="M123.972 405.169L116.167 414.388L117.606 416.106L125.411 406.888L123.972 405.169Z" fill="black"/>\r
<path d="M8.05024 405.173L0.24585 414.391L1.68474 416.11L9.48913 406.892L8.05024 405.173Z" fill="black"/>\r
<path d="M1262.08 394.562L1254.28 403.78L1255.72 405.499L1263.52 396.281L1262.08 394.562Z" fill="black"/>\r
<path d="M1219.93 394.56L1212.12 403.778L1213.56 405.497L1221.37 396.279L1219.93 394.56Z" fill="black"/>\r
<path d="M1209.39 394.56L1201.59 403.778L1203.03 405.497L1210.83 396.278L1209.39 394.56Z" fill="black"/>\r
<path d="M1198.85 394.559L1191.05 403.778L1192.49 405.496L1200.29 396.278L1198.85 394.559Z" fill="black"/>\r
<path d="M1114.55 394.556L1106.75 403.774L1108.18 405.493L1115.99 396.275L1114.55 394.556Z" fill="black"/>\r
<path d="M1104.01 394.556L1096.21 403.774L1097.65 405.493L1105.45 396.275L1104.01 394.556Z" fill="black"/>\r
<path d="M1093.47 394.555L1085.67 403.773L1087.11 405.492L1094.91 396.274L1093.47 394.555Z" fill="black"/>\r
<path d="M1082.93 394.555L1075.13 403.773L1076.57 405.492L1084.37 396.274L1082.93 394.555Z" fill="black"/>\r
<path d="M1009.17 394.552L1001.37 403.77L1002.8 405.489L1010.61 396.271L1009.17 394.552Z" fill="black"/>\r
<path d="M977.555 394.551L969.751 403.769L971.19 405.487L978.994 396.269L977.555 394.551Z" fill="black"/>\r
<path d="M967.017 394.568L959.212 403.786L960.651 405.505L968.456 396.287L967.017 394.568Z" fill="black"/>\r
<path d="M861.636 394.563L853.832 403.781L855.271 405.5L863.075 396.282L861.636 394.563Z" fill="black"/>\r
<path d="M851.1 394.546L843.296 403.763L844.735 405.482L852.539 396.264L851.1 394.546Z" fill="black"/>\r
<path d="M745.72 394.541L737.916 403.759L739.355 405.478L747.159 396.26L745.72 394.541Z" fill="black"/>\r
<path d="M735.182 394.541L727.377 403.759L728.816 405.478L736.621 396.26L735.182 394.541Z" fill="black"/>\r
<path d="M724.645 394.541L716.84 403.759L718.279 405.477L726.084 396.259L724.645 394.541Z" fill="black"/>\r
<path d="M650.876 394.553L643.072 403.771L644.51 405.49L652.315 396.272L650.876 394.553Z" fill="black"/>\r
<path d="M640.34 394.537L632.536 403.755L633.975 405.474L641.779 396.256L640.34 394.537Z" fill="black"/>\r
<path d="M556.037 394.533L548.232 403.752L549.671 405.47L557.476 396.252L556.037 394.533Z" fill="black"/>\r
<path d="M545.495 394.549L537.691 403.767L539.13 405.486L546.934 396.268L545.495 394.549Z" fill="black"/>\r
<path d="M534.961 394.533L527.157 403.751L528.596 405.47L536.4 396.252L534.961 394.533Z" fill="black"/>\r
<path d="M524.423 394.532L516.619 403.75L518.058 405.469L525.862 396.251L524.423 394.532Z" fill="black"/>\r
<path d="M440.118 394.535L432.313 403.753L433.752 405.472L441.556 396.254L440.118 394.535Z" fill="black"/>\r
<path d="M113.439 394.522L105.635 403.74L107.074 405.458L114.878 396.24L113.439 394.522Z" fill="black"/>\r
<path d="M8.05829 394.52L0.253906 403.738L1.69279 405.456L9.49718 396.238L8.05829 394.52Z" fill="black"/>\r
<path d="M1262.09 383.933L1254.28 393.151L1255.72 394.869L1263.53 385.651L1262.09 383.933Z" fill="black"/>\r
<path d="M1251.55 383.932L1243.75 393.15L1245.18 394.869L1252.99 385.651L1251.55 383.932Z" fill="black"/>\r
<path d="M1241.01 383.932L1233.21 393.15L1234.65 394.869L1242.45 385.651L1241.01 383.932Z" fill="black"/>\r
<path d="M1230.47 383.916L1222.67 393.133L1224.11 394.852L1231.91 385.634L1230.47 383.916Z" fill="black"/>\r
<path d="M1219.94 383.931L1212.13 393.149L1213.57 394.868L1221.38 385.65L1219.94 383.931Z" fill="black"/>\r
<path d="M998.637 383.92L990.833 393.138L992.272 394.857L1000.08 385.639L998.637 383.92Z" fill="black"/>\r
<path d="M988.1 383.92L980.296 393.138L981.734 394.857L989.539 385.638L988.1 383.92Z" fill="black"/>\r
<path d="M872.182 383.914L864.377 393.132L865.816 394.851L873.621 385.633L872.182 383.914Z" fill="black"/>\r
<path d="M861.645 383.9L853.841 393.118L855.28 394.837L863.084 385.619L861.645 383.9Z" fill="black"/>\r
<path d="M787.877 383.91L780.073 393.128L781.512 394.847L789.316 385.629L787.877 383.91Z" fill="black"/>\r
<path d="M777.34 383.91L769.535 393.128L770.974 394.847L778.779 385.629L777.34 383.91Z" fill="black"/>\r
<path d="M766.802 383.909L758.997 393.127L760.436 394.846L768.241 385.628L766.802 383.909Z" fill="black"/>\r
<path d="M756.265 383.895L748.461 393.113L749.9 394.832L757.704 385.614L756.265 383.895Z" fill="black"/>\r
<path d="M745.725 383.908L737.921 393.126L739.359 394.845L747.164 385.627L745.725 383.908Z" fill="black"/>\r
<path d="M661.421 383.904L653.617 393.122L655.056 394.841L662.86 385.623L661.421 383.904Z" fill="black"/>\r
<path d="M650.885 383.891L643.081 393.109L644.52 394.827L652.324 385.61L650.885 383.891Z" fill="black"/>\r
<path d="M556.041 383.899L548.237 393.117L549.675 394.836L557.48 385.618L556.041 383.899Z" fill="black"/>\r
<path d="M545.506 383.886L537.702 393.104L539.14 394.823L546.945 385.605L545.506 383.886Z" fill="black"/>\r
<path d="M534.964 383.898L527.16 393.116L528.599 394.835L536.403 385.617L534.964 383.898Z" fill="black"/>\r
<path d="M524.426 383.898L516.622 393.116L518.061 394.835L525.865 385.617L524.426 383.898Z" fill="black"/>\r
<path d="M250.444 383.868L242.64 393.086L244.078 394.805L251.883 385.587L250.444 383.868Z" fill="black"/>\r
<path d="M239.906 383.867L232.101 393.085L233.54 394.804L241.345 385.586L239.906 383.867Z" fill="black"/>\r
<path d="M229.369 383.867L221.564 393.085L223.003 394.804L230.807 385.586L229.369 383.867Z" fill="black"/>\r
<path d="M218.831 383.867L211.026 393.085L212.465 394.804L220.269 385.585L218.831 383.867Z" fill="black"/>\r
<path d="M208.292 383.866L200.488 393.084L201.927 394.803L209.731 385.585L208.292 383.866Z" fill="black"/>\r
<path d="M197.754 383.866L189.949 393.084L191.388 394.803L199.193 385.585L197.754 383.866Z" fill="black"/>\r
<path d="M187.216 383.866L179.411 393.084L180.85 394.802L188.654 385.584L187.216 383.866Z" fill="black"/>\r
<path d="M176.678 383.865L168.874 393.083L170.313 394.802L178.117 385.584L176.678 383.865Z" fill="black"/>\r
<path d="M113.45 383.863L105.646 393.081L107.084 394.799L114.889 385.581L113.45 383.863Z" fill="black"/>\r
<path d="M8.06635 383.866L0.261963 393.084L1.70078 394.803L9.50517 385.585L8.06635 383.866Z" fill="black"/>\r
<path d="M882.707 373.212L874.903 382.43L876.341 384.149L884.146 374.931L882.707 373.212Z" fill="black"/>\r
<path d="M872.169 373.211L864.364 382.429L865.803 384.148L873.608 374.93L872.169 373.211Z" fill="black"/>\r
<path d="M661.409 373.203L653.604 382.421L655.043 384.14L662.848 374.922L661.409 373.203Z" fill="black"/>\r
<path d="M556.029 373.198L548.225 382.416L549.664 384.135L557.468 374.917L556.029 373.198Z" fill="black"/>\r
<path d="M545.489 373.213L537.685 382.431L539.123 384.15L546.928 374.932L545.489 373.213Z" fill="black"/>\r
<path d="M534.954 373.198L527.149 382.416L528.588 384.134L536.393 374.916L534.954 373.198Z" fill="black"/>\r
<path d="M524.416 373.197L516.611 382.415L518.05 384.134L525.855 374.916L524.416 373.197Z" fill="black"/>\r
<path d="M450.648 373.2L442.844 382.418L444.283 384.137L452.087 374.919L450.648 373.2Z" fill="black"/>\r
<path d="M282.04 373.193L274.236 382.411L275.675 384.13L283.479 374.912L282.04 373.193Z" fill="black"/>\r
<path d="M271.503 373.193L263.698 382.411L265.137 384.129L272.942 374.911L271.503 373.193Z" fill="black"/>\r
<path d="M155.585 373.188L147.78 382.406L149.219 384.125L157.024 374.907L155.585 373.188Z" fill="black"/>\r
<path d="M145.046 373.188L137.242 382.406L138.681 384.124L146.485 374.906L145.046 373.188Z" fill="black"/>\r
<path d="M134.508 373.187L126.704 382.405L128.143 384.124L135.947 374.906L134.508 373.187Z" fill="black"/>\r
<path d="M113.433 373.186L105.628 382.404L107.067 384.123L114.872 374.905L113.433 373.186Z" fill="black"/>\r
<path d="M8.05097 373.184L0.246582 382.402L1.68547 384.121L9.48986 374.903L8.05097 373.184Z" fill="black"/>\r
<path d="M893.251 362.58L885.446 371.798L886.885 373.516L894.69 364.298L893.251 362.58Z" fill="black"/>\r
<path d="M882.713 362.579L874.908 371.797L876.347 373.516L884.151 364.298L882.713 362.579Z" fill="black"/>\r
<path d="M872.174 362.579L864.37 371.797L865.809 373.516L873.613 364.298L872.174 362.579Z" fill="black"/>\r
<path d="M671.952 362.569L664.148 371.787L665.587 373.506L673.391 364.288L671.952 362.569Z" fill="black"/>\r
<path d="M556.034 362.564L548.229 371.782L549.668 373.501L557.472 364.283L556.034 362.564Z" fill="black"/>\r
<path d="M545.499 362.551L537.694 371.769L539.133 373.488L546.937 364.27L545.499 362.551Z" fill="black"/>\r
<path d="M534.958 362.563L527.154 371.781L528.593 373.5L536.397 364.282L534.958 362.563Z" fill="black"/>\r
<path d="M524.42 362.562L516.615 371.78L518.054 373.499L525.859 364.281L524.42 362.562Z" fill="black"/>\r
<path d="M313.664 362.535L305.86 371.753L307.298 373.472L315.103 364.254L313.664 362.535Z" fill="black"/>\r
<path d="M303.127 362.535L295.322 371.753L296.761 373.471L304.565 364.253L303.127 362.535Z" fill="black"/>\r
<path d="M123.981 362.527L116.177 371.745L117.615 373.464L125.42 364.246L123.981 362.527Z" fill="black"/>\r
<path d="M113.443 362.527L105.638 371.745L107.077 373.464L114.882 364.246L113.443 362.527Z" fill="black"/>\r
<path d="M8.05903 362.531L0.254639 371.749L1.69346 373.467L9.49784 364.249L8.05903 362.531Z" fill="black"/>\r
<path d="M893.261 351.905L885.456 361.123L886.895 362.842L894.7 353.624L893.261 351.905Z" fill="black"/>\r
<path d="M882.723 351.905L874.919 361.123L876.358 362.841L884.162 353.623L882.723 351.905Z" fill="black"/>\r
<path d="M671.963 351.896L664.159 361.114L665.598 362.833L673.402 353.615L671.963 351.896Z" fill="black"/>\r
<path d="M566.584 351.892L558.779 361.11L560.218 362.829L568.023 353.611L566.584 351.892Z" fill="black"/>\r
<path d="M556.046 351.891L548.242 361.109L549.681 362.828L557.485 353.61L556.046 351.891Z" fill="black"/>\r
<path d="M545.505 351.906L537.701 361.124L539.14 362.843L546.944 353.625L545.505 351.906Z" fill="black"/>\r
<path d="M534.97 351.89L527.166 361.108L528.605 362.827L536.409 353.609L534.97 351.89Z" fill="black"/>\r
<path d="M461.204 351.888L453.399 361.106L454.838 362.824L462.643 353.606L461.204 351.888Z" fill="black"/>\r
<path d="M324.208 351.888L316.404 361.106L317.843 362.825L325.647 353.607L324.208 351.888Z" fill="black"/>\r
<path d="M113.449 351.879L105.645 361.097L107.084 362.816L114.888 353.598L113.449 351.879Z" fill="black"/>\r
<path d="M102.91 351.878L95.1057 361.096L96.5445 362.815L104.349 353.597L102.91 351.878Z" fill="black"/>\r
<path d="M8.06733 351.877L0.262939 361.095L1.70176 362.814L9.50614 353.596L8.06733 351.877Z" fill="black"/>\r
<path d="M903.782 341.245L895.977 350.463L897.416 352.182L905.22 342.964L903.782 341.245Z" fill="black"/>\r
<path d="M893.244 341.244L885.439 350.462L886.878 352.181L894.682 342.963L893.244 341.244Z" fill="black"/>\r
<path d="M682.483 341.234L674.678 350.452L676.117 352.171L683.922 342.953L682.483 341.234Z" fill="black"/>\r
<path d="M566.564 341.229L558.76 350.447L560.199 352.166L568.003 342.948L566.564 341.229Z" fill="black"/>\r
<path d="M556.026 341.228L548.222 350.446L549.66 352.165L557.465 342.947L556.026 341.228Z" fill="black"/>\r
<path d="M545.491 341.215L537.687 350.433L539.126 352.152L546.93 342.934L545.491 341.215Z" fill="black"/>\r
<path d="M534.951 341.227L527.146 350.445L528.585 352.164L536.39 342.946L534.951 341.227Z" fill="black"/>\r
<path d="M461.184 341.224L453.379 350.442L454.818 352.161L462.623 342.943L461.184 341.224Z" fill="black"/>\r
<path d="M334.734 341.2L326.929 350.418L328.368 352.137L336.172 342.919L334.734 341.2Z" fill="black"/>\r
<path d="M113.436 341.192L105.632 350.41L107.071 352.129L114.875 342.911L113.436 341.192Z" fill="black"/>\r
<path d="M81.8222 341.19L74.0178 350.408L75.4566 352.127L83.261 342.909L81.8222 341.19Z" fill="black"/>\r
<path d="M8.05268 341.195L0.248291 350.413L1.68711 352.132L9.4915 342.914L8.05268 341.195Z" fill="black"/>\r
<path d="M914.328 330.587L906.524 339.805L907.963 341.524L915.767 332.306L914.328 330.587Z" fill="black"/>\r
<path d="M903.791 330.57L895.987 339.788L897.426 341.507L905.23 332.289L903.791 330.57Z" fill="black"/>\r
<path d="M893.254 330.569L885.45 339.787L886.889 341.506L894.693 332.288L893.254 330.569Z" fill="black"/>\r
<path d="M682.494 330.561L674.69 339.779L676.129 341.498L683.933 332.28L682.494 330.561Z" fill="black"/>\r
<path d="M566.577 330.556L558.772 339.774L560.211 341.493L568.016 332.275L566.577 330.556Z" fill="black"/>\r
<path d="M556.038 330.556L548.234 339.774L549.673 341.493L557.477 332.275L556.038 330.556Z" fill="black"/>\r
<path d="M545.497 330.57L537.693 339.788L539.132 341.507L546.936 332.289L545.497 330.57Z" fill="black"/>\r
<path d="M534.963 330.555L527.158 339.773L528.597 341.492L536.402 332.274L534.963 330.555Z" fill="black"/>\r
<path d="M471.734 330.553L463.93 339.771L465.369 341.49L473.173 332.271L471.734 330.553Z" fill="black"/>\r
<path d="M345.277 330.553L337.473 339.771L338.912 341.49L346.716 332.272L345.277 330.553Z" fill="black"/>\r
<path d="M113.441 330.543L105.636 339.761L107.075 341.48L114.88 332.262L113.441 330.543Z" fill="black"/>\r
<path d="M71.289 330.542L63.4846 339.76L64.9235 341.478L72.7279 332.26L71.289 330.542Z" fill="black"/>\r
<path d="M8.06074 330.542L0.256348 339.76L1.69524 341.478L9.49962 332.26L8.06074 330.542Z" fill="black"/>\r
<path d="M924.874 319.939L917.07 329.157L918.509 330.875L926.313 321.657L924.874 319.939Z" fill="black"/>\r
<path d="M914.337 319.924L906.532 329.142L907.971 330.861L915.775 321.643L914.337 319.924Z" fill="black"/>\r
<path d="M903.798 319.937L895.993 329.155L897.432 330.874L905.237 321.656L903.798 319.937Z" fill="black"/>\r
<path d="M693.037 319.927L685.233 329.145L686.672 330.864L694.476 321.646L693.037 319.927Z" fill="black"/>\r
<path d="M566.581 319.922L558.776 329.14L560.215 330.859L568.02 321.641L566.581 319.922Z" fill="black"/>\r
<path d="M556.043 319.921L548.238 329.139L549.677 330.858L557.482 321.64L556.043 319.921Z" fill="black"/>\r
<path d="M545.507 319.908L537.703 329.126L539.142 330.845L546.946 321.627L545.507 319.908Z" fill="black"/>\r
<path d="M534.967 319.92L527.163 329.138L528.601 330.857L536.406 321.639L534.967 319.92Z" fill="black"/>\r
<path d="M471.739 319.917L463.934 329.135L465.373 330.854L473.178 321.636L471.739 319.917Z" fill="black"/>\r
<path d="M355.825 319.894L348.021 329.112L349.46 330.831L357.264 321.613L355.825 319.894Z" fill="black"/>\r
<path d="M60.7622 319.882L52.9578 329.101L54.3967 330.819L62.2011 321.601L60.7622 319.882Z" fill="black"/>\r
<path d="M8.06879 319.888L0.264404 329.106L1.70329 330.825L9.50768 321.607L8.06879 319.888Z" fill="black"/>\r
<path d="M924.861 309.235L917.056 318.453L918.495 320.172L926.299 310.954L924.861 309.235Z" fill="black"/>\r
<path d="M914.321 309.252L906.517 318.47L907.956 320.189L915.76 310.971L914.321 309.252Z" fill="black"/>\r
<path d="M693.025 309.226L685.221 318.444L686.66 320.163L694.464 310.945L693.025 309.226Z" fill="black"/>\r
<path d="M566.569 309.221L558.765 318.439L560.204 320.158L568.008 310.94L566.569 309.221Z" fill="black"/>\r
<path d="M556.031 309.221L548.227 318.439L549.666 320.158L557.47 310.94L556.031 309.221Z" fill="black"/>\r
<path d="M545.49 309.235L537.686 318.453L539.125 320.172L546.929 310.954L545.49 309.235Z" fill="black"/>\r
<path d="M534.955 309.22L527.151 318.438L528.59 320.157L536.394 310.939L534.955 309.22Z" fill="black"/>\r
<path d="M471.728 309.217L463.924 318.435L465.362 320.154L473.167 310.936L471.728 309.217Z" fill="black"/>\r
<path d="M355.808 309.218L348.004 318.436L349.443 320.155L357.247 310.937L355.808 309.218Z" fill="black"/>\r
<path d="M123.972 309.209L116.167 318.427L117.606 320.145L125.411 310.927L123.972 309.209Z" fill="black"/>\r
<path d="M8.05341 309.206L0.249023 318.424L1.68791 320.143L9.4923 310.925L8.05341 309.206Z" fill="black"/>\r
<path d="M935.407 298.583L927.603 307.801L929.041 309.52L936.846 300.302L935.407 298.583Z" fill="black"/>\r
<path d="M924.869 298.582L917.064 307.8L918.503 309.519L926.308 300.301L924.869 298.582Z" fill="black"/>\r
<path d="M703.569 298.589L695.765 307.807L697.204 309.526L705.008 300.308L703.569 298.589Z" fill="black"/>\r
<path d="M566.578 298.568L558.773 307.786L560.212 309.505L568.016 300.287L566.578 298.568Z" fill="black"/>\r
<path d="M556.039 298.567L548.235 307.785L549.674 309.504L557.478 300.286L556.039 298.567Z" fill="black"/>\r
<path d="M545.499 298.582L537.694 307.8L539.133 309.518L546.938 300.301L545.499 298.582Z" fill="black"/>\r
<path d="M534.964 298.566L527.159 307.784L528.598 309.503L536.402 300.285L534.964 298.566Z" fill="black"/>\r
<path d="M471.735 298.564L463.931 307.782L465.37 309.501L473.174 300.283L471.735 298.564Z" fill="black"/>\r
<path d="M366.354 298.565L358.55 307.783L359.989 309.502L367.793 300.284L366.354 298.565Z" fill="black"/>\r
<path d="M50.214 298.552L42.4097 307.77L43.8486 309.489L51.6529 300.271L50.214 298.552Z" fill="black"/>\r
<path d="M18.5996 298.553L10.7952 307.771L12.2341 309.49L20.0384 300.272L18.5996 298.553Z" fill="black"/>\r
<path d="M945.951 287.95L938.147 297.169L939.586 298.887L947.39 289.669L945.951 287.95Z" fill="black"/>\r
<path d="M935.413 287.95L927.609 297.168L929.047 298.887L936.852 289.669L935.413 287.95Z" fill="black"/>\r
<path d="M924.875 287.949L917.071 297.168L918.509 298.886L926.314 289.668L924.875 287.949Z" fill="black"/>\r
<path d="M703.578 287.926L695.774 297.144L697.212 298.863L705.017 289.645L703.578 287.926Z" fill="black"/>\r
<path d="M566.582 287.933L558.777 297.151L560.216 298.869L568.021 289.651L566.582 287.933Z" fill="black"/>\r
<path d="M556.044 287.932L548.24 297.15L549.679 298.869L557.483 289.651L556.044 287.932Z" fill="black"/>\r
<path d="M545.508 287.92L537.704 297.138L539.143 298.856L546.947 289.638L545.508 287.92Z" fill="black"/>\r
<path d="M471.739 287.928L463.935 297.146L465.374 298.865L473.178 289.647L471.739 287.928Z" fill="black"/>\r
<path d="M366.364 287.906L358.56 297.124L359.998 298.843L367.803 289.625L366.364 287.906Z" fill="black"/>\r
<path d="M134.529 287.896L126.724 297.114L128.163 298.833L135.968 289.615L134.529 287.896Z" fill="black"/>\r
<path d="M39.6877 287.893L31.8833 297.111L33.3221 298.83L41.1265 289.612L39.6877 287.893Z" fill="black"/>\r
<path d="M18.6079 287.899L10.8035 297.117L12.2423 298.836L20.0467 289.618L18.6079 287.899Z" fill="black"/>\r
<path d="M956.475 277.248L948.671 286.466L950.11 288.185L957.914 278.967L956.475 277.248Z" fill="black"/>\r
<path d="M945.938 277.247L938.133 286.466L939.572 288.184L947.377 278.966L945.938 277.247Z" fill="black"/>\r
<path d="M935.399 277.247L927.595 286.465L929.034 288.184L936.838 278.966L935.399 277.247Z" fill="black"/>\r
<path d="M714.102 277.238L706.298 286.456L707.737 288.175L715.541 278.957L714.102 277.238Z" fill="black"/>\r
<path d="M566.571 277.232L558.766 286.451L560.205 288.169L568.009 278.951L566.571 277.232Z" fill="black"/>\r
<path d="M556.032 277.232L548.228 286.45L549.667 288.169L557.471 278.951L556.032 277.232Z" fill="black"/>\r
<path d="M545.491 277.246L537.687 286.464L539.126 288.183L546.93 278.965L545.491 277.246Z" fill="black"/>\r
<path d="M471.729 277.229L463.924 286.447L465.363 288.165L473.168 278.947L471.729 277.229Z" fill="black"/>\r
<path d="M366.347 277.23L358.543 286.448L359.982 288.167L367.786 278.949L366.347 277.23Z" fill="black"/>\r
<path d="M145.049 277.22L137.245 286.439L138.683 288.157L146.488 278.939L145.049 277.22Z" fill="black"/>\r
<path d="M956.482 266.616L948.678 275.834L950.117 277.553L957.921 268.335L956.482 266.616Z" fill="black"/>\r
<path d="M945.944 266.615L938.14 275.833L939.578 277.552L947.383 268.334L945.944 266.615Z" fill="black"/>\r
<path d="M714.107 266.604L706.303 275.822L707.742 277.541L715.546 268.323L714.107 266.604Z" fill="black"/>\r
<path d="M566.575 266.597L558.771 275.815L560.209 277.534L568.014 268.316L566.575 266.597Z" fill="black"/>\r
<path d="M556.037 266.597L548.232 275.815L549.671 277.533L557.476 268.315L556.037 266.597Z" fill="black"/>\r
<path d="M545.501 266.584L537.697 275.802L539.135 277.521L546.94 268.303L545.501 266.584Z" fill="black"/>\r
<path d="M471.733 266.593L463.928 275.811L465.367 277.53L473.172 268.312L471.733 266.593Z" fill="black"/>\r
<path d="M355.819 266.57L348.015 275.788L349.453 277.507L357.258 268.289L355.819 266.57Z" fill="black"/>\r
<path d="M155.598 266.562L147.793 275.78L149.232 277.499L157.037 268.281L155.598 266.562Z" fill="black"/>\r
<path d="M29.142 266.557L21.3376 275.775L22.7765 277.494L30.5808 268.276L29.142 266.557Z" fill="black"/>\r
<path d="M967.029 255.958L959.225 265.176L960.663 266.895L968.468 257.677L967.029 255.958Z" fill="black"/>\r
<path d="M956.491 255.941L948.687 265.159L950.126 266.878L957.93 257.66L956.491 255.941Z" fill="black"/>\r
<path d="M945.953 255.94L938.149 265.159L939.588 266.877L947.392 257.659L945.953 255.94Z" fill="black"/>\r
<path d="M714.118 255.931L706.313 265.149L707.752 266.868L715.557 257.65L714.118 255.931Z" fill="black"/>\r
<path d="M566.586 255.925L558.782 265.143L560.221 266.862L568.025 257.644L566.586 255.925Z" fill="black"/>\r
<path d="M556.049 255.925L548.245 265.143L549.684 266.862L557.488 257.644L556.049 255.925Z" fill="black"/>\r
<path d="M545.507 255.939L537.703 265.157L539.142 266.876L546.946 257.658L545.507 255.939Z" fill="black"/>\r
<path d="M471.744 255.921L463.94 265.139L465.379 266.858L473.183 257.64L471.744 255.921Z" fill="black"/>\r
<path d="M355.825 255.922L348.021 265.14L349.46 266.859L357.264 257.641L355.825 255.922Z" fill="black"/>\r
<path d="M166.142 255.914L158.337 265.132L159.776 266.851L167.58 257.633L166.142 255.914Z" fill="black"/>\r
<path d="M29.1476 255.908L21.3433 265.126L22.7822 266.845L30.5865 257.627L29.1476 255.908Z" fill="black"/>\r
<path d="M977.552 245.281L969.747 254.499L971.186 256.218L978.991 247L977.552 245.281Z" fill="black"/>\r
<path d="M967.014 245.267L959.209 254.485L960.648 256.203L968.453 246.985L967.014 245.267Z" fill="black"/>\r
<path d="M956.475 245.28L948.671 254.498L950.11 256.217L957.914 246.999L956.475 245.28Z" fill="black"/>\r
<path d="M724.638 245.269L716.834 254.487L718.273 256.206L726.077 246.988L724.638 245.269Z" fill="black"/>\r
<path d="M566.568 245.262L558.763 254.48L560.202 256.199L568.006 246.98L566.568 245.262Z" fill="black"/>\r
<path d="M556.029 245.261L548.225 254.479L549.664 256.198L557.468 246.98L556.029 245.261Z" fill="black"/>\r
<path d="M545.494 245.249L537.689 254.467L539.128 256.186L546.933 246.968L545.494 245.249Z" fill="black"/>\r
<path d="M345.274 245.235L337.469 254.453L338.908 256.171L346.712 246.953L345.274 245.235Z" fill="black"/>\r
<path d="M187.204 245.228L179.4 254.446L180.839 256.165L188.643 246.947L187.204 245.228Z" fill="black"/>\r
<path d="M176.666 245.227L168.862 254.445L170.3 256.164L178.105 246.946L176.666 245.227Z" fill="black"/>\r
<path d="M39.6728 245.222L31.8684 254.44L33.3073 256.159L41.1117 246.941L39.6728 245.222Z" fill="black"/>\r
<path d="M977.56 234.606L969.756 243.824L971.195 245.543L978.999 236.325L977.56 234.606Z" fill="black"/>\r
<path d="M967.021 234.623L959.217 243.841L960.656 245.559L968.46 236.342L967.021 234.623Z" fill="black"/>\r
<path d="M724.649 234.596L716.844 243.814L718.283 245.533L726.088 236.315L724.649 234.596Z" fill="black"/>\r
<path d="M566.579 234.59L558.775 243.808L560.214 245.527L568.018 236.309L566.579 234.59Z" fill="black"/>\r
<path d="M556.042 234.59L548.237 243.808L549.676 245.527L557.481 236.308L556.042 234.59Z" fill="black"/>\r
<path d="M545.5 234.604L537.696 243.822L539.135 245.541L546.939 236.323L545.5 234.604Z" fill="black"/>\r
<path d="M461.199 234.586L453.395 243.804L454.834 245.523L462.638 236.304L461.199 234.586Z" fill="black"/>\r
<path d="M334.742 234.586L326.938 243.805L328.377 245.523L336.181 236.305L334.742 234.586Z" fill="black"/>\r
<path d="M324.204 234.586L316.4 243.804L317.839 245.523L325.643 236.304L324.204 234.586Z" fill="black"/>\r
<path d="M218.824 234.581L211.02 243.799L212.459 245.518L220.263 236.3L218.824 234.581Z" fill="black"/>\r
<path d="M208.286 234.581L200.482 243.799L201.921 245.517L209.725 236.299L208.286 234.581Z" fill="black"/>\r
<path d="M197.748 234.58L189.944 243.799L191.383 245.517L199.187 236.299L197.748 234.58Z" fill="black"/>\r
<path d="M39.6784 234.574L31.874 243.792L33.3129 245.511L41.1173 236.293L39.6784 234.574Z" fill="black"/>\r
<path d="M988.105 223.975L980.301 233.193L981.739 234.911L989.544 225.693L988.105 223.975Z" fill="black"/>\r
<path d="M977.568 223.974L969.763 233.192L971.202 234.911L979.007 225.693L977.568 223.974Z" fill="black"/>\r
<path d="M735.193 223.962L727.388 233.18L728.827 234.899L736.631 225.681L735.193 223.962Z" fill="black"/>\r
<path d="M724.655 223.962L716.85 233.18L718.289 234.899L726.093 225.681L724.655 223.962Z" fill="black"/>\r
<path d="M566.584 223.955L558.779 233.173L560.218 234.891L568.023 225.673L566.584 223.955Z" fill="black"/>\r
<path d="M556.047 223.954L548.242 233.172L549.681 234.891L557.485 225.673L556.047 223.954Z" fill="black"/>\r
<path d="M545.51 223.942L537.706 233.16L539.145 234.878L546.949 225.66L545.51 223.942Z" fill="black"/>\r
<path d="M534.97 223.953L527.166 233.171L528.605 234.89L536.409 225.672L534.97 223.953Z" fill="black"/>\r
<path d="M461.204 223.949L453.399 233.167L454.838 234.886L462.643 225.668L461.204 223.949Z" fill="black"/>\r
<path d="M303.138 223.926L295.334 233.144L296.773 234.863L304.577 225.645L303.138 223.926Z" fill="black"/>\r
<path d="M292.6 223.925L284.796 233.143L286.234 234.862L294.039 225.644L292.6 223.925Z" fill="black"/>\r
<path d="M282.063 223.925L274.258 233.143L275.697 234.861L283.501 225.643L282.063 223.925Z" fill="black"/>\r
<path d="M271.524 223.925L263.72 233.143L265.159 234.861L272.963 225.643L271.524 223.925Z" fill="black"/>\r
<path d="M260.986 223.924L253.182 233.142L254.621 234.861L262.425 225.643L260.986 223.924Z" fill="black"/>\r
<path d="M250.449 223.924L242.644 233.142L244.083 234.86L251.888 225.642L250.449 223.924Z" fill="black"/>\r
<path d="M239.911 223.923L232.106 233.141L233.545 234.86L241.349 225.642L239.911 223.923Z" fill="black"/>\r
<path d="M50.2265 223.916L42.4221 233.134L43.8609 234.852L51.6653 225.634L50.2265 223.916Z" fill="black"/>\r
<path d="M998.629 213.272L990.825 222.49L992.264 224.209L1000.07 214.991L998.629 213.272Z" fill="black"/>\r
<path d="M988.091 213.272L980.287 222.49L981.726 224.208L989.53 214.99L988.091 213.272Z" fill="black"/>\r
<path d="M735.179 213.261L727.375 222.48L728.814 224.198L736.618 214.98L735.179 213.261Z" fill="black"/>\r
<path d="M556.034 213.254L548.23 222.472L549.669 224.191L557.473 214.973L556.034 213.254Z" fill="black"/>\r
<path d="M545.494 213.268L537.689 222.486L539.128 224.205L546.933 214.987L545.494 213.268Z" fill="black"/>\r
<path d="M534.958 213.253L527.154 222.471L528.593 224.19L536.397 214.972L534.958 213.253Z" fill="black"/>\r
<path d="M450.653 213.256L442.849 222.474L444.288 224.193L452.092 214.975L450.653 213.256Z" fill="black"/>\r
<path d="M60.7478 213.239L52.9434 222.457L54.3822 224.176L62.1867 214.958L60.7478 213.239Z" fill="black"/>\r
<path d="M1009.17 202.64L1001.37 211.858L1002.81 213.577L1010.61 204.359L1009.17 202.64Z" fill="black"/>\r
<path d="M998.637 202.639L990.833 211.857L992.271 213.576L1000.08 204.358L998.637 202.639Z" fill="black"/>\r
<path d="M988.099 202.639L980.294 211.857L981.733 213.576L989.537 204.358L988.099 202.639Z" fill="black"/>\r
<path d="M735.185 202.627L727.381 211.845L728.82 213.564L736.624 204.346L735.185 202.627Z" fill="black"/>\r
<path d="M556.039 202.618L548.235 211.836L549.674 213.555L557.478 204.337L556.039 202.618Z" fill="black"/>\r
<path d="M545.503 202.607L537.698 211.825L539.137 213.543L546.941 204.325L545.503 202.607Z" fill="black"/>\r
<path d="M534.963 202.617L527.158 211.835L528.597 213.554L536.402 204.336L534.963 202.617Z" fill="black"/>\r
<path d="M450.661 202.606L442.856 211.824L444.295 213.542L452.099 204.324L450.661 202.606Z" fill="black"/>\r
<path d="M60.7575 202.581L52.9531 211.799L54.3919 213.518L62.1963 204.3L60.7575 202.581Z" fill="black"/>\r
<path d="M1009.18 191.965L1001.38 201.183L1002.82 202.902L1010.62 193.684L1009.18 191.965Z" fill="black"/>\r
<path d="M998.646 191.965L990.842 201.183L992.28 202.902L1000.08 193.684L998.646 191.965Z" fill="black"/>\r
<path d="M735.196 191.954L727.391 201.172L728.83 202.891L736.635 193.673L735.196 191.954Z" fill="black"/>\r
<path d="M556.051 191.947L548.246 201.165L549.685 202.884L557.49 193.666L556.051 191.947Z" fill="black"/>\r
<path d="M545.51 191.961L537.706 201.179L539.145 202.898L546.949 193.68L545.51 191.961Z" fill="black"/>\r
<path d="M534.974 191.946L527.17 201.164L528.609 202.883L536.413 193.665L534.974 191.946Z" fill="black"/>\r
<path d="M440.131 191.948L432.327 201.166L433.766 202.885L441.57 193.667L440.131 191.948Z" fill="black"/>\r
<path d="M71.3014 191.932L63.4971 201.15L64.9359 202.869L72.7403 193.651L71.3014 191.932Z" fill="black"/>\r
<path d="M1019.71 181.291L1011.9 190.509L1013.34 192.228L1021.14 183.01L1019.71 181.291Z" fill="black"/>\r
<path d="M1009.17 181.305L1001.36 190.523L1002.8 192.242L1010.61 183.024L1009.17 181.305Z" fill="black"/>\r
<path d="M735.178 181.292L727.374 190.51L728.812 192.228L736.617 183.01L735.178 181.292Z" fill="black"/>\r
<path d="M556.032 181.283L548.228 190.501L549.667 192.22L557.471 183.002L556.032 181.283Z" fill="black"/>\r
<path d="M545.496 181.271L537.692 190.489L539.131 192.208L546.935 182.99L545.496 181.271Z" fill="black"/>\r
<path d="M534.955 181.282L527.151 190.5L528.59 192.219L536.394 183.001L534.955 181.282Z" fill="black"/>\r
<path d="M429.579 181.26L421.775 190.478L423.214 192.197L431.018 182.979L429.579 181.26Z" fill="black"/>\r
<path d="M92.3645 181.247L84.5601 190.465L85.9989 192.184L93.8033 182.966L92.3645 181.247Z" fill="black"/>\r
<path d="M81.8263 181.246L74.022 190.464L75.4608 192.183L83.2652 182.965L81.8263 181.246Z" fill="black"/>\r
<path d="M1030.25 170.631L1022.45 179.849L1023.89 181.568L1031.69 172.35L1030.25 170.631Z" fill="black"/>\r
<path d="M1019.71 170.648L1011.91 179.866L1013.35 181.584L1021.15 172.366L1019.71 170.648Z" fill="black"/>\r
<path d="M735.189 170.619L727.384 179.837L728.823 181.556L736.628 172.338L735.189 170.619Z" fill="black"/>\r
<path d="M545.503 170.626L537.698 179.844L539.137 181.563L546.941 172.345L545.503 170.626Z" fill="black"/>\r
<path d="M534.967 170.611L527.163 179.829L528.601 181.548L536.406 172.33L534.967 170.611Z" fill="black"/>\r
<path d="M524.43 170.61L516.625 179.828L518.064 181.547L525.869 172.329L524.43 170.61Z" fill="black"/>\r
<path d="M419.049 170.612L411.244 179.83L412.683 181.549L420.488 172.33L419.049 170.612Z" fill="black"/>\r
<path d="M102.908 170.598L95.104 179.816L96.5429 181.535L104.347 172.317L102.908 170.598Z" fill="black"/>\r
<path d="M1040.8 159.999L1032.99 169.217L1034.43 170.936L1042.24 161.718L1040.8 159.999Z" fill="black"/>\r
<path d="M1030.26 159.998L1022.46 169.216L1023.89 170.935L1031.7 161.717L1030.26 159.998Z" fill="black"/>\r
<path d="M1019.72 159.984L1011.92 169.202L1013.36 170.921L1021.16 161.703L1019.72 159.984Z" fill="black"/>\r
<path d="M545.512 159.964L537.708 169.182L539.147 170.901L546.951 161.683L545.512 159.964Z" fill="black"/>\r
<path d="M534.972 159.975L527.168 169.193L528.607 170.912L536.411 161.694L534.972 159.975Z" fill="black"/>\r
<path d="M524.435 159.975L516.63 169.193L518.069 170.911L525.874 161.693L524.435 159.975Z" fill="black"/>\r
<path d="M408.52 159.952L400.716 169.17L402.155 170.889L409.959 161.671L408.52 159.952Z" fill="black"/>\r
<path d="M397.982 159.952L390.178 169.17L391.617 170.889L399.421 161.671L397.982 159.952Z" fill="black"/>\r
<path d="M123.995 159.941L116.19 169.159L117.629 170.878L125.433 161.66L123.995 159.941Z" fill="black"/>\r
<path d="M113.457 159.94L105.652 169.158L107.091 170.877L114.895 161.659L113.457 159.94Z" fill="black"/>\r
<path d="M29.1525 159.937L21.3481 169.155L22.787 170.874L30.5914 161.656L29.1525 159.937Z" fill="black"/>\r
<path d="M1051.32 149.296L1043.52 158.514L1044.95 160.233L1052.76 151.015L1051.32 149.296Z" fill="black"/>\r
<path d="M1040.78 149.296L1032.98 158.514L1034.42 160.233L1042.22 151.015L1040.78 149.296Z" fill="black"/>\r
<path d="M1030.24 149.296L1022.44 158.514L1023.88 160.232L1031.68 151.014L1030.24 149.296Z" fill="black"/>\r
<path d="M545.495 149.29L537.691 158.508L539.13 160.227L546.934 151.009L545.495 149.29Z" fill="black"/>\r
<path d="M534.96 149.276L527.156 158.493L528.594 160.212L536.399 150.994L534.96 149.276Z" fill="black"/>\r
<path d="M524.423 149.275L516.618 158.493L518.057 160.212L525.861 150.994L524.423 149.275Z" fill="black"/>\r
<path d="M397.965 149.276L390.16 158.494L391.599 160.213L399.404 150.995L397.965 149.276Z" fill="black"/>\r
<path d="M387.427 149.275L379.622 158.493L381.061 160.212L388.866 150.994L387.427 149.275Z" fill="black"/>\r
<path d="M134.515 149.264L126.71 158.482L128.149 160.201L135.954 150.983L134.515 149.264Z" fill="black"/>\r
<path d="M123.977 149.264L116.172 158.482L117.611 160.201L125.416 150.983L123.977 149.264Z" fill="black"/>\r
<path d="M29.1354 149.26L21.3311 158.478L22.7699 160.197L30.5743 150.979L29.1354 149.26Z" fill="black"/>\r
<path d="M1051.33 138.643L1043.52 147.861L1044.96 149.58L1052.77 140.362L1051.33 138.643Z" fill="black"/>\r
<path d="M1040.79 138.642L1032.99 147.86L1034.42 149.579L1042.23 140.361L1040.79 138.642Z" fill="black"/>\r
<path d="M735.19 138.63L727.385 147.848L728.824 149.567L736.629 140.349L735.19 138.63Z" fill="black"/>\r
<path d="M534.968 138.622L527.164 147.84L528.602 149.559L536.407 140.341L534.968 138.622Z" fill="black"/>\r
<path d="M524.43 138.622L516.626 147.84L518.065 149.559L525.869 140.341L524.43 138.622Z" fill="black"/>\r
<path d="M513.892 138.621L506.088 147.839L507.527 149.558L515.331 140.34L513.892 138.621Z" fill="black"/>\r
<path d="M376.896 138.621L369.092 147.839L370.531 149.558L378.335 140.34L376.896 138.621Z" fill="black"/>\r
<path d="M366.359 138.621L358.555 147.839L359.994 149.558L367.798 140.34L366.359 138.621Z" fill="black"/>\r
<path d="M155.599 138.612L147.795 147.83L149.234 149.549L157.038 140.331L155.599 138.612Z" fill="black"/>\r
<path d="M145.061 138.611L137.257 147.83L138.696 149.548L146.5 140.33L145.061 138.611Z" fill="black"/>\r
<path d="M1061.87 128.011L1054.07 137.229L1055.51 138.948L1063.31 129.73L1061.87 128.011Z" fill="black"/>\r
<path d="M1051.34 128.01L1043.53 137.228L1044.97 138.947L1052.78 129.729L1051.34 128.01Z" fill="black"/>\r
<path d="M735.196 127.995L727.391 137.213L728.83 138.932L736.635 129.714L735.196 127.995Z" fill="black"/>\r
<path d="M524.436 127.985L516.631 137.203L518.07 138.922L525.874 129.704L524.436 127.985Z" fill="black"/>\r
<path d="M513.897 127.985L506.093 137.203L507.532 138.922L515.336 129.704L513.897 127.985Z" fill="black"/>\r
<path d="M345.293 127.961L337.488 137.179L338.927 138.898L346.731 129.68L345.293 127.961Z" fill="black"/>\r
<path d="M334.755 127.96L326.951 137.178L328.39 138.897L336.194 129.679L334.755 127.96Z" fill="black"/>\r
<path d="M324.217 127.96L316.413 137.178L317.851 138.897L325.656 129.679L324.217 127.96Z" fill="black"/>\r
<path d="M197.761 127.955L189.957 137.173L191.396 138.892L199.2 129.674L197.761 127.955Z" fill="black"/>\r
<path d="M187.223 127.955L179.419 137.173L180.858 138.892L188.662 129.674L187.223 127.955Z" fill="black"/>\r
<path d="M176.686 127.954L168.881 137.172L170.32 138.891L178.125 129.673L176.686 127.954Z" fill="black"/>\r
<path d="M39.6916 127.949L31.8872 137.167L33.326 138.885L41.1304 129.667L39.6916 127.949Z" fill="black"/>\r
<path d="M1072.4 117.325L1064.59 126.543L1066.03 128.262L1073.84 119.044L1072.4 117.325Z" fill="black"/>\r
<path d="M1061.86 117.308L1054.06 126.526L1055.49 128.245L1063.3 119.027L1061.86 117.308Z" fill="black"/>\r
<path d="M513.885 117.286L506.081 126.504L507.519 128.223L515.324 119.005L513.885 117.286Z" fill="black"/>\r
<path d="M503.347 117.286L495.542 126.504L496.981 128.222L504.785 119.004L503.347 117.286Z" fill="black"/>\r
<path d="M303.124 117.283L295.319 126.501L296.758 128.219L304.563 119.001L303.124 117.283Z" fill="black"/>\r
<path d="M292.586 117.282L284.782 126.5L286.221 128.219L294.025 119.001L292.586 117.282Z" fill="black"/>\r
<path d="M282.048 117.282L274.244 126.5L275.682 128.219L283.487 119.001L282.048 117.282Z" fill="black"/>\r
<path d="M271.51 117.281L263.705 126.499L265.144 128.218L272.949 119L271.51 117.281Z" fill="black"/>\r
<path d="M260.972 117.281L253.167 126.499L254.606 128.218L262.41 119L260.972 117.281Z" fill="black"/>\r
<path d="M250.434 117.28L242.63 126.498L244.068 128.217L251.873 118.999L250.434 117.28Z" fill="black"/>\r
<path d="M239.896 117.28L232.092 126.498L233.53 128.217L241.335 118.999L239.896 117.28Z" fill="black"/>\r
<path d="M229.358 117.28L221.553 126.498L222.992 128.217L230.797 118.999L229.358 117.28Z" fill="black"/>\r
<path d="M218.82 117.279L211.015 126.497L212.454 128.216L220.259 118.998L218.82 117.279Z" fill="black"/>\r
<path d="M50.2121 117.272L42.4077 126.49L43.8465 128.209L51.6509 118.991L50.2121 117.272Z" fill="black"/>\r
<path d="M1082.94 106.677L1075.14 115.895L1076.58 117.613L1084.38 108.395L1082.94 106.677Z" fill="black"/>\r
<path d="M1072.41 106.662L1064.6 115.88L1066.04 117.599L1073.84 108.381L1072.41 106.662Z" fill="black"/>\r
<path d="M1061.87 106.676L1054.06 115.893L1055.5 117.612L1063.31 108.394L1061.87 106.676Z" fill="black"/>\r
<path d="M724.651 106.66L716.847 115.878L718.286 117.596L726.09 108.378L724.651 106.66Z" fill="black"/>\r
<path d="M513.89 106.65L506.086 115.868L507.525 117.587L515.329 108.368L513.89 106.65Z" fill="black"/>\r
<path d="M503.353 106.649L495.548 115.867L496.987 117.586L504.792 108.368L503.353 106.649Z" fill="black"/>\r
<path d="M492.816 106.637L485.011 115.855L486.45 117.574L494.255 108.356L492.816 106.637Z" fill="black"/>\r
<path d="M50.2226 106.614L42.4182 115.832L43.857 117.55L51.6614 108.332L50.2226 106.614Z" fill="black"/>\r
<path d="M1093.49 96.0022L1085.69 105.22L1087.12 106.939L1094.93 97.7211L1093.49 96.0022Z" fill="black"/>\r
<path d="M1082.95 96.0017L1075.15 105.22L1076.59 106.939L1084.39 97.7206L1082.95 96.0017Z" fill="black"/>\r
<path d="M1072.41 96.0183L1064.61 105.236L1066.05 106.955L1073.85 97.7372L1072.41 96.0183Z" fill="black"/>\r
<path d="M503.363 95.9785L495.559 105.197L496.998 106.915L504.802 97.6974L503.363 95.9785Z" fill="black"/>\r
<path d="M492.823 95.9917L485.019 105.21L486.458 106.929L494.262 97.7105L492.823 95.9917Z" fill="black"/>\r
<path d="M60.7663 95.9651L52.9619 105.183L54.4008 106.902L62.2052 97.684L60.7663 95.9651Z" fill="black"/>\r
<path d="M1104.01 85.3419L1096.21 94.56L1097.65 96.2789L1105.45 87.0608L1104.01 85.3419Z" fill="black"/>\r
<path d="M1093.47 85.3415L1085.67 94.5595L1087.11 96.2784L1094.91 87.0603L1093.47 85.3415Z" fill="black"/>\r
<path d="M1082.94 85.3407L1075.13 94.5588L1076.57 96.2776L1084.38 87.0596L1082.94 85.3407Z" fill="black"/>\r
<path d="M492.808 85.302L485.004 94.52L486.443 96.2388L494.247 87.0208L492.808 85.302Z" fill="black"/>\r
<path d="M482.269 85.3121L474.464 94.5301L475.903 96.2489L483.708 87.031L482.269 85.3121Z" fill="black"/>\r
<path d="M60.7534 85.2788L52.949 94.4969L54.3879 96.2157L62.1923 86.9977L60.7534 85.2788Z" fill="black"/>\r
<path d="M1114.56 74.6677L1106.75 83.8857L1108.19 85.6045L1116 76.3866L1114.56 74.6677Z" fill="black"/>\r
<path d="M1104.02 74.667L1096.22 83.8851L1097.65 85.6039L1105.46 76.3859L1104.02 74.667Z" fill="black"/>\r
<path d="M1093.48 74.667L1085.68 83.8851L1087.12 85.6039L1094.92 76.3859L1093.48 74.667Z" fill="black"/>\r
<path d="M482.28 74.6421L474.476 83.86L475.915 85.5789L483.719 76.3609L482.28 74.6421Z" fill="black"/>\r
<path d="M471.742 74.6415L463.938 83.8596L465.377 85.5784L473.181 76.3604L471.742 74.6415Z" fill="black"/>\r
<path d="M81.8354 74.6309L74.031 83.8489L75.4699 85.5678L83.2743 76.3498L81.8354 74.6309Z" fill="black"/>\r
<path d="M71.2973 74.6304L63.4929 83.8484L64.9318 85.5673L72.7362 76.3493L71.2973 74.6304Z" fill="black"/>\r
<path d="M1125.1 64.0216L1117.3 73.2396L1118.74 74.9583L1126.54 65.7404L1125.1 64.0216Z" fill="black"/>\r
<path d="M1114.57 64.0354L1106.76 73.2534L1108.2 74.9721L1116.01 65.7542L1114.57 64.0354Z" fill="black"/>\r
<path d="M1104.03 64.0349L1096.22 73.253L1097.66 74.9718L1105.47 65.7537L1104.03 64.0349Z" fill="black"/>\r
<path d="M1093.49 64.0343L1085.69 73.2524L1087.13 74.9712L1094.93 65.7531L1093.49 64.0343Z" fill="black"/>\r
<path d="M471.747 64.0047L463.942 73.2227L465.381 74.9415L473.186 65.7234L471.747 64.0047Z" fill="black"/>\r
<path d="M461.209 64.0041L453.405 73.2221L454.844 74.9409L462.648 65.7228L461.209 64.0041Z" fill="black"/>\r
<path d="M450.673 63.9964L442.868 73.2144L444.307 74.9332L452.112 65.7151L450.673 63.9964Z" fill="black"/>\r
<path d="M92.3835 63.973L84.5791 73.1911L86.0179 74.9099L93.8223 65.6918L92.3835 63.973Z" fill="black"/>\r
<path d="M1125.09 53.3497L1117.29 62.5677L1118.72 64.2865L1126.53 55.0686L1125.09 53.3497Z" fill="black"/>\r
<path d="M1114.55 53.3324L1106.75 62.5504L1108.19 64.2692L1115.99 55.0512L1114.55 53.3324Z" fill="black"/>\r
<path d="M1104.01 53.3318L1096.21 62.5499L1097.65 64.2687L1105.45 55.0507L1104.01 53.3318Z" fill="black"/>\r
<path d="M461.197 53.3062L453.393 62.5242L454.831 64.2431L462.636 55.025L461.197 53.3062Z" fill="black"/>\r
<path d="M450.657 53.3113L442.853 62.5294L444.292 64.2482L452.096 55.0302L450.657 53.3113Z" fill="black"/>\r
<path d="M102.904 53.2966L95.1001 62.5146L96.539 64.2334L104.343 55.0154L102.904 53.2966Z" fill="black"/>\r
<path d="M1135.64 42.7007L1127.83 51.9188L1129.27 53.6375L1137.08 44.4195L1135.64 42.7007Z" fill="black"/>\r
<path d="M1125.1 42.6865L1117.29 51.9045L1118.73 53.6233L1126.54 44.4053L1125.1 42.6865Z" fill="black"/>\r
<path d="M1114.56 42.6998L1106.76 51.9178L1108.19 53.6366L1116 44.4186L1114.56 42.6998Z" fill="black"/>\r
<path d="M450.666 42.661L442.861 51.8791L444.3 53.5979L452.105 44.3798L450.666 42.661Z" fill="black"/>\r
<path d="M440.129 42.6519L432.325 51.8699L433.764 53.5887L441.568 44.3707L440.129 42.6519Z" fill="black"/>\r
<path d="M429.592 42.6514L421.787 51.8694L423.226 53.5882L431.03 44.3702L429.592 42.6514Z" fill="black"/>\r
<path d="M113.453 42.6382L105.648 51.8563L107.087 53.575L114.891 44.357L113.453 42.6382Z" fill="black"/>\r
<path d="M1146.18 32.0265L1138.38 41.2446L1139.82 42.9633L1147.62 33.7453L1146.18 32.0265Z" fill="black"/>\r
<path d="M1135.64 32.026L1127.84 41.2441L1129.28 42.9629L1137.08 33.7448L1135.64 32.026Z" fill="black"/>\r
<path d="M1125.11 32.0427L1117.3 41.2607L1118.74 42.9795L1126.55 33.7615L1125.11 32.0427Z" fill="black"/>\r
<path d="M1114.57 32.0254L1106.76 41.2433L1108.2 42.9621L1116.01 33.7442L1114.57 32.0254Z" fill="black"/>\r
<path d="M429.598 32.0032L421.794 41.2213L423.233 42.94L431.037 33.722L429.598 32.0032Z" fill="black"/>\r
<path d="M419.06 32.0025L411.256 41.2205L412.694 42.9393L420.499 33.7213L419.06 32.0025Z" fill="black"/>\r
<path d="M408.522 32.0025L400.717 41.2205L402.156 42.9393L409.961 33.7212L408.522 32.0025Z" fill="black"/>\r
<path d="M134.534 31.9904L126.73 41.2084L128.169 42.9272L135.973 33.7092L134.534 31.9904Z" fill="black"/>\r
<path d="M408.508 21.3151L400.704 30.5331L402.142 32.2519L409.947 23.0339L408.508 21.3151Z" fill="black"/>\r
<path d="M397.97 21.3148L390.166 30.5328L391.605 32.2515L399.409 23.0335L397.97 21.3148Z" fill="black"/>\r
<path d="M387.432 21.3144L379.628 30.5324L381.067 32.2512L388.871 23.0332L387.432 21.3144Z" fill="black"/>\r
<path d="M166.134 21.3053L158.33 30.5234L159.769 32.2421L167.573 23.0241L166.134 21.3053Z" fill="black"/>\r
<path d="M155.597 21.3049L147.792 30.5229L149.231 32.2417L157.036 23.0236L155.597 21.3049Z" fill="black"/>\r
<path d="M145.059 21.3043L137.254 30.5224L138.693 32.2412L146.498 23.0231L145.059 21.3043Z" fill="black"/>\r
<path d="M376.901 10.6654L369.096 19.8835L370.535 21.6023L378.339 12.3843L376.901 10.6654Z" fill="black"/>\r
<path d="M366.363 10.6649L358.559 19.8829L359.998 21.6017L367.802 12.3837L366.363 10.6649Z" fill="black"/>\r
<path d="M355.825 10.6644L348.021 19.8824L349.46 21.6013L357.264 12.3833L355.825 10.6644Z" fill="black"/>\r
<path d="M345.287 10.6642L337.482 19.8822L338.921 21.6011L346.726 12.383L345.287 10.6642Z" fill="black"/>\r
<path d="M197.755 10.6579L189.95 19.8759L191.389 21.5948L199.194 12.3767L197.755 10.6579Z" fill="black"/>\r
<path d="M187.217 10.6574L179.413 19.8754L180.852 21.5942L188.656 12.3762L187.217 10.6574Z" fill="black"/>\r
<path d="M176.679 10.6569L168.875 19.8749L170.314 21.5938L178.118 12.3758L176.679 10.6569Z" fill="black"/>\r
<path d="M345.297 0.0053149L337.492 9.22333L338.931 10.9422L346.735 1.72417L345.297 0.0053149Z" fill="black"/>\r
<path d="M334.759 0.00482662L326.954 9.22284L328.393 10.9417L336.198 1.72369L334.759 0.00482662Z" fill="black"/>\r
<path d="M324.22 0.0047844L316.416 9.22284L317.855 10.9417L325.659 1.72364L324.22 0.0047844Z" fill="black"/>\r
<path d="M313.682 0.00415523L305.878 9.22217L307.317 10.941L315.121 1.72301L313.682 0.00415523Z" fill="black"/>\r
<path d="M303.145 0.00362473L295.34 9.22168L296.779 10.9405L304.584 1.72248L303.145 0.00362473Z" fill="black"/>\r
<path d="M292.607 0.00317867L284.802 9.22119L286.241 10.9401L294.046 1.72204L292.607 0.00317867Z" fill="black"/>\r
<path d="M282.069 0.00293453L274.265 9.22095L275.704 10.9398L283.508 1.72179L282.069 0.00293453Z" fill="black"/>\r
<path d="M271.531 0.002343L263.727 9.2204L265.165 10.9393L272.97 1.7212L271.531 0.002343Z" fill="black"/>\r
<path d="M260.993 0.00189693L253.188 9.21991L254.627 10.9388L262.432 1.72076L260.993 0.00189693Z" fill="black"/>\r
<path d="M250.455 0.00161057L242.65 9.21967L244.089 10.9385L251.894 1.72047L250.455 0.00161057Z" fill="black"/>\r
<path d="M239.916 0.00122554L232.112 9.21924L233.551 10.9381L241.355 1.72008L239.916 0.00122554Z" fill="black"/>\r
<path d="M229.379 0.000798296L221.575 9.21881L223.014 10.9377L230.818 1.71966L229.379 0.000798296Z" fill="black"/>\r
<path d="M218.841 0.000450905L211.036 9.21851L212.475 10.9374L220.28 1.71931L218.841 0.000450905Z" fill="black"/>\r
<path d="M208.303 4.83888e-06L200.498 9.21802L201.937 10.9369L209.742 1.71886L208.303 4.83888e-06Z" fill="black"/>\r
</svg>\r
`,be=`<svg width="1251" height="650" viewBox="0 0 1251 650" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M7.23264 639.014L0 647.928L1.37507 649.502L8.60772 640.588L7.23264 639.014Z" fill="black"/>\r
<path d="M1.39211 639.014L0.0202637 640.592L7.27167 649.486L8.64351 647.907L1.39211 639.014Z" fill="black"/>\r
<path d="M1082.46 621.294L1075.23 630.209L1076.6 631.783L1083.83 622.869L1082.46 621.294Z" fill="black"/>\r
<path d="M1076.64 621.326L1075.27 622.904L1082.52 631.797L1083.89 630.219L1076.64 621.326Z" fill="black"/>\r
<path d="M1072.01 621.308L1064.78 630.222L1066.15 631.796L1073.38 622.882L1072.01 621.308Z" fill="black"/>\r
<path d="M1066.21 621.312L1064.84 622.89L1072.09 631.784L1073.46 630.205L1066.21 621.312Z" fill="black"/>\r
<path d="M1061.58 621.293L1054.35 630.208L1055.72 631.782L1062.96 622.868L1061.58 621.293Z" fill="black"/>\r
<path d="M1055.76 621.325L1054.39 622.904L1061.64 631.797L1063.01 630.219L1055.76 621.325Z" fill="black"/>\r
<path d="M1051.13 621.307L1043.9 630.221L1045.27 631.795L1052.51 622.881L1051.13 621.307Z" fill="black"/>\r
<path d="M1045.33 621.312L1043.96 622.89L1051.21 631.783L1052.59 630.205L1045.33 621.312Z" fill="black"/>\r
<path d="M1040.7 621.292L1033.47 630.207L1034.85 631.781L1042.08 622.866L1040.7 621.292Z" fill="black"/>\r
<path d="M1034.88 621.324L1033.51 622.903L1040.76 631.796L1042.13 630.218L1034.88 621.324Z" fill="black"/>\r
<path d="M1030.25 621.306L1023.02 630.22L1024.39 631.794L1031.63 622.88L1030.25 621.306Z" fill="black"/>\r
<path d="M1024.46 621.311L1023.08 622.889L1030.33 631.782L1031.71 630.204L1024.46 621.311Z" fill="black"/>\r
<path d="M748.409 621.278L741.177 630.192L742.552 631.766L749.784 622.852L748.409 621.278Z" fill="black"/>\r
<path d="M742.583 621.316L741.211 622.894L748.463 631.787L749.835 630.209L742.583 621.316Z" fill="black"/>\r
<path d="M737.959 621.291L730.727 630.205L732.102 631.78L739.335 622.865L737.959 621.291Z" fill="black"/>\r
<path d="M732.156 621.302L730.784 622.881L738.036 631.774L739.408 630.196L732.156 621.302Z" fill="black"/>\r
<path d="M727.531 621.276L720.299 630.191L721.674 631.765L728.907 622.851L727.531 621.276Z" fill="black"/>\r
<path d="M721.705 621.315L720.333 622.894L727.584 631.787L728.956 630.209L721.705 621.315Z" fill="black"/>\r
<path d="M717.081 621.29L709.848 630.204L711.223 631.778L718.456 622.864L717.081 621.29Z" fill="black"/>\r
<path d="M711.278 621.302L709.906 622.88L717.157 631.773L718.529 630.195L711.278 621.302Z" fill="black"/>\r
<path d="M591.812 621.283L584.58 630.198L585.955 631.772L593.188 622.858L591.812 621.283Z" fill="black"/>\r
<path d="M586.006 621.298L584.635 622.877L591.886 631.77L593.258 630.192L586.006 621.298Z" fill="black"/>\r
<path d="M581.385 621.269L574.152 630.184L575.527 631.758L582.76 622.843L581.385 621.269Z" fill="black"/>\r
<path d="M575.556 621.311L574.184 622.89L581.435 631.783L582.807 630.205L575.556 621.311Z" fill="black"/>\r
<path d="M570.934 621.282L563.701 630.197L565.076 631.771L572.309 622.856L570.934 621.282Z" fill="black"/>\r
<path d="M565.128 621.298L563.756 622.876L571.007 631.769L572.379 630.191L565.128 621.298Z" fill="black"/>\r
<path d="M445.666 621.276L438.433 630.19L439.808 631.765L447.041 622.85L445.666 621.276Z" fill="black"/>\r
<path d="M439.856 621.294L438.485 622.872L445.736 631.765L447.108 630.187L439.856 621.294Z" fill="black"/>\r
<path d="M435.238 621.262L428.005 630.176L429.38 631.75L436.613 622.836L435.238 621.262Z" fill="black"/>\r
<path d="M429.406 621.307L428.034 622.885L435.285 631.778L436.657 630.2L429.406 621.307Z" fill="black"/>\r
<path d="M424.787 621.275L417.555 630.189L418.93 631.763L426.162 622.849L424.787 621.275Z" fill="black"/>\r
<path d="M418.978 621.293L417.606 622.872L424.857 631.765L426.229 630.187L418.978 621.293Z" fill="black"/>\r
<path d="M414.359 621.261L407.127 630.175L408.502 631.749L415.734 622.835L414.359 621.261Z" fill="black"/>\r
<path d="M408.527 621.307L407.155 622.885L414.407 631.778L415.778 630.2L408.527 621.307Z" fill="black"/>\r
<path d="M403.909 621.274L396.677 630.188L398.052 631.763L405.284 622.848L403.909 621.274Z" fill="black"/>\r
<path d="M398.1 621.293L396.728 622.871L403.98 631.764L405.351 630.186L398.1 621.293Z" fill="black"/>\r
<path d="M393.482 621.259L386.249 630.174L387.624 631.748L394.857 622.834L393.482 621.259Z" fill="black"/>\r
<path d="M387.648 621.306L386.277 622.884L393.528 631.777L394.9 630.199L387.648 621.306Z" fill="black"/>\r
<path d="M383.032 621.273L375.799 630.187L377.174 631.761L384.407 622.847L383.032 621.273Z" fill="black"/>\r
<path d="M377.221 621.292L375.849 622.871L383.1 631.764L384.472 630.186L377.221 621.292Z" fill="black"/>\r
<path d="M38.5537 621.241L31.321 630.156L32.6961 631.73L39.9288 622.816L38.5537 621.241Z" fill="black"/>\r
<path d="M32.7139 621.296L31.342 622.874L38.5934 631.767L39.9652 630.189L32.7139 621.296Z" fill="black"/>\r
<path d="M28.1037 621.255L20.8711 630.169L22.2462 631.743L29.4788 622.829L28.1037 621.255Z" fill="black"/>\r
<path d="M22.2859 621.282L20.9141 622.86L28.1654 631.753L29.5372 630.175L22.2859 621.282Z" fill="black"/>\r
<path d="M17.6758 621.241L10.4431 630.155L11.8182 631.729L19.0508 622.815L17.6758 621.241Z" fill="black"/>\r
<path d="M11.8352 621.295L10.4634 622.873L17.7147 631.766L19.0866 630.188L11.8352 621.295Z" fill="black"/>\r
<path d="M1113.78 603.577L1106.55 612.491L1107.92 614.066L1115.16 605.151L1113.78 603.577Z" fill="black"/>\r
<path d="M1107.96 603.553L1106.59 605.131L1113.84 614.024L1115.21 612.446L1107.96 603.553Z" fill="black"/>\r
<path d="M1103.35 603.563L1096.12 612.477L1097.49 614.051L1104.73 605.137L1103.35 603.563Z" fill="black"/>\r
<path d="M1097.51 603.566L1096.14 605.144L1103.39 614.038L1104.76 612.46L1097.51 603.566Z" fill="black"/>\r
<path d="M1030.27 603.573L1023.04 612.487L1024.41 614.061L1031.64 605.147L1030.27 603.573Z" fill="black"/>\r
<path d="M1024.45 603.551L1023.08 605.129L1030.33 614.022L1031.7 612.444L1024.45 603.551Z" fill="black"/>\r
<path d="M1019.84 603.559L1012.61 612.473L1013.98 614.047L1021.22 605.133L1019.84 603.559Z" fill="black"/>\r
<path d="M1014 603.564L1012.63 605.142L1019.88 614.035L1021.25 612.457L1014 603.564Z" fill="black"/>\r
<path d="M1009.39 603.572L1002.16 612.486L1003.53 614.06L1010.77 605.146L1009.39 603.572Z" fill="black"/>\r
<path d="M1003.57 603.55L1002.2 605.128L1009.45 614.021L1010.82 612.443L1003.57 603.55Z" fill="black"/>\r
<path d="M790.181 603.547L782.949 612.461L784.324 614.036L791.556 605.121L790.181 603.547Z" fill="black"/>\r
<path d="M784.333 603.557L782.961 605.135L790.213 614.028L791.585 612.45L784.333 603.557Z" fill="black"/>\r
<path d="M779.731 603.56L772.498 612.474L773.873 614.049L781.106 605.134L779.731 603.56Z" fill="black"/>\r
<path d="M773.906 603.543L772.534 605.121L779.786 614.015L781.158 612.437L773.906 603.543Z" fill="black"/>\r
<path d="M769.304 603.546L762.071 612.46L763.446 614.034L770.679 605.12L769.304 603.546Z" fill="black"/>\r
<path d="M763.456 603.556L762.084 605.135L769.335 614.028L770.707 612.45L763.456 603.556Z" fill="black"/>\r
<path d="M717.097 603.557L709.865 612.471L711.24 614.046L718.472 605.131L717.097 603.557Z" fill="black"/>\r
<path d="M711.271 603.542L709.899 605.12L717.15 614.013L718.522 612.435L711.271 603.542Z" fill="black"/>\r
<path d="M706.669 603.542L699.436 612.457L700.811 614.031L708.044 605.117L706.669 603.542Z" fill="black"/>\r
<path d="M700.819 603.554L699.447 605.133L706.698 614.026L708.07 612.448L700.819 603.554Z" fill="black"/>\r
<path d="M623.157 603.538L615.924 612.453L617.299 614.027L624.532 605.112L623.157 603.538Z" fill="black"/>\r
<path d="M617.306 603.552L615.934 605.13L623.185 614.024L624.557 612.445L617.306 603.552Z" fill="black"/>\r
<path d="M612.706 603.552L605.473 612.466L606.848 614.04L614.081 605.126L612.706 603.552Z" fill="black"/>\r
<path d="M606.878 603.538L605.506 605.117L612.757 614.01L614.129 612.432L606.878 603.538Z" fill="black"/>\r
<path d="M570.95 603.549L563.717 612.464L565.092 614.038L572.325 605.123L570.95 603.549Z" fill="black"/>\r
<path d="M565.121 603.537L563.749 605.115L571 614.009L572.372 612.431L565.121 603.537Z" fill="black"/>\r
<path d="M560.522 603.535L553.289 612.449L554.664 614.024L561.897 605.109L560.522 603.535Z" fill="black"/>\r
<path d="M554.67 603.55L553.298 605.129L560.55 614.022L561.921 612.444L554.67 603.55Z" fill="black"/>\r
<path d="M477.01 603.531L469.778 612.445L471.153 614.019L478.385 605.105L477.01 603.531Z" fill="black"/>\r
<path d="M471.156 603.548L469.784 605.126L477.035 614.02L478.407 612.441L471.156 603.548Z" fill="black"/>\r
<path d="M466.56 603.544L459.328 612.459L460.703 614.033L467.935 605.118L466.56 603.544Z" fill="black"/>\r
<path d="M460.728 603.534L459.356 605.113L466.607 614.006L467.979 612.428L460.728 603.534Z" fill="black"/>\r
<path d="M456.132 603.53L448.9 612.444L450.275 614.018L457.507 605.104L456.132 603.53Z" fill="black"/>\r
<path d="M450.277 603.547L448.905 605.126L456.157 614.019L457.529 612.441L450.277 603.547Z" fill="black"/>\r
<path d="M383.048 603.54L375.815 612.454L377.19 614.029L384.423 605.114L383.048 603.54Z" fill="black"/>\r
<path d="M377.214 603.532L375.842 605.11L383.093 614.003L384.465 612.425L377.214 603.532Z" fill="black"/>\r
<path d="M372.62 603.525L365.387 612.44L366.762 614.014L373.995 605.1L372.62 603.525Z" fill="black"/>\r
<path d="M366.763 603.545L365.391 605.123L372.642 614.017L374.014 612.438L366.763 603.545Z" fill="black"/>\r
<path d="M362.169 603.539L354.936 612.453L356.311 614.027L363.544 605.113L362.169 603.539Z" fill="black"/>\r
<path d="M356.335 603.531L354.963 605.11L362.215 614.003L363.586 612.425L356.335 603.531Z" fill="black"/>\r
<path d="M48.9978 603.523L41.7651 612.438L43.1402 614.012L50.3729 605.097L48.9978 603.523Z" fill="black"/>\r
<path d="M43.1575 603.522L41.7856 605.101L49.037 613.994L50.4089 612.416L43.1575 603.522Z" fill="black"/>\r
<path d="M38.5698 603.509L31.3372 612.423L32.7122 613.997L39.9449 605.083L38.5698 603.509Z" fill="black"/>\r
<path d="M32.7063 603.535L31.3345 605.113L38.5859 614.007L39.9577 612.428L32.7063 603.535Z" fill="black"/>\r
<path d="M1145.1 585.805L1137.87 594.719L1139.24 596.294L1146.48 587.379L1145.1 585.805Z" fill="black"/>\r
<path d="M1139.26 585.807L1137.89 587.385L1145.14 596.278L1146.51 594.7L1139.26 585.807Z" fill="black"/>\r
<path d="M1134.65 585.819L1127.42 594.733L1128.79 596.307L1136.03 587.393L1134.65 585.819Z" fill="black"/>\r
<path d="M1128.83 585.793L1127.46 587.372L1134.71 596.265L1136.09 594.687L1128.83 585.793Z" fill="black"/>\r
<path d="M1019.83 585.799L1012.6 594.713L1013.98 596.287L1021.21 587.373L1019.83 585.799Z" fill="black"/>\r
<path d="M1013.99 585.803L1012.62 587.382L1019.87 596.275L1021.24 594.697L1013.99 585.803Z" fill="black"/>\r
<path d="M1009.38 585.812L1002.15 594.726L1003.53 596.301L1010.76 587.386L1009.38 585.812Z" fill="black"/>\r
<path d="M1003.56 585.79L1002.19 587.368L1009.44 596.261L1010.81 594.683L1003.56 585.79Z" fill="black"/>\r
<path d="M998.955 585.798L991.722 594.712L993.097 596.286L1000.33 587.372L998.955 585.798Z" fill="black"/>\r
<path d="M993.112 585.803L991.74 587.381L998.991 596.274L1000.36 594.696L993.112 585.803Z" fill="black"/>\r
<path d="M811.053 585.788L803.82 594.703L805.195 596.277L812.428 587.362L811.053 585.788Z" fill="black"/>\r
<path d="M805.205 585.797L803.833 587.376L811.084 596.269L812.456 594.691L805.205 585.797Z" fill="black"/>\r
<path d="M717.089 585.797L709.857 594.711L711.232 596.286L718.464 587.371L717.089 585.797Z" fill="black"/>\r
<path d="M711.263 585.781L709.892 587.36L717.143 596.253L718.515 594.675L711.263 585.781Z" fill="black"/>\r
<path d="M706.662 585.783L699.429 594.697L700.804 596.271L708.037 587.357L706.662 585.783Z" fill="black"/>\r
<path d="M700.813 585.794L699.441 587.373L706.692 596.266L708.064 594.688L700.813 585.794Z" fill="black"/>\r
<path d="M696.212 585.796L688.979 594.71L690.354 596.284L697.587 587.37L696.212 585.796Z" fill="black"/>\r
<path d="M690.385 585.78L689.013 587.359L696.264 596.252L697.636 594.674L690.385 585.78Z" fill="black"/>\r
<path d="M654.456 585.794L647.223 594.708L648.598 596.283L655.831 587.368L654.456 585.794Z" fill="black"/>\r
<path d="M648.628 585.779L647.256 587.358L654.507 596.251L655.879 594.673L648.628 585.779Z" fill="black"/>\r
<path d="M644.028 585.78L636.795 594.694L638.17 596.268L645.403 587.354L644.028 585.78Z" fill="black"/>\r
<path d="M638.177 585.793L636.805 587.371L644.057 596.264L645.428 594.686L638.177 585.793Z" fill="black"/>\r
<path d="M570.943 585.79L563.711 594.704L565.086 596.278L572.318 587.364L570.943 585.79Z" fill="black"/>\r
<path d="M565.114 585.777L563.742 587.355L570.993 596.249L572.365 594.67L565.114 585.777Z" fill="black"/>\r
<path d="M560.516 585.776L553.283 594.69L554.658 596.264L561.891 587.35L560.516 585.776Z" fill="black"/>\r
<path d="M554.663 585.79L553.291 587.368L560.542 596.262L561.914 594.683L554.663 585.79Z" fill="black"/>\r
<path d="M550.065 585.789L542.832 594.703L544.207 596.278L551.44 587.363L550.065 585.789Z" fill="black"/>\r
<path d="M544.235 585.777L542.863 587.355L550.114 596.248L551.486 594.67L544.235 585.777Z" fill="black"/>\r
<path d="M497.881 585.773L490.648 594.687L492.023 596.261L499.256 587.347L497.881 585.773Z" fill="black"/>\r
<path d="M492.027 585.788L490.655 587.366L497.907 596.26L499.279 594.681L492.027 585.788Z" fill="black"/>\r
<path d="M372.613 585.766L365.38 594.68L366.755 596.254L373.988 587.34L372.613 585.766Z" fill="black"/>\r
<path d="M366.756 585.785L365.384 587.363L372.635 596.256L374.007 594.678L366.756 585.785Z" fill="black"/>\r
<path d="M362.163 585.779L354.93 594.694L356.305 596.268L363.538 587.354L362.163 585.779Z" fill="black"/>\r
<path d="M356.328 585.771L354.956 587.349L362.207 596.242L363.579 594.664L356.328 585.771Z" fill="black"/>\r
<path d="M351.734 585.765L344.501 594.679L345.877 596.253L353.109 587.339L351.734 585.765Z" fill="black"/>\r
<path d="M345.877 585.784L344.505 587.362L351.757 596.256L353.129 594.677L345.877 585.784Z" fill="black"/>\r
<path d="M80.3191 585.751L73.0864 594.665L74.4615 596.239L81.6941 587.325L80.3191 585.751Z" fill="black"/>\r
<path d="M74.4563 585.776L73.0845 587.354L80.3359 596.248L81.7077 594.67L74.4563 585.776Z" fill="black"/>\r
<path d="M69.8691 585.764L62.6365 594.679L64.0115 596.253L71.2442 587.339L69.8691 585.764Z" fill="black"/>\r
<path d="M64.0288 585.763L62.657 587.341L69.9084 596.234L71.2803 594.656L64.0288 585.763Z" fill="black"/>\r
<path d="M59.4414 585.75L52.2087 594.664L53.5838 596.239L60.8165 587.324L59.4414 585.75Z" fill="black"/>\r
<path d="M53.5777 585.776L52.2058 587.354L59.4572 596.247L60.8291 594.669L53.5777 585.776Z" fill="black"/>\r
<path d="M48.9905 585.763L41.7578 594.678L43.1329 596.252L50.3655 587.337L48.9905 585.763Z" fill="black"/>\r
<path d="M43.1504 585.762L41.7786 587.34L49.03 596.234L50.4018 594.655L43.1504 585.762Z" fill="black"/>\r
<path d="M1165.97 568.046L1158.74 576.961L1160.12 578.535L1167.35 569.621L1165.97 568.046Z" fill="black"/>\r
<path d="M1160.16 568.075L1158.78 569.653L1166.03 578.547L1167.41 576.968L1160.16 568.075Z" fill="black"/>\r
<path d="M1019.83 568.039L1012.59 576.953L1013.97 578.528L1021.2 569.613L1019.83 568.039Z" fill="black"/>\r
<path d="M1014.01 568.071L1012.63 569.649L1019.88 578.542L1021.26 576.964L1014.01 568.071Z" fill="black"/>\r
<path d="M1009.38 568.053L1002.14 576.967L1003.52 578.541L1010.75 569.627L1009.38 568.053Z" fill="black"/>\r
<path d="M1003.58 568.057L1002.21 569.635L1009.46 578.529L1010.83 576.95L1003.58 568.057Z" fill="black"/>\r
<path d="M998.948 568.038L991.715 576.953L993.09 578.527L1000.32 569.613L998.948 568.038Z" fill="black"/>\r
<path d="M993.127 568.07L991.755 569.648L999.006 578.542L1000.38 576.963L993.127 568.07Z" fill="black"/>\r
<path d="M842.351 568.044L835.119 576.958L836.494 578.533L843.726 569.618L842.351 568.044Z" fill="black"/>\r
<path d="M836.55 568.052L835.178 569.63L842.429 578.524L843.801 576.945L836.55 568.052Z" fill="black"/>\r
<path d="M831.924 568.03L824.691 576.944L826.066 578.518L833.299 569.604L831.924 568.03Z" fill="black"/>\r
<path d="M826.099 568.065L824.727 569.643L831.979 578.537L833.351 576.959L826.099 568.065Z" fill="black"/>\r
<path d="M727.533 568.024L720.301 576.938L721.676 578.513L728.908 569.598L727.533 568.024Z" fill="black"/>\r
<path d="M721.706 568.062L720.334 569.64L727.586 578.534L728.958 576.955L721.706 568.062Z" fill="black"/>\r
<path d="M717.083 568.038L709.85 576.952L711.225 578.526L718.458 569.612L717.083 568.038Z" fill="black"/>\r
<path d="M711.278 568.049L709.906 569.627L717.158 578.52L718.53 576.942L711.278 568.049Z" fill="black"/>\r
<path d="M706.655 568.023L699.422 576.938L700.797 578.512L708.03 569.598L706.655 568.023Z" fill="black"/>\r
<path d="M700.828 568.062L699.456 569.64L706.707 578.533L708.079 576.955L700.828 568.062Z" fill="black"/>\r
<path d="M696.205 568.036L688.972 576.951L690.347 578.525L697.58 569.611L696.205 568.036Z" fill="black"/>\r
<path d="M690.4 568.048L689.028 569.626L696.279 578.52L697.651 576.941L690.4 568.048Z" fill="black"/>\r
<path d="M675.327 568.036L668.094 576.95L669.469 578.524L676.702 569.61L675.327 568.036Z" fill="black"/>\r
<path d="M669.521 568.047L668.149 569.625L675.401 578.519L676.773 576.94L669.521 568.047Z" fill="black"/>\r
<path d="M664.899 568.021L657.666 576.935L659.041 578.51L666.274 569.595L664.899 568.021Z" fill="black"/>\r
<path d="M659.071 568.06L657.699 569.639L664.95 578.532L666.322 576.954L659.071 568.06Z" fill="black"/>\r
<path d="M581.386 568.017L574.154 576.931L575.529 578.505L582.761 569.591L581.386 568.017Z" fill="black"/>\r
<path d="M575.556 568.058L574.185 569.636L581.436 578.53L582.808 576.952L575.556 568.058Z" fill="black"/>\r
<path d="M570.936 568.03L563.703 576.945L565.078 578.519L572.311 569.604L570.936 568.03Z" fill="black"/>\r
<path d="M565.128 568.044L563.757 569.622L571.008 578.516L572.38 576.937L565.128 568.044Z" fill="black"/>\r
<path d="M560.509 568.016L553.276 576.93L554.651 578.505L561.884 569.59L560.509 568.016Z" fill="black"/>\r
<path d="M554.678 568.057L553.306 569.635L560.557 578.529L561.929 576.951L554.678 568.057Z" fill="black"/>\r
<path d="M550.058 568.029L542.825 576.943L544.2 578.518L551.433 569.603L550.058 568.029Z" fill="black"/>\r
<path d="M544.251 568.044L542.879 569.622L550.13 578.515L551.502 576.937L544.251 568.044Z" fill="black"/>\r
<path d="M529.18 568.028L521.948 576.942L523.323 578.516L530.555 569.602L529.18 568.028Z" fill="black"/>\r
<path d="M523.371 568.043L522 569.621L529.251 578.515L530.623 576.936L523.371 568.043Z" fill="black"/>\r
<path d="M518.752 568.014L511.52 576.928L512.895 578.502L520.127 569.588L518.752 568.014Z" fill="black"/>\r
<path d="M512.921 568.056L511.549 569.635L518.8 578.528L520.172 576.95L512.921 568.056Z" fill="black"/>\r
<path d="M372.605 568.006L365.373 576.921L366.748 578.495L373.981 569.581L372.605 568.006Z" fill="black"/>\r
<path d="M366.771 568.052L365.4 569.63L372.651 578.523L374.023 576.945L366.771 568.052Z" fill="black"/>\r
<path d="M362.155 568.02L354.922 576.934L356.297 578.508L363.53 569.594L362.155 568.02Z" fill="black"/>\r
<path d="M356.344 568.038L354.972 569.616L362.223 578.51L363.595 576.932L356.344 568.038Z" fill="black"/>\r
<path d="M351.727 568.005L344.494 576.92L345.869 578.494L353.102 569.579L351.727 568.005Z" fill="black"/>\r
<path d="M345.893 568.051L344.521 569.63L351.773 578.523L353.144 576.945L345.893 568.051Z" fill="black"/>\r
<path d="M101.19 567.993L93.9575 576.907L95.3326 578.481L102.565 569.567L101.19 567.993Z" fill="black"/>\r
<path d="M95.3504 568.044L93.9785 569.623L101.23 578.516L102.602 576.938L95.3504 568.044Z" fill="black"/>\r
<path d="M90.7397 568.006L83.5071 576.92L84.8822 578.495L92.1148 569.58L90.7397 568.006Z" fill="black"/>\r
<path d="M84.9224 568.03L83.5505 569.609L90.8019 578.502L92.1738 576.924L84.9224 568.03Z" fill="black"/>\r
<path d="M80.312 567.991L73.0793 576.906L74.4544 578.48L81.6871 569.566L80.312 567.991Z" fill="black"/>\r
<path d="M74.4717 568.044L73.0999 569.622L80.3513 578.515L81.7231 576.937L74.4717 568.044Z" fill="black"/>\r
<path d="M69.8615 568.005L62.6289 576.919L64.004 578.493L71.2366 569.579L69.8615 568.005Z" fill="black"/>\r
<path d="M64.044 568.03L62.6721 569.608L69.9235 578.501L71.2954 576.923L64.044 568.03Z" fill="black"/>\r
<path d="M1186.87 550.315L1179.64 559.229L1181.01 560.803L1188.24 551.889L1186.87 550.315Z" fill="black"/>\r
<path d="M1181.03 550.315L1179.66 551.893L1186.91 560.787L1188.28 559.208L1181.03 550.315Z" fill="black"/>\r
<path d="M1176.42 550.328L1169.18 559.243L1170.56 560.817L1177.79 551.902L1176.42 550.328Z" fill="black"/>\r
<path d="M1170.6 550.302L1169.23 551.88L1176.48 560.773L1177.85 559.195L1170.6 550.302Z" fill="black"/>\r
<path d="M1019.84 550.306L1012.61 559.221L1013.98 560.795L1021.22 551.88L1019.84 550.306Z" fill="black"/>\r
<path d="M1014 550.311L1012.63 551.889L1019.88 560.782L1021.25 559.204L1014 550.311Z" fill="black"/>\r
<path d="M1009.39 550.319L1002.16 559.234L1003.53 560.808L1010.77 551.894L1009.39 550.319Z" fill="black"/>\r
<path d="M1003.57 550.297L1002.2 551.875L1009.45 560.768L1010.82 559.19L1003.57 550.297Z" fill="black"/>\r
<path d="M998.965 550.305L991.732 559.219L993.107 560.794L1000.34 551.879L998.965 550.305Z" fill="black"/>\r
<path d="M993.12 550.31L991.749 551.888L999 560.781L1000.37 559.203L993.12 550.31Z" fill="black"/>\r
<path d="M946.758 550.316L939.526 559.231L940.901 560.805L948.133 551.89L946.758 550.316Z" fill="black"/>\r
<path d="M940.936 550.295L939.564 551.873L946.815 560.767L948.187 559.188L940.936 550.295Z" fill="black"/>\r
<path d="M936.331 550.302L929.098 559.216L930.473 560.79L937.706 551.876L936.331 550.302Z" fill="black"/>\r
<path d="M930.484 550.308L929.112 551.886L936.363 560.779L937.735 559.201L930.484 550.308Z" fill="black"/>\r
<path d="M925.88 550.315L918.647 559.23L920.022 560.804L927.255 551.89L925.88 550.315Z" fill="black"/>\r
<path d="M920.057 550.294L918.685 551.872L925.936 560.766L927.308 559.187L920.057 550.294Z" fill="black"/>\r
<path d="M915.452 550.301L908.219 559.215L909.595 560.789L916.827 551.875L915.452 550.301Z" fill="black"/>\r
<path d="M909.606 550.307L908.234 551.885L915.486 560.779L916.858 559.201L909.606 550.307Z" fill="black"/>\r
<path d="M863.246 550.312L856.013 559.226L857.388 560.801L864.621 551.886L863.246 550.312Z" fill="black"/>\r
<path d="M857.421 550.293L856.05 551.871L863.301 560.764L864.673 559.186L857.421 550.293Z" fill="black"/>\r
<path d="M852.818 550.298L845.585 559.212L846.96 560.786L854.193 551.872L852.818 550.298Z" fill="black"/>\r
<path d="M846.97 550.305L845.599 551.884L852.85 560.777L854.222 559.199L846.97 550.305Z" fill="black"/>\r
<path d="M727.55 550.291L720.317 559.206L721.692 560.78L728.925 551.865L727.55 550.291Z" fill="black"/>\r
<path d="M721.699 550.302L720.327 551.88L727.579 560.773L728.951 559.195L721.699 550.302Z" fill="black"/>\r
<path d="M717.099 550.305L709.866 559.219L711.241 560.793L718.474 551.879L717.099 550.305Z" fill="black"/>\r
<path d="M711.271 550.288L709.9 551.866L717.151 560.76L718.523 559.181L711.271 550.288Z" fill="black"/>\r
<path d="M706.671 550.29L699.438 559.205L700.814 560.779L708.046 551.865L706.671 550.29Z" fill="black"/>\r
<path d="M700.821 550.301L699.449 551.88L706.7 560.773L708.072 559.195L700.821 550.301Z" fill="black"/>\r
<path d="M696.221 550.304L688.989 559.218L690.364 560.792L697.596 551.878L696.221 550.304Z" fill="black"/>\r
<path d="M690.393 550.288L689.021 551.866L696.272 560.759L697.644 559.181L690.393 550.288Z" fill="black"/>\r
<path d="M685.793 550.289L678.561 559.204L679.936 560.778L687.169 551.864L685.793 550.289Z" fill="black"/>\r
<path d="M679.942 550.301L678.57 551.879L685.821 560.772L687.193 559.194L679.942 550.301Z" fill="black"/>\r
<path d="M581.402 550.284L574.169 559.198L575.545 560.773L582.777 551.858L581.402 550.284Z" fill="black"/>\r
<path d="M575.549 550.298L574.177 551.876L581.429 560.769L582.801 559.191L575.549 550.298Z" fill="black"/>\r
<path d="M570.952 550.297L563.719 559.211L565.095 560.786L572.327 551.871L570.952 550.297Z" fill="black"/>\r
<path d="M565.121 550.284L563.75 551.862L571.001 560.755L572.373 559.177L565.121 550.284Z" fill="black"/>\r
<path d="M560.524 550.283L553.292 559.197L554.667 560.771L561.899 551.857L560.524 550.283Z" fill="black"/>\r
<path d="M554.671 550.297L553.299 551.876L560.55 560.769L561.922 559.191L554.671 550.297Z" fill="black"/>\r
<path d="M539.646 550.282L532.414 559.196L533.789 560.77L541.022 551.856L539.646 550.282Z" fill="black"/>\r
<path d="M533.792 550.297L532.42 551.875L539.672 560.768L541.043 559.19L533.792 550.297Z" fill="black"/>\r
<path d="M372.621 550.274L365.389 559.188L366.764 560.762L373.996 551.848L372.621 550.274Z" fill="black"/>\r
<path d="M366.764 550.292L365.392 551.87L372.643 560.763L374.015 559.185L366.764 550.292Z" fill="black"/>\r
<path d="M362.171 550.287L354.939 559.201L356.314 560.775L363.546 551.861L362.171 550.287Z" fill="black"/>\r
<path d="M356.337 550.278L354.965 551.856L362.216 560.749L363.588 559.171L356.337 550.278Z" fill="black"/>\r
<path d="M351.744 550.272L344.511 559.187L345.886 560.761L353.119 551.847L351.744 550.272Z" fill="black"/>\r
<path d="M345.886 550.291L344.514 551.869L351.765 560.762L353.137 559.184L345.886 550.291Z" fill="black"/>\r
<path d="M122.084 550.261L114.852 559.175L116.227 560.749L123.46 551.835L122.084 550.261Z" fill="black"/>\r
<path d="M116.222 550.285L114.85 551.863L122.101 560.756L123.473 559.178L116.222 550.285Z" fill="black"/>\r
<path d="M111.634 550.274L104.402 559.188L105.777 560.762L113.009 551.848L111.634 550.274Z" fill="black"/>\r
<path d="M105.794 550.271L104.422 551.849L111.674 560.742L113.046 559.164L105.794 550.271Z" fill="black"/>\r
<path d="M101.206 550.26L93.9736 559.174L95.3487 560.748L102.581 551.834L101.206 550.26Z" fill="black"/>\r
<path d="M95.3431 550.284L93.9712 551.862L101.223 560.755L102.594 559.177L95.3431 550.284Z" fill="black"/>\r
<path d="M90.7561 550.273L83.5234 559.187L84.8985 560.761L92.1312 551.847L90.7561 550.273Z" fill="black"/>\r
<path d="M84.9158 550.27L83.5439 551.849L90.7954 560.742L92.1672 559.164L84.9158 550.27Z" fill="black"/>\r
<path d="M80.3286 550.259L73.0959 559.173L74.471 560.747L81.7037 551.833L80.3286 550.259Z" fill="black"/>\r
<path d="M74.4646 550.283L73.0928 551.861L80.3442 560.755L81.716 559.176L74.4646 550.283Z" fill="black"/>\r
<path d="M1197.29 532.569L1190.05 541.484L1191.43 543.058L1198.66 534.144L1197.29 532.569Z" fill="black"/>\r
<path d="M1191.47 532.542L1190.1 534.12L1197.35 543.013L1198.72 541.435L1191.47 532.542Z" fill="black"/>\r
<path d="M1019.84 532.547L1012.6 541.461L1013.98 543.035L1021.21 534.121L1019.84 532.547Z" fill="black"/>\r
<path d="M1013.99 532.55L1012.62 534.128L1019.87 543.022L1021.24 541.443L1013.99 532.55Z" fill="black"/>\r
<path d="M1009.38 532.56L1002.15 541.474L1003.53 543.048L1010.76 534.134L1009.38 532.56Z" fill="black"/>\r
<path d="M1003.56 532.536L1002.19 534.114L1009.44 543.008L1010.81 541.429L1003.56 532.536Z" fill="black"/>\r
<path d="M998.957 532.546L991.725 541.46L993.1 543.034L1000.33 534.12L998.957 532.546Z" fill="black"/>\r
<path d="M993.113 532.55L991.741 534.128L998.992 543.021L1000.36 541.443L993.113 532.55Z" fill="black"/>\r
<path d="M967.629 532.558L960.396 541.472L961.771 543.046L969.004 534.132L967.629 532.558Z" fill="black"/>\r
<path d="M961.807 532.535L960.435 534.113L967.686 543.007L969.058 541.428L961.807 532.535Z" fill="black"/>\r
<path d="M904.995 532.554L897.762 541.469L899.138 543.043L906.37 534.129L904.995 532.554Z" fill="black"/>\r
<path d="M899.171 532.533L897.799 534.111L905.051 543.005L906.423 541.426L899.171 532.533Z" fill="black"/>\r
<path d="M884.116 532.554L876.884 541.468L878.259 543.042L885.492 534.128L884.116 532.554Z" fill="black"/>\r
<path d="M878.293 532.533L876.921 534.111L884.172 543.004L885.544 541.426L878.293 532.533Z" fill="black"/>\r
<path d="M748.42 532.533L741.188 541.447L742.563 543.021L749.795 534.107L748.42 532.533Z" fill="black"/>\r
<path d="M742.571 532.542L741.199 534.121L748.45 543.014L749.822 541.436L742.571 532.542Z" fill="black"/>\r
<path d="M737.97 532.546L730.737 541.461L732.112 543.035L739.345 534.121L737.97 532.546Z" fill="black"/>\r
<path d="M732.143 532.529L730.771 534.107L738.022 543L739.394 541.422L732.143 532.529Z" fill="black"/>\r
<path d="M727.542 532.532L720.309 541.446L721.684 543.02L728.917 534.106L727.542 532.532Z" fill="black"/>\r
<path d="M721.692 532.541L720.32 534.12L727.572 543.013L728.944 541.435L721.692 532.541Z" fill="black"/>\r
<path d="M717.092 532.545L709.859 541.46L711.234 543.034L718.467 534.119L717.092 532.545Z" fill="black"/>\r
<path d="M711.264 532.528L709.892 534.106L717.144 543L718.516 541.421L711.264 532.528Z" fill="black"/>\r
<path d="M706.664 532.531L699.431 541.445L700.806 543.019L708.039 534.105L706.664 532.531Z" fill="black"/>\r
<path d="M700.813 532.541L699.442 534.119L706.693 543.012L708.065 541.434L700.813 532.541Z" fill="black"/>\r
<path d="M591.823 532.539L584.59 541.453L585.965 543.027L593.198 534.113L591.823 532.539Z" fill="black"/>\r
<path d="M585.993 532.524L584.621 534.102L591.872 542.996L593.244 541.418L585.993 532.524Z" fill="black"/>\r
<path d="M581.395 532.525L574.162 541.439L575.537 543.013L582.77 534.099L581.395 532.525Z" fill="black"/>\r
<path d="M575.542 532.537L574.17 534.116L581.422 543.009L582.793 541.431L575.542 532.537Z" fill="black"/>\r
<path d="M570.945 532.538L563.712 541.452L565.087 543.026L572.32 534.112L570.945 532.538Z" fill="black"/>\r
<path d="M565.114 532.524L563.742 534.102L570.994 542.995L572.366 541.417L565.114 532.524Z" fill="black"/>\r
<path d="M560.517 532.523L553.285 541.438L554.66 543.012L561.892 534.097L560.517 532.523Z" fill="black"/>\r
<path d="M554.664 532.537L553.292 534.115L560.543 543.008L561.915 541.43L554.664 532.537Z" fill="black"/>\r
<path d="M550.067 532.537L542.835 541.451L544.21 543.025L551.442 534.111L550.067 532.537Z" fill="black"/>\r
<path d="M544.237 532.523L542.865 534.101L550.116 542.995L551.488 541.416L544.237 532.523Z" fill="black"/>\r
<path d="M383.042 532.528L375.809 541.443L377.184 543.017L384.417 534.102L383.042 532.528Z" fill="black"/>\r
<path d="M377.208 532.518L375.836 534.097L383.088 542.99L384.459 541.412L377.208 532.518Z" fill="black"/>\r
<path d="M372.614 532.514L365.382 541.428L366.757 543.002L373.989 534.088L372.614 532.514Z" fill="black"/>\r
<path d="M366.757 532.531L365.385 534.11L372.636 543.003L374.008 541.425L366.757 532.531Z" fill="black"/>\r
<path d="M362.164 532.527L354.932 541.441L356.307 543.016L363.539 534.101L362.164 532.527Z" fill="black"/>\r
<path d="M356.33 532.518L354.958 534.096L362.209 542.989L363.581 541.411L356.33 532.518Z" fill="black"/>\r
<path d="M351.736 532.513L344.504 541.427L345.879 543.001L353.111 534.087L351.736 532.513Z" fill="black"/>\r
<path d="M345.878 532.531L344.506 534.109L351.758 543.002L353.129 541.424L345.878 532.531Z" fill="black"/>\r
<path d="M153.383 532.517L146.151 541.431L147.526 543.005L154.758 534.091L153.383 532.517Z" fill="black"/>\r
<path d="M147.544 532.512L146.172 534.09L153.424 542.983L154.795 541.405L147.544 532.512Z" fill="black"/>\r
<path d="M142.956 532.502L135.723 541.416L137.098 542.991L144.331 534.076L142.956 532.502Z" fill="black"/>\r
<path d="M137.093 532.525L135.721 534.103L142.973 542.996L144.345 541.418L137.093 532.525Z" fill="black"/>\r
<path d="M132.505 532.516L125.272 541.43L126.647 543.004L133.88 534.09L132.505 532.516Z" fill="black"/>\r
<path d="M126.665 532.511L125.293 534.089L132.545 542.982L133.917 541.404L126.665 532.511Z" fill="black"/>\r
<path d="M111.627 532.514L104.394 541.429L105.769 543.003L113.002 534.089L111.627 532.514Z" fill="black"/>\r
<path d="M105.787 532.51L104.415 534.089L111.666 542.982L113.038 541.404L105.787 532.51Z" fill="black"/>\r
<path d="M101.199 532.5L93.9666 541.415L95.3416 542.989L102.574 534.074L101.199 532.5Z" fill="black"/>\r
<path d="M95.3357 532.523L93.9639 534.102L101.215 542.995L102.587 541.417L95.3357 532.523Z" fill="black"/>\r
<path d="M90.7488 532.513L83.5161 541.428L84.8912 543.002L92.1238 534.087L90.7488 532.513Z" fill="black"/>\r
<path d="M84.9082 532.51L83.5364 534.088L90.7878 542.981L92.1596 541.403L84.9082 532.51Z" fill="black"/>\r
<path d="M1218.16 514.811L1210.93 523.725L1212.3 525.299L1219.53 516.385L1218.16 514.811Z" fill="black"/>\r
<path d="M1212.36 514.81L1210.99 516.388L1218.24 525.281L1219.62 523.703L1212.36 514.81Z" fill="black"/>\r
<path d="M1207.73 514.797L1200.5 523.711L1201.87 525.285L1209.11 516.371L1207.73 514.797Z" fill="black"/>\r
<path d="M1201.91 514.823L1200.54 516.401L1207.79 525.294L1209.17 523.716L1201.91 514.823Z" fill="black"/>\r
<path d="M1030.26 514.801L1023.02 523.716L1024.4 525.29L1031.63 516.376L1030.26 514.801Z" fill="black"/>\r
<path d="M1024.46 514.804L1023.09 516.383L1030.34 525.276L1031.71 523.698L1024.46 514.804Z" fill="black"/>\r
<path d="M1019.83 514.787L1012.6 523.701L1013.97 525.275L1021.2 516.361L1019.83 514.787Z" fill="black"/>\r
<path d="M1014.01 514.817L1012.64 516.396L1019.89 525.289L1021.26 523.711L1014.01 514.817Z" fill="black"/>\r
<path d="M1009.38 514.8L1002.15 523.715L1003.52 525.289L1010.75 516.375L1009.38 514.8Z" fill="black"/>\r
<path d="M1003.58 514.804L1002.21 516.382L1009.46 525.275L1010.83 523.697L1003.58 514.804Z" fill="black"/>\r
<path d="M998.95 514.786L991.718 523.701L993.093 525.275L1000.33 516.36L998.95 514.786Z" fill="black"/>\r
<path d="M993.128 514.817L991.757 516.395L999.008 525.288L1000.38 523.71L993.128 514.817Z" fill="black"/>\r
<path d="M988.5 514.799L981.267 523.713L982.642 525.288L989.875 516.373L988.5 514.799Z" fill="black"/>\r
<path d="M982.7 514.803L981.329 516.381L988.58 525.274L989.952 523.696L982.7 514.803Z" fill="black"/>\r
<path d="M978.072 514.785L970.839 523.699L972.214 525.273L979.447 516.359L978.072 514.785Z" fill="black"/>\r
<path d="M972.25 514.816L970.878 516.395L978.129 525.288L979.501 523.71L972.25 514.816Z" fill="black"/>\r
<path d="M915.438 514.782L908.205 523.696L909.58 525.27L916.813 516.356L915.438 514.782Z" fill="black"/>\r
<path d="M909.614 514.815L908.242 516.393L915.494 525.286L916.865 523.708L909.614 514.815Z" fill="black"/>\r
<path d="M904.988 514.795L897.755 523.709L899.13 525.284L906.363 516.369L904.988 514.795Z" fill="black"/>\r
<path d="M899.186 514.801L897.814 516.379L905.066 525.272L906.438 523.694L899.186 514.801Z" fill="black"/>\r
<path d="M894.56 514.781L887.327 523.695L888.702 525.269L895.935 516.355L894.56 514.781Z" fill="black"/>\r
<path d="M888.736 514.814L887.364 516.392L894.615 525.285L895.987 523.707L888.736 514.814Z" fill="black"/>\r
<path d="M758.841 514.788L751.608 523.702L752.983 525.276L760.216 516.362L758.841 514.788Z" fill="black"/>\r
<path d="M753.037 514.796L751.665 516.375L758.917 525.268L760.289 523.69L753.037 514.796Z" fill="black"/>\r
<path d="M748.413 514.773L741.181 523.687L742.556 525.262L749.788 516.347L748.413 514.773Z" fill="black"/>\r
<path d="M742.586 514.81L741.214 516.388L748.465 525.281L749.837 523.703L742.586 514.81Z" fill="black"/>\r
<path d="M737.963 514.786L730.731 523.701L732.106 525.275L739.338 516.361L737.963 514.786Z" fill="black"/>\r
<path d="M732.159 514.796L730.787 516.374L738.038 525.267L739.41 523.689L732.159 514.796Z" fill="black"/>\r
<path d="M727.536 514.772L720.303 523.687L721.678 525.261L728.911 516.346L727.536 514.772Z" fill="black"/>\r
<path d="M721.707 514.809L720.335 516.387L727.587 525.28L728.958 523.702L721.707 514.809Z" fill="black"/>\r
<path d="M717.085 514.785L709.852 523.7L711.227 525.274L718.46 516.36L717.085 514.785Z" fill="black"/>\r
<path d="M711.28 514.795L709.908 516.374L717.16 525.267L718.531 523.689L711.28 514.795Z" fill="black"/>\r
<path d="M602.267 514.766L595.034 523.68L596.409 525.254L603.642 516.34L602.267 514.766Z" fill="black"/>\r
<path d="M596.437 514.806L595.065 516.384L602.316 525.277L603.688 523.699L596.437 514.806Z" fill="black"/>\r
<path d="M591.817 514.779L584.584 523.693L585.959 525.268L593.192 516.353L591.817 514.779Z" fill="black"/>\r
<path d="M586.009 514.792L584.637 516.37L591.888 525.263L593.26 523.685L586.009 514.792Z" fill="black"/>\r
<path d="M581.388 514.765L574.155 523.679L575.53 525.253L582.763 516.339L581.388 514.765Z" fill="black"/>\r
<path d="M575.558 514.805L574.186 516.383L581.437 525.276L582.809 523.698L575.558 514.805Z" fill="black"/>\r
<path d="M570.938 514.778L563.705 523.692L565.08 525.266L572.313 516.352L570.938 514.778Z" fill="black"/>\r
<path d="M565.13 514.791L563.758 516.369L571.01 525.262L572.382 523.684L565.13 514.791Z" fill="black"/>\r
<path d="M383.036 514.768L375.803 523.683L377.178 525.257L384.411 516.342L383.036 514.768Z" fill="black"/>\r
<path d="M377.223 514.785L375.851 516.364L383.103 525.257L384.475 523.679L377.223 514.785Z" fill="black"/>\r
<path d="M372.607 514.754L365.375 523.669L366.75 525.243L373.982 516.328L372.607 514.754Z" fill="black"/>\r
<path d="M366.772 514.799L365.401 516.377L372.652 525.27L374.024 523.692L366.772 514.799Z" fill="black"/>\r
<path d="M362.157 514.768L354.925 523.682L356.3 525.256L363.532 516.342L362.157 514.768Z" fill="black"/>\r
<path d="M356.344 514.785L354.973 516.363L362.224 525.257L363.596 523.678L356.344 514.785Z" fill="black"/>\r
<path d="M351.729 514.753L344.497 523.667L345.872 525.242L353.104 516.327L351.729 514.753Z" fill="black"/>\r
<path d="M345.894 514.798L344.522 516.376L351.773 525.27L353.145 523.692L345.894 514.798Z" fill="black"/>\r
<path d="M163.827 514.743L156.594 523.658L157.969 525.232L165.202 516.318L163.827 514.743Z" fill="black"/>\r
<path d="M157.987 514.793L156.615 516.371L163.866 525.264L165.238 523.686L157.987 514.793Z" fill="black"/>\r
<path d="M153.376 514.757L146.144 523.671L147.519 525.245L154.751 516.331L153.376 514.757Z" fill="black"/>\r
<path d="M147.56 514.779L146.188 516.357L153.439 525.251L154.811 523.672L147.56 514.779Z" fill="black"/>\r
<path d="M122.07 514.741L114.838 523.656L116.213 525.23L123.445 516.316L122.07 514.741Z" fill="black"/>\r
<path d="M116.23 514.791L114.858 516.37L122.11 525.263L123.481 523.685L116.23 514.791Z" fill="black"/>\r
<path d="M111.62 514.755L104.387 523.669L105.762 525.243L112.995 516.329L111.62 514.755Z" fill="black"/>\r
<path d="M105.802 514.778L104.43 516.356L111.682 525.249L113.054 523.671L105.802 514.778Z" fill="black"/>\r
<path d="M101.192 514.74L93.9595 523.655L95.3345 525.229L102.567 516.314L101.192 514.74Z" fill="black"/>\r
<path d="M95.3514 514.791L93.9795 516.369L101.231 525.262L102.603 523.684L95.3514 514.791Z" fill="black"/>\r
<path d="M1228.63 497.065L1221.39 505.979L1222.77 507.553L1230 498.639L1228.63 497.065Z" fill="black"/>\r
<path d="M1222.78 497.063L1221.41 498.641L1228.66 507.535L1230.04 505.956L1222.78 497.063Z" fill="black"/>\r
<path d="M1051.15 497.069L1043.92 505.984L1045.29 507.558L1052.53 498.644L1051.15 497.069Z" fill="black"/>\r
<path d="M1045.33 497.045L1043.96 498.623L1051.21 507.516L1052.58 505.938L1045.33 497.045Z" fill="black"/>\r
<path d="M1040.72 497.055L1033.49 505.97L1034.87 507.544L1042.1 498.629L1040.72 497.055Z" fill="black"/>\r
<path d="M1034.88 497.058L1033.51 498.636L1040.76 507.529L1042.13 505.951L1034.88 497.058Z" fill="black"/>\r
<path d="M1030.27 497.069L1023.04 505.983L1024.42 507.557L1031.65 498.643L1030.27 497.069Z" fill="black"/>\r
<path d="M1024.45 497.044L1023.08 498.622L1030.33 507.515L1031.7 505.937L1024.45 497.044Z" fill="black"/>\r
<path d="M1019.84 497.054L1012.61 505.968L1013.99 507.543L1021.22 498.628L1019.84 497.054Z" fill="black"/>\r
<path d="M1014 497.057L1012.63 498.635L1019.88 507.529L1021.25 505.95L1014 497.057Z" fill="black"/>\r
<path d="M1009.39 497.068L1002.16 505.982L1003.54 507.556L1010.77 498.642L1009.39 497.068Z" fill="black"/>\r
<path d="M1003.57 497.043L1002.2 498.622L1009.45 507.515L1010.82 505.937L1003.57 497.043Z" fill="black"/>\r
<path d="M998.966 497.053L991.734 505.968L993.109 507.542L1000.34 498.628L998.966 497.053Z" fill="black"/>\r
<path d="M993.121 497.057L991.749 498.635L999.001 507.528L1000.37 505.95L993.121 497.057Z" fill="black"/>\r
<path d="M915.454 497.049L908.221 505.963L909.596 507.538L916.829 498.623L915.454 497.049Z" fill="black"/>\r
<path d="M909.607 497.054L908.235 498.632L915.487 507.526L916.858 505.947L909.607 497.054Z" fill="black"/>\r
<path d="M769.308 497.041L762.075 505.956L763.45 507.53L770.683 498.616L769.308 497.041Z" fill="black"/>\r
<path d="M763.457 497.05L762.085 498.628L769.337 507.521L770.708 505.943L763.457 497.05Z" fill="black"/>\r
<path d="M758.857 497.055L751.624 505.969L752.999 507.543L760.232 498.629L758.857 497.055Z" fill="black"/>\r
<path d="M753.03 497.036L751.658 498.615L758.91 507.508L760.281 505.93L753.03 497.036Z" fill="black"/>\r
<path d="M748.429 497.04L741.197 505.955L742.572 507.529L749.804 498.614L748.429 497.04Z" fill="black"/>\r
<path d="M742.579 497.049L741.207 498.627L748.458 507.521L749.83 505.942L742.579 497.049Z" fill="black"/>\r
<path d="M737.979 497.054L730.746 505.968L732.121 507.542L739.354 498.628L737.979 497.054Z" fill="black"/>\r
<path d="M732.151 497.036L730.779 498.614L738.03 507.507L739.402 505.929L732.151 497.036Z" fill="black"/>\r
<path d="M727.551 497.039L720.319 505.953L721.694 507.528L728.926 498.613L727.551 497.039Z" fill="black"/>\r
<path d="M721.7 497.049L720.328 498.627L727.58 507.52L728.951 505.942L721.7 497.049Z" fill="black"/>\r
<path d="M612.71 497.047L605.478 505.962L606.853 507.536L614.085 498.622L612.71 497.047Z" fill="black"/>\r
<path d="M606.88 497.032L605.508 498.61L612.76 507.504L614.132 505.925L606.88 497.032Z" fill="black"/>\r
<path d="M602.283 497.033L595.051 505.947L596.426 507.521L603.658 498.607L602.283 497.033Z" fill="black"/>\r
<path d="M596.429 497.045L595.058 498.623L602.309 507.517L603.681 505.938L596.429 497.045Z" fill="black"/>\r
<path d="M591.832 497.046L584.6 505.961L585.975 507.535L593.208 498.621L591.832 497.046Z" fill="black"/>\r
<path d="M586.001 497.031L584.63 498.609L591.881 507.503L593.253 505.924L586.001 497.031Z" fill="black"/>\r
<path d="M581.405 497.032L574.172 505.946L575.547 507.52L582.78 498.606L581.405 497.032Z" fill="black"/>\r
<path d="M575.551 497.045L574.179 498.623L581.43 507.516L582.802 505.938L575.551 497.045Z" fill="black"/>\r
<path d="M414.38 497.023L407.147 505.938L408.522 507.512L415.755 498.597L414.38 497.023Z" fill="black"/>\r
<path d="M408.522 497.04L407.151 498.618L414.402 507.511L415.774 505.933L408.522 497.04Z" fill="black"/>\r
<path d="M403.929 497.037L396.697 505.951L398.072 507.525L405.304 498.611L403.929 497.037Z" fill="black"/>\r
<path d="M398.094 497.026L396.723 498.604L403.974 507.498L405.346 505.919L398.094 497.026Z" fill="black"/>\r
<path d="M393.501 497.022L386.269 505.936L387.644 507.511L394.877 498.596L393.501 497.022Z" fill="black"/>\r
<path d="M387.644 497.039L386.272 498.617L393.523 507.511L394.895 505.932L387.644 497.039Z" fill="black"/>\r
<path d="M383.051 497.036L375.819 505.95L377.194 507.524L384.427 498.61L383.051 497.036Z" fill="black"/>\r
<path d="M377.216 497.026L375.844 498.604L383.095 507.497L384.467 505.919L377.216 497.026Z" fill="black"/>\r
<path d="M372.624 497.021L365.391 505.936L366.766 507.51L373.999 498.595L372.624 497.021Z" fill="black"/>\r
<path d="M366.765 497.038L365.393 498.617L372.645 507.51L374.017 505.932L366.765 497.038Z" fill="black"/>\r
<path d="M362.173 497.035L354.94 505.949L356.315 507.523L363.548 498.609L362.173 497.035Z" fill="black"/>\r
<path d="M356.337 497.025L354.966 498.603L362.217 507.496L363.589 505.918L356.337 497.025Z" fill="black"/>\r
<path d="M184.721 497.012L177.488 505.926L178.863 507.5L186.096 498.586L184.721 497.012Z" fill="black"/>\r
<path d="M178.858 497.033L177.486 498.611L184.738 507.504L186.11 505.926L178.858 497.033Z" fill="black"/>\r
<path d="M174.27 497.025L167.038 505.94L168.413 507.514L175.645 498.599L174.27 497.025Z" fill="black"/>\r
<path d="M168.431 497.019L167.059 498.598L174.31 507.491L175.682 505.913L168.431 497.019Z" fill="black"/>\r
<path d="M132.514 497.023L125.282 505.937L126.657 507.511L133.889 498.597L132.514 497.023Z" fill="black"/>\r
<path d="M126.674 497.018L125.302 498.596L132.553 507.49L133.925 505.911L126.674 497.018Z" fill="black"/>\r
<path d="M122.086 497.009L114.854 505.923L116.229 507.497L123.461 498.583L122.086 497.009Z" fill="black"/>\r
<path d="M116.223 497.031L114.851 498.609L122.102 507.503L123.474 505.925L116.223 497.031Z" fill="black"/>\r
<path d="M111.636 497.022L104.404 505.936L105.779 507.51L113.011 498.596L111.636 497.022Z" fill="black"/>\r
<path d="M105.795 497.018L104.424 498.596L111.675 507.489L113.047 505.911L105.795 497.018Z" fill="black"/>\r
<path d="M1239.05 479.319L1231.81 488.234L1233.19 489.808L1240.42 480.894L1239.05 479.319Z" fill="black"/>\r
<path d="M1233.23 479.29L1231.86 480.868L1239.11 489.761L1240.48 488.183L1233.23 479.29Z" fill="black"/>\r
<path d="M1092.9 479.312L1085.67 488.226L1087.04 489.8L1094.27 480.886L1092.9 479.312Z" fill="black"/>\r
<path d="M1087.08 479.285L1085.71 480.864L1092.96 489.757L1094.33 488.179L1087.08 479.285Z" fill="black"/>\r
<path d="M1082.47 479.298L1075.24 488.212L1076.61 489.786L1083.85 480.872L1082.47 479.298Z" fill="black"/>\r
<path d="M1076.63 479.299L1075.26 480.877L1082.51 489.77L1083.88 488.192L1076.63 479.299Z" fill="black"/>\r
<path d="M1051.14 479.31L1043.91 488.224L1045.29 489.798L1052.52 480.884L1051.14 479.31Z" fill="black"/>\r
<path d="M1045.32 479.285L1043.95 480.863L1051.2 489.756L1052.57 488.178L1045.32 479.285Z" fill="black"/>\r
<path d="M1040.72 479.295L1033.48 488.21L1034.86 489.784L1042.09 480.869L1040.72 479.295Z" fill="black"/>\r
<path d="M1034.87 479.298L1033.5 480.876L1040.75 489.769L1042.12 488.191L1034.87 479.298Z" fill="black"/>\r
<path d="M1030.27 479.309L1023.03 488.223L1024.41 489.797L1031.64 480.883L1030.27 479.309Z" fill="black"/>\r
<path d="M1024.44 479.284L1023.07 480.862L1030.32 489.755L1031.69 488.177L1024.44 479.284Z" fill="black"/>\r
<path d="M1019.84 479.294L1012.6 488.209L1013.98 489.783L1021.21 480.869L1019.84 479.294Z" fill="black"/>\r
<path d="M1013.99 479.297L1012.62 480.875L1019.87 489.769L1021.24 488.19L1013.99 479.297Z" fill="black"/>\r
<path d="M1009.39 479.308L1002.15 488.222L1003.53 489.796L1010.76 480.882L1009.39 479.308Z" fill="black"/>\r
<path d="M1003.56 479.283L1002.19 480.861L1009.44 489.755L1010.82 488.176L1003.56 479.283Z" fill="black"/>\r
<path d="M936.325 479.29L929.092 488.205L930.467 489.779L937.7 480.864L936.325 479.29Z" fill="black"/>\r
<path d="M930.479 479.294L929.107 480.872L936.358 489.766L937.73 488.187L930.479 479.294Z" fill="black"/>\r
<path d="M925.874 479.304L918.642 488.218L920.017 489.792L927.249 480.878L925.874 479.304Z" fill="black"/>\r
<path d="M920.051 479.281L918.679 480.859L925.93 489.752L927.302 488.174L920.051 479.281Z" fill="black"/>\r
<path d="M790.178 479.283L782.946 488.197L784.321 489.771L791.553 480.857L790.178 479.283Z" fill="black"/>\r
<path d="M784.329 479.29L782.957 480.868L790.208 489.762L791.58 488.183L784.329 479.29Z" fill="black"/>\r
<path d="M779.728 479.296L772.496 488.21L773.871 489.784L781.103 480.87L779.728 479.296Z" fill="black"/>\r
<path d="M773.901 479.277L772.529 480.855L779.78 489.748L781.152 488.17L773.901 479.277Z" fill="black"/>\r
<path d="M769.301 479.282L762.068 488.196L763.443 489.77L770.676 480.856L769.301 479.282Z" fill="black"/>\r
<path d="M763.45 479.29L762.078 480.868L769.33 489.761L770.701 488.183L763.45 479.29Z" fill="black"/>\r
<path d="M758.85 479.295L751.617 488.21L752.992 489.784L760.225 480.869L758.85 479.295Z" fill="black"/>\r
<path d="M753.022 479.276L751.65 480.854L758.902 489.748L760.273 488.169L753.022 479.276Z" fill="black"/>\r
<path d="M748.422 479.281L741.189 488.195L742.564 489.769L749.797 480.855L748.422 479.281Z" fill="black"/>\r
<path d="M742.571 479.289L741.199 480.867L748.451 489.76L749.823 488.182L742.571 479.289Z" fill="black"/>\r
<path d="M623.154 479.274L615.921 488.188L617.296 489.763L624.529 480.848L623.154 479.274Z" fill="black"/>\r
<path d="M617.3 479.285L615.928 480.863L623.18 489.757L624.551 488.179L617.3 479.285Z" fill="black"/>\r
<path d="M612.703 479.288L605.47 488.202L606.846 489.776L614.078 480.862L612.703 479.288Z" fill="black"/>\r
<path d="M606.873 479.272L605.501 480.85L612.753 489.743L614.124 488.165L606.873 479.272Z" fill="black"/>\r
<path d="M602.275 479.273L595.042 488.188L596.418 489.762L603.65 480.847L602.275 479.273Z" fill="black"/>\r
<path d="M596.421 479.285L595.05 480.863L602.301 489.756L603.673 488.178L596.421 479.285Z" fill="black"/>\r
<path d="M591.825 479.286L584.593 488.201L585.968 489.775L593.2 480.861L591.825 479.286Z" fill="black"/>\r
<path d="M585.994 479.271L584.623 480.849L591.874 489.743L593.246 488.164L585.994 479.271Z" fill="black"/>\r
<path d="M456.129 479.266L448.896 488.18L450.272 489.754L457.504 480.84L456.129 479.266Z" fill="black"/>\r
<path d="M450.272 479.281L448.901 480.859L456.152 489.752L457.524 488.174L450.272 479.281Z" fill="black"/>\r
<path d="M445.678 479.279L438.446 488.193L439.821 489.768L447.054 480.853L445.678 479.279Z" fill="black"/>\r
<path d="M439.844 479.267L438.473 480.845L445.724 489.738L447.096 488.16L439.844 479.267Z" fill="black"/>\r
<path d="M435.251 479.265L428.018 488.179L429.393 489.753L436.626 480.839L435.251 479.265Z" fill="black"/>\r
<path d="M429.394 479.28L428.022 480.858L435.273 489.751L436.645 488.173L429.394 479.28Z" fill="black"/>\r
<path d="M403.922 479.277L396.689 488.192L398.065 489.766L405.297 480.851L403.922 479.277Z" fill="black"/>\r
<path d="M398.087 479.266L396.716 480.844L403.967 489.737L405.339 488.159L398.087 479.266Z" fill="black"/>\r
<path d="M393.494 479.263L386.262 488.177L387.637 489.751L394.869 480.837L393.494 479.263Z" fill="black"/>\r
<path d="M387.637 479.279L386.265 480.857L393.516 489.75L394.888 488.172L387.637 479.279Z" fill="black"/>\r
<path d="M383.044 479.276L375.812 488.19L377.187 489.765L384.419 480.85L383.044 479.276Z" fill="black"/>\r
<path d="M377.209 479.265L375.837 480.843L383.088 489.737L384.46 488.158L377.209 479.265Z" fill="black"/>\r
<path d="M372.616 479.262L365.384 488.176L366.759 489.75L373.992 480.836L372.616 479.262Z" fill="black"/>\r
<path d="M366.758 479.278L365.386 480.857L372.638 489.75L374.009 488.172L366.758 479.278Z" fill="black"/>\r
<path d="M362.166 479.275L354.933 488.189L356.308 489.763L363.541 480.849L362.166 479.275Z" fill="black"/>\r
<path d="M356.33 479.265L354.958 480.843L362.21 489.736L363.582 488.158L356.33 479.265Z" fill="black"/>\r
<path d="M216.02 479.268L208.787 488.182L210.162 489.756L217.395 480.842L216.02 479.268Z" fill="black"/>\r
<path d="M210.18 479.26L208.809 480.839L216.06 489.732L217.432 488.154L210.18 479.26Z" fill="black"/>\r
<path d="M205.592 479.253L198.359 488.168L199.734 489.742L206.967 480.827L205.592 479.253Z" fill="black"/>\r
<path d="M199.73 479.273L198.358 480.852L205.609 489.745L206.981 488.167L199.73 479.273Z" fill="black"/>\r
<path d="M195.141 479.266L187.909 488.181L189.284 489.755L196.516 480.841L195.141 479.266Z" fill="black"/>\r
<path d="M189.302 479.26L187.93 480.838L195.182 489.731L196.554 488.153L189.302 479.26Z" fill="black"/>\r
<path d="M153.385 479.264L146.153 488.179L147.528 489.753L154.76 480.839L153.385 479.264Z" fill="black"/>\r
<path d="M147.545 479.258L146.173 480.836L153.425 489.73L154.797 488.152L147.545 479.258Z" fill="black"/>\r
<path d="M142.957 479.25L135.724 488.164L137.099 489.738L144.332 480.824L142.957 479.25Z" fill="black"/>\r
<path d="M137.094 479.271L135.722 480.85L142.974 489.743L144.346 488.165L137.094 479.271Z" fill="black"/>\r
<path d="M132.507 479.263L125.274 488.178L126.649 489.752L133.882 480.838L132.507 479.263Z" fill="black"/>\r
<path d="M126.667 479.258L125.295 480.836L132.546 489.729L133.918 488.151L126.667 479.258Z" fill="black"/>\r
<path d="M122.079 479.249L114.846 488.163L116.221 489.737L123.454 480.823L122.079 479.249Z" fill="black"/>\r
<path d="M116.216 479.271L114.844 480.849L122.095 489.742L123.467 488.164L116.216 479.271Z" fill="black"/>\r
<path d="M111.629 479.262L104.396 488.177L105.771 489.751L113.004 480.836L111.629 479.262Z" fill="black"/>\r
<path d="M105.788 479.257L104.416 480.835L111.667 489.729L113.039 488.15L105.788 479.257Z" fill="black"/>\r
<path d="M1249.49 461.546L1242.26 470.461L1243.63 472.035L1250.86 463.121L1249.49 461.546Z" fill="black"/>\r
<path d="M1243.67 461.571L1242.3 463.149L1249.55 472.042L1250.92 470.464L1243.67 461.571Z" fill="black"/>\r
<path d="M1134.65 461.555L1127.42 470.469L1128.79 472.043L1136.02 463.129L1134.65 461.555Z" fill="black"/>\r
<path d="M1128.85 461.554L1127.48 463.132L1134.73 472.026L1136.1 470.447L1128.85 461.554Z" fill="black"/>\r
<path d="M1124.22 461.54L1116.99 470.455L1118.36 472.029L1125.6 463.115L1124.22 461.54Z" fill="black"/>\r
<path d="M1118.4 461.567L1117.03 463.145L1124.28 472.039L1125.65 470.46L1118.4 461.567Z" fill="black"/>\r
<path d="M1113.77 461.553L1106.54 470.468L1107.91 472.042L1115.15 463.128L1113.77 461.553Z" fill="black"/>\r
<path d="M1107.97 461.554L1106.6 463.132L1113.85 472.025L1115.22 470.447L1107.97 461.554Z" fill="black"/>\r
<path d="M1061.59 461.537L1054.35 470.451L1055.73 472.025L1062.96 463.111L1061.59 461.537Z" fill="black"/>\r
<path d="M1055.76 461.565L1054.39 463.144L1061.64 472.037L1063.02 470.459L1055.76 461.565Z" fill="black"/>\r
<path d="M1051.14 461.55L1043.9 470.465L1045.28 472.039L1052.51 463.124L1051.14 461.55Z" fill="black"/>\r
<path d="M1045.34 461.552L1043.97 463.13L1051.22 472.023L1052.59 470.445L1045.34 461.552Z" fill="black"/>\r
<path d="M1040.71 461.536L1033.48 470.45L1034.85 472.024L1042.08 463.11L1040.71 461.536Z" fill="black"/>\r
<path d="M1034.89 461.565L1033.51 463.143L1040.77 472.036L1042.14 470.458L1034.89 461.565Z" fill="black"/>\r
<path d="M1030.26 461.549L1023.03 470.464L1024.4 472.038L1031.63 463.123L1030.26 461.549Z" fill="black"/>\r
<path d="M1024.46 461.551L1023.09 463.129L1030.34 472.023L1031.71 470.444L1024.46 461.551Z" fill="black"/>\r
<path d="M1019.83 461.535L1012.6 470.449L1013.97 472.023L1021.21 463.109L1019.83 461.535Z" fill="black"/>\r
<path d="M1014.01 461.564L1012.64 463.142L1019.89 472.036L1021.26 470.458L1014.01 461.564Z" fill="black"/>\r
<path d="M946.746 461.545L939.513 470.459L940.888 472.033L948.121 463.119L946.746 461.545Z" fill="black"/>\r
<path d="M940.944 461.549L939.573 463.127L946.824 472.02L948.196 470.442L940.944 461.549Z" fill="black"/>\r
<path d="M936.318 461.53L929.085 470.445L930.46 472.019L937.693 463.104L936.318 461.53Z" fill="black"/>\r
<path d="M930.493 461.562L929.122 463.14L936.373 472.033L937.745 470.455L930.493 461.562Z" fill="black"/>\r
<path d="M800.599 461.538L793.366 470.452L794.741 472.026L801.974 463.112L800.599 461.538Z" fill="black"/>\r
<path d="M794.795 461.544L793.423 463.123L800.675 472.016L802.047 470.438L794.795 461.544Z" fill="black"/>\r
<path d="M790.171 461.523L782.938 470.437L784.314 472.011L791.546 463.097L790.171 461.523Z" fill="black"/>\r
<path d="M784.344 461.557L782.972 463.136L790.224 472.029L791.596 470.451L784.344 461.557Z" fill="black"/>\r
<path d="M779.72 461.537L772.488 470.451L773.863 472.025L781.096 463.111L779.72 461.537Z" fill="black"/>\r
<path d="M773.917 461.544L772.545 463.122L779.796 472.015L781.168 470.437L773.917 461.544Z" fill="black"/>\r
<path d="M769.293 461.522L762.061 470.437L763.436 472.011L770.669 463.096L769.293 461.522Z" fill="black"/>\r
<path d="M763.466 461.557L762.094 463.135L769.345 472.028L770.717 470.45L763.466 461.557Z" fill="black"/>\r
<path d="M758.843 461.535L751.61 470.45L752.985 472.024L760.218 463.109L758.843 461.535Z" fill="black"/>\r
<path d="M753.038 461.543L751.666 463.121L758.917 472.015L760.289 470.437L753.038 461.543Z" fill="black"/>\r
<path d="M633.574 461.529L626.342 470.443L627.717 472.018L634.95 463.103L633.574 461.529Z" fill="black"/>\r
<path d="M627.767 461.54L626.395 463.118L633.646 472.011L635.018 470.433L627.767 461.54Z" fill="black"/>\r
<path d="M623.146 461.515L615.914 470.429L617.289 472.003L624.522 463.089L623.146 461.515Z" fill="black"/>\r
<path d="M617.316 461.552L615.944 463.131L623.195 472.024L624.567 470.446L617.316 461.552Z" fill="black"/>\r
<path d="M612.696 461.528L605.463 470.442L606.838 472.017L614.071 463.102L612.696 461.528Z" fill="black"/>\r
<path d="M606.888 461.539L605.516 463.117L612.768 472.01L614.139 470.432L606.888 461.539Z" fill="black"/>\r
<path d="M602.269 461.514L595.036 470.428L596.411 472.002L603.644 463.088L602.269 461.514Z" fill="black"/>\r
<path d="M596.437 461.552L595.065 463.13L602.317 472.023L603.689 470.445L596.437 461.552Z" fill="black"/>\r
<path d="M487.428 461.522L480.195 470.436L481.57 472.01L488.803 463.096L487.428 461.522Z" fill="black"/>\r
<path d="M481.617 461.535L480.245 463.114L487.496 472.007L488.868 470.429L481.617 461.535Z" fill="black"/>\r
<path d="M477 461.507L469.767 470.422L471.142 471.996L478.375 463.081L477 461.507Z" fill="black"/>\r
<path d="M471.166 461.548L469.794 463.127L477.046 472.02L478.417 470.442L471.166 461.548Z" fill="black"/>\r
<path d="M466.549 461.521L459.316 470.435L460.691 472.009L467.924 463.095L466.549 461.521Z" fill="black"/>\r
<path d="M460.738 461.535L459.366 463.113L466.618 472.006L467.989 470.428L460.738 461.535Z" fill="black"/>\r
<path d="M414.366 461.504L407.133 470.419L408.508 471.993L415.741 463.078L414.366 461.504Z" fill="black"/>\r
<path d="M408.53 461.547L407.158 463.125L414.41 472.018L415.782 470.44L408.53 461.547Z" fill="black"/>\r
<path d="M403.915 461.517L396.682 470.432L398.057 472.006L405.29 463.091L403.915 461.517Z" fill="black"/>\r
<path d="M398.102 461.533L396.73 463.111L403.982 472.004L405.354 470.426L398.102 461.533Z" fill="black"/>\r
<path d="M393.487 461.503L386.255 470.417L387.63 471.992L394.862 463.077L393.487 461.503Z" fill="black"/>\r
<path d="M387.652 461.546L386.28 463.124L393.531 472.017L394.903 470.439L387.652 461.546Z" fill="black"/>\r
<path d="M383.037 461.516L375.805 470.431L377.18 472.005L384.412 463.091L383.037 461.516Z" fill="black"/>\r
<path d="M377.224 461.532L375.852 463.111L383.103 472.004L384.475 470.426L377.224 461.532Z" fill="black"/>\r
<path d="M372.609 461.502L365.377 470.416L366.752 471.99L373.984 463.076L372.609 461.502Z" fill="black"/>\r
<path d="M366.773 461.545L365.401 463.124L372.653 472.017L374.025 470.439L366.773 461.545Z" fill="black"/>\r
<path d="M236.891 461.509L229.658 470.423L231.033 471.997L238.266 463.083L236.891 461.509Z" fill="black"/>\r
<path d="M231.074 461.528L229.702 463.106L236.954 471.999L238.326 470.421L231.074 461.528Z" fill="black"/>\r
<path d="M226.463 461.495L219.23 470.409L220.605 471.983L227.838 463.069L226.463 461.495Z" fill="black"/>\r
<path d="M220.624 461.541L219.252 463.119L226.503 472.013L227.875 470.434L220.624 461.541Z" fill="black"/>\r
<path d="M216.012 461.508L208.78 470.422L210.155 471.996L217.388 463.082L216.012 461.508Z" fill="black"/>\r
<path d="M210.196 461.527L208.824 463.106L216.076 471.999L217.447 470.421L210.196 461.527Z" fill="black"/>\r
<path d="M163.828 461.491L156.595 470.406L157.971 471.98L165.203 463.066L163.828 461.491Z" fill="black"/>\r
<path d="M157.988 461.54L156.616 463.118L163.867 472.011L165.239 470.433L157.988 461.54Z" fill="black"/>\r
<path d="M153.378 461.505L146.146 470.419L147.521 471.993L154.753 463.079L153.378 461.505Z" fill="black"/>\r
<path d="M147.561 461.526L146.189 463.104L153.44 471.997L154.812 470.419L147.561 461.526Z" fill="black"/>\r
<path d="M142.95 461.49L135.717 470.405L137.092 471.979L144.325 463.064L142.95 461.49Z" fill="black"/>\r
<path d="M137.11 461.539L135.738 463.117L142.989 472.01L144.361 470.432L137.11 461.539Z" fill="black"/>\r
<path d="M132.5 461.504L125.267 470.418L126.642 471.992L133.875 463.078L132.5 461.504Z" fill="black"/>\r
<path d="M126.682 461.525L125.31 463.103L132.561 471.996L133.933 470.418L126.682 461.525Z" fill="black"/>\r
<path d="M122.072 461.489L114.839 470.404L116.214 471.978L123.447 463.063L122.072 461.489Z" fill="black"/>\r
<path d="M116.231 461.538L114.859 463.116L122.111 472.01L123.483 470.431L116.231 461.538Z" fill="black"/>\r
<path d="M1155.54 443.822L1148.31 452.737L1149.69 454.311L1156.92 445.397L1155.54 443.822Z" fill="black"/>\r
<path d="M1149.72 443.794L1148.35 445.372L1155.6 454.266L1156.97 452.688L1149.72 443.794Z" fill="black"/>\r
<path d="M1145.11 443.808L1137.88 452.723L1139.26 454.297L1146.49 445.382L1145.11 443.808Z" fill="black"/>\r
<path d="M1139.27 443.807L1137.9 445.386L1145.15 454.279L1146.52 452.701L1139.27 443.807Z" fill="black"/>\r
<path d="M1072.03 443.819L1064.8 452.733L1066.17 454.307L1073.41 445.393L1072.03 443.819Z" fill="black"/>\r
<path d="M1066.21 443.792L1064.84 445.37L1072.09 454.264L1073.46 452.685L1066.21 443.792Z" fill="black"/>\r
<path d="M1061.6 443.804L1054.37 452.718L1055.74 454.293L1062.98 445.378L1061.6 443.804Z" fill="black"/>\r
<path d="M1055.76 443.805L1054.39 445.383L1061.64 454.276L1063.01 452.698L1055.76 443.805Z" fill="black"/>\r
<path d="M1051.15 443.818L1043.92 452.732L1045.29 454.306L1052.53 445.392L1051.15 443.818Z" fill="black"/>\r
<path d="M1045.33 443.791L1043.96 445.37L1051.21 454.263L1052.58 452.685L1045.33 443.791Z" fill="black"/>\r
<path d="M1040.72 443.803L1033.49 452.717L1034.87 454.291L1042.1 445.377L1040.72 443.803Z" fill="black"/>\r
<path d="M1034.88 443.804L1033.51 445.383L1040.76 454.276L1042.13 452.698L1034.88 443.804Z" fill="black"/>\r
<path d="M1030.27 443.816L1023.04 452.731L1024.42 454.305L1031.65 445.391L1030.27 443.816Z" fill="black"/>\r
<path d="M1024.45 443.791L1023.08 445.369L1030.33 454.262L1031.7 452.684L1024.45 443.791Z" fill="black"/>\r
<path d="M967.64 443.813L960.407 452.728L961.783 454.302L969.015 445.387L967.64 443.813Z" fill="black"/>\r
<path d="M961.816 443.789L960.444 445.367L967.695 454.261L969.067 452.682L961.816 443.789Z" fill="black"/>\r
<path d="M957.212 443.799L949.98 452.713L951.355 454.287L958.587 445.373L957.212 443.799Z" fill="black"/>\r
<path d="M951.365 443.802L949.993 445.38L957.244 454.274L958.616 452.695L951.365 443.802Z" fill="black"/>\r
<path d="M946.761 443.812L939.529 452.726L940.904 454.301L948.137 445.386L946.761 443.812Z" fill="black"/>\r
<path d="M940.937 443.788L939.565 445.367L946.817 454.26L948.188 452.682L940.937 443.788Z" fill="black"/>\r
<path d="M811.065 443.791L803.833 452.706L805.208 454.28L812.44 445.366L811.065 443.791Z" fill="black"/>\r
<path d="M805.215 443.798L803.843 445.376L811.094 454.269L812.466 452.691L805.215 443.798Z" fill="black"/>\r
<path d="M800.615 443.805L793.382 452.719L794.757 454.293L801.99 445.379L800.615 443.805Z" fill="black"/>\r
<path d="M794.788 443.784L793.416 445.362L800.668 454.256L802.039 452.678L794.788 443.784Z" fill="black"/>\r
<path d="M790.187 443.79L782.954 452.705L784.329 454.279L791.562 445.364L790.187 443.79Z" fill="black"/>\r
<path d="M784.336 443.797L782.965 445.376L790.216 454.269L791.588 452.691L784.336 443.797Z" fill="black"/>\r
<path d="M779.737 443.804L772.504 452.718L773.879 454.292L781.112 445.378L779.737 443.804Z" fill="black"/>\r
<path d="M773.909 443.783L772.538 445.362L779.789 454.255L781.161 452.677L773.909 443.783Z" fill="black"/>\r
<path d="M769.309 443.789L762.076 452.703L763.451 454.278L770.684 445.363L769.309 443.789Z" fill="black"/>\r
<path d="M763.458 443.796L762.087 445.375L769.338 454.268L770.71 452.69L763.458 443.796Z" fill="black"/>\r
<path d="M644.04 443.783L636.808 452.697L638.183 454.271L645.415 445.357L644.04 443.783Z" fill="black"/>\r
<path d="M638.187 443.793L636.815 445.371L644.067 454.265L645.439 452.686L638.187 443.793Z" fill="black"/>\r
<path d="M633.59 443.796L626.358 452.711L627.733 454.285L634.965 445.371L633.59 443.796Z" fill="black"/>\r
<path d="M627.76 443.779L626.388 445.358L633.639 454.251L635.011 452.673L627.76 443.779Z" fill="black"/>\r
<path d="M623.162 443.782L615.93 452.696L617.305 454.27L624.537 445.356L623.162 443.782Z" fill="black"/>\r
<path d="M617.308 443.792L615.936 445.371L623.187 454.264L624.559 452.686L617.308 443.792Z" fill="black"/>\r
<path d="M518.772 443.776L511.539 452.691L512.914 454.265L520.147 445.35L518.772 443.776Z" fill="black"/>\r
<path d="M512.916 443.789L511.544 445.368L518.796 454.261L520.167 452.683L512.916 443.789Z" fill="black"/>\r
<path d="M508.321 443.79L501.089 452.704L502.464 454.278L509.696 445.364L508.321 443.79Z" fill="black"/>\r
<path d="M502.488 443.776L501.116 445.354L508.368 454.247L509.739 452.669L502.488 443.776Z" fill="black"/>\r
<path d="M497.894 443.776L490.662 452.69L492.037 454.264L499.269 445.35L497.894 443.776Z" fill="black"/>\r
<path d="M492.037 443.789L490.666 445.367L497.917 454.26L499.289 452.682L492.037 443.789Z" fill="black"/>\r
<path d="M435.259 443.772L428.027 452.687L429.402 454.261L436.634 445.346L435.259 443.772Z" fill="black"/>\r
<path d="M429.402 443.787L428.03 445.365L435.281 454.258L436.653 452.68L429.402 443.787Z" fill="black"/>\r
<path d="M424.809 443.786L417.577 452.7L418.952 454.274L426.184 445.36L424.809 443.786Z" fill="black"/>\r
<path d="M418.974 443.773L417.602 445.352L424.853 454.245L426.225 452.667L418.974 443.773Z" fill="black"/>\r
<path d="M414.382 443.771L407.149 452.686L408.524 454.26L415.757 445.346L414.382 443.771Z" fill="black"/>\r
<path d="M408.523 443.786L407.151 445.365L414.403 454.258L415.775 452.68L408.523 443.786Z" fill="black"/>\r
<path d="M403.932 443.784L396.699 452.699L398.074 454.273L405.307 445.359L403.932 443.784Z" fill="black"/>\r
<path d="M398.095 443.773L396.723 445.351L403.975 454.244L405.347 452.666L398.095 443.773Z" fill="black"/>\r
<path d="M393.504 443.77L386.271 452.685L387.646 454.259L394.879 445.344L393.504 443.77Z" fill="black"/>\r
<path d="M387.645 443.786L386.273 445.364L393.524 454.257L394.896 452.679L387.645 443.786Z" fill="black"/>\r
<path d="M257.784 443.777L250.552 452.691L251.927 454.266L259.159 445.351L257.784 443.777Z" fill="black"/>\r
<path d="M251.946 443.768L250.574 445.347L257.825 454.24L259.197 452.662L251.946 443.768Z" fill="black"/>\r
<path d="M247.357 443.763L240.124 452.677L241.499 454.251L248.732 445.337L247.357 443.763Z" fill="black"/>\r
<path d="M241.495 443.782L240.123 445.36L247.375 454.253L248.747 452.675L241.495 443.782Z" fill="black"/>\r
<path d="M236.906 443.776L229.674 452.69L231.049 454.264L238.281 445.35L236.906 443.776Z" fill="black"/>\r
<path d="M231.068 443.768L229.696 445.346L236.947 454.239L238.319 452.661L231.068 443.768Z" fill="black"/>\r
<path d="M174.272 443.773L167.04 452.687L168.415 454.261L175.647 445.347L174.272 443.773Z" fill="black"/>\r
<path d="M168.432 443.766L167.06 445.344L174.311 454.238L175.683 452.659L168.432 443.766Z" fill="black"/>\r
<path d="M163.844 443.759L156.612 452.673L157.987 454.247L165.22 445.333L163.844 443.759Z" fill="black"/>\r
<path d="M157.981 443.779L156.609 445.357L163.86 454.251L165.232 452.672L157.981 443.779Z" fill="black"/>\r
<path d="M153.394 443.772L146.161 452.686L147.536 454.26L154.769 445.346L153.394 443.772Z" fill="black"/>\r
<path d="M147.553 443.765L146.181 445.344L153.433 454.237L154.804 452.659L147.553 443.765Z" fill="black"/>\r
<path d="M142.967 443.758L135.734 452.672L137.109 454.246L144.342 445.332L142.967 443.758Z" fill="black"/>\r
<path d="M137.102 443.779L135.73 445.357L142.982 454.25L144.354 452.672L137.102 443.779Z" fill="black"/>\r
<path d="M132.516 443.771L125.283 452.685L126.658 454.259L133.891 445.345L132.516 443.771Z" fill="black"/>\r
<path d="M126.674 443.765L125.302 445.343L132.554 454.237L133.926 452.658L126.674 443.765Z" fill="black"/>\r
<path d="M1176.41 426.064L1169.18 434.978L1170.56 436.553L1177.79 427.638L1176.41 426.064Z" fill="black"/>\r
<path d="M1170.59 426.035L1169.22 427.613L1176.47 436.506L1177.85 434.928L1170.59 426.035Z" fill="black"/>\r
<path d="M1165.99 426.05L1158.75 434.964L1160.13 436.538L1167.36 427.624L1165.99 426.05Z" fill="black"/>\r
<path d="M1160.14 426.048L1158.77 427.626L1166.02 436.519L1167.39 434.941L1160.14 426.048Z" fill="black"/>\r
<path d="M1082.47 426.045L1075.24 434.96L1076.62 436.534L1083.85 427.619L1082.47 426.045Z" fill="black"/>\r
<path d="M1076.63 426.045L1075.26 427.624L1082.51 436.517L1083.88 434.939L1076.63 426.045Z" fill="black"/>\r
<path d="M1072.02 426.059L1064.79 434.973L1066.17 436.547L1073.4 427.633L1072.02 426.059Z" fill="black"/>\r
<path d="M1066.2 426.032L1064.83 427.61L1072.08 436.503L1073.45 434.925L1066.2 426.032Z" fill="black"/>\r
<path d="M1061.6 426.045L1054.36 434.959L1055.74 436.533L1062.97 427.619L1061.6 426.045Z" fill="black"/>\r
<path d="M1055.75 426.045L1054.38 427.623L1061.63 436.517L1063 434.938L1055.75 426.045Z" fill="black"/>\r
<path d="M1051.14 426.058L1043.91 434.972L1045.29 436.546L1052.52 427.632L1051.14 426.058Z" fill="black"/>\r
<path d="M1045.32 426.031L1043.95 427.609L1051.2 436.503L1052.57 434.925L1045.32 426.031Z" fill="black"/>\r
<path d="M1040.72 426.043L1033.48 434.958L1034.86 436.532L1042.09 427.618L1040.72 426.043Z" fill="black"/>\r
<path d="M1034.87 426.044L1033.5 427.622L1040.75 436.516L1042.12 434.937L1034.87 426.044Z" fill="black"/>\r
<path d="M978.083 426.04L970.85 434.955L972.225 436.529L979.458 427.614L978.083 426.04Z" fill="black"/>\r
<path d="M972.236 426.042L970.865 427.621L978.116 436.514L979.488 434.936L972.236 426.042Z" fill="black"/>\r
<path d="M967.633 426.054L960.4 434.968L961.775 436.542L969.008 427.628L967.633 426.054Z" fill="black"/>\r
<path d="M961.809 426.029L960.438 427.607L967.689 436.5L969.061 434.922L961.809 426.029Z" fill="black"/>\r
<path d="M957.205 426.039L949.972 434.954L951.347 436.528L958.58 427.613L957.205 426.039Z" fill="black"/>\r
<path d="M951.358 426.042L949.986 427.62L957.237 436.513L958.609 434.935L951.358 426.042Z" fill="black"/>\r
<path d="M831.936 426.033L824.704 434.947L826.079 436.521L833.311 427.607L831.936 426.033Z" fill="black"/>\r
<path d="M826.087 426.038L824.715 427.616L831.967 436.51L833.339 434.931L826.087 426.038Z" fill="black"/>\r
<path d="M821.486 426.046L814.254 434.96L815.629 436.535L822.861 427.62L821.486 426.046Z" fill="black"/>\r
<path d="M815.659 426.024L814.288 427.603L821.539 436.496L822.911 434.918L815.659 426.024Z" fill="black"/>\r
<path d="M811.058 426.032L803.826 434.946L805.201 436.52L812.433 427.606L811.058 426.032Z" fill="black"/>\r
<path d="M805.209 426.038L803.837 427.616L811.088 436.509L812.46 434.931L805.209 426.038Z" fill="black"/>\r
<path d="M800.608 426.045L793.376 434.959L794.751 436.534L801.983 427.619L800.608 426.045Z" fill="black"/>\r
<path d="M794.781 426.024L793.409 427.602L800.66 436.495L802.032 434.917L794.781 426.024Z" fill="black"/>\r
<path d="M790.18 426.031L782.947 434.945L784.322 436.519L791.555 427.605L790.18 426.031Z" fill="black"/>\r
<path d="M784.33 426.037L782.958 427.615L790.21 436.509L791.581 434.93L784.33 426.037Z" fill="black"/>\r
<path d="M779.73 426.044L772.497 434.958L773.872 436.532L781.105 427.618L779.73 426.044Z" fill="black"/>\r
<path d="M773.902 426.023L772.531 427.602L779.782 436.495L781.154 434.917L773.902 426.023Z" fill="black"/>\r
<path d="M654.461 426.038L647.228 434.952L648.603 436.526L655.836 427.612L654.461 426.038Z" fill="black"/>\r
<path d="M648.631 426.02L647.259 427.598L654.51 436.491L655.882 434.913L648.631 426.02Z" fill="black"/>\r
<path d="M644.033 426.023L636.801 434.938L638.176 436.512L645.408 427.598L644.033 426.023Z" fill="black"/>\r
<path d="M638.18 426.033L636.808 427.611L644.06 436.504L645.432 434.926L638.18 426.033Z" fill="black"/>\r
<path d="M633.583 426.036L626.35 434.951L627.725 436.525L634.958 427.611L633.583 426.036Z" fill="black"/>\r
<path d="M627.752 426.019L626.381 427.597L633.632 436.491L635.004 434.912L627.752 426.019Z" fill="black"/>\r
<path d="M623.155 426.022L615.923 434.937L617.298 436.511L624.53 427.596L623.155 426.022Z" fill="black"/>\r
<path d="M617.302 426.032L615.93 427.61L623.181 436.504L624.553 434.925L617.302 426.032Z" fill="black"/>\r
<path d="M529.193 426.031L521.96 434.945L523.335 436.52L530.568 427.605L529.193 426.031Z" fill="black"/>\r
<path d="M523.36 426.016L521.988 427.594L529.239 436.487L530.611 434.909L523.36 426.016Z" fill="black"/>\r
<path d="M518.765 426.017L511.532 434.931L512.907 436.505L520.14 427.591L518.765 426.017Z" fill="black"/>\r
<path d="M512.909 426.029L511.537 427.607L518.788 436.501L520.16 434.922L512.909 426.029Z" fill="black"/>\r
<path d="M445.68 426.027L438.448 434.941L439.823 436.515L447.055 427.601L445.68 426.027Z" fill="black"/>\r
<path d="M439.845 426.014L438.473 427.592L445.725 436.485L447.097 434.907L439.845 426.014Z" fill="black"/>\r
<path d="M435.252 426.013L428.02 434.927L429.395 436.501L436.627 427.587L435.252 426.013Z" fill="black"/>\r
<path d="M429.395 426.027L428.023 427.605L435.274 436.498L436.646 434.92L429.395 426.027Z" fill="black"/>\r
<path d="M424.802 426.026L417.57 434.94L418.945 436.515L426.177 427.6L424.802 426.026Z" fill="black"/>\r
<path d="M418.967 426.013L417.595 427.591L424.846 436.484L426.218 434.906L418.967 426.013Z" fill="black"/>\r
<path d="M414.374 426.011L407.142 434.926L408.517 436.5L415.75 427.586L414.374 426.011Z" fill="black"/>\r
<path d="M408.516 426.026L407.144 427.604L414.396 436.498L415.768 434.919L408.516 426.026Z" fill="black"/>\r
<path d="M403.925 426.025L396.692 434.939L398.067 436.513L405.3 427.599L403.925 426.025Z" fill="black"/>\r
<path d="M398.089 426.012L396.717 427.591L403.968 436.484L405.34 434.906L398.089 426.012Z" fill="black"/>\r
<path d="M278.656 426.019L271.423 434.933L272.798 436.507L280.031 427.593L278.656 426.019Z" fill="black"/>\r
<path d="M272.817 426.009L271.445 427.587L278.697 436.48L280.069 434.902L272.817 426.009Z" fill="black"/>\r
<path d="M268.228 426.004L260.995 434.919L262.37 436.493L269.603 427.578L268.228 426.004Z" fill="black"/>\r
<path d="M262.366 426.022L260.995 427.6L268.246 436.493L269.618 434.915L262.366 426.022Z" fill="black"/>\r
<path d="M257.777 426.018L250.545 434.932L251.92 436.506L259.152 427.592L257.777 426.018Z" fill="black"/>\r
<path d="M251.939 426.008L250.567 427.586L257.818 436.48L259.19 434.901L251.939 426.008Z" fill="black"/>\r
<path d="M184.715 426L177.483 434.914L178.858 436.488L186.09 427.574L184.715 426Z" fill="black"/>\r
<path d="M178.852 426.019L177.48 427.598L184.732 436.491L186.104 434.913L178.852 426.019Z" fill="black"/>\r
<path d="M174.265 426.013L167.032 434.928L168.408 436.502L175.64 427.588L174.265 426.013Z" fill="black"/>\r
<path d="M168.425 426.006L167.053 427.584L174.304 436.477L175.676 434.899L168.425 426.006Z" fill="black"/>\r
<path d="M163.837 425.999L156.605 434.913L157.98 436.487L165.212 427.573L163.837 425.999Z" fill="black"/>\r
<path d="M157.974 426.019L156.602 427.597L163.853 436.49L165.225 434.912L157.974 426.019Z" fill="black"/>\r
<path d="M153.387 426.012L146.155 434.927L147.53 436.501L154.762 427.586L153.387 426.012Z" fill="black"/>\r
<path d="M147.546 426.005L146.174 427.583L153.426 436.477L154.798 434.898L147.546 426.005Z" fill="black"/>\r
<path d="M142.959 425.998L135.727 434.912L137.102 436.486L144.335 427.572L142.959 425.998Z" fill="black"/>\r
<path d="M137.095 426.018L135.723 427.596L142.975 436.49L144.347 434.912L137.095 426.018Z" fill="black"/>\r
<path d="M1186.86 408.291L1179.62 417.205L1181 418.78L1188.23 409.865L1186.86 408.291Z" fill="black"/>\r
<path d="M1181.04 408.316L1179.67 409.894L1186.92 418.787L1188.29 417.209L1181.04 408.316Z" fill="black"/>\r
<path d="M1176.41 408.305L1169.17 417.219L1170.55 418.793L1177.78 409.879L1176.41 408.305Z" fill="black"/>\r
<path d="M1170.61 408.302L1169.24 409.88L1176.49 418.773L1177.86 417.195L1170.61 408.302Z" fill="black"/>\r
<path d="M1103.34 408.287L1096.11 417.201L1097.49 418.776L1104.72 409.861L1103.34 408.287Z" fill="black"/>\r
<path d="M1097.52 408.313L1096.15 409.892L1103.4 418.785L1104.77 417.207L1097.52 408.313Z" fill="black"/>\r
<path d="M1092.89 408.3L1085.66 417.214L1087.04 418.789L1094.27 409.874L1092.89 408.3Z" fill="black"/>\r
<path d="M1087.09 408.299L1085.72 409.878L1092.97 418.771L1094.35 417.193L1087.09 408.299Z" fill="black"/>\r
<path d="M1082.47 408.286L1075.23 417.2L1076.61 418.774L1083.84 409.86L1082.47 408.286Z" fill="black"/>\r
<path d="M1076.64 408.313L1075.27 409.891L1082.52 418.784L1083.9 417.206L1076.64 408.313Z" fill="black"/>\r
<path d="M1072.02 408.299L1064.78 417.214L1066.16 418.788L1073.39 409.873L1072.02 408.299Z" fill="black"/>\r
<path d="M1066.22 408.299L1064.85 409.877L1072.1 418.771L1073.47 417.192L1066.22 408.299Z" fill="black"/>\r
<path d="M1061.59 408.285L1054.36 417.199L1055.73 418.773L1062.96 409.859L1061.59 408.285Z" fill="black"/>\r
<path d="M1055.77 408.312L1054.39 409.89L1061.65 418.784L1063.02 417.205L1055.77 408.312Z" fill="black"/>\r
<path d="M988.504 408.295L981.271 417.209L982.646 418.784L989.879 409.869L988.504 408.295Z" fill="black"/>\r
<path d="M982.703 408.296L981.331 409.875L988.582 418.768L989.954 417.19L982.703 408.296Z" fill="black"/>\r
<path d="M978.076 408.28L970.843 417.195L972.218 418.769L979.451 409.855L978.076 408.28Z" fill="black"/>\r
<path d="M972.251 408.31L970.88 409.888L978.131 418.781L979.503 417.203L972.251 408.31Z" fill="black"/>\r
<path d="M967.626 408.294L960.393 417.208L961.768 418.782L969.001 409.868L967.626 408.294Z" fill="black"/>\r
<path d="M961.824 408.296L960.452 409.874L967.704 418.767L969.076 417.189L961.824 408.296Z" fill="black"/>\r
<path d="M957.197 408.28L949.965 417.194L951.34 418.768L958.572 409.854L957.197 408.28Z" fill="black"/>\r
<path d="M951.373 408.309L950.001 409.887L957.252 418.781L958.624 417.202L951.373 408.309Z" fill="black"/>\r
<path d="M842.357 408.288L835.124 417.202L836.499 418.776L843.732 409.862L842.357 408.288Z" fill="black"/>\r
<path d="M836.553 408.293L835.181 409.871L842.433 418.764L843.804 417.186L836.553 408.293Z" fill="black"/>\r
<path d="M831.929 408.273L824.697 417.187L826.072 418.762L833.304 409.847L831.929 408.273Z" fill="black"/>\r
<path d="M826.102 408.305L824.73 409.883L831.982 418.777L833.354 417.199L826.102 408.305Z" fill="black"/>\r
<path d="M821.479 408.287L814.246 417.201L815.621 418.775L822.854 409.861L821.479 408.287Z" fill="black"/>\r
<path d="M815.674 408.292L814.302 409.87L821.554 418.763L822.926 417.185L815.674 408.292Z" fill="black"/>\r
<path d="M811.051 408.272L803.819 417.187L805.194 418.761L812.426 409.847L811.051 408.272Z" fill="black"/>\r
<path d="M805.224 408.305L803.852 409.883L811.103 418.776L812.475 417.198L805.224 408.305Z" fill="black"/>\r
<path d="M800.601 408.285L793.368 417.2L794.743 418.774L801.976 409.86L800.601 408.285Z" fill="black"/>\r
<path d="M794.796 408.291L793.424 409.869L800.675 418.763L802.047 417.184L794.796 408.291Z" fill="black"/>\r
<path d="M664.905 408.265L657.672 417.179L659.047 418.753L666.28 409.839L664.905 408.265Z" fill="black"/>\r
<path d="M659.074 408.301L657.702 409.879L664.953 418.772L666.325 417.194L659.074 408.301Z" fill="black"/>\r
<path d="M654.454 408.278L647.221 417.192L648.596 418.767L655.829 409.852L654.454 408.278Z" fill="black"/>\r
<path d="M648.646 408.287L647.274 409.865L654.526 418.759L655.897 417.18L648.646 408.287Z" fill="black"/>\r
<path d="M644.026 408.264L636.793 417.178L638.168 418.752L645.401 409.838L644.026 408.264Z" fill="black"/>\r
<path d="M638.195 408.3L636.823 409.878L644.075 418.772L645.447 417.193L638.195 408.3Z" fill="black"/>\r
<path d="M633.576 408.277L626.343 417.191L627.718 418.765L634.951 409.851L633.576 408.277Z" fill="black"/>\r
<path d="M627.768 408.286L626.396 409.864L633.648 418.758L635.019 417.179L627.768 408.286Z" fill="black"/>\r
<path d="M550.063 408.273L542.831 417.187L544.206 418.761L551.439 409.847L550.063 408.273Z" fill="black"/>\r
<path d="M544.253 408.284L542.881 409.862L550.133 418.756L551.505 417.177L544.253 408.284Z" fill="black"/>\r
<path d="M539.635 408.258L532.403 417.173L533.778 418.747L541.011 409.833L539.635 408.258Z" fill="black"/>\r
<path d="M533.802 408.297L532.43 409.875L539.682 418.768L541.054 417.19L533.802 408.297Z" fill="black"/>\r
<path d="M456.123 408.254L448.89 417.169L450.265 418.743L457.498 409.828L456.123 408.254Z" fill="black"/>\r
<path d="M450.288 408.295L448.916 409.873L456.168 418.766L457.539 417.188L450.288 408.295Z" fill="black"/>\r
<path d="M445.673 408.267L438.44 417.182L439.815 418.756L447.048 409.841L445.673 408.267Z" fill="black"/>\r
<path d="M439.861 408.281L438.489 409.859L445.741 418.752L447.112 417.174L439.861 408.281Z" fill="black"/>\r
<path d="M435.245 408.253L428.012 417.167L429.388 418.742L436.62 409.827L435.245 408.253Z" fill="black"/>\r
<path d="M429.41 408.294L428.038 409.872L435.289 418.765L436.661 417.187L429.41 408.294Z" fill="black"/>\r
<path d="M424.795 408.266L417.562 417.181L418.938 418.755L426.17 409.84L424.795 408.266Z" fill="black"/>\r
<path d="M418.982 408.28L417.611 409.858L424.862 418.752L426.234 417.174L418.982 408.28Z" fill="black"/>\r
<path d="M414.367 408.252L407.135 417.166L408.51 418.74L415.743 409.826L414.367 408.252Z" fill="black"/>\r
<path d="M408.531 408.293L407.159 409.872L414.411 418.765L415.782 417.187L408.531 408.293Z" fill="black"/>\r
<path d="M299.527 408.26L292.294 417.174L293.669 418.749L300.902 409.834L299.527 408.26Z" fill="black"/>\r
<path d="M293.711 408.277L292.339 409.855L299.591 418.748L300.963 417.17L293.711 408.277Z" fill="black"/>\r
<path d="M289.099 408.246L281.866 417.16L283.241 418.734L290.474 409.82L289.099 408.246Z" fill="black"/>\r
<path d="M283.26 408.29L281.889 409.868L289.14 418.761L290.512 417.183L283.26 408.29Z" fill="black"/>\r
<path d="M278.648 408.259L271.416 417.173L272.791 418.747L280.024 409.833L278.648 408.259Z" fill="black"/>\r
<path d="M272.833 408.276L271.461 409.854L278.712 418.748L280.084 417.169L272.833 408.276Z" fill="black"/>\r
<path d="M195.136 408.255L187.903 417.169L189.278 418.743L196.511 409.829L195.136 408.255Z" fill="black"/>\r
<path d="M189.318 408.274L187.947 409.852L195.198 418.745L196.57 417.167L189.318 408.274Z" fill="black"/>\r
<path d="M184.708 408.24L177.476 417.155L178.851 418.729L186.083 409.815L184.708 408.24Z" fill="black"/>\r
<path d="M178.868 408.287L177.496 409.865L184.747 418.758L186.119 417.18L178.868 408.287Z" fill="black"/>\r
<path d="M174.258 408.254L167.025 417.168L168.401 418.742L175.633 409.828L174.258 408.254Z" fill="black"/>\r
<path d="M168.44 408.273L167.068 409.851L174.32 418.745L175.691 417.166L168.44 408.273Z" fill="black"/>\r
<path d="M163.83 408.239L156.597 417.154L157.973 418.728L165.205 409.813L163.83 408.239Z" fill="black"/>\r
<path d="M157.989 408.286L156.617 409.865L163.869 418.758L165.24 417.18L157.989 408.286Z" fill="black"/>\r
<path d="M153.38 408.253L146.147 417.167L147.522 418.741L154.755 409.827L153.38 408.253Z" fill="black"/>\r
<path d="M147.561 408.272L146.189 409.85L153.441 418.744L154.813 417.166L147.561 408.272Z" fill="black"/>\r
<path d="M1197.3 390.573L1190.07 399.487L1191.44 401.061L1198.68 392.147L1197.3 390.573Z" fill="black"/>\r
<path d="M1191.48 390.542L1190.11 392.12L1197.36 401.013L1198.73 399.435L1191.48 390.542Z" fill="black"/>\r
<path d="M1186.87 390.558L1179.64 399.473L1181.02 401.047L1188.25 392.133L1186.87 390.558Z" fill="black"/>\r
<path d="M1181.03 390.556L1179.66 392.134L1186.91 401.027L1188.28 399.449L1181.03 390.556Z" fill="black"/>\r
<path d="M1113.79 390.568L1106.56 399.483L1107.93 401.057L1115.16 392.142L1113.79 390.568Z" fill="black"/>\r
<path d="M1107.97 390.54L1106.6 392.118L1113.85 401.012L1115.22 399.433L1107.97 390.54Z" fill="black"/>\r
<path d="M1103.36 390.554L1096.13 399.468L1097.5 401.043L1104.74 392.128L1103.36 390.554Z" fill="black"/>\r
<path d="M1097.52 390.553L1096.14 392.131L1103.4 401.025L1104.77 399.446L1097.52 390.553Z" fill="black"/>\r
<path d="M1092.91 390.567L1085.68 399.482L1087.05 401.056L1094.29 392.141L1092.91 390.567Z" fill="black"/>\r
<path d="M1087.09 390.539L1085.72 392.117L1092.97 401.011L1094.34 399.432L1087.09 390.539Z" fill="black"/>\r
<path d="M1082.48 390.553L1075.25 399.467L1076.63 401.041L1083.86 392.127L1082.48 390.553Z" fill="black"/>\r
<path d="M1076.64 390.552L1075.27 392.13L1082.52 401.024L1083.89 399.445L1076.64 390.552Z" fill="black"/>\r
<path d="M988.52 390.562L981.288 399.476L982.663 401.05L989.895 392.136L988.52 390.562Z" fill="black"/>\r
<path d="M982.696 390.536L981.324 392.114L988.575 401.008L989.947 399.429L982.696 390.536Z" fill="black"/>\r
<path d="M978.093 390.548L970.86 399.462L972.235 401.036L979.468 392.122L978.093 390.548Z" fill="black"/>\r
<path d="M972.245 390.549L970.873 392.128L978.125 401.021L979.497 399.443L972.245 390.549Z" fill="black"/>\r
<path d="M967.642 390.561L960.409 399.475L961.784 401.05L969.017 392.135L967.642 390.561Z" fill="black"/>\r
<path d="M961.817 390.536L960.445 392.114L967.697 401.007L969.069 399.429L961.817 390.536Z" fill="black"/>\r
<path d="M957.214 390.546L949.981 399.461L951.356 401.035L958.589 392.121L957.214 390.546Z" fill="black"/>\r
<path d="M951.366 390.549L949.995 392.127L957.246 401.02L958.618 399.442L951.366 390.549Z" fill="black"/>\r
<path d="M852.823 390.541L845.591 399.456L846.966 401.03L854.199 392.116L852.823 390.541Z" fill="black"/>\r
<path d="M846.974 390.546L845.602 392.124L852.853 401.017L854.225 399.439L846.974 390.546Z" fill="black"/>\r
<path d="M842.374 390.555L835.141 399.469L836.516 401.043L843.749 392.129L842.374 390.555Z" fill="black"/>\r
<path d="M836.546 390.532L835.174 392.11L842.425 401.004L843.797 399.425L836.546 390.532Z" fill="black"/>\r
<path d="M831.946 390.54L824.713 399.454L826.088 401.029L833.321 392.114L831.946 390.54Z" fill="black"/>\r
<path d="M826.095 390.545L824.723 392.123L831.975 401.017L833.347 399.438L826.095 390.545Z" fill="black"/>\r
<path d="M821.495 390.554L814.262 399.468L815.637 401.042L822.87 392.128L821.495 390.554Z" fill="black"/>\r
<path d="M815.667 390.532L814.295 392.11L821.547 401.003L822.919 399.425L815.667 390.532Z" fill="black"/>\r
<path d="M811.067 390.539L803.834 399.453L805.21 401.028L812.442 392.113L811.067 390.539Z" fill="black"/>\r
<path d="M805.217 390.545L803.845 392.123L811.096 401.016L812.468 399.438L805.217 390.545Z" fill="black"/>\r
<path d="M675.348 390.546L668.115 399.46L669.491 401.035L676.723 392.12L675.348 390.546Z" fill="black"/>\r
<path d="M669.517 390.527L668.146 392.105L675.397 400.999L676.769 399.42L669.517 390.527Z" fill="black"/>\r
<path d="M664.921 390.532L657.688 399.446L659.064 401.02L666.296 392.106L664.921 390.532Z" fill="black"/>\r
<path d="M659.067 390.54L657.695 392.119L664.946 401.012L666.318 399.434L659.067 390.54Z" fill="black"/>\r
<path d="M654.47 390.545L647.238 399.46L648.613 401.034L655.846 392.119L654.47 390.545Z" fill="black"/>\r
<path d="M648.639 390.527L647.267 392.105L654.518 400.998L655.89 399.42L648.639 390.527Z" fill="black"/>\r
<path d="M560.53 390.526L553.297 399.441L554.672 401.015L561.905 392.101L560.53 390.526Z" fill="black"/>\r
<path d="M554.674 390.537L553.302 392.116L560.553 401.009L561.925 399.431L554.674 390.537Z" fill="black"/>\r
<path d="M550.08 390.54L542.847 399.454L544.222 401.028L551.455 392.114L550.08 390.54Z" fill="black"/>\r
<path d="M544.247 390.524L542.875 392.102L550.126 400.995L551.498 399.417L544.247 390.524Z" fill="black"/>\r
<path d="M539.652 390.525L532.419 399.44L533.795 401.014L541.027 392.099L539.652 390.525Z" fill="black"/>\r
<path d="M533.795 390.537L532.423 392.115L539.675 401.008L541.047 399.43L533.795 390.537Z" fill="black"/>\r
<path d="M466.567 390.536L459.335 399.45L460.71 401.024L467.942 392.11L466.567 390.536Z" fill="black"/>\r
<path d="M460.732 390.521L459.36 392.099L466.611 400.993L467.983 399.415L460.732 390.521Z" fill="black"/>\r
<path d="M456.139 390.521L448.907 399.435L450.282 401.01L457.514 392.095L456.139 390.521Z" fill="black"/>\r
<path d="M450.281 390.534L448.909 392.113L456.161 401.006L457.532 399.428L450.281 390.534Z" fill="black"/>\r
<path d="M445.689 390.535L438.457 399.449L439.832 401.023L447.065 392.109L445.689 390.535Z" fill="black"/>\r
<path d="M439.854 390.521L438.482 392.099L445.734 400.992L447.105 399.414L439.854 390.521Z" fill="black"/>\r
<path d="M435.262 390.52L428.029 399.435L429.404 401.009L436.637 392.094L435.262 390.52Z" fill="black"/>\r
<path d="M429.403 390.534L428.031 392.112L435.283 401.005L436.655 399.427L429.403 390.534Z" fill="black"/>\r
<path d="M320.421 390.528L313.189 399.442L314.564 401.016L321.796 392.102L320.421 390.528Z" fill="black"/>\r
<path d="M314.583 390.517L313.211 392.095L320.462 400.988L321.834 399.41L314.583 390.517Z" fill="black"/>\r
<path d="M309.993 390.514L302.76 399.428L304.136 401.002L311.368 392.088L309.993 390.514Z" fill="black"/>\r
<path d="M304.132 390.53L302.76 392.108L310.011 401.001L311.383 399.423L304.132 390.53Z" fill="black"/>\r
<path d="M299.543 390.527L292.31 399.441L293.685 401.016L300.918 392.101L299.543 390.527Z" fill="black"/>\r
<path d="M293.704 390.516L292.332 392.095L299.584 400.988L300.956 399.41L293.704 390.516Z" fill="black"/>\r
<path d="M216.03 390.523L208.798 399.437L210.173 401.011L217.406 392.097L216.03 390.523Z" fill="black"/>\r
<path d="M210.19 390.514L208.818 392.092L216.07 400.985L217.442 399.407L210.19 390.514Z" fill="black"/>\r
<path d="M205.602 390.508L198.37 399.423L199.745 400.997L206.977 392.083L205.602 390.508Z" fill="black"/>\r
<path d="M199.739 390.527L198.367 392.105L205.619 400.998L206.99 399.42L199.739 390.527Z" fill="black"/>\r
<path d="M195.152 390.522L187.919 399.436L189.294 401.01L196.527 392.096L195.152 390.522Z" fill="black"/>\r
<path d="M189.311 390.513L187.939 392.092L195.191 400.985L196.563 399.407L189.311 390.513Z" fill="black"/>\r
<path d="M184.725 390.507L177.492 399.422L178.867 400.996L186.1 392.081L184.725 390.507Z" fill="black"/>\r
<path d="M178.861 390.527L177.489 392.105L184.74 400.998L186.112 399.42L178.861 390.527Z" fill="black"/>\r
<path d="M174.274 390.521L167.042 399.435L168.417 401.009L175.649 392.095L174.274 390.521Z" fill="black"/>\r
<path d="M168.433 390.513L167.061 392.091L174.312 400.984L175.684 399.406L168.433 390.513Z" fill="black"/>\r
<path d="M163.846 390.506L156.614 399.421L157.989 400.995L165.221 392.081L163.846 390.506Z" fill="black"/>\r
<path d="M157.982 390.526L156.61 392.104L163.862 400.997L165.233 399.419L157.982 390.526Z" fill="black"/>\r
<path d="M1207.74 372.8L1200.51 381.714L1201.89 383.288L1209.12 374.374L1207.74 372.8Z" fill="black"/>\r
<path d="M1201.9 372.796L1200.53 374.374L1207.78 383.267L1209.15 381.689L1201.9 372.796Z" fill="black"/>\r
<path d="M1197.29 372.813L1190.06 381.727L1191.44 383.302L1198.67 374.387L1197.29 372.813Z" fill="black"/>\r
<path d="M1191.47 372.782L1190.1 374.36L1197.35 383.254L1198.73 381.675L1191.47 372.782Z" fill="black"/>\r
<path d="M1186.87 372.798L1179.63 381.713L1181.01 383.287L1188.24 374.373L1186.87 372.798Z" fill="black"/>\r
<path d="M1181.02 372.795L1179.65 374.373L1186.9 383.267L1188.27 381.688L1181.02 372.795Z" fill="black"/>\r
<path d="M1134.66 372.81L1127.43 381.724L1128.8 383.298L1136.03 374.384L1134.66 372.81Z" fill="black"/>\r
<path d="M1128.84 372.78L1127.47 374.358L1134.72 383.252L1136.09 381.673L1128.84 372.78Z" fill="black"/>\r
<path d="M1124.23 372.795L1117 381.71L1118.37 383.284L1125.61 374.37L1124.23 372.795Z" fill="black"/>\r
<path d="M1118.39 372.793L1117.02 374.372L1124.27 383.265L1125.64 381.687L1118.39 372.793Z" fill="black"/>\r
<path d="M1113.78 372.809L1106.55 381.723L1107.92 383.297L1115.16 374.383L1113.78 372.809Z" fill="black"/>\r
<path d="M1107.96 372.78L1106.59 374.358L1113.84 383.251L1115.21 381.673L1107.96 372.78Z" fill="black"/>\r
<path d="M1103.35 372.795L1096.12 381.709L1097.5 383.283L1104.73 374.369L1103.35 372.795Z" fill="black"/>\r
<path d="M1097.51 372.793L1096.14 374.371L1103.39 383.264L1104.76 381.686L1097.51 372.793Z" fill="black"/>\r
<path d="M998.963 372.789L991.73 381.704L993.106 383.278L1000.34 374.363L998.963 372.789Z" fill="black"/>\r
<path d="M993.116 372.79L991.744 374.368L998.995 383.261L1000.37 381.683L993.116 372.79Z" fill="black"/>\r
<path d="M988.512 372.802L981.28 381.717L982.655 383.291L989.887 374.376L988.512 372.802Z" fill="black"/>\r
<path d="M982.689 372.776L981.317 374.354L988.568 383.248L989.94 381.669L982.689 372.776Z" fill="black"/>\r
<path d="M978.085 372.788L970.853 381.702L972.228 383.277L979.46 374.362L978.085 372.788Z" fill="black"/>\r
<path d="M972.238 372.789L970.866 374.367L978.117 383.261L979.489 381.683L972.238 372.789Z" fill="black"/>\r
<path d="M967.634 372.802L960.402 381.716L961.777 383.29L969.01 374.376L967.634 372.802Z" fill="black"/>\r
<path d="M961.81 372.776L960.438 374.354L967.69 383.247L969.061 381.669L961.81 372.776Z" fill="black"/>\r
<path d="M957.207 372.787L949.974 381.701L951.349 383.275L958.582 374.361L957.207 372.787Z" fill="black"/>\r
<path d="M951.359 372.788L949.988 374.367L957.239 383.26L958.611 381.682L951.359 372.788Z" fill="black"/>\r
<path d="M873.694 372.783L866.461 381.697L867.836 383.271L875.069 374.357L873.694 372.783Z" fill="black"/>\r
<path d="M867.845 372.786L866.473 374.364L873.725 383.257L875.097 381.679L867.845 372.786Z" fill="black"/>\r
<path d="M863.244 372.796L856.011 381.711L857.387 383.285L864.619 374.37L863.244 372.796Z" fill="black"/>\r
<path d="M857.417 372.773L856.045 374.351L863.297 383.244L864.669 381.666L857.417 372.773Z" fill="black"/>\r
<path d="M852.816 372.782L845.584 381.696L846.959 383.27L854.191 374.356L852.816 372.782Z" fill="black"/>\r
<path d="M846.967 372.785L845.595 374.364L852.846 383.257L854.218 381.679L846.967 372.785Z" fill="black"/>\r
<path d="M842.366 372.795L835.134 381.709L836.509 383.283L843.742 374.369L842.366 372.795Z" fill="black"/>\r
<path d="M836.539 372.772L835.167 374.35L842.418 383.243L843.79 381.665L836.539 372.772Z" fill="black"/>\r
<path d="M831.938 372.78L824.706 381.695L826.081 383.269L833.314 374.354L831.938 372.78Z" fill="black"/>\r
<path d="M826.088 372.785L824.716 374.363L831.967 383.256L833.339 381.678L826.088 372.785Z" fill="black"/>\r
<path d="M821.488 372.794L814.255 381.708L815.63 383.282L822.863 374.368L821.488 372.794Z" fill="black"/>\r
<path d="M815.66 372.771L814.288 374.349L821.54 383.243L822.912 381.664L815.66 372.771Z" fill="black"/>\r
<path d="M696.22 372.788L688.987 381.702L690.362 383.276L697.595 374.362L696.22 372.788Z" fill="black"/>\r
<path d="M690.389 372.767L689.017 374.346L696.268 383.239L697.64 381.661L690.389 372.767Z" fill="black"/>\r
<path d="M685.792 372.773L678.559 381.688L679.934 383.262L687.167 374.348L685.792 372.773Z" fill="black"/>\r
<path d="M679.938 372.781L678.566 374.359L685.818 383.252L687.189 381.674L679.938 372.781Z" fill="black"/>\r
<path d="M675.341 372.786L668.108 381.701L669.483 383.275L676.716 374.361L675.341 372.786Z" fill="black"/>\r
<path d="M669.51 372.767L668.138 374.345L675.39 383.238L676.762 381.66L669.51 372.767Z" fill="black"/>\r
<path d="M664.913 372.772L657.681 381.687L659.056 383.261L666.288 374.346L664.913 372.772Z" fill="black"/>\r
<path d="M659.06 372.78L657.688 374.358L664.939 383.251L666.311 381.673L659.06 372.78Z" fill="black"/>\r
<path d="M654.463 372.786L647.231 381.7L648.606 383.274L655.838 374.36L654.463 372.786Z" fill="black"/>\r
<path d="M648.632 372.766L647.26 374.345L654.511 383.238L655.883 381.66L648.632 372.766Z" fill="black"/>\r
<path d="M560.523 372.767L553.29 381.681L554.665 383.255L561.898 374.341L560.523 372.767Z" fill="black"/>\r
<path d="M554.667 372.777L553.295 374.355L560.546 383.248L561.918 381.67L554.667 372.777Z" fill="black"/>\r
<path d="M550.073 372.78L542.84 381.695L544.215 383.269L551.448 374.354L550.073 372.78Z" fill="black"/>\r
<path d="M544.24 372.763L542.868 374.341L550.119 383.235L551.491 381.657L544.24 372.763Z" fill="black"/>\r
<path d="M487.439 372.777L480.206 381.691L481.581 383.265L488.814 374.351L487.439 372.777Z" fill="black"/>\r
<path d="M481.604 372.761L480.232 374.34L487.484 383.233L488.855 381.655L481.604 372.761Z" fill="black"/>\r
<path d="M477.011 372.763L469.778 381.677L471.153 383.251L478.386 374.337L477.011 372.763Z" fill="black"/>\r
<path d="M471.152 372.774L469.781 374.353L477.032 383.246L478.404 381.668L471.152 372.774Z" fill="black"/>\r
<path d="M466.56 372.776L459.328 381.69L460.703 383.265L467.935 374.35L466.56 372.776Z" fill="black"/>\r
<path d="M460.725 372.761L459.354 374.339L466.605 383.232L467.977 381.654L460.725 372.761Z" fill="black"/>\r
<path d="M456.132 372.761L448.9 381.676L450.275 383.25L457.507 374.336L456.132 372.761Z" fill="black"/>\r
<path d="M450.274 372.774L448.902 374.352L456.154 383.245L457.525 381.667L450.274 372.774Z" fill="black"/>\r
<path d="M341.292 372.77L334.059 381.684L335.434 383.258L342.667 374.344L341.292 372.77Z" fill="black"/>\r
<path d="M335.454 372.757L334.082 374.336L341.334 383.229L342.706 381.651L335.454 372.757Z" fill="black"/>\r
<path d="M330.864 372.755L323.632 381.67L325.007 383.244L332.239 374.329L330.864 372.755Z" fill="black"/>\r
<path d="M325.003 372.77L323.632 374.349L330.883 383.242L332.255 381.664L325.003 372.77Z" fill="black"/>\r
<path d="M320.414 372.768L313.181 381.683L314.556 383.257L321.789 374.343L320.414 372.768Z" fill="black"/>\r
<path d="M314.575 372.757L313.204 374.335L320.455 383.228L321.827 381.65L314.575 372.757Z" fill="black"/>\r
<path d="M309.986 372.754L302.753 381.669L304.128 383.243L311.361 374.328L309.986 372.754Z" fill="black"/>\r
<path d="M304.125 372.77L302.753 374.348L310.004 383.241L311.376 381.663L304.125 372.77Z" fill="black"/>\r
<path d="M216.023 372.763L208.791 381.678L210.166 383.252L217.398 374.338L216.023 372.763Z" fill="black"/>\r
<path d="M210.183 372.754L208.811 374.332L216.062 383.225L217.434 381.647L210.183 372.754Z" fill="black"/>\r
<path d="M205.595 372.749L198.363 381.663L199.738 383.237L206.97 374.323L205.595 372.749Z" fill="black"/>\r
<path d="M199.732 372.767L198.36 374.345L205.612 383.239L206.983 381.66L199.732 372.767Z" fill="black"/>\r
<path d="M195.145 372.762L187.912 381.677L189.287 383.251L196.52 374.336L195.145 372.762Z" fill="black"/>\r
<path d="M189.304 372.753L187.932 374.331L195.184 383.224L196.556 381.646L189.304 372.753Z" fill="black"/>\r
<path d="M184.718 372.748L177.485 381.662L178.86 383.236L186.093 374.322L184.718 372.748Z" fill="black"/>\r
<path d="M178.854 372.766L177.482 374.344L184.733 383.238L186.105 381.659L178.854 372.766Z" fill="black"/>\r
<path d="M174.267 372.761L167.034 381.675L168.409 383.25L175.642 374.335L174.267 372.761Z" fill="black"/>\r
<path d="M168.426 372.752L167.054 374.331L174.305 383.224L175.677 381.646L168.426 372.752Z" fill="black"/>\r
<path d="M1186.86 355.039L1179.63 363.953L1181 365.527L1188.23 356.613L1186.86 355.039Z" fill="black"/>\r
<path d="M1181.04 355.062L1179.67 356.641L1186.92 365.534L1188.29 363.956L1181.04 355.062Z" fill="black"/>\r
<path d="M1176.41 355.052L1169.18 363.967L1170.55 365.541L1177.78 356.627L1176.41 355.052Z" fill="black"/>\r
<path d="M1170.61 355.049L1169.24 356.627L1176.49 365.52L1177.86 363.942L1170.61 355.049Z" fill="black"/>\r
<path d="M1165.98 355.038L1158.75 363.952L1160.12 365.526L1167.36 356.612L1165.98 355.038Z" fill="black"/>\r
<path d="M1160.16 355.062L1158.79 356.64L1166.04 365.533L1167.41 363.955L1160.16 355.062Z" fill="black"/>\r
<path d="M1155.53 355.051L1148.3 363.965L1149.67 365.54L1156.91 356.625L1155.53 355.051Z" fill="black"/>\r
<path d="M1149.73 355.048L1148.36 356.627L1155.61 365.52L1156.98 363.941L1149.73 355.048Z" fill="black"/>\r
<path d="M1145.1 355.037L1137.87 363.951L1139.25 365.525L1146.48 356.611L1145.1 355.037Z" fill="black"/>\r
<path d="M1139.28 355.061L1137.91 356.639L1145.16 365.532L1146.53 363.954L1139.28 355.061Z" fill="black"/>\r
<path d="M998.956 355.03L991.723 363.944L993.098 365.518L1000.33 356.604L998.956 355.03Z" fill="black"/>\r
<path d="M993.132 355.057L991.76 356.635L999.011 365.528L1000.38 363.95L993.132 355.057Z" fill="black"/>\r
<path d="M988.506 355.043L981.273 363.957L982.649 365.531L989.881 356.617L988.506 355.043Z" fill="black"/>\r
<path d="M982.704 355.043L981.332 356.622L988.583 365.515L989.955 363.937L982.704 355.043Z" fill="black"/>\r
<path d="M978.078 355.029L970.845 363.943L972.221 365.517L979.453 356.603L978.078 355.029Z" fill="black"/>\r
<path d="M972.253 355.056L970.881 356.635L978.132 365.528L979.504 363.95L972.253 355.056Z" fill="black"/>\r
<path d="M967.627 355.042L960.395 363.956L961.77 365.53L969.002 356.616L967.627 355.042Z" fill="black"/>\r
<path d="M961.825 355.043L960.453 356.621L967.705 365.514L969.077 363.936L961.825 355.043Z" fill="black"/>\r
<path d="M884.116 355.037L876.883 363.952L878.258 365.526L885.491 356.612L884.116 355.037Z" fill="black"/>\r
<path d="M878.312 355.04L876.94 356.618L884.191 365.511L885.563 363.933L878.312 355.04Z" fill="black"/>\r
<path d="M873.688 355.023L866.455 363.937L867.83 365.512L875.063 356.597L873.688 355.023Z" fill="black"/>\r
<path d="M867.86 355.054L866.488 356.632L873.74 365.525L875.111 363.947L867.86 355.054Z" fill="black"/>\r
<path d="M863.237 355.037L856.004 363.951L857.379 365.525L864.612 356.611L863.237 355.037Z" fill="black"/>\r
<path d="M857.433 355.04L856.061 356.618L863.313 365.511L864.684 363.933L857.433 355.04Z" fill="black"/>\r
<path d="M852.809 355.022L845.576 363.936L846.951 365.511L854.184 356.596L852.809 355.022Z" fill="black"/>\r
<path d="M846.981 355.053L845.61 356.631L852.861 365.524L854.233 363.946L846.981 355.053Z" fill="black"/>\r
<path d="M842.359 355.035L835.127 363.95L836.502 365.524L843.734 356.61L842.359 355.035Z" fill="black"/>\r
<path d="M836.554 355.039L835.183 356.618L842.434 365.511L843.806 363.933L836.554 355.039Z" fill="black"/>\r
<path d="M696.212 355.028L688.98 363.942L690.355 365.516L697.587 356.602L696.212 355.028Z" fill="black"/>\r
<path d="M690.405 355.035L689.033 356.613L696.284 365.506L697.656 363.928L690.405 355.035Z" fill="black"/>\r
<path d="M685.785 355.014L678.552 363.928L679.927 365.502L687.16 356.588L685.785 355.014Z" fill="black"/>\r
<path d="M679.954 355.048L678.582 356.626L685.833 365.519L687.205 363.941L679.954 355.048Z" fill="black"/>\r
<path d="M675.335 355.027L668.102 363.941L669.477 365.515L676.71 356.601L675.335 355.027Z" fill="black"/>\r
<path d="M669.526 355.034L668.154 356.612L675.406 365.506L676.777 363.927L669.526 355.034Z" fill="black"/>\r
<path d="M550.066 355.021L542.833 363.935L544.208 365.509L551.441 356.595L550.066 355.021Z" fill="black"/>\r
<path d="M544.255 355.031L542.883 356.609L550.134 365.502L551.506 363.924L544.255 355.031Z" fill="black"/>\r
<path d="M539.638 355.006L532.405 363.921L533.78 365.495L541.013 356.58L539.638 355.006Z" fill="black"/>\r
<path d="M533.804 355.044L532.432 356.622L539.683 365.515L541.055 363.937L533.804 355.044Z" fill="black"/>\r
<path d="M529.188 355.019L521.955 363.934L523.33 365.508L530.563 356.593L529.188 355.019Z" fill="black"/>\r
<path d="M523.376 355.03L522.004 356.608L529.255 365.502L530.627 363.923L523.376 355.03Z" fill="black"/>\r
<path d="M518.759 355.005L511.527 363.919L512.902 365.494L520.134 356.579L518.759 355.005Z" fill="black"/>\r
<path d="M512.925 355.043L511.553 356.621L518.805 365.515L520.177 363.936L512.925 355.043Z" fill="black"/>\r
<path d="M508.309 355.019L501.077 363.933L502.452 365.507L509.684 356.593L508.309 355.019Z" fill="black"/>\r
<path d="M502.498 355.029L501.126 356.608L508.377 365.501L509.749 363.923L502.498 355.029Z" fill="black"/>\r
<path d="M497.882 355.004L490.649 363.918L492.024 365.492L499.257 356.578L497.882 355.004Z" fill="black"/>\r
<path d="M492.047 355.043L490.675 356.621L497.926 365.514L499.298 363.936L492.047 355.043Z" fill="black"/>\r
<path d="M362.163 355.011L354.93 363.926L356.305 365.5L363.538 356.585L362.163 355.011Z" fill="black"/>\r
<path d="M356.348 355.025L354.976 356.603L362.227 365.497L363.599 363.918L356.348 355.025Z" fill="black"/>\r
<path d="M351.735 354.997L344.502 363.911L345.877 365.485L353.11 356.571L351.735 354.997Z" fill="black"/>\r
<path d="M345.897 355.038L344.525 356.616L351.776 365.51L353.148 363.931L345.897 355.038Z" fill="black"/>\r
<path d="M341.285 355.01L334.052 363.924L335.427 365.499L342.66 356.584L341.285 355.01Z" fill="black"/>\r
<path d="M335.47 355.025L334.098 356.603L341.349 365.496L342.721 363.918L335.47 355.025Z" fill="black"/>\r
<path d="M236.895 355.005L229.662 363.919L231.037 365.493L238.27 356.579L236.895 355.005Z" fill="black"/>\r
<path d="M231.077 355.022L229.705 356.6L236.956 365.493L238.328 363.915L231.077 355.022Z" fill="black"/>\r
<path d="M226.467 354.99L219.234 363.905L220.609 365.479L227.842 356.565L226.467 354.99Z" fill="black"/>\r
<path d="M220.626 355.035L219.254 356.613L226.505 365.506L227.877 363.928L220.626 355.035Z" fill="black"/>\r
<path d="M216.016 355.004L208.784 363.918L210.159 365.492L217.391 356.578L216.016 355.004Z" fill="black"/>\r
<path d="M210.198 355.021L208.826 356.599L216.078 365.492L217.45 363.914L210.198 355.021Z" fill="black"/>\r
<path d="M205.588 354.989L198.355 363.904L199.731 365.478L206.963 356.563L205.588 354.989Z" fill="black"/>\r
<path d="M199.747 355.034L198.375 356.612L205.627 365.506L206.999 363.927L199.747 355.034Z" fill="black"/>\r
<path d="M195.138 355.002L187.906 363.917L189.281 365.491L196.513 356.577L195.138 355.002Z" fill="black"/>\r
<path d="M189.32 355.02L187.948 356.598L195.199 365.492L196.571 363.913L189.32 355.02Z" fill="black"/>\r
<path d="M184.71 354.988L177.478 363.902L178.853 365.477L186.085 356.562L184.71 354.988Z" fill="black"/>\r
<path d="M178.869 355.033L177.497 356.612L184.748 365.505L186.12 363.927L178.869 355.033Z" fill="black"/>\r
<path d="M988.522 337.31L981.289 346.224L982.664 347.798L989.897 338.884L988.522 337.31Z" fill="black"/>\r
<path d="M982.697 337.283L981.325 338.861L988.576 347.754L989.948 346.176L982.697 337.283Z" fill="black"/>\r
<path d="M978.094 337.295L970.861 346.21L972.236 347.784L979.469 338.869L978.094 337.295Z" fill="black"/>\r
<path d="M972.246 337.296L970.874 338.874L978.125 347.768L979.497 346.189L972.246 337.296Z" fill="black"/>\r
<path d="M706.679 337.282L699.446 346.196L700.821 347.77L708.054 338.856L706.679 337.282Z" fill="black"/>\r
<path d="M700.825 337.288L699.453 338.866L706.705 347.76L708.077 346.181L700.825 337.288Z" fill="black"/>\r
<path d="M696.228 337.295L688.996 346.209L690.371 347.783L697.603 338.869L696.228 337.295Z" fill="black"/>\r
<path d="M690.397 337.274L689.026 338.853L696.277 347.746L697.649 346.168L690.397 337.274Z" fill="black"/>\r
<path d="M685.801 337.281L678.568 346.195L679.943 347.769L687.176 338.855L685.801 337.281Z" fill="black"/>\r
<path d="M679.947 337.288L678.575 338.866L685.826 347.759L687.198 346.181L679.947 337.288Z" fill="black"/>\r
<path d="M383.057 337.279L375.824 346.193L377.2 347.768L384.432 338.853L383.057 337.279Z" fill="black"/>\r
<path d="M377.219 337.266L375.847 338.844L383.099 347.737L384.471 346.159L377.219 337.266Z" fill="black"/>\r
<path d="M372.629 337.265L365.396 346.179L366.772 347.753L374.004 338.839L372.629 337.265Z" fill="black"/>\r
<path d="M366.768 337.279L365.396 338.857L372.648 347.75L374.02 346.172L366.768 337.279Z" fill="black"/>\r
<path d="M362.179 337.278L354.947 346.192L356.322 347.766L363.554 338.852L362.179 337.278Z" fill="black"/>\r
<path d="M356.341 337.265L354.969 338.843L362.22 347.737L363.592 346.158L356.341 337.265Z" fill="black"/>\r
<path d="M351.751 337.264L344.519 346.178L345.894 347.752L353.127 338.838L351.751 337.264Z" fill="black"/>\r
<path d="M345.89 337.278L344.518 338.856L351.769 347.75L353.141 346.171L345.89 337.278Z" fill="black"/>\r
<path d="M236.91 337.272L229.677 346.186L231.053 347.76L238.285 338.846L236.91 337.272Z" fill="black"/>\r
<path d="M231.069 337.261L229.697 338.839L236.949 347.733L238.32 346.154L231.069 337.261Z" fill="black"/>\r
<path d="M226.482 337.257L219.25 346.172L220.625 347.746L227.857 338.831L226.482 337.257Z" fill="black"/>\r
<path d="M220.618 337.274L219.247 338.852L226.498 347.746L227.87 346.168L220.618 337.274Z" fill="black"/>\r
<path d="M216.032 337.271L208.8 346.185L210.175 347.759L217.408 338.845L216.032 337.271Z" fill="black"/>\r
<path d="M210.191 337.261L208.819 338.839L216.07 347.732L217.442 346.154L210.191 337.261Z" fill="black"/>\r
<path d="M205.604 337.257L198.372 346.171L199.747 347.745L206.979 338.831L205.604 337.257Z" fill="black"/>\r
<path d="M199.74 337.274L198.368 338.852L205.62 347.745L206.992 346.167L199.74 337.274Z" fill="black"/>\r
<path d="M195.154 337.27L187.921 346.184L189.296 347.758L196.529 338.844L195.154 337.27Z" fill="black"/>\r
<path d="M189.313 337.26L187.941 338.838L195.192 347.732L196.564 346.153L189.313 337.26Z" fill="black"/>\r
<path d="M727.55 319.523L720.317 328.437L721.692 330.012L728.925 321.097L727.55 319.523Z" fill="black"/>\r
<path d="M721.696 319.529L720.324 321.107L727.576 330L728.947 328.422L721.696 319.529Z" fill="black"/>\r
<path d="M717.1 319.537L709.867 328.451L711.242 330.025L718.475 321.111L717.1 319.537Z" fill="black"/>\r
<path d="M711.269 319.515L709.897 321.093L717.149 329.986L718.52 328.408L711.269 319.515Z" fill="black"/>\r
<path d="M706.672 319.522L699.439 328.436L700.814 330.01L708.047 321.096L706.672 319.522Z" fill="black"/>\r
<path d="M700.817 319.528L699.446 321.106L706.697 330L708.069 328.421L700.817 319.528Z" fill="black"/>\r
<path d="M696.221 319.535L688.989 328.45L690.364 330.024L697.596 321.11L696.221 319.535Z" fill="black"/>\r
<path d="M690.39 319.514L689.019 321.092L696.27 329.986L697.642 328.407L690.39 319.514Z" fill="black"/>\r
<path d="M685.793 319.521L678.561 328.436L679.936 330.01L687.169 321.095L685.793 319.521Z" fill="black"/>\r
<path d="M679.94 319.527L678.568 321.105L685.819 329.999L687.191 328.42L679.94 319.527Z" fill="black"/>\r
<path d="M393.5 319.506L386.267 328.421L387.642 329.995L394.875 321.08L393.5 319.506Z" fill="black"/>\r
<path d="M387.64 319.519L386.268 321.097L393.519 329.99L394.891 328.412L387.64 319.519Z" fill="black"/>\r
<path d="M383.05 319.52L375.817 328.434L377.192 330.008L384.425 321.094L383.05 319.52Z" fill="black"/>\r
<path d="M377.212 319.505L375.84 321.083L383.091 329.977L384.463 328.398L377.212 319.505Z" fill="black"/>\r
<path d="M372.622 319.505L365.389 328.419L366.764 329.993L373.997 321.079L372.622 319.505Z" fill="black"/>\r
<path d="M366.761 319.518L365.389 321.097L372.641 329.99L374.013 328.412L366.761 319.518Z" fill="black"/>\r
<path d="M247.353 319.499L240.121 328.413L241.496 329.987L248.729 321.073L247.353 319.499Z" fill="black"/>\r
<path d="M241.49 319.515L240.118 321.093L247.37 329.986L248.741 328.408L241.49 319.515Z" fill="black"/>\r
<path d="M236.903 319.512L229.67 328.426L231.045 330L238.278 321.086L236.903 319.512Z" fill="black"/>\r
<path d="M231.063 319.501L229.691 321.079L236.942 329.972L238.314 328.394L231.063 319.501Z" fill="black"/>\r
<path d="M226.475 319.498L219.243 328.412L220.618 329.986L227.85 321.072L226.475 319.498Z" fill="black"/>\r
<path d="M220.611 319.514L219.24 321.092L226.491 329.985L227.863 328.407L220.611 319.514Z" fill="black"/>\r
<path d="M216.025 319.511L208.793 328.426L210.168 330L217.4 321.085L216.025 319.511Z" fill="black"/>\r
<path d="M210.184 319.5L208.812 321.078L216.063 329.972L217.435 328.394L210.184 319.5Z" fill="black"/>\r
<path d="M205.597 319.497L198.365 328.411L199.74 329.985L206.972 321.071L205.597 319.497Z" fill="black"/>\r
<path d="M199.733 319.513L198.361 321.092L205.612 329.985L206.984 328.407L199.733 319.513Z" fill="black"/>\r
<path d="M727.542 301.764L720.31 310.678L721.685 312.252L728.918 303.338L727.542 301.764Z" fill="black"/>\r
<path d="M721.712 301.796L720.34 303.374L727.592 312.267L728.963 310.689L721.712 301.796Z" fill="black"/>\r
<path d="M717.093 301.777L709.86 310.691L711.235 312.265L718.468 303.351L717.093 301.777Z" fill="black"/>\r
<path d="M711.284 301.782L709.912 303.36L717.164 312.254L718.535 310.676L711.284 301.782Z" fill="black"/>\r
<path d="M706.665 301.762L699.432 310.677L700.807 312.251L708.04 303.337L706.665 301.762Z" fill="black"/>\r
<path d="M700.833 301.795L699.461 303.374L706.713 312.267L708.085 310.689L700.833 301.795Z" fill="black"/>\r
<path d="M414.371 301.748L407.139 310.662L408.514 312.236L415.746 303.322L414.371 301.748Z" fill="black"/>\r
<path d="M408.533 301.787L407.162 303.365L414.413 312.258L415.785 310.68L408.533 301.787Z" fill="black"/>\r
<path d="M403.921 301.761L396.689 310.675L398.064 312.249L405.296 303.335L403.921 301.761Z" fill="black"/>\r
<path d="M398.106 301.773L396.735 303.351L403.986 312.245L405.358 310.667L398.106 301.773Z" fill="black"/>\r
<path d="M393.493 301.747L386.26 310.661L387.635 312.235L394.868 303.321L393.493 301.747Z" fill="black"/>\r
<path d="M387.655 301.786L386.283 303.364L393.534 312.258L394.906 310.679L387.655 301.786Z" fill="black"/>\r
<path d="M257.774 301.754L250.542 310.668L251.917 312.242L259.149 303.328L257.774 301.754Z" fill="black"/>\r
<path d="M251.957 301.769L250.585 303.347L257.836 312.24L259.208 310.662L251.957 301.769Z" fill="black"/>\r
<path d="M247.346 301.739L240.114 310.654L241.489 312.228L248.721 303.314L247.346 301.739Z" fill="black"/>\r
<path d="M241.506 301.782L240.134 303.36L247.385 312.254L248.757 310.675L241.506 301.782Z" fill="black"/>\r
<path d="M236.896 301.752L229.663 310.667L231.038 312.241L238.271 303.327L236.896 301.752Z" fill="black"/>\r
<path d="M231.078 301.768L229.706 303.347L236.957 312.24L238.329 310.662L231.078 301.768Z" fill="black"/>\r
<path d="M226.468 301.738L219.236 310.653L220.611 312.227L227.843 303.312L226.468 301.738Z" fill="black"/>\r
<path d="M220.627 301.781L219.255 303.36L226.506 312.253L227.878 310.675L220.627 301.781Z" fill="black"/>\r
<path d="M216.018 301.751L208.786 310.666L210.161 312.24L217.393 303.325L216.018 301.751Z" fill="black"/>\r
<path d="M210.199 301.768L208.827 303.346L216.079 312.239L217.451 310.661L210.199 301.768Z" fill="black"/>\r
<path d="M748.437 284.032L741.204 292.946L742.579 294.52L749.812 285.606L748.437 284.032Z" fill="black"/>\r
<path d="M742.583 284.036L741.211 285.614L748.463 294.508L749.835 292.929L742.583 284.036Z" fill="black"/>\r
<path d="M737.986 284.045L730.754 292.959L732.129 294.533L739.361 285.619L737.986 284.045Z" fill="black"/>\r
<path d="M732.155 284.022L730.783 285.601L738.035 294.494L739.407 292.916L732.155 284.022Z" fill="black"/>\r
<path d="M727.558 284.03L720.326 292.945L721.701 294.519L728.933 285.604L727.558 284.03Z" fill="black"/>\r
<path d="M721.705 284.035L720.333 285.614L727.584 294.507L728.956 292.929L721.705 284.035Z" fill="black"/>\r
<path d="M717.108 284.044L709.876 292.958L711.251 294.532L718.483 285.618L717.108 284.044Z" fill="black"/>\r
<path d="M711.277 284.022L709.905 285.6L717.156 294.493L718.528 292.915L711.277 284.022Z" fill="black"/>\r
<path d="M706.681 284.03L699.448 292.944L700.823 294.518L708.056 285.604L706.681 284.03Z" fill="black"/>\r
<path d="M700.826 284.035L699.454 285.613L706.706 294.507L708.078 292.928L700.826 284.035Z" fill="black"/>\r
<path d="M560.534 284.022L553.301 292.937L554.676 294.511L561.909 285.596L560.534 284.022Z" fill="black"/>\r
<path d="M554.676 284.031L553.304 285.609L560.556 294.502L561.928 292.924L554.676 284.031Z" fill="black"/>\r
<path d="M518.778 284.02L511.545 292.934L512.92 294.508L520.153 285.594L518.778 284.02Z" fill="black"/>\r
<path d="M512.919 284.029L511.547 285.608L518.799 294.501L520.171 292.923L512.919 284.029Z" fill="black"/>\r
<path d="M508.328 284.033L501.095 292.948L502.47 294.522L509.703 285.608L508.328 284.033Z" fill="black"/>\r
<path d="M502.491 284.016L501.119 285.594L508.371 294.487L509.743 292.909L502.491 284.016Z" fill="black"/>\r
<path d="M435.266 284.016L428.033 292.93L429.408 294.504L436.641 285.59L435.266 284.016Z" fill="black"/>\r
<path d="M429.405 284.027L428.033 285.605L435.284 294.499L436.656 292.92L429.405 284.027Z" fill="black"/>\r
<path d="M424.815 284.029L417.582 292.944L418.957 294.518L426.19 285.603L424.815 284.029Z" fill="black"/>\r
<path d="M418.978 284.013L417.606 285.592L424.857 294.485L426.229 292.907L418.978 284.013Z" fill="black"/>\r
<path d="M414.387 284.015L407.155 292.929L408.53 294.503L415.762 285.589L414.387 284.015Z" fill="black"/>\r
<path d="M408.526 284.027L407.155 285.605L414.406 294.498L415.778 292.92L408.526 284.027Z" fill="black"/>\r
<path d="M403.937 284.028L396.705 292.942L398.08 294.517L405.312 285.602L403.937 284.028Z" fill="black"/>\r
<path d="M398.099 284.013L396.727 285.591L403.979 294.484L405.351 292.906L398.099 284.013Z" fill="black"/>\r
<path d="M268.241 284.007L261.008 292.922L262.383 294.496L269.616 285.581L268.241 284.007Z" fill="black"/>\r
<path d="M262.377 284.022L261.005 285.6L268.256 294.494L269.628 292.915L262.377 284.022Z" fill="black"/>\r
<path d="M257.79 284.021L250.558 292.935L251.933 294.509L259.165 285.595L257.79 284.021Z" fill="black"/>\r
<path d="M251.949 284.008L250.577 285.587L257.829 294.48L259.2 292.902L251.949 284.008Z" fill="black"/>\r
<path d="M247.363 284.006L240.13 292.92L241.505 294.495L248.738 285.58L247.363 284.006Z" fill="black"/>\r
<path d="M241.498 284.022L240.126 285.6L247.378 294.493L248.75 292.915L241.498 284.022Z" fill="black"/>\r
<path d="M236.912 284.02L229.68 292.934L231.055 294.508L238.287 285.594L236.912 284.02Z" fill="black"/>\r
<path d="M231.07 284.008L229.698 285.586L236.95 294.48L238.322 292.901L231.07 284.008Z" fill="black"/>\r
<path d="M226.484 284.005L219.252 292.92L220.627 294.494L227.859 285.579L226.484 284.005Z" fill="black"/>\r
<path d="M220.62 284.021L219.248 285.599L226.5 294.493L227.872 292.914L220.62 284.021Z" fill="black"/>\r
<path d="M758.858 266.287L751.625 275.201L753 276.775L760.233 267.861L758.858 266.287Z" fill="black"/>\r
<path d="M753.027 266.263L751.655 267.841L758.906 276.734L760.278 275.156L753.027 266.263Z" fill="black"/>\r
<path d="M748.43 266.272L741.197 275.186L742.572 276.761L749.805 267.846L748.43 266.272Z" fill="black"/>\r
<path d="M742.576 266.276L741.204 267.854L748.456 276.748L749.828 275.169L742.576 266.276Z" fill="black"/>\r
<path d="M737.98 266.285L730.747 275.2L732.122 276.774L739.355 267.86L737.98 266.285Z" fill="black"/>\r
<path d="M732.148 266.262L730.777 267.841L738.028 276.734L739.4 275.156L732.148 266.262Z" fill="black"/>\r
<path d="M727.551 266.271L720.319 275.185L721.694 276.759L728.926 267.845L727.551 266.271Z" fill="black"/>\r
<path d="M721.698 266.275L720.326 267.853L727.577 276.747L728.949 275.168L721.698 266.275Z" fill="black"/>\r
<path d="M497.893 266.259L490.66 275.174L492.035 276.748L499.268 267.833L497.893 266.259Z" fill="black"/>\r
<path d="M492.033 266.269L490.662 267.847L497.913 276.74L499.285 275.162L492.033 266.269Z" fill="black"/>\r
<path d="M487.443 266.273L480.21 275.187L481.585 276.761L488.818 267.847L487.443 266.273Z" fill="black"/>\r
<path d="M481.605 266.255L480.234 267.833L487.485 276.726L488.857 275.148L481.605 266.255Z" fill="black"/>\r
<path d="M456.136 266.257L448.904 275.172L450.279 276.746L457.511 267.831L456.136 266.257Z" fill="black"/>\r
<path d="M450.276 266.268L448.905 267.846L456.156 276.739L457.528 275.161L450.276 266.268Z" fill="black"/>\r
<path d="M445.686 266.27L438.454 275.185L439.829 276.759L447.062 267.845L445.686 266.27Z" fill="black"/>\r
<path d="M439.848 266.254L438.477 267.832L445.728 276.725L447.1 275.147L439.848 266.254Z" fill="black"/>\r
<path d="M435.259 266.256L428.026 275.171L429.401 276.745L436.634 267.83L435.259 266.256Z" fill="black"/>\r
<path d="M429.398 266.267L428.026 267.845L435.277 276.738L436.649 275.16L429.398 266.267Z" fill="black"/>\r
<path d="M424.808 266.27L417.575 275.184L418.95 276.758L426.183 267.844L424.808 266.27Z" fill="black"/>\r
<path d="M418.97 266.253L417.598 267.831L424.85 276.725L426.221 275.146L418.97 266.253Z" fill="black"/>\r
<path d="M278.661 266.262L271.428 275.176L272.804 276.75L280.036 267.836L278.661 266.262Z" fill="black"/>\r
<path d="M272.821 266.249L271.449 267.827L278.7 276.721L280.072 275.142L272.821 266.249Z" fill="black"/>\r
<path d="M268.234 266.248L261.001 275.162L262.376 276.736L269.609 267.822L268.234 266.248Z" fill="black"/>\r
<path d="M262.37 266.262L260.998 267.84L268.249 276.734L269.621 275.155L262.37 266.262Z" fill="black"/>\r
<path d="M257.783 266.261L250.551 275.176L251.926 276.75L259.158 267.835L257.783 266.261Z" fill="black"/>\r
<path d="M251.942 266.248L250.57 267.826L257.822 276.72L259.194 275.141L251.942 266.248Z" fill="black"/>\r
<path d="M247.355 266.247L240.123 275.161L241.498 276.735L248.731 267.821L247.355 266.247Z" fill="black"/>\r
<path d="M241.491 266.261L240.119 267.839L247.371 276.733L248.742 275.155L241.491 266.261Z" fill="black"/>\r
<path d="M236.905 266.26L229.672 275.174L231.047 276.749L238.28 267.834L236.905 266.26Z" fill="black"/>\r
<path d="M231.064 266.248L229.692 267.826L236.943 276.719L238.315 275.141L231.064 266.248Z" fill="black"/>\r
<path d="M758.851 248.527L751.618 257.441L752.993 259.016L760.226 250.101L758.851 248.527Z" fill="black"/>\r
<path d="M753.043 248.53L751.671 250.108L758.922 259.002L760.294 257.423L753.043 248.53Z" fill="black"/>\r
<path d="M748.423 248.512L741.19 257.427L742.565 259.001L749.798 250.087L748.423 248.512Z" fill="black"/>\r
<path d="M742.591 248.543L741.219 250.121L748.471 259.015L749.843 257.437L742.591 248.543Z" fill="black"/>\r
<path d="M737.972 248.526L730.739 257.44L732.114 259.014L739.347 250.1L737.972 248.526Z" fill="black"/>\r
<path d="M732.163 248.53L730.792 250.108L738.043 259.001L739.415 257.423L732.163 248.53Z" fill="black"/>\r
<path d="M727.544 248.511L720.312 257.426L721.687 259L728.919 250.085L727.544 248.511Z" fill="black"/>\r
<path d="M721.713 248.543L720.341 250.121L727.592 259.014L728.964 257.436L721.713 248.543Z" fill="black"/>\r
<path d="M487.436 248.513L480.203 257.428L481.578 259.002L488.811 250.087L487.436 248.513Z" fill="black"/>\r
<path d="M481.621 248.522L480.25 250.1L487.501 258.994L488.873 257.415L481.621 248.522Z" fill="black"/>\r
<path d="M477.007 248.499L469.774 257.413L471.149 258.987L478.382 250.073L477.007 248.499Z" fill="black"/>\r
<path d="M471.171 248.535L469.799 250.114L477.05 259.007L478.422 257.429L471.171 248.535Z" fill="black"/>\r
<path d="M466.557 248.512L459.324 257.426L460.7 259.001L467.932 250.086L466.557 248.512Z" fill="black"/>\r
<path d="M460.743 248.522L459.371 250.1L466.622 258.993L467.994 257.415L460.743 248.522Z" fill="black"/>\r
<path d="M456.129 248.497L448.896 257.412L450.272 258.986L457.504 250.072L456.129 248.497Z" fill="black"/>\r
<path d="M450.292 248.535L448.92 250.113L456.172 259.006L457.543 257.428L450.292 248.535Z" fill="black"/>\r
<path d="M445.678 248.511L438.446 257.425L439.821 258.999L447.054 250.085L445.678 248.511Z" fill="black"/>\r
<path d="M439.864 248.521L438.492 250.099L445.744 258.993L447.116 257.414L439.864 248.521Z" fill="black"/>\r
<path d="M289.104 248.489L281.872 257.403L283.247 258.977L290.479 250.063L289.104 248.489Z" fill="black"/>\r
<path d="M283.264 248.53L281.892 250.108L289.143 259.001L290.515 257.423L283.264 248.53Z" fill="black"/>\r
<path d="M278.654 248.502L271.421 257.417L272.796 258.991L280.029 250.077L278.654 248.502Z" fill="black"/>\r
<path d="M272.836 248.516L271.464 250.094L278.715 258.988L280.087 257.409L272.836 248.516Z" fill="black"/>\r
<path d="M268.227 248.488L260.994 257.403L262.369 258.977L269.602 250.062L268.227 248.488Z" fill="black"/>\r
<path d="M262.385 248.529L261.013 250.108L268.265 259.001L269.636 257.423L262.385 248.529Z" fill="black"/>\r
<path d="M257.776 248.501L250.543 257.416L251.919 258.99L259.151 250.075L257.776 248.501Z" fill="black"/>\r
<path d="M251.957 248.516L250.585 250.094L257.837 258.987L259.209 257.409L251.957 248.516Z" fill="black"/>\r
<path d="M247.348 248.487L240.116 257.401L241.491 258.976L248.723 250.061L247.348 248.487Z" fill="black"/>\r
<path d="M241.507 248.529L240.135 250.107L247.386 259L248.758 257.422L241.507 248.529Z" fill="black"/>\r
<path d="M779.745 230.795L772.512 239.709L773.887 241.283L781.12 232.369L779.745 230.795Z" fill="black"/>\r
<path d="M773.913 230.77L772.542 232.348L779.793 241.242L781.165 239.663L773.913 230.77Z" fill="black"/>\r
<path d="M769.317 230.78L762.084 239.695L763.46 241.269L770.692 232.355L769.317 230.78Z" fill="black"/>\r
<path d="M763.463 230.784L762.091 232.362L769.342 241.255L770.714 239.677L763.463 230.784Z" fill="black"/>\r
<path d="M758.867 230.794L751.635 239.708L753.01 241.282L760.242 232.368L758.867 230.794Z" fill="black"/>\r
<path d="M753.035 230.77L751.663 232.348L758.914 241.241L760.286 239.663L753.035 230.77Z" fill="black"/>\r
<path d="M748.438 230.78L741.206 239.694L742.581 241.268L749.814 232.354L748.438 230.78Z" fill="black"/>\r
<path d="M742.584 230.783L741.212 232.361L748.464 241.254L749.835 239.676L742.584 230.783Z" fill="black"/>\r
<path d="M737.989 230.793L730.756 239.707L732.131 241.281L739.364 232.367L737.989 230.793Z" fill="black"/>\r
<path d="M732.156 230.769L730.784 232.347L738.036 241.241L739.408 239.662L732.156 230.769Z" fill="black"/>\r
<path d="M487.451 230.78L480.219 239.694L481.594 241.269L488.826 232.354L487.451 230.78Z" fill="black"/>\r
<path d="M481.614 230.762L480.242 232.34L487.494 241.233L488.866 239.655L481.614 230.762Z" fill="black"/>\r
<path d="M477.024 230.766L469.791 239.68L471.166 241.254L478.399 232.34L477.024 230.766Z" fill="black"/>\r
<path d="M471.163 230.775L469.791 232.353L477.042 241.246L478.414 239.668L471.163 230.775Z" fill="black"/>\r
<path d="M466.574 230.779L459.341 239.694L460.716 241.268L467.949 232.353L466.574 230.779Z" fill="black"/>\r
<path d="M460.736 230.761L459.364 232.34L466.615 241.233L467.987 239.655L460.736 230.761Z" fill="black"/>\r
<path d="M456.145 230.765L448.912 239.679L450.287 241.253L457.52 232.339L456.145 230.765Z" fill="black"/>\r
<path d="M450.284 230.774L448.912 232.353L456.164 241.246L457.536 239.668L450.284 230.774Z" fill="black"/>\r
<path d="M299.548 230.771L292.316 239.685L293.691 241.259L300.923 232.345L299.548 230.771Z" fill="black"/>\r
<path d="M293.707 230.757L292.335 232.335L299.587 241.228L300.959 239.65L293.707 230.757Z" fill="black"/>\r
<path d="M289.121 230.756L281.888 239.67L283.263 241.245L290.496 232.33L289.121 230.756Z" fill="black"/>\r
<path d="M283.257 230.77L281.885 232.348L289.136 241.241L290.508 239.663L283.257 230.77Z" fill="black"/>\r
<path d="M278.67 230.77L271.438 239.684L272.813 241.258L280.045 232.344L278.67 230.77Z" fill="black"/>\r
<path d="M272.829 230.756L271.457 232.334L278.708 241.227L280.08 239.649L272.829 230.756Z" fill="black"/>\r
<path d="M268.243 230.755L261.01 239.669L262.385 241.243L269.618 232.329L268.243 230.755Z" fill="black"/>\r
<path d="M262.378 230.769L261.006 232.347L268.257 241.24L269.629 239.662L262.378 230.769Z" fill="black"/>\r
<path d="M257.792 230.768L250.56 239.683L251.935 241.257L259.168 232.343L257.792 230.768Z" fill="black"/>\r
<path d="M251.95 230.755L250.578 232.334L257.83 241.227L259.202 239.649L251.95 230.755Z" fill="black"/>\r
<path d="M216.036 230.767L208.803 239.681L210.179 241.255L217.411 232.341L216.036 230.767Z" fill="black"/>\r
<path d="M210.193 230.754L208.821 232.332L216.072 241.226L217.444 239.647L210.193 230.754Z" fill="black"/>\r
<path d="M205.608 230.752L198.375 239.666L199.751 241.24L206.983 232.326L205.608 230.752Z" fill="black"/>\r
<path d="M199.742 230.767L198.37 232.346L205.622 241.239L206.994 239.661L199.742 230.767Z" fill="black"/>\r
<path d="M195.158 230.765L187.925 239.68L189.3 241.254L196.533 232.34L195.158 230.765Z" fill="black"/>\r
<path d="M189.315 230.753L187.943 232.332L195.194 241.225L196.566 239.647L189.315 230.753Z" fill="black"/>\r
<path d="M153.402 230.763L146.169 239.677L147.544 241.252L154.777 232.337L153.402 230.763Z" fill="black"/>\r
<path d="M147.558 230.752L146.186 232.331L153.437 241.224L154.809 239.646L147.558 230.752Z" fill="black"/>\r
<path d="M142.974 230.749L135.741 239.663L137.116 241.237L144.349 232.323L142.974 230.749Z" fill="black"/>\r
<path d="M137.106 230.765L135.735 232.344L142.986 241.237L144.358 239.659L137.106 230.765Z" fill="black"/>\r
<path d="M790.188 213.022L782.955 221.936L784.33 223.51L791.563 214.596L790.188 213.022Z" fill="black"/>\r
<path d="M784.334 213.024L782.962 214.602L790.214 223.495L791.585 221.917L784.334 213.024Z" fill="black"/>\r
<path d="M779.738 213.035L772.505 221.949L773.88 223.524L781.113 214.609L779.738 213.035Z" fill="black"/>\r
<path d="M773.906 213.01L772.534 214.588L779.786 223.482L781.158 221.903L773.906 213.01Z" fill="black"/>\r
<path d="M769.31 213.021L762.077 221.935L763.452 223.509L770.685 214.595L769.31 213.021Z" fill="black"/>\r
<path d="M763.456 213.023L762.084 214.602L769.335 223.495L770.707 221.917L763.456 213.023Z" fill="black"/>\r
<path d="M758.859 213.034L751.627 221.949L753.002 223.523L760.234 214.608L758.859 213.034Z" fill="black"/>\r
<path d="M753.028 213.01L751.656 214.588L758.907 223.481L760.279 221.903L753.028 213.01Z" fill="black"/>\r
<path d="M748.431 213.02L741.199 221.934L742.574 223.508L749.806 214.594L748.431 213.02Z" fill="black"/>\r
<path d="M742.577 213.022L741.205 214.601L748.456 223.494L749.828 221.916L742.577 213.022Z" fill="black"/>\r
<path d="M508.322 213.022L501.089 221.936L502.464 223.51L509.697 214.596L508.322 213.022Z" fill="black"/>\r
<path d="M502.486 213.002L501.114 214.581L508.365 223.474L509.737 221.896L502.486 213.002Z" fill="black"/>\r
<path d="M497.894 213.007L490.662 221.922L492.037 223.496L499.269 214.582L497.894 213.007Z" fill="black"/>\r
<path d="M492.035 213.015L490.663 214.594L497.914 223.487L499.286 221.909L492.035 213.015Z" fill="black"/>\r
<path d="M487.444 213.021L480.212 221.935L481.587 223.509L488.819 214.595L487.444 213.021Z" fill="black"/>\r
<path d="M481.607 213.002L480.235 214.58L487.487 223.473L488.859 221.895L481.607 213.002Z" fill="black"/>\r
<path d="M477.016 213.006L469.784 221.921L471.159 223.495L478.391 214.58L477.016 213.006Z" fill="black"/>\r
<path d="M471.156 213.015L469.785 214.593L477.036 223.486L478.408 221.908L471.156 213.015Z" fill="black"/>\r
<path d="M299.541 213.011L292.309 221.925L293.684 223.499L300.916 214.585L299.541 213.011Z" fill="black"/>\r
<path d="M293.7 212.996L292.328 214.575L299.58 223.468L300.952 221.89L293.7 212.996Z" fill="black"/>\r
<path d="M289.113 212.997L281.881 221.911L283.256 223.485L290.488 214.571L289.113 212.997Z" fill="black"/>\r
<path d="M283.25 213.009L281.878 214.588L289.129 223.481L290.501 221.903L283.25 213.009Z" fill="black"/>\r
<path d="M278.663 213.01L271.43 221.924L272.805 223.499L280.038 214.584L278.663 213.01Z" fill="black"/>\r
<path d="M272.822 212.996L271.45 214.574L278.701 223.467L280.073 221.889L272.822 212.996Z" fill="black"/>\r
<path d="M268.236 212.996L261.003 221.91L262.378 223.484L269.611 214.57L268.236 212.996Z" fill="black"/>\r
<path d="M262.371 213.009L260.999 214.587L268.25 223.48L269.622 221.902L262.371 213.009Z" fill="black"/>\r
<path d="M247.357 212.994L240.125 221.909L241.5 223.483L248.732 214.569L247.357 212.994Z" fill="black"/>\r
<path d="M241.492 213.008L240.12 214.586L247.372 223.48L248.744 221.901L241.492 213.008Z" fill="black"/>\r
<path d="M236.907 213.008L229.675 221.922L231.05 223.496L238.282 214.582L236.907 213.008Z" fill="black"/>\r
<path d="M231.064 212.994L229.693 214.573L236.944 223.466L238.316 221.888L231.064 212.994Z" fill="black"/>\r
<path d="M153.395 213.004L146.162 221.918L147.537 223.492L154.77 214.578L153.395 213.004Z" fill="black"/>\r
<path d="M147.55 212.992L146.178 214.57L153.43 223.463L154.802 221.885L147.55 212.992Z" fill="black"/>\r
<path d="M142.967 212.989L135.734 221.904L137.109 223.478L144.342 214.564L142.967 212.989Z" fill="black"/>\r
<path d="M137.099 213.005L135.728 214.583L142.979 223.477L144.351 221.898L137.099 213.005Z" fill="black"/>\r
<path d="M800.608 195.277L793.376 204.191L794.751 205.765L801.983 196.851L800.608 195.277Z" fill="black"/>\r
<path d="M794.801 195.278L793.429 196.856L800.68 205.749L802.052 204.171L794.801 195.278Z" fill="black"/>\r
<path d="M790.181 195.262L782.948 204.177L784.323 205.751L791.556 196.837L790.181 195.262Z" fill="black"/>\r
<path d="M784.349 195.291L782.977 196.869L790.229 205.762L791.601 204.184L784.349 195.291Z" fill="black"/>\r
<path d="M779.731 195.276L772.498 204.19L773.873 205.764L781.106 196.85L779.731 195.276Z" fill="black"/>\r
<path d="M773.922 195.277L772.55 196.856L779.801 205.749L781.173 204.171L773.922 195.277Z" fill="black"/>\r
<path d="M769.303 195.261L762.07 204.176L763.445 205.75L770.678 196.836L769.303 195.261Z" fill="black"/>\r
<path d="M763.471 195.291L762.099 196.869L769.351 205.762L770.723 204.184L763.471 195.291Z" fill="black"/>\r
<path d="M518.766 195.249L511.533 204.163L512.908 205.737L520.141 196.823L518.766 195.249Z" fill="black"/>\r
<path d="M512.928 195.283L511.557 196.861L518.808 205.755L520.18 204.176L512.928 195.283Z" fill="black"/>\r
<path d="M508.315 195.262L501.082 204.176L502.457 205.751L509.69 196.836L508.315 195.262Z" fill="black"/>\r
<path d="M502.501 195.269L501.129 196.848L508.38 205.741L509.752 204.163L502.501 195.269Z" fill="black"/>\r
<path d="M497.887 195.247L490.655 204.162L492.03 205.736L499.262 196.822L497.887 195.247Z" fill="black"/>\r
<path d="M492.05 195.283L490.678 196.861L497.93 205.754L499.301 204.176L492.05 195.283Z" fill="black"/>\r
<path d="M477.009 195.246L469.777 204.161L471.152 205.735L478.384 196.821L477.009 195.246Z" fill="black"/>\r
<path d="M471.171 195.282L469.8 196.86L477.051 205.754L478.423 204.175L471.171 195.282Z" fill="black"/>\r
<path d="M309.985 195.238L302.752 204.152L304.127 205.726L311.36 196.812L309.985 195.238Z" fill="black"/>\r
<path d="M304.143 195.277L302.771 196.855L310.023 205.749L311.395 204.17L304.143 195.277Z" fill="black"/>\r
<path d="M299.534 195.251L292.302 204.166L293.677 205.74L300.909 196.826L299.534 195.251Z" fill="black"/>\r
<path d="M293.716 195.264L292.344 196.842L299.595 205.735L300.967 204.157L293.716 195.264Z" fill="black"/>\r
<path d="M289.106 195.237L281.874 204.151L283.249 205.726L290.481 196.811L289.106 195.237Z" fill="black"/>\r
<path d="M283.264 195.277L281.893 196.855L289.144 205.748L290.516 204.17L283.264 195.277Z" fill="black"/>\r
<path d="M278.656 195.25L271.423 204.164L272.798 205.739L280.031 196.824L278.656 195.25Z" fill="black"/>\r
<path d="M272.837 195.263L271.465 196.841L278.716 205.735L280.088 204.156L272.837 195.263Z" fill="black"/>\r
<path d="M268.228 195.236L260.996 204.15L262.371 205.724L269.604 196.81L268.228 195.236Z" fill="black"/>\r
<path d="M262.386 195.276L261.014 196.854L268.265 205.748L269.637 204.169L262.386 195.276Z" fill="black"/>\r
<path d="M174.266 195.245L167.033 204.159L168.408 205.734L175.641 196.819L174.266 195.245Z" fill="black"/>\r
<path d="M168.444 195.26L167.072 196.838L174.324 205.732L175.696 204.153L168.444 195.26Z" fill="black"/>\r
<path d="M163.838 195.231L156.605 204.145L157.981 205.719L165.213 196.805L163.838 195.231Z" fill="black"/>\r
<path d="M157.993 195.273L156.622 196.851L163.873 205.745L165.245 204.166L157.993 195.273Z" fill="black"/>\r
<path d="M153.387 195.244L146.155 204.158L147.53 205.733L154.762 196.818L153.387 195.244Z" fill="black"/>\r
<path d="M147.566 195.26L146.194 196.838L153.445 205.731L154.817 204.153L147.566 195.26Z" fill="black"/>\r
<path d="M142.959 195.229L135.727 204.144L137.102 205.718L144.335 196.804L142.959 195.229Z" fill="black"/>\r
<path d="M137.115 195.272L135.743 196.85L142.994 205.744L144.366 204.166L137.115 195.272Z" fill="black"/>\r
<path d="M811.075 177.53L803.843 186.445L805.218 188.019L812.45 179.105L811.075 177.53Z" fill="black"/>\r
<path d="M805.221 177.532L803.849 179.11L811.101 188.003L812.473 186.425L805.221 177.532Z" fill="black"/>\r
<path d="M800.624 177.544L793.392 186.458L794.767 188.032L801.999 179.118L800.624 177.544Z" fill="black"/>\r
<path d="M794.793 177.518L793.422 179.096L800.673 187.989L802.045 186.411L794.793 177.518Z" fill="black"/>\r
<path d="M790.197 177.53L782.965 186.444L784.34 188.018L791.572 179.104L790.197 177.53Z" fill="black"/>\r
<path d="M784.342 177.531L782.97 179.109L790.221 188.003L791.593 186.424L784.342 177.531Z" fill="black"/>\r
<path d="M779.747 177.543L772.514 186.457L773.889 188.031L781.122 179.117L779.747 177.543Z" fill="black"/>\r
<path d="M773.915 177.517L772.543 179.095L779.795 187.989L781.166 186.41L773.915 177.517Z" fill="black"/>\r
<path d="M769.319 177.528L762.086 186.443L763.461 188.017L770.694 179.103L769.319 177.528Z" fill="black"/>\r
<path d="M763.463 177.53L762.092 179.108L769.343 188.002L770.715 186.423L763.463 177.53Z" fill="black"/>\r
<path d="M539.659 177.517L532.427 186.431L533.802 188.005L541.034 179.091L539.659 177.517Z" fill="black"/>\r
<path d="M533.8 177.524L532.428 179.102L539.68 187.995L541.051 186.417L533.8 177.524Z" fill="black"/>\r
<path d="M529.209 177.53L521.977 186.444L523.352 188.018L530.584 179.104L529.209 177.53Z" fill="black"/>\r
<path d="M523.372 177.51L522 179.088L529.252 187.982L530.623 186.403L523.372 177.51Z" fill="black"/>\r
<path d="M518.781 177.516L511.549 186.43L512.924 188.004L520.157 179.09L518.781 177.516Z" fill="black"/>\r
<path d="M512.921 177.523L511.55 179.101L518.801 187.994L520.173 186.416L512.921 177.523Z" fill="black"/>\r
<path d="M508.332 177.529L501.099 186.443L502.474 188.017L509.707 179.103L508.332 177.529Z" fill="black"/>\r
<path d="M502.494 177.509L501.122 179.087L508.373 187.981L509.745 186.402L502.494 177.509Z" fill="black"/>\r
<path d="M477.025 177.514L469.792 186.428L471.168 188.002L478.4 179.088L477.025 177.514Z" fill="black"/>\r
<path d="M471.164 177.522L469.792 179.1L477.044 187.993L478.416 186.415L471.164 177.522Z" fill="black"/>\r
<path d="M320.428 177.52L313.196 186.434L314.571 188.008L321.804 179.094L320.428 177.52Z" fill="black"/>\r
<path d="M314.587 177.504L313.215 179.082L320.466 187.975L321.838 186.397L314.587 177.504Z" fill="black"/>\r
<path d="M310.001 177.505L302.768 186.419L304.143 187.994L311.376 179.079L310.001 177.505Z" fill="black"/>\r
<path d="M304.136 177.517L302.764 179.095L310.016 187.988L311.388 186.41L304.136 177.517Z" fill="black"/>\r
<path d="M299.55 177.518L292.318 186.433L293.693 188.007L300.925 179.093L299.55 177.518Z" fill="black"/>\r
<path d="M293.708 177.503L292.337 179.081L299.588 187.975L300.96 186.396L293.708 177.503Z" fill="black"/>\r
<path d="M289.123 177.504L281.89 186.418L283.265 187.992L290.498 179.078L289.123 177.504Z" fill="black"/>\r
<path d="M283.258 177.516L281.886 179.094L289.137 187.988L290.509 186.41L283.258 177.516Z" fill="black"/>\r
<path d="M184.732 177.499L177.499 186.413L178.874 187.987L186.107 179.073L184.732 177.499Z" fill="black"/>\r
<path d="M178.865 177.513L177.493 179.092L184.745 187.985L186.116 186.407L178.865 177.513Z" fill="black"/>\r
<path d="M174.282 177.512L167.049 186.426L168.424 188L175.657 179.086L174.282 177.512Z" fill="black"/>\r
<path d="M168.438 177.5L167.066 179.078L174.317 187.971L175.689 186.393L168.438 177.5Z" fill="black"/>\r
<path d="M163.854 177.498L156.621 186.412L157.996 187.986L165.229 179.072L163.854 177.498Z" fill="black"/>\r
<path d="M157.986 177.513L156.615 179.091L163.866 187.984L165.238 186.406L157.986 177.513Z" fill="black"/>\r
<path d="M153.404 177.511L146.171 186.426L147.546 188L154.779 179.085L153.404 177.511Z" fill="black"/>\r
<path d="M147.559 177.499L146.187 179.077L153.438 187.971L154.81 186.392L147.559 177.499Z" fill="black"/>\r
<path d="M821.496 159.785L814.263 168.699L815.638 170.274L822.871 161.359L821.496 159.785Z" fill="black"/>\r
<path d="M815.665 159.758L814.293 161.336L821.545 170.23L822.916 168.651L815.665 159.758Z" fill="black"/>\r
<path d="M811.068 159.771L803.835 168.685L805.21 170.259L812.443 161.345L811.068 159.771Z" fill="black"/>\r
<path d="M805.214 159.771L803.843 161.349L811.094 170.243L812.466 168.664L805.214 159.771Z" fill="black"/>\r
<path d="M800.617 159.784L793.385 168.698L794.76 170.272L801.992 161.358L800.617 159.784Z" fill="black"/>\r
<path d="M794.786 159.758L793.414 161.336L800.665 170.229L802.037 168.651L794.786 159.758Z" fill="black"/>\r
<path d="M790.19 159.77L782.958 168.684L784.333 170.258L791.565 161.344L790.19 159.77Z" fill="black"/>\r
<path d="M784.335 159.771L782.964 161.349L790.215 170.242L791.587 168.664L784.335 159.771Z" fill="black"/>\r
<path d="M779.739 159.783L772.507 168.698L773.882 170.272L781.115 161.357L779.739 159.783Z" fill="black"/>\r
<path d="M773.908 159.757L772.536 161.335L779.787 170.228L781.159 168.65L773.908 159.757Z" fill="black"/>\r
<path d="M550.08 159.772L542.847 168.686L544.222 170.26L551.455 161.346L550.08 159.772Z" fill="black"/>\r
<path d="M544.244 159.75L542.872 161.328L550.123 170.222L551.495 168.643L544.244 159.75Z" fill="black"/>\r
<path d="M539.652 159.757L532.419 168.671L533.795 170.246L541.027 161.331L539.652 159.757Z" fill="black"/>\r
<path d="M533.793 159.763L532.421 161.342L539.673 170.235L541.044 168.657L533.793 159.763Z" fill="black"/>\r
<path d="M529.202 159.77L521.969 168.685L523.345 170.259L530.577 161.345L529.202 159.77Z" fill="black"/>\r
<path d="M523.365 159.75L521.993 161.328L529.245 170.221L530.617 168.643L523.365 159.75Z" fill="black"/>\r
<path d="M477.018 159.754L469.785 168.668L471.16 170.242L478.393 161.328L477.018 159.754Z" fill="black"/>\r
<path d="M471.157 159.761L469.785 161.34L477.037 170.233L478.409 168.655L471.157 159.761Z" fill="black"/>\r
<path d="M330.871 159.747L323.639 168.661L325.014 170.235L332.246 161.321L330.871 159.747Z" fill="black"/>\r
<path d="M325.007 159.757L323.635 161.336L330.887 170.229L332.259 168.651L325.007 159.757Z" fill="black"/>\r
<path d="M320.421 159.76L313.189 168.674L314.564 170.248L321.796 161.334L320.421 159.76Z" fill="black"/>\r
<path d="M314.58 159.744L313.208 161.322L320.46 170.215L321.832 168.637L314.58 159.744Z" fill="black"/>\r
<path d="M309.993 159.746L302.761 168.66L304.136 170.234L311.368 161.32L309.993 159.746Z" fill="black"/>\r
<path d="M304.129 159.757L302.757 161.335L310.008 170.228L311.38 168.65L304.129 159.757Z" fill="black"/>\r
<path d="M195.153 159.754L187.92 168.668L189.295 170.242L196.528 161.328L195.153 159.754Z" fill="black"/>\r
<path d="M189.309 159.74L187.937 161.318L195.188 170.211L196.56 168.633L189.309 159.74Z" fill="black"/>\r
<path d="M184.725 159.739L177.492 168.653L178.867 170.227L186.1 161.313L184.725 159.739Z" fill="black"/>\r
<path d="M178.857 159.753L177.486 161.331L184.737 170.224L186.109 168.646L178.857 159.753Z" fill="black"/>\r
<path d="M174.275 159.752L167.042 168.667L168.417 170.241L175.65 161.327L174.275 159.752Z" fill="black"/>\r
<path d="M168.43 159.739L167.058 161.318L174.31 170.211L175.681 168.633L168.43 159.739Z" fill="black"/>\r
<path d="M163.847 159.738L156.614 168.653L157.989 170.227L165.222 161.312L163.847 159.738Z" fill="black"/>\r
<path d="M157.979 159.752L156.607 161.331L163.859 170.224L165.231 168.646L157.979 159.752Z" fill="black"/>\r
<path d="M831.938 142.012L824.706 150.926L826.081 152.501L833.314 143.586L831.938 142.012Z" fill="black"/>\r
<path d="M826.108 142.039L824.736 143.617L831.987 152.51L833.359 150.932L826.108 142.039Z" fill="black"/>\r
<path d="M821.489 142.026L814.256 150.94L815.631 152.514L822.864 143.6L821.489 142.026Z" fill="black"/>\r
<path d="M815.68 142.025L814.308 143.603L821.56 152.497L822.931 150.919L815.68 142.025Z" fill="black"/>\r
<path d="M811.061 142.011L803.828 150.926L805.203 152.5L812.436 143.586L811.061 142.011Z" fill="black"/>\r
<path d="M805.229 142.038L803.857 143.617L811.109 152.51L812.481 150.932L805.229 142.038Z" fill="black"/>\r
<path d="M800.61 142.025L793.377 150.939L794.753 152.513L801.985 143.599L800.61 142.025Z" fill="black"/>\r
<path d="M794.801 142.025L793.429 143.603L800.681 152.496L802.053 150.918L794.801 142.025Z" fill="black"/>\r
<path d="M560.524 141.999L553.291 150.913L554.666 152.487L561.899 143.573L560.524 141.999Z" fill="black"/>\r
<path d="M554.687 142.031L553.315 143.61L560.566 152.503L561.938 150.925L554.687 142.031Z" fill="black"/>\r
<path d="M550.074 142.012L542.841 150.927L544.216 152.501L551.449 143.586L550.074 142.012Z" fill="black"/>\r
<path d="M544.26 142.018L542.888 143.596L550.139 152.489L551.511 150.911L544.26 142.018Z" fill="black"/>\r
<path d="M539.645 141.998L532.412 150.912L533.787 152.486L541.02 143.572L539.645 141.998Z" fill="black"/>\r
<path d="M533.808 142.031L532.436 143.609L539.687 152.502L541.059 150.924L533.808 142.031Z" fill="black"/>\r
<path d="M487.439 142.009L480.206 150.923L481.581 152.497L488.814 143.583L487.439 142.009Z" fill="black"/>\r
<path d="M481.623 142.016L480.251 143.594L487.503 152.487L488.874 150.909L481.623 142.016Z" fill="black"/>\r
<path d="M477.011 141.995L469.778 150.909L471.153 152.483L478.386 143.569L477.011 141.995Z" fill="black"/>\r
<path d="M471.173 142.029L469.801 143.607L477.053 152.5L478.425 150.922L471.173 142.029Z" fill="black"/>\r
<path d="M341.293 142.001L334.06 150.916L335.435 152.49L342.668 143.576L341.293 142.001Z" fill="black"/>\r
<path d="M335.474 142.011L334.102 143.59L341.353 152.483L342.725 150.905L335.474 142.011Z" fill="black"/>\r
<path d="M330.864 141.987L323.632 150.902L325.007 152.476L332.239 143.561L330.864 141.987Z" fill="black"/>\r
<path d="M325.023 142.024L323.651 143.603L330.903 152.496L332.275 150.918L325.023 142.024Z" fill="black"/>\r
<path d="M320.414 142L313.182 150.915L314.557 152.489L321.789 143.574L320.414 142Z" fill="black"/>\r
<path d="M314.595 142.011L313.223 143.589L320.475 152.482L321.847 150.904L314.595 142.011Z" fill="black"/>\r
<path d="M205.596 141.981L198.363 150.895L199.738 152.469L206.971 143.555L205.596 141.981Z" fill="black"/>\r
<path d="M199.752 142.021L198.38 143.599L205.631 152.493L207.003 150.914L199.752 142.021Z" fill="black"/>\r
<path d="M195.145 141.994L187.913 150.908L189.288 152.482L196.521 143.568L195.145 141.994Z" fill="black"/>\r
<path d="M189.324 142.007L187.952 143.586L195.204 152.479L196.575 150.901L189.324 142.007Z" fill="black"/>\r
<path d="M184.718 141.979L177.485 150.894L178.86 152.468L186.093 143.554L184.718 141.979Z" fill="black"/>\r
<path d="M178.873 142.021L177.501 143.599L184.753 152.492L186.124 150.914L178.873 142.021Z" fill="black"/>\r
<path d="M174.268 141.993L167.035 150.907L168.41 152.481L175.643 143.567L174.268 141.993Z" fill="black"/>\r
<path d="M168.445 142.006L167.073 143.585L174.325 152.478L175.697 150.9L168.445 142.006Z" fill="black"/>\r
<path d="M842.383 124.294L835.15 133.208L836.525 134.782L843.758 125.868L842.383 124.294Z" fill="black"/>\r
<path d="M836.551 124.266L835.179 125.844L842.431 134.737L843.803 133.159L836.551 124.266Z" fill="black"/>\r
<path d="M831.955 124.279L824.722 133.194L826.097 134.768L833.33 125.853L831.955 124.279Z" fill="black"/>\r
<path d="M826.101 124.279L824.729 125.857L831.98 134.75L833.352 133.172L826.101 124.279Z" fill="black"/>\r
<path d="M821.504 124.293L814.272 133.207L815.647 134.781L822.879 125.867L821.504 124.293Z" fill="black"/>\r
<path d="M815.673 124.265L814.301 125.843L821.552 134.737L822.924 133.158L815.673 124.265Z" fill="black"/>\r
<path d="M811.077 124.279L803.844 133.193L805.219 134.767L812.452 125.853L811.077 124.279Z" fill="black"/>\r
<path d="M805.222 124.278L803.85 125.857L811.102 134.75L812.474 133.172L805.222 124.278Z" fill="black"/>\r
<path d="M800.627 124.292L793.394 133.206L794.769 134.78L802.002 125.866L800.627 124.292Z" fill="black"/>\r
<path d="M794.794 124.264L793.422 125.843L800.674 134.736L802.046 133.158L794.794 124.264Z" fill="black"/>\r
<path d="M581.418 124.267L574.185 133.181L575.56 134.755L582.793 125.841L581.418 124.267Z" fill="black"/>\r
<path d="M575.558 124.271L574.186 125.85L581.437 134.743L582.809 133.165L575.558 124.271Z" fill="black"/>\r
<path d="M570.968 124.28L563.735 133.194L565.11 134.769L572.343 125.854L570.968 124.28Z" fill="black"/>\r
<path d="M565.13 124.258L563.758 125.836L571.01 134.729L572.382 133.151L565.13 124.258Z" fill="black"/>\r
<path d="M560.54 124.266L553.307 133.18L554.682 134.754L561.915 125.84L560.54 124.266Z" fill="black"/>\r
<path d="M554.679 124.271L553.307 125.849L560.559 134.742L561.931 133.164L554.679 124.271Z" fill="black"/>\r
<path d="M550.089 124.279L542.857 133.193L544.232 134.767L551.464 125.853L550.089 124.279Z" fill="black"/>\r
<path d="M544.252 124.257L542.881 125.836L550.132 134.729L551.504 133.151L544.252 124.257Z" fill="black"/>\r
<path d="M487.455 124.276L480.223 133.19L481.598 134.764L488.83 125.85L487.455 124.276Z" fill="black"/>\r
<path d="M481.617 124.255L480.245 125.834L487.496 134.727L488.868 133.149L481.617 124.255Z" fill="black"/>\r
<path d="M351.759 124.255L344.527 133.169L345.902 134.744L353.134 125.829L351.759 124.255Z" fill="black"/>\r
<path d="M345.895 124.265L344.523 125.843L351.774 134.737L353.146 133.158L345.895 124.265Z" fill="black"/>\r
<path d="M341.309 124.269L334.076 133.183L335.451 134.757L342.684 125.843L341.309 124.269Z" fill="black"/>\r
<path d="M335.467 124.251L334.095 125.829L341.346 134.723L342.718 133.144L335.467 124.251Z" fill="black"/>\r
<path d="M216.04 124.262L208.807 133.176L210.182 134.75L217.415 125.836L216.04 124.262Z" fill="black"/>\r
<path d="M210.195 124.247L208.823 125.826L216.075 134.719L217.447 133.141L210.195 124.247Z" fill="black"/>\r
<path d="M205.612 124.248L198.38 133.162L199.755 134.736L206.987 125.822L205.612 124.248Z" fill="black"/>\r
<path d="M199.745 124.261L198.373 125.839L205.624 134.732L206.996 133.154L199.745 124.261Z" fill="black"/>\r
<path d="M195.162 124.261L187.929 133.175L189.304 134.749L196.537 125.835L195.162 124.261Z" fill="black"/>\r
<path d="M189.317 124.247L187.945 125.825L195.196 134.718L196.568 133.14L189.317 124.247Z" fill="black"/>\r
<path d="M184.734 124.247L177.501 133.161L178.876 134.735L186.109 125.821L184.734 124.247Z" fill="black"/>\r
<path d="M178.866 124.26L177.494 125.838L184.746 134.732L186.117 133.153L178.866 124.26Z" fill="black"/>\r
<path d="M852.826 106.521L845.593 115.435L846.968 117.009L854.201 108.095L852.826 106.521Z" fill="black"/>\r
<path d="M846.972 106.519L845.6 108.097L852.852 116.991L854.224 115.412L846.972 106.519Z" fill="black"/>\r
<path d="M842.376 106.534L835.143 115.448L836.518 117.022L843.751 108.108L842.376 106.534Z" fill="black"/>\r
<path d="M836.544 106.505L835.172 108.084L842.424 116.977L843.796 115.399L836.544 106.505Z" fill="black"/>\r
<path d="M831.948 106.52L824.715 115.434L826.09 117.008L833.323 108.094L831.948 106.52Z" fill="black"/>\r
<path d="M826.094 106.518L824.722 108.097L831.973 116.99L833.345 115.412L826.094 106.518Z" fill="black"/>\r
<path d="M821.497 106.533L814.265 115.448L815.64 117.022L822.872 108.107L821.497 106.533Z" fill="black"/>\r
<path d="M815.666 106.505L814.294 108.083L821.545 116.976L822.917 115.398L815.666 106.505Z" fill="black"/>\r
<path d="M581.411 106.507L574.178 115.421L575.553 116.996L582.786 108.081L581.411 106.507Z" fill="black"/>\r
<path d="M575.551 106.511L574.179 108.089L581.43 116.983L582.802 115.404L575.551 106.511Z" fill="black"/>\r
<path d="M570.96 106.52L563.727 115.435L565.102 117.009L572.335 108.094L570.96 106.52Z" fill="black"/>\r
<path d="M565.123 106.497L563.751 108.076L571.003 116.969L572.374 115.391L565.123 106.497Z" fill="black"/>\r
<path d="M497.898 106.503L490.666 115.417L492.041 116.991L499.273 108.077L497.898 106.503Z" fill="black"/>\r
<path d="M492.037 106.509L490.665 108.087L497.916 116.981L499.288 115.402L492.037 106.509Z" fill="black"/>\r
<path d="M362.179 106.51L354.947 115.424L356.322 116.998L363.554 108.084L362.179 106.51Z" fill="black"/>\r
<path d="M356.338 106.492L354.966 108.07L362.218 116.963L363.59 115.385L356.338 106.492Z" fill="black"/>\r
<path d="M216.033 106.503L208.8 115.417L210.175 116.991L217.408 108.077L216.033 106.503Z" fill="black"/>\r
<path d="M210.188 106.487L208.816 108.065L216.068 116.959L217.44 115.38L210.188 106.487Z" fill="black"/>\r
<path d="M205.605 106.488L198.372 115.403L199.747 116.977L206.98 108.062L205.605 106.488Z" fill="black"/>\r
<path d="M199.737 106.5L198.365 108.078L205.617 116.972L206.989 115.393L199.737 106.5Z" fill="black"/>\r
<path d="M195.155 106.501L187.922 115.416L189.297 116.99L196.53 108.075L195.155 106.501Z" fill="black"/>\r
<path d="M189.31 106.487L187.938 108.065L195.189 116.958L196.561 115.38L189.31 106.487Z" fill="black"/>\r
<path d="M69.8862 106.495L62.6536 115.41L64.0286 116.984L71.2613 108.069L69.8862 106.495Z" fill="black"/>\r
<path d="M64.0384 106.483L62.6665 108.061L69.9179 116.955L71.2898 115.376L64.0384 106.483Z" fill="black"/>\r
<path d="M863.247 88.7757L856.014 97.69L857.389 99.2642L864.622 90.3498L863.247 88.7757Z" fill="black"/>\r
<path d="M857.438 88.7735L856.066 90.3517L863.318 99.245L864.689 97.6668L857.438 88.7735Z" fill="black"/>\r
<path d="M852.819 88.761L845.586 97.6754L846.961 99.2495L854.194 90.3352L852.819 88.761Z" fill="black"/>\r
<path d="M846.987 88.7863L845.615 90.3645L852.867 99.2578L854.238 97.6796L846.987 88.7863Z" fill="black"/>\r
<path d="M842.369 88.7744L835.136 97.6888L836.511 99.2629L843.744 90.3486L842.369 88.7744Z" fill="black"/>\r
<path d="M836.559 88.7726L835.188 90.3508L842.439 99.2441L843.811 97.6659L836.559 88.7726Z" fill="black"/>\r
<path d="M831.941 88.7598L824.708 97.6742L826.083 99.2483L833.316 90.334L831.941 88.7598Z" fill="black"/>\r
<path d="M826.109 88.7857L824.737 90.3639L831.988 99.2572L833.36 97.679L826.109 88.7857Z" fill="black"/>\r
<path d="M821.49 88.7733L814.258 97.6877L815.633 99.2618L822.865 90.3475L821.49 88.7733Z" fill="black"/>\r
<path d="M815.681 88.7721L814.309 90.3503L821.56 99.2436L822.932 97.6654L815.681 88.7721Z" fill="black"/>\r
<path d="M591.832 88.7618L584.599 97.6761L585.974 99.2503L593.207 90.336L591.832 88.7618Z" fill="black"/>\r
<path d="M586.017 88.7656L584.646 90.3438L591.897 99.2371L593.269 97.6589L586.017 88.7656Z" fill="black"/>\r
<path d="M581.404 88.7476L574.171 97.662L575.546 99.2361L582.779 90.3218L581.404 88.7476Z" fill="black"/>\r
<path d="M575.567 88.7786L574.195 90.3569L581.446 99.2502L582.818 97.6719L575.567 88.7786Z" fill="black"/>\r
<path d="M508.319 88.7575L501.086 97.6719L502.461 99.246L509.694 90.3317L508.319 88.7575Z" fill="black"/>\r
<path d="M502.503 88.7631L501.131 90.3413L508.383 99.2346L509.755 97.6564L502.503 88.7631Z" fill="black"/>\r
<path d="M383.051 88.7514L375.818 97.6657L377.193 99.2399L384.426 90.3255L383.051 88.7514Z" fill="black"/>\r
<path d="M377.232 88.7592L375.86 90.3375L383.111 99.2308L384.483 97.6525L377.232 88.7592Z" fill="black"/>\r
<path d="M216.026 88.7429L208.793 97.6573L210.168 99.2314L217.401 90.3171L216.026 88.7429Z" fill="black"/>\r
<path d="M210.204 88.7547L208.832 90.3329L216.083 99.2262L217.455 97.648L210.204 88.7547Z" fill="black"/>\r
<path d="M205.598 88.7283L198.365 97.6426L199.74 99.2168L206.973 90.3025L205.598 88.7283Z" fill="black"/>\r
<path d="M199.753 88.7678L198.381 90.3461L205.633 99.2394L207.004 97.6611L199.753 88.7678Z" fill="black"/>\r
<path d="M80.3293 88.7221L73.0967 97.6365L74.4718 99.2106L81.7044 90.2963L80.3293 88.7221Z" fill="black"/>\r
<path d="M74.4814 88.764L73.1096 90.3422L80.361 99.2355L81.7329 97.6572L74.4814 88.764Z" fill="black"/>\r
<path d="M873.713 71.0293L866.48 79.9437L867.855 81.5178L875.088 72.6035L873.713 71.0293Z" fill="black"/>\r
<path d="M867.858 71.0267L866.487 72.605L873.738 81.4983L875.11 79.92L867.858 71.0267Z" fill="black"/>\r
<path d="M863.263 71.0428L856.031 79.9572L857.406 81.5313L864.638 72.617L863.263 71.0428Z" fill="black"/>\r
<path d="M857.431 71.0131L856.059 72.5914L863.31 81.4847L864.682 79.9064L857.431 71.0131Z" fill="black"/>\r
<path d="M852.835 71.0282L845.603 79.9426L846.978 81.5167L854.21 72.6024L852.835 71.0282Z" fill="black"/>\r
<path d="M846.98 71.0263L845.608 72.6045L852.86 81.4978L854.231 79.9195L846.98 71.0263Z" fill="black"/>\r
<path d="M842.384 71.0416L835.152 79.9559L836.527 81.5301L843.76 72.6157L842.384 71.0416Z" fill="black"/>\r
<path d="M836.552 71.0126L835.18 72.5908L842.432 81.4841L843.804 79.9059L836.552 71.0126Z" fill="black"/>\r
<path d="M831.957 71.027L824.724 79.9413L826.099 81.5155L833.332 72.6011L831.957 71.027Z" fill="black"/>\r
<path d="M826.102 71.0253L824.73 72.6035L831.981 81.4968L833.353 79.9186L826.102 71.0253Z" fill="black"/>\r
<path d="M602.298 71.0155L595.065 79.9298L596.441 81.504L603.673 72.5896L602.298 71.0155Z" fill="black"/>\r
<path d="M596.437 71.0189L595.065 72.5971L602.317 81.4904L603.689 79.9122L596.437 71.0189Z" fill="black"/>\r
<path d="M591.847 71.029L584.615 79.9433L585.99 81.5175L593.222 72.6031L591.847 71.029Z" fill="black"/>\r
<path d="M586.01 71.0052L584.638 72.5834L591.89 81.4767L593.262 79.8985L586.01 71.0052Z" fill="black"/>\r
<path d="M518.785 71.0112L511.553 79.9255L512.928 81.4997L520.16 72.5854L518.785 71.0112Z" fill="black"/>\r
<path d="M512.924 71.0164L511.552 72.5946L518.803 81.4879L520.175 79.9097L512.924 71.0164Z" fill="black"/>\r
<path d="M508.335 71.0247L501.103 79.939L502.478 81.5132L509.71 72.5988L508.335 71.0247Z" fill="black"/>\r
<path d="M502.496 71.0028L501.124 72.581L508.376 81.4743L509.747 79.896L502.496 71.0028Z" fill="black"/>\r
<path d="M216.042 71.0097L208.809 79.9241L210.184 81.4982L217.417 72.5839L216.042 71.0097Z" fill="black"/>\r
<path d="M210.197 70.9943L208.825 72.5725L216.076 81.4658L217.448 79.8876L210.197 70.9943Z" fill="black"/>\r
<path d="M205.614 70.9955L198.382 79.9098L199.757 81.484L206.989 72.5696L205.614 70.9955Z" fill="black"/>\r
<path d="M199.745 71.0074L198.374 72.5857L205.625 81.479L206.997 79.9007L199.745 71.0074Z" fill="black"/>\r
<path d="M101.223 70.9901L93.9907 79.9045L95.3658 81.4786L102.598 72.5643L101.223 70.9901Z" fill="black"/>\r
<path d="M95.3531 71.0045L93.9812 72.5828L101.233 81.4761L102.604 79.8978L95.3531 71.0045Z" fill="black"/>\r
<path d="M90.7729 71.0036L83.5403 79.9179L84.9154 81.4921L92.148 72.5777L90.7729 71.0036Z" fill="black"/>\r
<path d="M84.9253 70.9909L83.5535 72.5691L90.8049 81.4624L92.1767 79.8841L84.9253 70.9909Z" fill="black"/>\r
<path d="M884.134 53.284L876.901 62.1983L878.276 63.7725L885.509 54.8581L884.134 53.284Z" fill="black"/>\r
<path d="M878.302 53.2532L876.93 54.8314L884.182 63.7247L885.554 62.1465L878.302 53.2532Z" fill="black"/>\r
<path d="M873.706 53.2698L866.473 62.1841L867.848 63.7583L875.081 54.844L873.706 53.2698Z" fill="black"/>\r
<path d="M867.852 53.2663L866.48 54.8445L873.731 63.7378L875.103 62.1596L867.852 53.2663Z" fill="black"/>\r
<path d="M863.256 53.2833L856.023 62.1976L857.399 63.7718L864.631 54.8574L863.256 53.2833Z" fill="black"/>\r
<path d="M857.424 53.2526L856.052 54.8309L863.303 63.7242L864.675 62.1459L857.424 53.2526Z" fill="black"/>\r
<path d="M852.828 53.2687L845.595 62.183L846.971 63.7572L854.203 54.8429L852.828 53.2687Z" fill="black"/>\r
<path d="M846.973 53.2658L845.601 54.8441L852.852 63.7373L854.224 62.1591L846.973 53.2658Z" fill="black"/>\r
<path d="M842.377 53.2821L835.145 62.1964L836.52 63.7706L843.752 54.8562L842.377 53.2821Z" fill="black"/>\r
<path d="M836.545 53.2522L835.173 54.8304L842.425 63.7237L843.796 62.1455L836.545 53.2522Z" fill="black"/>\r
<path d="M602.291 53.256L595.058 62.1703L596.433 63.7444L603.666 54.8301L602.291 53.256Z" fill="black"/>\r
<path d="M596.431 53.2584L595.059 54.8367L602.31 63.73L603.682 62.1517L596.431 53.2584Z" fill="black"/>\r
<path d="M529.206 53.2663L521.973 62.1807L523.348 63.7548L530.581 54.8405L529.206 53.2663Z" fill="black"/>\r
<path d="M523.367 53.2433L521.996 54.8215L529.247 63.7148L530.619 62.1366L523.367 53.2433Z" fill="black"/>\r
<path d="M184.729 53.2348L177.496 62.1492L178.871 63.7233L186.104 54.809L184.729 53.2348Z" fill="black"/>\r
<path d="M178.86 53.2465L177.488 54.8247L184.739 63.718L186.111 62.1398L178.86 53.2465Z" fill="black"/>\r
<path d="M174.279 53.2483L167.046 62.1626L168.421 63.7367L175.654 54.8224L174.279 53.2483Z" fill="black"/>\r
<path d="M168.432 53.2328L167.061 54.8111L174.312 63.7044L175.684 62.1261L168.432 53.2328Z" fill="black"/>\r
<path d="M163.851 53.2337L156.618 62.148L157.993 63.7222L165.226 54.8078L163.851 53.2337Z" fill="black"/>\r
<path d="M157.981 53.246L156.609 54.8242L163.861 63.7175L165.233 62.1393L157.981 53.246Z" fill="black"/>\r
<path d="M153.4 53.2471L146.168 62.1614L147.543 63.7356L154.775 54.8213L153.4 53.2471Z" fill="black"/>\r
<path d="M147.554 53.2324L146.182 54.8106L153.433 63.7039L154.805 62.1257L147.554 53.2324Z" fill="black"/>\r
<path d="M142.973 53.2329L135.74 62.1472L137.115 63.7214L144.348 54.807L142.973 53.2329Z" fill="black"/>\r
<path d="M137.103 53.2454L135.731 54.8237L142.982 63.717L144.354 62.1387L137.103 53.2454Z" fill="black"/>\r
<path d="M132.522 53.246L125.29 62.1603L126.665 63.7345L133.897 54.8202L132.522 53.246Z" fill="black"/>\r
<path d="M126.675 53.2314L125.303 54.8096L132.555 63.7029L133.927 62.1247L126.675 53.2314Z" fill="black"/>\r
<path d="M894.577 35.5111L887.344 44.4254L888.719 45.9996L895.952 37.0852L894.577 35.5111Z" fill="black"/>\r
<path d="M888.746 35.5344L887.374 37.1126L894.625 46.0059L895.997 44.4277L888.746 35.5344Z" fill="black"/>\r
<path d="M884.127 35.5245L876.894 44.4388L878.269 46.013L885.502 37.0987L884.127 35.5245Z" fill="black"/>\r
<path d="M878.317 35.5204L876.945 37.0986L884.197 45.9919L885.569 44.4137L878.317 35.5204Z" fill="black"/>\r
<path d="M873.699 35.5099L866.466 44.4243L867.841 45.9984L875.074 37.0841L873.699 35.5099Z" fill="black"/>\r
<path d="M867.866 35.5335L866.495 37.1118L873.746 46.005L875.118 44.4268L867.866 35.5335Z" fill="black"/>\r
<path d="M863.249 35.5234L856.016 44.4377L857.391 46.0119L864.624 37.0976L863.249 35.5234Z" fill="black"/>\r
<path d="M857.439 35.5199L856.068 37.0981L863.319 45.9914L864.691 44.4132L857.439 35.5199Z" fill="black"/>\r
<path d="M852.821 35.5091L845.588 44.4235L846.963 45.9976L854.196 37.0833L852.821 35.5091Z" fill="black"/>\r
<path d="M846.989 35.533L845.617 37.1113L852.868 46.0046L854.24 44.4263L846.989 35.533Z" fill="black"/>\r
<path d="M602.284 35.4965L595.051 44.4108L596.426 45.985L603.659 37.0706L602.284 35.4965Z" fill="black"/>\r
<path d="M596.446 35.526L595.074 37.1042L602.326 45.9975L603.697 44.4193L596.446 35.526Z" fill="black"/>\r
<path d="M550.077 35.5076L542.844 44.4219L544.219 45.9961L551.452 37.0818L550.077 35.5076Z" fill="black"/>\r
<path d="M544.261 35.5109L542.889 37.0892L550.141 45.9825L551.512 44.4042L544.261 35.5109Z" fill="black"/>\r
<path d="M539.649 35.493L532.416 44.4073L533.791 45.9815L541.024 37.0672L539.649 35.493Z" fill="black"/>\r
<path d="M533.81 35.5241L532.438 37.1024L539.69 45.9956L541.062 44.4174L533.81 35.5241Z" fill="black"/>\r
<path d="M905.021 17.7925L897.788 26.7068L899.163 28.281L906.396 19.3667L905.021 17.7925Z" fill="black"/>\r
<path d="M899.189 17.7609L897.818 19.3392L905.069 28.2325L906.441 26.6542L899.189 17.7609Z" fill="black"/>\r
<path d="M894.593 17.7782L887.361 26.6926L888.736 28.2667L895.968 19.3524L894.593 17.7782Z" fill="black"/>\r
<path d="M888.738 17.774L887.366 19.3522L894.617 28.2455L895.989 26.6673L888.738 17.774Z" fill="black"/>\r
<path d="M884.143 17.7917L876.91 26.7061L878.285 28.2802L885.518 19.3659L884.143 17.7917Z" fill="black"/>\r
<path d="M878.311 17.7603L876.939 19.3386L884.191 28.2319L885.562 26.6536L878.311 17.7603Z" fill="black"/>\r
<path d="M873.715 17.7771L866.483 26.6914L867.858 28.2656L875.09 19.3512L873.715 17.7771Z" fill="black"/>\r
<path d="M867.859 17.7736L866.488 19.3518L873.739 28.2451L875.111 26.6669L867.859 17.7736Z" fill="black"/>\r
<path d="M863.265 17.7906L856.032 26.7049L857.407 28.279L864.64 19.3647L863.265 17.7906Z" fill="black"/>\r
<path d="M857.432 17.7599L856.061 19.3381L863.312 28.2314L864.684 26.6532L857.432 17.7599Z" fill="black"/>\r
<path d="M602.3 17.7636L595.067 26.678L596.442 28.2521L603.675 19.3378L602.3 17.7636Z" fill="black"/>\r
<path d="M596.439 17.7656L595.067 19.3439L602.319 28.2372L603.69 26.6589L596.439 17.7656Z" fill="black"/>\r
<path d="M591.85 17.7767L584.617 26.691L585.992 28.2652L593.225 19.3509L591.85 17.7767Z" fill="black"/>\r
<path d="M586.011 17.752L584.639 19.3303L591.891 28.2235L593.262 26.6453L586.011 17.752Z" fill="black"/>\r
<path d="M581.422 17.7625L574.189 26.6769L575.564 28.251L582.797 19.3367L581.422 17.7625Z" fill="black"/>\r
<path d="M575.56 17.765L574.188 19.3433L581.44 28.2365L582.812 26.6583L575.56 17.765Z" fill="black"/>\r
<path d="M570.971 17.7755L563.739 26.6898L565.114 28.264L572.346 19.3496L570.971 17.7755Z" fill="black"/>\r
<path d="M565.132 17.751L563.76 19.3293L571.012 28.2226L572.384 26.6443L565.132 17.751Z" fill="black"/>\r
<path d="M915.464 0.0198692L908.231 8.9342L909.606 10.5084L916.839 1.59406L915.464 0.0198692Z" fill="black"/>\r
<path d="M909.609 0.0145381L908.238 1.59277L915.489 10.4861L916.861 8.90783L909.609 0.0145381Z" fill="black"/>\r
<path d="M905.014 0.0329307L897.781 8.94727L899.156 10.5215L906.389 1.60712L905.014 0.0329307Z" fill="black"/>\r
<path d="M899.182 0.000561095L897.811 1.5788L905.062 10.4721L906.434 8.89385L899.182 0.000561095Z" fill="black"/>\r
<path d="M894.586 0.0187095L887.354 8.93304L888.729 10.5072L895.961 1.5929L894.586 0.0187095Z" fill="black"/>\r
<path d="M888.731 0.0136226L887.36 1.59186L894.611 10.4851L895.983 8.90691L888.731 0.0136226Z" fill="black"/>\r
<path d="M884.135 0.031771L876.903 8.94611L878.278 10.5203L885.51 1.60596L884.135 0.031771Z" fill="black"/>\r
<path d="M878.304 1.17786e-05L876.932 1.57825L884.183 10.4715L885.555 8.8933L878.304 1.17786e-05Z" fill="black"/>\r
</svg>\r
`,Ve=`<svg width="1263" height="714" viewBox="0 0 1263 714" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M326.186 702.697H315.664V713.331H326.186V702.697Z" fill="black"/>\r
<path d="M315.664 702.697H305.142V713.331H315.664V702.697Z" fill="black"/>\r
<path d="M305.142 702.697H294.62V713.331H305.142V702.697Z" fill="black"/>\r
<path d="M347.231 692.024H336.709V702.658H347.231V692.024Z" fill="black"/>\r
<path d="M315.664 692.024H305.142V702.658H315.664V692.024Z" fill="black"/>\r
<path d="M305.142 692.024H294.62V702.658H305.142V692.024Z" fill="black"/>\r
<path d="M357.753 681.39H347.23V692.024H357.753V681.39Z" fill="black"/>\r
<path d="M326.186 681.39H315.664V692.024H326.186V681.39Z" fill="black"/>\r
<path d="M368.275 670.757H357.753V681.39H368.275V670.757Z" fill="black"/>\r
<path d="M347.231 670.757H336.709V681.39H347.231V670.757Z" fill="black"/>\r
<path d="M336.708 670.757H326.186V681.39H336.708V670.757Z" fill="black"/>\r
<path d="M378.797 660.083H368.275V670.717H378.797V660.083Z" fill="black"/>\r
<path d="M368.275 660.083H357.753V670.717H368.275V660.083Z" fill="black"/>\r
<path d="M357.753 660.083H347.23V670.717H357.753V660.083Z" fill="black"/>\r
<path d="M389.319 649.449H378.797V660.083H389.319V649.449Z" fill="black"/>\r
<path d="M378.797 649.449H368.275V660.083H378.797V649.449Z" fill="black"/>\r
<path d="M410.363 638.816H399.841V649.449H410.363V638.816Z" fill="black"/>\r
<path d="M399.842 638.816H389.319V649.449H399.842V638.816Z" fill="black"/>\r
<path d="M431.408 628.142H420.886V638.776H431.408V628.142Z" fill="black"/>\r
<path d="M420.886 628.142H410.364V638.776H420.886V628.142Z" fill="black"/>\r
<path d="M410.363 628.142H399.841V638.776H410.363V628.142Z" fill="black"/>\r
<path d="M441.93 617.509H431.408V628.142H441.93V617.509Z" fill="black"/>\r
<path d="M420.886 617.509H410.364V628.142H420.886V617.509Z" fill="black"/>\r
<path d="M410.363 617.509H399.841V628.142H410.363V617.509Z" fill="black"/>\r
<path d="M452.452 606.875H441.93V617.509H452.452V606.875Z" fill="black"/>\r
<path d="M431.408 606.875H420.886V617.509H431.408V606.875Z" fill="black"/>\r
<path d="M420.886 606.875H410.364V617.509H420.886V606.875Z" fill="black"/>\r
<path d="M473.496 596.202H462.974V606.835H473.496V596.202Z" fill="black"/>\r
<path d="M462.974 596.202H452.452V606.835H462.974V596.202Z" fill="black"/>\r
<path d="M441.93 596.202H431.408V606.835H441.93V596.202Z" fill="black"/>\r
<path d="M431.408 596.202H420.886V606.835H431.408V596.202Z" fill="black"/>\r
<path d="M484.018 585.568H473.496V596.202H484.018V585.568Z" fill="black"/>\r
<path d="M452.452 585.568H441.93V596.202H452.452V585.568Z" fill="black"/>\r
<path d="M441.93 585.568H431.408V596.202H441.93V585.568Z" fill="black"/>\r
<path d="M431.408 585.568H420.886V596.202H431.408V585.568Z" fill="black"/>\r
<path d="M273.576 585.568H263.053V596.202H273.576V585.568Z" fill="black"/>\r
<path d="M263.053 585.568H252.531V596.202H263.053V585.568Z" fill="black"/>\r
<path d="M252.531 585.568H242.009V596.202H252.531V585.568Z" fill="black"/>\r
<path d="M1157.44 574.934H1146.91V585.568H1157.44V574.934Z" fill="black"/>\r
<path d="M1146.91 574.934H1136.39V585.568H1146.91V574.934Z" fill="black"/>\r
<path d="M1104.82 574.934H1094.3V585.568H1104.82V574.934Z" fill="black"/>\r
<path d="M936.47 574.934H925.948V585.568H936.47V574.934Z" fill="black"/>\r
<path d="M904.904 574.934H894.382V585.568H904.904V574.934Z" fill="black"/>\r
<path d="M799.683 574.934H789.16V585.568H799.683V574.934Z" fill="black"/>\r
<path d="M757.593 574.934H747.071V585.568H757.593V574.934Z" fill="black"/>\r
<path d="M673.417 574.934H662.895V585.568H673.417V574.934Z" fill="black"/>\r
<path d="M631.329 574.934H620.806V585.568H631.329V574.934Z" fill="black"/>\r
<path d="M494.54 574.934H484.018V585.568H494.54V574.934Z" fill="black"/>\r
<path d="M462.974 574.934H452.452V585.568H462.974V574.934Z" fill="black"/>\r
<path d="M452.452 574.934H441.93V585.568H452.452V574.934Z" fill="black"/>\r
<path d="M441.93 574.934H431.408V585.568H441.93V574.934Z" fill="black"/>\r
<path d="M336.708 574.934H326.186V585.568H336.708V574.934Z" fill="black"/>\r
<path d="M326.186 574.934H315.664V585.568H326.186V574.934Z" fill="black"/>\r
<path d="M315.664 574.934H305.142V585.568H315.664V574.934Z" fill="black"/>\r
<path d="M305.142 574.934H294.62V585.568H305.142V574.934Z" fill="black"/>\r
<path d="M210.443 574.934H199.92V585.568H210.443V574.934Z" fill="black"/>\r
<path d="M199.92 574.934H189.398V585.568H199.92V574.934Z" fill="black"/>\r
<path d="M189.399 574.934H178.876V585.568H189.399V574.934Z" fill="black"/>\r
<path d="M178.876 574.934H168.354V585.568H178.876V574.934Z" fill="black"/>\r
<path d="M1167.96 564.261H1157.44V574.895H1167.96V564.261Z" fill="black"/>\r
<path d="M957.515 564.261H946.992V574.895H957.515V564.261Z" fill="black"/>\r
<path d="M946.993 564.261H936.471V574.895H946.993V564.261Z" fill="black"/>\r
<path d="M904.904 564.261H894.382V574.895H904.904V564.261Z" fill="black"/>\r
<path d="M810.204 564.261H799.682V574.895H810.204V564.261Z" fill="black"/>\r
<path d="M757.593 564.261H747.071V574.895H757.593V564.261Z" fill="black"/>\r
<path d="M694.461 564.261H683.939V574.895H694.461V564.261Z" fill="black"/>\r
<path d="M631.329 564.261H620.806V574.895H631.329V564.261Z" fill="black"/>\r
<path d="M620.806 564.261H610.284V574.895H620.806V564.261Z" fill="black"/>\r
<path d="M505.063 564.261H494.541V574.895H505.063V564.261Z" fill="black"/>\r
<path d="M462.974 564.261H452.452V574.895H462.974V564.261Z" fill="black"/>\r
<path d="M452.452 564.261H441.93V574.895H452.452V564.261Z" fill="black"/>\r
<path d="M357.753 564.261H347.23V574.895H357.753V564.261Z" fill="black"/>\r
<path d="M347.231 564.261H336.709V574.895H347.231V564.261Z" fill="black"/>\r
<path d="M168.354 564.261H157.832V574.895H168.354V564.261Z" fill="black"/>\r
<path d="M157.832 564.261H147.31V574.895H157.832V564.261Z" fill="black"/>\r
<path d="M147.31 564.261H136.788V574.895H147.31V564.261Z" fill="black"/>\r
<path d="M1178.48 553.627H1167.96V564.261H1178.48V553.627Z" fill="black"/>\r
<path d="M1094.3 553.627H1083.78V564.261H1094.3V553.627Z" fill="black"/>\r
<path d="M968.036 553.627H957.514V564.261H968.036V553.627Z" fill="black"/>\r
<path d="M904.904 553.627H894.382V564.261H904.904V553.627Z" fill="black"/>\r
<path d="M820.727 553.627H810.205V564.261H820.727V553.627Z" fill="black"/>\r
<path d="M757.593 553.627H747.071V564.261H757.593V553.627Z" fill="black"/>\r
<path d="M631.329 553.627H620.806V564.261H631.329V553.627Z" fill="black"/>\r
<path d="M620.806 553.627H610.284V564.261H620.806V553.627Z" fill="black"/>\r
<path d="M515.585 553.627H505.062V564.261H515.585V553.627Z" fill="black"/>\r
<path d="M473.496 553.627H462.974V564.261H473.496V553.627Z" fill="black"/>\r
<path d="M462.974 553.627H452.452V564.261H462.974V553.627Z" fill="black"/>\r
<path d="M452.452 553.627H441.93V564.261H452.452V553.627Z" fill="black"/>\r
<path d="M389.319 553.627H378.797V564.261H389.319V553.627Z" fill="black"/>\r
<path d="M378.797 553.627H368.275V564.261H378.797V553.627Z" fill="black"/>\r
<path d="M136.788 553.627H126.266V564.261H136.788V553.627Z" fill="black"/>\r
<path d="M126.266 553.627H115.744V564.261H126.266V553.627Z" fill="black"/>\r
<path d="M1199.52 542.993H1189V553.627H1199.52V542.993Z" fill="black"/>\r
<path d="M1104.82 542.993H1094.3V553.627H1104.82V542.993Z" fill="black"/>\r
<path d="M1094.3 542.993H1083.78V553.627H1094.3V542.993Z" fill="black"/>\r
<path d="M978.559 542.993H968.037V553.627H978.559V542.993Z" fill="black"/>\r
<path d="M915.425 542.993H904.903V553.627H915.425V542.993Z" fill="black"/>\r
<path d="M904.904 542.993H894.382V553.627H904.904V542.993Z" fill="black"/>\r
<path d="M831.249 542.993H820.727V553.627H831.249V542.993Z" fill="black"/>\r
<path d="M768.116 542.993H757.594V553.627H768.116V542.993Z" fill="black"/>\r
<path d="M757.593 542.993H747.071V553.627H757.593V542.993Z" fill="black"/>\r
<path d="M726.027 542.993H715.505V553.627H726.027V542.993Z" fill="black"/>\r
<path d="M631.329 542.993H620.806V553.627H631.329V542.993Z" fill="black"/>\r
<path d="M620.806 542.993H610.284V553.627H620.806V542.993Z" fill="black"/>\r
<path d="M526.107 542.993H515.585V553.627H526.107V542.993Z" fill="black"/>\r
<path d="M484.018 542.993H473.496V553.627H484.018V542.993Z" fill="black"/>\r
<path d="M473.496 542.993H462.974V553.627H473.496V542.993Z" fill="black"/>\r
<path d="M462.974 542.993H452.452V553.627H462.974V542.993Z" fill="black"/>\r
<path d="M399.842 542.993H389.319V553.627H399.842V542.993Z" fill="black"/>\r
<path d="M105.221 542.993H94.6992V553.627H105.221V542.993Z" fill="black"/>\r
<path d="M1210.05 532.32H1199.52V542.954H1210.05V532.32Z" fill="black"/>\r
<path d="M1104.82 532.32H1094.3V542.954H1104.82V532.32Z" fill="black"/>\r
<path d="M1094.3 532.32H1083.78V542.954H1094.3V532.32Z" fill="black"/>\r
<path d="M1052.21 532.32H1041.69V542.954H1052.21V532.32Z" fill="black"/>\r
<path d="M1041.69 532.32H1031.17V542.954H1041.69V532.32Z" fill="black"/>\r
<path d="M1031.17 532.32H1020.65V542.954H1031.17V532.32Z" fill="black"/>\r
<path d="M989.081 532.32H978.559V542.954H989.081V532.32Z" fill="black"/>\r
<path d="M925.948 532.32H915.426V542.954H925.948V532.32Z" fill="black"/>\r
<path d="M915.425 532.32H904.903V542.954H915.425V532.32Z" fill="black"/>\r
<path d="M904.904 532.32H894.382V542.954H904.904V532.32Z" fill="black"/>\r
<path d="M768.116 532.32H757.594V542.954H768.116V532.32Z" fill="black"/>\r
<path d="M757.593 532.32H747.071V542.954H757.593V532.32Z" fill="black"/>\r
<path d="M736.55 532.32H726.028V542.954H736.55V532.32Z" fill="black"/>\r
<path d="M631.329 532.32H620.806V542.954H631.329V532.32Z" fill="black"/>\r
<path d="M620.806 532.32H610.284V542.954H620.806V532.32Z" fill="black"/>\r
<path d="M536.629 532.32H526.107V542.954H536.629V532.32Z" fill="black"/>\r
<path d="M484.018 532.32H473.496V542.954H484.018V532.32Z" fill="black"/>\r
<path d="M473.496 532.32H462.974V542.954H473.496V532.32Z" fill="black"/>\r
<path d="M462.974 532.32H452.452V542.954H462.974V532.32Z" fill="black"/>\r
<path d="M420.886 532.32H410.364V542.954H420.886V532.32Z" fill="black"/>\r
<path d="M94.6991 532.32H84.177V542.954H94.6991V532.32Z" fill="black"/>\r
<path d="M84.1772 532.32H73.655V542.954H84.1772V532.32Z" fill="black"/>\r
<path d="M1220.57 521.686H1210.05V532.32H1220.57V521.686Z" fill="black"/>\r
<path d="M1115.35 521.686H1104.82V532.32H1115.35V521.686Z" fill="black"/>\r
<path d="M1104.82 521.686H1094.3V532.32H1104.82V521.686Z" fill="black"/>\r
<path d="M1094.3 521.686H1083.78V532.32H1094.3V521.686Z" fill="black"/>\r
<path d="M1073.26 521.686H1062.74V532.32H1073.26V521.686Z" fill="black"/>\r
<path d="M1031.17 521.686H1020.65V532.32H1031.17V521.686Z" fill="black"/>\r
<path d="M1010.13 521.686H999.603V532.32H1010.13V521.686Z" fill="black"/>\r
<path d="M999.604 521.686H989.082V532.32H999.604V521.686Z" fill="black"/>\r
<path d="M936.47 521.686H925.948V532.32H936.47V521.686Z" fill="black"/>\r
<path d="M925.948 521.686H915.426V532.32H925.948V521.686Z" fill="black"/>\r
<path d="M915.425 521.686H904.903V532.32H915.425V521.686Z" fill="black"/>\r
<path d="M778.638 521.686H768.116V532.32H778.638V521.686Z" fill="black"/>\r
<path d="M768.116 521.686H757.594V532.32H768.116V521.686Z" fill="black"/>\r
<path d="M747.072 521.686H736.55V532.32H747.072V521.686Z" fill="black"/>\r
<path d="M641.85 521.686H631.328V532.32H641.85V521.686Z" fill="black"/>\r
<path d="M631.329 521.686H620.806V532.32H631.329V521.686Z" fill="black"/>\r
<path d="M620.806 521.686H610.284V532.32H620.806V521.686Z" fill="black"/>\r
<path d="M547.151 521.686H536.629V532.32H547.151V521.686Z" fill="black"/>\r
<path d="M494.54 521.686H484.018V532.32H494.54V521.686Z" fill="black"/>\r
<path d="M484.018 521.686H473.496V532.32H484.018V521.686Z" fill="black"/>\r
<path d="M473.496 521.686H462.974V532.32H473.496V521.686Z" fill="black"/>\r
<path d="M431.408 521.686H420.886V532.32H431.408V521.686Z" fill="black"/>\r
<path d="M73.6552 521.686H63.1331V532.32H73.6552V521.686Z" fill="black"/>\r
<path d="M1231.09 511.053H1220.57V521.687H1231.09V511.053Z" fill="black"/>\r
<path d="M1115.35 511.053H1104.82V521.687H1115.35V511.053Z" fill="black"/>\r
<path d="M1104.82 511.053H1094.3V521.687H1104.82V511.053Z" fill="black"/>\r
<path d="M1094.3 511.053H1083.78V521.687H1094.3V511.053Z" fill="black"/>\r
<path d="M1083.78 511.053H1073.26V521.687H1083.78V511.053Z" fill="black"/>\r
<path d="M1031.17 511.053H1020.65V521.687H1031.17V511.053Z" fill="black"/>\r
<path d="M1010.13 511.053H999.603V521.687H1010.13V511.053Z" fill="black"/>\r
<path d="M936.47 511.053H925.948V521.687H936.47V511.053Z" fill="black"/>\r
<path d="M925.948 511.053H915.426V521.687H925.948V511.053Z" fill="black"/>\r
<path d="M915.425 511.053H904.903V521.687H915.425V511.053Z" fill="black"/>\r
<path d="M862.815 511.053H852.293V521.687H862.815V511.053Z" fill="black"/>\r
<path d="M778.638 511.053H768.116V521.687H778.638V511.053Z" fill="black"/>\r
<path d="M768.116 511.053H757.594V521.687H768.116V511.053Z" fill="black"/>\r
<path d="M757.593 511.053H747.071V521.687H757.593V511.053Z" fill="black"/>\r
<path d="M641.85 511.053H631.328V521.687H641.85V511.053Z" fill="black"/>\r
<path d="M631.329 511.053H620.806V521.687H631.329V511.053Z" fill="black"/>\r
<path d="M620.806 511.053H610.284V521.687H620.806V511.053Z" fill="black"/>\r
<path d="M557.673 511.053H547.151V521.687H557.673V511.053Z" fill="black"/>\r
<path d="M505.063 511.053H494.541V521.687H505.063V511.053Z" fill="black"/>\r
<path d="M494.54 511.053H484.018V521.687H494.54V511.053Z" fill="black"/>\r
<path d="M484.018 511.053H473.496V521.687H484.018V511.053Z" fill="black"/>\r
<path d="M473.496 511.053H462.974V521.687H473.496V511.053Z" fill="black"/>\r
<path d="M441.93 511.053H431.408V521.687H441.93V511.053Z" fill="black"/>\r
<path d="M63.133 511.053H52.6108V521.687H63.133V511.053Z" fill="black"/>\r
<path d="M1241.61 500.379H1231.09V511.013H1241.61V500.379Z" fill="black"/>\r
<path d="M1125.87 500.379H1115.35V511.013H1125.87V500.379Z" fill="black"/>\r
<path d="M1115.35 500.379H1104.82V511.013H1115.35V500.379Z" fill="black"/>\r
<path d="M1104.82 500.379H1094.3V511.013H1104.82V500.379Z" fill="black"/>\r
<path d="M1094.3 500.379H1083.78V511.013H1094.3V500.379Z" fill="black"/>\r
<path d="M1031.17 500.379H1020.65V511.013H1031.17V500.379Z" fill="black"/>\r
<path d="M1020.65 500.379H1010.12V511.013H1020.65V500.379Z" fill="black"/>\r
<path d="M957.515 500.379H946.992V511.013H957.515V500.379Z" fill="black"/>\r
<path d="M946.993 500.379H936.471V511.013H946.993V500.379Z" fill="black"/>\r
<path d="M936.47 500.379H925.948V511.013H936.47V500.379Z" fill="black"/>\r
<path d="M925.948 500.379H915.426V511.013H925.948V500.379Z" fill="black"/>\r
<path d="M873.338 500.379H862.815V511.013H873.338V500.379Z" fill="black"/>\r
<path d="M789.161 500.379H778.638V511.013H789.161V500.379Z" fill="black"/>\r
<path d="M778.638 500.379H768.116V511.013H778.638V500.379Z" fill="black"/>\r
<path d="M768.116 500.379H757.594V511.013H768.116V500.379Z" fill="black"/>\r
<path d="M652.372 500.379H641.85V511.013H652.372V500.379Z" fill="black"/>\r
<path d="M641.85 500.379H631.328V511.013H641.85V500.379Z" fill="black"/>\r
<path d="M631.329 500.379H620.806V511.013H631.329V500.379Z" fill="black"/>\r
<path d="M568.195 500.379H557.673V511.013H568.195V500.379Z" fill="black"/>\r
<path d="M505.063 500.379H494.541V511.013H505.063V500.379Z" fill="black"/>\r
<path d="M494.54 500.379H484.018V511.013H494.54V500.379Z" fill="black"/>\r
<path d="M484.018 500.379H473.496V511.013H484.018V500.379Z" fill="black"/>\r
<path d="M1252.13 489.745H1241.61V500.379H1252.13V489.745Z" fill="black"/>\r
<path d="M1125.87 489.745H1115.35V500.379H1125.87V489.745Z" fill="black"/>\r
<path d="M1115.35 489.745H1104.82V500.379H1115.35V489.745Z" fill="black"/>\r
<path d="M1104.82 489.745H1094.3V500.379H1104.82V489.745Z" fill="black"/>\r
<path d="M1031.17 489.745H1020.65V500.379H1031.17V489.745Z" fill="black"/>\r
<path d="M968.036 489.745H957.514V500.379H968.036V489.745Z" fill="black"/>\r
<path d="M957.515 489.745H946.992V500.379H957.515V489.745Z" fill="black"/>\r
<path d="M946.993 489.745H936.471V500.379H946.993V489.745Z" fill="black"/>\r
<path d="M936.47 489.745H925.948V500.379H936.47V489.745Z" fill="black"/>\r
<path d="M883.86 489.745H873.337V500.379H883.86V489.745Z" fill="black"/>\r
<path d="M789.161 489.745H778.638V500.379H789.161V489.745Z" fill="black"/>\r
<path d="M778.638 489.745H768.116V500.379H778.638V489.745Z" fill="black"/>\r
<path d="M652.372 489.745H641.85V500.379H652.372V489.745Z" fill="black"/>\r
<path d="M641.85 489.745H631.328V500.379H641.85V489.745Z" fill="black"/>\r
<path d="M631.329 489.745H620.806V500.379H631.329V489.745Z" fill="black"/>\r
<path d="M578.718 489.745H568.196V500.379H578.718V489.745Z" fill="black"/>\r
<path d="M515.585 489.745H505.062V500.379H515.585V489.745Z" fill="black"/>\r
<path d="M505.063 489.745H494.541V500.379H505.063V489.745Z" fill="black"/>\r
<path d="M494.54 489.745H484.018V500.379H494.54V489.745Z" fill="black"/>\r
<path d="M484.018 489.745H473.496V500.379H484.018V489.745Z" fill="black"/>\r
<path d="M452.452 489.745H441.93V500.379H452.452V489.745Z" fill="black"/>\r
<path d="M52.6105 489.745H42.0884V500.379H52.6105V489.745Z" fill="black"/>\r
<path d="M1146.91 479.112H1136.39V489.745H1146.91V479.112Z" fill="black"/>\r
<path d="M1136.39 479.112H1125.87V489.745H1136.39V479.112Z" fill="black"/>\r
<path d="M1125.87 479.112H1115.35V489.745H1125.87V479.112Z" fill="black"/>\r
<path d="M1115.35 479.112H1104.82V489.745H1115.35V479.112Z" fill="black"/>\r
<path d="M1041.69 479.112H1031.17V489.745H1041.69V479.112Z" fill="black"/>\r
<path d="M1031.17 479.112H1020.65V489.745H1031.17V479.112Z" fill="black"/>\r
<path d="M978.559 479.112H968.037V489.745H978.559V479.112Z" fill="black"/>\r
<path d="M968.036 479.112H957.514V489.745H968.036V479.112Z" fill="black"/>\r
<path d="M957.515 479.112H946.992V489.745H957.515V479.112Z" fill="black"/>\r
<path d="M946.993 479.112H936.471V489.745H946.993V479.112Z" fill="black"/>\r
<path d="M894.382 479.112H883.86V489.745H894.382V479.112Z" fill="black"/>\r
<path d="M799.683 479.112H789.16V489.745H799.683V479.112Z" fill="black"/>\r
<path d="M789.161 479.112H778.638V489.745H789.161V479.112Z" fill="black"/>\r
<path d="M673.417 479.112H662.895V489.745H673.417V479.112Z" fill="black"/>\r
<path d="M662.895 479.112H652.373V489.745H662.895V479.112Z" fill="black"/>\r
<path d="M652.372 479.112H641.85V489.745H652.372V479.112Z" fill="black"/>\r
<path d="M641.85 479.112H631.328V489.745H641.85V479.112Z" fill="black"/>\r
<path d="M589.24 479.112H578.718V489.745H589.24V479.112Z" fill="black"/>\r
<path d="M515.585 479.112H505.062V489.745H515.585V479.112Z" fill="black"/>\r
<path d="M505.063 479.112H494.541V489.745H505.063V479.112Z" fill="black"/>\r
<path d="M494.54 479.112H484.018V489.745H494.54V479.112Z" fill="black"/>\r
<path d="M42.0883 479.112H31.5662V489.745H42.0883V479.112Z" fill="black"/>\r
<path d="M1189 468.438H1178.48V479.072H1189V468.438Z" fill="black"/>\r
<path d="M1178.48 468.438H1167.96V479.072H1178.48V468.438Z" fill="black"/>\r
<path d="M1146.91 468.438H1136.39V479.072H1146.91V468.438Z" fill="black"/>\r
<path d="M1136.39 468.438H1125.87V479.072H1136.39V468.438Z" fill="black"/>\r
<path d="M1125.87 468.438H1115.35V479.072H1125.87V468.438Z" fill="black"/>\r
<path d="M1052.21 468.438H1041.69V479.072H1052.21V468.438Z" fill="black"/>\r
<path d="M1041.69 468.438H1031.17V479.072H1041.69V468.438Z" fill="black"/>\r
<path d="M989.081 468.438H978.559V479.072H989.081V468.438Z" fill="black"/>\r
<path d="M978.559 468.438H968.037V479.072H978.559V468.438Z" fill="black"/>\r
<path d="M968.036 468.438H957.514V479.072H968.036V468.438Z" fill="black"/>\r
<path d="M957.515 468.438H946.992V479.072H957.515V468.438Z" fill="black"/>\r
<path d="M810.204 468.438H799.682V479.072H810.204V468.438Z" fill="black"/>\r
<path d="M799.683 468.438H789.16V479.072H799.683V468.438Z" fill="black"/>\r
<path d="M715.506 468.438H704.983V479.072H715.506V468.438Z" fill="black"/>\r
<path d="M704.983 468.438H694.461V479.072H704.983V468.438Z" fill="black"/>\r
<path d="M673.417 468.438H662.895V479.072H673.417V468.438Z" fill="black"/>\r
<path d="M662.895 468.438H652.373V479.072H662.895V468.438Z" fill="black"/>\r
<path d="M652.372 468.438H641.85V479.072H652.372V468.438Z" fill="black"/>\r
<path d="M641.85 468.438H631.328V479.072H641.85V468.438Z" fill="black"/>\r
<path d="M526.107 468.438H515.585V479.072H526.107V468.438Z" fill="black"/>\r
<path d="M515.585 468.438H505.062V479.072H515.585V468.438Z" fill="black"/>\r
<path d="M505.063 468.438H494.541V479.072H505.063V468.438Z" fill="black"/>\r
<path d="M494.54 468.438H484.018V479.072H494.54V468.438Z" fill="black"/>\r
<path d="M326.186 468.438H315.664V479.072H326.186V468.438Z" fill="black"/>\r
<path d="M315.664 468.438H305.142V479.072H315.664V468.438Z" fill="black"/>\r
<path d="M305.142 468.438H294.62V479.072H305.142V468.438Z" fill="black"/>\r
<path d="M294.62 468.438H284.098V479.072H294.62V468.438Z" fill="black"/>\r
<path d="M284.098 468.438H273.576V479.072H284.098V468.438Z" fill="black"/>\r
<path d="M273.576 468.438H263.053V479.072H273.576V468.438Z" fill="black"/>\r
<path d="M242.009 468.438H231.487V479.072H242.009V468.438Z" fill="black"/>\r
<path d="M231.487 468.438H220.965V479.072H231.487V468.438Z" fill="black"/>\r
<path d="M220.965 468.438H210.443V479.072H220.965V468.438Z" fill="black"/>\r
<path d="M210.443 468.438H199.92V479.072H210.443V468.438Z" fill="black"/>\r
<path d="M199.92 468.438H189.398V479.072H199.92V468.438Z" fill="black"/>\r
<path d="M31.5666 468.438H21.0444V479.072H31.5666V468.438Z" fill="black"/>\r
<path d="M1210.05 457.805H1199.52V468.439H1210.05V457.805Z" fill="black"/>\r
<path d="M1199.52 457.805H1189V468.439H1199.52V457.805Z" fill="black"/>\r
<path d="M1157.44 457.805H1146.91V468.439H1157.44V457.805Z" fill="black"/>\r
<path d="M1146.91 457.805H1136.39V468.439H1146.91V457.805Z" fill="black"/>\r
<path d="M1136.39 457.805H1125.87V468.439H1136.39V457.805Z" fill="black"/>\r
<path d="M1125.87 457.805H1115.35V468.439H1125.87V457.805Z" fill="black"/>\r
<path d="M1052.21 457.805H1041.69V468.439H1052.21V457.805Z" fill="black"/>\r
<path d="M1041.69 457.805H1031.17V468.439H1041.69V457.805Z" fill="black"/>\r
<path d="M989.081 457.805H978.559V468.439H989.081V457.805Z" fill="black"/>\r
<path d="M978.559 457.805H968.037V468.439H978.559V457.805Z" fill="black"/>\r
<path d="M968.036 457.805H957.514V468.439H968.036V457.805Z" fill="black"/>\r
<path d="M904.904 457.805H894.382V468.439H904.904V457.805Z" fill="black"/>\r
<path d="M820.727 457.805H810.205V468.439H820.727V457.805Z" fill="black"/>\r
<path d="M810.204 457.805H799.682V468.439H810.204V457.805Z" fill="black"/>\r
<path d="M799.683 457.805H789.16V468.439H799.683V457.805Z" fill="black"/>\r
<path d="M736.55 457.805H726.028V468.439H736.55V457.805Z" fill="black"/>\r
<path d="M726.027 457.805H715.505V468.439H726.027V457.805Z" fill="black"/>\r
<path d="M673.417 457.805H662.895V468.439H673.417V457.805Z" fill="black"/>\r
<path d="M662.895 457.805H652.373V468.439H662.895V457.805Z" fill="black"/>\r
<path d="M652.372 457.805H641.85V468.439H652.372V457.805Z" fill="black"/>\r
<path d="M599.761 457.805H589.239V468.439H599.761V457.805Z" fill="black"/>\r
<path d="M526.107 457.805H515.585V468.439H526.107V457.805Z" fill="black"/>\r
<path d="M515.585 457.805H505.062V468.439H515.585V457.805Z" fill="black"/>\r
<path d="M505.063 457.805H494.541V468.439H505.063V457.805Z" fill="black"/>\r
<path d="M494.54 457.805H484.018V468.439H494.54V457.805Z" fill="black"/>\r
<path d="M347.231 457.805H336.709V468.439H347.231V457.805Z" fill="black"/>\r
<path d="M336.708 457.805H326.186V468.439H336.708V457.805Z" fill="black"/>\r
<path d="M199.92 457.805H189.398V468.439H199.92V457.805Z" fill="black"/>\r
<path d="M189.399 457.805H178.876V468.439H189.399V457.805Z" fill="black"/>\r
<path d="M178.876 457.805H168.354V468.439H178.876V457.805Z" fill="black"/>\r
<path d="M31.5666 457.805H21.0444V468.439H31.5666V457.805Z" fill="black"/>\r
<path d="M1220.57 447.171H1210.05V457.805H1220.57V447.171Z" fill="black"/>\r
<path d="M1167.96 447.171H1157.44V457.805H1167.96V447.171Z" fill="black"/>\r
<path d="M1157.44 447.171H1146.91V457.805H1157.44V447.171Z" fill="black"/>\r
<path d="M1146.91 447.171H1136.39V457.805H1146.91V447.171Z" fill="black"/>\r
<path d="M1136.39 447.171H1125.87V457.805H1136.39V447.171Z" fill="black"/>\r
<path d="M1062.74 447.171H1052.21V457.805H1062.74V447.171Z" fill="black"/>\r
<path d="M1052.21 447.171H1041.69V457.805H1052.21V447.171Z" fill="black"/>\r
<path d="M999.604 447.171H989.082V457.805H999.604V447.171Z" fill="black"/>\r
<path d="M989.081 447.171H978.559V457.805H989.081V447.171Z" fill="black"/>\r
<path d="M978.559 447.171H968.037V457.805H978.559V447.171Z" fill="black"/>\r
<path d="M915.425 447.171H904.903V457.805H915.425V447.171Z" fill="black"/>\r
<path d="M820.727 447.171H810.205V457.805H820.727V447.171Z" fill="black"/>\r
<path d="M810.204 447.171H799.682V457.805H810.204V447.171Z" fill="black"/>\r
<path d="M747.072 447.171H736.55V457.805H747.072V447.171Z" fill="black"/>\r
<path d="M683.939 447.171H673.417V457.805H683.939V447.171Z" fill="black"/>\r
<path d="M673.417 447.171H662.895V457.805H673.417V447.171Z" fill="black"/>\r
<path d="M662.895 447.171H652.373V457.805H662.895V447.171Z" fill="black"/>\r
<path d="M610.284 447.171H599.762V457.805H610.284V447.171Z" fill="black"/>\r
<path d="M536.629 447.171H526.107V457.805H536.629V447.171Z" fill="black"/>\r
<path d="M526.107 447.171H515.585V457.805H526.107V447.171Z" fill="black"/>\r
<path d="M515.585 447.171H505.062V457.805H515.585V447.171Z" fill="black"/>\r
<path d="M505.063 447.171H494.541V457.805H505.063V447.171Z" fill="black"/>\r
<path d="M378.797 447.171H368.275V457.805H378.797V447.171Z" fill="black"/>\r
<path d="M368.275 447.171H357.753V457.805H368.275V447.171Z" fill="black"/>\r
<path d="M168.354 447.171H157.832V457.805H168.354V447.171Z" fill="black"/>\r
<path d="M157.832 447.171H147.31V457.805H157.832V447.171Z" fill="black"/>\r
<path d="M1241.61 436.498H1231.09V447.131H1241.61V436.498Z" fill="black"/>\r
<path d="M1167.96 436.498H1157.44V447.131H1167.96V436.498Z" fill="black"/>\r
<path d="M1157.44 436.498H1146.91V447.131H1157.44V436.498Z" fill="black"/>\r
<path d="M1146.91 436.498H1136.39V447.131H1146.91V436.498Z" fill="black"/>\r
<path d="M1073.26 436.498H1062.74V447.131H1073.26V436.498Z" fill="black"/>\r
<path d="M1062.74 436.498H1052.21V447.131H1062.74V436.498Z" fill="black"/>\r
<path d="M1052.21 436.498H1041.69V447.131H1052.21V436.498Z" fill="black"/>\r
<path d="M1010.13 436.498H999.603V447.131H1010.13V436.498Z" fill="black"/>\r
<path d="M999.604 436.498H989.082V447.131H999.604V436.498Z" fill="black"/>\r
<path d="M989.081 436.498H978.559V447.131H989.081V436.498Z" fill="black"/>\r
<path d="M925.948 436.498H915.426V447.131H925.948V436.498Z" fill="black"/>\r
<path d="M831.249 436.498H820.727V447.131H831.249V436.498Z" fill="black"/>\r
<path d="M820.727 436.498H810.205V447.131H820.727V436.498Z" fill="black"/>\r
<path d="M768.116 436.498H757.594V447.131H768.116V436.498Z" fill="black"/>\r
<path d="M704.983 436.498H694.461V447.131H704.983V436.498Z" fill="black"/>\r
<path d="M694.461 436.498H683.939V447.131H694.461V436.498Z" fill="black"/>\r
<path d="M683.939 436.498H673.417V447.131H683.939V436.498Z" fill="black"/>\r
<path d="M673.417 436.498H662.895V447.131H673.417V436.498Z" fill="black"/>\r
<path d="M620.806 436.498H610.284V447.131H620.806V436.498Z" fill="black"/>\r
<path d="M536.629 436.498H526.107V447.131H536.629V436.498Z" fill="black"/>\r
<path d="M526.107 436.498H515.585V447.131H526.107V436.498Z" fill="black"/>\r
<path d="M515.585 436.498H505.062V447.131H515.585V436.498Z" fill="black"/>\r
<path d="M505.063 436.498H494.541V447.131H505.063V436.498Z" fill="black"/>\r
<path d="M399.842 436.498H389.319V447.131H399.842V436.498Z" fill="black"/>\r
<path d="M389.319 436.498H378.797V447.131H389.319V436.498Z" fill="black"/>\r
<path d="M147.31 436.498H136.788V447.131H147.31V436.498Z" fill="black"/>\r
<path d="M21.0443 436.498H10.5222V447.131H21.0443V436.498Z" fill="black"/>\r
<path d="M1252.13 425.864H1241.61V436.498H1252.13V425.864Z" fill="black"/>\r
<path d="M1178.48 425.864H1167.96V436.498H1178.48V425.864Z" fill="black"/>\r
<path d="M1167.96 425.864H1157.44V436.498H1167.96V425.864Z" fill="black"/>\r
<path d="M1157.44 425.864H1146.91V436.498H1157.44V425.864Z" fill="black"/>\r
<path d="M1083.78 425.864H1073.26V436.498H1083.78V425.864Z" fill="black"/>\r
<path d="M1073.26 425.864H1062.74V436.498H1073.26V425.864Z" fill="black"/>\r
<path d="M1062.74 425.864H1052.21V436.498H1062.74V425.864Z" fill="black"/>\r
<path d="M1010.13 425.864H999.603V436.498H1010.13V425.864Z" fill="black"/>\r
<path d="M999.604 425.864H989.082V436.498H999.604V425.864Z" fill="black"/>\r
<path d="M936.47 425.864H925.948V436.498H936.47V425.864Z" fill="black"/>\r
<path d="M841.772 425.864H831.25V436.498H841.772V425.864Z" fill="black"/>\r
<path d="M831.249 425.864H820.727V436.498H831.249V425.864Z" fill="black"/>\r
<path d="M778.638 425.864H768.116V436.498H778.638V425.864Z" fill="black"/>\r
<path d="M704.983 425.864H694.461V436.498H704.983V425.864Z" fill="black"/>\r
<path d="M694.461 425.864H683.939V436.498H694.461V425.864Z" fill="black"/>\r
<path d="M683.939 425.864H673.417V436.498H683.939V425.864Z" fill="black"/>\r
<path d="M631.329 425.864H620.806V436.498H631.329V425.864Z" fill="black"/>\r
<path d="M547.151 425.864H536.629V436.498H547.151V425.864Z" fill="black"/>\r
<path d="M536.629 425.864H526.107V436.498H536.629V425.864Z" fill="black"/>\r
<path d="M526.107 425.864H515.585V436.498H526.107V425.864Z" fill="black"/>\r
<path d="M515.585 425.864H505.062V436.498H515.585V425.864Z" fill="black"/>\r
<path d="M410.363 425.864H399.841V436.498H410.363V425.864Z" fill="black"/>\r
<path d="M136.788 425.864H126.266V436.498H136.788V425.864Z" fill="black"/>\r
<path d="M21.0443 425.864H10.5222V436.498H21.0443V425.864Z" fill="black"/>\r
<path d="M1262.66 415.23H1252.13V425.864H1262.66V415.23Z" fill="black"/>\r
<path d="M1199.52 415.23H1189V425.864H1199.52V415.23Z" fill="black"/>\r
<path d="M1189 415.23H1178.48V425.864H1189V415.23Z" fill="black"/>\r
<path d="M1178.48 415.23H1167.96V425.864H1178.48V415.23Z" fill="black"/>\r
<path d="M1167.96 415.23H1157.44V425.864H1167.96V415.23Z" fill="black"/>\r
<path d="M1094.3 415.23H1083.78V425.864H1094.3V415.23Z" fill="black"/>\r
<path d="M1083.78 415.23H1073.26V425.864H1083.78V415.23Z" fill="black"/>\r
<path d="M1073.26 415.23H1062.74V425.864H1073.26V415.23Z" fill="black"/>\r
<path d="M1010.13 415.23H999.603V425.864H1010.13V415.23Z" fill="black"/>\r
<path d="M999.604 415.23H989.082V425.864H999.604V415.23Z" fill="black"/>\r
<path d="M946.993 415.23H936.471V425.864H946.993V415.23Z" fill="black"/>\r
<path d="M852.293 415.23H841.771V425.864H852.293V415.23Z" fill="black"/>\r
<path d="M841.772 415.23H831.25V425.864H841.772V415.23Z" fill="black"/>\r
<path d="M831.249 415.23H820.727V425.864H831.249V415.23Z" fill="black"/>\r
<path d="M789.161 415.23H778.638V425.864H789.161V415.23Z" fill="black"/>\r
<path d="M726.027 415.23H715.505V425.864H726.027V415.23Z" fill="black"/>\r
<path d="M715.506 415.23H704.983V425.864H715.506V415.23Z" fill="black"/>\r
<path d="M704.983 415.23H694.461V425.864H704.983V415.23Z" fill="black"/>\r
<path d="M694.461 415.23H683.939V425.864H694.461V415.23Z" fill="black"/>\r
<path d="M641.85 415.23H631.328V425.864H641.85V415.23Z" fill="black"/>\r
<path d="M631.329 415.23H620.806V425.864H631.329V415.23Z" fill="black"/>\r
<path d="M547.151 415.23H536.629V425.864H547.151V415.23Z" fill="black"/>\r
<path d="M536.629 415.23H526.107V425.864H536.629V415.23Z" fill="black"/>\r
<path d="M526.107 415.23H515.585V425.864H526.107V415.23Z" fill="black"/>\r
<path d="M515.585 415.23H505.062V425.864H515.585V415.23Z" fill="black"/>\r
<path d="M420.886 415.23H410.364V425.864H420.886V415.23Z" fill="black"/>\r
<path d="M126.266 415.23H115.744V425.864H126.266V415.23Z" fill="black"/>\r
<path d="M10.5221 415.23H0V425.864H10.5221V415.23Z" fill="black"/>\r
<path d="M1262.66 404.557H1252.13V415.191H1262.66V404.557Z" fill="black"/>\r
<path d="M1210.05 404.557H1199.52V415.191H1210.05V404.557Z" fill="black"/>\r
<path d="M1199.52 404.557H1189V415.191H1199.52V404.557Z" fill="black"/>\r
<path d="M1189 404.557H1178.48V415.191H1189V404.557Z" fill="black"/>\r
<path d="M1178.48 404.557H1167.96V415.191H1178.48V404.557Z" fill="black"/>\r
<path d="M1094.3 404.557H1083.78V415.191H1094.3V404.557Z" fill="black"/>\r
<path d="M1083.78 404.557H1073.26V415.191H1083.78V404.557Z" fill="black"/>\r
<path d="M1073.26 404.557H1062.74V415.191H1073.26V404.557Z" fill="black"/>\r
<path d="M1010.13 404.557H999.603V415.191H1010.13V404.557Z" fill="black"/>\r
<path d="M957.515 404.557H946.992V415.191H957.515V404.557Z" fill="black"/>\r
<path d="M862.815 404.557H852.293V415.191H862.815V404.557Z" fill="black"/>\r
<path d="M852.293 404.557H841.771V415.191H852.293V404.557Z" fill="black"/>\r
<path d="M841.772 404.557H831.25V415.191H841.772V404.557Z" fill="black"/>\r
<path d="M789.161 404.557H778.638V415.191H789.161V404.557Z" fill="black"/>\r
<path d="M736.55 404.557H726.028V415.191H736.55V404.557Z" fill="black"/>\r
<path d="M726.027 404.557H715.505V415.191H726.027V404.557Z" fill="black"/>\r
<path d="M715.506 404.557H704.983V415.191H715.506V404.557Z" fill="black"/>\r
<path d="M704.983 404.557H694.461V415.191H704.983V404.557Z" fill="black"/>\r
<path d="M641.85 404.557H631.328V415.191H641.85V404.557Z" fill="black"/>\r
<path d="M557.673 404.557H547.151V415.191H557.673V404.557Z" fill="black"/>\r
<path d="M547.151 404.557H536.629V415.191H547.151V404.557Z" fill="black"/>\r
<path d="M536.629 404.557H526.107V415.191H536.629V404.557Z" fill="black"/>\r
<path d="M526.107 404.557H515.585V415.191H526.107V404.557Z" fill="black"/>\r
<path d="M515.585 404.557H505.062V415.191H515.585V404.557Z" fill="black"/>\r
<path d="M431.408 404.557H420.886V415.191H431.408V404.557Z" fill="black"/>\r
<path d="M126.266 404.557H115.744V415.191H126.266V404.557Z" fill="black"/>\r
<path d="M10.5221 404.557H0V415.191H10.5221V404.557Z" fill="black"/>\r
<path d="M1262.66 393.923H1252.13V404.557H1262.66V393.923Z" fill="black"/>\r
<path d="M1220.57 393.923H1210.05V404.557H1220.57V393.923Z" fill="black"/>\r
<path d="M1210.05 393.923H1199.52V404.557H1210.05V393.923Z" fill="black"/>\r
<path d="M1199.52 393.923H1189V404.557H1199.52V393.923Z" fill="black"/>\r
<path d="M1115.35 393.923H1104.82V404.557H1115.35V393.923Z" fill="black"/>\r
<path d="M1104.82 393.923H1094.3V404.557H1104.82V393.923Z" fill="black"/>\r
<path d="M1094.3 393.923H1083.78V404.557H1094.3V393.923Z" fill="black"/>\r
<path d="M1083.78 393.923H1073.26V404.557H1083.78V393.923Z" fill="black"/>\r
<path d="M1010.13 393.923H999.603V404.557H1010.13V393.923Z" fill="black"/>\r
<path d="M978.559 393.923H968.037V404.557H978.559V393.923Z" fill="black"/>\r
<path d="M968.036 393.923H957.514V404.557H968.036V393.923Z" fill="black"/>\r
<path d="M862.815 393.923H852.293V404.557H862.815V393.923Z" fill="black"/>\r
<path d="M852.293 393.923H841.771V404.557H852.293V393.923Z" fill="black"/>\r
<path d="M747.072 393.923H736.55V404.557H747.072V393.923Z" fill="black"/>\r
<path d="M736.55 393.923H726.028V404.557H736.55V393.923Z" fill="black"/>\r
<path d="M726.027 393.923H715.505V404.557H726.027V393.923Z" fill="black"/>\r
<path d="M652.372 393.923H641.85V404.557H652.372V393.923Z" fill="black"/>\r
<path d="M641.85 393.923H631.328V404.557H641.85V393.923Z" fill="black"/>\r
<path d="M557.673 393.923H547.151V404.557H557.673V393.923Z" fill="black"/>\r
<path d="M547.151 393.923H536.629V404.557H547.151V393.923Z" fill="black"/>\r
<path d="M536.629 393.923H526.107V404.557H536.629V393.923Z" fill="black"/>\r
<path d="M526.107 393.923H515.585V404.557H526.107V393.923Z" fill="black"/>\r
<path d="M441.93 393.923H431.408V404.557H441.93V393.923Z" fill="black"/>\r
<path d="M115.744 393.923H105.221V404.557H115.744V393.923Z" fill="black"/>\r
<path d="M10.5221 393.923H0V404.557H10.5221V393.923Z" fill="black"/>\r
<path d="M1262.66 383.289H1252.13V393.923H1262.66V383.289Z" fill="black"/>\r
<path d="M1252.13 383.289H1241.61V393.923H1252.13V383.289Z" fill="black"/>\r
<path d="M1241.61 383.289H1231.09V393.923H1241.61V383.289Z" fill="black"/>\r
<path d="M1231.09 383.289H1220.57V393.923H1231.09V383.289Z" fill="black"/>\r
<path d="M1220.57 383.289H1210.05V393.923H1220.57V383.289Z" fill="black"/>\r
<path d="M999.604 383.289H989.082V393.923H999.604V383.289Z" fill="black"/>\r
<path d="M989.081 383.289H978.559V393.923H989.081V383.289Z" fill="black"/>\r
<path d="M873.338 383.289H862.815V393.923H873.338V383.289Z" fill="black"/>\r
<path d="M862.815 383.289H852.293V393.923H862.815V383.289Z" fill="black"/>\r
<path d="M789.161 383.289H778.638V393.923H789.161V383.289Z" fill="black"/>\r
<path d="M778.638 383.289H768.116V393.923H778.638V383.289Z" fill="black"/>\r
<path d="M768.116 383.289H757.594V393.923H768.116V383.289Z" fill="black"/>\r
<path d="M757.593 383.289H747.071V393.923H757.593V383.289Z" fill="black"/>\r
<path d="M747.072 383.289H736.55V393.923H747.072V383.289Z" fill="black"/>\r
<path d="M662.895 383.289H652.373V393.923H662.895V383.289Z" fill="black"/>\r
<path d="M652.372 383.289H641.85V393.923H652.372V383.289Z" fill="black"/>\r
<path d="M557.673 383.289H547.151V393.923H557.673V383.289Z" fill="black"/>\r
<path d="M547.151 383.289H536.629V393.923H547.151V383.289Z" fill="black"/>\r
<path d="M536.629 383.289H526.107V393.923H536.629V383.289Z" fill="black"/>\r
<path d="M526.107 383.289H515.585V393.923H526.107V383.289Z" fill="black"/>\r
<path d="M252.531 383.289H242.009V393.923H252.531V383.289Z" fill="black"/>\r
<path d="M242.009 383.289H231.487V393.923H242.009V383.289Z" fill="black"/>\r
<path d="M231.487 383.289H220.965V393.923H231.487V383.289Z" fill="black"/>\r
<path d="M220.965 383.289H210.443V393.923H220.965V383.289Z" fill="black"/>\r
<path d="M210.443 383.289H199.92V393.923H210.443V383.289Z" fill="black"/>\r
<path d="M199.92 383.289H189.398V393.923H199.92V383.289Z" fill="black"/>\r
<path d="M189.399 383.289H178.876V393.923H189.399V383.289Z" fill="black"/>\r
<path d="M178.876 383.289H168.354V393.923H178.876V383.289Z" fill="black"/>\r
<path d="M115.744 383.289H105.221V393.923H115.744V383.289Z" fill="black"/>\r
<path d="M10.5221 383.289H0V393.923H10.5221V383.289Z" fill="black"/>\r
<path d="M883.86 372.616H873.337V383.25H883.86V372.616Z" fill="black"/>\r
<path d="M873.338 372.616H862.815V383.25H873.338V372.616Z" fill="black"/>\r
<path d="M662.895 372.616H652.373V383.25H662.895V372.616Z" fill="black"/>\r
<path d="M557.673 372.616H547.151V383.25H557.673V372.616Z" fill="black"/>\r
<path d="M547.151 372.616H536.629V383.25H547.151V372.616Z" fill="black"/>\r
<path d="M536.629 372.616H526.107V383.25H536.629V372.616Z" fill="black"/>\r
<path d="M526.107 372.616H515.585V383.25H526.107V372.616Z" fill="black"/>\r
<path d="M452.452 372.616H441.93V383.25H452.452V372.616Z" fill="black"/>\r
<path d="M284.098 372.616H273.576V383.25H284.098V372.616Z" fill="black"/>\r
<path d="M273.576 372.616H263.053V383.25H273.576V372.616Z" fill="black"/>\r
<path d="M157.832 372.616H147.31V383.25H157.832V372.616Z" fill="black"/>\r
<path d="M147.31 372.616H136.788V383.25H147.31V372.616Z" fill="black"/>\r
<path d="M136.788 372.616H126.266V383.25H136.788V372.616Z" fill="black"/>\r
<path d="M115.744 372.616H105.221V383.25H115.744V372.616Z" fill="black"/>\r
<path d="M10.5221 372.616H0V383.25H10.5221V372.616Z" fill="black"/>\r
<path d="M894.382 361.982H883.86V372.616H894.382V361.982Z" fill="black"/>\r
<path d="M883.86 361.982H873.337V372.616H883.86V361.982Z" fill="black"/>\r
<path d="M873.338 361.982H862.815V372.616H873.338V361.982Z" fill="black"/>\r
<path d="M673.417 361.982H662.895V372.616H673.417V361.982Z" fill="black"/>\r
<path d="M557.673 361.982H547.151V372.616H557.673V361.982Z" fill="black"/>\r
<path d="M547.151 361.982H536.629V372.616H547.151V361.982Z" fill="black"/>\r
<path d="M536.629 361.982H526.107V372.616H536.629V361.982Z" fill="black"/>\r
<path d="M526.107 361.982H515.585V372.616H526.107V361.982Z" fill="black"/>\r
<path d="M315.664 361.982H305.142V372.616H315.664V361.982Z" fill="black"/>\r
<path d="M305.142 361.982H294.62V372.616H305.142V361.982Z" fill="black"/>\r
<path d="M126.266 361.982H115.744V372.616H126.266V361.982Z" fill="black"/>\r
<path d="M115.744 361.982H105.221V372.616H115.744V361.982Z" fill="black"/>\r
<path d="M10.5221 361.982H0V372.616H10.5221V361.982Z" fill="black"/>\r
<path d="M894.382 351.349H883.86V361.982H894.382V351.349Z" fill="black"/>\r
<path d="M883.86 351.349H873.337V361.982H883.86V351.349Z" fill="black"/>\r
<path d="M673.417 351.349H662.895V361.982H673.417V351.349Z" fill="black"/>\r
<path d="M568.195 351.349H557.673V361.982H568.195V351.349Z" fill="black"/>\r
<path d="M557.673 351.349H547.151V361.982H557.673V351.349Z" fill="black"/>\r
<path d="M547.151 351.349H536.629V361.982H547.151V351.349Z" fill="black"/>\r
<path d="M536.629 351.349H526.107V361.982H536.629V351.349Z" fill="black"/>\r
<path d="M462.974 351.349H452.452V361.982H462.974V351.349Z" fill="black"/>\r
<path d="M326.186 351.349H315.664V361.982H326.186V351.349Z" fill="black"/>\r
<path d="M115.744 351.349H105.221V361.982H115.744V351.349Z" fill="black"/>\r
<path d="M105.221 351.349H94.6992V361.982H105.221V351.349Z" fill="black"/>\r
<path d="M10.5221 351.349H0V361.982H10.5221V351.349Z" fill="black"/>\r
<path d="M904.904 340.675H894.382V351.309H904.904V340.675Z" fill="black"/>\r
<path d="M894.382 340.675H883.86V351.309H894.382V340.675Z" fill="black"/>\r
<path d="M683.939 340.675H673.417V351.309H683.939V340.675Z" fill="black"/>\r
<path d="M568.195 340.675H557.673V351.309H568.195V340.675Z" fill="black"/>\r
<path d="M557.673 340.675H547.151V351.309H557.673V340.675Z" fill="black"/>\r
<path d="M547.151 340.675H536.629V351.309H547.151V340.675Z" fill="black"/>\r
<path d="M536.629 340.675H526.107V351.309H536.629V340.675Z" fill="black"/>\r
<path d="M462.974 340.675H452.452V351.309H462.974V340.675Z" fill="black"/>\r
<path d="M336.708 340.675H326.186V351.309H336.708V340.675Z" fill="black"/>\r
<path d="M115.744 340.675H105.221V351.309H115.744V340.675Z" fill="black"/>\r
<path d="M84.1772 340.675H73.655V351.309H84.1772V340.675Z" fill="black"/>\r
<path d="M10.5221 340.675H0V351.309H10.5221V340.675Z" fill="black"/>\r
<path d="M915.425 330.041H904.903V340.675H915.425V330.041Z" fill="black"/>\r
<path d="M904.904 330.041H894.382V340.675H904.904V330.041Z" fill="black"/>\r
<path d="M894.382 330.041H883.86V340.675H894.382V330.041Z" fill="black"/>\r
<path d="M683.939 330.041H673.417V340.675H683.939V330.041Z" fill="black"/>\r
<path d="M568.195 330.041H557.673V340.675H568.195V330.041Z" fill="black"/>\r
<path d="M557.673 330.041H547.151V340.675H557.673V330.041Z" fill="black"/>\r
<path d="M547.151 330.041H536.629V340.675H547.151V330.041Z" fill="black"/>\r
<path d="M536.629 330.041H526.107V340.675H536.629V330.041Z" fill="black"/>\r
<path d="M473.496 330.041H462.974V340.675H473.496V330.041Z" fill="black"/>\r
<path d="M347.231 330.041H336.709V340.675H347.231V330.041Z" fill="black"/>\r
<path d="M115.744 330.041H105.221V340.675H115.744V330.041Z" fill="black"/>\r
<path d="M73.6552 330.041H63.1331V340.675H73.6552V330.041Z" fill="black"/>\r
<path d="M10.5221 330.041H0V340.675H10.5221V330.041Z" fill="black"/>\r
<path d="M925.948 319.408H915.426V330.042H925.948V319.408Z" fill="black"/>\r
<path d="M915.425 319.408H904.903V330.042H915.425V319.408Z" fill="black"/>\r
<path d="M904.904 319.408H894.382V330.042H904.904V319.408Z" fill="black"/>\r
<path d="M694.461 319.408H683.939V330.042H694.461V319.408Z" fill="black"/>\r
<path d="M568.195 319.408H557.673V330.042H568.195V319.408Z" fill="black"/>\r
<path d="M557.673 319.408H547.151V330.042H557.673V319.408Z" fill="black"/>\r
<path d="M547.151 319.408H536.629V330.042H547.151V319.408Z" fill="black"/>\r
<path d="M536.629 319.408H526.107V330.042H536.629V319.408Z" fill="black"/>\r
<path d="M473.496 319.408H462.974V330.042H473.496V319.408Z" fill="black"/>\r
<path d="M357.753 319.408H347.23V330.042H357.753V319.408Z" fill="black"/>\r
<path d="M63.133 319.408H52.6108V330.042H63.133V319.408Z" fill="black"/>\r
<path d="M10.5221 319.408H0V330.042H10.5221V319.408Z" fill="black"/>\r
<path d="M925.948 308.735H915.426V319.368H925.948V308.735Z" fill="black"/>\r
<path d="M915.425 308.735H904.903V319.368H915.425V308.735Z" fill="black"/>\r
<path d="M694.461 308.735H683.939V319.368H694.461V308.735Z" fill="black"/>\r
<path d="M568.195 308.735H557.673V319.368H568.195V308.735Z" fill="black"/>\r
<path d="M557.673 308.735H547.151V319.368H557.673V308.735Z" fill="black"/>\r
<path d="M547.151 308.735H536.629V319.368H547.151V308.735Z" fill="black"/>\r
<path d="M536.629 308.735H526.107V319.368H536.629V308.735Z" fill="black"/>\r
<path d="M473.496 308.735H462.974V319.368H473.496V308.735Z" fill="black"/>\r
<path d="M357.753 308.735H347.23V319.368H357.753V308.735Z" fill="black"/>\r
<path d="M126.266 308.735H115.744V319.368H126.266V308.735Z" fill="black"/>\r
<path d="M10.5221 308.735H0V319.368H10.5221V308.735Z" fill="black"/>\r
<path d="M936.47 298.101H925.948V308.735H936.47V298.101Z" fill="black"/>\r
<path d="M925.948 298.101H915.426V308.735H925.948V298.101Z" fill="black"/>\r
<path d="M704.983 298.101H694.461V308.735H704.983V298.101Z" fill="black"/>\r
<path d="M568.195 298.101H557.673V308.735H568.195V298.101Z" fill="black"/>\r
<path d="M557.673 298.101H547.151V308.735H557.673V298.101Z" fill="black"/>\r
<path d="M547.151 298.101H536.629V308.735H547.151V298.101Z" fill="black"/>\r
<path d="M536.629 298.101H526.107V308.735H536.629V298.101Z" fill="black"/>\r
<path d="M473.496 298.101H462.974V308.735H473.496V298.101Z" fill="black"/>\r
<path d="M368.275 298.101H357.753V308.735H368.275V298.101Z" fill="black"/>\r
<path d="M52.6105 298.101H42.0884V308.735H52.6105V298.101Z" fill="black"/>\r
<path d="M21.0443 298.101H10.5222V308.735H21.0443V298.101Z" fill="black"/>\r
<path d="M946.993 287.467H936.471V298.101H946.993V287.467Z" fill="black"/>\r
<path d="M936.47 287.467H925.948V298.101H936.47V287.467Z" fill="black"/>\r
<path d="M925.948 287.467H915.426V298.101H925.948V287.467Z" fill="black"/>\r
<path d="M704.983 287.467H694.461V298.101H704.983V287.467Z" fill="black"/>\r
<path d="M568.195 287.467H557.673V298.101H568.195V287.467Z" fill="black"/>\r
<path d="M557.673 287.467H547.151V298.101H557.673V287.467Z" fill="black"/>\r
<path d="M547.151 287.467H536.629V298.101H547.151V287.467Z" fill="black"/>\r
<path d="M473.496 287.467H462.974V298.101H473.496V287.467Z" fill="black"/>\r
<path d="M368.275 287.467H357.753V298.101H368.275V287.467Z" fill="black"/>\r
<path d="M136.788 287.467H126.266V298.101H136.788V287.467Z" fill="black"/>\r
<path d="M42.0883 287.467H31.5662V298.101H42.0883V287.467Z" fill="black"/>\r
<path d="M21.0443 287.467H10.5222V298.101H21.0443V287.467Z" fill="black"/>\r
<path d="M957.515 276.794H946.992V287.428H957.515V276.794Z" fill="black"/>\r
<path d="M946.993 276.794H936.471V287.428H946.993V276.794Z" fill="black"/>\r
<path d="M936.47 276.794H925.948V287.428H936.47V276.794Z" fill="black"/>\r
<path d="M715.506 276.794H704.983V287.428H715.506V276.794Z" fill="black"/>\r
<path d="M568.195 276.794H557.673V287.428H568.195V276.794Z" fill="black"/>\r
<path d="M557.673 276.794H547.151V287.428H557.673V276.794Z" fill="black"/>\r
<path d="M547.151 276.794H536.629V287.428H547.151V276.794Z" fill="black"/>\r
<path d="M473.496 276.794H462.974V287.428H473.496V276.794Z" fill="black"/>\r
<path d="M368.275 276.794H357.753V287.428H368.275V276.794Z" fill="black"/>\r
<path d="M147.31 276.794H136.788V287.428H147.31V276.794Z" fill="black"/>\r
<path d="M957.515 266.16H946.992V276.794H957.515V266.16Z" fill="black"/>\r
<path d="M946.993 266.16H936.471V276.794H946.993V266.16Z" fill="black"/>\r
<path d="M715.506 266.16H704.983V276.794H715.506V266.16Z" fill="black"/>\r
<path d="M568.195 266.16H557.673V276.794H568.195V266.16Z" fill="black"/>\r
<path d="M557.673 266.16H547.151V276.794H557.673V266.16Z" fill="black"/>\r
<path d="M547.151 266.16H536.629V276.794H547.151V266.16Z" fill="black"/>\r
<path d="M473.496 266.16H462.974V276.794H473.496V266.16Z" fill="black"/>\r
<path d="M357.753 266.16H347.23V276.794H357.753V266.16Z" fill="black"/>\r
<path d="M157.832 266.16H147.31V276.794H157.832V266.16Z" fill="black"/>\r
<path d="M31.5666 266.16H21.0444V276.794H31.5666V266.16Z" fill="black"/>\r
<path d="M968.036 255.526H957.514V266.16H968.036V255.526Z" fill="black"/>\r
<path d="M957.515 255.526H946.992V266.16H957.515V255.526Z" fill="black"/>\r
<path d="M946.993 255.526H936.471V266.16H946.993V255.526Z" fill="black"/>\r
<path d="M715.506 255.526H704.983V266.16H715.506V255.526Z" fill="black"/>\r
<path d="M568.195 255.526H557.673V266.16H568.195V255.526Z" fill="black"/>\r
<path d="M557.673 255.526H547.151V266.16H557.673V255.526Z" fill="black"/>\r
<path d="M547.151 255.526H536.629V266.16H547.151V255.526Z" fill="black"/>\r
<path d="M473.496 255.526H462.974V266.16H473.496V255.526Z" fill="black"/>\r
<path d="M357.753 255.526H347.23V266.16H357.753V255.526Z" fill="black"/>\r
<path d="M168.354 255.526H157.832V266.16H168.354V255.526Z" fill="black"/>\r
<path d="M31.5666 255.526H21.0444V266.16H31.5666V255.526Z" fill="black"/>\r
<path d="M978.559 244.853H968.037V255.487H978.559V244.853Z" fill="black"/>\r
<path d="M968.036 244.853H957.514V255.487H968.036V244.853Z" fill="black"/>\r
<path d="M957.515 244.853H946.992V255.487H957.515V244.853Z" fill="black"/>\r
<path d="M726.027 244.853H715.505V255.487H726.027V244.853Z" fill="black"/>\r
<path d="M568.195 244.853H557.673V255.487H568.195V244.853Z" fill="black"/>\r
<path d="M557.673 244.853H547.151V255.487H557.673V244.853Z" fill="black"/>\r
<path d="M547.151 244.853H536.629V255.487H547.151V244.853Z" fill="black"/>\r
<path d="M347.231 244.853H336.709V255.487H347.231V244.853Z" fill="black"/>\r
<path d="M189.399 244.853H178.876V255.487H189.399V244.853Z" fill="black"/>\r
<path d="M178.876 244.853H168.354V255.487H178.876V244.853Z" fill="black"/>\r
<path d="M42.0883 244.853H31.5662V255.487H42.0883V244.853Z" fill="black"/>\r
<path d="M978.559 234.219H968.037V244.853H978.559V234.219Z" fill="black"/>\r
<path d="M968.036 234.219H957.514V244.853H968.036V234.219Z" fill="black"/>\r
<path d="M726.027 234.219H715.505V244.853H726.027V234.219Z" fill="black"/>\r
<path d="M568.195 234.219H557.673V244.853H568.195V234.219Z" fill="black"/>\r
<path d="M557.673 234.219H547.151V244.853H557.673V234.219Z" fill="black"/>\r
<path d="M547.151 234.219H536.629V244.853H547.151V234.219Z" fill="black"/>\r
<path d="M462.974 234.219H452.452V244.853H462.974V234.219Z" fill="black"/>\r
<path d="M336.708 234.219H326.186V244.853H336.708V234.219Z" fill="black"/>\r
<path d="M326.186 234.219H315.664V244.853H326.186V234.219Z" fill="black"/>\r
<path d="M220.965 234.219H210.443V244.853H220.965V234.219Z" fill="black"/>\r
<path d="M210.443 234.219H199.92V244.853H210.443V234.219Z" fill="black"/>\r
<path d="M199.92 234.219H189.398V244.853H199.92V234.219Z" fill="black"/>\r
<path d="M42.0883 234.219H31.5662V244.853H42.0883V234.219Z" fill="black"/>\r
<path d="M989.081 223.585H978.559V234.219H989.081V223.585Z" fill="black"/>\r
<path d="M978.559 223.585H968.037V234.219H978.559V223.585Z" fill="black"/>\r
<path d="M736.55 223.585H726.028V234.219H736.55V223.585Z" fill="black"/>\r
<path d="M726.027 223.585H715.505V234.219H726.027V223.585Z" fill="black"/>\r
<path d="M568.195 223.585H557.673V234.219H568.195V223.585Z" fill="black"/>\r
<path d="M557.673 223.585H547.151V234.219H557.673V223.585Z" fill="black"/>\r
<path d="M547.151 223.585H536.629V234.219H547.151V223.585Z" fill="black"/>\r
<path d="M536.629 223.585H526.107V234.219H536.629V223.585Z" fill="black"/>\r
<path d="M462.974 223.585H452.452V234.219H462.974V223.585Z" fill="black"/>\r
<path d="M305.142 223.585H294.62V234.219H305.142V223.585Z" fill="black"/>\r
<path d="M294.62 223.585H284.098V234.219H294.62V223.585Z" fill="black"/>\r
<path d="M284.098 223.585H273.576V234.219H284.098V223.585Z" fill="black"/>\r
<path d="M273.576 223.585H263.053V234.219H273.576V223.585Z" fill="black"/>\r
<path d="M263.053 223.585H252.531V234.219H263.053V223.585Z" fill="black"/>\r
<path d="M252.531 223.585H242.009V234.219H252.531V223.585Z" fill="black"/>\r
<path d="M242.009 223.585H231.487V234.219H242.009V223.585Z" fill="black"/>\r
<path d="M52.6105 223.585H42.0884V234.219H52.6105V223.585Z" fill="black"/>\r
<path d="M999.604 212.912H989.082V223.546H999.604V212.912Z" fill="black"/>\r
<path d="M989.081 212.912H978.559V223.546H989.081V212.912Z" fill="black"/>\r
<path d="M736.55 212.912H726.028V223.546H736.55V212.912Z" fill="black"/>\r
<path d="M557.673 212.912H547.151V223.546H557.673V212.912Z" fill="black"/>\r
<path d="M547.151 212.912H536.629V223.546H547.151V212.912Z" fill="black"/>\r
<path d="M536.629 212.912H526.107V223.546H536.629V212.912Z" fill="black"/>\r
<path d="M452.452 212.912H441.93V223.546H452.452V212.912Z" fill="black"/>\r
<path d="M63.133 212.912H52.6108V223.546H63.133V212.912Z" fill="black"/>\r
<path d="M1010.13 202.278H999.603V212.912H1010.13V202.278Z" fill="black"/>\r
<path d="M999.604 202.278H989.082V212.912H999.604V202.278Z" fill="black"/>\r
<path d="M989.081 202.278H978.559V212.912H989.081V202.278Z" fill="black"/>\r
<path d="M736.55 202.278H726.028V212.912H736.55V202.278Z" fill="black"/>\r
<path d="M557.673 202.278H547.151V212.912H557.673V202.278Z" fill="black"/>\r
<path d="M547.151 202.278H536.629V212.912H547.151V202.278Z" fill="black"/>\r
<path d="M536.629 202.278H526.107V212.912H536.629V202.278Z" fill="black"/>\r
<path d="M452.452 202.278H441.93V212.912H452.452V202.278Z" fill="black"/>\r
<path d="M63.133 202.278H52.6108V212.912H63.133V202.278Z" fill="black"/>\r
<path d="M1010.13 191.645H999.603V202.278H1010.13V191.645Z" fill="black"/>\r
<path d="M999.604 191.645H989.082V202.278H999.604V191.645Z" fill="black"/>\r
<path d="M736.55 191.645H726.028V202.278H736.55V191.645Z" fill="black"/>\r
<path d="M557.673 191.645H547.151V202.278H557.673V191.645Z" fill="black"/>\r
<path d="M547.151 191.645H536.629V202.278H547.151V191.645Z" fill="black"/>\r
<path d="M536.629 191.645H526.107V202.278H536.629V191.645Z" fill="black"/>\r
<path d="M441.93 191.645H431.408V202.278H441.93V191.645Z" fill="black"/>\r
<path d="M73.6552 191.645H63.1331V202.278H73.6552V191.645Z" fill="black"/>\r
<path d="M1020.65 180.972H1010.12V191.605H1020.65V180.972Z" fill="black"/>\r
<path d="M1010.13 180.972H999.603V191.605H1010.13V180.972Z" fill="black"/>\r
<path d="M736.55 180.972H726.028V191.605H736.55V180.972Z" fill="black"/>\r
<path d="M557.673 180.972H547.151V191.605H557.673V180.972Z" fill="black"/>\r
<path d="M547.151 180.972H536.629V191.605H547.151V180.972Z" fill="black"/>\r
<path d="M536.629 180.972H526.107V191.605H536.629V180.972Z" fill="black"/>\r
<path d="M431.408 180.972H420.886V191.605H431.408V180.972Z" fill="black"/>\r
<path d="M94.6991 180.972H84.177V191.605H94.6991V180.972Z" fill="black"/>\r
<path d="M84.1772 180.972H73.655V191.605H84.1772V180.972Z" fill="black"/>\r
<path d="M1031.17 170.338H1020.65V180.971H1031.17V170.338Z" fill="black"/>\r
<path d="M1020.65 170.338H1010.12V180.971H1020.65V170.338Z" fill="black"/>\r
<path d="M736.55 170.338H726.028V180.971H736.55V170.338Z" fill="black"/>\r
<path d="M547.151 170.338H536.629V180.971H547.151V170.338Z" fill="black"/>\r
<path d="M536.629 170.338H526.107V180.971H536.629V170.338Z" fill="black"/>\r
<path d="M526.107 170.338H515.585V180.971H526.107V170.338Z" fill="black"/>\r
<path d="M420.886 170.338H410.364V180.971H420.886V170.338Z" fill="black"/>\r
<path d="M105.221 170.338H94.6992V180.971H105.221V170.338Z" fill="black"/>\r
<path d="M1041.69 159.704H1031.17V170.338H1041.69V159.704Z" fill="black"/>\r
<path d="M1031.17 159.704H1020.65V170.338H1031.17V159.704Z" fill="black"/>\r
<path d="M1020.65 159.704H1010.12V170.338H1020.65V159.704Z" fill="black"/>\r
<path d="M547.151 159.704H536.629V170.338H547.151V159.704Z" fill="black"/>\r
<path d="M536.629 159.704H526.107V170.338H536.629V159.704Z" fill="black"/>\r
<path d="M526.107 159.704H515.585V170.338H526.107V159.704Z" fill="black"/>\r
<path d="M410.363 159.704H399.841V170.338H410.363V159.704Z" fill="black"/>\r
<path d="M399.842 159.704H389.319V170.338H399.842V159.704Z" fill="black"/>\r
<path d="M126.266 159.704H115.744V170.338H126.266V159.704Z" fill="black"/>\r
<path d="M115.744 159.704H105.221V170.338H115.744V159.704Z" fill="black"/>\r
<path d="M31.5666 159.704H21.0444V170.338H31.5666V159.704Z" fill="black"/>\r
<path d="M1052.21 149.031H1041.69V159.664H1052.21V149.031Z" fill="black"/>\r
<path d="M1041.69 149.031H1031.17V159.664H1041.69V149.031Z" fill="black"/>\r
<path d="M1031.17 149.031H1020.65V159.664H1031.17V149.031Z" fill="black"/>\r
<path d="M547.151 149.031H536.629V159.664H547.151V149.031Z" fill="black"/>\r
<path d="M536.629 149.031H526.107V159.664H536.629V149.031Z" fill="black"/>\r
<path d="M526.107 149.031H515.585V159.664H526.107V149.031Z" fill="black"/>\r
<path d="M399.842 149.031H389.319V159.664H399.842V149.031Z" fill="black"/>\r
<path d="M389.319 149.031H378.797V159.664H389.319V149.031Z" fill="black"/>\r
<path d="M136.788 149.031H126.266V159.664H136.788V149.031Z" fill="black"/>\r
<path d="M126.266 149.031H115.744V159.664H126.266V149.031Z" fill="black"/>\r
<path d="M31.5666 149.031H21.0444V159.664H31.5666V149.031Z" fill="black"/>\r
<path d="M1052.21 138.397H1041.69V149.031H1052.21V138.397Z" fill="black"/>\r
<path d="M1041.69 138.397H1031.17V149.031H1041.69V138.397Z" fill="black"/>\r
<path d="M736.55 138.397H726.028V149.031H736.55V138.397Z" fill="black"/>\r
<path d="M536.629 138.397H526.107V149.031H536.629V138.397Z" fill="black"/>\r
<path d="M526.107 138.397H515.585V149.031H526.107V138.397Z" fill="black"/>\r
<path d="M515.585 138.397H505.062V149.031H515.585V138.397Z" fill="black"/>\r
<path d="M378.797 138.397H368.275V149.031H378.797V138.397Z" fill="black"/>\r
<path d="M368.275 138.397H357.753V149.031H368.275V138.397Z" fill="black"/>\r
<path d="M157.832 138.397H147.31V149.031H157.832V138.397Z" fill="black"/>\r
<path d="M147.31 138.397H136.788V149.031H147.31V138.397Z" fill="black"/>\r
<path d="M1062.74 127.763H1052.21V138.397H1062.74V127.763Z" fill="black"/>\r
<path d="M1052.21 127.763H1041.69V138.397H1052.21V127.763Z" fill="black"/>\r
<path d="M736.55 127.763H726.028V138.397H736.55V127.763Z" fill="black"/>\r
<path d="M526.107 127.763H515.585V138.397H526.107V127.763Z" fill="black"/>\r
<path d="M515.585 127.763H505.062V138.397H515.585V127.763Z" fill="black"/>\r
<path d="M347.231 127.763H336.709V138.397H347.231V127.763Z" fill="black"/>\r
<path d="M336.708 127.763H326.186V138.397H336.708V127.763Z" fill="black"/>\r
<path d="M326.186 127.763H315.664V138.397H326.186V127.763Z" fill="black"/>\r
<path d="M199.92 127.763H189.398V138.397H199.92V127.763Z" fill="black"/>\r
<path d="M189.399 127.763H178.876V138.397H189.399V127.763Z" fill="black"/>\r
<path d="M178.876 127.763H168.354V138.397H178.876V127.763Z" fill="black"/>\r
<path d="M42.0883 127.763H31.5662V138.397H42.0883V127.763Z" fill="black"/>\r
<path d="M1073.26 117.09H1062.74V127.724H1073.26V117.09Z" fill="black"/>\r
<path d="M1062.74 117.09H1052.21V127.724H1062.74V117.09Z" fill="black"/>\r
<path d="M515.585 117.09H505.062V127.724H515.585V117.09Z" fill="black"/>\r
<path d="M505.063 117.09H494.541V127.724H505.063V117.09Z" fill="black"/>\r
<path d="M305.142 117.09H294.62V127.724H305.142V117.09Z" fill="black"/>\r
<path d="M294.62 117.09H284.098V127.724H294.62V117.09Z" fill="black"/>\r
<path d="M284.098 117.09H273.576V127.724H284.098V117.09Z" fill="black"/>\r
<path d="M273.576 117.09H263.053V127.724H273.576V117.09Z" fill="black"/>\r
<path d="M263.053 117.09H252.531V127.724H263.053V117.09Z" fill="black"/>\r
<path d="M252.531 117.09H242.009V127.724H252.531V117.09Z" fill="black"/>\r
<path d="M242.009 117.09H231.487V127.724H242.009V117.09Z" fill="black"/>\r
<path d="M231.487 117.09H220.965V127.724H231.487V117.09Z" fill="black"/>\r
<path d="M220.965 117.09H210.443V127.724H220.965V117.09Z" fill="black"/>\r
<path d="M52.6105 117.09H42.0884V127.724H52.6105V117.09Z" fill="black"/>\r
<path d="M1083.78 106.456H1073.26V117.09H1083.78V106.456Z" fill="black"/>\r
<path d="M1073.26 106.456H1062.74V117.09H1073.26V106.456Z" fill="black"/>\r
<path d="M1062.74 106.456H1052.21V117.09H1062.74V106.456Z" fill="black"/>\r
<path d="M726.027 106.456H715.505V117.09H726.027V106.456Z" fill="black"/>\r
<path d="M515.585 106.456H505.062V117.09H515.585V106.456Z" fill="black"/>\r
<path d="M505.063 106.456H494.541V117.09H505.063V106.456Z" fill="black"/>\r
<path d="M494.54 106.456H484.018V117.09H494.54V106.456Z" fill="black"/>\r
<path d="M52.6105 106.456H42.0884V117.09H52.6105V106.456Z" fill="black"/>\r
<path d="M1094.3 95.8223H1083.78V106.456H1094.3V95.8223Z" fill="black"/>\r
<path d="M1083.78 95.8223H1073.26V106.456H1083.78V95.8223Z" fill="black"/>\r
<path d="M1073.26 95.8223H1062.74V106.456H1073.26V95.8223Z" fill="black"/>\r
<path d="M505.063 95.8223H494.541V106.456H505.063V95.8223Z" fill="black"/>\r
<path d="M494.54 95.8223H484.018V106.456H494.54V95.8223Z" fill="black"/>\r
<path d="M63.133 95.8223H52.6108V106.456H63.133V95.8223Z" fill="black"/>\r
<path d="M1104.82 85.1492H1094.3V95.7829H1104.82V85.1492Z" fill="black"/>\r
<path d="M1094.3 85.1492H1083.78V95.7829H1094.3V85.1492Z" fill="black"/>\r
<path d="M1083.78 85.1492H1073.26V95.7829H1083.78V85.1492Z" fill="black"/>\r
<path d="M494.54 85.1492H484.018V95.7829H494.54V85.1492Z" fill="black"/>\r
<path d="M484.018 85.1492H473.496V95.7829H484.018V85.1492Z" fill="black"/>\r
<path d="M63.133 85.1492H52.6108V95.7829H63.133V85.1492Z" fill="black"/>\r
<path d="M1115.35 74.5155H1104.82V85.1491H1115.35V74.5155Z" fill="black"/>\r
<path d="M1104.82 74.5155H1094.3V85.1491H1104.82V74.5155Z" fill="black"/>\r
<path d="M1094.3 74.5155H1083.78V85.1491H1094.3V74.5155Z" fill="black"/>\r
<path d="M484.018 74.5155H473.496V85.1491H484.018V74.5155Z" fill="black"/>\r
<path d="M473.496 74.5155H462.974V85.1491H473.496V74.5155Z" fill="black"/>\r
<path d="M84.1772 74.5155H73.655V85.1491H84.1772V74.5155Z" fill="black"/>\r
<path d="M73.6552 74.5155H63.1331V85.1491H73.6552V74.5155Z" fill="black"/>\r
<path d="M1125.87 63.8815H1115.35V74.5154H1125.87V63.8815Z" fill="black"/>\r
<path d="M1115.35 63.8815H1104.82V74.5154H1115.35V63.8815Z" fill="black"/>\r
<path d="M1104.82 63.8815H1094.3V74.5154H1104.82V63.8815Z" fill="black"/>\r
<path d="M1094.3 63.8815H1083.78V74.5154H1094.3V63.8815Z" fill="black"/>\r
<path d="M473.496 63.8815H462.974V74.5154H473.496V63.8815Z" fill="black"/>\r
<path d="M462.974 63.8815H452.452V74.5154H462.974V63.8815Z" fill="black"/>\r
<path d="M452.452 63.8815H441.93V74.5154H452.452V63.8815Z" fill="black"/>\r
<path d="M94.6991 63.8815H84.177V74.5154H94.6991V63.8815Z" fill="black"/>\r
<path d="M1125.87 53.2082H1115.35V63.8421H1125.87V53.2082Z" fill="black"/>\r
<path d="M1115.35 53.2082H1104.82V63.8421H1115.35V53.2082Z" fill="black"/>\r
<path d="M1104.82 53.2082H1094.3V63.8421H1104.82V53.2082Z" fill="black"/>\r
<path d="M462.974 53.2082H452.452V63.8421H462.974V53.2082Z" fill="black"/>\r
<path d="M452.452 53.2082H441.93V63.8421H452.452V53.2082Z" fill="black"/>\r
<path d="M105.221 53.2082H94.6992V63.8421H105.221V53.2082Z" fill="black"/>\r
<path d="M1136.39 42.5745H1125.87V53.2082H1136.39V42.5745Z" fill="black"/>\r
<path d="M1125.87 42.5745H1115.35V53.2082H1125.87V42.5745Z" fill="black"/>\r
<path d="M1115.35 42.5745H1104.82V53.2082H1115.35V42.5745Z" fill="black"/>\r
<path d="M452.452 42.5745H441.93V53.2082H452.452V42.5745Z" fill="black"/>\r
<path d="M441.93 42.5745H431.408V53.2082H441.93V42.5745Z" fill="black"/>\r
<path d="M431.408 42.5745H420.886V53.2082H431.408V42.5745Z" fill="black"/>\r
<path d="M115.744 42.5745H105.221V53.2082H115.744V42.5745Z" fill="black"/>\r
<path d="M1146.91 31.9409H1136.39V42.5746H1146.91V31.9409Z" fill="black"/>\r
<path d="M1136.39 31.9409H1125.87V42.5746H1136.39V31.9409Z" fill="black"/>\r
<path d="M1125.87 31.9409H1115.35V42.5746H1125.87V31.9409Z" fill="black"/>\r
<path d="M1115.35 31.9409H1104.82V42.5746H1115.35V31.9409Z" fill="black"/>\r
<path d="M431.408 31.9409H420.886V42.5746H431.408V31.9409Z" fill="black"/>\r
<path d="M420.886 31.9409H410.364V42.5746H420.886V31.9409Z" fill="black"/>\r
<path d="M410.363 31.9409H399.841V42.5746H410.363V31.9409Z" fill="black"/>\r
<path d="M136.788 31.9409H126.266V42.5746H136.788V31.9409Z" fill="black"/>\r
<path d="M410.363 21.2676H399.841V31.9013H410.363V21.2676Z" fill="black"/>\r
<path d="M399.842 21.2676H389.319V31.9013H399.842V21.2676Z" fill="black"/>\r
<path d="M389.319 21.2676H378.797V31.9013H389.319V21.2676Z" fill="black"/>\r
<path d="M168.354 21.2676H157.832V31.9013H168.354V21.2676Z" fill="black"/>\r
<path d="M157.832 21.2676H147.31V31.9013H157.832V21.2676Z" fill="black"/>\r
<path d="M147.31 21.2676H136.788V31.9013H147.31V21.2676Z" fill="black"/>\r
<path d="M378.797 10.634H368.275V21.2677H378.797V10.634Z" fill="black"/>\r
<path d="M368.275 10.634H357.753V21.2677H368.275V10.634Z" fill="black"/>\r
<path d="M357.753 10.634H347.23V21.2677H357.753V10.634Z" fill="black"/>\r
<path d="M347.231 10.634H336.709V21.2677H347.231V10.634Z" fill="black"/>\r
<path d="M199.92 10.634H189.398V21.2677H199.92V10.634Z" fill="black"/>\r
<path d="M189.399 10.634H178.876V21.2677H189.399V10.634Z" fill="black"/>\r
<path d="M178.876 10.634H168.354V21.2677H178.876V10.634Z" fill="black"/>\r
<path d="M347.231 0H336.709V10.6337H347.231V0Z" fill="black"/>\r
<path d="M336.708 0H326.186V10.6337H336.708V0Z" fill="black"/>\r
<path d="M326.186 0H315.664V10.6337H326.186V0Z" fill="black"/>\r
<path d="M315.664 0H305.142V10.6337H315.664V0Z" fill="black"/>\r
<path d="M305.142 0H294.62V10.6337H305.142V0Z" fill="black"/>\r
<path d="M294.62 0H284.098V10.6337H294.62V0Z" fill="black"/>\r
<path d="M284.098 0H273.576V10.6337H284.098V0Z" fill="black"/>\r
<path d="M273.576 0H263.053V10.6337H273.576V0Z" fill="black"/>\r
<path d="M263.053 0H252.531V10.6337H263.053V0Z" fill="black"/>\r
<path d="M252.531 0H242.009V10.6337H252.531V0Z" fill="black"/>\r
<path d="M242.009 0H231.487V10.6337H242.009V0Z" fill="black"/>\r
<path d="M231.487 0H220.965V10.6337H231.487V0Z" fill="black"/>\r
<path d="M220.965 0H210.443V10.6337H220.965V0Z" fill="black"/>\r
<path d="M210.443 0H199.92V10.6337H210.443V0Z" fill="black"/>\r
</svg>\r
`,He=`<svg width="1252" height="677" viewBox="0 0 1252 677" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M435 616.8C430.2 618.8 422.8 621.6 412.8 625.2C403.2 628.8 393 632.8 382.2 637.2C371.8 641.6 362.8 646 355.2 650.4C347.6 655.2 343.8 659.6 343.8 663.6C343.8 666.8 346.2 668.4 351 668.4C362.6 668.4 378 660.8 397.2 645.6C416.4 630.4 437 609.6 459 583.2C481 556.8 502 526.8 522 493.2C536.8 468.4 550 442.4 561.6 415.2C573.6 388 583 360.4 589.8 332.4C597 304 600.6 276.4 600.6 249.6C600.6 213.2 593.2 180 578.4 150C564 120 543.4 94.2001 516.6 72.6001C490.2 50.6001 458.4 33.6001 421.2 21.6001C384.4 9.60012 343.8 3.60012 299.4 3.60012C260.2 3.60012 223.8 8.60011 190.2 18.6001C156.6 28.6001 127.2 42.6001 102 60.6001C76.8 78.6001 57.2 99.6001 43.2 123.6C29.2 147.6 22.2 173.6 22.2 201.6C22.2 233.6 31.2 261.8 49.2 286.2C67.6 310.6 92.8 329.8 124.8 343.8C156.8 357.4 193.8 364.2 235.8 364.2C266.2 364.2 293.8 360.2 318.6 352.2C343.8 344.2 363.8 333.4 378.6 319.8C393.8 306.2 401.4 291.4 401.4 275.4C401.4 257.8 392 243.8 373.2 233.4C354.8 222.6 330.6 217.2 300.6 217.2C276.2 217.2 253.2 220.6 231.6 227.4C210 233.8 191 243 174.6 255C158.2 266.6 145.4 280.2 136.2 295.8C127 311 122.4 327.4 122.4 345C122.4 365.4 129 383.4 142.2 399C155.8 414.6 174.6 426.8 198.6 435.6C222.6 444.4 250.4 448.8 282 448.8C320 448.8 353.8 444.2 383.4 435C413.4 425.8 438.8 413.2 459.6 397.2C480.4 381.2 496.2 363 507 342.6C518.2 321.8 523.8 300.2 523.8 277.8C523.8 246.2 513.8 218.4 493.8 194.4C473.8 170.4 446 151.6 410.4 138C375.2 124 334.6 117 288.6 117C248.6 117 211.2 123 176.4 135C142 146.6 111.8 163 85.8 184.2C59.8 205 39.6 229.4 25.2 257.4C10.8 285.4 3.59995 315.8 3.59995 348.6C3.59995 389.4 15.2 425.2 38.4 456C62 486.4 94.8 510.2 136.8 527.4C179.2 544.2 228.4 552.6 284.4 552.6C319.2 552.6 351.4 548.8 381 541.2C411 533.6 436.6 522.8 457.8 508.8C479.4 494.8 494.8 478.6 504 460.2L507.6 461.4C498 480.2 482.2 496.8 460.2 511.2C438.6 525.2 412.6 536.2 382.2 544.2C352.2 552.2 319.6 556.2 284.4 556.2C227.6 556.2 177.8 547.6 135 530.4C92.6 512.8 59.4 488.4 35.4 457.2C11.8 426 -4.92483e-05 389.8 -4.92483e-05 348.6C-4.92483e-05 315.4 7.19995 284.6 21.6 256.2C36.4 227.8 56.8 203 82.8 181.8C109.2 160.2 139.8 143.4 174.6 131.4C209.8 119.4 247.8 113.4 288.6 113.4C336.2 113.4 377.8 120.4 413.4 134.4C449.4 148 477.4 167.2 497.4 192C517.4 216.4 527.4 245 527.4 277.8C527.4 300.6 522 322.6 511.2 343.8C500.4 364.6 484.4 383.2 463.2 399.6C442.4 416 416.8 429 386.4 438.6C356 448.2 321.2 453 282 453C249.2 453 220.6 448.4 196.2 439.2C171.8 430 152.8 417.2 139.2 400.8C125.6 384.4 118.8 365.2 118.8 343.2C118.8 325.2 123.4 308.4 132.6 292.8C142.2 277.2 155.4 263.6 172.2 252C189 240 208.4 230.6 230.4 223.8C252.4 217 275.8 213.6 300.6 213.6C331.8 213.6 357 219.4 376.2 231C395.8 242.2 405.6 257 405.6 275.4C405.6 292.2 397.8 307.6 382.2 321.6C367 335.6 346.4 346.8 320.4 355.2C294.8 363.6 266.4 367.8 235.2 367.8C192.8 367.8 155.2 360.8 122.4 346.8C90 332.4 64.6 312.8 46.2 288C27.8 262.8 18.6 234 18.6 201.6C18.6 173.2 25.8 146.8 40.2 122.4C54.6 97.6001 74.6 76.2001 100.2 58.2001C125.8 39.8001 155.6 25.6001 189.6 15.6001C224 5.20012 261.2 0.000128746 301.2 0.000128746C351.2 0.000128746 396.8 6.80012 438 20.4001C479.2 33.6001 514.8 52.6001 544.8 77.4001C574.8 101.8 598 131 614.4 165C630.8 199 639 236.6 639 277.8C639 298.6 635.8 321.2 629.4 345.6C623 370 613.6 395 601.2 420.6C588.8 445.8 573.6 470.4 555.6 494.4C542.8 510.8 528.4 527.6 512.4 544.8C496.8 562 480.8 578.4 464.4 594C448 609.6 432 623.6 416.4 636C401.2 648.4 387.2 658.2 374.4 665.4C362 672.6 352 676.2 344.4 676.2C337.2 676.2 333.6 673 333.6 666.6C333.6 662.6 336.2 658.4 341.4 654C347 650 354.2 645.8 363 641.4C371.8 637.4 381.2 633.4 391.2 629.4C401.6 625.4 411.6 621.4 421.2 617.4C431.2 613.8 439.6 610.2 446.4 606.6C493.2 582.6 538.8 552 583.2 514.8C628 477.2 668.4 437 704.4 394.2C728.4 365 749.2 335.4 766.8 305.4C784.4 275 798 246.6 807.6 220.2C817.6 193.4 822.6 171 822.6 153C822.6 143.8 821 134.8 817.8 126C814.6 116.8 810.6 110 805.8 105.6L808.2 103.8C814.6 109 819.4 116.8 822.6 127.2C825.8 137.2 827.4 147.8 827.4 159C827.4 178.6 823.2 199.8 814.8 222.6C806.8 245 796.6 267.4 784.2 289.8C772.2 312.2 759.6 332.8 746.4 351.6C733.2 370 721.4 385.2 711 397.2C685 426.4 657 455 627 483C597 511 565.8 536.4 533.4 559.2C501.4 582.4 468.6 601.6 435 616.8ZM696.586 552.6C706.586 552.6 718.386 549.4 731.986 543C745.586 536.6 759.586 528 773.986 517.2C788.386 506 801.786 493.4 814.186 479.4L819.586 473.4H824.386L820.186 478.2C807.386 492.6 793.386 505.8 778.186 517.8C762.986 529.4 748.186 538.6 733.786 545.4C719.386 552.2 706.986 555.6 696.586 555.6C688.586 555.6 682.186 552.8 677.386 547.2C672.586 541.6 670.186 533.8 670.186 523.8C670.186 513.8 673.186 503.4 679.186 492.6C684.786 481.8 692.386 471.4 701.986 461.4C711.986 451 722.986 441.8 734.986 433.8C746.986 425.4 759.386 418.8 772.186 414C784.986 408.8 797.186 406.2 808.786 406.2C813.986 406.2 818.186 407.4 821.386 409.8C824.586 411.8 826.186 414.4 826.186 417.6C826.186 424 822.586 430.8 815.386 438C808.186 444.8 798.786 451.4 787.186 457.8C775.986 463.8 763.786 468.8 750.586 472.8C737.786 476.8 725.586 478.8 713.986 478.8L718.186 474.6C728.986 474.2 740.386 472.2 752.386 468.6C764.386 464.6 775.386 459.8 785.386 454.2C795.786 448.2 804.186 442 810.586 435.6C816.986 429.2 820.186 423.2 820.186 417.6C820.186 412.8 816.986 410.4 810.586 410.4C802.986 410.4 793.786 413.6 782.986 420C772.186 426.4 760.786 434.8 748.786 445.2C737.186 455.2 726.386 466.2 716.386 478.2C706.386 489.8 698.186 501.2 691.786 512.4C685.386 523.2 682.186 532.4 682.186 540C682.186 548.4 686.986 552.6 696.586 552.6ZM803.92 555.6C793.12 555.6 787.72 549.6 787.72 537.6C787.72 518.8 798.32 497.4 819.52 473.4L1213.72 27.0001H1251.52C1245.12 30.2001 1235.32 37.8001 1222.12 49.8001C1209.32 61.4001 1194.32 76.0001 1177.12 93.6001C1160.32 110.8 1142.72 129.8 1124.32 150.6L845.92 466.2C827.52 486.6 814.72 502.4 807.52 513.6C800.32 524.8 796.72 534.4 796.72 542.4C796.72 549.2 799.52 552.6 805.12 552.6C815.52 552.6 829.72 546.2 847.72 533.4C865.72 520.2 884.72 502.2 904.72 479.4L910.12 473.4H914.92L910.72 478.2C888.72 503 868.52 522.2 850.12 535.8C832.12 549 816.72 555.6 803.92 555.6ZM998.541 409.2C1002.14 409.2 1005.94 410.8 1009.94 414C1014.34 417.2 1016.54 422.6 1016.54 430.2C1016.54 439 1013.34 447.8 1006.94 456.6C1000.54 465 992.541 473.2 982.941 481.2C973.741 489.2 964.341 496.8 954.741 504C945.141 511.2 937.141 518.2 930.741 525C924.341 531.8 921.141 538.2 921.141 544.2C921.141 547 922.341 549.2 924.741 550.8C927.141 552 929.141 552.6 930.741 552.6C937.141 552.6 945.941 549.2 957.141 542.4C968.341 535.6 980.341 526.8 993.141 516C1006.34 505.2 1018.54 493.8 1029.74 481.8L1030.34 490.2C1019.14 501.8 1006.94 512.6 993.741 522.6C980.941 532.6 968.741 540.6 957.141 546.6C945.941 552.6 936.941 555.6 930.141 555.6C925.741 555.6 922.141 554.2 919.341 551.4C916.541 548.2 915.141 544 915.141 538.8C915.141 528.8 918.141 519.4 924.141 510.6C930.141 501.8 937.541 493.4 946.341 485.4C955.541 477 964.541 469 973.341 461.4C982.541 453.8 990.141 446.6 996.141 439.8C1002.14 432.6 1005.14 425.6 1005.14 418.8C1005.14 414.4 1002.74 412.2 997.941 412.2C993.141 412.2 986.341 414.8 977.541 420C969.141 424.8 959.741 431.4 949.341 439.8C939.341 448.2 929.741 457.4 920.541 467.4L915.141 473.4H910.341L915.741 467.4C931.741 449.8 947.141 435.8 961.941 425.4C977.141 414.6 989.341 409.2 998.541 409.2ZM1101.74 478.2C1090.14 491.4 1078.94 501.8 1068.14 509.4C1057.34 517 1048.14 520.8 1040.54 520.8C1028.14 520.8 1021.94 513.2 1021.94 498C1021.94 491.6 1024.54 483.6 1029.74 474C1034.94 464 1041.94 453.6 1050.74 442.8C1059.94 431.6 1070.14 421.2 1081.34 411.6H1108.94C1094.14 423.6 1080.74 436 1068.74 448.8C1056.74 461.2 1047.14 472.4 1039.94 482.4C1032.74 492.4 1029.14 499.8 1029.14 504.6C1029.14 509.8 1030.14 513.4 1032.14 515.4C1034.14 517 1037.14 517.8 1041.14 517.8C1047.94 517.8 1056.14 514.4 1065.74 507.6C1075.34 500.4 1085.34 491 1095.74 479.4L1101.14 473.4H1105.94L1101.74 478.2ZM1106.16 552.6C1116.16 552.6 1127.96 549.4 1141.56 543C1155.16 536.6 1169.16 528 1183.56 517.2C1197.96 506 1211.36 493.4 1223.76 479.4L1229.16 473.4H1233.96L1229.76 478.2C1216.96 492.6 1202.96 505.8 1187.76 517.8C1172.56 529.4 1157.76 538.6 1143.36 545.4C1128.96 552.2 1116.56 555.6 1106.16 555.6C1098.16 555.6 1091.76 552.8 1086.96 547.2C1082.16 541.6 1079.76 533.8 1079.76 523.8C1079.76 513.8 1082.76 503.4 1088.76 492.6C1094.36 481.8 1101.96 471.4 1111.56 461.4C1121.56 451 1132.56 441.8 1144.56 433.8C1156.56 425.4 1168.96 418.8 1181.76 414C1194.56 408.8 1206.76 406.2 1218.36 406.2C1223.56 406.2 1227.76 407.4 1230.96 409.8C1234.16 411.8 1235.76 414.4 1235.76 417.6C1235.76 424 1232.16 430.8 1224.96 438C1217.76 444.8 1208.36 451.4 1196.76 457.8C1185.56 463.8 1173.36 468.8 1160.16 472.8C1147.36 476.8 1135.16 478.8 1123.56 478.8L1127.76 474.6C1138.56 474.2 1149.96 472.2 1161.96 468.6C1173.96 464.6 1184.96 459.8 1194.96 454.2C1205.36 448.2 1213.76 442 1220.16 435.6C1226.56 429.2 1229.76 423.2 1229.76 417.6C1229.76 412.8 1226.56 410.4 1220.16 410.4C1212.56 410.4 1203.36 413.6 1192.56 420C1181.76 426.4 1170.36 434.8 1158.36 445.2C1146.76 455.2 1135.96 466.2 1125.96 478.2C1115.96 489.8 1107.76 501.2 1101.36 512.4C1094.96 523.2 1091.76 532.4 1091.76 540C1091.76 548.4 1096.56 552.6 1106.16 552.6Z" fill="black"/>\r
</svg>\r
`;function C4(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Qn(t,l){t.prototype=Object.create(l.prototype),t.prototype.constructor=t,t.__proto__=l}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Q1={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},b3={duration:.5,overwrite:!1,delay:0},B9,Z1,K,L4=1e8,B=1/L4,R8=Math.PI*2,me=R8/4,_e=0,Xn=Math.sqrt,ge=Math.cos,ve=Math.sin,u1=function(l){return typeof l=="string"},a1=function(l){return typeof l=="function"},F4=function(l){return typeof l=="number"},W9=function(l){return typeof l>"u"},y4=function(l){return typeof l=="object"},R1=function(l){return l!==!1},$9=function(){return typeof window<"u"},G3=function(l){return a1(l)||u1(l)},Kn=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},g1=Array.isArray,ye=/random\([^)]+\)/g,we=/,\s*/g,M0=/(?:-?\.?\d|\.)+/gi,Gn=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,n2=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,z7=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,qn=/[+-]=-?[.\d]+/,Ce=/[^,'"\[\]\s]+/gi,Se=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,J,V4,N8,Y9,K1={},N6={},Jn,lr=function(l){return(N6=V2(l,K1))&&I1},Q9=function(l,n){return console.warn("Invalid property",l,"set to",n,"Missing plugin? gsap.registerPlugin()")},V3=function(l,n){return!n&&console.warn(l)},tr=function(l,n){return l&&(K1[l]=n)&&N6&&(N6[l]=n)||K1},H3=function(){return 0},xe={suppressEvents:!0,isStart:!0,kill:!1},d6={suppressEvents:!0,kill:!1},Te={suppressEvents:!0},X9={},e5=[],D8={},nr,U1={},R7={},Z0=30,p6=[],K9="",G9=function(l){var n=l[0],r,L;if(y4(n)||a1(n)||(l=[l]),!(r=(n._gsap||{}).harness)){for(L=p6.length;L--&&!p6[L].targetTest(n););r=p6[L]}for(L=l.length;L--;)l[L]&&(l[L]._gsap||(l[L]._gsap=new gr(l[L],r)))||l.splice(L,1);return l},x5=function(l){return l._gsap||G9(a4(l))[0]._gsap},rr=function(l,n,r){return(r=l[n])&&a1(r)?l[n]():W9(r)&&l.getAttribute&&l.getAttribute(n)||r},N1=function(l,n){return(l=l.split(",")).forEach(n)||l},e1=function(l){return Math.round(l*1e5)/1e5||0},G=function(l){return Math.round(l*1e7)/1e7||0},d2=function(l,n){var r=n.charAt(0),L=parseFloat(n.substr(2));return l=parseFloat(l),r==="+"?l+L:r==="-"?l-L:r==="*"?l*L:l/L},Ee=function(l,n){for(var r=n.length,L=0;l.indexOf(n[L])<0&&++L<r;);return L<r},D6=function(){var l=e5.length,n=e5.slice(0),r,L;for(D8={},e5.length=0,r=0;r<l;r++)L=n[r],L&&L._lazy&&(L.render(L._lazy[0],L._lazy[1],!0)._lazy=0)},q9=function(l){return!!(l._initted||l._startAt||l.add)},Lr=function(l,n,r,L){e5.length&&!Z1&&D6(),l.render(n,r,!!(Z1&&n<0&&q9(l))),e5.length&&!Z1&&D6()},ar=function(l){var n=parseFloat(l);return(n||n===0)&&(l+"").match(Ce).length<2?n:u1(l)?l.trim():l},er=function(l){return l},G1=function(l,n){for(var r in n)r in l||(l[r]=n[r]);return l},Pe=function(l){return function(n,r){for(var L in r)L in n||L==="duration"&&l||L==="ease"||(n[L]=r[L])}},V2=function(l,n){for(var r in n)l[r]=n[r];return l},b0=function t(l,n){for(var r in n)r!=="__proto__"&&r!=="constructor"&&r!=="prototype"&&(l[r]=y4(n[r])?t(l[r]||(l[r]={}),n[r]):n[r]);return l},F6=function(l,n){var r={},L;for(L in l)L in n||(r[L]=l[L]);return r},J2=function(l){var n=l.parent||J,r=l.keyframes?Pe(g1(l.keyframes)):G1;if(R1(l.inherit))for(;n;)r(l,n.vars.defaults),n=n.parent||n._dp;return l},Oe=function(l,n){for(var r=l.length,L=r===n.length;L&&r--&&l[r]===n[r];);return r<0},ir=function(l,n,r,L,a){var e=l[L],i;if(a)for(i=n[a];e&&e[a]>i;)e=e._prev;return e?(n._next=e._next,e._next=n):(n._next=l[r],l[r]=n),n._next?n._next._prev=n:l[L]=n,n._prev=e,n.parent=n._dp=l,n},e7=function(l,n,r,L){r===void 0&&(r="_first"),L===void 0&&(L="_last");var a=n._prev,e=n._next;a?a._next=e:l[r]===n&&(l[r]=e),e?e._prev=a:l[L]===n&&(l[L]=a),n._next=n._prev=n.parent=null},d5=function(l,n){l.parent&&(!n||l.parent.autoRemoveChildren)&&l.parent.remove&&l.parent.remove(l),l._act=0},T5=function(l,n){if(l&&(!n||n._end>l._dur||n._start<0))for(var r=l;r;)r._dirty=1,r=r.parent;return l},ze=function(l){for(var n=l.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return l},F8=function(l,n,r,L){return l._startAt&&(Z1?l._startAt.revert(d6):l.vars.immediateRender&&!l.vars.autoRevert||l._startAt.render(n,!0,L))},Re=function t(l){return!l||l._ts&&t(l.parent)},V0=function(l){return l._repeat?H2(l._tTime,l=l.duration()+l._rDelay)*l:0},H2=function(l,n){var r=Math.floor(l=G(l/n));return l&&r===l?r-1:r},I6=function(l,n){return(l-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},i7=function(l){return l._end=G(l._start+(l._tDur/Math.abs(l._ts||l._rts||B)||0))},f7=function(l,n){var r=l._dp;return r&&r.smoothChildTiming&&l._ts&&(l._start=G(r._time-(l._ts>0?n/l._ts:((l._dirty?l.totalDuration():l._tDur)-n)/-l._ts)),i7(l),r._dirty||T5(r,l)),l},fr=function(l,n){var r;if((n._time||!n._dur&&n._initted||n._start<l._time&&(n._dur||!n.add))&&(r=I6(l.rawTime(),n),(!n._dur||E3(0,n.totalDuration(),r)-n._tTime>B)&&n.render(r,!0)),T5(l,n)._dp&&l._initted&&l._time>=l._dur&&l._ts){if(l._dur<l.duration())for(r=l;r._dp;)r.rawTime()>=0&&r.totalTime(r._tTime),r=r._dp;l._zTime=-B}},m4=function(l,n,r,L){return n.parent&&d5(n),n._start=G((F4(r)?r:r||l!==J?l4(l,r,n):l._time)+n._delay),n._end=G(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),ir(l,n,"_first","_last",l._sort?"_start":0),I8(n)||(l._recent=n),L||fr(l,n),l._ts<0&&f7(l,l._tTime),l},cr=function(l,n){return(K1.ScrollTrigger||Q9("scrollTrigger",n))&&K1.ScrollTrigger.create(n,l)},dr=function(l,n,r,L,a){if(ll(l,n,a),!l._initted)return 1;if(!r&&l._pt&&!Z1&&(l._dur&&l.vars.lazy!==!1||!l._dur&&l.vars.lazy)&&nr!==j1.frame)return e5.push(l),l._lazy=[a,L],1},Ne=function t(l){var n=l.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},I8=function(l){var n=l.data;return n==="isFromStart"||n==="isStart"},De=function(l,n,r,L){var a=l.ratio,e=n<0||!n&&(!l._start&&Ne(l)&&!(!l._initted&&I8(l))||(l._ts<0||l._dp._ts<0)&&!I8(l))?0:1,i=l._rDelay,f=0,c,d,h;if(i&&l._repeat&&(f=E3(0,l._tDur,n),d=H2(f,i),l._yoyo&&d&1&&(e=1-e),d!==H2(l._tTime,i)&&(a=1-e,l.vars.repeatRefresh&&l._initted&&l.invalidate())),e!==a||Z1||L||l._zTime===B||!n&&l._zTime){if(!l._initted&&dr(l,n,L,r,f))return;for(h=l._zTime,l._zTime=n||(r?B:0),r||(r=n&&!h),l.ratio=e,l._from&&(e=1-e),l._time=0,l._tTime=f,c=l._pt;c;)c.r(e,c.d),c=c._next;n<0&&F8(l,n,r,!0),l._onUpdate&&!r&&W1(l,"onUpdate"),f&&l._repeat&&!r&&l.parent&&W1(l,"onRepeat"),(n>=l._tDur||n<0)&&l.ratio===e&&(e&&d5(l,1),!r&&!Z1&&(W1(l,e?"onComplete":"onReverseComplete",!0),l._prom&&l._prom()))}else l._zTime||(l._zTime=n)},Fe=function(l,n,r){var L;if(r>n)for(L=l._first;L&&L._start<=r;){if(L.data==="isPause"&&L._start>n)return L;L=L._next}else for(L=l._last;L&&L._start>=r;){if(L.data==="isPause"&&L._start<n)return L;L=L._prev}},m2=function(l,n,r,L){var a=l._repeat,e=G(n)||0,i=l._tTime/l._tDur;return i&&!L&&(l._time*=e/l._dur),l._dur=e,l._tDur=a?a<0?1e10:G(e*(a+1)+l._rDelay*a):e,i>0&&!L&&f7(l,l._tTime=l._tDur*i),l.parent&&i7(l),r||T5(l.parent,l),l},H0=function(l){return l instanceof T1?T5(l):m2(l,l._dur)},Ie={_start:0,endTime:H3,totalDuration:H3},l4=function t(l,n,r){var L=l.labels,a=l._recent||Ie,e=l.duration()>=L4?a.endTime(!1):l._dur,i,f,c;return u1(n)&&(isNaN(n)||n in L)?(f=n.charAt(0),c=n.substr(-1)==="%",i=n.indexOf("="),f==="<"||f===">"?(i>=0&&(n=n.replace(/=/,"")),(f==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(i<0?a:r).totalDuration()/100:1)):i<0?(n in L||(L[n]=e),L[n]):(f=parseFloat(n.charAt(i-1)+n.substr(i+1)),c&&r&&(f=f/100*(g1(r)?r[0]:r).totalDuration()),i>1?t(l,n.substr(0,i-1),r)+f:e+f)):n==null?e:+n},l3=function(l,n,r){var L=F4(n[1]),a=(L?2:1)+(l<2?0:1),e=n[a],i,f;if(L&&(e.duration=n[1]),e.parent=r,l){for(i=e,f=r;f&&!("immediateRender"in i);)i=f.vars.defaults||{},f=R1(f.vars.inherit)&&f.parent;e.immediateRender=R1(i.immediateRender),l<2?e.runBackwards=1:e.startAt=n[a-1]}return new f1(n[0],e,n[a+1])},k5=function(l,n){return l||l===0?n(l):n},E3=function(l,n,r){return r<l?l:r>n?n:r},_1=function(l,n){return!u1(l)||!(n=Se.exec(l))?"":n[1]},Ae=function(l,n,r){return k5(r,function(L){return E3(l,n,L)})},A8=[].slice,pr=function(l,n){return l&&y4(l)&&"length"in l&&(!n&&!l.length||l.length-1 in l&&y4(l[0]))&&!l.nodeType&&l!==V4},Ue=function(l,n,r){return r===void 0&&(r=[]),l.forEach(function(L){var a;return u1(L)&&!n||pr(L,1)?(a=r).push.apply(a,a4(L)):r.push(L)})||r},a4=function(l,n,r){return K&&!n&&K.selector?K.selector(l):u1(l)&&!r&&(N8||!_2())?A8.call((n||Y9).querySelectorAll(l),0):g1(l)?Ue(l,r):pr(l)?A8.call(l,0):l?[l]:[]},U8=function(l){return l=a4(l)[0]||V3("Invalid scope")||{},function(n){var r=l.current||l.nativeElement||l;return a4(n,r.querySelectorAll?r:r===l?V3("Invalid scope")||Y9.createElement("div"):l)}},hr=function(l){return l.sort(function(){return .5-Math.random()})},or=function(l){if(a1(l))return l;var n=y4(l)?l:{each:l},r=E5(n.ease),L=n.from||0,a=parseFloat(n.base)||0,e={},i=L>0&&L<1,f=isNaN(L)||i,c=n.axis,d=L,h=L;return u1(L)?d=h={center:.5,edges:.5,end:1}[L]||0:!i&&f&&(d=L[0],h=L[1]),function(o,M,Z){var u=(Z||n).length,m=e[u],s,p,k,b,V,g,_,H,v;if(!m){if(v=n.grid==="auto"?0:(n.grid||[1,L4])[1],!v){for(_=-L4;_<(_=Z[v++].getBoundingClientRect().left)&&v<u;);v<u&&v--}for(m=e[u]=[],s=f?Math.min(v,u)*d-.5:L%v,p=v===L4?0:f?u*h/v-.5:L/v|0,_=0,H=L4,g=0;g<u;g++)k=g%v-s,b=p-(g/v|0),m[g]=V=c?Math.abs(c==="y"?b:k):Xn(k*k+b*b),V>_&&(_=V),V<H&&(H=V);L==="random"&&hr(m),m.max=_-H,m.min=H,m.v=u=(parseFloat(n.amount)||parseFloat(n.each)*(v>u?u-1:c?c==="y"?u/v:v:Math.max(v,u/v))||0)*(L==="edges"?-1:1),m.b=u<0?a-u:a,m.u=_1(n.amount||n.each)||0,r=r&&u<0?ti(r):r}return u=(m[o]-m.min)/m.max||0,G(m.b+(r?r(u):u)*m.v)+m.u}},j8=function(l){var n=Math.pow(10,((l+"").split(".")[1]||"").length);return function(r){var L=G(Math.round(parseFloat(r)/l)*l*n);return(L-L%1)/n+(F4(r)?0:_1(r))}},ur=function(l,n){var r=g1(l),L,a;return!r&&y4(l)&&(L=r=l.radius||L4,l.values?(l=a4(l.values),(a=!F4(l[0]))&&(L*=L)):l=j8(l.increment)),k5(n,r?a1(l)?function(e){return a=l(e),Math.abs(a-e)<=L?a:e}:function(e){for(var i=parseFloat(a?e.x:e),f=parseFloat(a?e.y:0),c=L4,d=0,h=l.length,o,M;h--;)a?(o=l[h].x-i,M=l[h].y-f,o=o*o+M*M):o=Math.abs(l[h]-i),o<c&&(c=o,d=h);return d=!L||c<=L?l[d]:e,a||d===e||F4(e)?d:d+_1(e)}:j8(l))},sr=function(l,n,r,L){return k5(g1(l)?!n:r===!0?!!(r=0):!L,function(){return g1(l)?l[~~(Math.random()*l.length)]:(r=r||1e-5)&&(L=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((l-r/2+Math.random()*(n-l+r*.99))/r)*r*L)/L})},je=function(){for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return function(L){return n.reduce(function(a,e){return e(a)},L)}},Be=function(l,n){return function(r){return l(parseFloat(r))+(n||_1(r))}},We=function(l,n,r){return Mr(l,n,0,1,r)},kr=function(l,n,r){return k5(r,function(L){return l[~~n(L)]})},$e=function t(l,n,r){var L=n-l;return g1(l)?kr(l,t(0,l.length),n):k5(r,function(a){return(L+(a-l)%L)%L+l})},Ye=function t(l,n,r){var L=n-l,a=L*2;return g1(l)?kr(l,t(0,l.length-1),n):k5(r,function(e){return e=(a+(e-l)%a)%a||0,l+(e>L?a-e:e)})},m3=function(l){return l.replace(ye,function(n){var r=n.indexOf("[")+1,L=n.substring(r||7,r?n.indexOf("]"):n.length-1).split(we);return sr(r?L:+L[0],r?0:+L[1],+L[2]||1e-5)})},Mr=function(l,n,r,L,a){var e=n-l,i=L-r;return k5(a,function(f){return r+((f-l)/e*i||0)})},Qe=function t(l,n,r,L){var a=isNaN(l+n)?0:function(M){return(1-M)*l+M*n};if(!a){var e=u1(l),i={},f,c,d,h,o;if(r===!0&&(L=1)&&(r=null),e)l={p:l},n={p:n};else if(g1(l)&&!g1(n)){for(d=[],h=l.length,o=h-2,c=1;c<h;c++)d.push(t(l[c-1],l[c]));h--,a=function(Z){Z*=h;var u=Math.min(o,~~Z);return d[u](Z-u)},r=n}else L||(l=V2(g1(l)?[]:{},l));if(!d){for(f in n)J9.call(i,l,f,"get",n[f]);a=function(Z){return rl(Z,i)||(e?l.p:l)}}}return k5(r,a)},m0=function(l,n,r){var L=l.labels,a=L4,e,i,f;for(e in L)i=L[e]-n,i<0==!!r&&i&&a>(i=Math.abs(i))&&(f=e,a=i);return f},W1=function(l,n,r){var L=l.vars,a=L[n],e=K,i=l._ctx,f,c,d;if(a)return f=L[n+"Params"],c=L.callbackScope||l,r&&e5.length&&D6(),i&&(K=i),d=f?a.apply(c,f):a.call(c),K=e,d},A2=function(l){return d5(l),l.scrollTrigger&&l.scrollTrigger.kill(!!Z1),l.progress()<1&&W1(l,"onInterrupt"),l},r2,Zr=[],br=function(l){if(l)if(l=!l.name&&l.default||l,$9()||l.headless){var n=l.name,r=a1(l),L=n&&!r&&l.init?function(){this._props=[]}:l,a={init:H3,render:rl,add:J9,kill:pi,modifier:di,rawVars:0},e={targetTest:0,get:0,getSetter:nl,aliases:{},register:0};if(_2(),l!==L){if(U1[n])return;G1(L,G1(F6(l,a),e)),V2(L.prototype,V2(a,F6(l,e))),U1[L.prop=n]=L,l.targetTest&&(p6.push(L),X9[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}tr(n,L),l.register&&l.register(I1,L,D1)}else Zr.push(l)},j=255,U2={aqua:[0,j,j],lime:[0,j,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,j],navy:[0,0,128],white:[j,j,j],olive:[128,128,0],yellow:[j,j,0],orange:[j,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[j,0,0],pink:[j,192,203],cyan:[0,j,j],transparent:[j,j,j,0]},N7=function(l,n,r){return l+=l<0?1:l>1?-1:0,(l*6<1?n+(r-n)*l*6:l<.5?r:l*3<2?n+(r-n)*(2/3-l)*6:n)*j+.5|0},Vr=function(l,n,r){var L=l?F4(l)?[l>>16,l>>8&j,l&j]:0:U2.black,a,e,i,f,c,d,h,o,M,Z;if(!L){if(l.substr(-1)===","&&(l=l.substr(0,l.length-1)),U2[l])L=U2[l];else if(l.charAt(0)==="#"){if(l.length<6&&(a=l.charAt(1),e=l.charAt(2),i=l.charAt(3),l="#"+a+a+e+e+i+i+(l.length===5?l.charAt(4)+l.charAt(4):"")),l.length===9)return L=parseInt(l.substr(1,6),16),[L>>16,L>>8&j,L&j,parseInt(l.substr(7),16)/255];l=parseInt(l.substr(1),16),L=[l>>16,l>>8&j,l&j]}else if(l.substr(0,3)==="hsl"){if(L=Z=l.match(M0),!n)f=+L[0]%360/360,c=+L[1]/100,d=+L[2]/100,e=d<=.5?d*(c+1):d+c-d*c,a=d*2-e,L.length>3&&(L[3]*=1),L[0]=N7(f+1/3,a,e),L[1]=N7(f,a,e),L[2]=N7(f-1/3,a,e);else if(~l.indexOf("="))return L=l.match(Gn),r&&L.length<4&&(L[3]=1),L}else L=l.match(M0)||U2.transparent;L=L.map(Number)}return n&&!Z&&(a=L[0]/j,e=L[1]/j,i=L[2]/j,h=Math.max(a,e,i),o=Math.min(a,e,i),d=(h+o)/2,h===o?f=c=0:(M=h-o,c=d>.5?M/(2-h-o):M/(h+o),f=h===a?(e-i)/M+(e<i?6:0):h===e?(i-a)/M+2:(a-e)/M+4,f*=60),L[0]=~~(f+.5),L[1]=~~(c*100+.5),L[2]=~~(d*100+.5)),r&&L.length<4&&(L[3]=1),L},Hr=function(l){var n=[],r=[],L=-1;return l.split(i5).forEach(function(a){var e=a.match(n2)||[];n.push.apply(n,e),r.push(L+=e.length+1)}),n.c=r,n},_0=function(l,n,r){var L="",a=(l+L).match(i5),e=n?"hsla(":"rgba(",i=0,f,c,d,h;if(!a)return l;if(a=a.map(function(o){return(o=Vr(o,n,1))&&e+(n?o[0]+","+o[1]+"%,"+o[2]+"%,"+o[3]:o.join(","))+")"}),r&&(d=Hr(l),f=r.c,f.join(L)!==d.c.join(L)))for(c=l.replace(i5,"1").split(n2),h=c.length-1;i<h;i++)L+=c[i]+(~f.indexOf(i)?a.shift()||e+"0,0,0,0)":(d.length?d:a.length?a:r).shift());if(!c)for(c=l.split(i5),h=c.length-1;i<h;i++)L+=c[i]+a[i];return L+c[h]},i5=function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",l;for(l in U2)t+="|"+l+"\\b";return new RegExp(t+")","gi")}(),Xe=/hsl[a]?\(/,mr=function(l){var n=l.join(" "),r;if(i5.lastIndex=0,i5.test(n))return r=Xe.test(n),l[1]=_0(l[1],r),l[0]=_0(l[0],r,Hr(l[1])),!0},_3,j1=function(){var t=Date.now,l=500,n=33,r=t(),L=r,a=1e3/240,e=a,i=[],f,c,d,h,o,M,Z=function u(m){var s=t()-L,p=m===!0,k,b,V,g;if((s>l||s<0)&&(r+=s-n),L+=s,V=L-r,k=V-e,(k>0||p)&&(g=++h.frame,o=V-h.time*1e3,h.time=V=V/1e3,e+=k+(k>=a?4:a-k),b=1),p||(f=c(u)),b)for(M=0;M<i.length;M++)i[M](V,o,g,m)};return h={time:0,frame:0,tick:function(){Z(!0)},deltaRatio:function(m){return o/(1e3/(m||60))},wake:function(){Jn&&(!N8&&$9()&&(V4=N8=window,Y9=V4.document||{},K1.gsap=I1,(V4.gsapVersions||(V4.gsapVersions=[])).push(I1.version),lr(N6||V4.GreenSockGlobals||!V4.gsap&&V4||{}),Zr.forEach(br)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,f&&h.sleep(),c=d||function(m){return setTimeout(m,e-h.time*1e3+1|0)},_3=1,Z(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(f),_3=0,c=H3},lagSmoothing:function(m,s){l=m||1/0,n=Math.min(s||33,l)},fps:function(m){a=1e3/(m||240),e=h.time*1e3+a},add:function(m,s,p){var k=s?function(b,V,g,_){m(b,V,g,_),h.remove(k)}:m;return h.remove(m),i[p?"unshift":"push"](k),_2(),k},remove:function(m,s){~(s=i.indexOf(m))&&i.splice(s,1)&&M>=s&&M--},_listeners:i},h}(),_2=function(){return!_3&&j1.wake()},z={},Ke=/^[\d.\-M][\d.\-,\s]/,Ge=/["']/g,qe=function(l){for(var n={},r=l.substr(1,l.length-3).split(":"),L=r[0],a=1,e=r.length,i,f,c;a<e;a++)f=r[a],i=a!==e-1?f.lastIndexOf(","):f.length,c=f.substr(0,i),n[L]=isNaN(c)?c.replace(Ge,"").trim():+c,L=f.substr(i+1).trim();return n},Je=function(l){var n=l.indexOf("(")+1,r=l.indexOf(")"),L=l.indexOf("(",n);return l.substring(n,~L&&L<r?l.indexOf(")",r+1):r)},li=function(l){var n=(l+"").split("("),r=z[n[0]];return r&&n.length>1&&r.config?r.config.apply(null,~l.indexOf("{")?[qe(n[1])]:Je(l).split(",").map(ar)):z._CE&&Ke.test(l)?z._CE("",l):r},ti=function(l){return function(n){return 1-l(1-n)}},E5=function(l,n){return l&&(a1(l)?l:z[l]||li(l))||n},A5=function(l,n,r,L){r===void 0&&(r=function(f){return 1-n(1-f)}),L===void 0&&(L=function(f){return f<.5?n(f*2)/2:1-n((1-f)*2)/2});var a={easeIn:n,easeOut:r,easeInOut:L},e;return N1(l,function(i){z[i]=K1[i]=a,z[e=i.toLowerCase()]=r;for(var f in a)z[e+(f==="easeIn"?".in":f==="easeOut"?".out":".inOut")]=z[i+"."+f]=a[f]}),a},_r=function(l){return function(n){return n<.5?(1-l(1-n*2))/2:.5+l((n-.5)*2)/2}},D7=function t(l,n,r){var L=n>=1?n:1,a=(r||(l?.3:.45))/(n<1?n:1),e=a/R8*(Math.asin(1/L)||0),i=function(d){return d===1?1:L*Math.pow(2,-10*d)*ve((d-e)*a)+1},f=l==="out"?i:l==="in"?function(c){return 1-i(1-c)}:_r(i);return a=R8/a,f.config=function(c,d){return t(l,c,d)},f},F7=function t(l,n){n===void 0&&(n=1.70158);var r=function(e){return e?--e*e*((n+1)*e+n)+1:0},L=l==="out"?r:l==="in"?function(a){return 1-r(1-a)}:_r(r);return L.config=function(a){return t(l,a)},L};N1("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,l){var n=l<5?l+1:l;A5(t+",Power"+(n-1),l?function(r){return Math.pow(r,n)}:function(r){return r},function(r){return 1-Math.pow(1-r,n)},function(r){return r<.5?Math.pow(r*2,n)/2:1-Math.pow((1-r)*2,n)/2})});z.Linear.easeNone=z.none=z.Linear.easeIn;A5("Elastic",D7("in"),D7("out"),D7());(function(t,l){var n=1/l,r=2*n,L=2.5*n,a=function(i){return i<n?t*i*i:i<r?t*Math.pow(i-1.5/l,2)+.75:i<L?t*(i-=2.25/l)*i+.9375:t*Math.pow(i-2.625/l,2)+.984375};A5("Bounce",function(e){return 1-a(1-e)},a)})(7.5625,2.75);A5("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});A5("Circ",function(t){return-(Xn(1-t*t)-1)});A5("Sine",function(t){return t===1?1:-ge(t*me)+1});A5("Back",F7("in"),F7("out"),F7());z.SteppedEase=z.steps=K1.SteppedEase={config:function(l,n){l===void 0&&(l=1);var r=1/l,L=l+(n?0:1),a=n?1:0,e=1-B;return function(i){return((L*E3(0,e,i)|0)+a)*r}}};b3.ease=z["quad.out"];N1("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return K9+=t+","+t+"Params,"});var gr=function(l,n){this.id=_e++,l._gsap=this,this.target=l,this.harness=n,this.get=n?n.get:rr,this.set=n?n.getSetter:nl},g3=function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,m2(this,+n.duration,1,1),this.data=n.data,K&&(this._ctx=K,K.data.push(this)),_3||j1.wake()}var l=t.prototype;return l.delay=function(r){return r||r===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+r-this._delay),this._delay=r,this):this._delay},l.duration=function(r){return arguments.length?this.totalDuration(this._repeat>0?r+(r+this._rDelay)*this._repeat:r):this.totalDuration()&&this._dur},l.totalDuration=function(r){return arguments.length?(this._dirty=0,m2(this,this._repeat<0?r:(r-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},l.totalTime=function(r,L){if(_2(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(f7(this,r),!a._dp||a.parent||fr(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&r<this._tDur||this._ts<0&&r>0||!this._tDur&&!r)&&m4(this._dp,this,this._start-this._delay)}return(this._tTime!==r||!this._dur&&!L||this._initted&&Math.abs(this._zTime)===B||!this._initted&&this._dur&&r||!r&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=r),Lr(this,r,L)),this},l.time=function(r,L){return arguments.length?this.totalTime(Math.min(this.totalDuration(),r+V0(this))%(this._dur+this._rDelay)||(r?this._dur:0),L):this._time},l.totalProgress=function(r,L){return arguments.length?this.totalTime(this.totalDuration()*r,L):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},l.progress=function(r,L){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-r:r)+V0(this),L):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},l.iteration=function(r,L){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(r-1)*a,L):this._repeat?H2(this._tTime,a)+1:1},l.timeScale=function(r,L){if(!arguments.length)return this._rts===-B?0:this._rts;if(this._rts===r)return this;var a=this.parent&&this._ts?I6(this.parent._time,this):this._tTime;return this._rts=+r||0,this._ts=this._ps||r===-B?0:this._rts,this.totalTime(E3(-Math.abs(this._delay),this.totalDuration(),a),L!==!1),i7(this),ze(this)},l.paused=function(r){return arguments.length?(this._ps!==r&&(this._ps=r,r?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(_2(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==B&&(this._tTime-=B)))),this):this._ps},l.startTime=function(r){if(arguments.length){this._start=G(r);var L=this.parent||this._dp;return L&&(L._sort||!this.parent)&&m4(L,this,this._start-this._delay),this}return this._start},l.endTime=function(r){return this._start+(R1(r)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},l.rawTime=function(r){var L=this.parent||this._dp;return L?r&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?I6(L.rawTime(r),this):this._tTime:this._tTime},l.revert=function(r){r===void 0&&(r=Te);var L=Z1;return Z1=r,q9(this)&&(this.timeline&&this.timeline.revert(r),this.totalTime(-.01,r.suppressEvents)),this.data!=="nested"&&r.kill!==!1&&this.kill(),Z1=L,this},l.globalTime=function(r){for(var L=this,a=arguments.length?r:L.rawTime();L;)a=L._start+a/(Math.abs(L._ts)||1),L=L._dp;return!this.parent&&this._sat?this._sat.globalTime(r):a},l.repeat=function(r){return arguments.length?(this._repeat=r===1/0?-2:r,H0(this)):this._repeat===-2?1/0:this._repeat},l.repeatDelay=function(r){if(arguments.length){var L=this._time;return this._rDelay=r,H0(this),L?this.time(L):this}return this._rDelay},l.yoyo=function(r){return arguments.length?(this._yoyo=r,this):this._yoyo},l.seek=function(r,L){return this.totalTime(l4(this,r),R1(L))},l.restart=function(r,L){return this.play().totalTime(r?-this._delay:0,R1(L)),this._dur||(this._zTime=-B),this},l.play=function(r,L){return r!=null&&this.seek(r,L),this.reversed(!1).paused(!1)},l.reverse=function(r,L){return r!=null&&this.seek(r||this.totalDuration(),L),this.reversed(!0).paused(!1)},l.pause=function(r,L){return r!=null&&this.seek(r,L),this.paused(!0)},l.resume=function(){return this.paused(!1)},l.reversed=function(r){return arguments.length?(!!r!==this.reversed()&&this.timeScale(-this._rts||(r?-B:0)),this):this._rts<0},l.invalidate=function(){return this._initted=this._act=0,this._zTime=-B,this},l.isActive=function(){var r=this.parent||this._dp,L=this._start,a;return!!(!r||this._ts&&this._initted&&r.isActive()&&(a=r.rawTime(!0))>=L&&a<this.endTime(!0)-B)},l.eventCallback=function(r,L,a){var e=this.vars;return arguments.length>1?(L?(e[r]=L,a&&(e[r+"Params"]=a),r==="onUpdate"&&(this._onUpdate=L)):delete e[r],this):e[r]},l.then=function(r){var L=this,a=L._prom;return new Promise(function(e){var i=a1(r)?r:er,f=function(){var d=L.then;L.then=null,a&&a(),a1(i)&&(i=i(L))&&(i.then||i===L)&&(L.then=d),e(i),L.then=d};L._initted&&L.totalProgress()===1&&L._ts>=0||!L._tTime&&L._ts<0?f():L._prom=f})},l.kill=function(){A2(this)},t}();G1(g3.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-B,_prom:0,_ps:!1,_rts:1});var T1=function(t){Qn(l,t);function l(r,L){var a;return r===void 0&&(r={}),a=t.call(this,r)||this,a.labels={},a.smoothChildTiming=!!r.smoothChildTiming,a.autoRemoveChildren=!!r.autoRemoveChildren,a._sort=R1(r.sortChildren),J&&m4(r.parent||J,C4(a),L),r.reversed&&a.reverse(),r.paused&&a.paused(!0),r.scrollTrigger&&cr(C4(a),r.scrollTrigger),a}var n=l.prototype;return n.to=function(L,a,e){return l3(0,arguments,this),this},n.from=function(L,a,e){return l3(1,arguments,this),this},n.fromTo=function(L,a,e,i){return l3(2,arguments,this),this},n.set=function(L,a,e){return a.duration=0,a.parent=this,J2(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new f1(L,a,l4(this,e),1),this},n.call=function(L,a,e){return m4(this,f1.delayedCall(0,L,a),e)},n.staggerTo=function(L,a,e,i,f,c,d){return e.duration=a,e.stagger=e.stagger||i,e.onComplete=c,e.onCompleteParams=d,e.parent=this,new f1(L,e,l4(this,f)),this},n.staggerFrom=function(L,a,e,i,f,c,d){return e.runBackwards=1,J2(e).immediateRender=R1(e.immediateRender),this.staggerTo(L,a,e,i,f,c,d)},n.staggerFromTo=function(L,a,e,i,f,c,d,h){return i.startAt=e,J2(i).immediateRender=R1(i.immediateRender),this.staggerTo(L,a,i,f,c,d,h)},n.render=function(L,a,e){var i=this._time,f=this._dirty?this.totalDuration():this._tDur,c=this._dur,d=L<=0?0:G(L),h=this._zTime<0!=L<0&&(this._initted||!c),o,M,Z,u,m,s,p,k,b,V,g,_;if(this!==J&&d>f&&L>=0&&(d=f),d!==this._tTime||e||h){if(i!==this._time&&c&&(d+=this._time-i,L+=this._time-i),o=d,b=this._start,k=this._ts,s=!k,h&&(c||(i=this._zTime),(L||!a)&&(this._zTime=L)),this._repeat){if(g=this._yoyo,m=c+this._rDelay,this._repeat<-1&&L<0)return this.totalTime(m*100+L,a,e);if(o=G(d%m),d===f?(u=this._repeat,o=c):(V=G(d/m),u=~~V,u&&u===V&&(o=c,u--),o>c&&(o=c)),V=H2(this._tTime,m),!i&&this._tTime&&V!==u&&this._tTime-V*m-this._dur<=0&&(V=u),g&&u&1&&(o=c-o,_=1),u!==V&&!this._lock){var H=g&&V&1,v=H===(g&&u&1);if(u<V&&(H=!H),i=H?0:d%c?c:d,this._lock=1,this.render(i||(_?0:G(u*m)),a,!c)._lock=0,this._tTime=d,!a&&this.parent&&W1(this,"onRepeat"),this.vars.repeatRefresh&&!_&&(this.invalidate()._lock=1,V=u),i&&i!==this._time||s!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,f=this._tDur,v&&(this._lock=2,i=H?c:-1e-4,this.render(i,!0),this.vars.repeatRefresh&&!_&&this.invalidate()),this._lock=0,!this._ts&&!s)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(p=Fe(this,G(i),G(o)),p&&(d-=o-(o=p._start))),this._tTime=d,this._time=o,this._act=!!k,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=L,i=0),!i&&d&&c&&!a&&!V&&(W1(this,"onStart"),this._tTime!==d))return this;if(o>=i&&L>=0)for(M=this._first;M;){if(Z=M._next,(M._act||o>=M._start)&&M._ts&&p!==M){if(M.parent!==this)return this.render(L,a,e);if(M.render(M._ts>0?(o-M._start)*M._ts:(M._dirty?M.totalDuration():M._tDur)+(o-M._start)*M._ts,a,e),o!==this._time||!this._ts&&!s){p=0,Z&&(d+=this._zTime=-B);break}}M=Z}else{M=this._last;for(var w=L<0?L:o;M;){if(Z=M._prev,(M._act||w<=M._end)&&M._ts&&p!==M){if(M.parent!==this)return this.render(L,a,e);if(M.render(M._ts>0?(w-M._start)*M._ts:(M._dirty?M.totalDuration():M._tDur)+(w-M._start)*M._ts,a,e||Z1&&q9(M)),o!==this._time||!this._ts&&!s){p=0,Z&&(d+=this._zTime=w?-B:B);break}}M=Z}}if(p&&!a&&(this.pause(),p.render(o>=i?0:-B)._zTime=o>=i?1:-1,this._ts))return this._start=b,i7(this),this.render(L,a,e);this._onUpdate&&!a&&W1(this,"onUpdate",!0),(d===f&&this._tTime>=this.totalDuration()||!d&&i)&&(b===this._start||Math.abs(k)!==Math.abs(this._ts))&&(this._lock||((L||!c)&&(d===f&&this._ts>0||!d&&this._ts<0)&&d5(this,1),!a&&!(L<0&&!i)&&(d||i||!f)&&(W1(this,d===f&&L>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<f&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(L,a){var e=this;if(F4(a)||(a=l4(this,a,L)),!(L instanceof g3)){if(g1(L))return L.forEach(function(i){return e.add(i,a)}),this;if(u1(L))return this.addLabel(L,a);if(a1(L))L=f1.delayedCall(0,L);else return this}return this!==L?m4(this,L,a):this},n.getChildren=function(L,a,e,i){L===void 0&&(L=!0),a===void 0&&(a=!0),e===void 0&&(e=!0),i===void 0&&(i=-L4);for(var f=[],c=this._first;c;)c._start>=i&&(c instanceof f1?a&&f.push(c):(e&&f.push(c),L&&f.push.apply(f,c.getChildren(!0,a,e)))),c=c._next;return f},n.getById=function(L){for(var a=this.getChildren(1,1,1),e=a.length;e--;)if(a[e].vars.id===L)return a[e]},n.remove=function(L){return u1(L)?this.removeLabel(L):a1(L)?this.killTweensOf(L):(L.parent===this&&e7(this,L),L===this._recent&&(this._recent=this._last),T5(this))},n.totalTime=function(L,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=G(j1.time-(this._ts>0?L/this._ts:(this.totalDuration()-L)/-this._ts))),t.prototype.totalTime.call(this,L,a),this._forcing=0,this):this._tTime},n.addLabel=function(L,a){return this.labels[L]=l4(this,a),this},n.removeLabel=function(L){return delete this.labels[L],this},n.addPause=function(L,a,e){var i=f1.delayedCall(0,a||H3,e);return i.data="isPause",this._hasPause=1,m4(this,i,l4(this,L))},n.removePause=function(L){var a=this._first;for(L=l4(this,L);a;)a._start===L&&a.data==="isPause"&&d5(a),a=a._next},n.killTweensOf=function(L,a,e){for(var i=this.getTweensOf(L,e),f=i.length;f--;)X4!==i[f]&&i[f].kill(L,a);return this},n.getTweensOf=function(L,a){for(var e=[],i=a4(L),f=this._first,c=F4(a),d;f;)f instanceof f1?Ee(f._targets,i)&&(c?(!X4||f._initted&&f._ts)&&f.globalTime(0)<=a&&f.globalTime(f.totalDuration())>a:!a||f.isActive())&&e.push(f):(d=f.getTweensOf(i,a)).length&&e.push.apply(e,d),f=f._next;return e},n.tweenTo=function(L,a){a=a||{};var e=this,i=l4(e,L),f=a,c=f.startAt,d=f.onStart,h=f.onStartParams,o=f.immediateRender,M,Z=f1.to(e,G1({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:a.duration||Math.abs((i-(c&&"time"in c?c.time:e._time))/e.timeScale())||B,onStart:function(){if(e.pause(),!M){var m=a.duration||Math.abs((i-(c&&"time"in c?c.time:e._time))/e.timeScale());Z._dur!==m&&m2(Z,m,0,1).render(Z._time,!0,!0),M=1}d&&d.apply(Z,h||[])}},a));return o?Z.render(0):Z},n.tweenFromTo=function(L,a,e){return this.tweenTo(a,G1({startAt:{time:l4(this,L)}},e))},n.recent=function(){return this._recent},n.nextLabel=function(L){return L===void 0&&(L=this._time),m0(this,l4(this,L))},n.previousLabel=function(L){return L===void 0&&(L=this._time),m0(this,l4(this,L),1)},n.currentLabel=function(L){return arguments.length?this.seek(L,!0):this.previousLabel(this._time+B)},n.shiftChildren=function(L,a,e){e===void 0&&(e=0);var i=this._first,f=this.labels,c;for(L=G(L);i;)i._start>=e&&(i._start+=L,i._end+=L),i=i._next;if(a)for(c in f)f[c]>=e&&(f[c]+=L);return T5(this)},n.invalidate=function(L){var a=this._first;for(this._lock=0;a;)a.invalidate(L),a=a._next;return t.prototype.invalidate.call(this,L)},n.clear=function(L){L===void 0&&(L=!0);for(var a=this._first,e;a;)e=a._next,this.remove(a),a=e;return this._dp&&(this._time=this._tTime=this._pTime=0),L&&(this.labels={}),T5(this)},n.totalDuration=function(L){var a=0,e=this,i=e._last,f=L4,c,d,h;if(arguments.length)return e.timeScale((e._repeat<0?e.duration():e.totalDuration())/(e.reversed()?-L:L));if(e._dirty){for(h=e.parent;i;)c=i._prev,i._dirty&&i.totalDuration(),d=i._start,d>f&&e._sort&&i._ts&&!e._lock?(e._lock=1,m4(e,i,d-i._delay,1)._lock=0):f=d,d<0&&i._ts&&(a-=d,(!h&&!e._dp||h&&h.smoothChildTiming)&&(e._start+=G(d/e._ts),e._time-=d,e._tTime-=d),e.shiftChildren(-d,!1,-1/0),f=0),i._end>a&&i._ts&&(a=i._end),i=c;m2(e,e===J&&e._time>a?e._time:a,1,1),e._dirty=0}return e._tDur},l.updateRoot=function(L){if(J._ts&&(Lr(J,I6(L,J)),nr=j1.frame),j1.frame>=Z0){Z0+=Q1.autoSleep||120;var a=J._first;if((!a||!a._ts)&&Q1.autoSleep&&j1._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||j1.sleep()}}},l}(g3);G1(T1.prototype,{_lock:0,_hasPause:0,_forcing:0});var ni=function(l,n,r,L,a,e,i){var f=new D1(this._pt,l,n,0,1,xr,null,a),c=0,d=0,h,o,M,Z,u,m,s,p;for(f.b=r,f.e=L,r+="",L+="",(s=~L.indexOf("random("))&&(L=m3(L)),e&&(p=[r,L],e(p,l,n),r=p[0],L=p[1]),o=r.match(z7)||[];h=z7.exec(L);)Z=h[0],u=L.substring(c,h.index),M?M=(M+1)%5:u.substr(-5)==="rgba("&&(M=1),Z!==o[d++]&&(m=parseFloat(o[d-1])||0,f._pt={_next:f._pt,p:u||d===1?u:",",s:m,c:Z.charAt(1)==="="?d2(m,Z)-m:parseFloat(Z)-m,m:M&&M<4?Math.round:0},c=z7.lastIndex);return f.c=c<L.length?L.substring(c,L.length):"",f.fp=i,(qn.test(L)||s)&&(f.e=0),this._pt=f,f},J9=function(l,n,r,L,a,e,i,f,c,d){a1(L)&&(L=L(a||0,l,e));var h=l[n],o=r!=="get"?r:a1(h)?c?l[n.indexOf("set")||!a1(l["get"+n.substr(3)])?n:"get"+n.substr(3)](c):l[n]():h,M=a1(h)?c?ii:Cr:tl,Z;if(u1(L)&&(~L.indexOf("random(")&&(L=m3(L)),L.charAt(1)==="="&&(Z=d2(o,L)+(_1(o)||0),(Z||Z===0)&&(L=Z))),!d||o!==L||B8)return!isNaN(o*L)&&L!==""?(Z=new D1(this._pt,l,n,+o||0,L-(o||0),typeof h=="boolean"?ci:Sr,0,M),c&&(Z.fp=c),i&&Z.modifier(i,this,l),this._pt=Z):(!h&&!(n in l)&&Q9(n,L),ni.call(this,l,n,o,L,M,f||Q1.stringFilter,c))},ri=function(l,n,r,L,a){if(a1(l)&&(l=t3(l,a,n,r,L)),!y4(l)||l.style&&l.nodeType||g1(l)||Kn(l))return u1(l)?t3(l,a,n,r,L):l;var e={},i;for(i in l)e[i]=t3(l[i],a,n,r,L);return e},vr=function(l,n,r,L,a,e){var i,f,c,d;if(U1[l]&&(i=new U1[l]).init(a,i.rawVars?n[l]:ri(n[l],L,a,e,r),r,L,e)!==!1&&(r._pt=f=new D1(r._pt,a,l,0,1,i.render,i,0,i.priority),r!==r2))for(c=r._ptLookup[r._targets.indexOf(a)],d=i._props.length;d--;)c[i._props[d]]=f;return i},X4,B8,ll=function t(l,n,r){var L=l.vars,a=L.ease,e=L.startAt,i=L.immediateRender,f=L.lazy,c=L.onUpdate,d=L.runBackwards,h=L.yoyoEase,o=L.keyframes,M=L.autoRevert,Z=l._dur,u=l._startAt,m=l._targets,s=l.parent,p=s&&s.data==="nested"?s.vars.targets:m,k=l._overwrite==="auto"&&!B9,b=l.timeline,V=L.easeReverse||h,g,_,H,v,w,E,R,D,I,r1,A,P,C;if(b&&(!o||!a)&&(a="none"),l._ease=E5(a,b3.ease),l._rEase=V&&(E5(V)||l._ease),l._from=!b&&!!L.runBackwards,l._from&&(l.ratio=1),!b||o&&!L.stagger){if(D=m[0]?x5(m[0]).harness:0,P=D&&L[D.prop],g=F6(L,X9),u&&(u._zTime<0&&u.progress(1),n<0&&d&&i&&!M?u.render(-1,!0):u.revert(d&&Z?d6:xe),u._lazy=0),e){if(d5(l._startAt=f1.set(m,G1({data:"isStart",overwrite:!1,parent:s,immediateRender:!0,lazy:!u&&R1(f),startAt:null,delay:0,onUpdate:c&&function(){return W1(l,"onUpdate")},stagger:0},e))),l._startAt._dp=0,l._startAt._sat=l,n<0&&(Z1||!i&&!M)&&l._startAt.revert(d6),i&&Z&&n<=0&&r<=0){n&&(l._zTime=n);return}}else if(d&&Z&&!u){if(n&&(i=!1),H=G1({overwrite:!1,data:"isFromStart",lazy:i&&!u&&R1(f),immediateRender:i,stagger:0,parent:s},g),P&&(H[D.prop]=P),d5(l._startAt=f1.set(m,H)),l._startAt._dp=0,l._startAt._sat=l,n<0&&(Z1?l._startAt.revert(d6):l._startAt.render(-1,!0)),l._zTime=n,!i)t(l._startAt,B,B);else if(!n)return}for(l._pt=l._ptCache=0,f=Z&&R1(f)||f&&!Z,_=0;_<m.length;_++){if(w=m[_],R=w._gsap||G9(m)[_]._gsap,l._ptLookup[_]=r1={},D8[R.id]&&e5.length&&D6(),A=p===m?_:p.indexOf(w),D&&(I=new D).init(w,P||g,l,A,p)!==!1&&(l._pt=v=new D1(l._pt,w,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(x){r1[x]=v}),I.priority&&(E=1)),!D||P)for(H in g)U1[H]&&(I=vr(H,g,l,A,w,p))?I.priority&&(E=1):r1[H]=v=J9.call(l,w,H,"get",g[H],A,p,0,L.stringFilter);l._op&&l._op[_]&&l.kill(w,l._op[_]),k&&l._pt&&(X4=l,J.killTweensOf(w,r1,l.globalTime(n)),C=!l.parent,X4=0),l._pt&&f&&(D8[R.id]=1)}E&&Tr(l),l._onInit&&l._onInit(l)}l._onUpdate=c,l._initted=(!l._op||l._pt)&&!C,o&&n<=0&&b.render(L4,!0,!0)},Li=function(l,n,r,L,a,e,i,f){var c=(l._pt&&l._ptCache||(l._ptCache={}))[n],d,h,o,M;if(!c)for(c=l._ptCache[n]=[],o=l._ptLookup,M=l._targets.length;M--;){if(d=o[M][n],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==n&&d.fp!==n;)d=d._next;if(!d)return B8=1,l.vars[n]="+=0",ll(l,i),B8=0,f?V3(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(d)}for(M=c.length;M--;)h=c[M],d=h._pt||h,d.s=(L||L===0)&&!a?L:d.s+(L||0)+e*d.c,d.c=r-d.s,h.e&&(h.e=e1(r)+_1(h.e)),h.b&&(h.b=d.s+_1(h.b))},ai=function(l,n){var r=l[0]?x5(l[0]).harness:0,L=r&&r.aliases,a,e,i,f;if(!L)return n;a=V2({},n);for(e in L)if(e in a)for(f=L[e].split(","),i=f.length;i--;)a[f[i]]=a[e];return a},ei=function(l,n,r,L){var a=n.ease||L||"power1.inOut",e,i;if(g1(n))i=r[l]||(r[l]=[]),n.forEach(function(f,c){return i.push({t:c/(n.length-1)*100,v:f,e:a})});else for(e in n)i=r[e]||(r[e]=[]),e==="ease"||i.push({t:parseFloat(l),v:n[e],e:a})},t3=function(l,n,r,L,a){return a1(l)?l.call(n,r,L,a):u1(l)&&~l.indexOf("random(")?m3(l):l},yr=K9+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",wr={};N1(yr+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return wr[t]=1});var f1=function(t){Qn(l,t);function l(r,L,a,e){var i;typeof L=="number"&&(a.duration=L,L=a,a=null),i=t.call(this,e?L:J2(L))||this;var f=i.vars,c=f.duration,d=f.delay,h=f.immediateRender,o=f.stagger,M=f.overwrite,Z=f.keyframes,u=f.defaults,m=f.scrollTrigger,s=L.parent||J,p=(g1(r)||Kn(r)?F4(r[0]):"length"in L)?[r]:a4(r),k,b,V,g,_,H,v,w;if(i._targets=p.length?G9(p):V3("GSAP target "+r+" not found. https://gsap.com",!Q1.nullTargetWarn)||[],i._ptLookup=[],i._overwrite=M,Z||o||G3(c)||G3(d)){L=i.vars;var E=L.easeReverse||L.yoyoEase;if(k=i.timeline=new T1({data:"nested",defaults:u||{},targets:s&&s.data==="nested"?s.vars.targets:p}),k.kill(),k.parent=k._dp=C4(i),k._start=0,o||G3(c)||G3(d)){if(g=p.length,v=o&&or(o),y4(o))for(_ in o)~yr.indexOf(_)&&(w||(w={}),w[_]=o[_]);for(b=0;b<g;b++)V=F6(L,wr),V.stagger=0,E&&(V.easeReverse=E),w&&V2(V,w),H=p[b],V.duration=+t3(c,C4(i),b,H,p),V.delay=(+t3(d,C4(i),b,H,p)||0)-i._delay,!o&&g===1&&V.delay&&(i._delay=d=V.delay,i._start+=d,V.delay=0),k.to(H,V,v?v(b,H,p):0),k._ease=z.none;k.duration()?c=d=0:i.timeline=0}else if(Z){J2(G1(k.vars.defaults,{ease:"none"})),k._ease=E5(Z.ease||L.ease||"none");var R=0,D,I,r1;if(g1(Z))Z.forEach(function(A){return k.to(p,A,">")}),k.duration();else{V={};for(_ in Z)_==="ease"||_==="easeEach"||ei(_,Z[_],V,Z.easeEach);for(_ in V)for(D=V[_].sort(function(A,P){return A.t-P.t}),R=0,b=0;b<D.length;b++)I=D[b],r1={ease:I.e,duration:(I.t-(b?D[b-1].t:0))/100*c},r1[_]=I.v,k.to(p,r1,R),R+=r1.duration;k.duration()<c&&k.to({},{duration:c-k.duration()})}}c||i.duration(c=k.duration())}else i.timeline=0;return M===!0&&!B9&&(X4=C4(i),J.killTweensOf(p),X4=0),m4(s,C4(i),a),L.reversed&&i.reverse(),L.paused&&i.paused(!0),(h||!c&&!Z&&i._start===G(s._time)&&R1(h)&&Re(C4(i))&&s.data!=="nested")&&(i._tTime=-B,i.render(Math.max(0,-d)||0)),m&&cr(C4(i),m),i}var n=l.prototype;return n.render=function(L,a,e){var i=this._time,f=this._tDur,c=this._dur,d=L<0,h=L>f-B&&!d?f:L<B?0:L,o,M,Z,u,m,s,p,k;if(!c)De(this,L,a,e);else if(h!==this._tTime||!L||e||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d||this._lazy){if(o=h,k=this.timeline,this._repeat){if(u=c+this._rDelay,this._repeat<-1&&d)return this.totalTime(u*100+L,a,e);if(o=G(h%u),h===f?(Z=this._repeat,o=c):(m=G(h/u),Z=~~m,Z&&Z===m?(o=c,Z--):o>c&&(o=c)),s=this._yoyo&&Z&1,s&&(o=c-o),m=H2(this._tTime,u),o===i&&!e&&this._initted&&Z===m)return this._tTime=h,this;Z!==m&&this.vars.repeatRefresh&&!s&&!this._lock&&o!==u&&this._initted&&(this._lock=e=1,this.render(G(u*Z),!0).invalidate()._lock=0)}if(!this._initted){if(dr(this,d?L:o,e,a,h))return this._tTime=0,this;if(i!==this._time&&!(e&&this.vars.repeatRefresh&&Z!==m))return this;if(c!==this._dur)return this.render(L,a,e)}if(this._rEase){var b=o<i;if(b!==this._inv){var V=b?i:c-i;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=i,this._invRecip=V?(b?-1:1)/V:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=p=this._invRatio+this._invScale*this._invEase((o-this._invTime)*this._invRecip)}else this.ratio=p=this._ease(o/c);if(this._from&&(this.ratio=p=1-p),this._tTime=h,this._time=o,!this._act&&this._ts&&(this._act=1,this._lazy=0),!i&&h&&!a&&!m&&(W1(this,"onStart"),this._tTime!==h))return this;for(M=this._pt;M;)M.r(p,M.d),M=M._next;k&&k.render(L<0?L:k._dur*k._ease(o/this._dur),a,e)||this._startAt&&(this._zTime=L),this._onUpdate&&!a&&(d&&F8(this,L,a,e),W1(this,"onUpdate")),this._repeat&&Z!==m&&this.vars.onRepeat&&!a&&this.parent&&W1(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(d&&!this._onUpdate&&F8(this,L,!0,!0),(L||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&d5(this,1),!a&&!(d&&!i)&&(h||i||s)&&(W1(this,h===f?"onComplete":"onReverseComplete",!0),this._prom&&!(h<f&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(L){return(!L||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(L),t.prototype.invalidate.call(this,L)},n.resetTo=function(L,a,e,i,f){_3||j1.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||ll(this,c),d=this._ease(c/this._dur),Li(this,L,a,e,i,d,c,f)?this.resetTo(L,a,e,i,1):(f7(this,0),this.parent||ir(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(L,a){if(a===void 0&&(a="all"),!L&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?A2(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Z1),this;if(this.timeline){var e=this.timeline.totalDuration();return this.timeline.killTweensOf(L,a,X4&&X4.vars.overwrite!==!0)._first||A2(this),this.parent&&e!==this.timeline.totalDuration()&&m2(this,this._dur*this.timeline._tDur/e,0,1),this}var i=this._targets,f=L?a4(L):i,c=this._ptLookup,d=this._pt,h,o,M,Z,u,m,s;if((!a||a==="all")&&Oe(i,f))return a==="all"&&(this._pt=0),A2(this);for(h=this._op=this._op||[],a!=="all"&&(u1(a)&&(u={},N1(a,function(p){return u[p]=1}),a=u),a=ai(i,a)),s=i.length;s--;)if(~f.indexOf(i[s])){o=c[s],a==="all"?(h[s]=a,Z=o,M={}):(M=h[s]=h[s]||{},Z=a);for(u in Z)m=o&&o[u],m&&((!("kill"in m.d)||m.d.kill(u)===!0)&&e7(this,m,"_pt"),delete o[u]),M!=="all"&&(M[u]=1)}return this._initted&&!this._pt&&d&&A2(this),this},l.to=function(L,a){return new l(L,a,arguments[2])},l.from=function(L,a){return l3(1,arguments)},l.delayedCall=function(L,a,e,i){return new l(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:L,onComplete:a,onReverseComplete:a,onCompleteParams:e,onReverseCompleteParams:e,callbackScope:i})},l.fromTo=function(L,a,e){return l3(2,arguments)},l.set=function(L,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new l(L,a)},l.killTweensOf=function(L,a,e){return J.killTweensOf(L,a,e)},l}(g3);G1(f1.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});N1("staggerTo,staggerFrom,staggerFromTo",function(t){f1[t]=function(){var l=new T1,n=A8.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),l[t].apply(l,n)}});var tl=function(l,n,r){return l[n]=r},Cr=function(l,n,r){return l[n](r)},ii=function(l,n,r,L){return l[n](L.fp,r)},fi=function(l,n,r){return l.setAttribute(n,r)},nl=function(l,n){return a1(l[n])?Cr:W9(l[n])&&l.setAttribute?fi:tl},Sr=function(l,n){return n.set(n.t,n.p,Math.round((n.s+n.c*l)*1e6)/1e6,n)},ci=function(l,n){return n.set(n.t,n.p,!!(n.s+n.c*l),n)},xr=function(l,n){var r=n._pt,L="";if(!l&&n.b)L=n.b;else if(l===1&&n.e)L=n.e;else{for(;r;)L=r.p+(r.m?r.m(r.s+r.c*l):Math.round((r.s+r.c*l)*1e4)/1e4)+L,r=r._next;L+=n.c}n.set(n.t,n.p,L,n)},rl=function(l,n){for(var r=n._pt;r;)r.r(l,r.d),r=r._next},di=function(l,n,r,L){for(var a=this._pt,e;a;)e=a._next,a.p===L&&a.modifier(l,n,r),a=e},pi=function(l){for(var n=this._pt,r,L;n;)L=n._next,n.p===l&&!n.op||n.op===l?e7(this,n,"_pt"):n.dep||(r=1),n=L;return!r},hi=function(l,n,r,L){L.mSet(l,n,L.m.call(L.tween,r,L.mt),L)},Tr=function(l){for(var n=l._pt,r,L,a,e;n;){for(r=n._next,L=a;L&&L.pr>n.pr;)L=L._next;(n._prev=L?L._prev:e)?n._prev._next=n:a=n,(n._next=L)?L._prev=n:e=n,n=r}l._pt=a},D1=function(){function t(n,r,L,a,e,i,f,c,d){this.t=r,this.s=a,this.c=e,this.p=L,this.r=i||Sr,this.d=f||this,this.set=c||tl,this.pr=d||0,this._next=n,n&&(n._prev=this)}var l=t.prototype;return l.modifier=function(r,L,a){this.mSet=this.mSet||this.set,this.set=hi,this.m=r,this.mt=a,this.tween=L},t}();N1(K9+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return X9[t]=1});K1.TweenMax=K1.TweenLite=f1;K1.TimelineLite=K1.TimelineMax=T1;J=new T1({sortChildren:!1,defaults:b3,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Q1.stringFilter=mr;var P5=[],h6={},oi=[],g0=0,ui=0,I7=function(l){return(h6[l]||oi).map(function(n){return n()})},W8=function(){var l=Date.now(),n=[];l-g0>2&&(I7("matchMediaInit"),P5.forEach(function(r){var L=r.queries,a=r.conditions,e,i,f,c;for(i in L)e=V4.matchMedia(L[i]).matches,e&&(f=1),e!==a[i]&&(a[i]=e,c=1);c&&(r.revert(),f&&n.push(r))}),I7("matchMediaRevert"),n.forEach(function(r){return r.onMatch(r,function(L){return r.add(null,L)})}),g0=l,I7("matchMedia"))},Er=function(){function t(n,r){this.selector=r&&U8(r),this.data=[],this._r=[],this.isReverted=!1,this.id=ui++,n&&this.add(n)}var l=t.prototype;return l.add=function(r,L,a){a1(r)&&(a=L,L=r,r=a1);var e=this,i=function(){var c=K,d=e.selector,h;return c&&c!==e&&c.data.push(e),a&&(e.selector=U8(a)),K=e,h=L.apply(e,arguments),a1(h)&&e._r.push(h),K=c,e.selector=d,e.isReverted=!1,h};return e.last=i,r===a1?i(e,function(f){return e.add(null,f)}):r?e[r]=i:i},l.ignore=function(r){var L=K;K=null,r(this),K=L},l.getTweens=function(){var r=[];return this.data.forEach(function(L){return L instanceof t?r.push.apply(r,L.getTweens()):L instanceof f1&&!(L.parent&&L.parent.data==="nested")&&r.push(L)}),r},l.clear=function(){this._r.length=this.data.length=0},l.kill=function(r,L){var a=this;if(r?function(){for(var i=a.getTweens(),f=a.data.length,c;f--;)c=a.data[f],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(d){return i.splice(i.indexOf(d),1)}));for(i.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,h){return h.g-d.g||-1/0}).forEach(function(d){return d.t.revert(r)}),f=a.data.length;f--;)c=a.data[f],c instanceof T1?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof f1)&&c.revert&&c.revert(r);a._r.forEach(function(d){return d(r,a)}),a.isReverted=!0}():this.data.forEach(function(i){return i.kill&&i.kill()}),this.clear(),L)for(var e=P5.length;e--;)P5[e].id===this.id&&P5.splice(e,1)},l.revert=function(r){this.kill(r||{})},t}(),si=function(){function t(n){this.contexts=[],this.scope=n,K&&K.data.push(this)}var l=t.prototype;return l.add=function(r,L,a){y4(r)||(r={matches:r});var e=new Er(0,a||this.scope),i=e.conditions={},f,c,d;K&&!e.selector&&(e.selector=K.selector),this.contexts.push(e),L=e.add("onMatch",L),e.queries=r;for(c in r)c==="all"?d=1:(f=V4.matchMedia(r[c]),f&&(P5.indexOf(e)<0&&P5.push(e),(i[c]=f.matches)&&(d=1),f.addListener?f.addListener(W8):f.addEventListener("change",W8)));return d&&L(e,function(h){return e.add(null,h)}),this},l.revert=function(r){this.kill(r||{})},l.kill=function(r){this.contexts.forEach(function(L){return L.kill(r,!0)})},t}(),A6={registerPlugin:function(){for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];n.forEach(function(L){return br(L)})},timeline:function(l){return new T1(l)},getTweensOf:function(l,n){return J.getTweensOf(l,n)},getProperty:function(l,n,r,L){u1(l)&&(l=a4(l)[0]);var a=x5(l||{}).get,e=r?er:ar;return r==="native"&&(r=""),l&&(n?e((U1[n]&&U1[n].get||a)(l,n,r,L)):function(i,f,c){return e((U1[i]&&U1[i].get||a)(l,i,f,c))})},quickSetter:function(l,n,r){if(l=a4(l),l.length>1){var L=l.map(function(d){return I1.quickSetter(d,n,r)}),a=L.length;return function(d){for(var h=a;h--;)L[h](d)}}l=l[0]||{};var e=U1[n],i=x5(l),f=i.harness&&(i.harness.aliases||{})[n]||n,c=e?function(d){var h=new e;r2._pt=0,h.init(l,r?d+r:d,r2,0,[l]),h.render(1,h),r2._pt&&rl(1,r2)}:i.set(l,f);return e?c:function(d){return c(l,f,r?d+r:d,i,1)}},quickTo:function(l,n,r){var L,a=I1.to(l,G1((L={},L[n]="+=0.1",L.paused=!0,L.stagger=0,L),r||{})),e=function(f,c,d){return a.resetTo(n,f,c,d)};return e.tween=a,e},isTweening:function(l){return J.getTweensOf(l,!0).length>0},defaults:function(l){return l&&l.ease&&(l.ease=E5(l.ease,b3.ease)),b0(b3,l||{})},config:function(l){return b0(Q1,l||{})},registerEffect:function(l){var n=l.name,r=l.effect,L=l.plugins,a=l.defaults,e=l.extendTimeline;(L||"").split(",").forEach(function(i){return i&&!U1[i]&&!K1[i]&&V3(n+" effect requires "+i+" plugin.")}),R7[n]=function(i,f,c){return r(a4(i),G1(f||{},a),c)},e&&(T1.prototype[n]=function(i,f,c){return this.add(R7[n](i,y4(f)?f:(c=f)&&{},this),c)})},registerEase:function(l,n){z[l]=E5(n)},parseEase:function(l,n){return arguments.length?E5(l,n):z},getById:function(l){return J.getById(l)},exportRoot:function(l,n){l===void 0&&(l={});var r=new T1(l),L,a;for(r.smoothChildTiming=R1(l.smoothChildTiming),J.remove(r),r._dp=0,r._time=r._tTime=J._time,L=J._first;L;)a=L._next,(n||!(!L._dur&&L instanceof f1&&L.vars.onComplete===L._targets[0]))&&m4(r,L,L._start-L._delay),L=a;return m4(J,r,0),r},context:function(l,n){return l?new Er(l,n):K},matchMedia:function(l){return new si(l)},matchMediaRefresh:function(){return P5.forEach(function(l){var n=l.conditions,r,L;for(L in n)n[L]&&(n[L]=!1,r=1);r&&l.revert()})||W8()},addEventListener:function(l,n){var r=h6[l]||(h6[l]=[]);~r.indexOf(n)||r.push(n)},removeEventListener:function(l,n){var r=h6[l],L=r&&r.indexOf(n);L>=0&&r.splice(L,1)},utils:{wrap:$e,wrapYoyo:Ye,distribute:or,random:sr,snap:ur,normalize:We,getUnit:_1,clamp:Ae,splitColor:Vr,toArray:a4,selector:U8,mapRange:Mr,pipe:je,unitize:Be,interpolate:Qe,shuffle:hr},install:lr,effects:R7,ticker:j1,updateRoot:T1.updateRoot,plugins:U1,globalTimeline:J,core:{PropTween:D1,globals:tr,Tween:f1,Timeline:T1,Animation:g3,getCache:x5,_removeLinkedListItem:e7,reverting:function(){return Z1},context:function(l){return l&&K&&(K.data.push(l),l._ctx=K),K},suppressOverwrites:function(l){return B9=l}}};N1("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return A6[t]=f1[t]});j1.add(T1.updateRoot);r2=A6.to({},{duration:0});var ki=function(l,n){for(var r=l._pt;r&&r.p!==n&&r.op!==n&&r.fp!==n;)r=r._next;return r},Mi=function(l,n){var r=l._targets,L,a,e;for(L in n)for(a=r.length;a--;)e=l._ptLookup[a][L],e&&(e=e.d)&&(e._pt&&(e=ki(e,L)),e&&e.modifier&&e.modifier(n[L],l,r[a],L))},A7=function(l,n){return{name:l,headless:1,rawVars:1,init:function(L,a,e){e._onInit=function(i){var f,c;if(u1(a)&&(f={},N1(a,function(d){return f[d]=1}),a=f),n){f={};for(c in a)f[c]=n(a[c]);a=f}Mi(i,a)}}}},I1=A6.registerPlugin({name:"attr",init:function(l,n,r,L,a){var e,i,f;this.tween=r;for(e in n)f=l.getAttribute(e)||"",i=this.add(l,"setAttribute",(f||0)+"",n[e],L,a,0,0,e),i.op=e,i.b=f,this._props.push(e)},render:function(l,n){for(var r=n._pt;r;)Z1?r.set(r.t,r.p,r.b,r):r.r(l,r.d),r=r._next}},{name:"endArray",headless:1,init:function(l,n){for(var r=n.length;r--;)this.add(l,r,l[r]||0,n[r],0,0,0,0,0,1)}},A7("roundProps",j8),A7("modifiers"),A7("snap",ur))||A6;f1.version=T1.version=I1.version="3.15.0";Jn=1;$9()&&_2();z.Power0;z.Power1;z.Power2;z.Power3;z.Power4;z.Linear;z.Quad;z.Cubic;z.Quart;z.Quint;z.Strong;z.Elastic;z.Back;z.SteppedEase;z.Bounce;z.Sine;z.Expo;z.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var v0,K4,p2,Ll,w5,y0,al,Zi=function(){return typeof window<"u"},I4={},_5=180/Math.PI,h2=Math.PI/180,j5=Math.atan2,w0=1e8,el=/([A-Z])/g,bi=/(left|right|width|margin|padding|x)/i,Vi=/[\s,\(]\S/,_4={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$8=function(l,n){return n.set(n.t,n.p,Math.round((n.s+n.c*l)*1e4)/1e4+n.u,n)},Hi=function(l,n){return n.set(n.t,n.p,l===1?n.e:Math.round((n.s+n.c*l)*1e4)/1e4+n.u,n)},mi=function(l,n){return n.set(n.t,n.p,l?Math.round((n.s+n.c*l)*1e4)/1e4+n.u:n.b,n)},_i=function(l,n){return n.set(n.t,n.p,l===1?n.e:l?Math.round((n.s+n.c*l)*1e4)/1e4+n.u:n.b,n)},gi=function(l,n){var r=n.s+n.c*l;n.set(n.t,n.p,~~(r+(r<0?-.5:.5))+n.u,n)},Pr=function(l,n){return n.set(n.t,n.p,l?n.e:n.b,n)},Or=function(l,n){return n.set(n.t,n.p,l!==1?n.b:n.e,n)},vi=function(l,n,r){return l.style[n]=r},yi=function(l,n,r){return l.style.setProperty(n,r)},wi=function(l,n,r){return l._gsap[n]=r},Ci=function(l,n,r){return l._gsap.scaleX=l._gsap.scaleY=r},Si=function(l,n,r,L,a){var e=l._gsap;e.scaleX=e.scaleY=r,e.renderTransform(a,e)},xi=function(l,n,r,L,a){var e=l._gsap;e[n]=r,e.renderTransform(a,e)},l1="transform",F1=l1+"Origin",Ti=function t(l,n){var r=this,L=this.target,a=L.style,e=L._gsap;if(l in I4&&a){if(this.tfm=this.tfm||{},l!=="transform")l=_4[l]||l,~l.indexOf(",")?l.split(",").forEach(function(i){return r.tfm[i]=T4(L,i)}):this.tfm[l]=e.x?e[l]:T4(L,l),l===F1&&(this.tfm.zOrigin=e.zOrigin);else return _4.transform.split(",").forEach(function(i){return t.call(r,i,n)});if(this.props.indexOf(l1)>=0)return;e.svg&&(this.svgo=L.getAttribute("data-svg-origin"),this.props.push(F1,n,"")),l=l1}(a||n)&&this.props.push(l,n,a[l])},zr=function(l){l.translate&&(l.removeProperty("translate"),l.removeProperty("scale"),l.removeProperty("rotate"))},Ei=function(){var l=this.props,n=this.target,r=n.style,L=n._gsap,a,e;for(a=0;a<l.length;a+=3)l[a+1]?l[a+1]===2?n[l[a]](l[a+2]):n[l[a]]=l[a+2]:l[a+2]?r[l[a]]=l[a+2]:r.removeProperty(l[a].substr(0,2)==="--"?l[a]:l[a].replace(el,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)L[e]=this.tfm[e];L.svg&&(L.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),a=al(),(!a||!a.isStart)&&!r[l1]&&(zr(r),L.zOrigin&&r[F1]&&(r[F1]+=" "+L.zOrigin+"px",L.zOrigin=0,L.renderTransform()),L.uncache=1)}},Rr=function(l,n){var r={target:l,props:[],revert:Ei,save:Ti};return l._gsap||I1.core.getCache(l),n&&l.style&&l.nodeType&&n.split(",").forEach(function(L){return r.save(L)}),r},Nr,Y8=function(l,n){var r=K4.createElementNS?K4.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),l):K4.createElement(l);return r&&r.style?r:K4.createElement(l)},$1=function t(l,n,r){var L=getComputedStyle(l);return L[n]||L.getPropertyValue(n.replace(el,"-$1").toLowerCase())||L.getPropertyValue(n)||!r&&t(l,g2(n)||n,1)||""},C0="O,Moz,ms,Ms,Webkit".split(","),g2=function(l,n,r){var L=n||w5,a=L.style,e=5;if(l in a&&!r)return l;for(l=l.charAt(0).toUpperCase()+l.substr(1);e--&&!(C0[e]+l in a););return e<0?null:(e===3?"ms":e>=0?C0[e]:"")+l},Q8=function(){Zi()&&window.document&&(v0=window,K4=v0.document,p2=K4.documentElement,w5=Y8("div")||{style:{}},Y8("div"),l1=g2(l1),F1=l1+"Origin",w5.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Nr=!!g2("perspective"),al=I1.core.reverting,Ll=1)},S0=function(l){var n=l.ownerSVGElement,r=Y8("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),L=l.cloneNode(!0),a;L.style.display="block",r.appendChild(L),p2.appendChild(r);try{a=L.getBBox()}catch{}return r.removeChild(L),p2.removeChild(r),a},x0=function(l,n){for(var r=n.length;r--;)if(l.hasAttribute(n[r]))return l.getAttribute(n[r])},Dr=function(l){var n,r;try{n=l.getBBox()}catch{n=S0(l),r=1}return n&&(n.width||n.height)||r||(n=S0(l)),n&&!n.width&&!n.x&&!n.y?{x:+x0(l,["x","cx","x1"])||0,y:+x0(l,["y","cy","y1"])||0,width:0,height:0}:n},Fr=function(l){return!!(l.getCTM&&(!l.parentNode||l.ownerSVGElement)&&Dr(l))},p5=function(l,n){if(n){var r=l.style,L;n in I4&&n!==F1&&(n=l1),r.removeProperty?(L=n.substr(0,2),(L==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),r.removeProperty(L==="--"?n:n.replace(el,"-$1").toLowerCase())):r.removeAttribute(n)}},G4=function(l,n,r,L,a,e){var i=new D1(l._pt,n,r,0,1,e?Or:Pr);return l._pt=i,i.b=L,i.e=a,l._props.push(r),i},T0={deg:1,rad:1,turn:1},Pi={grid:1,flex:1},h5=function t(l,n,r,L){var a=parseFloat(r)||0,e=(r+"").trim().substr((a+"").length)||"px",i=w5.style,f=bi.test(n),c=l.tagName.toLowerCase()==="svg",d=(c?"client":"offset")+(f?"Width":"Height"),h=100,o=L==="px",M=L==="%",Z,u,m,s;if(L===e||!a||T0[L]||T0[e])return a;if(e!=="px"&&!o&&(a=t(l,n,r,"px")),s=l.getCTM&&Fr(l),(M||e==="%")&&(I4[n]||~n.indexOf("adius")))return Z=s?l.getBBox()[f?"width":"height"]:l[d],e1(M?a/Z*h:a/100*Z);if(i[f?"width":"height"]=h+(o?e:L),u=L!=="rem"&&~n.indexOf("adius")||L==="em"&&l.appendChild&&!c?l:l.parentNode,s&&(u=(l.ownerSVGElement||{}).parentNode),(!u||u===K4||!u.appendChild)&&(u=K4.body),m=u._gsap,m&&M&&m.width&&f&&m.time===j1.time&&!m.uncache)return e1(a/m.width*h);if(M&&(n==="height"||n==="width")){var p=l.style[n];l.style[n]=h+L,Z=l[d],p?l.style[n]=p:p5(l,n)}else(M||e==="%")&&!Pi[$1(u,"display")]&&(i.position=$1(l,"position")),u===l&&(i.position="static"),u.appendChild(w5),Z=w5[d],u.removeChild(w5),i.position="absolute";return f&&M&&(m=x5(u),m.time=j1.time,m.width=u[d]),e1(o?Z*a/h:Z&&a?h/Z*a:0)},T4=function(l,n,r,L){var a;return Ll||Q8(),n in _4&&n!=="transform"&&(n=_4[n],~n.indexOf(",")&&(n=n.split(",")[0])),I4[n]&&n!=="transform"?(a=y3(l,L),a=n!=="transformOrigin"?a[n]:a.svg?a.origin:j6($1(l,F1))+" "+a.zOrigin+"px"):(a=l.style[n],(!a||a==="auto"||L||~(a+"").indexOf("calc("))&&(a=U6[n]&&U6[n](l,n,r)||$1(l,n)||rr(l,n)||(n==="opacity"?1:0))),r&&!~(a+"").trim().indexOf(" ")?h5(l,n,a,r)+r:a},Oi=function(l,n,r,L){if(!r||r==="none"){var a=g2(n,l,1),e=a&&$1(l,a,1);e&&e!==r?(n=a,r=e):n==="borderColor"&&(r=$1(l,"borderTopColor"))}var i=new D1(this._pt,l.style,n,0,1,xr),f=0,c=0,d,h,o,M,Z,u,m,s,p,k,b,V;if(i.b=r,i.e=L,r+="",L+="",L.substring(0,6)==="var(--"&&(L=$1(l,L.substring(4,L.indexOf(")")))),L==="auto"&&(u=l.style[n],l.style[n]=L,L=$1(l,n)||L,u?l.style[n]=u:p5(l,n)),d=[r,L],mr(d),r=d[0],L=d[1],o=r.match(n2)||[],V=L.match(n2)||[],V.length){for(;h=n2.exec(L);)m=h[0],p=L.substring(f,h.index),Z?Z=(Z+1)%5:(p.substr(-5)==="rgba("||p.substr(-5)==="hsla(")&&(Z=1),m!==(u=o[c++]||"")&&(M=parseFloat(u)||0,b=u.substr((M+"").length),m.charAt(1)==="="&&(m=d2(M,m)+b),s=parseFloat(m),k=m.substr((s+"").length),f=n2.lastIndex-k.length,k||(k=k||Q1.units[n]||b,f===L.length&&(L+=k,i.e+=k)),b!==k&&(M=h5(l,n,u,k)||0),i._pt={_next:i._pt,p:p||c===1?p:",",s:M,c:s-M,m:Z&&Z<4||n==="zIndex"?Math.round:0});i.c=f<L.length?L.substring(f,L.length):""}else i.r=n==="display"&&L==="none"?Or:Pr;return qn.test(L)&&(i.e=0),this._pt=i,i},E0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zi=function(l){var n=l.split(" "),r=n[0],L=n[1]||"50%";return(r==="top"||r==="bottom"||L==="left"||L==="right")&&(l=r,r=L,L=l),n[0]=E0[r]||r,n[1]=E0[L]||L,n.join(" ")},Ri=function(l,n){if(n.tween&&n.tween._time===n.tween._dur){var r=n.t,L=r.style,a=n.u,e=r._gsap,i,f,c;if(a==="all"||a===!0)L.cssText="",f=1;else for(a=a.split(","),c=a.length;--c>-1;)i=a[c],I4[i]&&(f=1,i=i==="transformOrigin"?F1:l1),p5(r,i);f&&(p5(r,l1),e&&(e.svg&&r.removeAttribute("transform"),L.scale=L.rotate=L.translate="none",y3(r,1),e.uncache=1,zr(L)))}},U6={clearProps:function(l,n,r,L,a){if(a.data!=="isFromStart"){var e=l._pt=new D1(l._pt,n,r,0,0,Ri);return e.u=L,e.pr=-10,e.tween=a,l._props.push(r),1}}},v3=[1,0,0,1,0,0],Ir={},Ar=function(l){return l==="matrix(1, 0, 0, 1, 0, 0)"||l==="none"||!l},P0=function(l){var n=$1(l,l1);return Ar(n)?v3:n.substr(7).match(Gn).map(e1)},il=function(l,n){var r=l._gsap||x5(l),L=l.style,a=P0(l),e,i,f,c;return r.svg&&l.getAttribute("transform")?(f=l.transform.baseVal.consolidate().matrix,a=[f.a,f.b,f.c,f.d,f.e,f.f],a.join(",")==="1,0,0,1,0,0"?v3:a):(a===v3&&!l.offsetParent&&l!==p2&&!r.svg&&(f=L.display,L.display="block",e=l.parentNode,(!e||!l.offsetParent&&!l.getBoundingClientRect().width)&&(c=1,i=l.nextElementSibling,p2.appendChild(l)),a=P0(l),f?L.display=f:p5(l,"display"),c&&(i?e.insertBefore(l,i):e?e.appendChild(l):p2.removeChild(l))),n&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},X8=function(l,n,r,L,a,e){var i=l._gsap,f=a||il(l,!0),c=i.xOrigin||0,d=i.yOrigin||0,h=i.xOffset||0,o=i.yOffset||0,M=f[0],Z=f[1],u=f[2],m=f[3],s=f[4],p=f[5],k=n.split(" "),b=parseFloat(k[0])||0,V=parseFloat(k[1])||0,g,_,H,v;r?f!==v3&&(_=M*m-Z*u)&&(H=b*(m/_)+V*(-u/_)+(u*p-m*s)/_,v=b*(-Z/_)+V*(M/_)-(M*p-Z*s)/_,b=H,V=v):(g=Dr(l),b=g.x+(~k[0].indexOf("%")?b/100*g.width:b),V=g.y+(~(k[1]||k[0]).indexOf("%")?V/100*g.height:V)),L||L!==!1&&i.smooth?(s=b-c,p=V-d,i.xOffset=h+(s*M+p*u)-s,i.yOffset=o+(s*Z+p*m)-p):i.xOffset=i.yOffset=0,i.xOrigin=b,i.yOrigin=V,i.smooth=!!L,i.origin=n,i.originIsAbsolute=!!r,l.style[F1]="0px 0px",e&&(G4(e,i,"xOrigin",c,b),G4(e,i,"yOrigin",d,V),G4(e,i,"xOffset",h,i.xOffset),G4(e,i,"yOffset",o,i.yOffset)),l.setAttribute("data-svg-origin",b+" "+V)},y3=function(l,n){var r=l._gsap||new gr(l);if("x"in r&&!n&&!r.uncache)return r;var L=l.style,a=r.scaleX<0,e="px",i="deg",f=getComputedStyle(l),c=$1(l,F1)||"0",d,h,o,M,Z,u,m,s,p,k,b,V,g,_,H,v,w,E,R,D,I,r1,A,P,C,x,T,U,W,M5,s1,c4;return d=h=o=u=m=s=p=k=b=0,M=Z=1,r.svg=!!(l.getCTM&&Fr(l)),f.translate&&((f.translate!=="none"||f.scale!=="none"||f.rotate!=="none")&&(L[l1]=(f.translate!=="none"?"translate3d("+(f.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(f.rotate!=="none"?"rotate("+f.rotate+") ":"")+(f.scale!=="none"?"scale("+f.scale.split(" ").join(",")+") ":"")+(f[l1]!=="none"?f[l1]:"")),L.scale=L.rotate=L.translate="none"),_=il(l,r.svg),r.svg&&(r.uncache?(C=l.getBBox(),c=r.xOrigin-C.x+"px "+(r.yOrigin-C.y)+"px",P=""):P=!n&&l.getAttribute("data-svg-origin"),X8(l,P||c,!!P||r.originIsAbsolute,r.smooth!==!1,_)),V=r.xOrigin||0,g=r.yOrigin||0,_!==v3&&(E=_[0],R=_[1],D=_[2],I=_[3],d=r1=_[4],h=A=_[5],_.length===6?(M=Math.sqrt(E*E+R*R),Z=Math.sqrt(I*I+D*D),u=E||R?j5(R,E)*_5:0,p=D||I?j5(D,I)*_5+u:0,p&&(Z*=Math.abs(Math.cos(p*h2))),r.svg&&(d-=V-(V*E+g*D),h-=g-(V*R+g*I))):(c4=_[6],M5=_[7],T=_[8],U=_[9],W=_[10],s1=_[11],d=_[12],h=_[13],o=_[14],H=j5(c4,W),m=H*_5,H&&(v=Math.cos(-H),w=Math.sin(-H),P=r1*v+T*w,C=A*v+U*w,x=c4*v+W*w,T=r1*-w+T*v,U=A*-w+U*v,W=c4*-w+W*v,s1=M5*-w+s1*v,r1=P,A=C,c4=x),H=j5(-D,W),s=H*_5,H&&(v=Math.cos(-H),w=Math.sin(-H),P=E*v-T*w,C=R*v-U*w,x=D*v-W*w,s1=I*w+s1*v,E=P,R=C,D=x),H=j5(R,E),u=H*_5,H&&(v=Math.cos(H),w=Math.sin(H),P=E*v+R*w,C=r1*v+A*w,R=R*v-E*w,A=A*v-r1*w,E=P,r1=C),m&&Math.abs(m)+Math.abs(u)>359.9&&(m=u=0,s=180-s),M=e1(Math.sqrt(E*E+R*R+D*D)),Z=e1(Math.sqrt(A*A+c4*c4)),H=j5(r1,A),p=Math.abs(H)>2e-4?H*_5:0,b=s1?1/(s1<0?-s1:s1):0),r.svg&&(P=l.getAttribute("transform"),r.forceCSS=l.setAttribute("transform","")||!Ar($1(l,l1)),P&&l.setAttribute("transform",P))),Math.abs(p)>90&&Math.abs(p)<270&&(a?(M*=-1,p+=u<=0?180:-180,u+=u<=0?180:-180):(Z*=-1,p+=p<=0?180:-180)),n=n||r.uncache,r.x=d-((r.xPercent=d&&(!n&&r.xPercent||(Math.round(l.offsetWidth/2)===Math.round(-d)?-50:0)))?l.offsetWidth*r.xPercent/100:0)+e,r.y=h-((r.yPercent=h&&(!n&&r.yPercent||(Math.round(l.offsetHeight/2)===Math.round(-h)?-50:0)))?l.offsetHeight*r.yPercent/100:0)+e,r.z=o+e,r.scaleX=e1(M),r.scaleY=e1(Z),r.rotation=e1(u)+i,r.rotationX=e1(m)+i,r.rotationY=e1(s)+i,r.skewX=p+i,r.skewY=k+i,r.transformPerspective=b+e,(r.zOrigin=parseFloat(c.split(" ")[2])||!n&&r.zOrigin||0)&&(L[F1]=j6(c)),r.xOffset=r.yOffset=0,r.force3D=Q1.force3D,r.renderTransform=r.svg?Di:Nr?Ur:Ni,r.uncache=0,r},j6=function(l){return(l=l.split(" "))[0]+" "+l[1]},U7=function(l,n,r){var L=_1(n);return e1(parseFloat(n)+parseFloat(h5(l,"x",r+"px",L)))+L},Ni=function(l,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Ur(l,n)},b5="0deg",R2="0px",V5=") ",Ur=function(l,n){var r=n||this,L=r.xPercent,a=r.yPercent,e=r.x,i=r.y,f=r.z,c=r.rotation,d=r.rotationY,h=r.rotationX,o=r.skewX,M=r.skewY,Z=r.scaleX,u=r.scaleY,m=r.transformPerspective,s=r.force3D,p=r.target,k=r.zOrigin,b="",V=s==="auto"&&l&&l!==1||s===!0;if(k&&(h!==b5||d!==b5)){var g=parseFloat(d)*h2,_=Math.sin(g),H=Math.cos(g),v;g=parseFloat(h)*h2,v=Math.cos(g),e=U7(p,e,_*v*-k),i=U7(p,i,-Math.sin(g)*-k),f=U7(p,f,H*v*-k+k)}m!==R2&&(b+="perspective("+m+V5),(L||a)&&(b+="translate("+L+"%, "+a+"%) "),(V||e!==R2||i!==R2||f!==R2)&&(b+=f!==R2||V?"translate3d("+e+", "+i+", "+f+") ":"translate("+e+", "+i+V5),c!==b5&&(b+="rotate("+c+V5),d!==b5&&(b+="rotateY("+d+V5),h!==b5&&(b+="rotateX("+h+V5),(o!==b5||M!==b5)&&(b+="skew("+o+", "+M+V5),(Z!==1||u!==1)&&(b+="scale("+Z+", "+u+V5),p.style[l1]=b||"translate(0, 0)"},Di=function(l,n){var r=n||this,L=r.xPercent,a=r.yPercent,e=r.x,i=r.y,f=r.rotation,c=r.skewX,d=r.skewY,h=r.scaleX,o=r.scaleY,M=r.target,Z=r.xOrigin,u=r.yOrigin,m=r.xOffset,s=r.yOffset,p=r.forceCSS,k=parseFloat(e),b=parseFloat(i),V,g,_,H,v;f=parseFloat(f),c=parseFloat(c),d=parseFloat(d),d&&(d=parseFloat(d),c+=d,f+=d),f||c?(f*=h2,c*=h2,V=Math.cos(f)*h,g=Math.sin(f)*h,_=Math.sin(f-c)*-o,H=Math.cos(f-c)*o,c&&(d*=h2,v=Math.tan(c-d),v=Math.sqrt(1+v*v),_*=v,H*=v,d&&(v=Math.tan(d),v=Math.sqrt(1+v*v),V*=v,g*=v)),V=e1(V),g=e1(g),_=e1(_),H=e1(H)):(V=h,H=o,g=_=0),(k&&!~(e+"").indexOf("px")||b&&!~(i+"").indexOf("px"))&&(k=h5(M,"x",e,"px"),b=h5(M,"y",i,"px")),(Z||u||m||s)&&(k=e1(k+Z-(Z*V+u*_)+m),b=e1(b+u-(Z*g+u*H)+s)),(L||a)&&(v=M.getBBox(),k=e1(k+L/100*v.width),b=e1(b+a/100*v.height)),v="matrix("+V+","+g+","+_+","+H+","+k+","+b+")",M.setAttribute("transform",v),p&&(M.style[l1]=v)},Fi=function(l,n,r,L,a){var e=360,i=u1(a),f=parseFloat(a)*(i&&~a.indexOf("rad")?_5:1),c=f-L,d=L+c+"deg",h,o;return i&&(h=a.split("_")[1],h==="short"&&(c%=e,c!==c%(e/2)&&(c+=c<0?e:-e)),h==="cw"&&c<0?c=(c+e*w0)%e-~~(c/e)*e:h==="ccw"&&c>0&&(c=(c-e*w0)%e-~~(c/e)*e)),l._pt=o=new D1(l._pt,n,r,L,c,Hi),o.e=d,o.u="deg",l._props.push(r),o},O0=function(l,n){for(var r in n)l[r]=n[r];return l},Ii=function(l,n,r){var L=O0({},r._gsap),a="perspective,force3D,transformOrigin,svgOrigin",e=r.style,i,f,c,d,h,o,M,Z;L.svg?(c=r.getAttribute("transform"),r.setAttribute("transform",""),e[l1]=n,i=y3(r,1),p5(r,l1),r.setAttribute("transform",c)):(c=getComputedStyle(r)[l1],e[l1]=n,i=y3(r,1),e[l1]=c);for(f in I4)c=L[f],d=i[f],c!==d&&a.indexOf(f)<0&&(M=_1(c),Z=_1(d),h=M!==Z?h5(r,f,c,Z):parseFloat(c),o=parseFloat(d),l._pt=new D1(l._pt,i,f,h,o-h,$8),l._pt.u=Z||0,l._props.push(f));O0(i,L)};N1("padding,margin,Width,Radius",function(t,l){var n="Top",r="Right",L="Bottom",a="Left",e=(l<3?[n,r,L,a]:[n+a,n+r,L+r,L+a]).map(function(i){return l<2?t+i:"border"+i+t});U6[l>1?"border"+t:t]=function(i,f,c,d,h){var o,M;if(arguments.length<4)return o=e.map(function(Z){return T4(i,Z,c)}),M=o.join(" "),M.split(o[0]).length===5?o[0]:M;o=(d+"").split(" "),M={},e.forEach(function(Z,u){return M[Z]=o[u]=o[u]||o[(u-1)/2|0]}),i.init(f,M,h)}});var jr={name:"css",register:Q8,targetTest:function(l){return l.style&&l.nodeType},init:function(l,n,r,L,a){var e=this._props,i=l.style,f=r.vars.startAt,c,d,h,o,M,Z,u,m,s,p,k,b,V,g,_,H,v;Ll||Q8(),this.styles=this.styles||Rr(l),H=this.styles.props,this.tween=r;for(u in n)if(u!=="autoRound"&&(d=n[u],!(U1[u]&&vr(u,n,r,L,l,a)))){if(M=typeof d,Z=U6[u],M==="function"&&(d=d.call(r,L,l,a),M=typeof d),M==="string"&&~d.indexOf("random(")&&(d=m3(d)),Z)Z(this,l,u,d,r)&&(_=1);else if(u.substr(0,2)==="--")c=(getComputedStyle(l).getPropertyValue(u)+"").trim(),d+="",i5.lastIndex=0,i5.test(c)||(m=_1(c),s=_1(d),s?m!==s&&(c=h5(l,u,c,s)+s):m&&(d+=m)),this.add(i,"setProperty",c,d,L,a,0,0,u),e.push(u),H.push(u,0,i[u]);else if(M!=="undefined"){if(f&&u in f?(c=typeof f[u]=="function"?f[u].call(r,L,l,a):f[u],u1(c)&&~c.indexOf("random(")&&(c=m3(c)),_1(c+"")||c==="auto"||(c+=Q1.units[u]||_1(T4(l,u))||""),(c+"").charAt(1)==="="&&(c=T4(l,u))):c=T4(l,u),o=parseFloat(c),p=M==="string"&&d.charAt(1)==="="&&d.substr(0,2),p&&(d=d.substr(2)),h=parseFloat(d),u in _4&&(u==="autoAlpha"&&(o===1&&T4(l,"visibility")==="hidden"&&h&&(o=0),H.push("visibility",0,i.visibility),G4(this,i,"visibility",o?"inherit":"hidden",h?"inherit":"hidden",!h)),u!=="scale"&&u!=="transform"&&(u=_4[u],~u.indexOf(",")&&(u=u.split(",")[0]))),k=u in I4,k){if(this.styles.save(u),v=d,M==="string"&&d.substring(0,6)==="var(--"){if(d=$1(l,d.substring(4,d.indexOf(")"))),d.substring(0,5)==="calc("){var w=l.style.perspective;l.style.perspective=d,d=$1(l,"perspective"),w?l.style.perspective=w:p5(l,"perspective")}h=parseFloat(d)}if(b||(V=l._gsap,V.renderTransform&&!n.parseTransform||y3(l,n.parseTransform),g=n.smoothOrigin!==!1&&V.smooth,b=this._pt=new D1(this._pt,i,l1,0,1,V.renderTransform,V,0,-1),b.dep=1),u==="scale")this._pt=new D1(this._pt,V,"scaleY",V.scaleY,(p?d2(V.scaleY,p+h):h)-V.scaleY||0,$8),this._pt.u=0,e.push("scaleY",u),u+="X";else if(u==="transformOrigin"){H.push(F1,0,i[F1]),d=zi(d),V.svg?X8(l,d,0,g,0,this):(s=parseFloat(d.split(" ")[2])||0,s!==V.zOrigin&&G4(this,V,"zOrigin",V.zOrigin,s),G4(this,i,u,j6(c),j6(d)));continue}else if(u==="svgOrigin"){X8(l,d,1,g,0,this);continue}else if(u in Ir){Fi(this,V,u,o,p?d2(o,p+d):d);continue}else if(u==="smoothOrigin"){G4(this,V,"smooth",V.smooth,d);continue}else if(u==="force3D"){V[u]=d;continue}else if(u==="transform"){Ii(this,d,l);continue}}else u in i||(u=g2(u)||u);if(k||(h||h===0)&&(o||o===0)&&!Vi.test(d)&&u in i)m=(c+"").substr((o+"").length),h||(h=0),s=_1(d)||(u in Q1.units?Q1.units[u]:m),m!==s&&(o=h5(l,u,c,s)),this._pt=new D1(this._pt,k?V:i,u,o,(p?d2(o,p+h):h)-o,!k&&(s==="px"||u==="zIndex")&&n.autoRound!==!1?gi:$8),this._pt.u=s||0,k&&v!==d?(this._pt.b=c,this._pt.e=v,this._pt.r=_i):m!==s&&s!=="%"&&(this._pt.b=c,this._pt.r=mi);else if(u in i)Oi.call(this,l,u,c,p?p+d:d);else if(u in l)this.add(l,u,c||l[u],p?p+d:d,L,a);else if(u!=="parseTransform"){Q9(u,d);continue}k||(u in i?H.push(u,0,i[u]):typeof l[u]=="function"?H.push(u,2,l[u]()):H.push(u,1,c||l[u])),e.push(u)}}_&&Tr(this)},render:function(l,n){if(n.tween._time||!al())for(var r=n._pt;r;)r.r(l,r.d),r=r._next;else n.styles.revert()},get:T4,aliases:_4,getSetter:function(l,n,r){var L=_4[n];return L&&L.indexOf(",")<0&&(n=L),n in I4&&n!==F1&&(l._gsap.x||T4(l,"x"))?r&&y0===r?n==="scale"?Ci:wi:(y0=r||{})&&(n==="scale"?Si:xi):l.style&&!W9(l.style[n])?vi:~n.indexOf("-")?yi:nl(l,n)},core:{_removeProperty:p5,_getMatrix:il}};I1.utils.checkPrefix=g2;I1.core.getStyleSaver=Rr;(function(t,l,n,r){var L=N1(t+","+l+","+n,function(a){I4[a]=1});N1(l,function(a){Q1.units[a]="deg",Ir[a]=1}),_4[L[13]]=t+","+l,N1(r,function(a){var e=a.split(":");_4[e[1]]=L[e[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");N1("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){Q1.units[t]="px"});I1.registerPlugin(jr);var j2=I1.registerPlugin(jr)||I1;j2.core.Tween;const Ai={mouseThreshold:100,imageLifespan:420,minImageSize:120,maxImageSize:200,minMovementForImage:14,inDuration:520,outDuration:760,baseRotation:20,maxRotationFactor:2.6,speedSmoothingFactor:.24,staggerOut:28};function Ui(t){return t.trim().startsWith("<svg")}function ji({images:t,children:l,className:n="",config:r}){const L=b4.useRef(null),a=b4.useRef([]),e=b4.useRef([]),i=b4.useRef(0),f=b4.useMemo(()=>({...Ai,...r}),[r]),c=b4.useRef({isPointerInside:!1,mouseX:0,mouseY:0,lastMouseX:0,lastMouseY:0,prevMouseX:0,prevMouseY:0,lastMoveTime:Date.now(),smoothedSpeed:0,raf:0});return b4.useEffect(()=>{const d=L.current;if(!d||t.length===0)return;const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=window.matchMedia("(hover: hover) and (pointer: fine)").matches;if(h||!o)return;const M=()=>{const H=t[i.current%t.length];return i.current+=1,H},Z=H=>{j2.killTweensOf(H),H.remove(),H.innerHTML="",H.style.opacity="0",H.style.transform="translate(-50%, -50%) scale(0)",e.current.length<24&&e.current.push(H)},u=()=>{const H=e.current.pop();if(H)return H;const v=document.createElement("div");return v.className="trail-image",v},m=()=>{const H=Date.now(),v=H-c.current.lastMoveTime;if(v<=0)return c.current.smoothedSpeed;const w=Math.hypot(c.current.mouseX-c.current.prevMouseX,c.current.mouseY-c.current.prevMouseY),E=Math.min(w/v,1),R=c.current.smoothedSpeed+(E-c.current.smoothedSpeed)*f.speedSmoothingFactor;return c.current.smoothedSpeed=R,c.current.lastMoveTime=H,c.current.prevMouseX=c.current.mouseX,c.current.prevMouseY=c.current.mouseY,R},s=H=>{const v=d.getBoundingClientRect(),w=c.current.mouseX-v.left,E=c.current.mouseY-v.top,R=Math.min(H*1.8,1),D=f.minImageSize+(f.maxImageSize-f.minImageSize)*R,I=1+R*(f.maxRotationFactor-1),r1=(Math.random()-.5)*f.baseRotation*I,A=M(),P=u();if(P.style.left=`${w}px`,P.style.top=`${E}px`,P.style.width=`${D}px`,P.style.opacity="0",P.style.transform="translate(-50%, -50%) scale(0)",Ui(A)){P.innerHTML=A;const C=P.querySelector("svg");C&&(C.style.width="100%",C.style.height="auto",C.style.display="block")}else P.innerHTML=`<img src="${A}" alt="" draggable="false" />`;d.appendChild(P),j2.set(P,{rotation:r1}),j2.to(P,{opacity:1,scale:1,duration:f.inDuration/1e3,ease:"power2.out"}),a.current.push({el:P,removeAt:Date.now()+f.imageLifespan})},p=()=>{const H=Date.now();a.current.filter(w=>H>=w.removeAt).forEach(({el:w},E)=>{j2.to(w,{opacity:0,scale:0,duration:f.outDuration/1e3,delay:E*f.staggerOut/1e3,ease:"power4.inOut",onComplete:()=>Z(w)})}),a.current=a.current.filter(w=>H<w.removeAt)},k=()=>{const H=Math.hypot(c.current.mouseX-c.current.lastMouseX,c.current.mouseY-c.current.lastMouseY),v=Math.hypot(c.current.mouseX-c.current.prevMouseX,c.current.mouseY-c.current.prevMouseY);if(H<f.mouseThreshold||v<f.minMovementForImage)return;c.current.lastMouseX=c.current.mouseX,c.current.lastMouseY=c.current.mouseY;const w=m();s(w)},b=()=>{c.current.isPointerInside&&k(),p(),c.current.raf=window.requestAnimationFrame(b)},V=H=>{c.current.mouseX=H.clientX,c.current.mouseY=H.clientY},g=H=>{c.current.isPointerInside=!0,c.current.mouseX=H.clientX,c.current.mouseY=H.clientY,c.current.lastMouseX=H.clientX,c.current.lastMouseY=H.clientY,c.current.prevMouseX=H.clientX,c.current.prevMouseY=H.clientY,c.current.lastMoveTime=Date.now(),c.current.smoothedSpeed=0},_=()=>{c.current.isPointerInside=!1};return d.addEventListener("pointermove",V,{passive:!0}),d.addEventListener("pointerenter",g,{passive:!0}),d.addEventListener("pointerleave",_,{passive:!0}),c.current.raf=window.requestAnimationFrame(b),()=>{window.cancelAnimationFrame(c.current.raf),d.removeEventListener("pointermove",V),d.removeEventListener("pointerenter",g),d.removeEventListener("pointerleave",_),a.current.forEach(({el:H})=>Z(H)),a.current=[],e.current.forEach(H=>H.remove()),e.current=[]}},[f,t]),S4.jsx("div",{ref:L,className:`trail-shell ${n}`.trim(),children:l})}const Bi=["#431A43","#9DD3E4","#CBDA63","#2B2A2B"];function Wi(t,l){return t.replace(/fill="black"/gi,`fill="${l}"`).replace(/fill="#000000"/gi,`fill="${l}"`).replace(/fill="#000"/gi,`fill="${l}"`)}const $i=[Ze,be,Ve,He].flatMap(t=>Bi.map(l=>Wi(t,l)));function Yi(){return S4.jsxs(ji,{images:$i,config:{mouseThreshold:96,imageLifespan:420,minImageSize:120,maxImageSize:210,minMovementForImage:14},className:"landing-shell",children:[S4.jsx("div",{className:"landing-halo landing-halo-left"}),S4.jsx("div",{className:"landing-halo landing-halo-right"}),S4.jsx("section",{className:"landing-card","aria-label":"Velve coming soon",children:S4.jsx("div",{className:"copy-wrap",children:S4.jsx("h1",{children:"Velve is coming soon."})})})]})}j7.createRoot(document.getElementById("root")).render(S4.jsx(eL.StrictMode,{children:S4.jsx(Yi,{})}));
