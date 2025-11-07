// safe public config (keep apiKey in Vercel env)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY, // set in Vercel
  authDomain: "kairah-studio.firebaseapp.com",
  projectId: "kairah-studio",
  storageBucket: "kairah-studio.firebasestorage.app",
  messagingSenderId: "145122424961",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: "G-MGN2176Y5Q"
};

export default firebaseConfig;
