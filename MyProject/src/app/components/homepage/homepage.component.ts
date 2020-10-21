import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  user:boolean=false;
  access:boolean=true;
  username:string="Ravi";
  bookTitle:string="Wings of Fire"
  search:string="Abraham"
  myBooks:any[]=[];
  constructor() { }

  ngOnInit() {
    
  }
  public OnKeyUp(newTitle:string){
    this.search=newTitle;
  
  }
 
}
