import { h, render } from 'preact'
import { Router } from 'preact-router'
import './normalize.css'
import Header from './Header'

const WithHeader = ({ View }) => (
    <div>
        <Header />
        <View style={{ marginTop: 60 }} />
    </div>
)

const DashboardView = (props) => <h1 {...props}>DashboardView</h1>

const FakeView = (props) => <h1 {...props}>FakeView</h1>

const css = {
    fontFamily: 'sans-serif',
    fontSize: 16,
    letterSpacing: 0.6
}

const App = () => (
    <div style={css}>
        <Router>
            <WithHeader path='/' default View={DashboardView} />
            <WithHeader path='/fakeview' View={FakeView} />
        </Router>
    </div>
)

render(<App />, document.body)
