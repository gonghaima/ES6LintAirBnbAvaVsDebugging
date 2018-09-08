const heaiRule = (items, productList, discountData) => {
  const heai_num = [...items]
    .filter(c => c === discountData.heai.alias)
    .length;
  let heai_price = [...productList].filter(c => c.sku === discountData.heai.alias).shift().price;
  return heai_num * heai_price;
}

module.exports = heaiRule;