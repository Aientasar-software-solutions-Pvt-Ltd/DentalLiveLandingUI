"use strict";(self.webpackChunkDentalLive_dev=self.webpackChunkDentalLive_dev||[]).push([[807],{995:(x,f,n)=>{n.d(f,{F:()=>T});var b=n(5861),v=n(520),P=n(2340),c=n(7206),Z=n(5e3);let T=(()=>{class p{constructor(s){this.http=s}getUserDetails(){try{let s=sessionStorage.getItem("usr");if(!s)return!1;let l=JSON.parse(c.AES.decrypt(s,P.N.decryptKey).toString(c.enc.Utf8));return!(l.exp<Date.now())&&l}catch(s){return sessionStorage.removeItem("usr"),!1}}uploadBinaryData(s,l,_){console.log(l);var C=this;return new Promise(function(O,a){C.getPreSignedUrl(s,_,"put",l.type).then(i=>{C.saveDataS3(l,i.url).then(()=>{O(i.name)}).catch(e=>{console.log(e),a("Failed to Upload")})}).catch(i=>{console.log(i),a("Failed to Upload")})})}getPreSignedUrl(s,l,_="get",C){var O=this;return(0,b.Z)(function*(){let a=new v.WM,i=sessionStorage.getItem("usr");return a=a.set("authorization",i),yield O.http.get(`https://hx4mf30vd7.execute-api.us-west-2.amazonaws.com/development/objectUrl?name=${s}&module=${l}&type=${_}&media=${C}`,{headers:a}).toPromise()})()}saveDataS3(s,l){var _=this;return(0,b.Z)(function*(){if(yield _.http.put(l,s).toPromise())return!0})()}}return p.\u0275fac=function(s){return new(s||p)(Z.LFG(v.eN))},p.\u0275prov=Z.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},7807:(x,f,n)=>{n.r(f),n.d(f,{DashboardModule:()=>O});var b=n(9808),v=n(1879),P=n(1373),c=n.n(P),t=n(5e3),Z=n(9114),T=n(2290),p=n(3762),U=n(995);function s(a,i){if(1&a&&(t.TgZ(0,"tr")(1,"td")(2,"div",45),t._UZ(3,"span",46),t.TgZ(4,"span",47),t._uU(5),t.qZA()()(),t.TgZ(6,"td")(7,"span",48),t._uU(8),t.ALo(9,"date"),t.qZA()()()),2&a){const e=i.$implicit;t.xp6(5),t.Oqu(e.messagetext),t.xp6(3),t.Oqu(t.xi3(9,2,e.dateCreated,"mediumDate"))}}function l(a,i){if(1&a&&(t.TgZ(0,"table",40)(1,"thead",41)(2,"tr",42)(3,"th",53),t._uU(4,"MILESTONE NAME"),t.qZA(),t.TgZ(5,"th",53),t._uU(6,"MILESTONE DATE"),t.qZA()()(),t.TgZ(7,"tbody"),t.YNc(8,s,10,5,"tr",54),t.qZA()()),2&a){const e=t.oxw();t.xp6(8),t.Q6J("ngForOf",e.messageAry)}}const C=[{path:"",component:(()=>{class a{constructor(e,g,d,h,o,r){this.dataService=e,this.utility=g,this.usr=d,this.router=h,this.utilitydev=o,this.route=r,this.messageArray=[],this.messageDataArray=[],this.messageAry=[],this.caseCount=0,this.caseinvitationCount=0,this.workworderCount=0,this.inboxCount=0}ngOnInit(){this.getThread(sessionStorage.getItem("loginResourceId")),this.getInviteListingReceived(sessionStorage.getItem("loginResourceId"))}getInviteListingReceived(e){let g=this.usr.getUserDetails(!1),d=this.utility.apiData.userCaseInvites.ApiUrl;d+="?invitedUserMail="+g.emailAddress;let h=new Date;d+="&dateTo="+h.getTime(),d+="undefined"==e||""==e||null==e?"&dateFrom="+h.getTime():"&dateFrom="+e,this.dataService.getallData(d,!0).subscribe(o=>{if(o){let m=JSON.parse(o.toString());for(var r=0;r<m.length;r++)this.caseinvitationCount++}},o=>{o.status?c()(o.error):c()("Unable to fetch the data, please try again")})}getInviteListing(e){let g=this.usr.getUserDetails(!1),d=this.utility.apiData.userCaseInvites.ApiUrl;d+="?resourceOwner="+g.emailAddress;let h=new Date;d+="&dateTo="+h.getTime(),d+="undefined"==e||""==e||null==e?"&dateFrom="+h.getTime():"&dateFrom="+e,this.dataService.getallData(d,!0).subscribe(o=>{if(o){let m=JSON.parse(o.toString());for(var r=0;r<m.length;r++)this.caseinvitationCount++}},o=>{o.status?c()(o.error):c()("Unable to fetch the data, please try again")})}getThread(e){if(c()("Processing...please wait...",{buttons:[!1,!1],closeOnClickOutside:!1}),this.usr.getUserDetails(!1)){let d=this.utility.apiData.userThreads.ApiUrl,h=new Date;d+="?dateTo="+h.getTime(),d+="undefined"==e||""==e||null==e?"&dateFrom="+h.getTime():"&dateFrom="+e,this.dataService.getallData(d,!0).subscribe(o=>{if(o){c().close();let u=JSON.parse(o.toString());u.sort((M,A)=>M.dateUpdated>A.dateUpdated?-1:1),this.inboxCount=u[0].mailCount,this.messageDataArray=Array();for(var r=0;r<u.length;r++){let M=u[r].sk;if(M){var m=M.split("#");"DETAILS"==m[0]?this.caseCount++:"WORKORDERS"==m[0]?this.workworderCount++:"MILESTONES"==m[0]&&this.messageDataArray.push({patientId:u[r].patientId,caseId:u[r].caseId,patientName:u[r].patientName,dateUpdated:u[r].dateUpdated,dateCreated:u[r].dateCreated,messageId:"",messagetext:u[r].title,messageimg:"",messagecomment:"",messagecomments:""})}u.length==r+1&&(this.messageAry=this.messageDataArray,this.messageAry.sort((A,y)=>A.dateUpdated>y.dateUpdated?-1:1))}}},o=>(o.status?c()(o.error):c()("Unable to fetch the data, please try again"),!1))}}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(Z.T),t.Y36(T.t),t.Y36(p.f),t.Y36(v.F0),t.Y36(U.F),t.Y36(v.gz))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-dashboard"]],decls:142,vars:5,consts:[[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/dashboard"],["aria-hidden","true",1,"bx","bxs-home"],[1,"page-header","row","align-items-center","gx-0"],[1,"col-md-6"],[1,"fw-bold"],[1,"col-md-6","text-end"],["routerLink","/cases/case-add/0",1,"btn","btn-pink","my-1"],[1,"bx","bx-briefcase-alt"],["routerLink","/patients/patient-add",1,"btn","btn-default","my-1","ms-2"],[1,"bx","bx-plus-circle"],[1,"row"],[1,"col-12","col-sm-12","col-lg-7"],[1,"row","gy-4"],[1,"col-sm-6","col-md-6","col-lg-6"],["routerLink","/cases/case-list"],[1,"card","dashboard-card"],[1,"card-body"],[1,"float-start"],[1,"bx","bx-refresh","dicon"],[1,"counter"],["routerLink","/workorders/work-orders"],[1,"card","dashboard-card2"],[1,"bx","bx-briefcase-alt","dicon"],["routerLink","/caseinvites/invitation-lists"],[1,"card","dashboard-card3"],[1,"bx","bx-file","dicon"],["routerLink","/mail/inbox"],[1,"card","dashboard-card4"],[1,"bx","bxs-inbox","dicon"],[1,"card","shadow-sm","mt-4"],[1,"card-header","border-bottom-0","bg-white"],[1,"col-7","col-md-7","align-self-center"],[1,"body1","card-title","my-2"],[1,"col-5","col-md-5"],[1,"d-flex","flex-wrap","align-items-center","justify-content-end"],["routerLink","#",1,"btn","btn-light-green","my-1","py-1","px-2"],[1,"card-body","p-0","pb-1"],[1,"table-responsive"],[1,"table","table-hover","table-nowrap","align-middle","mb-2"],[1,"thead-light"],[2,"text-transform","uppercase"],["width","65%",1,"body2"],["width","35%",1,"body2"],[1,"d-flex","align-items-center"],[1,"avatar-icon","avatar-vs"],[1,"ps-2","body2","d-block"],[1,"body2","text-muted"],[1,"col-12","col-sm-12","col-lg-5"],[1,"card","shadow-sm","mt-4","mt-lg-0"],["routerLink","/milestones/milestones-list",1,"btn","btn-light-green","my-1","py-1","px-2"],["class","table table-hover table-nowrap align-middle mb-2",4,"ngIf"],["width","50%",1,"body2"],[4,"ngFor","ngForOf"]],template:function(e,g){1&e&&(t.TgZ(0,"ol",0)(1,"li",1)(2,"a",2),t._UZ(3,"i",3),t._uU(4," Dashboard"),t.qZA()()(),t.TgZ(5,"div",4)(6,"div",5)(7,"h3",6),t._uU(8,"Dashboard"),t.qZA()(),t.TgZ(9,"div",7)(10,"a",8),t._UZ(11,"i",9),t._uU(12," Start a Case "),t.qZA(),t.TgZ(13,"a",10),t._UZ(14,"i",11),t._uU(15," Add Patient "),t.qZA()()(),t.TgZ(16,"div",12)(17,"div",13)(18,"div",14)(19,"div",15)(20,"a",16)(21,"div",17)(22,"div",18)(23,"div",19),t._UZ(24,"i",20),t.TgZ(25,"h5"),t._uU(26,"Case Updates"),t.qZA()(),t.TgZ(27,"div",21)(28,"span"),t._uU(29),t.qZA()()()()()(),t.TgZ(30,"div",15)(31,"a",22)(32,"div",23)(33,"div",18)(34,"div",19),t._UZ(35,"i",24),t.TgZ(36,"h5"),t._uU(37,"Work Orders"),t.qZA()(),t.TgZ(38,"div",21)(39,"span"),t._uU(40),t.qZA()()()()()(),t.TgZ(41,"div",15)(42,"a",25)(43,"div",26)(44,"div",18)(45,"div",19),t._UZ(46,"i",27),t.TgZ(47,"h5"),t._uU(48,"Invitations"),t.qZA()(),t.TgZ(49,"div",21)(50,"span"),t._uU(51),t.qZA()()()()()(),t.TgZ(52,"div",15)(53,"a",28)(54,"div",29)(55,"div",18)(56,"div",19),t._UZ(57,"i",30),t.TgZ(58,"h5"),t._uU(59,"Inbox"),t.qZA()(),t.TgZ(60,"div",21)(61,"span"),t._uU(62),t.qZA()()()()()()(),t.TgZ(63,"div",31)(64,"div",32)(65,"div",12)(66,"div",33)(67,"h5",34),t._uU(68,"Upcoming Meetings"),t.qZA()(),t.TgZ(69,"div",35)(70,"div",36)(71,"a",37),t._uU(72,"View All"),t.qZA()()()()(),t.TgZ(73,"div",38)(74,"div",39)(75,"table",40)(76,"thead",41)(77,"tr",42)(78,"th",43),t._uU(79,"MEETING TITLE"),t.qZA(),t.TgZ(80,"th",44),t._uU(81,"MEETING DATE/TIME"),t.qZA()()(),t.TgZ(82,"tbody")(83,"tr")(84,"td")(85,"div",45),t._UZ(86,"span",46),t.TgZ(87,"span",47),t._uU(88,"Root Canal Treatment"),t.qZA()()(),t.TgZ(89,"td")(90,"span",48),t._uU(91,"April 20 2022, 12:30 PM"),t.qZA()()(),t.TgZ(92,"tr")(93,"td")(94,"div",45),t._UZ(95,"span",46),t.TgZ(96,"span",47),t._uU(97,"Teeth Cleanings"),t.qZA()()(),t.TgZ(98,"td")(99,"span",48),t._uU(100,"April 20 2022, 12:30 PM"),t.qZA()()(),t.TgZ(101,"tr")(102,"td")(103,"div",45),t._UZ(104,"span",46),t.TgZ(105,"span",47),t._uU(106,"Teeth Whitening"),t.qZA()()(),t.TgZ(107,"td")(108,"span",48),t._uU(109,"April 19 2022, 01:00 PM"),t.qZA()()(),t.TgZ(110,"tr")(111,"td")(112,"div",45),t._UZ(113,"span",46),t.TgZ(114,"span",47),t._uU(115,"Fillings"),t.qZA()()(),t.TgZ(116,"td")(117,"span",48),t._uU(118,"April 15 2022 , 10:30 AM"),t.qZA()()(),t.TgZ(119,"tr")(120,"td")(121,"div",45),t._UZ(122,"span",46),t.TgZ(123,"span",47),t._uU(124,"Crowns"),t.qZA()()(),t.TgZ(125,"td")(126,"span",48),t._uU(127,"April 12 2022, 11:30 AM"),t.qZA()()()()()()()()(),t.TgZ(128,"div",49)(129,"div",50)(130,"div",32)(131,"div",12)(132,"div",33)(133,"h5",34),t._uU(134,"Milestones Alert"),t.qZA()(),t.TgZ(135,"div",35)(136,"div",36)(137,"a",51),t._uU(138,"View All"),t.qZA()()()()(),t.TgZ(139,"div",38)(140,"div",39),t.YNc(141,l,9,1,"table",52),t.qZA()()()()()),2&e&&(t.xp6(29),t.Oqu(g.caseCount),t.xp6(11),t.Oqu(g.workworderCount),t.xp6(11),t.Oqu(g.caseinvitationCount),t.xp6(11),t.Oqu(g.inboxCount),t.xp6(79),t.Q6J("ngIf",g.messageAry))},directives:[v.yS,b.O5,b.sg],pipes:[b.uU],styles:[".dashboard-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .dashboard-card2[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .dashboard-card3[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%], .dashboard-card4[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;padding:20px}.dashboard-card[_ngcontent-%COMP%]{border:1px solid #00D9CC;box-shadow:0 5px 25px #00d9cc33}.dashboard-card2[_ngcontent-%COMP%]{border:1px solid #FA9FBD;box-shadow:0 5px 25px #fa9fbd33}.dashboard-card3[_ngcontent-%COMP%]{border:1px solid #0070D2;box-shadow:0 5px 25px #0070d233}.dashboard-card4[_ngcontent-%COMP%]{border:1px solid #07D5E8;box-shadow:0 5px 25px #07d5e833}.dashboard-card[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%], .dashboard-card2[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%], .dashboard-card3[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%], .dashboard-card4[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{width:50px;height:50px;font-size:20px;text-align:center;color:#fff;font-weight:600;border-radius:50%;background:#00D9CC;float:right;display:flex;align-items:center;justify-content:center}.dashboard-card[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dashboard-card2[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dashboard-card3[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .dashboard-card4[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#fff}.dashboard-card2[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{background:#FA9FBD}.dashboard-card3[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{background:#0070D2}.dashboard-card4[_ngcontent-%COMP%]   .counter[_ngcontent-%COMP%]{background:#07D5E8}.dashboard-card[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .dashboard-card2[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .dashboard-card3[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .dashboard-card4[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#354053;font-size:20px;font-weight:600}.dashboard-card[_ngcontent-%COMP%]   .dicon[_ngcontent-%COMP%], .dashboard-card2[_ngcontent-%COMP%]   .dicon[_ngcontent-%COMP%], .dashboard-card3[_ngcontent-%COMP%]   .dicon[_ngcontent-%COMP%], .dashboard-card4[_ngcontent-%COMP%]   .dicon[_ngcontent-%COMP%]{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:50px;color:#00d9cc;margin-bottom:10px}.dashboard-card2[_ngcontent-%COMP%]   .dicon[_ngcontent-%COMP%]{color:#fa9fbd}.dashboard-card3[_ngcontent-%COMP%]   .dicon[_ngcontent-%COMP%]{color:#0070d2}.dashboard-card4[_ngcontent-%COMP%]   .dicon[_ngcontent-%COMP%]{color:#07d5e8}"]}),a})()}];let O=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[b.ez,v.Bz.forChild(C)]]}),a})()}}]);