// model updates view
Template.bzPageSearch.helpers({
  getItems: function(){
    var offline = Session.get('bz.search.location');
    return posts.find({locationStatus: offline});
  }
});

// user uses controller
Template.bzPageSearch.events({
  'click .js-turn-on-offline': function(e, v){
    changeSearchToOffline();
  }
})