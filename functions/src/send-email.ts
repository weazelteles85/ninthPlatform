import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
import { request } from 'https';
admin.initializeApp();

export const basicSendEmail = functions.https.onRequest((request, response) => {

    const name = request.query.name;
    if(!name) {
        response.status(400).send('ERROR you must supply a name :(');
    }

    response.send('Update hello ${name}');
})