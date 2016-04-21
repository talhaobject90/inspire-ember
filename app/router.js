import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('dashboard', {path:'/'}, function() {
    this.route('tasks', function() {
      this.route('task' ,{ path:':id'});
      this.route('new');
    });
  });



});

export default Router;
