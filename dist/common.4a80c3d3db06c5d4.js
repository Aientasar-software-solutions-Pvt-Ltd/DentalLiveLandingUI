"use strict";(self.webpackChunkDentalLive_dev=self.webpackChunkDentalLive_dev||[]).push([[592],{5714:(U,O,o)=>{o.d(O,{n:()=>v});var b=o(8306),h=o(5e3),k=o(1879),D=o(2290),A=o(9114),E=o(520),M=o(3762);let v=(()=>{class n{constructor(s,u,m,d,p){this.router=s,this.utility=u,this.dataService=m,this.http=d,this.usr=p,this.products=[],this.permissions=[],this.hasMail=!1,this.hasMeet=!1,this.isAdmin=!1,this.isPackageSelecetd=!1,this.isPristine=!0,this.hasProducts=!0,this.forceReload=!1}canActivate(s,u){if(0==this.products.length||this.forceReload){let m=this.reloadPermission();return m?new b.y(()=>{this.dataService.getallData(m,!0).subscribe(d=>{d&&(d=JSON.parse(d.toString())),this.isPristine=!1,this.products=d.products,this.permissions=d.permissions,this.checkPackages(),this.router.navigate([u.url])},()=>(this.router.navigate(["/login"]),!1))}):this.activate(u)}return this.activate(u)}activate(s){if(s.url.includes("dashboard"))return!0;if(s.url.includes("mail")&&!s.url.includes("packages")&&!s.url.includes("talk")){if(this.hasPermission("Inbox"))return!0;this.router.navigate(["/mail/dashboard/subaccount"])}return s.url.includes("compose")?!!this.hasPermission("Compose"):s.url.includes("inbox")?!!this.hasPermission("Inbox"):s.url.includes("sent")?!!this.hasPermission("Sent"):s.url.includes("contacts")?!!this.hasPermission("Contacts"):s.url.includes("patients")?!!this.hasPermission("Patients"):!s.url.includes("talk")||!!this.hasPermission("Meet",!0)}checkPackages(){0==this.products.length&&(!this.isPackageSelecetd&&!this.usr.getUserDetails().Subuser&&(this.isPackageSelecetd=!1,this.router.navigate(["/mail/packages"])),this.hasProducts=!1)}hasPermission(s,u=!1){return u?!!this.products.includes("Meet"):!!(this.isAdmin&&this.products.includes("Mail")||this.permissions.includes(s))}reloadPermission(){let s=this.usr.getUserDetails();if(!s)return null;if(this.isPristine){let u=this.utility.apiData.usage.ApiUrl+`?email=${s.emailAddress}&type=permission`;return this.isAdmin=!0,s.Subuser&&(u=this.utility.apiData.usage.ApiUrl+`?email=${s.emailAddress}&issub=true&subuserid=${s.Subuser.subUserID}&type=permission`,this.isAdmin=!1),u}return this.checkPackages(),null}}return n.\u0275fac=function(s){return new(s||n)(h.LFG(k.F0),h.LFG(D.t),h.LFG(A.T),h.LFG(E.eN),h.LFG(M.f))},n.\u0275prov=h.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},4637:(U,O,o)=>{o.d(O,{Z:()=>T});const D=function k(e){return Array.isArray(e)?e:void 0===e?[]:function h(e){return function b(e){return"object"==typeof e&&null!==e}(e)&&"number"==typeof e.length}(e)||e instanceof Set?Array.from(e):[e]};function v(e){return"object"==typeof e&&null!==e}function n(e){return void 0!==e}function s(e){return null===e}const r={isNumber:function A(e){return!isNaN(parseFloat(e))&&isFinite(e)},isPlainObject:function E(e){return null!==e&&"object"==typeof e&&e.constructor===Object},isArrayLike:function M(e){return v(e)&&"number"==typeof e.length},isObject:v,isDefined:n,isUndefined:function S(e){return!n(e)},isNull:s,isDefinedValue:function u(e){return n(e)&&!s(e)&&!Number.isNaN(e)},isClass:function m(e){return"function"==typeof e&&/^class /.test(Function.prototype.toString.call(e))},isPrimitive:function d(e){if(null===e)return!0;switch(typeof e){case"string":case"number":case"symbol":case"undefined":case"boolean":return!0;default:return!1}},isPromise:function p(e){if(e){const i=n(Promise)&&e instanceof Promise,L=e.then&&"function"==typeof e.then;return!(!i&&!L)}return!1},isIterable:function C(e){return!(null===e||!n(e)||"function"!=typeof e[Symbol.iterator]&&"function"!=typeof e[Symbol.asyncIterator])},isString:function F(e){return"string"==typeof e},isFunction:function N(e){return"function"==typeof e}},T=function R(e,i={}){return i=Object.assign({computed:{},customOrders:{},nullRank:1,undefinedRank:1},i),e.sort(function j(e={}){const i=D(e.by),L=D(e.order),{customOrders:_,computed:y}=e;return function G(P,g,c=0){const f=L[c]||"asc";if("asc"!==f&&"desc"!==f&&!_[f])return 0;let t,a,l;return i.length?(a=r.isDefined(P[i[c]])?P[i[c]]:y[i[c]]&&y[i[c]](P),l=r.isDefined(g[i[c]])?g[i[c]]:y[i[c]]&&y[i[c]](g)):(a=P,l=g),_&&_[f]?t=_[f].indexOf(a)-_[f].indexOf(l):a===l?t=0:r.isNull(a)&&r.isUndefined(l)?t="asc"===f?1:"desc"===f?-1:0:r.isUndefined(a)&&r.isNull(l)?t="asc"===f?-1:"desc"===f?1:0:r.isNull(a)&&r.isDefinedValue(l)?t=e.nullRank:r.isUndefined(a)&&r.isDefinedValue(l)?t=e.undefinedRank:r.isNull(l)&&r.isDefinedValue(a)?t=-e.nullRank:r.isUndefined(l)&&r.isDefinedValue(a)?t=-e.undefinedRank:(t=a<l?-1:a>l?1:0,"desc"===f&&(t*=-1)),0===t&&r.isDefined(i[c+1])&&(t=G(P,g,c+1)),t}}(i)),e}}}]);