import { h } from 'preact'
// import { css } from 'glamor'
import * as api from './api'

export default (props) => (
    <div {...props}>
        tools
        todo
    </div>
)

const mockAddress = '1EzwoHtiXB4iFwedPr49iywjZn2nnekhoj'
api.btcAddressToHash(mockAddress).then((data) => {
    console.log('data is:', data);
})
