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
      title: 'Page 2',
      url: '/tax-preparation',
      icon: 'analytics'
    },
    {
      title: 'Page 3',
      url: '/payroll',
      icon: 'logo-usd'
    },
    {
      title: 'Page 4',
      url: '/bookkeeping',
      icon: 'book'
    },
    {
      title: 'Page 5',
      url: '/business-services',
      icon: 'briefcase'
    },
    {
      title: 'Page 6',
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
