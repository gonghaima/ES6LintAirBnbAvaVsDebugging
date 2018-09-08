const cariRule = (items, productList, discountData) => {
  let cari_num = [...items]
    .filter(c => c === discountData.cari.alias)
    .length;
  const free_cari_num = Math.floor(cari_num / discountData.cari.freeEligible);
  cari_num -= free_cari_num;
  let cari_price = [...productList].filter(c => c.sku === discountData.cari.alias).shift().price;
  return cari_num * cari_price;
}

module.exports = cariRule;