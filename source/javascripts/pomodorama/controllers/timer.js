//= require ../views/timer

(function() {
  PomodoramaApp.Controller.Timer = {
    show: function() {
      var timerView = new PomodoramaApp.TimerView({
        model: PomodoramaApp.request('models:tomato')
      });

      PomodoramaApp.TimerRegion.show(timerView);
    }
  };
})();
