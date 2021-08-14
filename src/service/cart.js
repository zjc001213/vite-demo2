import axios from '../utils/axios'

export function getCart(params) {
    return axios.get('/shop-cart', {params})
}