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

/**
 * Returns a promise with Object
 * {
 *     "from": "USD",
 *     "to": "SEK",
 *     "from_amount": 1,
 *     "to_amount": 6.6207
 * }
 *
 * @see https://market.mashape.com/warting/currency-converter
 * @see https://www.linkedin.com/pulse/protect-your-api-keys-using-environment-variables-nodejs-dale-corns
 * @param {String} from - A valid currency code. Example: "JPY" (Japanese Yen).
 * @param {String} fromAmount - An amount of the currency to be converted from.
 * @param {String} to - A valid currency code. Example: "USD" (United States Dollar).
 * @returns {Promise.then(Object)} - The property we care about is the `to_amount`.
 *                  convertCurrency('JPY', 506.21, 'USD').then()
 */
export function convertCurrency(from, fromAmount, to) {
    const url = 'https://currencyconverter.p.mashape.com/?from=USD&from_amount=1&to=JPY'
    const promise = fetch(url, new Headers({
            accept: 'application/json',
            'X-Mashape-Key': process.env.MashapeCurrencyCoverterKey
        }))
        .then(response => response.json())
        .then((json) => json.to_amount)
        .catch((err) => console.error(err))
    return promise
}
