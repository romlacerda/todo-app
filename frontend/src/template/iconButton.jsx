import React from 'react'
import Helper from '../utils/helper'

export default props => (
    <Helper test={!props.hide}>
        <button className={'btn btn-' + props.style} onClick={props.onClick}>
            <i className={'fa fa-' + props.icon}></i>
        </button>
    </Helper>
)