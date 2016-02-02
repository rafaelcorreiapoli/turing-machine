AutoForm.hooks({
  insertActionsForm: {
    before: {
      insert(doc) {
        let templateData = this.template.data;
        console.log(templateData);
        doc.stateId = templateData.stateId;
        doc.machineId = templateData.machineId;
        console.log(doc);
        return doc;
      }
    }
  }
});

Template.newAction.helpers({
  alphabet() {
      let machine = Machines.findOne(Template.instance().data.machineId);
      if (machine && _.isArray(machine.inputAlphabet)) {
        return machine.inputAlphabet.map(function(character) {
          return {
            value: character,
            label: character
          };
        });
      }
    },
    nextStates() {
      return States.find({
        machineId: Template.instance().data.machineId
      }).map(function(state) {
        return {
          value: state._id,
          label: state.name
        };
      });
    }
});
