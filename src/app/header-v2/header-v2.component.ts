import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header-v2',
  templateUrl: 'header-v2.component.html',
  styleUrls: ['header-v2.component.css']
})
export class HeaderV2Component implements OnInit {

  constructor() {
    alert("inside constructor header-v2");
  }

  ngOnInit() {
    alert("inside ngOnInit header-v2");
  }

}
