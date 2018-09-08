// export const petiRule = (items, productList) => {
//   let peti_num = [...items].filter(c => c === 'peti').length;
//     peti_num -= ([...items].filter(c => c === 'heai').length);
//     peti_num = (peti_num < 0) ? 0 : peti_num;
//     let peti_price = [...productList].filter(c => c.sku === 'peti')[0].price; 
//     return peti_num * peti_price;
// }



const petiRule = (items, productList) => {
  let peti_num =  [...items].filter(c => c === 'peti').length;
    peti_num -= ([...items].filter(c => c === 'heai').length);
    peti_num = (peti_num < 0) ? 0 : peti_num;
    let peti_price = [...productList].filter(c => c.sku === 'peti')[0].price; 
    return peti_num * peti_price;
}

module.exports = petiRule;