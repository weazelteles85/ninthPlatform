import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item, Row } from '@ionic/angular';
import { ScrollingService } from '../scrolling.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private scrollService: ScrollingService) { }

  windowSize: number;

  ngOnInit() {
    this.windowSize = window.innerWidth;
  }

  onClickLink() {
    console.log('add logic for highlighting active link');
  }

  scrollToAboutUs() {
    this.scrollService.triggerScrollToAboutUs();
  }


}
