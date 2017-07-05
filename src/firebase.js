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
	fetchDB: function(obj, data) {
		var ref = appFire.database().ref(obj)
		ref.once('value', function(snapshot) {
			let db = snapshot.val()
			return db
		}, function (errorObject) {
			console.log('The read failed: ' + errorObject.code)
		})
	},
	generateKey: function(setup) {
		return appFire.database().ref('data').child(setup.db).push().key
	},
	push: function(setup, key, data) {
		var updates = {}
		updates['/' + setup.db + '/' + setup.key] = setup.data
		console.log(updates)
		return appFire.database().ref('data').update(updates, function(error) {
			if (error) {
				data[key] = 'saving...with error'
			} else {
				data[key] = 'saving...with success'
			}
		})
	},
	onAuth: function() {
		
	}
}
module.exports = {
	appFire,
	helpers,
	Firebase
}
