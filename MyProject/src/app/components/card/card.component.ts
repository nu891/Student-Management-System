import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() obj:Object;
  // @Input() title:string;
  // @Input() subtitle:string;
  // @Input() author:string;
  // @Input() description:string;
  // @Input() pages:string;
  constructor(private httpClient: HttpClient) { }
myBooks:any[]=[];

  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.myBooks=data["books"];
      console.log(data["books"]);
  });
  }
  
  public getJSON(): Observable<any> {
    return this.httpClient.get("./assets/json/books.json");
}

}
