import app from 'firebase/compat/app';

const config = {
  apiKey: 'AIzaSyDhfxWntpGkHmuVaOO5EOsycaKV7Gg39Gc',
  authDomain: 'marvel-quiz-1f894.firebaseapp.com',
  projectId: 'marvel-quiz-1f894',
  storageBucket: 'marvel-quiz-1f894.appspot.com',
  messagingSenderId: '661381803775',
  appId: '1:661381803775:web:dc2e7610116915823a66ca',
};
class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}
export default Firebase;
