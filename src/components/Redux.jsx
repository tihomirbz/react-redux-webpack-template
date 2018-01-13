import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { increase, decrease } from '../redux/actions/countActions.js';

export class Redux extends Component {
    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
    }
    handleIncrease() {
        this.props.actions.increase();
    }
    handleDecrease() {
        this.props.actions.decrease();
    }
    render() {
        return (
            <div className='body'>
                <h1>Redux-connected component</h1>
                <p> This component shows simplest way of connecting a react component to a redux store</p>
                <p> Increase/Decrease buttons trigger actions updating redux's store</p>
                <p> Value retrieved and shown from redux store</p>
                <div id='redux-sample'>
                    <button onClick={ this.handleIncrease }>Increase</button>
                    <button onClick={ this.handleDecrease }>Decrease</button>
                    <span><strong>Counter value:</strong> { this.props.counter }</span>
                </div>
            </div>
        );
    }
}

Redux.propTypes = {
    counter: PropTypes.number.isRequired,
    actions: PropTypes.shape({
        increase: PropTypes.func.isRequired,
        decrease: PropTypes.func.isRequired
    })
}

const mapStateToProps = state => {
    return {
        counter: state.count.value
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({ increase, decrease }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
