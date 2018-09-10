const cariRule = (items, productList, discountData) => {
  let cariNum = [...items].filter(c => c === discountData.cari.name).length;
  const freeCariNum = Math.floor(cariNum / discountData.cari.freeEligible);
  cariNum -= freeCariNum;
  const cariPrice = [...productList]
    .filter(c => c.sku === discountData.cari.name)
    .shift().price;
  return cariNum * cariPrice;
};

module.exports = cariRule;
