import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import { ScrollingService } from './scrolling.service';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
 

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScrollingService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
