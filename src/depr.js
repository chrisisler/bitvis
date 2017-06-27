import { h, render, Component } from 'preact'
import Highcharts from 'highcharts'

function renderChartFixed() {
    Highcharts.chart('chart', {
    })
}

function fetchWrap(url, fn) {
    fetch(url)
        .then(res => res.json())
        .then(fn)
        .catch(e => console.error(e))
}

class Chart extends Component
{
    componentDidMount() {
        const url = 'https://blockchain.info/q/getblockcount'
        fetchWrap(url, (data) => {
            console.log(data);
        })
    }

    render = () => <div id='chart' style={{ height: '80vh' }}/>
}

render(<Chart />, document.body)
