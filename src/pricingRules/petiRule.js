const petiRule = (items, productList, discountData) => {
  let peti_num =  [...items].filter(c => c === discountData.peti.alias).length;
    peti_num -= ([...items].filter(c => c === discountData.heai.alias).length);
    peti_num = (peti_num < discountData.peti.defaultCount) ? discountData.peti.defaultCount : peti_num;
    let peti_price = [...productList].filter(c => c.sku === discountData.peti.alias).shift().price; 
    return peti_num * peti_price;
}

module.exports = petiRule;