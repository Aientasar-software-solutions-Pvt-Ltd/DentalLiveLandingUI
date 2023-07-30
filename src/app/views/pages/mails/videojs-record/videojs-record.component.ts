import { UtilityServiceV2 } from './../../../../utility-service-v2.service';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import videojs from 'video.js';
import * as Wavesurfer from 'videojs-wavesurfer/dist/videojs.wavesurfer.js';
import * as MicrophonePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.microphone.js';
Wavesurfer.microphone = MicrophonePlugin;
import * as Record from 'videojs-record/dist/videojs.record.js';
import { EmailService } from '../../email.service';
import swal from 'sweetalert';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { AccdetailsService } from '../../accdetails.service';
import { ApiDataService } from '../../users/api-data.service';
import { UtilityService } from '../../users/utility.service';
import { v4 as uuidv4 } from "uuid";
@Component({
  selector: 'app-videojs-record',
  templateUrl: './videojs-record.component.html',
  styleUrls: ['./videojs-record.component.css'],
  providers: [DatePipe]
})
export class VideojsRecordComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() message: any;
  @Output() closeComp = new EventEmitter<boolean>();
  
  
  currentState = this;
  private VideoConfig: any;
  VideoPlayer: any;
  private audioConfig: any;
  audioPlayer: any;
  private screenConfig: any;
  screenPlayer: any;
  private popupVideoConfig: any;
  private popupVideoPlayer: any;
  plugin: any;
  latestVideoRecord = null;
  latestAudioRecord = null;
  latestScreenRecord = null;
  recordings = [];
  private attachmentNames = [];
  StepVideo = 1;
  StepAudio = 1;
  StepScreen = 1;
  sending = false;
  invalidForm = false;
  patientList: any = [];
  caseList: any = [];
  contactList: any = [];
  contactFilterdList = [];
  addressList = [];
  //supply headers
  private profile: string;
  private inReplyTo: string;
  private references: string;
  private subUserId: number;
  private fromAddress: string;
  private form: any;
  isPatientDisable = false;
  isCaseDisabled = false;
  @ViewChild('case') case!: ElementRef;
  @ViewChild('patient') patient!: ElementRef;
  mail: any;
  validNaming = /^([a-zA-Z0-9 _]+)$/;
  private validMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private router: Router, private route: ActivatedRoute, private Service: EmailService, public sanitizer: DomSanitizer, private datePipe: DatePipe, private dataService: ApiDataService, private usr: AccdetailsService, private utility: UtilityService, private cdref: ChangeDetectorRef, private newUtility: UtilityServiceV2) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      if (params.get('patientId') && params.get('patientId') != "") {
        this.isPatientDisable = true;
        if (params.get('caseId') && params.get('caseId') != "") {
          this.isCaseDisabled = true;
        }
      }
    });
    this.mail = {
      toAddresses: "",
      ccAddresses: "",
      subject: "",
      trail: ""
    };
    this.initPlayers();
    this.profile = this.usr.getUserDetails().imageSrc ? this.utility.apiData.mails.bucketUrl + this.usr.getUserDetails().imageSrc : this.utility.apiData.mails.bucketUrl + "account.png";
    this.subUserId = 0;
    this.fromAddress = this.usr.getUserDetails()['emailAddress'];
    this.fetchCasePatientContactData();
    if (this.message) {
      this.inReplyTo = this.message.messageId;
      this.references = this.message.references + this.message.messageId;
      this.references = this.references.replace(/,/g, "");
      let MailToList = this.message.MailTo.split(',');
      if (this.message.mailType == 'OUT') {
        for (let mail of MailToList) {
          this.addressList.push(mail)
        }
      } else this.addressList.push(this.message.MailFrom);
      this.mail.ccAddresses = this.message.MailCc;
      this.mail.trail = this.message.htmlText;
      this.mail.subject = this.message.subject;
    } else {
      if (this.usr.getUserDetails().forwards && this.usr.getUserDetails().forwards.length > 0)
        this.addressList = [...this.usr.getUserDetails().forwards];
    }
  }


  ngAfterViewInit() {
    this.VideoPlayer = videojs(document.getElementById('videoPlayer'), this.VideoConfig);
    this.VideoPlayer.on('finishRecord', () => {
      this.latestVideoRecord = this.VideoPlayer.recordedData;
      this.VideoPlayer.record().stopDevice();
      this.cdref.detectChanges();
    });
    this.VideoPlayer.on('deviceError', (e) => console.log(e));
    this.VideoPlayer.on('error', (e) => console.log(e));
    this.VideoPlayer.on('deviceReady', () => this.StepVideo = 2);
    this.VideoPlayer.on('startRecord', () => this.StepVideo = 3);
    this.VideoPlayer.on('stopRecord', () => {
      if (this.StepVideo != 5)
        this.StepVideo = 5;
    });
    this.audioPlayer = videojs(document.getElementById('audioPlayer'), this.audioConfig);
    this.audioPlayer.on('finishRecord', () => {
      this.latestAudioRecord = this.audioPlayer.recordedData;
      this.audioPlayer.record().stopDevice();
      this.cdref.detectChanges();
    });
    this.audioPlayer.on('deviceReady', () => this.StepAudio = 2);
    this.audioPlayer.on('error', (e) => console.log(e));
    this.audioPlayer.on('startRecord', () => this.StepAudio = 3);
    this.audioPlayer.on('stopRecord', () => {
      if (this.StepAudio != 5)
        this.StepAudio = 5
    });
    this.screenPlayer = videojs(document.getElementById('screenPlayer'), this.screenConfig);
    this.screenPlayer.on('finishRecord', () => {
      this.latestScreenRecord = this.screenPlayer.recordedData;
      this.screenPlayer.record().stopDevice();
      this.cdref.detectChanges();
    });
    this.screenPlayer.on('deviceReady', () => this.StepScreen = 2);
    this.screenPlayer.on('error', (e) => console.log(e));
    this.screenPlayer.on('startRecord', () => this.StepScreen = 3);
    this.screenPlayer.on('stopRecord', () => {
      if (this.StepScreen != 5)
        this.StepScreen = 5
    });
    this.popupVideoPlayer = videojs(document.getElementById('popupVideoPlayer'), this.popupVideoConfig);
    this.popupVideoPlayer.on('deviceReady', () => {
      this.popupVideoPlayer.requestPictureInPicture();
    });
    this.popupVideoPlayer.on('leavePIP', () => {
      this.popupVideoPlayer.record().stopDevice();
      this.pipEnabled = false;
    });
  }
  // use ngOnDestroy to detach event handlers and remove the VideoPlayer
  ngOnDestroy() {
    if (this.VideoPlayer) {
      this.VideoPlayer.dispose();
      this.VideoPlayer = false;
    }
    if (this.audioPlayer) {
      this.audioPlayer.dispose();
      this.audioPlayer = false;
    }
    if (this.screenPlayer) {
      this.screenPlayer.dispose();
      this.screenPlayer = false;
    }
    if (this.popupVideoPlayer) {
      this.popupVideoPlayer.dispose();
      this.popupVideoPlayer = false;
    }
  }
  initPlayers() {
    this.VideoPlayer = false;
    this.audioPlayer = false;
    this.screenPlayer = false;
    this.popupVideoPlayer = false;
    this.plugin = Record;
    this.VideoConfig = {
      controls: true,
      width: 320,
      height: 240,
      plugins: {
        record: {
          audio: true,
          video: true,
          maxLength: 1800,
          debug: true
        }
      }
    };
    this.audioConfig = {
      controls: true,
      width: 320,
      height: 240,
      plugins: {
        wavesurfer: {
          backend: 'WebAudio',
          waveColor: '#D32F2F',
          progressColor: 'black',
          hideScrollbar: true,
          plugins: [
            // enable microphone plugin
            Wavesurfer.microphone.create({
              bufferSize: 4096,
              numberOfInputChannels: 1,
              numberOfOutputChannels: 1,
              constraints: {
                video: false,
                audio: true
              }
            })
          ]
        },
        record: {
          audio: true,
          video: false,
          maxLength: 1800,
        }
      }
    }
    this.screenConfig = {
      controls: true,
      bigPlayButton: false,
      width: 320,
      height: 240,
      plugins: {
        record: {
          audio: true,
          screen: true,
          maxLength: 1800,
          pip: true
        }
      }
    };
    this.popupVideoConfig = {
      controls: false,
      width: 320,
      height: 240,
      plugins: {
        record: {
          audio: false,
          video: true,
          pip: true,
        }
      }
    };
  }


  updateCaseFilter(patientId) {
    this.dataService.getallData(patientId ? `https://hx4mf30vd7.execute-api.us-west-2.amazonaws.com/development/cases?patientId=${patientId}` : `https://hx4mf30vd7.execute-api.us-west-2.amazonaws.com/development/cases`, true)
      .subscribe(Response => {
        if (Response) Response = JSON.parse(Response.toString());
        this.caseList = Response;
        this.case.nativeElement.value = "";
      }, error => {
        return null;
      })
    this.case.nativeElement.value = "";
  }

  addPatient(patientId) {
    this.addressList = []
    if (!patientId) return;
    let patient = this.patientList.find(element => element.patientId == patientId)
    if (!this.addressList.includes(patient.email)) {
      this.addressList.push(patient.email);
    }
    this.updateCaseFilter(patientId);
  }
  istouched = false;
  addtoList(value, to, auto) {
    if (!auto.showPanel && value && value != '') {
      if (this.validMail.test(String(value).toLowerCase())) {
        if (!this.addressList.includes(value)) {
          this.addressList.push(value);
        }
        to.value = '';
      } else {
        swal("Invalid E-Mail address");
      }
    }
  }


  addMailOption(value, to) {

    if (!this.addressList.includes(value)) {
      this.addressList.push(value);
    }
    to.value = '';
    to.focus();
  }
  addMail(event, value, to) {
    if ((event.key === "Enter" || event.key === ",")) {
      if (!this.validMail.test(String(value).toLowerCase())) {
        swal("Invalid E-Mail address");
      } else {
        if (!this.addressList.includes(value)) {
          this.addressList.push(value);
        }
        to.value = '';
        return false;
      }
    }
    return null;
  }
  filterContact(val) {
    if (val == "")
      return;
    let newList = this.contactList.filter(function (contact) {
      return (contact.firstName.includes(val) || contact.lastName.includes(val) || contact.email.includes(val))
    });
    this.contactFilterdList = newList;
  }
  fetchCasePatientContactData() {
    let email = this.usr.getUserDetails().emailAddress;

    this.dataService.getallData(`https://hx4mf30vd7.execute-api.us-west-2.amazonaws.com/development/patients`, true)
      .subscribe(Response => {
        if (Response) Response = JSON.parse(Response.toString());
        this.patientList = Response;
        this.route.paramMap.subscribe(params => {
          if (params.get('patientId') && params.get('patientId') != "") {
            this.isPatientDisable = true;
            if (!this.patientList.some(el => el.patientId === params.get('patientId'))) {
              swal("Invalid patient");
              this.router.navigate(['/mail/inbox']);
            }
          }
        });
      }, error => {
        swal("Invalid patient");
        this.router.navigate(['/mail/inbox']);
        return null;
      })

    this.dataService.getallData(`https://hx4mf30vd7.execute-api.us-west-2.amazonaws.com/development/cases`, true)
      .subscribe(Response => {
        if (Response) Response = JSON.parse(Response.toString());
        this.caseList = Response;
        this.route.paramMap.subscribe(params => {
          if (params.get('caseId') && params.get('caseId') != "") {
            this.isCaseDisabled = true;
            if (!this.caseList.some(el => el.caseId === params.get('caseId'))) {
              swal("Invalid case");
              this.router.navigate(['/mail/inbox']);
            }
          }
        });
      }, error => {
        swal("Invalid case");
        this.router.navigate(['/mail/inbox']);
        return null;
      })

    this.dataService.getallData(this.utility.apiData.contacts.ApiUrl + `?did=${email}`, true)
      .subscribe(Response => {
        if (Response) Response = JSON.parse(Response.toString());
        if (Response) {
          this.contactList = Response;
          this.contactFilterdList = this.contactList;
        }
      }, error => {
        return null;
      })
  }
  getRecordingUniqueName(name) {
    let i = 0;
    do {
      if (i > 0) name = name.split('.')[0] + '_' + i + '.' + name.split('.')[1];
      i++;
    } while (this.recordings.some(user => user.name == name));
    return name;
  }
  addVideo(name) {
    if (name && !this.validNaming.test(name)) {
      swal("Update File Name,only numbers,alphabets and underscore is allowed");
      return;
    }
    if (!name)
      name = this.usr.getUserDetails().accountfirstName + "_" + this.usr.getUserDetails().accountlastName + "_" + new Date().getTime();
    let orgName = name.replace(/\s+/g, '') + ".mp4";
    if (this.latestVideoRecord) {
      this.recordings.push({ 'name': this.getRecordingUniqueName(orgName), 'data': this.latestVideoRecord });
      this.latestVideoRecord = null;
      this.VideoPlayer.record().reset();
    }
    this.StepVideo = 1
  }
  addAudio(name) {
    if (name && !this.validNaming.test(name)) {
      swal("Update File Name,only numbers,alphabets and underscore is allowed");
      return false;
    }
    if (!name)
      name = this.usr.getUserDetails().accountfirstName + "_" + this.usr.getUserDetails().accountlastName + "_" + new Date().getTime();
    let orgName = name.replace(/\s+/g, '') + ".mp3";
    if (this.latestAudioRecord) {
      this.recordings.push({ 'name': this.getRecordingUniqueName(orgName), 'data': this.latestAudioRecord });

      this.latestAudioRecord = null;
      this.audioPlayer.record().reset();
    }
    this.StepAudio = 1
    return null;
  }
  addScreen(name) {
    if (name && !this.validNaming.test(name)) {
      swal("Update File Name,only numbers,alphabets and underscore is allowed");
      return;
    }
    if (!name)
      name = this.usr.getUserDetails().accountfirstName + "_" + this.usr.getUserDetails().accountlastName + "_" + new Date().getTime();
    let orgName = name.replace(/\s+/g, '') + ".mp4";
    if (this.latestScreenRecord) {
      this.recordings.push({ 'name': this.getRecordingUniqueName(orgName), 'data': this.latestScreenRecord });
      this.latestScreenRecord = null;
      this.screenPlayer.record().reset();
    }
    this.StepScreen = 1
  }
  pipEnabled = false;
  togglePictureInPicture() {
    if (!('pictureInPictureEnabled' in document)) {
      swal("Your Browser dosent support this feature,please use Goole Chrome or Safari for this Feature");
    } else {
      if (!this.pipEnabled) {
        this.popupVideoPlayer.record().getDevice();
      }
      this.pipEnabled = !this.pipEnabled;
    }
  }
  loadFiles(event) {
    if (event.target.files.length > 0) {
      let allowedtypes = ['image', 'video', 'audio', 'pdf', 'msword', 'ms-excel'];
      Array.from(event.target.files).forEach(element => {
        if (!allowedtypes.some(type => element['type'].includes(type))) {
          swal("File Extenion Not Allowed");
          return;
        } else {
          this.recordings.push({ 'name': this.getRecordingUniqueName(element["name"]), 'data': element });
        }
      });
    }
  }
  removeFiles(index, attachment) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: ['Cancel', 'Ok'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          attachment.classList.add('animate__lightSpeedOutRight');
          setTimeout(() => {
            this.recordings.splice(index, 1);
          }, 500);
        }
      });
  }

  htmlText = ""; plainText = ""; trailText = ""; trailHtml = ""

  onSubmit(form: NgForm) {
    if (form.invalid || this.addressList.length == 0) {
      form.form.markAllAsTouched();
      this.istouched = true;
      this.invalidForm = true;
      return;
    }
    this.form = form;

    this.htmlText = document.getElementById('message').innerHTML + '<br>';
    this.plainText = document.getElementById('message').textContent + '\n\n';

    if (document.getElementById('trail')) {
      this.trailHtml = document.getElementById('trail').innerHTML;
      this.trailText = document.getElementById('trail').textContent;
    }

    let pid = uuidv4();
    let backgroundObject = {
      'module': 'mail',
      'title': "Sending Email",
      'id': pid,
      'currentState': this.currentState
    }

    this.newUtility.processingBackgroundData.push(backgroundObject)
    console.log(this.newUtility.processingBackgroundData)
    console.log(this.currentState)
    this.saveFiles(this.currentState, pid)

    swal("Email Sent Successfully");
    this.router.navigate(['/mail/inbox']);
  }

  //send request for a presigned URL-->put the content with the given URL-->save the name in JSON for main storage
  async saveFiles(currenState, id) {
    try {
      console.log(currenState)
      let requests = currenState.recordings.map(elem => {
        return currenState.utility.uploadBinaryData(elem.name, elem.data, "dentalmail-attachments")
      });
      Promise.all(requests)
        .then((responses) => {
          currenState.attachmentNames = responses;
          currenState.savetoDB(currenState, id);
        })
        .catch((error) => {
          currenState.newUtility.processingBackgroundData = currenState.newUtility.processingBackgroundData.map((item) => {
            if (item.id != id) return item;
            return {
              ...item, isFailed: true, isProcessed: false, error: error
            }
          })
        });
    } catch (error) {
      currenState.newUtility.processingBackgroundData = currenState.newUtility.processingBackgroundData.map((item) => {
        if (item.id != id) return item;
        return {
          ...item, isFailed: true, isProcessed: false, error: error
        }
      })
    }
  }

  savetoDB(currenState, id) {
    //create html div and text using links
    currenState.attachmentNames.forEach(element => {
      currenState.htmlText = currenState.htmlText + '<a style="margin-top:10px;display: inline-block;width: 200px;margin-right: 20px;" href="' + currenState.utility.apiData.mails.fileURL + element.name + '" target="_blank"><img src="' + currenState.profile + '" alt="' + element.name + '" width="200"><strong style="display:block;width:100%;text-align:center;margin-top:15px;">' + element.name + '</strong></a>'
      currenState.plainText = currenState.plainText + '\n' + element.name + '\n\n' + currenState.utility.apiData.mails.fileURL + element.name + '\n';
    });
    if (currenState.trailHtml || currenState.trailText) {
      currenState.htmlText = currenState.htmlText + currenState.trailHtml;
      currenState.plainText = currenState.plainText + "\n\n" + currenState.trailText;
    }
    let json: JSON = currenState.form.value;
    json['fromAddress'] = currenState.fromAddress;
    json['inReplyTo'] = currenState.inReplyTo;
    json['references'] = currenState.references;
    json['subUserId'] = currenState.subUserId;
    json['htmlText'] = currenState.htmlText;
    json['plainText'] = currenState.plainText;
    json['loggedUser'] = currenState.usr.getUserDetails()['emailAddress'];
    json['toAddresses'] = currenState.addressList.join(',');
    json['sender'] = currenState.usr.getUserDetails().accountfirstName + ' ' + currenState.usr.getUserDetails().accountlastName;
    json['attachmentList'] = currenState.attachmentNames;
    if (this.usr.getUserDetails().Subuser)
      json['subUserId'] = currenState.usr.getUserDetails().Subuser.subUserID;
    if (this.message) {
      json['patientId'] = currenState.message.patientId;
      json['caseId'] = currenState.message.caseId;
    }

    currenState.dataService.postData(this.utility.apiData.mails.ApiUrl, JSON.stringify(json))
      .subscribe(Response => {

        currenState.newUtility.processingBackgroundData = currenState.newUtility.processingBackgroundData.map((item) => {
          if (item.id != id) return item;
          return {
            ...item, isProcessed: true
          }
        })
        console.log(currenState.newUtility.processingBackgroundData)

        // swal("Email Sent Successfully");
        // currenState.sending = false;
        // currenState.router.navigate(['/mail/inbox']);
        // if (this.usr.getUserDetails().Subuser) {
        //   swal("Email sent successfully");
        //  currenState.sending = false;
        //  currenState.router.navigate(['/mail/inbox']);
        //   // let jsonSub = {};
        //   // jsonSub['emailAddress'] =currenState.usr.getUserDetails().emailAddress;
        //   // jsonSub['submailAddress'] =currenState.usr.getUserDetails().Subuser.email;
        //   // jsonSub['type'] = 4
        //   //currenState.SubuserService.updatesub(jsonSub)
        //   //   .subscribe(Response => {
        //   //     ;
        //   //     swal("Email sent successfully");
        //   //    currenState.sending = false;
        //   //    currenState.router.navigate(['/mail/inbox']);
        //   //   }, error => {
        //   //     
        //   //     swal("Email sent successfully");
        //   //    currenState.sending = false;
        //   //    currenState.router.navigate(['/mail/inbox']);
        //   //   });
        // } 
      }, error => {
        currenState.newUtility.processingBackgroundData = currenState.newUtility.processingBackgroundData.map((item) => {
          if (item.id != id) return item;
          return {
            ...item, isFailed: true, isProcessed: false, error: error
          }
        })
      })
  }
}