/** Wrapper functions for retreiving data from https://blockchain.info. */

/**
 * @private
 * @param {String} query
 * @returns {Promise}
 */
function get(query) {
    if (query.includes('?')) {
        query += '&cors=true'
    } else {
        query += '?cors=true'
    }

    // return fetch(query).then((response) => {
    //     console.log('response.json() is:', response.json())
    //     response.json()
    // })
    return fetch(query)
}

export function getBitcoinPrice() {
    return get('https://blockchain.info/q/24hrprice')
}

export function getTxPerDay() {
    return get('https://blockchain.info/q/24hrtransactioncount')
}

// todo
export function getChart() {
    const options = `?timespan=2years&sampled=true`
    return get(`https://api.blockchain.info/charts/transactions-per-second${options}`)
}

export function btcAddressToHash(address) {
    return get(`https://blockchain.info/q/addresstohash/${address}`)
}
