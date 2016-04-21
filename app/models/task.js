import DS from 'ember-data';

import Ember from 'ember';



export default DS.Model.extend({
  name: DS.attr('string'),
  estdhours: DS.attr('number'),
  dailyquota: DS.attr('number'),
  estdcomplete: DS.attr('date'),
  subtasks: DS.hasMany('subtask' ,{embedded: 'always', async:true}),









  //
  // progress: function() {
  //   return this.get('subtasks').reduce(function(sum, split) {
  //     return sum + parseInt(split.get('progress'));
  //   }, 0);
  // }.property('subtasks.@each.progress'),

  progress: Ember.computed('subtasks.@each.progress', function() {
    var subtasks = this.get('subtasks');
    var subprogress =  subtasks.reduce(function(sum, split) {
      return sum + parseInt(split.get('progress'));
    }, 0);
    var subtaskscount = subtasks.get('length');
    var progress = subprogress / subtaskscount;

    return progress;
  }),

});
