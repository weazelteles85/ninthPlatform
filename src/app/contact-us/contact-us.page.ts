import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  
  sendGridKey: any;


  constructor() { 
    // this.sendGridKey = environment.SENDGRID_API_KEY;
  }

  ngOnInit() {
  }

  sendEmail() {
//     const sgMail = require('@sendgrid/mail');
//   sgMail.setApiKey(this.sendGridKey);
//   const msg = {
//   to: 'test@example.com',
//   from: 'test@example.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);
  }

}
