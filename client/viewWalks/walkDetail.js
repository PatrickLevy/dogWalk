Template.walkDetail.helpers({
  walk: function () {
    return Walks.findOne({_id: Router.current().params._id});
  },

  walker: function () {
    console.log("this.walkData.walker", this.walkData.walker);
    console.log(Meteor.users.find({}).fetch());
    return Meteor.users.findOne({_id: this.walkData.walker});
  },

  dogs: function () {
    var dogs = [];
    var walk = Walks.findOne({_id: Router.current().params._id});
    _.each(walk.walkData.dogs, function (dogId) {
        dogs.push(Dogs.findOne({_id: dogId}).name)
    });
    return dogs;

  },
  totalTime: function () {
    var walk = Walks.findOne({_id: Router.current().params._id});
    return moment(walk.walkData.data[0].time).from(moment(walk.walkData.data[walk.walkData.data.length - 1].time), true);  
  },
  // dogName: function () {
  // 	return Dogs.findOne({_id: Router.current().params._id}).name;
  // },
  walkDate: function () {
  	return ("this.walkData", moment(this.walkData.data[0].time).format("dddd, MMMM Do YYYY, h:mm a"));
  },

  mapOptions: function() {
    if (GoogleMaps.loaded()) {

      return {
        center: new google.maps.LatLng(this.walkData.data[0].location.lat, this.walkData.data[0].location.lng),
        zoom: 15
      };
    }
  }
});

Template.walkDetail.onCreated(function() {  
  GoogleMaps.ready('map', function(map) {

     var walk = Walks.findOne({_id: Router.current().params._id});
     console.log("walk", walk.walkData.data[10].location.lng);
     
     var walkCoordinates = [];
     _.each(walk.walkData.data, function (data) {
        var latLng = {lat: data.location.lat, lng: data.location.lng};
        walkCoordinates.push(latLng);
     });
     // {lat: 44.963837, lng: -93.253161},
     // {lat: 44.963840, lng: -93.251707}
     // ];
     var walkPath = new google.maps.Polyline({
        path: walkCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: map.instance
     });

     //walkPath.setMap(map);

     // var marker = new google.maps.Marker({
     //  position: new google.maps.LatLng(walk.walkData.data[0].location.lat, walk.walkData.data[0].location.lng),
     //  map: map.instance
    });

  });
//});


Template.walkDetail.onRendered(function() {
  GoogleMaps.load();
});
