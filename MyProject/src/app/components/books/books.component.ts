import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiServiceService } from '../../services/api-service.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() bookTitle:string;
  @Output() myOutput:EventEmitter<string>=new EventEmitter();
  constructor(private httpClient: HttpClient,private api:ApiServiceService) { }
myBooks:any[]=[];
  ngOnInit() {
    console.log(this.bookTitle);

    this.getJSON().subscribe(data => {
      this.myBooks=data["books"];
      console.log(data["books"]);
  });
  
  }
  public getJSON(): Observable<any> {
    return this.httpClient.get("./assets/json/books.json");
}


}
