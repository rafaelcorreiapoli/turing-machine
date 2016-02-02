AutoForm.addHooks(['insertMachinesForm', 'insertStatesForm', 'insertActionsForm'], {
    onSuccess() {
      sAlert.success('Sucess!');
    },
    onError(formType, e) {
      sAlert.error(e.toString());
    }
});