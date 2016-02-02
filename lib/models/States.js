States = new Mongo.Collection('states');

Schemas.State = new SimpleSchema({
  machineId: {
    type: String
  },
  name: {
    type: String
  },
  actions: {
    type: [String],
    optional: true
  }
});

States.attachSchema(Schemas.State);
