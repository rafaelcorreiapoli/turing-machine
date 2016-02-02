MOVE_RIGHT = 'R';
MOVE_LEFT = 'L';
BLANK = 'B';
HEAD_INDICATOR = '>';
BLANK_REPRESENTATION_NUMBER = 10;
TM = class TM {
  //  initialState
  //  currentState
  //  finalState
  //  input alphabet
  //  tape alphabet
  constructor({
    name, initialState, finalState, inputAlphabet, tapeAlphabet, infiniteLeft, infiniteRight, states = [], finishCallback = function() {}
  }) {
    this.name = name;
    this.initialState = initialState;
    this.finalState = finalState;
    this.inputAlphabet = inputAlphabet;
    this.tapeAlphabet = tapeAlphabet;
    this.infiniteLeft = infiniteLeft;
    this.infiniteRight = infiniteRight;
    this.states = states;
    this.finishCallback = finishCallback
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
  _setTape(tape) {
    this.tape = tape;
  }
  getTape() {
    return this.tape;
  }
  addState(...states) {
    _.each(states, (state) => {
      this.states.push(state);
    });
  }
  removeState(index) {
    this.states.splice(index, 1);
  }
  moveLeft() {
    if (this.head > 0) {
      this.head--;
    }
  }
  moveRight() {
    if (this.head < this.tape.length) {
      this.head++;
    }
  }
  moveTape(dir) {
    if (dir === MOVE_LEFT) {
      this.moveLeft();
    } else if (dir === MOVE_RIGHT) {
      this.moveRight();
    }
  }

  getTapeRepresentation(withHead = true) {
    let str = withHead ?
      this.tape.slice(0, this.head) + HEAD_INDICATOR + this.tape.slice(this.head, this.head.length) : this.tape;
    let prefix = this.infiniteLeft ? '...B' : '';
    let sufix = this.infiniteRight ? 'B...' : '';
    return prefix + str + sufix;
  }


  init(tape) {
    console.log(this.initialState);
    this._setTape(tape);
    this.head = 0;
    this.currentState = this.initialState;
  }
  getTapeAtHead() {
    // TODO: infinite both direcitons
    if (this.head > this.tape.length - 1 || this.head < 0) {
      return BLANK;
    }

    return this.tape[this.head];
  }
  writeHead(char) {
    this.tape = this.tape.slice(0, this.head) +  char + this.tape.slice(this.head + 1, this.tape.length);
  }
  setCurrentState(state) {
    this.currentState = state;
  }
  getCurrentState() {
    return this.currentState;
  }
  checkFinalState() {
    return this.currentState === this.finalState;
  }
  readHead() {
    // get current tape input at head
    if (this.checkFinalState()) {
      return this.finishCallback(this);
    }

    let currentInput = this.getTapeAtHead();
    console.log('currentInput: ' + currentInput);
    if (currentInput) {
      //  get the action that will handle it on the currentState
      let currentAction = this.getCurrentState().getActionByInput(currentInput);

      if (currentAction) {
        let output = currentAction.getOutput();
        let direction = currentAction.getDirection();
        let nextState = currentAction.getNextState();
        this.writeHead(output);
        this.moveTape(direction);
        this.setCurrentState(nextState);
      } else {
        throw new Error('no current action');
      }
    } else {
      throw new Error('no current input');
    }
  }

  printMe() {
    console.log(`CurrentState: ${this.getCurrentState().getName()}`);
    console.log(`Tape: ${this.getTapeRepresentation(true)}`);
    console.log('-------------------------------------------');
  }
};
