
Template.dogList.helpers({
	allDogs: function () {
		return Dogs.find({}).fetch(); 
	},
	isChecked: function () {
		userRecord = Meteor.users.findOne({_id: Meteor.userId()});		
		if (userRecord && _.contains(userRecord.profile.dogsToWalk, this._id)) {
			return (checked="checked");
		}
	}
});

Template.dogList.events({
	'change .checkbox': function(e) {
		
		if(e.target.checked){
			Meteor.call('addWalkerToDog', this._id, function(err, doc) {
				if(!err){
					console.log("Walker added to dog: ", doc);
				}
			});
		}
		else{
			Meteor.call('removeWalkerFromDog', this._id, function(err, doc) {
				if(!err){
					console.log("Walker removed from dog: ", doc);
				}
			});
		}
	}
});