Template.home.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

Template.home.events({
  'click button': function () {

  }
});