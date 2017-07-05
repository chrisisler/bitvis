import { h, Component } from 'preact'
import { css } from 'glamor'
import { getExchangeRates } from './api'
import Highcharts from 'highcharts'

const style = {
    viewContainer: css({
        padding: 32
    })
    , chart: css({
        minHeight: 800
    })
}

const jpy_to_usd = (jpy) => jpy * 0.0088

export default class extends Component
{
    state = { chart: null }
    id = 'exchange-rates-id'

    componentDidMount() {
        // _chart(this.id)
        getExchangeRates().then((exchangeRates) => {
            const currencyCodes = Object.keys(exchangeRates) // xAxis.categories
            const delayedPrices15m = currencyCodes.map((key) => exchangeRates[key]['15m'])
            const latestPrices = currencyCodes.map((key) => jpy_to_usd(exchangeRates[key]['last']))
            const buyPrices = currencyCodes.map((key) => exchangeRates[key]['buy'])
            const sellPrices = currencyCodes.map((key) => exchangeRates[key]['sell'])
            const options = { currencyCodes, delayedPrices15m, latestPrices, buyPrices, sellPrices }
            _chart(this.id, options)
        })
    }

    render = (props, state) => (
        <div {...props} {...style.viewContainer}>
            <div id={this.id} {...style.chart}/>
        </div>
    )
}

function _chart(id, options) {
    Highcharts.chart(id, {
        chart: { type: 'column' },
        title: { text: 'Market Prices and Exchange Rates' },
        xAxis: {
            categories: options.currencyCodes,
            crosshair: true
        },
        yAxis: {
            title: {
                text: 'Price' // I think.
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
        },
        series: [{
            name: '15min Delayed Price', // 15 minutes delayed Market Price
            data: options.delayedPrices15m
        }, {
            name: 'Latest Price', // Most recent market price
            data: options.latestPrices
        }, {
            name: 'Buy', // Buy
            data: options.buyPrices
        }, {
            name: 'Sell', // Sell
            data: options.sellPrices
        }]
    })
}
