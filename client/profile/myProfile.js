Template.myProfile.helpers({
	
	userRole: function () {
		if (Roles.userIsInRole(Meteor.userId(), 'owner')) {
			return "Owner";
		}
		else if (Roles.userIsInRole(Meteor.userId(), 'walker')){
			return "Walker";
		}
	},
	isOwner: function () {
		return Roles.userIsInRole(Meteor.userId(), 'owner');
	},
	isWalker: function () {
		return Roles.userIsInRole(Meteor.userId(), 'walker');
	}
});

Template.myProfile.events({
	'click button': function () {
    	console.log("click");
  	}
});