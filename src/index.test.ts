import { numeralConvert, numeralToNum } from '.';
import * as chai from 'chai';
const should = chai.should();

describe('Should convert to roman numerals', () => {
  it('1 returns I', () => {
    should.equal('I', numeralConvert(1));
  });
  it('5 returns V', () => {
    should.equal('V', numeralConvert(5));
  });
  it('3 returns III', () => {
    should.equal('III', numeralConvert(3));
  });
  it('4 returns IV', () => {
    should.equal('IV', numeralConvert(4));
  });
  it('9 returns IX', () => {
    should.equal('IX', numeralConvert(9));
  });
  it('39 returns XXXIX', () => {
    should.equal('XXXIX', numeralConvert(39));
  });
  it('246 returns CCXLVI', () => {
    should.equal('CCXLVI', numeralConvert(246));
  });
  it('789 returns DCCLXXXIX', () => {
    should.equal('DCCLXXXIX', numeralConvert(789));
  });
  it('2421 returns MMCDXXI', () => {
    should.equal('MMCDXXI', numeralConvert(2421));
  });
});

describe('Should convert to arabic numbers', () => {
  it('I returns 1', () => {
    should.equal(1, numeralToNum('I'));
  });
  it('V returns 5', () => {
    should.equal(5, numeralToNum('V'));
  });
  it('III returns 3', () => {
    should.equal(3, numeralToNum('III'));
  });
  it('IV returns 4', () => {
    should.equal(4, numeralToNum('IV'));
  });
  it('IX returns 9', () => {
    should.equal(9, numeralToNum('IX'));
  });
  it('XXXIX returns 39', () => {
    should.equal(39, numeralToNum('XXXIX'));
  });
  it('CCXLVI returns 246', () => {
    should.equal(246, numeralToNum('CCXLVI'));
  });
  it('DCCLXXXIX returns 789', () => {
    should.equal(789, numeralToNum('DCCLXXXIX'));
  });
  it('2421 returns MMCDXXI', () => {
    should.equal(2421, numeralToNum('MMCDXXI'));
  });
});
