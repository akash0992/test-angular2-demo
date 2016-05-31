import { Component, OnInit } from '@angular/core';
import { ApplicationConstants } from '../shared/const';



@Component({
  moduleId: module.id,
  selector: 'app-header-v1',
  templateUrl: 'header-v1.component.html',
  styleUrls: ['header-v1.component.css'],
  directives: []
})
export class HeaderV1Component implements OnInit {

  constructor() {
    alert("inside constructor header-v1");
  }

  ngOnInit() {
    alert("inside ngOnInit header-v1");
  }

}
