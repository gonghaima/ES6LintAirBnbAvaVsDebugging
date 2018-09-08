const homiRule = (items, productList, discountData) => {
  let productListUpdate = [...productList];
    const homi_num = [...items].filter(c => c === discountData.homi.alias).length;
    if (homi_num > discountData.homi.discountEligible) {
      productListUpdate = productListUpdate.map((c) => {
        if (c.sku === discountData.homi.alias) c.price = discountData.homi.discountRate;
        return c;
      });
    }
    let homi_price = [...productList].filter(c => c.sku === discountData.homi.alias).shift().price;
    return homi_num * homi_price;
}

module.exports = homiRule;