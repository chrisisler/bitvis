import { h, Component } from 'preact'
import { css } from 'glamor'
import { colors } from './constants'
import Highcharts from 'highcharts'

// Shared styles.
const textCenter = css({ textAlign: 'center' })
const containerCSS = css({
    minHeight: 240
    , height: 'fit-content'
    , boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)'
    , backgroundColor: 'white'
    , borderRadius: 3
    , margin: 12
    , padding: 12
})

const style = {
    textContainer: css(containerCSS, { maxWidth: 420 })
    , chartContainer: css(containerCSS, {
        width: '100%'
    })
    , title: css(textCenter, { color: colors.globalBlue, fontSize: 18 })
    , mainText: css(textCenter, {
        fontSize: 60
        , fontWeight: '200'
        , color: colors.lightBlue
    })
    , subtitle: css(textCenter, {
        color: colors.gray
        , maxWidth: '80%'
        , margin: '0 auto'
        , fontSize: 14
        , paddingBottom: 16
    })
}

class Text extends Component
{
    state = { text: '...' }

    componentDidMount() {
        this.props.getData().then((data) => {
            this.setState({ ...this.state, text: data.toLocaleString() })
        })
    }

    render = ({ title, subtitle }, { text }) => (
        <div {...style.textContainer}>
            <p {...style.title}>{title}</p>
            <p {...style.mainText}>{text}</p>
            <p {...style.subtitle}>{subtitle}</p>
        </div>
    )
}

// For generating unique chart classes.
let chartId = 0
const uniqChartClass = () =>  `chart-${chartId++}`

const getLast = (xs) => xs[xs.length - 1]

class Chart extends Component {
    id = uniqChartClass()

    //todo
    componentDidMount() {
        // this.props.getData().then((data) => {
        //     console.log('data is:', data)

        //     console.log('data.values[0].x is (timestamp):', data.values[0].x);
        //     const first = new Date(data.values[0].x).toISOString()
        //     const last = new Date(getLast(data.values).x).toISOString()

        //     console.log('first is:', first)
        //     console.log('last is:', last)

        //     const options = {
        //         title: data.unit
        //         , subtitle: data.description
        //     }
        //     renderChart(this.id, options)
        // })
    }

    render() {
        return (
            <div {...style.chartContainer}>
                <div {...style.chart} id={this.id}/>
            </div>
        )
    }
}

export default { Text, Chart }

function renderChart(id, options) {
    Highcharts.chart(id, {
        chart: { type: 'area' },
        title: { text: options.title },
        subtitle: { text: options.subtitle },
        legend: { enabled: false },
        // plotOptions: { series: { pointStart: 2010 } },
        series: [{
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }]
    })
}
