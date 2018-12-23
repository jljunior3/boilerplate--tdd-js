/* eslint-disable no-console */
const expect = require('chai').expect;

describe('Main 1', () => {
  let arr;
  // roda uma vez, antes do bloco
  before(() => {
    // eslint-disable-next-line no-console
    // console.log('before');
  });

  // roda uma vez, depois do bloco
  after(() => {
    // console.log('after');
  });

  // roda todas as vezes, antes de CADA bloco
  beforeEach(() => {
    // console.log('beforeEach');
    arr = [1, 2, 3];
  });

  // roda todas as vezes, depois de CADA bloco
  afterEach(() => {
    // console.log('afterEach');
  });

  // testar tipos ou se existe (smoke test) - teste mais simples
  it('should be an array', () => {
    expect(arr).to.be.a('array');
  });

  // roda uma vez, antes do bloco
  it('should have a size of 4 when push another value to the array', () => {
    arr.push(4); // 4
    expect(arr).to.have.lengthOf(4);
  });

  it('should return true when pop 3 from the array', () => {
    expect(arr.pop() === 3).to.be.true;
  });

  // roda uma vez, antes do bloco
  it('should remove the value 3 when use pop in the array', () => {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  // roda uma vez, antes do bloco
  it('should have a size of 2 when pop a value from the array', () => {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });
});
