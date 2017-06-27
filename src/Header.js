import { h } from 'preact'
import { Link } from 'preact-router'
import { VIEWS } from './constants'
// import { css } from 'glamor'
// import css from './Header.css'

const css = {
    wrapper: {
        position: 'fixed',
        width: '100%',
        top: 0,
        height: 60,
        padding: 0,
        backgroundColor: '#005b96'
    },
    links: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        margin: '0 auto',
        overflow: 'hidden'
    },
    listItem: {
        height: '100%',
        listStyleType: 'none'
    },
    link: {
        color: 'white',
        margin: '0 .6rem',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        textDecoration: 'none',
    },
    'link:hover': {
        color: 'red'
    }
}

// Not a Preact component, just a string to jsx function.
const ViewLink = (viewName) => (
    <li style={css.listItem}>
        <Link href={`/${viewName}`} style={css.link}>
            {viewName}
        </Link>
    </li>
)

export default (props) => (
    <nav style={css.wrapper}>
        <ul style={css.links}>
            {Object.values(VIEWS).map(ViewLink)}
        </ul>
    </nav>
)
