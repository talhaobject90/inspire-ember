import DS from 'ember-data';
import Ember from 'ember';



export default DS.Model.extend({

  name: DS.attr('string'),
  estdhours: DS.attr('number'),
  progress: DS.attr('number'),
  task: DS.belongsTo('task' ,{async:true}),
  subtaskdailys: DS.hasMany('subtaskdaily' ,{embedded: 'always', async:true}),

  minutestoday: DS.attr('number'),


  addtoday:false,
  todayAdded:false,









  isaddNewTodayButtonActive: Ember.computed( 'minutestoday' ,  function() {
    if( Ember.isEmpty(this.get('minutestoday'))
  ){return 'disabled';}
  else{return '';}
}),


isSubtaskDailyToday: Ember.computed( 'subtaskdailys.@each.createdat' ,  function() {

  var subtaskdailys = this.get('subtaskdailys');
  var d = new Date();

  subtaskdailys.forEach(function(subtaskdaily){

    var bool = (d.toDateString() === subtaskdaily.get('createdat').toDateString());
    return bool;
  });

}),





});
