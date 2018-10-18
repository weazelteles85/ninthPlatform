import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
import { request } from 'https';
admin.initializeApp();

export const basicSendEmail = functions.https.onRequest((request, response) => {

    const name = request.query.name;
    if(!name) {
        response.status(400).send('Last time for real');
    }

    response.send('last time {name}');
})