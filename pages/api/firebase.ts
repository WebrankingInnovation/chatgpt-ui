/* eslint-disable import/no-anonymous-default-export */
import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

// Initialize Firebase
const serviceAccountPath = path.join(
  process.cwd(),
  '/creds/w-chatbot-ai-firebase-adminsdk-a6ydt-f269972b41.json',
);
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default async (req, res) => {
  const db = admin.firestore();
  const { data } = req.body;

  // get
  if (data.conversation) {
    const docRef = db.collection('mc-gpt').doc(data.conversation);

    const doc = await docRef.get();

    if (doc.exists) {
      res.status(200).json(doc.data());
    } else {
      res.status(200).json({
        message: `Conversazione con ID ${data.conversation} non trovata`,
      });
    }
  }
  //create
  else {
    const { id } = await db.collection('mc-gpt').add({
      timestamp: admin.firestore.Timestamp.fromDate(new Date()),
      conversation: data,
    });

    res.status(200).json({ id });
  }
};
