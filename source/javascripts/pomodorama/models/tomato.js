(function() {
  PomodoramaApp.Tomato = Backbone.Model.extend({});

  var tomato = { duration: '25:00' };
  var API = {
    getTomato: function() {
      return new PomodoramaApp.Tomato(tomato);
    }
  };

  PomodoramaApp.reqres.setHandler('models:tomato', function() {
    return API.getTomato();
  });
})();
