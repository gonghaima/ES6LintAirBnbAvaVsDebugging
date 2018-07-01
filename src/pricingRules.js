import productData from "../config/product.json";
export default class PricingRules {
  constructor() {
    this.productList = JSON.parse(JSON.stringify(productData));
  }

  total(items) {
    /*** cari */
    let cari_num = [...items].filter(c => c === 'cari').length;
    const free_cari_num = Math.floor(cari_num / 3);
    cari_num -= free_cari_num;
    let cari_price = [...this.productList].filter(c => c.sku === 'cari')[0].price;

    /*** homi */
    let productListUpdate = [...this.productList];
    const homi_num = [...items].filter(c => c === 'homi').length;
    if (homi_num > 4) {
      productListUpdate = productListUpdate.map((c) => {
        if (c.sku === 'homi') c.price = 499.99;
        return c;
      });
    }
    let homi_price = [...this.productList].filter(c => c.sku === 'homi')[0].price;

    /*** heai */
    const heai_num = [...items].filter(c => c === 'heai').length;
    let heai_price = [...this.productList].filter(c => c.sku === 'heai')[0].price;


    /*** homi */
    let peti_num = [...items].filter(c => c === 'peti').length;
    peti_num -= heai_num;
    peti_num = (peti_num < 0) ? 0 : peti_num;
    let peti_price = [...this.productList].filter(c => c.sku === 'peti')[0].price;

    let total = (cari_num * cari_price) + (homi_num * homi_price) + (heai_num * heai_price) + (peti_num * peti_price);

    return total;
  }
};