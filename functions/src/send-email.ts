import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
import { request } from 'https';
import { environment } from './environments/environments'

admin.initializeApp();
const cors = require('cors')({ origin: true });

//const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);
const SENDGRID_API_KEY = environment.sendGridKey;


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

export const basicSendEmail = functions.https.onRequest((request, response) => {
    cors(request, response, () => {

        const toName = request.body.toName;
        const toEmail = request.body.toEmail;
        const eMailSubject = request.body.eMailSubject;
        const htmlBody = request.body.htmlBody;
        //sgMail.setSubstitutionWrappers('{{', '}}');

        // const msg = {
        //     "to": toEmail,
        //     "from": 'hello@angularfirebase.com',
        //     "subject":  'New Contact Us Form From Your Website',
        //     // text: `Hey ${toName}. You have a new follower!!! `,
        //     // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,

        //     // custom templates
        //     "templateId": 'd-cb242ce138c142f5b0d18bae69abed33',
        //     "substitutions": {
        //       "name": toName,
        //       "to" : toEmail
        //       // and other custom properties here
        //     }
        // };

        const msg = {
            "to": toEmail,
            "from": 'nonereply@telesapps.com',
            "subject": eMailSubject,
            "html": htmlBody
        };


        return sgMail.send(msg)
            .then(() => response.status(200).send('email sent!'))
            .catch((err) => {
                console.log('error occured on response from sendgrid')
                response.status(400).send(err)
            })
    });
})