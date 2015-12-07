Template.editDogs.helpers({
    // dogs: function () {
    // 	return Dogs.find().fetch();
    //   	//return dogList;
    // }
});

Template.editDogs.events({
	'click #addDog': function(e) {
		//add dog to dogs collection and user's dogs array
		var dogName = $("#newDogName").val();
		if (dogName != ""){
			Meteor.call('addDog', dogName);
		}
		$("#newDogName").val("");
	},

	'click .fa-trash': function(e) {
		Meteor.call('removeDog', e.currentTarget.dataset.id, function(err, doc) {
			if(!err){
				console.log("Dog removed: ", doc);
			}
		});
	}
});