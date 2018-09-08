import test from 'ava';
import productData from '../config/product.json';
import discountData from '../config/discount.json';

const cariRule = require('../src/pricingRules/cariRule');

const items = ['cari', 'cari'];
const threeItems = ['cari', 'cari', 'cari'];
const sixItems = ['cari', 'cari', 'cari', 'cari', 'cari', 'cari'];

test('cari rule should caculate as usual, when there are two caris', t => {
  const result = cariRule(items, productData, discountData);
  t.is(result, 219);
});
test('cari rule should give 1 item for discount, when there are three caris', t => {
  const result = cariRule(threeItems, productData, discountData);
  t.is(result, 219);
});
test('cari rule should give 2 items for discount, when there are six caris', t => {
  const result = cariRule(sixItems, productData, discountData);
  t.is(result, 438);
});
