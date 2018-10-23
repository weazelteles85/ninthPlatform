import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RenderingPage } from './rendering.page';
import { ImageModalComponent } from './image-modal/image-modal.component';

const routes: Routes = [
  {
    path: '',
    component: RenderingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RenderingPage, ImageModalComponent,],
  entryComponents: [ImageModalComponent]
})
export class RenderingPageModule {}
