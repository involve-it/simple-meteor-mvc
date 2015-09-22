
Meteor.startup(function () {
  bz.help.maps.getCurrentLocation(function (loc) {
    Session.set('bz.control.search.location', {
      coords: loc,
      name: 'My Location'
    });
  });
});

// controller interface:
changeSearchToOffline = function () {
  // controller manipulates model:
  Session.set('bz.search.offline', true);
}
