Machines = new Mongo.Collection('machine');

Schemas.Machine = new SimpleSchema({
  name: {
    type: String
  },
  initialState: {
    type: String,
    optional: true
  },
  finalState: {
    type: String,
    optional: true
  },
  inputAlphabet: {
    type: [String]
  },
  tapeAlphabet: {
    type: [String]
  },
  infiniteLeft: {
    type: Boolean
  },
  infiniteRight: {
    type: Boolean
  },
  states: {
    type: [String],
    optional: true
  },
});


Machines.attachSchema(Schemas.Machine);
