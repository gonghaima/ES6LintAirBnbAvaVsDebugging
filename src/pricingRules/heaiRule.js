const heaiRule = (items, productList, discountData) => {
  const heaiNum = [...items].filter(c => c === discountData.heai.name).length;
  const heaiPrice = [...productList]
    .filter(c => c.sku === discountData.heai.name)
    .shift().price;
  return heaiNum * heaiPrice;
};

module.exports = heaiRule;
