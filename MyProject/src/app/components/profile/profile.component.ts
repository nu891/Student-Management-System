import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  customEvents:any;
  pplYoumayKnow:any=[{"profilepic":"./../../../assets/company-profile-photographer@2x.png","name":"James Smith","jobTitle":"Application Developer","company":"Tata Consultancy Services","jobLocation":"Dallas, USA","attestationScore":"82"},
  {"profilepic":"./../../../assets/adamrose.png","name":"Adam Rose","jobTitle":"Deputy Manager","company":"Air India","jobLocation":"Mumbai, India","attestationScore":"85"},
  {"profilepic":"./../../../assets/jacobroy.png","name":"Jacob Roy","jobTitle":"Duty Officer","company":"Air India","jobLocation":"Mumbai,India","attestationScore":"50"},
  {"profilepic":"./../../../assets/dayans.png","name":"Dayana S","jobTitle":"Technical Lead","company":"Tata Consultancy Services","jobLocation":"Hyderabad,India","attestationScore":"45"},
  {"profilepic":"./../../../assets/dayans.png","name":"Dayana S","jobTitle":"Technical Lead","company":"Tata Consultancy Services","jobLocation":"Hyderabad,India","attestationScore":"45"},
  {"profilepic":"./../../../assets/dayans.png","name":"Dayana S","jobTitle":"Technical Lead","company":"Tata Consultancy Services","jobLocation":"Hyderabad,India","attestationScore":"45"},
  {"profilepic":"./../../../assets/dayans.png","name":"Dayana S","jobTitle":"Technical Lead","company":"Tata Consultancy Services","jobLocation":"Hyderabad,India","attestationScore":"45"},



];
//chunk:any=3;
// array.slice(chunk, chunk + array.length); 
pplUmayKnow:any=[];
 
  constructor() { }
  chunks(array, size) {
    let results = [];
    results = [];
    while (array.length) {
      results.push(array.splice(0, size));
    }
    return results;
  }

  ngOnInit() {
    this.customEvents = [`editableClick`, `editableInput`];
    this.pplUmayKnow=this.chunks(this.pplYoumayKnow,4)
  }
  handleCustomEvents($event) {
    // handleEvent
  }
}
