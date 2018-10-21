import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  
  endpoint = 'https://us-central1-ninthplatform-c05d4.cloudfunctions.net/basicSendEmail';


  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  }

  sendEmail() {
    console.log('sendEmail called');
    const data = {
      toEmail: 'claudioteles85@gmail.com',
      toName: 'Raidax Test'
    }

    this.http.post(this.endpoint, data).subscribe()
  }

}
