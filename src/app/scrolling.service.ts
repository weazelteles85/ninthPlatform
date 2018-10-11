import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollingService {

  aboutUsEl: ElementRef;

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
