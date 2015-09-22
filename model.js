Meteor.startup(function(){
  // initialize models
  Meteor.subscribe('posts');
  Session.set('bz.search.offline', false);
});