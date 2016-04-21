import Ember from 'ember';



export default Ember.Controller.extend(Ember.Evented,{

session: Ember.inject.service('session'),


  isLoginButtonDisabled: Ember.computed('email', function() {
    return Ember.isEmpty(this.get('email'));
  }),

  actions: {
    authenticate(){
      var controller = this;
      // controller.send('loading');

        this.get('session').authenticate('authenticator:devise', this.get('email'), this.get('password')).then(function(){
// controller.send('finished');
        }).catch(function(){

          controller.notifications.addNotification({
            message: 'Username or password is incorrect!' ,
            type: 'error',
            autoClear: true
          });
        });
    }
  }
});
