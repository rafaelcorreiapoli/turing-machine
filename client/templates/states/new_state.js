AutoForm.hooks({
  insertStatesForm: {
    before: {
      insert(doc) {
        let templateData = this.template.data;
        doc.machineId = templateData.machineId;
        return doc;
      }
    }
  }
});
