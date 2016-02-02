FlowRouter.route('/', {
  action() {
    BlazeLayout.render('mainLayout', {main: 'home'});
  }
})

FlowRouter.route('/new-machine', {
  action() {
    BlazeLayout.render('mainLayout', {main: 'newMachine'});
  }
})

FlowRouter.route('/machine-list', {
  action() {
    BlazeLayout.render('mainLayout', {main: 'machineList'});
  }
})