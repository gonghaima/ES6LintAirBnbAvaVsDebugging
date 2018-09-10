const homiRule = (items, productList, discountData) => {
  const homiNum = [...items].filter(c => c === discountData.homi.name).length;
  const homiPrice =
    homiNum > discountData.homi.discountEligible
      ? discountData.homi.discountRate
      : productList.filter(c => c.sku === discountData.homi.name).shift().price;
  return homiNum * homiPrice;
};

module.exports = homiRule;
