(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function U0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Zu={exports:{}},vo={},Qu={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function tv(){if(gm)return Pt;gm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function S(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function y(k,oe,Pe){this.props=k,this.context=oe,this.refs=A,this.updater=Pe||M}y.prototype.isReactComponent={},y.prototype.setState=function(k,oe){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,oe,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function v(){}v.prototype=y.prototype;function C(k,oe,Pe){this.props=k,this.context=oe,this.refs=A,this.updater=Pe||M}var I=C.prototype=new v;I.constructor=C,T(I,y.prototype),I.isPureReactComponent=!0;var D=Array.isArray,O=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function j(k,oe,Pe){var He,Ye={},te=null,de=null;if(oe!=null)for(He in oe.ref!==void 0&&(de=oe.ref),oe.key!==void 0&&(te=""+oe.key),oe)O.call(oe,He)&&!F.hasOwnProperty(He)&&(Ye[He]=oe[He]);var Se=arguments.length-2;if(Se===1)Ye.children=Pe;else if(1<Se){for(var Fe=Array(Se),Le=0;Le<Se;Le++)Fe[Le]=arguments[Le+2];Ye.children=Fe}if(k&&k.defaultProps)for(He in Se=k.defaultProps,Se)Ye[He]===void 0&&(Ye[He]=Se[He]);return{$$typeof:s,type:k,key:te,ref:de,props:Ye,_owner:L.current}}function E(k,oe){return{$$typeof:s,type:k.type,key:oe,ref:k.ref,props:k.props,_owner:k._owner}}function R(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function z(k){var oe={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Pe){return oe[Pe]})}var $=/\/+/g;function K(k,oe){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):oe.toString(36)}function re(k,oe,Pe,He,Ye){var te=typeof k;(te==="undefined"||te==="boolean")&&(k=null);var de=!1;if(k===null)de=!0;else switch(te){case"string":case"number":de=!0;break;case"object":switch(k.$$typeof){case s:case e:de=!0}}if(de)return de=k,Ye=Ye(de),k=He===""?"."+K(de,0):He,D(Ye)?(Pe="",k!=null&&(Pe=k.replace($,"$&/")+"/"),re(Ye,oe,Pe,"",function(Le){return Le})):Ye!=null&&(R(Ye)&&(Ye=E(Ye,Pe+(!Ye.key||de&&de.key===Ye.key?"":(""+Ye.key).replace($,"$&/")+"/")+k)),oe.push(Ye)),1;if(de=0,He=He===""?".":He+":",D(k))for(var Se=0;Se<k.length;Se++){te=k[Se];var Fe=He+K(te,Se);de+=re(te,oe,Pe,Fe,Ye)}else if(Fe=S(k),typeof Fe=="function")for(k=Fe.call(k),Se=0;!(te=k.next()).done;)te=te.value,Fe=He+K(te,Se++),de+=re(te,oe,Pe,Fe,Ye);else if(te==="object")throw oe=String(k),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return de}function ie(k,oe,Pe){if(k==null)return k;var He=[],Ye=0;return re(k,He,"","",function(te){return oe.call(Pe,te,Ye++)}),He}function ee(k){if(k._status===-1){var oe=k._result;oe=oe(),oe.then(function(Pe){(k._status===0||k._status===-1)&&(k._status=1,k._result=Pe)},function(Pe){(k._status===0||k._status===-1)&&(k._status=2,k._result=Pe)}),k._status===-1&&(k._status=0,k._result=oe)}if(k._status===1)return k._result.default;throw k._result}var q={current:null},X={transition:null},fe={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:X,ReactCurrentOwner:L};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:ie,forEach:function(k,oe,Pe){ie(k,function(){oe.apply(this,arguments)},Pe)},count:function(k){var oe=0;return ie(k,function(){oe++}),oe},toArray:function(k){return ie(k,function(oe){return oe})||[]},only:function(k){if(!R(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Pt.Component=y,Pt.Fragment=t,Pt.Profiler=o,Pt.PureComponent=C,Pt.StrictMode=r,Pt.Suspense=p,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Pt.act=ae,Pt.cloneElement=function(k,oe,Pe){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var He=T({},k.props),Ye=k.key,te=k.ref,de=k._owner;if(oe!=null){if(oe.ref!==void 0&&(te=oe.ref,de=L.current),oe.key!==void 0&&(Ye=""+oe.key),k.type&&k.type.defaultProps)var Se=k.type.defaultProps;for(Fe in oe)O.call(oe,Fe)&&!F.hasOwnProperty(Fe)&&(He[Fe]=oe[Fe]===void 0&&Se!==void 0?Se[Fe]:oe[Fe])}var Fe=arguments.length-2;if(Fe===1)He.children=Pe;else if(1<Fe){Se=Array(Fe);for(var Le=0;Le<Fe;Le++)Se[Le]=arguments[Le+2];He.children=Se}return{$$typeof:s,type:k.type,key:Ye,ref:te,props:He,_owner:de}},Pt.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},Pt.createElement=j,Pt.createFactory=function(k){var oe=j.bind(null,k);return oe.type=k,oe},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(k){return{$$typeof:f,render:k}},Pt.isValidElement=R,Pt.lazy=function(k){return{$$typeof:x,_payload:{_status:-1,_result:k},_init:ee}},Pt.memo=function(k,oe){return{$$typeof:m,type:k,compare:oe===void 0?null:oe}},Pt.startTransition=function(k){var oe=X.transition;X.transition={};try{k()}finally{X.transition=oe}},Pt.unstable_act=ae,Pt.useCallback=function(k,oe){return q.current.useCallback(k,oe)},Pt.useContext=function(k){return q.current.useContext(k)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(k){return q.current.useDeferredValue(k)},Pt.useEffect=function(k,oe){return q.current.useEffect(k,oe)},Pt.useId=function(){return q.current.useId()},Pt.useImperativeHandle=function(k,oe,Pe){return q.current.useImperativeHandle(k,oe,Pe)},Pt.useInsertionEffect=function(k,oe){return q.current.useInsertionEffect(k,oe)},Pt.useLayoutEffect=function(k,oe){return q.current.useLayoutEffect(k,oe)},Pt.useMemo=function(k,oe){return q.current.useMemo(k,oe)},Pt.useReducer=function(k,oe,Pe){return q.current.useReducer(k,oe,Pe)},Pt.useRef=function(k){return q.current.useRef(k)},Pt.useState=function(k){return q.current.useState(k)},Pt.useSyncExternalStore=function(k,oe,Pe){return q.current.useSyncExternalStore(k,oe,Pe)},Pt.useTransition=function(){return q.current.useTransition()},Pt.version="18.3.1",Pt}var xm;function If(){return xm||(xm=1,Qu.exports=tv()),Qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function nv(){if(vm)return vo;vm=1;var s=If(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var x,_={},S=null,M=null;m!==void 0&&(S=""+m),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(M=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(_[x]=p[x]);if(f&&f.defaultProps)for(x in p=f.defaultProps,p)_[x]===void 0&&(_[x]=p[x]);return{$$typeof:e,type:f,key:S,ref:M,props:_,_owner:o.current}}return vo.Fragment=t,vo.jsx=d,vo.jsxs=d,vo}var _m;function iv(){return _m||(_m=1,Zu.exports=nv()),Zu.exports}var u=iv(),Ue=If();const rv=U0(Ue);var Ul={},Ju={exports:{}},ri={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function sv(){return ym||(ym=1,(function(s){function e(X,fe){var ae=X.length;X.push(fe);e:for(;0<ae;){var k=ae-1>>>1,oe=X[k];if(0<o(oe,fe))X[k]=fe,X[ae]=oe,ae=k;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var fe=X[0],ae=X.pop();if(ae!==fe){X[0]=ae;e:for(var k=0,oe=X.length,Pe=oe>>>1;k<Pe;){var He=2*(k+1)-1,Ye=X[He],te=He+1,de=X[te];if(0>o(Ye,ae))te<oe&&0>o(de,Ye)?(X[k]=de,X[te]=ae,k=te):(X[k]=Ye,X[He]=ae,k=He);else if(te<oe&&0>o(de,ae))X[k]=de,X[te]=ae,k=te;else break e}}return fe}function o(X,fe){var ae=X.sortIndex-fe.sortIndex;return ae!==0?ae:X.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],x=1,_=null,S=3,M=!1,T=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(X){for(var fe=t(m);fe!==null;){if(fe.callback===null)r(m);else if(fe.startTime<=X)r(m),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=t(m)}}function D(X){if(A=!1,I(X),!T)if(t(p)!==null)T=!0,ee(O);else{var fe=t(m);fe!==null&&q(D,fe.startTime-X)}}function O(X,fe){T=!1,A&&(A=!1,v(j),j=-1),M=!0;var ae=S;try{for(I(fe),_=t(p);_!==null&&(!(_.expirationTime>fe)||X&&!z());){var k=_.callback;if(typeof k=="function"){_.callback=null,S=_.priorityLevel;var oe=k(_.expirationTime<=fe);fe=s.unstable_now(),typeof oe=="function"?_.callback=oe:_===t(p)&&r(p),I(fe)}else r(p);_=t(p)}if(_!==null)var Pe=!0;else{var He=t(m);He!==null&&q(D,He.startTime-fe),Pe=!1}return Pe}finally{_=null,S=ae,M=!1}}var L=!1,F=null,j=-1,E=5,R=-1;function z(){return!(s.unstable_now()-R<E)}function $(){if(F!==null){var X=s.unstable_now();R=X;var fe=!0;try{fe=F(!0,X)}finally{fe?K():(L=!1,F=null)}}else L=!1}var K;if(typeof C=="function")K=function(){C($)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,ie=re.port2;re.port1.onmessage=$,K=function(){ie.postMessage(null)}}else K=function(){y($,0)};function ee(X){F=X,L||(L=!0,K())}function q(X,fe){j=y(function(){X(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,ee(O))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(X){switch(S){case 1:case 2:case 3:var fe=3;break;default:fe=S}var ae=S;S=fe;try{return X()}finally{S=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,fe){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ae=S;S=X;try{return fe()}finally{S=ae}},s.unstable_scheduleCallback=function(X,fe,ae){var k=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?k+ae:k):ae=k,X){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ae+oe,X={id:x++,callback:fe,priorityLevel:X,startTime:ae,expirationTime:oe,sortIndex:-1},ae>k?(X.sortIndex=ae,e(m,X),t(p)===null&&X===t(m)&&(A?(v(j),j=-1):A=!0,q(D,ae-k))):(X.sortIndex=oe,e(p,X),T||M||(T=!0,ee(O))),X},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(X){var fe=S;return function(){var ae=S;S=fe;try{return X.apply(this,arguments)}finally{S=ae}}}})(td)),td}var Sm;function av(){return Sm||(Sm=1,ed.exports=sv()),ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function ov(){if(Mm)return ri;Mm=1;var s=If(),e=av();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function S(n){return p.call(_,n)?!0:p.call(x,n)?!1:m.test(n)?_[n]=!0:(x[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,h,g,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,C);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,h,c)&&(a=null),c||h===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),X=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,k;function oe(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Pe=!1;function He(n,i){if(!n||Pe)return"";Pe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(n,[],i)}else{try{i.call()}catch(ce){c=ce}n.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var h=ce.stack.split(`
`),g=c.stack.split(`
`),b=h.length-1,B=g.length-1;1<=b&&0<=B&&h[b]!==g[B];)B--;for(;1<=b&&0<=B;b--,B--)if(h[b]!==g[B]){if(b!==1||B!==1)do if(b--,B--,0>B||h[b]!==g[B]){var V=`
`+h[b].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=b&&0<=B);break}}}finally{Pe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?oe(n):""}function Ye(n){switch(n.tag){case 5:return oe(n.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return n=He(n.type,!1),n;case 11:return n=He(n.type.render,!1),n;case 1:return n=He(n.type,!0),n;default:return""}}function te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case L:return"Portal";case E:return"Profiler";case j:return"StrictMode";case K:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return i=n.displayName||null,i!==null?i:te(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return te(n(i))}catch{}}return null}function de(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Le(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){c=""+b,g.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function _t(n){n._valueTracker||(n._valueTracker=Le(n))}function qt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function yt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Nt(n,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ut(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Se(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function nt(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function lt(n,i){nt(n,i);var a=Se(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ke(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ke(n,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function P(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ke(n,i,a){(i!=="number"||yt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var ht=Array.isArray;function it(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Se(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Te(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function U(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(ht(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Se(a)}}function w(n,i){var a=Se(i.value),c=Se(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function H(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,Ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ce(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var We={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},at=["Webkit","ms","Moz","O"];Object.keys(We).forEach(function(n){at.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),We[i]=We[n]})});function _e(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||We.hasOwnProperty(n)&&We[n]?(""+i).trim():i+"px"}function Re(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=_e(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var ze=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ke(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ee(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ie=null,Me=null,we=null;function me(n){if(n=no(n)){if(typeof Ie!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ko(i),Ie(n.stateNode,n.type,i))}}function pe(n){Me?we?we.push(n):we=[n]:Me=n}function xe(){if(Me){var n=Me,i=we;if(we=Me=null,me(n),i)for(n=0;n<i.length;n++)me(i[n])}}function ot(n,i){return n(i)}function Dt(){}var Tt=!1;function On(n,i,a){if(Tt)return n(i,a);Tt=!0;try{return ot(n,i,a)}finally{Tt=!1,(Me!==null||we!==null)&&(Dt(),xe())}}function wn(n,i){var a=n.stateNode;if(a===null)return null;var c=Ko(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var cs=!1;if(f)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){cs=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{cs=!1}function lr(n,i,a,c,h,g,b,B,V){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(ye){this.onError(ye)}}var cr=!1,ur=null,Ai=!1,xi=null,nn={onError:function(n){cr=!0,ur=n}};function Ur(n,i,a,c,h,g,b,B,V){cr=!1,ur=null,lr.apply(nn,arguments)}function us(n,i,a,c,h,g,b,B,V){if(Ur.apply(this,arguments),cr){if(cr){var ce=ur;cr=!1,ur=null}else throw Error(t(198));Ai||(Ai=!0,xi=ce)}}function Nn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Or(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Zn(n){if(Nn(n)!==n)throw Error(t(188))}function Hs(n){var i=n.alternate;if(!i){if(i=Nn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Zn(h),n;if(g===c)return Zn(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var b=!1,B=h.child;B;){if(B===a){b=!0,a=h,c=g;break}if(B===c){b=!0,c=h,a=g;break}B=B.sibling}if(!b){for(B=g.child;B;){if(B===a){b=!0,a=g,c=h;break}if(B===c){b=!0,c=g,a=h;break}B=B.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ds(n){return n=Hs(n),n!==null?fs(n):null}function fs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=fs(n);if(i!==null)return i;n=n.sibling}return null}var hs=e.unstable_scheduleCallback,ps=e.unstable_cancelCallback,ja=e.unstable_shouldYield,Ws=e.unstable_requestPaint,Qt=e.unstable_now,N=e.unstable_getCurrentPriorityLevel,Y=e.unstable_ImmediatePriority,le=e.unstable_UserBlockingPriority,se=e.unstable_NormalPriority,Q=e.unstable_LowPriority,De=e.unstable_IdlePriority,je=null,Ne=null;function qe(n){if(Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(je,n,void 0,(n.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:St,et=Math.log,rt=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(et(n)/rt|0)|0}var Lt=64,bt=4194304;function Vt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ot(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,b=a&268435455;if(b!==0){var B=b&~h;B!==0?c=Vt(B):(g&=b,g!==0&&(c=Vt(g)))}else b=a&~h,b!==0?c=Vt(b):g!==0&&(c=Vt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ge(i),h=1<<a,c|=n[a],i&=~h;return c}function st(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var b=31-Ge(g),B=1<<b,V=h[b];V===-1?((B&a)===0||(B&c)!==0)&&(h[b]=st(B,i)):V<=i&&(n.expiredLanes|=B),g&=~B}}function Rt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xn(){var n=Lt;return Lt<<=1,(Lt&4194240)===0&&(Lt=64),n}function li(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function sn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ge(i),n[i]=a}function Gi(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Ge(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function kt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ge(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var gt=0;function Kt(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var cn,fn,dr,ci,Va,ms=!1,Hi=[],Fn=null,Wi=null,Xi=null,fr=new Map,vi=new Map,qi=[],wc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ga(n,i){switch(n){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":fr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vi.delete(i.pointerId)}}function hr(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=no(i),i!==null&&fn(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function bc(n,i,a,c,h){switch(i){case"focusin":return Fn=hr(Fn,n,i,a,c,h),!0;case"dragenter":return Wi=hr(Wi,n,i,a,c,h),!0;case"mouseover":return Xi=hr(Xi,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return fr.set(g,hr(fr.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,vi.set(g,hr(vi.get(g)||null,n,i,a,c,h)),!0}return!1}function Bo(n){var i=_s(n.target);if(i!==null){var a=Nn(i);if(a!==null){if(i=a.tag,i===13){if(i=Or(a),i!==null){n.blockedOn=i,Va(n.priority,function(){dr(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gs(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ys(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);pt=c,a.target.dispatchEvent(c),pt=null}else return i=no(a),i!==null&&fn(i),n.blockedOn=a,!1;i.shift()}return!0}function Xs(n,i,a){gs(n)&&a.delete(i)}function Ec(){ms=!1,Fn!==null&&gs(Fn)&&(Fn=null),Wi!==null&&gs(Wi)&&(Wi=null),Xi!==null&&gs(Xi)&&(Xi=null),fr.forEach(Xs),vi.forEach(Xs)}function xs(n,i){n.blockedOn===i&&(n.blockedOn=null,ms||(ms=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ec)))}function Fr(n){function i(h){return xs(h,n)}if(0<Hi.length){xs(Hi[0],n);for(var a=1;a<Hi.length;a++){var c=Hi[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Fn!==null&&xs(Fn,n),Wi!==null&&xs(Wi,n),Xi!==null&&xs(Xi,n),fr.forEach(i),vi.forEach(i),a=0;a<qi.length;a++)c=qi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<qi.length&&(a=qi[0],a.blockedOn===null);)Bo(a),a.blockedOn===null&&qi.shift()}var Ri=D.ReactCurrentBatchConfig,Ni=!0;function zo(n,i,a,c){var h=gt,g=Ri.transition;Ri.transition=null;try{gt=1,qs(n,i,a,c)}finally{gt=h,Ri.transition=g}}function jo(n,i,a,c){var h=gt,g=Ri.transition;Ri.transition=null;try{gt=4,qs(n,i,a,c)}finally{gt=h,Ri.transition=g}}function qs(n,i,a,c){if(Ni){var h=Ys(n,i,a,c);if(h===null)jc(n,i,c,vs,a),Ga(n,c);else if(bc(h,n,i,a,c))c.stopPropagation();else if(Ga(n,c),i&4&&-1<wc.indexOf(n)){for(;h!==null;){var g=no(h);if(g!==null&&cn(g),g=Ys(n,i,a,c),g===null&&jc(n,i,c,vs,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else jc(n,i,c,null,a)}}var vs=null;function Ys(n,i,a,c){if(vs=null,n=G(c),n=_s(n),n!==null)if(i=Nn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Or(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return vs=n,null}function Ha(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N()){case Y:return 1;case le:return 4;case se:case Q:return 16;case De:return 536870912;default:return 16}default:return 16}}var Mt=null,dt=null,$t=null;function Qn(){if($t)return $t;var n,i=dt,a=i.length,c,h="value"in Mt?Mt.value:Mt.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var b=a-n;for(c=1;c<=b&&i[a-c]===h[g-c];c++);return $t=h.slice(n,1<c?1-c:void 0)}function Pn(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Qe(){return!0}function _i(){return!1}function Ht(n){function i(a,c,h,g,b){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Qe:_i,this.isPropagationStopped=_i,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qe)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qe)},persist:function(){},isPersistent:Qe}),i}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=Ht($s),Wa=ae({},$s,{view:0,detail:0}),Ag=Ht(Wa),Cc,Ac,Xa,Vo=ae({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Xa&&(Xa&&n.type==="mousemove"?(Cc=n.screenX-Xa.screenX,Ac=n.screenY-Xa.screenY):Ac=Cc=0,Xa=n),Cc)},movementY:function(n){return"movementY"in n?n.movementY:Ac}}),sh=Ht(Vo),Rg=ae({},Vo,{dataTransfer:0}),Ng=Ht(Rg),Pg=ae({},Wa,{relatedTarget:0}),Rc=Ht(Pg),Dg=ae({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),Lg=Ht(Dg),Ig=ae({},$s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ug=Ht(Ig),Og=ae({},$s,{data:0}),ah=Ht(Og),Fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Bg[n])?!!i[n]:!1}function Nc(){return zg}var jg=ae({},Wa,{key:function(n){if(n.key){var i=Fg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Pn(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?kg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(n){return n.type==="keypress"?Pn(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Pn(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vg=Ht(jg),Gg=ae({},Vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=Ht(Gg),Hg=ae({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),Wg=Ht(Hg),Xg=ae({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),qg=Ht(Xg),Yg=ae({},Vo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$g=Ht(Yg),Kg=[9,13,27,32],Pc=f&&"CompositionEvent"in window,qa=null;f&&"documentMode"in document&&(qa=document.documentMode);var Zg=f&&"TextEvent"in window&&!qa,lh=f&&(!Pc||qa&&8<qa&&11>=qa),ch=" ",uh=!1;function dh(n,i){switch(n){case"keyup":return Kg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ks=!1;function Qg(n,i){switch(n){case"compositionend":return fh(i);case"keypress":return i.which!==32?null:(uh=!0,ch);case"textInput":return n=i.data,n===ch&&uh?null:n;default:return null}}function Jg(n,i){if(Ks)return n==="compositionend"||!Pc&&dh(n,i)?(n=Qn(),$t=dt=Mt=null,Ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return lh&&i.locale!=="ko"?null:i.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ex[n.type]:i==="textarea"}function ph(n,i,a,c){pe(c),i=qo(i,"onChange"),0<i.length&&(a=new Tc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ya=null,$a=null;function tx(n){Dh(n,0)}function Go(n){var i=ta(n);if(qt(i))return n}function nx(n,i){if(n==="change")return i}var mh=!1;if(f){var Dc;if(f){var Lc="oninput"in document;if(!Lc){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),Lc=typeof gh.oninput=="function"}Dc=Lc}else Dc=!1;mh=Dc&&(!document.documentMode||9<document.documentMode)}function xh(){Ya&&(Ya.detachEvent("onpropertychange",vh),$a=Ya=null)}function vh(n){if(n.propertyName==="value"&&Go($a)){var i=[];ph(i,$a,n,G(n)),On(tx,i)}}function ix(n,i,a){n==="focusin"?(xh(),Ya=i,$a=a,Ya.attachEvent("onpropertychange",vh)):n==="focusout"&&xh()}function rx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Go($a)}function sx(n,i){if(n==="click")return Go(i)}function ax(n,i){if(n==="input"||n==="change")return Go(i)}function ox(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Pi=typeof Object.is=="function"?Object.is:ox;function Ka(n,i){if(Pi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!Pi(n[h],i[h]))return!1}return!0}function _h(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yh(n,i){var a=_h(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_h(a)}}function Sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Mh(){for(var n=window,i=yt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=yt(n.document)}return i}function Ic(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function lx(n){var i=Mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Sh(a.ownerDocument.documentElement,a)){if(c!==null&&Ic(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=yh(a,g);var b=yh(a,c);h&&b&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cx=f&&"documentMode"in document&&11>=document.documentMode,Zs=null,Uc=null,Za=null,Oc=!1;function wh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oc||Zs==null||Zs!==yt(c)||(c=Zs,"selectionStart"in c&&Ic(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Za&&Ka(Za,c)||(Za=c,c=qo(Uc,"onSelect"),0<c.length&&(i=new Tc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Zs)))}function Ho(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Qs={animationend:Ho("Animation","AnimationEnd"),animationiteration:Ho("Animation","AnimationIteration"),animationstart:Ho("Animation","AnimationStart"),transitionend:Ho("Transition","TransitionEnd")},Fc={},bh={};f&&(bh=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function Wo(n){if(Fc[n])return Fc[n];if(!Qs[n])return n;var i=Qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in bh)return Fc[n]=i[a];return n}var Eh=Wo("animationend"),Th=Wo("animationiteration"),Ch=Wo("animationstart"),Ah=Wo("transitionend"),Rh=new Map,Nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(n,i){Rh.set(n,i),l(i,[n])}for(var kc=0;kc<Nh.length;kc++){var Bc=Nh[kc],ux=Bc.toLowerCase(),dx=Bc[0].toUpperCase()+Bc.slice(1);kr(ux,"on"+dx)}kr(Eh,"onAnimationEnd"),kr(Th,"onAnimationIteration"),kr(Ch,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(Ah,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function Ph(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,us(c,i,void 0,n),n.currentTarget=null}function Dh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var b=c.length-1;0<=b;b--){var B=c[b],V=B.instance,ce=B.currentTarget;if(B=B.listener,V!==g&&h.isPropagationStopped())break e;Ph(h,B,ce),g=V}else for(b=0;b<c.length;b++){if(B=c[b],V=B.instance,ce=B.currentTarget,B=B.listener,V!==g&&h.isPropagationStopped())break e;Ph(h,B,ce),g=V}}}if(Ai)throw n=xi,Ai=!1,xi=null,n}function Jt(n,i){var a=i[qc];a===void 0&&(a=i[qc]=new Set);var c=n+"__bubble";a.has(c)||(Lh(i,n,2,!1),a.add(c))}function zc(n,i,a){var c=0;i&&(c|=4),Lh(a,n,c,i)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function Ja(n){if(!n[Xo]){n[Xo]=!0,r.forEach(function(a){a!=="selectionchange"&&(fx.has(a)||zc(a,!1,n),zc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Xo]||(i[Xo]=!0,zc("selectionchange",!1,i))}}function Lh(n,i,a,c){switch(Ha(i)){case 1:var h=zo;break;case 4:h=jo;break;default:h=qs}a=h.bind(null,i,a,n),h=void 0,!cs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function jc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var B=c.stateNode.containerInfo;if(B===h||B.nodeType===8&&B.parentNode===h)break;if(b===4)for(b=c.return;b!==null;){var V=b.tag;if((V===3||V===4)&&(V=b.stateNode.containerInfo,V===h||V.nodeType===8&&V.parentNode===h))return;b=b.return}for(;B!==null;){if(b=_s(B),b===null)return;if(V=b.tag,V===5||V===6){c=g=b;continue e}B=B.parentNode}}c=c.return}On(function(){var ce=g,ye=G(a),be=[];e:{var ve=Rh.get(n);if(ve!==void 0){var Xe=Tc,Ze=n;switch(n){case"keypress":if(Pn(a)===0)break e;case"keydown":case"keyup":Xe=Vg;break;case"focusin":Ze="focus",Xe=Rc;break;case"focusout":Ze="blur",Xe=Rc;break;case"beforeblur":case"afterblur":Xe=Rc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=Ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=Wg;break;case Eh:case Th:case Ch:Xe=Lg;break;case Ah:Xe=qg;break;case"scroll":Xe=Ag;break;case"wheel":Xe=$g;break;case"copy":case"cut":case"paste":Xe=Ug;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=oh}var Je=(i&4)!==0,hn=!Je&&n==="scroll",J=Je?ve!==null?ve+"Capture":null:ve;Je=[];for(var W=ce,ne;W!==null;){ne=W;var Ae=ne.stateNode;if(ne.tag===5&&Ae!==null&&(ne=Ae,J!==null&&(Ae=wn(W,J),Ae!=null&&Je.push(eo(W,Ae,ne)))),hn)break;W=W.return}0<Je.length&&(ve=new Xe(ve,Ze,null,a,ye),be.push({event:ve,listeners:Je}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Xe=n==="mouseout"||n==="pointerout",ve&&a!==pt&&(Ze=a.relatedTarget||a.fromElement)&&(_s(Ze)||Ze[pr]))break e;if((Xe||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Xe?(Ze=a.relatedTarget||a.toElement,Xe=ce,Ze=Ze?_s(Ze):null,Ze!==null&&(hn=Nn(Ze),Ze!==hn||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(Xe=null,Ze=ce),Xe!==Ze)){if(Je=sh,Ae="onMouseLeave",J="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Je=oh,Ae="onPointerLeave",J="onPointerEnter",W="pointer"),hn=Xe==null?ve:ta(Xe),ne=Ze==null?ve:ta(Ze),ve=new Je(Ae,W+"leave",Xe,a,ye),ve.target=hn,ve.relatedTarget=ne,Ae=null,_s(ye)===ce&&(Je=new Je(J,W+"enter",Ze,a,ye),Je.target=ne,Je.relatedTarget=hn,Ae=Je),hn=Ae,Xe&&Ze)t:{for(Je=Xe,J=Ze,W=0,ne=Je;ne;ne=Js(ne))W++;for(ne=0,Ae=J;Ae;Ae=Js(Ae))ne++;for(;0<W-ne;)Je=Js(Je),W--;for(;0<ne-W;)J=Js(J),ne--;for(;W--;){if(Je===J||J!==null&&Je===J.alternate)break t;Je=Js(Je),J=Js(J)}Je=null}else Je=null;Xe!==null&&Ih(be,ve,Xe,Je,!1),Ze!==null&&hn!==null&&Ih(be,hn,Ze,Je,!0)}}e:{if(ve=ce?ta(ce):window,Xe=ve.nodeName&&ve.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&ve.type==="file")var tt=nx;else if(hh(ve))if(mh)tt=ax;else{tt=rx;var ct=ix}else(Xe=ve.nodeName)&&Xe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(tt=sx);if(tt&&(tt=tt(n,ce))){ph(be,tt,a,ye);break e}ct&&ct(n,ve,ce),n==="focusout"&&(ct=ve._wrapperState)&&ct.controlled&&ve.type==="number"&&Ke(ve,"number",ve.value)}switch(ct=ce?ta(ce):window,n){case"focusin":(hh(ct)||ct.contentEditable==="true")&&(Zs=ct,Uc=ce,Za=null);break;case"focusout":Za=Uc=Zs=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,wh(be,a,ye);break;case"selectionchange":if(cx)break;case"keydown":case"keyup":wh(be,a,ye)}var ut;if(Pc)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Ks?dh(n,a)&&(xt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(lh&&a.locale!=="ko"&&(Ks||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Ks&&(ut=Qn()):(Mt=ye,dt="value"in Mt?Mt.value:Mt.textContent,Ks=!0)),ct=qo(ce,xt),0<ct.length&&(xt=new ah(xt,n,null,a,ye),be.push({event:xt,listeners:ct}),ut?xt.data=ut:(ut=fh(a),ut!==null&&(xt.data=ut)))),(ut=Zg?Qg(n,a):Jg(n,a))&&(ce=qo(ce,"onBeforeInput"),0<ce.length&&(ye=new ah("onBeforeInput","beforeinput",null,a,ye),be.push({event:ye,listeners:ce}),ye.data=ut))}Dh(be,i)})}function eo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function qo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=wn(n,a),g!=null&&c.unshift(eo(n,g,h)),g=wn(n,i),g!=null&&c.push(eo(n,g,h))),n=n.return}return c}function Js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ih(n,i,a,c,h){for(var g=i._reactName,b=[];a!==null&&a!==c;){var B=a,V=B.alternate,ce=B.stateNode;if(V!==null&&V===c)break;B.tag===5&&ce!==null&&(B=ce,h?(V=wn(a,g),V!=null&&b.unshift(eo(a,V,B))):h||(V=wn(a,g),V!=null&&b.push(eo(a,V,B)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var hx=/\r\n?/g,px=/\u0000|\uFFFD/g;function Uh(n){return(typeof n=="string"?n:""+n).replace(hx,`
`).replace(px,"")}function Yo(n,i,a){if(i=Uh(i),Uh(n)!==i&&a)throw Error(t(425))}function $o(){}var Vc=null,Gc=null;function Hc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,mx=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,gx=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(n){return Oh.resolve(null).then(n).catch(xx)}:Wc;function xx(n){setTimeout(function(){throw n})}function Xc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),Fr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Fr(i)}function Br(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Fh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ea=Math.random().toString(36).slice(2),Yi="__reactFiber$"+ea,to="__reactProps$"+ea,pr="__reactContainer$"+ea,qc="__reactEvents$"+ea,vx="__reactListeners$"+ea,_x="__reactHandles$"+ea;function _s(n){var i=n[Yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[pr]||a[Yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Fh(n);n!==null;){if(a=n[Yi])return a;n=Fh(n)}return i}n=a,a=n.parentNode}return null}function no(n){return n=n[Yi]||n[pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ta(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ko(n){return n[to]||null}var Yc=[],na=-1;function zr(n){return{current:n}}function en(n){0>na||(n.current=Yc[na],Yc[na]=null,na--)}function Zt(n,i){na++,Yc[na]=n.current,n.current=i}var jr={},kn=zr(jr),Jn=zr(!1),ys=jr;function ia(n,i){var a=n.type.contextTypes;if(!a)return jr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function ei(n){return n=n.childContextTypes,n!=null}function Zo(){en(Jn),en(kn)}function kh(n,i,a){if(kn.current!==jr)throw Error(t(168));Zt(kn,i),Zt(Jn,a)}function Bh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,de(n)||"Unknown",h));return ae({},a,c)}function Qo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||jr,ys=kn.current,Zt(kn,n),Zt(Jn,Jn.current),!0}function zh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Bh(n,i,ys),c.__reactInternalMemoizedMergedChildContext=n,en(Jn),en(kn),Zt(kn,n)):en(Jn),Zt(Jn,a)}var mr=null,Jo=!1,$c=!1;function jh(n){mr===null?mr=[n]:mr.push(n)}function yx(n){Jo=!0,jh(n)}function Vr(){if(!$c&&mr!==null){$c=!0;var n=0,i=gt;try{var a=mr;for(gt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}mr=null,Jo=!1}catch(h){throw mr!==null&&(mr=mr.slice(n+1)),hs(Y,Vr),h}finally{gt=i,$c=!1}}return null}var ra=[],sa=0,el=null,tl=0,yi=[],Si=0,Ss=null,gr=1,xr="";function Ms(n,i){ra[sa++]=tl,ra[sa++]=el,el=n,tl=i}function Vh(n,i,a){yi[Si++]=gr,yi[Si++]=xr,yi[Si++]=Ss,Ss=n;var c=gr;n=xr;var h=32-Ge(c)-1;c&=~(1<<h),a+=1;var g=32-Ge(i)+h;if(30<g){var b=h-h%5;g=(c&(1<<b)-1).toString(32),c>>=b,h-=b,gr=1<<32-Ge(i)+h|a<<h|c,xr=g+n}else gr=1<<g|a<<h|c,xr=n}function Kc(n){n.return!==null&&(Ms(n,1),Vh(n,1,0))}function Zc(n){for(;n===el;)el=ra[--sa],ra[sa]=null,tl=ra[--sa],ra[sa]=null;for(;n===Ss;)Ss=yi[--Si],yi[Si]=null,xr=yi[--Si],yi[Si]=null,gr=yi[--Si],yi[Si]=null}var ui=null,di=null,rn=!1,Di=null;function Gh(n,i){var a=Ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Hh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ui=n,di=Br(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ui=n,di=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ss!==null?{id:gr,overflow:xr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ei(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ui=n,di=null,!0):!1;default:return!1}}function Qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Jc(n){if(rn){var i=di;if(i){var a=i;if(!Hh(n,i)){if(Qc(n))throw Error(t(418));i=Br(a.nextSibling);var c=ui;i&&Hh(n,i)?Gh(c,a):(n.flags=n.flags&-4097|2,rn=!1,ui=n)}}else{if(Qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,rn=!1,ui=n}}}function Wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ui=n}function nl(n){if(n!==ui)return!1;if(!rn)return Wh(n),rn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Hc(n.type,n.memoizedProps)),i&&(i=di)){if(Qc(n))throw Xh(),Error(t(418));for(;i;)Gh(n,i),i=Br(i.nextSibling)}if(Wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){di=Br(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}di=null}}else di=ui?Br(n.stateNode.nextSibling):null;return!0}function Xh(){for(var n=di;n;)n=Br(n.nextSibling)}function aa(){di=ui=null,rn=!1}function eu(n){Di===null?Di=[n]:Di.push(n)}var Sx=D.ReactCurrentBatchConfig;function io(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(b){var B=h.refs;b===null?delete B[g]:B[g]=b},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function il(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function qh(n){var i=n._init;return i(n._payload)}function Yh(n){function i(J,W){if(n){var ne=J.deletions;ne===null?(J.deletions=[W],J.flags|=16):ne.push(W)}}function a(J,W){if(!n)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function c(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function h(J,W){return J=Kr(J,W),J.index=0,J.sibling=null,J}function g(J,W,ne){return J.index=ne,n?(ne=J.alternate,ne!==null?(ne=ne.index,ne<W?(J.flags|=2,W):ne):(J.flags|=2,W)):(J.flags|=1048576,W)}function b(J){return n&&J.alternate===null&&(J.flags|=2),J}function B(J,W,ne,Ae){return W===null||W.tag!==6?(W=Wu(ne,J.mode,Ae),W.return=J,W):(W=h(W,ne),W.return=J,W)}function V(J,W,ne,Ae){var tt=ne.type;return tt===F?ye(J,W,ne.props.children,Ae,ne.key):W!==null&&(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ee&&qh(tt)===W.type)?(Ae=h(W,ne.props),Ae.ref=io(J,W,ne),Ae.return=J,Ae):(Ae=Cl(ne.type,ne.key,ne.props,null,J.mode,Ae),Ae.ref=io(J,W,ne),Ae.return=J,Ae)}function ce(J,W,ne,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=Xu(ne,J.mode,Ae),W.return=J,W):(W=h(W,ne.children||[]),W.return=J,W)}function ye(J,W,ne,Ae,tt){return W===null||W.tag!==7?(W=Ns(ne,J.mode,Ae,tt),W.return=J,W):(W=h(W,ne),W.return=J,W)}function be(J,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Wu(""+W,J.mode,ne),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case O:return ne=Cl(W.type,W.key,W.props,null,J.mode,ne),ne.ref=io(J,null,W),ne.return=J,ne;case L:return W=Xu(W,J.mode,ne),W.return=J,W;case ee:var Ae=W._init;return be(J,Ae(W._payload),ne)}if(ht(W)||fe(W))return W=Ns(W,J.mode,ne,null),W.return=J,W;il(J,W)}return null}function ve(J,W,ne,Ae){var tt=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return tt!==null?null:B(J,W,""+ne,Ae);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case O:return ne.key===tt?V(J,W,ne,Ae):null;case L:return ne.key===tt?ce(J,W,ne,Ae):null;case ee:return tt=ne._init,ve(J,W,tt(ne._payload),Ae)}if(ht(ne)||fe(ne))return tt!==null?null:ye(J,W,ne,Ae,null);il(J,ne)}return null}function Xe(J,W,ne,Ae,tt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return J=J.get(ne)||null,B(W,J,""+Ae,tt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case O:return J=J.get(Ae.key===null?ne:Ae.key)||null,V(W,J,Ae,tt);case L:return J=J.get(Ae.key===null?ne:Ae.key)||null,ce(W,J,Ae,tt);case ee:var ct=Ae._init;return Xe(J,W,ne,ct(Ae._payload),tt)}if(ht(Ae)||fe(Ae))return J=J.get(ne)||null,ye(W,J,Ae,tt,null);il(W,Ae)}return null}function Ze(J,W,ne,Ae){for(var tt=null,ct=null,ut=W,xt=W=0,Tn=null;ut!==null&&xt<ne.length;xt++){ut.index>xt?(Tn=ut,ut=null):Tn=ut.sibling;var Gt=ve(J,ut,ne[xt],Ae);if(Gt===null){ut===null&&(ut=Tn);break}n&&ut&&Gt.alternate===null&&i(J,ut),W=g(Gt,W,xt),ct===null?tt=Gt:ct.sibling=Gt,ct=Gt,ut=Tn}if(xt===ne.length)return a(J,ut),rn&&Ms(J,xt),tt;if(ut===null){for(;xt<ne.length;xt++)ut=be(J,ne[xt],Ae),ut!==null&&(W=g(ut,W,xt),ct===null?tt=ut:ct.sibling=ut,ct=ut);return rn&&Ms(J,xt),tt}for(ut=c(J,ut);xt<ne.length;xt++)Tn=Xe(ut,J,xt,ne[xt],Ae),Tn!==null&&(n&&Tn.alternate!==null&&ut.delete(Tn.key===null?xt:Tn.key),W=g(Tn,W,xt),ct===null?tt=Tn:ct.sibling=Tn,ct=Tn);return n&&ut.forEach(function(Zr){return i(J,Zr)}),rn&&Ms(J,xt),tt}function Je(J,W,ne,Ae){var tt=fe(ne);if(typeof tt!="function")throw Error(t(150));if(ne=tt.call(ne),ne==null)throw Error(t(151));for(var ct=tt=null,ut=W,xt=W=0,Tn=null,Gt=ne.next();ut!==null&&!Gt.done;xt++,Gt=ne.next()){ut.index>xt?(Tn=ut,ut=null):Tn=ut.sibling;var Zr=ve(J,ut,Gt.value,Ae);if(Zr===null){ut===null&&(ut=Tn);break}n&&ut&&Zr.alternate===null&&i(J,ut),W=g(Zr,W,xt),ct===null?tt=Zr:ct.sibling=Zr,ct=Zr,ut=Tn}if(Gt.done)return a(J,ut),rn&&Ms(J,xt),tt;if(ut===null){for(;!Gt.done;xt++,Gt=ne.next())Gt=be(J,Gt.value,Ae),Gt!==null&&(W=g(Gt,W,xt),ct===null?tt=Gt:ct.sibling=Gt,ct=Gt);return rn&&Ms(J,xt),tt}for(ut=c(J,ut);!Gt.done;xt++,Gt=ne.next())Gt=Xe(ut,J,xt,Gt.value,Ae),Gt!==null&&(n&&Gt.alternate!==null&&ut.delete(Gt.key===null?xt:Gt.key),W=g(Gt,W,xt),ct===null?tt=Gt:ct.sibling=Gt,ct=Gt);return n&&ut.forEach(function(ev){return i(J,ev)}),rn&&Ms(J,xt),tt}function hn(J,W,ne,Ae){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case O:e:{for(var tt=ne.key,ct=W;ct!==null;){if(ct.key===tt){if(tt=ne.type,tt===F){if(ct.tag===7){a(J,ct.sibling),W=h(ct,ne.props.children),W.return=J,J=W;break e}}else if(ct.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ee&&qh(tt)===ct.type){a(J,ct.sibling),W=h(ct,ne.props),W.ref=io(J,ct,ne),W.return=J,J=W;break e}a(J,ct);break}else i(J,ct);ct=ct.sibling}ne.type===F?(W=Ns(ne.props.children,J.mode,Ae,ne.key),W.return=J,J=W):(Ae=Cl(ne.type,ne.key,ne.props,null,J.mode,Ae),Ae.ref=io(J,W,ne),Ae.return=J,J=Ae)}return b(J);case L:e:{for(ct=ne.key;W!==null;){if(W.key===ct)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){a(J,W.sibling),W=h(W,ne.children||[]),W.return=J,J=W;break e}else{a(J,W);break}else i(J,W);W=W.sibling}W=Xu(ne,J.mode,Ae),W.return=J,J=W}return b(J);case ee:return ct=ne._init,hn(J,W,ct(ne._payload),Ae)}if(ht(ne))return Ze(J,W,ne,Ae);if(fe(ne))return Je(J,W,ne,Ae);il(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,W!==null&&W.tag===6?(a(J,W.sibling),W=h(W,ne),W.return=J,J=W):(a(J,W),W=Wu(ne,J.mode,Ae),W.return=J,J=W),b(J)):a(J,W)}return hn}var oa=Yh(!0),$h=Yh(!1),rl=zr(null),sl=null,la=null,tu=null;function nu(){tu=la=sl=null}function iu(n){var i=rl.current;en(rl),n._currentValue=i}function ru(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ca(n,i){sl=n,tu=la=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ti=!0),n.firstContext=null)}function Mi(n){var i=n._currentValue;if(tu!==n)if(n={context:n,memoizedValue:i,next:null},la===null){if(sl===null)throw Error(t(308));la=n,sl.dependencies={lanes:0,firstContext:n}}else la=la.next=n;return i}var ws=null;function su(n){ws===null?ws=[n]:ws.push(n)}function Kh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,su(i)):(a.next=h.next,h.next=a),i.interleaved=a,vr(n,c)}function vr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Gr=!1;function au(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _r(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Hr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Bt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,vr(n,a)}return h=c.interleaved,h===null?(i.next=i,su(c)):(i.next=h.next,h.next=i),c.interleaved=i,vr(n,a)}function al(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,kt(n,a)}}function Qh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=b:g=g.next=b,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ol(n,i,a,c){var h=n.updateQueue;Gr=!1;var g=h.firstBaseUpdate,b=h.lastBaseUpdate,B=h.shared.pending;if(B!==null){h.shared.pending=null;var V=B,ce=V.next;V.next=null,b===null?g=ce:b.next=ce,b=V;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,B=ye.lastBaseUpdate,B!==b&&(B===null?ye.firstBaseUpdate=ce:B.next=ce,ye.lastBaseUpdate=V))}if(g!==null){var be=h.baseState;b=0,ye=ce=V=null,B=g;do{var ve=B.lane,Xe=B.eventTime;if((c&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Xe,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Ze=n,Je=B;switch(ve=i,Xe=a,Je.tag){case 1:if(Ze=Je.payload,typeof Ze=="function"){be=Ze.call(Xe,be,ve);break e}be=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=Je.payload,ve=typeof Ze=="function"?Ze.call(Xe,be,ve):Ze,ve==null)break e;be=ae({},be,ve);break e;case 2:Gr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,ve=h.effects,ve===null?h.effects=[B]:ve.push(B))}else Xe={eventTime:Xe,lane:ve,tag:B.tag,payload:B.payload,callback:B.callback,next:null},ye===null?(ce=ye=Xe,V=be):ye=ye.next=Xe,b|=ve;if(B=B.next,B===null){if(B=h.shared.pending,B===null)break;ve=B,B=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(ye===null&&(V=be),h.baseState=V,h.firstBaseUpdate=ce,h.lastBaseUpdate=ye,i=h.shared.interleaved,i!==null){h=i;do b|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Ts|=b,n.lanes=b,n.memoizedState=be}}function Jh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var ro={},$i=zr(ro),so=zr(ro),ao=zr(ro);function bs(n){if(n===ro)throw Error(t(174));return n}function ou(n,i){switch(Zt(ao,i),Zt(so,n),Zt($i,ro),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ge(i,n)}en($i),Zt($i,i)}function ua(){en($i),en(so),en(ao)}function ep(n){bs(ao.current);var i=bs($i.current),a=ge(i,n.type);i!==a&&(Zt(so,n),Zt($i,a))}function lu(n){so.current===n&&(en($i),en(so))}var an=zr(0);function ll(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var cu=[];function uu(){for(var n=0;n<cu.length;n++)cu[n]._workInProgressVersionPrimary=null;cu.length=0}var cl=D.ReactCurrentDispatcher,du=D.ReactCurrentBatchConfig,Es=0,on=null,vn=null,bn=null,ul=!1,oo=!1,lo=0,Mx=0;function Bn(){throw Error(t(321))}function fu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Pi(n[a],i[a]))return!1;return!0}function hu(n,i,a,c,h,g){if(Es=g,on=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,cl.current=n===null||n.memoizedState===null?Tx:Cx,n=a(c,h),oo){g=0;do{if(oo=!1,lo=0,25<=g)throw Error(t(301));g+=1,bn=vn=null,i.updateQueue=null,cl.current=Ax,n=a(c,h)}while(oo)}if(cl.current=hl,i=vn!==null&&vn.next!==null,Es=0,bn=vn=on=null,ul=!1,i)throw Error(t(300));return n}function pu(){var n=lo!==0;return lo=0,n}function Ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?on.memoizedState=bn=n:bn=bn.next=n,bn}function wi(){if(vn===null){var n=on.alternate;n=n!==null?n.memoizedState:null}else n=vn.next;var i=bn===null?on.memoizedState:bn.next;if(i!==null)bn=i,vn=n;else{if(n===null)throw Error(t(310));vn=n,n={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},bn===null?on.memoizedState=bn=n:bn=bn.next=n}return bn}function co(n,i){return typeof i=="function"?i(n):i}function mu(n){var i=wi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=vn,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var b=h.next;h.next=g.next,g.next=b}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var B=b=null,V=null,ce=g;do{var ye=ce.lane;if((Es&ye)===ye)V!==null&&(V=V.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var be={lane:ye,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};V===null?(B=V=be,b=c):V=V.next=be,on.lanes|=ye,Ts|=ye}ce=ce.next}while(ce!==null&&ce!==g);V===null?b=c:V.next=B,Pi(c,i.memoizedState)||(ti=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=V,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,on.lanes|=g,Ts|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function gu(n){var i=wi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var b=h=h.next;do g=n(g,b.action),b=b.next;while(b!==h);Pi(g,i.memoizedState)||(ti=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function tp(){}function np(n,i){var a=on,c=wi(),h=i(),g=!Pi(c.memoizedState,h);if(g&&(c.memoizedState=h,ti=!0),c=c.queue,xu(sp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||bn!==null&&bn.memoizedState.tag&1){if(a.flags|=2048,uo(9,rp.bind(null,a,c,h,i),void 0,null),En===null)throw Error(t(349));(Es&30)!==0||ip(a,i,h)}return h}function ip(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=on.updateQueue,i===null?(i={lastEffect:null,stores:null},on.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function rp(n,i,a,c){i.value=a,i.getSnapshot=c,ap(i)&&op(n)}function sp(n,i,a){return a(function(){ap(i)&&op(n)})}function ap(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Pi(n,a)}catch{return!0}}function op(n){var i=vr(n,1);i!==null&&Oi(i,n,1,-1)}function lp(n){var i=Ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:co,lastRenderedState:n},i.queue=n,n=n.dispatch=Ex.bind(null,on,n),[i.memoizedState,n]}function uo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=on.updateQueue,i===null?(i={lastEffect:null,stores:null},on.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function cp(){return wi().memoizedState}function dl(n,i,a,c){var h=Ki();on.flags|=n,h.memoizedState=uo(1|i,a,void 0,c===void 0?null:c)}function fl(n,i,a,c){var h=wi();c=c===void 0?null:c;var g=void 0;if(vn!==null){var b=vn.memoizedState;if(g=b.destroy,c!==null&&fu(c,b.deps)){h.memoizedState=uo(i,a,g,c);return}}on.flags|=n,h.memoizedState=uo(1|i,a,g,c)}function up(n,i){return dl(8390656,8,n,i)}function xu(n,i){return fl(2048,8,n,i)}function dp(n,i){return fl(4,2,n,i)}function fp(n,i){return fl(4,4,n,i)}function hp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function pp(n,i,a){return a=a!=null?a.concat([n]):null,fl(4,4,hp.bind(null,i,n),a)}function vu(){}function mp(n,i){var a=wi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&fu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function gp(n,i){var a=wi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&fu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function xp(n,i,a){return(Es&21)===0?(n.baseState&&(n.baseState=!1,ti=!0),n.memoizedState=a):(Pi(a,i)||(a=xn(),on.lanes|=a,Ts|=a,n.baseState=!0),i)}function wx(n,i){var a=gt;gt=a!==0&&4>a?a:4,n(!0);var c=du.transition;du.transition={};try{n(!1),i()}finally{gt=a,du.transition=c}}function vp(){return wi().memoizedState}function bx(n,i,a){var c=Yr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},_p(n))yp(i,a);else if(a=Kh(n,i,a,c),a!==null){var h=Yn();Oi(a,n,c,h),Sp(a,i,c)}}function Ex(n,i,a){var c=Yr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(_p(n))yp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,B=g(b,a);if(h.hasEagerState=!0,h.eagerState=B,Pi(B,b)){var V=i.interleaved;V===null?(h.next=h,su(i)):(h.next=V.next,V.next=h),i.interleaved=h;return}}catch{}finally{}a=Kh(n,i,h,c),a!==null&&(h=Yn(),Oi(a,n,c,h),Sp(a,i,c))}}function _p(n){var i=n.alternate;return n===on||i!==null&&i===on}function yp(n,i){oo=ul=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Sp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,kt(n,a)}}var hl={readContext:Mi,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useInsertionEffect:Bn,useLayoutEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useMutableSource:Bn,useSyncExternalStore:Bn,useId:Bn,unstable_isNewReconciler:!1},Tx={readContext:Mi,useCallback:function(n,i){return Ki().memoizedState=[n,i===void 0?null:i],n},useContext:Mi,useEffect:up,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,dl(4194308,4,hp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return dl(4194308,4,n,i)},useInsertionEffect:function(n,i){return dl(4,2,n,i)},useMemo:function(n,i){var a=Ki();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ki();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=bx.bind(null,on,n),[c.memoizedState,n]},useRef:function(n){var i=Ki();return n={current:n},i.memoizedState=n},useState:lp,useDebugValue:vu,useDeferredValue:function(n){return Ki().memoizedState=n},useTransition:function(){var n=lp(!1),i=n[0];return n=wx.bind(null,n[1]),Ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=on,h=Ki();if(rn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),En===null)throw Error(t(349));(Es&30)!==0||ip(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,up(sp.bind(null,c,g,n),[n]),c.flags|=2048,uo(9,rp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Ki(),i=En.identifierPrefix;if(rn){var a=xr,c=gr;a=(c&~(1<<32-Ge(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=lo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Mx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Cx={readContext:Mi,useCallback:mp,useContext:Mi,useEffect:xu,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:gp,useReducer:mu,useRef:cp,useState:function(){return mu(co)},useDebugValue:vu,useDeferredValue:function(n){var i=wi();return xp(i,vn.memoizedState,n)},useTransition:function(){var n=mu(co)[0],i=wi().memoizedState;return[n,i]},useMutableSource:tp,useSyncExternalStore:np,useId:vp,unstable_isNewReconciler:!1},Ax={readContext:Mi,useCallback:mp,useContext:Mi,useEffect:xu,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:gp,useReducer:gu,useRef:cp,useState:function(){return gu(co)},useDebugValue:vu,useDeferredValue:function(n){var i=wi();return vn===null?i.memoizedState=n:xp(i,vn.memoizedState,n)},useTransition:function(){var n=gu(co)[0],i=wi().memoizedState;return[n,i]},useMutableSource:tp,useSyncExternalStore:np,useId:vp,unstable_isNewReconciler:!1};function Li(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function _u(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ae({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var pl={isMounted:function(n){return(n=n._reactInternals)?Nn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Yn(),h=Yr(n),g=_r(c,h);g.payload=i,a!=null&&(g.callback=a),i=Hr(n,g,h),i!==null&&(Oi(i,n,h,c),al(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Yn(),h=Yr(n),g=_r(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Hr(n,g,h),i!==null&&(Oi(i,n,h,c),al(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Yn(),c=Yr(n),h=_r(a,c);h.tag=2,i!=null&&(h.callback=i),i=Hr(n,h,c),i!==null&&(Oi(i,n,c,a),al(i,n,c))}};function Mp(n,i,a,c,h,g,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,b):i.prototype&&i.prototype.isPureReactComponent?!Ka(a,c)||!Ka(h,g):!0}function wp(n,i,a){var c=!1,h=jr,g=i.contextType;return typeof g=="object"&&g!==null?g=Mi(g):(h=ei(i)?ys:kn.current,c=i.contextTypes,g=(c=c!=null)?ia(n,h):jr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=pl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function bp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&pl.enqueueReplaceState(i,i.state,null)}function yu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},au(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Mi(g):(g=ei(i)?ys:kn.current,h.context=ia(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(_u(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&pl.enqueueReplaceState(h,h.state,null),ol(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function da(n,i){try{var a="",c=i;do a+=Ye(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Su(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Mu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Rx=typeof WeakMap=="function"?WeakMap:Map;function Ep(n,i,a){a=_r(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Sl||(Sl=!0,Fu=c),Mu(n,i)},a}function Tp(n,i,a){a=_r(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Mu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Mu(n,i),typeof c!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function Cp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Rx;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=Gx.bind(null,n,i,a),i.then(n,n))}function Ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Rp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=_r(-1,1),i.tag=2,Hr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Nx=D.ReactCurrentOwner,ti=!1;function qn(n,i,a,c){i.child=n===null?$h(i,null,a,c):oa(i,n.child,a,c)}function Np(n,i,a,c,h){a=a.render;var g=i.ref;return ca(i,h),c=hu(n,i,a,c,g,h),a=pu(),n!==null&&!ti?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,yr(n,i,h)):(rn&&a&&Kc(i),i.flags|=1,qn(n,i,c,h),i.child)}function Pp(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!Hu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Dp(n,i,g,c,h)):(n=Cl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var b=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ka,a(b,c)&&n.ref===i.ref)return yr(n,i,h)}return i.flags|=1,n=Kr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Dp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(Ka(g,c)&&n.ref===i.ref)if(ti=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(ti=!0);else return i.lanes=n.lanes,yr(n,i,h)}return wu(n,i,a,c,h)}function Lp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Zt(ha,fi),fi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Zt(ha,fi),fi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Zt(ha,fi),fi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Zt(ha,fi),fi|=c;return qn(n,i,h,a),i.child}function Ip(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function wu(n,i,a,c,h){var g=ei(a)?ys:kn.current;return g=ia(i,g),ca(i,h),a=hu(n,i,a,c,g,h),c=pu(),n!==null&&!ti?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,yr(n,i,h)):(rn&&c&&Kc(i),i.flags|=1,qn(n,i,a,h),i.child)}function Up(n,i,a,c,h){if(ei(a)){var g=!0;Qo(i)}else g=!1;if(ca(i,h),i.stateNode===null)gl(n,i),wp(i,a,c),yu(i,a,c,h),c=!0;else if(n===null){var b=i.stateNode,B=i.memoizedProps;b.props=B;var V=b.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=Mi(ce):(ce=ei(a)?ys:kn.current,ce=ia(i,ce));var ye=a.getDerivedStateFromProps,be=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function";be||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==c||V!==ce)&&bp(i,b,c,ce),Gr=!1;var ve=i.memoizedState;b.state=ve,ol(i,c,b,h),V=i.memoizedState,B!==c||ve!==V||Jn.current||Gr?(typeof ye=="function"&&(_u(i,a,ye,c),V=i.memoizedState),(B=Gr||Mp(i,a,B,c,ve,V,ce))?(be||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),b.props=c,b.state=V,b.context=ce,c=B):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,Zh(n,i),B=i.memoizedProps,ce=i.type===i.elementType?B:Li(i.type,B),b.props=ce,be=i.pendingProps,ve=b.context,V=a.contextType,typeof V=="object"&&V!==null?V=Mi(V):(V=ei(a)?ys:kn.current,V=ia(i,V));var Xe=a.getDerivedStateFromProps;(ye=typeof Xe=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==be||ve!==V)&&bp(i,b,c,V),Gr=!1,ve=i.memoizedState,b.state=ve,ol(i,c,b,h);var Ze=i.memoizedState;B!==be||ve!==Ze||Jn.current||Gr?(typeof Xe=="function"&&(_u(i,a,Xe,c),Ze=i.memoizedState),(ce=Gr||Mp(i,a,ce,c,ve,Ze,V)||!1)?(ye||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,Ze,V),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,Ze,V)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||B===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ze),b.props=c,b.state=Ze,b.context=V,c=ce):(typeof b.componentDidUpdate!="function"||B===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return bu(n,i,a,c,g,h)}function bu(n,i,a,c,h,g){Ip(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return h&&zh(i,a,!1),yr(n,i,g);c=i.stateNode,Nx.current=i;var B=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=oa(i,n.child,null,g),i.child=oa(i,null,B,g)):qn(n,i,B,g),i.memoizedState=c.state,h&&zh(i,a,!0),i.child}function Op(n){var i=n.stateNode;i.pendingContext?kh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&kh(n,i.context,!1),ou(n,i.containerInfo)}function Fp(n,i,a,c,h){return aa(),eu(h),i.flags|=256,qn(n,i,a,c),i.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Tu(n){return{baseLanes:n,cachePool:null,transitions:null}}function kp(n,i,a){var c=i.pendingProps,h=an.current,g=!1,b=(i.flags&128)!==0,B;if((B=b)||(B=n!==null&&n.memoizedState===null?!1:(h&2)!==0),B?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Zt(an,h&1),n===null)return Jc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,g?(c=i.mode,g=i.child,b={mode:"hidden",children:b},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=Al(b,c,0,null),n=Ns(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Tu(a),i.memoizedState=Eu,n):Cu(i,b));if(h=n.memoizedState,h!==null&&(B=h.dehydrated,B!==null))return Px(n,i,b,c,B,h,a);if(g){g=c.fallback,b=i.mode,h=n.child,B=h.sibling;var V={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=Kr(h,V),c.subtreeFlags=h.subtreeFlags&14680064),B!==null?g=Kr(B,g):(g=Ns(g,b,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,b=n.child.memoizedState,b=b===null?Tu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=n.childLanes&~a,i.memoizedState=Eu,c}return g=n.child,n=g.sibling,c=Kr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Cu(n,i){return i=Al({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ml(n,i,a,c){return c!==null&&eu(c),oa(i,n.child,null,a),n=Cu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Px(n,i,a,c,h,g,b){if(a)return i.flags&256?(i.flags&=-257,c=Su(Error(t(422))),ml(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Al({mode:"visible",children:c.children},h,0,null),g=Ns(g,h,b,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&oa(i,n.child,null,b),i.child.memoizedState=Tu(b),i.memoizedState=Eu,g);if((i.mode&1)===0)return ml(n,i,b,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var B=c.dgst;return c=B,g=Error(t(419)),c=Su(g,c,void 0),ml(n,i,b,c)}if(B=(b&n.childLanes)!==0,ti||B){if(c=En,c!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|b))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,vr(n,h),Oi(c,n,h,-1))}return Gu(),c=Su(Error(t(421))),ml(n,i,b,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Hx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,di=Br(h.nextSibling),ui=i,rn=!0,Di=null,n!==null&&(yi[Si++]=gr,yi[Si++]=xr,yi[Si++]=Ss,gr=n.id,xr=n.overflow,Ss=i),i=Cu(i,c.children),i.flags|=4096,i)}function Bp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ru(n.return,i,a)}function Au(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function zp(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(qn(n,i,c.children,a),c=an.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bp(n,a,i);else if(n.tag===19)Bp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Zt(an,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&ll(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Au(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&ll(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Au(i,!0,a,null,g);break;case"together":Au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function gl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function yr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ts|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Kr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Kr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Dx(n,i,a){switch(i.tag){case 3:Op(i),aa();break;case 5:ep(i);break;case 1:ei(i.type)&&Qo(i);break;case 4:ou(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Zt(rl,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Zt(an,an.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?kp(n,i,a):(Zt(an,an.current&1),n=yr(n,i,a),n!==null?n.sibling:null);Zt(an,an.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return zp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Zt(an,an.current),c)break;return null;case 22:case 23:return i.lanes=0,Lp(n,i,a)}return yr(n,i,a)}var jp,Ru,Vp,Gp;jp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ru=function(){},Vp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,bs($i.current);var g=null;switch(a){case"input":h=Nt(n,h),c=Nt(n,c),g=[];break;case"select":h=ae({},h,{value:void 0}),c=ae({},c,{value:void 0}),g=[];break;case"textarea":h=Te(n,h),c=Te(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=$o)}ke(a,c);var b;a=null;for(ce in h)if(!c.hasOwnProperty(ce)&&h.hasOwnProperty(ce)&&h[ce]!=null)if(ce==="style"){var B=h[ce];for(b in B)B.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?g||(g=[]):(g=g||[]).push(ce,null));for(ce in c){var V=c[ce];if(B=h!=null?h[ce]:void 0,c.hasOwnProperty(ce)&&V!==B&&(V!=null||B!=null))if(ce==="style")if(B){for(b in B)!B.hasOwnProperty(b)||V&&V.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in V)V.hasOwnProperty(b)&&B[b]!==V[b]&&(a||(a={}),a[b]=V[b])}else a||(g||(g=[]),g.push(ce,a)),a=V;else ce==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,B=B?B.__html:void 0,V!=null&&B!==V&&(g=g||[]).push(ce,V)):ce==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(ce,""+V):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(V!=null&&ce==="onScroll"&&Jt("scroll",n),g||B===V||(g=[])):(g=g||[]).push(ce,V))}a&&(g=g||[]).push("style",a);var ce=g;(i.updateQueue=ce)&&(i.flags|=4)}},Gp=function(n,i,a,c){a!==c&&(i.flags|=4)};function fo(n,i){if(!rn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function zn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Lx(n,i,a){var c=i.pendingProps;switch(Zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(i),null;case 1:return ei(i.type)&&Zo(),zn(i),null;case 3:return c=i.stateNode,ua(),en(Jn),en(kn),uu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(nl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Di!==null&&(zu(Di),Di=null))),Ru(n,i),zn(i),null;case 5:lu(i);var h=bs(ao.current);if(a=i.type,n!==null&&i.stateNode!=null)Vp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return zn(i),null}if(n=bs($i.current),nl(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Yi]=i,c[to]=g,n=(i.mode&1)!==0,a){case"dialog":Jt("cancel",c),Jt("close",c);break;case"iframe":case"object":case"embed":Jt("load",c);break;case"video":case"audio":for(h=0;h<Qa.length;h++)Jt(Qa[h],c);break;case"source":Jt("error",c);break;case"img":case"image":case"link":Jt("error",c),Jt("load",c);break;case"details":Jt("toggle",c);break;case"input":Ut(c,g),Jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Jt("invalid",c);break;case"textarea":U(c,g),Jt("invalid",c)}ke(a,g),h=null;for(var b in g)if(g.hasOwnProperty(b)){var B=g[b];b==="children"?typeof B=="string"?c.textContent!==B&&(g.suppressHydrationWarning!==!0&&Yo(c.textContent,B,n),h=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(g.suppressHydrationWarning!==!0&&Yo(c.textContent,B,n),h=["children",""+B]):o.hasOwnProperty(b)&&B!=null&&b==="onScroll"&&Jt("scroll",c)}switch(a){case"input":_t(c),P(c,g,!0);break;case"textarea":_t(c),H(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=$o)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(a,{is:c.is}):(n=b.createElement(a),a==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,a),n[Yi]=i,n[to]=c,jp(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ee(a,c),a){case"dialog":Jt("cancel",n),Jt("close",n),h=c;break;case"iframe":case"object":case"embed":Jt("load",n),h=c;break;case"video":case"audio":for(h=0;h<Qa.length;h++)Jt(Qa[h],n);h=c;break;case"source":Jt("error",n),h=c;break;case"img":case"image":case"link":Jt("error",n),Jt("load",n),h=c;break;case"details":Jt("toggle",n),h=c;break;case"input":Ut(n,c),h=Nt(n,c),Jt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=ae({},c,{value:void 0}),Jt("invalid",n);break;case"textarea":U(n,c),h=Te(n,c),Jt("invalid",n);break;default:h=c}ke(a,h),B=h;for(g in B)if(B.hasOwnProperty(g)){var V=B[g];g==="style"?Re(n,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ve(n,V)):g==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&Ce(n,V):typeof V=="number"&&Ce(n,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?V!=null&&g==="onScroll"&&Jt("scroll",n):V!=null&&I(n,g,V,b))}switch(a){case"input":_t(n),P(n,c,!1);break;case"textarea":_t(n),H(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Se(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?it(n,!!c.multiple,g,!1):c.defaultValue!=null&&it(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=$o)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return zn(i),null;case 6:if(n&&i.stateNode!=null)Gp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=bs(ao.current),bs($i.current),nl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Yi]=i,(g=c.nodeValue!==a)&&(n=ui,n!==null))switch(n.tag){case 3:Yo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Yo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yi]=i,i.stateNode=c}return zn(i),null;case 13:if(en(an),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rn&&di!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xh(),aa(),i.flags|=98560,g=!1;else if(g=nl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Yi]=i}else aa(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;zn(i),g=!1}else Di!==null&&(zu(Di),Di=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(an.current&1)!==0?_n===0&&(_n=3):Gu())),i.updateQueue!==null&&(i.flags|=4),zn(i),null);case 4:return ua(),Ru(n,i),n===null&&Ja(i.stateNode.containerInfo),zn(i),null;case 10:return iu(i.type._context),zn(i),null;case 17:return ei(i.type)&&Zo(),zn(i),null;case 19:if(en(an),g=i.memoizedState,g===null)return zn(i),null;if(c=(i.flags&128)!==0,b=g.rendering,b===null)if(c)fo(g,!1);else{if(_n!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=ll(n),b!==null){for(i.flags|=128,fo(g,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,n=b.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Zt(an,an.current&1|2),i.child}n=n.sibling}g.tail!==null&&Qt()>pa&&(i.flags|=128,c=!0,fo(g,!1),i.lanes=4194304)}else{if(!c)if(n=ll(b),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),fo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!rn)return zn(i),null}else 2*Qt()-g.renderingStartTime>pa&&a!==1073741824&&(i.flags|=128,c=!0,fo(g,!1),i.lanes=4194304);g.isBackwards?(b.sibling=i.child,i.child=b):(a=g.last,a!==null?a.sibling=b:i.child=b,g.last=b)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Qt(),i.sibling=null,a=an.current,Zt(an,c?a&1|2:a&1),i):(zn(i),null);case 22:case 23:return Vu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(fi&1073741824)!==0&&(zn(i),i.subtreeFlags&6&&(i.flags|=8192)):zn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Ix(n,i){switch(Zc(i),i.tag){case 1:return ei(i.type)&&Zo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ua(),en(Jn),en(kn),uu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return lu(i),null;case 13:if(en(an),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));aa()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return en(an),null;case 4:return ua(),null;case 10:return iu(i.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var xl=!1,jn=!1,Ux=typeof WeakSet=="function"?WeakSet:Set,$e=null;function fa(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){un(n,i,c)}else a.current=null}function Nu(n,i,a){try{a()}catch(c){un(n,i,c)}}var Hp=!1;function Ox(n,i){if(Vc=Ni,n=Mh(),Ic(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var b=0,B=-1,V=-1,ce=0,ye=0,be=n,ve=null;t:for(;;){for(var Xe;be!==a||h!==0&&be.nodeType!==3||(B=b+h),be!==g||c!==0&&be.nodeType!==3||(V=b+c),be.nodeType===3&&(b+=be.nodeValue.length),(Xe=be.firstChild)!==null;)ve=be,be=Xe;for(;;){if(be===n)break t;if(ve===a&&++ce===h&&(B=b),ve===g&&++ye===c&&(V=b),(Xe=be.nextSibling)!==null)break;be=ve,ve=be.parentNode}be=Xe}a=B===-1||V===-1?null:{start:B,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gc={focusedElem:n,selectionRange:a},Ni=!1,$e=i;$e!==null;)if(i=$e,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,$e=n;else for(;$e!==null;){i=$e;try{var Ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var Je=Ze.memoizedProps,hn=Ze.memoizedState,J=i.stateNode,W=J.getSnapshotBeforeUpdate(i.elementType===i.type?Je:Li(i.type,Je),hn);J.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){un(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,$e=n;break}$e=i.return}return Ze=Hp,Hp=!1,Ze}function ho(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Nu(i,a,g)}h=h.next}while(h!==c)}}function vl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Pu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Wp(n){var i=n.alternate;i!==null&&(n.alternate=null,Wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yi],delete i[to],delete i[qc],delete i[vx],delete i[_x])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xp(n){return n.tag===5||n.tag===3||n.tag===4}function qp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Du(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=$o));else if(c!==4&&(n=n.child,n!==null))for(Du(n,i,a),n=n.sibling;n!==null;)Du(n,i,a),n=n.sibling}function Lu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Lu(n,i,a),n=n.sibling;n!==null;)Lu(n,i,a),n=n.sibling}var Dn=null,Ii=!1;function Wr(n,i,a){for(a=a.child;a!==null;)Yp(n,i,a),a=a.sibling}function Yp(n,i,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(je,a)}catch{}switch(a.tag){case 5:jn||fa(a,i);case 6:var c=Dn,h=Ii;Dn=null,Wr(n,i,a),Dn=c,Ii=h,Dn!==null&&(Ii?(n=Dn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Dn.removeChild(a.stateNode));break;case 18:Dn!==null&&(Ii?(n=Dn,a=a.stateNode,n.nodeType===8?Xc(n.parentNode,a):n.nodeType===1&&Xc(n,a),Fr(n)):Xc(Dn,a.stateNode));break;case 4:c=Dn,h=Ii,Dn=a.stateNode.containerInfo,Ii=!0,Wr(n,i,a),Dn=c,Ii=h;break;case 0:case 11:case 14:case 15:if(!jn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&Nu(a,i,b),h=h.next}while(h!==c)}Wr(n,i,a);break;case 1:if(!jn&&(fa(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(B){un(a,i,B)}Wr(n,i,a);break;case 21:Wr(n,i,a);break;case 22:a.mode&1?(jn=(c=jn)||a.memoizedState!==null,Wr(n,i,a),jn=c):Wr(n,i,a);break;default:Wr(n,i,a)}}function $p(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Ux),i.forEach(function(c){var h=Wx.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Ui(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,b=i,B=b;e:for(;B!==null;){switch(B.tag){case 5:Dn=B.stateNode,Ii=!1;break e;case 3:Dn=B.stateNode.containerInfo,Ii=!0;break e;case 4:Dn=B.stateNode.containerInfo,Ii=!0;break e}B=B.return}if(Dn===null)throw Error(t(160));Yp(g,b,h),Dn=null,Ii=!1;var V=h.alternate;V!==null&&(V.return=null),h.return=null}catch(ce){un(h,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kp(i,n),i=i.sibling}function Kp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ui(i,n),Zi(n),c&4){try{ho(3,n,n.return),vl(3,n)}catch(Je){un(n,n.return,Je)}try{ho(5,n,n.return)}catch(Je){un(n,n.return,Je)}}break;case 1:Ui(i,n),Zi(n),c&512&&a!==null&&fa(a,a.return);break;case 5:if(Ui(i,n),Zi(n),c&512&&a!==null&&fa(a,a.return),n.flags&32){var h=n.stateNode;try{Ce(h,"")}catch(Je){un(n,n.return,Je)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,b=a!==null?a.memoizedProps:g,B=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{B==="input"&&g.type==="radio"&&g.name!=null&&nt(h,g),Ee(B,b);var ce=Ee(B,g);for(b=0;b<V.length;b+=2){var ye=V[b],be=V[b+1];ye==="style"?Re(h,be):ye==="dangerouslySetInnerHTML"?Ve(h,be):ye==="children"?Ce(h,be):I(h,ye,be,ce)}switch(B){case"input":lt(h,g);break;case"textarea":w(h,g);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Xe=g.value;Xe!=null?it(h,!!g.multiple,Xe,!1):ve!==!!g.multiple&&(g.defaultValue!=null?it(h,!!g.multiple,g.defaultValue,!0):it(h,!!g.multiple,g.multiple?[]:"",!1))}h[to]=g}catch(Je){un(n,n.return,Je)}}break;case 6:if(Ui(i,n),Zi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Je){un(n,n.return,Je)}}break;case 3:if(Ui(i,n),Zi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Fr(i.containerInfo)}catch(Je){un(n,n.return,Je)}break;case 4:Ui(i,n),Zi(n);break;case 13:Ui(i,n),Zi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Ou=Qt())),c&4&&$p(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(jn=(ce=jn)||ye,Ui(i,n),jn=ce):Ui(i,n),Zi(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!ye&&(n.mode&1)!==0)for($e=n,ye=n.child;ye!==null;){for(be=$e=ye;$e!==null;){switch(ve=$e,Xe=ve.child,ve.tag){case 0:case 11:case 14:case 15:ho(4,ve,ve.return);break;case 1:fa(ve,ve.return);var Ze=ve.stateNode;if(typeof Ze.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,Ze.props=i.memoizedProps,Ze.state=i.memoizedState,Ze.componentWillUnmount()}catch(Je){un(c,a,Je)}}break;case 5:fa(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Jp(be);continue}}Xe!==null?(Xe.return=ve,$e=Xe):Jp(be)}ye=ye.sibling}e:for(ye=null,be=n;;){if(be.tag===5){if(ye===null){ye=be;try{h=be.stateNode,ce?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(B=be.stateNode,V=be.memoizedProps.style,b=V!=null&&V.hasOwnProperty("display")?V.display:null,B.style.display=_e("display",b))}catch(Je){un(n,n.return,Je)}}}else if(be.tag===6){if(ye===null)try{be.stateNode.nodeValue=ce?"":be.memoizedProps}catch(Je){un(n,n.return,Je)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===n)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===n)break e;for(;be.sibling===null;){if(be.return===null||be.return===n)break e;ye===be&&(ye=null),be=be.return}ye===be&&(ye=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:Ui(i,n),Zi(n),c&4&&$p(n);break;case 21:break;default:Ui(i,n),Zi(n)}}function Zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Xp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Ce(h,""),c.flags&=-33);var g=qp(n);Lu(n,g,h);break;case 3:case 4:var b=c.stateNode.containerInfo,B=qp(n);Du(n,B,b);break;default:throw Error(t(161))}}catch(V){un(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Fx(n,i,a){$e=n,Zp(n)}function Zp(n,i,a){for(var c=(n.mode&1)!==0;$e!==null;){var h=$e,g=h.child;if(h.tag===22&&c){var b=h.memoizedState!==null||xl;if(!b){var B=h.alternate,V=B!==null&&B.memoizedState!==null||jn;B=xl;var ce=jn;if(xl=b,(jn=V)&&!ce)for($e=h;$e!==null;)b=$e,V=b.child,b.tag===22&&b.memoizedState!==null?em(h):V!==null?(V.return=b,$e=V):em(h);for(;g!==null;)$e=g,Zp(g),g=g.sibling;$e=h,xl=B,jn=ce}Qp(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,$e=g):Qp(n)}}function Qp(n){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:jn||vl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!jn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Li(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Jh(i,g,c);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Jh(i,b,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var ye=ce.memoizedState;if(ye!==null){var be=ye.dehydrated;be!==null&&Fr(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jn||i.flags&512&&Pu(i)}catch(ve){un(i,i.return,ve)}}if(i===n){$e=null;break}if(a=i.sibling,a!==null){a.return=i.return,$e=a;break}$e=i.return}}function Jp(n){for(;$e!==null;){var i=$e;if(i===n){$e=null;break}var a=i.sibling;if(a!==null){a.return=i.return,$e=a;break}$e=i.return}}function em(n){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{vl(4,i)}catch(V){un(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(V){un(i,h,V)}}var g=i.return;try{Pu(i)}catch(V){un(i,g,V)}break;case 5:var b=i.return;try{Pu(i)}catch(V){un(i,b,V)}}}catch(V){un(i,i.return,V)}if(i===n){$e=null;break}var B=i.sibling;if(B!==null){B.return=i.return,$e=B;break}$e=i.return}}var kx=Math.ceil,_l=D.ReactCurrentDispatcher,Iu=D.ReactCurrentOwner,bi=D.ReactCurrentBatchConfig,Bt=0,En=null,mn=null,Ln=0,fi=0,ha=zr(0),_n=0,po=null,Ts=0,yl=0,Uu=0,mo=null,ni=null,Ou=0,pa=1/0,Sr=null,Sl=!1,Fu=null,Xr=null,Ml=!1,qr=null,wl=0,go=0,ku=null,bl=-1,El=0;function Yn(){return(Bt&6)!==0?Qt():bl!==-1?bl:bl=Qt()}function Yr(n){return(n.mode&1)===0?1:(Bt&2)!==0&&Ln!==0?Ln&-Ln:Sx.transition!==null?(El===0&&(El=xn()),El):(n=gt,n!==0||(n=window.event,n=n===void 0?16:Ha(n.type)),n)}function Oi(n,i,a,c){if(50<go)throw go=0,ku=null,Error(t(185));sn(n,a,c),((Bt&2)===0||n!==En)&&(n===En&&((Bt&2)===0&&(yl|=a),_n===4&&$r(n,Ln)),ii(n,c),a===1&&Bt===0&&(i.mode&1)===0&&(pa=Qt()+500,Jo&&Vr()))}function ii(n,i){var a=n.callbackNode;Ft(n,i);var c=Ot(n,n===En?Ln:0);if(c===0)a!==null&&ps(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ps(a),i===1)n.tag===0?yx(nm.bind(null,n)):jh(nm.bind(null,n)),gx(function(){(Bt&6)===0&&Vr()}),a=null;else{switch(Kt(c)){case 1:a=Y;break;case 4:a=le;break;case 16:a=se;break;case 536870912:a=De;break;default:a=se}a=um(a,tm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function tm(n,i){if(bl=-1,El=0,(Bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ma()&&n.callbackNode!==a)return null;var c=Ot(n,n===En?Ln:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Tl(n,c);else{i=c;var h=Bt;Bt|=2;var g=rm();(En!==n||Ln!==i)&&(Sr=null,pa=Qt()+500,As(n,i));do try{jx();break}catch(B){im(n,B)}while(!0);nu(),_l.current=g,Bt=h,mn!==null?i=0:(En=null,Ln=0,i=_n)}if(i!==0){if(i===2&&(h=Rt(n),h!==0&&(c=h,i=Bu(n,h))),i===1)throw a=po,As(n,0),$r(n,c),ii(n,Qt()),a;if(i===6)$r(n,c);else{if(h=n.current.alternate,(c&30)===0&&!Bx(h)&&(i=Tl(n,c),i===2&&(g=Rt(n),g!==0&&(c=g,i=Bu(n,g))),i===1))throw a=po,As(n,0),$r(n,c),ii(n,Qt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Rs(n,ni,Sr);break;case 3:if($r(n,c),(c&130023424)===c&&(i=Ou+500-Qt(),10<i)){if(Ot(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Yn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Wc(Rs.bind(null,n,ni,Sr),i);break}Rs(n,ni,Sr);break;case 4:if($r(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var b=31-Ge(c);g=1<<b,b=i[b],b>h&&(h=b),c&=~g}if(c=h,c=Qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*kx(c/1960))-c,10<c){n.timeoutHandle=Wc(Rs.bind(null,n,ni,Sr),c);break}Rs(n,ni,Sr);break;case 5:Rs(n,ni,Sr);break;default:throw Error(t(329))}}}return ii(n,Qt()),n.callbackNode===a?tm.bind(null,n):null}function Bu(n,i){var a=mo;return n.current.memoizedState.isDehydrated&&(As(n,i).flags|=256),n=Tl(n,i),n!==2&&(i=ni,ni=a,i!==null&&zu(i)),n}function zu(n){ni===null?ni=n:ni.push.apply(ni,n)}function Bx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!Pi(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $r(n,i){for(i&=~Uu,i&=~yl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ge(i),c=1<<a;n[a]=-1,i&=~c}}function nm(n){if((Bt&6)!==0)throw Error(t(327));ma();var i=Ot(n,0);if((i&1)===0)return ii(n,Qt()),null;var a=Tl(n,i);if(n.tag!==0&&a===2){var c=Rt(n);c!==0&&(i=c,a=Bu(n,c))}if(a===1)throw a=po,As(n,0),$r(n,i),ii(n,Qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Rs(n,ni,Sr),ii(n,Qt()),null}function ju(n,i){var a=Bt;Bt|=1;try{return n(i)}finally{Bt=a,Bt===0&&(pa=Qt()+500,Jo&&Vr())}}function Cs(n){qr!==null&&qr.tag===0&&(Bt&6)===0&&ma();var i=Bt;Bt|=1;var a=bi.transition,c=gt;try{if(bi.transition=null,gt=1,n)return n()}finally{gt=c,bi.transition=a,Bt=i,(Bt&6)===0&&Vr()}}function Vu(){fi=ha.current,en(ha)}function As(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,mx(a)),mn!==null)for(a=mn.return;a!==null;){var c=a;switch(Zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Zo();break;case 3:ua(),en(Jn),en(kn),uu();break;case 5:lu(c);break;case 4:ua();break;case 13:en(an);break;case 19:en(an);break;case 10:iu(c.type._context);break;case 22:case 23:Vu()}a=a.return}if(En=n,mn=n=Kr(n.current,null),Ln=fi=i,_n=0,po=null,Uu=yl=Ts=0,ni=mo=null,ws!==null){for(i=0;i<ws.length;i++)if(a=ws[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var b=g.next;g.next=h,c.next=b}a.pending=c}ws=null}return n}function im(n,i){do{var a=mn;try{if(nu(),cl.current=hl,ul){for(var c=on.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}ul=!1}if(Es=0,bn=vn=on=null,oo=!1,lo=0,Iu.current=null,a===null||a.return===null){_n=1,po=i,mn=null;break}e:{var g=n,b=a.return,B=a,V=i;if(i=Ln,B.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ce=V,ye=B,be=ye.tag;if((ye.mode&1)===0&&(be===0||be===11||be===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Xe=Ap(b);if(Xe!==null){Xe.flags&=-257,Rp(Xe,b,B,g,i),Xe.mode&1&&Cp(g,ce,i),i=Xe,V=ce;var Ze=i.updateQueue;if(Ze===null){var Je=new Set;Je.add(V),i.updateQueue=Je}else Ze.add(V);break e}else{if((i&1)===0){Cp(g,ce,i),Gu();break e}V=Error(t(426))}}else if(rn&&B.mode&1){var hn=Ap(b);if(hn!==null){(hn.flags&65536)===0&&(hn.flags|=256),Rp(hn,b,B,g,i),eu(da(V,B));break e}}g=V=da(V,B),_n!==4&&(_n=2),mo===null?mo=[g]:mo.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var J=Ep(g,V,i);Qh(g,J);break e;case 1:B=V;var W=g.type,ne=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Xr===null||!Xr.has(ne)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ae=Tp(g,B,i);Qh(g,Ae);break e}}g=g.return}while(g!==null)}am(a)}catch(tt){i=tt,mn===a&&a!==null&&(mn=a=a.return);continue}break}while(!0)}function rm(){var n=_l.current;return _l.current=hl,n===null?hl:n}function Gu(){(_n===0||_n===3||_n===2)&&(_n=4),En===null||(Ts&268435455)===0&&(yl&268435455)===0||$r(En,Ln)}function Tl(n,i){var a=Bt;Bt|=2;var c=rm();(En!==n||Ln!==i)&&(Sr=null,As(n,i));do try{zx();break}catch(h){im(n,h)}while(!0);if(nu(),Bt=a,_l.current=c,mn!==null)throw Error(t(261));return En=null,Ln=0,_n}function zx(){for(;mn!==null;)sm(mn)}function jx(){for(;mn!==null&&!ja();)sm(mn)}function sm(n){var i=cm(n.alternate,n,fi);n.memoizedProps=n.pendingProps,i===null?am(n):mn=i,Iu.current=null}function am(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Lx(a,i,fi),a!==null){mn=a;return}}else{if(a=Ix(a,i),a!==null){a.flags&=32767,mn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_n=6,mn=null;return}}if(i=i.sibling,i!==null){mn=i;return}mn=i=n}while(i!==null);_n===0&&(_n=5)}function Rs(n,i,a){var c=gt,h=bi.transition;try{bi.transition=null,gt=1,Vx(n,i,a,c)}finally{bi.transition=h,gt=c}return null}function Vx(n,i,a,c){do ma();while(qr!==null);if((Bt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Gi(n,g),n===En&&(mn=En=null,Ln=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ml||(Ml=!0,um(se,function(){return ma(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=bi.transition,bi.transition=null;var b=gt;gt=1;var B=Bt;Bt|=4,Iu.current=null,Ox(n,a),Kp(a,n),lx(Gc),Ni=!!Vc,Gc=Vc=null,n.current=a,Fx(a),Ws(),Bt=B,gt=b,bi.transition=g}else n.current=a;if(Ml&&(Ml=!1,qr=n,wl=h),g=n.pendingLanes,g===0&&(Xr=null),qe(a.stateNode),ii(n,Qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(Sl)throw Sl=!1,n=Fu,Fu=null,n;return(wl&1)!==0&&n.tag!==0&&ma(),g=n.pendingLanes,(g&1)!==0?n===ku?go++:(go=0,ku=n):go=0,Vr(),null}function ma(){if(qr!==null){var n=Kt(wl),i=bi.transition,a=gt;try{if(bi.transition=null,gt=16>n?16:n,qr===null)var c=!1;else{if(n=qr,qr=null,wl=0,(Bt&6)!==0)throw Error(t(331));var h=Bt;for(Bt|=4,$e=n.current;$e!==null;){var g=$e,b=g.child;if(($e.flags&16)!==0){var B=g.deletions;if(B!==null){for(var V=0;V<B.length;V++){var ce=B[V];for($e=ce;$e!==null;){var ye=$e;switch(ye.tag){case 0:case 11:case 15:ho(8,ye,g)}var be=ye.child;if(be!==null)be.return=ye,$e=be;else for(;$e!==null;){ye=$e;var ve=ye.sibling,Xe=ye.return;if(Wp(ye),ye===ce){$e=null;break}if(ve!==null){ve.return=Xe,$e=ve;break}$e=Xe}}}var Ze=g.alternate;if(Ze!==null){var Je=Ze.child;if(Je!==null){Ze.child=null;do{var hn=Je.sibling;Je.sibling=null,Je=hn}while(Je!==null)}}$e=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,$e=b;else e:for(;$e!==null;){if(g=$e,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:ho(9,g,g.return)}var J=g.sibling;if(J!==null){J.return=g.return,$e=J;break e}$e=g.return}}var W=n.current;for($e=W;$e!==null;){b=$e;var ne=b.child;if((b.subtreeFlags&2064)!==0&&ne!==null)ne.return=b,$e=ne;else e:for(b=W;$e!==null;){if(B=$e,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:vl(9,B)}}catch(tt){un(B,B.return,tt)}if(B===b){$e=null;break e}var Ae=B.sibling;if(Ae!==null){Ae.return=B.return,$e=Ae;break e}$e=B.return}}if(Bt=h,Vr(),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(je,n)}catch{}c=!0}return c}finally{gt=a,bi.transition=i}}return!1}function om(n,i,a){i=da(a,i),i=Ep(n,i,1),n=Hr(n,i,1),i=Yn(),n!==null&&(sn(n,1,i),ii(n,i))}function un(n,i,a){if(n.tag===3)om(n,n,a);else for(;i!==null;){if(i.tag===3){om(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Xr===null||!Xr.has(c))){n=da(a,n),n=Tp(i,n,1),i=Hr(i,n,1),n=Yn(),i!==null&&(sn(i,1,n),ii(i,n));break}}i=i.return}}function Gx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Yn(),n.pingedLanes|=n.suspendedLanes&a,En===n&&(Ln&a)===a&&(_n===4||_n===3&&(Ln&130023424)===Ln&&500>Qt()-Ou?As(n,0):Uu|=a),ii(n,i)}function lm(n,i){i===0&&((n.mode&1)===0?i=1:(i=bt,bt<<=1,(bt&130023424)===0&&(bt=4194304)));var a=Yn();n=vr(n,i),n!==null&&(sn(n,i,a),ii(n,a))}function Hx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),lm(n,a)}function Wx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),lm(n,a)}var cm;cm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Jn.current)ti=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ti=!1,Dx(n,i,a);ti=(n.flags&131072)!==0}else ti=!1,rn&&(i.flags&1048576)!==0&&Vh(i,tl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;gl(n,i),n=i.pendingProps;var h=ia(i,kn.current);ca(i,a),h=hu(null,i,c,n,h,a);var g=pu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ei(c)?(g=!0,Qo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,au(i),h.updater=pl,i.stateNode=h,h._reactInternals=i,yu(i,c,n,a),i=bu(null,i,c,!0,g,a)):(i.tag=0,rn&&g&&Kc(i),qn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(gl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=qx(c),n=Li(c,n),h){case 0:i=wu(null,i,c,n,a);break e;case 1:i=Up(null,i,c,n,a);break e;case 11:i=Np(null,i,c,n,a);break e;case 14:i=Pp(null,i,c,Li(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Li(c,h),wu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Li(c,h),Up(n,i,c,h,a);case 3:e:{if(Op(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,Zh(n,i),ol(i,c,null,a);var b=i.memoizedState;if(c=b.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=da(Error(t(423)),i),i=Fp(n,i,c,a,h);break e}else if(c!==h){h=da(Error(t(424)),i),i=Fp(n,i,c,a,h);break e}else for(di=Br(i.stateNode.containerInfo.firstChild),ui=i,rn=!0,Di=null,a=$h(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(aa(),c===h){i=yr(n,i,a);break e}qn(n,i,c,a)}i=i.child}return i;case 5:return ep(i),n===null&&Jc(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,b=h.children,Hc(c,h)?b=null:g!==null&&Hc(c,g)&&(i.flags|=32),Ip(n,i),qn(n,i,b,a),i.child;case 6:return n===null&&Jc(i),null;case 13:return kp(n,i,a);case 4:return ou(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=oa(i,null,c,a):qn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Li(c,h),Np(n,i,c,h,a);case 7:return qn(n,i,i.pendingProps,a),i.child;case 8:return qn(n,i,i.pendingProps.children,a),i.child;case 12:return qn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,b=h.value,Zt(rl,c._currentValue),c._currentValue=b,g!==null)if(Pi(g.value,b)){if(g.children===h.children&&!Jn.current){i=yr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var B=g.dependencies;if(B!==null){b=g.child;for(var V=B.firstContext;V!==null;){if(V.context===c){if(g.tag===1){V=_r(-1,a&-a),V.tag=2;var ce=g.updateQueue;if(ce!==null){ce=ce.shared;var ye=ce.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),ce.pending=V}}g.lanes|=a,V=g.alternate,V!==null&&(V.lanes|=a),ru(g.return,a,i),B.lanes|=a;break}V=V.next}}else if(g.tag===10)b=g.type===i.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(t(341));b.lanes|=a,B=b.alternate,B!==null&&(B.lanes|=a),ru(b,a,i),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===i){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}qn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,ca(i,a),h=Mi(h),c=c(h),i.flags|=1,qn(n,i,c,a),i.child;case 14:return c=i.type,h=Li(c,i.pendingProps),h=Li(c.type,h),Pp(n,i,c,h,a);case 15:return Dp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Li(c,h),gl(n,i),i.tag=1,ei(c)?(n=!0,Qo(i)):n=!1,ca(i,a),wp(i,c,h),yu(i,c,h,a),bu(null,i,c,!0,n,a);case 19:return zp(n,i,a);case 22:return Lp(n,i,a)}throw Error(t(156,i.tag))};function um(n,i){return hs(n,i)}function Xx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(n,i,a,c){return new Xx(n,i,a,c)}function Hu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function qx(n){if(typeof n=="function")return Hu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===ie)return 14}return 2}function Kr(n,i){var a=n.alternate;return a===null?(a=Ei(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Cl(n,i,a,c,h,g){var b=2;if(c=n,typeof n=="function")Hu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case F:return Ns(a.children,h,g,i);case j:b=8,h|=8;break;case E:return n=Ei(12,a,i,h|2),n.elementType=E,n.lanes=g,n;case K:return n=Ei(13,a,i,h),n.elementType=K,n.lanes=g,n;case re:return n=Ei(19,a,i,h),n.elementType=re,n.lanes=g,n;case q:return Al(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:b=10;break e;case z:b=9;break e;case $:b=11;break e;case ie:b=14;break e;case ee:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ei(b,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function Ns(n,i,a,c){return n=Ei(7,n,c,i),n.lanes=a,n}function Al(n,i,a,c){return n=Ei(22,n,c,i),n.elementType=q,n.lanes=a,n.stateNode={isHidden:!1},n}function Wu(n,i,a){return n=Ei(6,n,null,i),n.lanes=a,n}function Xu(n,i,a){return i=Ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Yx(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=li(0),this.expirationTimes=li(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=li(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function qu(n,i,a,c,h,g,b,B,V){return n=new Yx(n,i,a,B,V),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ei(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},au(g),n}function $x(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function dm(n){if(!n)return jr;n=n._reactInternals;e:{if(Nn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ei(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ei(a))return Bh(n,a,i)}return i}function fm(n,i,a,c,h,g,b,B,V){return n=qu(a,c,!0,n,h,g,b,B,V),n.context=dm(null),a=n.current,c=Yn(),h=Yr(a),g=_r(c,h),g.callback=i??null,Hr(a,g,h),n.current.lanes=h,sn(n,h,c),ii(n,c),n}function Rl(n,i,a,c){var h=i.current,g=Yn(),b=Yr(h);return a=dm(a),i.context===null?i.context=a:i.pendingContext=a,i=_r(g,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Hr(h,i,b),n!==null&&(Oi(n,h,b,g),al(n,h,b)),b}function Nl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Yu(n,i){hm(n,i),(n=n.alternate)&&hm(n,i)}function Kx(){return null}var pm=typeof reportError=="function"?reportError:function(n){console.error(n)};function $u(n){this._internalRoot=n}Pl.prototype.render=$u.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Rl(n,i,null,null)},Pl.prototype.unmount=$u.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Cs(function(){Rl(null,n,null,null)}),i[pr]=null}};function Pl(n){this._internalRoot=n}Pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ci();n={blockedOn:null,target:n,priority:i};for(var a=0;a<qi.length&&i!==0&&i<qi[a].priority;a++);qi.splice(a,0,n),a===0&&Bo(n)}};function Ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Dl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mm(){}function Zx(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var ce=Nl(b);g.call(ce)}}var b=fm(i,c,n,0,null,!1,!1,"",mm);return n._reactRootContainer=b,n[pr]=b.current,Ja(n.nodeType===8?n.parentNode:n),Cs(),b}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var B=c;c=function(){var ce=Nl(V);B.call(ce)}}var V=qu(n,0,!1,null,null,!1,!1,"",mm);return n._reactRootContainer=V,n[pr]=V.current,Ja(n.nodeType===8?n.parentNode:n),Cs(function(){Rl(i,V,a,c)}),V}function Ll(n,i,a,c,h){var g=a._reactRootContainer;if(g){var b=g;if(typeof h=="function"){var B=h;h=function(){var V=Nl(b);B.call(V)}}Rl(i,b,n,h)}else b=Zx(a,i,n,h,c);return Nl(b)}cn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Vt(i.pendingLanes);a!==0&&(kt(i,a|1),ii(i,Qt()),(Bt&6)===0&&(pa=Qt()+500,Vr()))}break;case 13:Cs(function(){var c=vr(n,1);if(c!==null){var h=Yn();Oi(c,n,1,h)}}),Yu(n,1)}},fn=function(n){if(n.tag===13){var i=vr(n,134217728);if(i!==null){var a=Yn();Oi(i,n,134217728,a)}Yu(n,134217728)}},dr=function(n){if(n.tag===13){var i=Yr(n),a=vr(n,i);if(a!==null){var c=Yn();Oi(a,n,i,c)}Yu(n,i)}},ci=function(){return gt},Va=function(n,i){var a=gt;try{return gt=n,i()}finally{gt=a}},Ie=function(n,i,a){switch(i){case"input":if(lt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Ko(c);if(!h)throw Error(t(90));qt(c),lt(c,h)}}}break;case"textarea":w(n,a);break;case"select":i=a.value,i!=null&&it(n,!!a.multiple,i,!1)}},ot=ju,Dt=Cs;var Qx={usingClientEntryPoint:!1,Events:[no,ta,Ko,pe,xe,ju]},xo={findFiberByHostInstance:_s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jx={bundleType:xo.bundleType,version:xo.version,rendererPackageName:xo.rendererPackageName,rendererConfig:xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ds(n),n===null?null:n.stateNode},findFiberByHostInstance:xo.findFiberByHostInstance||Kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Il.isDisabled&&Il.supportsFiber)try{je=Il.inject(Jx),Ne=Il}catch{}}return ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qx,ri.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ku(i))throw Error(t(200));return $x(n,i,null,a)},ri.createRoot=function(n,i){if(!Ku(n))throw Error(t(299));var a=!1,c="",h=pm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=qu(n,1,!1,null,null,a,!1,c,h),n[pr]=i.current,Ja(n.nodeType===8?n.parentNode:n),new $u(i)},ri.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ds(i),n=n===null?null:n.stateNode,n},ri.flushSync=function(n){return Cs(n)},ri.hydrate=function(n,i,a){if(!Dl(i))throw Error(t(200));return Ll(null,n,i,!0,a)},ri.hydrateRoot=function(n,i,a){if(!Ku(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",b=pm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=fm(i,null,n,1,a??null,h,!1,g,b),n[pr]=i.current,Ja(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Pl(i)},ri.render=function(n,i,a){if(!Dl(i))throw Error(t(200));return Ll(null,n,i,!1,a)},ri.unmountComponentAtNode=function(n){if(!Dl(n))throw Error(t(40));return n._reactRootContainer?(Cs(function(){Ll(null,null,n,!1,function(){n._reactRootContainer=null,n[pr]=null})}),!0):!1},ri.unstable_batchedUpdates=ju,ri.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Dl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ll(n,i,a,!1,c)},ri.version="18.3.1-next-f1338f8080-20240426",ri}var wm;function lv(){if(wm)return Ju.exports;wm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ju.exports=ov(),Ju.exports}var bm;function cv(){if(bm)return Ul;bm=1;var s=lv();return Ul.createRoot=s.createRoot,Ul.hydrateRoot=s.hydrateRoot,Ul}var uv=cv();const dv=U0(uv);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=Ue.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:d,...f},p)=>Ue.createElement("svg",{ref:p,...hv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:O0("lucide",o),...f},[...d.map(([m,x])=>Ue.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=(s,e)=>{const t=Ue.forwardRef(({className:r,...o},l)=>Ue.createElement(pv,{ref:l,iconNode:e,className:O0(`lucide-${fv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=ft("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=ft("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=ft("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ft("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ft("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=ft("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ft("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ft("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ft("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=ft("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ft("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=ft("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=ft("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=ft("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=ft("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=ft("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=ft("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ft("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=ft("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ft("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=ft("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=ft("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ft("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ft("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ft("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ft("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ft("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ft("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=ft("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=ft("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=ft("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ft("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=ft("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=ft("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=ft("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ft("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ft("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=ft("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=ft("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ft("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=ft("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=ft("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=ft("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=ft("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ft("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ft("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=ft("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=ft("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=ft("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ft("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=ft("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),zv=({cartCount:s,onOpenCart:e})=>{const[t,r]=Ue.useState(!1),[o,l]=Ue.useState(!1);Ue.useEffect(()=>{const f=()=>{r(window.scrollY>window.innerHeight*.7)};return window.addEventListener("scroll",f,{passive:!0}),f(),()=>window.removeEventListener("scroll",f)},[]);const d=[{name:"Simulação 3D",href:"#hero-3d",icon:Ro},{name:"Central VTS",href:"#central-vts",icon:Iv},{name:"Normas NBR",href:"#normas",icon:Ud},{name:"Calculadora & Diagrama",href:"#calculadora",icon:F0,highlight:!0},{name:"Loja Virtual",href:"#loja",icon:hc},{name:"Manuais",href:"#manuais",icon:Ud},{name:"Fotos Reais",href:"#galeria",icon:Uo},{name:"Contato",href:"#contato",icon:Nr}];return u.jsxs("div",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${t?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-full pointer-events-none"}`,children:[u.jsxs("div",{className:"bg-gradient-to-r from-[#08090b] via-[#141208] to-[#08090b] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-center text-[#f3e5ab] flex items-center justify-center gap-2 font-medium shadow-md",children:[u.jsxs("span",{className:"flex h-2 w-2 relative",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"})]}),u.jsxs("span",{className:"tracking-wide",children:["SISTEMA EM CONFORMIDADE TOTAL COM ",u.jsx("strong",{className:"text-[#e5c05d]",children:"ABNT NBR 14518"}),", ",u.jsx("strong",{className:"text-[#e5c05d]",children:"NFPA 96 & 17A"})," E CORPO DE BOMBEIROS (AVCB)"]})]}),u.jsxs("header",{className:"bg-[#08090b]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[u.jsx("a",{href:"#",className:"flex items-center gap-3 group",children:u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE - Sistemas contra Incêndio",className:"h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"})}),u.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:d.map(f=>{const p=f.icon;return u.jsxs("a",{href:f.href,className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${f.highlight?"bg-[#d4af37]/15 text-[#e5c05d] hover:bg-[#d4af37]/25 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-semibold":"text-gray-300 hover:text-[#f3e5ab] hover:bg-white/5"}`,children:[u.jsx(p,{className:`w-3.5 h-3.5 ${f.highlight?"text-[#d4af37]":"opacity-70"}`}),f.name]},f.name)})}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial.",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black px-4 py-2 rounded-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all",children:[u.jsx(Nr,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"(15) 99657-6807"})]}),u.jsxs("button",{onClick:e,className:"relative p-2.5 rounded-xl bg-[#14171e] hover:bg-[#1a1f28] border border-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all flex items-center justify-center group shadow-md",title:"Ver Carrinho de Compras",children:[u.jsx(hc,{className:"w-5 h-5 group-hover:scale-105 transition-transform"}),s>0&&u.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-gold animate-pulse",children:s})]}),u.jsx("button",{onClick:()=>l(!o),className:"lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white",children:o?u.jsx(Fd,{className:"w-6 h-6"}):u.jsx(Cv,{className:"w-6 h-6"})})]})]}),o&&u.jsxs("div",{className:"lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-[#d4af37]/20 space-y-2",children:[d.map(f=>{const p=f.icon;return u.jsxs("a",{href:f.href,onClick:()=>l(!1),className:"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] transition-all",children:[u.jsx(p,{className:"w-4 h-4 text-[#d4af37]"}),u.jsx("span",{children:f.name})]},f.name)}),u.jsx("div",{className:"pt-3 border-t border-white/10",children:u.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-sm font-black rounded-lg shadow-glow-gold",children:[u.jsx(Nr,{className:"w-4 h-4 fill-black"}),"Falar com Engenharia Outfire no WhatsApp"]})})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="182",Da={ROTATE:0,DOLLY:1,PAN:2},Pa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jv=0,Pm=1,Vv=2,rc=1,Of=2,Co=3,ls=0,oi=1,Ar=2,Pr=0,La=1,Dm=2,Lm=3,Im=4,Gv=5,Fs=100,Hv=101,Wv=102,Xv=103,qv=104,Yv=200,$v=201,Kv=202,Zv=203,kd=204,Bd=205,Qv=206,Jv=207,e_=208,t_=209,n_=210,i_=211,r_=212,s_=213,a_=214,zd=0,jd=1,Vd=2,Ua=3,Gd=4,Hd=5,Wd=6,Xd=7,H0=0,o_=1,l_=2,nr=0,W0=1,X0=2,q0=3,vc=4,Y0=5,$0=6,K0=7,Z0=300,js=301,Oa=302,qd=303,Yd=304,_c=306,$d=1e3,Rr=1001,Kd=1002,Un=1003,c_=1004,Ol=1005,Wn=1006,nd=1007,Bs=1008,mi=1009,Q0=1010,J0=1011,No=1012,Ff=1013,sr=1014,er=1015,Lr=1016,kf=1017,Bf=1018,Po=1020,eg=35902,tg=35899,ng=1021,ig=1022,Vi=1023,Ir=1026,zs=1027,rg=1028,zf=1029,Fa=1030,jf=1031,Vf=1033,sc=33776,ac=33777,oc=33778,lc=33779,Zd=35840,Qd=35841,Jd=35842,ef=35843,tf=36196,nf=37492,rf=37496,sf=37488,af=37489,of=37490,lf=37491,cf=37808,uf=37809,df=37810,ff=37811,hf=37812,pf=37813,mf=37814,gf=37815,xf=37816,vf=37817,_f=37818,yf=37819,Sf=37820,Mf=37821,wf=36492,bf=36494,Ef=36495,Tf=36283,Cf=36284,Af=36285,Rf=36286,u_=3200,sg=0,d_=1,as="",In="srgb",ka="srgb-linear",pc="linear",Xt="srgb",ga=7680,Um=519,f_=512,h_=513,p_=514,Gf=515,m_=516,g_=517,Hf=518,x_=519,Om=35044,Fm="300 es",tr=2e3,mc=2001;function ag(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Do(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function v_(){const s=Do("canvas");return s.style.display="block",s}const km={};function Bm(...s){const e="THREE."+s.shift();console.log(e,...s)}function vt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function zt(...s){const e="THREE."+s.shift();console.error(e,...s)}function Lo(...s){const e=s.join(" ");e in km||(km[e]=!0,vt(...s))}function __(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cc=Math.PI/180,gc=180/Math.PI;function Oo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function y_(s,e){return(s%e+e)%e}function id(s,e,t){return(1-t)*s+t*e}function _o(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const S_={DEG2RAD:cc};class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(It(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vs{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,d,f){let p=r[o+0],m=r[o+1],x=r[o+2],_=r[o+3],S=l[d+0],M=l[d+1],T=l[d+2],A=l[d+3];if(f<=0){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=_;return}if(f>=1){e[t+0]=S,e[t+1]=M,e[t+2]=T,e[t+3]=A;return}if(_!==A||p!==S||m!==M||x!==T){let y=p*S+m*M+x*T+_*A;y<0&&(S=-S,M=-M,T=-T,A=-A,y=-y);let v=1-f;if(y<.9995){const C=Math.acos(y),I=Math.sin(C);v=Math.sin(v*C)/I,f=Math.sin(f*C)/I,p=p*v+S*f,m=m*v+M*f,x=x*v+T*f,_=_*v+A*f}else{p=p*v+S*f,m=m*v+M*f,x=x*v+T*f,_=_*v+A*f;const C=1/Math.sqrt(p*p+m*m+x*x+_*_);p*=C,m*=C,x*=C,_*=C}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,d){const f=r[o],p=r[o+1],m=r[o+2],x=r[o+3],_=l[d],S=l[d+1],M=l[d+2],T=l[d+3];return e[t]=f*T+x*_+p*M-m*S,e[t+1]=p*T+x*S+m*_-f*M,e[t+2]=m*T+x*M+f*S-p*_,e[t+3]=x*T-f*_-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),x=f(o/2),_=f(l/2),S=p(r/2),M=p(o/2),T=p(l/2);switch(d){case"XYZ":this._x=S*x*_+m*M*T,this._y=m*M*_-S*x*T,this._z=m*x*T+S*M*_,this._w=m*x*_-S*M*T;break;case"YXZ":this._x=S*x*_+m*M*T,this._y=m*M*_-S*x*T,this._z=m*x*T-S*M*_,this._w=m*x*_+S*M*T;break;case"ZXY":this._x=S*x*_-m*M*T,this._y=m*M*_+S*x*T,this._z=m*x*T+S*M*_,this._w=m*x*_-S*M*T;break;case"ZYX":this._x=S*x*_-m*M*T,this._y=m*M*_+S*x*T,this._z=m*x*T-S*M*_,this._w=m*x*_+S*M*T;break;case"YZX":this._x=S*x*_+m*M*T,this._y=m*M*_+S*x*T,this._z=m*x*T-S*M*_,this._w=m*x*_-S*M*T;break;case"XZY":this._x=S*x*_-m*M*T,this._y=m*M*_-S*x*T,this._z=m*x*T+S*M*_,this._w=m*x*_+S*M*T;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],d=t[1],f=t[5],p=t[9],m=t[2],x=t[6],_=t[10],S=r+f+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-p)*M,this._y=(l-m)*M,this._z=(d-o)*M}else if(r>f&&r>_){const M=2*Math.sqrt(1+r-f-_);this._w=(x-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+m)/M}else if(f>_){const M=2*Math.sqrt(1+f-r-_);this._w=(l-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+_-r-f);this._w=(d-o)/M,this._x=(l+m)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,d=e._w,f=t._x,p=t._y,m=t._z,x=t._w;return this._x=r*x+d*f+o*m-l*p,this._y=o*x+d*p+l*f-r*m,this._z=l*x+d*m+r*p-o*f,this._w=d*x-r*f-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,d=-d,f=-f);let p=1-t;if(f<.9995){const m=Math.acos(f),x=Math.sin(m);p=Math.sin(p*m)/x,t=Math.sin(t*m)/x,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*o-f*r),x=2*(f*t-l*o),_=2*(l*r-d*t);return this.x=t+p*m+d*_-f*x,this.y=r+p*x+f*m-l*_,this.z=o+p*_+l*x-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,d=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(It(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new Z,zm=new Vs;class Et{constructor(e,t,r,o,l,d,f,p,m){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m)}set(e,t,r,o,l,d,f,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=d,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],x=r[4],_=r[7],S=r[2],M=r[5],T=r[8],A=o[0],y=o[3],v=o[6],C=o[1],I=o[4],D=o[7],O=o[2],L=o[5],F=o[8];return l[0]=d*A+f*C+p*O,l[3]=d*y+f*I+p*L,l[6]=d*v+f*D+p*F,l[1]=m*A+x*C+_*O,l[4]=m*y+x*I+_*L,l[7]=m*v+x*D+_*F,l[2]=S*A+M*C+T*O,l[5]=S*y+M*I+T*L,l[8]=S*v+M*D+T*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8];return t*d*x-t*f*m-r*l*x+r*f*p+o*l*m-o*d*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8],_=x*d-f*m,S=f*p-x*l,M=m*l-d*p,T=t*_+r*S+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(o*m-x*r)*A,e[2]=(f*r-o*d)*A,e[3]=S*A,e[4]=(x*t-o*p)*A,e[5]=(o*l-f*t)*A,e[6]=M*A,e[7]=(r*p-m*t)*A,e[8]=(d*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,d,f){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-o*m,o*p,-o*(-m*d+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(sd.makeScale(e,t)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,t){return this.premultiply(sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new Et,jm=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vm=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function M_(){const s={enabled:!0,workingColorSpace:ka,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===Xt&&(o.r=Dr(o.r),o.g=Dr(o.g),o.b=Dr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xt&&(o.r=Ia(o.r),o.g=Ia(o.g),o.b=Ia(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===as?pc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Lo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Lo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ka]:{primaries:e,whitePoint:r,transfer:pc,toXYZ:jm,fromXYZ:Vm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:jm,fromXYZ:Vm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),s}const jt=M_();function Dr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ia(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xa;class w_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{xa===void 0&&(xa=Do("canvas")),xa.width=e.width,xa.height=e.height;const o=xa.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=xa}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Do("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=Dr(l[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Dr(t[r]/255)*255):t[r]=Dr(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b_=0;class Wf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?l.push(ad(o[d].image)):l.push(ad(o[d]))}else l=ad(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ad(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?w_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let E_=0;const od=new Z;class Xn extends Gs{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,r=Rr,o=Rr,l=Wn,d=Bs,f=Vi,p=mi,m=Xn.DEFAULT_ANISOTROPY,x=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Oo(),this.name="",this.source=new Wf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $d:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case Kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $d:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case Kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Z0;Xn.DEFAULT_ANISOTROPY=1;class dn{constructor(e=0,t=0,r=0,o=1){dn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],x=p[4],_=p[8],S=p[1],M=p[5],T=p[9],A=p[2],y=p[6],v=p[10];if(Math.abs(x-S)<.01&&Math.abs(_-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+A)<.1&&Math.abs(T+y)<.1&&Math.abs(m+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(m+1)/2,D=(M+1)/2,O=(v+1)/2,L=(x+S)/4,F=(_+A)/4,j=(T+y)/4;return I>D&&I>O?I<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(I),o=L/r,l=F/r):D>O?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=L/o,l=j/o):O<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),r=F/l,o=j/l),this.set(r,o,l,t),this}let C=Math.sqrt((y-T)*(y-T)+(_-A)*(_-A)+(S-x)*(S-x));return Math.abs(C)<.001&&(C=1),this.x=(y-T)/C,this.y=(_-A)/C,this.z=(S-x)/C,this.w=Math.acos((m+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this.w=It(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this.w=It(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class T_ extends Gs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new Xn(o);this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Wf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends T_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class og extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class C_ extends Xn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fo{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=l.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,Fi):Fi.fromBufferAttribute(l,d),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Fl.copy(r.boundingBox)),Fl.applyMatrix4(e.matrixWorld),this.union(Fl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),kl.subVectors(this.max,yo),va.subVectors(e.a,yo),_a.subVectors(e.b,yo),ya.subVectors(e.c,yo),Qr.subVectors(_a,va),Jr.subVectors(ya,_a),Ps.subVectors(va,ya);let t=[0,-Qr.z,Qr.y,0,-Jr.z,Jr.y,0,-Ps.z,Ps.y,Qr.z,0,-Qr.x,Jr.z,0,-Jr.x,Ps.z,0,-Ps.x,-Qr.y,Qr.x,0,-Jr.y,Jr.x,0,-Ps.y,Ps.x,0];return!ld(t,va,_a,ya,kl)||(t=[1,0,0,0,1,0,0,0,1],!ld(t,va,_a,ya,kl))?!1:(Bl.crossVectors(Qr,Jr),t=[Bl.x,Bl.y,Bl.z],ld(t,va,_a,ya,kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Fi=new Z,Fl=new Fo,va=new Z,_a=new Z,ya=new Z,Qr=new Z,Jr=new Z,Ps=new Z,yo=new Z,kl=new Z,Bl=new Z,Ds=new Z;function ld(s,e,t,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){Ds.fromArray(s,l);const f=o.x*Math.abs(Ds.x)+o.y*Math.abs(Ds.y)+o.z*Math.abs(Ds.z),p=e.dot(Ds),m=t.dot(Ds),x=r.dot(Ds);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>f)return!1}return!0}const A_=new Fo,So=new Z,cd=new Z;class Xf{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):A_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const t=So.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(So,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(cd)),this.expandByPoint(So.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wr=new Z,ud=new Z,zl=new Z,es=new Z,dd=new Z,jl=new Z,fd=new Z;class qf{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ud.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),es.copy(this.origin).sub(ud);const l=e.distanceTo(t)*.5,d=-this.direction.dot(zl),f=es.dot(this.direction),p=-es.dot(zl),m=es.lengthSq(),x=Math.abs(1-d*d);let _,S,M,T;if(x>0)if(_=d*p-f,S=d*f-p,T=l*x,_>=0)if(S>=-T)if(S<=T){const A=1/x;_*=A,S*=A,M=_*(_+d*S+2*f)+S*(d*_+S+2*p)+m}else S=l,_=Math.max(0,-(d*S+f)),M=-_*_+S*(S+2*p)+m;else S=-l,_=Math.max(0,-(d*S+f)),M=-_*_+S*(S+2*p)+m;else S<=-T?(_=Math.max(0,-(-d*l+f)),S=_>0?-l:Math.min(Math.max(-l,-p),l),M=-_*_+S*(S+2*p)+m):S<=T?(_=0,S=Math.min(Math.max(-l,-p),l),M=S*(S+2*p)+m):(_=Math.max(0,-(d*l+f)),S=_>0?l:Math.min(Math.max(-l,-p),l),M=-_*_+S*(S+2*p)+m);else S=d>0?-l:l,_=Math.max(0,-(d*S+f)),M=-_*_+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(ud).addScaledVector(zl,S),M}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const r=wr.dot(this.direction),o=wr.dot(wr)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,d,f,p;const m=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,o=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,o=(e.min.x-S.x)*m),x>=0?(l=(e.min.y-S.y)*x,d=(e.max.y-S.y)*x):(l=(e.max.y-S.y)*x,d=(e.min.y-S.y)*x),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),_>=0?(f=(e.min.z-S.z)*_,p=(e.max.z-S.z)*_):(f=(e.max.z-S.z)*_,p=(e.min.z-S.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,r,o,l){dd.subVectors(t,e),jl.subVectors(r,e),fd.crossVectors(dd,jl);let d=this.direction.dot(fd),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;es.subVectors(this.origin,e);const p=f*this.direction.dot(jl.crossVectors(es,jl));if(p<0)return null;const m=f*this.direction.dot(dd.cross(es));if(m<0||p+m>d)return null;const x=-f*es.dot(fd);return x<0?null:this.at(x/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,t,r,o,l,d,f,p,m,x,_,S,M,T,A,y){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m,x,_,S,M,T,A,y)}set(e,t,r,o,l,d,f,p,m,x,_,S,M,T,A,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=d,v[9]=f,v[13]=p,v[2]=m,v[6]=x,v[10]=_,v[14]=S,v[3]=M,v[7]=T,v[11]=A,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Sa.setFromMatrixColumn(e,0).length(),l=1/Sa.setFromMatrixColumn(e,1).length(),d=1/Sa.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const S=d*x,M=d*_,T=f*x,A=f*_;t[0]=p*x,t[4]=-p*_,t[8]=m,t[1]=M+T*m,t[5]=S-A*m,t[9]=-f*p,t[2]=A-S*m,t[6]=T+M*m,t[10]=d*p}else if(e.order==="YXZ"){const S=p*x,M=p*_,T=m*x,A=m*_;t[0]=S+A*f,t[4]=T*f-M,t[8]=d*m,t[1]=d*_,t[5]=d*x,t[9]=-f,t[2]=M*f-T,t[6]=A+S*f,t[10]=d*p}else if(e.order==="ZXY"){const S=p*x,M=p*_,T=m*x,A=m*_;t[0]=S-A*f,t[4]=-d*_,t[8]=T+M*f,t[1]=M+T*f,t[5]=d*x,t[9]=A-S*f,t[2]=-d*m,t[6]=f,t[10]=d*p}else if(e.order==="ZYX"){const S=d*x,M=d*_,T=f*x,A=f*_;t[0]=p*x,t[4]=T*m-M,t[8]=S*m+A,t[1]=p*_,t[5]=A*m+S,t[9]=M*m-T,t[2]=-m,t[6]=f*p,t[10]=d*p}else if(e.order==="YZX"){const S=d*p,M=d*m,T=f*p,A=f*m;t[0]=p*x,t[4]=A-S*_,t[8]=T*_+M,t[1]=_,t[5]=d*x,t[9]=-f*x,t[2]=-m*x,t[6]=M*_+T,t[10]=S-A*_}else if(e.order==="XZY"){const S=d*p,M=d*m,T=f*p,A=f*m;t[0]=p*x,t[4]=-_,t[8]=m*x,t[1]=S*_+A,t[5]=d*x,t[9]=M*_-T,t[2]=T*_-M,t[6]=f*x,t[10]=A*_+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R_,e,N_)}lookAt(e,t,r){const o=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),ts.crossVectors(r,hi),ts.lengthSq()===0&&(Math.abs(r.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),ts.crossVectors(r,hi)),ts.normalize(),Vl.crossVectors(hi,ts),o[0]=ts.x,o[4]=Vl.x,o[8]=hi.x,o[1]=ts.y,o[5]=Vl.y,o[9]=hi.y,o[2]=ts.z,o[6]=Vl.z,o[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],x=r[1],_=r[5],S=r[9],M=r[13],T=r[2],A=r[6],y=r[10],v=r[14],C=r[3],I=r[7],D=r[11],O=r[15],L=o[0],F=o[4],j=o[8],E=o[12],R=o[1],z=o[5],$=o[9],K=o[13],re=o[2],ie=o[6],ee=o[10],q=o[14],X=o[3],fe=o[7],ae=o[11],k=o[15];return l[0]=d*L+f*R+p*re+m*X,l[4]=d*F+f*z+p*ie+m*fe,l[8]=d*j+f*$+p*ee+m*ae,l[12]=d*E+f*K+p*q+m*k,l[1]=x*L+_*R+S*re+M*X,l[5]=x*F+_*z+S*ie+M*fe,l[9]=x*j+_*$+S*ee+M*ae,l[13]=x*E+_*K+S*q+M*k,l[2]=T*L+A*R+y*re+v*X,l[6]=T*F+A*z+y*ie+v*fe,l[10]=T*j+A*$+y*ee+v*ae,l[14]=T*E+A*K+y*q+v*k,l[3]=C*L+I*R+D*re+O*X,l[7]=C*F+I*z+D*ie+O*fe,l[11]=C*j+I*$+D*ee+O*ae,l[15]=C*E+I*K+D*q+O*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],d=e[1],f=e[5],p=e[9],m=e[13],x=e[2],_=e[6],S=e[10],M=e[14],T=e[3],A=e[7],y=e[11],v=e[15],C=p*M-m*S,I=f*M-m*_,D=f*S-p*_,O=d*M-m*x,L=d*S-p*x,F=d*_-f*x;return t*(A*C-y*I+v*D)-r*(T*C-y*O+v*L)+o*(T*I-A*O+v*F)-l*(T*D-A*L+y*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8],_=e[9],S=e[10],M=e[11],T=e[12],A=e[13],y=e[14],v=e[15],C=_*y*m-A*S*m+A*p*M-f*y*M-_*p*v+f*S*v,I=T*S*m-x*y*m-T*p*M+d*y*M+x*p*v-d*S*v,D=x*A*m-T*_*m+T*f*M-d*A*M-x*f*v+d*_*v,O=T*_*p-x*A*p-T*f*S+d*A*S+x*f*y-d*_*y,L=t*C+r*I+o*D+l*O;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=C*F,e[1]=(A*S*l-_*y*l-A*o*M+r*y*M+_*o*v-r*S*v)*F,e[2]=(f*y*l-A*p*l+A*o*m-r*y*m-f*o*v+r*p*v)*F,e[3]=(_*p*l-f*S*l-_*o*m+r*S*m+f*o*M-r*p*M)*F,e[4]=I*F,e[5]=(x*y*l-T*S*l+T*o*M-t*y*M-x*o*v+t*S*v)*F,e[6]=(T*p*l-d*y*l-T*o*m+t*y*m+d*o*v-t*p*v)*F,e[7]=(d*S*l-x*p*l+x*o*m-t*S*m-d*o*M+t*p*M)*F,e[8]=D*F,e[9]=(T*_*l-x*A*l-T*r*M+t*A*M+x*r*v-t*_*v)*F,e[10]=(d*A*l-T*f*l+T*r*m-t*A*m-d*r*v+t*f*v)*F,e[11]=(x*f*l-d*_*l-x*r*m+t*_*m+d*r*M-t*f*M)*F,e[12]=O*F,e[13]=(x*A*o-T*_*o+T*r*S-t*A*S-x*r*y+t*_*y)*F,e[14]=(T*f*o-d*A*o-T*r*p+t*A*p+d*r*y-t*f*y)*F,e[15]=(d*_*o-x*f*o+x*r*p-t*_*p-d*r*S+t*f*S)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,d=e.x,f=e.y,p=e.z,m=l*d,x=l*f;return this.set(m*d+r,m*f-o*p,m*p+o*f,0,m*f+o*p,x*f+r,x*p-o*d,0,m*p-o*f,x*p+o*d,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,d=t._y,f=t._z,p=t._w,m=l+l,x=d+d,_=f+f,S=l*m,M=l*x,T=l*_,A=d*x,y=d*_,v=f*_,C=p*m,I=p*x,D=p*_,O=r.x,L=r.y,F=r.z;return o[0]=(1-(A+v))*O,o[1]=(M+D)*O,o[2]=(T-I)*O,o[3]=0,o[4]=(M-D)*L,o[5]=(1-(S+v))*L,o[6]=(y+C)*L,o[7]=0,o[8]=(T+I)*F,o[9]=(y-C)*F,o[10]=(1-(S+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=Sa.set(o[0],o[1],o[2]).length();const d=Sa.set(o[4],o[5],o[6]).length(),f=Sa.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),ki.copy(this);const m=1/l,x=1/d,_=1/f;return ki.elements[0]*=m,ki.elements[1]*=m,ki.elements[2]*=m,ki.elements[4]*=x,ki.elements[5]*=x,ki.elements[6]*=x,ki.elements[8]*=_,ki.elements[9]*=_,ki.elements[10]*=_,t.setFromRotationMatrix(ki),r.x=l,r.y=d,r.z=f,this}makePerspective(e,t,r,o,l,d,f=tr,p=!1){const m=this.elements,x=2*l/(t-e),_=2*l/(r-o),S=(t+e)/(t-e),M=(r+o)/(r-o);let T,A;if(p)T=l/(d-l),A=d*l/(d-l);else if(f===tr)T=-(d+l)/(d-l),A=-2*d*l/(d-l);else if(f===mc)T=-d/(d-l),A=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,d,f=tr,p=!1){const m=this.elements,x=2/(t-e),_=2/(r-o),S=-(t+e)/(t-e),M=-(r+o)/(r-o);let T,A;if(p)T=1/(d-l),A=d/(d-l);else if(f===tr)T=-2/(d-l),A=-(d+l)/(d-l);else if(f===mc)T=-1/(d-l),A=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Sa=new Z,ki=new ln,R_=new Z(0,0,0),N_=new Z(1,1,1),ts=new Z,Vl=new Z,hi=new Z,Gm=new ln,Hm=new Vs;class ar{constructor(e=0,t=0,r=0,o=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],f=o[8],p=o[1],m=o[5],x=o[9],_=o[2],S=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-It(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(It(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-It(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(It(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class Yf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P_=0;const Wm=new Z,Ma=new Vs,br=new ln,Gl=new Z,Mo=new Z,D_=new Z,L_=new Vs,Xm=new Z(1,0,0),qm=new Z(0,1,0),Ym=new Z(0,0,1),$m={type:"added"},I_={type:"removed"},wa={type:"childadded",child:null},hd={type:"childremoved",child:null};class Rn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new Z,t=new ar,r=new Vs,o=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ln},normalMatrix:{value:new Et}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.premultiply(Ma),this}rotateX(e){return this.rotateOnAxis(Xm,e)}rotateY(e){return this.rotateOnAxis(qm,e)}rotateZ(e){return this.rotateOnAxis(Ym,e)}translateOnAxis(e,t){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xm,e)}translateY(e){return this.translateOnAxis(qm,e)}translateZ(e){return this.translateOnAxis(Ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(br.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Gl.copy(e):Gl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?br.lookAt(Mo,Gl,this.up):br.lookAt(Gl,Mo,this.up),this.quaternion.setFromRotationMatrix(br),o&&(br.extractRotation(o.matrixWorld),Ma.setFromRotationMatrix(br),this.quaternion.premultiply(Ma.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($m),wa.child=e,this.dispatchEvent(wa),wa.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I_),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),br.multiply(e.parent.matrixWorld)),e.applyMatrix4(br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($m),wa.child=e,this.dispatchEvent(wa),wa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,D_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,L_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const _=p[m];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),x=d(e.images),_=d(e.shapes),S=d(e.skeletons),M=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(f){const p=[];for(const m in f){const x=f[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Rn.DEFAULT_UP=new Z(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new Z,Er=new Z,pd=new Z,Tr=new Z,ba=new Z,Ea=new Z,Km=new Z,md=new Z,gd=new Z,xd=new Z,vd=new dn,_d=new dn,yd=new dn;class zi{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Bi.subVectors(e,t),o.cross(Bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Bi.subVectors(o,t),Er.subVectors(r,t),pd.subVectors(e,t);const d=Bi.dot(Bi),f=Bi.dot(Er),p=Bi.dot(pd),m=Er.dot(Er),x=Er.dot(pd),_=d*m-f*f;if(_===0)return l.set(0,0,0),null;const S=1/_,M=(m*p-f*x)*S,T=(d*x-f*p)*S;return l.set(1-M-T,T,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,t,r,o,l,d,f,p){return this.getBarycoord(e,t,r,o,Tr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Tr.x),p.addScaledVector(d,Tr.y),p.addScaledVector(f,Tr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,d){return vd.setScalar(0),_d.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(e,t),_d.fromBufferAttribute(e,r),yd.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(vd,l.x),d.addScaledVector(_d,l.y),d.addScaledVector(yd,l.z),d}static isFrontFacing(e,t,r,o){return Bi.subVectors(r,t),Er.subVectors(e,t),Bi.cross(Er).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Bi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return zi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let d,f;ba.subVectors(o,r),Ea.subVectors(l,r),md.subVectors(e,r);const p=ba.dot(md),m=Ea.dot(md);if(p<=0&&m<=0)return t.copy(r);gd.subVectors(e,o);const x=ba.dot(gd),_=Ea.dot(gd);if(x>=0&&_<=x)return t.copy(o);const S=p*_-x*m;if(S<=0&&p>=0&&x<=0)return d=p/(p-x),t.copy(r).addScaledVector(ba,d);xd.subVectors(e,l);const M=ba.dot(xd),T=Ea.dot(xd);if(T>=0&&M<=T)return t.copy(l);const A=M*m-p*T;if(A<=0&&m>=0&&T<=0)return f=m/(m-T),t.copy(r).addScaledVector(Ea,f);const y=x*T-M*_;if(y<=0&&_-x>=0&&M-T>=0)return Km.subVectors(l,o),f=(_-x)/(_-x+(M-T)),t.copy(o).addScaledVector(Km,f);const v=1/(y+A+S);return d=A*v,f=S*v,t.copy(r).addScaledVector(ba,d).addScaledVector(Ea,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Hl={h:0,s:0,l:0};function Sd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=jt.workingColorSpace){return this.r=e,this.g=t,this.b=r,jt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=jt.workingColorSpace){if(e=y_(e,1),t=It(t,0,1),r=It(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=Sd(d,l,e+1/3),this.g=Sd(d,l,e),this.b=Sd(d,l,e-1/3)}return jt.colorSpaceToWorking(this,o),this}setStyle(e,t=In){function r(l){l!==void 0&&parseFloat(l)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const r=lg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return jt.workingToColorSpace(Gn.copy(this),e),Math.round(It(Gn.r*255,0,255))*65536+Math.round(It(Gn.g*255,0,255))*256+Math.round(It(Gn.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.workingToColorSpace(Gn.copy(this),t);const r=Gn.r,o=Gn.g,l=Gn.b,d=Math.max(r,o,l),f=Math.min(r,o,l);let p,m;const x=(f+d)/2;if(f===d)p=0,m=0;else{const _=d-f;switch(m=x<=.5?_/(d+f):_/(2-d-f),d){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=jt.workingColorSpace){return jt.workingToColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=In){jt.workingToColorSpace(Gn.copy(this),e);const t=Gn.r,r=Gn.g,o=Gn.b;return e!==In?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Hl);const r=id(ns.h,Hl.h,t),o=id(ns.s,Hl.s,t),l=id(ns.l,Hl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gn=new At;At.NAMES=lg;let U_=0;class ko extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=La,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Bd,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==La&&(r.blending=this.blending),this.side!==ls&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kd&&(r.blendSrc=this.blendSrc),this.blendDst!==Bd&&(r.blendDst=this.blendDst),this.blendEquation!==Fs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Um&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ga&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ga&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ga&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const f in l){const p=l[f];delete p.metadata,d.push(p)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ji extends ko{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=H0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new Z,Wl=new mt;let O_=0;class rr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:O_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Om,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Wl.fromBufferAttribute(this,t),Wl.applyMatrix3(e),this.setXY(t,Wl.x,Wl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=_o(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=si(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_o(t,this.array)),t}setX(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_o(t,this.array)),t}setY(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_o(t,this.array)),t}setZ(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_o(t,this.array)),t}setW(e,t){return this.normalized&&(t=si(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),r=si(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),r=si(r,this.array),o=si(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=si(t,this.array),r=si(r,this.array),o=si(o,this.array),l=si(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Om&&(e.usage=this.usage),e}}class cg extends rr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ug extends rr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class pn extends rr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let F_=0;const Ti=new ln,Md=new Rn,Ta=new Z,pi=new Fo,wo=new Fo,Cn=new Z;class gi extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ag(e)?ug:cg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Et().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,r){return Ti.makeTranslation(e,t,r),this.applyMatrix4(Ti),this}scale(e,t,r){return Ti.makeScale(e,t,r),this.applyMatrix4(Ti),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new pn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];pi.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const f=t[l];wo.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(pi.min,wo.min),pi.expandByPoint(Cn),Cn.addVectors(pi.max,wo.max),pi.expandByPoint(Cn)):(pi.expandByPoint(wo.min),pi.expandByPoint(wo.max))}pi.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)Cn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Cn));if(t)for(let l=0,d=t.length;l<d;l++){const f=t[l],p=this.morphTargetsRelative;for(let m=0,x=f.count;m<x;m++)Cn.fromBufferAttribute(f,m),p&&(Ta.fromBufferAttribute(e,m),Cn.add(Ta)),o=Math.max(o,r.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rr(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let j=0;j<r.count;j++)f[j]=new Z,p[j]=new Z;const m=new Z,x=new Z,_=new Z,S=new mt,M=new mt,T=new mt,A=new Z,y=new Z;function v(j,E,R){m.fromBufferAttribute(r,j),x.fromBufferAttribute(r,E),_.fromBufferAttribute(r,R),S.fromBufferAttribute(l,j),M.fromBufferAttribute(l,E),T.fromBufferAttribute(l,R),x.sub(m),_.sub(m),M.sub(S),T.sub(S);const z=1/(M.x*T.y-T.x*M.y);isFinite(z)&&(A.copy(x).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(z),y.copy(_).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(z),f[j].add(A),f[E].add(A),f[R].add(A),p[j].add(y),p[E].add(y),p[R].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let j=0,E=C.length;j<E;++j){const R=C[j],z=R.start,$=R.count;for(let K=z,re=z+$;K<re;K+=3)v(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const I=new Z,D=new Z,O=new Z,L=new Z;function F(j){O.fromBufferAttribute(o,j),L.copy(O);const E=f[j];I.copy(E),I.sub(O.multiplyScalar(O.dot(E))).normalize(),D.crossVectors(L,E);const z=D.dot(p[j])<0?-1:1;d.setXYZW(j,I.x,I.y,I.z,z)}for(let j=0,E=C.length;j<E;++j){const R=C[j],z=R.start,$=R.count;for(let K=z,re=z+$;K<re;K+=3)F(e.getX(K+0)),F(e.getX(K+1)),F(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new rr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const o=new Z,l=new Z,d=new Z,f=new Z,p=new Z,m=new Z,x=new Z,_=new Z;if(e)for(let S=0,M=e.count;S<M;S+=3){const T=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,A),d.fromBufferAttribute(t,y),x.subVectors(d,l),_.subVectors(o,l),x.cross(_),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),f.add(x),p.add(x),m.add(x),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=t.count;S<M;S+=3)o.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),d.fromBufferAttribute(t,S+2),x.subVectors(d,l),_.subVectors(o,l),x.cross(_),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(f,p){const m=f.array,x=f.itemSize,_=f.normalized,S=new m.constructor(p.length*x);let M=0,T=0;for(let A=0,y=p.length;A<y;A++){f.isInterleavedBufferAttribute?M=p[A]*f.data.stride+f.offset:M=p[A]*x;for(let v=0;v<x;v++)S[T++]=m[M++]}return new rr(S,x,_)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let x=0,_=m.length;x<_;x++){const S=m[x],M=e(S,r);p.push(M)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let _=0,S=m.length;_<S;_++){const M=m[_];x.push(M.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],_=l[m];for(let S=0,M=_.length;S<M;S++)x.push(_[S].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,x=d.length;m<x;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zm=new ln,Ls=new qf,Xl=new Xf,Qm=new Z,ql=new Z,Yl=new Z,$l=new Z,wd=new Z,Kl=new Z,Jm=new Z,Zl=new Z;class Oe extends Rn{constructor(e=new gi,t=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Kl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=f[p],_=l[p];x!==0&&(wd.fromBufferAttribute(_,e),d?Kl.addScaledVector(wd,x):Kl.addScaledVector(wd.sub(t),x))}t.add(Kl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Xl.copy(r.boundingSphere),Xl.applyMatrix4(l),Ls.copy(e.ray).recast(e.near),!(Xl.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Xl,Qm)===null||Ls.origin.distanceToSquared(Qm)>(e.far-e.near)**2))&&(Zm.copy(l).invert(),Ls.copy(e.ray).applyMatrix4(Zm),!(r.boundingBox!==null&&Ls.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,r){let o;const l=this.geometry,d=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,_=l.attributes.normal,S=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,A=S.length;T<A;T++){const y=S[T],v=d[y.materialIndex],C=Math.max(y.start,M.start),I=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let D=C,O=I;D<O;D+=3){const L=f.getX(D),F=f.getX(D+1),j=f.getX(D+2);o=Ql(this,v,e,r,m,x,_,L,F,j),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let y=T,v=A;y<v;y+=3){const C=f.getX(y),I=f.getX(y+1),D=f.getX(y+2);o=Ql(this,d,e,r,m,x,_,C,I,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,A=S.length;T<A;T++){const y=S[T],v=d[y.materialIndex],C=Math.max(y.start,M.start),I=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let D=C,O=I;D<O;D+=3){const L=D,F=D+1,j=D+2;o=Ql(this,v,e,r,m,x,_,L,F,j),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let y=T,v=A;y<v;y+=3){const C=y,I=y+1,D=y+2;o=Ql(this,d,e,r,m,x,_,C,I,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function k_(s,e,t,r,o,l,d,f){let p;if(e.side===oi?p=r.intersectTriangle(d,l,o,!0,f):p=r.intersectTriangle(o,l,d,e.side===ls,f),p===null)return null;Zl.copy(f),Zl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Zl);return m<t.near||m>t.far?null:{distance:m,point:Zl.clone(),object:s}}function Ql(s,e,t,r,o,l,d,f,p,m){s.getVertexPosition(f,ql),s.getVertexPosition(p,Yl),s.getVertexPosition(m,$l);const x=k_(s,e,t,r,ql,Yl,$l,Jm);if(x){const _=new Z;zi.getBarycoord(Jm,ql,Yl,$l,_),o&&(x.uv=zi.getInterpolatedAttribute(o,f,p,m,_,new mt)),l&&(x.uv1=zi.getInterpolatedAttribute(l,f,p,m,_,new mt)),d&&(x.normal=zi.getInterpolatedAttribute(d,f,p,m,_,new Z),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:f,b:p,c:m,normal:new Z,materialIndex:0};zi.getNormal(ql,Yl,$l,S.normal),x.face=S,x.barycoord=_}return x}class Wt extends gi{constructor(e=1,t=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const f=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const p=[],m=[],x=[],_=[];let S=0,M=0;T("z","y","x",-1,-1,r,t,e,d,l,0),T("z","y","x",1,-1,r,t,-e,d,l,1),T("x","z","y",1,1,e,r,t,o,d,2),T("x","z","y",1,-1,e,r,-t,o,d,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(_,2));function T(A,y,v,C,I,D,O,L,F,j,E){const R=D/F,z=O/j,$=D/2,K=O/2,re=L/2,ie=F+1,ee=j+1;let q=0,X=0;const fe=new Z;for(let ae=0;ae<ee;ae++){const k=ae*z-K;for(let oe=0;oe<ie;oe++){const Pe=oe*R-$;fe[A]=Pe*C,fe[y]=k*I,fe[v]=re,m.push(fe.x,fe.y,fe.z),fe[A]=0,fe[y]=0,fe[v]=L>0?1:-1,x.push(fe.x,fe.y,fe.z),_.push(oe/F),_.push(1-ae/j),q+=1}}for(let ae=0;ae<j;ae++)for(let k=0;k<F;k++){const oe=S+k+ie*ae,Pe=S+k+ie*(ae+1),He=S+(k+1)+ie*(ae+1),Ye=S+(k+1)+ie*ae;p.push(oe,Pe,Ye),p.push(Pe,He,Ye),X+=6}f.addGroup(M,X,E),M+=X,S+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ba(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function $n(s){const e={};for(let t=0;t<s.length;t++){const r=Ba(s[t]);for(const o in r)e[o]=r[o]}return e}function B_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:jt.workingColorSpace}const z_={clone:Ba,merge:$n};var j_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends ko{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j_,this.fragmentShader=V_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ba(e.uniforms),this.uniformsGroups=B_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class fg extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new Z,e0=new mt,t0=new mt;class Kn extends fg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gc*2*Math.atan(Math.tan(cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,e0,t0),t.subVectors(t0,e0)}setViewOffset(e,t,r,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/p,t-=d.offsetY*r/m,o*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ca=-90,Aa=1;class G_ extends Rn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Kn(Ca,Aa,e,t);o.layers=this.layers,this.add(o);const l=new Kn(Ca,Aa,e,t);l.layers=this.layers,this.add(l);const d=new Kn(Ca,Aa,e,t);d.layers=this.layers,this.add(d);const f=new Kn(Ca,Aa,e,t);f.layers=this.layers,this.add(f);const p=new Kn(Ca,Aa,e,t);p.layers=this.layers,this.add(p);const m=new Kn(Ca,Aa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,d,f,p]=t;for(const m of t)this.remove(m);if(e===tr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===mc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,f,p,m,x]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,d),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(_,S,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class hg extends Xn{constructor(e=[],t=js,r,o,l,d,f,p,m,x){super(e,t,r,o,l,d,f,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pg extends ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new hg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Wt(5,5,5),l=new or({name:"CubemapFromEquirect",uniforms:Ba(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:oi,blending:Pr});l.uniforms.tEquirect.value=t;const d=new Oe(o,l),f=t.minFilter;return t.minFilter===Bs&&(t.minFilter=Wn),new G_(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(l)}}class An extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H_={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),v=this._getHandJoint(m,A);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],S=x.position.distanceTo(_.position),M=.02,T=.005;m.inputState.pinching&&S>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new An;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class $f{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=t}clone(){return new $f(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mg extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class W_ extends Xn{constructor(e=null,t=1,r=1,o,l,d,f,p,m=Un,x=Un,_,S){super(null,d,f,p,m,x,o,l,_,S),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ed=new Z,X_=new Z,q_=new Et;class ss{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Ed.subVectors(r,t).cross(X_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ed),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||q_.getNormalMatrix(e),o=this.coplanarPoint(Ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new Xf,Y_=new mt(.5,.5),Jl=new Z;class Kf{constructor(e=new ss,t=new ss,r=new ss,o=new ss,l=new ss,d=new ss){this.planes=[e,t,r,o,l,d]}set(e,t,r,o,l,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=tr,r=!1){const o=this.planes,l=e.elements,d=l[0],f=l[1],p=l[2],m=l[3],x=l[4],_=l[5],S=l[6],M=l[7],T=l[8],A=l[9],y=l[10],v=l[11],C=l[12],I=l[13],D=l[14],O=l[15];if(o[0].setComponents(m-d,M-x,v-T,O-C).normalize(),o[1].setComponents(m+d,M+x,v+T,O+C).normalize(),o[2].setComponents(m+f,M+_,v+A,O+I).normalize(),o[3].setComponents(m-f,M-_,v-A,O-I).normalize(),r)o[4].setComponents(p,S,y,D).normalize(),o[5].setComponents(m-p,M-S,v-y,O-D).normalize();else if(o[4].setComponents(m-p,M-S,v-y,O-D).normalize(),t===tr)o[5].setComponents(m+p,M+S,v+y,O+D).normalize();else if(t===mc)o[5].setComponents(p,S,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);const t=Y_.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Jl.x=o.normal.x>0?e.max.x:e.min.x,Jl.y=o.normal.y>0?e.max.y:e.min.y,Jl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Io extends Xn{constructor(e,t,r=sr,o,l,d,f=Un,p=Un,m,x=Ir,_=1){if(x!==Ir&&x!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:t,depth:_};super(S,o,l,d,f,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $_ extends Io{constructor(e,t=sr,r=js,o,l,d=Un,f=Un,p,m=Ir){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,t,r,o,l,d,f,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class gg extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zf extends gi{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],d=[],f=[],p=[],m=new Z,x=new mt;d.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let _=0,S=3;_<=t;_++,S+=3){const M=r+_/t*o;m.x=e*Math.cos(M),m.y=e*Math.sin(M),d.push(m.x,m.y,m.z),f.push(0,0,1),x.x=(d[S]/e+1)/2,x.y=(d[S+1]/e+1)/2,p.push(x.x,x.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new pn(d,3)),this.setAttribute("normal",new pn(f,3)),this.setAttribute("uv",new pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class tn extends gi{constructor(e=1,t=1,r=1,o=32,l=1,d=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:d,thetaStart:f,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],_=[],S=[],M=[];let T=0;const A=[],y=r/2;let v=0;C(),d===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(x),this.setAttribute("position",new pn(_,3)),this.setAttribute("normal",new pn(S,3)),this.setAttribute("uv",new pn(M,2));function C(){const D=new Z,O=new Z;let L=0;const F=(t-e)/r;for(let j=0;j<=l;j++){const E=[],R=j/l,z=R*(t-e)+e;for(let $=0;$<=o;$++){const K=$/o,re=K*p+f,ie=Math.sin(re),ee=Math.cos(re);O.x=z*ie,O.y=-R*r+y,O.z=z*ee,_.push(O.x,O.y,O.z),D.set(ie,F,ee).normalize(),S.push(D.x,D.y,D.z),M.push(K,1-R),E.push(T++)}A.push(E)}for(let j=0;j<o;j++)for(let E=0;E<l;E++){const R=A[E][j],z=A[E+1][j],$=A[E+1][j+1],K=A[E][j+1];(e>0||E!==0)&&(x.push(R,z,K),L+=3),(t>0||E!==l-1)&&(x.push(z,$,K),L+=3)}m.addGroup(v,L,0),v+=L}function I(D){const O=T,L=new mt,F=new Z;let j=0;const E=D===!0?e:t,R=D===!0?1:-1;for(let $=1;$<=o;$++)_.push(0,y*R,0),S.push(0,R,0),M.push(.5,.5),T++;const z=T;for(let $=0;$<=o;$++){const re=$/o*p+f,ie=Math.cos(re),ee=Math.sin(re);F.x=E*ee,F.y=y*R,F.z=E*ie,_.push(F.x,F.y,F.z),S.push(0,R,0),L.x=ie*.5+.5,L.y=ee*.5*R+.5,M.push(L.x,L.y),T++}for(let $=0;$<o;$++){const K=O+$,re=z+$;D===!0?x.push(re,re+1,K):x.push(re+1,re,K),j+=3}m.addGroup(v,j,D===!0?1:2),v+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qf extends tn{constructor(e=1,t=1,r=32,o=1,l=!1,d=0,f=Math.PI*2){super(0,e,t,r,o,l,d,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:d,thetaLength:f}}static fromJSON(e){return new Qf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jf extends gi{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],d=[];f(o),m(r),x(),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(l.slice(),3)),this.setAttribute("uv",new pn(d,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(C){const I=new Z,D=new Z,O=new Z;for(let L=0;L<t.length;L+=3)M(t[L+0],I),M(t[L+1],D),M(t[L+2],O),p(I,D,O,C)}function p(C,I,D,O){const L=O+1,F=[];for(let j=0;j<=L;j++){F[j]=[];const E=C.clone().lerp(D,j/L),R=I.clone().lerp(D,j/L),z=L-j;for(let $=0;$<=z;$++)$===0&&j===L?F[j][$]=E:F[j][$]=E.clone().lerp(R,$/z)}for(let j=0;j<L;j++)for(let E=0;E<2*(L-j)-1;E++){const R=Math.floor(E/2);E%2===0?(S(F[j][R+1]),S(F[j+1][R]),S(F[j][R])):(S(F[j][R+1]),S(F[j+1][R+1]),S(F[j+1][R]))}}function m(C){const I=new Z;for(let D=0;D<l.length;D+=3)I.x=l[D+0],I.y=l[D+1],I.z=l[D+2],I.normalize().multiplyScalar(C),l[D+0]=I.x,l[D+1]=I.y,l[D+2]=I.z}function x(){const C=new Z;for(let I=0;I<l.length;I+=3){C.x=l[I+0],C.y=l[I+1],C.z=l[I+2];const D=y(C)/2/Math.PI+.5,O=v(C)/Math.PI+.5;d.push(D,1-O)}T(),_()}function _(){for(let C=0;C<d.length;C+=6){const I=d[C+0],D=d[C+2],O=d[C+4],L=Math.max(I,D,O),F=Math.min(I,D,O);L>.9&&F<.1&&(I<.2&&(d[C+0]+=1),D<.2&&(d[C+2]+=1),O<.2&&(d[C+4]+=1))}}function S(C){l.push(C.x,C.y,C.z)}function M(C,I){const D=C*3;I.x=e[D+0],I.y=e[D+1],I.z=e[D+2]}function T(){const C=new Z,I=new Z,D=new Z,O=new Z,L=new mt,F=new mt,j=new mt;for(let E=0,R=0;E<l.length;E+=9,R+=6){C.set(l[E+0],l[E+1],l[E+2]),I.set(l[E+3],l[E+4],l[E+5]),D.set(l[E+6],l[E+7],l[E+8]),L.set(d[R+0],d[R+1]),F.set(d[R+2],d[R+3]),j.set(d[R+4],d[R+5]),O.copy(C).add(I).add(D).divideScalar(3);const z=y(O);A(L,R+0,C,z),A(F,R+2,I,z),A(j,R+4,D,z)}}function A(C,I,D,O){O<0&&C.x===1&&(d[I]=C.x-1),D.x===0&&D.z===0&&(d[I]=O/2/Math.PI+.5)}function y(C){return Math.atan2(C.z,-C.x)}function v(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jf(e.vertices,e.indices,e.radius,e.detail)}}class eh extends Jf{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,d,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new eh(e.radius,e.detail)}}class Hn extends gi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,d=t/2,f=Math.floor(r),p=Math.floor(o),m=f+1,x=p+1,_=e/f,S=t/p,M=[],T=[],A=[],y=[];for(let v=0;v<x;v++){const C=v*S-d;for(let I=0;I<m;I++){const D=I*_-l;T.push(D,-C,0),A.push(0,0,1),y.push(I/f),y.push(1-v/p)}}for(let v=0;v<p;v++)for(let C=0;C<f;C++){const I=C+m*v,D=C+m*(v+1),O=C+1+m*(v+1),L=C+1+m*v;M.push(I,D,L),M.push(D,O,L)}this.setIndex(M),this.setAttribute("position",new pn(T,3)),this.setAttribute("normal",new pn(A,3)),this.setAttribute("uv",new pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cr extends gi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:d,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(d+f,Math.PI);let m=0;const x=[],_=new Z,S=new Z,M=[],T=[],A=[],y=[];for(let v=0;v<=r;v++){const C=[],I=v/r;let D=0;v===0&&d===0?D=.5/t:v===r&&p===Math.PI&&(D=-.5/t);for(let O=0;O<=t;O++){const L=O/t;_.x=-e*Math.cos(o+L*l)*Math.sin(d+I*f),_.y=e*Math.cos(d+I*f),_.z=e*Math.sin(o+L*l)*Math.sin(d+I*f),T.push(_.x,_.y,_.z),S.copy(_).normalize(),A.push(S.x,S.y,S.z),y.push(L+D,1-I),C.push(m++)}x.push(C)}for(let v=0;v<r;v++)for(let C=0;C<t;C++){const I=x[v][C+1],D=x[v][C],O=x[v+1][C],L=x[v+1][C+1];(v!==0||d>0)&&M.push(I,D,L),(v!==r-1||p<Math.PI)&&M.push(D,O,L)}this.setIndex(M),this.setAttribute("position",new pn(T,3)),this.setAttribute("normal",new pn(A,3)),this.setAttribute("uv",new pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class K_ extends or{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wt extends ko{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sg,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Z_ extends ko{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q_ extends ko{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Td={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class J_{constructor(e,t,r){const o=this;let l=!1,d=0,f=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(x){f++,l===!1&&o.onStart!==void 0&&o.onStart(x,d,f),l=!0},this.itemEnd=function(x){d++,o.onProgress!==void 0&&o.onProgress(x,d,f),d===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,_){return m.push(x,_),this},this.removeHandler=function(x){const _=m.indexOf(x);return _!==-1&&m.splice(_,2),this},this.getHandler=function(x){for(let _=0,S=m.length;_<S;_+=2){const M=m[_],T=m[_+1];if(M.global&&(M.lastIndex=0),M.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const e1=new J_;class th{constructor(e){this.manager=e!==void 0?e:e1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}th.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ra=new WeakMap;class t1 extends th{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,d=Td.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(d),l.manager.itemEnd(e)},0);else{let _=Ra.get(d);_===void 0&&(_=[],Ra.set(d,_)),_.push({onLoad:t,onError:o})}return d}const f=Do("img");function p(){x(),t&&t(this);const _=Ra.get(this)||[];for(let S=0;S<_.length;S++){const M=_[S];M.onLoad&&M.onLoad(this)}Ra.delete(this),l.manager.itemEnd(e)}function m(_){x(),o&&o(_),Td.remove(`image:${e}`);const S=Ra.get(this)||[];for(let M=0;M<S.length;M++){const T=S[M];T.onError&&T.onError(_)}Ra.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function x(){f.removeEventListener("load",p,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Td.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class xg extends th{constructor(e){super(e)}load(e,t,r,o){const l=new Xn,d=new t1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class yc extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Cd=new ln,n0=new Z,i0=new Z;class nh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kf,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;n0.setFromMatrixPosition(e.matrixWorld),t.position.copy(n0),i0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(i0),t.updateMatrixWorld(),Cd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class n1 extends nh{constructor(){super(new Kn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=gc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class r0 extends yc{constructor(e,t,r=0,o=Math.PI/3,l=0,d=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=d,this.map=null,this.shadow=new n1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class i1 extends nh{constructor(){super(new Kn(90,1,.5,500)),this.isPointLightShadow=!0}}class s0 extends yc{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new i1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ih extends fg{constructor(e=-1,t=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,f-=x*this.view.offsetY,p=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class r1 extends nh{constructor(){super(new ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nf extends yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new r1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class vg extends yc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class s1 extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class a1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const a0=new ln;class _g{constructor(e,t,r=0,o=1/0){this.ray=new qf(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Yf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):zt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return a0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(a0),this}intersectObject(e,t=!0,r=[]){return Pf(e,this,r,t),r.sort(o0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Pf(e[o],this,r,t);return r.sort(o0),r}}function o0(s,e){return s.distance-e.distance}function Pf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let d=0,f=l.length;d<f;d++)Pf(l[d],e,t,!0)}}class l0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=It(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class o1 extends Gs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){vt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function c0(s,e,t,r){const o=l1(r);switch(t){case ng:return s*e;case rg:return s*e/o.components*o.byteLength;case zf:return s*e/o.components*o.byteLength;case Fa:return s*e*2/o.components*o.byteLength;case jf:return s*e*2/o.components*o.byteLength;case ig:return s*e*3/o.components*o.byteLength;case Vi:return s*e*4/o.components*o.byteLength;case Vf:return s*e*4/o.components*o.byteLength;case sc:case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case oc:case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qd:case ef:return Math.max(s,16)*Math.max(e,8)/4;case Zd:case Jd:return Math.max(s,8)*Math.max(e,8)/2;case tf:case nf:case sf:case af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rf:case of:case lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ff:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case pf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case mf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case _f:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Sf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wf:case bf:case Ef:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tf:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Af:case Rf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function l1(s){switch(s){case mi:case Q0:return{byteLength:1,components:1};case No:case J0:case Lr:return{byteLength:2,components:1};case kf:case Bf:return{byteLength:2,components:4};case sr:case Ff:case er:return{byteLength:4,components:1};case eg:case tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yg(){let s=null,e=!1,t=null,r=null;function o(l,d){t(l,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function c1(s){const e=new WeakMap;function t(f,p){const m=f.array,x=f.usage,_=m.byteLength,S=s.createBuffer();s.bindBuffer(p,S),s.bufferData(p,m,x),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,m){const x=p.array,_=p.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,x);else{_.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<_.length;M++){const T=_[S],A=_[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++S,_[S]=A)}_.length=S+1;for(let M=0,T=_.length;M<T;M++){const A=_[M];s.bufferSubData(m,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:l,update:d}}var u1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,w1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,b1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,E1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,L1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,I1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z1="gl_FragColor = linearToOutputTexel( gl_FragColor );",j1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ty=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ny=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ry=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ly=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,uy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_y=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,My=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,by=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ay=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$y=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,MS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,NS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ct={alphahash_fragment:u1,alphahash_pars_fragment:d1,alphamap_fragment:f1,alphamap_pars_fragment:h1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:x1,batching_pars_vertex:v1,batching_vertex:_1,begin_vertex:y1,beginnormal_vertex:S1,bsdfs:M1,iridescence_fragment:w1,bumpmap_pars_fragment:b1,clipping_planes_fragment:E1,clipping_planes_pars_fragment:T1,clipping_planes_pars_vertex:C1,clipping_planes_vertex:A1,color_fragment:R1,color_pars_fragment:N1,color_pars_vertex:P1,color_vertex:D1,common:L1,cube_uv_reflection_fragment:I1,defaultnormal_vertex:U1,displacementmap_pars_vertex:O1,displacementmap_vertex:F1,emissivemap_fragment:k1,emissivemap_pars_fragment:B1,colorspace_fragment:z1,colorspace_pars_fragment:j1,envmap_fragment:V1,envmap_common_pars_fragment:G1,envmap_pars_fragment:H1,envmap_pars_vertex:W1,envmap_physical_pars_fragment:ny,envmap_vertex:X1,fog_vertex:q1,fog_pars_vertex:Y1,fog_fragment:$1,fog_pars_fragment:K1,gradientmap_pars_fragment:Z1,lightmap_pars_fragment:Q1,lights_lambert_fragment:J1,lights_lambert_pars_fragment:ey,lights_pars_begin:ty,lights_toon_fragment:iy,lights_toon_pars_fragment:ry,lights_phong_fragment:sy,lights_phong_pars_fragment:ay,lights_physical_fragment:oy,lights_physical_pars_fragment:ly,lights_fragment_begin:cy,lights_fragment_maps:uy,lights_fragment_end:dy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:xy,map_particle_fragment:vy,map_particle_pars_fragment:_y,metalnessmap_fragment:yy,metalnessmap_pars_fragment:Sy,morphinstance_vertex:My,morphcolor_vertex:wy,morphnormal_vertex:by,morphtarget_pars_vertex:Ey,morphtarget_vertex:Ty,normal_fragment_begin:Cy,normal_fragment_maps:Ay,normal_pars_fragment:Ry,normal_pars_vertex:Ny,normal_vertex:Py,normalmap_pars_fragment:Dy,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Uy,iridescence_pars_fragment:Oy,opaque_fragment:Fy,packing:ky,premultiplied_alpha_fragment:By,project_vertex:zy,dithering_fragment:jy,dithering_pars_fragment:Vy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Hy,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:Xy,shadowmap_vertex:qy,shadowmask_pars_fragment:Yy,skinbase_vertex:$y,skinning_pars_vertex:Ky,skinning_vertex:Zy,skinnormal_vertex:Qy,specularmap_fragment:Jy,specularmap_pars_fragment:eS,tonemapping_fragment:tS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:rS,uv_pars_fragment:sS,uv_pars_vertex:aS,uv_vertex:oS,worldpos_vertex:lS,background_vert:cS,background_frag:uS,backgroundCube_vert:dS,backgroundCube_frag:fS,cube_vert:hS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distance_vert:xS,distance_frag:vS,equirect_vert:_S,equirect_frag:yS,linedashed_vert:SS,linedashed_frag:MS,meshbasic_vert:wS,meshbasic_frag:bS,meshlambert_vert:ES,meshlambert_frag:TS,meshmatcap_vert:CS,meshmatcap_frag:AS,meshnormal_vert:RS,meshnormal_frag:NS,meshphong_vert:PS,meshphong_frag:DS,meshphysical_vert:LS,meshphysical_frag:IS,meshtoon_vert:US,meshtoon_frag:OS,points_vert:FS,points_frag:kS,shadow_vert:BS,shadow_frag:zS,sprite_vert:jS,sprite_frag:VS},Be={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Ji={basic:{uniforms:$n([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:$n([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:$n([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:$n([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:$n([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new At(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:$n([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:$n([Be.points,Be.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:$n([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:$n([Be.common,Be.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:$n([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:$n([Be.sprite,Be.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:$n([Be.common,Be.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:$n([Be.lights,Be.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Ji.physical={uniforms:$n([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const ec={r:0,b:0,g:0},Us=new ar,GS=new ln;function HS(s,e,t,r,o,l,d){const f=new At(0);let p=l===!0?0:1,m,x,_=null,S=0,M=null;function T(I){let D=I.isScene===!0?I.background:null;return D&&D.isTexture&&(D=(I.backgroundBlurriness>0?t:e).get(D)),D}function A(I){let D=!1;const O=T(I);O===null?v(f,p):O&&O.isColor&&(v(O,1),D=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(I,D){const O=T(D);O&&(O.isCubeTexture||O.mapping===_c)?(x===void 0&&(x=new Oe(new Wt(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Ba(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(L,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Us.copy(D.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),x.material.uniforms.envMap.value=O,x.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(Us)),x.material.toneMapped=jt.getTransfer(O.colorSpace)!==Xt,(_!==O||S!==O.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,_=O,S=O.version,M=s.toneMapping),x.layers.enableAll(),I.unshift(x,x.geometry,x.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new Oe(new Hn(2,2),new or({name:"BackgroundMaterial",uniforms:Ba(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=jt.getTransfer(O.colorSpace)!==Xt,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(_!==O||S!==O.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,_=O,S=O.version,M=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function v(I,D){I.getRGB(ec,dg(s)),r.buffers.color.setClear(ec.r,ec.g,ec.b,D,d)}function C(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,D=1){f.set(I),p=D,v(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,v(f,p)},render:A,addToRenderList:y,dispose:C}}function WS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let l=o,d=!1;function f(R,z,$,K,re){let ie=!1;const ee=_(K,$,z);l!==ee&&(l=ee,m(l.object)),ie=M(R,K,$,re),ie&&T(R,K,$,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(ie||d)&&(d=!1,D(R,z,$,K),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function _(R,z,$){const K=$.wireframe===!0;let re=r[R.id];re===void 0&&(re={},r[R.id]=re);let ie=re[z.id];ie===void 0&&(ie={},re[z.id]=ie);let ee=ie[K];return ee===void 0&&(ee=S(p()),ie[K]=ee),ee}function S(R){const z=[],$=[],K=[];for(let re=0;re<t;re++)z[re]=0,$[re]=0,K[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:K,object:R,attributes:{},index:null}}function M(R,z,$,K){const re=l.attributes,ie=z.attributes;let ee=0;const q=$.getAttributes();for(const X in q)if(q[X].location>=0){const ae=re[X];let k=ie[X];if(k===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),ae===void 0||ae.attribute!==k||k&&ae.data!==k.data)return!0;ee++}return l.attributesNum!==ee||l.index!==K}function T(R,z,$,K){const re={},ie=z.attributes;let ee=0;const q=$.getAttributes();for(const X in q)if(q[X].location>=0){let ae=ie[X];ae===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));const k={};k.attribute=ae,ae&&ae.data&&(k.data=ae.data),re[X]=k,ee++}l.attributes=re,l.attributesNum=ee,l.index=K}function A(){const R=l.newAttributes;for(let z=0,$=R.length;z<$;z++)R[z]=0}function y(R){v(R,0)}function v(R,z){const $=l.newAttributes,K=l.enabledAttributes,re=l.attributeDivisors;$[R]=1,K[R]===0&&(s.enableVertexAttribArray(R),K[R]=1),re[R]!==z&&(s.vertexAttribDivisor(R,z),re[R]=z)}function C(){const R=l.newAttributes,z=l.enabledAttributes;for(let $=0,K=z.length;$<K;$++)z[$]!==R[$]&&(s.disableVertexAttribArray($),z[$]=0)}function I(R,z,$,K,re,ie,ee){ee===!0?s.vertexAttribIPointer(R,z,$,re,ie):s.vertexAttribPointer(R,z,$,K,re,ie)}function D(R,z,$,K){A();const re=K.attributes,ie=$.getAttributes(),ee=z.defaultAttributeValues;for(const q in ie){const X=ie[q];if(X.location>=0){let fe=re[q];if(fe===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor)),fe!==void 0){const ae=fe.normalized,k=fe.itemSize,oe=e.get(fe);if(oe===void 0)continue;const Pe=oe.buffer,He=oe.type,Ye=oe.bytesPerElement,te=He===s.INT||He===s.UNSIGNED_INT||fe.gpuType===Ff;if(fe.isInterleavedBufferAttribute){const de=fe.data,Se=de.stride,Fe=fe.offset;if(de.isInstancedInterleavedBuffer){for(let Le=0;Le<X.locationSize;Le++)v(X.location+Le,de.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Le=0;Le<X.locationSize;Le++)y(X.location+Le);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let Le=0;Le<X.locationSize;Le++)I(X.location+Le,k/X.locationSize,He,ae,Se*Ye,(Fe+k/X.locationSize*Le)*Ye,te)}else{if(fe.isInstancedBufferAttribute){for(let de=0;de<X.locationSize;de++)v(X.location+de,fe.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<X.locationSize;de++)y(X.location+de);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let de=0;de<X.locationSize;de++)I(X.location+de,k/X.locationSize,He,ae,k*Ye,k/X.locationSize*de*Ye,te)}}else if(ee!==void 0){const ae=ee[q];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(X.location,ae);break;case 3:s.vertexAttrib3fv(X.location,ae);break;case 4:s.vertexAttrib4fv(X.location,ae);break;default:s.vertexAttrib1fv(X.location,ae)}}}}C()}function O(){j();for(const R in r){const z=r[R];for(const $ in z){const K=z[$];for(const re in K)x(K[re].object),delete K[re];delete z[$]}delete r[R]}}function L(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const $ in z){const K=z[$];for(const re in K)x(K[re].object),delete K[re];delete z[$]}delete r[R.id]}function F(R){for(const z in r){const $=r[z];if($[R.id]===void 0)continue;const K=$[R.id];for(const re in K)x(K[re].object),delete K[re];delete $[R.id]}}function j(){E(),d=!0,l!==o&&(l=o,m(l.object))}function E(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:j,resetDefaultState:E,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:C}}function XS(s,e,t){let r;function o(m){r=m}function l(m,x){s.drawArrays(r,m,x),t.update(x,r,1)}function d(m,x,_){_!==0&&(s.drawArraysInstanced(r,m,x,_),t.update(x,r,_))}function f(m,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,_);let M=0;for(let T=0;T<_;T++)M+=x[T];t.update(M,r,1)}function p(m,x,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)d(m[T],x[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,x,0,S,0,_);let T=0;for(let A=0;A<_;A++)T+=x[A]*S[A];t.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function qS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(F){return!(F!==Vi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const j=F===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==mi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==er&&!j)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(vt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const _=t.logarithmicDepthBuffer===!0,S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:D,maxSamples:O,samples:L}}function YS(s){const e=this;let t=null,r=0,o=!1,l=!1;const d=new ss,f=new Et,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||o;return o=S,r=_.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,S){t=x(_,S,0)},this.setState=function(_,S,M){const T=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!o||T===null||T.length===0||l&&!y)l?x(null):m();else{const C=l?0:r,I=C*4;let D=v.clippingState||null;p.value=D,D=x(T,S,I,M);for(let O=0;O!==I;++O)D[O]=t[O];v.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,S,M,T){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=p.value,T!==!0||y===null){const v=M+A*4,C=S.matrixWorldInverse;f.getNormalMatrix(C),(y===null||y.length<v)&&(y=new Float32Array(v));for(let I=0,D=M;I!==A;++I,D+=4)d.copy(_[I]).applyMatrix4(C,f),d.normal.toArray(y,D),y[D+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function $S(s){let e=new WeakMap;function t(d,f){return f===qd?d.mapping=js:f===Yd&&(d.mapping=Oa),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===qd||f===Yd)if(e.has(d)){const p=e.get(d).texture;return t(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new pg(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",o),t(m.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const os=4,u0=[.125,.215,.35,.446,.526,.582],ks=20,KS=256,bo=new ih,d0=new At;let Ad=null,Rd=0,Nd=0,Pd=!1;const ZS=new Z;class f0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:d=256,position:f=ZS}=l;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Rd,Nd),this._renderer.xr.enabled=Pd,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Lr,format:Vi,colorSpace:ka,depthBuffer:!1},o=h0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QS(l)),this._blurMaterial=eM(l,e,t),this._ggxMaterial=JS(l,e,t)}return o}_compileMaterial(e){const t=new Oe(new gi,e);this._renderer.compile(t,bo)}_sceneToCubeUV(e,t,r,o,l){const p=new Kn(90,1,t,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(d0),_.toneMapping=nr,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new Wt,new ji({name:"PMREM.Background",side:oi,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let v=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,v=!0):(y.color.copy(d0),v=!0);for(let I=0;I<6;I++){const D=I%3;D===0?(p.up.set(0,m[I],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[I],l.y,l.z)):D===1?(p.up.set(0,0,m[I]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[I],l.z)):(p.up.set(0,m[I],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[I]));const O=this._cubeSize;Na(o,D*O,I>2?O:0,O,O),_.setRenderTarget(o),v&&_.render(A,p),_.render(e,p)}_.toneMapping=M,_.autoClear=S,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===js||e.mapping===Oa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=m0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p0());const l=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Na(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(d,bo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,d=this._ggxMaterial,f=this._lodMeshes[r];f.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),_=Math.sqrt(m*m-x*x),S=0+m*1.25,M=_*S,{_lodMax:T}=this,A=this._sizeLods[r],y=3*A*(r>T-os?r-T+os:0),v=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=T-t,Na(l,y,v,3*A,2*A),o.setRenderTarget(l),o.render(f,bo),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-r,Na(e,y,v,3*A,2*A),o.setRenderTarget(e),o.render(f,bo)}_blur(e,t,r,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,r,o,"latitudinal",l),this._halfBlur(d,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&zt("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[o];_.material=m;const S=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ks-1),A=l/T,y=isFinite(l)?1+Math.floor(x*A):ks;y>ks&&vt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ks}`);const v=[];let C=0;for(let F=0;F<ks;++F){const j=F/A,E=Math.exp(-j*j/2);v.push(E),F===0?C+=E:F<y&&(C+=2*E)}for(let F=0;F<v.length;F++)v[F]=v[F]/C;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=d==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:I}=this;S.dTheta.value=T,S.mipInt.value=I-r;const D=this._sizeLods[o],O=3*D*(o>I-os?o-I+os:0),L=4*(this._cubeSize-D);Na(t,O,L,3*D,2*D),p.setRenderTarget(t),p.render(_,bo)}}function QS(s){const e=[],t=[],r=[];let o=s;const l=s-os+1+u0.length;for(let d=0;d<l;d++){const f=Math.pow(2,o);e.push(f);let p=1/f;d>s-os?p=u0[d-s+os-1]:d===0&&(p=0),t.push(p);const m=1/(f-2),x=-m,_=1+m,S=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,T=6,A=3,y=2,v=1,C=new Float32Array(A*T*M),I=new Float32Array(y*T*M),D=new Float32Array(v*T*M);for(let L=0;L<M;L++){const F=L%3*2/3-1,j=L>2?0:-1,E=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];C.set(E,A*T*L),I.set(S,y*T*L);const R=[L,L,L,L,L,L];D.set(R,v*T*L)}const O=new gi;O.setAttribute("position",new rr(C,A)),O.setAttribute("uv",new rr(I,y)),O.setAttribute("faceIndex",new rr(D,v)),r.push(new Oe(O,null)),o>os&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function h0(s,e,t){const r=new ir(s,e,t);return r.texture.mapping=_c,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Na(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function JS(s,e,t){return new or({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Sc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function eM(s,e,t){const r=new Float32Array(ks),o=new Z(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function p0(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function m0(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function Sc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===qd||p===Yd,x=p===js||p===Oa;if(m||x){let _=e.get(f);const S=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new f0(s)),_=m?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const M=f.image;return m&&M&&M.height>0||x&&M&&o(M)?(t===null&&(t=new f0(s)),_=m?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function o(f){let p=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&p++;return p===m}function l(f){const p=f.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:d}}function nM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Lo("WebGLRenderer: "+r+" extension not supported."),o}}}function iM(s,e,t,r){const o={},l=new WeakMap;function d(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete o[S.id];const M=l.get(S);M&&(e.remove(M),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(_,S){return o[S.id]===!0||(S.addEventListener("dispose",d),o[S.id]=!0,t.memory.geometries++),S}function p(_){const S=_.attributes;for(const M in S)e.update(S[M],s.ARRAY_BUFFER)}function m(_){const S=[],M=_.index,T=_.attributes.position;let A=0;if(M!==null){const C=M.array;A=M.version;for(let I=0,D=C.length;I<D;I+=3){const O=C[I+0],L=C[I+1],F=C[I+2];S.push(O,L,L,F,F,O)}}else if(T!==void 0){const C=T.array;A=T.version;for(let I=0,D=C.length/3-1;I<D;I+=3){const O=I+0,L=I+1,F=I+2;S.push(O,L,L,F,F,O)}}else return;const y=new(ag(S)?ug:cg)(S,1);y.version=A;const v=l.get(_);v&&e.remove(v),l.set(_,y)}function x(_){const S=l.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&m(_)}else m(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:x}}function rM(s,e,t){let r;function o(S){r=S}let l,d;function f(S){l=S.type,d=S.bytesPerElement}function p(S,M){s.drawElements(r,M,l,S*d),t.update(M,r,1)}function m(S,M,T){T!==0&&(s.drawElementsInstanced(r,M,l,S*d,T),t.update(M,r,T))}function x(S,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,S,0,T);let y=0;for(let v=0;v<T;v++)y+=M[v];t.update(y,r,1)}function _(S,M,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)m(S[v]/d,M[v],A[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,S,0,A,0,T);let v=0;for(let C=0;C<T;C++)v+=M[C]*A[C];t.update(v,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function sM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:zt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function aM(s,e,t){const r=new WeakMap,o=new dn;function l(d,f,p){const m=d.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=x!==void 0?x.length:0;let S=r.get(f);if(S===void 0||S.count!==_){let R=function(){j.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const T=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),y===!0&&(D=3);let O=f.attributes.position.count*D,L=1;O>e.maxTextureSize&&(L=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const F=new Float32Array(O*L*4*_),j=new og(F,O,L,_);j.type=er,j.needsUpdate=!0;const E=D*4;for(let z=0;z<_;z++){const $=v[z],K=C[z],re=I[z],ie=O*L*4*z;for(let ee=0;ee<$.count;ee++){const q=ee*E;T===!0&&(o.fromBufferAttribute($,ee),F[ie+q+0]=o.x,F[ie+q+1]=o.y,F[ie+q+2]=o.z,F[ie+q+3]=0),A===!0&&(o.fromBufferAttribute(K,ee),F[ie+q+4]=o.x,F[ie+q+5]=o.y,F[ie+q+6]=o.z,F[ie+q+7]=0),y===!0&&(o.fromBufferAttribute(re,ee),F[ie+q+8]=o.x,F[ie+q+9]=o.y,F[ie+q+10]=o.z,F[ie+q+11]=re.itemSize===4?o.w:1)}}S={count:_,texture:j,size:new mt(O,L)},r.set(f,S),f.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const A=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function oM(s,e,t,r){let o=new WeakMap;function l(p){const m=r.render.frame,x=p.geometry,_=e.get(p,x);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;o.get(S)!==m&&(S.update(),o.set(S,m))}return _}function d(){o=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:d}}const lM={[W0]:"LINEAR_TONE_MAPPING",[X0]:"REINHARD_TONE_MAPPING",[q0]:"CINEON_TONE_MAPPING",[vc]:"ACES_FILMIC_TONE_MAPPING",[$0]:"AGX_TONE_MAPPING",[K0]:"NEUTRAL_TONE_MAPPING",[Y0]:"CUSTOM_TONE_MAPPING"};function cM(s,e,t,r,o){const l=new ir(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),d=new ir(e,t,{type:Lr,depthBuffer:!1,stencilBuffer:!1}),f=new gi;f.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new pn([0,2,0,0,2,0],2));const p=new K_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Oe(f,p),x=new ih(-1,1,1,-1,0,1);let _=null,S=null,M=!1,T,A=null,y=[],v=!1;this.setSize=function(C,I){l.setSize(C,I),d.setSize(C,I);for(let D=0;D<y.length;D++){const O=y[D];O.setSize&&O.setSize(C,I)}},this.setEffects=function(C){y=C,v=y.length>0&&y[0].isRenderPass===!0;const I=l.width,D=l.height;for(let O=0;O<y.length;O++){const L=y[O];L.setSize&&L.setSize(I,D)}},this.begin=function(C,I){if(M||C.toneMapping===nr&&y.length===0)return!1;if(A=I,I!==null){const D=I.width,O=I.height;(l.width!==D||l.height!==O)&&this.setSize(D,O)}return v===!1&&C.setRenderTarget(l),T=C.toneMapping,C.toneMapping=nr,!0},this.hasRenderPass=function(){return v},this.end=function(C,I){C.toneMapping=T,M=!0;let D=l,O=d;for(let L=0;L<y.length;L++){const F=y[L];if(F.enabled!==!1&&(F.render(C,O,D,I),F.needsSwap!==!1)){const j=D;D=O,O=j}}if(_!==C.outputColorSpace||S!==C.toneMapping){_=C.outputColorSpace,S=C.toneMapping,p.defines={},jt.getTransfer(_)===Xt&&(p.defines.SRGB_TRANSFER="");const L=lM[S];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(A),C.render(m,x),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),d.dispose(),f.dispose(),p.dispose()}}const Sg=new Xn,Df=new Io(1,1),Mg=new og,wg=new C_,bg=new hg,g0=[],x0=[],v0=new Float32Array(16),_0=new Float32Array(9),y0=new Float32Array(4);function za(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=g0[o];if(l===void 0&&(l=new Float32Array(o),g0[o]=l),e!==0){r.toArray(l,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(l,f)}return l}function Sn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Mc(s,e){let t=x0[e];t===void 0&&(t=new Int32Array(e),x0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function uM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2fv(this.addr,e),Mn(t,e)}}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;s.uniform3fv(this.addr,e),Mn(t,e)}}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4fv(this.addr,e),Mn(t,e)}}function pM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;y0.set(r),s.uniformMatrix2fv(this.addr,!1,y0),Mn(t,r)}}function mM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;_0.set(r),s.uniformMatrix3fv(this.addr,!1,_0),Mn(t,r)}}function gM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;v0.set(r),s.uniformMatrix4fv(this.addr,!1,v0),Mn(t,r)}}function xM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2iv(this.addr,e),Mn(t,e)}}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3iv(this.addr,e),Mn(t,e)}}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4iv(this.addr,e),Mn(t,e)}}function SM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2uiv(this.addr,e),Mn(t,e)}}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3uiv(this.addr,e),Mn(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4uiv(this.addr,e),Mn(t,e)}}function EM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Df.compareFunction=t.isReversedDepthBuffer()?Hf:Gf,l=Df):l=Sg,t.setTexture2D(e||l,o)}function TM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||wg,o)}function CM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||bg,o)}function AM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Mg,o)}function RM(s){switch(s){case 5126:return uM;case 35664:return dM;case 35665:return fM;case 35666:return hM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return xM;case 35667:case 35671:return vM;case 35668:case 35672:return _M;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return wM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return CM;case 36289:case 36303:case 36311:case 36292:return AM}}function NM(s,e){s.uniform1fv(this.addr,e)}function PM(s,e){const t=za(e,this.size,2);s.uniform2fv(this.addr,t)}function DM(s,e){const t=za(e,this.size,3);s.uniform3fv(this.addr,t)}function LM(s,e){const t=za(e,this.size,4);s.uniform4fv(this.addr,t)}function IM(s,e){const t=za(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function UM(s,e){const t=za(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function OM(s,e){const t=za(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function FM(s,e){s.uniform1iv(this.addr,e)}function kM(s,e){s.uniform2iv(this.addr,e)}function BM(s,e){s.uniform3iv(this.addr,e)}function zM(s,e){s.uniform4iv(this.addr,e)}function jM(s,e){s.uniform1uiv(this.addr,e)}function VM(s,e){s.uniform2uiv(this.addr,e)}function GM(s,e){s.uniform3uiv(this.addr,e)}function HM(s,e){s.uniform4uiv(this.addr,e)}function WM(s,e,t){const r=this.cache,o=e.length,l=Mc(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=Df:d=Sg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||d,l[f])}function XM(s,e,t){const r=this.cache,o=e.length,l=Mc(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||wg,l[d])}function qM(s,e,t){const r=this.cache,o=e.length,l=Mc(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||bg,l[d])}function YM(s,e,t){const r=this.cache,o=e.length,l=Mc(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||Mg,l[d])}function $M(s){switch(s){case 5126:return NM;case 35664:return PM;case 35665:return DM;case 35666:return LM;case 35674:return IM;case 35675:return UM;case 35676:return OM;case 5124:case 35670:return FM;case 35667:case 35671:return kM;case 35668:case 35672:return BM;case 35669:case 35673:return zM;case 5125:return jM;case 36294:return VM;case 36295:return GM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}class KM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=RM(t.type)}}class ZM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$M(t.type)}}class QM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function S0(s,e){s.seq.push(e),s.map[e.id]=e}function JM(s,e,t){const r=s.name,o=r.length;for(Dd.lastIndex=0;;){const l=Dd.exec(r),d=Dd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===o){S0(t,m===void 0?new KM(f,s,e):new ZM(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new QM(f),S0(t,_)),t=_}}}class uc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),p=e.getUniformLocation(t,f.name);JM(f,p,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,d=t.length;l!==d;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function M0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const ew=37297;let tw=0;function nw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const w0=new Et;function iw(s){jt._getMatrix(w0,jt.workingColorSpace,s);const e=`mat3( ${w0.elements.map(t=>t.toFixed(4))} )`;switch(jt.getTransfer(s)){case pc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function b0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+nw(s.getShaderSource(e),f)}else return l}function rw(s,e){const t=iw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sw={[W0]:"Linear",[X0]:"Reinhard",[q0]:"Cineon",[vc]:"ACESFilmic",[$0]:"AgX",[K0]:"Neutral",[Y0]:"Custom"};function aw(s,e){const t=sw[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tc=new Z;function ow(){jt.getLuminanceCoefficients(tc);const s=tc.x.toFixed(4),e=tc.y.toFixed(4),t=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function cw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function uw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function Ao(s){return s!==""}function E0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(s){return s.replace(dw,hw)}const fw=new Map;function hw(s,e){let t=Ct[e];if(t===void 0){const r=fw.get(e);if(r!==void 0)t=Ct[r],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Lf(t)}const pw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C0(s){return s.replace(pw,mw)}function mw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function A0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const gw={[rc]:"SHADOWMAP_TYPE_PCF",[Co]:"SHADOWMAP_TYPE_VSM"};function xw(s){return gw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vw={[js]:"ENVMAP_TYPE_CUBE",[Oa]:"ENVMAP_TYPE_CUBE",[_c]:"ENVMAP_TYPE_CUBE_UV"};function _w(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":vw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const yw={[Oa]:"ENVMAP_MODE_REFRACTION"};function Sw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":yw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Mw={[H0]:"ENVMAP_BLENDING_MULTIPLY",[o_]:"ENVMAP_BLENDING_MIX",[l_]:"ENVMAP_BLENDING_ADD"};function ww(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Mw[s.combine]||"ENVMAP_BLENDING_NONE"}function bw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Ew(s,e,t,r){const o=s.getContext(),l=t.defines;let d=t.vertexShader,f=t.fragmentShader;const p=xw(t),m=_w(t),x=Sw(t),_=ww(t),S=bw(t),M=lw(t),T=cw(l),A=o.createProgram();let y,v,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Ao).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Ao).join(`
`),v.length>0&&(v+=`
`)):(y=[A0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),v=[A0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?Ct.tonemapping_pars_fragment:"",t.toneMapping!==nr?aw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,rw("linearToOutputTexel",t.outputColorSpace),ow(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ao).join(`
`)),d=Lf(d),d=E0(d,t),d=T0(d,t),f=Lf(f),f=E0(f,t),f=T0(f,t),d=C0(d),f=C0(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===Fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const I=C+y+d,D=C+v+f,O=M0(o,o.VERTEX_SHADER,I),L=M0(o,o.FRAGMENT_SHADER,D);o.attachShader(A,O),o.attachShader(A,L),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(z){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(A)||"",K=o.getShaderInfoLog(O)||"",re=o.getShaderInfoLog(L)||"",ie=$.trim(),ee=K.trim(),q=re.trim();let X=!0,fe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,O,L);else{const ae=b0(o,O,"vertex"),k=b0(o,L,"fragment");zt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ie+`
`+ae+`
`+k)}else ie!==""?vt("WebGLProgram: Program Info Log:",ie):(ee===""||q==="")&&(fe=!1);fe&&(z.diagnostics={runnable:X,programLog:ie,vertexShader:{log:ee,prefix:y},fragmentShader:{log:q,prefix:v}})}o.deleteShader(O),o.deleteShader(L),j=new uc(o,A),E=uw(o,A)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(A,ew)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=O,this.fragmentShader=L,this}let Tw=0;class Cw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Aw(e),t.set(e,r)),r}}class Aw{constructor(e){this.id=Tw++,this.code=e,this.usedTimes=0}}function Rw(s,e,t,r,o,l,d){const f=new Yf,p=new Cw,m=new Set,x=[],_=new Map,S=o.logarithmicDepthBuffer;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return m.add(E),E===0?"uv":`uv${E}`}function y(E,R,z,$,K){const re=$.fog,ie=K.geometry,ee=E.isMeshStandardMaterial?$.environment:null,q=(E.isMeshStandardMaterial?t:e).get(E.envMap||ee),X=q&&q.mapping===_c?q.image.height:null,fe=T[E.type];E.precision!==null&&(M=o.getMaxPrecision(E.precision),M!==E.precision&&vt("WebGLProgram.getParameters:",E.precision,"not supported, using",M,"instead."));const ae=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,k=ae!==void 0?ae.length:0;let oe=0;ie.morphAttributes.position!==void 0&&(oe=1),ie.morphAttributes.normal!==void 0&&(oe=2),ie.morphAttributes.color!==void 0&&(oe=3);let Pe,He,Ye,te;if(fe){const Tt=Ji[fe];Pe=Tt.vertexShader,He=Tt.fragmentShader}else Pe=E.vertexShader,He=E.fragmentShader,p.update(E),Ye=p.getVertexShaderID(E),te=p.getFragmentShaderID(E);const de=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Fe=K.isInstancedMesh===!0,Le=K.isBatchedMesh===!0,_t=!!E.map,qt=!!E.matcap,yt=!!q,Nt=!!E.aoMap,Ut=!!E.lightMap,nt=!!E.bumpMap,lt=!!E.normalMap,P=!!E.displacementMap,Ke=!!E.emissiveMap,ht=!!E.metalnessMap,it=!!E.roughnessMap,Te=E.anisotropy>0,U=E.clearcoat>0,w=E.dispersion>0,H=E.iridescence>0,he=E.sheen>0,ge=E.transmission>0,ue=Te&&!!E.anisotropyMap,Ve=U&&!!E.clearcoatMap,Ce=U&&!!E.clearcoatNormalMap,We=U&&!!E.clearcoatRoughnessMap,at=H&&!!E.iridescenceMap,_e=H&&!!E.iridescenceThicknessMap,Re=he&&!!E.sheenColorMap,ze=he&&!!E.sheenRoughnessMap,ke=!!E.specularMap,Ee=!!E.specularColorMap,pt=!!E.specularIntensityMap,G=ge&&!!E.transmissionMap,Ie=ge&&!!E.thicknessMap,Me=!!E.gradientMap,we=!!E.alphaMap,me=E.alphaTest>0,pe=!!E.alphaHash,xe=!!E.extensions;let ot=nr;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(ot=s.toneMapping);const Dt={shaderID:fe,shaderType:E.type,shaderName:E.name,vertexShader:Pe,fragmentShader:He,defines:E.defines,customVertexShaderID:Ye,customFragmentShaderID:te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:M,batching:Le,batchingColor:Le&&K._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&K.instanceColor!==null,instancingMorph:Fe&&K.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ka,alphaToCoverage:!!E.alphaToCoverage,map:_t,matcap:qt,envMap:yt,envMapMode:yt&&q.mapping,envMapCubeUVHeight:X,aoMap:Nt,lightMap:Ut,bumpMap:nt,normalMap:lt,displacementMap:P,emissiveMap:Ke,normalMapObjectSpace:lt&&E.normalMapType===d_,normalMapTangentSpace:lt&&E.normalMapType===sg,metalnessMap:ht,roughnessMap:it,anisotropy:Te,anisotropyMap:ue,clearcoat:U,clearcoatMap:Ve,clearcoatNormalMap:Ce,clearcoatRoughnessMap:We,dispersion:w,iridescence:H,iridescenceMap:at,iridescenceThicknessMap:_e,sheen:he,sheenColorMap:Re,sheenRoughnessMap:ze,specularMap:ke,specularColorMap:Ee,specularIntensityMap:pt,transmission:ge,transmissionMap:G,thicknessMap:Ie,gradientMap:Me,opaque:E.transparent===!1&&E.blending===La&&E.alphaToCoverage===!1,alphaMap:we,alphaTest:me,alphaHash:pe,combine:E.combine,mapUv:_t&&A(E.map.channel),aoMapUv:Nt&&A(E.aoMap.channel),lightMapUv:Ut&&A(E.lightMap.channel),bumpMapUv:nt&&A(E.bumpMap.channel),normalMapUv:lt&&A(E.normalMap.channel),displacementMapUv:P&&A(E.displacementMap.channel),emissiveMapUv:Ke&&A(E.emissiveMap.channel),metalnessMapUv:ht&&A(E.metalnessMap.channel),roughnessMapUv:it&&A(E.roughnessMap.channel),anisotropyMapUv:ue&&A(E.anisotropyMap.channel),clearcoatMapUv:Ve&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:ze&&A(E.sheenRoughnessMap.channel),specularMapUv:ke&&A(E.specularMap.channel),specularColorMapUv:Ee&&A(E.specularColorMap.channel),specularIntensityMapUv:pt&&A(E.specularIntensityMap.channel),transmissionMapUv:G&&A(E.transmissionMap.channel),thicknessMapUv:Ie&&A(E.thicknessMap.channel),alphaMapUv:we&&A(E.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(lt||Te),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ie.attributes.uv&&(_t||we),fog:!!re,useFog:E.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Se,skinning:K.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:oe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:_t&&E.map.isVideoTexture===!0&&jt.getTransfer(E.map.colorSpace)===Xt,decodeVideoTextureEmissive:Ke&&E.emissiveMap.isVideoTexture===!0&&jt.getTransfer(E.emissiveMap.colorSpace)===Xt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ar,flipSided:E.side===oi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:xe&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&E.extensions.multiDraw===!0||Le)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Dt.vertexUv1s=m.has(1),Dt.vertexUv2s=m.has(2),Dt.vertexUv3s=m.has(3),m.clear(),Dt}function v(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)R.push(z),R.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(C(R,E),I(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function C(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function I(E,R){f.disableAll(),R.instancing&&f.enable(0),R.instancingColor&&f.enable(1),R.instancingMorph&&f.enable(2),R.matcap&&f.enable(3),R.envMap&&f.enable(4),R.normalMapObjectSpace&&f.enable(5),R.normalMapTangentSpace&&f.enable(6),R.clearcoat&&f.enable(7),R.iridescence&&f.enable(8),R.alphaTest&&f.enable(9),R.vertexColors&&f.enable(10),R.vertexAlphas&&f.enable(11),R.vertexUv1s&&f.enable(12),R.vertexUv2s&&f.enable(13),R.vertexUv3s&&f.enable(14),R.vertexTangents&&f.enable(15),R.anisotropy&&f.enable(16),R.alphaHash&&f.enable(17),R.batching&&f.enable(18),R.dispersion&&f.enable(19),R.batchingColor&&f.enable(20),R.gradientMap&&f.enable(21),E.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),E.push(f.mask)}function D(E){const R=T[E.type];let z;if(R){const $=Ji[R];z=z_.clone($.uniforms)}else z=E.uniforms;return z}function O(E,R){let z=_.get(R);return z!==void 0?++z.usedTimes:(z=new Ew(s,R,E,l),x.push(z),_.set(R,z)),z}function L(E){if(--E.usedTimes===0){const R=x.indexOf(E);x[R]=x[x.length-1],x.pop(),_.delete(E.cacheKey),E.destroy()}}function F(E){p.remove(E)}function j(){p.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:O,releaseProgram:L,releaseShaderCache:F,programs:x,dispose:j}}function Nw(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,p){s.get(d)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Pw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function R0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function N0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function d(_,S,M,T,A,y){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:S,material:M,groupOrder:T,renderOrder:_.renderOrder,z:A,group:y},s[e]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=M,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=A,v.group=y),e++,v}function f(_,S,M,T,A,y){const v=d(_,S,M,T,A,y);M.transmission>0?r.push(v):M.transparent===!0?o.push(v):t.push(v)}function p(_,S,M,T,A,y){const v=d(_,S,M,T,A,y);M.transmission>0?r.unshift(v):M.transparent===!0?o.unshift(v):t.unshift(v)}function m(_,S){t.length>1&&t.sort(_||Pw),r.length>1&&r.sort(S||R0),o.length>1&&o.sort(S||R0)}function x(){for(let _=e,S=s.length;_<S;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:p,finish:x,sort:m}}function Dw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new N0,s.set(r,[d])):o>=l.length?(d=new N0,l.push(d)):d=l[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function Lw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new At};break;case"SpotLight":t={position:new Z,direction:new Z,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function Iw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Uw=0;function Ow(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Fw(s){const e=new Lw,t=Iw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const o=new Z,l=new ln,d=new ln;function f(m){let x=0,_=0,S=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let M=0,T=0,A=0,y=0,v=0,C=0,I=0,D=0,O=0,L=0,F=0;m.sort(Ow);for(let E=0,R=m.length;E<R;E++){const z=m[E],$=z.color,K=z.intensity,re=z.distance;let ie=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Fa?ie=z.shadow.map.texture:ie=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)x+=$.r*K,_+=$.g*K,S+=$.b*K;else if(z.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(z.sh.coefficients[ee],K);F++}else if(z.isDirectionalLight){const ee=e.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const q=z.shadow,X=t.get(z);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=ie,r.directionalShadowMatrix[M]=z.shadow.matrix,C++}r.directional[M]=ee,M++}else if(z.isSpotLight){const ee=e.get(z);ee.position.setFromMatrixPosition(z.matrixWorld),ee.color.copy($).multiplyScalar(K),ee.distance=re,ee.coneCos=Math.cos(z.angle),ee.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ee.decay=z.decay,r.spot[A]=ee;const q=z.shadow;if(z.map&&(r.spotLightMap[O]=z.map,O++,q.updateMatrices(z),z.castShadow&&L++),r.spotLightMatrix[A]=q.matrix,z.castShadow){const X=t.get(z);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.spotShadow[A]=X,r.spotShadowMap[A]=ie,D++}A++}else if(z.isRectAreaLight){const ee=e.get(z);ee.color.copy($).multiplyScalar(K),ee.halfWidth.set(z.width*.5,0,0),ee.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=ee,y++}else if(z.isPointLight){const ee=e.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),ee.distance=z.distance,ee.decay=z.decay,z.castShadow){const q=z.shadow,X=t.get(z);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=ie,r.pointShadowMatrix[T]=z.shadow.matrix,I++}r.point[T]=ee,T++}else if(z.isHemisphereLight){const ee=e.get(z);ee.skyColor.copy(z.color).multiplyScalar(K),ee.groundColor.copy(z.groundColor).multiplyScalar(K),r.hemi[v]=ee,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==M||j.pointLength!==T||j.spotLength!==A||j.rectAreaLength!==y||j.hemiLength!==v||j.numDirectionalShadows!==C||j.numPointShadows!==I||j.numSpotShadows!==D||j.numSpotMaps!==O||j.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=D+O-L,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=F,j.directionalLength=M,j.pointLength=T,j.spotLength=A,j.rectAreaLength=y,j.hemiLength=v,j.numDirectionalShadows=C,j.numPointShadows=I,j.numSpotShadows=D,j.numSpotMaps=O,j.numLightProbes=F,r.version=Uw++)}function p(m,x){let _=0,S=0,M=0,T=0,A=0;const y=x.matrixWorldInverse;for(let v=0,C=m.length;v<C;v++){const I=m[v];if(I.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(y),_++}else if(I.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(y),M++}else if(I.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(y),d.identity(),l.copy(I.matrixWorld),l.premultiply(y),d.extractRotation(l),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),T++}else if(I.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(y),S++}else if(I.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(I.matrixWorld),D.direction.transformDirection(y),A++}}}return{setup:f,setupView:p,state:r}}function P0(s){const e=new Fw(s),t=[],r=[];function o(x){m.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function d(x){r.push(x)}function f(){e.setup(t)}function p(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:d}}function kw(s){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let f;return d===void 0?(f=new P0(s),e.set(o,[f])):l>=d.length?(f=new P0(s),d.push(f)):f=d[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Bw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,jw=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Vw=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],D0=new ln,Eo=new Z,Ld=new Z;function Gw(s,e,t){let r=new Kf;const o=new mt,l=new mt,d=new dn,f=new Z_,p=new Q_,m={},x=t.maxTextureSize,_={[ls]:oi,[oi]:ls,[Ar]:Ar},S=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Bw,fragmentShader:zw}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new gi;T.setAttribute("position",new rr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Oe(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rc;let v=this.type;this.render=function(L,F,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;L.type===Of&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=rc);const E=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Pr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=v!==this.type;K&&F.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(ie=>ie.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,ie=L.length;re<ie;re++){const ee=L[re],q=ee.shadow;if(q===void 0){vt("WebGLShadowMap:",ee,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const X=q.getFrameExtents();if(o.multiply(X),l.copy(q.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/X.x),o.x=l.x*X.x,q.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/X.y),o.y=l.y*X.y,q.mapSize.y=l.y)),q.map===null||K===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Co){if(ee.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ir(o.x,o.y,{format:Fa,type:Lr,minFilter:Wn,magFilter:Wn,generateMipmaps:!1}),q.map.texture.name=ee.name+".shadowMap",q.map.depthTexture=new Io(o.x,o.y,er),q.map.depthTexture.name=ee.name+".shadowMapDepth",q.map.depthTexture.format=Ir,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Un,q.map.depthTexture.magFilter=Un}else{ee.isPointLight?(q.map=new pg(o.x),q.map.depthTexture=new $_(o.x,sr)):(q.map=new ir(o.x,o.y),q.map.depthTexture=new Io(o.x,o.y,sr)),q.map.depthTexture.name=ee.name+".shadowMap",q.map.depthTexture.format=Ir;const ae=s.state.buffers.depth.getReversed();this.type===rc?(q.map.depthTexture.compareFunction=ae?Hf:Gf,q.map.depthTexture.minFilter=Wn,q.map.depthTexture.magFilter=Wn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Un,q.map.depthTexture.magFilter=Un)}q.camera.updateProjectionMatrix()}const fe=q.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<fe;ae++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,ae),s.clear();else{ae===0&&(s.setRenderTarget(q.map),s.clear());const k=q.getViewport(ae);d.set(l.x*k.x,l.y*k.y,l.x*k.z,l.y*k.w),$.viewport(d)}if(ee.isPointLight){const k=q.camera,oe=q.matrix,Pe=ee.distance||k.far;Pe!==k.far&&(k.far=Pe,k.updateProjectionMatrix()),Eo.setFromMatrixPosition(ee.matrixWorld),k.position.copy(Eo),Ld.copy(k.position),Ld.add(jw[ae]),k.up.copy(Vw[ae]),k.lookAt(Ld),k.updateMatrixWorld(),oe.makeTranslation(-Eo.x,-Eo.y,-Eo.z),D0.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q._frustum.setFromProjectionMatrix(D0,k.coordinateSystem,k.reversedDepth)}else q.updateMatrices(ee);r=q.getFrustum(),D(F,j,q.camera,ee,this.type)}q.isPointLightShadow!==!0&&this.type===Co&&C(q,j),q.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(E,R,z)};function C(L,F){const j=e.update(A);S.defines.VSM_SAMPLES!==L.blurSamples&&(S.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new ir(o.x,o.y,{format:Fa,type:Lr})),S.uniforms.shadow_pass.value=L.map.depthTexture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(F,null,j,S,A,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(F,null,j,M,A,null)}function I(L,F,j,E){let R=null;const z=j.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)R=z;else if(R=j.isPointLight===!0?p:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=R.uuid,K=F.uuid;let re=m[$];re===void 0&&(re={},m[$]=re);let ie=re[K];ie===void 0&&(ie=R.clone(),re[K]=ie,F.addEventListener("dispose",O)),R=ie}if(R.visible=F.visible,R.wireframe=F.wireframe,E===Co?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:_[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const $=s.properties.get(R);$.light=j}return R}function D(L,F,j,E,R){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===Co)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,L.matrixWorld);const K=e.update(L),re=L.material;if(Array.isArray(re)){const ie=K.groups;for(let ee=0,q=ie.length;ee<q;ee++){const X=ie[ee],fe=re[X.materialIndex];if(fe&&fe.visible){const ae=I(L,fe,E,R);L.onBeforeShadow(s,L,F,j,K,ae,X),s.renderBufferDirect(j,null,K,ae,L,X),L.onAfterShadow(s,L,F,j,K,ae,X)}}}else if(re.visible){const ie=I(L,re,E,R);L.onBeforeShadow(s,L,F,j,K,ie,null),s.renderBufferDirect(j,null,K,ie,L,null),L.onAfterShadow(s,L,F,j,K,ie,null)}}const $=L.children;for(let K=0,re=$.length;K<re;K++)D($[K],F,j,E,R)}function O(L){L.target.removeEventListener("dispose",O);for(const j in m){const E=m[j],R=L.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}const Hw={[zd]:jd,[Vd]:Wd,[Gd]:Xd,[Ua]:Hd,[jd]:zd,[Wd]:Vd,[Xd]:Gd,[Hd]:Ua};function Ww(s,e){function t(){let G=!1;const Ie=new dn;let Me=null;const we=new dn(0,0,0,0);return{setMask:function(me){Me!==me&&!G&&(s.colorMask(me,me,me,me),Me=me)},setLocked:function(me){G=me},setClear:function(me,pe,xe,ot,Dt){Dt===!0&&(me*=ot,pe*=ot,xe*=ot),Ie.set(me,pe,xe,ot),we.equals(Ie)===!1&&(s.clearColor(me,pe,xe,ot),we.copy(Ie))},reset:function(){G=!1,Me=null,we.set(-1,0,0,0)}}}function r(){let G=!1,Ie=!1,Me=null,we=null,me=null;return{setReversed:function(pe){if(Ie!==pe){const xe=e.get("EXT_clip_control");pe?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),Ie=pe;const ot=me;me=null,this.setClear(ot)}},getReversed:function(){return Ie},setTest:function(pe){pe?de(s.DEPTH_TEST):Se(s.DEPTH_TEST)},setMask:function(pe){Me!==pe&&!G&&(s.depthMask(pe),Me=pe)},setFunc:function(pe){if(Ie&&(pe=Hw[pe]),we!==pe){switch(pe){case zd:s.depthFunc(s.NEVER);break;case jd:s.depthFunc(s.ALWAYS);break;case Vd:s.depthFunc(s.LESS);break;case Ua:s.depthFunc(s.LEQUAL);break;case Gd:s.depthFunc(s.EQUAL);break;case Hd:s.depthFunc(s.GEQUAL);break;case Wd:s.depthFunc(s.GREATER);break;case Xd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}we=pe}},setLocked:function(pe){G=pe},setClear:function(pe){me!==pe&&(Ie&&(pe=1-pe),s.clearDepth(pe),me=pe)},reset:function(){G=!1,Me=null,we=null,me=null,Ie=!1}}}function o(){let G=!1,Ie=null,Me=null,we=null,me=null,pe=null,xe=null,ot=null,Dt=null;return{setTest:function(Tt){G||(Tt?de(s.STENCIL_TEST):Se(s.STENCIL_TEST))},setMask:function(Tt){Ie!==Tt&&!G&&(s.stencilMask(Tt),Ie=Tt)},setFunc:function(Tt,On,wn){(Me!==Tt||we!==On||me!==wn)&&(s.stencilFunc(Tt,On,wn),Me=Tt,we=On,me=wn)},setOp:function(Tt,On,wn){(pe!==Tt||xe!==On||ot!==wn)&&(s.stencilOp(Tt,On,wn),pe=Tt,xe=On,ot=wn)},setLocked:function(Tt){G=Tt},setClear:function(Tt){Dt!==Tt&&(s.clearStencil(Tt),Dt=Tt)},reset:function(){G=!1,Ie=null,Me=null,we=null,me=null,pe=null,xe=null,ot=null,Dt=null}}}const l=new t,d=new r,f=new o,p=new WeakMap,m=new WeakMap;let x={},_={},S=new WeakMap,M=[],T=null,A=!1,y=null,v=null,C=null,I=null,D=null,O=null,L=null,F=new At(0,0,0),j=0,E=!1,R=null,z=null,$=null,K=null,re=null;const ie=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,q=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),ee=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ee=q>=2);let fe=null,ae={};const k=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),Pe=new dn().fromArray(k),He=new dn().fromArray(oe);function Ye(G,Ie,Me,we){const me=new Uint8Array(4),pe=s.createTexture();s.bindTexture(G,pe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<Me;xe++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(Ie+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return pe}const te={};te[s.TEXTURE_2D]=Ye(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=Ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=Ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=Ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),f.setClear(0),de(s.DEPTH_TEST),d.setFunc(Ua),nt(!1),lt(Pm),de(s.CULL_FACE),Nt(Pr);function de(G){x[G]!==!0&&(s.enable(G),x[G]=!0)}function Se(G){x[G]!==!1&&(s.disable(G),x[G]=!1)}function Fe(G,Ie){return _[G]!==Ie?(s.bindFramebuffer(G,Ie),_[G]=Ie,G===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ie),G===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Le(G,Ie){let Me=M,we=!1;if(G){Me=S.get(Ie),Me===void 0&&(Me=[],S.set(Ie,Me));const me=G.textures;if(Me.length!==me.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let pe=0,xe=me.length;pe<xe;pe++)Me[pe]=s.COLOR_ATTACHMENT0+pe;Me.length=me.length,we=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,we=!0);we&&s.drawBuffers(Me)}function _t(G){return T!==G?(s.useProgram(G),T=G,!0):!1}const qt={[Fs]:s.FUNC_ADD,[Hv]:s.FUNC_SUBTRACT,[Wv]:s.FUNC_REVERSE_SUBTRACT};qt[Xv]=s.MIN,qt[qv]=s.MAX;const yt={[Yv]:s.ZERO,[$v]:s.ONE,[Kv]:s.SRC_COLOR,[kd]:s.SRC_ALPHA,[n_]:s.SRC_ALPHA_SATURATE,[e_]:s.DST_COLOR,[Qv]:s.DST_ALPHA,[Zv]:s.ONE_MINUS_SRC_COLOR,[Bd]:s.ONE_MINUS_SRC_ALPHA,[t_]:s.ONE_MINUS_DST_COLOR,[Jv]:s.ONE_MINUS_DST_ALPHA,[i_]:s.CONSTANT_COLOR,[r_]:s.ONE_MINUS_CONSTANT_COLOR,[s_]:s.CONSTANT_ALPHA,[a_]:s.ONE_MINUS_CONSTANT_ALPHA};function Nt(G,Ie,Me,we,me,pe,xe,ot,Dt,Tt){if(G===Pr){A===!0&&(Se(s.BLEND),A=!1);return}if(A===!1&&(de(s.BLEND),A=!0),G!==Gv){if(G!==y||Tt!==E){if((v!==Fs||D!==Fs)&&(s.blendEquation(s.FUNC_ADD),v=Fs,D=Fs),Tt)switch(G){case La:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dm:s.blendFunc(s.ONE,s.ONE);break;case Lm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Im:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:zt("WebGLState: Invalid blending: ",G);break}else switch(G){case La:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Lm:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Im:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",G);break}C=null,I=null,O=null,L=null,F.set(0,0,0),j=0,y=G,E=Tt}return}me=me||Ie,pe=pe||Me,xe=xe||we,(Ie!==v||me!==D)&&(s.blendEquationSeparate(qt[Ie],qt[me]),v=Ie,D=me),(Me!==C||we!==I||pe!==O||xe!==L)&&(s.blendFuncSeparate(yt[Me],yt[we],yt[pe],yt[xe]),C=Me,I=we,O=pe,L=xe),(ot.equals(F)===!1||Dt!==j)&&(s.blendColor(ot.r,ot.g,ot.b,Dt),F.copy(ot),j=Dt),y=G,E=!1}function Ut(G,Ie){G.side===Ar?Se(s.CULL_FACE):de(s.CULL_FACE);let Me=G.side===oi;Ie&&(Me=!Me),nt(Me),G.blending===La&&G.transparent===!1?Nt(Pr):Nt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),l.setMask(G.colorWrite);const we=G.stencilWrite;f.setTest(we),we&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ke(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Se(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(G){R!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),R=G)}function lt(G){G!==jv?(de(s.CULL_FACE),G!==z&&(G===Pm?s.cullFace(s.BACK):G===Vv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Se(s.CULL_FACE),z=G}function P(G){G!==$&&(ee&&s.lineWidth(G),$=G)}function Ke(G,Ie,Me){G?(de(s.POLYGON_OFFSET_FILL),(K!==Ie||re!==Me)&&(s.polygonOffset(Ie,Me),K=Ie,re=Me)):Se(s.POLYGON_OFFSET_FILL)}function ht(G){G?de(s.SCISSOR_TEST):Se(s.SCISSOR_TEST)}function it(G){G===void 0&&(G=s.TEXTURE0+ie-1),fe!==G&&(s.activeTexture(G),fe=G)}function Te(G,Ie,Me){Me===void 0&&(fe===null?Me=s.TEXTURE0+ie-1:Me=fe);let we=ae[Me];we===void 0&&(we={type:void 0,texture:void 0},ae[Me]=we),(we.type!==G||we.texture!==Ie)&&(fe!==Me&&(s.activeTexture(Me),fe=Me),s.bindTexture(G,Ie||te[G]),we.type=G,we.texture=Ie)}function U(){const G=ae[fe];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function he(){try{s.texSubImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function ge(){try{s.texSubImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function Ve(){try{s.compressedTexSubImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function Ce(){try{s.texStorage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function We(){try{s.texStorage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function at(){try{s.texImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function _e(){try{s.texImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function Re(G){Pe.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Pe.copy(G))}function ze(G){He.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),He.copy(G))}function ke(G,Ie){let Me=m.get(Ie);Me===void 0&&(Me=new WeakMap,m.set(Ie,Me));let we=Me.get(G);we===void 0&&(we=s.getUniformBlockIndex(Ie,G.name),Me.set(G,we))}function Ee(G,Ie){const we=m.get(Ie).get(G);p.get(Ie)!==we&&(s.uniformBlockBinding(Ie,we,G.__bindingPointIndex),p.set(Ie,we))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},fe=null,ae={},_={},S=new WeakMap,M=[],T=null,A=!1,y=null,v=null,C=null,I=null,D=null,O=null,L=null,F=new At(0,0,0),j=0,E=!1,R=null,z=null,$=null,K=null,re=null,Pe.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),f.reset()}return{buffers:{color:l,depth:d,stencil:f},enable:de,disable:Se,bindFramebuffer:Fe,drawBuffers:Le,useProgram:_t,setBlending:Nt,setMaterial:Ut,setFlipSided:nt,setCullFace:lt,setLineWidth:P,setPolygonOffset:Ke,setScissorTest:ht,activeTexture:it,bindTexture:Te,unbindTexture:U,compressedTexImage2D:w,compressedTexImage3D:H,texImage2D:at,texImage3D:_e,updateUBOMapping:ke,uniformBlockBinding:Ee,texStorage2D:Ce,texStorage3D:We,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:Ve,scissor:Re,viewport:ze,reset:pt}}function Xw(s,e,t,r,o,l,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new mt,x=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,w){return M?new OffscreenCanvas(U,w):Do("canvas")}function A(U,w,H){let he=1;const ge=Te(U);if((ge.width>H||ge.height>H)&&(he=H/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ue=Math.floor(he*ge.width),Ve=Math.floor(he*ge.height);_===void 0&&(_=T(ue,Ve));const Ce=w?T(ue,Ve):_;return Ce.width=ue,Ce.height=Ve,Ce.getContext("2d").drawImage(U,0,0,ue,Ve),vt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+Ve+")."),Ce}else return"data"in U&&vt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),U;return U}function y(U){return U.generateMipmaps}function v(U){s.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(U,w,H,he,ge=!1){if(U!==null){if(s[U]!==void 0)return s[U];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ue=w;if(w===s.RED&&(H===s.FLOAT&&(ue=s.R32F),H===s.HALF_FLOAT&&(ue=s.R16F),H===s.UNSIGNED_BYTE&&(ue=s.R8)),w===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(ue=s.R8UI),H===s.UNSIGNED_SHORT&&(ue=s.R16UI),H===s.UNSIGNED_INT&&(ue=s.R32UI),H===s.BYTE&&(ue=s.R8I),H===s.SHORT&&(ue=s.R16I),H===s.INT&&(ue=s.R32I)),w===s.RG&&(H===s.FLOAT&&(ue=s.RG32F),H===s.HALF_FLOAT&&(ue=s.RG16F),H===s.UNSIGNED_BYTE&&(ue=s.RG8)),w===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(ue=s.RG8UI),H===s.UNSIGNED_SHORT&&(ue=s.RG16UI),H===s.UNSIGNED_INT&&(ue=s.RG32UI),H===s.BYTE&&(ue=s.RG8I),H===s.SHORT&&(ue=s.RG16I),H===s.INT&&(ue=s.RG32I)),w===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),H===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),H===s.UNSIGNED_INT&&(ue=s.RGB32UI),H===s.BYTE&&(ue=s.RGB8I),H===s.SHORT&&(ue=s.RGB16I),H===s.INT&&(ue=s.RGB32I)),w===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),H===s.UNSIGNED_INT&&(ue=s.RGBA32UI),H===s.BYTE&&(ue=s.RGBA8I),H===s.SHORT&&(ue=s.RGBA16I),H===s.INT&&(ue=s.RGBA32I)),w===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),w===s.RGBA){const Ve=ge?pc:jt.getTransfer(he);H===s.FLOAT&&(ue=s.RGBA32F),H===s.HALF_FLOAT&&(ue=s.RGBA16F),H===s.UNSIGNED_BYTE&&(ue=Ve===Xt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function D(U,w){let H;return U?w===null||w===sr||w===Po?H=s.DEPTH24_STENCIL8:w===er?H=s.DEPTH32F_STENCIL8:w===No&&(H=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===sr||w===Po?H=s.DEPTH_COMPONENT24:w===er?H=s.DEPTH_COMPONENT32F:w===No&&(H=s.DEPTH_COMPONENT16),H}function O(U,w){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Un&&U.minFilter!==Wn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function L(U){const w=U.target;w.removeEventListener("dispose",L),j(w),w.isVideoTexture&&x.delete(w)}function F(U){const w=U.target;w.removeEventListener("dispose",F),R(w)}function j(U){const w=r.get(U);if(w.__webglInit===void 0)return;const H=U.source,he=S.get(H);if(he){const ge=he[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&E(U),Object.keys(he).length===0&&S.delete(H)}r.remove(U)}function E(U){const w=r.get(U);s.deleteTexture(w.__webglTexture);const H=U.source,he=S.get(H);delete he[w.__cacheKey],d.memory.textures--}function R(U){const w=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let ge=0;ge<w.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(w.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)s.deleteFramebuffer(w.__webglFramebuffer[he]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=U.textures;for(let he=0,ge=H.length;he<ge;he++){const ue=r.get(H[he]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),d.memory.textures--),r.remove(H[he])}r.remove(U)}let z=0;function $(){z=0}function K(){const U=z;return U>=o.maxTextures&&vt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),z+=1,U}function re(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function ie(U,w){const H=r.get(U);if(U.isVideoTexture&&ht(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&H.__version!==U.version){const he=U.image;if(he===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(H,U,w);return}}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+w)}function ee(U,w){const H=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){te(H,U,w);return}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+w)}function q(U,w){const H=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){te(H,U,w);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+w)}function X(U,w){const H=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&H.__version!==U.version){de(H,U,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+w)}const fe={[$d]:s.REPEAT,[Rr]:s.CLAMP_TO_EDGE,[Kd]:s.MIRRORED_REPEAT},ae={[Un]:s.NEAREST,[c_]:s.NEAREST_MIPMAP_NEAREST,[Ol]:s.NEAREST_MIPMAP_LINEAR,[Wn]:s.LINEAR,[nd]:s.LINEAR_MIPMAP_NEAREST,[Bs]:s.LINEAR_MIPMAP_LINEAR},k={[f_]:s.NEVER,[x_]:s.ALWAYS,[h_]:s.LESS,[Gf]:s.LEQUAL,[p_]:s.EQUAL,[Hf]:s.GEQUAL,[m_]:s.GREATER,[g_]:s.NOTEQUAL};function oe(U,w){if(w.type===er&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Wn||w.magFilter===nd||w.magFilter===Ol||w.magFilter===Bs||w.minFilter===Wn||w.minFilter===nd||w.minFilter===Ol||w.minFilter===Bs)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,fe[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,fe[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,fe[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,ae[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,ae[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,k[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Un||w.minFilter!==Ol&&w.minFilter!==Bs||w.type===er&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Pe(U,w){let H=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",L));const he=w.source;let ge=S.get(he);ge===void 0&&(ge={},S.set(he,ge));const ue=re(w);if(ue!==U.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,H=!0),ge[ue].usedTimes++;const Ve=ge[U.__cacheKey];Ve!==void 0&&(ge[U.__cacheKey].usedTimes--,Ve.usedTimes===0&&E(w)),U.__cacheKey=ue,U.__webglTexture=ge[ue].texture}return H}function He(U,w,H){return Math.floor(Math.floor(U/H)/w)}function Ye(U,w,H,he){const ue=U.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,H,he,w.data);else{ue.sort((_e,Re)=>_e.start-Re.start);let Ve=0;for(let _e=1;_e<ue.length;_e++){const Re=ue[Ve],ze=ue[_e],ke=Re.start+Re.count,Ee=He(ze.start,w.width,4),pt=He(Re.start,w.width,4);ze.start<=ke+1&&Ee===pt&&He(ze.start+ze.count-1,w.width,4)===Ee?Re.count=Math.max(Re.count,ze.start+ze.count-Re.start):(++Ve,ue[Ve]=ze)}ue.length=Ve+1;const Ce=s.getParameter(s.UNPACK_ROW_LENGTH),We=s.getParameter(s.UNPACK_SKIP_PIXELS),at=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let _e=0,Re=ue.length;_e<Re;_e++){const ze=ue[_e],ke=Math.floor(ze.start/4),Ee=Math.ceil(ze.count/4),pt=ke%w.width,G=Math.floor(ke/w.width),Ie=Ee,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,pt,G,Ie,Me,H,he,w.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ce),s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,at)}}function te(U,w,H){let he=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=s.TEXTURE_3D);const ge=Pe(U,w),ue=w.source;t.bindTexture(he,U.__webglTexture,s.TEXTURE0+H);const Ve=r.get(ue);if(ue.version!==Ve.__version||ge===!0){t.activeTexture(s.TEXTURE0+H);const Ce=jt.getPrimaries(jt.workingColorSpace),We=w.colorSpace===as?null:jt.getPrimaries(w.colorSpace),at=w.colorSpace===as||Ce===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let _e=A(w.image,!1,o.maxTextureSize);_e=it(w,_e);const Re=l.convert(w.format,w.colorSpace),ze=l.convert(w.type);let ke=I(w.internalFormat,Re,ze,w.colorSpace,w.isVideoTexture);oe(he,w);let Ee;const pt=w.mipmaps,G=w.isVideoTexture!==!0,Ie=Ve.__version===void 0||ge===!0,Me=ue.dataReady,we=O(w,_e);if(w.isDepthTexture)ke=D(w.format===zs,w.type),Ie&&(G?t.texStorage2D(s.TEXTURE_2D,1,ke,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,ke,_e.width,_e.height,0,Re,ze,null));else if(w.isDataTexture)if(pt.length>0){G&&Ie&&t.texStorage2D(s.TEXTURE_2D,we,ke,pt[0].width,pt[0].height);for(let me=0,pe=pt.length;me<pe;me++)Ee=pt[me],G?Me&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ee.width,Ee.height,Re,ze,Ee.data):t.texImage2D(s.TEXTURE_2D,me,ke,Ee.width,Ee.height,0,Re,ze,Ee.data);w.generateMipmaps=!1}else G?(Ie&&t.texStorage2D(s.TEXTURE_2D,we,ke,_e.width,_e.height),Me&&Ye(w,_e,Re,ze)):t.texImage2D(s.TEXTURE_2D,0,ke,_e.width,_e.height,0,Re,ze,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,ke,pt[0].width,pt[0].height,_e.depth);for(let me=0,pe=pt.length;me<pe;me++)if(Ee=pt[me],w.format!==Vi)if(Re!==null)if(G){if(Me)if(w.layerUpdates.size>0){const xe=c0(Ee.width,Ee.height,w.format,w.type);for(const ot of w.layerUpdates){const Dt=Ee.data.subarray(ot*xe/Ee.data.BYTES_PER_ELEMENT,(ot+1)*xe/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,ot,Ee.width,Ee.height,1,Re,Dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ee.width,Ee.height,_e.depth,Re,Ee.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,ke,Ee.width,Ee.height,_e.depth,0,Ee.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Me&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ee.width,Ee.height,_e.depth,Re,ze,Ee.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,ke,Ee.width,Ee.height,_e.depth,0,Re,ze,Ee.data)}else{G&&Ie&&t.texStorage2D(s.TEXTURE_2D,we,ke,pt[0].width,pt[0].height);for(let me=0,pe=pt.length;me<pe;me++)Ee=pt[me],w.format!==Vi?Re!==null?G?Me&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ee.width,Ee.height,Re,Ee.data):t.compressedTexImage2D(s.TEXTURE_2D,me,ke,Ee.width,Ee.height,0,Ee.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Me&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ee.width,Ee.height,Re,ze,Ee.data):t.texImage2D(s.TEXTURE_2D,me,ke,Ee.width,Ee.height,0,Re,ze,Ee.data)}else if(w.isDataArrayTexture)if(G){if(Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,we,ke,_e.width,_e.height,_e.depth),Me)if(w.layerUpdates.size>0){const me=c0(_e.width,_e.height,w.format,w.type);for(const pe of w.layerUpdates){const xe=_e.data.subarray(pe*me/_e.data.BYTES_PER_ELEMENT,(pe+1)*me/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,_e.width,_e.height,1,Re,ze,xe)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Re,ze,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,_e.width,_e.height,_e.depth,0,Re,ze,_e.data);else if(w.isData3DTexture)G?(Ie&&t.texStorage3D(s.TEXTURE_3D,we,ke,_e.width,_e.height,_e.depth),Me&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Re,ze,_e.data)):t.texImage3D(s.TEXTURE_3D,0,ke,_e.width,_e.height,_e.depth,0,Re,ze,_e.data);else if(w.isFramebufferTexture){if(Ie)if(G)t.texStorage2D(s.TEXTURE_2D,we,ke,_e.width,_e.height);else{let me=_e.width,pe=_e.height;for(let xe=0;xe<we;xe++)t.texImage2D(s.TEXTURE_2D,xe,ke,me,pe,0,Re,ze,null),me>>=1,pe>>=1}}else if(pt.length>0){if(G&&Ie){const me=Te(pt[0]);t.texStorage2D(s.TEXTURE_2D,we,ke,me.width,me.height)}for(let me=0,pe=pt.length;me<pe;me++)Ee=pt[me],G?Me&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Re,ze,Ee):t.texImage2D(s.TEXTURE_2D,me,ke,Re,ze,Ee);w.generateMipmaps=!1}else if(G){if(Ie){const me=Te(_e);t.texStorage2D(s.TEXTURE_2D,we,ke,me.width,me.height)}Me&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,ze,_e)}else t.texImage2D(s.TEXTURE_2D,0,ke,Re,ze,_e);y(w)&&v(he),Ve.__version=ue.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function de(U,w,H){if(w.image.length!==6)return;const he=Pe(U,w),ge=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+H);const ue=r.get(ge);if(ge.version!==ue.__version||he===!0){t.activeTexture(s.TEXTURE0+H);const Ve=jt.getPrimaries(jt.workingColorSpace),Ce=w.colorSpace===as?null:jt.getPrimaries(w.colorSpace),We=w.colorSpace===as||Ve===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const at=w.isCompressedTexture||w.image[0].isCompressedTexture,_e=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let pe=0;pe<6;pe++)!at&&!_e?Re[pe]=A(w.image[pe],!0,o.maxCubemapSize):Re[pe]=_e?w.image[pe].image:w.image[pe],Re[pe]=it(w,Re[pe]);const ze=Re[0],ke=l.convert(w.format,w.colorSpace),Ee=l.convert(w.type),pt=I(w.internalFormat,ke,Ee,w.colorSpace),G=w.isVideoTexture!==!0,Ie=ue.__version===void 0||he===!0,Me=ge.dataReady;let we=O(w,ze);oe(s.TEXTURE_CUBE_MAP,w);let me;if(at){G&&Ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,we,pt,ze.width,ze.height);for(let pe=0;pe<6;pe++){me=Re[pe].mipmaps;for(let xe=0;xe<me.length;xe++){const ot=me[xe];w.format!==Vi?ke!==null?G?Me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe,0,0,ot.width,ot.height,ke,ot.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe,pt,ot.width,ot.height,0,ot.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe,0,0,ot.width,ot.height,ke,Ee,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe,pt,ot.width,ot.height,0,ke,Ee,ot.data)}}}else{if(me=w.mipmaps,G&&Ie){me.length>0&&we++;const pe=Te(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,we,pt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(_e){G?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Re[pe].width,Re[pe].height,ke,Ee,Re[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,pt,Re[pe].width,Re[pe].height,0,ke,Ee,Re[pe].data);for(let xe=0;xe<me.length;xe++){const Dt=me[xe].image[pe].image;G?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe+1,0,0,Dt.width,Dt.height,ke,Ee,Dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe+1,pt,Dt.width,Dt.height,0,ke,Ee,Dt.data)}}else{G?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ke,Ee,Re[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,pt,ke,Ee,Re[pe]);for(let xe=0;xe<me.length;xe++){const ot=me[xe];G?Me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe+1,0,0,ke,Ee,ot.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe+1,pt,ke,Ee,ot.image[pe])}}}y(w)&&v(s.TEXTURE_CUBE_MAP),ue.__version=ge.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Se(U,w,H,he,ge,ue){const Ve=l.convert(H.format,H.colorSpace),Ce=l.convert(H.type),We=I(H.internalFormat,Ve,Ce,H.colorSpace),at=r.get(w),_e=r.get(H);if(_e.__renderTarget=w,!at.__hasExternalTextures){const Re=Math.max(1,w.width>>ue),ze=Math.max(1,w.height>>ue);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,We,Re,ze,w.depth,0,Ve,Ce,null):t.texImage2D(ge,ue,We,Re,ze,0,Ve,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Ke(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,_e.__webglTexture,0,P(w)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,_e.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(U,w,H){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer){const he=w.depthTexture,ge=he&&he.isDepthTexture?he.type:null,ue=D(w.stencilBuffer,ge),Ve=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ke(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(w),ue,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(w),ue,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ue,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ve,s.RENDERBUFFER,U)}else{const he=w.textures;for(let ge=0;ge<he.length;ge++){const ue=he[ge],Ve=l.convert(ue.format,ue.colorSpace),Ce=l.convert(ue.type),We=I(ue.internalFormat,Ve,Ce,ue.colorSpace);Ke(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(w),We,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(w),We,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,We,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(U,w,H){const he=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(w.depthTexture);if(ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,w.depthTexture.addEventListener("dispose",L)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),oe(s.TEXTURE_CUBE_MAP,w.depthTexture);const at=l.convert(w.depthTexture.format),_e=l.convert(w.depthTexture.type);let Re;w.depthTexture.format===Ir?Re=s.DEPTH_COMPONENT24:w.depthTexture.format===zs&&(Re=s.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,Re,w.width,w.height,0,at,_e,null)}}else ie(w.depthTexture,0);const ue=ge.__webglTexture,Ve=P(w),Ce=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,We=w.depthTexture.format===zs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ir)Ke(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,Ce,ue,0,Ve):s.framebufferTexture2D(s.FRAMEBUFFER,We,Ce,ue,0);else if(w.depthTexture.format===zs)Ke(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,Ce,ue,0,Ve):s.framebufferTexture2D(s.FRAMEBUFFER,We,Ce,ue,0);else throw new Error("Unknown depthTexture format")}function _t(U){const w=r.get(U),H=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const he=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=he}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(H)for(let he=0;he<6;he++)Le(w.__webglFramebuffer[he],U,he);else{const he=U.texture.mipmaps;he&&he.length>0?Le(w.__webglFramebuffer[0],U,0):Le(w.__webglFramebuffer,U,0)}else if(H){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=s.createRenderbuffer(),Fe(w.__webglDepthbuffer[he],U,!1);else{const ge=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ue)}}else{const he=U.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Fe(w.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function qt(U,w,H){const he=r.get(U);w!==void 0&&Se(he.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&_t(U)}function yt(U){const w=U.texture,H=r.get(U),he=r.get(w);U.addEventListener("dispose",F);const ge=U.textures,ue=U.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=w.version,d.memory.textures++),ue){H.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[Ce]=[];for(let We=0;We<w.mipmaps.length;We++)H.__webglFramebuffer[Ce][We]=s.createFramebuffer()}else H.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)H.__webglFramebuffer[Ce]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Ve)for(let Ce=0,We=ge.length;Ce<We;Ce++){const at=r.get(ge[Ce]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),d.memory.textures++)}if(U.samples>0&&Ke(U)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ge.length;Ce++){const We=ge[Ce];H.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[Ce]);const at=l.convert(We.format,We.colorSpace),_e=l.convert(We.type),Re=I(We.internalFormat,at,_e,We.colorSpace,U.isXRRenderTarget===!0),ze=P(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,Re,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,H.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(H.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),oe(s.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let We=0;We<w.mipmaps.length;We++)Se(H.__webglFramebuffer[Ce][We],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,We);else Se(H.__webglFramebuffer[Ce],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(w)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Ce=0,We=ge.length;Ce<We;Ce++){const at=ge[Ce],_e=r.get(at);let Re=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,_e.__webglTexture),oe(Re,at),Se(H.__webglFramebuffer,U,at,s.COLOR_ATTACHMENT0+Ce,Re,0),y(at)&&v(Re)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,he.__webglTexture),oe(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let We=0;We<w.mipmaps.length;We++)Se(H.__webglFramebuffer[We],U,w,s.COLOR_ATTACHMENT0,Ce,We);else Se(H.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,Ce,0);y(w)&&v(Ce),t.unbindTexture()}U.depthBuffer&&_t(U)}function Nt(U){const w=U.textures;for(let H=0,he=w.length;H<he;H++){const ge=w[H];if(y(ge)){const ue=C(U),Ve=r.get(ge).__webglTexture;t.bindTexture(ue,Ve),v(ue),t.unbindTexture()}}}const Ut=[],nt=[];function lt(U){if(U.samples>0){if(Ke(U)===!1){const w=U.textures,H=U.width,he=U.height;let ge=s.COLOR_BUFFER_BIT;const ue=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ve=r.get(U),Ce=w.length>1;if(Ce)for(let at=0;at<w.length;at++)t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const We=U.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let at=0;at<w.length;at++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[at]);const _e=r.get(w[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,H,he,0,0,H,he,ge,s.NEAREST),p===!0&&(Ut.length=0,nt.length=0,Ut.push(s.COLOR_ATTACHMENT0+at),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ut.push(ue),nt.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,nt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let at=0;at<w.length;at++){t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,Ve.__webglColorRenderbuffer[at]);const _e=r.get(w[at]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ve.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,_e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function P(U){return Math.min(o.maxSamples,U.samples)}function Ke(U){const w=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ht(U){const w=d.render.frame;x.get(U)!==w&&(x.set(U,w),U.update())}function it(U,w){const H=U.colorSpace,he=U.format,ge=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||H!==ka&&H!==as&&(jt.getTransfer(H)===Xt?(he!==Vi||ge!==mi)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",H)),w}function Te(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.setTexture2D=ie,this.setTexture2DArray=ee,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=qt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qw(s,e){function t(r,o=as){let l;const d=jt.getTransfer(o);if(r===mi)return s.UNSIGNED_BYTE;if(r===kf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Bf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===eg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===tg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Q0)return s.BYTE;if(r===J0)return s.SHORT;if(r===No)return s.UNSIGNED_SHORT;if(r===Ff)return s.INT;if(r===sr)return s.UNSIGNED_INT;if(r===er)return s.FLOAT;if(r===Lr)return s.HALF_FLOAT;if(r===ng)return s.ALPHA;if(r===ig)return s.RGB;if(r===Vi)return s.RGBA;if(r===Ir)return s.DEPTH_COMPONENT;if(r===zs)return s.DEPTH_STENCIL;if(r===rg)return s.RED;if(r===zf)return s.RED_INTEGER;if(r===Fa)return s.RG;if(r===jf)return s.RG_INTEGER;if(r===Vf)return s.RGBA_INTEGER;if(r===sc||r===ac||r===oc||r===lc)if(d===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===sc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ac)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===oc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===sc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ac)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===oc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zd||r===Qd||r===Jd||r===ef)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ef)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===tf||r===nf)return d===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===rf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===sf)return l.COMPRESSED_R11_EAC;if(r===af)return l.COMPRESSED_SIGNED_R11_EAC;if(r===of)return l.COMPRESSED_RG11_EAC;if(r===lf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===cf||r===uf||r===df||r===ff||r===hf||r===pf||r===mf||r===gf||r===xf||r===vf||r===_f||r===yf||r===Sf||r===Mf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===cf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===df)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ff)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_f)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wf||r===bf||r===Ef)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===wf)return d===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ef)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tf||r===Cf||r===Af||r===Rf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Tf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Cf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Af)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Po?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Yw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$w=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Kw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new gg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new or({vertexShader:Yw,fragmentShader:$w,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Hn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zw extends Gs{constructor(e,t){super();const r=this;let o=null,l=1,d=null,f="local-floor",p=1,m=null,x=null,_=null,S=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",y=new Kw,v={},C=t.getContextAttributes();let I=null,D=null;const O=[],L=[],F=new mt;let j=null;const E=new Kn;E.viewport=new dn;const R=new Kn;R.viewport=new dn;const z=[E,R],$=new s1;let K=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=O[te];return de===void 0&&(de=new bd,O[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=O[te];return de===void 0&&(de=new bd,O[te]=de),de.getGripSpace()},this.getHand=function(te){let de=O[te];return de===void 0&&(de=new bd,O[te]=de),de.getHandSpace()};function ie(te){const de=L.indexOf(te.inputSource);if(de===-1)return;const Se=O[de];Se!==void 0&&(Se.update(te.inputSource,te.frame,m||d),Se.dispatchEvent({type:te.type,data:te.inputSource}))}function ee(){o.removeEventListener("select",ie),o.removeEventListener("selectstart",ie),o.removeEventListener("selectend",ie),o.removeEventListener("squeeze",ie),o.removeEventListener("squeezestart",ie),o.removeEventListener("squeezeend",ie),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",q);for(let te=0;te<O.length;te++){const de=L[te];de!==null&&(L[te]=null,O[te].disconnect(de))}K=null,re=null,y.reset();for(const te in v)delete v[te];e.setRenderTarget(I),M=null,S=null,_=null,o=null,D=null,Ye.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&A&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",ie),o.addEventListener("selectstart",ie),o.addEventListener("selectend",ie),o.addEventListener("squeeze",ie),o.addEventListener("squeezestart",ie),o.addEventListener("squeezeend",ie),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",q),C.xrCompatible!==!0&&await t.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Fe=null,Le=null;C.depth&&(Le=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=C.stencil?zs:Ir,Fe=C.stencil?Po:sr);const _t={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:l};_=this.getBinding(),S=_.createProjectionLayer(_t),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new ir(S.textureWidth,S.textureHeight,{format:Vi,type:mi,depthTexture:new Io(S.textureWidth,S.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Se={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Se),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new ir(M.framebufferWidth,M.framebufferHeight,{format:Vi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(f),Ye.setContext(o),Ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(te){for(let de=0;de<te.removed.length;de++){const Se=te.removed[de],Fe=L.indexOf(Se);Fe>=0&&(L[Fe]=null,O[Fe].disconnect(Se))}for(let de=0;de<te.added.length;de++){const Se=te.added[de];let Fe=L.indexOf(Se);if(Fe===-1){for(let _t=0;_t<O.length;_t++)if(_t>=L.length){L.push(Se),Fe=_t;break}else if(L[_t]===null){L[_t]=Se,Fe=_t;break}if(Fe===-1)break}const Le=O[Fe];Le&&Le.connect(Se)}}const X=new Z,fe=new Z;function ae(te,de,Se){X.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(Se.matrixWorld);const Fe=X.distanceTo(fe),Le=de.projectionMatrix.elements,_t=Se.projectionMatrix.elements,qt=Le[14]/(Le[10]-1),yt=Le[14]/(Le[10]+1),Nt=(Le[9]+1)/Le[5],Ut=(Le[9]-1)/Le[5],nt=(Le[8]-1)/Le[0],lt=(_t[8]+1)/_t[0],P=qt*nt,Ke=qt*lt,ht=Fe/(-nt+lt),it=ht*-nt;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(it),te.translateZ(ht),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Le[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Te=qt+ht,U=yt+ht,w=P-it,H=Ke+(Fe-it),he=Nt*yt/U*Te,ge=Ut*yt/U*Te;te.projectionMatrix.makePerspective(w,H,he,ge,Te,U),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function k(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let de=te.near,Se=te.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Se=y.depthFar)),$.near=R.near=E.near=de,$.far=R.far=E.far=Se,(K!==$.near||re!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),K=$.near,re=$.far),$.layers.mask=te.layers.mask|6,E.layers.mask=$.layers.mask&3,R.layers.mask=$.layers.mask&5;const Fe=te.parent,Le=$.cameras;k($,Fe);for(let _t=0;_t<Le.length;_t++)k(Le[_t],Fe);Le.length===2?ae($,E,R):$.projectionMatrix.copy(E.projectionMatrix),oe(te,$,Fe)};function oe(te,de,Se){Se===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Se.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=gc*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(te){p=te,S!==null&&(S.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(te){return v[te]};let Pe=null;function He(te,de){if(x=de.getViewerPose(m||d),T=de,x!==null){const Se=x.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Fe=!1;Se.length!==$.cameras.length&&($.cameras.length=0,Fe=!0);for(let yt=0;yt<Se.length;yt++){const Nt=Se[yt];let Ut=null;if(M!==null)Ut=M.getViewport(Nt);else{const lt=_.getViewSubImage(S,Nt);Ut=lt.viewport,yt===0&&(e.setRenderTargetTextures(D,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(D))}let nt=z[yt];nt===void 0&&(nt=new Kn,nt.layers.enable(yt),nt.viewport=new dn,z[yt]=nt),nt.matrix.fromArray(Nt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Nt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),yt===0&&($.matrix.copy(nt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Fe===!0&&$.cameras.push(nt)}const Le=o.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){_=r.getBinding();const yt=_.getDepthInformation(Se[0]);yt&&yt.isValid&&yt.texture&&y.init(yt,o.renderState)}if(Le&&Le.includes("camera-access")&&A){e.state.unbindTexture(),_=r.getBinding();for(let yt=0;yt<Se.length;yt++){const Nt=Se[yt].camera;if(Nt){let Ut=v[Nt];Ut||(Ut=new gg,v[Nt]=Ut);const nt=_.getCameraImage(Nt);Ut.sourceTexture=nt}}}}for(let Se=0;Se<O.length;Se++){const Fe=L[Se],Le=O[Se];Fe!==null&&Le!==void 0&&Le.update(Fe,de,m||d)}Pe&&Pe(te,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ye=new yg;Ye.setAnimationLoop(He),this.setAnimationLoop=function(te){Pe=te},this.dispose=function(){}}}const Os=new ar,Qw=new ln;function Jw(s,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,dg(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,C,I,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),_(y,v)):v.isMeshPhongMaterial?(l(y,v),x(y,v)):v.isMeshStandardMaterial?(l(y,v),S(y,v),v.isMeshPhysicalMaterial&&M(y,v,D)):v.isMeshMatcapMaterial?(l(y,v),T(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),A(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?p(y,v,C,I):v.isSpriteMaterial?m(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===oi&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===oi&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const C=e.get(v),I=C.envMap,D=C.envMapRotation;I&&(y.envMap.value=I,Os.copy(D),Os.x*=-1,Os.y*=-1,Os.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),y.envMapRotation.value.setFromMatrix4(Qw.makeRotationFromEuler(Os)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function p(y,v,C,I){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*C,y.scale.value=I*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function m(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,C){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===oi&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function A(y,v){const C=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function eb(s,e,t,r){let o={},l={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,I){const D=I.program;r.uniformBlockBinding(C,D)}function m(C,I){let D=o[C.id];D===void 0&&(T(C),D=x(C),o[C.id]=D,C.addEventListener("dispose",y));const O=I.program;r.updateUBOMapping(C,O);const L=e.render.frame;l[C.id]!==L&&(S(C),l[C.id]=L)}function x(C){const I=_();C.__bindingPointIndex=I;const D=s.createBuffer(),O=C.__size,L=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,O,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,D),D}function _(){for(let C=0;C<f;C++)if(d.indexOf(C)===-1)return d.push(C),C;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(C){const I=o[C.id],D=C.uniforms,O=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let L=0,F=D.length;L<F;L++){const j=Array.isArray(D[L])?D[L]:[D[L]];for(let E=0,R=j.length;E<R;E++){const z=j[E];if(M(z,L,E,O)===!0){const $=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let re=0;for(let ie=0;ie<K.length;ie++){const ee=K[ie],q=A(ee);typeof ee=="number"||typeof ee=="boolean"?(z.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,$+re,z.__data)):ee.isMatrix3?(z.__data[0]=ee.elements[0],z.__data[1]=ee.elements[1],z.__data[2]=ee.elements[2],z.__data[3]=0,z.__data[4]=ee.elements[3],z.__data[5]=ee.elements[4],z.__data[6]=ee.elements[5],z.__data[7]=0,z.__data[8]=ee.elements[6],z.__data[9]=ee.elements[7],z.__data[10]=ee.elements[8],z.__data[11]=0):(ee.toArray(z.__data,re),re+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,I,D,O){const L=C.value,F=I+"_"+D;if(O[F]===void 0)return typeof L=="number"||typeof L=="boolean"?O[F]=L:O[F]=L.clone(),!0;{const j=O[F];if(typeof L=="number"||typeof L=="boolean"){if(j!==L)return O[F]=L,!0}else if(j.equals(L)===!1)return j.copy(L),!0}return!1}function T(C){const I=C.uniforms;let D=0;const O=16;for(let F=0,j=I.length;F<j;F++){const E=Array.isArray(I[F])?I[F]:[I[F]];for(let R=0,z=E.length;R<z;R++){const $=E[R],K=Array.isArray($.value)?$.value:[$.value];for(let re=0,ie=K.length;re<ie;re++){const ee=K[re],q=A(ee),X=D%O,fe=X%q.boundary,ae=X+fe;D+=fe,ae!==0&&O-ae<q.storage&&(D+=O-ae),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=D,D+=q.storage}}}const L=D%O;return L>0&&(D+=O-L),C.__size=D,C.__cache={},this}function A(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):vt("WebGLRenderer: Unsupported uniform value type.",C),I}function y(C){const I=C.target;I.removeEventListener("dispose",y);const D=d.indexOf(I.__bindingPointIndex);d.splice(D,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete l[I.id]}function v(){for(const C in o)s.deleteBuffer(o[C]);d=[],o={},l={}}return{bind:p,update:m,dispose:v}}const tb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function nb(){return Qi===null&&(Qi=new W_(tb,16,16,Fa,Lr),Qi.name="DFG_LUT",Qi.minFilter=Wn,Qi.magFilter=Wn,Qi.wrapS=Rr,Qi.wrapT=Rr,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class Eg{constructor(e={}){const{canvas:t=v_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:M=mi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const A=M,y=new Set([Vf,jf,zf]),v=new Set([mi,sr,No,Po,kf,Bf]),C=new Uint32Array(4),I=new Int32Array(4);let D=null,O=null;const L=[],F=[];let j=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let R=!1;this._outputColorSpace=In;let z=0,$=0,K=null,re=-1,ie=null;const ee=new dn,q=new dn;let X=null;const fe=new At(0);let ae=0,k=t.width,oe=t.height,Pe=1,He=null,Ye=null;const te=new dn(0,0,k,oe),de=new dn(0,0,k,oe);let Se=!1;const Fe=new Kf;let Le=!1,_t=!1;const qt=new ln,yt=new Z,Nt=new dn,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function lt(){return K===null?Pe:1}let P=r;function Ke(N,Y){return t.getContext(N,Y)}try{const N={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uf}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",Tt,!1),P===null){const Y="webgl2";if(P=Ke(Y,N),P===null)throw Ke(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw zt("WebGLRenderer: "+N.message),N}let ht,it,Te,U,w,H,he,ge,ue,Ve,Ce,We,at,_e,Re,ze,ke,Ee,pt,G,Ie,Me,we,me;function pe(){ht=new nM(P),ht.init(),Me=new qw(P,ht),it=new qS(P,ht,e,Me),Te=new Ww(P,ht),it.reversedDepthBuffer&&S&&Te.buffers.depth.setReversed(!0),U=new sM(P),w=new Nw,H=new Xw(P,ht,Te,w,it,Me,U),he=new $S(E),ge=new tM(E),ue=new c1(P),we=new WS(P,ue),Ve=new iM(P,ue,U,we),Ce=new oM(P,Ve,ue,U),pt=new aM(P,it,H),ze=new YS(w),We=new Rw(E,he,ge,ht,it,we,ze),at=new Jw(E,w),_e=new Dw,Re=new kw(ht),Ee=new HS(E,he,ge,Te,Ce,T,p),ke=new Gw(E,Ce,it),me=new eb(P,U,it,Te),G=new XS(P,ht,U),Ie=new rM(P,ht,U),U.programs=We.programs,E.capabilities=it,E.extensions=ht,E.properties=w,E.renderLists=_e,E.shadowMap=ke,E.state=Te,E.info=U}pe(),A!==mi&&(j=new cM(A,t.width,t.height,o,l));const xe=new Zw(E,P);this.xr=xe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const N=ht.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ht.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(N){N!==void 0&&(Pe=N,this.setSize(k,oe,!1))},this.getSize=function(N){return N.set(k,oe)},this.setSize=function(N,Y,le=!0){if(xe.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=N,oe=Y,t.width=Math.floor(N*Pe),t.height=Math.floor(Y*Pe),le===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),j!==null&&j.setSize(t.width,t.height),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(k*Pe,oe*Pe).floor()},this.setDrawingBufferSize=function(N,Y,le){k=N,oe=Y,Pe=le,t.width=Math.floor(N*le),t.height=Math.floor(Y*le),this.setViewport(0,0,N,Y)},this.setEffects=function(N){if(A===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Y=0;Y<N.length;Y++)if(N[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(ee)},this.getViewport=function(N){return N.copy(te)},this.setViewport=function(N,Y,le,se){N.isVector4?te.set(N.x,N.y,N.z,N.w):te.set(N,Y,le,se),Te.viewport(ee.copy(te).multiplyScalar(Pe).round())},this.getScissor=function(N){return N.copy(de)},this.setScissor=function(N,Y,le,se){N.isVector4?de.set(N.x,N.y,N.z,N.w):de.set(N,Y,le,se),Te.scissor(q.copy(de).multiplyScalar(Pe).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(N){Te.setScissorTest(Se=N)},this.setOpaqueSort=function(N){He=N},this.setTransparentSort=function(N){Ye=N},this.getClearColor=function(N){return N.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(N=!0,Y=!0,le=!0){let se=0;if(N){let Q=!1;if(K!==null){const De=K.texture.format;Q=y.has(De)}if(Q){const De=K.texture.type,je=v.has(De),Ne=Ee.getClearColor(),qe=Ee.getClearAlpha(),Ge=Ne.r,et=Ne.g,rt=Ne.b;je?(C[0]=Ge,C[1]=et,C[2]=rt,C[3]=qe,P.clearBufferuiv(P.COLOR,0,C)):(I[0]=Ge,I[1]=et,I[2]=rt,I[3]=qe,P.clearBufferiv(P.COLOR,0,I))}else se|=P.COLOR_BUFFER_BIT}Y&&(se|=P.DEPTH_BUFFER_BIT),le&&(se|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",Tt,!1),Ee.dispose(),_e.dispose(),Re.dispose(),w.dispose(),he.dispose(),ge.dispose(),Ce.dispose(),we.dispose(),me.dispose(),We.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",ur),xe.removeEventListener("sessionend",Ai),xi.stop()};function ot(N){N.preventDefault(),Bm("WebGLRenderer: Context Lost."),R=!0}function Dt(){Bm("WebGLRenderer: Context Restored."),R=!1;const N=U.autoReset,Y=ke.enabled,le=ke.autoUpdate,se=ke.needsUpdate,Q=ke.type;pe(),U.autoReset=N,ke.enabled=Y,ke.autoUpdate=le,ke.needsUpdate=se,ke.type=Q}function Tt(N){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function On(N){const Y=N.target;Y.removeEventListener("dispose",On),wn(Y)}function wn(N){cs(N),w.remove(N)}function cs(N){const Y=w.get(N).programs;Y!==void 0&&(Y.forEach(function(le){We.releaseProgram(le)}),N.isShaderMaterial&&We.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,le,se,Q,De){Y===null&&(Y=Ut);const je=Q.isMesh&&Q.matrixWorld.determinant()<0,Ne=fs(N,Y,le,se,Q);Te.setMaterial(se,je);let qe=le.index,Ge=1;if(se.wireframe===!0){if(qe=Ve.getWireframeAttribute(le),qe===void 0)return;Ge=2}const et=le.drawRange,rt=le.attributes.position;let St=et.start*Ge,Lt=(et.start+et.count)*Ge;De!==null&&(St=Math.max(St,De.start*Ge),Lt=Math.min(Lt,(De.start+De.count)*Ge)),qe!==null?(St=Math.max(St,0),Lt=Math.min(Lt,qe.count)):rt!=null&&(St=Math.max(St,0),Lt=Math.min(Lt,rt.count));const bt=Lt-St;if(bt<0||bt===1/0)return;we.setup(Q,se,Ne,le,qe);let Vt,Ot=G;if(qe!==null&&(Vt=ue.get(qe),Ot=Ie,Ot.setIndex(Vt)),Q.isMesh)se.wireframe===!0?(Te.setLineWidth(se.wireframeLinewidth*lt()),Ot.setMode(P.LINES)):Ot.setMode(P.TRIANGLES);else if(Q.isLine){let st=se.linewidth;st===void 0&&(st=1),Te.setLineWidth(st*lt()),Q.isLineSegments?Ot.setMode(P.LINES):Q.isLineLoop?Ot.setMode(P.LINE_LOOP):Ot.setMode(P.LINE_STRIP)}else Q.isPoints?Ot.setMode(P.POINTS):Q.isSprite&&Ot.setMode(P.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Lo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Ot.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const st=Q._multiDrawStarts,Ft=Q._multiDrawCounts,Rt=Q._multiDrawCount,xn=qe?ue.get(qe).bytesPerElement:1,li=w.get(se).currentProgram.getUniforms();for(let sn=0;sn<Rt;sn++)li.setValue(P,"_gl_DrawID",sn),Ot.render(st[sn]/xn,Ft[sn])}else if(Q.isInstancedMesh)Ot.renderInstances(St,bt,Q.count);else if(le.isInstancedBufferGeometry){const st=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ft=Math.min(le.instanceCount,st);Ot.renderInstances(St,bt,Ft)}else Ot.render(St,bt)};function Ci(N,Y,le){N.transparent===!0&&N.side===Ar&&N.forceSinglePass===!1?(N.side=oi,N.needsUpdate=!0,Zn(N,Y,le),N.side=ls,N.needsUpdate=!0,Zn(N,Y,le),N.side=Ar):Zn(N,Y,le)}this.compile=function(N,Y,le=null){le===null&&(le=N),O=Re.get(le),O.init(Y),F.push(O),le.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),N!==le&&N.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(O.pushLight(Q),Q.castShadow&&O.pushShadow(Q))}),O.setupLights();const se=new Set;return N.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const De=Q.material;if(De)if(Array.isArray(De))for(let je=0;je<De.length;je++){const Ne=De[je];Ci(Ne,le,Q),se.add(Ne)}else Ci(De,le,Q),se.add(De)}),O=F.pop(),se},this.compileAsync=function(N,Y,le=null){const se=this.compile(N,Y,le);return new Promise(Q=>{function De(){if(se.forEach(function(je){w.get(je).currentProgram.isReady()&&se.delete(je)}),se.size===0){Q(N);return}setTimeout(De,10)}ht.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let lr=null;function cr(N){lr&&lr(N)}function ur(){xi.stop()}function Ai(){xi.start()}const xi=new yg;xi.setAnimationLoop(cr),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(N){lr=N,xe.setAnimationLoop(N),N===null?xi.stop():xi.start()},xe.addEventListener("sessionstart",ur),xe.addEventListener("sessionend",Ai),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const le=xe.enabled===!0&&xe.isPresenting===!0,se=j!==null&&(K===null||le)&&j.begin(E,K);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(Y),Y=xe.getCamera()),N.isScene===!0&&N.onBeforeRender(E,N,Y,K),O=Re.get(N,F.length),O.init(Y),F.push(O),qt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Fe.setFromProjectionMatrix(qt,tr,Y.reversedDepth),_t=this.localClippingEnabled,Le=ze.init(this.clippingPlanes,_t),D=_e.get(N,L.length),D.init(),L.push(D),xe.enabled===!0&&xe.isPresenting===!0){const je=E.xr.getDepthSensingMesh();je!==null&&nn(je,Y,-1/0,E.sortObjects)}nn(N,Y,0,E.sortObjects),D.finish(),E.sortObjects===!0&&D.sort(He,Ye),nt=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,nt&&Ee.addToRenderList(D,N),this.info.render.frame++,Le===!0&&ze.beginShadows();const Q=O.state.shadowsArray;if(ke.render(Q,N,Y),Le===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&j.hasRenderPass())===!1){const je=D.opaque,Ne=D.transmissive;if(O.setupLights(),Y.isArrayCamera){const qe=Y.cameras;if(Ne.length>0)for(let Ge=0,et=qe.length;Ge<et;Ge++){const rt=qe[Ge];us(je,Ne,N,rt)}nt&&Ee.render(N);for(let Ge=0,et=qe.length;Ge<et;Ge++){const rt=qe[Ge];Ur(D,N,rt,rt.viewport)}}else Ne.length>0&&us(je,Ne,N,Y),nt&&Ee.render(N),Ur(D,N,Y)}K!==null&&$===0&&(H.updateMultisampleRenderTarget(K),H.updateRenderTargetMipmap(K)),se&&j.end(E),N.isScene===!0&&N.onAfterRender(E,N,Y),we.resetDefaultState(),re=-1,ie=null,F.pop(),F.length>0?(O=F[F.length-1],Le===!0&&ze.setGlobalState(E.clippingPlanes,O.state.camera)):O=null,L.pop(),L.length>0?D=L[L.length-1]:D=null};function nn(N,Y,le,se){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)le=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)O.pushLight(N),N.castShadow&&O.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Fe.intersectsSprite(N)){se&&Nt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(qt);const je=Ce.update(N),Ne=N.material;Ne.visible&&D.push(N,je,Ne,le,Nt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Fe.intersectsObject(N))){const je=Ce.update(N),Ne=N.material;if(se&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Nt.copy(N.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Nt.copy(je.boundingSphere.center)),Nt.applyMatrix4(N.matrixWorld).applyMatrix4(qt)),Array.isArray(Ne)){const qe=je.groups;for(let Ge=0,et=qe.length;Ge<et;Ge++){const rt=qe[Ge],St=Ne[rt.materialIndex];St&&St.visible&&D.push(N,je,St,le,Nt.z,rt)}}else Ne.visible&&D.push(N,je,Ne,le,Nt.z,null)}}const De=N.children;for(let je=0,Ne=De.length;je<Ne;je++)nn(De[je],Y,le,se)}function Ur(N,Y,le,se){const{opaque:Q,transmissive:De,transparent:je}=N;O.setupLightsView(le),Le===!0&&ze.setGlobalState(E.clippingPlanes,le),se&&Te.viewport(ee.copy(se)),Q.length>0&&Nn(Q,Y,le),De.length>0&&Nn(De,Y,le),je.length>0&&Nn(je,Y,le),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function us(N,Y,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[se.id]===void 0){const St=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[se.id]=new ir(1,1,{generateMipmaps:!0,type:St?Lr:mi,minFilter:Bs,samples:it.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const De=O.state.transmissionRenderTarget[se.id],je=se.viewport||ee;De.setSize(je.z*E.transmissionResolutionScale,je.w*E.transmissionResolutionScale);const Ne=E.getRenderTarget(),qe=E.getActiveCubeFace(),Ge=E.getActiveMipmapLevel();E.setRenderTarget(De),E.getClearColor(fe),ae=E.getClearAlpha(),ae<1&&E.setClearColor(16777215,.5),E.clear(),nt&&Ee.render(le);const et=E.toneMapping;E.toneMapping=nr;const rt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),O.setupLightsView(se),Le===!0&&ze.setGlobalState(E.clippingPlanes,se),Nn(N,le,se),H.updateMultisampleRenderTarget(De),H.updateRenderTargetMipmap(De),ht.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let Lt=0,bt=Y.length;Lt<bt;Lt++){const Vt=Y[Lt],{object:Ot,geometry:st,material:Ft,group:Rt}=Vt;if(Ft.side===Ar&&Ot.layers.test(se.layers)){const xn=Ft.side;Ft.side=oi,Ft.needsUpdate=!0,Or(Ot,le,se,st,Ft,Rt),Ft.side=xn,Ft.needsUpdate=!0,St=!0}}St===!0&&(H.updateMultisampleRenderTarget(De),H.updateRenderTargetMipmap(De))}E.setRenderTarget(Ne,qe,Ge),E.setClearColor(fe,ae),rt!==void 0&&(se.viewport=rt),E.toneMapping=et}function Nn(N,Y,le){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,De=N.length;Q<De;Q++){const je=N[Q],{object:Ne,geometry:qe,group:Ge}=je;let et=je.material;et.allowOverride===!0&&se!==null&&(et=se),Ne.layers.test(le.layers)&&Or(Ne,Y,le,qe,et,Ge)}}function Or(N,Y,le,se,Q,De){N.onBeforeRender(E,Y,le,se,Q,De),N.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Q.onBeforeRender(E,Y,le,se,N,De),Q.transparent===!0&&Q.side===Ar&&Q.forceSinglePass===!1?(Q.side=oi,Q.needsUpdate=!0,E.renderBufferDirect(le,Y,se,Q,N,De),Q.side=ls,Q.needsUpdate=!0,E.renderBufferDirect(le,Y,se,Q,N,De),Q.side=Ar):E.renderBufferDirect(le,Y,se,Q,N,De),N.onAfterRender(E,Y,le,se,Q,De)}function Zn(N,Y,le){Y.isScene!==!0&&(Y=Ut);const se=w.get(N),Q=O.state.lights,De=O.state.shadowsArray,je=Q.state.version,Ne=We.getParameters(N,Q.state,De,Y,le),qe=We.getProgramCacheKey(Ne);let Ge=se.programs;se.environment=N.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(N.isMeshStandardMaterial?ge:he).get(N.envMap||se.environment),se.envMapRotation=se.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,Ge===void 0&&(N.addEventListener("dispose",On),Ge=new Map,se.programs=Ge);let et=Ge.get(qe);if(et!==void 0){if(se.currentProgram===et&&se.lightsStateVersion===je)return ds(N,Ne),et}else Ne.uniforms=We.getUniforms(N),N.onBeforeCompile(Ne,E),et=We.acquireProgram(Ne,qe),Ge.set(qe,et),se.uniforms=Ne.uniforms;const rt=se.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(rt.clippingPlanes=ze.uniform),ds(N,Ne),se.needsLights=ps(N),se.lightsStateVersion=je,se.needsLights&&(rt.ambientLightColor.value=Q.state.ambient,rt.lightProbe.value=Q.state.probe,rt.directionalLights.value=Q.state.directional,rt.directionalLightShadows.value=Q.state.directionalShadow,rt.spotLights.value=Q.state.spot,rt.spotLightShadows.value=Q.state.spotShadow,rt.rectAreaLights.value=Q.state.rectArea,rt.ltc_1.value=Q.state.rectAreaLTC1,rt.ltc_2.value=Q.state.rectAreaLTC2,rt.pointLights.value=Q.state.point,rt.pointLightShadows.value=Q.state.pointShadow,rt.hemisphereLights.value=Q.state.hemi,rt.directionalShadowMap.value=Q.state.directionalShadowMap,rt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,rt.spotShadowMap.value=Q.state.spotShadowMap,rt.spotLightMatrix.value=Q.state.spotLightMatrix,rt.spotLightMap.value=Q.state.spotLightMap,rt.pointShadowMap.value=Q.state.pointShadowMap,rt.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=et,se.uniformsList=null,et}function Hs(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=uc.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function ds(N,Y){const le=w.get(N);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function fs(N,Y,le,se,Q){Y.isScene!==!0&&(Y=Ut),H.resetTextureUnits();const De=Y.fog,je=se.isMeshStandardMaterial?Y.environment:null,Ne=K===null?E.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ka,qe=(se.isMeshStandardMaterial?ge:he).get(se.envMap||je),Ge=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,et=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),rt=!!le.morphAttributes.position,St=!!le.morphAttributes.normal,Lt=!!le.morphAttributes.color;let bt=nr;se.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(bt=E.toneMapping);const Vt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ot=Vt!==void 0?Vt.length:0,st=w.get(se),Ft=O.state.lights;if(Le===!0&&(_t===!0||N!==ie)){const cn=N===ie&&se.id===re;ze.setState(se,N,cn)}let Rt=!1;se.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Ft.state.version||st.outputColorSpace!==Ne||Q.isBatchedMesh&&st.batching===!1||!Q.isBatchedMesh&&st.batching===!0||Q.isBatchedMesh&&st.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&st.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&st.instancing===!1||!Q.isInstancedMesh&&st.instancing===!0||Q.isSkinnedMesh&&st.skinning===!1||!Q.isSkinnedMesh&&st.skinning===!0||Q.isInstancedMesh&&st.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&st.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&st.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&st.instancingMorph===!1&&Q.morphTexture!==null||st.envMap!==qe||se.fog===!0&&st.fog!==De||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==ze.numPlanes||st.numIntersection!==ze.numIntersection)||st.vertexAlphas!==Ge||st.vertexTangents!==et||st.morphTargets!==rt||st.morphNormals!==St||st.morphColors!==Lt||st.toneMapping!==bt||st.morphTargetsCount!==Ot)&&(Rt=!0):(Rt=!0,st.__version=se.version);let xn=st.currentProgram;Rt===!0&&(xn=Zn(se,Y,Q));let li=!1,sn=!1,Gi=!1;const kt=xn.getUniforms(),gt=st.uniforms;if(Te.useProgram(xn.program)&&(li=!0,sn=!0,Gi=!0),se.id!==re&&(re=se.id,sn=!0),li||ie!==N){Te.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),kt.setValue(P,"projectionMatrix",N.projectionMatrix),kt.setValue(P,"viewMatrix",N.matrixWorldInverse);const fn=kt.map.cameraPosition;fn!==void 0&&fn.setValue(P,yt.setFromMatrixPosition(N.matrixWorld)),it.logarithmicDepthBuffer&&kt.setValue(P,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&kt.setValue(P,"isOrthographic",N.isOrthographicCamera===!0),ie!==N&&(ie=N,sn=!0,Gi=!0)}if(st.needsLights&&(Ft.state.directionalShadowMap.length>0&&kt.setValue(P,"directionalShadowMap",Ft.state.directionalShadowMap,H),Ft.state.spotShadowMap.length>0&&kt.setValue(P,"spotShadowMap",Ft.state.spotShadowMap,H),Ft.state.pointShadowMap.length>0&&kt.setValue(P,"pointShadowMap",Ft.state.pointShadowMap,H)),Q.isSkinnedMesh){kt.setOptional(P,Q,"bindMatrix"),kt.setOptional(P,Q,"bindMatrixInverse");const cn=Q.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),kt.setValue(P,"boneTexture",cn.boneTexture,H))}Q.isBatchedMesh&&(kt.setOptional(P,Q,"batchingTexture"),kt.setValue(P,"batchingTexture",Q._matricesTexture,H),kt.setOptional(P,Q,"batchingIdTexture"),kt.setValue(P,"batchingIdTexture",Q._indirectTexture,H),kt.setOptional(P,Q,"batchingColorTexture"),Q._colorsTexture!==null&&kt.setValue(P,"batchingColorTexture",Q._colorsTexture,H));const Kt=le.morphAttributes;if((Kt.position!==void 0||Kt.normal!==void 0||Kt.color!==void 0)&&pt.update(Q,le,xn),(sn||st.receiveShadow!==Q.receiveShadow)&&(st.receiveShadow=Q.receiveShadow,kt.setValue(P,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(gt.envMap.value=qe,gt.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(gt.envMapIntensity.value=Y.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=nb()),sn&&(kt.setValue(P,"toneMappingExposure",E.toneMappingExposure),st.needsLights&&hs(gt,Gi),De&&se.fog===!0&&at.refreshFogUniforms(gt,De),at.refreshMaterialUniforms(gt,se,Pe,oe,O.state.transmissionRenderTarget[N.id]),uc.upload(P,Hs(st),gt,H)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(uc.upload(P,Hs(st),gt,H),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&kt.setValue(P,"center",Q.center),kt.setValue(P,"modelViewMatrix",Q.modelViewMatrix),kt.setValue(P,"normalMatrix",Q.normalMatrix),kt.setValue(P,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const cn=se.uniformsGroups;for(let fn=0,dr=cn.length;fn<dr;fn++){const ci=cn[fn];me.update(ci,xn),me.bind(ci,xn)}}return xn}function hs(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function ps(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(N,Y,le){const se=w.get(N);se.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),w.get(N.texture).__webglTexture=Y,w.get(N.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Y){const le=w.get(N);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const ja=P.createFramebuffer();this.setRenderTarget=function(N,Y=0,le=0){K=N,z=Y,$=le;let se=null,Q=!1,De=!1;if(N){const Ne=w.get(N);if(Ne.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(P.FRAMEBUFFER,Ne.__webglFramebuffer),ee.copy(N.viewport),q.copy(N.scissor),X=N.scissorTest,Te.viewport(ee),Te.scissor(q),Te.setScissorTest(X),re=-1;return}else if(Ne.__webglFramebuffer===void 0)H.setupRenderTarget(N);else if(Ne.__hasExternalTextures)H.rebindTextures(N,w.get(N.texture).__webglTexture,w.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const et=N.depthTexture;if(Ne.__boundDepthTexture!==et){if(et!==null&&w.has(et)&&(N.width!==et.image.width||N.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(N)}}const qe=N.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const Ge=w.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ge[Y])?se=Ge[Y][le]:se=Ge[Y],Q=!0):N.samples>0&&H.useMultisampledRTT(N)===!1?se=w.get(N).__webglMultisampledFramebuffer:Array.isArray(Ge)?se=Ge[le]:se=Ge,ee.copy(N.viewport),q.copy(N.scissor),X=N.scissorTest}else ee.copy(te).multiplyScalar(Pe).floor(),q.copy(de).multiplyScalar(Pe).floor(),X=Se;if(le!==0&&(se=ja),Te.bindFramebuffer(P.FRAMEBUFFER,se)&&Te.drawBuffers(N,se),Te.viewport(ee),Te.scissor(q),Te.setScissorTest(X),Q){const Ne=w.get(N.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ne.__webglTexture,le)}else if(De){const Ne=Y;for(let qe=0;qe<N.textures.length;qe++){const Ge=w.get(N.textures[qe]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+qe,Ge.__webglTexture,le,Ne)}}else if(N!==null&&le!==0){const Ne=w.get(N.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ne.__webglTexture,le)}re=-1},this.readRenderTargetPixels=function(N,Y,le,se,Q,De,je,Ne=0){if(!(N&&N.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=w.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&je!==void 0&&(qe=qe[je]),qe){Te.bindFramebuffer(P.FRAMEBUFFER,qe);try{const Ge=N.textures[Ne],et=Ge.format,rt=Ge.type;if(!it.textureFormatReadable(et)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(rt)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-se&&le>=0&&le<=N.height-Q&&(N.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ne),P.readPixels(Y,le,se,Q,Me.convert(et),Me.convert(rt),De))}finally{const Ge=K!==null?w.get(K).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(N,Y,le,se,Q,De,je,Ne=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=w.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&je!==void 0&&(qe=qe[je]),qe)if(Y>=0&&Y<=N.width-se&&le>=0&&le<=N.height-Q){Te.bindFramebuffer(P.FRAMEBUFFER,qe);const Ge=N.textures[Ne],et=Ge.format,rt=Ge.type;if(!it.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const St=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.bufferData(P.PIXEL_PACK_BUFFER,De.byteLength,P.STREAM_READ),N.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ne),P.readPixels(Y,le,se,Q,Me.convert(et),Me.convert(rt),0);const Lt=K!==null?w.get(K).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,Lt);const bt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await __(P,bt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,De),P.deleteBuffer(St),P.deleteSync(bt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Y=null,le=0){const se=Math.pow(2,-le),Q=Math.floor(N.image.width*se),De=Math.floor(N.image.height*se),je=Y!==null?Y.x:0,Ne=Y!==null?Y.y:0;H.setTexture2D(N,0),P.copyTexSubImage2D(P.TEXTURE_2D,le,0,0,je,Ne,Q,De),Te.unbindTexture()};const Ws=P.createFramebuffer(),Qt=P.createFramebuffer();this.copyTextureToTexture=function(N,Y,le=null,se=null,Q=0,De=null){De===null&&(Q!==0?(Lo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=Q,Q=0):De=0);let je,Ne,qe,Ge,et,rt,St,Lt,bt;const Vt=N.isCompressedTexture?N.mipmaps[De]:N.image;if(le!==null)je=le.max.x-le.min.x,Ne=le.max.y-le.min.y,qe=le.isBox3?le.max.z-le.min.z:1,Ge=le.min.x,et=le.min.y,rt=le.isBox3?le.min.z:0;else{const Kt=Math.pow(2,-Q);je=Math.floor(Vt.width*Kt),Ne=Math.floor(Vt.height*Kt),N.isDataArrayTexture?qe=Vt.depth:N.isData3DTexture?qe=Math.floor(Vt.depth*Kt):qe=1,Ge=0,et=0,rt=0}se!==null?(St=se.x,Lt=se.y,bt=se.z):(St=0,Lt=0,bt=0);const Ot=Me.convert(Y.format),st=Me.convert(Y.type);let Ft;Y.isData3DTexture?(H.setTexture3D(Y,0),Ft=P.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(H.setTexture2DArray(Y,0),Ft=P.TEXTURE_2D_ARRAY):(H.setTexture2D(Y,0),Ft=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment);const Rt=P.getParameter(P.UNPACK_ROW_LENGTH),xn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),li=P.getParameter(P.UNPACK_SKIP_PIXELS),sn=P.getParameter(P.UNPACK_SKIP_ROWS),Gi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Vt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Vt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,et),P.pixelStorei(P.UNPACK_SKIP_IMAGES,rt);const kt=N.isDataArrayTexture||N.isData3DTexture,gt=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isDepthTexture){const Kt=w.get(N),cn=w.get(Y),fn=w.get(Kt.__renderTarget),dr=w.get(cn.__renderTarget);Te.bindFramebuffer(P.READ_FRAMEBUFFER,fn.__webglFramebuffer),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,dr.__webglFramebuffer);for(let ci=0;ci<qe;ci++)kt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,w.get(N).__webglTexture,Q,rt+ci),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,w.get(Y).__webglTexture,De,bt+ci)),P.blitFramebuffer(Ge,et,je,Ne,St,Lt,je,Ne,P.DEPTH_BUFFER_BIT,P.NEAREST);Te.bindFramebuffer(P.READ_FRAMEBUFFER,null),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Q!==0||N.isRenderTargetTexture||w.has(N)){const Kt=w.get(N),cn=w.get(Y);Te.bindFramebuffer(P.READ_FRAMEBUFFER,Ws),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qt);for(let fn=0;fn<qe;fn++)kt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Kt.__webglTexture,Q,rt+fn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Kt.__webglTexture,Q),gt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,cn.__webglTexture,De,bt+fn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,cn.__webglTexture,De),Q!==0?P.blitFramebuffer(Ge,et,je,Ne,St,Lt,je,Ne,P.COLOR_BUFFER_BIT,P.NEAREST):gt?P.copyTexSubImage3D(Ft,De,St,Lt,bt+fn,Ge,et,je,Ne):P.copyTexSubImage2D(Ft,De,St,Lt,Ge,et,je,Ne);Te.bindFramebuffer(P.READ_FRAMEBUFFER,null),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else gt?N.isDataTexture||N.isData3DTexture?P.texSubImage3D(Ft,De,St,Lt,bt,je,Ne,qe,Ot,st,Vt.data):Y.isCompressedArrayTexture?P.compressedTexSubImage3D(Ft,De,St,Lt,bt,je,Ne,qe,Ot,Vt.data):P.texSubImage3D(Ft,De,St,Lt,bt,je,Ne,qe,Ot,st,Vt):N.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,De,St,Lt,je,Ne,Ot,st,Vt.data):N.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,De,St,Lt,Vt.width,Vt.height,Ot,Vt.data):P.texSubImage2D(P.TEXTURE_2D,De,St,Lt,je,Ne,Ot,st,Vt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Rt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,li),P.pixelStorei(P.UNPACK_SKIP_ROWS,sn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Gi),De===0&&Y.generateMipmaps&&P.generateMipmap(Ft),Te.unbindTexture()},this.initRenderTarget=function(N){w.get(N).__webglFramebuffer===void 0&&H.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?H.setTextureCube(N,0):N.isData3DTexture?H.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?H.setTexture2DArray(N,0):H.setTexture2D(N,0),Te.unbindTexture()},this.resetState=function(){z=0,$=0,K=null,Te.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=jt._getUnpackColorSpace()}}const L0={type:"change"},rh={type:"start"},Tg={type:"end"},nc=new qf,I0=new ss,ib=Math.cos(70*S_.DEG2RAD),yn=new Z,ai=2*Math.PI,Yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Id=1e-6;class Cg extends o1{constructor(e,t=null){super(e,t),this.state=Yt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Da.ROTATE,MIDDLE:Da.DOLLY,RIGHT:Da.PAN},this.touches={ONE:Pa.ROTATE,TWO:Pa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Vs,this._lastTargetPosition=new Z,this._quat=new Vs().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new l0,this._sphericalDelta=new l0,this._scale=1,this._panOffset=new Z,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new Z,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sb.bind(this),this._onPointerDown=rb.bind(this),this._onPointerUp=ab.bind(this),this._onContextMenu=hb.bind(this),this._onMouseWheel=cb.bind(this),this._onKeyDown=ub.bind(this),this._onTouchStart=db.bind(this),this._onTouchMove=fb.bind(this),this._onMouseDown=ob.bind(this),this._onMouseMove=lb.bind(this),this._interceptControlDown=pb.bind(this),this._interceptControlUp=mb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(L0),this.update(),this.state=Yt.NONE}update(e=null){const t=this.object.position;yn.copy(t).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===Yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=ai:r>Math.PI&&(r-=ai),o<-Math.PI?o+=ai:o>Math.PI&&(o-=ai),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=d!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),t.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const f=yn.length();d=this._clampDistance(f*this._scale);const p=f-d;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const f=new Z(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new Z(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(f),this.object.updateMatrixWorld(),d=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(nc.origin.copy(this.object.position),nc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(nc.direction))<ib?this.object.lookAt(this.target):(I0.setFromNormalAndCoplanarPoint(this.object.up,this.target),nc.intersectPlane(I0,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Id||this._lastTargetPosition.distanceToSquared(this.target)>Id?(this.dispatchEvent(L0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ai/60*this.autoRotateSpeed*e:ai/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yn.setFromMatrixColumn(t,0),yn.multiplyScalar(-e),this._panOffset.add(yn)}_panUp(e,t){this.screenSpacePanning===!0?yn.setFromMatrixColumn(t,1):(yn.setFromMatrixColumn(t,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(e),this._panOffset.add(yn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;yn.copy(o).sub(this.target);let l=yn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,d=r.width,f=r.height;this._mouse.x=o/d*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/t.clientHeight),this._rotateUp(ai*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ai*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ai*this._rotateDelta.x/t.clientHeight),this._rotateUp(ai*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(d,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new mt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function rb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function sb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ab(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Tg),this.state=Yt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ob(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Da.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Yt.DOLLY;break;case Da.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Yt.ROTATE}break;case Da.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Yt.PAN}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(rh)}function lb(s){switch(this.state){case Yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function cb(s){this.enabled===!1||this.enableZoom===!1||this.state!==Yt.NONE||(s.preventDefault(),this.dispatchEvent(rh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Tg))}function ub(s){this.enabled!==!1&&this._handleKeyDown(s)}function db(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Pa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Yt.TOUCH_ROTATE;break;case Pa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Yt.TOUCH_PAN;break;default:this.state=Yt.NONE}break;case 2:switch(this.touches.TWO){case Pa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Yt.TOUCH_DOLLY_PAN;break;case Pa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Yt.TOUCH_DOLLY_ROTATE;break;default:this.state=Yt.NONE}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(rh)}function fb(s){switch(this._trackPointer(s),this.state){case Yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Yt.NONE}}function hb(s){this.enabled!==!1&&s.preventDefault()}function pb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gb=()=>{const s=Ue.useRef(null),e=Ue.useRef(null),t=Ue.useRef(null),[r,o]=Ue.useState(0),l=Ue.useRef(0),[d,f]=Ue.useState(!1),p=Ue.useRef(!1),[m,x]=Ue.useState("STANDBY"),_=Ue.useRef("STANDBY");_.current=m;const[S,M]=Ue.useState(10),T=Ue.useRef(10);T.current=S;const[A,y]=Ue.useState({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),[v,C]=Ue.useState(null),[I,D]=Ue.useState("geral"),O=Ue.useRef(null),L=Ue.useRef(null),F=Ue.useRef(null),j=Ue.useRef(null),E=Ue.useRef(null),R=Ue.useRef(null),z=Ue.useRef(null),$=Ue.useRef(null),K=Ue.useRef(null),re=Ue.useRef(null),ie=Ue.useRef(null),ee=Ue.useRef(null),q=Ue.useRef(null),X=Ue.useRef(null),fe=Ue.useRef(null),ae=Ue.useRef(null),k=Ue.useRef(null),oe=Ue.useRef(null),Pe=Ue.useRef(null),He=Ue.useRef(null),Ye=Ue.useRef(null),te=Ue.useRef(new Z(0,2.2,4.4)),de=Ue.useRef(new Z(0,1.4,0)),Se=Ue.useCallback(()=>{let lt=R.current;lt||(lt=document.createElement("canvas"),lt.width=512,lt.height=380,R.current=lt);const P=lt.getContext("2d");if(!P)return;const Ke=_.current,ht=T.current;Ke==="FIRE_ALARM"?(P.fillStyle="#ba1016",P.fillRect(0,0,512,380),P.fillStyle="#ffffff",P.font='bold 28px "Courier New", Courier, monospace',P.textAlign="center",P.fillText("FOGO DETECTADO",230,48),P.beginPath(),P.arc(460,40,10,0,Math.PI*2),P.fillStyle="#22c55e",P.fill(),P.lineWidth=2,P.strokeStyle="#ffffff",P.stroke(),P.fillStyle="#ffffff",P.font='bold 21px "Courier New", Courier, monospace',P.fillText("FOGO DETECTADO: SUB-1",256,95),P.fillText("EM DISPARO",256,128),P.fillStyle="#67e8f9",P.font='900 86px "Courier New", Courier, monospace',P.fillText(`${ht}s`,256,230),P.fillStyle="#ffffff",P.font='bold 19px "Courier New", Courier, monospace',P.fillText("TOQUE NA TELA PARA ABORTAR",256,325)):Ke==="SUPPRESSION"?(P.fillStyle="#7f1d1d",P.fillRect(0,0,512,380),P.fillStyle="#ffffff",P.font='bold 24px "Courier New", Courier, monospace',P.textAlign="center",P.fillText("SISTEMA CO2 / SAP !",256,50),P.fillStyle="#fef08a",P.font='bold 30px "Courier New", Courier, monospace',P.fillText("DESCARGA EFETUADA",256,130),P.fillStyle="#0284c7",P.fillRect(80,190,352,60),P.fillStyle="#ffffff",P.font="bold 18px sans-serif",P.fillText("REARMAR SISTEMA",256,228)):Ke==="EXTINGUISHED"?(P.fillStyle="#06261c",P.fillRect(0,0,512,380),P.fillStyle="#10b981",P.font="bold 26px sans-serif",P.textAlign="center",P.fillText("● INCÊNDIO EXTINTO",256,70),P.fillStyle="#a7f3d0",P.font="bold 15px monospace",P.fillText("SUPRESSÃO CLASSE K BEM-SUCEDIDA",256,115),P.fillStyle="#064e3b",P.fillRect(30,150,452,50),P.fillStyle="#6ee7b7",P.font="bold 15px sans-serif",P.fillText("AVCB & NBR 14518 CONFORME",256,180),P.fillStyle="#d4af37",P.font="bold 13px monospace",P.fillText("COZINHA E VIDAS PRESERVADAS",256,260)):(P.fillStyle="#0284c7",P.fillRect(0,0,512,45),P.fillStyle="#ffffff",P.font='bold 20px "Courier New", Courier, monospace',P.textAlign="center",P.fillText("10/05 15:42",240,30),P.beginPath(),P.arc(460,24,9,0,Math.PI*2),P.fillStyle="#22c55e",P.fill(),P.fillStyle="#0c1a29",P.fillRect(0,45,512,290),P.fillStyle="#15803d",P.fillRect(18,55,145,60),P.fillStyle="#ffffff",P.font="bold 13px sans-serif",P.textAlign="center",P.fillText("EXAUSTOR",90,80),P.fillText("OK",90,100),P.fillStyle="#15803d",P.fillRect(183,55,145,60),P.fillText("ENERGIA",256,80),P.fillText("OK",256,100),P.fillStyle="#15803d",P.fillRect(348,55,145,60),P.fillText("GÁS",420,80),P.fillText("ABERTO",420,100),P.fillStyle="#1d4ed8",P.fillRect(25,130,220,70),P.fillStyle="#ffffff",P.font="bold 16px sans-serif",P.fillText("SETORES",135,172),P.fillRect(265,130,220,70),P.fillStyle="#ffffff",P.fillText("CONTROLE GÁS",375,172),P.fillStyle="#1d4ed8",P.fillRect(25,215,220,70),P.fillStyle="#ffffff",P.fillText("REARMAR",135,257),P.fillStyle="#1d4ed8",P.fillRect(265,215,220,70),P.fillStyle="#ffffff",P.fillText("CONFIG",375,257),P.fillStyle="#0284c7",P.fillRect(0,335,512,45),P.fillStyle="#ffffff",P.font='bold 18px "Courier New", Courier, monospace',P.fillText("SISTEMA OPERANTE",256,363)),E.current&&(E.current.needsUpdate=!0)},[]),[Fe,Le]=Ue.useState(!1),_t=Ue.useCallback(()=>{m==="SUPPRESSION"||m==="EXTINGUISHED"||(q.current&&(q.current.rotation.x=.65),p.current=!0,f(!0),x("FIRE_ALARM"),M(60),Le(!0),y({temp:290,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"ALERTA DE FOGO",countdown:60}))},[m]),qt=Ue.useCallback(()=>{p.current=!1,f(!1),Le(!1),x("STANDBY"),M(60),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60}),q.current&&(q.current.rotation.x=0)},[]),yt=()=>{s.current?s.current.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:window.innerHeight,behavior:"smooth"})},Nt=()=>{if(!s.current)return;const lt=window.scrollY,P=window.innerHeight*.85;window.scrollTo({top:lt+P,behavior:"smooth"})};Ue.useEffect(()=>{if(!Fe)return;const lt=setInterval(()=>{M(P=>P<=5?(clearInterval(lt),Le(!1),x("SUPPRESSION"),y(Ke=>({...Ke,temp:140,systemStatus:"COMBATE ATIVO",countdown:0})),setTimeout(()=>{x("EXTINGUISHED"),y(Ke=>({...Ke,temp:38,systemStatus:"INCÊNDIO EXTINTO",countdown:0}))},3500),0):P-5)},600);return()=>clearInterval(lt)},[Fe]);const Ut=Ue.useCallback(()=>{p.current=!1,f(!1),Le(!1),x("STANDBY"),M(60),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60}),q.current&&(q.current.rotation.x=0),k.current&&(k.current.scale.set(.001,.001,.001),k.current.visible=!1)},[]);Ue.useEffect(()=>{Se()},[m,S,Se]),Ue.useEffect(()=>{const lt=()=>{if(!s.current)return;const P=s.current.getBoundingClientRect(),Ke=s.current.offsetHeight-window.innerHeight;if(Ke<=0)return;const ht=-P.top,it=Math.min(1,Math.max(0,ht/Ke));if(l.current=it,o(it),!(p.current&&Fe))if(p.current&&it<=.05&&(p.current=!1,f(!1),Le(!1)),it<.2)x("STANDBY"),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60});else if(it>=.2&&it<.45){x("HEATING");const Te=Math.round(180+(it-.2)/.25*160);y({temp:Te,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"AQUECIMENTO",countdown:60})}else if(it>=.45&&it<.7){x("FIRE_ALARM");const Te=Math.max(1,Math.round(60-(it-.45)/.25*59));M(Te),y({temp:380,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"ALERTA DE FOGO",countdown:Te})}else it>=.7&&it<.88?(x("SUPPRESSION"),y({temp:135,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0})):(x("EXTINGUISHED"),y({temp:38,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0}))};return window.addEventListener("scroll",lt,{passive:!0}),lt(),()=>window.removeEventListener("scroll",lt)},[Fe]);const nt=lt=>{D(lt),lt==="geral"?(te.current.set(0,2.2,4.4),de.current.set(0,1.4,0)):lt==="central"?(te.current.set(1.9,1.85,1.5),de.current.set(2.1,1.8,.15)):lt==="fritadeira"?(te.current.set(-.2,1.4,2.2),de.current.set(-.2,1,0)):lt==="botoeira"&&(te.current.set(1.4,1.45,1.3),de.current.set(1.45,1.4,.05))};return Ue.useEffect(()=>{if(!t.current||!e.current)return;const lt=e.current.clientWidth||window.innerWidth,P=e.current.clientHeight||window.innerHeight,Ke=new mg;O.current=Ke,Ke.background=new At(658448),Ke.fog=new $f(658448,.035);const ht=lt<768,it=new Kn(ht?58:45,lt/P,.1,100);ht?(it.position.set(.1,2.15,5.6),te.current.set(.1,2.15,5.6),de.current.set(.1,1.35,0)):(it.position.set(0,2.2,4.4),te.current.set(0,2.2,4.4),de.current.set(0,1.4,0)),L.current=it;const Te=new Eg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});Te.setSize(lt,P),Te.setPixelRatio(Math.min(window.devicePixelRatio,2)),Te.shadowMap.enabled=!0,Te.shadowMap.type=Of,Te.toneMapping=vc,Te.toneMappingExposure=1.1,F.current=Te;const U=new Cg(it,Te.domElement);U.enableDamping=!0,U.dampingFactor=.05,U.enableZoom=!1,U.enablePan=!1,U.maxPolarAngle=Math.PI/2+.05,U.target.set(ht?.1:0,ht?1.35:1.4,0),j.current=U;const w=new vg(16774890,.75);Ke.add(w);const H=new Nf(16777215,1.3);H.position.set(4,6,4),H.castShadow=!0,H.shadow.mapSize.width=1024,H.shadow.mapSize.height=1024,Ke.add(H);const he=new r0(16766880,2.8,6,Math.PI/3,.3);he.position.set(0,2.7,0),he.target.position.set(0,.9,0),Ke.add(he),Ke.add(he.target);const ge=new s0(16733440,0,5);ge.position.set(-.35,1.2,.1),Ke.add(ge),ee.current=ge;const ue=new s0(16711680,0,8);ue.position.set(2.1,2.25,.2),Ke.add(ue),re.current=ue;const Ve=new wt({color:13421772,metalness:.9,roughness:.22}),Ce=new wt({color:1579551,roughness:.6,metalness:.1}),We=new wt({color:987413,roughness:.8,metalness:.2}),at=new Oe(new Hn(14,14),We);at.rotation.x=-Math.PI/2,at.receiveShadow=!0,Ke.add(at);const _e=new Oe(new Hn(14,8),Ce);_e.position.set(0,4,-1.2),_e.receiveShadow=!0,Ke.add(_e);const Re=new Oe(new Hn(14,8),Ce);Re.rotation.y=Math.PI/2,Re.position.set(-4.5,4,0),Ke.add(Re);const ze=new An;Ke.add(ze);const ke=new Oe(new Wt(2.6,.9,1),Ve);ke.position.set(0,.45,0),ke.castShadow=!0,ke.receiveShadow=!0,ze.add(ke);const Ee=new An;Ee.position.set(-.55,.9,0),ze.add(Ee),ae.current=Ee;const pt=new Oe(new Wt(.85,.12,.75),Ve);pt.position.set(0,.06,0),Ee.add(pt);const G=new Oe(new Wt(.72,.02,.62),new wt({color:9584654,roughness:.1,metalness:.3}));G.position.set(0,.11,0),Ee.add(G);const Ie=new wt({color:1118481,roughness:.5}),Me=new Oe(new tn(.012,.012,.28),Ie);Me.position.set(-.16,.22,.34),Me.rotation.x=Math.PI/3,Ee.add(Me);const we=new Oe(new tn(.012,.012,.28),Ie);we.position.set(.16,.22,.34),we.rotation.x=Math.PI/3,Ee.add(we);const me=new An;me.position.set(.65,.9,0),ze.add(me);const pe=new Oe(new Wt(.95,.06,.75),new wt({color:3355448,roughness:.4,metalness:.7}));pe.position.set(0,.03,0),me.add(pe);const xe=new An;xe.position.set(0,2.3,0),Ke.add(xe);const ot=new Oe(new Wt(2.8,.6,1.2),Ve);ot.castShadow=!0,xe.add(ot);const Dt=new wt({color:10066329,metalness:.9,roughness:.3});for(let Mt=-1;Mt<=1;Mt+=.5){const dt=new Oe(new Wt(.42,.35,.04),Dt);dt.position.set(Mt,-.15,0),dt.rotation.x=-Math.PI/6,xe.add(dt)}const Tt=new Oe(new tn(.28,.28,1.5,32),Ve);Tt.position.set(0,1,0),xe.add(Tt);const On=new Oe(new Wt(.64,.18,.64),new wt({color:4674921,metalness:.85,roughness:.25}));On.position.set(0,.55,0),xe.add(On);const wn=new Oe(new Wt(.14,.14,.14),new wt({color:14251782,roughness:.4}));wn.position.set(.36,.55,0),xe.add(wn);const cs=new wt({color:11580860,metalness:.88,roughness:.3}),Ci=new Oe(new Hn(3.6,1.4),cs);Ci.position.set(0,1.6,-.6),Ke.add(Ci);const lr=new Oe(new tn(.008,.008,2.4,16),Ve);lr.rotation.z=Math.PI/2,lr.position.set(0,1.95,-.58),Ke.add(lr);const cr=new wt({color:11817737,metalness:.8,roughness:.3}),ur=new wt({color:13938487,metalness:.9,roughness:.2}),Ai=new Oe(new tn(.015,.015,2.4),cr);Ai.rotation.z=Math.PI/2,Ai.position.set(0,-.28,-.2),xe.add(Ai),[[-.7,-.32,0],[-.35,-.32,0],[.45,-.32,0],[.85,-.32,0]].forEach(([Mt,dt,$t])=>{const Qn=new Oe(new Qf(.025,.06,16),ur);Qn.position.set(Mt,dt,$t),Qn.rotation.x=Math.PI,xe.add(Qn)});const nn=new An;nn.position.set(2.1,1.8,.15),nn.rotation.y=-.28,Ke.add(nn),fe.current=nn,nn.userData={interactiveType:"central",name:"Central Outfire VTS"};const Ur=new xg,us=Ur.load("/assets/tampa-central-moderna.png");us.colorSpace=In;const Nn=Ur.load("/assets/tela-ihm-display.jpg");Nn.colorSpace=In,$.current=Nn;const Or=Ur.load("/assets/tela-ihm-alarme.jpg");Or.colorSpace=In,K.current=Or;const Zn=new wt({color:1316378,roughness:.45,metalness:.8}),Hs=new wt({map:us,roughness:.35,metalness:.25}),ds=[Zn,Zn,Zn,Zn,Hs,Zn],fs=new Oe(new Wt(.72,.52,.22),ds);fs.castShadow=!0,nn.add(fs);const hs=new wt({map:Nn,roughness:.15,metalness:.05,emissive:16777215,emissiveMap:Nn,emissiveIntensity:.95});z.current=hs;const ps=new Oe(new Hn(.2,.15),hs);ps.position.set(0,0,.115),nn.add(ps);const ja=new wt({color:1579552,metalness:.9,roughness:.35}),Ws=new Oe(new Wt(.218,.168,.005),ja);Ws.position.set(0,0,.111),nn.add(Ws);const Qt=new wt({color:11580344,metalness:.95,roughness:.2}),N=new tn(.004,.004,.005,8);[[-.098,.072],[.098,.072],[-.098,-.072],[.098,-.072]].forEach(([Mt,dt])=>{const $t=new Oe(N,Qt);$t.rotation.x=Math.PI/2,$t.position.set(Mt,dt,.1155),nn.add($t)});const Y=new r0(16774890,2.2,5,Math.PI/3,.3);Y.position.set(2.4,2.4,1.6),Y.target=nn,Ke.add(Y);const le=new Oe(new tn(.016,.016,1.6,16),Ve);le.position.set(0,1.05,0),nn.add(le);const se=new Oe(new tn(.045,.045,.03,16),new wt({color:1118481,metalness:.8}));se.position.set(0,.275,0),nn.add(se);const Q=new wt({color:16711680,transparent:!0,opacity:.85,roughness:.1}),De=new Oe(new tn(.038,.042,.065,16),Q);De.position.set(0,.32,0),nn.add(De),ie.current=De;const je=new Oe(new Wt(.68,.02,.2),Zn);je.position.set(0,-.32,0),nn.add(je);const Ne=new wt({color:592396,roughness:.5}),qe=new Oe(new Wt(.24,.15,.14),Ne);qe.position.set(-.16,-.23,0),nn.add(qe);const Ge=new Oe(new Wt(.24,.15,.14),Ne);Ge.position.set(.16,-.23,0),nn.add(Ge);const et=new An;et.position.set(1.45,1.4,.08),Ke.add(et),X.current=et,et.userData={interactiveType:"botoeira",name:"Acionador Manual de Emergência"};const rt=new Oe(new Wt(.18,.24,.08),new wt({color:13373713,roughness:.3,metalness:.3}));rt.castShadow=!0,et.add(rt);const St=new Oe(new Wt(.14,.18,.015),new wt({color:16777215,transparent:!0,opacity:.45,roughness:.1}));St.position.set(0,0,.042),et.add(St);const Lt=new Oe(new Wt(.1,.06,.025),new wt({color:16436245,roughness:.3}));Lt.position.set(0,-.01,.048),et.add(Lt),q.current=Lt;const bt=new An;bt.position.set(-1.85,1.1,-.3),Ke.add(bt),bt.userData={interactiveType:"saponificante",name:"Cilindro Saponificante Classe K (Inox Cromado)"};const Vt=new wt({color:15857145,metalness:.96,roughness:.12}),Ot=new Oe(new tn(.13,.13,.82,32),Vt);Ot.castShadow=!0,bt.add(Ot);const st=new Oe(new Cr(.13,32,16,0,Math.PI*2,0,Math.PI/2),Vt);st.position.set(0,.41,0),bt.add(st);const Ft=new Oe(new Cr(.13,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),Vt);Ft.position.set(0,-.41,0),bt.add(Ft);const Rt=new wt({color:3355443,metalness:.8}),xn=new Oe(new Wt(.32,.04,.06),Rt);xn.position.set(0,.22,-.09),bt.add(xn);const li=new Oe(new Wt(.32,.04,.06),Rt);li.position.set(0,-.22,-.09),bt.add(li);const sn=new Oe(new tn(.032,.032,.02,16),new wt({color:13938487,metalness:.85}));sn.rotation.x=Math.PI/2,sn.position.set(0,.55,.08),bt.add(sn);const Gi=new Oe(new Zf(.028,16),new ji({color:2278750}));Gi.position.set(0,.55,.091),bt.add(Gi);const kt=new Oe(new tn(.022,.022,.12,16),new wt({color:13938487,metalness:.9}));kt.position.set(0,.52,0),bt.add(kt);const gt=new Oe(new tn(.132,.132,.12,32),new wt({color:13938487,metalness:.85,roughness:.2}));gt.position.set(0,.05,0),bt.add(gt);const Kt=new An;Kt.position.set(.85,2.7,-.35),Ke.add(Kt),Kt.userData={interactiveType:"co2",name:"Cilindro de CO2 (Injeção no Duto)"};const cn=new wt({color:14427686,metalness:.65,roughness:.28}),fn=new Oe(new tn(.09,.09,.95,32),cn);fn.castShadow=!0,Kt.add(fn);const dr=new Oe(new Cr(.09,32,16,0,Math.PI*2,0,Math.PI/2),cn);dr.position.set(0,.475,0),Kt.add(dr);const ci=new Oe(new Cr(.09,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),cn);ci.position.set(0,-.475,0),Kt.add(ci);const Va=new Oe(new tn(.025,.025,.14,16),new wt({color:13938487,metalness:.85}));Va.position.set(0,.6,0),Kt.add(Va);const ms=new Oe(new tn(.012,.012,.85,16),Ve);ms.rotation.z=Math.PI/2,ms.position.set(-.42,.66,.35),Kt.add(ms);const Hi=new Oe(new Wt(.74,.08,.64),new wt({color:16317180,roughness:.9,metalness:.05}));Hi.position.set(-.55,1.05,0),Hi.scale.set(.001,.001,.001),Hi.visible=!1,Ke.add(Hi),k.current=Hi;const Fn=new An;Ke.add(Fn),oe.current=Fn;const Wi=70,Xi=new eh(.08,1),fr=[];for(let Mt=0;Mt<Wi;Mt++){const dt=new Oe(Xi,new ji({color:16729344,transparent:!0,opacity:.85}));dt.position.set(-.55+(Math.random()-.5)*.5,1.05+Math.random()*.4,(Math.random()-.5)*.4),dt.userData={baseY:1.05,speedY:.8+Math.random()*1.5,scale:.4+Math.random()*.8},Fn.add(dt),fr.push(dt)}const vi=new An;Ke.add(vi),Pe.current=vi;const qi=50,wc=new Cr(.12,8,8),Ga=[];for(let Mt=0;Mt<qi;Mt++){const dt=new Oe(wc,new ji({color:2040877,transparent:!0,opacity:.4}));dt.position.set(-.55+(Math.random()-.5)*.6,1.3+Math.random()*1,(Math.random()-.5)*.4),dt.userData={speedY:.6+Math.random()*1,maxH:2.2},vi.add(dt),Ga.push(dt)}const hr=new An;Ke.add(hr),He.current=hr;const bc=80,Bo=new Cr(.025,8,8),gs=[];for(let Mt=0;Mt<bc;Mt++){const dt=new Oe(Bo,new ji({color:16777215,transparent:!0,opacity:.9}));dt.position.set(-.55,1.9,0),dt.userData={origY:1.98,speed:3.5+Math.random()*2,spread:(Math.random()-.5)*.4},hr.add(dt),gs.push(dt)}const Xs=new An;Ke.add(Xs),Ye.current=Xs;const Ec=35,xs=new Cr(.16,8,8),Fr=[];for(let Mt=0;Mt<Ec;Mt++){const dt=new Oe(xs,new ji({color:14870768,transparent:!0,opacity:.4}));dt.position.set((Math.random()-.5)*.4,2.7+Math.random()*.5,(Math.random()-.5)*.3),Xs.add(dt),Fr.push(dt)}const Ri=new _g,Ni=new mt,zo=Mt=>{var Qn,Pn;const dt=Te.domElement.getBoundingClientRect();Ni.x=(Mt.clientX-dt.left)/dt.width*2-1,Ni.y=-((Mt.clientY-dt.top)/dt.height)*2+1,Ri.setFromCamera(Ni,it);const $t=Ri.intersectObjects([et,nn,Ee,bt,Kt],!0);if($t.length>0){let Qe=$t[0].object;for(;Qe&&!((Qn=Qe.userData)!=null&&Qn.interactiveType)&&Qe.parent;)Qe=Qe.parent;if(Qe&&((Pn=Qe.userData)!=null&&Pn.interactiveType)){Te.domElement.style.cursor="pointer",C(Qe.userData.name);return}}Te.domElement.style.cursor="default",C(null)},jo=Mt=>{var Qn,Pn,Qe,_i;const dt=Te.domElement.getBoundingClientRect();Ni.x=(Mt.clientX-dt.left)/dt.width*2-1,Ni.y=-((Mt.clientY-dt.top)/dt.height)*2+1,Ri.setFromCamera(Ni,it);const $t=Ri.intersectObjects([et,nn,Ee,bt,Kt],!0);if($t.length>0){let Ht=$t[0].object;for(;Ht&&!((Qn=Ht.userData)!=null&&Qn.interactiveType)&&Ht.parent;)Ht=Ht.parent;((Pn=Ht==null?void 0:Ht.userData)==null?void 0:Pn.interactiveType)==="botoeira"?_t():((Qe=Ht==null?void 0:Ht.userData)==null?void 0:Qe.interactiveType)==="central"?nt("central"):((_i=Ht==null?void 0:Ht.userData)==null?void 0:_i.interactiveType)==="fritadeira"&&nt("fritadeira")}};Te.domElement.addEventListener("mousemove",zo),Te.domElement.addEventListener("click",jo);const qs=()=>{if(!e.current||!F.current||!L.current)return;const Mt=e.current.clientWidth,dt=e.current.clientHeight,$t=Mt<768;L.current.aspect=Mt/dt,L.current.fov=$t?58:45,L.current.updateProjectionMatrix(),F.current.setSize(Mt,dt)};window.addEventListener("resize",qs);let vs;const Ys=new a1,Ha=()=>{vs=requestAnimationFrame(Ha);const Mt=Ys.getDelta(),dt=Ys.getElapsedTime();it.position.lerp(te.current,.05),U.target.lerp(de.current,.05),U.update();const $t=_.current,Qn=l.current;if($t==="HEATING"||$t==="FIRE_ALARM"){Fn.visible=!0,vi.visible=!0,He.current.visible=!1,Ye.current.visible=!1;const Pn=$t==="FIRE_ALARM"?1:Math.max(.2,(Qn-.18)/.24);if(ee.current&&(ee.current.intensity=(2.5+Math.sin(dt*20)*1.5)*Pn,ee.current.color.setHex(Math.random()>.3?16729344:16755200)),fr.forEach((Qe,_i)=>{Qe.visible=!0,Qe.position.y+=Qe.userData.speedY*Mt,Qe.position.x+=Math.sin(dt*10+_i)*.006;const Ht=(Qe.position.y-Qe.userData.baseY)/1;Qe.scale.setScalar(Math.max(.01,(1-Ht)*Qe.userData.scale*Pn)),Qe.material.opacity=1-Ht,Qe.position.y>Qe.userData.baseY+.9&&(Qe.position.y=Qe.userData.baseY,Qe.position.x=-.55+(Math.random()-.5)*.5,Qe.position.z=(Math.random()-.5)*.4)}),Ga.forEach(Qe=>{Qe.visible=!0,Qe.position.y+=Qe.userData.speedY*Mt,Qe.scale.setScalar(Pn),Qe.position.y>Qe.userData.maxH&&(Qe.position.y=1.3,Qe.position.x=-.55+(Math.random()-.5)*.4)}),$t==="FIRE_ALARM"){const Qe=Math.sin(dt*24)>0;re.current&&ie.current&&(re.current.intensity=Qe?5:0,ie.current.material.emissive=Qe?new At(16711680):new At(0))}}else if($t==="SUPPRESSION"){Fn.visible=!0,He.current.visible=!0,Ye.current.visible=!0,fr.forEach(Qe=>{Qe.scale.multiplyScalar(.92),Qe.scale.x<.05&&(Qe.visible=!1)}),ee.current&&(ee.current.intensity=Math.max(0,ee.current.intensity-Mt*4)),gs.forEach((Qe,_i)=>{Qe.visible=!0,Qe.position.y-=Qe.userData.speed*Mt,Qe.position.x+=Math.sin(dt*15+_i)*.01,Qe.position.y<1.05&&(Qe.position.y=Qe.userData.origY,Qe.position.x=-.55+Qe.userData.spread)}),k.current&&(k.current.visible=!0,k.current.scale.lerp(new Z(1,1,1),.08)),Fr.forEach((Qe,_i)=>{Qe.visible=!0,Qe.position.y+=Math.sin(dt*3+_i)*.004,Qe.position.x+=Math.cos(dt*2+_i)*.004});const Pn=Math.sin(dt*30)>0;re.current&&ie.current&&(re.current.intensity=Pn?4:.2,ie.current.material.emissive=Pn?new At(16711680):new At(3342336))}else $t==="EXTINGUISHED"?(Fn.visible=!1,vi.visible=!1,He.current.visible=!1,Ye.current.visible=!1,ee.current&&(ee.current.intensity=0),k.current&&(k.current.visible=!0,k.current.scale.set(1,1,1)),re.current&&ie.current&&(re.current.intensity=0,ie.current.material.emissive=new At(0))):(Fn.visible=!1,vi.visible=!1,He.current.visible=!1,Ye.current.visible=!1,ee.current&&(ee.current.intensity=0),k.current&&(k.current.visible=!1),re.current&&ie.current&&(re.current.intensity=0,ie.current.material.emissive=new At(0)));z.current&&($t==="FIRE_ALARM"||$t==="SUPPRESSION"?K.current&&z.current.map!==K.current&&(z.current.map=K.current,z.current.emissiveMap=K.current,z.current.emissiveIntensity=1,z.current.needsUpdate=!0):$.current&&z.current.map!==$.current&&(z.current.map=$.current,z.current.emissiveMap=$.current,z.current.emissiveIntensity=.95,z.current.needsUpdate=!0)),Te.render(Ke,it)};return Ha(),()=>{cancelAnimationFrame(vs),window.removeEventListener("resize",qs),Te.domElement.removeEventListener("mousemove",zo),Te.domElement.removeEventListener("click",jo),Te.dispose()}},[_t,Se]),u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"splash-hero",className:"relative w-full h-[100dvh] bg-[#05070a] flex flex-col items-center justify-center select-none overflow-hidden z-20",children:[u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-[#0a0c10]/60 to-[#05070a] pointer-events-none"}),u.jsx("div",{className:"relative z-10 flex flex-col items-center justify-center px-4 text-center",children:u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"Outfire Sistemas Contra Incêndio",className:"w-80 sm:w-96 md:w-[480px] max-w-[88vw] object-contain drop-shadow-[0_0_45px_rgba(212,175,55,0.4)] select-none transition-transform duration-700 hover:scale-105"})}),u.jsx("button",{onClick:yt,"aria-label":"Descer para a simulação da cozinha",className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none",children:u.jsx("div",{className:"w-12 h-12 rounded-full border border-[#d4af37]/50 bg-black/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.35)] group-hover:border-[#d4af37] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all",children:u.jsx(Tm,{className:"w-6 h-6 text-[#d4af37] animate-bounce"})})})]}),u.jsx("section",{id:"hero-3d",ref:s,className:"relative w-full h-[450vh] bg-[#07080a]",children:u.jsxs("div",{ref:e,className:"sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col justify-between select-none",children:[u.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full block z-0 outline-none"}),u.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none",children:[u.jsxs("div",{className:"flex flex-col gap-1.5 pointer-events-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]",children:[u.jsx(z0,{className:"w-3.5 h-3.5 text-[#d4af37] animate-pulse"}),u.jsx("span",{children:"Simulador 3D Autônomo Outfire"}),u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#d4af37]"}),u.jsx("span",{className:"text-[11px] font-mono text-gray-300",children:"NBR 14518"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${m==="STANDBY"?"bg-emerald-950/80 border-emerald-500/40 text-emerald-300":m==="HEATING"?"bg-amber-950/80 border-amber-500/50 text-amber-300":m==="FIRE_ALARM"?"bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]":m==="SUPPRESSION"?"bg-cyan-950/90 border-cyan-500 text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.5)]":"bg-emerald-900/90 border-emerald-400 text-emerald-200"}`,children:[m==="STANDBY"&&u.jsx(fc,{className:"w-4 h-4 text-emerald-400"}),m==="HEATING"&&u.jsx(Ro,{className:"w-4 h-4 text-amber-400 animate-pulse"}),m==="FIRE_ALARM"&&u.jsx(Ro,{className:"w-4 h-4 text-red-400 animate-bounce"}),m==="SUPPRESSION"&&u.jsx(Mv,{className:"w-4 h-4 text-cyan-300 animate-spin"}),m==="EXTINGUISHED"&&u.jsx(xc,{className:"w-4 h-4 text-emerald-400"}),A.systemStatus]}),m==="FIRE_ALARM"&&u.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-pulse",children:["DISPARO EM ",S,"s"]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto bg-black/80 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl",children:[u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(Ro,{className:`w-3.5 h-3.5 ${A.temp>200?"text-red-400 animate-pulse":"text-amber-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"TEMP. ÓLEO"}),u.jsxs("span",{className:"text-xs font-bold text-white font-mono",children:[A.temp,"°C"]})]})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(kv,{className:`w-3.5 h-3.5 ${A.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"VÁLVULA GÁS"}),u.jsx("span",{className:`text-xs font-bold font-mono ${A.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`,children:A.gasStatus})]})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(G0,{className:`w-3.5 h-3.5 ${A.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"EXAUSTÃO"}),u.jsx("span",{className:`text-xs font-bold font-mono ${A.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`,children:A.exhaustStatus})]})]})]})]}),v&&u.jsxs("div",{className:"absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse",children:[u.jsx(B0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),u.jsxs("span",{children:[v," — Clique para interagir"]})]}),Fe&&u.jsxs("div",{className:"absolute top-44 left-1/2 -translate-x-1/2 z-20 pointer-events-auto px-5 py-3 rounded-2xl bg-red-950/95 backdrop-blur-md border border-red-500 text-white shadow-[0_0_40px_rgba(239,68,68,0.7)] flex flex-col items-center gap-2 text-center max-w-md animate-pulse",children:[u.jsxs("div",{className:"flex items-center gap-2 text-red-300 font-bold text-xs uppercase tracking-wider",children:[u.jsx(Rm,{className:"w-4 h-4 text-red-400"}),u.jsx("span",{children:"Acionador Manual Disparado • Contagem de Segurança"})]}),u.jsxs("div",{className:"font-mono text-2xl font-black text-[#67e8f9]",children:["Supressão em ",S,"s"]}),u.jsxs("p",{className:"text-[11px] text-gray-200",children:["O saponificante ",u.jsx("strong",{children:"NÃO"})," é descarregado de imediato. Aguarda zerar a contagem para evacuação da cozinha ou cancelamento."]}),u.jsxs("button",{onClick:qt,className:"mt-1 px-4 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 border border-white/30",children:[u.jsx(dc,{className:"w-3.5 h-3.5 text-white"}),u.jsx("span",{children:"Toque aqui para Abortar Disparo"})]})]}),u.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 flex flex-col items-center gap-3",children:[u.jsxs("div",{className:"flex items-center gap-3 bg-black/85 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#d4af37]/40 shadow-[0_10px_35px_rgba(0,0,0,0.9)] max-w-full overflow-hidden",children:[u.jsx("button",{onClick:Nt,"aria-label":"Avançar simulação para baixo",className:"w-10 h-10 rounded-full bg-gradient-to-b from-[#d4af37]/25 to-black/80 border border-[#d4af37]/60 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-pointer shrink-0",children:u.jsx(Tm,{className:`w-5 h-5 text-[#d4af37] ${m!=="STANDBY"?"animate-bounce":"animate-pulse"}`})}),u.jsxs("div",{className:"flex items-center gap-2 truncate",children:[m==="STANDBY"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-gray-200",children:["Cozinha Industrial em Standby • ",u.jsx("span",{className:"text-[#d4af37]",children:"Role para descer"})]})]}),m==="HEATING"&&u.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/60 text-amber-300 font-black text-xs shrink-0",children:"FASE 1"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-amber-200 truncate",children:["Princípio de Incêndio (Óleo a ",A.temp,"°C) — Continue descendo"]})]}),m==="FIRE_ALARM"&&u.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-red-600/30 border border-red-500 text-red-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.5)]",children:"FASE 2"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-red-200 truncate",children:["Alarme Térmico 145°C Disparado • Contagem: ",S,"s"]})]}),m==="SUPPRESSION"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-cyan-600/30 border border-cyan-400 text-cyan-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]",children:"FASE 3"}),u.jsx("span",{className:"text-xs sm:text-sm font-bold text-cyan-200 truncate",children:"Supressão Ativa: Saponificante Classe K + CO2 no duto"})]}),m==="EXTINGUISHED"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-emerald-600/30 border border-emerald-400 text-emerald-200 font-black text-xs shrink-0",children:"FASE 4"}),u.jsx("span",{className:"text-xs sm:text-sm font-bold text-emerald-200 truncate",children:"Cozinha Preservada • NBR 14518 Cumprida — Continue descendo"})]})]})]}),u.jsxs("div",{className:"w-full flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[u.jsxs("button",{onClick:_t,disabled:m==="SUPPRESSION"||m==="EXTINGUISHED"||Fe,className:`py-2 px-4 rounded-xl font-black text-xs flex items-center gap-2 transition-all duration-300 border ${m==="FIRE_ALARM"?"bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_25px_rgba(225,29,72,0.8)] scale-105":"bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg"}`,children:[u.jsx(Rm,{className:"w-3.5 h-3.5 text-red-400"}),u.jsx("span",{children:"🚨 Disparar Acionador Manual"})]}),(Fe||m==="FIRE_ALARM")&&u.jsxs("button",{onClick:qt,className:"py-2 px-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-bold text-xs flex items-center gap-1.5 border border-amber-500/40 transition-all active:scale-95",children:[u.jsx(dc,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Abortar Disparo"})]}),(m==="EXTINGUISHED"||m==="FIRE_ALARM"||m==="SUPPRESSION")&&u.jsxs("button",{onClick:Ut,className:"py-2 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 border border-white/15 transition-all duration-200 active:scale-95",children:[u.jsx(j0,{className:"w-3 h-3"}),u.jsx("span",{children:"Restaurar"})]})]}),u.jsxs("div",{className:"flex items-center gap-1 bg-black/75 backdrop-blur-md p-1 rounded-xl border border-white/10 text-xs",children:[u.jsxs("span",{className:"text-[10px] text-gray-400 px-1.5 font-mono flex items-center gap-1",children:[u.jsx(_v,{className:"w-3 h-3 text-[#d4af37]"})," Câmera:"]}),u.jsx("button",{onClick:()=>nt("geral"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${I==="geral"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Geral"}),u.jsx("button",{onClick:()=>nt("central"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${I==="central"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Central"}),u.jsx("button",{onClick:()=>nt("fritadeira"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${I==="fritadeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Fritadeira"}),u.jsx("button",{onClick:()=>nt("botoeira"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${I==="botoeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Botoeira"})]})]})]})]})})]})},xb=()=>{const[s,e]=Ue.useState("3d"),t=Ue.useRef(null),r=Ue.useRef(null),[o,l]=Ue.useState(!1),d=Ue.useRef(!1);d.current=o;const[f,p]=Ue.useState(!1),m=Ue.useRef(!1);m.current=f;const[x,_]=Ue.useState(null),S=Ue.useRef(null),M=Ue.useRef(null),T=Ue.useRef(null),A=Ue.useRef(null),y=()=>{l(D=>!D)},v=()=>{p(D=>!D)},C=()=>{T.current&&A.current&&(A.current.position.set(1.8,1.2,2.2),T.current.target.set(0,0,0),T.current.update())};Ue.useEffect(()=>{if(s!=="3d"||!t.current||!r.current)return;const D=r.current.clientWidth,O=r.current.clientHeight,L=new mg;L.background=new At(921879);const F=new Kn(40,D/O,.1,100);F.position.set(1.8,1.2,2.2),A.current=F;const j=new Eg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});j.setSize(D,O),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.shadowMap.enabled=!0,j.shadowMap.type=Of,j.toneMapping=vc,j.toneMappingExposure=1.15;const E=new Cg(F,j.domElement);E.enableDamping=!0,E.dampingFactor=.05,E.minDistance=1.2,E.maxDistance=6,E.target.set(0,0,0),T.current=E;const R=new vg(16774890,.9);L.add(R);const z=new Nf(16777215,1.5);z.position.set(3,4,3),z.castShadow=!0,L.add(z);const $=new Nf(13938487,.85);$.position.set(-3,-2,-3),L.add($);const K=new ji({color:0,transparent:!0,opacity:.35}),re=new Oe(new Hn(2.2,1.4),K);re.rotation.x=-Math.PI/2,re.position.set(0,-.65,0),L.add(re);const ie=new xg,ee=ie.load("/assets/tampa-central-moderna.png");ee.colorSpace=In;const q=new wt({color:1316379,metalness:.85,roughness:.35}),X=new wt({map:ee,metalness:.2,roughness:.35}),fe=[q,q,q,q,X,q],ae=new Oe(new Wt(1.4,1,.58),fe);ae.castShadow=!0,ae.receiveShadow=!0,L.add(ae);const k=new ji({color:460810}),oe=new Oe(new Hn(.88,.22),k);oe.rotation.x=-Math.PI/2,oe.position.set(0,.501,-.05),L.add(oe);const Pe=new Oe(new Hn(.7,.22),k);Pe.rotation.x=Math.PI/2,Pe.position.set(0,-.501,-.05),L.add(Pe);const He=ie.load("/assets/tela-ihm-display.jpg");He.colorSpace=In;const Ye=new wt({map:He,roughness:.2,metalness:.05,emissive:16777215,emissiveMap:He,emissiveIntensity:.22}),te=new Oe(new Hn(.219,.164),Ye);te.position.set(0,0,.295),L.add(te);const de=new wt({color:1579552,metalness:.9,roughness:.35}),Se=new Oe(new Wt(.238,.182,.008),de);Se.position.set(0,0,.291),L.add(Se);const Fe=new wt({color:11580344,metalness:.95,roughness:.2}),Le=new tn(.004,.004,.006,8);[[-.108,.08],[.108,.08],[-.108,-.08],[.108,-.08]].forEach(([we,me])=>{const pe=new Oe(Le,Fe);pe.rotation.x=Math.PI/2,pe.position.set(we,me,.295),L.add(pe)});const _t=new ji({color:460810}),qt=new Oe(new Hn(.04,.12),_t);qt.rotation.y=Math.PI,qt.position.set(-.5,.3,-.291),L.add(qt);const yt=new Oe(new Hn(.04,.12),_t);yt.rotation.y=Math.PI,yt.position.set(.5,.3,-.291),L.add(yt);const Nt=new wt({color:11580344,metalness:.9,roughness:.2}),Ut=new tn(.012,.012,.015,8),nt=new An;nt.position.set(0,0,-.05),L.add(nt),S.current=nt;const lt=new wt({color:2040619,metalness:.8,roughness:.35}),P=new Oe(new Wt(.95,.02,.25),lt);P.position.set(0,.505,0),P.userData={isPsu:!0,name:"Tampa da Fonte de Alimentação"},nt.add(P),[[-.43,.518,-.09],[-.43,.518,.09],[.43,.518,-.09],[.43,.518,.09]].forEach(([we,me,pe])=>{const xe=new Oe(Ut,Nt);xe.position.set(we,me,pe),nt.add(xe)});const Ke=new wt({color:13948120,metalness:.9,roughness:.2}),ht=new Oe(new Wt(.85,.44,.2),Ke);ht.position.set(0,.27,0),ht.userData={isPsu:!0,name:"Fonte de Alimentação Andeli MS-350-24 (24V Industrial)"},nt.add(ht);const it=new ji({color:15381256}),Te=new Oe(new Hn(.24,.08),it);Te.position.set(0,.27,.101),nt.add(Te);const U=new An;U.position.set(0,0,-.05),L.add(U),M.current=U;const w=new wt({color:2040619,metalness:.8,roughness:.35}),H=new Oe(new Wt(.74,.02,.24),w);H.position.set(0,-.505,0),H.userData={isBattery:!0,name:"Tampa da Gaveta de Baterias"},U.add(H),[[-.33,-.518,-.09],[-.33,-.518,.09],[.33,-.518,-.09],[.33,-.518,.09]].forEach(([we,me,pe])=>{const xe=new Oe(Ut,Nt);xe.position.set(we,me,pe),U.add(xe)});const he=new wt({color:592397,roughness:.5}),ge=new Oe(new Wt(.3,.38,.18),he);ge.position.set(-.18,-.305,0),ge.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},U.add(ge);const ue=new Oe(new Wt(.3,.38,.18),he);ue.position.set(.18,-.305,0),ue.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},U.add(ue);const Ve=new wt({color:2450411,metalness:.8}),Ce=new wt({color:15680580,metalness:.8}),We=new Oe(new tn(.012,.012,.03),Ve);We.position.set(-.24,-.1,.05),U.add(We);const at=new Oe(new tn(.012,.012,.03),Ce);at.position.set(-.12,-.1,.05),U.add(at);const _e=new Oe(new tn(.012,.012,.03),Ve);_e.position.set(.12,-.1,.05),U.add(_e);const Re=new Oe(new tn(.012,.012,.03),Ce);Re.position.set(.24,-.1,.05),U.add(Re);const ze=new _g,ke=new mt,Ee=we=>{var xe,ot;const me=j.domElement.getBoundingClientRect();ke.x=(we.clientX-me.left)/me.width*2-1,ke.y=-((we.clientY-me.top)/me.height)*2+1,ze.setFromCamera(ke,F);const pe=ze.intersectObjects([nt,U,ae],!0);if(pe.length>0){let Dt=pe[0].object;if((xe=Dt.userData)!=null&&xe.isPsu){j.domElement.style.cursor="pointer",_(d.current?"⚡ Fonte Aberta (Clique para recolher)":"⚡ Fonte de Alimentação (Clique para subir gaveta)");return}else if((ot=Dt.userData)!=null&&ot.isBattery){j.domElement.style.cursor="pointer",_(m.current?"🔋 Baterias Abertas (Clique para recolher)":"🔋 Baterias de Backup (Clique para descer gaveta)");return}else{j.domElement.style.cursor="grab",_("Gabinete Central Outfire (Arraste para girar 360°)");return}}j.domElement.style.cursor="default",_(null)},pt=we=>{var xe,ot;const me=j.domElement.getBoundingClientRect();ke.x=(we.clientX-me.left)/me.width*2-1,ke.y=-((we.clientY-me.top)/me.height)*2+1,ze.setFromCamera(ke,F);const pe=ze.intersectObjects([nt,U],!0);if(pe.length>0){const Dt=pe[0].object;(xe=Dt.userData)!=null&&xe.isPsu?l(Tt=>!Tt):(ot=Dt.userData)!=null&&ot.isBattery&&p(Tt=>!Tt)}};j.domElement.addEventListener("mousemove",Ee),j.domElement.addEventListener("click",pt);const G=()=>{if(!r.current||!j||!F)return;const we=r.current.clientWidth,me=r.current.clientHeight;F.aspect=we/me,F.updateProjectionMatrix(),j.setSize(we,me)};window.addEventListener("resize",G);let Ie;const Me=()=>{Ie=requestAnimationFrame(Me);const we=d.current?.52:0;S.current&&(S.current.position.y+=(we-S.current.position.y)*.12);const me=m.current?-.52:0;M.current&&(M.current.position.y+=(me-M.current.position.y)*.12),E.update(),j.render(L,F)};return Me(),()=>{cancelAnimationFrame(Ie),window.removeEventListener("resize",G),j.domElement.removeEventListener("mousemove",Ee),j.domElement.removeEventListener("click",pt),j.dispose()}},[s]);const I=[{icon:bv,title:"Multicoifa Independente (Até 3 Coifas)",desc:"Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais."},{icon:Cm,title:"IHM Touchscreen Inteligente",desc:"Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás."},{icon:Ov,title:"Alertas Inteligentes por Voz Falada",desc:"Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza."},{icon:vv,title:"Agenda Semanal Automática de Gás",desc:"Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos."},{icon:Od,title:"Proteção Anti-Disparo com Botão Abortar",desc:"Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros."},{icon:z0,title:"Alarme Convencional Segregado",desc:"Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados."}];return u.jsxs("section",{id:"central-vts",className:"py-24 bg-[#08090c] relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"}),u.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4",children:[u.jsx(Cm,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia e Automação Nacional"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Comando Inteligente ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Outfire VTS 32S3"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, automação de gás e proteção anti-disparo acidental na ponta dos seus dedos."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20",children:[u.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[u.jsxs("div",{ref:r,className:"relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group",children:[s==="3d"&&u.jsxs("div",{className:"relative w-full h-full",children:[u.jsx("canvas",{ref:t,className:"w-full h-full block outline-none cursor-grab active:cursor-grabbing"}),x&&u.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/50 text-xs text-[#f3e5ab] font-bold shadow-glow-gold",children:x}),u.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-auto",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("button",{onClick:y,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${o?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[u.jsx(Bv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:o?"Recolher Fonte":"Subir Fonte"})]}),u.jsxs("button",{onClick:v,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${f?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[u.jsx(mv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:f?"Recolher Baterias":"Descer Baterias"})]})]}),u.jsx("button",{onClick:C,title:"Resetar Câmera",className:"p-1.5 rounded-lg bg-black/80 hover:bg-black text-[#f3e5ab] border border-[#d4af37]/30 transition-all",children:u.jsx(j0,{className:"w-4 h-4"})})]})]}),s==="interno"&&u.jsx("img",{src:"/assets/central-outfire-interno.jpg",alt:"Placa e Relés Internos da Central Outfire",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),s==="instalado"&&u.jsx("img",{src:"/assets/central-outfire-instalada.jpg",alt:"Central Outfire Instalada em Cozinha Real",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),u.jsxs("div",{className:"absolute top-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab] pointer-events-none",children:[s==="3d"&&"Gabinete 3D Interativo (Gire 360° com o mouse/toque)",s==="interno"&&"Eletrônica Robusta, Relés de Potência & Bornes",s==="instalado"&&"Instalação Real em Cozinha Profissional"]})]}),u.jsxs("div",{className:"flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md",children:[u.jsxs("button",{onClick:()=>e("3d"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${s==="3d"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:[u.jsx(Uo,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Gabinete 3D Interativo"})]}),u.jsx("button",{onClick:()=>e("interno"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="interno"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Eletrônica Interna"}),u.jsx("button",{onClick:()=>e("instalado"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="instalado"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Instalação Real"})]})]}),u.jsx("div",{className:"lg:col-span-5 space-y-4",children:u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-black text-white font-sans",children:"Painel Central VTS 32S3"}),u.jsx("span",{className:"text-xs text-[#e5c05d] font-mono font-bold",children:"AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518"})]}),u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]",children:u.jsx(Uv,{className:"w-6 h-6"})})]}),u.jsxs("div",{className:"space-y-3.5 text-sm",children:[u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(rs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Dupla Ação de Supressão:"})," Saponificante na cocção + CO2 no duto e fechamento automático dos dampers."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(rs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Corte de Gás e Exaustor:"})," Intertravamento elétrico instantâneo ao sinal de disparo."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(rs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Detecção Térmica Regulável:"})," Calibração em 145°C na coifa e 300°C no duto."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(rs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Bateria de Backup Interna:"})," Funcionamento ininterrupto mesmo com queda de rede."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(rs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Menu protegido por senha:"})," Previne alterações indevidas por pessoas não autorizadas."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(rs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Opção de Anular Disparo:"})," Sistema inteligente com botão de cancelamento na IHM para evitar disparos acidentais ou alarmes falsos."]})]})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[u.jsxs("a",{href:"#calculadora",className:"flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx("span",{children:"Dimensionar Cozinha"}),u.jsx(ic,{className:"w-4 h-4 fill-black"})]}),u.jsxs("a",{href:"/assets/Manual_Tecnico_OutFire_2026.pdf",download:"Manual_Tecnico_OutFire_2026.pdf",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all flex items-center justify-center gap-2",children:[u.jsx(k0,{className:"w-4 h-4 text-[#d4af37]"}),u.jsx("span",{children:"Baixar Manual Técnico"})]})]})]})})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:I.map((D,O)=>{const L=D.icon;return u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm",children:u.jsx(L,{className:"w-6 h-6"})}),u.jsx("h4",{className:"text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors",children:D.title}),u.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:D.desc})]},O)})})]})]})},vb=()=>u.jsx("section",{id:"por-que-outfire",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Od,{className:"w-3.5 h-3.5"}),"Entenda o Risco Real em Cozinhas Industriais"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Por Que Extintores Comuns e Água ",u.jsx("br",{}),u.jsx("span",{className:"text-red-500",children:"São Fatais em Incêndio de Óleo?"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[u.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30",children:"PERIGO EXTREMO"}),u.jsx(dc,{className:"w-7 h-7 text-red-500"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Jogar Água em Óleo Fervente"}),u.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em ",u.jsx("strong",{children:"1.700 vezes"}),"."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[u.jsx(Ro,{className:"w-4 h-4 text-red-400"}),"Efeito Bola de Fogo (BLEVE):"]}),u.jsx("p",{children:"O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold",children:"Resultado: Tragédia & Risco de Morte"})]}),u.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:"INEFICAZ NA PRÁTICA"}),u.jsx(dc,{className:"w-7 h-7 text-amber-500"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Extintor Manual de Pó (ABC)"}),u.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["Extintores de pó químico comum sufocam a chama por poucos segundos, mas ",u.jsx("strong",{children:"não resfriam a massa de óleo"}),", que permanece acima do ponto de ignição."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[u.jsx(Od,{className:"w-4 h-4 text-amber-400"}),"Reignição e Sujeira Tóxica:"]}),u.jsx("p",{children:"Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold",children:"Resultado: Reignição e Perda Total"})]}),u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#1a170e]/80 via-[#0e1015] to-[#08090c] relative flex flex-col justify-between shadow-glow-gold",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-black bg-[#d4af37] text-black px-3 py-1 rounded-full shadow-glow-gold",children:"SOLUÇÃO DEFINITIVA OUTFIRE"}),u.jsx(xc,{className:"w-7 h-7 text-[#d4af37]"})]}),u.jsx("h3",{className:"text-xl font-black text-white mb-2 font-sans",children:"Sistema Automatizado Outfire"}),u.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:["Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado ",u.jsx("strong",{children:"saponificação"}),"."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[#14171e] border border-[#d4af37]/30 text-xs text-[#f3e5ab] space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold text-[#e5c05d]",children:[u.jsx(Uo,{className:"w-4 h-4 text-[#d4af37]"}),"Manta Espumosa e Resfriamento:"]}),u.jsx("p",{className:"text-gray-300",children:"Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-mono text-[#e5c05d] font-bold",children:"Resultado: Fogo 100% Extinto & Cozinha Salva"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center",children:[u.jsxs("div",{className:"p-4",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-red-500 font-mono",children:"65%"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-amber-400 font-mono",children:"360°C"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"temperatura crítica em que o óleo vegetal entra em autoignição espontânea."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-emerald-400 font-mono",children:"0 seg"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-blue-400 font-mono",children:"100%"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB)."})]})]})]})}),_b=()=>{const s=[{code:"ABNT NBR 14518",title:"Sistemas de Ventilação para Cozinhas Profissionais",authority:"Associação Brasileira de Normas Técnicas",details:"Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.",highlights:["Intertravamento obrigatório de gás e energia elétrica","Desligamento automático do sistema de exaustão mecânica","Proteção específica por agente Classe K nos aparelhos de queima","Dampers corta-fogo para bloqueio de propagação em dutos"]},{code:"NFPA 96 & NFPA 17A",title:"Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations",authority:"National Fire Protection Association (USA)",details:"Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.",highlights:["Tempo máximo de resposta de detecção térmica","Cobertura milimétrica por bico aspersor calibrado","Mínimo de autonomia de agente extintor para resfriamento total","Acionador manual de emergência em rota de fuga"]},{code:"Instruções Técnicas do Corpo de Bombeiros",title:"Emissão e Renovação de AVCB / CLCB",authority:"Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais",details:"Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.",highlights:["Condição mandatória para aprovação em vistoria física","Evita multas pesadas e interdição cautelar imediata da cozinha","Garante laudo ART emitido por Engenheiro Mecânico credenciado","Laudo de comissionamento e teste hidrostático"]}];return u.jsx("section",{id:"normas",className:"py-24 bg-[#08090c] relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Pv,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Conformidade Regulatória Obrigatória"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Normas Técnicas & Exigências ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"do Corpo de Bombeiros (AVCB)"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro."})]}),u.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:s.map((e,t)=>u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-[#d4af37]/15 text-[#e5c05d] px-3 py-1 rounded-full border border-[#d4af37]/30",children:e.code}),u.jsx(wv,{className:"w-6 h-6 text-[#d4af37]"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-1 font-sans",children:e.title}),u.jsx("span",{className:"text-xs text-[#e5c05d] block mb-4 font-mono font-bold",children:e.authority}),u.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:e.details}),u.jsx("div",{className:"space-y-2.5 pt-4 border-t border-white/10",children:e.highlights.map((r,o)=>u.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-gray-300",children:[u.jsx(xc,{className:"w-4 h-4 text-[#d4af37] shrink-0 mt-0.5"}),u.jsx("span",{children:r})]},o))})]}),u.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold",children:[u.jsx("span",{children:"100% Atendido pelo Sistema Outfire"}),u.jsx(Sv,{className:"w-4 h-4"})]})]},t))}),u.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0",children:u.jsx(xv,{className:"w-8 h-8"})}),u.jsxs("div",{className:"flex-1 text-center md:text-left",children:[u.jsx("h4",{className:"text-lg sm:text-xl font-bold text-white mb-1",children:"Atenção: Shoppings e Seguradoras não toleram improvisos!"}),u.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed",children:["Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a ",u.jsx("strong",{children:"NBR 14518"}),", as companhias de seguro negam o pagamento da indenização por infração grave às normas. Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja."]})]}),u.jsx("div",{className:"shrink-0",children:u.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping.",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center",children:"Consultar Engenheiro Outfire"})})]})]})})},yb=({onAddToCart:s})=>{const[e,t]=Ue.useState(1),[r,o]=Ue.useState(9),[l,d]=Ue.useState(!0),[f,p]=Ue.useState([{id:1,name:"Coifa Principal (Cocção Pesada)",lengthMeters:2.5,appliances:[{id:"1",name:"Fritadeira Industrial (2 cubas)",type:"fritadeira",icon:"🍟",widthMeters:.6},{id:"2",name:"Fogão Industrial 6 Bocas",type:"fogao",icon:"🍳",widthMeters:1.1},{id:"3",name:"Chapa de Lanche / Bifeira",type:"chapa",icon:"🥩",widthMeters:.8}]}]),m=y=>{if(t(y),y>f.length){const v=[...f];for(let C=f.length+1;C<=y;C++)v.push({id:C,name:`Coifa Setor ${C}`,lengthMeters:2,appliances:[{id:`${C}-1`,name:"Fogão 4 Bocas",type:"fogao",icon:"🍳",widthMeters:.9},{id:`${C}-2`,name:"Chapa Elétrica/Gás",type:"chapa",icon:"🥩",widthMeters:.8}]});p(v)}else y<f.length&&p(f.slice(0,y))},x=(y,v)=>{const C=[...f];C[y].lengthMeters=Math.max(1,Math.min(8,Number(v.toFixed(1)))),p(C)},_=(y,v)=>{const C={fritadeira:"Fritadeira Industrial",fogao:"Fogão Industrial",chapa:"Chapa Profissional",charbroiler:"Charbroiler / Grelha"},I={fritadeira:"🍟",fogao:"🍳",chapa:"🥩",charbroiler:"🔥"},D={fritadeira:.5,fogao:.9,chapa:.8,charbroiler:.7},O=[...f];O[y].appliances.push({id:Math.random().toString(36).substring(7),name:C[v],type:v,icon:I[v],widthMeters:D[v]}),p(O)},S=(y,v)=>{const C=[...f];C[y].appliances.splice(v,1),p(C)},M=Ue.useMemo(()=>{let y=0,v=0,C=0,I=0;f.forEach(q=>{y+=q.appliances.length,v+=2,l&&(C+=1);const X=Math.max(1,Math.round(q.lengthMeters/.9));I+=X});const D=y+v+C,O=D*2,L=Math.max(9,O);let F=9;L>9&&L<=16?F=16:L>16&&L<=25?F=25:L>25&&(F=Math.ceil(L/9)*9);const j=Math.max(1,Math.ceil(r/3)),E=j,R=Math.max(10,Math.ceil(r/3*5)),z=R<=10?10:R<=25?25:45,$=`Central Outfire VTS 32S3 (${e} Coifa${e>1?"s":""} Independentes)`,K=e===1?8900:e===2?14500:19800,re=D*185+j*210,ie=I*295+E*320,ee=K+re+ie+1200;return{applianceNozzlesCount:y,plenumNozzlesCount:v,damperNozzlesCount:C,totalSaponificanteNozzles:D,saponificanteLiters:L,recommendedSaponificanteCylinderLiters:F,hoodSensorsCount:I,co2NozzlesCount:j,ductSensorsCount:E,co2Kg:R,recommendedCo2CylinderKg:z,centralModel:$,hoodsCount:e,dampersCount:e,gasValvesCount:1,estimatedPriceBRL:ee}},[f,r,l,e]),T=()=>{let y=`🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*

`;y+=`Olá, equipe de Engenharia da Outfire! Realizei o dimensionamento da minha cozinha no site outfire.com.br e gostaria de uma proposta formal:

`,y+=`🏢 *Configuração da Cozinha:*
`,y+=`• Quantidade de Coifas: ${e} independente(s)
`,y+=`• Comprimento do Duto de Exaustão: ${r} metros

`,f.forEach((C,I)=>{y+=`📍 *Coifa ${I+1} (${C.lengthMeters}m):*
`,y+=`  Equipamentos sob a coifa: ${C.appliances.map(D=>D.name).join(", ")||"Nenhum"}
`}),y+=`
⚙️ *Memória de Cálculo de Supressão:*
`,y+=`• Bicos de Saponificante (Classe K): ${M.totalSaponificanteNozzles} bicos (${M.applianceNozzlesCount} equipamentos + ${M.plenumNozzlesCount} pleno + ${M.damperNozzlesCount} colarinho)
`,y+=`• Volume de Saponificante: ${M.saponificanteLiters} Litros (Cilindro recomendado: ${M.recommendedSaponificanteCylinderLiters}L)
`,y+=`• Sensores Reguláveis na Coifa (145°C): ${M.hoodSensorsCount} unidades
`,y+=`• Bicos de CO2 no Duto: ${M.co2NozzlesCount} unidades (1 a cada 3m)
`,y+=`• Sensores Reguláveis no Duto (300°C): ${M.ductSensorsCount} unidades (1 a cada 3m)
`,y+=`• Volume de CO2 no Duto: ${M.recommendedCo2CylinderKg} Kg (mínimo de 10kg)
`,y+=`• Intertravamento: Válvula de corte de gás + Fechamento de Dampers e Exaustor
`,y+=`• Modelo da Central: ${M.centralModel}

`,y+="Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!";const v=encodeURIComponent(y);window.open(`https://wa.me/5515996576807?text=${v}`,"_blank")},A=()=>{const y={id:`custom-kit-${Date.now()}`,sku:`OUT-CUSTOM-${e}C`,name:`Kit Personalizado Outfire VTS (${e} Coifa${e>1?"s":""} + Duto ${r}m)`,category:"kit",priceBRL:M.estimatedPriceBRL,description:`Sistema customizado: ${M.totalSaponificanteNozzles} bicos saponificante (${M.recommendedSaponificanteCylinderLiters}L), ${M.co2NozzlesCount} bicos CO2 (${M.recommendedCo2CylinderKg}kg), ${M.hoodSensorsCount} sensores 145°C e ${M.ductSensorsCount} sensores 300°C.`,image:"/assets/central-outfire-fundo-removido.png",specs:[`${M.centralModel}`,`Cilindro Saponificante Classe K: ${M.recommendedSaponificanteCylinderLiters} Litros`,`Cilindro CO2 pressurizado: ${M.recommendedCo2CylinderKg} Kg`,`Bicos Saponificante em Inox: ${M.totalSaponificanteNozzles} unidades`,`Bicos CO2 em Duto: ${M.co2NozzlesCount} unidades`,`Sensores Reguláveis: ${M.hoodSensorsCount} (145°C) + ${M.ductSensorsCount} (300°C)`,"Válvula de corte rápido de gás com rearme manual","Dampers corta-fogo com atuador elétrico"],inStock:!0};s(y)};return u.jsx("section",{id:"calculadora",className:"py-24 bg-[#0a0b0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(F0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia sob Medida"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Calculadora de Supressão & ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Diagrama Automatizado da sua Cozinha"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"glass-panel-gold p-6 rounded-2xl border border-[#d4af37]/30",children:[u.jsxs("label",{className:"text-sm font-bold text-white block mb-3 flex items-center justify-between",children:[u.jsx("span",{children:"1. Quantidade de Coifas Independentes:"}),u.jsx("span",{className:"text-xs font-mono text-[#e5c05d]",children:"Até 3 simultâneas"})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(y=>u.jsxs("button",{onClick:()=>m(y),className:`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${e===y?"bg-[#d4af37] text-black shadow-glow-gold border border-[#e5c05d]":"bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,children:[u.jsxs("span",{children:[y," ",y===1?"Coifa":"Coifas"]}),u.jsx("span",{className:"text-[10px] opacity-75 font-normal",children:y===1?"Individual":"Setorizada"})]},y))})]}),u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsxs("label",{className:"text-sm font-bold text-white flex items-center gap-2",children:[u.jsx(G0,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"2. Comprimento do Duto de Exaustão:"})]}),u.jsxs("span",{className:"font-mono text-base font-black text-cyan-400",children:[r," metros"]})]}),u.jsx("input",{type:"range",min:"3",max:"30",step:"1",value:r,onChange:y=>o(Number(y.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"}),u.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400 mt-2 font-mono",children:[u.jsx("span",{children:"3 m (Curto)"}),u.jsx("span",{children:"15 m (Médio)"}),u.jsx("span",{children:"30 m (Longo)"})]}),u.jsxs("div",{className:"mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between",children:[u.jsx("span",{children:"Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m"}),u.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[M.co2NozzlesCount," bicos CO2"]})]})]}),f.map((y,v)=>u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center",children:v+1}),u.jsx("h4",{className:"font-bold text-white text-sm",children:y.name})]}),u.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400",children:[y.lengthMeters," m"]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1.5",children:[u.jsx("span",{children:"Comprimento da Coifa:"}),u.jsxs("span",{children:[y.lengthMeters," metros lineares"]})]}),u.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:y.lengthMeters,onChange:C=>x(v,Number(C.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"text-xs font-bold text-gray-300 block mb-2",children:["Equipamentos sob a Coifa (",y.appliances.length," protegidos):"]}),u.jsx("div",{className:"space-y-2 mb-3",children:y.appliances.map((C,I)=>u.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs",children:[u.jsxs("div",{className:"flex items-center gap-2 text-gray-200",children:[u.jsx("span",{className:"text-base",children:C.icon}),u.jsx("span",{className:"font-medium",children:C.name}),u.jsx("span",{className:"text-[10px] bg-[#1a170e] text-[#e5c05d] px-2 py-0.5 rounded border border-[#d4af37]/40 font-mono font-bold",children:"1 bico Saponificante"})]}),u.jsx("button",{onClick:()=>S(v,I),className:"p-1 text-gray-400 hover:text-red-400 transition-colors",title:"Remover equipamento",children:u.jsx(V0,{className:"w-3.5 h-3.5"})})]},C.id))}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[u.jsxs("button",{onClick:()=>_(v,"fritadeira"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(To,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Fritadeira"})]}),u.jsxs("button",{onClick:()=>_(v,"fogao"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(To,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Fogão"})]}),u.jsxs("button",{onClick:()=>_(v,"chapa"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(To,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Chapa"})]}),u.jsxs("button",{onClick:()=>_(v,"charbroiler"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(To,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Grelha"})]})]})]})]},y.id))]}),u.jsx("div",{className:"lg:col-span-7 space-y-6",children:u.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),u.jsx("h3",{className:"font-bold text-white text-base font-sans",children:"Diagrama Esquemático da sua Cozinha"})]}),u.jsx("span",{className:"text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5",children:"RENDERIZADO EM TEMPO REAL"})]}),u.jsxs("div",{className:"relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, #4a5568 1px, transparent 1px)",backgroundSize:"20px 20px"}}),u.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 940 430",children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"chromeGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#475569"}),u.jsx("stop",{offset:"25%",stopColor:"#cbd5e1"}),u.jsx("stop",{offset:"50%",stopColor:"#ffffff"}),u.jsx("stop",{offset:"75%",stopColor:"#e2e8f0"}),u.jsx("stop",{offset:"100%",stopColor:"#334155"})]}),u.jsxs("linearGradient",{id:"co2Grad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#7f1d1d"}),u.jsx("stop",{offset:"25%",stopColor:"#dc2626"}),u.jsx("stop",{offset:"50%",stopColor:"#ef4444"}),u.jsx("stop",{offset:"80%",stopColor:"#b91c1c"}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("linearGradient",{id:"ductGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#334155"}),u.jsx("stop",{offset:"50%",stopColor:"#64748b"}),u.jsx("stop",{offset:"100%",stopColor:"#334155"})]}),u.jsxs("linearGradient",{id:"hoodGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#334155"}),u.jsx("stop",{offset:"50%",stopColor:"#1e293b"}),u.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),u.jsxs("linearGradient",{id:"damperGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#991b1b"}),u.jsx("stop",{offset:"50%",stopColor:"#dc2626"}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("linearGradient",{id:"centralGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#181a20"}),u.jsx("stop",{offset:"50%",stopColor:"#111317"}),u.jsx("stop",{offset:"100%",stopColor:"#0a0c0f"})]}),u.jsxs("linearGradient",{id:"goldGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#b45309"}),u.jsx("stop",{offset:"50%",stopColor:"#f59e0b"}),u.jsx("stop",{offset:"100%",stopColor:"#d97706"})]})]}),u.jsx("rect",{x:"140",y:"24",width:"600",height:"34",fill:"url(#ductGrad)",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("g",{fill:"#94a3b8",opacity:"0.6",children:[u.jsx("text",{x:"240",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » »"}),u.jsx("text",{x:"440",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » FLUXO DE EXAUSTÃO » »"}),u.jsx("text",{x:"640",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » »"})]}),Array.from({length:M.co2NozzlesCount}).map((y,v)=>{const C=180+v*(500/Math.max(1,M.co2NozzlesCount));return u.jsxs("g",{children:[u.jsx("line",{x1:C,y1:"24",x2:C,y2:"38",stroke:"#ef4444",strokeWidth:"2"}),u.jsx("circle",{cx:C,cy:"38",r:"5",fill:"#ef4444",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("polygon",{points:`${C-4},43 ${C+4},43 ${C},49`,fill:"#ef4444",opacity:"0.8"}),u.jsx("text",{x:C,y:"19",fill:"#fca5a5",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),u.jsx("rect",{x:C+14,y:"33",width:"9",height:"9",fill:"#a855f7",stroke:"#ffffff",strokeWidth:"1",transform:`rotate(45, ${C+18.5}, 37.5)`}),u.jsx("text",{x:C+18.5,y:"19",fill:"#d8b4fe",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"300°C"})]},`co2-duct-${v}`)}),u.jsx("rect",{x:"735",y:"16",width:"22",height:"50",fill:"#1e293b",stroke:"#cbd5e1",strokeWidth:"1.5",rx:"3"}),u.jsx("circle",{cx:"746",cy:"41",r:"9",fill:"#0f172a",stroke:"#94a3b8",strokeWidth:"1"}),u.jsx("path",{d:"M 746 34 L 746 48 M 739 41 L 753 41",stroke:"#38bdf8",strokeWidth:"1.5"}),u.jsx("text",{x:"746",y:"11",fill:"#94a3b8",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"EXAUSTOR"}),u.jsxs("g",{id:"cilindro-co2",children:[u.jsx("path",{d:"M 780 40 L 780 20 L 740 20 L 740 24",fill:"none",stroke:"#ef4444",strokeWidth:"2.5"}),u.jsx("rect",{x:"774",y:"30",width:"12",height:"12",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"1"}),u.jsx("rect",{x:"776",y:"42",width:"8",height:"10",fill:"#d97706",stroke:"#f59e0b",strokeWidth:"0.8"}),u.jsx("circle",{cx:"780",cy:"40",r:"4",fill:"#f59e0b"}),u.jsx("path",{d:"M 768 62 C 768 48, 792 48, 792 62 Z",fill:"url(#co2Grad)",stroke:"#fca5a5",strokeWidth:"1"}),u.jsx("rect",{x:"768",y:"60",width:"24",height:"85",rx:"3",fill:"url(#co2Grad)",stroke:"#fca5a5",strokeWidth:"1.2"}),u.jsx("rect",{x:"767",y:"145",width:"26",height:"5",rx:"2",fill:"#1e293b",stroke:"#7f1d1d",strokeWidth:"1"}),u.jsx("rect",{x:"770",y:"80",width:"20",height:"36",fill:"#1e293b",rx:"2",opacity:"0.9"}),u.jsx("text",{x:"780",y:"92",fill:"#ef4444",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),u.jsxs("text",{x:"780",y:"102",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:[M.recommendedCo2CylinderKg,"kg"]}),u.jsx("text",{x:"780",y:"111",fill:"#94a3b8",fontSize:"4.5",textAnchor:"middle",children:"NBR 14518"}),u.jsx("text",{x:"780",y:"162",fill:"#fca5a5",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"CILINDRO CO2"}),u.jsx("text",{x:"780",y:"171",fill:"#94a3b8",fontSize:"6.5",textAnchor:"middle",children:"(DUTO / EXAUSTÃO)"})]}),u.jsxs("g",{id:"cilindro-saponificante",children:[u.jsx("path",{d:"M 46 160 L 46 122 L 95 122",fill:"none",stroke:"#d4af37",strokeWidth:"3"}),u.jsx("rect",{x:"42",y:"160",width:"8",height:"12",fill:"#d97706",stroke:"#f59e0b",strokeWidth:"1"}),u.jsx("circle",{cx:"46",cy:"158",r:"4.5",fill:"#f59e0b"}),u.jsx("circle",{cx:"36",cy:"166",r:"6.5",fill:"#ffffff",stroke:"#334155",strokeWidth:"1.2"}),u.jsx("path",{d:"M 33 166 A 3.5 3.5 0 0 1 39 166",fill:"none",stroke:"#22c55e",strokeWidth:"1.5"}),u.jsx("line",{x1:"36",y1:"166",x2:"38",y2:"163",stroke:"#dc2626",strokeWidth:"1"}),u.jsx("path",{d:"M 28 184 C 28 168, 64 168, 64 184 Z",fill:"url(#chromeGrad)",stroke:"#cbd5e1",strokeWidth:"1.2"}),u.jsx("rect",{x:"28",y:"182",width:"36",height:"135",rx:"3",fill:"url(#chromeGrad)",stroke:"#cbd5e1",strokeWidth:"1.5"}),u.jsx("rect",{x:"26",y:"317",width:"40",height:"7",rx:"2",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),u.jsx("rect",{x:"31",y:"215",width:"30",height:"52",fill:"#0f172a",rx:"3",stroke:"#d4af37",strokeWidth:"0.8",opacity:"0.95"}),u.jsx("text",{x:"46",y:"228",fill:"#d4af37",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"OUTFIRE"}),u.jsx("text",{x:"46",y:"238",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"CLASSE K"}),u.jsxs("text",{x:"46",y:"250",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:[M.recommendedSaponificanteCylinderLiters,"L"]}),u.jsx("text",{x:"46",y:"260",fill:"#94a3b8",fontSize:"5",textAnchor:"middle",children:"INOX 304"}),u.jsx("text",{x:"46",y:"337",fill:"#fef08a",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"SAPONIFICANTE"}),u.jsx("text",{x:"46",y:"347",fill:"#cbd5e1",fontSize:"6.5",textAnchor:"middle",children:"(CROMADO / INOX)"})]}),f.slice(0,e).map((y,v)=>{const C=e,I=635,D=C===1?0:C===2?30:18,O=(I-(C-1)*D)/C,L=95+v*(O+D),F=C===1?84:C===2?65:52,j=L+(O-F)/2,E=F+16,R=j-8,z=66,$=38,K=y.appliances.length>0?y.appliances:[{id:`app-${v}`,name:"Fogão/Cocção",type:"fogao",icon:"🍳",widthMeters:.9}];return u.jsxs("g",{children:[u.jsx("rect",{x:j,y:"58",width:F,height:"60",fill:"url(#ductGrad)",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("g",{id:`damper-${v}`,children:[u.jsx("rect",{x:R-2,y:z,width:E+4,height:"4",fill:"#475569",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("rect",{x:R-2,y:z+$-4,width:E+4,height:"4",fill:"#475569",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("rect",{x:R,y:z+3,width:E,height:$-6,fill:"url(#damperGrad)",stroke:"#fecaca",strokeWidth:"1.2",rx:"3"}),u.jsx("rect",{x:R+E-2,y:z+7,width:"12",height:"18",fill:"#0f172a",stroke:"#cbd5e1",strokeWidth:"1",rx:"2"}),u.jsx("circle",{cx:R+E+4,cy:z+16,r:"2.5",fill:"#eab308"}),u.jsxs("text",{x:R+E/2,y:z+18,fill:"#ffffff",fontSize:C===3?"7":"8",fontWeight:"bold",textAnchor:"middle",children:["DAMPER ",C>1?`#${v+1}`:""]}),u.jsx("text",{x:R+E/2,y:z+27,fill:"#fca5a5",fontSize:C===3?"5.5":"6.5",fontWeight:"bold",textAnchor:"middle",children:"CORTA-FOGO"})]}),u.jsx("line",{x1:v===0?95:L-D,y1:"122",x2:L+O-10,y2:"122",stroke:"#d4af37",strokeWidth:"2.5"}),u.jsx("polygon",{points:`${L},158 ${L+O*.12},118 ${L+O*.88},118 ${L+O},158`,fill:"url(#hoodGrad)",stroke:"#cbd5e1",strokeWidth:"1.8"}),u.jsx("rect",{x:L,y:"158",width:O,height:"20",fill:"#1e293b",stroke:"#cbd5e1",strokeWidth:"1.2"}),u.jsxs("text",{x:L+O/2,y:"172",fill:"#f8fafc",fontSize:C===3?"8":"9.5",fontWeight:"bold",textAnchor:"middle",letterSpacing:"1",children:["COIFA ",C>1?`${v+1}`:"INOX"," (",y.lengthMeters,"m - SETOR ",v+1,")"]}),u.jsxs("g",{children:[u.jsx("circle",{cx:L+O*.25,cy:"138",r:"5",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("text",{x:L+O*.25,y:"132",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"PLENO 1"}),u.jsx("circle",{cx:L+O*.75,cy:"138",r:"5",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("text",{x:L+O*.75,y:"132",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"PLENO 2"})]}),Array.from({length:Math.max(1,Math.round(y.lengthMeters/.9))}).map((re,ie,ee)=>{const q=L+25+ie*((O-50)/Math.max(1,ee.length-1||1));return u.jsxs("g",{children:[u.jsx("circle",{cx:q,cy:"150",r:"4",fill:"#ea580c",stroke:"#ffffff",strokeWidth:"1"}),u.jsx("text",{x:q,y:"164",fill:"#fdba74",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"145°"})]},`sensor-h-${v}-${ie}`)}),u.jsx("rect",{x:L,y:"240",width:O,height:"85",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.2",rx:"3"}),K.map((re,ie)=>{const ee=K.length,q=(O-12)/ee,X=L+6+ie*q,fe=q-6;return u.jsxs("g",{children:[u.jsx("rect",{x:X,y:"245",width:fe,height:"75",fill:"#1e293b",stroke:"#475569",strokeWidth:"1",rx:"3"}),u.jsx("text",{x:X+fe/2,y:"272",fill:"#ffffff",fontSize:C===3?"7":"8.5",fontWeight:"bold",textAnchor:"middle",children:re.name.split(" ")[0]}),u.jsx("text",{x:X+fe/2,y:"286",fill:"#94a3b8",fontSize:C===3?"5.5":"6.5",textAnchor:"middle",children:re.type.toUpperCase()}),u.jsx("line",{x1:X+fe/2,y1:"178",x2:X+fe/2,y2:"225",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("polygon",{points:`${X+fe/2-4},225 ${X+fe/2+4},225 ${X+fe/2},233`,fill:"#d4af37"}),u.jsx("text",{x:X+fe/2,y:"220",fill:"#fef08a",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"BICOK"})]},re.id||`app-${v}-${ie}`)})]},`hood-block-${y.id||v}`)}),u.jsxs("g",{id:"central-outfire-diagrama",children:[u.jsx("path",{d:"M 770 200 L 710 200 L 710 85 L 680 85",fill:"none",stroke:"#38bdf8",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("path",{d:"M 770 330 L 740 330 L 740 375 L 300 375",fill:"none",stroke:"#eab308",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("path",{d:"M 780 185 L 780 160",fill:"none",stroke:"#ef4444",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("rect",{x:"765",y:"188",width:"155",height:"152",rx:"6",fill:"url(#centralGrad)",stroke:"#d4af37",strokeWidth:"1.8"}),u.jsx("rect",{x:"780",y:"184",width:"125",height:"6",rx:"1.5",fill:"#1f232b",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("circle",{cx:"788",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"805",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"880",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"897",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("rect",{x:"790",y:"338",width:"105",height:"6",rx:"1.5",fill:"#1f232b",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("circle",{cx:"798",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"815",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"870",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"887",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("text",{x:"842",y:"206",fill:"#f59e0b",fontSize:"9",fontWeight:"bold",textAnchor:"middle",letterSpacing:"1.5",children:"OUTFIRE"}),u.jsx("polygon",{points:"842,192 846,197 842,201 838,197",fill:"#f59e0b"}),u.jsxs("g",{transform:"translate(772, 218)",children:[u.jsx("rect",{x:"0",y:"0",width:"22",height:"22",fill:"#0f172a",stroke:"#d4af37",strokeWidth:"0.8"}),u.jsx("rect",{x:"3",y:"3",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"14",y:"3",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"3",y:"14",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"10",y:"10",width:"3",height:"3",fill:"#d4af37"})]}),u.jsx("rect",{x:"798",y:"215",width:"114",height:"74",rx:"3",fill:"#061317",stroke:"#38bdf8",strokeWidth:"1"}),u.jsx("rect",{x:"798",y:"215",width:"114",height:"12",fill:"#0284c7"}),u.jsx("text",{x:"803",y:"224",fill:"#ffffff",fontSize:"6",fontWeight:"bold",children:"10/05 15:42"}),u.jsx("circle",{cx:"906",cy:"221",r:"2.5",fill:"#22c55e",stroke:"#ffffff",strokeWidth:"0.5"}),u.jsx("rect",{x:"801",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"813.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"EXAUST OK"}),u.jsx("rect",{x:"828",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"840.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"ENERG OK"}),u.jsx("rect",{x:"855",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"867.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"GÁS OK"}),u.jsx("rect",{x:"882",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"894.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"DAMP OK"}),u.jsx("rect",{x:"803",y:"243",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"828",y:"253",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"SETORES"}),u.jsx("rect",{x:"857",y:"243",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"882",y:"253",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"CONTROLE GÁS"}),u.jsx("rect",{x:"803",y:"260",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"828",y:"270",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"REARMAR"}),u.jsx("rect",{x:"857",y:"260",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"882",y:"270",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"CONFIG"}),u.jsx("rect",{x:"798",y:"277",width:"114",height:"12",fill:"#0284c7"}),u.jsx("text",{x:"855",y:"286",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"SISTEMA OPERANTE"}),u.jsx("rect",{x:"769",y:"300",width:"147",height:"24",fill:"#b91c1c",rx:"2"}),u.jsx("text",{x:"842",y:"311",fill:"#ffffff",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"EM CASO DE INCÊNDIO EVACUAR O LOCAL"}),u.jsx("text",{x:"842",y:"319",fill:"#fef08a",fontSize:"5",fontWeight:"bold",textAnchor:"middle",children:"SUPORTE: (15) 98157-7847 / OUTFIRE.COM.BR"}),u.jsx("text",{x:"842",y:"360",fill:"#f59e0b",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"CENTRAL VTS 32S3"}),u.jsxs("text",{x:"842",y:"370",fill:"#94a3b8",fontSize:"6.5",textAnchor:"middle",children:["(",e," Coifa",e>1?"s":""," Independentes)"]})]}),u.jsx("line",{x1:"90",y1:"385",x2:"740",y2:"385",stroke:"#eab308",strokeWidth:"3"}),u.jsx("rect",{x:"260",y:"374",width:"45",height:"22",fill:"#b91c1c",stroke:"#fecaca",strokeWidth:"1",rx:"2"}),u.jsx("rect",{x:"277",y:"366",width:"11",height:"9",fill:"#1e293b",stroke:"#eab308",strokeWidth:"0.8"}),u.jsx("text",{x:"282.5",y:"388",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"VÁLVULA GÁS"}),u.jsx("text",{x:"282.5",y:"405",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"CORTE INSTANTÂNEO"})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-3 border-t border-white/10 text-[10.5px] text-gray-300",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#d4af37]"}),u.jsx("span",{children:"Bico Saponificante (Classe K)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-4 rounded-sm bg-gradient-to-b from-gray-200 to-gray-400 border border-white/50"}),u.jsx("span",{children:"Cilindro Saponificante (Inox)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),u.jsx("span",{children:"Bico CO2 Duto"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-4 rounded-sm bg-red-600 border border-red-300"}),u.jsx("span",{children:"Cilindro CO2 (Vermelho)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),u.jsx("span",{children:"Sensor 145°C Coifa"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-500"}),u.jsx("span",{children:"Sensor 300°C Duto"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-2.5 rounded-sm bg-red-700 border border-red-300"}),u.jsx("span",{children:"Damper Corta-Fogo (Acima da Coifa)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-3 rounded-sm bg-black border border-amber-400"}),u.jsx("span",{children:"Central Outfire VTS 32S3"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-2 rounded-sm bg-red-600 border border-amber-300"}),u.jsx("span",{children:"Válvula de Gás (Corte Automático)"})]})]})]}),u.jsxs("div",{className:"mt-6 space-y-3",children:[u.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[u.jsx(rs,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{children:"Resumo do Dimensionamento Técnico (BOM)"})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos Saponificante"}),u.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[M.totalSaponificanteNozzles," un"]}),u.jsxs("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:["(",M.saponificanteLiters,"L calculados)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro Saponificante"}),u.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[M.recommendedSaponificanteCylinderLiters," L"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 9L"})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos de CO2 (Duto)"}),u.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[M.co2NozzlesCount," un"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"(1 a cada 3m de duto)"})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro de CO2"}),u.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[M.recommendedCo2CylinderKg," Kg"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 10kg"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Coifa (145°C)"}),u.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[M.hoodSensorsCount," un (1/metro)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Duto (300°C)"}),u.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[M.ductSensorsCount," un (1 a cada 3m)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Intertravamento Total"}),u.jsx("span",{className:"text-xs font-bold text-emerald-400 block",children:"Gás + Exaustão + Damper"})]})]})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4",children:[u.jsxs("button",{onClick:T,className:"flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group",children:[u.jsx(Nr,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),u.jsx("span",{children:"Enviar Orçamento para WhatsApp"})]}),u.jsxs("button",{onClick:A,className:"py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black rounded-2xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx(gv,{className:"w-5 h-5 fill-black"}),u.jsx("span",{children:"Comprar Kit na Loja"})]})]}),u.jsx("p",{className:"text-center text-xs text-gray-400 mt-3",children:"*O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros."})]})})]})]})})},Sb=[{id:"central-outfire-vts-1",sku:"OUT-VTS-1C",name:"Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)",category:"kit",priceBRL:8900,description:"Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.",image:"/assets/central-outfire-fundo-removido.png",specs:["Controle autônomo para 1 coifa","IHM Touchscreen colorida com avisos de voz","1x Cilindro Saponificante 9 Litros Classe K","1x Cilindro CO2 10 Kg com cabeçote solenoide","Intertravamento de Gás e Exaustor","Certificação em conformidade com NBR 14518"],featured:!0,inStock:!0},{id:"central-outfire-vts-2",sku:"OUT-VTS-2C",name:"Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)",category:"kit",priceBRL:14500,description:"Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.",image:"/assets/central-outfire-instalada.jpg",specs:["Controle independente para até 2 coifas","IHM Touchscreen com monitoramento individual por setor","2x Cilindros Saponificante (dimensionados sob medida)","Cilindros de CO2 dedicados para cada duto","Contagem regressiva de segurança anti-disparo acidental","Agenda semanal para abertura e corte automático de gás"],featured:!0,inStock:!0},{id:"central-outfire-vts-3",sku:"OUT-VTS-3C",name:"Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)",category:"kit",priceBRL:19800,description:"A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.",image:"/assets/central-outfire-ihm.jpg",specs:["Controle simultâneo e independente de 3 coifas","Acionamento individual de dampers e CO2 por duto","Alertas de voz falada de alta potência","Histórico completo de eventos e diagnósticos de vazamento","Interface para integração com Alarme Predial de Shoppings","Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A"],featured:!0,inStock:!0},{id:"bico-saponificante-inox",sku:"OUT-BIC-SAP",name:"Bico Aspersor de Inox para Saponificante (Classe K)",category:"bicos",priceBRL:185,description:"Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.",image:"/assets/central-outfire-interno.jpg",specs:["Material: Aço Inoxidável 304 polido",'Rosca: 3/8" ou 1/2" NPT',"Ângulo de abertura especial para cubas e filtros","Capa protetora com cordão de retenção inclusa"],featured:!1,inStock:!0},{id:"bico-co2-duto",sku:"OUT-BIC-CO2",name:"Bico Difusor de CO2 para Dutos de Exaustão",category:"bicos",priceBRL:210,description:"Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.",image:"/assets/central-outfire-interno.jpg",specs:["Inundação rápida em alta pressão","Rosca NPT padronizada","Resistente a calor contínuo de até 400°C"],featured:!1,inStock:!0},{id:"sensor-coifa-145c",sku:"OUT-SNS-145",name:"Sensor Térmico Regulável para Coifa (Calibrado 145°C)",category:"sensores",priceBRL:295,description:"Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)","Haste blindada em inox resistente a vapores e gordura","Contato seco normalmente aberto/fechado","Cabo de alta temperatura blindado em malha metálica"],featured:!1,inStock:!0},{id:"sensor-duto-300c",sku:"OUT-SNS-300",name:"Sensor Térmico Regulável para Duto (Calibrado 300°C)",category:"sensores",priceBRL:320,description:"Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de operação: até 350°C (ajustado em 300°C)","Instalação externa com sonda inserida no duto","Conexão estanque anti-vazamento de óleo"],featured:!1,inStock:!0},{id:"recarga-saponificante-9l",sku:"OUT-AG-SAP9",name:"Galão Agente Saponificante Classe K Outfire (9 Litros)",category:"cilindro",priceBRL:680,description:"Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.",image:"/assets/central-outfire-fundo-removido.png",specs:["Volume: 9 Litros líquidos","Ação de saponificação com espuma refrigerante espessa","Não tóxico e biodegradável","Laudo técnico de conformidade para bombeiros"],featured:!1,inStock:!0},{id:"valvula-gas-solenoide-1pol",sku:"OUT-VLV-GAS1",name:'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',category:"valvulas",priceBRL:840,description:"Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.",image:"/assets/central-outfire-interno.jpg",specs:["Diâmetro: 1 polegada BSP/NPT","Rearme manual para segurança obrigatória","Corpo em latão forjado de alta resistência","Compatível com GLP e Gás Natural encanado"],featured:!1,inStock:!0},{id:"damper-corta-fogo-motorizado",sku:"OUT-DMP-CF",name:"Damper Corta-Fogo Motorizado com Mola de Retorno",category:"acessorios",priceBRL:1250,description:"Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.",image:"/assets/central-outfire-interno.jpg",specs:["Lâminas corta-fogo com vedação hermética","Atuador 24V com retorno por mola mecânica","Resistência ao fogo: 120 minutos (TRRF 120)","Microswitch de confirmação de fechamento"],featured:!1,inStock:!0},{id:"acionador-manual-pull",sku:"OUT-ACT-MAN",name:"Estação de Disparo Manual de Emergência (Tipo Puxador)",category:"acessorios",priceBRL:310,description:"Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.",image:"/assets/central-outfire-fundo-removido.png",specs:["Acionamento mecânico e elétrico simultâneo","Pintura eletrostática de alta visibilidade","Trava de segurança para impedir toque acidental"],featured:!1,inStock:!0}],Mb=({onAddToCart:s})=>{const[e,t]=Ue.useState("all"),[r,o]=Ue.useState(""),l=[{id:"all",name:"Todos os Produtos"},{id:"kit",name:"Sistemas Completos"},{id:"bicos",name:"Bicos de Aspersão"},{id:"sensores",name:"Sensores Reguláveis"},{id:"cilindro",name:"Cilindros & Recargas"},{id:"valvulas",name:"Válvulas de Gás"},{id:"acessorios",name:"Acessórios & Acionadores"}],d=Sb.filter(p=>{const m=e==="all"||p.category===e,x=p.name.toLowerCase().includes(r.toLowerCase())||p.description.toLowerCase().includes(r.toLowerCase())||p.sku.toLowerCase().includes(r.toLowerCase());return m&&x}),f=p=>{const m=`Olá! Gostaria de comprar ou solicitar proposta para o produto:
*${p.name}* (SKU: ${p.sku})
Valor: R$ ${p.priceBRL.toLocaleString("pt-BR")},00.
Poderia me passar os prazos de entrega e condições de faturamento?`;window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(m)}`,"_blank")};return u.jsx("section",{id:"loja",className:"py-24 bg-[#08090c] relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(hc,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Loja Oficial Outfire"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Sistemas Completos & ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Peças de Reposição Certificadas"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica."})]}),u.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10",children:[u.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full lg:w-auto",children:l.map(p=>u.jsx("button",{onClick:()=>t(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${e===p.id?"bg-[#d4af37] text-black shadow-glow-gold":"bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"}`,children:p.name},p.id))}),u.jsxs("div",{className:"relative w-full lg:w-72",children:[u.jsx(Dv,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),u.jsx("input",{type:"text",placeholder:"Buscar bicos, sensores, cilindros...",value:r,onChange:p=>o(p.target.value),className:"w-full bg-[#12141a] border border-[#d4af37]/20 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map(p=>u.jsxs("div",{className:"glass-panel-gold rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"relative w-full h-56 bg-gradient-to-br from-[#171a22] to-[#0a0c10] p-6 flex items-center justify-center overflow-hidden border-b border-white/5",children:[u.jsx("img",{src:p.image,alt:p.name,className:"max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"}),u.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5",children:[p.featured&&u.jsxs("span",{className:"bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-glow-gold flex items-center gap-1",children:[u.jsx(Uo,{className:"w-3 h-3 fill-black"}),"Mais Vendido"]}),u.jsxs("span",{className:"bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] font-mono px-2 py-0.5 rounded border border-[#d4af37]/30",children:["SKU: ",p.sku]})]}),u.jsx("span",{className:"absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800",children:"Pronta Entrega"})]}),u.jsxs("div",{className:"p-6",children:[u.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans line-clamp-1",children:p.name}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2",children:p.description}),u.jsx("div",{className:"space-y-1.5 mb-6",children:p.specs.slice(0,3).map((m,x)=>u.jsxs("div",{className:"flex items-start gap-2 text-[11px] text-gray-300",children:[u.jsx(yv,{className:"w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsx("span",{className:"line-clamp-1",children:m})]},x))})]})]}),u.jsxs("div",{className:"p-6 pt-0",children:[u.jsxs("div",{className:"flex items-baseline justify-between mb-4 pt-4 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Preço à vista ou faturado"}),u.jsxs("span",{className:"text-2xl font-black text-[#f3e5ab] font-mono",children:["R$ ",p.priceBRL.toLocaleString("pt-BR"),",00"]})]}),u.jsx("span",{className:"text-xs text-[#e5c05d] font-bold",children:"Em até 12x"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsxs("button",{onClick:()=>s(p),className:"py-2.5 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-1.5",children:[u.jsx(hc,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"Adicionar"})]}),u.jsxs("button",{onClick:()=>f(p),className:"py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5",title:"Negociar faturamento via WhatsApp",children:[u.jsx(Nr,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"WhatsApp"})]})]})]})]},p.id))})]})})},wb=()=>{const s=[{title:"Manual do Usuário — Sistema OutFire® (Edição Oficial 2026)",type:"Manual Mais Completo (14 Seções)",size:"1.2 MB",description:"Guia operacional definitivo da IHM: Dashboard 2026, Setores e Modo Limpeza, Central Mista (CO2 + Detecção), Checklist Wizard 8 etapas, Alertas de Falha, Pré-Alarme 15s, Agenda de Gás, Avisos de Voz DAC, Pareamento Sem Fio e Garantia de 12 Meses.",link:"/manual-usuario.html",pdfLink:"/assets/Manual_Usuario_OutFire_2026.pdf",featured:!0},{title:"Manual Técnico e Esquema Elétrico Central Outfire 2026",type:"PDF Oficial de Engenharia",size:"750 KB",description:"Diagrama elétrico completo de bornes, acionamento das solenoides, intertravamento do exaustor, sensores reguláveis 145°C/300°C e dampers motorizados.",link:"/assets/Manual_Tecnico_OutFire_2026.pdf",pdfLink:"/assets/Manual_Tecnico_OutFire_2026.pdf",featured:!0},{title:"Procedimento Operacional Padrão (POP) Pós-Disparo",type:"Guia Técnico",size:"280 KB",description:"Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, rearme da válvula e recarga.",link:"#contato"},{title:"Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)",type:"Documento para Bombeiros / AVCB",size:"420 KB",description:"Documentação comprobatória das características técnicas e ensaios de conformidade para instrução de processos no Corpo de Bombeiros.",link:"#contato"}],e=[{step:"01",title:"Posicionamento da Central VTS 32S3",desc:"Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída."},{step:"02",title:"Passagem dos Cabos Blindados de Alta Temperatura",desc:"Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes."},{step:"03",title:"Interligação da Válvula de Gás e Exaustor",desc:"Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão."},{step:"04",title:"Comissionamento e Teste sem Disparo",desc:"Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final."}];return u.jsx("section",{id:"manuais",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Em,{className:"w-3.5 h-3.5"}),"Engenharia & Suporte"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Manuais Técnicos & ",u.jsx("br",{}),u.jsx("span",{className:"gold-gradient-text",children:"Documentos de Instalação"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo e memoriais de cálculo para instaladores, engenheiros e montadores de coifa."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:s.map((t,r)=>u.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${t.featured?"glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold":"glass-panel border-white/10"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md",children:t.type}),u.jsx(Ud,{className:`w-6 h-6 ${t.featured?"text-amber-400":"text-gray-400"}`})]}),u.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans",children:t.title}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6",children:t.description})]}),u.jsxs("div",{className:"pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[u.jsx("span",{className:"text-xs text-gray-400 font-mono",children:t.size}),u.jsxs("div",{className:"flex items-center gap-2",children:[t.pdfLink&&t.pdfLink!==t.link&&u.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"py-2 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white transition-all",children:[u.jsx(Em,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Ver Online"})]}),u.jsxs("a",{href:t.pdfLink||t.link,target:"_blank",rel:"noopener noreferrer",className:`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${t.featured?"gold-gradient hover:brightness-110 text-black font-extrabold shadow-glow-gold":"bg-white/10 hover:bg-white/20 text-white"}`,children:[u.jsx(k0,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Baixar PDF"})]})]})]})]},r))}),u.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[u.jsx(Fv,{className:"w-5 h-5 text-amber-400"}),u.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:"Guia Prático de Instalação da Central Outfire VTS 32S3"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,r)=>u.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 relative",children:[u.jsx("span",{className:"text-2xl font-black text-amber-400 font-mono block mb-2 opacity-90",children:t.step}),u.jsx("h4",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:t.title}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:t.desc})]},r))}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left",children:[u.jsx(fc,{className:"w-4 h-4 text-emerald-400 shrink-0"}),u.jsx("span",{children:"Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp."})]}),u.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire.",target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0",children:"Suporte Técnico de Engenharia →"})]})]})]})})},bb=()=>{const[s,e]=Ue.useState(null),t=[{src:"/assets/central-outfire-instalada.jpg",title:"Central Outfire VTS Instalada em Cozinha Real",category:"Instalação em Restaurante",desc:"Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto."},{src:"/assets/central-outfire-interno.jpg",title:"Placa de Controle & Relés de Potência Outfire",category:"Engenharia Interna",desc:"Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria."},{src:"/assets/central-outfire-ihm.jpg",title:"IHM Touchscreen em Operação com Alerta",category:"Interface de Operação",desc:"Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações."},{src:"/assets/central-outfire-fundo-removido.png",title:"Gabinete Industrial Outfire VTS 32S3",category:"Design Robusto",desc:"Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais."}];return u.jsxs("section",{id:"galeria",className:"py-24 bg-[#0d0f13] relative",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Uo,{className:"w-3.5 h-3.5"}),"Casos Reais & Engenharia em Campo"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Instalações Reais do ",u.jsx("br",{}),u.jsx("span",{className:"gold-gradient-text",children:"Sistema Outfire em Ação"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes e a integração visual impecável nas cozinhas dos nossos clientes."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((r,o)=>u.jsxs("div",{onClick:()=>e(r),className:"glass-panel rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-glow-gold overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1",children:[u.jsxs("div",{className:"relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center",children:[u.jsx("img",{src:r.src,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),u.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm",children:[u.jsx(B0,{className:"w-5 h-5 text-amber-400"}),u.jsx("span",{children:"Clique para Ampliar Foto"})]}),u.jsx("div",{className:"absolute top-4 left-4",children:u.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:r.category})})]}),u.jsxs("div",{className:"p-6",children:[u.jsxs("h3",{className:"text-lg font-bold text-white mb-2 font-sans flex items-center justify-between",children:[u.jsx("span",{children:r.title}),u.jsx(Tv,{className:"w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors"})]}),u.jsx("p",{className:"text-xs sm:text-sm text-gray-400 leading-relaxed",children:r.desc})]})]},o))})]}),s&&u.jsx("div",{onClick:()=>e(null),className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",children:u.jsxs("div",{onClick:r=>r.stopPropagation(),className:"max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[u.jsx("div",{className:"relative max-h-[70vh] bg-black flex items-center justify-center p-2",children:u.jsx("img",{src:s.src,alt:s.title,className:"max-h-[65vh] w-auto object-contain rounded-xl"})}),u.jsxs("div",{className:"p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-bold text-white",children:s.title}),u.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]}),u.jsx("button",{onClick:()=>e(null),className:"py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all",children:"Fechar"})]})]})})]})},Eb=()=>{const[s,e]=Ue.useState({nome:"",empresa:"",telefone:"",cidade:"",coifas:"1",mensagem:""}),[t,r]=Ue.useState(!1),o=l=>{l.preventDefault();let d=`📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*

`;d+=`👤 *Nome:* ${s.nome}
`,d+=`🏢 *Empresa / Restaurante:* ${s.empresa||"Não informado"}
`,d+=`📱 *Telefone / WhatsApp:* ${s.telefone}
`,d+=`📍 *Cidade / Estado:* ${s.cidade}
`,d+=`🍳 *Qtd de Coifas:* ${s.coifas} coifa(s)
`,s.mensagem&&(d+=`💬 *Mensagem:* ${s.mensagem}
`),r(!0),setTimeout(()=>{window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(d)}`,"_blank"),r(!1)},1e3)};return u.jsxs("footer",{id:"contato",className:"bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden",children:[u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide",children:[u.jsx(Nr,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Canais Diretos de Engenharia & Vendas"]}),u.jsxs("h3",{className:"text-3xl sm:text-4xl font-black text-white font-sans tracking-tight",children:["Fale com um Especialista ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"em Supressão Outfire"})]}),u.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes."}),u.jsxs("div",{className:"space-y-4 pt-4",children:[u.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",children:u.jsx(Nr,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"WhatsApp Vendas & Orçamentos"}),u.jsx("span",{className:"text-base font-bold text-white group-hover:text-emerald-400 transition-colors",children:"(15) 99657-6807"})]})]}),u.jsxs("a",{href:"https://wa.me/5515981577847",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform",children:u.jsx(Nr,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"Suporte Técnico & Pós-Venda"}),u.jsx("span",{className:"text-base font-bold text-white group-hover:text-red-400 transition-colors",children:"(15) 98157-7847"})]})]}),u.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0",children:u.jsx(Ev,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"font-bold text-white block",children:"Atendimento em Todo o Brasil"}),u.jsx("span",{className:"text-gray-400",children:"Envio de kits prontos para instalação com laudo ART e suporte remoto."})]})]})]})]}),u.jsx("div",{className:"lg:col-span-7",children:u.jsxs("div",{className:"glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative",children:[u.jsx("h4",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Solicite uma Proposta Técnica sem Compromisso"}),u.jsx("p",{className:"text-xs text-gray-400 mb-6",children:"Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar."}),t?u.jsxs("div",{className:"p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl",children:[u.jsx(rs,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),u.jsx("h5",{className:"text-base font-bold text-white",children:"Encaminhando para o WhatsApp..."}),u.jsx("p",{className:"text-xs text-gray-300",children:"Você será direcionado diretamente para um especialista no WhatsApp."})]}):u.jsxs("form",{onSubmit:o,className:"space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Seu Nome Completo *"}),u.jsx("input",{type:"text",required:!0,placeholder:"Ex: Carlos Silva",value:s.nome,onChange:l=>e({...s,nome:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Nome do Restaurante / Empresa"}),u.jsx("input",{type:"text",placeholder:"Ex: Hamburgueria Grill",value:s.empresa,onChange:l=>e({...s,empresa:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"WhatsApp com DDD *"}),u.jsx("input",{type:"tel",required:!0,placeholder:"Ex: (11) 98765-4321",value:s.telefone,onChange:l=>e({...s,telefone:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Cidade e Estado *"}),u.jsx("input",{type:"text",required:!0,placeholder:"Ex: São Paulo / SP",value:s.cidade,onChange:l=>e({...s,cidade:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Quantas Coifas precisam de proteção?"}),u.jsxs("select",{value:s.coifas,onChange:l=>e({...s,coifas:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500",children:[u.jsx("option",{value:"1",children:"1 Coifa (Pequeno / Médio Porte)"}),u.jsx("option",{value:"2",children:"2 Coifas (Atuação Independente)"}),u.jsx("option",{value:"3",children:"3 Coifas (Atuação Independente)"}),u.jsx("option",{value:"mais de 3",children:"Mais de 3 Coifas / Projeto Especial"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Detalhes adicionais (opcional)"}),u.jsx("textarea",{rows:3,placeholder:"Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB.",value:s.mensagem,onChange:l=>e({...s,mensagem:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("button",{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group",children:[u.jsx(Lv,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform fill-black"}),u.jsx("span",{children:"Enviar para a Engenharia Outfire"})]})]})]})})]})}),u.jsx("div",{className:"border-t border-[#d4af37]/20 py-8 bg-[#050608]",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE",className:"h-8 w-auto object-contain"}),u.jsxs("span",{children:["© ",new Date().getFullYear()," Outfire Sistemas contra Incêndio. Todos os direitos reservados."]})]}),u.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[u.jsx("a",{href:"#hero-3d",className:"hover:text-white transition-colors",children:"Simulação 3D"}),u.jsx("a",{href:"#central-vts",className:"hover:text-white transition-colors",children:"Central VTS"}),u.jsx("a",{href:"#normas",className:"hover:text-white transition-colors",children:"Normas NBR"}),u.jsx("a",{href:"#calculadora",className:"hover:text-white transition-colors",children:"Calculadora"}),u.jsx("a",{href:"#loja",className:"hover:text-white transition-colors",children:"Loja"}),u.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"hover:text-white transition-colors",children:"Manual PDF"})]})]})})]})},Tb=({isOpen:s,onClose:e,cartItems:t,onUpdateQuantity:r,onRemoveItem:o,onClearCart:l})=>{const[d,f]=Ue.useState(!1),[p,m]=Ue.useState(!1);if(!s)return null;const x=t.reduce((M,T)=>M+T.product.priceBRL*T.quantity,0),_=()=>{let M=`🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*

`;M+=`Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:

`,t.forEach((T,A)=>{M+=`${A+1}. *${T.product.name}*
`,M+=`   SKU: ${T.product.sku} | Qtd: ${T.quantity} un
`,M+=`   Valor: R$ ${(T.product.priceBRL*T.quantity).toLocaleString("pt-BR")},00

`}),M+=`💰 *TOTAL DO PEDIDO:* R$ ${x.toLocaleString("pt-BR")},00

`,M+="Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.",window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(M)}`,"_blank")},S=M=>{m(!0),setTimeout(()=>{l(),m(!1),f(!1),e(),alert(`Pedido registrado com sucesso via ${M}! Nossa equipe entrará em contato para emissão de NF-e e envio.`)},2e3)};return u.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[u.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"}),u.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:u.jsxs("div",{className:"w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative",children:[u.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Nm,{className:"w-5 h-5 text-[#d4af37]"}),u.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Seu Carrinho de Compras"})]}),u.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:u.jsx(Fd,{className:"w-5 h-5"})})]}),u.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:t.length===0?u.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500",children:u.jsx(Nm,{className:"w-8 h-8"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-base font-bold text-white",children:"Seu carrinho está vazio"}),u.jsx("p",{className:"text-xs text-gray-400 mt-1 max-w-xs",children:"Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja."})]}),u.jsx("a",{href:"#calculadora",onClick:e,className:"py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all",children:"Abrir Calculadora da Cozinha"})]}):t.map(M=>u.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group",children:[u.jsx("img",{src:M.product.image,alt:M.product.name,className:"w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("h4",{className:"text-xs font-bold text-white line-clamp-1",children:M.product.name}),u.jsxs("span",{className:"text-[10px] font-mono text-gray-400 block mt-0.5",children:["SKU: ",M.product.sku]}),u.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono block mt-1",children:["R$ ",M.product.priceBRL.toLocaleString("pt-BR"),",00"]}),u.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[u.jsxs("div",{className:"flex items-center bg-black/50 border border-white/10 rounded-lg",children:[u.jsx("button",{onClick:()=>r(M.product.id,-1),className:"p-1 hover:text-red-400 transition-colors",children:u.jsx(Rv,{className:"w-3 h-3"})}),u.jsx("span",{className:"px-2 text-xs font-bold text-white",children:M.quantity}),u.jsx("button",{onClick:()=>r(M.product.id,1),className:"p-1 hover:text-emerald-400 transition-colors",children:u.jsx(To,{className:"w-3 h-3"})})]}),u.jsxs("button",{onClick:()=>o(M.product.id),className:"text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1",children:[u.jsx(V0,{className:"w-3 h-3"}),u.jsx("span",{children:"Remover"})]})]})]})]},M.product.id))}),t.length>0&&u.jsxs("div",{className:"p-6 border-t border-white/10 bg-[#0c0d10] space-y-4",children:[u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[u.jsx("span",{children:"Subtotal:"}),u.jsxs("span",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]}),u.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[u.jsx("span",{children:"Nota Fiscal & Laudo ART:"}),u.jsx("span",{className:"text-emerald-400 font-medium",children:"Incluso"})]}),u.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[u.jsx("span",{children:"Total Estimado:"}),u.jsxs("span",{className:"font-mono text-xl text-amber-400",children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("button",{onClick:_,className:"w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",children:[u.jsx(Nr,{className:"w-4 h-4"}),u.jsx("span",{children:"Enviar Pedido pelo WhatsApp (Comercial)"})]}),u.jsxs("button",{onClick:()=>f(!0),className:"w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-xs rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx(Am,{className:"w-4 h-4 fill-black"}),u.jsx("span",{children:"Finalizar Pagamento Online (Pix / Cartão)"})]})]}),u.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center",children:[u.jsx(fc,{className:"w-3.5 h-3.5 text-emerald-400"}),u.jsx("span",{children:"Compra segura com garantia direta do fabricante Outfire"})]})]}),d&&u.jsxs("div",{className:"absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[u.jsx("h3",{className:"font-bold text-white text-base",children:"Checkout Rápido Outfire"}),u.jsx("button",{onClick:()=>f(!1),className:"p-1 text-gray-400 hover:text-white",children:u.jsx(Fd,{className:"w-5 h-5"})})]}),p?u.jsxs("div",{className:"text-center py-12 space-y-4",children:[u.jsx(xc,{className:"w-16 h-16 text-emerald-400 mx-auto animate-bounce"}),u.jsx("h4",{className:"text-lg font-bold text-white",children:"Pagamento Confirmado!"}),u.jsx("p",{className:"text-xs text-gray-300",children:"Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato."})]}):u.jsxs("div",{className:"space-y-4",children:[u.jsxs("p",{className:"text-xs text-gray-300",children:["Selecione a forma de pagamento desejada para concluir o pedido de ",u.jsxs("strong",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]}),":"]}),u.jsxs("button",{onClick:()=>S("PIX"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Nv,{className:"w-6 h-6 text-emerald-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Pagar via Pix"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Aprovação imediata com 5% de desconto"})]})]}),u.jsx(ic,{className:"w-4 h-4 text-gray-400"})]}),u.jsxs("button",{onClick:()=>S("Cartão de Crédito"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Am,{className:"w-6 h-6 text-blue-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Cartão de Crédito"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Parcelamento em até 12x sem juros"})]})]}),u.jsx(ic,{className:"w-4 h-4 text-gray-400"})]}),u.jsxs("button",{onClick:()=>S("Boleto Faturado B2B"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(fc,{className:"w-6 h-6 text-amber-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Faturamento B2B / Boleto PJ"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Para restaurantes e empresas cadastradas"})]})]}),u.jsx(ic,{className:"w-4 h-4 text-gray-400"})]})]})]}),u.jsx("button",{onClick:()=>f(!1),className:"w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all",children:"Voltar ao Carrinho"})]})]})})]})},Cb=()=>u.jsxs("aside",{"aria-label":"Atendimento rápido",className:"fixed bottom-6 right-6 z-40 flex items-center group",children:[u.jsx("div",{className:"hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:"Falar com Engenheiro no WhatsApp 💬"}),u.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico.",target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20",title:"Atendimento no WhatsApp","aria-label":"Atendimento no WhatsApp",children:[u.jsx(Av,{className:"w-7 h-7 fill-white/10"}),u.jsxs("span",{className:"absolute -top-1 -right-1 flex h-4 w-4",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"})]})]})]});function Ab(){const[s,e]=Ue.useState([]),[t,r]=Ue.useState(!1),o=m=>{e(x=>x.find(S=>S.product.id===m.id)?x.map(S=>S.product.id===m.id?{...S,quantity:S.quantity+1}:S):[...x,{product:m,quantity:1}]),r(!0)},l=(m,x)=>{e(_=>_.map(S=>{if(S.product.id===m){const M=S.quantity+x;return M>0?{...S,quantity:M}:null}return S}).filter(Boolean))},d=m=>{e(x=>x.filter(_=>_.product.id!==m))},f=()=>{e([])},p=s.reduce((m,x)=>m+x.quantity,0);return u.jsxs("div",{className:"min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[u.jsx(zv,{cartCount:p,onOpenCart:()=>r(!0)}),u.jsxs("main",{className:"flex-1",children:[u.jsx(gb,{}),u.jsx(xb,{}),u.jsx(vb,{}),u.jsx(_b,{}),u.jsx(yb,{onAddToCart:o}),u.jsx(Mb,{onAddToCart:o}),u.jsx(wb,{}),u.jsx(bb,{})]}),u.jsx(Eb,{}),u.jsx(Tb,{isOpen:t,onClose:()=>r(!1),cartItems:s,onUpdateQuantity:l,onRemoveItem:d,onClearCart:f}),u.jsx(Cb,{})]})}dv.createRoot(document.getElementById("root")).render(u.jsx(rv.StrictMode,{children:u.jsx(Ab,{})}));
