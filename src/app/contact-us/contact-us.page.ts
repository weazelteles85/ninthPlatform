import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  endpoint = 'https://us-central1-ninthplatform-c05d4.cloudfunctions.net/basicSendEmail';

  contactUsForm: FormGroup


  constructor(private http: HttpClient, private router: Router) { 
  }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.contactUsForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'business': new FormControl(''),
      'email': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required)
    })
  }

  sendEmail() {
    console.log('sendEmail called');
    const name = this.contactUsForm.get('name').value;
    const business = this.contactUsForm.get('business').value;
    const email = this.contactUsForm.get('email').value;
    const description = this.contactUsForm.get('description').value;

    console.log(name);
    console.log(business);
    console.log(email);
    console.log(description);

    const data = {
      toEmail: 'claudioteles85@gmail.com',
      toName: 'Test', //<--- This value is currently not being used for anything in the cloud functions
      eMailSubject: 'New Contact-Us Form From Your Website',
      htmlBody: `<p><strong>Name: </strong>${name}</p>
      <p><strong>Business: </strong>${business}</p>
      <p><strong>Email: </strong>${email}</p>
      <p><strong>Description: </strong>${description}</p>`,
    }

    this.http.post(this.endpoint, data).subscribe();
    this.contactUsForm.reset();
    this.router.navigate(['contact-submited']);
  }

}
