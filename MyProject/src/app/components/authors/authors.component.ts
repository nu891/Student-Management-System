import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  
  authors:any[]=[{"author":"JK Rowling"},{"author":"MK Basheer"},{"author":"Paulo coehlo"}];

  constructor() { }

  ngOnInit() {


  }

}
