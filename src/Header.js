import { h } from 'preact'
import { Link } from 'preact-router'
import { VIEWS } from './constants'
import { css } from 'glamor'

// Reusable css rules should be extracted into separate `css` calls.
// Todo: reduce amount of css used.
const fullHeight = css({ height: '100%' })

const style = {
    wrapper: css({
        position: 'fixed'
        , width: '100%'
        , top: 0
        , height: 60
        , padding: 0
        , backgroundColor: '#005b96'
    })
    , links: css({
        display: 'flex'
        , alignItems: 'center'
        , margin: '0 auto'
        , padding: 0
        , overflow: 'hidden'
    }, fullHeight)

    , listItem: css({
        listStyleType: 'none'
    }, fullHeight)

    , link: css({
        color: 'white'
        , margin: '0 .6rem'
        , position: 'relative'
        , display: 'flex'
        , flexDirection: 'column'
        , justifyContent: 'center'
        , textDecoration: 'none'
    }, fullHeight)
}

// Not a Preact component, just a string to jsx function.
const ViewLink = (viewName) => (
    <li {...style.listItem}>
        <Link href={`/${viewName}`} {...style.link}>
            {viewName}
        </Link>
    </li>
)

export default (props) => (
    <nav {...style.wrapper}>
        <ul {...style.links} {...props}>
            {Object.values(VIEWS).map(ViewLink)}
        </ul>
    </nav>
)
