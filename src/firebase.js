import Firebase from 'firebase'
const configFire = {
	apiKey: 'AIzaSyCt2O4Fffj_J8jxlC6yoJ1c1lqjJ1oCyDQ',
	authDomain: 'gistscription.firebaseapp.com',
	databaseURL: 'https://gistscription.firebaseio.com',
	storageBucket: 'gistscription.appspot.com',
	messagingSenderId: '219549841956'
}
const appFire = Firebase.initializeApp(configFire)

module.exports = {
	appFire,
	Firebase
}
