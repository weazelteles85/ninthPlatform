import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactSubmitedPage } from './contact-submited.page';

const routes: Routes = [
  {
    path: '',
    component: ContactSubmitedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactSubmitedPage]
})
export class ContactSubmitedPageModule {}
