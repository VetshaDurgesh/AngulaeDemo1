import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(public infoservice: InfoService, public r: Router) { }
  name: string = "";

  ngOnInit(): void {
  }

  Add() {
    // this.infoservice.Names.push(this.name);
    // this.r.navigate(["view"]);
    this.infoservice.LoggedInUser=this.name;
  }
}
