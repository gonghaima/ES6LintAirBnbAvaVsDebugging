const heaiRule = (items, productList, discountData) => {
  const heaiNum = [...items].filter(c => c === discountData.heai.alias).length;
  const heaiPrice = [...productList]
    .filter(c => c.sku === discountData.heai.alias)
    .shift().price;
  return heaiNum * heaiPrice;
};

module.exports = heaiRule;
