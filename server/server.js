// Meteor.publish('users', function(){
//     return Meteor.users.find()
// });

Meteor.publish('dogs', function(){
    return Dogs.find()
});

Meteor.publish('walks', function(){
    return Walks.find()
});

Meteor.publish('allUsers', function() {
	return Meteor.users.find({});
});

//add custom fields from user collection
// Meteor.publish('userData', function() {
//   if(!this.userId) return null;
//   return Meteor.users.find(this.userId, {fields: {
//     dogs: 1,
//   }});
// });


Meteor.methods({
	'addDog': function(dogName) {
		Dogs.insert({name: dogName}, function(err, dogId) {

			//Add dog to user's list
			if (!err){
				Meteor.users.update({_id: Meteor.userId()}, {$push: {"profile.dogs": dogId}});
			}
		});
		
	},
	'removeDog': function(dogId) {
		//remove dog from dogs collection
		Dogs.remove({_id: dogId}, function(err, doc) {
			if(!err) {
				//remove dog from users collection
				Meteor.users.update({_id: Meteor.userId()}, {$pull: {"profile.dogs": dogId}})
			}
		});
		
	},
	'updateProfile': function(userId, profile, role) {
		Meteor.users.update({_id: userId}, {$set: {"profile.firstName": profile.firstName, "profile.lastName": profile.lastName, "profile.address": profile.address}}, function(err, doc){
			if (!err){
				return doc;
			}
		});
	},
	'updateRole': function(userId, role) {
		Roles.addUsersToRoles(userId, [role], Roles.GLOBAL_GROUP);
	},

	'addWalkerToDog': function(dogId) {
		console.log("dogId", dogId);
		Meteor.users.update({_id: Meteor.userId()}, {$addToSet: {"profile.dogsToWalk": dogId}}, function(err, doc) {
			if(!err){
				return true;
			}
		});
	},

	'removeWalkerFromDog': function(dogId) {
		console.log("dogId", dogId);
		Meteor.users.update({_id: Meteor.userId()}, {$pull: {"profile.dogsToWalk": dogId}}, function(err, doc) {
			if(!err){
				return true;
			}
		});
	},

	'addNewWalk': function(walkData) {
		console.log("walkData", walkData);
		Walks.insert({walkData}, function(err, doc) {
			if(!err){
				return true;
			}
		});
	}
});