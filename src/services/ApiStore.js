// import axios from 'axios'
// export const instance = axios.create({
//   baseURL: 'http://ecommerce.hungvu.net',
//   // timeout: 1000,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//   },
// });
// export const getProduct = (params) => instance.get('/get-products', params)


import axios from 'axios'
export const instance = axios.create({
  baseURL: 'https://api.thecoffeehouse.com/api',
  // timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});
export const getStore = (params) => instance.get('/get_all_store?limit=3', params)