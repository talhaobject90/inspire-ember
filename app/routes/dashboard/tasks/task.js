import Ember from 'ember';

export default Ember.Route.extend({


  model: function(params) {

    return  this.store.findRecord('task', params.id );
    // return Ember.RSVP.hash({
    //   task:  this.store.findRecord('task', params.id ),
    // });
  },












  setupController: function(controller ,model) {
        controller.set('task',model);

   }
});
