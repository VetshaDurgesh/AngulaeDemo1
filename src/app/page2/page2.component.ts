import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  
  constructor(public infoservice:InfoService) { }

  ngOnInit(): void {
  }

}
