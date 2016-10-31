import React, { Component } from 'react';

import Value from '../containers/Value';
import Control from '../containers/Control';
import { connect } from 'react-redux';
// import { connect, bindActionCreators } from 'react-redux';

import * as actions from '../actions';

class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                <Value number={this.props.number}/>
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        number: state.counter.number
    };
};

const mapDispatchToProps = (dispatch) => {
    //return bindActionCreators(actions, dispatch);
    return {
        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())}
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);