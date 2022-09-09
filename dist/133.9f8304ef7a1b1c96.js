"use strict";(self.webpackChunkDentalLive_dev=self.webpackChunkDentalLive_dev||[]).push([[133],{8133:(T,b,a)=>{a.r(b),a.d(b,{MeetModule:()=>K});var m=a(9808),u=a(520),x=a(1373),c=a.n(x),v=a(4637),t=a(5e3),l=a(1879),h=a(9114),p=a(2290),f=a(3762),Z=a(2313),g=a(2382);const y=["mainForm"];function L(r,s){1&r&&(t.TgZ(0,"div",54)(1,"div",26),t._UZ(2,"lottie-player",55),t.TgZ(3,"h6",56),t._uU(4,"Processing request....please wait, don't close this page"),t.qZA()()())}function P(r,s){if(1&r&&(t.TgZ(0,"p",84),t._uU(1),t.qZA()),2&r){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.description)}}function A(r,s){if(1&r){const e=t.EpF();t.TgZ(0,"tr",79)(1,"td",80)(2,"b",81),t._uU(3),t.qZA(),t.YNc(4,P,2,1,"p",82),t.qZA(),t.TgZ(5,"td",83)(6,"span",84),t._uU(7),t.ALo(8,"date"),t.TgZ(9,"small",85),t._uU(10),t.ALo(11,"date"),t.ALo(12,"date"),t.qZA()()(),t.TgZ(13,"td",86)(14,"span",87),t._uU(15),t.qZA()(),t.TgZ(16,"td",88)(17,"div",89)(18,"span",90),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw(2).openMeeting(o.meetingid)}),t._UZ(19,"i",91),t.TgZ(20,"small",92),t._uU(21,"Link"),t.qZA()(),t.TgZ(22,"span",93),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw(2).deleteMeeting(o.meetingid)}),t._UZ(23,"i",94),t.TgZ(24,"small",85),t._uU(25,"Delete"),t.qZA()()()()()}if(2&r){const e=s.$implicit,i=t.oxw(2);t.xp6(3),t.Oqu(e.subject),t.xp6(1),t.Q6J("ngIf",e.description),t.xp6(3),t.hij("",t.xi3(8,7,e.datetime+"Z","MMM d, y")," "),t.xp6(3),t.lnq("",t.xi3(11,10,e.datetime+"Z","h:mm a")," - ",t.xi3(12,13,i.getMeetingEndTime(e.datetime,e.duration)+"Z","h:mm a")," (",e.duration," Min)"),t.xp6(5),t.Oqu(e.participants)}}function w(r,s){if(1&r){const e=t.EpF();t.TgZ(0,"li",95),t.NdJ("click",function(){const o=t.CHM(e).index;return t.oxw(2).changePage(o)}),t.TgZ(1,"span",96),t._uU(2),t.qZA()()}if(2&r){const e=s.index;t.xp6(2),t.Oqu(e+1)}}function D(r,s){if(1&r){const e=t.EpF();t.TgZ(0,"div",26)(1,"div",57)(2,"div",58)(3,"div",26)(4,"div",59),t._UZ(5,"i",60),t.TgZ(6,"input",61),t.NdJ("keyup",function(n){return t.CHM(e),t.oxw().filterData(n.target.value)}),t.qZA()()()(),t.TgZ(7,"div",62)(8,"table",63)(9,"thead",64)(10,"tr",65)(11,"th",66),t.NdJ("click",function(){return t.CHM(e),t.oxw().sortData("subject")}),t._uU(12," TITLE"),t.qZA(),t.TgZ(13,"th",67),t.NdJ("click",function(){return t.CHM(e),t.oxw().sortData("datetime")}),t._uU(14,"DATE AND TIME"),t.qZA(),t.TgZ(15,"th",68),t.NdJ("click",function(){return t.CHM(e),t.oxw().sortData("participants")}),t._uU(16,"PARTICIPANTS"),t.qZA(),t.TgZ(17,"th",69),t._uU(18,"ACTIONS"),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,A,26,16,"tr",70),t.ALo(21,"slice"),t.qZA()()(),t.TgZ(22,"div",71)(23,"div",72)(24,"label",73),t._uU(25,"Items per page "),t.TgZ(26,"select",74),t.NdJ("ngModelChange",function(n){return t.CHM(e),t.oxw().itemsPerPage=n}),t.TgZ(27,"option"),t._uU(28,"10"),t.qZA(),t.TgZ(29,"option"),t._uU(30,"20"),t.qZA(),t.TgZ(31,"option"),t._uU(32,"30"),t.qZA(),t.TgZ(33,"option"),t._uU(34,"40"),t.qZA()()()(),t.TgZ(35,"div",75)(36,"nav",76)(37,"ul",77),t.YNc(38,w,3,1,"li",78),t.qZA()()()()()()}if(2&r){const e=t.oxw();t.xp6(20),t.Q6J("ngForOf",t.Dn7(21,3,e.objectList,e.pageNumber,e.getCount())),t.xp6(6),t.Q6J("ngModel",e.itemsPerPage),t.xp6(12),t.Q6J("ngForOf",e.counter(e.objectList.length))}}function k(r,s){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr",79)(2,"td",100),t._uU(3),t.qZA(),t.TgZ(4,"td",100)(5,"span",84),t._uU(6),t.ALo(7,"date"),t.qZA()(),t.TgZ(8,"td",88)(9,"a",101),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw(2).mailText=o.plainText}),t.TgZ(10,"div",89)(11,"span",102),t._UZ(12,"i",103),t.qZA()()()()(),t.BQk()}if(2&r){const e=s.$implicit,i=t.oxw(2);t.xp6(3),t.hij(" ",i.getTitle(e.plainText)," "),t.xp6(3),t.hij("",t.xi3(7,2,e.mailDateTime,"MMM d, y h:mm a")," ")}}function U(r,s){if(1&r){const e=t.EpF();t.TgZ(0,"li",95),t.NdJ("click",function(){const o=t.CHM(e).index;return t.oxw(2).changePageRecord(o)}),t.TgZ(1,"span",96),t._uU(2),t.qZA()()}if(2&r){const e=s.index;t.xp6(2),t.Oqu(e+1)}}function O(r,s){if(1&r){const e=t.EpF();t.TgZ(0,"div",26)(1,"div",57)(2,"div",58)(3,"div",26)(4,"div",59),t._UZ(5,"i",60),t.TgZ(6,"input",61),t.NdJ("keyup",function(n){return t.CHM(e),t.oxw().filterDataRecord(n.target.value)}),t.qZA()()()(),t.TgZ(7,"div",97)(8,"table",63)(9,"thead",64)(10,"tr",65)(11,"th",98),t.NdJ("click",function(){return t.CHM(e),t.oxw().sortDataRecord("subject")}),t._uU(12," TITLE"),t.qZA(),t.TgZ(13,"th",98),t.NdJ("click",function(){return t.CHM(e),t.oxw().sortDataRecord("datetime")}),t._uU(14,"DATE AND TIME"),t.qZA(),t.TgZ(15,"th",69),t._uU(16,"ACTIONS"),t.qZA()()(),t.TgZ(17,"tbody"),t.YNc(18,k,13,5,"ng-container",99),t.qZA()()(),t.TgZ(19,"div",71)(20,"div",72)(21,"label",73),t._uU(22,"Items per page "),t.TgZ(23,"select",74),t.NdJ("ngModelChange",function(n){return t.CHM(e),t.oxw().recorditemsPerPage=n}),t.TgZ(24,"option"),t._uU(25,"10"),t.qZA(),t.TgZ(26,"option"),t._uU(27,"20"),t.qZA(),t.TgZ(28,"option"),t._uU(29,"30"),t.qZA(),t.TgZ(30,"option"),t._uU(31,"40"),t.qZA()()()(),t.TgZ(32,"div",75)(33,"nav",76)(34,"ul",77),t.YNc(35,U,3,1,"li",78),t.qZA()()()()()()}if(2&r){const e=t.oxw();t.xp6(18),t.Q6J("ngForOf",e.recordObjectList),t.xp6(5),t.Q6J("ngModel",e.recorditemsPerPage),t.xp6(12),t.Q6J("ngForOf",e.counterRecord(e.recordObjectList.length))}}function N(r,s){1&r&&(t.TgZ(0,"span"),t._uU(1,"(Co-Host)"),t.qZA())}function S(r,s){if(1&r){const e=t.EpF();t.TgZ(0,"h6",104)(1,"span"),t._uU(2),t.YNc(3,N,2,0,"span",105),t.qZA(),t.TgZ(4,"i",106),t.NdJ("click",function(){const o=t.CHM(e).$implicit;return t.oxw().removeParticipant(o.email)}),t.qZA()()}if(2&r){const e=s.$implicit;t.xp6(2),t.hij(" ",e.email," "),t.xp6(1),t.Q6J("ngIf","CoHost"==e.role)}}let F=(()=>{class r{constructor(e,i,n,o,d,_){this.router=e,this.http=i,this.dataService=n,this.utility=o,this.usr=d,this.sanitizer=_,this.user={},this.cxDomain="https://dentallive.my3cx.ca:5001/webmeeting/api/v1",this.cxAPI="65n2D8eEVwCfcUUb3J5McsLAveZzgkqZRc1YyQo17lPnnMJL2j4TDhJM4RjwfH36",this.headers=null,this.participants=[],this.isLoadingData=!1,this.recordObjectList=[],this.recordPristineData=[],this.itemsPerPage=10,this.pageNumber=0,this.recorditemsPerPage=10,this.recordpageNumber=0,this.isMeeting=!0,this.mailText="",this.datenow=(new Date).getUTCFullYear()+"-"+("0"+((new Date).getUTCMonth()+1)).slice(-2)+"-"+("0"+((new Date).getUTCDate()+1)).slice(-2)+"T"+("0"+(new Date).getUTCHours()).slice(-2)+":"+("0"+(new Date).getUTCMinutes()).slice(-2),this.object=this.utility.apiData.contacts,this.sortBoolean={}}ngOnInit(){console.log(this.datenow),this.isLoadingData=!0,this.objectList=[],this.user=this.usr.getUserDetails(),(!this.user.cxId||!this.user.cxMail)&&(c()("No Id assigned"),this.router.navigate(["/auth/login"])),this.headers=new u.WM({"3CX-ApiKey":this.cxAPI,"Content-Type":"application/json"}),this.loadData(),this.loadRecording()}loadData(){this.isLoadingData=!0,this.objectList=[],this.pristineData=[],this.http.get(`${this.cxDomain}/meetings/list?extension=${this.user.cxId}`,{headers:this.headers}).subscribe(e=>{e.result.scheduledMeetings&&(this.objectList=e.result.scheduledMeetings,this.pristineData=e.result.scheduledMeetings),this.isLoadingData=!1},e=>{this.isLoadingData=!1})}loadRecording(){this.isLoadingData=!0;let e={user:this.user.emailAddress,mailType:"INC",cxMail:this.user.cxMail.split("@")[0]};this.dataService.postData(this.utility.apiData.mails.ApiUrl,JSON.stringify(e),!0).subscribe(i=>{i&&(i=JSON.parse(i.toString())),this.recordObjectList=i,this.recordObjectList=this.recordObjectList.filter(n=>!n.htmlText),this.recordPristineData=this.recordObjectList,this.isLoadingData=!1},i=>(this.isLoadingData=!1,null))}getTitle(e){let i="completed meeting,";return e.toString().substring(parseInt(e.toString().search(i))+i.length,e.toString().search(":"))}getTextData(e){return this.urlify(e.replace(RegExp("\n","g"),"<br>"))}filterData(e){this.objectList=e?this.pristineData.filter(i=>{if(i.subject||i.description||i.datetime)return i.subject.toLowerCase().includes(e)||i.description.toLowerCase().includes(e)||i.datetime.toLowerCase().includes(e)}):this.pristineData}sortData(e){this.sortBoolean[e]=!this.sortBoolean[e],(0,v.Z)(this.objectList,{by:e,order:this.sortBoolean[e]?"desc":"asc"})}counter(e){return new Array(Math.round(e/this.itemsPerPage))}getCount(){return parseInt(this.itemsPerPage.toString())+parseInt(this.pageNumber.toString())}changePage(e){this.pageNumber=e*this.itemsPerPage}filterDataRecord(e){this.recordObjectList=e?this.recordPristineData.filter(i=>{if(i.subject||i.datetime)return i.subject.toLowerCase().includes(e)||i.datetime.toLowerCase().includes(e)}):this.recordPristineData}sortDataRecord(e){this.recordObjectList=this.recordObjectList.sort((i,n)=>{})}counterRecord(e){return new Array(Math.round(e/this.recorditemsPerPage))}getCountRecord(){return parseInt(this.recorditemsPerPage.toString())+parseInt(this.recordpageNumber.toString())}changePageRecord(e){this.recordpageNumber=e*this.recorditemsPerPage}resetForm(){this.mainForm.reset(),this.participants=[],this.loadData()}addParticipant(e,i,n){e.value&&e.value.match("[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+.[a-zA-Z0-9.-]{2,10}")?this.participants.some(d=>d.email===e.value)?c()("Email Exists"):(this.participants.push({name:i.value,email:e.value,role:n.checked?"CoHost":"Participant"}),e.value="",i.value=""):c()("Invalid Email")}removeParticipant(e){this.participants=this.participants.filter(i=>i.email!=e)}inviteParticipants(e,i,n){this.http.post(`${this.cxDomain}/participants/${e}`,JSON.stringify(this.participants),{headers:this.headers}).subscribe(o=>o&&"success"==o.status?(c()("Meeting Created Succesfully"),this.resetForm(),n.close(),!0):(c()("Unable to Start Meeting,Please try again later"),!1),o=>(c()("Unable to Start Meeting,Please try again later"),!1))}patchMeeting(e,i,n,o,d,_){this.http.patch(`${this.cxDomain}/scheduled/${e}`,JSON.stringify({hostJoinFirst:!1,selfModeration:!0,datetime:d,duration:o,description:n}),{headers:this.headers}).subscribe(C=>C&&"success"==C.status?(this.participants.length>0?this.inviteParticipants(e,i,_):(c()("Meeting Created Succesfully"),this.resetForm(),_.close()),!0):(c()("Unable to Start Meeting,Please try again later"),!1),C=>(c()("Unable to Start Meeting,Please try again later"),!1))}scheduleMeeting(e){if(this.mainForm.invalid)return this.mainForm.form.markAllAsTouched(),c()("Please enter values in the highlighted fields"),!1;let i=this.mainForm.form.value;return i.dateTime=new Date(i.dateTime).toISOString(),this.user.cxId&&this.user.cxMail?(c()("Creating Meeting...please wait...",{buttons:[!1,!1],closeOnClickOutside:!1}),this.http.post(`${this.cxDomain}/adhoc?extension=${this.user.cxId}&subject=${i.subject}`,null,{headers:this.headers}).subscribe(n=>n&&n.result.meetingid?(this.patchMeeting(n.result.meetingid,n.result.url,i.description,i.duration,i.dateTime,e),!0):(c()("Unable to Start Meeting,Please try again later"),!1),n=>(c()("Unable to Start Meeting,Please try again later"),!1)),!0):(c()("No Id assigned"),!1)}getMeetingEndTime(e,i){return new Date(parseFloat(new Date(e).getTime().toString())+6e4*parseFloat(i.toString()))}getMeetingStatus(e,i){return new Date(e).getTime()<Date.now()?parseFloat(new Date(e).getTime().toString())+6e4*parseFloat(i.toString())<Date.now()?2:1:0}openMeeting(e){this.http.get(`${this.cxDomain}/scheduled/${e}`,{headers:this.headers}).subscribe(i=>i&&i.result.openlink?(window.open(i.result.openlink,"_blank"),!0):(c()("Unable to Start Meeting,Please try again later"),!1),i=>(c()("Unable to Start Meeting,Please try again later"),!1))}deleteMeeting(e){c()({title:"Are you sure?",text:"Do you want to Delete this Meeting!",icon:"warning",buttons:["NO","YES"],dangerMode:!0}).then(i=>{i&&this.http.delete(`${this.cxDomain}/scheduled/${e}`,{headers:this.headers}).subscribe(n=>n&&"success"==n.status?(c()("Meeting Deleted Succesfully"),this.loadData(),!0):(c()("Unable to Delete Meeting,Please try again later"),!1),n=>(c()("Unable to Delete Meeting,Please try again later"),!1))})}urlify(e){return e.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,function(n){return'<br><a target="_blank" href="'+n+'">'+n+"</a><br>"})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(l.F0),t.Y36(u.eN),t.Y36(h.T),t.Y36(p.t),t.Y36(f.f),t.Y36(Z.H7))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-list"]],viewQuery:function(e,i){if(1&e&&t.Gf(y,5),2&e){let n;t.iGM(n=t.CRH())&&(i.mainForm=n.first)}},decls:86,vars:9,consts:[[1,"page-header","d-flex","justify-content-between"],[1,"breadcrumb"],[1,"breadcrumb-item"],[1,"fw-bold",2,"color","#011a3e"],["type","button","data-bs-toggle","modal","data-bs-target","#VdoModal",1,"float-end","btn","btn-primary","mt-1","btn-1","me-2","border-0",2,"background-color","#0070d2","height","40px","padding","10px 31px","box-shadow","0px 4px 20px #c3d2ff",3,"click"],["aria-hidden","true",1,"fa","fa-video-camera"],["class","row mt-5",4,"ngIf"],[1,"row","align-items-center","pt-2",3,"hidden"],["role","group","aria-label","Basic radio toggle button group",1,"btn-group","mb-2"],["btntype",""],["type","radio","value","1","name","btnradio","id","btnmeeting","checked","",1,"btn-check",3,"change"],["for","btnmeeting",1,"btn","btn-outline-primary"],["type","radio","value","2","name","btnradio","id","btnrecord",1,"btn-check",3,"change"],["for","btnrecord",1,"btn","btn-outline-primary"],["class","col-md-12",4,"ngIf"],["id","VdoModal","tabindex","-1",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[3,"ngSubmit"],["mainForm","ngForm"],[1,"modal-content"],[1,"modal-header"],["id","VdoModalLabel",1,"modal-title","body1"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],["closeBtn",""],[1,"modal-body"],[1,"row"],[1,"col-md-12"],[1,"mb-4"],[1,"form-label","body2",2,"color","#011A3E"],["type","text","required","","ngModel","","name","subject",1,"form-control"],["type","text","ngModel","","name","description",1,"form-control"],["type","datetime-local","required","","ngModel","","name","dateTime","onkeypress","()=>{return false}",1,"form-control",3,"min"],[1,"input-group"],["pattern","^[1-9]+[0-9]*$","type","number","required","","ngModel","","name","duration",1,"form-control",3,"min","value"],["id","basic-addon2",1,"input-group-text"],[1,"input-group","mb-3"],["type","text","placeholder","Name",1,"form-control"],["name",""],["type","email","pattern","^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$","placeholder","Email address",1,"form-control"],["mail",""],[1,"input-group-append"],["type","button",1,"btn","btn-outline-secondary",3,"click"],[1,"text-danger","fa","fa-plus-square"],[1,"col-12","form-check","form-switch"],["type","checkbox","id","participantType",1,"form-check-input",2,"width","25px"],["type",""],["for","flexSwitchCheckChecked",1,"form-check-label"],[1,"col-12","border-top","p-2","my-2"],["class","form-label body2 p-1",4,"ngFor","ngForOf"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",2,"box-shadow","0px 4px 20px #C3D2FF","background-color","#0070D2","height","40px","padding","10px 31px"],["id","VdoModal1","tabindex","-1",1,"modal","fade"],[1,"modal-body","text-break",3,"innerHTML"],["type","submit","data-bs-dismiss","modal",1,"btn","btn-primary",2,"box-shadow","0px 4px 20px #C3D2FF","background-color","#0070D2","height","40px","padding","10px 31px"],[1,"row","mt-5"],["src","https://assets6.lottiefiles.com/packages/lf20_fhsx0ijl/lottie/collections-feature.json","background","transparent","speed","1","loop","","autoplay","",1,"mt-3","m-auto",2,"width","300px","height","300px"],[1,"text-center","mt-5"],[1,"card","border-0","pb-5",2,"box-shadow","0px 5px 5px rgba(0, 0, 0, 0.1)"],[1,"card-header","border-bottom-0",2,"background-color","#ffff"],[1,"search","my-2"],[1,"fa","fa-search",2,"color","rgba(208, 214, 222, 0.5)","font-size","16px"],["type","text","placeholder","Search by Title",1,"form-control",2,"font-weight","400","height","40px",3,"keyup"],[1,"table-responsive"],[1,"table","table-hover","table-nowrap","align-items-center",2,"min-width","768px"],[1,"thead-light"],[2,"text-transform","uppercase"],[1,"body2","header",2,"width","30%",3,"click"],[1,"body2","header",2,"width","20%",3,"click"],[1,"body2","text-center",2,"width","10%",3,"click"],[1,"body2","text-center",2,"width","20%"],["style","vertical-align: middle",4,"ngFor","ngForOf"],[1,"py-3","row","justify-content-end","align-items-start",2,"background-color","#F7F9FB"],[1,"text-end","w-auto"],[2,"color","#5D6A7E"],[1,"form-select","form-select-sm",2,"font-size","15px","width","70px","display","inline-block","height","31px",3,"ngModel","ngModelChange"],[1,"w-auto"],["aria-label","Page navigation example"],[1,"pagination","justify-content-end","me-3"],["class","page-item",3,"click",4,"ngFor","ngForOf"],[2,"vertical-align","middle"],[2,"width","30%"],[1,"body2",2,"color","#8a0c0c"],["class","body2","style","color: #354053",4,"ngIf"],[2,"width","20%"],[1,"body2",2,"color","#354053"],[1,"d-block"],[1,"text-center",2,"width","10%"],[1,"body2","text-center",2,"color","#354053"],[1,"text-center",2,"width","20%"],[1,"d-flex","justify-content-center"],[2,"cursor","pointer","font-weight","500",3,"click"],["aria-hidden","true",1,"fa","fa-external-link","text-primary"],[1,"d-block","mt-1"],[1,"ms-3",2,"cursor","pointer","font-weight","500","font-size","17px",3,"click"],["aria-hidden","true",1,"fa","fa-trash","text-danger"],[1,"page-item",3,"click"],[1,"page-link"],[1,"table-responsive","table-striped"],[1,"body2","header",2,"width","40%",3,"click"],[4,"ngFor","ngForOf"],[2,"width","40%"],["data-bs-toggle","modal","data-bs-target","#VdoModal1","role","button",3,"click"],[2,"cursor","pointer","font-weight","500"],["aria-hidden","true",1,"fa","fa-eye","fw-bold",2,"color","#00bcd4"],[1,"form-label","body2","p-1"],[4,"ngIf"],[1,"fa","fa-times-circle","ms-2",2,"cursor","pointer","color","#b60404",3,"click"]],template:function(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",0)(1,"ol",1)(2,"li",2)(3,"h5",3),t._uU(4,"Meetings List"),t.qZA()()(),t.TgZ(5,"div")(6,"button",4),t.NdJ("click",function(){return i.resetForm()}),t._UZ(7,"i",5),t._uU(8," Schedule Meeting "),t.qZA()()(),t.YNc(9,L,5,0,"div",6),t.TgZ(10,"div",7)(11,"div",8,9)(13,"input",10),t.NdJ("change",function(){return i.isMeeting=!0}),t.qZA(),t.TgZ(14,"label",11),t._uU(15,"Schedules"),t.qZA(),t.TgZ(16,"input",12),t.NdJ("change",function(){return i.isMeeting=!1}),t.qZA(),t.TgZ(17,"label",13),t._uU(18,"Summaries"),t.qZA()(),t.YNc(19,D,39,7,"div",14),t.YNc(20,O,36,3,"div",14),t.qZA(),t.TgZ(21,"div",15)(22,"div",16)(23,"form",17,18),t.NdJ("ngSubmit",function(){t.CHM(n);const d=t.MAs(30);return i.scheduleMeeting(d)}),t.TgZ(25,"div",19)(26,"div",20)(27,"h5",21),t._uU(28,"Schedule Meeting"),t.qZA(),t._UZ(29,"button",22,23),t.qZA(),t.TgZ(31,"div",24)(32,"div",25)(33,"div",26)(34,"div",27)(35,"label",28),t._uU(36,"Subject"),t.qZA(),t._UZ(37,"input",29),t.qZA()(),t.TgZ(38,"div",26)(39,"div",27)(40,"label",28),t._uU(41,"Description"),t.qZA(),t._UZ(42,"input",30),t.qZA()(),t.TgZ(43,"div",26)(44,"div",27)(45,"label",28),t._uU(46,"Date-Time"),t.qZA(),t._UZ(47,"input",31),t.qZA()(),t.TgZ(48,"div",26)(49,"div",27)(50,"label",28),t._uU(51,"Duration"),t.qZA(),t.TgZ(52,"div",32),t._UZ(53,"input",33),t.TgZ(54,"span",34),t._uU(55,"Min"),t.qZA()()()()(),t.TgZ(56,"div",26)(57,"div",35),t._UZ(58,"input",36,37)(60,"input",38,39),t.TgZ(62,"div",40)(63,"button",41),t.NdJ("click",function(){t.CHM(n);const d=t.MAs(61),_=t.MAs(59),M=t.MAs(67);return i.addParticipant(d,_,M)}),t._UZ(64,"i",42),t.qZA()()(),t.TgZ(65,"div",43),t._UZ(66,"input",44,45),t.TgZ(68,"label",46),t._uU(69,"Co-Host"),t.qZA()()(),t.TgZ(70,"div",47),t.YNc(71,S,5,2,"h6",48),t.qZA()(),t.TgZ(72,"div",49)(73,"button",50),t._uU(74,"Schedule"),t.qZA()()()()()(),t.TgZ(75,"div",51)(76,"div",16)(77,"div",19)(78,"div",20)(79,"h5",21),t._uU(80,"Meeting Summary"),t.qZA(),t._UZ(81,"button",22),t.qZA(),t._UZ(82,"p",52),t.TgZ(83,"div",49)(84,"button",53),t._uU(85,"Close"),t.qZA()()()()()}2&e&&(t.xp6(9),t.Q6J("ngIf",i.isLoadingData),t.xp6(1),t.Q6J("hidden",i.isLoadingData),t.xp6(9),t.Q6J("ngIf",i.isMeeting),t.xp6(1),t.Q6J("ngIf",!i.isMeeting),t.xp6(27),t.s9C("min",i.datenow),t.xp6(6),t.Q6J("min",0)("value",60),t.xp6(18),t.Q6J("ngForOf",i.participants),t.xp6(11),t.Q6J("innerHTML",i.getTextData(i.mailText),t.oJD))},directives:[m.O5,m.sg,g.EJ,g.JJ,g.On,g.YN,g.Kr,g._Y,g.JL,g.F,g.Fj,g.Q7,g.wV,g.qQ,g.c5],pipes:[m.OU,m.uU],styles:["tbody[_ngcontent-%COMP%], th[_ngcontent-%COMP%], thead[_ngcontent-%COMP%]{border-style:none}.table[_ngcontent-%COMP%]   .thead-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .text-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .thead-light[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{color:#5d6a7e80;background-color:#f7f9fb;border-color:#f7f9fb}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child{padding-left:1.5rem}a[_ngcontent-%COMP%]{text-decoration:none}.form-check-input[_ngcontent-%COMP%]{width:15px;height:15px}.cover-image[_ngcontent-%COMP%]{background-size:cover!important}.avatar-list[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]:not(:last-child){margin-right:.5rem}.avatar[_ngcontent-%COMP%]{width:2rem;height:2rem;line-height:2rem;display:inline-block;position:relative;text-align:center;color:#fff;font-weight:500;vertical-align:bottom;font-size:.875rem;-webkit-user-select:none;user-select:none}.nav.panel-tabs[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#f5f6fb;color:#0070d2;border:1px solid #0070D2;border-radius:50px}.tabs-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px 20px!important}.nav.panel-tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#f5f6fb;border-radius:50px;color:#5d6a7e}.tabs-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:10px 12px 11px 13px;display:block}.search[_ngcontent-%COMP%]{position:relative}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{text-indent:25px}.bx-search[_ngcontent-%COMP%]{color:#d0d6de80;font-size:16px;position:absolute;top:10px;left:10px}.progress[_ngcontent-%COMP%]   .bg-info[_ngcontent-%COMP%]{background-color:#1991eb!important}.progress-sm[_ngcontent-%COMP%]{height:.5rem}"]}),r})(),J=(()=>{class r{constructor(){}ngOnInit(){}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-meeting"]],decls:1,vars:0,consts:[["is","x-frame-bypass","src","https://portalnetworks-demo.my3cx.ca/meet/webmeeting917723","title","Dental Live Talk",2,"width","100%","border","none","height","100%","display","block"]],template:function(e,i){1&e&&t._UZ(0,"iframe",0)},styles:[""]}),r})();var q=a(1379),j=a(1613),E=a(4151),I=a(3390),H=a(6866),$=a(7149),Q=a(9004),Y=a(4158),B=a(8752),R=a(9506);const z=[{path:"",component:F},{path:"meeting",component:J}];let K=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[[m.ez,g.u5,q.RB,E.lN,I.c,j.HT,H.p0,$.TU,Q.JX,Y.Nh,R.x,B.Bb,l.Bz.forChild(z)]]}),r})()},9506:(T,b,a)=>{a.d(b,{x:()=>t,w:()=>v});var m=a(9808),u=a(5e3);const x=function(l,h,p){return{width:l,height:h,borderRadius:p}},c=function(l){return{rtl:l}};let v=(()=>{class l{constructor(){this.class="shimmer-loading",this.width="80%",this.height="12px",this.shape="rect",this.borderRadius="5px",this.direction="ltr"}ngOnInit(){}get shimmerHeight(){switch(this.shape){case"circle":case"square":return this.width;default:return this.height}}get shimmerBorderRadius(){return"circle"===this.shape?"50%":this.borderRadius}}return l.\u0275fac=function(p){return new(p||l)},l.\u0275cmp=u.Xpm({type:l,selectors:[["ngx-shimmer-loading"]],hostVars:2,hostBindings:function(p,f){2&p&&u.Tol(f.class)},inputs:{width:"width",height:"height",shape:"shape",borderRadius:"borderRadius",direction:"direction"},decls:1,vars:8,consts:[[1,"ngx-shimmer",3,"ngStyle","ngClass"]],template:function(p,f){1&p&&u._UZ(0,"div",0),2&p&&u.Q6J("ngStyle",u.kEZ(2,x,f.width,f.shimmerHeight,f.shimmerBorderRadius))("ngClass",u.VKq(6,c,"rtl"===f.direction))},directives:[m.PC,m.mk],styles:[":host{display:block;line-height:1.75}.ngx-shimmer{display:inline-block;width:100%;height:12px;background-color:#f6f7f8;background-image:linear-gradient(to right,#f6f7f8 0,#edeef1 20%,#f6f7f8 40%,#f6f7f8 100%);background-position:0 0;background-repeat:no-repeat;background-size:1000px 1000px;-webkit-animation:1s linear infinite forwards shimmerEffect;animation:1s linear infinite forwards shimmerEffect}.ngx-shimmer.rtl{-webkit-animation:1s linear infinite forwards shimmerEffectRTL;animation:1s linear infinite forwards shimmerEffectRTL}@-webkit-keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@keyframes shimmerEffect{0%{background-position:-1000px 0}100%{background-position:1000px 0}}@-webkit-keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}@keyframes shimmerEffectRTL{0%{background-position:1000px 0}100%{background-position:-1000px 0}}"],encapsulation:2}),l})(),t=(()=>{class l{}return l.\u0275fac=function(p){return new(p||l)},l.\u0275mod=u.oAB({type:l}),l.\u0275inj=u.cJS({imports:[[m.ez]]}),l})()}}]);