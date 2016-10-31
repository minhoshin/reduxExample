import React, { Component, PropTypes } from 'react'

const propTypes = {
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func
}

function createWarning(funcName) {
    return () => console.warn(funcName + ' is not defined')
}

const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract')
}

class Control extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
            </div>
        );
    }
}

Control.propTypes = propTypes
Control.defaultProps = defaultProps

export default Control