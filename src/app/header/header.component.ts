import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item, Row } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(router: Router) { }

  windowSize: number;

  ngOnInit() {
    this.windowSize = window.innerWidth;
  }

  onClickLink() {
    console.log('add logic for highlighting active link');
  }


}
