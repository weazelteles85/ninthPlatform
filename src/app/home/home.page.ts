import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { ScrollingService } from '../scrolling.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('aboutUs') aboutUsEl: ElementRef;

  constructor(private scrollService: ScrollingService) {
  }

  ngOnInit() {
    this.scrollService.setAboutUsElement(this.aboutUsEl);
  }

  // ngAfterViewChecked() {
  //   this.scrollService.setAboutUsElement(this.aboutUsEl);
  // }


  public triggerScrollTo(el:Element) {
    console.log(this.aboutUsEl);
    this.scrollService.triggerScrollToAboutUs();
    //this.aboutUsEl.nativeElement.scrollIntoView();
  }
}
