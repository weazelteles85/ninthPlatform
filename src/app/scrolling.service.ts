import { Injectable, ElementRef } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  aboutUsEl: ElementRef;

  constructor(private scrollingService: ScrollToService) { }

  public setAboutUsElement(el: ElementRef) {
    this.aboutUsEl = el;
  }

  public triggerScrollToAboutUs() {
    console.log('scrollservcioes called');
    setTimeout(() => {
      this.aboutUsEl.nativeElement.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }

}
