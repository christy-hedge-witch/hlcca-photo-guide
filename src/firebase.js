import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// ============================================================
// FIREBASE CONFIGURATION
// These are client-side Firebase keys — they are designed to be
// public. Security is enforced by Firestore & Storage rules,
// not by hiding these values. This is standard Firebase practice.
// See: https://firebase.google.com/docs/projects/api-keys
// ============================================================
const firebaseConfig = {
  apiKey: "AIzaSyALHpXJMzK6SXPPsC5F-BtRVSar5qgpLiY",
  authDomain: "hlcca-photo-guide.firebaseapp.com",
  projectId: "hlcca-photo-guide",
  storageBucket: "hlcca-photo-guide.firebasestorage.app",
  messagingSenderId: "394918238288",
  appId: "1:394918238288:web:0b33bcd95d4a78a2b41955"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export default app;
