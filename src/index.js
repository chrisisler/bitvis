import { h, render } from 'preact'
import { Router } from 'preact-router'
import { css } from 'glamor'
import './normalize.css'
import Header from './Header'
import DashboardView from './DashboardView'
import ToolsView from './ToolsView'

const WithHeaderCSS = css({ marginTop: 60, height: 'calc(100vh - 60px)' })

const WithHeader = ({ View }) => (
    <div>
        <Header />
        <View {...WithHeaderCSS} />
    </div>
)

const AppCSS = css({
    fontFamily: 'sans-serif'
    , fontSize: 18
    , letterSpacing: 0.8
    , height: '100%'
    , width: '100%'
    , backgroundColor: '#eee'
})

const App = () => (
    <div {...AppCSS}>
        <Router>
            <WithHeader path='/' default View={DashboardView} />
            <WithHeader path='/tools' View={ToolsView} />
        </Router>
    </div>
)

render(<App />, document.body)
