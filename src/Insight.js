import { h, Component } from 'preact'
import { css } from 'glamor'
import { colors } from './constants'
import Highcharts from 'highcharts'

// For generating unique chart classes.
let chartId = 0
const uniqChartClass = () =>  `chart-${chartId++}`

// Styles shared between both Text Insights and Chart Insights.
const containerCSS = css({
    minHeight: 260
    , minWidth: 360
    , height: 'fit-content'
    , width: 'fit-content'
    , boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)'
    , borderRadius: 3
    , backgroundColor: 'white'
    , margin: '24px 12px'
})

const style = {
    textContainer: css(containerCSS, {
        maxWidth: 420
        , padding: '0 24px'
        , })
    , title: css({
        color: colors.globalBlue
        , fontSize: 20
        , textAlign: 'center'
        , margin: '32px 0 36px 0'
        , })
    , text: css({
        fontSize: 68
        , fontWeight: '200'
        , color: colors.lightBlue
        , textAlign: 'center'
        , paddingTop: -12
        , })
    , subtitle: css({
        textAlign: 'center'
        , color: colors.gray
        , maxWidth: '80%'
        , margin: '0 auto'
        , paddingBottom: 22
        , fontSize: 16
        , })
    , chartContainer: css(containerCSS, {
        width: '100%'
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
            <p {...style.text}>{text}</p>
            <p {...style.subtitle}>{subtitle}</p>
        </div>
    )
}

// todo: make charts work here (highcharts)
class Chart extends Component
{
    // state = { chart: null }
    id = uniqChartClass()

    componentDidMount() {
        _chart(this.id, this.props.title)
    }

    render = ({ title, subtitle }) => (
        <div {...style.chartContainer}>
            <div {...style.chart} id={this.id}/>
            <p {...style.subtitle}>{subtitle}</p>
        </div>
    )
}

export default { Text, Chart }

function _chart(id, title) {
    Highcharts.chart(id, {
        title: { text: title },
        yAxis: {
            title: {
                text: 'Number of Employees'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                pointStart: 2010
            }
        },
        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }]
    })
}

