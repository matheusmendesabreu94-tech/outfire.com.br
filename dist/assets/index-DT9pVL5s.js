(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function o0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Pu={exports:{}},Wa={},Lu={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function Cx(){if(Kp)return yt;Kp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,N={};function M(O,ee,ge){this.props=O,this.context=ee,this.refs=N,this.updater=ge||S}M.prototype.isReactComponent={},M.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},M.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=M.prototype;function C(O,ee,ge){this.props=O,this.context=ee,this.refs=N,this.updater=ge||S}var L=C.prototype=new _;L.constructor=C,T(L,M.prototype),L.isPureReactComponent=!0;var A=Array.isArray,I=Object.prototype.hasOwnProperty,D={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function G(O,ee,ge){var Ee,De={},ie=null,fe=null;if(ee!=null)for(Ee in ee.ref!==void 0&&(fe=ee.ref),ee.key!==void 0&&(ie=""+ee.key),ee)I.call(ee,Ee)&&!F.hasOwnProperty(Ee)&&(De[Ee]=ee[Ee]);var _e=arguments.length-2;if(_e===1)De.children=ge;else if(1<_e){for(var ke=Array(_e),Pe=0;Pe<_e;Pe++)ke[Pe]=arguments[Pe+2];De.children=ke}if(O&&O.defaultProps)for(Ee in _e=O.defaultProps,_e)De[Ee]===void 0&&(De[Ee]=_e[Ee]);return{$$typeof:s,type:O,key:ie,ref:fe,props:De,_owner:D.current}}function b(O,ee){return{$$typeof:s,type:O.type,key:ee,ref:O.ref,props:O.props,_owner:O._owner}}function P(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function z(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return ee[ge]})}var Q=/\/+/g;function Z(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?z(""+O.key):ee.toString(36)}function X(O,ee,ge,Ee,De){var ie=typeof O;(ie==="undefined"||ie==="boolean")&&(O=null);var fe=!1;if(O===null)fe=!0;else switch(ie){case"string":case"number":fe=!0;break;case"object":switch(O.$$typeof){case s:case e:fe=!0}}if(fe)return fe=O,De=De(fe),O=Ee===""?"."+Z(fe,0):Ee,A(De)?(ge="",O!=null&&(ge=O.replace(Q,"$&/")+"/"),X(De,ee,ge,"",function(Pe){return Pe})):De!=null&&(P(De)&&(De=b(De,ge+(!De.key||fe&&fe.key===De.key?"":(""+De.key).replace(Q,"$&/")+"/")+O)),ee.push(De)),1;if(fe=0,Ee=Ee===""?".":Ee+":",A(O))for(var _e=0;_e<O.length;_e++){ie=O[_e];var ke=Ee+Z(ie,_e);fe+=X(ie,ee,ge,ke,De)}else if(ke=y(O),typeof ke=="function")for(O=ke.call(O),_e=0;!(ie=O.next()).done;)ie=ie.value,ke=Ee+Z(ie,_e++),fe+=X(ie,ee,ge,ke,De);else if(ie==="object")throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return fe}function J(O,ee,ge){if(O==null)return O;var Ee=[],De=0;return X(O,Ee,"","",function(ie){return ee.call(ge,ie,De++)}),Ee}function H(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var $={current:null},j={transition:null},oe={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:j,ReactCurrentOwner:D};function se(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:J,forEach:function(O,ee,ge){J(O,function(){ee.apply(this,arguments)},ge)},count:function(O){var ee=0;return J(O,function(){ee++}),ee},toArray:function(O){return J(O,function(ee){return ee})||[]},only:function(O){if(!P(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},yt.Component=M,yt.Fragment=n,yt.Profiler=o,yt.PureComponent=C,yt.StrictMode=r,yt.Suspense=p,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,yt.act=se,yt.cloneElement=function(O,ee,ge){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ee=T({},O.props),De=O.key,ie=O.ref,fe=O._owner;if(ee!=null){if(ee.ref!==void 0&&(ie=ee.ref,fe=D.current),ee.key!==void 0&&(De=""+ee.key),O.type&&O.type.defaultProps)var _e=O.type.defaultProps;for(ke in ee)I.call(ee,ke)&&!F.hasOwnProperty(ke)&&(Ee[ke]=ee[ke]===void 0&&_e!==void 0?_e[ke]:ee[ke])}var ke=arguments.length-2;if(ke===1)Ee.children=ge;else if(1<ke){_e=Array(ke);for(var Pe=0;Pe<ke;Pe++)_e[Pe]=arguments[Pe+2];Ee.children=_e}return{$$typeof:s,type:O.type,key:De,ref:ie,props:Ee,_owner:fe}},yt.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},yt.createElement=G,yt.createFactory=function(O){var ee=G.bind(null,O);return ee.type=O,ee},yt.createRef=function(){return{current:null}},yt.forwardRef=function(O){return{$$typeof:d,render:O}},yt.isValidElement=P,yt.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:H}},yt.memo=function(O,ee){return{$$typeof:m,type:O,compare:ee===void 0?null:ee}},yt.startTransition=function(O){var ee=j.transition;j.transition={};try{O()}finally{j.transition=ee}},yt.unstable_act=se,yt.useCallback=function(O,ee){return $.current.useCallback(O,ee)},yt.useContext=function(O){return $.current.useContext(O)},yt.useDebugValue=function(){},yt.useDeferredValue=function(O){return $.current.useDeferredValue(O)},yt.useEffect=function(O,ee){return $.current.useEffect(O,ee)},yt.useId=function(){return $.current.useId()},yt.useImperativeHandle=function(O,ee,ge){return $.current.useImperativeHandle(O,ee,ge)},yt.useInsertionEffect=function(O,ee){return $.current.useInsertionEffect(O,ee)},yt.useLayoutEffect=function(O,ee){return $.current.useLayoutEffect(O,ee)},yt.useMemo=function(O,ee){return $.current.useMemo(O,ee)},yt.useReducer=function(O,ee,ge){return $.current.useReducer(O,ee,ge)},yt.useRef=function(O){return $.current.useRef(O)},yt.useState=function(O){return $.current.useState(O)},yt.useSyncExternalStore=function(O,ee,ge){return $.current.useSyncExternalStore(O,ee,ge)},yt.useTransition=function(){return $.current.useTransition()},yt.version="18.3.1",yt}var Zp;function ff(){return Zp||(Zp=1,Lu.exports=Cx()),Lu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Ax(){if(Qp)return Wa;Qp=1;var s=ff(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var x,v={},y=null,S=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(v[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)v[x]===void 0&&(v[x]=p[x]);return{$$typeof:e,type:d,key:y,ref:S,props:v,_owner:o.current}}return Wa.Fragment=n,Wa.jsx=u,Wa.jsxs=u,Wa}var Jp;function Rx(){return Jp||(Jp=1,Pu.exports=Ax()),Pu.exports}var f=Rx(),ot=ff();const Nx=o0(ot);var vl={},Du={exports:{}},jn={},Iu={exports:{}},Uu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Px(){return em||(em=1,(function(s){function e(j,oe){var se=j.length;j.push(oe);e:for(;0<se;){var O=se-1>>>1,ee=j[O];if(0<o(ee,oe))j[O]=oe,j[se]=ee,se=O;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var oe=j[0],se=j.pop();if(se!==oe){j[0]=se;e:for(var O=0,ee=j.length,ge=ee>>>1;O<ge;){var Ee=2*(O+1)-1,De=j[Ee],ie=Ee+1,fe=j[ie];if(0>o(De,se))ie<ee&&0>o(fe,De)?(j[O]=fe,j[ie]=se,O=ie):(j[O]=De,j[Ee]=se,O=Ee);else if(ie<ee&&0>o(fe,se))j[O]=fe,j[ie]=se,O=ie;else break e}}return oe}function o(j,oe){var se=j.sortIndex-oe.sortIndex;return se!==0?se:j.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],x=1,v=null,y=3,S=!1,T=!1,N=!1,M=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(j){for(var oe=n(m);oe!==null;){if(oe.callback===null)r(m);else if(oe.startTime<=j)r(m),oe.sortIndex=oe.expirationTime,e(p,oe);else break;oe=n(m)}}function A(j){if(N=!1,L(j),!T)if(n(p)!==null)T=!0,H(I);else{var oe=n(m);oe!==null&&$(A,oe.startTime-j)}}function I(j,oe){T=!1,N&&(N=!1,_(G),G=-1),S=!0;var se=y;try{for(L(oe),v=n(p);v!==null&&(!(v.expirationTime>oe)||j&&!z());){var O=v.callback;if(typeof O=="function"){v.callback=null,y=v.priorityLevel;var ee=O(v.expirationTime<=oe);oe=s.unstable_now(),typeof ee=="function"?v.callback=ee:v===n(p)&&r(p),L(oe)}else r(p);v=n(p)}if(v!==null)var ge=!0;else{var Ee=n(m);Ee!==null&&$(A,Ee.startTime-oe),ge=!1}return ge}finally{v=null,y=se,S=!1}}var D=!1,F=null,G=-1,b=5,P=-1;function z(){return!(s.unstable_now()-P<b)}function Q(){if(F!==null){var j=s.unstable_now();P=j;var oe=!0;try{oe=F(!0,j)}finally{oe?Z():(D=!1,F=null)}}else D=!1}var Z;if(typeof C=="function")Z=function(){C(Q)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,J=X.port2;X.port1.onmessage=Q,Z=function(){J.postMessage(null)}}else Z=function(){M(Q,0)};function H(j){F=j,D||(D=!0,Z())}function $(j,oe){G=M(function(){j(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(j){j.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,H(I))},s.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<j?Math.floor(1e3/j):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(j){switch(y){case 1:case 2:case 3:var oe=3;break;default:oe=y}var se=y;y=oe;try{return j()}finally{y=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(j,oe){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var se=y;y=j;try{return oe()}finally{y=se}},s.unstable_scheduleCallback=function(j,oe,se){var O=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,j){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=se+ee,j={id:x++,callback:oe,priorityLevel:j,startTime:se,expirationTime:ee,sortIndex:-1},se>O?(j.sortIndex=se,e(m,j),n(p)===null&&j===n(m)&&(N?(_(G),G=-1):N=!0,$(A,se-O))):(j.sortIndex=ee,e(p,j),T||S||(T=!0,H(I))),j},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(j){var oe=y;return function(){var se=y;y=oe;try{return j.apply(this,arguments)}finally{y=se}}}})(Uu)),Uu}var tm;function Lx(){return tm||(tm=1,Iu.exports=Px()),Iu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function Dx(){if(nm)return jn;nm=1;var s=ff(),e=Lx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function y(t){return p.call(v,t)?!0:p.call(x,t)?!1:m.test(t)?v[t]=!0:(x[t]=!0,!1)}function S(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,a,c){if(i===null||typeof i>"u"||S(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function N(t,i,a,c,h,g,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=g,this.removeEmptyString=E}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){M[t]=new N(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];M[i]=new N(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){M[t]=new N(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){M[t]=new N(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){M[t]=new N(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){M[t]=new N(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){M[t]=new N(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){M[t]=new N(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){M[t]=new N(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,C);M[i]=new N(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,C);M[i]=new N(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,C);M[i]=new N(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){M[t]=new N(t,1,!1,t.toLowerCase(),null,!1,!1)}),M.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){M[t]=new N(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,a,c){var h=M.hasOwnProperty(i)?M[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,h,c)&&(a=null),c||h===null?y(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):h.mustUseProperty?t[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?t.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),D=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),z=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),j=Symbol.iterator;function oe(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,O;function ee(t){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+t}var ge=!1;function Ee(t,i){if(!t||ge)return"";ge=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(t,[],i)}else{try{i.call()}catch(ce){c=ce}t.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}t()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var h=ce.stack.split(`
`),g=c.stack.split(`
`),E=h.length-1,k=g.length-1;1<=E&&0<=k&&h[E]!==g[k];)k--;for(;1<=E&&0<=k;E--,k--)if(h[E]!==g[k]){if(E!==1||k!==1)do if(E--,k--,0>k||h[E]!==g[k]){var V=`
`+h[E].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=E&&0<=k);break}}}finally{ge=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ee(t):""}function De(t){switch(t.tag){case 5:return ee(t.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return t=Ee(t.type,!1),t;case 11:return t=Ee(t.type.render,!1),t;case 1:return t=Ee(t.type,!0),t;default:return""}}function ie(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case D:return"Portal";case b:return"Profiler";case G:return"StrictMode";case Z:return"Suspense";case X:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case P:return(t._context.displayName||"Context")+".Provider";case Q:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case J:return i=t.displayName||null,i!==null?i:ie(t.type)||"Memo";case H:i=t._payload,t=t._init;try{return ie(t(i))}catch{}}return null}function fe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===G?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ke(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Pe(t){var i=ke(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function dt(t){t._valueTracker||(t._valueTracker=Pe(t))}function Bt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=ke(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function ht(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pt(t,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Mt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=_e(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function st(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function vt(t,i){st(t,i);var a=_e(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ot(t,i.type,a):i.hasOwnProperty("defaultValue")&&Ot(t,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function B(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ot(t,i,a){(i!=="number"||ht(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var _t=Array.isArray;function St(t,i,a,c){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&c&&(t[a].defaultSelected=!0)}else{for(a=""+_e(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,c&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function He(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function U(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(_t(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:_e(a)}}function w(t,i){var a=_e(i.value),c=_e(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function Y(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var de,Xe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,h)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=de.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Te(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Je=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(t){Je.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ze[i]=ze[t]})});function Se(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ze.hasOwnProperty(t)&&ze[t]?(""+i).trim():i+"px"}function Ce(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=Se(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,h):t[a]=h}}var Fe=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(t,i){if(i){if(Fe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Ne(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ie=null,Me=null,Ue=null;function ye(t){if(t=Na(t)){if(typeof Ie!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Do(i),Ie(t.stateNode,t.type,i))}}function me(t){Me?Ue?Ue.push(t):Ue=[t]:Me=t}function Ae(){if(Me){var t=Me,i=Ue;if(Ue=Me=null,ye(t),i)for(t=0;t<i.length;t++)ye(i[t])}}function nt(t,i){return t(i)}function It(){}var wt=!1;function Nn(t,i,a){if(wt)return t(i,a);wt=!0;try{return nt(t,i,a)}finally{wt=!1,(Me!==null||Ue!==null)&&(It(),Ae())}}function nn(t,i){var a=t.stateNode;if(a===null)return null;var c=Do(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Br=!1;if(d)try{var di={};Object.defineProperty(di,"passive",{get:function(){Br=!0}}),window.addEventListener("test",di,di),window.removeEventListener("test",di,di)}catch{Br=!1}function ur(t,i,a,c,h,g,E,k,V){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(ve){this.onError(ve)}}var Ei=!1,bi=null,fi=!1,Pn=null,Wn={onError:function(t){Ei=!0,bi=t}};function ti(t,i,a,c,h,g,E,k,V){Ei=!1,bi=null,ur.apply(Wn,arguments)}function zr(t,i,a,c,h,g,E,k,V){if(ti.apply(this,arguments),Ei){if(Ei){var ce=bi;Ei=!1,bi=null}else throw Error(n(198));fi||(fi=!0,Pn=ce)}}function ni(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function fa(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Vr(t){if(ni(t)!==t)throw Error(n(188))}function po(t){var i=t.alternate;if(!i){if(i=ni(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Vr(h),t;if(g===c)return Vr(h),i;g=g.sibling}throw Error(n(188))}if(a.return!==c.return)a=h,c=g;else{for(var E=!1,k=h.child;k;){if(k===a){E=!0,a=h,c=g;break}if(k===c){E=!0,c=h,a=g;break}k=k.sibling}if(!E){for(k=g.child;k;){if(k===a){E=!0,a=g,c=h;break}if(k===c){E=!0,c=g,a=h;break}k=k.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function ha(t){return t=po(t),t!==null?mo(t):null}function mo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=mo(t);if(i!==null)return i;t=t.sibling}return null}var go=e.unstable_scheduleCallback,xo=e.unstable_cancelCallback,ec=e.unstable_shouldYield,tc=e.unstable_requestPaint,qt=e.unstable_now,R=e.unstable_getCurrentPriorityLevel,K=e.unstable_ImmediatePriority,ue=e.unstable_UserBlockingPriority,le=e.unstable_NormalPriority,ne=e.unstable_LowPriority,Le=e.unstable_IdlePriority,Be=null,Re=null;function qe(t){if(Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:gt,it=Math.log,Ze=Math.LN2;function gt(t){return t>>>=0,t===0?32:31-(it(t)/Ze|0)|0}var Ct=64,Vt=4194304;function zt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pt(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,h=t.suspendedLanes,g=t.pingedLanes,E=a&268435455;if(E!==0){var k=E&~h;k!==0?c=zt(k):(g&=E,g!==0&&(c=zt(g)))}else E=a&~h,E!==0?c=zt(E):g!==0&&(c=zt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-Ge(i),h=1<<a,c|=t[a],i&=~h;return c}function Qe(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,h=t.expirationTimes,g=t.pendingLanes;0<g;){var E=31-Ge(g),k=1<<E,V=h[E];V===-1?((k&a)===0||(k&c)!==0)&&(h[E]=Qe(k,i)):V<=i&&(t.expiredLanes|=k),g&=~k}}function Et(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yn(){var t=Ct;return Ct<<=1,(Ct&4194240)===0&&(Ct=64),t}function Ti(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function rn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Ge(i),t[i]=a}function jr(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var h=31-Ge(a),g=1<<h;i[h]=0,c[h]=-1,t[h]=-1,a&=~g}}function Ft(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-Ge(a),h=1<<c;h&i|t[c]&i&&(t[c]|=i),a&=~h}}var ft=0;function Ln(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var cn,un,ms,Ci,Lf,nc=!1,vo=[],dr=null,fr=null,hr=null,pa=new Map,ma=new Map,pr=[],Y0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Df(t,i){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":pa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(i.pointerId)}}function ga(t,i,a,c,h,g){return t===null||t.nativeEvent!==g?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Na(i),i!==null&&un(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function K0(t,i,a,c,h){switch(i){case"focusin":return dr=ga(dr,t,i,a,c,h),!0;case"dragenter":return fr=ga(fr,t,i,a,c,h),!0;case"mouseover":return hr=ga(hr,t,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return pa.set(g,ga(pa.get(g)||null,t,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,ma.set(g,ga(ma.get(g)||null,t,i,a,c,h)),!0}return!1}function If(t){var i=Gr(t.target);if(i!==null){var a=ni(i);if(a!==null){if(i=a.tag,i===13){if(i=fa(a),i!==null){t.blockedOn=i,Lf(t.priority,function(){ms(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function _o(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=rc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);lt=c,a.target.dispatchEvent(c),lt=null}else return i=Na(a),i!==null&&un(i),t.blockedOn=a,!1;i.shift()}return!0}function Uf(t,i,a){_o(t)&&a.delete(i)}function Z0(){nc=!1,dr!==null&&_o(dr)&&(dr=null),fr!==null&&_o(fr)&&(fr=null),hr!==null&&_o(hr)&&(hr=null),pa.forEach(Uf),ma.forEach(Uf)}function xa(t,i){t.blockedOn===i&&(t.blockedOn=null,nc||(nc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Z0)))}function va(t){function i(h){return xa(h,t)}if(0<vo.length){xa(vo[0],t);for(var a=1;a<vo.length;a++){var c=vo[a];c.blockedOn===t&&(c.blockedOn=null)}}for(dr!==null&&xa(dr,t),fr!==null&&xa(fr,t),hr!==null&&xa(hr,t),pa.forEach(i),ma.forEach(i),a=0;a<pr.length;a++)c=pr[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)If(a),a.blockedOn===null&&pr.shift()}var gs=A.ReactCurrentBatchConfig,yo=!0;function Q0(t,i,a,c){var h=ft,g=gs.transition;gs.transition=null;try{ft=1,ic(t,i,a,c)}finally{ft=h,gs.transition=g}}function J0(t,i,a,c){var h=ft,g=gs.transition;gs.transition=null;try{ft=4,ic(t,i,a,c)}finally{ft=h,gs.transition=g}}function ic(t,i,a,c){if(yo){var h=rc(t,i,a,c);if(h===null)Sc(t,i,c,So,a),Df(t,c);else if(K0(h,t,i,a,c))c.stopPropagation();else if(Df(t,c),i&4&&-1<Y0.indexOf(t)){for(;h!==null;){var g=Na(h);if(g!==null&&cn(g),g=rc(t,i,a,c),g===null&&Sc(t,i,c,So,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else Sc(t,i,c,null,a)}}var So=null;function rc(t,i,a,c){if(So=null,t=W(c),t=Gr(t),t!==null)if(i=ni(t),i===null)t=null;else if(a=i.tag,a===13){if(t=fa(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return So=t,null}function Ff(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R()){case K:return 1;case ue:return 4;case le:case ne:return 16;case Le:return 536870912;default:return 16}default:return 16}}var mr=null,sc=null,Mo=null;function Of(){if(Mo)return Mo;var t,i=sc,a=i.length,c,h="value"in mr?mr.value:mr.textContent,g=h.length;for(t=0;t<a&&i[t]===h[t];t++);var E=a-t;for(c=1;c<=E&&i[a-c]===h[g-c];c++);return Mo=h.slice(t,1<c?1-c:void 0)}function wo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Eo(){return!0}function kf(){return!1}function Xn(t){function i(a,c,h,g,E){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(a=t[k],this[k]=a?a(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Eo:kf,this.isPropagationStopped=kf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),i}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ac=Xn(xs),_a=se({},xs,{view:0,detail:0}),eg=Xn(_a),oc,lc,ya,bo=se({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ya&&(ya&&t.type==="mousemove"?(oc=t.screenX-ya.screenX,lc=t.screenY-ya.screenY):lc=oc=0,ya=t),oc)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),Bf=Xn(bo),tg=se({},bo,{dataTransfer:0}),ng=Xn(tg),ig=se({},_a,{relatedTarget:0}),cc=Xn(ig),rg=se({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),sg=Xn(rg),ag=se({},xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),og=Xn(ag),lg=se({},xs,{data:0}),zf=Xn(lg),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ug={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=dg[t])?!!i[t]:!1}function uc(){return fg}var hg=se({},_a,{key:function(t){if(t.key){var i=cg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ug[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uc,charCode:function(t){return t.type==="keypress"?wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pg=Xn(hg),mg=se({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=Xn(mg),gg=se({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uc}),xg=Xn(gg),vg=se({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),_g=Xn(vg),yg=se({},bo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sg=Xn(yg),Mg=[9,13,27,32],dc=d&&"CompositionEvent"in window,Sa=null;d&&"documentMode"in document&&(Sa=document.documentMode);var wg=d&&"TextEvent"in window&&!Sa,jf=d&&(!dc||Sa&&8<Sa&&11>=Sa),Gf=" ",Hf=!1;function Wf(t,i){switch(t){case"keyup":return Mg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function Eg(t,i){switch(t){case"compositionend":return Xf(i);case"keypress":return i.which!==32?null:(Hf=!0,Gf);case"textInput":return t=i.data,t===Gf&&Hf?null:t;default:return null}}function bg(t,i){if(vs)return t==="compositionend"||!dc&&Wf(t,i)?(t=Of(),Mo=sc=mr=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return jf&&i.locale!=="ko"?null:i.data;default:return null}}var Tg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Tg[t.type]:i==="textarea"}function $f(t,i,a,c){me(c),i=No(i,"onChange"),0<i.length&&(a=new ac("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var Ma=null,wa=null;function Cg(t){fh(t,0)}function To(t){var i=ws(t);if(Bt(i))return t}function Ag(t,i){if(t==="change")return i}var Yf=!1;if(d){var fc;if(d){var hc="oninput"in document;if(!hc){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),hc=typeof Kf.oninput=="function"}fc=hc}else fc=!1;Yf=fc&&(!document.documentMode||9<document.documentMode)}function Zf(){Ma&&(Ma.detachEvent("onpropertychange",Qf),wa=Ma=null)}function Qf(t){if(t.propertyName==="value"&&To(wa)){var i=[];$f(i,wa,t,W(t)),Nn(Cg,i)}}function Rg(t,i,a){t==="focusin"?(Zf(),Ma=i,wa=a,Ma.attachEvent("onpropertychange",Qf)):t==="focusout"&&Zf()}function Ng(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return To(wa)}function Pg(t,i){if(t==="click")return To(i)}function Lg(t,i){if(t==="input"||t==="change")return To(i)}function Dg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var hi=typeof Object.is=="function"?Object.is:Dg;function Ea(t,i){if(hi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!hi(t[h],i[h]))return!1}return!0}function Jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function eh(t,i){var a=Jf(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Jf(a)}}function th(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?th(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function nh(){for(var t=window,i=ht();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ht(t.document)}return i}function pc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ig(t){var i=nh(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&th(a.ownerDocument.documentElement,a)){if(c!==null&&pc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!t.extend&&g>c&&(h=c,c=g,g=h),h=eh(a,g);var E=eh(a,c);h&&E&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),t.removeAllRanges(),g>c?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ug=d&&"documentMode"in document&&11>=document.documentMode,_s=null,mc=null,ba=null,gc=!1;function ih(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gc||_s==null||_s!==ht(c)||(c=_s,"selectionStart"in c&&pc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ba&&Ea(ba,c)||(ba=c,c=No(mc,"onSelect"),0<c.length&&(i=new ac("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=_s)))}function Co(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ys={animationend:Co("Animation","AnimationEnd"),animationiteration:Co("Animation","AnimationIteration"),animationstart:Co("Animation","AnimationStart"),transitionend:Co("Transition","TransitionEnd")},xc={},rh={};d&&(rh=document.createElement("div").style,"AnimationEvent"in window||(delete ys.animationend.animation,delete ys.animationiteration.animation,delete ys.animationstart.animation),"TransitionEvent"in window||delete ys.transitionend.transition);function Ao(t){if(xc[t])return xc[t];if(!ys[t])return t;var i=ys[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in rh)return xc[t]=i[a];return t}var sh=Ao("animationend"),ah=Ao("animationiteration"),oh=Ao("animationstart"),lh=Ao("transitionend"),ch=new Map,uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(t,i){ch.set(t,i),l(i,[t])}for(var vc=0;vc<uh.length;vc++){var _c=uh[vc],Fg=_c.toLowerCase(),Og=_c[0].toUpperCase()+_c.slice(1);gr(Fg,"on"+Og)}gr(sh,"onAnimationEnd"),gr(ah,"onAnimationIteration"),gr(oh,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(lh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function dh(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,zr(c,i,void 0,t),t.currentTarget=null}function fh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var E=c.length-1;0<=E;E--){var k=c[E],V=k.instance,ce=k.currentTarget;if(k=k.listener,V!==g&&h.isPropagationStopped())break e;dh(h,k,ce),g=V}else for(E=0;E<c.length;E++){if(k=c[E],V=k.instance,ce=k.currentTarget,k=k.listener,V!==g&&h.isPropagationStopped())break e;dh(h,k,ce),g=V}}}if(fi)throw t=Pn,fi=!1,Pn=null,t}function Gt(t,i){var a=i[Cc];a===void 0&&(a=i[Cc]=new Set);var c=t+"__bubble";a.has(c)||(hh(i,t,2,!1),a.add(c))}function yc(t,i,a){var c=0;i&&(c|=4),hh(a,t,c,i)}var Ro="_reactListening"+Math.random().toString(36).slice(2);function Ca(t){if(!t[Ro]){t[Ro]=!0,r.forEach(function(a){a!=="selectionchange"&&(kg.has(a)||yc(a,!1,t),yc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Ro]||(i[Ro]=!0,yc("selectionchange",!1,i))}}function hh(t,i,a,c){switch(Ff(i)){case 1:var h=Q0;break;case 4:h=J0;break;default:h=ic}a=h.bind(null,i,a,t),h=void 0,!Br||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Sc(t,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var k=c.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var V=E.tag;if((V===3||V===4)&&(V=E.stateNode.containerInfo,V===h||V.nodeType===8&&V.parentNode===h))return;E=E.return}for(;k!==null;){if(E=Gr(k),E===null)return;if(V=E.tag,V===5||V===6){c=g=E;continue e}k=k.parentNode}}c=c.return}Nn(function(){var ce=g,ve=W(a),we=[];e:{var xe=ch.get(t);if(xe!==void 0){var Ve=ac,$e=t;switch(t){case"keypress":if(wo(a)===0)break e;case"keydown":case"keyup":Ve=pg;break;case"focusin":$e="focus",Ve=cc;break;case"focusout":$e="blur",Ve=cc;break;case"beforeblur":case"afterblur":Ve=cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ve=Bf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ve=ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ve=xg;break;case sh:case ah:case oh:Ve=sg;break;case lh:Ve=_g;break;case"scroll":Ve=eg;break;case"wheel":Ve=Sg;break;case"copy":case"cut":case"paste":Ve=og;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ve=Vf}var Ye=(i&4)!==0,Jt=!Ye&&t==="scroll",te=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var q=ce,ae;q!==null;){ae=q;var be=ae.stateNode;if(ae.tag===5&&be!==null&&(ae=be,te!==null&&(be=nn(q,te),be!=null&&Ye.push(Aa(q,be,ae)))),Jt)break;q=q.return}0<Ye.length&&(xe=new Ve(xe,$e,null,a,ve),we.push({event:xe,listeners:Ye}))}}if((i&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",Ve=t==="mouseout"||t==="pointerout",xe&&a!==lt&&($e=a.relatedTarget||a.fromElement)&&(Gr($e)||$e[Hi]))break e;if((Ve||xe)&&(xe=ve.window===ve?ve:(xe=ve.ownerDocument)?xe.defaultView||xe.parentWindow:window,Ve?($e=a.relatedTarget||a.toElement,Ve=ce,$e=$e?Gr($e):null,$e!==null&&(Jt=ni($e),$e!==Jt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(Ve=null,$e=ce),Ve!==$e)){if(Ye=Bf,be="onMouseLeave",te="onMouseEnter",q="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=Vf,be="onPointerLeave",te="onPointerEnter",q="pointer"),Jt=Ve==null?xe:ws(Ve),ae=$e==null?xe:ws($e),xe=new Ye(be,q+"leave",Ve,a,ve),xe.target=Jt,xe.relatedTarget=ae,be=null,Gr(ve)===ce&&(Ye=new Ye(te,q+"enter",$e,a,ve),Ye.target=ae,Ye.relatedTarget=Jt,be=Ye),Jt=be,Ve&&$e)t:{for(Ye=Ve,te=$e,q=0,ae=Ye;ae;ae=Ss(ae))q++;for(ae=0,be=te;be;be=Ss(be))ae++;for(;0<q-ae;)Ye=Ss(Ye),q--;for(;0<ae-q;)te=Ss(te),ae--;for(;q--;){if(Ye===te||te!==null&&Ye===te.alternate)break t;Ye=Ss(Ye),te=Ss(te)}Ye=null}else Ye=null;Ve!==null&&ph(we,xe,Ve,Ye,!1),$e!==null&&Jt!==null&&ph(we,Jt,$e,Ye,!0)}}e:{if(xe=ce?ws(ce):window,Ve=xe.nodeName&&xe.nodeName.toLowerCase(),Ve==="select"||Ve==="input"&&xe.type==="file")var Ke=Ag;else if(qf(xe))if(Yf)Ke=Lg;else{Ke=Ng;var et=Rg}else(Ve=xe.nodeName)&&Ve.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=Pg);if(Ke&&(Ke=Ke(t,ce))){$f(we,Ke,a,ve);break e}et&&et(t,xe,ce),t==="focusout"&&(et=xe._wrapperState)&&et.controlled&&xe.type==="number"&&Ot(xe,"number",xe.value)}switch(et=ce?ws(ce):window,t){case"focusin":(qf(et)||et.contentEditable==="true")&&(_s=et,mc=ce,ba=null);break;case"focusout":ba=mc=_s=null;break;case"mousedown":gc=!0;break;case"contextmenu":case"mouseup":case"dragend":gc=!1,ih(we,a,ve);break;case"selectionchange":if(Ug)break;case"keydown":case"keyup":ih(we,a,ve)}var tt;if(dc)e:{switch(t){case"compositionstart":var at="onCompositionStart";break e;case"compositionend":at="onCompositionEnd";break e;case"compositionupdate":at="onCompositionUpdate";break e}at=void 0}else vs?Wf(t,a)&&(at="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(at="onCompositionStart");at&&(jf&&a.locale!=="ko"&&(vs||at!=="onCompositionStart"?at==="onCompositionEnd"&&vs&&(tt=Of()):(mr=ve,sc="value"in mr?mr.value:mr.textContent,vs=!0)),et=No(ce,at),0<et.length&&(at=new zf(at,t,null,a,ve),we.push({event:at,listeners:et}),tt?at.data=tt:(tt=Xf(a),tt!==null&&(at.data=tt)))),(tt=wg?Eg(t,a):bg(t,a))&&(ce=No(ce,"onBeforeInput"),0<ce.length&&(ve=new zf("onBeforeInput","beforeinput",null,a,ve),we.push({event:ve,listeners:ce}),ve.data=tt))}fh(we,i)})}function Aa(t,i,a){return{instance:t,listener:i,currentTarget:a}}function No(t,i){for(var a=i+"Capture",c=[];t!==null;){var h=t,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=nn(t,a),g!=null&&c.unshift(Aa(t,g,h)),g=nn(t,i),g!=null&&c.push(Aa(t,g,h))),t=t.return}return c}function Ss(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ph(t,i,a,c,h){for(var g=i._reactName,E=[];a!==null&&a!==c;){var k=a,V=k.alternate,ce=k.stateNode;if(V!==null&&V===c)break;k.tag===5&&ce!==null&&(k=ce,h?(V=nn(a,g),V!=null&&E.unshift(Aa(a,V,k))):h||(V=nn(a,g),V!=null&&E.push(Aa(a,V,k)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var Bg=/\r\n?/g,zg=/\u0000|\uFFFD/g;function mh(t){return(typeof t=="string"?t:""+t).replace(Bg,`
`).replace(zg,"")}function Po(t,i,a){if(i=mh(i),mh(t)!==i&&a)throw Error(n(425))}function Lo(){}var Mc=null,wc=null;function Ec(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var bc=typeof setTimeout=="function"?setTimeout:void 0,Vg=typeof clearTimeout=="function"?clearTimeout:void 0,gh=typeof Promise=="function"?Promise:void 0,jg=typeof queueMicrotask=="function"?queueMicrotask:typeof gh<"u"?function(t){return gh.resolve(null).then(t).catch(Gg)}:bc;function Gg(t){setTimeout(function(){throw t})}function Tc(t,i){var a=i,c=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){t.removeChild(h),va(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);va(i)}function xr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function xh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var Ms=Math.random().toString(36).slice(2),Ai="__reactFiber$"+Ms,Ra="__reactProps$"+Ms,Hi="__reactContainer$"+Ms,Cc="__reactEvents$"+Ms,Hg="__reactListeners$"+Ms,Wg="__reactHandles$"+Ms;function Gr(t){var i=t[Ai];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Hi]||a[Ai]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=xh(t);t!==null;){if(a=t[Ai])return a;t=xh(t)}return i}t=a,a=t.parentNode}return null}function Na(t){return t=t[Ai]||t[Hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ws(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Do(t){return t[Ra]||null}var Ac=[],Es=-1;function vr(t){return{current:t}}function Ht(t){0>Es||(t.current=Ac[Es],Ac[Es]=null,Es--)}function jt(t,i){Es++,Ac[Es]=t.current,t.current=i}var _r={},Sn=vr(_r),On=vr(!1),Hr=_r;function bs(t,i){var a=t.type.contextTypes;if(!a)return _r;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=h),h}function kn(t){return t=t.childContextTypes,t!=null}function Io(){Ht(On),Ht(Sn)}function vh(t,i,a){if(Sn.current!==_r)throw Error(n(168));jt(Sn,i),jt(On,a)}function _h(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(n(108,fe(t)||"Unknown",h));return se({},a,c)}function Uo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Hr=Sn.current,jt(Sn,t),jt(On,On.current),!0}function yh(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=_h(t,i,Hr),c.__reactInternalMemoizedMergedChildContext=t,Ht(On),Ht(Sn),jt(Sn,t)):Ht(On),jt(On,a)}var Wi=null,Fo=!1,Rc=!1;function Sh(t){Wi===null?Wi=[t]:Wi.push(t)}function Xg(t){Fo=!0,Sh(t)}function yr(){if(!Rc&&Wi!==null){Rc=!0;var t=0,i=ft;try{var a=Wi;for(ft=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Wi=null,Fo=!1}catch(h){throw Wi!==null&&(Wi=Wi.slice(t+1)),go(K,yr),h}finally{ft=i,Rc=!1}}return null}var Ts=[],Cs=0,Oo=null,ko=0,ii=[],ri=0,Wr=null,Xi=1,qi="";function Xr(t,i){Ts[Cs++]=ko,Ts[Cs++]=Oo,Oo=t,ko=i}function Mh(t,i,a){ii[ri++]=Xi,ii[ri++]=qi,ii[ri++]=Wr,Wr=t;var c=Xi;t=qi;var h=32-Ge(c)-1;c&=~(1<<h),a+=1;var g=32-Ge(i)+h;if(30<g){var E=h-h%5;g=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Xi=1<<32-Ge(i)+h|a<<h|c,qi=g+t}else Xi=1<<g|a<<h|c,qi=t}function Nc(t){t.return!==null&&(Xr(t,1),Mh(t,1,0))}function Pc(t){for(;t===Oo;)Oo=Ts[--Cs],Ts[Cs]=null,ko=Ts[--Cs],Ts[Cs]=null;for(;t===Wr;)Wr=ii[--ri],ii[ri]=null,qi=ii[--ri],ii[ri]=null,Xi=ii[--ri],ii[ri]=null}var qn=null,$n=null,Wt=!1,pi=null;function wh(t,i){var a=li(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Eh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,qn=t,$n=xr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,qn=t,$n=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Wr!==null?{id:Xi,overflow:qi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=li(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,qn=t,$n=null,!0):!1;default:return!1}}function Lc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dc(t){if(Wt){var i=$n;if(i){var a=i;if(!Eh(t,i)){if(Lc(t))throw Error(n(418));i=xr(a.nextSibling);var c=qn;i&&Eh(t,i)?wh(c,a):(t.flags=t.flags&-4097|2,Wt=!1,qn=t)}}else{if(Lc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Wt=!1,qn=t}}}function bh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;qn=t}function Bo(t){if(t!==qn)return!1;if(!Wt)return bh(t),Wt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Ec(t.type,t.memoizedProps)),i&&(i=$n)){if(Lc(t))throw Th(),Error(n(418));for(;i;)wh(t,i),i=xr(i.nextSibling)}if(bh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){$n=xr(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}$n=null}}else $n=qn?xr(t.stateNode.nextSibling):null;return!0}function Th(){for(var t=$n;t;)t=xr(t.nextSibling)}function As(){$n=qn=null,Wt=!1}function Ic(t){pi===null?pi=[t]:pi.push(t)}var qg=A.ReactCurrentBatchConfig;function Pa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var h=c,g=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(E){var k=h.refs;E===null?delete k[g]:k[g]=E},i._stringRef=g,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function zo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Ch(t){var i=t._init;return i(t._payload)}function Ah(t){function i(te,q){if(t){var ae=te.deletions;ae===null?(te.deletions=[q],te.flags|=16):ae.push(q)}}function a(te,q){if(!t)return null;for(;q!==null;)i(te,q),q=q.sibling;return null}function c(te,q){for(te=new Map;q!==null;)q.key!==null?te.set(q.key,q):te.set(q.index,q),q=q.sibling;return te}function h(te,q){return te=Ar(te,q),te.index=0,te.sibling=null,te}function g(te,q,ae){return te.index=ae,t?(ae=te.alternate,ae!==null?(ae=ae.index,ae<q?(te.flags|=2,q):ae):(te.flags|=2,q)):(te.flags|=1048576,q)}function E(te){return t&&te.alternate===null&&(te.flags|=2),te}function k(te,q,ae,be){return q===null||q.tag!==6?(q=bu(ae,te.mode,be),q.return=te,q):(q=h(q,ae),q.return=te,q)}function V(te,q,ae,be){var Ke=ae.type;return Ke===F?ve(te,q,ae.props.children,be,ae.key):q!==null&&(q.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===H&&Ch(Ke)===q.type)?(be=h(q,ae.props),be.ref=Pa(te,q,ae),be.return=te,be):(be=ul(ae.type,ae.key,ae.props,null,te.mode,be),be.ref=Pa(te,q,ae),be.return=te,be)}function ce(te,q,ae,be){return q===null||q.tag!==4||q.stateNode.containerInfo!==ae.containerInfo||q.stateNode.implementation!==ae.implementation?(q=Tu(ae,te.mode,be),q.return=te,q):(q=h(q,ae.children||[]),q.return=te,q)}function ve(te,q,ae,be,Ke){return q===null||q.tag!==7?(q=es(ae,te.mode,be,Ke),q.return=te,q):(q=h(q,ae),q.return=te,q)}function we(te,q,ae){if(typeof q=="string"&&q!==""||typeof q=="number")return q=bu(""+q,te.mode,ae),q.return=te,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case I:return ae=ul(q.type,q.key,q.props,null,te.mode,ae),ae.ref=Pa(te,null,q),ae.return=te,ae;case D:return q=Tu(q,te.mode,ae),q.return=te,q;case H:var be=q._init;return we(te,be(q._payload),ae)}if(_t(q)||oe(q))return q=es(q,te.mode,ae,null),q.return=te,q;zo(te,q)}return null}function xe(te,q,ae,be){var Ke=q!==null?q.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Ke!==null?null:k(te,q,""+ae,be);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case I:return ae.key===Ke?V(te,q,ae,be):null;case D:return ae.key===Ke?ce(te,q,ae,be):null;case H:return Ke=ae._init,xe(te,q,Ke(ae._payload),be)}if(_t(ae)||oe(ae))return Ke!==null?null:ve(te,q,ae,be,null);zo(te,ae)}return null}function Ve(te,q,ae,be,Ke){if(typeof be=="string"&&be!==""||typeof be=="number")return te=te.get(ae)||null,k(q,te,""+be,Ke);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case I:return te=te.get(be.key===null?ae:be.key)||null,V(q,te,be,Ke);case D:return te=te.get(be.key===null?ae:be.key)||null,ce(q,te,be,Ke);case H:var et=be._init;return Ve(te,q,ae,et(be._payload),Ke)}if(_t(be)||oe(be))return te=te.get(ae)||null,ve(q,te,be,Ke,null);zo(q,be)}return null}function $e(te,q,ae,be){for(var Ke=null,et=null,tt=q,at=q=0,hn=null;tt!==null&&at<ae.length;at++){tt.index>at?(hn=tt,tt=null):hn=tt.sibling;var Lt=xe(te,tt,ae[at],be);if(Lt===null){tt===null&&(tt=hn);break}t&&tt&&Lt.alternate===null&&i(te,tt),q=g(Lt,q,at),et===null?Ke=Lt:et.sibling=Lt,et=Lt,tt=hn}if(at===ae.length)return a(te,tt),Wt&&Xr(te,at),Ke;if(tt===null){for(;at<ae.length;at++)tt=we(te,ae[at],be),tt!==null&&(q=g(tt,q,at),et===null?Ke=tt:et.sibling=tt,et=tt);return Wt&&Xr(te,at),Ke}for(tt=c(te,tt);at<ae.length;at++)hn=Ve(tt,te,at,ae[at],be),hn!==null&&(t&&hn.alternate!==null&&tt.delete(hn.key===null?at:hn.key),q=g(hn,q,at),et===null?Ke=hn:et.sibling=hn,et=hn);return t&&tt.forEach(function(Rr){return i(te,Rr)}),Wt&&Xr(te,at),Ke}function Ye(te,q,ae,be){var Ke=oe(ae);if(typeof Ke!="function")throw Error(n(150));if(ae=Ke.call(ae),ae==null)throw Error(n(151));for(var et=Ke=null,tt=q,at=q=0,hn=null,Lt=ae.next();tt!==null&&!Lt.done;at++,Lt=ae.next()){tt.index>at?(hn=tt,tt=null):hn=tt.sibling;var Rr=xe(te,tt,Lt.value,be);if(Rr===null){tt===null&&(tt=hn);break}t&&tt&&Rr.alternate===null&&i(te,tt),q=g(Rr,q,at),et===null?Ke=Rr:et.sibling=Rr,et=Rr,tt=hn}if(Lt.done)return a(te,tt),Wt&&Xr(te,at),Ke;if(tt===null){for(;!Lt.done;at++,Lt=ae.next())Lt=we(te,Lt.value,be),Lt!==null&&(q=g(Lt,q,at),et===null?Ke=Lt:et.sibling=Lt,et=Lt);return Wt&&Xr(te,at),Ke}for(tt=c(te,tt);!Lt.done;at++,Lt=ae.next())Lt=Ve(tt,te,at,Lt.value,be),Lt!==null&&(t&&Lt.alternate!==null&&tt.delete(Lt.key===null?at:Lt.key),q=g(Lt,q,at),et===null?Ke=Lt:et.sibling=Lt,et=Lt);return t&&tt.forEach(function(Tx){return i(te,Tx)}),Wt&&Xr(te,at),Ke}function Jt(te,q,ae,be){if(typeof ae=="object"&&ae!==null&&ae.type===F&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case I:e:{for(var Ke=ae.key,et=q;et!==null;){if(et.key===Ke){if(Ke=ae.type,Ke===F){if(et.tag===7){a(te,et.sibling),q=h(et,ae.props.children),q.return=te,te=q;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===H&&Ch(Ke)===et.type){a(te,et.sibling),q=h(et,ae.props),q.ref=Pa(te,et,ae),q.return=te,te=q;break e}a(te,et);break}else i(te,et);et=et.sibling}ae.type===F?(q=es(ae.props.children,te.mode,be,ae.key),q.return=te,te=q):(be=ul(ae.type,ae.key,ae.props,null,te.mode,be),be.ref=Pa(te,q,ae),be.return=te,te=be)}return E(te);case D:e:{for(et=ae.key;q!==null;){if(q.key===et)if(q.tag===4&&q.stateNode.containerInfo===ae.containerInfo&&q.stateNode.implementation===ae.implementation){a(te,q.sibling),q=h(q,ae.children||[]),q.return=te,te=q;break e}else{a(te,q);break}else i(te,q);q=q.sibling}q=Tu(ae,te.mode,be),q.return=te,te=q}return E(te);case H:return et=ae._init,Jt(te,q,et(ae._payload),be)}if(_t(ae))return $e(te,q,ae,be);if(oe(ae))return Ye(te,q,ae,be);zo(te,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,q!==null&&q.tag===6?(a(te,q.sibling),q=h(q,ae),q.return=te,te=q):(a(te,q),q=bu(ae,te.mode,be),q.return=te,te=q),E(te)):a(te,q)}return Jt}var Rs=Ah(!0),Rh=Ah(!1),Vo=vr(null),jo=null,Ns=null,Uc=null;function Fc(){Uc=Ns=jo=null}function Oc(t){var i=Vo.current;Ht(Vo),t._currentValue=i}function kc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function Ps(t,i){jo=t,Uc=Ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Bn=!0),t.firstContext=null)}function si(t){var i=t._currentValue;if(Uc!==t)if(t={context:t,memoizedValue:i,next:null},Ns===null){if(jo===null)throw Error(n(308));Ns=t,jo.dependencies={lanes:0,firstContext:t}}else Ns=Ns.next=t;return i}var qr=null;function Bc(t){qr===null?qr=[t]:qr.push(t)}function Nh(t,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Bc(i)):(a.next=h.next,h.next=a),i.interleaved=a,$i(t,c)}function $i(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var Sr=!1;function zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ph(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Mr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(At&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,$i(t,a)}return h=c.interleaved,h===null?(i.next=i,Bc(c)):(i.next=h.next,h.next=i),c.interleaved=i,$i(t,a)}function Go(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Ft(t,a)}}function Lh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ho(t,i,a,c){var h=t.updateQueue;Sr=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var V=k,ce=V.next;V.next=null,E===null?g=ce:E.next=ce,E=V;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,k=ve.lastBaseUpdate,k!==E&&(k===null?ve.firstBaseUpdate=ce:k.next=ce,ve.lastBaseUpdate=V))}if(g!==null){var we=h.baseState;E=0,ve=ce=V=null,k=g;do{var xe=k.lane,Ve=k.eventTime;if((c&xe)===xe){ve!==null&&(ve=ve.next={eventTime:Ve,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var $e=t,Ye=k;switch(xe=i,Ve=a,Ye.tag){case 1:if($e=Ye.payload,typeof $e=="function"){we=$e.call(Ve,we,xe);break e}we=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ye.payload,xe=typeof $e=="function"?$e.call(Ve,we,xe):$e,xe==null)break e;we=se({},we,xe);break e;case 2:Sr=!0}}k.callback!==null&&k.lane!==0&&(t.flags|=64,xe=h.effects,xe===null?h.effects=[k]:xe.push(k))}else Ve={eventTime:Ve,lane:xe,tag:k.tag,payload:k.payload,callback:k.callback,next:null},ve===null?(ce=ve=Ve,V=we):ve=ve.next=Ve,E|=xe;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;xe=k,k=xe.next,xe.next=null,h.lastBaseUpdate=xe,h.shared.pending=null}}while(!0);if(ve===null&&(V=we),h.baseState=V,h.firstBaseUpdate=ce,h.lastBaseUpdate=ve,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Kr|=E,t.lanes=E,t.memoizedState=we}}function Dh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(n(191,h));h.call(c)}}}var La={},Ri=vr(La),Da=vr(La),Ia=vr(La);function $r(t){if(t===La)throw Error(n(174));return t}function Vc(t,i){switch(jt(Ia,i),jt(Da,t),jt(Ri,La),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=pe(i,t)}Ht(Ri),jt(Ri,i)}function Ls(){Ht(Ri),Ht(Da),Ht(Ia)}function Ih(t){$r(Ia.current);var i=$r(Ri.current),a=pe(i,t.type);i!==a&&(jt(Da,t),jt(Ri,a))}function jc(t){Da.current===t&&(Ht(Ri),Ht(Da))}var $t=vr(0);function Wo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Gc=[];function Hc(){for(var t=0;t<Gc.length;t++)Gc[t]._workInProgressVersionPrimary=null;Gc.length=0}var Xo=A.ReactCurrentDispatcher,Wc=A.ReactCurrentBatchConfig,Yr=0,Yt=null,sn=null,dn=null,qo=!1,Ua=!1,Fa=0,$g=0;function Mn(){throw Error(n(321))}function Xc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!hi(t[a],i[a]))return!1;return!0}function qc(t,i,a,c,h,g){if(Yr=g,Yt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xo.current=t===null||t.memoizedState===null?Qg:Jg,t=a(c,h),Ua){g=0;do{if(Ua=!1,Fa=0,25<=g)throw Error(n(301));g+=1,dn=sn=null,i.updateQueue=null,Xo.current=ex,t=a(c,h)}while(Ua)}if(Xo.current=Ko,i=sn!==null&&sn.next!==null,Yr=0,dn=sn=Yt=null,qo=!1,i)throw Error(n(300));return t}function $c(){var t=Fa!==0;return Fa=0,t}function Ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Yt.memoizedState=dn=t:dn=dn.next=t,dn}function ai(){if(sn===null){var t=Yt.alternate;t=t!==null?t.memoizedState:null}else t=sn.next;var i=dn===null?Yt.memoizedState:dn.next;if(i!==null)dn=i,sn=t;else{if(t===null)throw Error(n(310));sn=t,t={memoizedState:sn.memoizedState,baseState:sn.baseState,baseQueue:sn.baseQueue,queue:sn.queue,next:null},dn===null?Yt.memoizedState=dn=t:dn=dn.next=t}return dn}function Oa(t,i){return typeof i=="function"?i(t):i}function Yc(t){var i=ai(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=sn,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var k=E=null,V=null,ce=g;do{var ve=ce.lane;if((Yr&ve)===ve)V!==null&&(V=V.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:t(c,ce.action);else{var we={lane:ve,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};V===null?(k=V=we,E=c):V=V.next=we,Yt.lanes|=ve,Kr|=ve}ce=ce.next}while(ce!==null&&ce!==g);V===null?E=c:V.next=k,hi(c,i.memoizedState)||(Bn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=V,a.lastRenderedState=c}if(t=a.interleaved,t!==null){h=t;do g=h.lane,Yt.lanes|=g,Kr|=g,h=h.next;while(h!==t)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Kc(t){var i=ai(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do g=t(g,E.action),E=E.next;while(E!==h);hi(g,i.memoizedState)||(Bn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Uh(){}function Fh(t,i){var a=Yt,c=ai(),h=i(),g=!hi(c.memoizedState,h);if(g&&(c.memoizedState=h,Bn=!0),c=c.queue,Zc(Bh.bind(null,a,c,t),[t]),c.getSnapshot!==i||g||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,ka(9,kh.bind(null,a,c,h,i),void 0,null),fn===null)throw Error(n(349));(Yr&30)!==0||Oh(a,i,h)}return h}function Oh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Yt.updateQueue,i===null?(i={lastEffect:null,stores:null},Yt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function kh(t,i,a,c){i.value=a,i.getSnapshot=c,zh(i)&&Vh(t)}function Bh(t,i,a){return a(function(){zh(i)&&Vh(t)})}function zh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!hi(t,a)}catch{return!0}}function Vh(t){var i=$i(t,1);i!==null&&vi(i,t,1,-1)}function jh(t){var i=Ni();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},i.queue=t,t=t.dispatch=Zg.bind(null,Yt,t),[i.memoizedState,t]}function ka(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=Yt.updateQueue,i===null?(i={lastEffect:null,stores:null},Yt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Gh(){return ai().memoizedState}function $o(t,i,a,c){var h=Ni();Yt.flags|=t,h.memoizedState=ka(1|i,a,void 0,c===void 0?null:c)}function Yo(t,i,a,c){var h=ai();c=c===void 0?null:c;var g=void 0;if(sn!==null){var E=sn.memoizedState;if(g=E.destroy,c!==null&&Xc(c,E.deps)){h.memoizedState=ka(i,a,g,c);return}}Yt.flags|=t,h.memoizedState=ka(1|i,a,g,c)}function Hh(t,i){return $o(8390656,8,t,i)}function Zc(t,i){return Yo(2048,8,t,i)}function Wh(t,i){return Yo(4,2,t,i)}function Xh(t,i){return Yo(4,4,t,i)}function qh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function $h(t,i,a){return a=a!=null?a.concat([t]):null,Yo(4,4,qh.bind(null,i,t),a)}function Qc(){}function Yh(t,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Xc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function Kh(t,i){var a=ai();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Xc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Zh(t,i,a){return(Yr&21)===0?(t.baseState&&(t.baseState=!1,Bn=!0),t.memoizedState=a):(hi(a,i)||(a=yn(),Yt.lanes|=a,Kr|=a,t.baseState=!0),i)}function Yg(t,i){var a=ft;ft=a!==0&&4>a?a:4,t(!0);var c=Wc.transition;Wc.transition={};try{t(!1),i()}finally{ft=a,Wc.transition=c}}function Qh(){return ai().memoizedState}function Kg(t,i,a){var c=Tr(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Jh(t))ep(i,a);else if(a=Nh(t,i,a,c),a!==null){var h=In();vi(a,t,c,h),tp(a,i,c)}}function Zg(t,i,a){var c=Tr(t),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Jh(t))ep(i,h);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,k=g(E,a);if(h.hasEagerState=!0,h.eagerState=k,hi(k,E)){var V=i.interleaved;V===null?(h.next=h,Bc(i)):(h.next=V.next,V.next=h),i.interleaved=h;return}}catch{}finally{}a=Nh(t,i,h,c),a!==null&&(h=In(),vi(a,t,c,h),tp(a,i,c))}}function Jh(t){var i=t.alternate;return t===Yt||i!==null&&i===Yt}function ep(t,i){Ua=qo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function tp(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,Ft(t,a)}}var Ko={readContext:si,useCallback:Mn,useContext:Mn,useEffect:Mn,useImperativeHandle:Mn,useInsertionEffect:Mn,useLayoutEffect:Mn,useMemo:Mn,useReducer:Mn,useRef:Mn,useState:Mn,useDebugValue:Mn,useDeferredValue:Mn,useTransition:Mn,useMutableSource:Mn,useSyncExternalStore:Mn,useId:Mn,unstable_isNewReconciler:!1},Qg={readContext:si,useCallback:function(t,i){return Ni().memoizedState=[t,i===void 0?null:i],t},useContext:si,useEffect:Hh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,$o(4194308,4,qh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return $o(4194308,4,t,i)},useInsertionEffect:function(t,i){return $o(4,2,t,i)},useMemo:function(t,i){var a=Ni();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=Ni();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=Kg.bind(null,Yt,t),[c.memoizedState,t]},useRef:function(t){var i=Ni();return t={current:t},i.memoizedState=t},useState:jh,useDebugValue:Qc,useDeferredValue:function(t){return Ni().memoizedState=t},useTransition:function(){var t=jh(!1),i=t[0];return t=Yg.bind(null,t[1]),Ni().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=Yt,h=Ni();if(Wt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),fn===null)throw Error(n(349));(Yr&30)!==0||Oh(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,Hh(Bh.bind(null,c,g,t),[t]),c.flags|=2048,ka(9,kh.bind(null,c,g,a,i),void 0,null),a},useId:function(){var t=Ni(),i=fn.identifierPrefix;if(Wt){var a=qi,c=Xi;a=(c&~(1<<32-Ge(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Fa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=$g++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Jg={readContext:si,useCallback:Yh,useContext:si,useEffect:Zc,useImperativeHandle:$h,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:Kh,useReducer:Yc,useRef:Gh,useState:function(){return Yc(Oa)},useDebugValue:Qc,useDeferredValue:function(t){var i=ai();return Zh(i,sn.memoizedState,t)},useTransition:function(){var t=Yc(Oa)[0],i=ai().memoizedState;return[t,i]},useMutableSource:Uh,useSyncExternalStore:Fh,useId:Qh,unstable_isNewReconciler:!1},ex={readContext:si,useCallback:Yh,useContext:si,useEffect:Zc,useImperativeHandle:$h,useInsertionEffect:Wh,useLayoutEffect:Xh,useMemo:Kh,useReducer:Kc,useRef:Gh,useState:function(){return Kc(Oa)},useDebugValue:Qc,useDeferredValue:function(t){var i=ai();return sn===null?i.memoizedState=t:Zh(i,sn.memoizedState,t)},useTransition:function(){var t=Kc(Oa)[0],i=ai().memoizedState;return[t,i]},useMutableSource:Uh,useSyncExternalStore:Fh,useId:Qh,unstable_isNewReconciler:!1};function mi(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Jc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Zo={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=In(),h=Tr(t),g=Yi(c,h);g.payload=i,a!=null&&(g.callback=a),i=Mr(t,g,h),i!==null&&(vi(i,t,h,c),Go(i,t,h))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=In(),h=Tr(t),g=Yi(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Mr(t,g,h),i!==null&&(vi(i,t,h,c),Go(i,t,h))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=In(),c=Tr(t),h=Yi(a,c);h.tag=2,i!=null&&(h.callback=i),i=Mr(t,h,c),i!==null&&(vi(i,t,c,a),Go(i,t,c))}};function np(t,i,a,c,h,g,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,g,E):i.prototype&&i.prototype.isPureReactComponent?!Ea(a,c)||!Ea(h,g):!0}function ip(t,i,a){var c=!1,h=_r,g=i.contextType;return typeof g=="object"&&g!==null?g=si(g):(h=kn(i)?Hr:Sn.current,c=i.contextTypes,g=(c=c!=null)?bs(t,h):_r),i=new i(a,g),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Zo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=g),i}function rp(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&Zo.enqueueReplaceState(i,i.state,null)}function eu(t,i,a,c){var h=t.stateNode;h.props=a,h.state=t.memoizedState,h.refs={},zc(t);var g=i.contextType;typeof g=="object"&&g!==null?h.context=si(g):(g=kn(i)?Hr:Sn.current,h.context=bs(t,g)),h.state=t.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Jc(t,i,g,a),h.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Zo.enqueueReplaceState(h,h.state,null),Ho(t,a,h,c),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,i){try{var a="",c=i;do a+=De(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:i,stack:h,digest:null}}function tu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function nu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var tx=typeof WeakMap=="function"?WeakMap:Map;function sp(t,i,a){a=Yi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){rl||(rl=!0,xu=c),nu(t,i)},a}function ap(t,i,a){a=Yi(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){nu(t,i)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){nu(t,i),typeof c!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function op(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new tx;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),t=mx.bind(null,t,i,a),i.then(t,t))}function lp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function cp(t,i,a,c,h){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Yi(-1,1),i.tag=2,Mr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var nx=A.ReactCurrentOwner,Bn=!1;function Dn(t,i,a,c){i.child=t===null?Rh(i,null,a,c):Rs(i,t.child,a,c)}function up(t,i,a,c,h){a=a.render;var g=i.ref;return Ps(i,h),c=qc(t,i,a,c,g,h),a=$c(),t!==null&&!Bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,Ki(t,i,h)):(Wt&&a&&Nc(i),i.flags|=1,Dn(t,i,c,h),i.child)}function dp(t,i,a,c,h){if(t===null){var g=a.type;return typeof g=="function"&&!Eu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,fp(t,i,g,c,h)):(t=ul(a.type,null,c,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(g=t.child,(t.lanes&h)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ea,a(E,c)&&t.ref===i.ref)return Ki(t,i,h)}return i.flags|=1,t=Ar(g,c),t.ref=i.ref,t.return=i,i.child=t}function fp(t,i,a,c,h){if(t!==null){var g=t.memoizedProps;if(Ea(g,c)&&t.ref===i.ref)if(Bn=!1,i.pendingProps=c=g,(t.lanes&h)!==0)(t.flags&131072)!==0&&(Bn=!0);else return i.lanes=t.lanes,Ki(t,i,h)}return iu(t,i,a,c,h)}function hp(t,i,a){var c=i.pendingProps,h=c.children,g=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(Us,Yn),Yn|=a;else{if((a&1073741824)===0)return t=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,jt(Us,Yn),Yn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,jt(Us,Yn),Yn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,jt(Us,Yn),Yn|=c;return Dn(t,i,h,a),i.child}function pp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function iu(t,i,a,c,h){var g=kn(a)?Hr:Sn.current;return g=bs(i,g),Ps(i,h),a=qc(t,i,a,c,g,h),c=$c(),t!==null&&!Bn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,Ki(t,i,h)):(Wt&&c&&Nc(i),i.flags|=1,Dn(t,i,a,h),i.child)}function mp(t,i,a,c,h){if(kn(a)){var g=!0;Uo(i)}else g=!1;if(Ps(i,h),i.stateNode===null)Jo(t,i),ip(i,a,c),eu(i,a,c,h),c=!0;else if(t===null){var E=i.stateNode,k=i.memoizedProps;E.props=k;var V=E.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=si(ce):(ce=kn(a)?Hr:Sn.current,ce=bs(i,ce));var ve=a.getDerivedStateFromProps,we=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function";we||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==c||V!==ce)&&rp(i,E,c,ce),Sr=!1;var xe=i.memoizedState;E.state=xe,Ho(i,c,E,h),V=i.memoizedState,k!==c||xe!==V||On.current||Sr?(typeof ve=="function"&&(Jc(i,a,ve,c),V=i.memoizedState),(k=Sr||np(i,a,k,c,xe,V,ce))?(we||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),E.props=c,E.state=V,E.context=ce,c=k):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Ph(t,i),k=i.memoizedProps,ce=i.type===i.elementType?k:mi(i.type,k),E.props=ce,we=i.pendingProps,xe=E.context,V=a.contextType,typeof V=="object"&&V!==null?V=si(V):(V=kn(a)?Hr:Sn.current,V=bs(i,V));var Ve=a.getDerivedStateFromProps;(ve=typeof Ve=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==we||xe!==V)&&rp(i,E,c,V),Sr=!1,xe=i.memoizedState,E.state=xe,Ho(i,c,E,h);var $e=i.memoizedState;k!==we||xe!==$e||On.current||Sr?(typeof Ve=="function"&&(Jc(i,a,Ve,c),$e=i.memoizedState),(ce=Sr||np(i,a,ce,c,xe,$e,V)||!1)?(ve||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,$e,V),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,$e,V)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||k===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=$e),E.props=c,E.state=$e,E.context=V,c=ce):(typeof E.componentDidUpdate!="function"||k===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),c=!1)}return ru(t,i,a,c,g,h)}function ru(t,i,a,c,h,g){pp(t,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&yh(i,a,!1),Ki(t,i,g);c=i.stateNode,nx.current=i;var k=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&E?(i.child=Rs(i,t.child,null,g),i.child=Rs(i,null,k,g)):Dn(t,i,k,g),i.memoizedState=c.state,h&&yh(i,a,!0),i.child}function gp(t){var i=t.stateNode;i.pendingContext?vh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&vh(t,i.context,!1),Vc(t,i.containerInfo)}function xp(t,i,a,c,h){return As(),Ic(h),i.flags|=256,Dn(t,i,a,c),i.child}var su={dehydrated:null,treeContext:null,retryLane:0};function au(t){return{baseLanes:t,cachePool:null,transitions:null}}function vp(t,i,a){var c=i.pendingProps,h=$t.current,g=!1,E=(i.flags&128)!==0,k;if((k=E)||(k=t!==null&&t.memoizedState===null?!1:(h&2)!==0),k?(g=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),jt($t,h&1),t===null)return Dc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,t=c.fallback,g?(c=i.mode,g=i.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=dl(E,c,0,null),t=es(t,c,a,null),g.return=i,t.return=i,g.sibling=t,i.child=g,i.child.memoizedState=au(a),i.memoizedState=su,t):ou(i,E));if(h=t.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return ix(t,i,E,c,k,h,a);if(g){g=c.fallback,E=i.mode,h=t.child,k=h.sibling;var V={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=Ar(h,V),c.subtreeFlags=h.subtreeFlags&14680064),k!==null?g=Ar(k,g):(g=es(g,E,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,E=t.child.memoizedState,E=E===null?au(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=t.childLanes&~a,i.memoizedState=su,c}return g=t.child,t=g.sibling,c=Ar(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function ou(t,i){return i=dl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Qo(t,i,a,c){return c!==null&&Ic(c),Rs(i,t.child,null,a),t=ou(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function ix(t,i,a,c,h,g,E){if(a)return i.flags&256?(i.flags&=-257,c=tu(Error(n(422))),Qo(t,i,E,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=dl({mode:"visible",children:c.children},h,0,null),g=es(g,h,E,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Rs(i,t.child,null,E),i.child.memoizedState=au(E),i.memoizedState=su,g);if((i.mode&1)===0)return Qo(t,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var k=c.dgst;return c=k,g=Error(n(419)),c=tu(g,c,void 0),Qo(t,i,E,c)}if(k=(E&t.childLanes)!==0,Bn||k){if(c=fn,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,$i(t,h),vi(c,t,h,-1))}return wu(),c=tu(Error(n(421))),Qo(t,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=t.child,i=gx.bind(null,t),h._reactRetry=i,null):(t=g.treeContext,$n=xr(h.nextSibling),qn=i,Wt=!0,pi=null,t!==null&&(ii[ri++]=Xi,ii[ri++]=qi,ii[ri++]=Wr,Xi=t.id,qi=t.overflow,Wr=i),i=ou(i,c.children),i.flags|=4096,i)}function _p(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),kc(t.return,i,a)}function lu(t,i,a,c,h){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function yp(t,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(Dn(t,i,c.children,a),c=$t.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_p(t,a,i);else if(t.tag===19)_p(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(jt($t,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&Wo(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),lu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Wo(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}lu(i,!0,a,null,g);break;case"together":lu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Jo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ki(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Kr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Ar(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Ar(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function rx(t,i,a){switch(i.tag){case 3:gp(i),As();break;case 5:Ih(i);break;case 1:kn(i.type)&&Uo(i);break;case 4:Vc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;jt(Vo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(jt($t,$t.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?vp(t,i,a):(jt($t,$t.current&1),t=Ki(t,i,a),t!==null?t.sibling:null);jt($t,$t.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return yp(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),jt($t,$t.current),c)break;return null;case 22:case 23:return i.lanes=0,hp(t,i,a)}return Ki(t,i,a)}var Sp,cu,Mp,wp;Sp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},cu=function(){},Mp=function(t,i,a,c){var h=t.memoizedProps;if(h!==c){t=i.stateNode,$r(Ri.current);var g=null;switch(a){case"input":h=pt(t,h),c=pt(t,c),g=[];break;case"select":h=se({},h,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":h=He(t,h),c=He(t,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Lo)}je(a,c);var E;a=null;for(ce in h)if(!c.hasOwnProperty(ce)&&h.hasOwnProperty(ce)&&h[ce]!=null)if(ce==="style"){var k=h[ce];for(E in k)k.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?g||(g=[]):(g=g||[]).push(ce,null));for(ce in c){var V=c[ce];if(k=h!=null?h[ce]:void 0,c.hasOwnProperty(ce)&&V!==k&&(V!=null||k!=null))if(ce==="style")if(k){for(E in k)!k.hasOwnProperty(E)||V&&V.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in V)V.hasOwnProperty(E)&&k[E]!==V[E]&&(a||(a={}),a[E]=V[E])}else a||(g||(g=[]),g.push(ce,a)),a=V;else ce==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,k=k?k.__html:void 0,V!=null&&k!==V&&(g=g||[]).push(ce,V)):ce==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(ce,""+V):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(V!=null&&ce==="onScroll"&&Gt("scroll",t),g||k===V||(g=[])):(g=g||[]).push(ce,V))}a&&(g=g||[]).push("style",a);var ce=g;(i.updateQueue=ce)&&(i.flags|=4)}},wp=function(t,i,a,c){a!==c&&(i.flags|=4)};function Ba(t,i){if(!Wt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function wn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function sx(t,i,a){var c=i.pendingProps;switch(Pc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wn(i),null;case 1:return kn(i.type)&&Io(),wn(i),null;case 3:return c=i.stateNode,Ls(),Ht(On),Ht(Sn),Hc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Bo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,pi!==null&&(yu(pi),pi=null))),cu(t,i),wn(i),null;case 5:jc(i);var h=$r(Ia.current);if(a=i.type,t!==null&&i.stateNode!=null)Mp(t,i,a,c,h),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return wn(i),null}if(t=$r(Ri.current),Bo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Ai]=i,c[Ra]=g,t=(i.mode&1)!==0,a){case"dialog":Gt("cancel",c),Gt("close",c);break;case"iframe":case"object":case"embed":Gt("load",c);break;case"video":case"audio":for(h=0;h<Ta.length;h++)Gt(Ta[h],c);break;case"source":Gt("error",c);break;case"img":case"image":case"link":Gt("error",c),Gt("load",c);break;case"details":Gt("toggle",c);break;case"input":Mt(c,g),Gt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Gt("invalid",c);break;case"textarea":U(c,g),Gt("invalid",c)}je(a,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var k=g[E];E==="children"?typeof k=="string"?c.textContent!==k&&(g.suppressHydrationWarning!==!0&&Po(c.textContent,k,t),h=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&Po(c.textContent,k,t),h=["children",""+k]):o.hasOwnProperty(E)&&k!=null&&E==="onScroll"&&Gt("scroll",c)}switch(a){case"input":dt(c),B(c,g,!0);break;case"textarea":dt(c),Y(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Lo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=E.createElement(a,{is:c.is}):(t=E.createElement(a),a==="select"&&(E=t,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):t=E.createElementNS(t,a),t[Ai]=i,t[Ra]=c,Sp(t,i,!1,!1),i.stateNode=t;e:{switch(E=Ne(a,c),a){case"dialog":Gt("cancel",t),Gt("close",t),h=c;break;case"iframe":case"object":case"embed":Gt("load",t),h=c;break;case"video":case"audio":for(h=0;h<Ta.length;h++)Gt(Ta[h],t);h=c;break;case"source":Gt("error",t),h=c;break;case"img":case"image":case"link":Gt("error",t),Gt("load",t),h=c;break;case"details":Gt("toggle",t),h=c;break;case"input":Mt(t,c),h=pt(t,c),Gt("invalid",t);break;case"option":h=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},h=se({},c,{value:void 0}),Gt("invalid",t);break;case"textarea":U(t,c),h=He(t,c),Gt("invalid",t);break;default:h=c}je(a,h),k=h;for(g in k)if(k.hasOwnProperty(g)){var V=k[g];g==="style"?Ce(t,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Xe(t,V)):g==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&Te(t,V):typeof V=="number"&&Te(t,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?V!=null&&g==="onScroll"&&Gt("scroll",t):V!=null&&L(t,g,V,E))}switch(a){case"input":dt(t),B(t,c,!1);break;case"textarea":dt(t),Y(t);break;case"option":c.value!=null&&t.setAttribute("value",""+_e(c.value));break;case"select":t.multiple=!!c.multiple,g=c.value,g!=null?St(t,!!c.multiple,g,!1):c.defaultValue!=null&&St(t,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=Lo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return wn(i),null;case 6:if(t&&i.stateNode!=null)wp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=$r(Ia.current),$r(Ri.current),Bo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ai]=i,(g=c.nodeValue!==a)&&(t=qn,t!==null))switch(t.tag){case 3:Po(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Po(c.nodeValue,a,(t.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ai]=i,i.stateNode=c}return wn(i),null;case 13:if(Ht($t),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Wt&&$n!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Th(),As(),i.flags|=98560,g=!1;else if(g=Bo(i),c!==null&&c.dehydrated!==null){if(t===null){if(!g)throw Error(n(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[Ai]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;wn(i),g=!1}else pi!==null&&(yu(pi),pi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||($t.current&1)!==0?an===0&&(an=3):wu())),i.updateQueue!==null&&(i.flags|=4),wn(i),null);case 4:return Ls(),cu(t,i),t===null&&Ca(i.stateNode.containerInfo),wn(i),null;case 10:return Oc(i.type._context),wn(i),null;case 17:return kn(i.type)&&Io(),wn(i),null;case 19:if(Ht($t),g=i.memoizedState,g===null)return wn(i),null;if(c=(i.flags&128)!==0,E=g.rendering,E===null)if(c)Ba(g,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Wo(t),E!==null){for(i.flags|=128,Ba(g,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,t=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,t=E.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return jt($t,$t.current&1|2),i.child}t=t.sibling}g.tail!==null&&qt()>Fs&&(i.flags|=128,c=!0,Ba(g,!1),i.lanes=4194304)}else{if(!c)if(t=Wo(E),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ba(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Wt)return wn(i),null}else 2*qt()-g.renderingStartTime>Fs&&a!==1073741824&&(i.flags|=128,c=!0,Ba(g,!1),i.lanes=4194304);g.isBackwards?(E.sibling=i.child,i.child=E):(a=g.last,a!==null?a.sibling=E:i.child=E,g.last=E)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=qt(),i.sibling=null,a=$t.current,jt($t,c?a&1|2:a&1),i):(wn(i),null);case 22:case 23:return Mu(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Yn&1073741824)!==0&&(wn(i),i.subtreeFlags&6&&(i.flags|=8192)):wn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function ax(t,i){switch(Pc(i),i.tag){case 1:return kn(i.type)&&Io(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ls(),Ht(On),Ht(Sn),Hc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return jc(i),null;case 13:if(Ht($t),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));As()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ht($t),null;case 4:return Ls(),null;case 10:return Oc(i.type._context),null;case 22:case 23:return Mu(),null;case 24:return null;default:return null}}var el=!1,En=!1,ox=typeof WeakSet=="function"?WeakSet:Set,We=null;function Is(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Kt(t,i,c)}else a.current=null}function uu(t,i,a){try{a()}catch(c){Kt(t,i,c)}}var Ep=!1;function lx(t,i){if(Mc=yo,t=nh(),pc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,k=-1,V=-1,ce=0,ve=0,we=t,xe=null;t:for(;;){for(var Ve;we!==a||h!==0&&we.nodeType!==3||(k=E+h),we!==g||c!==0&&we.nodeType!==3||(V=E+c),we.nodeType===3&&(E+=we.nodeValue.length),(Ve=we.firstChild)!==null;)xe=we,we=Ve;for(;;){if(we===t)break t;if(xe===a&&++ce===h&&(k=E),xe===g&&++ve===c&&(V=E),(Ve=we.nextSibling)!==null)break;we=xe,xe=we.parentNode}we=Ve}a=k===-1||V===-1?null:{start:k,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(wc={focusedElem:t,selectionRange:a},yo=!1,We=i;We!==null;)if(i=We,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,We=t;else for(;We!==null;){i=We;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ye=$e.memoizedProps,Jt=$e.memoizedState,te=i.stateNode,q=te.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:mi(i.type,Ye),Jt);te.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(be){Kt(i,i.return,be)}if(t=i.sibling,t!==null){t.return=i.return,We=t;break}We=i.return}return $e=Ep,Ep=!1,$e}function za(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&t)===t){var g=h.destroy;h.destroy=void 0,g!==void 0&&uu(i,a,g)}h=h.next}while(h!==c)}}function tl(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function du(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function bp(t){var i=t.alternate;i!==null&&(t.alternate=null,bp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Ai],delete i[Ra],delete i[Cc],delete i[Hg],delete i[Wg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tp(t){return t.tag===5||t.tag===3||t.tag===4}function Cp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Lo));else if(c!==4&&(t=t.child,t!==null))for(fu(t,i,a),t=t.sibling;t!==null;)fu(t,i,a),t=t.sibling}function hu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(hu(t,i,a),t=t.sibling;t!==null;)hu(t,i,a),t=t.sibling}var gn=null,gi=!1;function wr(t,i,a){for(a=a.child;a!==null;)Ap(t,i,a),a=a.sibling}function Ap(t,i,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(Be,a)}catch{}switch(a.tag){case 5:En||Is(a,i);case 6:var c=gn,h=gi;gn=null,wr(t,i,a),gn=c,gi=h,gn!==null&&(gi?(t=gn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):gn.removeChild(a.stateNode));break;case 18:gn!==null&&(gi?(t=gn,a=a.stateNode,t.nodeType===8?Tc(t.parentNode,a):t.nodeType===1&&Tc(t,a),va(t)):Tc(gn,a.stateNode));break;case 4:c=gn,h=gi,gn=a.stateNode.containerInfo,gi=!0,wr(t,i,a),gn=c,gi=h;break;case 0:case 11:case 14:case 15:if(!En&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&uu(a,i,E),h=h.next}while(h!==c)}wr(t,i,a);break;case 1:if(!En&&(Is(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){Kt(a,i,k)}wr(t,i,a);break;case 21:wr(t,i,a);break;case 22:a.mode&1?(En=(c=En)||a.memoizedState!==null,wr(t,i,a),En=c):wr(t,i,a);break;default:wr(t,i,a)}}function Rp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new ox),i.forEach(function(c){var h=xx.bind(null,t,c);a.has(c)||(a.add(c),c.then(h,h))})}}function xi(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=t,E=i,k=E;e:for(;k!==null;){switch(k.tag){case 5:gn=k.stateNode,gi=!1;break e;case 3:gn=k.stateNode.containerInfo,gi=!0;break e;case 4:gn=k.stateNode.containerInfo,gi=!0;break e}k=k.return}if(gn===null)throw Error(n(160));Ap(g,E,h),gn=null,gi=!1;var V=h.alternate;V!==null&&(V.return=null),h.return=null}catch(ce){Kt(h,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Np(i,t),i=i.sibling}function Np(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xi(i,t),Pi(t),c&4){try{za(3,t,t.return),tl(3,t)}catch(Ye){Kt(t,t.return,Ye)}try{za(5,t,t.return)}catch(Ye){Kt(t,t.return,Ye)}}break;case 1:xi(i,t),Pi(t),c&512&&a!==null&&Is(a,a.return);break;case 5:if(xi(i,t),Pi(t),c&512&&a!==null&&Is(a,a.return),t.flags&32){var h=t.stateNode;try{Te(h,"")}catch(Ye){Kt(t,t.return,Ye)}}if(c&4&&(h=t.stateNode,h!=null)){var g=t.memoizedProps,E=a!==null?a.memoizedProps:g,k=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&st(h,g),Ne(k,E);var ce=Ne(k,g);for(E=0;E<V.length;E+=2){var ve=V[E],we=V[E+1];ve==="style"?Ce(h,we):ve==="dangerouslySetInnerHTML"?Xe(h,we):ve==="children"?Te(h,we):L(h,ve,we,ce)}switch(k){case"input":vt(h,g);break;case"textarea":w(h,g);break;case"select":var xe=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Ve=g.value;Ve!=null?St(h,!!g.multiple,Ve,!1):xe!==!!g.multiple&&(g.defaultValue!=null?St(h,!!g.multiple,g.defaultValue,!0):St(h,!!g.multiple,g.multiple?[]:"",!1))}h[Ra]=g}catch(Ye){Kt(t,t.return,Ye)}}break;case 6:if(xi(i,t),Pi(t),c&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,g=t.memoizedProps;try{h.nodeValue=g}catch(Ye){Kt(t,t.return,Ye)}}break;case 3:if(xi(i,t),Pi(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{va(i.containerInfo)}catch(Ye){Kt(t,t.return,Ye)}break;case 4:xi(i,t),Pi(t);break;case 13:xi(i,t),Pi(t),h=t.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(gu=qt())),c&4&&Rp(t);break;case 22:if(ve=a!==null&&a.memoizedState!==null,t.mode&1?(En=(ce=En)||ve,xi(i,t),En=ce):xi(i,t),Pi(t),c&8192){if(ce=t.memoizedState!==null,(t.stateNode.isHidden=ce)&&!ve&&(t.mode&1)!==0)for(We=t,ve=t.child;ve!==null;){for(we=We=ve;We!==null;){switch(xe=We,Ve=xe.child,xe.tag){case 0:case 11:case 14:case 15:za(4,xe,xe.return);break;case 1:Is(xe,xe.return);var $e=xe.stateNode;if(typeof $e.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Ye){Kt(c,a,Ye)}}break;case 5:Is(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Dp(we);continue}}Ve!==null?(Ve.return=xe,We=Ve):Dp(we)}ve=ve.sibling}e:for(ve=null,we=t;;){if(we.tag===5){if(ve===null){ve=we;try{h=we.stateNode,ce?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=we.stateNode,V=we.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null,k.style.display=Se("display",E))}catch(Ye){Kt(t,t.return,Ye)}}}else if(we.tag===6){if(ve===null)try{we.stateNode.nodeValue=ce?"":we.memoizedProps}catch(Ye){Kt(t,t.return,Ye)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===t)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===t)break e;for(;we.sibling===null;){if(we.return===null||we.return===t)break e;ve===we&&(ve=null),we=we.return}ve===we&&(ve=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:xi(i,t),Pi(t),c&4&&Rp(t);break;case 21:break;default:xi(i,t),Pi(t)}}function Pi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Tp(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Te(h,""),c.flags&=-33);var g=Cp(t);hu(t,g,h);break;case 3:case 4:var E=c.stateNode.containerInfo,k=Cp(t);fu(t,k,E);break;default:throw Error(n(161))}}catch(V){Kt(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function cx(t,i,a){We=t,Pp(t)}function Pp(t,i,a){for(var c=(t.mode&1)!==0;We!==null;){var h=We,g=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||el;if(!E){var k=h.alternate,V=k!==null&&k.memoizedState!==null||En;k=el;var ce=En;if(el=E,(En=V)&&!ce)for(We=h;We!==null;)E=We,V=E.child,E.tag===22&&E.memoizedState!==null?Ip(h):V!==null?(V.return=E,We=V):Ip(h);for(;g!==null;)We=g,Pp(g),g=g.sibling;We=h,el=k,En=ce}Lp(t)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,We=g):Lp(t)}}function Lp(t){for(;We!==null;){var i=We;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:En||tl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!En)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:mi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Dh(i,g,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Dh(i,E,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var ve=ce.memoizedState;if(ve!==null){var we=ve.dehydrated;we!==null&&va(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}En||i.flags&512&&du(i)}catch(xe){Kt(i,i.return,xe)}}if(i===t){We=null;break}if(a=i.sibling,a!==null){a.return=i.return,We=a;break}We=i.return}}function Dp(t){for(;We!==null;){var i=We;if(i===t){We=null;break}var a=i.sibling;if(a!==null){a.return=i.return,We=a;break}We=i.return}}function Ip(t){for(;We!==null;){var i=We;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tl(4,i)}catch(V){Kt(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(V){Kt(i,h,V)}}var g=i.return;try{du(i)}catch(V){Kt(i,g,V)}break;case 5:var E=i.return;try{du(i)}catch(V){Kt(i,E,V)}}}catch(V){Kt(i,i.return,V)}if(i===t){We=null;break}var k=i.sibling;if(k!==null){k.return=i.return,We=k;break}We=i.return}}var ux=Math.ceil,nl=A.ReactCurrentDispatcher,pu=A.ReactCurrentOwner,oi=A.ReactCurrentBatchConfig,At=0,fn=null,en=null,xn=0,Yn=0,Us=vr(0),an=0,Va=null,Kr=0,il=0,mu=0,ja=null,zn=null,gu=0,Fs=1/0,Zi=null,rl=!1,xu=null,Er=null,sl=!1,br=null,al=0,Ga=0,vu=null,ol=-1,ll=0;function In(){return(At&6)!==0?qt():ol!==-1?ol:ol=qt()}function Tr(t){return(t.mode&1)===0?1:(At&2)!==0&&xn!==0?xn&-xn:qg.transition!==null?(ll===0&&(ll=yn()),ll):(t=ft,t!==0||(t=window.event,t=t===void 0?16:Ff(t.type)),t)}function vi(t,i,a,c){if(50<Ga)throw Ga=0,vu=null,Error(n(185));rn(t,a,c),((At&2)===0||t!==fn)&&(t===fn&&((At&2)===0&&(il|=a),an===4&&Cr(t,xn)),Vn(t,c),a===1&&At===0&&(i.mode&1)===0&&(Fs=qt()+500,Fo&&yr()))}function Vn(t,i){var a=t.callbackNode;Ut(t,i);var c=Pt(t,t===fn?xn:0);if(c===0)a!==null&&xo(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&xo(a),i===1)t.tag===0?Xg(Fp.bind(null,t)):Sh(Fp.bind(null,t)),jg(function(){(At&6)===0&&yr()}),a=null;else{switch(Ln(c)){case 1:a=K;break;case 4:a=ue;break;case 16:a=le;break;case 536870912:a=Le;break;default:a=le}a=Hp(a,Up.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Up(t,i){if(ol=-1,ll=0,(At&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Os()&&t.callbackNode!==a)return null;var c=Pt(t,t===fn?xn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=cl(t,c);else{i=c;var h=At;At|=2;var g=kp();(fn!==t||xn!==i)&&(Zi=null,Fs=qt()+500,Qr(t,i));do try{hx();break}catch(k){Op(t,k)}while(!0);Fc(),nl.current=g,At=h,en!==null?i=0:(fn=null,xn=0,i=an)}if(i!==0){if(i===2&&(h=Et(t),h!==0&&(c=h,i=_u(t,h))),i===1)throw a=Va,Qr(t,0),Cr(t,c),Vn(t,qt()),a;if(i===6)Cr(t,c);else{if(h=t.current.alternate,(c&30)===0&&!dx(h)&&(i=cl(t,c),i===2&&(g=Et(t),g!==0&&(c=g,i=_u(t,g))),i===1))throw a=Va,Qr(t,0),Cr(t,c),Vn(t,qt()),a;switch(t.finishedWork=h,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Jr(t,zn,Zi);break;case 3:if(Cr(t,c),(c&130023424)===c&&(i=gu+500-qt(),10<i)){if(Pt(t,0)!==0)break;if(h=t.suspendedLanes,(h&c)!==c){In(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=bc(Jr.bind(null,t,zn,Zi),i);break}Jr(t,zn,Zi);break;case 4:if(Cr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,h=-1;0<c;){var E=31-Ge(c);g=1<<E,E=i[E],E>h&&(h=E),c&=~g}if(c=h,c=qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ux(c/1960))-c,10<c){t.timeoutHandle=bc(Jr.bind(null,t,zn,Zi),c);break}Jr(t,zn,Zi);break;case 5:Jr(t,zn,Zi);break;default:throw Error(n(329))}}}return Vn(t,qt()),t.callbackNode===a?Up.bind(null,t):null}function _u(t,i){var a=ja;return t.current.memoizedState.isDehydrated&&(Qr(t,i).flags|=256),t=cl(t,i),t!==2&&(i=zn,zn=a,i!==null&&yu(i)),t}function yu(t){zn===null?zn=t:zn.push.apply(zn,t)}function dx(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!hi(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Cr(t,i){for(i&=~mu,i&=~il,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Ge(i),c=1<<a;t[a]=-1,i&=~c}}function Fp(t){if((At&6)!==0)throw Error(n(327));Os();var i=Pt(t,0);if((i&1)===0)return Vn(t,qt()),null;var a=cl(t,i);if(t.tag!==0&&a===2){var c=Et(t);c!==0&&(i=c,a=_u(t,c))}if(a===1)throw a=Va,Qr(t,0),Cr(t,i),Vn(t,qt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Jr(t,zn,Zi),Vn(t,qt()),null}function Su(t,i){var a=At;At|=1;try{return t(i)}finally{At=a,At===0&&(Fs=qt()+500,Fo&&yr())}}function Zr(t){br!==null&&br.tag===0&&(At&6)===0&&Os();var i=At;At|=1;var a=oi.transition,c=ft;try{if(oi.transition=null,ft=1,t)return t()}finally{ft=c,oi.transition=a,At=i,(At&6)===0&&yr()}}function Mu(){Yn=Us.current,Ht(Us)}function Qr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Vg(a)),en!==null)for(a=en.return;a!==null;){var c=a;switch(Pc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Io();break;case 3:Ls(),Ht(On),Ht(Sn),Hc();break;case 5:jc(c);break;case 4:Ls();break;case 13:Ht($t);break;case 19:Ht($t);break;case 10:Oc(c.type._context);break;case 22:case 23:Mu()}a=a.return}if(fn=t,en=t=Ar(t.current,null),xn=Yn=i,an=0,Va=null,mu=il=Kr=0,zn=ja=null,qr!==null){for(i=0;i<qr.length;i++)if(a=qr[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var E=g.next;g.next=h,c.next=E}a.pending=c}qr=null}return t}function Op(t,i){do{var a=en;try{if(Fc(),Xo.current=Ko,qo){for(var c=Yt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}qo=!1}if(Yr=0,dn=sn=Yt=null,Ua=!1,Fa=0,pu.current=null,a===null||a.return===null){an=1,Va=i,en=null;break}e:{var g=t,E=a.return,k=a,V=i;if(i=xn,k.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ce=V,ve=k,we=ve.tag;if((ve.mode&1)===0&&(we===0||we===11||we===15)){var xe=ve.alternate;xe?(ve.updateQueue=xe.updateQueue,ve.memoizedState=xe.memoizedState,ve.lanes=xe.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ve=lp(E);if(Ve!==null){Ve.flags&=-257,cp(Ve,E,k,g,i),Ve.mode&1&&op(g,ce,i),i=Ve,V=ce;var $e=i.updateQueue;if($e===null){var Ye=new Set;Ye.add(V),i.updateQueue=Ye}else $e.add(V);break e}else{if((i&1)===0){op(g,ce,i),wu();break e}V=Error(n(426))}}else if(Wt&&k.mode&1){var Jt=lp(E);if(Jt!==null){(Jt.flags&65536)===0&&(Jt.flags|=256),cp(Jt,E,k,g,i),Ic(Ds(V,k));break e}}g=V=Ds(V,k),an!==4&&(an=2),ja===null?ja=[g]:ja.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var te=sp(g,V,i);Lh(g,te);break e;case 1:k=V;var q=g.type,ae=g.stateNode;if((g.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Er===null||!Er.has(ae)))){g.flags|=65536,i&=-i,g.lanes|=i;var be=ap(g,k,i);Lh(g,be);break e}}g=g.return}while(g!==null)}zp(a)}catch(Ke){i=Ke,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function kp(){var t=nl.current;return nl.current=Ko,t===null?Ko:t}function wu(){(an===0||an===3||an===2)&&(an=4),fn===null||(Kr&268435455)===0&&(il&268435455)===0||Cr(fn,xn)}function cl(t,i){var a=At;At|=2;var c=kp();(fn!==t||xn!==i)&&(Zi=null,Qr(t,i));do try{fx();break}catch(h){Op(t,h)}while(!0);if(Fc(),At=a,nl.current=c,en!==null)throw Error(n(261));return fn=null,xn=0,an}function fx(){for(;en!==null;)Bp(en)}function hx(){for(;en!==null&&!ec();)Bp(en)}function Bp(t){var i=Gp(t.alternate,t,Yn);t.memoizedProps=t.pendingProps,i===null?zp(t):en=i,pu.current=null}function zp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=sx(a,i,Yn),a!==null){en=a;return}}else{if(a=ax(a,i),a!==null){a.flags&=32767,en=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{an=6,en=null;return}}if(i=i.sibling,i!==null){en=i;return}en=i=t}while(i!==null);an===0&&(an=5)}function Jr(t,i,a){var c=ft,h=oi.transition;try{oi.transition=null,ft=1,px(t,i,a,c)}finally{oi.transition=h,ft=c}return null}function px(t,i,a,c){do Os();while(br!==null);if((At&6)!==0)throw Error(n(327));a=t.finishedWork;var h=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var g=a.lanes|a.childLanes;if(jr(t,g),t===fn&&(en=fn=null,xn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||sl||(sl=!0,Hp(le,function(){return Os(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=oi.transition,oi.transition=null;var E=ft;ft=1;var k=At;At|=4,pu.current=null,lx(t,a),Np(a,t),Ig(wc),yo=!!Mc,wc=Mc=null,t.current=a,cx(a),tc(),At=k,ft=E,oi.transition=g}else t.current=a;if(sl&&(sl=!1,br=t,al=h),g=t.pendingLanes,g===0&&(Er=null),qe(a.stateNode),Vn(t,qt()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(rl)throw rl=!1,t=xu,xu=null,t;return(al&1)!==0&&t.tag!==0&&Os(),g=t.pendingLanes,(g&1)!==0?t===vu?Ga++:(Ga=0,vu=t):Ga=0,yr(),null}function Os(){if(br!==null){var t=Ln(al),i=oi.transition,a=ft;try{if(oi.transition=null,ft=16>t?16:t,br===null)var c=!1;else{if(t=br,br=null,al=0,(At&6)!==0)throw Error(n(331));var h=At;for(At|=4,We=t.current;We!==null;){var g=We,E=g.child;if((We.flags&16)!==0){var k=g.deletions;if(k!==null){for(var V=0;V<k.length;V++){var ce=k[V];for(We=ce;We!==null;){var ve=We;switch(ve.tag){case 0:case 11:case 15:za(8,ve,g)}var we=ve.child;if(we!==null)we.return=ve,We=we;else for(;We!==null;){ve=We;var xe=ve.sibling,Ve=ve.return;if(bp(ve),ve===ce){We=null;break}if(xe!==null){xe.return=Ve,We=xe;break}We=Ve}}}var $e=g.alternate;if($e!==null){var Ye=$e.child;if(Ye!==null){$e.child=null;do{var Jt=Ye.sibling;Ye.sibling=null,Ye=Jt}while(Ye!==null)}}We=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,We=E;else e:for(;We!==null;){if(g=We,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:za(9,g,g.return)}var te=g.sibling;if(te!==null){te.return=g.return,We=te;break e}We=g.return}}var q=t.current;for(We=q;We!==null;){E=We;var ae=E.child;if((E.subtreeFlags&2064)!==0&&ae!==null)ae.return=E,We=ae;else e:for(E=q;We!==null;){if(k=We,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:tl(9,k)}}catch(Ke){Kt(k,k.return,Ke)}if(k===E){We=null;break e}var be=k.sibling;if(be!==null){be.return=k.return,We=be;break e}We=k.return}}if(At=h,yr(),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(Be,t)}catch{}c=!0}return c}finally{ft=a,oi.transition=i}}return!1}function Vp(t,i,a){i=Ds(a,i),i=sp(t,i,1),t=Mr(t,i,1),i=In(),t!==null&&(rn(t,1,i),Vn(t,i))}function Kt(t,i,a){if(t.tag===3)Vp(t,t,a);else for(;i!==null;){if(i.tag===3){Vp(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Er===null||!Er.has(c))){t=Ds(a,t),t=ap(i,t,1),i=Mr(i,t,1),t=In(),i!==null&&(rn(i,1,t),Vn(i,t));break}}i=i.return}}function mx(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=In(),t.pingedLanes|=t.suspendedLanes&a,fn===t&&(xn&a)===a&&(an===4||an===3&&(xn&130023424)===xn&&500>qt()-gu?Qr(t,0):mu|=a),Vn(t,i)}function jp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Vt,Vt<<=1,(Vt&130023424)===0&&(Vt=4194304)));var a=In();t=$i(t,i),t!==null&&(rn(t,i,a),Vn(t,a))}function gx(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),jp(t,a)}function xx(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),jp(t,a)}var Gp;Gp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||On.current)Bn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Bn=!1,rx(t,i,a);Bn=(t.flags&131072)!==0}else Bn=!1,Wt&&(i.flags&1048576)!==0&&Mh(i,ko,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Jo(t,i),t=i.pendingProps;var h=bs(i,Sn.current);Ps(i,a),h=qc(null,i,c,t,h,a);var g=$c();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(c)?(g=!0,Uo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,zc(i),h.updater=Zo,i.stateNode=h,h._reactInternals=i,eu(i,c,t,a),i=ru(null,i,c,!0,g,a)):(i.tag=0,Wt&&g&&Nc(i),Dn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Jo(t,i),t=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=_x(c),t=mi(c,t),h){case 0:i=iu(null,i,c,t,a);break e;case 1:i=mp(null,i,c,t,a);break e;case 11:i=up(null,i,c,t,a);break e;case 14:i=dp(null,i,c,mi(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:mi(c,h),iu(t,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:mi(c,h),mp(t,i,c,h,a);case 3:e:{if(gp(i),t===null)throw Error(n(387));c=i.pendingProps,g=i.memoizedState,h=g.element,Ph(t,i),Ho(i,c,null,a);var E=i.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Ds(Error(n(423)),i),i=xp(t,i,c,a,h);break e}else if(c!==h){h=Ds(Error(n(424)),i),i=xp(t,i,c,a,h);break e}else for($n=xr(i.stateNode.containerInfo.firstChild),qn=i,Wt=!0,pi=null,a=Rh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(As(),c===h){i=Ki(t,i,a);break e}Dn(t,i,c,a)}i=i.child}return i;case 5:return Ih(i),t===null&&Dc(i),c=i.type,h=i.pendingProps,g=t!==null?t.memoizedProps:null,E=h.children,Ec(c,h)?E=null:g!==null&&Ec(c,g)&&(i.flags|=32),pp(t,i),Dn(t,i,E,a),i.child;case 6:return t===null&&Dc(i),null;case 13:return vp(t,i,a);case 4:return Vc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Rs(i,null,c,a):Dn(t,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:mi(c,h),up(t,i,c,h,a);case 7:return Dn(t,i,i.pendingProps,a),i.child;case 8:return Dn(t,i,i.pendingProps.children,a),i.child;case 12:return Dn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,E=h.value,jt(Vo,c._currentValue),c._currentValue=E,g!==null)if(hi(g.value,E)){if(g.children===h.children&&!On.current){i=Ki(t,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var k=g.dependencies;if(k!==null){E=g.child;for(var V=k.firstContext;V!==null;){if(V.context===c){if(g.tag===1){V=Yi(-1,a&-a),V.tag=2;var ce=g.updateQueue;if(ce!==null){ce=ce.shared;var ve=ce.pending;ve===null?V.next=V:(V.next=ve.next,ve.next=V),ce.pending=V}}g.lanes|=a,V=g.alternate,V!==null&&(V.lanes|=a),kc(g.return,a,i),k.lanes|=a;break}V=V.next}}else if(g.tag===10)E=g.type===i.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(n(341));E.lanes|=a,k=E.alternate,k!==null&&(k.lanes|=a),kc(E,a,i),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===i){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Dn(t,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Ps(i,a),h=si(h),c=c(h),i.flags|=1,Dn(t,i,c,a),i.child;case 14:return c=i.type,h=mi(c,i.pendingProps),h=mi(c.type,h),dp(t,i,c,h,a);case 15:return fp(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:mi(c,h),Jo(t,i),i.tag=1,kn(c)?(t=!0,Uo(i)):t=!1,Ps(i,a),ip(i,c,h),eu(i,c,h,a),ru(null,i,c,!0,t,a);case 19:return yp(t,i,a);case 22:return hp(t,i,a)}throw Error(n(156,i.tag))};function Hp(t,i){return go(t,i)}function vx(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(t,i,a,c){return new vx(t,i,a,c)}function Eu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _x(t){if(typeof t=="function")return Eu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Q)return 11;if(t===J)return 14}return 2}function Ar(t,i){var a=t.alternate;return a===null?(a=li(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function ul(t,i,a,c,h,g){var E=2;if(c=t,typeof t=="function")Eu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case F:return es(a.children,h,g,i);case G:E=8,h|=8;break;case b:return t=li(12,a,i,h|2),t.elementType=b,t.lanes=g,t;case Z:return t=li(13,a,i,h),t.elementType=Z,t.lanes=g,t;case X:return t=li(19,a,i,h),t.elementType=X,t.lanes=g,t;case $:return dl(a,h,g,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:E=10;break e;case z:E=9;break e;case Q:E=11;break e;case J:E=14;break e;case H:E=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=li(E,a,i,h),i.elementType=t,i.type=c,i.lanes=g,i}function es(t,i,a,c){return t=li(7,t,c,i),t.lanes=a,t}function dl(t,i,a,c){return t=li(22,t,c,i),t.elementType=$,t.lanes=a,t.stateNode={isHidden:!1},t}function bu(t,i,a){return t=li(6,t,null,i),t.lanes=a,t}function Tu(t,i,a){return i=li(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function yx(t,i,a,c,h){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ti(0),this.expirationTimes=Ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ti(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Cu(t,i,a,c,h,g,E,k,V){return t=new yx(t,i,a,k,V),i===1?(i=1,g===!0&&(i|=8)):i=0,g=li(3,null,null,i),t.current=g,g.stateNode=t,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},zc(g),t}function Sx(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Wp(t){if(!t)return _r;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(kn(a))return _h(t,a,i)}return i}function Xp(t,i,a,c,h,g,E,k,V){return t=Cu(a,c,!0,t,h,g,E,k,V),t.context=Wp(null),a=t.current,c=In(),h=Tr(a),g=Yi(c,h),g.callback=i??null,Mr(a,g,h),t.current.lanes=h,rn(t,h,c),Vn(t,c),t}function fl(t,i,a,c){var h=i.current,g=In(),E=Tr(h);return a=Wp(a),i.context===null?i.context=a:i.pendingContext=a,i=Yi(g,E),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=Mr(h,i,E),t!==null&&(vi(t,h,E,g),Go(t,h,E)),E}function hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Au(t,i){qp(t,i),(t=t.alternate)&&qp(t,i)}function Mx(){return null}var $p=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ru(t){this._internalRoot=t}pl.prototype.render=Ru.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));fl(t,i,null,null)},pl.prototype.unmount=Ru.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Zr(function(){fl(null,t,null,null)}),i[Hi]=null}};function pl(t){this._internalRoot=t}pl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Ci();t={blockedOn:null,target:t,priority:i};for(var a=0;a<pr.length&&i!==0&&i<pr[a].priority;a++);pr.splice(a,0,t),a===0&&If(t)}};function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yp(){}function wx(t,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var ce=hl(E);g.call(ce)}}var E=Xp(i,c,t,0,null,!1,!1,"",Yp);return t._reactRootContainer=E,t[Hi]=E.current,Ca(t.nodeType===8?t.parentNode:t),Zr(),E}for(;h=t.lastChild;)t.removeChild(h);if(typeof c=="function"){var k=c;c=function(){var ce=hl(V);k.call(ce)}}var V=Cu(t,0,!1,null,null,!1,!1,"",Yp);return t._reactRootContainer=V,t[Hi]=V.current,Ca(t.nodeType===8?t.parentNode:t),Zr(function(){fl(i,V,a,c)}),V}function gl(t,i,a,c,h){var g=a._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var k=h;h=function(){var V=hl(E);k.call(V)}}fl(i,E,t,h)}else E=wx(a,i,t,h,c);return hl(E)}cn=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=zt(i.pendingLanes);a!==0&&(Ft(i,a|1),Vn(i,qt()),(At&6)===0&&(Fs=qt()+500,yr()))}break;case 13:Zr(function(){var c=$i(t,1);if(c!==null){var h=In();vi(c,t,1,h)}}),Au(t,1)}},un=function(t){if(t.tag===13){var i=$i(t,134217728);if(i!==null){var a=In();vi(i,t,134217728,a)}Au(t,134217728)}},ms=function(t){if(t.tag===13){var i=Tr(t),a=$i(t,i);if(a!==null){var c=In();vi(a,t,i,c)}Au(t,i)}},Ci=function(){return ft},Lf=function(t,i){var a=ft;try{return ft=t,i()}finally{ft=a}},Ie=function(t,i,a){switch(i){case"input":if(vt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var h=Do(c);if(!h)throw Error(n(90));Bt(c),vt(c,h)}}}break;case"textarea":w(t,a);break;case"select":i=a.value,i!=null&&St(t,!!a.multiple,i,!1)}},nt=Su,It=Zr;var Ex={usingClientEntryPoint:!1,Events:[Na,ws,Do,me,Ae,Su]},Ha={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bx={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ha(t),t===null?null:t.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||Mx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xl.isDisabled&&xl.supportsFiber)try{Be=xl.inject(bx),Re=xl}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ex,jn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nu(i))throw Error(n(200));return Sx(t,i,null,a)},jn.createRoot=function(t,i){if(!Nu(t))throw Error(n(299));var a=!1,c="",h=$p;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Cu(t,1,!1,null,null,a,!1,c,h),t[Hi]=i.current,Ca(t.nodeType===8?t.parentNode:t),new Ru(i)},jn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ha(i),t=t===null?null:t.stateNode,t},jn.flushSync=function(t){return Zr(t)},jn.hydrate=function(t,i,a){if(!ml(i))throw Error(n(200));return gl(null,t,i,!0,a)},jn.hydrateRoot=function(t,i,a){if(!Nu(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",E=$p;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Xp(i,null,t,1,a??null,h,!1,g,E),t[Hi]=i.current,Ca(t),c)for(t=0;t<c.length;t++)a=c[t],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new pl(i)},jn.render=function(t,i,a){if(!ml(i))throw Error(n(200));return gl(null,t,i,!1,a)},jn.unmountComponentAtNode=function(t){if(!ml(t))throw Error(n(40));return t._reactRootContainer?(Zr(function(){gl(null,null,t,!1,function(){t._reactRootContainer=null,t[Hi]=null})}),!0):!1},jn.unstable_batchedUpdates=Su,jn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!ml(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return gl(t,i,a,!1,c)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var im;function Ix(){if(im)return Du.exports;im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Du.exports=Dx(),Du.exports}var rm;function Ux(){if(rm)return vl;rm=1;var s=Ix();return vl.createRoot=s.createRoot,vl.hydrateRoot=s.hydrateRoot,vl}var Fx=Ux();const Ox=o0(Fx);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l0=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=ot.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},p)=>ot.createElement("svg",{ref:p,...Bx,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:l0("lucide",o),...d},[...u.map(([m,x])=>ot.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=(s,e)=>{const n=ot.forwardRef(({className:r,...o},l)=>ot.createElement(zx,{ref:l,iconNode:e,className:l0(`lucide-${kx(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=rt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=rt("BellRing",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=rt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=rt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=rt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=rt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=rt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=rt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=rt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=rt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=rt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=rt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=rt("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=rt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=rt("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=rt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=rt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=rt("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=rt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=rt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=rt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=rt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=rt("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=rt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=rt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=rt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=rt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=rt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=rt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=rt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=rt("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=rt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=rt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=rt("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=rt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=rt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=rt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=rt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=rt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=rt("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=rt("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=rt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=rt("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=rt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=rt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=rt("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=rt("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=rt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=rt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=rt("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),vv=({cartCount:s,onOpenCart:e})=>{const[n,r]=ot.useState(!1),[o,l]=ot.useState(!1);ot.useEffect(()=>{const d=()=>{r(window.scrollY>40)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const u=[{name:"Simulação 3D",href:"#hero-3d",icon:u0},{name:"Central VTS",href:"#central-vts",icon:fv},{name:"Normas NBR",href:"#normas",icon:hd},{name:"Calculadora & Diagrama",href:"#calculadora",icon:c0,highlight:!0},{name:"Loja Virtual",href:"#loja",icon:ql},{name:"Manuais",href:"#manuais",icon:hd},{name:"Fotos Reais",href:"#galeria",icon:co},{name:"Contato",href:"#contato",icon:sr}];return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"bg-gradient-to-r from-[#08090b] via-[#141208] to-[#08090b] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-center text-[#f3e5ab] flex items-center justify-center gap-2 font-medium",children:[f.jsxs("span",{className:"flex h-2 w-2 relative",children:[f.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"}),f.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"})]}),f.jsxs("span",{className:"tracking-wide",children:["SISTEMA EM CONFORMIDADE TOTAL COM ",f.jsx("strong",{className:"text-[#e5c05d]",children:"ABNT NBR 14518"}),", ",f.jsx("strong",{className:"text-[#e5c05d]",children:"NFPA 96 & 17A"})," E CORPO DE BOMBEIROS (AVCB)"]})]}),f.jsxs("header",{className:`sticky top-0 z-50 transition-all duration-300 ${n?"bg-[#08090b]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5":"bg-[#08090b]/85 backdrop-blur-sm border-b border-white/5 py-3.5"}`,children:[f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[f.jsx("a",{href:"#",className:"flex items-center gap-3 group",children:f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE - Sistemas contra Incêndio",className:"h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"}),f.jsx("span",{className:"hidden sm:inline-block text-[10px] bg-[#1a170e] text-[#e5c05d] border border-[#d4af37]/40 px-2 py-0.5 rounded font-mono font-bold tracking-wider",children:"VTS 32S3"})]})}),f.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:u.map(d=>{const p=d.icon;return f.jsxs("a",{href:d.href,className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${d.highlight?"bg-[#d4af37]/15 text-[#e5c05d] hover:bg-[#d4af37]/25 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-semibold":"text-gray-300 hover:text-[#f3e5ab] hover:bg-white/5"}`,children:[f.jsx(p,{className:`w-3.5 h-3.5 ${d.highlight?"text-[#d4af37]":"opacity-70"}`}),d.name]},d.name)})}),f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial.",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black px-4 py-2 rounded-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all",children:[f.jsx(sr,{className:"w-3.5 h-3.5 fill-black"}),f.jsx("span",{children:"(15) 99657-6807"})]}),f.jsxs("button",{onClick:e,className:"relative p-2.5 rounded-xl bg-[#14171e] hover:bg-[#1a1f28] border border-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all flex items-center justify-center group shadow-md",title:"Ver Carrinho de Compras",children:[f.jsx(ql,{className:"w-5 h-5 group-hover:scale-105 transition-transform"}),s>0&&f.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-gold animate-pulse",children:s})]}),f.jsx("button",{onClick:()=>l(!o),className:"lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white",children:o?f.jsx(gd,{className:"w-6 h-6"}):f.jsx(tv,{className:"w-6 h-6"})})]})]}),o&&f.jsxs("div",{className:"lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-[#d4af37]/20 space-y-2",children:[u.map(d=>{const p=d.icon;return f.jsxs("a",{href:d.href,onClick:()=>l(!1),className:"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] transition-all",children:[f.jsx(p,{className:"w-4 h-4 text-[#d4af37]"}),f.jsx("span",{children:d.name})]},d.name)}),f.jsx("div",{className:"pt-3 border-t border-white/10",children:f.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-sm font-black rounded-lg shadow-glow-gold",children:[f.jsx(sr,{className:"w-4 h-4 fill-black"}),"Falar com Engenharia Outfire no WhatsApp"]})})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pf="182",_v=0,cm=1,yv=2,Vl=1,h0=2,Ja=3,kr=0,Hn=1,ir=2,ar=0,ta=1,xd=2,um=3,dm=4,Sv=5,cs=100,Mv=101,wv=102,Ev=103,bv=104,Tv=200,Cv=201,Av=202,Rv=203,vd=204,_d=205,Nv=206,Pv=207,Lv=208,Dv=209,Iv=210,Uv=211,Fv=212,Ov=213,kv=214,yd=0,Sd=1,Md=2,ia=3,wd=4,Ed=5,bd=6,Td=7,p0=0,Bv=1,zv=2,ki=0,m0=1,g0=2,x0=3,v0=4,_0=5,y0=6,S0=7,M0=300,ps=301,ra=302,Cd=303,Ad=304,Zl=306,Rd=1e3,rr=1001,Nd=1002,_n=1003,Vv=1004,_l=1005,Cn=1006,Fu=1007,ds=1008,ei=1009,w0=1010,E0=1011,ro=1012,mf=1013,Vi=1014,Fi=1015,lr=1016,gf=1017,xf=1018,so=1020,b0=35902,T0=35899,C0=1021,A0=1022,wi=1023,cr=1026,fs=1027,R0=1028,vf=1029,sa=1030,_f=1031,yf=1033,jl=33776,Gl=33777,Hl=33778,Wl=33779,Pd=35840,Ld=35841,Dd=35842,Id=35843,Ud=36196,Fd=37492,Od=37496,kd=37488,Bd=37489,zd=37490,Vd=37491,jd=37808,Gd=37809,Hd=37810,Wd=37811,Xd=37812,qd=37813,$d=37814,Yd=37815,Kd=37816,Zd=37817,Qd=37818,Jd=37819,ef=37820,tf=37821,nf=36492,rf=36494,sf=36495,af=36283,of=36284,lf=36285,cf=36286,jv=3200,N0=0,Gv=1,Fr="",Jn="srgb",aa="srgb-linear",$l="linear",kt="srgb",ks=7680,fm=519,Hv=512,Wv=513,Xv=514,Sf=515,qv=516,$v=517,Mf=518,Yv=519,hm=35044,pm="300 es",Oi=2e3,Yl=2001;function P0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ao(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Kv(){const s=ao("canvas");return s.style.display="block",s}const mm={};function gm(...s){const e="THREE."+s.shift();console.log(e,...s)}function ut(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Dt(...s){const e="THREE."+s.shift();console.error(e,...s)}function oo(...s){const e=s.join(" ");e in mm||(mm[e]=!0,ut(...s))}function Zv(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}class ca{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xm=1234567;const to=Math.PI/180,oa=180/Math.PI;function ua(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[n&63|128]+bn[n>>8&255]+"-"+bn[n>>16&255]+bn[n>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function bt(s,e,n){return Math.max(e,Math.min(n,s))}function wf(s,e){return(s%e+e)%e}function Qv(s,e,n,r,o){return r+(s-e)*(o-r)/(n-e)}function Jv(s,e,n){return s!==e?(n-s)/(e-s):0}function no(s,e,n){return(1-n)*s+n*e}function e_(s,e,n,r){return no(s,e,1-Math.exp(-n*r))}function t_(s,e=1){return e-Math.abs(wf(s,e*2)-e)}function n_(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function i_(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function r_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function s_(s,e){return s+Math.random()*(e-s)}function a_(s){return s*(.5-Math.random())}function o_(s){s!==void 0&&(xm=s);let e=xm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function l_(s){return s*to}function c_(s){return s*oa}function u_(s){return(s&s-1)===0&&s!==0}function d_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function f_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function h_(s,e,n,r,o){const l=Math.cos,u=Math.sin,d=l(n/2),p=u(n/2),m=l((e+r)/2),x=u((e+r)/2),v=l((e-r)/2),y=u((e-r)/2),S=l((r-e)/2),T=u((r-e)/2);switch(o){case"XYX":s.set(d*x,p*v,p*y,d*m);break;case"YZY":s.set(p*y,d*x,p*v,d*m);break;case"ZXZ":s.set(p*v,p*y,d*x,d*m);break;case"XZX":s.set(d*x,p*T,p*S,d*m);break;case"YXY":s.set(p*S,d*x,p*T,d*m);break;case"ZYZ":s.set(p*T,p*S,d*x,d*m);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ea(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const vm={DEG2RAD:to,RAD2DEG:oa,generateUUID:ua,clamp:bt,euclideanModulo:wf,mapLinear:Qv,inverseLerp:Jv,lerp:no,damp:e_,pingpong:t_,smoothstep:n_,smootherstep:i_,randInt:r_,randFloat:s_,randFloatSpread:a_,seededRandom:o_,degToRad:l_,radToDeg:c_,isPowerOfTwo:u_,ceilPowerOfTwo:d_,floorPowerOfTwo:f_,setQuaternionFromProperEuler:h_,normalize:Un,denormalize:ea};class Tt{constructor(e=0,n=0){Tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class uo{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,d){let p=r[o+0],m=r[o+1],x=r[o+2],v=r[o+3],y=l[u+0],S=l[u+1],T=l[u+2],N=l[u+3];if(d<=0){e[n+0]=p,e[n+1]=m,e[n+2]=x,e[n+3]=v;return}if(d>=1){e[n+0]=y,e[n+1]=S,e[n+2]=T,e[n+3]=N;return}if(v!==N||p!==y||m!==S||x!==T){let M=p*y+m*S+x*T+v*N;M<0&&(y=-y,S=-S,T=-T,N=-N,M=-M);let _=1-d;if(M<.9995){const C=Math.acos(M),L=Math.sin(C);_=Math.sin(_*C)/L,d=Math.sin(d*C)/L,p=p*_+y*d,m=m*_+S*d,x=x*_+T*d,v=v*_+N*d}else{p=p*_+y*d,m=m*_+S*d,x=x*_+T*d,v=v*_+N*d;const C=1/Math.sqrt(p*p+m*m+x*x+v*v);p*=C,m*=C,x*=C,v*=C}}e[n]=p,e[n+1]=m,e[n+2]=x,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,l,u){const d=r[o],p=r[o+1],m=r[o+2],x=r[o+3],v=l[u],y=l[u+1],S=l[u+2],T=l[u+3];return e[n]=d*T+x*v+p*S-m*y,e[n+1]=p*T+x*y+m*v-d*S,e[n+2]=m*T+x*S+d*y-p*v,e[n+3]=x*T-d*v-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(o/2),v=d(l/2),y=p(r/2),S=p(o/2),T=p(l/2);switch(u){case"XYZ":this._x=y*x*v+m*S*T,this._y=m*S*v-y*x*T,this._z=m*x*T+y*S*v,this._w=m*x*v-y*S*T;break;case"YXZ":this._x=y*x*v+m*S*T,this._y=m*S*v-y*x*T,this._z=m*x*T-y*S*v,this._w=m*x*v+y*S*T;break;case"ZXY":this._x=y*x*v-m*S*T,this._y=m*S*v+y*x*T,this._z=m*x*T+y*S*v,this._w=m*x*v-y*S*T;break;case"ZYX":this._x=y*x*v-m*S*T,this._y=m*S*v+y*x*T,this._z=m*x*T-y*S*v,this._w=m*x*v+y*S*T;break;case"YZX":this._x=y*x*v+m*S*T,this._y=m*S*v+y*x*T,this._z=m*x*T-y*S*v,this._w=m*x*v-y*S*T;break;case"XZY":this._x=y*x*v-m*S*T,this._y=m*S*v-y*x*T,this._z=m*x*T+y*S*v,this._w=m*x*v+y*S*T;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],d=n[5],p=n[9],m=n[2],x=n[6],v=n[10],y=r+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-p)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(x-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,d=n._x,p=n._y,m=n._z,x=n._w;return this._x=r*x+u*d+o*m-l*p,this._y=o*x+u*p+l*d-r*m,this._z=l*x+u*m+r*p-o*d,this._w=u*x-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,n=Math.sin(n*m)/x,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class re{constructor(e=0,n=0,r=0){re.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(_m.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(_m.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),x=2*(d*n-l*o),v=2*(l*r-u*n);return this.x=n+p*m+u*v-d*x,this.y=r+p*x+d*m-l*v,this.z=o+p*v+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,d=n.y,p=n.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ou.copy(this).projectOnVector(e),this.sub(Ou)}reflect(e){return this.sub(Ou.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ou=new re,_m=new uo;class mt{constructor(e,n,r,o,l,u,d,p,m){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,p,m)}set(e,n,r,o,l,u,d,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=n,x[4]=l,x[5]=p,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],x=r[4],v=r[7],y=r[2],S=r[5],T=r[8],N=o[0],M=o[3],_=o[6],C=o[1],L=o[4],A=o[7],I=o[2],D=o[5],F=o[8];return l[0]=u*N+d*C+p*I,l[3]=u*M+d*L+p*D,l[6]=u*_+d*A+p*F,l[1]=m*N+x*C+v*I,l[4]=m*M+x*L+v*D,l[7]=m*_+x*A+v*F,l[2]=y*N+S*C+T*I,l[5]=y*M+S*L+T*D,l[8]=y*_+S*A+T*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return n*u*x-n*d*m-r*l*x+r*d*p+o*l*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],v=x*u-d*m,y=d*p-x*l,S=m*l-u*p,T=n*v+r*y+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/T;return e[0]=v*N,e[1]=(o*m-x*r)*N,e[2]=(d*r-o*u)*N,e[3]=y*N,e[4]=(x*n-o*p)*N,e[5]=(o*l-d*n)*N,e[6]=S*N,e[7]=(r*p-m*n)*N,e[8]=(u*n-r*l)*N,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(ku.makeScale(e,n)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,n){return this.premultiply(ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ku=new mt,ym=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sm=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p_(){const s={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===kt&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(o.r=na(o.r),o.g=na(o.g),o.b=na(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Fr?$l:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[aa]:{primaries:e,whitePoint:r,transfer:$l,toXYZ:ym,fromXYZ:Sm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:e,whitePoint:r,transfer:kt,toXYZ:ym,fromXYZ:Sm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}}),s}const Rt=p_();function or(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function na(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bs;class m_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Bs===void 0&&(Bs=ao("canvas")),Bs.width=e.width,Bs.height=e.height;const o=Bs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Bs}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ao("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=or(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(or(n[r]/255)*255):n[r]=or(n[r]);return{data:n,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let g_=0;class Ef{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Bu(o[u].image)):l.push(Bu(o[u]))}else l=Bu(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function Bu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?m_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let x_=0;const zu=new re;class An extends ca{constructor(e=An.DEFAULT_IMAGE,n=An.DEFAULT_MAPPING,r=rr,o=rr,l=Cn,u=ds,d=wi,p=ei,m=An.DEFAULT_ANISOTROPY,x=Fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=ua(),this.name="",this.source=new Ef(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zu).x}get height(){return this.source.getSize(zu).y}get depth(){return this.source.getSize(zu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){ut(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ut(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==M0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=M0;An.DEFAULT_ANISOTROPY=1;class Zt{constructor(e=0,n=0,r=0,o=1){Zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const p=e.elements,m=p[0],x=p[4],v=p[8],y=p[1],S=p[5],T=p[9],N=p[2],M=p[6],_=p[10];if(Math.abs(x-y)<.01&&Math.abs(v-N)<.01&&Math.abs(T-M)<.01){if(Math.abs(x+y)<.1&&Math.abs(v+N)<.1&&Math.abs(T+M)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,A=(S+1)/2,I=(_+1)/2,D=(x+y)/4,F=(v+N)/4,G=(T+M)/4;return L>A&&L>I?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=D/r,l=F/r):A>I?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=D/o,l=G/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=F/l,o=G/l),this.set(r,o,l,n),this}let C=Math.sqrt((M-T)*(M-T)+(v-N)*(v-N)+(y-x)*(y-x));return Math.abs(C)<.001&&(C=1),this.x=(M-T)/C,this.y=(v-N)/C,this.z=(y-x)/C,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=bt(this.x,e.x,n.x),this.y=bt(this.y,e.y,n.y),this.z=bt(this.z,e.z,n.z),this.w=bt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=bt(this.x,e,n),this.y=bt(this.y,e,n),this.z=bt(this.z,e,n),this.w=bt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class v_ extends ca{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Zt(0,0,e,n),this.scissorTest=!1,this.viewport=new Zt(0,0,e,n);const o={width:e,height:n,depth:r.depth},l=new An(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Ef(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends v_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class L0 extends An{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class __ extends An{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=_n,this.minFilter=_n,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fo{constructor(e=new re(1/0,1/0,1/0),n=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(_i.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(_i.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=_i.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,_i):_i.fromBufferAttribute(l,u),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),yl.copy(r.boundingBox)),yl.applyMatrix4(e.matrixWorld),this.union(yl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xa),Sl.subVectors(this.max,Xa),zs.subVectors(e.a,Xa),Vs.subVectors(e.b,Xa),js.subVectors(e.c,Xa),Nr.subVectors(Vs,zs),Pr.subVectors(js,Vs),ts.subVectors(zs,js);let n=[0,-Nr.z,Nr.y,0,-Pr.z,Pr.y,0,-ts.z,ts.y,Nr.z,0,-Nr.x,Pr.z,0,-Pr.x,ts.z,0,-ts.x,-Nr.y,Nr.x,0,-Pr.y,Pr.x,0,-ts.y,ts.x,0];return!Vu(n,zs,Vs,js,Sl)||(n=[1,0,0,0,1,0,0,0,1],!Vu(n,zs,Vs,js,Sl))?!1:(Ml.crossVectors(Nr,Pr),n=[Ml.x,Ml.y,Ml.z],Vu(n,zs,Vs,js,Sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qi=[new re,new re,new re,new re,new re,new re,new re,new re],_i=new re,yl=new fo,zs=new re,Vs=new re,js=new re,Nr=new re,Pr=new re,ts=new re,Xa=new re,Sl=new re,Ml=new re,ns=new re;function Vu(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ns.fromArray(s,l);const d=o.x*Math.abs(ns.x)+o.y*Math.abs(ns.y)+o.z*Math.abs(ns.z),p=e.dot(ns),m=n.dot(ns),x=r.dot(ns);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const y_=new fo,qa=new re,ju=new re;class bf{constructor(e=new re,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):y_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qa.subVectors(e,this.center);const n=qa.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(qa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qa.copy(e.center).add(ju)),this.expandByPoint(qa.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ji=new re,Gu=new re,wl=new re,Lr=new re,Hu=new re,El=new re,Wu=new re;class S_{constructor(e=new re,n=new re(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ji)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ji.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ji.copy(this.origin).addScaledVector(this.direction,n),Ji.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){Gu.copy(e).add(n).multiplyScalar(.5),wl.copy(n).sub(e).normalize(),Lr.copy(this.origin).sub(Gu);const l=e.distanceTo(n)*.5,u=-this.direction.dot(wl),d=Lr.dot(this.direction),p=-Lr.dot(wl),m=Lr.lengthSq(),x=Math.abs(1-u*u);let v,y,S,T;if(x>0)if(v=u*p-d,y=u*d-p,T=l*x,v>=0)if(y>=-T)if(y<=T){const N=1/x;v*=N,y*=N,S=v*(v+u*y+2*d)+y*(u*v+y+2*p)+m}else y=l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;else y=-l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;else y<=-T?(v=Math.max(0,-(-u*l+d)),y=v>0?-l:Math.min(Math.max(-l,-p),l),S=-v*v+y*(y+2*p)+m):y<=T?(v=0,y=Math.min(Math.max(-l,-p),l),S=y*(y+2*p)+m):(v=Math.max(0,-(u*l+d)),y=v>0?l:Math.min(Math.max(-l,-p),l),S=-v*v+y*(y+2*p)+m);else y=u>0?-l:l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Gu).addScaledVector(wl,y),S}intersectSphere(e,n){Ji.subVectors(e.center,this.origin);const r=Ji.dot(this.direction),o=Ji.dot(Ji)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,d,p;const m=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Ji)!==null}intersectTriangle(e,n,r,o,l){Hu.subVectors(n,e),El.subVectors(r,e),Wu.crossVectors(Hu,El);let u=this.direction.dot(Wu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Lr.subVectors(this.origin,e);const p=d*this.direction.dot(El.crossVectors(Lr,El));if(p<0)return null;const m=d*this.direction.dot(Hu.cross(Lr));if(m<0||p+m>u)return null;const x=-d*Lr.dot(Wu);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qt{constructor(e,n,r,o,l,u,d,p,m,x,v,y,S,T,N,M){Qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,p,m,x,v,y,S,T,N,M)}set(e,n,r,o,l,u,d,p,m,x,v,y,S,T,N,M){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=p,_[2]=m,_[6]=x,_[10]=v,_[14]=y,_[3]=S,_[7]=T,_[11]=N,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Gs.setFromMatrixColumn(e,0).length(),l=1/Gs.setFromMatrixColumn(e,1).length(),u=1/Gs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*x,S=u*v,T=d*x,N=d*v;n[0]=p*x,n[4]=-p*v,n[8]=m,n[1]=S+T*m,n[5]=y-N*m,n[9]=-d*p,n[2]=N-y*m,n[6]=T+S*m,n[10]=u*p}else if(e.order==="YXZ"){const y=p*x,S=p*v,T=m*x,N=m*v;n[0]=y+N*d,n[4]=T*d-S,n[8]=u*m,n[1]=u*v,n[5]=u*x,n[9]=-d,n[2]=S*d-T,n[6]=N+y*d,n[10]=u*p}else if(e.order==="ZXY"){const y=p*x,S=p*v,T=m*x,N=m*v;n[0]=y-N*d,n[4]=-u*v,n[8]=T+S*d,n[1]=S+T*d,n[5]=u*x,n[9]=N-y*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const y=u*x,S=u*v,T=d*x,N=d*v;n[0]=p*x,n[4]=T*m-S,n[8]=y*m+N,n[1]=p*v,n[5]=N*m+y,n[9]=S*m-T,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const y=u*p,S=u*m,T=d*p,N=d*m;n[0]=p*x,n[4]=N-y*v,n[8]=T*v+S,n[1]=v,n[5]=u*x,n[9]=-d*x,n[2]=-m*x,n[6]=S*v+T,n[10]=y-N*v}else if(e.order==="XZY"){const y=u*p,S=u*m,T=d*p,N=d*m;n[0]=p*x,n[4]=-v,n[8]=m*x,n[1]=y*v+N,n[5]=u*x,n[9]=S*v-T,n[2]=T*v-S,n[6]=d*x,n[10]=N*v+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M_,e,w_)}lookAt(e,n,r){const o=this.elements;return Kn.subVectors(e,n),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Dr.crossVectors(r,Kn),Dr.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Dr.crossVectors(r,Kn)),Dr.normalize(),bl.crossVectors(Kn,Dr),o[0]=Dr.x,o[4]=bl.x,o[8]=Kn.x,o[1]=Dr.y,o[5]=bl.y,o[9]=Kn.y,o[2]=Dr.z,o[6]=bl.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],x=r[1],v=r[5],y=r[9],S=r[13],T=r[2],N=r[6],M=r[10],_=r[14],C=r[3],L=r[7],A=r[11],I=r[15],D=o[0],F=o[4],G=o[8],b=o[12],P=o[1],z=o[5],Q=o[9],Z=o[13],X=o[2],J=o[6],H=o[10],$=o[14],j=o[3],oe=o[7],se=o[11],O=o[15];return l[0]=u*D+d*P+p*X+m*j,l[4]=u*F+d*z+p*J+m*oe,l[8]=u*G+d*Q+p*H+m*se,l[12]=u*b+d*Z+p*$+m*O,l[1]=x*D+v*P+y*X+S*j,l[5]=x*F+v*z+y*J+S*oe,l[9]=x*G+v*Q+y*H+S*se,l[13]=x*b+v*Z+y*$+S*O,l[2]=T*D+N*P+M*X+_*j,l[6]=T*F+N*z+M*J+_*oe,l[10]=T*G+N*Q+M*H+_*se,l[14]=T*b+N*Z+M*$+_*O,l[3]=C*D+L*P+A*X+I*j,l[7]=C*F+L*z+A*J+I*oe,l[11]=C*G+L*Q+A*H+I*se,l[15]=C*b+L*Z+A*$+I*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],m=e[13],x=e[2],v=e[6],y=e[10],S=e[14],T=e[3],N=e[7],M=e[11],_=e[15],C=p*S-m*y,L=d*S-m*v,A=d*y-p*v,I=u*S-m*x,D=u*y-p*x,F=u*v-d*x;return n*(N*C-M*L+_*A)-r*(T*C-M*I+_*D)+o*(T*L-N*I+_*F)-l*(T*A-N*D+M*F)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],v=e[9],y=e[10],S=e[11],T=e[12],N=e[13],M=e[14],_=e[15],C=v*M*m-N*y*m+N*p*S-d*M*S-v*p*_+d*y*_,L=T*y*m-x*M*m-T*p*S+u*M*S+x*p*_-u*y*_,A=x*N*m-T*v*m+T*d*S-u*N*S-x*d*_+u*v*_,I=T*v*p-x*N*p-T*d*y+u*N*y+x*d*M-u*v*M,D=n*C+r*L+o*A+l*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/D;return e[0]=C*F,e[1]=(N*y*l-v*M*l-N*o*S+r*M*S+v*o*_-r*y*_)*F,e[2]=(d*M*l-N*p*l+N*o*m-r*M*m-d*o*_+r*p*_)*F,e[3]=(v*p*l-d*y*l-v*o*m+r*y*m+d*o*S-r*p*S)*F,e[4]=L*F,e[5]=(x*M*l-T*y*l+T*o*S-n*M*S-x*o*_+n*y*_)*F,e[6]=(T*p*l-u*M*l-T*o*m+n*M*m+u*o*_-n*p*_)*F,e[7]=(u*y*l-x*p*l+x*o*m-n*y*m-u*o*S+n*p*S)*F,e[8]=A*F,e[9]=(T*v*l-x*N*l-T*r*S+n*N*S+x*r*_-n*v*_)*F,e[10]=(u*N*l-T*d*l+T*r*m-n*N*m-u*r*_+n*d*_)*F,e[11]=(x*d*l-u*v*l-x*r*m+n*v*m+u*r*S-n*d*S)*F,e[12]=I*F,e[13]=(x*N*o-T*v*o+T*r*y-n*N*y-x*r*M+n*v*M)*F,e[14]=(T*d*o-u*N*o-T*r*p+n*N*p+u*r*M-n*d*M)*F,e[15]=(u*v*o-x*d*o+x*r*p-n*v*p-u*r*y+n*d*y)*F,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,d=e.y,p=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,x*d+r,x*p-o*u,0,m*p-o*d,x*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,d=n._z,p=n._w,m=l+l,x=u+u,v=d+d,y=l*m,S=l*x,T=l*v,N=u*x,M=u*v,_=d*v,C=p*m,L=p*x,A=p*v,I=r.x,D=r.y,F=r.z;return o[0]=(1-(N+_))*I,o[1]=(S+A)*I,o[2]=(T-L)*I,o[3]=0,o[4]=(S-A)*D,o[5]=(1-(y+_))*D,o[6]=(M+C)*D,o[7]=0,o[8]=(T+L)*F,o[9]=(M-C)*F,o[10]=(1-(y+N))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let l=Gs.set(o[0],o[1],o[2]).length();const u=Gs.set(o[4],o[5],o[6]).length(),d=Gs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),yi.copy(this);const m=1/l,x=1/u,v=1/d;return yi.elements[0]*=m,yi.elements[1]*=m,yi.elements[2]*=m,yi.elements[4]*=x,yi.elements[5]*=x,yi.elements[6]*=x,yi.elements[8]*=v,yi.elements[9]*=v,yi.elements[10]*=v,n.setFromRotationMatrix(yi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,n,r,o,l,u,d=Oi,p=!1){const m=this.elements,x=2*l/(n-e),v=2*l/(r-o),y=(n+e)/(n-e),S=(r+o)/(r-o);let T,N;if(p)T=l/(u-l),N=u*l/(u-l);else if(d===Oi)T=-(u+l)/(u-l),N=-2*u*l/(u-l);else if(d===Yl)T=-u/(u-l),N=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=N,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,l,u,d=Oi,p=!1){const m=this.elements,x=2/(n-e),v=2/(r-o),y=-(n+e)/(n-e),S=-(r+o)/(r-o);let T,N;if(p)T=1/(u-l),N=u/(u-l);else if(d===Oi)T=-2/(u-l),N=-(u+l)/(u-l);else if(d===Yl)T=-1/(u-l),N=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=v,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=T,m[14]=N,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const Gs=new re,yi=new Qt,M_=new re(0,0,0),w_=new re(1,1,1),Dr=new re,bl=new re,Kn=new re,Mm=new Qt,wm=new uo;class ji{constructor(e=0,n=0,r=0,o=ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],m=o[5],x=o[9],v=o[2],y=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(bt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-bt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(bt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wm.setFromEuler(this),this.setFromQuaternion(wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ji.DEFAULT_ORDER="XYZ";class D0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let E_=0;const Em=new re,Hs=new uo,er=new Qt,Tl=new re,$a=new re,b_=new re,T_=new uo,bm=new re(1,0,0),Tm=new re(0,1,0),Cm=new re(0,0,1),Am={type:"added"},C_={type:"removed"},Ws={type:"childadded",child:null},Xu={type:"childremoved",child:null};class Rn extends ca{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new re,n=new ji,r=new uo,o=new re(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qt},normalMatrix:{value:new mt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,n){return Hs.setFromAxisAngle(e,n),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(Tm,e)}rotateZ(e){return this.rotateOnAxis(Cm,e)}translateOnAxis(e,n){return Em.copy(e).applyQuaternion(this.quaternion),this.position.add(Em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(Tm,e)}translateZ(e){return this.translateOnAxis(Cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(er.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Tl.copy(e):Tl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),$a.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?er.lookAt($a,Tl,this.up):er.lookAt(Tl,$a,this.up),this.quaternion.setFromRotationMatrix(er),o&&(er.extractRotation(o.matrixWorld),Hs.setFromRotationMatrix(er),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Am),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(C_),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),er.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),er.multiply(e.parent.matrixWorld)),e.applyMatrix4(er),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Am),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,e,b_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($a,T_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),v=u(e.shapes),y=u(e.skeletons),S=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Rn.DEFAULT_UP=new re(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new re,tr=new re,qu=new re,nr=new re,Xs=new re,qs=new re,Rm=new re,$u=new re,Yu=new re,Ku=new re,Zu=new Zt,Qu=new Zt,Ju=new Zt;class Mi{constructor(e=new re,n=new re,r=new re){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),Si.subVectors(e,n),o.cross(Si);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){Si.subVectors(o,n),tr.subVectors(r,n),qu.subVectors(e,n);const u=Si.dot(Si),d=Si.dot(tr),p=Si.dot(qu),m=tr.dot(tr),x=tr.dot(qu),v=u*m-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(m*p-d*x)*y,T=(u*x-d*p)*y;return l.set(1-S-T,T,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,nr)===null?!1:nr.x>=0&&nr.y>=0&&nr.x+nr.y<=1}static getInterpolation(e,n,r,o,l,u,d,p){return this.getBarycoord(e,n,r,o,nr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,nr.x),p.addScaledVector(u,nr.y),p.addScaledVector(d,nr.z),p)}static getInterpolatedAttribute(e,n,r,o,l,u){return Zu.setScalar(0),Qu.setScalar(0),Ju.setScalar(0),Zu.fromBufferAttribute(e,n),Qu.fromBufferAttribute(e,r),Ju.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Zu,l.x),u.addScaledVector(Qu,l.y),u.addScaledVector(Ju,l.z),u}static isFrontFacing(e,n,r,o){return Si.subVectors(r,n),tr.subVectors(e,n),Si.cross(tr).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),tr.subVectors(this.a,this.b),Si.cross(tr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return Mi.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,d;Xs.subVectors(o,r),qs.subVectors(l,r),$u.subVectors(e,r);const p=Xs.dot($u),m=qs.dot($u);if(p<=0&&m<=0)return n.copy(r);Yu.subVectors(e,o);const x=Xs.dot(Yu),v=qs.dot(Yu);if(x>=0&&v<=x)return n.copy(o);const y=p*v-x*m;if(y<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(r).addScaledVector(Xs,u);Ku.subVectors(e,l);const S=Xs.dot(Ku),T=qs.dot(Ku);if(T>=0&&S<=T)return n.copy(l);const N=S*m-p*T;if(N<=0&&m>=0&&T<=0)return d=m/(m-T),n.copy(r).addScaledVector(qs,d);const M=x*T-S*v;if(M<=0&&v-x>=0&&S-T>=0)return Rm.subVectors(l,o),d=(v-x)/(v-x+(S-T)),n.copy(o).addScaledVector(Rm,d);const _=1/(M+N+y);return u=N*_,d=y*_,n.copy(r).addScaledVector(Xs,u).addScaledVector(qs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function ed(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Nt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Rt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Rt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Rt.workingColorSpace){if(e=wf(e,1),n=bt(n,0,1),r=bt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=ed(u,l,e+1/3),this.g=ed(u,l,e),this.b=ed(u,l,e-1/3)}return Rt.colorSpaceToWorking(this,o),this}setStyle(e,n=Jn){function r(l){l!==void 0&&parseFloat(l)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:ut("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jn){const r=I0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}copyLinearToSRGB(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return Rt.workingToColorSpace(Tn.copy(this),e),Math.round(bt(Tn.r*255,0,255))*65536+Math.round(bt(Tn.g*255,0,255))*256+Math.round(bt(Tn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Rt.workingColorSpace){Rt.workingToColorSpace(Tn.copy(this),n);const r=Tn.r,o=Tn.g,l=Tn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const x=(d+u)/2;if(d===u)p=0,m=0;else{const v=u-d;switch(m=x<=.5?v/(u+d):v/(2-u-d),u){case r:p=(o-l)/v+(o<l?6:0);break;case o:p=(l-r)/v+2;break;case l:p=(r-o)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,n=Rt.workingColorSpace){return Rt.workingToColorSpace(Tn.copy(this),n),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Jn){Rt.workingToColorSpace(Tn.copy(this),e);const n=Tn.r,r=Tn.g,o=Tn.b;return e!==Jn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+n,Ir.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Ir),e.getHSL(Cl);const r=no(Ir.h,Cl.h,n),o=no(Ir.s,Cl.s,n),l=no(Ir.l,Cl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Nt;Nt.NAMES=I0;let A_=0;class ho extends ca{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=ta,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=_d,this.blendEquation=cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ks,this.stencilZFail=ks,this.stencilZPass=ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){ut(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){ut(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(r.blending=this.blending),this.side!==kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==vd&&(r.blendSrc=this.blendSrc),this.blendDst!==_d&&(r.blendDst=this.blendDst),this.blendEquation!==cs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class io extends ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.combine=p0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=new re,Al=new Tt;let R_=0;class zi{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=hm,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Al.fromBufferAttribute(this,n),Al.applyMatrix3(e),this.setXY(n,Al.x,Al.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix3(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=ea(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ea(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ea(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ea(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ea(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),r=Un(r,this.array),o=Un(o,this.array),l=Un(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hm&&(e.usage=this.usage),e}}class U0 extends zi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class F0 extends zi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class mn extends zi{constructor(e,n,r){super(new Float32Array(e),n,r)}}let N_=0;const ci=new Qt,td=new Rn,$s=new re,Zn=new fo,Ya=new fo,pn=new re;class ui extends ca{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P0(e)?F0:U0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,n,r){return ci.makeTranslation(e,n,r),this.applyMatrix4(ci),this}scale(e,n,r){return ci.makeScale(e,n,r),this.applyMatrix4(ci),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($s).negate(),this.translate($s.x,$s.y,$s.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new mn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Zn.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const d=n[l];Ya.setFromBufferAttribute(d),this.morphTargetsRelative?(pn.addVectors(Zn.min,Ya.min),Zn.expandByPoint(pn),pn.addVectors(Zn.max,Ya.max),Zn.expandByPoint(pn)):(Zn.expandByPoint(Ya.min),Zn.expandByPoint(Ya.max))}Zn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)pn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(pn));if(n)for(let l=0,u=n.length;l<u;l++){const d=n[l],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)pn.fromBufferAttribute(d,m),p&&($s.fromBufferAttribute(e,m),pn.add($s)),o=Math.max(o,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let G=0;G<r.count;G++)d[G]=new re,p[G]=new re;const m=new re,x=new re,v=new re,y=new Tt,S=new Tt,T=new Tt,N=new re,M=new re;function _(G,b,P){m.fromBufferAttribute(r,G),x.fromBufferAttribute(r,b),v.fromBufferAttribute(r,P),y.fromBufferAttribute(l,G),S.fromBufferAttribute(l,b),T.fromBufferAttribute(l,P),x.sub(m),v.sub(m),S.sub(y),T.sub(y);const z=1/(S.x*T.y-T.x*S.y);isFinite(z)&&(N.copy(x).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(z),M.copy(v).multiplyScalar(S.x).addScaledVector(x,-T.x).multiplyScalar(z),d[G].add(N),d[b].add(N),d[P].add(N),p[G].add(M),p[b].add(M),p[P].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let G=0,b=C.length;G<b;++G){const P=C[G],z=P.start,Q=P.count;for(let Z=z,X=z+Q;Z<X;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new re,A=new re,I=new re,D=new re;function F(G){I.fromBufferAttribute(o,G),D.copy(I);const b=d[G];L.copy(b),L.sub(I.multiplyScalar(I.dot(b))).normalize(),A.crossVectors(D,b);const z=A.dot(p[G])<0?-1:1;u.setXYZW(G,L.x,L.y,L.z,z)}for(let G=0,b=C.length;G<b;++G){const P=C[G],z=P.start,Q=P.count;for(let Z=z,X=z+Q;Z<X;Z+=3)F(e.getX(Z+0)),F(e.getX(Z+1)),F(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new zi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new re,l=new re,u=new re,d=new re,p=new re,m=new re,x=new re,v=new re;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),N=e.getX(y+1),M=e.getX(y+2);o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,N),u.fromBufferAttribute(n,M),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,N),m.fromBufferAttribute(r,M),d.add(x),p.add(x),m.add(x),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(N,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)o.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)pn.fromBufferAttribute(e,n),pn.normalize(),e.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,v=d.normalized,y=new m.constructor(p.length*x);let S=0,T=0;for(let N=0,M=p.length;N<M;N++){d.isInterleavedBufferAttribute?S=p[N]*d.data.stride+d.offset:S=p[N]*x;for(let _=0;_<x;_++)y[T++]=m[S++]}return new zi(y,x,v)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ui,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let x=0,v=m.length;x<v;x++){const y=m[x],S=e(y,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let v=0,y=m.length;v<y;v++){const S=m[v];x.push(S.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(n))}const l=e.morphAttributes;for(const m in l){const x=[],v=l[m];for(let y=0,S=v.length;y<S;y++)x.push(v[y].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nm=new Qt,is=new S_,Rl=new bf,Pm=new re,Nl=new re,Pl=new re,Ll=new re,nd=new re,Dl=new re,Lm=new re,Il=new re;class ct extends Rn{constructor(e=new ui,n=new io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Dl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=d[p],v=l[p];x!==0&&(nd.fromBufferAttribute(v,e),u?Dl.addScaledVector(nd,x):Dl.addScaledVector(nd.sub(n),x))}n.add(Dl)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(l),is.copy(e.ray).recast(e.near),!(Rl.containsPoint(is.origin)===!1&&(is.intersectSphere(Rl,Pm)===null||is.origin.distanceToSquared(Pm)>(e.far-e.near)**2))&&(Nm.copy(l).invert(),is.copy(e.ray).applyMatrix4(Nm),!(r.boundingBox!==null&&is.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,is)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,N=y.length;T<N;T++){const M=y[T],_=u[M.materialIndex],C=Math.max(M.start,S.start),L=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let A=C,I=L;A<I;A+=3){const D=d.getX(A),F=d.getX(A+1),G=d.getX(A+2);o=Ul(this,_,e,r,m,x,v,D,F,G),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),N=Math.min(d.count,S.start+S.count);for(let M=T,_=N;M<_;M+=3){const C=d.getX(M),L=d.getX(M+1),A=d.getX(M+2);o=Ul(this,u,e,r,m,x,v,C,L,A),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,N=y.length;T<N;T++){const M=y[T],_=u[M.materialIndex],C=Math.max(M.start,S.start),L=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let A=C,I=L;A<I;A+=3){const D=A,F=A+1,G=A+2;o=Ul(this,_,e,r,m,x,v,D,F,G),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),N=Math.min(p.count,S.start+S.count);for(let M=T,_=N;M<_;M+=3){const C=M,L=M+1,A=M+2;o=Ul(this,u,e,r,m,x,v,C,L,A),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function P_(s,e,n,r,o,l,u,d){let p;if(e.side===Hn?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===kr,d),p===null)return null;Il.copy(d),Il.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Il);return m<n.near||m>n.far?null:{distance:m,point:Il.clone(),object:s}}function Ul(s,e,n,r,o,l,u,d,p,m){s.getVertexPosition(d,Nl),s.getVertexPosition(p,Pl),s.getVertexPosition(m,Ll);const x=P_(s,e,n,r,Nl,Pl,Ll,Lm);if(x){const v=new re;Mi.getBarycoord(Lm,Nl,Pl,Ll,v),o&&(x.uv=Mi.getInterpolatedAttribute(o,d,p,m,v,new Tt)),l&&(x.uv1=Mi.getInterpolatedAttribute(l,d,p,m,v,new Tt)),u&&(x.normal=Mi.getInterpolatedAttribute(u,d,p,m,v,new re),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new re,materialIndex:0};Mi.getNormal(Nl,Pl,Ll,y.normal),x.face=y,x.barycoord=v}return x}class vn extends ui{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],v=[];let y=0,S=0;T("z","y","x",-1,-1,r,n,e,u,l,0),T("z","y","x",1,-1,r,n,-e,u,l,1),T("x","z","y",1,1,e,r,n,o,u,2),T("x","z","y",1,-1,e,r,-n,o,u,3),T("x","y","z",1,-1,e,n,r,o,l,4),T("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new mn(m,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(v,2));function T(N,M,_,C,L,A,I,D,F,G,b){const P=A/F,z=I/G,Q=A/2,Z=I/2,X=D/2,J=F+1,H=G+1;let $=0,j=0;const oe=new re;for(let se=0;se<H;se++){const O=se*z-Z;for(let ee=0;ee<J;ee++){const ge=ee*P-Q;oe[N]=ge*C,oe[M]=O*L,oe[_]=X,m.push(oe.x,oe.y,oe.z),oe[N]=0,oe[M]=0,oe[_]=D>0?1:-1,x.push(oe.x,oe.y,oe.z),v.push(ee/F),v.push(1-se/G),$+=1}}for(let se=0;se<G;se++)for(let O=0;O<F;O++){const ee=y+O+J*se,ge=y+O+J*(se+1),Ee=y+(O+1)+J*(se+1),De=y+(O+1)+J*se;p.push(ee,ge,De),p.push(ge,Ee,De),j+=6}d.addGroup(S,j,b),S+=j,y+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function la(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Fn(s){const e={};for(let n=0;n<s.length;n++){const r=la(s[n]);for(const o in r)e[o]=r[o]}return e}function L_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function O0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const D_={clone:la,merge:Fn};var I_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gi extends ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=I_,this.fragmentShader=U_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=L_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class k0 extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new re,Dm=new Tt,Im=new Tt;class Gn extends k0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=oa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,n){return this.getViewBounds(e,Dm,Im),n.subVectors(Im,Dm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(to*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ys=-90,Ks=1;class F_ extends Rn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Gn(Ys,Ks,e,n);o.layers=this.layers,this.add(o);const l=new Gn(Ys,Ks,e,n);l.layers=this.layers,this.add(l);const u=new Gn(Ys,Ks,e,n);u.layers=this.layers,this.add(u);const d=new Gn(Ys,Ks,e,n);d.layers=this.layers,this.add(d);const p=new Gn(Ys,Ks,e,n);p.layers=this.layers,this.add(p);const m=new Gn(Ys,Ks,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,d,p]=n;for(const m of n)this.remove(m);if(e===Oi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Yl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,m,x]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,l),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,o),e.render(n,x),e.setRenderTarget(v,y,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class B0 extends An{constructor(e=[],n=ps,r,o,l,u,d,p,m,x){super(e,n,r,o,l,u,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z0 extends Bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new B0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new vn(5,5,5),l=new Gi({name:"CubemapFromEquirect",uniforms:la(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:ar});l.uniforms.tEquirect.value=n;const u=new ct(o,l),d=n.minFilter;return n.minFilter===ds&&(n.minFilter=Cn),new F_(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}class Ii extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O_={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const N of e.hand.values()){const M=n.getJointPose(N,r),_=this._getHandJoint(m,N);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=x.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&y>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(O_)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ii;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class Tf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Nt(e),this.density=n}clone(){return new Tf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class k_ extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ji,this.environmentIntensity=1,this.environmentRotation=new ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class B_ extends An{constructor(e=null,n=1,r=1,o,l,u,d,p,m=_n,x=_n,v,y){super(null,u,d,p,m,x,o,l,v,y),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rd=new re,z_=new re,V_=new mt;class os{constructor(e=new re(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=rd.subVectors(r,n).cross(z_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(rd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||V_.getNormalMatrix(e),o=this.coplanarPoint(rd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new bf,j_=new Tt(.5,.5),Fl=new re;class Cf{constructor(e=new os,n=new os,r=new os,o=new os,l=new os,u=new os){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Oi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],m=l[3],x=l[4],v=l[5],y=l[6],S=l[7],T=l[8],N=l[9],M=l[10],_=l[11],C=l[12],L=l[13],A=l[14],I=l[15];if(o[0].setComponents(m-u,S-x,_-T,I-C).normalize(),o[1].setComponents(m+u,S+x,_+T,I+C).normalize(),o[2].setComponents(m+d,S+v,_+N,I+L).normalize(),o[3].setComponents(m-d,S-v,_-N,I-L).normalize(),r)o[4].setComponents(p,y,M,A).normalize(),o[5].setComponents(m-p,S-y,_-M,I-A).normalize();else if(o[4].setComponents(m-p,S-y,_-M,I-A).normalize(),n===Oi)o[5].setComponents(m+p,S+y,_+M,I+A).normalize();else if(n===Yl)o[5].setComponents(p,y,M,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(e){rs.center.set(0,0,0);const n=j_.distanceTo(e.center);return rs.radius=.7071067811865476+n,rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Fl.x=o.normal.x>0?e.max.x:e.min.x,Fl.y=o.normal.y>0?e.max.y:e.min.y,Fl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lo extends An{constructor(e,n,r=Vi,o,l,u,d=_n,p=_n,m,x=cr,v=1){if(x!==cr&&x!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:n,depth:v};super(y,o,l,u,d,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ef(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class G_ extends lo{constructor(e,n=Vi,r=ps,o,l,u=_n,d=_n,p,m=cr){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,n,r,o,l,u,d,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class V0 extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qn extends ui{constructor(e=1,n=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],v=[],y=[],S=[];let T=0;const N=[],M=r/2;let _=0;C(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new mn(v,3)),this.setAttribute("normal",new mn(y,3)),this.setAttribute("uv",new mn(S,2));function C(){const A=new re,I=new re;let D=0;const F=(n-e)/r;for(let G=0;G<=l;G++){const b=[],P=G/l,z=P*(n-e)+e;for(let Q=0;Q<=o;Q++){const Z=Q/o,X=Z*p+d,J=Math.sin(X),H=Math.cos(X);I.x=z*J,I.y=-P*r+M,I.z=z*H,v.push(I.x,I.y,I.z),A.set(J,F,H).normalize(),y.push(A.x,A.y,A.z),S.push(Z,1-P),b.push(T++)}N.push(b)}for(let G=0;G<o;G++)for(let b=0;b<l;b++){const P=N[b][G],z=N[b+1][G],Q=N[b+1][G+1],Z=N[b][G+1];(e>0||b!==0)&&(x.push(P,z,Z),D+=3),(n>0||b!==l-1)&&(x.push(z,Q,Z),D+=3)}m.addGroup(_,D,0),_+=D}function L(A){const I=T,D=new Tt,F=new re;let G=0;const b=A===!0?e:n,P=A===!0?1:-1;for(let Q=1;Q<=o;Q++)v.push(0,M*P,0),y.push(0,P,0),S.push(.5,.5),T++;const z=T;for(let Q=0;Q<=o;Q++){const X=Q/o*p+d,J=Math.cos(X),H=Math.sin(X);F.x=b*H,F.y=M*P,F.z=b*J,v.push(F.x,F.y,F.z),y.push(0,P,0),D.x=J*.5+.5,D.y=H*.5*P+.5,S.push(D.x,D.y),T++}for(let Q=0;Q<o;Q++){const Z=I+Q,X=z+Q;A===!0?x.push(X,X+1,Z):x.push(X+1,X,Z),G+=3}m.addGroup(_,G,A===!0?1:2),_+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Di extends Qn{constructor(e=1,n=1,r=32,o=1,l=!1,u=0,d=Math.PI*2){super(0,e,n,r,o,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Di(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Af extends ui{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const l=[],u=[];d(o),m(r),x(),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(l.slice(),3)),this.setAttribute("uv",new mn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(C){const L=new re,A=new re,I=new re;for(let D=0;D<n.length;D+=3)S(n[D+0],L),S(n[D+1],A),S(n[D+2],I),p(L,A,I,C)}function p(C,L,A,I){const D=I+1,F=[];for(let G=0;G<=D;G++){F[G]=[];const b=C.clone().lerp(A,G/D),P=L.clone().lerp(A,G/D),z=D-G;for(let Q=0;Q<=z;Q++)Q===0&&G===D?F[G][Q]=b:F[G][Q]=b.clone().lerp(P,Q/z)}for(let G=0;G<D;G++)for(let b=0;b<2*(D-G)-1;b++){const P=Math.floor(b/2);b%2===0?(y(F[G][P+1]),y(F[G+1][P]),y(F[G][P])):(y(F[G][P+1]),y(F[G+1][P+1]),y(F[G+1][P]))}}function m(C){const L=new re;for(let A=0;A<l.length;A+=3)L.x=l[A+0],L.y=l[A+1],L.z=l[A+2],L.normalize().multiplyScalar(C),l[A+0]=L.x,l[A+1]=L.y,l[A+2]=L.z}function x(){const C=new re;for(let L=0;L<l.length;L+=3){C.x=l[L+0],C.y=l[L+1],C.z=l[L+2];const A=M(C)/2/Math.PI+.5,I=_(C)/Math.PI+.5;u.push(A,1-I)}T(),v()}function v(){for(let C=0;C<u.length;C+=6){const L=u[C+0],A=u[C+2],I=u[C+4],D=Math.max(L,A,I),F=Math.min(L,A,I);D>.9&&F<.1&&(L<.2&&(u[C+0]+=1),A<.2&&(u[C+2]+=1),I<.2&&(u[C+4]+=1))}}function y(C){l.push(C.x,C.y,C.z)}function S(C,L){const A=C*3;L.x=e[A+0],L.y=e[A+1],L.z=e[A+2]}function T(){const C=new re,L=new re,A=new re,I=new re,D=new Tt,F=new Tt,G=new Tt;for(let b=0,P=0;b<l.length;b+=9,P+=6){C.set(l[b+0],l[b+1],l[b+2]),L.set(l[b+3],l[b+4],l[b+5]),A.set(l[b+6],l[b+7],l[b+8]),D.set(u[P+0],u[P+1]),F.set(u[P+2],u[P+3]),G.set(u[P+4],u[P+5]),I.copy(C).add(L).add(A).divideScalar(3);const z=M(I);N(D,P+0,C,z),N(F,P+2,L,z),N(G,P+4,A,z)}}function N(C,L,A,I){I<0&&C.x===1&&(u[L]=C.x-1),A.x===0&&A.z===0&&(u[L]=I/2/Math.PI+.5)}function M(C){return Math.atan2(C.z,-C.x)}function _(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Af(e.vertices,e.indices,e.radius,e.detail)}}class Rf extends Af{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Rf(e.radius,e.detail)}}class hs extends ui{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,x=p+1,v=e/d,y=n/p,S=[],T=[],N=[],M=[];for(let _=0;_<x;_++){const C=_*y-u;for(let L=0;L<m;L++){const A=L*v-l;T.push(A,-C,0),N.push(0,0,1),M.push(L/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let C=0;C<d;C++){const L=C+m*_,A=C+m*(_+1),I=C+1+m*(_+1),D=C+1+m*_;S.push(L,A,D),S.push(A,I,D)}this.setIndex(S),this.setAttribute("position",new mn(T,3)),this.setAttribute("normal",new mn(N,3)),this.setAttribute("uv",new mn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Kl extends ui{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const x=[],v=new re,y=new re,S=[],T=[],N=[],M=[];for(let _=0;_<=r;_++){const C=[],L=_/r;let A=0;_===0&&u===0?A=.5/n:_===r&&p===Math.PI&&(A=-.5/n);for(let I=0;I<=n;I++){const D=I/n;v.x=-e*Math.cos(o+D*l)*Math.sin(u+L*d),v.y=e*Math.cos(u+L*d),v.z=e*Math.sin(o+D*l)*Math.sin(u+L*d),T.push(v.x,v.y,v.z),y.copy(v).normalize(),N.push(y.x,y.y,y.z),M.push(D+A,1-L),C.push(m++)}x.push(C)}for(let _=0;_<r;_++)for(let C=0;C<n;C++){const L=x[_][C+1],A=x[_][C],I=x[_+1][C],D=x[_+1][C+1];(_!==0||u>0)&&S.push(L,A,D),(_!==r-1||p<Math.PI)&&S.push(A,I,D)}this.setIndex(S),this.setAttribute("position",new mn(T,3)),this.setAttribute("normal",new mn(N,3)),this.setAttribute("uv",new mn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class H_ extends Gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xt extends ho{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=N0,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W_ extends ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class X_ extends ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class q_{constructor(e,n,r){const o=this;let l=!1,u=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=r,this._abortController=null,this.itemStart=function(x){d++,l===!1&&o.onStart!==void 0&&o.onStart(x,u,d),l=!0},this.itemEnd=function(x){u++,o.onProgress!==void 0&&o.onProgress(x,u,d),u===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,v){return m.push(x,v),this},this.removeHandler=function(x){const v=m.indexOf(x);return v!==-1&&m.splice(v,2),this},this.getHandler=function(x){for(let v=0,y=m.length;v<y;v+=2){const S=m[v],T=m[v+1];if(S.global&&(S.lastIndex=0),S.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const $_=new q_;class Nf{constructor(e){this.manager=e!==void 0?e:$_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const r=this;return new Promise(function(o,l){r.load(e,o,n,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Nf.DEFAULT_MATERIAL_NAME="__DEFAULT";const Zs=new WeakMap;class Y_ extends Nf{constructor(e){super(e)}load(e,n,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=sd.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){n&&n(u),l.manager.itemEnd(e)},0);else{let v=Zs.get(u);v===void 0&&(v=[],Zs.set(u,v)),v.push({onLoad:n,onError:o})}return u}const d=ao("img");function p(){x(),n&&n(this);const v=Zs.get(this)||[];for(let y=0;y<v.length;y++){const S=v[y];S.onLoad&&S.onLoad(this)}Zs.delete(this),l.manager.itemEnd(e)}function m(v){x(),o&&o(v),sd.remove(`image:${e}`);const y=Zs.get(this)||[];for(let S=0;S<y.length;S++){const T=y[S];T.onError&&T.onError(v)}Zs.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function x(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),sd.add(`image:${e}`,d),l.manager.itemStart(e),d.src=e,d}}class K_ extends Nf{constructor(e){super(e)}load(e,n,r,o){const l=new An,u=new Y_(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){l.image=d,l.needsUpdate=!0,n!==void 0&&n(l)},r,o),l}}class Pf extends Rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Nt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ad=new Qt,Um=new re,Fm=new re;class j0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cf,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Um.setFromMatrixPosition(e.matrixWorld),n.position.copy(Um),Fm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Fm),n.updateMatrixWorld(),ad.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ad,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(ad)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Z_ extends j0{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,r=oa*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||n.far;(r!==n.fov||o!==n.aspect||l!==n.far)&&(n.fov=r,n.aspect=o,n.far=l,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Q_ extends Pf{constructor(e,n,r=0,o=Math.PI/3,l=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new Z_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class J_ extends j0{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ol extends Pf{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new J_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class G0 extends k0{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class e1 extends Pf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class t1 extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class n1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Om(s,e,n,r){const o=i1(r);switch(n){case C0:return s*e;case R0:return s*e/o.components*o.byteLength;case vf:return s*e/o.components*o.byteLength;case sa:return s*e*2/o.components*o.byteLength;case _f:return s*e*2/o.components*o.byteLength;case A0:return s*e*3/o.components*o.byteLength;case wi:return s*e*4/o.components*o.byteLength;case yf:return s*e*4/o.components*o.byteLength;case jl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hl:case Wl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:case Id:return Math.max(s,16)*Math.max(e,8)/4;case Pd:case Dd:return Math.max(s,8)*Math.max(e,8)/2;case Ud:case Fd:case kd:case Bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Od:case zd:case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case qd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case $d:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ef:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case tf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case nf:case rf:case sf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case af:case of:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lf:case cf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function i1(s){switch(s){case ei:case w0:return{byteLength:1,components:1};case ro:case E0:case lr:return{byteLength:2,components:1};case gf:case xf:return{byteLength:2,components:4};case Vi:case mf:case Fi:return{byteLength:4,components:1};case b0:case T0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pf}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function H0(){let s=null,e=!1,n=null,r=null;function o(l,u){n(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function r1(s){const e=new WeakMap;function n(d,p){const m=d.array,x=d.usage,v=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,x),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const x=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,x);else{v.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<v.length;S++){const T=v[y],N=v[S];N.start<=T.start+T.count+1?T.count=Math.max(T.count,N.start+N.count-T.start):(++y,v[y]=N)}v.length=y+1;for(let S=0,T=v.length;S<T;S++){const N=v[S];s.bufferSubData(m,N.start*x.BYTES_PER_ELEMENT,x,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:u}}var s1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a1=`#ifdef USE_ALPHAHASH
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
#endif`,o1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,l1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,c1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,u1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,d1=`#ifdef USE_AOMAP
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
#endif`,f1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,h1=`#ifdef USE_BATCHING
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
#endif`,p1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,v1=`#ifdef USE_IRIDESCENCE
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
#endif`,_1=`#ifdef USE_BUMPMAP
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
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,C1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,A1=`#define PI 3.141592653589793
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
} // validated`,R1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N1=`vec3 transformedNormal = objectNormal;
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
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,L1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,D1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,I1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,U1="gl_FragColor = linearToOutputTexel( gl_FragColor );",F1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,O1=`#ifdef USE_ENVMAP
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
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,B1=`#ifdef USE_ENVMAP
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
#endif`,z1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V1=`#ifdef USE_ENVMAP
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
#endif`,j1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,G1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X1=`#ifdef USE_GRADIENTMAP
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
}`,q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K1=`uniform bool receiveShadow;
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
#endif`,Z1=`#ifdef USE_ENVMAP
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
#endif`,Q1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ny=`PhysicalMaterial material;
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
#endif`,iy=`uniform sampler2D dfgLUT;
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
}`,ry=`
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ay=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,py=`#if defined( USE_POINTS_UV )
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
#endif`,my=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_y=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yy=`#ifdef USE_MORPHTARGETS
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
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ty=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
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
#endif`,Ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ny=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Iy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,By=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gy=`float getShadowMask() {
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
}`,Hy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,$y=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ky=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sS=`uniform sampler2D t2D;
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
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`#include <common>
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
}`,dS=`#if DEPTH_PACKING == 3200
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
}`,fS=`#define DISTANCE
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
}`,hS=`#define DISTANCE
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gS=`uniform float scale;
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
}`,xS=`uniform vec3 diffuse;
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
}`,vS=`#include <common>
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
}`,_S=`uniform vec3 diffuse;
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
}`,yS=`#define LAMBERT
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
}`,SS=`#define LAMBERT
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
}`,MS=`#define MATCAP
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
}`,wS=`#define MATCAP
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
}`,ES=`#define NORMAL
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
}`,bS=`#define NORMAL
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
}`,TS=`#define PHONG
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
}`,CS=`#define PHONG
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
}`,AS=`#define STANDARD
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
}`,RS=`#define STANDARD
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
}`,NS=`#define TOON
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
}`,PS=`#define TOON
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
}`,LS=`uniform float size;
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
}`,DS=`uniform vec3 diffuse;
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
}`,IS=`#include <common>
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
}`,US=`uniform vec3 color;
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
}`,FS=`uniform float rotation;
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
}`,OS=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:s1,alphahash_pars_fragment:a1,alphamap_fragment:o1,alphamap_pars_fragment:l1,alphatest_fragment:c1,alphatest_pars_fragment:u1,aomap_fragment:d1,aomap_pars_fragment:f1,batching_pars_vertex:h1,batching_vertex:p1,begin_vertex:m1,beginnormal_vertex:g1,bsdfs:x1,iridescence_fragment:v1,bumpmap_pars_fragment:_1,clipping_planes_fragment:y1,clipping_planes_pars_fragment:S1,clipping_planes_pars_vertex:M1,clipping_planes_vertex:w1,color_fragment:E1,color_pars_fragment:b1,color_pars_vertex:T1,color_vertex:C1,common:A1,cube_uv_reflection_fragment:R1,defaultnormal_vertex:N1,displacementmap_pars_vertex:P1,displacementmap_vertex:L1,emissivemap_fragment:D1,emissivemap_pars_fragment:I1,colorspace_fragment:U1,colorspace_pars_fragment:F1,envmap_fragment:O1,envmap_common_pars_fragment:k1,envmap_pars_fragment:B1,envmap_pars_vertex:z1,envmap_physical_pars_fragment:Z1,envmap_vertex:V1,fog_vertex:j1,fog_pars_vertex:G1,fog_fragment:H1,fog_pars_fragment:W1,gradientmap_pars_fragment:X1,lightmap_pars_fragment:q1,lights_lambert_fragment:$1,lights_lambert_pars_fragment:Y1,lights_pars_begin:K1,lights_toon_fragment:Q1,lights_toon_pars_fragment:J1,lights_phong_fragment:ey,lights_phong_pars_fragment:ty,lights_physical_fragment:ny,lights_physical_pars_fragment:iy,lights_fragment_begin:ry,lights_fragment_maps:sy,lights_fragment_end:ay,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ly,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:uy,map_fragment:dy,map_pars_fragment:fy,map_particle_fragment:hy,map_particle_pars_fragment:py,metalnessmap_fragment:my,metalnessmap_pars_fragment:gy,morphinstance_vertex:xy,morphcolor_vertex:vy,morphnormal_vertex:_y,morphtarget_pars_vertex:yy,morphtarget_vertex:Sy,normal_fragment_begin:My,normal_fragment_maps:wy,normal_pars_fragment:Ey,normal_pars_vertex:by,normal_vertex:Ty,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Ay,clearcoat_normal_fragment_maps:Ry,clearcoat_pars_fragment:Ny,iridescence_pars_fragment:Py,opaque_fragment:Ly,packing:Dy,premultiplied_alpha_fragment:Iy,project_vertex:Uy,dithering_fragment:Fy,dithering_pars_fragment:Oy,roughnessmap_fragment:ky,roughnessmap_pars_fragment:By,shadowmap_pars_fragment:zy,shadowmap_pars_vertex:Vy,shadowmap_vertex:jy,shadowmask_pars_fragment:Gy,skinbase_vertex:Hy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:qy,specularmap_fragment:$y,specularmap_pars_fragment:Yy,tonemapping_fragment:Ky,tonemapping_pars_fragment:Zy,transmission_fragment:Qy,transmission_pars_fragment:Jy,uv_pars_fragment:eS,uv_pars_vertex:tS,uv_vertex:nS,worldpos_vertex:iS,background_vert:rS,background_frag:sS,backgroundCube_vert:aS,backgroundCube_frag:oS,cube_vert:lS,cube_frag:cS,depth_vert:uS,depth_frag:dS,distance_vert:fS,distance_frag:hS,equirect_vert:pS,equirect_frag:mS,linedashed_vert:gS,linedashed_frag:xS,meshbasic_vert:vS,meshbasic_frag:_S,meshlambert_vert:yS,meshlambert_frag:SS,meshmatcap_vert:MS,meshmatcap_frag:wS,meshnormal_vert:ES,meshnormal_frag:bS,meshphong_vert:TS,meshphong_frag:CS,meshphysical_vert:AS,meshphysical_frag:RS,meshtoon_vert:NS,meshtoon_frag:PS,points_vert:LS,points_frag:DS,shadow_vert:IS,shadow_frag:US,sprite_vert:FS,sprite_frag:OS},Oe={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},Ui={basic:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Fn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Fn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Fn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Nt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Fn([Oe.points,Oe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Fn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Fn([Oe.common,Oe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Fn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Fn([Oe.sprite,Oe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Fn([Oe.common,Oe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Fn([Oe.lights,Oe.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ui.physical={uniforms:Fn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const kl={r:0,b:0,g:0},ss=new ji,kS=new Qt;function BS(s,e,n,r,o,l,u){const d=new Nt(0);let p=l===!0?0:1,m,x,v=null,y=0,S=null;function T(L){let A=L.isScene===!0?L.background:null;return A&&A.isTexture&&(A=(L.backgroundBlurriness>0?n:e).get(A)),A}function N(L){let A=!1;const I=T(L);I===null?_(d,p):I&&I.isColor&&(_(I,1),A=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,u):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(L,A){const I=T(A);I&&(I.isCubeTexture||I.mapping===Zl)?(x===void 0&&(x=new ct(new vn(1,1,1),new Gi({name:"BackgroundCubeMaterial",uniforms:la(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(D,F,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),ss.copy(A.backgroundRotation),ss.x*=-1,ss.y*=-1,ss.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ss.y*=-1,ss.z*=-1),x.material.uniforms.envMap.value=I,x.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(kS.makeRotationFromEuler(ss)),x.material.toneMapped=Rt.getTransfer(I.colorSpace)!==kt,(v!==I||y!==I.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,v=I,y=I.version,S=s.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new ct(new hs(2,2),new Gi({name:"BackgroundMaterial",uniforms:la(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(I.colorSpace)!==kt,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||y!==I.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=I,y=I.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,A){L.getRGB(kl,O0(s)),r.buffers.color.setClear(kl.r,kl.g,kl.b,A,u)}function C(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,A=1){d.set(L),p=A,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(d,p)},render:N,addToRenderList:M,dispose:C}}function zS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function d(P,z,Q,Z,X){let J=!1;const H=v(Z,Q,z);l!==H&&(l=H,m(l.object)),J=S(P,Z,Q,X),J&&T(P,Z,Q,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(J||u)&&(u=!1,A(P,z,Q,Z),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function p(){return s.createVertexArray()}function m(P){return s.bindVertexArray(P)}function x(P){return s.deleteVertexArray(P)}function v(P,z,Q){const Z=Q.wireframe===!0;let X=r[P.id];X===void 0&&(X={},r[P.id]=X);let J=X[z.id];J===void 0&&(J={},X[z.id]=J);let H=J[Z];return H===void 0&&(H=y(p()),J[Z]=H),H}function y(P){const z=[],Q=[],Z=[];for(let X=0;X<n;X++)z[X]=0,Q[X]=0,Z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Q,attributeDivisors:Z,object:P,attributes:{},index:null}}function S(P,z,Q,Z){const X=l.attributes,J=z.attributes;let H=0;const $=Q.getAttributes();for(const j in $)if($[j].location>=0){const se=X[j];let O=J[j];if(O===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(O=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(O=P.instanceColor)),se===void 0||se.attribute!==O||O&&se.data!==O.data)return!0;H++}return l.attributesNum!==H||l.index!==Z}function T(P,z,Q,Z){const X={},J=z.attributes;let H=0;const $=Q.getAttributes();for(const j in $)if($[j].location>=0){let se=J[j];se===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(se=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(se=P.instanceColor));const O={};O.attribute=se,se&&se.data&&(O.data=se.data),X[j]=O,H++}l.attributes=X,l.attributesNum=H,l.index=Z}function N(){const P=l.newAttributes;for(let z=0,Q=P.length;z<Q;z++)P[z]=0}function M(P){_(P,0)}function _(P,z){const Q=l.newAttributes,Z=l.enabledAttributes,X=l.attributeDivisors;Q[P]=1,Z[P]===0&&(s.enableVertexAttribArray(P),Z[P]=1),X[P]!==z&&(s.vertexAttribDivisor(P,z),X[P]=z)}function C(){const P=l.newAttributes,z=l.enabledAttributes;for(let Q=0,Z=z.length;Q<Z;Q++)z[Q]!==P[Q]&&(s.disableVertexAttribArray(Q),z[Q]=0)}function L(P,z,Q,Z,X,J,H){H===!0?s.vertexAttribIPointer(P,z,Q,X,J):s.vertexAttribPointer(P,z,Q,Z,X,J)}function A(P,z,Q,Z){N();const X=Z.attributes,J=Q.getAttributes(),H=z.defaultAttributeValues;for(const $ in J){const j=J[$];if(j.location>=0){let oe=X[$];if(oe===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),oe!==void 0){const se=oe.normalized,O=oe.itemSize,ee=e.get(oe);if(ee===void 0)continue;const ge=ee.buffer,Ee=ee.type,De=ee.bytesPerElement,ie=Ee===s.INT||Ee===s.UNSIGNED_INT||oe.gpuType===mf;if(oe.isInterleavedBufferAttribute){const fe=oe.data,_e=fe.stride,ke=oe.offset;if(fe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<j.locationSize;Pe++)_(j.location+Pe,fe.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Pe=0;Pe<j.locationSize;Pe++)M(j.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let Pe=0;Pe<j.locationSize;Pe++)L(j.location+Pe,O/j.locationSize,Ee,se,_e*De,(ke+O/j.locationSize*Pe)*De,ie)}else{if(oe.isInstancedBufferAttribute){for(let fe=0;fe<j.locationSize;fe++)_(j.location+fe,oe.meshPerAttribute);P.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let fe=0;fe<j.locationSize;fe++)M(j.location+fe);s.bindBuffer(s.ARRAY_BUFFER,ge);for(let fe=0;fe<j.locationSize;fe++)L(j.location+fe,O/j.locationSize,Ee,se,O*De,O/j.locationSize*fe*De,ie)}}else if(H!==void 0){const se=H[$];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(j.location,se);break;case 3:s.vertexAttrib3fv(j.location,se);break;case 4:s.vertexAttrib4fv(j.location,se);break;default:s.vertexAttrib1fv(j.location,se)}}}}C()}function I(){G();for(const P in r){const z=r[P];for(const Q in z){const Z=z[Q];for(const X in Z)x(Z[X].object),delete Z[X];delete z[Q]}delete r[P]}}function D(P){if(r[P.id]===void 0)return;const z=r[P.id];for(const Q in z){const Z=z[Q];for(const X in Z)x(Z[X].object),delete Z[X];delete z[Q]}delete r[P.id]}function F(P){for(const z in r){const Q=r[z];if(Q[P.id]===void 0)continue;const Z=Q[P.id];for(const X in Z)x(Z[X].object),delete Z[X];delete Q[P.id]}}function G(){b(),u=!0,l!==o&&(l=o,m(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:G,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:F,initAttributes:N,enableAttribute:M,disableUnusedAttributes:C}}function VS(s,e,n){let r;function o(m){r=m}function l(m,x){s.drawArrays(r,m,x),n.update(x,r,1)}function u(m,x,v){v!==0&&(s.drawArraysInstanced(r,m,x,v),n.update(x,r,v))}function d(m,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,v);let S=0;for(let T=0;T<v;T++)S+=x[T];n.update(S,r,1)}function p(m,x,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)u(m[T],x[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,x,0,y,0,v);let T=0;for(let N=0;N<v;N++)T+=x[N]*y[N];n.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function jS(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==wi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const G=F===lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ei&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Fi&&!G)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=p(m);x!==m&&(ut("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const v=n.logarithmicDepthBuffer===!0,y=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:N,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:A,maxSamples:I,samples:D}}function GS(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new os,d=new mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||o;return o=y,r=v.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){n=x(v,y,0)},this.setState=function(v,y,S){const T=v.clippingPlanes,N=v.clipIntersection,M=v.clipShadows,_=s.get(v);if(!o||T===null||T.length===0||l&&!M)l?x(null):m();else{const C=l?0:r,L=C*4;let A=_.clippingState||null;p.value=A,A=x(T,y,L,S);for(let I=0;I!==L;++I)A[I]=n[I];_.clippingState=A,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,y,S,T){const N=v!==null?v.length:0;let M=null;if(N!==0){if(M=p.value,T!==!0||M===null){const _=S+N*4,C=y.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<_)&&(M=new Float32Array(_));for(let L=0,A=S;L!==N;++L,A+=4)u.copy(v[L]).applyMatrix4(C,d),u.normal.toArray(M,A),M[A+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,M}}function HS(s){let e=new WeakMap;function n(u,d){return d===Cd?u.mapping=ps:d===Ad&&(u.mapping=ra),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Cd||d===Ad)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new z0(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Or=4,km=[.125,.215,.35,.446,.526,.582],us=20,WS=256,Ka=new G0,Bm=new Nt;let od=null,ld=0,cd=0,ud=!1;const XS=new re;class zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:d=XS}=l;od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(od,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ps||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),od=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:lr,format:wi,colorSpace:aa,depthBuffer:!1},o=Vm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vm(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=qS(l)),this._blurMaterial=YS(l,e,n),this._ggxMaterial=$S(l,e,n)}return o}_compileMaterial(e){const n=new ct(new ui,e);this._renderer.compile(n,Ka)}_sceneToCubeUV(e,n,r,o,l){const p=new Gn(90,1,n,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(Bm),v.toneMapping=ki,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ct(new vn,new io({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,M=N.material;let _=!1;const C=e.background;C?C.isColor&&(M.color.copy(C),e.background=null,_=!0):(M.color.copy(Bm),_=!0);for(let L=0;L<6;L++){const A=L%3;A===0?(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[L],l.y,l.z)):A===1?(p.up.set(0,0,m[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[L],l.z)):(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[L]));const I=this._cubeSize;Qs(o,A*I,L>2?I:0,I,I),v.setRenderTarget(o),_&&v.render(N,p),v.render(e,p)}v.toneMapping=S,v.autoClear=y,e.background=C}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ps||e.mapping===ra;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Qs(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Ka)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),v=Math.sqrt(m*m-x*x),y=0+m*1.25,S=v*y,{_lodMax:T}=this,N=this._sizeLods[r],M=3*N*(r>T-Or?r-T+Or:0),_=4*(this._cubeSize-N);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=T-n,Qs(l,M,_,3*N,2*N),o.setRenderTarget(l),o.render(d,Ka),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-r,Qs(e,M,_,3*N,2*N),o.setRenderTarget(e),o.render(d,Ka)}_blur(e,n,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[o];v.material=m;const y=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*us-1),N=l/T,M=isFinite(l)?1+Math.floor(x*N):us;M>us&&ut(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${us}`);const _=[];let C=0;for(let F=0;F<us;++F){const G=F/N,b=Math.exp(-G*G/2);_.push(b),F===0?C+=b:F<M&&(C+=2*b)}for(let F=0;F<_.length;F++)_[F]=_[F]/C;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=T,y.mipInt.value=L-r;const A=this._sizeLods[o],I=3*A*(o>L-Or?o-L+Or:0),D=4*(this._cubeSize-A);Qs(n,I,D,3*A,2*A),p.setRenderTarget(n),p.render(v,Ka)}}function qS(s){const e=[],n=[],r=[];let o=s;const l=s-Or+1+km.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>s-Or?p=km[u-s+Or-1]:u===0&&(p=0),n.push(p);const m=1/(d-2),x=-m,v=1+m,y=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,T=6,N=3,M=2,_=1,C=new Float32Array(N*T*S),L=new Float32Array(M*T*S),A=new Float32Array(_*T*S);for(let D=0;D<S;D++){const F=D%3*2/3-1,G=D>2?0:-1,b=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];C.set(b,N*T*D),L.set(y,M*T*D);const P=[D,D,D,D,D,D];A.set(P,_*T*D)}const I=new ui;I.setAttribute("position",new zi(C,N)),I.setAttribute("uv",new zi(L,M)),I.setAttribute("faceIndex",new zi(A,_)),r.push(new ct(I,null)),o>Or&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Vm(s,e,n){const r=new Bi(s,e,n);return r.texture.mapping=Zl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Qs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function $S(s,e,n){return new Gi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:WS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function YS(s,e,n){const r=new Float32Array(us),o=new re(0,1,0);return new Gi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function jm(){return new Gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Gm(){return new Gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function Ql(){return`

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
	`}function KS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Cd||p===Ad,x=p===ps||p===ra;if(m||x){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new zm(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||x&&S&&o(S)?(n===null&&(n=new zm(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function o(d){let p=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function ZS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&oo("WebGLRenderer: "+r+" extension not supported."),o}}}function QS(s,e,n,r){const o={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",u),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(v,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,n.memory.geometries++),y}function p(v){const y=v.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function m(v){const y=[],S=v.index,T=v.attributes.position;let N=0;if(S!==null){const C=S.array;N=S.version;for(let L=0,A=C.length;L<A;L+=3){const I=C[L+0],D=C[L+1],F=C[L+2];y.push(I,D,D,F,F,I)}}else if(T!==void 0){const C=T.array;N=T.version;for(let L=0,A=C.length/3-1;L<A;L+=3){const I=L+0,D=L+1,F=L+2;y.push(I,D,D,F,F,I)}}else return;const M=new(P0(y)?F0:U0)(y,1);M.version=N;const _=l.get(v);_&&e.remove(_),l.set(v,M)}function x(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:p,getWireframeAttribute:x}}function JS(s,e,n){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function p(y,S){s.drawElements(r,S,l,y*u),n.update(S,r,1)}function m(y,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,y*u,T),n.update(S,r,T))}function x(y,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,T);let M=0;for(let _=0;_<T;_++)M+=S[_];n.update(M,r,1)}function v(y,S,T,N){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)m(y[_]/u,S[_],N[_]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,N,0,T);let _=0;for(let C=0;C<T;C++)_+=S[C]*N[C];n.update(_,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function eM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:Dt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function tM(s,e,n){const r=new WeakMap,o=new Zt;function l(u,d,p){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let P=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",P)};var S=P;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,N=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let A=0;T===!0&&(A=1),N===!0&&(A=2),M===!0&&(A=3);let I=d.attributes.position.count*A,D=1;I>e.maxTextureSize&&(D=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*D*4*v),G=new L0(F,I,D,v);G.type=Fi,G.needsUpdate=!0;const b=A*4;for(let z=0;z<v;z++){const Q=_[z],Z=C[z],X=L[z],J=I*D*4*z;for(let H=0;H<Q.count;H++){const $=H*b;T===!0&&(o.fromBufferAttribute(Q,H),F[J+$+0]=o.x,F[J+$+1]=o.y,F[J+$+2]=o.z,F[J+$+3]=0),N===!0&&(o.fromBufferAttribute(Z,H),F[J+$+4]=o.x,F[J+$+5]=o.y,F[J+$+6]=o.z,F[J+$+7]=0),M===!0&&(o.fromBufferAttribute(X,H),F[J+$+8]=o.x,F[J+$+9]=o.y,F[J+$+10]=o.z,F[J+$+11]=X.itemSize===4?o.w:1)}}y={count:v,texture:G,size:new Tt(I,D)},r.set(d,y),d.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let T=0;for(let M=0;M<m.length;M++)T+=m[M];const N=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",N),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function nM(s,e,n,r){let o=new WeakMap;function l(p){const m=r.render.frame,x=p.geometry,v=e.get(p,x);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return v}function u(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:u}}const iM={[m0]:"LINEAR_TONE_MAPPING",[g0]:"REINHARD_TONE_MAPPING",[x0]:"CINEON_TONE_MAPPING",[v0]:"ACES_FILMIC_TONE_MAPPING",[y0]:"AGX_TONE_MAPPING",[S0]:"NEUTRAL_TONE_MAPPING",[_0]:"CUSTOM_TONE_MAPPING"};function rM(s,e,n,r,o){const l=new Bi(e,n,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Bi(e,n,{type:lr,depthBuffer:!1,stencilBuffer:!1}),d=new ui;d.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new mn([0,2,0,0,2,0],2));const p=new H_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new ct(d,p),x=new G0(-1,1,1,-1,0,1);let v=null,y=null,S=!1,T,N=null,M=[],_=!1;this.setSize=function(C,L){l.setSize(C,L),u.setSize(C,L);for(let A=0;A<M.length;A++){const I=M[A];I.setSize&&I.setSize(C,L)}},this.setEffects=function(C){M=C,_=M.length>0&&M[0].isRenderPass===!0;const L=l.width,A=l.height;for(let I=0;I<M.length;I++){const D=M[I];D.setSize&&D.setSize(L,A)}},this.begin=function(C,L){if(S||C.toneMapping===ki&&M.length===0)return!1;if(N=L,L!==null){const A=L.width,I=L.height;(l.width!==A||l.height!==I)&&this.setSize(A,I)}return _===!1&&C.setRenderTarget(l),T=C.toneMapping,C.toneMapping=ki,!0},this.hasRenderPass=function(){return _},this.end=function(C,L){C.toneMapping=T,S=!0;let A=l,I=u;for(let D=0;D<M.length;D++){const F=M[D];if(F.enabled!==!1&&(F.render(C,I,A,L),F.needsSwap!==!1)){const G=A;A=I,I=G}}if(v!==C.outputColorSpace||y!==C.toneMapping){v=C.outputColorSpace,y=C.toneMapping,p.defines={},Rt.getTransfer(v)===kt&&(p.defines.SRGB_TRANSFER="");const D=iM[y];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=A.texture,C.setRenderTarget(N),C.render(m,x),N=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),d.dispose(),p.dispose()}}const W0=new An,uf=new lo(1,1),X0=new L0,q0=new __,$0=new B0,Hm=[],Wm=[],Xm=new Float32Array(16),qm=new Float32Array(9),$m=new Float32Array(4);function da(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=Hm[o];if(l===void 0&&(l=new Float32Array(o),Hm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(l,d)}return l}function on(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function ln(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Jl(s,e){let n=Wm[e];n===void 0&&(n=new Int32Array(e),Wm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function sM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;s.uniform2fv(this.addr,e),ln(n,e)}}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(on(n,e))return;s.uniform3fv(this.addr,e),ln(n,e)}}function lM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;s.uniform4fv(this.addr,e),ln(n,e)}}function cM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(on(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(n,e)}else{if(on(n,r))return;$m.set(r),s.uniformMatrix2fv(this.addr,!1,$m),ln(n,r)}}function uM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(on(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(n,e)}else{if(on(n,r))return;qm.set(r),s.uniformMatrix3fv(this.addr,!1,qm),ln(n,r)}}function dM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(on(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(n,e)}else{if(on(n,r))return;Xm.set(r),s.uniformMatrix4fv(this.addr,!1,Xm),ln(n,r)}}function fM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function hM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;s.uniform2iv(this.addr,e),ln(n,e)}}function pM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;s.uniform3iv(this.addr,e),ln(n,e)}}function mM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;s.uniform4iv(this.addr,e),ln(n,e)}}function gM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function xM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;s.uniform2uiv(this.addr,e),ln(n,e)}}function vM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;s.uniform3uiv(this.addr,e),ln(n,e)}}function _M(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;s.uniform4uiv(this.addr,e),ln(n,e)}}function yM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(uf.compareFunction=n.isReversedDepthBuffer()?Mf:Sf,l=uf):l=W0,n.setTexture2D(e||l,o)}function SM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||q0,o)}function MM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||$0,o)}function wM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||X0,o)}function EM(s){switch(s){case 5126:return sM;case 35664:return aM;case 35665:return oM;case 35666:return lM;case 35674:return cM;case 35675:return uM;case 35676:return dM;case 5124:case 35670:return fM;case 35667:case 35671:return hM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return gM;case 36294:return xM;case 36295:return vM;case 36296:return _M;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return SM;case 35680:case 36300:case 36308:case 36293:return MM;case 36289:case 36303:case 36311:case 36292:return wM}}function bM(s,e){s.uniform1fv(this.addr,e)}function TM(s,e){const n=da(e,this.size,2);s.uniform2fv(this.addr,n)}function CM(s,e){const n=da(e,this.size,3);s.uniform3fv(this.addr,n)}function AM(s,e){const n=da(e,this.size,4);s.uniform4fv(this.addr,n)}function RM(s,e){const n=da(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function NM(s,e){const n=da(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function PM(s,e){const n=da(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function LM(s,e){s.uniform1iv(this.addr,e)}function DM(s,e){s.uniform2iv(this.addr,e)}function IM(s,e){s.uniform3iv(this.addr,e)}function UM(s,e){s.uniform4iv(this.addr,e)}function FM(s,e){s.uniform1uiv(this.addr,e)}function OM(s,e){s.uniform2uiv(this.addr,e)}function kM(s,e){s.uniform3uiv(this.addr,e)}function BM(s,e){s.uniform4uiv(this.addr,e)}function zM(s,e,n){const r=this.cache,o=e.length,l=Jl(n,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=uf:u=W0;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,l[d])}function VM(s,e,n){const r=this.cache,o=e.length,l=Jl(n,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||q0,l[u])}function jM(s,e,n){const r=this.cache,o=e.length,l=Jl(n,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||$0,l[u])}function GM(s,e,n){const r=this.cache,o=e.length,l=Jl(n,o);on(r,l)||(s.uniform1iv(this.addr,l),ln(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||X0,l[u])}function HM(s){switch(s){case 5126:return bM;case 35664:return TM;case 35665:return CM;case 35666:return AM;case 35674:return RM;case 35675:return NM;case 35676:return PM;case 5124:case 35670:return LM;case 35667:case 35671:return DM;case 35668:case 35672:return IM;case 35669:case 35673:return UM;case 5125:return FM;case 36294:return OM;case 36295:return kM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return zM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return GM}}class WM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=EM(n.type)}}class XM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=HM(n.type)}}class qM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,n[d.id],r)}}}const dd=/(\w+)(\])?(\[|\.)?/g;function Ym(s,e){s.seq.push(e),s.map[e.id]=e}function $M(s,e,n){const r=s.name,o=r.length;for(dd.lastIndex=0;;){const l=dd.exec(r),u=dd.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){Ym(n,m===void 0?new WM(d,s,e):new XM(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new qM(d),Ym(n,v)),n=v}}}class Xl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);$M(d,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const d=n[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function Km(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const YM=37297;let KM=0;function ZM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Zm=new mt;function QM(s){Rt._getMatrix(Zm,Rt.workingColorSpace,s);const e=`mat3( ${Zm.elements.map(n=>n.toFixed(4))} )`;switch(Rt.getTransfer(s)){case $l:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Qm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+ZM(s.getShaderSource(e),d)}else return l}function JM(s,e){const n=QM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const ew={[m0]:"Linear",[g0]:"Reinhard",[x0]:"Cineon",[v0]:"ACESFilmic",[y0]:"AgX",[S0]:"Neutral",[_0]:"Custom"};function tw(s,e){const n=ew[e];return n===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Bl=new re;function nw(){Rt.getLuminanceCoefficients(Bl);const s=Bl.x.toFixed(4),e=Bl.y.toFixed(4),n=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eo).join(`
`)}function rw(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function sw(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function eo(s){return s!==""}function Jm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function e0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aw=/^[ \t]*#include +<([\w\d./]+)>/gm;function df(s){return s.replace(aw,lw)}const ow=new Map;function lw(s,e){let n=xt[e];if(n===void 0){const r=ow.get(e);if(r!==void 0)n=xt[r],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return df(n)}const cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(s){return s.replace(cw,uw)}function uw(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function n0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const dw={[Vl]:"SHADOWMAP_TYPE_PCF",[Ja]:"SHADOWMAP_TYPE_VSM"};function fw(s){return dw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const hw={[ps]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE",[Zl]:"ENVMAP_TYPE_CUBE_UV"};function pw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":hw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const mw={[ra]:"ENVMAP_MODE_REFRACTION"};function gw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":mw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xw={[p0]:"ENVMAP_BLENDING_MULTIPLY",[Bv]:"ENVMAP_BLENDING_MIX",[zv]:"ENVMAP_BLENDING_ADD"};function vw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":xw[s.combine]||"ENVMAP_BLENDING_NONE"}function _w(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function yw(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=fw(n),m=pw(n),x=gw(n),v=vw(n),y=_w(n),S=iw(n),T=rw(l),N=o.createProgram();let M,_,C=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(eo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(eo).join(`
`),_.length>0&&(_+=`
`)):(M=[n0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eo).join(`
`),_=[n0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ki?"#define TONE_MAPPING":"",n.toneMapping!==ki?xt.tonemapping_pars_fragment:"",n.toneMapping!==ki?tw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,JM("linearToOutputTexel",n.outputColorSpace),nw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(eo).join(`
`)),u=df(u),u=Jm(u,n),u=e0(u,n),d=df(d),d=Jm(d,n),d=e0(d,n),u=t0(u),d=t0(d),n.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===pm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===pm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=C+M+u,A=C+_+d,I=Km(o,o.VERTEX_SHADER,L),D=Km(o,o.FRAGMENT_SHADER,A);o.attachShader(N,I),o.attachShader(N,D),n.index0AttributeName!==void 0?o.bindAttribLocation(N,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function F(z){if(s.debug.checkShaderErrors){const Q=o.getProgramInfoLog(N)||"",Z=o.getShaderInfoLog(I)||"",X=o.getShaderInfoLog(D)||"",J=Q.trim(),H=Z.trim(),$=X.trim();let j=!0,oe=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if(j=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,N,I,D);else{const se=Qm(o,I,"vertex"),O=Qm(o,D,"fragment");Dt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+J+`
`+se+`
`+O)}else J!==""?ut("WebGLProgram: Program Info Log:",J):(H===""||$==="")&&(oe=!1);oe&&(z.diagnostics={runnable:j,programLog:J,vertexShader:{log:H,prefix:M},fragmentShader:{log:$,prefix:_}})}o.deleteShader(I),o.deleteShader(D),G=new Xl(o,N),b=sw(o,N)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let b;this.getAttributes=function(){return b===void 0&&F(this),b};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=o.getProgramParameter(N,YM)),P},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KM++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=I,this.fragmentShader=D,this}let Sw=0;class Mw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new ww(e),n.set(e,r)),r}}class ww{constructor(e){this.id=Sw++,this.code=e,this.usedTimes=0}}function Ew(s,e,n,r,o,l,u){const d=new D0,p=new Mw,m=new Set,x=[],v=new Map,y=o.logarithmicDepthBuffer;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function N(b){return m.add(b),b===0?"uv":`uv${b}`}function M(b,P,z,Q,Z){const X=Q.fog,J=Z.geometry,H=b.isMeshStandardMaterial?Q.environment:null,$=(b.isMeshStandardMaterial?n:e).get(b.envMap||H),j=$&&$.mapping===Zl?$.image.height:null,oe=T[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&ut("WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const se=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,O=se!==void 0?se.length:0;let ee=0;J.morphAttributes.position!==void 0&&(ee=1),J.morphAttributes.normal!==void 0&&(ee=2),J.morphAttributes.color!==void 0&&(ee=3);let ge,Ee,De,ie;if(oe){const wt=Ui[oe];ge=wt.vertexShader,Ee=wt.fragmentShader}else ge=b.vertexShader,Ee=b.fragmentShader,p.update(b),De=p.getVertexShaderID(b),ie=p.getFragmentShaderID(b);const fe=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),ke=Z.isInstancedMesh===!0,Pe=Z.isBatchedMesh===!0,dt=!!b.map,Bt=!!b.matcap,ht=!!$,pt=!!b.aoMap,Mt=!!b.lightMap,st=!!b.bumpMap,vt=!!b.normalMap,B=!!b.displacementMap,Ot=!!b.emissiveMap,_t=!!b.metalnessMap,St=!!b.roughnessMap,He=b.anisotropy>0,U=b.clearcoat>0,w=b.dispersion>0,Y=b.iridescence>0,he=b.sheen>0,pe=b.transmission>0,de=He&&!!b.anisotropyMap,Xe=U&&!!b.clearcoatMap,Te=U&&!!b.clearcoatNormalMap,ze=U&&!!b.clearcoatRoughnessMap,Je=Y&&!!b.iridescenceMap,Se=Y&&!!b.iridescenceThicknessMap,Ce=he&&!!b.sheenColorMap,Fe=he&&!!b.sheenRoughnessMap,je=!!b.specularMap,Ne=!!b.specularColorMap,lt=!!b.specularIntensityMap,W=pe&&!!b.transmissionMap,Ie=pe&&!!b.thicknessMap,Me=!!b.gradientMap,Ue=!!b.alphaMap,ye=b.alphaTest>0,me=!!b.alphaHash,Ae=!!b.extensions;let nt=ki;b.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(nt=s.toneMapping);const It={shaderID:oe,shaderType:b.type,shaderName:b.name,vertexShader:ge,fragmentShader:Ee,defines:b.defines,customVertexShaderID:De,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Pe,batchingColor:Pe&&Z._colorsTexture!==null,instancing:ke,instancingColor:ke&&Z.instanceColor!==null,instancingMorph:ke&&Z.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:aa,alphaToCoverage:!!b.alphaToCoverage,map:dt,matcap:Bt,envMap:ht,envMapMode:ht&&$.mapping,envMapCubeUVHeight:j,aoMap:pt,lightMap:Mt,bumpMap:st,normalMap:vt,displacementMap:B,emissiveMap:Ot,normalMapObjectSpace:vt&&b.normalMapType===Gv,normalMapTangentSpace:vt&&b.normalMapType===N0,metalnessMap:_t,roughnessMap:St,anisotropy:He,anisotropyMap:de,clearcoat:U,clearcoatMap:Xe,clearcoatNormalMap:Te,clearcoatRoughnessMap:ze,dispersion:w,iridescence:Y,iridescenceMap:Je,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:Fe,specularMap:je,specularColorMap:Ne,specularIntensityMap:lt,transmission:pe,transmissionMap:W,thicknessMap:Ie,gradientMap:Me,opaque:b.transparent===!1&&b.blending===ta&&b.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ye,alphaHash:me,combine:b.combine,mapUv:dt&&N(b.map.channel),aoMapUv:pt&&N(b.aoMap.channel),lightMapUv:Mt&&N(b.lightMap.channel),bumpMapUv:st&&N(b.bumpMap.channel),normalMapUv:vt&&N(b.normalMap.channel),displacementMapUv:B&&N(b.displacementMap.channel),emissiveMapUv:Ot&&N(b.emissiveMap.channel),metalnessMapUv:_t&&N(b.metalnessMap.channel),roughnessMapUv:St&&N(b.roughnessMap.channel),anisotropyMapUv:de&&N(b.anisotropyMap.channel),clearcoatMapUv:Xe&&N(b.clearcoatMap.channel),clearcoatNormalMapUv:Te&&N(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&N(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&N(b.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&N(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&N(b.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&N(b.sheenRoughnessMap.channel),specularMapUv:je&&N(b.specularMap.channel),specularColorMapUv:Ne&&N(b.specularColorMap.channel),specularIntensityMapUv:lt&&N(b.specularIntensityMap.channel),transmissionMapUv:W&&N(b.transmissionMap.channel),thicknessMapUv:Ie&&N(b.thicknessMap.channel),alphaMapUv:Ue&&N(b.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(vt||He),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!J.attributes.uv&&(dt||Ue),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:_e,skinning:Z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ee,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:nt,decodeVideoTexture:dt&&b.map.isVideoTexture===!0&&Rt.getTransfer(b.map.colorSpace)===kt,decodeVideoTextureEmissive:Ot&&b.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(b.emissiveMap.colorSpace)===kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ir,flipSided:b.side===Hn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ae&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&b.extensions.multiDraw===!0||Pe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return It.vertexUv1s=m.has(1),It.vertexUv2s=m.has(2),It.vertexUv3s=m.has(3),m.clear(),It}function _(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)P.push(z),P.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(C(P,b),L(P,b),P.push(s.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function C(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function L(b,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),b.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),b.push(d.mask)}function A(b){const P=T[b.type];let z;if(P){const Q=Ui[P];z=D_.clone(Q.uniforms)}else z=b.uniforms;return z}function I(b,P){let z=v.get(P);return z!==void 0?++z.usedTimes:(z=new yw(s,P,b,l),x.push(z),v.set(P,z)),z}function D(b){if(--b.usedTimes===0){const P=x.indexOf(b);x[P]=x[x.length-1],x.pop(),v.delete(b.cacheKey),b.destroy()}}function F(b){p.remove(b)}function G(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:A,acquireProgram:I,releaseProgram:D,releaseShaderCache:F,programs:x,dispose:G}}function bw(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function Tw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function i0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function r0(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(v,y,S,T,N,M){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:T,renderOrder:v.renderOrder,z:N,group:M},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=N,_.group=M),e++,_}function d(v,y,S,T,N,M){const _=u(v,y,S,T,N,M);S.transmission>0?r.push(_):S.transparent===!0?o.push(_):n.push(_)}function p(v,y,S,T,N,M){const _=u(v,y,S,T,N,M);S.transmission>0?r.unshift(_):S.transparent===!0?o.unshift(_):n.unshift(_)}function m(v,y){n.length>1&&n.sort(v||Tw),r.length>1&&r.sort(y||i0),o.length>1&&o.sort(y||i0)}function x(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:x,sort:m}}function Cw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new r0,s.set(r,[u])):o>=l.length?(u=new r0,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function Aw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new re,color:new Nt};break;case"SpotLight":n={position:new re,direction:new re,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new re,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new re,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":n={color:new Nt,position:new re,halfWidth:new re,halfHeight:new re};break}return s[e.id]=n,n}}}function Rw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let Nw=0;function Pw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Lw(s){const e=new Aw,n=Rw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new re);const o=new re,l=new Qt,u=new Qt;function d(m){let x=0,v=0,y=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,T=0,N=0,M=0,_=0,C=0,L=0,A=0,I=0,D=0,F=0;m.sort(Pw);for(let b=0,P=m.length;b<P;b++){const z=m[b],Q=z.color,Z=z.intensity,X=z.distance;let J=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===sa?J=z.shadow.map.texture:J=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)x+=Q.r*Z,v+=Q.g*Z,y+=Q.b*Z;else if(z.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(z.sh.coefficients[H],Z);F++}else if(z.isDirectionalLight){const H=e.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,j=n.get(z);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=J,r.directionalShadowMatrix[S]=z.shadow.matrix,C++}r.directional[S]=H,S++}else if(z.isSpotLight){const H=e.get(z);H.position.setFromMatrixPosition(z.matrixWorld),H.color.copy(Q).multiplyScalar(Z),H.distance=X,H.coneCos=Math.cos(z.angle),H.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),H.decay=z.decay,r.spot[N]=H;const $=z.shadow;if(z.map&&(r.spotLightMap[I]=z.map,I++,$.updateMatrices(z),z.castShadow&&D++),r.spotLightMatrix[N]=$.matrix,z.castShadow){const j=n.get(z);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,r.spotShadow[N]=j,r.spotShadowMap[N]=J,A++}N++}else if(z.isRectAreaLight){const H=e.get(z);H.color.copy(Q).multiplyScalar(Z),H.halfWidth.set(z.width*.5,0,0),H.halfHeight.set(0,z.height*.5,0),r.rectArea[M]=H,M++}else if(z.isPointLight){const H=e.get(z);if(H.color.copy(z.color).multiplyScalar(z.intensity),H.distance=z.distance,H.decay=z.decay,z.castShadow){const $=z.shadow,j=n.get(z);j.shadowIntensity=$.intensity,j.shadowBias=$.bias,j.shadowNormalBias=$.normalBias,j.shadowRadius=$.radius,j.shadowMapSize=$.mapSize,j.shadowCameraNear=$.camera.near,j.shadowCameraFar=$.camera.far,r.pointShadow[T]=j,r.pointShadowMap[T]=J,r.pointShadowMatrix[T]=z.shadow.matrix,L++}r.point[T]=H,T++}else if(z.isHemisphereLight){const H=e.get(z);H.skyColor.copy(z.color).multiplyScalar(Z),H.groundColor.copy(z.groundColor).multiplyScalar(Z),r.hemi[_]=H,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Oe.LTC_FLOAT_1,r.rectAreaLTC2=Oe.LTC_FLOAT_2):(r.rectAreaLTC1=Oe.LTC_HALF_1,r.rectAreaLTC2=Oe.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=y;const G=r.hash;(G.directionalLength!==S||G.pointLength!==T||G.spotLength!==N||G.rectAreaLength!==M||G.hemiLength!==_||G.numDirectionalShadows!==C||G.numPointShadows!==L||G.numSpotShadows!==A||G.numSpotMaps!==I||G.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=N,r.rectArea.length=M,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=A+I-D,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=F,G.directionalLength=S,G.pointLength=T,G.spotLength=N,G.rectAreaLength=M,G.hemiLength=_,G.numDirectionalShadows=C,G.numPointShadows=L,G.numSpotShadows=A,G.numSpotMaps=I,G.numLightProbes=F,r.version=Nw++)}function p(m,x){let v=0,y=0,S=0,T=0,N=0;const M=x.matrixWorldInverse;for(let _=0,C=m.length;_<C;_++){const L=m[_];if(L.isDirectionalLight){const A=r.directional[v];A.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(M),v++}else if(L.isSpotLight){const A=r.spot[S];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(M),A.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const A=r.rectArea[T];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(M),u.identity(),l.copy(L.matrixWorld),l.premultiply(M),u.extractRotation(l),A.halfWidth.set(L.width*.5,0,0),A.halfHeight.set(0,L.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const A=r.point[y];A.position.setFromMatrixPosition(L.matrixWorld),A.position.applyMatrix4(M),y++}else if(L.isHemisphereLight){const A=r.hemi[N];A.direction.setFromMatrixPosition(L.matrixWorld),A.direction.transformDirection(M),N++}}}return{setup:d,setupView:p,state:r}}function s0(s){const e=new Lw(s),n=[],r=[];function o(x){m.camera=x,n.length=0,r.length=0}function l(x){n.push(x)}function u(x){r.push(x)}function d(){e.setup(n)}function p(x){e.setupView(n,x)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u}}function Dw(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new s0(s),e.set(o,[d])):l>=u.length?(d=new s0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const Iw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Uw=`uniform sampler2D shadow_pass;
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
}`,Fw=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],Ow=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],a0=new Qt,Za=new re,fd=new re;function kw(s,e,n){let r=new Cf;const o=new Tt,l=new Tt,u=new Zt,d=new W_,p=new X_,m={},x=n.maxTextureSize,v={[kr]:Hn,[Hn]:kr,[ir]:ir},y=new Gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Iw,fragmentShader:Uw}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new ui;T.setAttribute("position",new zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new ct(T,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vl;let _=this.type;this.render=function(D,F,G){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||D.length===0)return;D.type===h0&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),D.type=Vl);const b=s.getRenderTarget(),P=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Q=s.state;Q.setBlending(ar),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const Z=_!==this.type;Z&&F.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(J=>J.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,J=D.length;X<J;X++){const H=D[X],$=H.shadow;if($===void 0){ut("WebGLShadowMap:",H,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const j=$.getFrameExtents();if(o.multiply(j),l.copy($.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/j.x),o.x=l.x*j.x,$.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/j.y),o.y=l.y*j.y,$.mapSize.y=l.y)),$.map===null||Z===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Ja){if(H.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Bi(o.x,o.y,{format:sa,type:lr,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),$.map.texture.name=H.name+".shadowMap",$.map.depthTexture=new lo(o.x,o.y,Fi),$.map.depthTexture.name=H.name+".shadowMapDepth",$.map.depthTexture.format=cr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=_n,$.map.depthTexture.magFilter=_n}else{H.isPointLight?($.map=new z0(o.x),$.map.depthTexture=new G_(o.x,Vi)):($.map=new Bi(o.x,o.y),$.map.depthTexture=new lo(o.x,o.y,Vi)),$.map.depthTexture.name=H.name+".shadowMap",$.map.depthTexture.format=cr;const se=s.state.buffers.depth.getReversed();this.type===Vl?($.map.depthTexture.compareFunction=se?Mf:Sf,$.map.depthTexture.minFilter=Cn,$.map.depthTexture.magFilter=Cn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=_n,$.map.depthTexture.magFilter=_n)}$.camera.updateProjectionMatrix()}const oe=$.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<oe;se++){if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,se),s.clear();else{se===0&&(s.setRenderTarget($.map),s.clear());const O=$.getViewport(se);u.set(l.x*O.x,l.y*O.y,l.x*O.z,l.y*O.w),Q.viewport(u)}if(H.isPointLight){const O=$.camera,ee=$.matrix,ge=H.distance||O.far;ge!==O.far&&(O.far=ge,O.updateProjectionMatrix()),Za.setFromMatrixPosition(H.matrixWorld),O.position.copy(Za),fd.copy(O.position),fd.add(Fw[se]),O.up.copy(Ow[se]),O.lookAt(fd),O.updateMatrixWorld(),ee.makeTranslation(-Za.x,-Za.y,-Za.z),a0.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),$._frustum.setFromProjectionMatrix(a0,O.coordinateSystem,O.reversedDepth)}else $.updateMatrices(H);r=$.getFrustum(),A(F,G,$.camera,H,this.type)}$.isPointLightShadow!==!0&&this.type===Ja&&C($,G),$.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(b,P,z)};function C(D,F){const G=e.update(N);y.defines.VSM_SAMPLES!==D.blurSamples&&(y.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Bi(o.x,o.y,{format:sa,type:lr})),y.uniforms.shadow_pass.value=D.map.depthTexture,y.uniforms.resolution.value=D.mapSize,y.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(F,null,G,y,N,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(F,null,G,S,N,null)}function L(D,F,G,b){let P=null;const z=G.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(z!==void 0)P=z;else if(P=G.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Q=P.uuid,Z=F.uuid;let X=m[Q];X===void 0&&(X={},m[Q]=X);let J=X[Z];J===void 0&&(J=P.clone(),X[Z]=J,F.addEventListener("dispose",I)),P=J}if(P.visible=F.visible,P.wireframe=F.wireframe,b===Ja?P.side=F.shadowSide!==null?F.shadowSide:F.side:P.side=F.shadowSide!==null?F.shadowSide:v[F.side],P.alphaMap=F.alphaMap,P.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,P.map=F.map,P.clipShadows=F.clipShadows,P.clippingPlanes=F.clippingPlanes,P.clipIntersection=F.clipIntersection,P.displacementMap=F.displacementMap,P.displacementScale=F.displacementScale,P.displacementBias=F.displacementBias,P.wireframeLinewidth=F.wireframeLinewidth,P.linewidth=F.linewidth,G.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const Q=s.properties.get(P);Q.light=G}return P}function A(D,F,G,b,P){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&P===Ja)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,D.matrixWorld);const Z=e.update(D),X=D.material;if(Array.isArray(X)){const J=Z.groups;for(let H=0,$=J.length;H<$;H++){const j=J[H],oe=X[j.materialIndex];if(oe&&oe.visible){const se=L(D,oe,b,P);D.onBeforeShadow(s,D,F,G,Z,se,j),s.renderBufferDirect(G,null,Z,se,D,j),D.onAfterShadow(s,D,F,G,Z,se,j)}}}else if(X.visible){const J=L(D,X,b,P);D.onBeforeShadow(s,D,F,G,Z,J,null),s.renderBufferDirect(G,null,Z,J,D,null),D.onAfterShadow(s,D,F,G,Z,J,null)}}const Q=D.children;for(let Z=0,X=Q.length;Z<X;Z++)A(Q[Z],F,G,b,P)}function I(D){D.target.removeEventListener("dispose",I);for(const G in m){const b=m[G],P=D.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}const Bw={[yd]:Sd,[Md]:bd,[wd]:Td,[ia]:Ed,[Sd]:yd,[bd]:Md,[Td]:wd,[Ed]:ia};function zw(s,e){function n(){let W=!1;const Ie=new Zt;let Me=null;const Ue=new Zt(0,0,0,0);return{setMask:function(ye){Me!==ye&&!W&&(s.colorMask(ye,ye,ye,ye),Me=ye)},setLocked:function(ye){W=ye},setClear:function(ye,me,Ae,nt,It){It===!0&&(ye*=nt,me*=nt,Ae*=nt),Ie.set(ye,me,Ae,nt),Ue.equals(Ie)===!1&&(s.clearColor(ye,me,Ae,nt),Ue.copy(Ie))},reset:function(){W=!1,Me=null,Ue.set(-1,0,0,0)}}}function r(){let W=!1,Ie=!1,Me=null,Ue=null,ye=null;return{setReversed:function(me){if(Ie!==me){const Ae=e.get("EXT_clip_control");me?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),Ie=me;const nt=ye;ye=null,this.setClear(nt)}},getReversed:function(){return Ie},setTest:function(me){me?fe(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(me){Me!==me&&!W&&(s.depthMask(me),Me=me)},setFunc:function(me){if(Ie&&(me=Bw[me]),Ue!==me){switch(me){case yd:s.depthFunc(s.NEVER);break;case Sd:s.depthFunc(s.ALWAYS);break;case Md:s.depthFunc(s.LESS);break;case ia:s.depthFunc(s.LEQUAL);break;case wd:s.depthFunc(s.EQUAL);break;case Ed:s.depthFunc(s.GEQUAL);break;case bd:s.depthFunc(s.GREATER);break;case Td:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=me}},setLocked:function(me){W=me},setClear:function(me){ye!==me&&(Ie&&(me=1-me),s.clearDepth(me),ye=me)},reset:function(){W=!1,Me=null,Ue=null,ye=null,Ie=!1}}}function o(){let W=!1,Ie=null,Me=null,Ue=null,ye=null,me=null,Ae=null,nt=null,It=null;return{setTest:function(wt){W||(wt?fe(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(wt){Ie!==wt&&!W&&(s.stencilMask(wt),Ie=wt)},setFunc:function(wt,Nn,nn){(Me!==wt||Ue!==Nn||ye!==nn)&&(s.stencilFunc(wt,Nn,nn),Me=wt,Ue=Nn,ye=nn)},setOp:function(wt,Nn,nn){(me!==wt||Ae!==Nn||nt!==nn)&&(s.stencilOp(wt,Nn,nn),me=wt,Ae=Nn,nt=nn)},setLocked:function(wt){W=wt},setClear:function(wt){It!==wt&&(s.clearStencil(wt),It=wt)},reset:function(){W=!1,Ie=null,Me=null,Ue=null,ye=null,me=null,Ae=null,nt=null,It=null}}}const l=new n,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let x={},v={},y=new WeakMap,S=[],T=null,N=!1,M=null,_=null,C=null,L=null,A=null,I=null,D=null,F=new Nt(0,0,0),G=0,b=!1,P=null,z=null,Q=null,Z=null,X=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(j)[1]),H=$>=1):j.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),H=$>=2);let oe=null,se={};const O=s.getParameter(s.SCISSOR_BOX),ee=s.getParameter(s.VIEWPORT),ge=new Zt().fromArray(O),Ee=new Zt().fromArray(ee);function De(W,Ie,Me,Ue){const ye=new Uint8Array(4),me=s.createTexture();s.bindTexture(W,me),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ae=0;Ae<Me;Ae++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,Ue,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(Ie+Ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return me}const ie={};ie[s.TEXTURE_2D]=De(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=De(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=De(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=De(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),fe(s.DEPTH_TEST),u.setFunc(ia),st(!1),vt(cm),fe(s.CULL_FACE),pt(ar);function fe(W){x[W]!==!0&&(s.enable(W),x[W]=!0)}function _e(W){x[W]!==!1&&(s.disable(W),x[W]=!1)}function ke(W,Ie){return v[W]!==Ie?(s.bindFramebuffer(W,Ie),v[W]=Ie,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ie),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function Pe(W,Ie){let Me=S,Ue=!1;if(W){Me=y.get(Ie),Me===void 0&&(Me=[],y.set(Ie,Me));const ye=W.textures;if(Me.length!==ye.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let me=0,Ae=ye.length;me<Ae;me++)Me[me]=s.COLOR_ATTACHMENT0+me;Me.length=ye.length,Ue=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,Ue=!0);Ue&&s.drawBuffers(Me)}function dt(W){return T!==W?(s.useProgram(W),T=W,!0):!1}const Bt={[cs]:s.FUNC_ADD,[Mv]:s.FUNC_SUBTRACT,[wv]:s.FUNC_REVERSE_SUBTRACT};Bt[Ev]=s.MIN,Bt[bv]=s.MAX;const ht={[Tv]:s.ZERO,[Cv]:s.ONE,[Av]:s.SRC_COLOR,[vd]:s.SRC_ALPHA,[Iv]:s.SRC_ALPHA_SATURATE,[Lv]:s.DST_COLOR,[Nv]:s.DST_ALPHA,[Rv]:s.ONE_MINUS_SRC_COLOR,[_d]:s.ONE_MINUS_SRC_ALPHA,[Dv]:s.ONE_MINUS_DST_COLOR,[Pv]:s.ONE_MINUS_DST_ALPHA,[Uv]:s.CONSTANT_COLOR,[Fv]:s.ONE_MINUS_CONSTANT_COLOR,[Ov]:s.CONSTANT_ALPHA,[kv]:s.ONE_MINUS_CONSTANT_ALPHA};function pt(W,Ie,Me,Ue,ye,me,Ae,nt,It,wt){if(W===ar){N===!0&&(_e(s.BLEND),N=!1);return}if(N===!1&&(fe(s.BLEND),N=!0),W!==Sv){if(W!==M||wt!==b){if((_!==cs||A!==cs)&&(s.blendEquation(s.FUNC_ADD),_=cs,A=cs),wt)switch(W){case ta:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xd:s.blendFunc(s.ONE,s.ONE);break;case um:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Dt("WebGLState: Invalid blending: ",W);break}else switch(W){case ta:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case xd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case um:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dm:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",W);break}C=null,L=null,I=null,D=null,F.set(0,0,0),G=0,M=W,b=wt}return}ye=ye||Ie,me=me||Me,Ae=Ae||Ue,(Ie!==_||ye!==A)&&(s.blendEquationSeparate(Bt[Ie],Bt[ye]),_=Ie,A=ye),(Me!==C||Ue!==L||me!==I||Ae!==D)&&(s.blendFuncSeparate(ht[Me],ht[Ue],ht[me],ht[Ae]),C=Me,L=Ue,I=me,D=Ae),(nt.equals(F)===!1||It!==G)&&(s.blendColor(nt.r,nt.g,nt.b,It),F.copy(nt),G=It),M=W,b=!1}function Mt(W,Ie){W.side===ir?_e(s.CULL_FACE):fe(s.CULL_FACE);let Me=W.side===Hn;Ie&&(Me=!Me),st(Me),W.blending===ta&&W.transparent===!1?pt(ar):pt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ue=W.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ot(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(W){P!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),P=W)}function vt(W){W!==_v?(fe(s.CULL_FACE),W!==z&&(W===cm?s.cullFace(s.BACK):W===yv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),z=W}function B(W){W!==Q&&(H&&s.lineWidth(W),Q=W)}function Ot(W,Ie,Me){W?(fe(s.POLYGON_OFFSET_FILL),(Z!==Ie||X!==Me)&&(s.polygonOffset(Ie,Me),Z=Ie,X=Me)):_e(s.POLYGON_OFFSET_FILL)}function _t(W){W?fe(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function St(W){W===void 0&&(W=s.TEXTURE0+J-1),oe!==W&&(s.activeTexture(W),oe=W)}function He(W,Ie,Me){Me===void 0&&(oe===null?Me=s.TEXTURE0+J-1:Me=oe);let Ue=se[Me];Ue===void 0&&(Ue={type:void 0,texture:void 0},se[Me]=Ue),(Ue.type!==W||Ue.texture!==Ie)&&(oe!==Me&&(s.activeTexture(Me),oe=Me),s.bindTexture(W,Ie||ie[W]),Ue.type=W,Ue.texture=Ie)}function U(){const W=se[oe];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Y(){try{s.compressedTexImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function he(){try{s.texSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function pe(){try{s.texSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function de(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Xe(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Te(){try{s.texStorage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ze(){try{s.texStorage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Je(){try{s.texImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Se(){try{s.texImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Ce(W){ge.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),ge.copy(W))}function Fe(W){Ee.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),Ee.copy(W))}function je(W,Ie){let Me=m.get(Ie);Me===void 0&&(Me=new WeakMap,m.set(Ie,Me));let Ue=Me.get(W);Ue===void 0&&(Ue=s.getUniformBlockIndex(Ie,W.name),Me.set(W,Ue))}function Ne(W,Ie){const Ue=m.get(Ie).get(W);p.get(Ie)!==Ue&&(s.uniformBlockBinding(Ie,Ue,W.__bindingPointIndex),p.set(Ie,Ue))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},oe=null,se={},v={},y=new WeakMap,S=[],T=null,N=!1,M=null,_=null,C=null,L=null,A=null,I=null,D=null,F=new Nt(0,0,0),G=0,b=!1,P=null,z=null,Q=null,Z=null,X=null,ge.set(0,0,s.canvas.width,s.canvas.height),Ee.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:fe,disable:_e,bindFramebuffer:ke,drawBuffers:Pe,useProgram:dt,setBlending:pt,setMaterial:Mt,setFlipSided:st,setCullFace:vt,setLineWidth:B,setPolygonOffset:Ot,setScissorTest:_t,activeTexture:St,bindTexture:He,unbindTexture:U,compressedTexImage2D:w,compressedTexImage3D:Y,texImage2D:Je,texImage3D:Se,updateUBOMapping:je,uniformBlockBinding:Ne,texStorage2D:Te,texStorage3D:ze,texSubImage2D:he,texSubImage3D:pe,compressedTexSubImage2D:de,compressedTexSubImage3D:Xe,scissor:Ce,viewport:Fe,reset:lt}}function Vw(s,e,n,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Tt,x=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,w){return S?new OffscreenCanvas(U,w):ao("canvas")}function N(U,w,Y){let he=1;const pe=He(U);if((pe.width>Y||pe.height>Y)&&(he=Y/Math.max(pe.width,pe.height)),he<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const de=Math.floor(he*pe.width),Xe=Math.floor(he*pe.height);v===void 0&&(v=T(de,Xe));const Te=w?T(de,Xe):v;return Te.width=de,Te.height=Xe,Te.getContext("2d").drawImage(U,0,0,de,Xe),ut("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+de+"x"+Xe+")."),Te}else return"data"in U&&ut("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),U;return U}function M(U){return U.generateMipmaps}function _(U){s.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(U,w,Y,he,pe=!1){if(U!==null){if(s[U]!==void 0)return s[U];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let de=w;if(w===s.RED&&(Y===s.FLOAT&&(de=s.R32F),Y===s.HALF_FLOAT&&(de=s.R16F),Y===s.UNSIGNED_BYTE&&(de=s.R8)),w===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(de=s.R8UI),Y===s.UNSIGNED_SHORT&&(de=s.R16UI),Y===s.UNSIGNED_INT&&(de=s.R32UI),Y===s.BYTE&&(de=s.R8I),Y===s.SHORT&&(de=s.R16I),Y===s.INT&&(de=s.R32I)),w===s.RG&&(Y===s.FLOAT&&(de=s.RG32F),Y===s.HALF_FLOAT&&(de=s.RG16F),Y===s.UNSIGNED_BYTE&&(de=s.RG8)),w===s.RG_INTEGER&&(Y===s.UNSIGNED_BYTE&&(de=s.RG8UI),Y===s.UNSIGNED_SHORT&&(de=s.RG16UI),Y===s.UNSIGNED_INT&&(de=s.RG32UI),Y===s.BYTE&&(de=s.RG8I),Y===s.SHORT&&(de=s.RG16I),Y===s.INT&&(de=s.RG32I)),w===s.RGB_INTEGER&&(Y===s.UNSIGNED_BYTE&&(de=s.RGB8UI),Y===s.UNSIGNED_SHORT&&(de=s.RGB16UI),Y===s.UNSIGNED_INT&&(de=s.RGB32UI),Y===s.BYTE&&(de=s.RGB8I),Y===s.SHORT&&(de=s.RGB16I),Y===s.INT&&(de=s.RGB32I)),w===s.RGBA_INTEGER&&(Y===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),Y===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),Y===s.UNSIGNED_INT&&(de=s.RGBA32UI),Y===s.BYTE&&(de=s.RGBA8I),Y===s.SHORT&&(de=s.RGBA16I),Y===s.INT&&(de=s.RGBA32I)),w===s.RGB&&(Y===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),Y===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),w===s.RGBA){const Xe=pe?$l:Rt.getTransfer(he);Y===s.FLOAT&&(de=s.RGBA32F),Y===s.HALF_FLOAT&&(de=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(de=Xe===kt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function A(U,w){let Y;return U?w===null||w===Vi||w===so?Y=s.DEPTH24_STENCIL8:w===Fi?Y=s.DEPTH32F_STENCIL8:w===ro&&(Y=s.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Vi||w===so?Y=s.DEPTH_COMPONENT24:w===Fi?Y=s.DEPTH_COMPONENT32F:w===ro&&(Y=s.DEPTH_COMPONENT16),Y}function I(U,w){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==_n&&U.minFilter!==Cn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function D(U){const w=U.target;w.removeEventListener("dispose",D),G(w),w.isVideoTexture&&x.delete(w)}function F(U){const w=U.target;w.removeEventListener("dispose",F),P(w)}function G(U){const w=r.get(U);if(w.__webglInit===void 0)return;const Y=U.source,he=y.get(Y);if(he){const pe=he[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&b(U),Object.keys(he).length===0&&y.delete(Y)}r.remove(U)}function b(U){const w=r.get(U);s.deleteTexture(w.__webglTexture);const Y=U.source,he=y.get(Y);delete he[w.__cacheKey],u.memory.textures--}function P(U){const w=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let pe=0;pe<w.__webglFramebuffer[he].length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[he][pe]);else s.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)s.deleteFramebuffer(w.__webglFramebuffer[he]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Y=U.textures;for(let he=0,pe=Y.length;he<pe;he++){const de=r.get(Y[he]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(Y[he])}r.remove(U)}let z=0;function Q(){z=0}function Z(){const U=z;return U>=o.maxTextures&&ut("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),z+=1,U}function X(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function J(U,w){const Y=r.get(U);if(U.isVideoTexture&&_t(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Y.__version!==U.version){const he=U.image;if(he===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(Y,U,w);return}}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+w)}function H(U,w){const Y=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){ie(Y,U,w);return}else U.isExternalTexture&&(Y.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+w)}function $(U,w){const Y=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Y.__version!==U.version){ie(Y,U,w);return}n.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+w)}function j(U,w){const Y=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Y.__version!==U.version){fe(Y,U,w);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+w)}const oe={[Rd]:s.REPEAT,[rr]:s.CLAMP_TO_EDGE,[Nd]:s.MIRRORED_REPEAT},se={[_n]:s.NEAREST,[Vv]:s.NEAREST_MIPMAP_NEAREST,[_l]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[Fu]:s.LINEAR_MIPMAP_NEAREST,[ds]:s.LINEAR_MIPMAP_LINEAR},O={[Hv]:s.NEVER,[Yv]:s.ALWAYS,[Wv]:s.LESS,[Sf]:s.LEQUAL,[Xv]:s.EQUAL,[Mf]:s.GEQUAL,[qv]:s.GREATER,[$v]:s.NOTEQUAL};function ee(U,w){if(w.type===Fi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Cn||w.magFilter===Fu||w.magFilter===_l||w.magFilter===ds||w.minFilter===Cn||w.minFilter===Fu||w.minFilter===_l||w.minFilter===ds)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,oe[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,oe[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,oe[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,se[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,O[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===_n||w.minFilter!==_l&&w.minFilter!==ds||w.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function ge(U,w){let Y=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",D));const he=w.source;let pe=y.get(he);pe===void 0&&(pe={},y.set(he,pe));const de=X(w);if(de!==U.__cacheKey){pe[de]===void 0&&(pe[de]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Y=!0),pe[de].usedTimes++;const Xe=pe[U.__cacheKey];Xe!==void 0&&(pe[U.__cacheKey].usedTimes--,Xe.usedTimes===0&&b(w)),U.__cacheKey=de,U.__webglTexture=pe[de].texture}return Y}function Ee(U,w,Y){return Math.floor(Math.floor(U/Y)/w)}function De(U,w,Y,he){const de=U.updateRanges;if(de.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,Y,he,w.data);else{de.sort((Se,Ce)=>Se.start-Ce.start);let Xe=0;for(let Se=1;Se<de.length;Se++){const Ce=de[Xe],Fe=de[Se],je=Ce.start+Ce.count,Ne=Ee(Fe.start,w.width,4),lt=Ee(Ce.start,w.width,4);Fe.start<=je+1&&Ne===lt&&Ee(Fe.start+Fe.count-1,w.width,4)===Ne?Ce.count=Math.max(Ce.count,Fe.start+Fe.count-Ce.start):(++Xe,de[Xe]=Fe)}de.length=Xe+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),Je=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Se=0,Ce=de.length;Se<Ce;Se++){const Fe=de[Se],je=Math.floor(Fe.start/4),Ne=Math.ceil(Fe.count/4),lt=je%w.width,W=Math.floor(je/w.width),Ie=Ne,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),n.texSubImage2D(s.TEXTURE_2D,0,lt,W,Ie,Me,Y,he,w.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,Je)}}function ie(U,w,Y){let he=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=s.TEXTURE_3D);const pe=ge(U,w),de=w.source;n.bindTexture(he,U.__webglTexture,s.TEXTURE0+Y);const Xe=r.get(de);if(de.version!==Xe.__version||pe===!0){n.activeTexture(s.TEXTURE0+Y);const Te=Rt.getPrimaries(Rt.workingColorSpace),ze=w.colorSpace===Fr?null:Rt.getPrimaries(w.colorSpace),Je=w.colorSpace===Fr||Te===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let Se=N(w.image,!1,o.maxTextureSize);Se=St(w,Se);const Ce=l.convert(w.format,w.colorSpace),Fe=l.convert(w.type);let je=L(w.internalFormat,Ce,Fe,w.colorSpace,w.isVideoTexture);ee(he,w);let Ne;const lt=w.mipmaps,W=w.isVideoTexture!==!0,Ie=Xe.__version===void 0||pe===!0,Me=de.dataReady,Ue=I(w,Se);if(w.isDepthTexture)je=A(w.format===fs,w.type),Ie&&(W?n.texStorage2D(s.TEXTURE_2D,1,je,Se.width,Se.height):n.texImage2D(s.TEXTURE_2D,0,je,Se.width,Se.height,0,Ce,Fe,null));else if(w.isDataTexture)if(lt.length>0){W&&Ie&&n.texStorage2D(s.TEXTURE_2D,Ue,je,lt[0].width,lt[0].height);for(let ye=0,me=lt.length;ye<me;ye++)Ne=lt[ye],W?Me&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ne.width,Ne.height,Ce,Fe,Ne.data):n.texImage2D(s.TEXTURE_2D,ye,je,Ne.width,Ne.height,0,Ce,Fe,Ne.data);w.generateMipmaps=!1}else W?(Ie&&n.texStorage2D(s.TEXTURE_2D,Ue,je,Se.width,Se.height),Me&&De(w,Se,Ce,Fe)):n.texImage2D(s.TEXTURE_2D,0,je,Se.width,Se.height,0,Ce,Fe,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){W&&Ie&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,je,lt[0].width,lt[0].height,Se.depth);for(let ye=0,me=lt.length;ye<me;ye++)if(Ne=lt[ye],w.format!==wi)if(Ce!==null)if(W){if(Me)if(w.layerUpdates.size>0){const Ae=Om(Ne.width,Ne.height,w.format,w.type);for(const nt of w.layerUpdates){const It=Ne.data.subarray(nt*Ae/Ne.data.BYTES_PER_ELEMENT,(nt+1)*Ae/Ne.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,nt,Ne.width,Ne.height,1,Ce,It)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Ne.width,Ne.height,Se.depth,Ce,Ne.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,je,Ne.width,Ne.height,Se.depth,0,Ne.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Me&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Ne.width,Ne.height,Se.depth,Ce,Fe,Ne.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ye,je,Ne.width,Ne.height,Se.depth,0,Ce,Fe,Ne.data)}else{W&&Ie&&n.texStorage2D(s.TEXTURE_2D,Ue,je,lt[0].width,lt[0].height);for(let ye=0,me=lt.length;ye<me;ye++)Ne=lt[ye],w.format!==wi?Ce!==null?W?Me&&n.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,Ne.width,Ne.height,Ce,Ne.data):n.compressedTexImage2D(s.TEXTURE_2D,ye,je,Ne.width,Ne.height,0,Ne.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Me&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ne.width,Ne.height,Ce,Fe,Ne.data):n.texImage2D(s.TEXTURE_2D,ye,je,Ne.width,Ne.height,0,Ce,Fe,Ne.data)}else if(w.isDataArrayTexture)if(W){if(Ie&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ue,je,Se.width,Se.height,Se.depth),Me)if(w.layerUpdates.size>0){const ye=Om(Se.width,Se.height,w.format,w.type);for(const me of w.layerUpdates){const Ae=Se.data.subarray(me*ye/Se.data.BYTES_PER_ELEMENT,(me+1)*ye/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Se.width,Se.height,1,Ce,Fe,Ae)}w.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ce,Fe,Se.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,je,Se.width,Se.height,Se.depth,0,Ce,Fe,Se.data);else if(w.isData3DTexture)W?(Ie&&n.texStorage3D(s.TEXTURE_3D,Ue,je,Se.width,Se.height,Se.depth),Me&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ce,Fe,Se.data)):n.texImage3D(s.TEXTURE_3D,0,je,Se.width,Se.height,Se.depth,0,Ce,Fe,Se.data);else if(w.isFramebufferTexture){if(Ie)if(W)n.texStorage2D(s.TEXTURE_2D,Ue,je,Se.width,Se.height);else{let ye=Se.width,me=Se.height;for(let Ae=0;Ae<Ue;Ae++)n.texImage2D(s.TEXTURE_2D,Ae,je,ye,me,0,Ce,Fe,null),ye>>=1,me>>=1}}else if(lt.length>0){if(W&&Ie){const ye=He(lt[0]);n.texStorage2D(s.TEXTURE_2D,Ue,je,ye.width,ye.height)}for(let ye=0,me=lt.length;ye<me;ye++)Ne=lt[ye],W?Me&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ce,Fe,Ne):n.texImage2D(s.TEXTURE_2D,ye,je,Ce,Fe,Ne);w.generateMipmaps=!1}else if(W){if(Ie){const ye=He(Se);n.texStorage2D(s.TEXTURE_2D,Ue,je,ye.width,ye.height)}Me&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Fe,Se)}else n.texImage2D(s.TEXTURE_2D,0,je,Ce,Fe,Se);M(w)&&_(he),Xe.__version=de.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function fe(U,w,Y){if(w.image.length!==6)return;const he=ge(U,w),pe=w.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+Y);const de=r.get(pe);if(pe.version!==de.__version||he===!0){n.activeTexture(s.TEXTURE0+Y);const Xe=Rt.getPrimaries(Rt.workingColorSpace),Te=w.colorSpace===Fr?null:Rt.getPrimaries(w.colorSpace),ze=w.colorSpace===Fr||Xe===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Je=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,Ce=[];for(let me=0;me<6;me++)!Je&&!Se?Ce[me]=N(w.image[me],!0,o.maxCubemapSize):Ce[me]=Se?w.image[me].image:w.image[me],Ce[me]=St(w,Ce[me]);const Fe=Ce[0],je=l.convert(w.format,w.colorSpace),Ne=l.convert(w.type),lt=L(w.internalFormat,je,Ne,w.colorSpace),W=w.isVideoTexture!==!0,Ie=de.__version===void 0||he===!0,Me=pe.dataReady;let Ue=I(w,Fe);ee(s.TEXTURE_CUBE_MAP,w);let ye;if(Je){W&&Ie&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,lt,Fe.width,Fe.height);for(let me=0;me<6;me++){ye=Ce[me].mipmaps;for(let Ae=0;Ae<ye.length;Ae++){const nt=ye[Ae];w.format!==wi?je!==null?W?Me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae,0,0,nt.width,nt.height,je,nt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae,lt,nt.width,nt.height,0,nt.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae,0,0,nt.width,nt.height,je,Ne,nt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae,lt,nt.width,nt.height,0,je,Ne,nt.data)}}}else{if(ye=w.mipmaps,W&&Ie){ye.length>0&&Ue++;const me=He(Ce[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ue,lt,me.width,me.height)}for(let me=0;me<6;me++)if(Se){W?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ce[me].width,Ce[me].height,je,Ne,Ce[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,lt,Ce[me].width,Ce[me].height,0,je,Ne,Ce[me].data);for(let Ae=0;Ae<ye.length;Ae++){const It=ye[Ae].image[me].image;W?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae+1,0,0,It.width,It.height,je,Ne,It.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae+1,lt,It.width,It.height,0,je,Ne,It.data)}}else{W?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,je,Ne,Ce[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,lt,je,Ne,Ce[me]);for(let Ae=0;Ae<ye.length;Ae++){const nt=ye[Ae];W?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae+1,0,0,je,Ne,nt.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ae+1,lt,je,Ne,nt.image[me])}}}M(w)&&_(s.TEXTURE_CUBE_MAP),de.__version=pe.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function _e(U,w,Y,he,pe,de){const Xe=l.convert(Y.format,Y.colorSpace),Te=l.convert(Y.type),ze=L(Y.internalFormat,Xe,Te,Y.colorSpace),Je=r.get(w),Se=r.get(Y);if(Se.__renderTarget=w,!Je.__hasExternalTextures){const Ce=Math.max(1,w.width>>de),Fe=Math.max(1,w.height>>de);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?n.texImage3D(pe,de,ze,Ce,Fe,w.depth,0,Xe,Te,null):n.texImage2D(pe,de,ze,Ce,Fe,0,Xe,Te,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),Ot(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,pe,Se.__webglTexture,0,B(w)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,pe,Se.__webglTexture,de),n.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(U,w,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer){const he=w.depthTexture,pe=he&&he.isDepthTexture?he.type:null,de=A(w.stencilBuffer,pe),Xe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ot(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(w),de,w.width,w.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(w),de,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,de,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,U)}else{const he=w.textures;for(let pe=0;pe<he.length;pe++){const de=he[pe],Xe=l.convert(de.format,de.colorSpace),Te=l.convert(de.type),ze=L(de.internalFormat,Xe,Te,de.colorSpace);Ot(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(w),ze,w.width,w.height):Y?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(w),ze,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ze,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(U,w,Y){const he=w.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(w.depthTexture);if(pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,w.depthTexture.addEventListener("dispose",D)),pe.__webglTexture===void 0){pe.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),ee(s.TEXTURE_CUBE_MAP,w.depthTexture);const Je=l.convert(w.depthTexture.format),Se=l.convert(w.depthTexture.type);let Ce;w.depthTexture.format===cr?Ce=s.DEPTH_COMPONENT24:w.depthTexture.format===fs&&(Ce=s.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ce,w.width,w.height,0,Je,Se,null)}}else J(w.depthTexture,0);const de=pe.__webglTexture,Xe=B(w),Te=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+Y:s.TEXTURE_2D,ze=w.depthTexture.format===fs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===cr)Ot(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ze,Te,de,0,Xe):s.framebufferTexture2D(s.FRAMEBUFFER,ze,Te,de,0);else if(w.depthTexture.format===fs)Ot(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ze,Te,de,0,Xe):s.framebufferTexture2D(s.FRAMEBUFFER,ze,Te,de,0);else throw new Error("Unknown depthTexture format")}function dt(U){const w=r.get(U),Y=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const he=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",pe)};he.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=he}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(Y)for(let he=0;he<6;he++)Pe(w.__webglFramebuffer[he],U,he);else{const he=U.texture.mipmaps;he&&he.length>0?Pe(w.__webglFramebuffer[0],U,0):Pe(w.__webglFramebuffer,U,0)}else if(Y){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=s.createRenderbuffer(),ke(w.__webglDepthbuffer[he],U,!1);else{const pe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,de)}}else{const he=U.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ke(w.__webglDepthbuffer,U,!1);else{const pe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,de)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(U,w,Y){const he=r.get(U);w!==void 0&&_e(he.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&dt(U)}function ht(U){const w=U.texture,Y=r.get(U),he=r.get(w);U.addEventListener("dispose",F);const pe=U.textures,de=U.isWebGLCubeRenderTarget===!0,Xe=pe.length>1;if(Xe||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=w.version,u.memory.textures++),de){Y.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer[Te]=[];for(let ze=0;ze<w.mipmaps.length;ze++)Y.__webglFramebuffer[Te][ze]=s.createFramebuffer()}else Y.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Te=0;Te<w.mipmaps.length;Te++)Y.__webglFramebuffer[Te]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Te=0,ze=pe.length;Te<ze;Te++){const Je=r.get(pe[Te]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&Ot(U)===!1){Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Te=0;Te<pe.length;Te++){const ze=pe[Te];Y.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Te]);const Je=l.convert(ze.format,ze.colorSpace),Se=l.convert(ze.type),Ce=L(ze.internalFormat,Je,Se,ze.colorSpace,U.isXRRenderTarget===!0),Fe=B(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,Ce,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),ke(Y.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ee(s.TEXTURE_CUBE_MAP,w);for(let Te=0;Te<6;Te++)if(w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)_e(Y.__webglFramebuffer[Te][ze],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze);else _e(Y.__webglFramebuffer[Te],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);M(w)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Te=0,ze=pe.length;Te<ze;Te++){const Je=pe[Te],Se=r.get(Je);let Ce=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ce=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,Se.__webglTexture),ee(Ce,Je),_e(Y.__webglFramebuffer,U,Je,s.COLOR_ATTACHMENT0+Te,Ce,0),M(Je)&&_(Ce)}n.unbindTexture()}else{let Te=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Te=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Te,he.__webglTexture),ee(Te,w),w.mipmaps&&w.mipmaps.length>0)for(let ze=0;ze<w.mipmaps.length;ze++)_e(Y.__webglFramebuffer[ze],U,w,s.COLOR_ATTACHMENT0,Te,ze);else _e(Y.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,Te,0);M(w)&&_(Te),n.unbindTexture()}U.depthBuffer&&dt(U)}function pt(U){const w=U.textures;for(let Y=0,he=w.length;Y<he;Y++){const pe=w[Y];if(M(pe)){const de=C(U),Xe=r.get(pe).__webglTexture;n.bindTexture(de,Xe),_(de),n.unbindTexture()}}}const Mt=[],st=[];function vt(U){if(U.samples>0){if(Ot(U)===!1){const w=U.textures,Y=U.width,he=U.height;let pe=s.COLOR_BUFFER_BIT;const de=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(U),Te=w.length>1;if(Te)for(let Je=0;Je<w.length;Je++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Je,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Je,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const ze=U.texture.mipmaps;ze&&ze.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Je=0;Je<w.length;Je++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Je]);const Se=r.get(w[Je]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,Y,he,0,0,Y,he,pe,s.NEAREST),p===!0&&(Mt.length=0,st.length=0,Mt.push(s.COLOR_ATTACHMENT0+Je),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Mt.push(de),st.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,st)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Mt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let Je=0;Je<w.length;Je++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Je,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Je]);const Se=r.get(w[Je]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Je,s.TEXTURE_2D,Se,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function B(U){return Math.min(o.maxSamples,U.samples)}function Ot(U){const w=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function _t(U){const w=u.render.frame;x.get(U)!==w&&(x.set(U,w),U.update())}function St(U,w){const Y=U.colorSpace,he=U.format,pe=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Y!==aa&&Y!==Fr&&(Rt.getTransfer(Y)===kt?(he!==wi||pe!==ei)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",Y)),w}function He(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=Q,this.setTexture2D=J,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=j,this.rebindTextures=Bt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function jw(s,e){function n(r,o=Fr){let l;const u=Rt.getTransfer(o);if(r===ei)return s.UNSIGNED_BYTE;if(r===gf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===b0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===T0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===w0)return s.BYTE;if(r===E0)return s.SHORT;if(r===ro)return s.UNSIGNED_SHORT;if(r===mf)return s.INT;if(r===Vi)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===lr)return s.HALF_FLOAT;if(r===C0)return s.ALPHA;if(r===A0)return s.RGB;if(r===wi)return s.RGBA;if(r===cr)return s.DEPTH_COMPONENT;if(r===fs)return s.DEPTH_STENCIL;if(r===R0)return s.RED;if(r===vf)return s.RED_INTEGER;if(r===sa)return s.RG;if(r===_f)return s.RG_INTEGER;if(r===yf)return s.RGBA_INTEGER;if(r===jl||r===Gl||r===Hl||r===Wl)if(u===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Hl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pd||r===Ld||r===Dd||r===Id)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Pd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ld)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Id)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ud||r===Fd||r===Od||r===kd||r===Bd||r===zd||r===Vd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Ud||r===Fd)return u===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Od)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===kd)return l.COMPRESSED_R11_EAC;if(r===Bd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===zd)return l.COMPRESSED_RG11_EAC;if(r===Vd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===jd||r===Gd||r===Hd||r===Wd||r===Xd||r===qd||r===$d||r===Yd||r===Kd||r===Zd||r===Qd||r===Jd||r===ef||r===tf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===jd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Hd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Wd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===qd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$d)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Qd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Jd)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ef)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===tf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===nf||r===rf||r===sf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===nf)return u===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===af||r===of||r===lf||r===cf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===af)return l.COMPRESSED_RED_RGTC1_EXT;if(r===of)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===so?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const Gw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hw=`
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

}`;class Ww{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new V0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Gi({vertexShader:Gw,fragmentShader:Hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ct(new hs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xw extends ca{constructor(e,n){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,m=null,x=null,v=null,y=null,S=null,T=null;const N=typeof XRWebGLBinding<"u",M=new Ww,_={},C=n.getContextAttributes();let L=null,A=null;const I=[],D=[],F=new Tt;let G=null;const b=new Gn;b.viewport=new Zt;const P=new Gn;P.viewport=new Zt;const z=[b,P],Q=new t1;let Z=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let fe=I[ie];return fe===void 0&&(fe=new id,I[ie]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ie){let fe=I[ie];return fe===void 0&&(fe=new id,I[ie]=fe),fe.getGripSpace()},this.getHand=function(ie){let fe=I[ie];return fe===void 0&&(fe=new id,I[ie]=fe),fe.getHandSpace()};function J(ie){const fe=D.indexOf(ie.inputSource);if(fe===-1)return;const _e=I[fe];_e!==void 0&&(_e.update(ie.inputSource,ie.frame,m||u),_e.dispatchEvent({type:ie.type,data:ie.inputSource}))}function H(){o.removeEventListener("select",J),o.removeEventListener("selectstart",J),o.removeEventListener("selectend",J),o.removeEventListener("squeeze",J),o.removeEventListener("squeezestart",J),o.removeEventListener("squeezeend",J),o.removeEventListener("end",H),o.removeEventListener("inputsourceschange",$);for(let ie=0;ie<I.length;ie++){const fe=D[ie];fe!==null&&(D[ie]=null,I[ie].disconnect(fe))}Z=null,X=null,M.reset();for(const ie in _)delete _[ie];e.setRenderTarget(L),S=null,y=null,v=null,o=null,A=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(G),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){d=ie,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v===null&&N&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",J),o.addEventListener("selectstart",J),o.addEventListener("selectend",J),o.addEventListener("squeeze",J),o.addEventListener("squeezestart",J),o.addEventListener("squeezeend",J),o.addEventListener("end",H),o.addEventListener("inputsourceschange",$),C.xrCompatible!==!0&&await n.makeXRCompatible(),G=e.getPixelRatio(),e.getSize(F),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,ke=null,Pe=null;C.depth&&(Pe=C.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,_e=C.stencil?fs:cr,ke=C.stencil?so:Vi);const dt={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:l};v=this.getBinding(),y=v.createProjectionLayer(dt),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),A=new Bi(y.textureWidth,y.textureHeight,{format:wi,type:ei,depthTexture:new lo(y.textureWidth,y.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const _e={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,_e),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),A=new Bi(S.framebufferWidth,S.framebufferHeight,{format:wi,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),De.setContext(o),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(ie){for(let fe=0;fe<ie.removed.length;fe++){const _e=ie.removed[fe],ke=D.indexOf(_e);ke>=0&&(D[ke]=null,I[ke].disconnect(_e))}for(let fe=0;fe<ie.added.length;fe++){const _e=ie.added[fe];let ke=D.indexOf(_e);if(ke===-1){for(let dt=0;dt<I.length;dt++)if(dt>=D.length){D.push(_e),ke=dt;break}else if(D[dt]===null){D[dt]=_e,ke=dt;break}if(ke===-1)break}const Pe=I[ke];Pe&&Pe.connect(_e)}}const j=new re,oe=new re;function se(ie,fe,_e){j.setFromMatrixPosition(fe.matrixWorld),oe.setFromMatrixPosition(_e.matrixWorld);const ke=j.distanceTo(oe),Pe=fe.projectionMatrix.elements,dt=_e.projectionMatrix.elements,Bt=Pe[14]/(Pe[10]-1),ht=Pe[14]/(Pe[10]+1),pt=(Pe[9]+1)/Pe[5],Mt=(Pe[9]-1)/Pe[5],st=(Pe[8]-1)/Pe[0],vt=(dt[8]+1)/dt[0],B=Bt*st,Ot=Bt*vt,_t=ke/(-st+vt),St=_t*-st;if(fe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(St),ie.translateZ(_t),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Pe[10]===-1)ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const He=Bt+_t,U=ht+_t,w=B-St,Y=Ot+(ke-St),he=pt*ht/U*He,pe=Mt*ht/U*He;ie.projectionMatrix.makePerspective(w,Y,he,pe,He,U),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function O(ie,fe){fe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(fe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let fe=ie.near,_e=ie.far;M.texture!==null&&(M.depthNear>0&&(fe=M.depthNear),M.depthFar>0&&(_e=M.depthFar)),Q.near=P.near=b.near=fe,Q.far=P.far=b.far=_e,(Z!==Q.near||X!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),Z=Q.near,X=Q.far),Q.layers.mask=ie.layers.mask|6,b.layers.mask=Q.layers.mask&3,P.layers.mask=Q.layers.mask&5;const ke=ie.parent,Pe=Q.cameras;O(Q,ke);for(let dt=0;dt<Pe.length;dt++)O(Pe[dt],ke);Pe.length===2?se(Q,b,P):Q.projectionMatrix.copy(b.projectionMatrix),ee(ie,Q,ke)};function ee(ie,fe,_e){_e===null?ie.matrix.copy(fe.matrixWorld):(ie.matrix.copy(_e.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(fe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=oa*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(ie){p=ie,y!==null&&(y.fixedFoveation=ie),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ie)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(ie){return _[ie]};let ge=null;function Ee(ie,fe){if(x=fe.getViewerPose(m||u),T=fe,x!==null){const _e=x.views;S!==null&&(e.setRenderTargetFramebuffer(A,S.framebuffer),e.setRenderTarget(A));let ke=!1;_e.length!==Q.cameras.length&&(Q.cameras.length=0,ke=!0);for(let ht=0;ht<_e.length;ht++){const pt=_e[ht];let Mt=null;if(S!==null)Mt=S.getViewport(pt);else{const vt=v.getViewSubImage(y,pt);Mt=vt.viewport,ht===0&&(e.setRenderTargetTextures(A,vt.colorTexture,vt.depthStencilTexture),e.setRenderTarget(A))}let st=z[ht];st===void 0&&(st=new Gn,st.layers.enable(ht),st.viewport=new Zt,z[ht]=st),st.matrix.fromArray(pt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(pt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ht===0&&(Q.matrix.copy(st.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),ke===!0&&Q.cameras.push(st)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){v=r.getBinding();const ht=v.getDepthInformation(_e[0]);ht&&ht.isValid&&ht.texture&&M.init(ht,o.renderState)}if(Pe&&Pe.includes("camera-access")&&N){e.state.unbindTexture(),v=r.getBinding();for(let ht=0;ht<_e.length;ht++){const pt=_e[ht].camera;if(pt){let Mt=_[pt];Mt||(Mt=new V0,_[pt]=Mt);const st=v.getCameraImage(pt);Mt.sourceTexture=st}}}}for(let _e=0;_e<I.length;_e++){const ke=D[_e],Pe=I[_e];ke!==null&&Pe!==void 0&&Pe.update(ke,fe,m||u)}ge&&ge(ie,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),T=null}const De=new H0;De.setAnimationLoop(Ee),this.setAnimationLoop=function(ie){ge=ie},this.dispose=function(){}}}const as=new ji,qw=new Qt;function $w(s,e){function n(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,O0(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function o(M,_,C,L,A){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(M,_):_.isMeshToonMaterial?(l(M,_),v(M,_)):_.isMeshPhongMaterial?(l(M,_),x(M,_)):_.isMeshStandardMaterial?(l(M,_),y(M,_),_.isMeshPhysicalMaterial&&S(M,_,A)):_.isMeshMatcapMaterial?(l(M,_),T(M,_)):_.isMeshDepthMaterial?l(M,_):_.isMeshDistanceMaterial?(l(M,_),N(M,_)):_.isMeshNormalMaterial?l(M,_):_.isLineBasicMaterial?(u(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,C,L):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,n(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Hn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,n(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Hn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,n(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,n(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const C=e.get(_),L=C.envMap,A=C.envMapRotation;L&&(M.envMap.value=L,as.copy(A),as.x*=-1,as.y*=-1,as.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),M.envMapRotation.value.setFromMatrix4(qw.makeRotationFromEuler(as)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,M.aoMapTransform))}function u(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,C,L){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*C,M.scale.value=L*.5,_.map&&(M.map.value=_.map,n(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,C){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Hn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,_){_.matcap&&(M.matcap.value=_.matcap)}function N(M,_){const C=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Yw(s,e,n,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,L){const A=L.program;r.uniformBlockBinding(C,A)}function m(C,L){let A=o[C.id];A===void 0&&(T(C),A=x(C),o[C.id]=A,C.addEventListener("dispose",M));const I=L.program;r.updateUBOMapping(C,I);const D=e.render.frame;l[C.id]!==D&&(y(C),l[C.id]=D)}function x(C){const L=v();C.__bindingPointIndex=L;const A=s.createBuffer(),I=C.__size,D=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,I,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,A),A}function v(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(C){const L=o[C.id],A=C.uniforms,I=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let D=0,F=A.length;D<F;D++){const G=Array.isArray(A[D])?A[D]:[A[D]];for(let b=0,P=G.length;b<P;b++){const z=G[b];if(S(z,D,b,I)===!0){const Q=z.__offset,Z=Array.isArray(z.value)?z.value:[z.value];let X=0;for(let J=0;J<Z.length;J++){const H=Z[J],$=N(H);typeof H=="number"||typeof H=="boolean"?(z.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,Q+X,z.__data)):H.isMatrix3?(z.__data[0]=H.elements[0],z.__data[1]=H.elements[1],z.__data[2]=H.elements[2],z.__data[3]=0,z.__data[4]=H.elements[3],z.__data[5]=H.elements[4],z.__data[6]=H.elements[5],z.__data[7]=0,z.__data[8]=H.elements[6],z.__data[9]=H.elements[7],z.__data[10]=H.elements[8],z.__data[11]=0):(H.toArray(z.__data,X),X+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Q,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,L,A,I){const D=C.value,F=L+"_"+A;if(I[F]===void 0)return typeof D=="number"||typeof D=="boolean"?I[F]=D:I[F]=D.clone(),!0;{const G=I[F];if(typeof D=="number"||typeof D=="boolean"){if(G!==D)return I[F]=D,!0}else if(G.equals(D)===!1)return G.copy(D),!0}return!1}function T(C){const L=C.uniforms;let A=0;const I=16;for(let F=0,G=L.length;F<G;F++){const b=Array.isArray(L[F])?L[F]:[L[F]];for(let P=0,z=b.length;P<z;P++){const Q=b[P],Z=Array.isArray(Q.value)?Q.value:[Q.value];for(let X=0,J=Z.length;X<J;X++){const H=Z[X],$=N(H),j=A%I,oe=j%$.boundary,se=j+oe;A+=oe,se!==0&&I-se<$.storage&&(A+=I-se),Q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=A,A+=$.storage}}}const D=A%I;return D>0&&(A+=I-D),C.__size=A,C.__cache={},this}function N(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",C),L}function M(C){const L=C.target;L.removeEventListener("dispose",M);const A=u.indexOf(L.__bindingPointIndex);u.splice(A,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function _(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:p,update:m,dispose:_}}const Kw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function Zw(){return Li===null&&(Li=new B_(Kw,16,16,sa,lr),Li.name="DFG_LUT",Li.minFilter=Cn,Li.magFilter=Cn,Li.wrapS=rr,Li.wrapT=rr,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class Qw{constructor(e={}){const{canvas:n=Kv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1,outputBufferType:S=ei}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const N=S,M=new Set([yf,_f,vf]),_=new Set([ei,Vi,ro,so,gf,xf]),C=new Uint32Array(4),L=new Int32Array(4);let A=null,I=null;const D=[],F=[];let G=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ki,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1;this._outputColorSpace=Jn;let z=0,Q=0,Z=null,X=-1,J=null;const H=new Zt,$=new Zt;let j=null;const oe=new Nt(0);let se=0,O=n.width,ee=n.height,ge=1,Ee=null,De=null;const ie=new Zt(0,0,O,ee),fe=new Zt(0,0,O,ee);let _e=!1;const ke=new Cf;let Pe=!1,dt=!1;const Bt=new Qt,ht=new re,pt=new Zt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function vt(){return Z===null?ge:1}let B=r;function Ot(R,K){return n.getContext(R,K)}try{const R={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${pf}`),n.addEventListener("webglcontextlost",nt,!1),n.addEventListener("webglcontextrestored",It,!1),n.addEventListener("webglcontextcreationerror",wt,!1),B===null){const K="webgl2";if(B=Ot(K,R),B===null)throw Ot(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Dt("WebGLRenderer: "+R.message),R}let _t,St,He,U,w,Y,he,pe,de,Xe,Te,ze,Je,Se,Ce,Fe,je,Ne,lt,W,Ie,Me,Ue,ye;function me(){_t=new ZS(B),_t.init(),Me=new jw(B,_t),St=new jS(B,_t,e,Me),He=new zw(B,_t),St.reversedDepthBuffer&&y&&He.buffers.depth.setReversed(!0),U=new eM(B),w=new bw,Y=new Vw(B,_t,He,w,St,Me,U),he=new HS(b),pe=new KS(b),de=new r1(B),Ue=new zS(B,de),Xe=new QS(B,de,U,Ue),Te=new nM(B,Xe,de,U),lt=new tM(B,St,Y),Fe=new GS(w),ze=new Ew(b,he,pe,_t,St,Ue,Fe),Je=new $w(b,w),Se=new Cw,Ce=new Dw(_t),Ne=new BS(b,he,pe,He,Te,T,p),je=new kw(b,Te,St),ye=new Yw(B,U,St,He),W=new VS(B,_t,U),Ie=new JS(B,_t,U),U.programs=ze.programs,b.capabilities=St,b.extensions=_t,b.properties=w,b.renderLists=Se,b.shadowMap=je,b.state=He,b.info=U}me(),N!==ei&&(G=new rM(N,n.width,n.height,o,l));const Ae=new Xw(b,B);this.xr=Ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const R=_t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=_t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(R){R!==void 0&&(ge=R,this.setSize(O,ee,!1))},this.getSize=function(R){return R.set(O,ee)},this.setSize=function(R,K,ue=!0){if(Ae.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,ee=K,n.width=Math.floor(R*ge),n.height=Math.floor(K*ge),ue===!0&&(n.style.width=R+"px",n.style.height=K+"px"),G!==null&&G.setSize(n.width,n.height),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(O*ge,ee*ge).floor()},this.setDrawingBufferSize=function(R,K,ue){O=R,ee=K,ge=ue,n.width=Math.floor(R*ue),n.height=Math.floor(K*ue),this.setViewport(0,0,R,K)},this.setEffects=function(R){if(N===ei){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let K=0;K<R.length;K++)if(R[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(ie)},this.setViewport=function(R,K,ue,le){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,K,ue,le),He.viewport(H.copy(ie).multiplyScalar(ge).round())},this.getScissor=function(R){return R.copy(fe)},this.setScissor=function(R,K,ue,le){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,K,ue,le),He.scissor($.copy(fe).multiplyScalar(ge).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(R){He.setScissorTest(_e=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){De=R},this.getClearColor=function(R){return R.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ue=!0){let le=0;if(R){let ne=!1;if(Z!==null){const Le=Z.texture.format;ne=M.has(Le)}if(ne){const Le=Z.texture.type,Be=_.has(Le),Re=Ne.getClearColor(),qe=Ne.getClearAlpha(),Ge=Re.r,it=Re.g,Ze=Re.b;Be?(C[0]=Ge,C[1]=it,C[2]=Ze,C[3]=qe,B.clearBufferuiv(B.COLOR,0,C)):(L[0]=Ge,L[1]=it,L[2]=Ze,L[3]=qe,B.clearBufferiv(B.COLOR,0,L))}else le|=B.COLOR_BUFFER_BIT}K&&(le|=B.DEPTH_BUFFER_BIT),ue&&(le|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",nt,!1),n.removeEventListener("webglcontextrestored",It,!1),n.removeEventListener("webglcontextcreationerror",wt,!1),Ne.dispose(),Se.dispose(),Ce.dispose(),w.dispose(),he.dispose(),pe.dispose(),Te.dispose(),Ue.dispose(),ye.dispose(),ze.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",bi),Ae.removeEventListener("sessionend",fi),Pn.stop()};function nt(R){R.preventDefault(),gm("WebGLRenderer: Context Lost."),P=!0}function It(){gm("WebGLRenderer: Context Restored."),P=!1;const R=U.autoReset,K=je.enabled,ue=je.autoUpdate,le=je.needsUpdate,ne=je.type;me(),U.autoReset=R,je.enabled=K,je.autoUpdate=ue,je.needsUpdate=le,je.type=ne}function wt(R){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Nn(R){const K=R.target;K.removeEventListener("dispose",Nn),nn(K)}function nn(R){Br(R),w.remove(R)}function Br(R){const K=w.get(R).programs;K!==void 0&&(K.forEach(function(ue){ze.releaseProgram(ue)}),R.isShaderMaterial&&ze.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ue,le,ne,Le){K===null&&(K=Mt);const Be=ne.isMesh&&ne.matrixWorld.determinant()<0,Re=mo(R,K,ue,le,ne);He.setMaterial(le,Be);let qe=ue.index,Ge=1;if(le.wireframe===!0){if(qe=Xe.getWireframeAttribute(ue),qe===void 0)return;Ge=2}const it=ue.drawRange,Ze=ue.attributes.position;let gt=it.start*Ge,Ct=(it.start+it.count)*Ge;Le!==null&&(gt=Math.max(gt,Le.start*Ge),Ct=Math.min(Ct,(Le.start+Le.count)*Ge)),qe!==null?(gt=Math.max(gt,0),Ct=Math.min(Ct,qe.count)):Ze!=null&&(gt=Math.max(gt,0),Ct=Math.min(Ct,Ze.count));const Vt=Ct-gt;if(Vt<0||Vt===1/0)return;Ue.setup(ne,le,Re,ue,qe);let zt,Pt=W;if(qe!==null&&(zt=de.get(qe),Pt=Ie,Pt.setIndex(zt)),ne.isMesh)le.wireframe===!0?(He.setLineWidth(le.wireframeLinewidth*vt()),Pt.setMode(B.LINES)):Pt.setMode(B.TRIANGLES);else if(ne.isLine){let Qe=le.linewidth;Qe===void 0&&(Qe=1),He.setLineWidth(Qe*vt()),ne.isLineSegments?Pt.setMode(B.LINES):ne.isLineLoop?Pt.setMode(B.LINE_LOOP):Pt.setMode(B.LINE_STRIP)}else ne.isPoints?Pt.setMode(B.POINTS):ne.isSprite&&Pt.setMode(B.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)oo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Qe=ne._multiDrawStarts,Ut=ne._multiDrawCounts,Et=ne._multiDrawCount,yn=qe?de.get(qe).bytesPerElement:1,Ti=w.get(le).currentProgram.getUniforms();for(let rn=0;rn<Et;rn++)Ti.setValue(B,"_gl_DrawID",rn),Pt.render(Qe[rn]/yn,Ut[rn])}else if(ne.isInstancedMesh)Pt.renderInstances(gt,Vt,ne.count);else if(ue.isInstancedBufferGeometry){const Qe=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ut=Math.min(ue.instanceCount,Qe);Pt.renderInstances(gt,Vt,Ut)}else Pt.render(gt,Vt)};function di(R,K,ue){R.transparent===!0&&R.side===ir&&R.forceSinglePass===!1?(R.side=Hn,R.needsUpdate=!0,Vr(R,K,ue),R.side=kr,R.needsUpdate=!0,Vr(R,K,ue),R.side=ir):Vr(R,K,ue)}this.compile=function(R,K,ue=null){ue===null&&(ue=R),I=Ce.get(ue),I.init(K),F.push(I),ue.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(I.pushLight(ne),ne.castShadow&&I.pushShadow(ne))}),R!==ue&&R.traverseVisible(function(ne){ne.isLight&&ne.layers.test(K.layers)&&(I.pushLight(ne),ne.castShadow&&I.pushShadow(ne))}),I.setupLights();const le=new Set;return R.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Le=ne.material;if(Le)if(Array.isArray(Le))for(let Be=0;Be<Le.length;Be++){const Re=Le[Be];di(Re,ue,ne),le.add(Re)}else di(Le,ue,ne),le.add(Le)}),I=F.pop(),le},this.compileAsync=function(R,K,ue=null){const le=this.compile(R,K,ue);return new Promise(ne=>{function Le(){if(le.forEach(function(Be){w.get(Be).currentProgram.isReady()&&le.delete(Be)}),le.size===0){ne(R);return}setTimeout(Le,10)}_t.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let ur=null;function Ei(R){ur&&ur(R)}function bi(){Pn.stop()}function fi(){Pn.start()}const Pn=new H0;Pn.setAnimationLoop(Ei),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(R){ur=R,Ae.setAnimationLoop(R),R===null?Pn.stop():Pn.start()},Ae.addEventListener("sessionstart",bi),Ae.addEventListener("sessionend",fi),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const ue=Ae.enabled===!0&&Ae.isPresenting===!0,le=G!==null&&(Z===null||ue)&&G.begin(b,Z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(K),K=Ae.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,K,Z),I=Ce.get(R,F.length),I.init(K),F.push(I),Bt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ke.setFromProjectionMatrix(Bt,Oi,K.reversedDepth),dt=this.localClippingEnabled,Pe=Fe.init(this.clippingPlanes,dt),A=Se.get(R,D.length),A.init(),D.push(A),Ae.enabled===!0&&Ae.isPresenting===!0){const Be=b.xr.getDepthSensingMesh();Be!==null&&Wn(Be,K,-1/0,b.sortObjects)}Wn(R,K,0,b.sortObjects),A.finish(),b.sortObjects===!0&&A.sort(Ee,De),st=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,st&&Ne.addToRenderList(A,R),this.info.render.frame++,Pe===!0&&Fe.beginShadows();const ne=I.state.shadowsArray;if(je.render(ne,R,K),Pe===!0&&Fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&G.hasRenderPass())===!1){const Be=A.opaque,Re=A.transmissive;if(I.setupLights(),K.isArrayCamera){const qe=K.cameras;if(Re.length>0)for(let Ge=0,it=qe.length;Ge<it;Ge++){const Ze=qe[Ge];zr(Be,Re,R,Ze)}st&&Ne.render(R);for(let Ge=0,it=qe.length;Ge<it;Ge++){const Ze=qe[Ge];ti(A,R,Ze,Ze.viewport)}}else Re.length>0&&zr(Be,Re,R,K),st&&Ne.render(R),ti(A,R,K)}Z!==null&&Q===0&&(Y.updateMultisampleRenderTarget(Z),Y.updateRenderTargetMipmap(Z)),le&&G.end(b),R.isScene===!0&&R.onAfterRender(b,R,K),Ue.resetDefaultState(),X=-1,J=null,F.pop(),F.length>0?(I=F[F.length-1],Pe===!0&&Fe.setGlobalState(b.clippingPlanes,I.state.camera)):I=null,D.pop(),D.length>0?A=D[D.length-1]:A=null};function Wn(R,K,ue,le){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ke.intersectsSprite(R)){le&&pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Bt);const Be=Te.update(R),Re=R.material;Re.visible&&A.push(R,Be,Re,ue,pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ke.intersectsObject(R))){const Be=Te.update(R),Re=R.material;if(le&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),pt.copy(R.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),pt.copy(Be.boundingSphere.center)),pt.applyMatrix4(R.matrixWorld).applyMatrix4(Bt)),Array.isArray(Re)){const qe=Be.groups;for(let Ge=0,it=qe.length;Ge<it;Ge++){const Ze=qe[Ge],gt=Re[Ze.materialIndex];gt&&gt.visible&&A.push(R,Be,gt,ue,pt.z,Ze)}}else Re.visible&&A.push(R,Be,Re,ue,pt.z,null)}}const Le=R.children;for(let Be=0,Re=Le.length;Be<Re;Be++)Wn(Le[Be],K,ue,le)}function ti(R,K,ue,le){const{opaque:ne,transmissive:Le,transparent:Be}=R;I.setupLightsView(ue),Pe===!0&&Fe.setGlobalState(b.clippingPlanes,ue),le&&He.viewport(H.copy(le)),ne.length>0&&ni(ne,K,ue),Le.length>0&&ni(Le,K,ue),Be.length>0&&ni(Be,K,ue),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function zr(R,K,ue,le){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[le.id]===void 0){const gt=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[le.id]=new Bi(1,1,{generateMipmaps:!0,type:gt?lr:ei,minFilter:ds,samples:St.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Le=I.state.transmissionRenderTarget[le.id],Be=le.viewport||H;Le.setSize(Be.z*b.transmissionResolutionScale,Be.w*b.transmissionResolutionScale);const Re=b.getRenderTarget(),qe=b.getActiveCubeFace(),Ge=b.getActiveMipmapLevel();b.setRenderTarget(Le),b.getClearColor(oe),se=b.getClearAlpha(),se<1&&b.setClearColor(16777215,.5),b.clear(),st&&Ne.render(ue);const it=b.toneMapping;b.toneMapping=ki;const Ze=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),I.setupLightsView(le),Pe===!0&&Fe.setGlobalState(b.clippingPlanes,le),ni(R,ue,le),Y.updateMultisampleRenderTarget(Le),Y.updateRenderTargetMipmap(Le),_t.has("WEBGL_multisampled_render_to_texture")===!1){let gt=!1;for(let Ct=0,Vt=K.length;Ct<Vt;Ct++){const zt=K[Ct],{object:Pt,geometry:Qe,material:Ut,group:Et}=zt;if(Ut.side===ir&&Pt.layers.test(le.layers)){const yn=Ut.side;Ut.side=Hn,Ut.needsUpdate=!0,fa(Pt,ue,le,Qe,Ut,Et),Ut.side=yn,Ut.needsUpdate=!0,gt=!0}}gt===!0&&(Y.updateMultisampleRenderTarget(Le),Y.updateRenderTargetMipmap(Le))}b.setRenderTarget(Re,qe,Ge),b.setClearColor(oe,se),Ze!==void 0&&(le.viewport=Ze),b.toneMapping=it}function ni(R,K,ue){const le=K.isScene===!0?K.overrideMaterial:null;for(let ne=0,Le=R.length;ne<Le;ne++){const Be=R[ne],{object:Re,geometry:qe,group:Ge}=Be;let it=Be.material;it.allowOverride===!0&&le!==null&&(it=le),Re.layers.test(ue.layers)&&fa(Re,K,ue,qe,it,Ge)}}function fa(R,K,ue,le,ne,Le){R.onBeforeRender(b,K,ue,le,ne,Le),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ne.onBeforeRender(b,K,ue,le,R,Le),ne.transparent===!0&&ne.side===ir&&ne.forceSinglePass===!1?(ne.side=Hn,ne.needsUpdate=!0,b.renderBufferDirect(ue,K,le,ne,R,Le),ne.side=kr,ne.needsUpdate=!0,b.renderBufferDirect(ue,K,le,ne,R,Le),ne.side=ir):b.renderBufferDirect(ue,K,le,ne,R,Le),R.onAfterRender(b,K,ue,le,ne,Le)}function Vr(R,K,ue){K.isScene!==!0&&(K=Mt);const le=w.get(R),ne=I.state.lights,Le=I.state.shadowsArray,Be=ne.state.version,Re=ze.getParameters(R,ne.state,Le,K,ue),qe=ze.getProgramCacheKey(Re);let Ge=le.programs;le.environment=R.isMeshStandardMaterial?K.environment:null,le.fog=K.fog,le.envMap=(R.isMeshStandardMaterial?pe:he).get(R.envMap||le.environment),le.envMapRotation=le.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,Ge===void 0&&(R.addEventListener("dispose",Nn),Ge=new Map,le.programs=Ge);let it=Ge.get(qe);if(it!==void 0){if(le.currentProgram===it&&le.lightsStateVersion===Be)return ha(R,Re),it}else Re.uniforms=ze.getUniforms(R),R.onBeforeCompile(Re,b),it=ze.acquireProgram(Re,qe),Ge.set(qe,it),le.uniforms=Re.uniforms;const Ze=le.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ze.clippingPlanes=Fe.uniform),ha(R,Re),le.needsLights=xo(R),le.lightsStateVersion=Be,le.needsLights&&(Ze.ambientLightColor.value=ne.state.ambient,Ze.lightProbe.value=ne.state.probe,Ze.directionalLights.value=ne.state.directional,Ze.directionalLightShadows.value=ne.state.directionalShadow,Ze.spotLights.value=ne.state.spot,Ze.spotLightShadows.value=ne.state.spotShadow,Ze.rectAreaLights.value=ne.state.rectArea,Ze.ltc_1.value=ne.state.rectAreaLTC1,Ze.ltc_2.value=ne.state.rectAreaLTC2,Ze.pointLights.value=ne.state.point,Ze.pointLightShadows.value=ne.state.pointShadow,Ze.hemisphereLights.value=ne.state.hemi,Ze.directionalShadowMap.value=ne.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ze.spotShadowMap.value=ne.state.spotShadowMap,Ze.spotLightMatrix.value=ne.state.spotLightMatrix,Ze.spotLightMap.value=ne.state.spotLightMap,Ze.pointShadowMap.value=ne.state.pointShadowMap,Ze.pointShadowMatrix.value=ne.state.pointShadowMatrix),le.currentProgram=it,le.uniformsList=null,it}function po(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Xl.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function ha(R,K){const ue=w.get(R);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function mo(R,K,ue,le,ne){K.isScene!==!0&&(K=Mt),Y.resetTextureUnits();const Le=K.fog,Be=le.isMeshStandardMaterial?K.environment:null,Re=Z===null?b.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:aa,qe=(le.isMeshStandardMaterial?pe:he).get(le.envMap||Be),Ge=le.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,it=!!ue.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ze=!!ue.morphAttributes.position,gt=!!ue.morphAttributes.normal,Ct=!!ue.morphAttributes.color;let Vt=ki;le.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Vt=b.toneMapping);const zt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Pt=zt!==void 0?zt.length:0,Qe=w.get(le),Ut=I.state.lights;if(Pe===!0&&(dt===!0||R!==J)){const cn=R===J&&le.id===X;Fe.setState(le,R,cn)}let Et=!1;le.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ut.state.version||Qe.outputColorSpace!==Re||ne.isBatchedMesh&&Qe.batching===!1||!ne.isBatchedMesh&&Qe.batching===!0||ne.isBatchedMesh&&Qe.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Qe.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Qe.instancing===!1||!ne.isInstancedMesh&&Qe.instancing===!0||ne.isSkinnedMesh&&Qe.skinning===!1||!ne.isSkinnedMesh&&Qe.skinning===!0||ne.isInstancedMesh&&Qe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Qe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Qe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Qe.instancingMorph===!1&&ne.morphTexture!==null||Qe.envMap!==qe||le.fog===!0&&Qe.fog!==Le||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Fe.numPlanes||Qe.numIntersection!==Fe.numIntersection)||Qe.vertexAlphas!==Ge||Qe.vertexTangents!==it||Qe.morphTargets!==Ze||Qe.morphNormals!==gt||Qe.morphColors!==Ct||Qe.toneMapping!==Vt||Qe.morphTargetsCount!==Pt)&&(Et=!0):(Et=!0,Qe.__version=le.version);let yn=Qe.currentProgram;Et===!0&&(yn=Vr(le,K,ne));let Ti=!1,rn=!1,jr=!1;const Ft=yn.getUniforms(),ft=Qe.uniforms;if(He.useProgram(yn.program)&&(Ti=!0,rn=!0,jr=!0),le.id!==X&&(X=le.id,rn=!0),Ti||J!==R){He.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(B,"projectionMatrix",R.projectionMatrix),Ft.setValue(B,"viewMatrix",R.matrixWorldInverse);const un=Ft.map.cameraPosition;un!==void 0&&un.setValue(B,ht.setFromMatrixPosition(R.matrixWorld)),St.logarithmicDepthBuffer&&Ft.setValue(B,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ft.setValue(B,"isOrthographic",R.isOrthographicCamera===!0),J!==R&&(J=R,rn=!0,jr=!0)}if(Qe.needsLights&&(Ut.state.directionalShadowMap.length>0&&Ft.setValue(B,"directionalShadowMap",Ut.state.directionalShadowMap,Y),Ut.state.spotShadowMap.length>0&&Ft.setValue(B,"spotShadowMap",Ut.state.spotShadowMap,Y),Ut.state.pointShadowMap.length>0&&Ft.setValue(B,"pointShadowMap",Ut.state.pointShadowMap,Y)),ne.isSkinnedMesh){Ft.setOptional(B,ne,"bindMatrix"),Ft.setOptional(B,ne,"bindMatrixInverse");const cn=ne.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Ft.setValue(B,"boneTexture",cn.boneTexture,Y))}ne.isBatchedMesh&&(Ft.setOptional(B,ne,"batchingTexture"),Ft.setValue(B,"batchingTexture",ne._matricesTexture,Y),Ft.setOptional(B,ne,"batchingIdTexture"),Ft.setValue(B,"batchingIdTexture",ne._indirectTexture,Y),Ft.setOptional(B,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ft.setValue(B,"batchingColorTexture",ne._colorsTexture,Y));const Ln=ue.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&lt.update(ne,ue,yn),(rn||Qe.receiveShadow!==ne.receiveShadow)&&(Qe.receiveShadow=ne.receiveShadow,Ft.setValue(B,"receiveShadow",ne.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(ft.envMap.value=qe,ft.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&K.environment!==null&&(ft.envMapIntensity.value=K.environmentIntensity),ft.dfgLUT!==void 0&&(ft.dfgLUT.value=Zw()),rn&&(Ft.setValue(B,"toneMappingExposure",b.toneMappingExposure),Qe.needsLights&&go(ft,jr),Le&&le.fog===!0&&Je.refreshFogUniforms(ft,Le),Je.refreshMaterialUniforms(ft,le,ge,ee,I.state.transmissionRenderTarget[R.id]),Xl.upload(B,po(Qe),ft,Y)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Xl.upload(B,po(Qe),ft,Y),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ft.setValue(B,"center",ne.center),Ft.setValue(B,"modelViewMatrix",ne.modelViewMatrix),Ft.setValue(B,"normalMatrix",ne.normalMatrix),Ft.setValue(B,"modelMatrix",ne.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const cn=le.uniformsGroups;for(let un=0,ms=cn.length;un<ms;un++){const Ci=cn[un];ye.update(Ci,yn),ye.bind(Ci,yn)}}return yn}function go(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function xo(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,K,ue){const le=w.get(R);le.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),w.get(R.texture).__webglTexture=K,w.get(R.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ue,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const ue=w.get(R);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0};const ec=B.createFramebuffer();this.setRenderTarget=function(R,K=0,ue=0){Z=R,z=K,Q=ue;let le=null,ne=!1,Le=!1;if(R){const Re=w.get(R);if(Re.__useDefaultFramebuffer!==void 0){He.bindFramebuffer(B.FRAMEBUFFER,Re.__webglFramebuffer),H.copy(R.viewport),$.copy(R.scissor),j=R.scissorTest,He.viewport(H),He.scissor($),He.setScissorTest(j),X=-1;return}else if(Re.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(Re.__hasExternalTextures)Y.rebindTextures(R,w.get(R.texture).__webglTexture,w.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const it=R.depthTexture;if(Re.__boundDepthTexture!==it){if(it!==null&&w.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Le=!0);const Ge=w.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[K])?le=Ge[K][ue]:le=Ge[K],ne=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?le=w.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?le=Ge[ue]:le=Ge,H.copy(R.viewport),$.copy(R.scissor),j=R.scissorTest}else H.copy(ie).multiplyScalar(ge).floor(),$.copy(fe).multiplyScalar(ge).floor(),j=_e;if(ue!==0&&(le=ec),He.bindFramebuffer(B.FRAMEBUFFER,le)&&He.drawBuffers(R,le),He.viewport(H),He.scissor($),He.setScissorTest(j),ne){const Re=w.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+K,Re.__webglTexture,ue)}else if(Le){const Re=K;for(let qe=0;qe<R.textures.length;qe++){const Ge=w.get(R.textures[qe]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+qe,Ge.__webglTexture,ue,Re)}}else if(R!==null&&ue!==0){const Re=w.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Re.__webglTexture,ue)}X=-1},this.readRenderTargetPixels=function(R,K,ue,le,ne,Le,Be,Re=0){if(!(R&&R.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=w.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(qe=qe[Be]),qe){He.bindFramebuffer(B.FRAMEBUFFER,qe);try{const Ge=R.textures[Re],it=Ge.format,Ze=Ge.type;if(!St.textureFormatReadable(it)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(Ze)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-le&&ue>=0&&ue<=R.height-ne&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Re),B.readPixels(K,ue,le,ne,Me.convert(it),Me.convert(Ze),Le))}finally{const Ge=Z!==null?w.get(Z).__webglFramebuffer:null;He.bindFramebuffer(B.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,K,ue,le,ne,Le,Be,Re=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=w.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Be!==void 0&&(qe=qe[Be]),qe)if(K>=0&&K<=R.width-le&&ue>=0&&ue<=R.height-ne){He.bindFramebuffer(B.FRAMEBUFFER,qe);const Ge=R.textures[Re],it=Ge.format,Ze=Ge.type;if(!St.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const gt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,gt),B.bufferData(B.PIXEL_PACK_BUFFER,Le.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Re),B.readPixels(K,ue,le,ne,Me.convert(it),Me.convert(Ze),0);const Ct=Z!==null?w.get(Z).__webglFramebuffer:null;He.bindFramebuffer(B.FRAMEBUFFER,Ct);const Vt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Zv(B,Vt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,gt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Le),B.deleteBuffer(gt),B.deleteSync(Vt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ue=0){const le=Math.pow(2,-ue),ne=Math.floor(R.image.width*le),Le=Math.floor(R.image.height*le),Be=K!==null?K.x:0,Re=K!==null?K.y:0;Y.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ue,0,0,Be,Re,ne,Le),He.unbindTexture()};const tc=B.createFramebuffer(),qt=B.createFramebuffer();this.copyTextureToTexture=function(R,K,ue=null,le=null,ne=0,Le=null){Le===null&&(ne!==0?(oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=ne,ne=0):Le=0);let Be,Re,qe,Ge,it,Ze,gt,Ct,Vt;const zt=R.isCompressedTexture?R.mipmaps[Le]:R.image;if(ue!==null)Be=ue.max.x-ue.min.x,Re=ue.max.y-ue.min.y,qe=ue.isBox3?ue.max.z-ue.min.z:1,Ge=ue.min.x,it=ue.min.y,Ze=ue.isBox3?ue.min.z:0;else{const Ln=Math.pow(2,-ne);Be=Math.floor(zt.width*Ln),Re=Math.floor(zt.height*Ln),R.isDataArrayTexture?qe=zt.depth:R.isData3DTexture?qe=Math.floor(zt.depth*Ln):qe=1,Ge=0,it=0,Ze=0}le!==null?(gt=le.x,Ct=le.y,Vt=le.z):(gt=0,Ct=0,Vt=0);const Pt=Me.convert(K.format),Qe=Me.convert(K.type);let Ut;K.isData3DTexture?(Y.setTexture3D(K,0),Ut=B.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(Y.setTexture2DArray(K,0),Ut=B.TEXTURE_2D_ARRAY):(Y.setTexture2D(K,0),Ut=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const Et=B.getParameter(B.UNPACK_ROW_LENGTH),yn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ti=B.getParameter(B.UNPACK_SKIP_PIXELS),rn=B.getParameter(B.UNPACK_SKIP_ROWS),jr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,zt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,zt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ge),B.pixelStorei(B.UNPACK_SKIP_ROWS,it),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ze);const Ft=R.isDataArrayTexture||R.isData3DTexture,ft=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const Ln=w.get(R),cn=w.get(K),un=w.get(Ln.__renderTarget),ms=w.get(cn.__renderTarget);He.bindFramebuffer(B.READ_FRAMEBUFFER,un.__webglFramebuffer),He.bindFramebuffer(B.DRAW_FRAMEBUFFER,ms.__webglFramebuffer);for(let Ci=0;Ci<qe;Ci++)Ft&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,w.get(R).__webglTexture,ne,Ze+Ci),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,w.get(K).__webglTexture,Le,Vt+Ci)),B.blitFramebuffer(Ge,it,Be,Re,gt,Ct,Be,Re,B.DEPTH_BUFFER_BIT,B.NEAREST);He.bindFramebuffer(B.READ_FRAMEBUFFER,null),He.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ne!==0||R.isRenderTargetTexture||w.has(R)){const Ln=w.get(R),cn=w.get(K);He.bindFramebuffer(B.READ_FRAMEBUFFER,tc),He.bindFramebuffer(B.DRAW_FRAMEBUFFER,qt);for(let un=0;un<qe;un++)Ft?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ln.__webglTexture,ne,Ze+un):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ln.__webglTexture,ne),ft?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,cn.__webglTexture,Le,Vt+un):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,cn.__webglTexture,Le),ne!==0?B.blitFramebuffer(Ge,it,Be,Re,gt,Ct,Be,Re,B.COLOR_BUFFER_BIT,B.NEAREST):ft?B.copyTexSubImage3D(Ut,Le,gt,Ct,Vt+un,Ge,it,Be,Re):B.copyTexSubImage2D(Ut,Le,gt,Ct,Ge,it,Be,Re);He.bindFramebuffer(B.READ_FRAMEBUFFER,null),He.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ft?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Ut,Le,gt,Ct,Vt,Be,Re,qe,Pt,Qe,zt.data):K.isCompressedArrayTexture?B.compressedTexSubImage3D(Ut,Le,gt,Ct,Vt,Be,Re,qe,Pt,zt.data):B.texSubImage3D(Ut,Le,gt,Ct,Vt,Be,Re,qe,Pt,Qe,zt):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Le,gt,Ct,Be,Re,Pt,Qe,zt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Le,gt,Ct,zt.width,zt.height,Pt,zt.data):B.texSubImage2D(B.TEXTURE_2D,Le,gt,Ct,Be,Re,Pt,Qe,zt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Et),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,yn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ti),B.pixelStorei(B.UNPACK_SKIP_ROWS,rn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,jr),Le===0&&K.generateMipmaps&&B.generateMipmap(Ut),He.unbindTexture()},this.initRenderTarget=function(R){w.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),He.unbindTexture()},this.resetState=function(){z=0,Q=0,Z=null,He.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Rt._getUnpackColorSpace()}}const Js=[{title:"1. Cozinha em Operação Normal",subtitle:"Fritadeira industrial e fogão sob coifa de exaustão.",temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",centralStatus:"MONITORANDO",description:"Ambiente operacional seguro. A Central Outfire VTS 32S3 monitora continuamente os sensores térmicos reguláveis da coifa (145°C) e do duto (300°C)."},{title:"2. Superaquecimento Perigoso",subtitle:"Falha no termostato da fritadeira. Temperatura do óleo sobe para > 360°C.",temp:365,gasStatus:"ABERTO",exhaustStatus:"LIGADO",centralStatus:"ALERTA TÉRMICO",description:"Óleos e gorduras vegetais atingem o ponto de autoignição silenciosa sem faísca externa. Risco iminente de explosão térmica."},{title:"3. Incêndio Violento Classe K",subtitle:"O óleo entra em combustão violenta. Chamas sobem rumo aos filtros da coifa.",temp:450,gasStatus:"ABERTO",exhaustStatus:"LIGADO",centralStatus:"ALERTA TÉRMICO",description:"Água JAMAIS pode ser usada (causaria explosão mortal de vapor). Extintores comuns de pó químico não resfriam o óleo e causam reignição."},{title:"4. Detecção Dupla nos Sensores",subtitle:"Sensor da coifa (145°C) e sensor do duto (300°C) acionam a Central Outfire.",temp:420,gasStatus:"CORTADO",exhaustStatus:"DESLIGADO",centralStatus:"DISPARO ATIVO",description:"A Central Outfire entra em ação instantânea: sirene estroboscópica dispara, display inicia contagem de supressão e alerta por voz falada."},{title:"5. Intertravamento Total: Gás & Exaustão",subtitle:"Válvula solenoide fecha o gás e motor de exaustão é desligado.",temp:380,gasStatus:"CORTADO",exhaustStatus:"DESLIGADO",centralStatus:"DISPARO ATIVO",description:"Corta o combustível da linha na válvula solenoide e desliga a sucção para não alimentar os dutos com oxigênio forçado. Damper fecha."},{title:"6. Dupla Supressão: Saponificante & CO2",subtitle:"Bicos disparam líquido saponificante na fritadeira e CO2 nos dutos.",temp:160,gasStatus:"CORTADO",exhaustStatus:"DESLIGADO",centralStatus:"DISPARO ATIVO",description:"O agente saponificante reage com a gordura quente criando uma espessa camada de sabão, sufocando e resfriando. O CO2 inunda o duto simultaneamente."},{title:"7. Incêndio Extinto & Cozinha Salva",subtitle:"Fogo 100% extinto sem reignição. Danos zero à estrutura e às pessoas.",temp:65,gasStatus:"CORTADO",exhaustStatus:"DESLIGADO",centralStatus:"PROTEGIDO",description:"A cozinha é preservada. Sistema pronto para limpeza com água e reinicialização rápida. Em conformidade com ABNT NBR 14518 e AVCB."}],Jw=()=>{const s=ot.useRef(null),e=ot.useRef(null),[n,r]=ot.useState(0),[o,l]=ot.useState(!1),[u,d]=ot.useState(0),p=ot.useRef(0),m=ot.useCallback(X=>{const J=Math.max(0,Math.min(1,X));p.current=J,r(J);const H=Math.min(Js.length-1,Math.floor(J*Js.length));d(H)},[]),x=ot.useRef(null),v=ot.useRef(null),y=ot.useRef(null),S=ot.useRef(null),T=ot.useRef(null),N=ot.useRef(null),M=ot.useRef(null),_=ot.useRef(null),C=ot.useRef([]),L=ot.useRef(null),A=ot.useRef(null),I=ot.useRef(null),D=ot.useRef({isDragging:!1,startX:0,startY:0,rotY:0,rotX:0});ot.useEffect(()=>{if(!e.current)return;const X=e.current.clientWidth||window.innerWidth,J=e.current.clientHeight||700,H=new k_;H.background=new Nt(526604),H.fog=new Tf(526604,.035),x.current=H;const $=new Gn(45,X/J,.1,100);$.position.set(0,2.3,5.8),v.current=$;const j=new Qw({canvas:e.current,antialias:!0,powerPreference:"high-performance"});j.setSize(X,J),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.shadowMap.enabled=!0,j.shadowMap.type=h0,y.current=j;const oe=new e1(16777215,.65);H.add(oe);const se=new Q_(16775142,2.8);se.position.set(2,6.5,4.5),se.angle=Math.PI/4,se.penumbra=.5,se.castShadow=!0,H.add(se);const O=new Ol(13938487,1.5,12);O.position.set(-2.5,3.5,3),H.add(O);const ee=new Ol(16711680,0,8);ee.position.set(2.4,2.7,.35),H.add(ee),L.current=ee;const ge=new Ol(16729088,0,5);ge.position.set(-.6,1.2,0),H.add(ge);const Ee=new Ol(16755200,0,5);Ee.position.set(-.6,1.8,0),H.add(Ee),C.current=[ge,Ee],F(H);const De=new Ii;H.add(De),S.current=De,G(De);const ie=new Ii;H.add(ie),T.current=ie,b(ie);const fe=new Ii;H.add(fe),N.current=fe,P(fe);const _e=new Ii;H.add(_e),M.current=_e,z(_e);const ke=()=>{if(!e.current||!y.current||!v.current)return;const vt=e.current.clientWidth,B=e.current.clientHeight;v.current.aspect=vt/B,v.current.updateProjectionMatrix(),y.current.setSize(vt,B)};window.addEventListener("resize",ke);const Pe=e.current,dt=vt=>{D.current.isDragging=!0,D.current.startX=vt.clientX,D.current.startY=vt.clientY},Bt=vt=>{if(!D.current.isDragging)return;const B=vt.clientX-D.current.startX,Ot=vt.clientY-D.current.startY;D.current.startX=vt.clientX,D.current.startY=vt.clientY,D.current.rotY+=B*.005,D.current.rotX=Math.max(-.4,Math.min(.4,D.current.rotX+Ot*.005))},ht=()=>{D.current.isDragging=!1};Pe.addEventListener("mousedown",dt),window.addEventListener("mousemove",Bt),window.addEventListener("mouseup",ht);let pt;const Mt=new n1,st=()=>{pt=requestAnimationFrame(st);const vt=Mt.getDelta(),B=Mt.getElapsedTime();Q(B,vt),j.render(H,$)};return st(),()=>{window.removeEventListener("resize",ke),Pe.removeEventListener("mousedown",dt),window.removeEventListener("mousemove",Bt),window.removeEventListener("mouseup",ht),cancelAnimationFrame(pt),j.dispose()}},[]);const F=X=>{const J=new hs(16,16),H=new Xt({color:1184792,roughness:.35,metalness:.45}),$=new ct(J,H);$.rotation.x=-Math.PI/2,$.position.y=0,$.receiveShadow=!0,X.add($);const j=new hs(16,8),oe=new Xt({color:1711396,roughness:.5,metalness:.25}),se=new ct(j,oe);se.position.set(0,4,-1.8),se.receiveShadow=!0,X.add(se);const O=new vn(4.2,.9,1.2),ee=new Xt({color:14213352,metalness:.88,roughness:.18}),ge=new ct(O,ee);ge.position.set(0,.45,0),ge.castShadow=!0,ge.receiveShadow=!0,X.add(ge);const Ee=new ct(new vn(1,.95,1.1),ee);Ee.position.set(-.6,.475,.05),Ee.castShadow=!0,X.add(Ee);const De=new vn(.8,.25,.8),ie=new Xt({color:10380544,roughness:.08,metalness:.35,transparent:!0,opacity:.95}),fe=new ct(De,ie);fe.position.set(-.6,.85,.05),X.add(fe);const _e=new Qn(.015,.015,.4),ke=new Xt({color:1118481,roughness:.8}),Pe=new ct(_e,ke);Pe.rotation.x=Math.PI/4,Pe.position.set(-.8,1.1,.5),X.add(Pe);const dt=new ct(_e,ke);dt.rotation.x=Math.PI/4,dt.position.set(-.4,1.1,.5),X.add(dt);const Bt=new ct(new vn(1.8,.95,1.1),ee);Bt.position.set(1,.475,.05),Bt.castShadow=!0,X.add(Bt);const ht=new Xt({color:2236962,roughness:.9});for(let Wn=.4;Wn<=1.6;Wn+=.55)for(let ti=-.25;ti<=.35;ti+=.55){const zr=new ct(new Qn(.14,.14,.04,16),ht);zr.position.set(Wn,.95,ti),X.add(zr)}const pt=new Ii;pt.position.set(0,2.7,0);const Mt=new ct(new vn(4.2,.6,1.6),ee);Mt.castShadow=!0,pt.add(Mt);const st=new Xt({color:10529718,metalness:.9,roughness:.25});for(let Wn=-1.8;Wn<=1.8;Wn+=.6){const ti=new ct(new vn(.5,.05,.8),st);ti.position.set(Wn,-.25,0),ti.rotation.x=.2,pt.add(ti)}X.add(pt);const vt=new Qn(.35,.35,1.6,24),B=new Xt({color:12897236,metalness:.85,roughness:.2}),Ot=new ct(vt,B);Ot.position.set(0,3.8,0),X.add(Ot);const _t=new Qn(.35,.35,2.5,24),St=new ct(_t,B);St.rotation.x=Math.PI/2,St.position.set(0,4.5,-.8),X.add(St);const He=new ct(new vn(.85,.85,.4),new Xt({color:10033947,metalness:.6,roughness:.35}));He.position.set(0,4.5,-.4),X.add(He);const U=new Xt({color:15791352,metalness:.95,roughness:.1}),w=new Qn(.02,.02,3.8,12),Y=new ct(w,U);Y.rotation.z=Math.PI/2,Y.position.set(0,2.35,.4),X.add(Y);const he=new Xt({color:13938487,metalness:.95,roughness:.15}),pe=new ct(new Di(.04,.09,12),he);pe.rotation.x=Math.PI,pe.position.set(-.6,2.28,.1),X.add(pe);const de=new ct(new Di(.04,.09,12),he);de.rotation.x=Math.PI,de.position.set(.6,2.28,.1),X.add(de);const Xe=new ct(new Di(.04,.09,12),he);Xe.rotation.x=Math.PI,Xe.position.set(1.4,2.28,.1),X.add(Xe);const Te=new ct(new Di(.04,.08,12),he);Te.rotation.z=Math.PI/4,Te.position.set(-.8,2.6,0),X.add(Te);const ze=new ct(new Di(.04,.08,12),he);ze.rotation.z=-Math.PI/4,ze.position.set(.8,2.6,0),X.add(ze);const Je=new ct(new Di(.04,.08,12),he);Je.rotation.x=Math.PI,Je.position.set(0,4.2,0),X.add(Je);const Se=new ct(new Qn(.015,.015,.14,12),new Xt({color:13938487,emissive:8940314,roughness:.2}));Se.position.set(-.6,2.42,.25),X.add(Se);const Ce=new ct(new Qn(.015,.015,.16,12),new Xt({color:16724736,emissive:11145472,roughness:.2}));Ce.position.set(.35,3.8,0),Ce.rotation.z=Math.PI/2,X.add(Ce);const Fe=new Ii;Fe.position.set(2.4,2.15,.1);const je=new Xt({color:1184791,metalness:.7,roughness:.35}),lt=new K_().load("/assets/central-outfire-front.png");lt.colorSpace=Jn;const W=new Xt({map:lt,roughness:.3,metalness:.4}),Ie=[je,je,je,je,W,je],Me=new ct(new vn(.72,.54,.18),Ie);Me.castShadow=!0,Fe.add(Me);const Ue=new io({color:65416,transparent:!0,opacity:.25}),ye=new ct(new hs(.18,.13),Ue);ye.position.set(.02,.02,.092),Fe.add(ye),I.current=ye;const me=new Qn(.018,.018,1.4,16),Ae=new Xt({color:13421772,metalness:.9,roughness:.2}),nt=new ct(me,Ae);nt.position.set(0,.95,0),Fe.add(nt);const It=new Xt({color:2236962,metalness:.6}),wt=new ct(new Qn(.05,.05,.03,16),It);wt.position.set(.28,.28,0),Fe.add(wt);const Nn=new Xt({color:16716049,roughness:.1,metalness:.3,transparent:!0,opacity:.9,emissive:6684672}),nn=new ct(new Di(.045,.09,16),Nn);nn.position.set(.28,.33,0),Fe.add(nn),A.current=nn;const Br=new Xt({color:2040619,metalness:.7,roughness:.4}),di=new ct(new vn(.48,.02,.18),Br);di.position.set(.05,-.38,0),Fe.add(di);const ur=new Xt({color:1194874,roughness:.5}),Ei=new ct(new vn(.18,.16,.12),ur);Ei.position.set(-.07,-.29,0),Fe.add(Ei);const bi=new ct(new vn(.18,.16,.12),ur);bi.position.set(.15,-.29,0),Fe.add(bi),X.add(Fe);const fi=new ct(new Qn(.025,.025,3,16),new Xt({color:13938487,metalness:.7,roughness:.25}));fi.rotation.z=Math.PI/2,fi.position.set(0,.15,.6),X.add(fi);const Pn=new ct(new vn(.15,.18,.15),new Xt({color:10033947,metalness:.6,roughness:.3}));Pn.position.set(-1.2,.15,.6),X.add(Pn),_.current=Pn},G=X=>{for(let H=0;H<50;H++){const $=new Di(.13,.5,8),j=new io({color:H%2===0?16724736:16755200,transparent:!0,opacity:0,blending:xd}),oe=new ct($,j);oe.position.set(-.6+(Math.random()-.5)*.55,1+Math.random()*.4,.05+(Math.random()-.5)*.55),oe.scale.set(.01,.01,.01),X.add(oe)}},b=X=>{for(let H=0;H<35;H++){const $=new Rf(.2,1),j=new Xt({color:1710618,roughness:1,transparent:!0,opacity:0}),oe=new ct($,j);oe.position.set(-.6+(Math.random()-.5)*.45,1.5+Math.random()*1.5,(Math.random()-.5)*.45),X.add(oe)}},P=X=>{for(let H=0;H<75;H++){const $=new Kl(.07,8,8),j=new Xt({color:16777215,roughness:.15,metalness:.1,transparent:!0,opacity:0}),oe=new ct($,j);oe.position.set(-.6+(Math.random()-.5)*.75,.95+Math.random()*.2,.05+(Math.random()-.5)*.75),X.add(oe)}},z=X=>{for(let H=0;H<30;H++){const $=new Kl(.14,8,8),j=new io({color:15135487,transparent:!0,opacity:0}),oe=new ct($,j);oe.position.set((Math.random()-.5)*.35,3.5+Math.random()*1,-.5+Math.random()*.5),X.add(oe)}},Q=(X,J)=>{if(!v.current)return;const H=p.current,$=D.current;let j=new re(0,2.3,5.8),oe=new re(0,1.8,0);H<.2?(j.set(0,2.3,5.8),oe.set(0,1.8,0)):H<.55?(j.set(-.6,1.8,3.2),oe.set(-.6,1.3,0)):H<.8?(j.set(.6,2.3,4.3),oe.set(.4,2.1,0)):(j.set(0,2.3,5.2),oe.set(0,1.8,0));const se=j.distanceTo(oe);j.x+=Math.sin($.rotY)*se*.4,j.z+=(Math.cos($.rotY)-1)*se*.4,j.y+=$.rotX*1.5,v.current.position.lerp(j,J*3.5),v.current.lookAt(oe);let O=0;if(H>=.22&&H<.88&&(H<.45?O=(H-.22)/.23:H<.74?O=1:O=1-(H-.74)/.14),S.current&&S.current.children.forEach((ee,ge)=>{const Ee=ee,De=Ee.material;if(O>.05){De.opacity=O*.85;const ie=.8+.4*Math.sin(X*16+ge);Ee.scale.set((.85+.5*Math.sin(X*11+ge))*O,(1.3+.9*Math.cos(X*13+ge))*O*ie,(.85+.5*Math.sin(X*11+ge))*O),Ee.position.y=1+Math.sin(X*8+ge)*.15}else De.opacity=0,Ee.scale.set(.01,.01,.01)}),C.current.forEach((ee,ge)=>{ee.intensity=O*(3+Math.sin(X*20+ge)*1.2)}),T.current&&T.current.children.forEach((ee,ge)=>{const Ee=ee,De=Ee.material;O>.08||H>=.85&&H<.96?(De.opacity=Math.min(.55,O*.5),Ee.position.y+=J*.9,Ee.rotation.y+=J*.5,Ee.position.y>3.2&&(Ee.position.y=1.4)):De.opacity=0}),N.current){const ee=H>=.74;N.current.children.forEach((ge,Ee)=>{const De=ge,ie=De.material;ee?(ie.opacity=vm.lerp(ie.opacity,.95,J*5),De.scale.set(1.1+Math.sin(X*2+Ee)*.2,.7+Math.cos(X*2+Ee)*.1,1.1+Math.sin(X*2+Ee)*.2)):ie.opacity=0})}if(M.current){const ee=H>=.74&&H<.95;M.current.children.forEach((ge,Ee)=>{const De=ge,ie=De.material;ee?(ie.opacity=.65+Math.sin(X*10+Ee)*.2,De.position.y+=J*.6,De.position.y>4.5&&(De.position.y=3.6)):ie.opacity=0})}if(L.current&&A.current){const ge=A.current.material;if(H>=.35&&H<.88){const Ee=Math.sin(X*22)>0;L.current.intensity=Ee?4:.2,ge.emissive.setHex(Ee?16711680:2228224)}else L.current.intensity=0,ge.emissive.setHex(1114112)}if(I.current){const ee=I.current.material;H<.3?(ee.color.setHex(65416),ee.opacity=.25):H<.88?(ee.color.setHex(16716049),ee.opacity=.45+Math.sin(X*8)*.2):(ee.color.setHex(13938487),ee.opacity=.35)}_.current&&(H>=.5?_.current.rotation.x=vm.lerp(_.current.rotation.x,Math.PI/2,J*9):_.current.rotation.x=0)};ot.useEffect(()=>{const X=()=>{if(!s.current||o)return;const J=s.current.getBoundingClientRect(),H=window.innerHeight,$=J.height-H;if($<=0)return;const oe=-J.top/$;m(oe)};return window.addEventListener("scroll",X,{passive:!0}),()=>window.removeEventListener("scroll",X)},[o,m]),ot.useEffect(()=>{let X;return o&&(X=setInterval(()=>{const J=p.current+.005;J>=1?(m(1),l(!1)):m(J)},45)),()=>clearInterval(X)},[o,m]);const Z=Js[u];return f.jsx("section",{id:"hero-3d",ref:s,className:"relative min-h-[280vh] bg-[#08090c]",children:f.jsxs("div",{className:"sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden",children:[f.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-0"}),f.jsxs("div",{className:"relative z-10 p-3 sm:p-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none",children:[f.jsxs("div",{className:"flex items-center gap-2.5 pointer-events-auto bg-[#0e1015]/90 backdrop-blur-md border border-[#d4af37]/35 px-4 py-2 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.7)]",children:[f.jsxs("div",{className:"flex h-3 w-3 relative",children:[f.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${n>=.3&&n<.88?"bg-red-400":"bg-[#d4af37]"}`}),f.jsx("span",{className:`relative inline-flex rounded-full h-3 w-3 ${n>=.3&&n<.88?"bg-red-500":"bg-[#d4af37]"}`})]}),f.jsxs("div",{className:"flex flex-col",children:[f.jsx("span",{className:"text-[10px] text-gray-400 font-bold uppercase tracking-wider",children:"Simulador 3D Central Outfire VTS 32S3"}),f.jsx("span",{className:"text-xs font-black uppercase tracking-wider text-white",children:Z.centralStatus})]})]}),f.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[f.jsxs("button",{onClick:()=>l(!o),className:"flex items-center gap-2 text-xs font-black px-4 py-2 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black shadow-glow-gold transition-all",children:[o?f.jsx(rv,{className:"w-4 h-4 fill-black"}):f.jsx(sv,{className:"w-4 h-4 fill-black"}),f.jsx("span",{children:o?"Pausar":"Play Simulação"})]}),f.jsxs("button",{onClick:()=>{l(!1),m(.76)},className:"hidden sm:flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/40 backdrop-blur-md transition-all shadow-lg",title:"Disparar Supressão Imediata",children:[f.jsx(Vx,{className:"w-3.5 h-3.5 text-red-400 animate-pulse"}),f.jsx("span",{children:"Testar Disparo"})]}),f.jsx("button",{onClick:()=>{l(!1),m(0)},className:"p-2 rounded-xl bg-[#14171e]/80 hover:bg-[#1f2430] text-[#f3e5ab] backdrop-blur-md border border-[#d4af37]/30 transition-all shadow-lg",title:"Reiniciar Simulação",children:f.jsx(lv,{className:"w-4 h-4"})})]})]}),f.jsx("div",{className:"relative z-10 p-3 sm:p-6 max-w-7xl mx-auto w-full pointer-events-none",children:f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-end",children:[f.jsxs("div",{className:"lg:col-span-4 flex flex-wrap lg:flex-col gap-2 pointer-events-auto",children:[f.jsxs("div",{className:"glass-panel-gold px-3.5 py-2.5 rounded-xl flex items-center justify-between border border-[#d4af37]/30 min-w-[140px] flex-1 lg:flex-initial",children:[f.jsxs("div",{className:"flex items-center gap-2 text-gray-300 text-xs",children:[f.jsx(pv,{className:`w-4 h-4 ${Z.temp>300?"text-red-500 animate-pulse":"text-[#d4af37]"}`}),f.jsx("span",{children:"Óleo Fritadeira:"})]}),f.jsxs("span",{className:`font-mono text-sm font-black ${Z.temp>350?"text-red-400":Z.temp>200?"text-amber-400":"text-[#e5c05d]"}`,children:[Z.temp,"°C"]})]}),f.jsxs("div",{className:"glass-panel px-3.5 py-2.5 rounded-xl flex items-center justify-between border border-white/10 min-w-[140px] flex-1 lg:flex-initial",children:[f.jsxs("div",{className:"flex items-center gap-2 text-gray-300 text-xs",children:[f.jsx(xv,{className:`w-4 h-4 ${Z.gasStatus==="CORTADO"?"text-red-500":"text-gray-400"}`}),f.jsx("span",{children:"Válvula de Gás:"})]}),f.jsx("span",{className:`font-mono text-xs font-bold px-2 py-0.5 rounded ${Z.gasStatus==="CORTADO"?"bg-red-500/20 text-red-400 border border-red-500/40":"bg-emerald-500/20 text-emerald-400"}`,children:Z.gasStatus})]}),f.jsxs("div",{className:"glass-panel px-3.5 py-2.5 rounded-xl flex items-center justify-between border border-white/10 min-w-[140px] flex-1 lg:flex-initial",children:[f.jsxs("div",{className:"flex items-center gap-2 text-gray-300 text-xs",children:[f.jsx(f0,{className:"w-4 h-4 text-cyan-400"}),f.jsx("span",{children:"Exaustão & Damper:"})]}),f.jsx("span",{className:`font-mono text-xs font-bold px-2 py-0.5 rounded ${Z.exhaustStatus==="DESLIGADO"?"bg-amber-500/20 text-amber-400 border border-amber-500/30":"bg-emerald-500/20 text-emerald-400"}`,children:Z.exhaustStatus})]})]}),f.jsx("div",{className:"lg:col-span-8 pointer-events-auto",children:f.jsxs("div",{className:`rounded-2xl p-4 sm:p-6 transition-all duration-300 ${Z.centralStatus==="DISPARO ATIVO"||Z.centralStatus==="ALERTA TÉRMICO"?"glass-panel-glow bg-[#140b0d]/95":"glass-panel-gold bg-[#0e1015]/95"}`,children:[f.jsxs("div",{className:"mb-3",children:[f.jsxs("div",{className:"flex items-center justify-between text-[11px] font-bold text-gray-400 mb-1",children:[f.jsxs("span",{className:"flex items-center gap-1.5 text-[#e5c05d]",children:[f.jsx(co,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Controle Interativo da Simulação:"]}),f.jsxs("span",{className:"font-mono text-[#f3e5ab]",children:[Math.round(n*100),"% da Linha do Tempo"]})]}),f.jsx("input",{type:"range",min:"0",max:"1",step:"0.002",value:n,onChange:X=>{l(!1),m(parseFloat(X.target.value))},className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-[#d4af37]"})]}),f.jsx("div",{className:"grid grid-cols-7 gap-1 sm:gap-1.5 mb-3",children:Js.map((X,J)=>{const H=J/(Js.length-1),$=u===J;return f.jsxs("button",{onClick:()=>{l(!1),m(H)},className:`text-[10px] sm:text-xs py-1.5 rounded-lg font-bold transition-all truncate text-center ${$?"bg-[#d4af37] text-black shadow-glow-gold":"bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"}`,title:X.title,children:[f.jsx("span",{className:"sm:hidden",children:J+1}),f.jsxs("span",{className:"hidden sm:inline",children:["Etapa ",J+1]})]},J)})}),f.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("span",{className:"text-[11px] font-mono font-black bg-[#d4af37] text-black px-2 py-0.5 rounded-full",children:["ETAPA ",u+1," DE ",Js.length]}),f.jsx("h3",{className:"text-base sm:text-lg font-black text-white font-sans",children:Z.title})]}),f.jsx("span",{className:"text-[11px] text-gray-400 hidden sm:inline",children:"Arraste o slider ou gire a cozinha com o mouse/toque"})]}),f.jsx("p",{className:"text-xs sm:text-sm font-semibold text-[#e5c05d] mb-1.5",children:Z.subtitle}),f.jsx("p",{className:"text-xs sm:text-sm text-gray-300 leading-relaxed",children:Z.description}),f.jsxs("div",{className:"mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-xs text-gray-400",children:[f.jsxs("span",{className:"flex items-center gap-1.5 text-gray-300 text-[11px]",children:[f.jsx(qx,{className:"w-3.5 h-3.5 text-[#d4af37] animate-bounce"}),"Role para baixo ou use o slider acima"]}),f.jsx("a",{href:"#calculadora",className:"text-xs font-black text-[#e5c05d] hover:text-[#f3e5ab] underline underline-offset-4",children:"Dimensionar minha cozinha na Calculadora →"})]})]})})]})})]})})},eE=()=>{const[s,e]=ot.useState("ihm"),n=[{icon:Qx,title:"Multicoifa Independente (Até 3 Coifas)",desc:"Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais."},{icon:am,title:"IHM Touchscreen Inteligente",desc:"Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás."},{icon:mv,title:"Alertas Inteligentes por Voz Falada",desc:"Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza."},{icon:Wx,title:"Agenda Semanal Automática de Gás",desc:"Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos."},{icon:md,title:"Proteção Anti-Disparo com Botão Abortar",desc:"Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros."},{icon:ov,title:"Alarme Convencional Segregado",desc:"Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados."}];return f.jsxs("section",{id:"central-vts",className:"py-24 bg-[#08090c] relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"}),f.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none"}),f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4",children:[f.jsx(am,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia e Automação Nacional"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Comando Inteligente ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Outfire VTS 32S3"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, automação de gás e proteção anti-disparo acidental na ponta dos seus dedos."})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20",children:[f.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[f.jsxs("div",{className:"relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group",children:[s==="ihm"&&f.jsx("img",{src:"/assets/central-outfire-fundo-removido.png",alt:"Central Outfire VTS 32S3",className:"max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(212,175,55,0.25)] transition-all duration-500 group-hover:scale-105"}),s==="interno"&&f.jsx("img",{src:"/assets/central-outfire-interno.jpg",alt:"Placa e Relés Internos da Central Outfire",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),s==="instalado"&&f.jsx("img",{src:"/assets/central-outfire-instalada.jpg",alt:"Central Outfire Instalada em Cozinha Real",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),f.jsxs("div",{className:"absolute bottom-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab]",children:[s==="ihm"&&"Vista Frontal do Gabinete & IHM",s==="interno"&&"Eletrônica Robusta, Relés de Potência & Bornes",s==="instalado"&&"Instalação Real em Cozinha Profissional"]})]}),f.jsxs("div",{className:"flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md",children:[f.jsx("button",{onClick:()=>e("ihm"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="ihm"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Gabinete & IHM Touch"}),f.jsx("button",{onClick:()=>e("interno"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="interno"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Eletrônica Interna"}),f.jsx("button",{onClick:()=>e("instalado"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="instalado"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Instalação Real"})]})]}),f.jsx("div",{className:"lg:col-span-5 space-y-4",children:f.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative",children:[f.jsxs("div",{className:"flex items-center justify-between mb-6",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-2xl font-black text-white font-sans",children:"Painel Central VTS 32S3"}),f.jsx("span",{className:"text-xs text-[#e5c05d] font-mono font-bold",children:"AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518"})]}),f.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]",children:f.jsx(hv,{className:"w-6 h-6"})})]}),f.jsxs("div",{className:"space-y-3.5 text-sm",children:[f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(ls,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Dupla Ação de Supressão:"})," Saponificante na cocção + CO2 e Dampers no duto."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(ls,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Corte de Gás e Exaustor:"})," Intertravamento elétrico instantâneo ao sinal de disparo."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(ls,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Detecção Térmica Regulável:"})," Calibração em 145°C na coifa e 300°C no duto."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(ls,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Bateria de Backup Interna:"})," Funcionamento ininterrupto mesmo com queda de rede."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(ls,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Menu protegido por senha:"})," Previne alterações indevidas por pessoas não autorizadas."]})]})]}),f.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[f.jsxs("a",{href:"#calculadora",className:"flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[f.jsx("span",{children:"Dimensionar Cozinha"}),f.jsx(zl,{className:"w-4 h-4 fill-black"})]}),f.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all",children:"Baixar Manual Técnico"})]})]})})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((r,o)=>{const l=r.icon;return f.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group",children:[f.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm",children:f.jsx(l,{className:"w-6 h-6"})}),f.jsx("h4",{className:"text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors",children:r.title}),f.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:r.desc})]},o)})})]})]})},tE=()=>f.jsx("section",{id:"por-que-outfire",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(md,{className:"w-3.5 h-3.5"}),"Entenda o Risco Real em Cozinhas Industriais"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Por Que Extintores Comuns e Água ",f.jsx("br",{}),f.jsx("span",{className:"text-red-500",children:"São Fatais em Incêndio de Óleo?"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K."})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[f.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30",children:"PERIGO EXTREMO"}),f.jsx(sm,{className:"w-7 h-7 text-red-500"})]}),f.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Jogar Água em Óleo Fervente"}),f.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em ",f.jsx("strong",{children:"1.700 vezes"}),"."]}),f.jsxs("div",{className:"p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2",children:[f.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[f.jsx(u0,{className:"w-4 h-4 text-red-400"}),"Efeito Bola de Fogo (BLEVE):"]}),f.jsx("p",{children:"O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha."})]})]}),f.jsx("div",{className:"mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold",children:"Resultado: Tragédia & Risco de Morte"})]}),f.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:"INEFICAZ NA PRÁTICA"}),f.jsx(sm,{className:"w-7 h-7 text-amber-500"})]}),f.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Extintor Manual de Pó (ABC)"}),f.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["Extintores de pó químico comum sufocam a chama por poucos segundos, mas ",f.jsx("strong",{children:"não resfriam a massa de óleo"}),", que permanece acima do ponto de ignição."]}),f.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2",children:[f.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[f.jsx(md,{className:"w-4 h-4 text-amber-400"}),"Reignição e Sujeira Tóxica:"]}),f.jsx("p",{children:"Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos."})]})]}),f.jsx("div",{className:"mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold",children:"Resultado: Reignição e Perda Total"})]}),f.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#1a170e]/80 via-[#0e1015] to-[#08090c] relative flex flex-col justify-between shadow-glow-gold",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-xs font-mono font-black bg-[#d4af37] text-black px-3 py-1 rounded-full shadow-glow-gold",children:"SOLUÇÃO DEFINITIVA OUTFIRE"}),f.jsx(hf,{className:"w-7 h-7 text-[#d4af37]"})]}),f.jsx("h3",{className:"text-xl font-black text-white mb-2 font-sans",children:"Sistema Automatizado Outfire"}),f.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:["Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado ",f.jsx("strong",{children:"saponificação"}),"."]}),f.jsxs("div",{className:"p-4 rounded-xl bg-[#14171e] border border-[#d4af37]/30 text-xs text-[#f3e5ab] space-y-2",children:[f.jsxs("div",{className:"flex items-center gap-2 font-bold text-[#e5c05d]",children:[f.jsx(co,{className:"w-4 h-4 text-[#d4af37]"}),"Manta Espumosa e Resfriamento:"]}),f.jsx("p",{className:"text-gray-300",children:"Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos."})]})]}),f.jsx("div",{className:"mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-mono text-[#e5c05d] font-bold",children:"Resultado: Fogo 100% Extinto & Cozinha Salva"})]})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center",children:[f.jsxs("div",{className:"p-4",children:[f.jsx("div",{className:"text-3xl sm:text-4xl font-black text-red-500 font-mono",children:"65%"}),f.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas."})]}),f.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[f.jsx("div",{className:"text-3xl sm:text-4xl font-black text-amber-400 font-mono",children:"360°C"}),f.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"temperatura crítica em que o óleo vegetal entra em autoignição espontânea."})]}),f.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[f.jsx("div",{className:"text-3xl sm:text-4xl font-black text-emerald-400 font-mono",children:"0 seg"}),f.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma."})]}),f.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[f.jsx("div",{className:"text-3xl sm:text-4xl font-black text-blue-400 font-mono",children:"100%"}),f.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB)."})]})]})]})}),nE=()=>{const s=[{code:"ABNT NBR 14518",title:"Sistemas de Ventilação para Cozinhas Profissionais",authority:"Associação Brasileira de Normas Técnicas",details:"Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.",highlights:["Intertravamento obrigatório de gás e energia elétrica","Desligamento automático do sistema de exaustão mecânica","Proteção específica por agente Classe K nos aparelhos de queima","Dampers corta-fogo para bloqueio de propagação em dutos"]},{code:"NFPA 96 & NFPA 17A",title:"Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations",authority:"National Fire Protection Association (USA)",details:"Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.",highlights:["Tempo máximo de resposta de detecção térmica","Cobertura milimétrica por bico aspersor calibrado","Mínimo de autonomia de agente extintor para resfriamento total","Acionador manual de emergência em rota de fuga"]},{code:"Instruções Técnicas do Corpo de Bombeiros",title:"Emissão e Renovação de AVCB / CLCB",authority:"Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais",details:"Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.",highlights:["Condição mandatória para aprovação em vistoria física","Evita multas pesadas e interdição cautelar imediata da cozinha","Garante laudo ART emitido por Engenheiro Mecânico credenciado","Laudo de comissionamento e teste hidrostático"]}];return f.jsx("section",{id:"normas",className:"py-24 bg-[#08090c] relative",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(cv,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Conformidade Regulatória Obrigatória"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Normas Técnicas & Exigências ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"do Corpo de Bombeiros (AVCB)"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro."})]}),f.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:s.map((e,n)=>f.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-xs font-mono font-bold bg-[#d4af37]/15 text-[#e5c05d] px-3 py-1 rounded-full border border-[#d4af37]/30",children:e.code}),f.jsx(Zx,{className:"w-6 h-6 text-[#d4af37]"})]}),f.jsx("h3",{className:"text-xl font-bold text-white mb-1 font-sans",children:e.title}),f.jsx("span",{className:"text-xs text-[#e5c05d] block mb-4 font-mono font-bold",children:e.authority}),f.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:e.details}),f.jsx("div",{className:"space-y-2.5 pt-4 border-t border-white/10",children:e.highlights.map((r,o)=>f.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-gray-300",children:[f.jsx(hf,{className:"w-4 h-4 text-[#d4af37] shrink-0 mt-0.5"}),f.jsx("span",{children:r})]},o))})]}),f.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold",children:[f.jsx("span",{children:"100% Atendido pelo Sistema Outfire"}),f.jsx($x,{className:"w-4 h-4"})]})]},n))}),f.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6",children:[f.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0",children:f.jsx(Hx,{className:"w-8 h-8"})}),f.jsxs("div",{className:"flex-1 text-center md:text-left",children:[f.jsx("h4",{className:"text-lg sm:text-xl font-bold text-white mb-1",children:"Atenção: Shoppings e Seguradoras não toleram improvisos!"}),f.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed",children:["Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a ",f.jsx("strong",{children:"NBR 14518"}),", as companhias de seguro negam o pagamento da indenização por infração grave às normas. Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja."]})]}),f.jsx("div",{className:"shrink-0",children:f.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping.",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center",children:"Consultar Engenheiro Outfire"})})]})]})})},iE=({onAddToCart:s})=>{var M,_;const[e,n]=ot.useState(1),[r,o]=ot.useState(9),[l,u]=ot.useState(!0),[d,p]=ot.useState([{id:1,name:"Coifa Principal (Cocção Pesada)",lengthMeters:2.5,appliances:[{id:"1",name:"Fritadeira Industrial (2 cubas)",type:"fritadeira",icon:"🍟",widthMeters:.6},{id:"2",name:"Fogão Industrial 6 Bocas",type:"fogao",icon:"🍳",widthMeters:1.1},{id:"3",name:"Chapa de Lanche / Bifeira",type:"chapa",icon:"🥩",widthMeters:.8}]}]),m=C=>{if(n(C),C>d.length){const L=[...d];for(let A=d.length+1;A<=C;A++)L.push({id:A,name:`Coifa Setor ${A}`,lengthMeters:2,appliances:[{id:`${A}-1`,name:"Fogão 4 Bocas",type:"fogao",icon:"🍳",widthMeters:.9},{id:`${A}-2`,name:"Chapa Elétrica/Gás",type:"chapa",icon:"🥩",widthMeters:.8}]});p(L)}else C<d.length&&p(d.slice(0,C))},x=(C,L)=>{const A=[...d];A[C].lengthMeters=Math.max(1,Math.min(8,Number(L.toFixed(1)))),p(A)},v=(C,L)=>{const A={fritadeira:"Fritadeira Industrial",fogao:"Fogão Industrial",chapa:"Chapa Profissional",charbroiler:"Charbroiler / Grelha"},I={fritadeira:"🍟",fogao:"🍳",chapa:"🥩",charbroiler:"🔥"},D={fritadeira:.5,fogao:.9,chapa:.8,charbroiler:.7},F=[...d];F[C].appliances.push({id:Math.random().toString(36).substring(7),name:A[L],type:L,icon:I[L],widthMeters:D[L]}),p(F)},y=(C,L)=>{const A=[...d];A[C].appliances.splice(L,1),p(A)},S=ot.useMemo(()=>{let C=0,L=0,A=0,I=0;d.forEach(oe=>{C+=oe.appliances.length,L+=2,l&&(A+=1);const se=Math.max(1,Math.round(oe.lengthMeters/.9));I+=se});const D=C+L+A,F=D*2,G=Math.max(9,F);let b=9;G>9&&G<=16?b=16:G>16&&G<=25?b=25:G>25&&(b=Math.ceil(G/9)*9);const P=Math.max(1,Math.ceil(r/3)),z=P,Q=Math.max(10,Math.ceil(r/3*5)),Z=Q<=10?10:Q<=25?25:45,X=`Central Outfire VTS 32S3 (${e} Coifa${e>1?"s":""} Independentes)`,J=e===1?8900:e===2?14500:19800,H=D*185+P*210,$=I*295+z*320,j=J+H+$+1200;return{applianceNozzlesCount:C,plenumNozzlesCount:L,damperNozzlesCount:A,totalSaponificanteNozzles:D,saponificanteLiters:G,recommendedSaponificanteCylinderLiters:b,hoodSensorsCount:I,co2NozzlesCount:P,ductSensorsCount:z,co2Kg:Q,recommendedCo2CylinderKg:Z,centralModel:X,hoodsCount:e,dampersCount:e,gasValvesCount:1,estimatedPriceBRL:j}},[d,r,l,e]),T=()=>{let C=`🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*

`;C+=`Olá, equipe de Engenharia da Outfire! Realizei o dimensionamento da minha cozinha no site outfire.com.br e gostaria de uma proposta formal:

`,C+=`🏢 *Configuração da Cozinha:*
`,C+=`• Quantidade de Coifas: ${e} independente(s)
`,C+=`• Comprimento do Duto de Exaustão: ${r} metros

`,d.forEach((A,I)=>{C+=`📍 *Coifa ${I+1} (${A.lengthMeters}m):*
`,C+=`  Equipamentos sob a coifa: ${A.appliances.map(D=>D.name).join(", ")||"Nenhum"}
`}),C+=`
⚙️ *Memória de Cálculo de Supressão:*
`,C+=`• Bicos de Saponificante (Classe K): ${S.totalSaponificanteNozzles} bicos (${S.applianceNozzlesCount} equipamentos + ${S.plenumNozzlesCount} pleno + ${S.damperNozzlesCount} colarinho)
`,C+=`• Volume de Saponificante: ${S.saponificanteLiters} Litros (Cilindro recomendado: ${S.recommendedSaponificanteCylinderLiters}L)
`,C+=`• Sensores Reguláveis na Coifa (145°C): ${S.hoodSensorsCount} unidades
`,C+=`• Bicos de CO2 no Duto: ${S.co2NozzlesCount} unidades (1 a cada 3m)
`,C+=`• Sensores Reguláveis no Duto (300°C): ${S.ductSensorsCount} unidades (1 a cada 3m)
`,C+=`• Volume de CO2 no Duto: ${S.recommendedCo2CylinderKg} Kg (mínimo de 10kg)
`,C+=`• Intertravamento: Válvula de corte de gás + Fechamento de Dampers e Exaustor
`,C+=`• Modelo da Central: ${S.centralModel}

`,C+="Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!";const L=encodeURIComponent(C);window.open(`https://wa.me/5515996576807?text=${L}`,"_blank")},N=()=>{const C={id:`custom-kit-${Date.now()}`,sku:`OUT-CUSTOM-${e}C`,name:`Kit Personalizado Outfire VTS (${e} Coifa${e>1?"s":""} + Duto ${r}m)`,category:"kit",priceBRL:S.estimatedPriceBRL,description:`Sistema customizado: ${S.totalSaponificanteNozzles} bicos saponificante (${S.recommendedSaponificanteCylinderLiters}L), ${S.co2NozzlesCount} bicos CO2 (${S.recommendedCo2CylinderKg}kg), ${S.hoodSensorsCount} sensores 145°C e ${S.ductSensorsCount} sensores 300°C.`,image:"/assets/central-outfire-fundo-removido.png",specs:[`${S.centralModel}`,`Cilindro Saponificante Classe K: ${S.recommendedSaponificanteCylinderLiters} Litros`,`Cilindro CO2 pressurizado: ${S.recommendedCo2CylinderKg} Kg`,`Bicos Saponificante em Inox: ${S.totalSaponificanteNozzles} unidades`,`Bicos CO2 em Duto: ${S.co2NozzlesCount} unidades`,`Sensores Reguláveis: ${S.hoodSensorsCount} (145°C) + ${S.ductSensorsCount} (300°C)`,"Válvula de corte rápido de gás com rearme manual","Dampers corta-fogo com atuador elétrico"],inStock:!0};s(C)};return f.jsx("section",{id:"calculadora",className:"py-24 bg-[#0a0b0e] relative border-t border-white/5",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(c0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia sob Medida"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Calculadora de Supressão & ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Diagrama Automatizado da sua Cozinha"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real."})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[f.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[f.jsxs("div",{className:"glass-panel-gold p-6 rounded-2xl border border-[#d4af37]/30",children:[f.jsxs("label",{className:"text-sm font-bold text-white block mb-3 flex items-center justify-between",children:[f.jsx("span",{children:"1. Quantidade de Coifas Independentes:"}),f.jsx("span",{className:"text-xs font-mono text-[#e5c05d]",children:"Até 3 simultâneas"})]}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(C=>f.jsxs("button",{onClick:()=>m(C),className:`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${e===C?"bg-[#d4af37] text-black shadow-glow-gold border border-[#e5c05d]":"bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,children:[f.jsxs("span",{children:[C," ",C===1?"Coifa":"Coifas"]}),f.jsx("span",{className:"text-[10px] opacity-75 font-normal",children:C===1?"Individual":"Setorizada"})]},C))})]}),f.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsxs("label",{className:"text-sm font-bold text-white flex items-center gap-2",children:[f.jsx(f0,{className:"w-4 h-4 text-cyan-400"}),f.jsx("span",{children:"2. Comprimento do Duto de Exaustão:"})]}),f.jsxs("span",{className:"font-mono text-base font-black text-cyan-400",children:[r," metros"]})]}),f.jsx("input",{type:"range",min:"3",max:"30",step:"1",value:r,onChange:C=>o(Number(C.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"}),f.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400 mt-2 font-mono",children:[f.jsx("span",{children:"3 m (Curto)"}),f.jsx("span",{children:"15 m (Médio)"}),f.jsx("span",{children:"30 m (Longo)"})]}),f.jsxs("div",{className:"mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between",children:[f.jsx("span",{children:"Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m"}),f.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[S.co2NozzlesCount," bicos CO2"]})]})]}),d.map((C,L)=>f.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[f.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center",children:L+1}),f.jsx("h4",{className:"font-bold text-white text-sm",children:C.name})]}),f.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400",children:[C.lengthMeters," m"]})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1.5",children:[f.jsx("span",{children:"Comprimento da Coifa:"}),f.jsxs("span",{children:[C.lengthMeters," metros lineares"]})]}),f.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:C.lengthMeters,onChange:A=>x(L,Number(A.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs font-bold text-gray-300 block mb-2",children:["Equipamentos sob a Coifa (",C.appliances.length," protegidos):"]}),f.jsx("div",{className:"space-y-2 mb-3",children:C.appliances.map((A,I)=>f.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2 text-gray-200",children:[f.jsx("span",{className:"text-base",children:A.icon}),f.jsx("span",{className:"font-medium",children:A.name}),f.jsx("span",{className:"text-[10px] bg-[#1a170e] text-[#e5c05d] px-2 py-0.5 rounded border border-[#d4af37]/40 font-mono font-bold",children:"1 bico Saponificante"})]}),f.jsx("button",{onClick:()=>y(L,I),className:"p-1 text-gray-400 hover:text-red-400 transition-colors",title:"Remover equipamento",children:f.jsx(d0,{className:"w-3.5 h-3.5"})})]},A.id))}),f.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[f.jsxs("button",{onClick:()=>v(L,"fritadeira"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[f.jsx(Qa,{className:"w-3 h-3 text-[#d4af37]"}),f.jsx("span",{children:"+ Fritadeira"})]}),f.jsxs("button",{onClick:()=>v(L,"fogao"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[f.jsx(Qa,{className:"w-3 h-3 text-[#d4af37]"}),f.jsx("span",{children:"+ Fogão"})]}),f.jsxs("button",{onClick:()=>v(L,"chapa"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[f.jsx(Qa,{className:"w-3 h-3 text-[#d4af37]"}),f.jsx("span",{children:"+ Chapa"})]}),f.jsxs("button",{onClick:()=>v(L,"charbroiler"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[f.jsx(Qa,{className:"w-3 h-3 text-[#d4af37]"}),f.jsx("span",{children:"+ Grelha"})]})]})]})]},C.id))]}),f.jsx("div",{className:"lg:col-span-7 space-y-6",children:f.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative",children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),f.jsx("h3",{className:"font-bold text-white text-base font-sans",children:"Diagrama Esquemático da sua Cozinha"})]}),f.jsx("span",{className:"text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5",children:"RENDERIZADO EM TEMPO REAL"})]}),f.jsxs("div",{className:"relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, #4a5568 1px, transparent 1px)",backgroundSize:"20px 20px"}}),f.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 600 340",children:[f.jsxs("defs",{children:[f.jsxs("linearGradient",{id:"ductGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[f.jsx("stop",{offset:"0%",stopColor:"#4a5568"}),f.jsx("stop",{offset:"50%",stopColor:"#718096"}),f.jsx("stop",{offset:"100%",stopColor:"#4a5568"})]}),f.jsxs("linearGradient",{id:"hoodGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[f.jsx("stop",{offset:"0%",stopColor:"#2d3748"}),f.jsx("stop",{offset:"100%",stopColor:"#1a202c"})]})]}),f.jsx("rect",{x:"250",y:"40",width:"100",height:"70",fill:"url(#ductGrad)",stroke:"#a0aec0",strokeWidth:"1.5"}),f.jsx("rect",{x:"250",y:"30",width:"300",height:"40",fill:"url(#ductGrad)",stroke:"#a0aec0",strokeWidth:"1.5"}),f.jsx("rect",{x:"360",y:"24",width:"45",height:"52",fill:"#9b2c2c",stroke:"#feb2b2",strokeWidth:"1.5",rx:"3"}),f.jsx("text",{x:"382",y:"54",fill:"#ffffff",fontSize:"9",fontWeight:"bold",textAnchor:"middle",children:"DAMPER"}),Array.from({length:S.co2NozzlesCount}).map((C,L)=>{const A=270+L*(250/Math.max(1,S.co2NozzlesCount));return f.jsxs("g",{children:[f.jsx("circle",{cx:A,cy:"50",r:"6",fill:"#e53e3e",stroke:"#ffffff",strokeWidth:"1.5"}),f.jsx("text",{x:A,y:"68",fill:"#fc8181",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),f.jsx("rect",{x:A+12,y:"44",width:"10",height:"10",fill:"#805ad5",stroke:"#ffffff",strokeWidth:"1",transform:`rotate(45, ${A+17}, 49)`})]},`co2-${L}`)}),f.jsx("polygon",{points:"60,150 120,110 480,110 540,150",fill:"url(#hoodGrad)",stroke:"#cbd5e0",strokeWidth:"2"}),f.jsx("rect",{x:"60",y:"150",width:"480",height:"25",fill:"#2d3748",stroke:"#cbd5e0",strokeWidth:"1.5"}),f.jsxs("text",{x:"300",y:"167",fill:"#cbd5e0",fontSize:"11",fontWeight:"bold",textAnchor:"middle",letterSpacing:"2",children:["COIFA INOX ",(M=d[0])==null?void 0:M.lengthMeters,"m (",e," ZONA",e>1?"S":"",")"]}),f.jsx("circle",{cx:"180",cy:"130",r:"6",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.5"}),f.jsx("text",{x:"180",y:"120",fill:"#f6e05e",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"PLENO 1"}),f.jsx("circle",{cx:"420",cy:"130",r:"6",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.5"}),f.jsx("text",{x:"420",y:"120",fill:"#f6e05e",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"PLENO 2"}),Array.from({length:S.hoodSensorsCount}).map((C,L)=>{const A=100+(L+1)*(400/(S.hoodSensorsCount+1));return f.jsxs("g",{children:[f.jsx("circle",{cx:A,cy:"142",r:"5",fill:"#dd6b20",stroke:"#ffffff",strokeWidth:"1.2"}),f.jsx("text",{x:A,y:"158",fill:"#fbd38d",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"145°C"})]},`sensor-${L}`)}),f.jsx("rect",{x:"60",y:"240",width:"480",height:"70",fill:"#1a202c",stroke:"#4a5568",strokeWidth:"1.5"}),(_=d[0])==null?void 0:_.appliances.map((C,L)=>{const A=d[0].appliances.length,I=440/Math.max(1,A),D=80+L*I,F=I-10;return f.jsxs("g",{children:[f.jsx("rect",{x:D,y:"220",width:F,height:"80",fill:"#2d3748",stroke:"#718096",strokeWidth:"1.2",rx:"4"}),f.jsx("text",{x:D+F/2,y:"255",fill:"#ffffff",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:C.name.split(" ")[0]}),f.jsx("text",{x:D+F/2,y:"275",fill:"#a0aec0",fontSize:"8",textAnchor:"middle",children:C.type.toUpperCase()}),f.jsx("line",{x1:D+F/2,y1:"175",x2:D+F/2,y2:"200",stroke:"#d4af37",strokeWidth:"2"}),f.jsx("polygon",{points:`${D+F/2-5},200 ${D+F/2+5},200 ${D+F/2},210`,fill:"#d4af37"}),f.jsx("text",{x:D+F/2,y:"195",fill:"#ecc94b",fontSize:"7",fontWeight:"bold",textAnchor:"end",children:"BICOK"})]},C.id)}),f.jsx("rect",{x:"535",y:"160",width:"55",height:"85",fill:"#171923",stroke:"#e53e3e",strokeWidth:"2",rx:"5"}),f.jsx("rect",{x:"542",y:"170",width:"40",height:"30",fill:"#3182ce",rx:"2"}),f.jsx("text",{x:"562",y:"188",fill:"#ffffff",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"VTS 32S3"}),f.jsx("circle",{cx:"562",cy:"225",r:"7",fill:"#e53e3e"}),f.jsx("text",{x:"562",y:"240",fill:"#e2e8f0",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"OUTFIRE"}),f.jsx("line",{x1:"60",y1:"310",x2:"540",y2:"310",stroke:"#ecc94b",strokeWidth:"3"}),f.jsx("rect",{x:"180",y:"303",width:"20",height:"14",fill:"#e53e3e",stroke:"#ffffff",strokeWidth:"1"}),f.jsx("text",{x:"190",y:"328",fill:"#feb2b2",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"VÁLVULA GÁS"})]}),f.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2 border-t border-white/10 text-[10px] text-gray-300",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#d4af37]"}),f.jsx("span",{children:"Bico Saponificante Classe K"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),f.jsx("span",{children:"Bico CO2 Duto"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),f.jsx("span",{children:"Sensor 145°C Coifa"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-500"}),f.jsx("span",{children:"Sensor 300°C Duto"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-sm bg-red-700"}),f.jsx("span",{children:"Damper Corta-Fogo"})]})]})]}),f.jsxs("div",{className:"mt-6 space-y-3",children:[f.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[f.jsx(ls,{className:"w-4 h-4 text-emerald-400"}),f.jsx("span",{children:"Resumo do Dimensionamento Técnico (BOM)"})]}),f.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos Saponificante"}),f.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[S.totalSaponificanteNozzles," un"]}),f.jsxs("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:["(",S.saponificanteLiters,"L calculados)"]})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro Saponificante"}),f.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[S.recommendedSaponificanteCylinderLiters," L"]}),f.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 9L"})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos de CO2 (Duto)"}),f.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[S.co2NozzlesCount," un"]}),f.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"(1 a cada 3m de duto)"})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro de CO2"}),f.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[S.recommendedCo2CylinderKg," Kg"]}),f.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 10kg"})]})]}),f.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Coifa (145°C)"}),f.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[S.hoodSensorsCount," un (1/metro)"]})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Duto (300°C)"}),f.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[S.ductSensorsCount," un (1 a cada 3m)"]})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Intertravamento Total"}),f.jsx("span",{className:"text-xs font-bold text-emerald-400 block",children:"Gás + Exaustão + Damper"})]})]})]}),f.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4",children:[f.jsxs("button",{onClick:T,className:"flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group",children:[f.jsx(sr,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),f.jsx("span",{children:"Enviar Orçamento para WhatsApp"})]}),f.jsxs("button",{onClick:N,className:"py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black rounded-2xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[f.jsx(Gx,{className:"w-5 h-5 fill-black"}),f.jsx("span",{children:"Comprar Kit na Loja"})]})]}),f.jsx("p",{className:"text-center text-xs text-gray-400 mt-3",children:"*O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros."})]})})]})]})})},rE=[{id:"central-outfire-vts-1",sku:"OUT-VTS-1C",name:"Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)",category:"kit",priceBRL:8900,description:"Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.",image:"/assets/central-outfire-fundo-removido.png",specs:["Controle autônomo para 1 coifa","IHM Touchscreen colorida com avisos de voz","1x Cilindro Saponificante 9 Litros Classe K","1x Cilindro CO2 10 Kg com cabeçote solenoide","Intertravamento de Gás e Exaustor","Certificação em conformidade com NBR 14518"],featured:!0,inStock:!0},{id:"central-outfire-vts-2",sku:"OUT-VTS-2C",name:"Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)",category:"kit",priceBRL:14500,description:"Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.",image:"/assets/central-outfire-instalada.jpg",specs:["Controle independente para até 2 coifas","IHM Touchscreen com monitoramento individual por setor","2x Cilindros Saponificante (dimensionados sob medida)","Cilindros de CO2 dedicados para cada duto","Contagem regressiva de segurança anti-disparo acidental","Agenda semanal para abertura e corte automático de gás"],featured:!0,inStock:!0},{id:"central-outfire-vts-3",sku:"OUT-VTS-3C",name:"Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)",category:"kit",priceBRL:19800,description:"A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.",image:"/assets/central-outfire-ihm.jpg",specs:["Controle simultâneo e independente de 3 coifas","Acionamento individual de dampers e CO2 por duto","Alertas de voz falada de alta potência","Histórico completo de eventos e diagnósticos de vazamento","Interface para integração com Alarme Predial de Shoppings","Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A"],featured:!0,inStock:!0},{id:"bico-saponificante-inox",sku:"OUT-BIC-SAP",name:"Bico Aspersor de Inox para Saponificante (Classe K)",category:"bicos",priceBRL:185,description:"Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.",image:"/assets/central-outfire-interno.jpg",specs:["Material: Aço Inoxidável 304 polido",'Rosca: 3/8" ou 1/2" NPT',"Ângulo de abertura especial para cubas e filtros","Capa protetora com cordão de retenção inclusa"],featured:!1,inStock:!0},{id:"bico-co2-duto",sku:"OUT-BIC-CO2",name:"Bico Difusor de CO2 para Dutos de Exaustão",category:"bicos",priceBRL:210,description:"Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.",image:"/assets/central-outfire-interno.jpg",specs:["Inundação rápida em alta pressão","Rosca NPT padronizada","Resistente a calor contínuo de até 400°C"],featured:!1,inStock:!0},{id:"sensor-coifa-145c",sku:"OUT-SNS-145",name:"Sensor Térmico Regulável para Coifa (Calibrado 145°C)",category:"sensores",priceBRL:295,description:"Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)","Haste blindada em inox resistente a vapores e gordura","Contato seco normalmente aberto/fechado","Cabo de alta temperatura blindado em malha metálica"],featured:!1,inStock:!0},{id:"sensor-duto-300c",sku:"OUT-SNS-300",name:"Sensor Térmico Regulável para Duto (Calibrado 300°C)",category:"sensores",priceBRL:320,description:"Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de operação: até 350°C (ajustado em 300°C)","Instalação externa com sonda inserida no duto","Conexão estanque anti-vazamento de óleo"],featured:!1,inStock:!0},{id:"recarga-saponificante-9l",sku:"OUT-AG-SAP9",name:"Galão Agente Saponificante Classe K Outfire (9 Litros)",category:"cilindro",priceBRL:680,description:"Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.",image:"/assets/central-outfire-fundo-removido.png",specs:["Volume: 9 Litros líquidos","Ação de saponificação com espuma refrigerante espessa","Não tóxico e biodegradável","Laudo técnico de conformidade para bombeiros"],featured:!1,inStock:!0},{id:"valvula-gas-solenoide-1pol",sku:"OUT-VLV-GAS1",name:'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',category:"valvulas",priceBRL:840,description:"Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.",image:"/assets/central-outfire-interno.jpg",specs:["Diâmetro: 1 polegada BSP/NPT","Rearme manual para segurança obrigatória","Corpo em latão forjado de alta resistência","Compatível com GLP e Gás Natural encanado"],featured:!1,inStock:!0},{id:"damper-corta-fogo-motorizado",sku:"OUT-DMP-CF",name:"Damper Corta-Fogo Motorizado com Mola de Retorno",category:"acessorios",priceBRL:1250,description:"Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.",image:"/assets/central-outfire-interno.jpg",specs:["Lâminas corta-fogo com vedação hermética","Atuador 24V com retorno por mola mecânica","Resistência ao fogo: 120 minutos (TRRF 120)","Microswitch de confirmação de fechamento"],featured:!1,inStock:!0},{id:"acionador-manual-pull",sku:"OUT-ACT-MAN",name:"Estação de Disparo Manual de Emergência (Tipo Puxador)",category:"acessorios",priceBRL:310,description:"Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.",image:"/assets/central-outfire-fundo-removido.png",specs:["Acionamento mecânico e elétrico simultâneo","Pintura eletrostática de alta visibilidade","Trava de segurança para impedir toque acidental"],featured:!1,inStock:!0}],sE=({onAddToCart:s})=>{const[e,n]=ot.useState("all"),[r,o]=ot.useState(""),l=[{id:"all",name:"Todos os Produtos"},{id:"kit",name:"Sistemas Completos"},{id:"bicos",name:"Bicos de Aspersão"},{id:"sensores",name:"Sensores Reguláveis"},{id:"cilindro",name:"Cilindros & Recargas"},{id:"valvulas",name:"Válvulas de Gás"},{id:"acessorios",name:"Acessórios & Acionadores"}],u=rE.filter(p=>{const m=e==="all"||p.category===e,x=p.name.toLowerCase().includes(r.toLowerCase())||p.description.toLowerCase().includes(r.toLowerCase())||p.sku.toLowerCase().includes(r.toLowerCase());return m&&x}),d=p=>{const m=`Olá! Gostaria de comprar ou solicitar proposta para o produto:
*${p.name}* (SKU: ${p.sku})
Valor: R$ ${p.priceBRL.toLocaleString("pt-BR")},00.
Poderia me passar os prazos de entrega e condições de faturamento?`;window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(m)}`,"_blank")};return f.jsx("section",{id:"loja",className:"py-24 bg-[#08090c] relative",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(ql,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Loja Oficial Outfire"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Sistemas Completos & ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Peças de Reposição Certificadas"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica."})]}),f.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10",children:[f.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full lg:w-auto",children:l.map(p=>f.jsx("button",{onClick:()=>n(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${e===p.id?"bg-[#d4af37] text-black shadow-glow-gold":"bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"}`,children:p.name},p.id))}),f.jsxs("div",{className:"relative w-full lg:w-72",children:[f.jsx(uv,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),f.jsx("input",{type:"text",placeholder:"Buscar bicos, sensores, cilindros...",value:r,onChange:p=>o(p.target.value),className:"w-full bg-[#12141a] border border-[#d4af37]/20 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"})]})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(p=>f.jsxs("div",{className:"glass-panel-gold rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"relative w-full h-56 bg-gradient-to-br from-[#171a22] to-[#0a0c10] p-6 flex items-center justify-center overflow-hidden border-b border-white/5",children:[f.jsx("img",{src:p.image,alt:p.name,className:"max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"}),f.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5",children:[p.featured&&f.jsxs("span",{className:"bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-glow-gold flex items-center gap-1",children:[f.jsx(co,{className:"w-3 h-3 fill-black"}),"Mais Vendido"]}),f.jsxs("span",{className:"bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] font-mono px-2 py-0.5 rounded border border-[#d4af37]/30",children:["SKU: ",p.sku]})]}),f.jsx("span",{className:"absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800",children:"Pronta Entrega"})]}),f.jsxs("div",{className:"p-6",children:[f.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans line-clamp-1",children:p.name}),f.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2",children:p.description}),f.jsx("div",{className:"space-y-1.5 mb-6",children:p.specs.slice(0,3).map((m,x)=>f.jsxs("div",{className:"flex items-start gap-2 text-[11px] text-gray-300",children:[f.jsx(Xx,{className:"w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsx("span",{className:"line-clamp-1",children:m})]},x))})]})]}),f.jsxs("div",{className:"p-6 pt-0",children:[f.jsxs("div",{className:"flex items-baseline justify-between mb-4 pt-4 border-t border-white/10",children:[f.jsxs("div",{children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Preço à vista ou faturado"}),f.jsxs("span",{className:"text-2xl font-black text-[#f3e5ab] font-mono",children:["R$ ",p.priceBRL.toLocaleString("pt-BR"),",00"]})]}),f.jsx("span",{className:"text-xs text-[#e5c05d] font-bold",children:"Em até 12x"})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[f.jsxs("button",{onClick:()=>s(p),className:"py-2.5 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-1.5",children:[f.jsx(ql,{className:"w-3.5 h-3.5 fill-black"}),f.jsx("span",{children:"Adicionar"})]}),f.jsxs("button",{onClick:()=>d(p),className:"py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5",title:"Negociar faturamento via WhatsApp",children:[f.jsx(sr,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"WhatsApp"})]})]})]})]},p.id))})]})})},aE=()=>{const s=[{title:"Manual de Instalação e Esquema Elétrico Central Outfire VTS 32S3",type:"PDF Oficial de Fábrica",size:"939 KB",description:"Diagrama completo de ligação dos bornes, ligação dos relés de gás e exaustão, sensores reguláveis, dampers e alimentação 12V/Bateria.",link:"/assets/manual-instalacao-central-outfire.pdf",featured:!0},{title:"Procedimento Operacional Padrão (POP) Pós-Disparo",type:"Guia Técnico",size:"280 KB",description:"Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, rearme da válvula e recarga.",link:"#contato"},{title:"Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)",type:"Documento para Bombeiros / AVCB",size:"420 KB",description:"Documentação comprobatória das características técnicas e ensaios de conformidade para instrução de processos no Corpo de Bombeiros.",link:"#contato"}],e=[{step:"01",title:"Posicionamento da Central VTS 32S3",desc:"Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída."},{step:"02",title:"Passagem dos Cabos Blindados de Alta Temperatura",desc:"Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes."},{step:"03",title:"Interligação da Válvula de Gás e Exaustor",desc:"Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão."},{step:"04",title:"Comissionamento e Teste sem Disparo",desc:"Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final."}];return f.jsx("section",{id:"manuais",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(jx,{className:"w-3.5 h-3.5"}),"Engenharia & Suporte"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Manuais Técnicos & ",f.jsx("br",{}),f.jsx("span",{className:"gold-gradient-text",children:"Documentos de Instalação"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo e memoriais de cálculo para instaladores, engenheiros e montadores de coifa."})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:s.map((n,r)=>f.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${n.featured?"glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold":"glass-panel border-white/10"}`,children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md",children:n.type}),f.jsx(hd,{className:`w-6 h-6 ${n.featured?"text-amber-400":"text-gray-400"}`})]}),f.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans",children:n.title}),f.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6",children:n.description})]}),f.jsxs("div",{className:"pt-4 border-t border-white/10 flex items-center justify-between",children:[f.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["Tamanho: ",n.size]}),f.jsxs("a",{href:n.link,target:n.link.startsWith("http")||n.link.endsWith(".pdf")?"_blank":"_self",rel:"noopener noreferrer",className:`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${n.featured?"gold-gradient hover:brightness-110 text-black font-extrabold shadow-glow-gold":"bg-white/10 hover:bg-white/20 text-white"}`,children:[f.jsx(Yx,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Baixar Documento"})]})]})]},r))}),f.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-white/10",children:[f.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[f.jsx(gv,{className:"w-5 h-5 text-amber-400"}),f.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:"Guia Prático de Instalação da Central Outfire VTS 32S3"})]}),f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((n,r)=>f.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 relative",children:[f.jsx("span",{className:"text-2xl font-black text-amber-400 font-mono block mb-2 opacity-90",children:n.step}),f.jsx("h4",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:n.title}),f.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:n.desc})]},r))}),f.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[f.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left",children:[f.jsx(pd,{className:"w-4 h-4 text-emerald-400 shrink-0"}),f.jsx("span",{children:"Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp."})]}),f.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire.",target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0",children:"Suporte Técnico de Engenharia →"})]})]})]})})},oE=()=>{const[s,e]=ot.useState(null),n=[{src:"/assets/central-outfire-instalada.jpg",title:"Central Outfire VTS Instalada em Cozinha Real",category:"Instalação em Restaurante",desc:"Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto."},{src:"/assets/central-outfire-interno.jpg",title:"Placa de Controle & Relés de Potência Outfire",category:"Engenharia Interna",desc:"Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria."},{src:"/assets/central-outfire-ihm.jpg",title:"IHM Touchscreen em Operação com Alerta",category:"Interface de Operação",desc:"Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações."},{src:"/assets/central-outfire-fundo-removido.png",title:"Gabinete Industrial Outfire VTS 32S3",category:"Design Robusto",desc:"Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais."}];return f.jsxs("section",{id:"galeria",className:"py-24 bg-[#0d0f13] relative",children:[f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(co,{className:"w-3.5 h-3.5"}),"Casos Reais & Engenharia em Campo"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Instalações Reais do ",f.jsx("br",{}),f.jsx("span",{className:"gold-gradient-text",children:"Sistema Outfire em Ação"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes e a integração visual impecável nas cozinhas dos nossos clientes."})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:n.map((r,o)=>f.jsxs("div",{onClick:()=>e(r),className:"glass-panel rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-glow-gold overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1",children:[f.jsxs("div",{className:"relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center",children:[f.jsx("img",{src:r.src,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),f.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm",children:[f.jsx(Kx,{className:"w-5 h-5 text-amber-400"}),f.jsx("span",{children:"Clique para Ampliar Foto"})]}),f.jsx("div",{className:"absolute top-4 left-4",children:f.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:r.category})})]}),f.jsxs("div",{className:"p-6",children:[f.jsxs("h3",{className:"text-lg font-bold text-white mb-2 font-sans flex items-center justify-between",children:[f.jsx("span",{children:r.title}),f.jsx(ev,{className:"w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors"})]}),f.jsx("p",{className:"text-xs sm:text-sm text-gray-400 leading-relaxed",children:r.desc})]})]},o))})]}),s&&f.jsx("div",{onClick:()=>e(null),className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",children:f.jsxs("div",{onClick:r=>r.stopPropagation(),className:"max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[f.jsx("div",{className:"relative max-h-[70vh] bg-black flex items-center justify-center p-2",children:f.jsx("img",{src:s.src,alt:s.title,className:"max-h-[65vh] w-auto object-contain rounded-xl"})}),f.jsxs("div",{className:"p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-lg font-bold text-white",children:s.title}),f.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]}),f.jsx("button",{onClick:()=>e(null),className:"py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all",children:"Fechar"})]})]})})]})},lE=()=>{const[s,e]=ot.useState({nome:"",empresa:"",telefone:"",cidade:"",coifas:"1",mensagem:""}),[n,r]=ot.useState(!1),o=l=>{l.preventDefault();let u=`📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*

`;u+=`👤 *Nome:* ${s.nome}
`,u+=`🏢 *Empresa / Restaurante:* ${s.empresa||"Não informado"}
`,u+=`📱 *Telefone / WhatsApp:* ${s.telefone}
`,u+=`📍 *Cidade / Estado:* ${s.cidade}
`,u+=`🍳 *Qtd de Coifas:* ${s.coifas} coifa(s)
`,s.mensagem&&(u+=`💬 *Mensagem:* ${s.mensagem}
`),r(!0),setTimeout(()=>{window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(u)}`,"_blank"),r(!1)},1e3)};return f.jsxs("footer",{id:"contato",className:"bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden",children:[f.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",children:f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[f.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide",children:[f.jsx(sr,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Canais Diretos de Engenharia & Vendas"]}),f.jsxs("h3",{className:"text-3xl sm:text-4xl font-black text-white font-sans tracking-tight",children:["Fale com um Especialista ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"em Supressão Outfire"})]}),f.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes."}),f.jsxs("div",{className:"space-y-4 pt-4",children:[f.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[f.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",children:f.jsx(sr,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"WhatsApp Vendas & Orçamentos"}),f.jsx("span",{className:"text-base font-bold text-white group-hover:text-emerald-400 transition-colors",children:"(15) 99657-6807"})]})]}),f.jsxs("a",{href:"https://wa.me/5515981577847",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[f.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform",children:f.jsx(sr,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"Suporte Técnico & Pós-Venda"}),f.jsx("span",{className:"text-base font-bold text-white group-hover:text-red-400 transition-colors",children:"(15) 98157-7847"})]})]}),f.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300",children:[f.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0",children:f.jsx(Jx,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("span",{className:"font-bold text-white block",children:"Atendimento em Todo o Brasil"}),f.jsx("span",{className:"text-gray-400",children:"Envio de kits prontos para instalação com laudo ART e suporte remoto."})]})]})]})]}),f.jsx("div",{className:"lg:col-span-7",children:f.jsxs("div",{className:"glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative",children:[f.jsx("h4",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Solicite uma Proposta Técnica sem Compromisso"}),f.jsx("p",{className:"text-xs text-gray-400 mb-6",children:"Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar."}),n?f.jsxs("div",{className:"p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl",children:[f.jsx(ls,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),f.jsx("h5",{className:"text-base font-bold text-white",children:"Encaminhando para o WhatsApp..."}),f.jsx("p",{className:"text-xs text-gray-300",children:"Você será direcionado diretamente para um especialista no WhatsApp."})]}):f.jsxs("form",{onSubmit:o,className:"space-y-4",children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Seu Nome Completo *"}),f.jsx("input",{type:"text",required:!0,placeholder:"Ex: Carlos Silva",value:s.nome,onChange:l=>e({...s,nome:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Nome do Restaurante / Empresa"}),f.jsx("input",{type:"text",placeholder:"Ex: Hamburgueria Grill",value:s.empresa,onChange:l=>e({...s,empresa:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"WhatsApp com DDD *"}),f.jsx("input",{type:"tel",required:!0,placeholder:"Ex: (11) 98765-4321",value:s.telefone,onChange:l=>e({...s,telefone:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Cidade e Estado *"}),f.jsx("input",{type:"text",required:!0,placeholder:"Ex: São Paulo / SP",value:s.cidade,onChange:l=>e({...s,cidade:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Quantas Coifas precisam de proteção?"}),f.jsxs("select",{value:s.coifas,onChange:l=>e({...s,coifas:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500",children:[f.jsx("option",{value:"1",children:"1 Coifa (Pequeno / Médio Porte)"}),f.jsx("option",{value:"2",children:"2 Coifas (Atuação Independente)"}),f.jsx("option",{value:"3",children:"3 Coifas (Atuação Independente)"}),f.jsx("option",{value:"mais de 3",children:"Mais de 3 Coifas / Projeto Especial"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Detalhes adicionais (opcional)"}),f.jsx("textarea",{rows:3,placeholder:"Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB.",value:s.mensagem,onChange:l=>e({...s,mensagem:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),f.jsxs("button",{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group",children:[f.jsx(dv,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform fill-black"}),f.jsx("span",{children:"Enviar para a Engenharia Outfire"})]})]})]})})]})}),f.jsx("div",{className:"border-t border-[#d4af37]/20 py-8 bg-[#050608]",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE",className:"h-8 w-auto object-contain"}),f.jsxs("span",{children:["© ",new Date().getFullYear()," Outfire Sistemas contra Incêndio. Todos os direitos reservados."]})]}),f.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[f.jsx("a",{href:"#hero-3d",className:"hover:text-white transition-colors",children:"Simulação 3D"}),f.jsx("a",{href:"#central-vts",className:"hover:text-white transition-colors",children:"Central VTS"}),f.jsx("a",{href:"#normas",className:"hover:text-white transition-colors",children:"Normas NBR"}),f.jsx("a",{href:"#calculadora",className:"hover:text-white transition-colors",children:"Calculadora"}),f.jsx("a",{href:"#loja",className:"hover:text-white transition-colors",children:"Loja"}),f.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"hover:text-white transition-colors",children:"Manual PDF"})]})]})})]})},cE=({isOpen:s,onClose:e,cartItems:n,onUpdateQuantity:r,onRemoveItem:o,onClearCart:l})=>{const[u,d]=ot.useState(!1),[p,m]=ot.useState(!1);if(!s)return null;const x=n.reduce((S,T)=>S+T.product.priceBRL*T.quantity,0),v=()=>{let S=`🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*

`;S+=`Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:

`,n.forEach((T,N)=>{S+=`${N+1}. *${T.product.name}*
`,S+=`   SKU: ${T.product.sku} | Qtd: ${T.quantity} un
`,S+=`   Valor: R$ ${(T.product.priceBRL*T.quantity).toLocaleString("pt-BR")},00

`}),S+=`💰 *TOTAL DO PEDIDO:* R$ ${x.toLocaleString("pt-BR")},00

`,S+="Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.",window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(S)}`,"_blank")},y=S=>{m(!0),setTimeout(()=>{l(),m(!1),d(!1),e(),alert(`Pedido registrado com sucesso via ${S}! Nossa equipe entrará em contato para emissão de NF-e e envio.`)},2e3)};return f.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[f.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"}),f.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:f.jsxs("div",{className:"w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative",children:[f.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(lm,{className:"w-5 h-5 text-[#d4af37]"}),f.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Seu Carrinho de Compras"})]}),f.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:f.jsx(gd,{className:"w-5 h-5"})})]}),f.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:n.length===0?f.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4",children:[f.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500",children:f.jsx(lm,{className:"w-8 h-8"})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-base font-bold text-white",children:"Seu carrinho está vazio"}),f.jsx("p",{className:"text-xs text-gray-400 mt-1 max-w-xs",children:"Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja."})]}),f.jsx("a",{href:"#calculadora",onClick:e,className:"py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all",children:"Abrir Calculadora da Cozinha"})]}):n.map(S=>f.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group",children:[f.jsx("img",{src:S.product.image,alt:S.product.name,className:"w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("h4",{className:"text-xs font-bold text-white line-clamp-1",children:S.product.name}),f.jsxs("span",{className:"text-[10px] font-mono text-gray-400 block mt-0.5",children:["SKU: ",S.product.sku]}),f.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono block mt-1",children:["R$ ",S.product.priceBRL.toLocaleString("pt-BR"),",00"]}),f.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[f.jsxs("div",{className:"flex items-center bg-black/50 border border-white/10 rounded-lg",children:[f.jsx("button",{onClick:()=>r(S.product.id,-1),className:"p-1 hover:text-red-400 transition-colors",children:f.jsx(iv,{className:"w-3 h-3"})}),f.jsx("span",{className:"px-2 text-xs font-bold text-white",children:S.quantity}),f.jsx("button",{onClick:()=>r(S.product.id,1),className:"p-1 hover:text-emerald-400 transition-colors",children:f.jsx(Qa,{className:"w-3 h-3"})})]}),f.jsxs("button",{onClick:()=>o(S.product.id),className:"text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1",children:[f.jsx(d0,{className:"w-3 h-3"}),f.jsx("span",{children:"Remover"})]})]})]})]},S.product.id))}),n.length>0&&f.jsxs("div",{className:"p-6 border-t border-white/10 bg-[#0c0d10] space-y-4",children:[f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[f.jsx("span",{children:"Subtotal:"}),f.jsxs("span",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]}),f.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[f.jsx("span",{children:"Nota Fiscal & Laudo ART:"}),f.jsx("span",{className:"text-emerald-400 font-medium",children:"Incluso"})]}),f.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[f.jsx("span",{children:"Total Estimado:"}),f.jsxs("span",{className:"font-mono text-xl text-amber-400",children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]})]}),f.jsxs("div",{className:"space-y-2",children:[f.jsxs("button",{onClick:v,className:"w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",children:[f.jsx(sr,{className:"w-4 h-4"}),f.jsx("span",{children:"Enviar Pedido pelo WhatsApp (Comercial)"})]}),f.jsxs("button",{onClick:()=>d(!0),className:"w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-xs rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[f.jsx(om,{className:"w-4 h-4 fill-black"}),f.jsx("span",{children:"Finalizar Pagamento Online (Pix / Cartão)"})]})]}),f.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center",children:[f.jsx(pd,{className:"w-3.5 h-3.5 text-emerald-400"}),f.jsx("span",{children:"Compra segura com garantia direta do fabricante Outfire"})]})]}),u&&f.jsxs("div",{className:"absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[f.jsx("h3",{className:"font-bold text-white text-base",children:"Checkout Rápido Outfire"}),f.jsx("button",{onClick:()=>d(!1),className:"p-1 text-gray-400 hover:text-white",children:f.jsx(gd,{className:"w-5 h-5"})})]}),p?f.jsxs("div",{className:"text-center py-12 space-y-4",children:[f.jsx(hf,{className:"w-16 h-16 text-emerald-400 mx-auto animate-bounce"}),f.jsx("h4",{className:"text-lg font-bold text-white",children:"Pagamento Confirmado!"}),f.jsx("p",{className:"text-xs text-gray-300",children:"Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato."})]}):f.jsxs("div",{className:"space-y-4",children:[f.jsxs("p",{className:"text-xs text-gray-300",children:["Selecione a forma de pagamento desejada para concluir o pedido de ",f.jsxs("strong",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]}),":"]}),f.jsxs("button",{onClick:()=>y("PIX"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx(av,{className:"w-6 h-6 text-emerald-400"}),f.jsxs("div",{children:[f.jsx("span",{className:"text-sm font-bold text-white block",children:"Pagar via Pix"}),f.jsx("span",{className:"text-[11px] text-gray-400",children:"Aprovação imediata com 5% de desconto"})]})]}),f.jsx(zl,{className:"w-4 h-4 text-gray-400"})]}),f.jsxs("button",{onClick:()=>y("Cartão de Crédito"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx(om,{className:"w-6 h-6 text-blue-400"}),f.jsxs("div",{children:[f.jsx("span",{className:"text-sm font-bold text-white block",children:"Cartão de Crédito"}),f.jsx("span",{className:"text-[11px] text-gray-400",children:"Parcelamento em até 12x sem juros"})]})]}),f.jsx(zl,{className:"w-4 h-4 text-gray-400"})]}),f.jsxs("button",{onClick:()=>y("Boleto Faturado B2B"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx(pd,{className:"w-6 h-6 text-amber-400"}),f.jsxs("div",{children:[f.jsx("span",{className:"text-sm font-bold text-white block",children:"Faturamento B2B / Boleto PJ"}),f.jsx("span",{className:"text-[11px] text-gray-400",children:"Para restaurantes e empresas cadastradas"})]})]}),f.jsx(zl,{className:"w-4 h-4 text-gray-400"})]})]})]}),f.jsx("button",{onClick:()=>d(!1),className:"w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all",children:"Voltar ao Carrinho"})]})]})})]})},uE=()=>f.jsxs("aside",{"aria-label":"Atendimento rápido",className:"fixed bottom-6 right-6 z-40 flex items-center group",children:[f.jsx("div",{className:"hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:"Falar com Engenheiro no WhatsApp 💬"}),f.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico.",target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20",title:"Atendimento no WhatsApp","aria-label":"Atendimento no WhatsApp",children:[f.jsx(nv,{className:"w-7 h-7 fill-white/10"}),f.jsxs("span",{className:"absolute -top-1 -right-1 flex h-4 w-4",children:[f.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),f.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"})]})]})]});function dE(){const[s,e]=ot.useState([]),[n,r]=ot.useState(!1),o=m=>{e(x=>x.find(y=>y.product.id===m.id)?x.map(y=>y.product.id===m.id?{...y,quantity:y.quantity+1}:y):[...x,{product:m,quantity:1}]),r(!0)},l=(m,x)=>{e(v=>v.map(y=>{if(y.product.id===m){const S=y.quantity+x;return S>0?{...y,quantity:S}:null}return y}).filter(Boolean))},u=m=>{e(x=>x.filter(v=>v.product.id!==m))},d=()=>{e([])},p=s.reduce((m,x)=>m+x.quantity,0);return f.jsxs("div",{className:"min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[f.jsx(vv,{cartCount:p,onOpenCart:()=>r(!0)}),f.jsxs("main",{className:"flex-1",children:[f.jsx(Jw,{}),f.jsx(eE,{}),f.jsx(tE,{}),f.jsx(nE,{}),f.jsx(iE,{onAddToCart:o}),f.jsx(sE,{onAddToCart:o}),f.jsx(aE,{}),f.jsx(oE,{})]}),f.jsx(lE,{}),f.jsx(cE,{isOpen:n,onClose:()=>r(!1),cartItems:s,onUpdateQuantity:l,onRemoveItem:u,onClearCart:d}),f.jsx(uE,{})]})}Ox.createRoot(document.getElementById("root")).render(f.jsx(Nx.StrictMode,{children:f.jsx(dE,{})}));
