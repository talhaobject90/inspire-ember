import Ember from 'ember';

export default Ember.Controller.extend({

  numberData:Ember.computed('tasks',function(){
    return {

      labels: this.get('tasks').mapBy('name'),
      datasets: [{
        label: "Number of Subtasks",
         fillColor: "rgba(220,220,220,0.2)",
         strokeColor: "rgba(220,220,220,1)",
         pointColor: "rgba(220,220,220,1)",
         pointStrokeColor: "#fff",
         pointHighlightFill: "#fff",
         pointHighlightStroke: "rgba(220,220,220,1)",
        data: this.get('tasks').mapBy('subtasks.length')
      }]
    };
  }),
});
