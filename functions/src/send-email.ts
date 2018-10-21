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

        const msg = {
            to: toEmail,
            from: 'hello@angularfirebase.com',
            subject: 'Test Email',
            // text: `Hey ${toName}. You have a new follower!!! `,
            // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,

            // custom templates
            templateId: 'd-46444f0ae85545b28f0f7be6c1b55ebc',
            substitutionWrappers: ['{{', '}}'],
            substitutions: {
                name: toName
                // and other custom properties here
            }
        };
        return sgMail.send(msg)
            .then(() => response.status(200).send('email sent!'))
            .catch(err => response.status(400).send(err))
    });
})