const petiRule = (items, productList, discountData) => {
  let petiNum = [...items].filter(c => c === discountData.peti.alias).length;
  petiNum -= [...items].filter(c => c === discountData.heai.alias).length;
  petiNum =
    petiNum < discountData.peti.defaultCount
      ? discountData.peti.defaultCount
      : petiNum;
  const petiPrice = [...productList]
    .filter(c => c.sku === discountData.peti.alias)
    .shift().price;
  return petiNum * petiPrice;
};

module.exports = petiRule;
