Session.set('walking', false);
var walkData = [];
var dogs = [];
var intervalId;
//position = new ReactiveVar(null);
var position;
var currentTime;

Template.newWalk.helpers({
	walking: function () {
		if(Session.get('walking')){
			return true;
		}
	},
	notWalking: function () {
		if(!Session.get('walking')){
			return true;
		}
	},
	elapsedTime: function () {
		//need to make this reactive
		return "unknown";
	}
});

Template.newWalk.events({
	'click .btn-success': function() {
		//Get selected dogs
		dogs = [];
		$("input:checkbox:checked").each(function(){
    		dogs.push(this.dataset.id);
		});

		//return if no dogs were selected
		if(dogs.length === 0){
			return;
		}

		//Set recording session variable
		Session.set('walking', true);

		//Get time and location every 10 seconds
		walkData = [];
		intervalId = Meteor.setInterval( function() {
			currentTime = new Date().getTime()
			console.log("Getting Data");
			position = Geolocation.latLng();
			var currentData = {time: currentTime, location: {lat: position.lat, lng: position.lng}};
			walkData.push(currentData);
		}, 1000); //record data every 10 seconds
	},

	'click .btn-danger': function () {
		//Stop recording and set session variable
		Meteor.clearInterval(intervalId);

		//Get final time and location
		currentTime = new Date().getTime();
		position = Geolocation.latLng();
		var currentData = {time: currentTime, location: {lat: position.lat, lng: position.lng}};
		walkData.push(currentData);

		//Update database
		var doc = {walker: Meteor.userId(), dogs: dogs, data: walkData};
		console.log(doc);
		Meteor.call('addNewWalk', doc, function(err, doc) {
			if(!err){
				Router.go('/viewWalks');
			}
		});

		//Set walking session variable to false and stop recording
		Session.set('walking', false);
	}
});

// Template.newWalk.autorun(function () {
//   position.set(Geolocation.latLng());
// });

Template.newWalk.onCreated(function () {
	position = Geolocation.latLng();
});