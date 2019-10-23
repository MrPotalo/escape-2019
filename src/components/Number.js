import React, { Component } from 'react';
import PropTypes from 'prop-types'
import seed from 'math-random-seed';

import '../styles/Number.css';

const configs = [
    [1, 1, 0, 1, 0, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 0, 0],
    [1, 0, 1, 1, 0, 1, 1, 0],
    [1, 0, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 0, 0],
    [1, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1, 0]
];
const BORDER_WIDTH = 2;

class Number extends Component {
    render() {
        const random = seed(this.props.seed || 'seed');
        const config = configs[this.props.value].map((val) => {
            return val * (random() > 0.5 ? 1 : 2);
        });
        
        const styleTypes = [
            null,
            BORDER_WIDTH + 'px solid white',
            BORDER_WIDTH + 'px solid black'
        ];
        const topStyle = {
            borderTop: styleTypes[config[0]],
            borderRight: styleTypes[config[1]],
            borderBottom: styleTypes[config[2]],
            borderLeft: styleTypes[config[3]]
        };
        
        const bottomStyle = {
            borderTop: styleTypes[config[4]],
            borderRight: styleTypes[config[5]],
            borderBottom: styleTypes[config[6]],
            borderLeft: styleTypes[config[7]]
        };

        return (
            <div className="number">
                <div className="numberSection top" style={topStyle}></div>
                <div className="numberSection bottom" style={bottomStyle}></div>
            </div>
        );
    }
}

Number.propTypes = {
    value: PropTypes.number.isRequired,
    seed: PropTypes.number
};

export default Number;