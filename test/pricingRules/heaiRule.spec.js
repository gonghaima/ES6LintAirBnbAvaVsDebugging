import test from 'ava';
import productData from '../../config/product.json';
import discountData from '../mockData/mappedDiscount';

const heaiRule = require('../../src/pricingRules/heaiRule');

const items = ['heai'];
const twoItems = ['heai', 'peti'];
const threeItems = ['heai', 'peti', 'peti'];

test('heai rule should caculate as usual', t => {
  const result = heaiRule(items, productData, discountData);
  t.is(result, 1399.99);
});

test('heai rule should only taking care health item', t => {
  const result = heaiRule(twoItems, productData, discountData);
  t.is(result, 1399.99);
});

test('heai rule should only taking care health item', t => {
  const result = heaiRule(threeItems, productData, discountData);
  t.is(result, 1399.99);
});
