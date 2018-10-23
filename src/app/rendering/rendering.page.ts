import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalComponent } from './image-modal/image-modal.component';

@Component({
  selector: 'app-rendering',
  templateUrl: './rendering.page.html',
  styleUrls: ['./rendering.page.scss'],
})
export class RenderingPage implements OnInit {

  @ViewChild('enviromentBtn') envBtn; 
  

  isEnviromental = false;
  isWhiteSpace = false;

  imageRefs:Array<string> = [
    "1-1.jpg",
    "1-1b.jpg",
    "1-2b.jpg",
    "1-2b.jpg",
    "1-1.jpg",
    "1-1.jpg",
  ]

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    
  }

  async openImageModal(index) {
    console.log(index);
    const modal = await this.modalController.create({
      component: ImageModalComponent,
      componentProps: { url: "/src/assets/images/Whitespace-renders/" + index },
      cssClass: "telesModal"
    });
    return await modal.present();
  }

  enviromentalToggle() {
    console.log(this.envBtn);
    this.envBtn.setColor('red');
    this.isWhiteSpace = false;
    this.isEnviromental = true;
  }

  whiteSpaceToggle() {
    this.isEnviromental = false;
    this.isWhiteSpace = true;
  }

}
