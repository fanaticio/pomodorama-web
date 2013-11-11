//= require ./controllers/timer

(function() {
  PomodoramaApp.addRegions({
    TimerRegion: '.timer-js'
  });

  PomodoramaApp.Router = Marionette.AppRouter.extend({
    appRoutes: {
      'timer': 'showTimer'
    }
  });

  var API = {
    showTimer: function() {
      PomodoramaApp.Controller.Timer.show();
    }
  };

  PomodoramaApp.on('navigate:timer:show', function() {
    PomodoramaApp.navigate('timer');
    API.showTimer();
  });

  PomodoramaApp.addInitializer(function() {
    new PomodoramaApp.Router({
      controller: API
    });
  });
})();
