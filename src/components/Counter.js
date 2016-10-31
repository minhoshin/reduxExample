import React, { Component } from 'react';

import Value from '../containers/Value';
import Control from '../containers/Control';
import { connect } from 'react-redux';
// import { connect, bindActionCreators } from 'react-redux';

import * as actions from '../actions';

const mapStateToProps = (state) => {
    return {
        number: state.counter.number,
        name: state.counter.name
    };
};

const mapDispatchToProps = (dispatch) => {
    //return bindActionCreators(actions, dispatch);
    return {
        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())}
    };
};

class Counter extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div>
                <Value number={this.props.number}/>
                {this.props.name}
                <Control
                    onPlus={this.props.handleIncrement}
                    onSubtract={this.props.handleDecrement}
                />
            </div>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);