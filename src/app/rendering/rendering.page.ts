import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalComponent } from './image-modal/image-modal.component';

@Component({
  selector: 'app-rendering',
  templateUrl: './rendering.page.html',
  styleUrls: ['./rendering.page.scss'],
})
export class RenderingPage implements OnInit {

  public enviromentalColor:string = 'primary';
  public whiteSpaceColor:string = 'primary';

  @ViewChild('enviromentBtn') envBtn; 
  

  isEnviromental = false;
  isWhiteSpace = false;

  whiteSpaceImg:Array<string> = [
    "1-1.jpg",
    "1-1b.jpg",
    "1-2b.jpg",
    "2-1b.jpg",
    "2-2.jpg",
    "2-2b.jpg",
    "3-2.jpg",
    "4-1.jpg",
    "5-1.jpg",
    "6-1.jpg",
    "7-1.jpg",
    "8-1.jpg",
    "8-3.jpg",
    "9-2.jpg",
    "10-2.jpg",
    "10-3.jpg",
  ]

  enviromentalImg:Array<string> = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
  ]

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    
  }

  async openImageModal(index, indexNumber) {
    console.log('number at: ');
    console.log(indexNumber);
    if(this.isWhiteSpace) {
      const modal = await this.modalController.create({
        component: ImageModalComponent,
        componentProps: { 
          urlBase: "/src/assets/images/Whitespace-renders/",
          urlIndex: index,
          urlList: this.whiteSpaceImg,
          indexNum: indexNumber
        },
        cssClass: "telesModal"
      });
      return await modal.present();
    }
    else {
      const modal = await this.modalController.create({
        component: ImageModalComponent,
        componentProps: { 
          urlBase: "/src/assets/images/3D-Renders/",
          urlIndex: index,
          urlList: this.enviromentalImg,
          indexNum: indexNumber
        },
        cssClass: "telesModal"
      });
      return await modal.present();
    }
  }

  enviromentalToggle() {
    this.whiteSpaceColor = 'primary';
    this.isWhiteSpace = false;
    this.enviromentalColor = 'tertiary';
    this.isEnviromental = true;
  }

  whiteSpaceToggle() {
    this.enviromentalColor = 'primary';
    this.isEnviromental = false;
    this.whiteSpaceColor = 'tertiary';
    this.isWhiteSpace = true;
  }

}
