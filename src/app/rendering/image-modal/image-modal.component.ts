import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  imageURL:string = '';

  constructor(public params:NavParams, public modalController: ModalController) {
    console.log(params);
    console.log(params.get('url'))
    this.imageURL = params.get('url')
   }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

}
