Template.actionsList.helpers({
  actions() {
    return Actions.find({stateId: Template.instance().data.stateId});
  },
  selected() {
    return Template.instance().selectedAction.get() === this._id;
  }
});
Template.actionsList.events({
  'click .select-action': function(e, t) {
    t.selectedAction.set(this._id);
    t.onClick(this);
  }
});

Template.actionsList.onCreated(function() {
  this.selectedAction = new ReactiveVar();
  this.onClick = this.data.onClick || function() {};
});
