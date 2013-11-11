//= require_self
//= require ./pomodorama/models/tomato
//= require ./pomodorama/router

var PomodoramaApp = new Marionette.Application();
PomodoramaApp.Controller = {};

PomodoramaApp.navigate = function(route,options) {
  options || (options = {});
  Backbone.history.navigate(route, options);
};

PomodoramaApp.getCurrentRoute = function() {
  return Backbone.history.fragment
};

PomodoramaApp.on('initialize:after', function() {
  if(Backbone.history) {
    Backbone.history.start();
  }

  if(this.getCurrentRoute() === '') {
    PomodoramaApp.trigger('navigate:timer:show')
  }
});
