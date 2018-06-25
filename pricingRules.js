import productData from "./config/product.json";
export default class PricingRules {
  constructor(){
    this.productList = JSON.parse(JSON.stringify(productData));
  }
};
