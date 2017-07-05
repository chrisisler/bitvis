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
import Insight from './Insight'
import * as api from './api'

const DashboardViewCSS = css({
    display: 'flex'
    , flexDirection: 'row'
    , flexWrap: 'wrap'
    , justifyContent: 'center'
    // , justifyContent: 'flex-start'
    , alignContent: 'flex-start'
    , maxWidth: 1600
    , margin: '0 auto'
    , paddingTop: 24
})

export default (props) => (
    <div {...props} {...DashboardViewCSS}>
        <Insight.Text getData={api.getBitcoinPrice}  title='Price' subtitle='24 hour weighted price (in USD) from the largest exchanges' />
        <Insight.Text getData={api.getTxPerDay}  title='Transactions' subtitle='Aggregate number of confirmed Bitcoin transactions (past 24 hours)' />
        <Insight.Chart getData={()=>{}} title='Chart Title' subtitle='Chart Subtitle' />
    </div>
)
