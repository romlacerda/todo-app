import React from 'react'

export default props => {
    if(props)
        return props.children
    else
        return false
}