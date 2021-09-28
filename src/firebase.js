/* import { initializeApp } from 'firebase/app';
 */
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDBdDRuzxWDl_xcgVax9TnpyDc83LzjFt4',
	authDomain: 'tanooki-32665.firebaseapp.com',
	projectId: 'tanooki-32665',
	storageBucket: 'tanooki-32665.appspot.com',
	messagingSenderId: '456173238287',
	appId: '1:456173238287:web:f5a5d7cf593073f9c80b7a',
};

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app);
