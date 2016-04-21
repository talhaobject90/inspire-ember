import DS from 'ember-data';



export default DS.Model.extend({


  name: DS.attr('string'),
  timespend: DS.attr('number'),
  progress: DS.attr('number'),
  subtask: DS.belongsTo('subtask' ,{async:true}),
  createdat: DS.attr('date')



});
