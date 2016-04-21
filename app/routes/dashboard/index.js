import Ember from 'ember';

export default Ember.Route.extend({
model: function() {

   return Ember.RSVP.hash({
    tasks: this.store.findAll('task'),

  });

},



 setupController: function(controller ,model) {
       controller.set('tasks',model.tasks);

  }



});
