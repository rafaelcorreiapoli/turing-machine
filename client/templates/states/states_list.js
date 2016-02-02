Template.statesList.helpers({
  states() {
    return States.find({machineId: Template.instance().data.machineId});
  },
  selected() {
    return Template.instance().selectedState.get() === this._id;
  }
});
Template.statesList.events({
  'click .select-state': function(e, t) {
    t.selectedState.set(this._id);
    t.onClick(this);
  }
});

Template.statesList.onCreated(function() {
  this.selectedState = new ReactiveVar();
  this.onClick = this.data.onClick || function() {};
});
