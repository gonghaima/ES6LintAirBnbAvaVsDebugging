const petiRule = (items, productList, discountData) => {
  let petiNum = [...items].filter(c => c === discountData.peti.name).length;
  petiNum -= [...items].filter(c => c === discountData.heai.name).length;
  petiNum =
    petiNum < discountData.peti.defaultCount
      ? discountData.peti.defaultCount
      : petiNum;
  const petiPrice = [...productList]
    .filter(c => c.sku === discountData.peti.name)
    .shift().price;
  return petiNum * petiPrice;
};

module.exports = petiRule;
