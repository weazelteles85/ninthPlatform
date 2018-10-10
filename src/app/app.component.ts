import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  windowSize: number;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
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
      icon: 'brush'
    },
    {
      title: 'About',
      url: '/about-us',
      icon: 'happy'
    },
    {
      title: 'Contact Us',
      url: '/business-services',
      icon: 'call'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.windowSize = window.innerWidth;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
