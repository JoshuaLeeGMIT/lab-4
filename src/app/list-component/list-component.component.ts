import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {
  presidents: object[] = [
    {name: "Higgins", term: "2011-"},
    {name: "McAleese", term: "1997-2001"},
    {name: "Robinson", term: "1990-1997"},
    {name: "Hillary", term: "1976-1990"},
    {name: "O'Dallaigh", term: "1974-1976"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
