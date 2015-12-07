

Template.dogWalks.helpers({
  dogWalks: function () {
  	var dogId = Router.current().params._id;
  	//console.log(Walks.find({"walkData.walker": Meteor.userId(), "walkData.dogs": {$in: [dogId]}}).fetch());
  	return Walks.find({"walkData.dogs": {$in: [dogId]}}).fetch();
  },

  dogName: function () {
  	return Dogs.findOne({_id: Router.current().params._id}).name;
  },
  walkDate: function () {
  	console.log("this.walkData", this.walkData.data[0].time);
  	return ("this.walkData", moment(this.walkData.data[0].time).format("dddd, MMMM Do YYYY, h:mm a"));
  }
});

Template.dogWalks.events({
  'click button': function () {
    
  }
});

