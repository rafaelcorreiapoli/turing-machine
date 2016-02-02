Template.machinesItem.helpers({
  onStateClick() {
    let template = Template.instance();
    return function(state) {
      template.selectedState.set(state._id);
    };
  },
  selectedState(e, t) {
    return States.findOne(Template.instance().selectedState.get());
  }
});

Template.machinesItem.onCreated(function() {
  this.selectedState = new ReactiveVar();
});
