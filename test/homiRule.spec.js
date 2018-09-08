import test from 'ava';
import productData from '../config/product.json';
import discountData from '../config/discount.json';

const homiRule = require('../src/pricingRules/homiRule');

const items = ['homi'];
const twoItems = ['homi', 'homi'];
const itemsDiscountPeti = ['homi', 'homi', 'homi', 'homi', 'homi'];

test('homiRule rule should caculate as usual, when only 1 item', t => {
  const result = homiRule(items, productData, discountData);
  t.is(result, 549.99);
});

test('homiRule rule should caculate as usual, when two items', t => {
  const result = homiRule(twoItems, productData, discountData);
  t.is(result, 1099.98);
});

test('homiRule rule should give discount when over 4', t => {
  const result = homiRule(itemsDiscountPeti, productData, discountData);
  t.is(result, 2499.95);
});
