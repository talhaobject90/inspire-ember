import Ember from 'ember';

export default Ember.Controller.extend({


  numberData:Ember.computed('task',function(){

// console.log(this.get('task.subtasks').mapBy('name'));

var task = this.get('task');
var subtasks = task.get('subtasks');
subtasks.forEach(function(subtask){

console.log(JSON.stringify(subtask));

});
    return {


      labels: this.get('task').get('subtasks').mapBy('name'),

      datasets: [{
        label: "Number of Subtasks",
         fillColor: "rgba(220,220,220,0.2)",
         strokeColor: "rgba(220,220,220,1)",
         pointColor: "rgba(220,220,220,1)",
         pointStrokeColor: "#fff",
         pointHighlightFill: "#fff",
         pointHighlightStroke: "rgba(220,220,220,1)",





        data:  this.get('task').get('subtasks').mapBy('progress')
      }]




    };
  }),







  actions:{



    addToday:function(subtask){
      subtask.toggleProperty('addtoday');
    },


    addNewToday:function(subtask){
      var controller = this;
      var subtaskProgress =  subtask.get('progress');




      var newSubtaskdaily = this.store.createRecord('subtaskdaily',{
        timespend: subtask.get('minutestoday'),
        progress: subtaskProgress,
        subtask: subtask
      });

      newSubtaskdaily.save().then(function(){
        subtask.set('progress',subtaskProgress);
        subtask.save();
        subtask.set('addtoday', false);
      }).catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });

    },



    addNewTask: function(task){
      var controller = this;

      var newSubTask = this.store.createRecord('subtask',{
        name:'Task Name',
        task: task,
        estdhours: 0,
        progress: 0
      });

      newSubTask.save().catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });
    },



    deleteSubtaskDaily: function(subtask){
      var controller = this;
      subtask.destroyRecord().catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });
    },


    saveSubtasks: function(contentEditable, event){
      var controller = this;
      var subTasks = this.get('task').get('subtasks');
      subTasks.forEach(function(subtask){
        subtask.save().catch(function(){
          controller.notifications.addNotification({
            message: 'Sorry, cant save at the moment !' ,
            type: 'error',
            autoClear: true
          });
        });
      });
      event.preventDefault();
      contentEditable.element.blur();
      window.getSelection().removeAllRanges();
    },


  }
});
