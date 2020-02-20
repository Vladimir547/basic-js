const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value == null) {
      this.result.push('null');
    } else {
      this.result.push(value);
    }
    return this;
  },
  removeLink(position) {
    if (position >= this.getLength() || position < 1 || typeof position != 'number') {
      this.result=[];
      throw new Error;
    } else {
      this.result.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let str = '( '+this.result.join(' )~~( ')+' )';
    this.result = [];
    return str;
  }
};

module.exports = chainMaker;
