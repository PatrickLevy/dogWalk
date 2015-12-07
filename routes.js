Router.route('/', function () {
  if(Roles.userIsInRole(Meteor.userId(), 'owner') || Roles.userIsInRole(Meteor.userId(), 'walker')){
    this.render('home');
  }
  else {
    Router.go('/editProfile');
  }
});

Router.route('/newWalk', function () {
  if(Meteor.userId()){
  	this.render('newWalk');
  }
  else {
  	Router.go('/');
  }
});

Router.route('/viewWalks', function () {
  if(Meteor.userId()){
  	this.render('viewWalks');
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
  if(Meteor.userId()){
  	this.render('myProfile');
  }
  else {
  	Router.go('/');
  }
});

Router.route('/admin', function () {
  if(Meteor.userId()){
  	this.render('admin');
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
  if(Meteor.userId()){
  	this.render('editDogs');
  }
  else {
  	Router.go('/');
  }
});

Router.route('/dogList', function () {
  if(Meteor.userId()){
  	this.render('dogList');
  }
  else {
  	Router.go('/');
  }
});
