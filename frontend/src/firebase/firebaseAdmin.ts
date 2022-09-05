import * as firebaseAdmin from 'firebase-admin';
import serviceAccount from '../../diveboard-org-firebase-adminsdk-zqzeb-44160fe147.json';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: serviceAccount.private_key,
      clientEmail: serviceAccount.client_email,
      projectId: serviceAccount.project_id,
    }),
    databaseURL: 'https://diveboard-org-default-rtdb.firebaseio.com',
  });
}

export { firebaseAdmin };
