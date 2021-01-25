const calcul = require('../calcul.js');

QUnit.module('calcul');

QUnit.test('Addition', assert => {
  assert.equal(calcul(1,'+',1), 2, 'Le calcul est incorrect !!!!');
});
QUnit.test('Soustraction', assert => {
  assert.equal(calcul(5,'-',2), 3, 'Le calcul est incorrect !!!!');
});
QUnit.test('Division', assert => {
  assert.equal(calcul(1,'/',1), 1, 'Le calcul est incorrect !!!!');
});
QUnit.test('Multiplication', assert => {
  assert.equal(calcul(9,'*',9), 81, 'Le calcul est incorrect !!!!');
});
QUnit.test('Addition supplémentaire', assert => {
  assert.equal(calcul(5,'+',4), 10, 'Le calcul est incorrect !!!!');
});