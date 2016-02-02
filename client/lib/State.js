State = class State {
  constructor({name, actions = []}) {
    this.name = name;
    this.actions = actions;
  }

  addAction(...actions) {
    _.each(actions, (action) => {
      this.actions.push(action);
    });
  }

  removeAction(index) {
    this.actions.splice(index, 1);
  }

  getName() {
    return this.name;
  }

  getActionByInput(input) {
    return _.find(this.actions, function(action) {
      return action.input === input;
    }) || false;
  }


};
