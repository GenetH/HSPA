import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [{
    "Id":1,
    "Name":"Peral WHite House",
    "Type":"House",
    "Price":12000

  },
  {
    "Id":2,
    "Name":"Yade Vila House",
    "Type":"House",
    "Price":12500

  },
  {
    "Id":3,
    "Name":"Ela House",
    "Type":"House",
    "Price":12800

  },
  {
    "Id":4,
    "Name":"Razino House",
    "Type":"House",
    "Price":13000

  },{
    "Id":5,
    "Name":"Mule House",
    "Type":"House",
    "Price":14000

  },
  {
    "Id":6,
    "Name":"  TG House",
    "Type":"House",
    "Price":14000

  }]

  constructor() { }

  ngOnInit(): void {
  }

}
