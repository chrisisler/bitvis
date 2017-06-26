// Docs: https://www.highcharts.com/docs/chart-and-series-types/chart-types
// Todo: convert from bitocin price idnex to real dollars?

import { h, render, Component } from 'preact'
import Highcharts from 'highcharts'

const renderChart = (coins) => {
    const coinNames = coins.map((c) => c.name)
    const coinPrices = coins.map((c) => c.data[0])
    console.log('coinPrices is:', coinPrices);

    Highcharts.chart('container', {
        chart: { type: 'column' },
        title: { text: 'Various CryptoCoins' },
        xAxis: { categories: coinNames },
        yAxis: { title: { text: 'Bitcoin Price Index (1 = $2,575)' } },
        // series: coins
        series: [{
            name: 'foo',
            data: coinPrices
        }]
    })
}

// const renderChartFixed = () => {
//     Highcharts.chart('container', {
//         chart: { type: 'column' },
//         title: { text: 'bitcoin various prices' },
//         yAxis: { title: { text: 'price_btc' } },
//         //mock data
//         series: [{
//             name: 'bitcoin',
//             data: [ 3.02 ]
//         }]
//     })
// }

class Div extends Component
{
    componentDidMount() {
        fetch('http://api.cryptocoincharts.info/listCoins')
        .then(res => res.json())
        .then((data) => {
            const coins = data
                .slice(1, 11)
                .map(({ name, price_btc }) => ({ name, data: [ price_btc ] }))
            renderChart(coins)
        })
        .catch(e => {
            console.error(e);
        })
    }

    render = () => <div id='container' style={{ height: '80vh' }}/>
}

render(<Div />, document.body)
