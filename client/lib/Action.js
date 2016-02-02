Action = class Action {
  constructor({input, output, direction, nextState}) {
    this.input = input;
    this.output = output;
    this.direction = direction;
    this.nextState = nextState;
  }

  getNextState() {
    return this.nextState;
  }
  getDirection() {
    return this.direction;
  }
  getOutput() {
    return this.output;
  }
  getInput() {
    return this.input;
  }
};
