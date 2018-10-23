import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
//import { ImageModalComponent } from './image-modal/image-modal.component';

@Component({
  selector: 'app-rendering',
  templateUrl: './rendering.page.html',
  styleUrls: ['./rendering.page.scss'],
})
export class RenderingPage implements OnInit {

  imageRefs:Array<string> = [
    "1-1.jpg",
    "1-1b.jpg",
    "1-2b.jpg"

  ]

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async openImageModal(index) {
    console.log(index);
    // const modal = await this.modalController.create({
    //   component: ImageModalComponent,
    //   componentProps: { value: 123 }
    // });
    // return await modal.present();
  }

}
