Router.route('/', function () {
  this.render('home');
});

Router.route('/newWalk', function () {
  if(Meteor.userId() && (Roles.userIsInRole(Meteor.userId(), 'walker') || Roles.userIsInRole(Meteor.userId(), 'owner'))) {
  	this.render('newWalk');
  }
  else if(Meteor.userId() && !(Roles.userIsInRole(Meteor.userId(), 'walker') || Roles.userIsInRole(Meteor.userId(), 'owner'))) {
    Router.go('/editProfile');
  }
  else {
  	Router.go('/');
  }
});

Router.route('/viewWalks', function () {
  if(Meteor.userId() && (Roles.userIsInRole(Meteor.userId(), 'walker') || Roles.userIsInRole(Meteor.userId(), 'owner'))) {
    this.render('viewWalks');
  }
  else if(Meteor.userId() && !(Roles.userIsInRole(Meteor.userId(), 'walker') || Roles.userIsInRole(Meteor.userId(), 'owner'))) {
    Router.go('/editProfile');
  }
  else {
    Router.go('/');
  }
});

Router.route('/viewWalks/:_id', {
    template: 'dogWalks',
    data: function(){
        return;
        //return this.params._id;
        //var dogId = this.params._id;
        // console.log( Walks.find({dogs: {$in: [dogId]}}) );
        // return Walks.find({dogs: {$in: [dogId]}});

    }
});

Router.route('/walkDetail/:_id', function () {
  if(Meteor.userId()){
  	this.render('walkDetail');
  }
  else {
  	Router.go('/');
  }
});

Router.route('/myProfile', function () {
  if(Meteor.userId() && (Roles.userIsInRole(Meteor.userId(), 'walker') || Roles.userIsInRole(Meteor.userId(), 'owner'))) {
    this.render('myProfile');
  }
  else if(Meteor.userId() && !(Roles.userIsInRole(Meteor.userId(), 'walker') || Roles.userIsInRole(Meteor.userId(), 'owner'))) {
    Router.go('/editProfile');
  }
  else {
    Router.go('/');
  }
});

Router.route('/admin', function () {
  if(Meteor.userId() && (Roles.userIsInRole(Meteor.userId(), 'walker') || Roles.userIsInRole(Meteor.userId(), 'owner'))) {
    this.render('admin');
  }
  else if(Meteor.userId() && !(Roles.userIsInRole(Meteor.userId(), 'walker') || Roles.userIsInRole(Meteor.userId(), 'owner'))) {
    Router.go('/editProfile');
  }
  else {
    Router.go('/');
  }
});

Router.route('/editProfile', function () {
  if(Meteor.userId()){
  	this.render('editProfile');
  }
  else {
  	Router.go('/');
  }
});

Router.route('/editDogs', function () {
  if(Meteor.userId() && (Roles.userIsInRole(Meteor.userId(), 'walker') || Roles.userIsInRole(Meteor.userId(), 'owner'))) {
    this.render('editDogs');
  }
  else if(Meteor.userId() && !(Roles.userIsInRole(Meteor.userId(), 'walker') || Roles.userIsInRole(Meteor.userId(), 'owner'))) {
    Router.go('/editProfile');
  }
  else {
    Router.go('/');
  }
});

Router.route('/dogList', function () {
  if(Meteor.userId() && (Roles.userIsInRole(Meteor.userId(), 'walker') || Roles.userIsInRole(Meteor.userId(), 'owner'))) {
    this.render('dogList');
  }
  else if(Meteor.userId() && !(Roles.userIsInRole(Meteor.userId(), 'walker') || Roles.userIsInRole(Meteor.userId(), 'owner'))) {
    Router.go('/editProfile');
  }
  else {
    Router.go('/');
  }
});
