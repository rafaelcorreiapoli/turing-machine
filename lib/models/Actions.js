Actions = new Mongo.Collection('actions');


Schemas.Action = new SimpleSchema({
  input: {
    type: String,
  },
  machineId: {
    type: String
  },
  stateId: {
    type: String
  },
  output: {
    type: String,
    optional: true
  },
  direction: {
    type: String,
    allowedValues: [Values.DIRECTION_RIGHT, Values.DIRECTION_LEFT],
    autoform: {
      options() {
        return [
          {
            value: Values.DIRECTION_RIGHT,
            label: 'Right'
          },
          {
            value: Values.DIRECTION_LEFT,
            label: 'Left'
          }
        ];
      }
    }
  },
  nextStateId: {
    type: String
  }
});

Actions.attachSchema(Schemas.Action);

Actions.helpers({
  state() {
      return States.findOne(this.stateId);
    },
    nextState() {
      return States.findOne(this.nextStateId);
    },
});
