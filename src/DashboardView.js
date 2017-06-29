/**
 * The DashboardView is a WithHeader route which acts as a container for
 * various Insight components. The DashboardView allows for toggling certain
 * Insight components visible or not.
 *
 * An Insight component is an interesting piece of data displayed in a neat
 * little box. It can have icons (On/Off), text (Strings, Numbers), charts, etc.
 *
 * References {
 *     https://betalist.com/startups/homeflow
 *     http://homeflow.io/?utm_source=BetaList
 * }
 */

import { h } from 'preact'
import { css } from 'glamor'

// TODO: Export this color to ./constants.js
const lightBlueColor = '#0089e3' // pretty good

const InsightCSS = {
    container: css({
        minHeight: 260
        , height: 'fit-content'
        , width: 360
        , boxShadow: '0 2px 2px rgba(0, 0, 0, 0.2)'
        , borderRadius: 3
        , backgroundColor: 'white'
        , margin: 12
    , })
    , title: css({
        color: '#005b96'
        , fontSize: 18
        , textAlign: 'center'
        , margin: 16
    , })
    , text: css({
        fontSize: 68
        , fontWeight: 'lighter'
        , color: lightBlueColor
        , textAlign: 'center'
        , paddingTop: -12
    })
}
const Insight = ({ type, title, subtitle, ...props }) => (
    <div {...InsightCSS.container}>
        <p {...InsightCSS.title}>{title}</p>
        {
            type === 'text'
                ? ( <p {...InsightCSS.text}>{props.text}</p> )
                : null // todo: make charts work here (highcharts)
        }
    </div>
)


const DashboardViewCSS = css({
    display: 'flex'
    , flexDirection: 'row'
    , flexWrap: 'wrap'
    , justifyContent: 'center'
    , maxWidth: 1600
    , margin: '0 auto'
})
export default (props) => (
    <div {...props} {...DashboardViewCSS}>
        <Insight type='text' title='Price' text='2595' subtitle='US Dollars' />
        <Insight type='text' title='Transactions' text='277892' subtitle='' />

        <Insight type='text' title='Price' text='2595' subtitle='US Dollars' />
        <Insight type='text' title='Transactions' text='277892' subtitle='' />

        <Insight type='text' title='Price' text='2595' subtitle='US Dollars' />
        <Insight type='text' title='Transactions' text='277892' subtitle='' />
    </div>
)
