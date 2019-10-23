import React from 'react';
import PropTypes from 'prop-types'

class Lightswitch extends React.Component {
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
            <input type="checkbox" value="Hello" onClick={this.clicked} checked={this.state.checked} />
        );
    }
}

Lightswitch.propTypes = {
    onChange: PropTypes.func
};

export default Lightswitch;