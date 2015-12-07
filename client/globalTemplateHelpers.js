Template.registerHelper( 'isAdmin', function() {
  	if (Meteor.userId() && Roles.userIsInRole(Meteor.userId(), 'admin')) {
		return true;
	}
	else{
		return false;
	}
});

Template.registerHelper( 'ownerDogs', function() {
  //Get array of dogs that belong to the owner
  var userRecord = Meteor.users.findOne({_id: Meteor.userId()});
  if(userRecord && userRecord.profile.dogs){
  	return Dogs.find({_id: {$in: userRecord.profile.dogs}}).fetch();
  }
  else
  	return null;
});

Template.registerHelper( 'dogsToWalk', function() {
  //Get array of dogs that the user walks
  var userRecord = Meteor.users.findOne({_id: Meteor.userId()});
  if(userRecord && userRecord.profile.dogsToWalk){
  	return Dogs.find({_id: {$in: userRecord.profile.dogsToWalk}}).fetch();
  }
  else
  	return null;
});

Template.registerHelper( 'user', function() {
	return Meteor.users.findOne({_id: Meteor.userId()})
});