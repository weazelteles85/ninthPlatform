import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScrollingService } from './scrolling.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  windowSize: number;
  public appPages = [
    {
      title: 'Home',
      url: '/',
      icon: 'home'
    },
    {
      title: 'Design',
      url: '/design',
      icon: 'cube'
    },
    {
      title: 'Rendering',
      url: '/rendering',
      icon: 'color-wand'
    },
    {
      title: 'About Us',
      url: '/home',
      icon: 'contact',
    },
    {
      title: 'Contact Us',
      url: '/contact-us',
      icon: 'call'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private scrolling: ScrollingService
  ) {
    this.initializeApp();
    this.windowSize = window.innerWidth;
    
  }

  scroll(p) {
    if(p === 'About Us') {
      this.scrolling.triggerScrollToAboutUs();
    }
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
