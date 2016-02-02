/*Template.main.onRendered(function() {
  let state0 = new State({
    name: 's0'
  });
  let statePar = new State({
    name: 'q1'
  });
  let stateImpar = new State({
    name: 'q2'
  });
  let stateF = new State({
    name: 'qF'
  });

  let action0$ = new Action({
    input: '$',
    output: '$',
    direction: MOVE_RIGHT,
    nextState: statePar
  });

  let actionPar0 = new Action({
    input: '0',
    output: '0',
    direction: MOVE_RIGHT,
    nextState: statePar
  });
  let actionPar1 = new Action({
    input: '1',
    output: '1',
    direction: MOVE_RIGHT,
    nextState: stateImpar
  });

  let actionParB = new Action({
    input: BLANK,
    output: '0', // 0 means par
    direction: MOVE_RIGHT,
    nextState: stateF
  });

  let actionImp0 = new Action({
    input: '0',
    output: '0',
    direction: MOVE_RIGHT,
    nextState: stateImpar
  });

  let actionImp1 = new Action({
    input: '1',
    output: '1',
    direction: MOVE_RIGHT,
    nextState: statePar
  });

  let actionImpB = new Action({
    input: BLANK,
    output: '1', // 1 means impar
    direction: MOVE_RIGHT,
    nextState: stateF
  });

  state0.addAction(action0$);
  statePar.addAction(actionPar0, actionParB, actionPar1);
  stateImpar.addAction(actionImp0, actionImpB, actionImp1);

  function finishCallback(machine) {
    console.log('finished:');
    console.log(machine.getTapeRepresentation());
  }


  let tm = new TM({
    name: 'HAO',
    initialState: state0,
    finalState: stateF,
    inputAlphabet: ['0', '1', '$', 'B'],
    tapeAlphabet: ['0', '1', '$', 'B'],
    finishCallback: finishCallback,
    infiniteRight: false,
    infiniteLeft: false
  });

  let tape = '$10101';  //$01011
  tm.addState(state0, statePar, stateImpar);

});



Template.main.helpers({
  TMs() {
    return TMs.find();
  }
});
*/