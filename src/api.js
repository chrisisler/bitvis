/**
 * Wrapper functions for retreiving data from https://blockchain.info.
 */

const baseUrl = 'https://blockchain.info/'
const corsTrue = '?cors=true'

function get(query) {
    return fetch(baseUrl + query + corsTrue)
        .then((response) => response.json())
        .catch((err) => console.error(err))
}

/**
 * @returns {Promise.then(Number)}
 */
export function getBitcoinPrice() {
    return  get('q/24hrprice')
}

/**
 * @returns {Promise.then(Number)}
 */
export function getTxPerDay() {
    return get('q/24hrtransactioncount')
}

/**
 * Returns a promise that when fulfilled applies a function to an array of objects.
 * @see https://blockchain.info/api/exchange_rates_api
 * @returns {Promise.then(Array[Object])}
 */
export function getExchangeRates() {
    return get('ticker')
}
