import { h } from 'preact'
import { Link } from 'preact-router'
import { VIEWS } from './constants'
import { css } from 'glamor'
import { colors } from './constants'

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
        , paddingLeft: '1%'
        , backgroundColor: colors.globalBlue
    })
    , links: css(fullHeight, {
        display: 'flex'
        , alignItems: 'center'
        , margin: '0 auto'
        , overflow: 'hidden'
        , maxWidth: 1800
        , padding: 0
    })
    , listItem: css(fullHeight, {
        listStyleType: 'none'
    })
    , link: css(fullHeight, {
        color: 'white'
        , margin: '0 .6rem'
        , position: 'relative'
        , display: 'flex'
        , flexDirection: 'column'
        , justifyContent: 'center'
        , textDecoration: 'none'
        , fontWeight: '200'
        , fontSize: 14
    })
}

// Not a component, just maps a string to jsx.
const ViewLink = (viewName) => (
    <li {...style.listItem}>
        <Link href={`/${viewName}`} {...style.link}>
            {viewName.toUpperCase()}
        </Link>
    </li>
)

export default (props) => (
    <nav {...style.wrapper}>
        <ul {...style.links} {...props}>
            {VIEWS.map(ViewLink)}
        </ul>
    </nav>
)
