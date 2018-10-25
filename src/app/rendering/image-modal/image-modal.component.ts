import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ViewController } from '@ionic/core';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss']
})
export class ImageModalComponent implements OnInit {

  urlBase:string = '';
  urlIndex:string = '';
  urlList: Array<string>;
  imageURL:string = '';
  selectedIndex:number;

  constructor(public params:NavParams, public modalController: ModalController) {
    console.log(params);
    console.log(params.get('urlBase'))
    this.urlBase = params.get('urlBase');
    this.urlIndex = params.get('urlIndex');
    this.urlList = params.get('urlList');
    this.selectedIndex = params.get('indexNum');
    this.imageURL = this.urlBase + this.urlIndex;
    console.log(this.imageURL);
   }

  ngOnInit() {
  }

  closeModal() {
    this.modalController.dismiss();
  }

  nextImage() {
    this.selectedIndex++;
    if(this.selectedIndex > this.urlList.length - 1) {
      this.selectedIndex = 0;
    }
    this.imageURL = this.urlBase + this.urlList[this.selectedIndex];
    console.log(this.imageURL);
  }

  previousImage() {
    this.selectedIndex--;
    if(this.selectedIndex < 0) {
      this.selectedIndex = this.urlList.length - 1;
    }
    this.imageURL = this.urlBase + this.urlList[this.selectedIndex];
    console.log(this.imageURL);
  }

}
