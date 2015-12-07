Template.navBar.helpers({
    username: function () {
      return 'Patrick Levy';
    },

    activeIfTemplateIs: function (template) {
      var currentRoute = Router.current();
      return currentRoute &&
        template === currentRoute.lookupTemplate() ? 'active' : '';
    },

});


Template.navBar.events({
  'click .nav': function (e) {
      console.log("click");
  }
});
