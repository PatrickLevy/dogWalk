Template.editProfile.helpers({
    roleSelect: function (selectRole) {
      if(Roles.userIsInRole(Meteor.userId(), selectRole)){
        return 'selected';
      }
    }

});


Template.editProfile.events({
  'click #updateProfile': function () {
    var profile = { firstName: $("#fNameInput").val(),
                    lastName: $("#lNameInput").val(),
                    address: $("#addressInput").val() };
    
    var role = $("#roleSelect").val();
    
    if(Meteor.userId() && profile.firstName !== ""){
      Meteor.call('updateProfile', Meteor.userId(), profile, function (err, doc){
        if(!err){
          console.log("Profile Updated");
        }
      });

      Meteor.call('updateRole', Meteor.userId(), role, function (err, doc) {
        if(!err){
          console.log("Role Updated");
        }
      });

      Router.go('/myProfile');
    }

  }
});