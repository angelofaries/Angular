import { Component, OnInit } from '@angular/core';
// import { Server } from 'http';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector:'app-servers',
  templateUrl: './servers.component.html',
  styles:[`
  h2 {
    color:blue;
  }`]
  //styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
