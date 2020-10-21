import { Component, OnInit } from '@angular/core';
import { OrderByPipe } from '../../shared/orderBy.pipe';
import { FilterPipe } from '../../shared/filter.pipe';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers: [
    OrderByPipe,
    FilterPipe
]
})
export class FilterComponent implements OnInit {
  filter:boolean=false;
  text:any;
  Names = [
    'Lionel Messi',
    'Sergio Ramos',
    'Paul Pogba',
    'Steven Gerrard',
    'Christian Ericksen',
    'Dele Ali',
    'Luis Suárez',
    'Kylian Mbappé',
    'Kevin De Bruyne',
    'Gerard Piqué',
    'Mohamed Salah'
];
  constructor() { }

  ngOnInit() {
  }
filteroption(){
  this.filter=true;
}
}
