import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


import { HomePage } from './home.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScrollToModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}
