import Firebase from 'firebase'
const configFire = {
	apiKey: 'AIzaSyCt2O4Fffj_J8jxlC6yoJ1c1lqjJ1oCyDQ',
	authDomain: 'gistscription.firebaseapp.com',
	databaseURL: 'https://gistscription.firebaseio.com',
	storageBucket: 'gistscription.appspot.com',
	messagingSenderId: '219549841956'
}
const appFire = Firebase.initializeApp(configFire)
const helpers = {
	generateKey: function(setup) {
		return appFire.database().ref('data').child(setup.db).push().key
	},
	push: function(setup, key, data) {
		var updates = {}
		updates['/' + setup.db + '/' + setup.key] = setup.data
		return appFire.database().ref('data').update(updates, function(error) {
			if (error) {
				data[key] = 'saving...with error'
			} else {
				data[key] = 'saving...with success'
			}
		})
	}
}
module.exports = {
	appFire,
	helpers,
	Firebase
}
