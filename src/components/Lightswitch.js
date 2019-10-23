import React, { Component } from 'react';
import PropTypes from 'prop-types'

import '../styles/Lightswitch.css';

class Lightswitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    clicked = () => {
        this.setState((oldState) => {
            this.props.onChange(!oldState.checked);
            return {
                checked: !oldState.checked
            };
        });
    }

    render() {
        return (
            <div className="lightswitch" onClick={this.clicked}></div>
        );
    }
}

Lightswitch.propTypes = {
    onChange: PropTypes.func
};

export default Lightswitch;