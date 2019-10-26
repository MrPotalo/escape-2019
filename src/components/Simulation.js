import React, { Component } from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash';

import '../styles/Simulation.css';

class Simulation extends Component {
    constructor(props) {
        super(props);
        const totalBalls = _.reduce(this.props.balls, (count, curr) => {
            return count + curr;
        });
        const tmp = _.range(0, totalBalls * 10 + 1, 10);
        const delays = _.shuffle(tmp);
        this.state = {
            time: 0,
            balls: _.reduce(this.props.balls, (arr, count, color) => {
                for (let i = 0; i < count; i++) {
                    arr.push({ position: { x: 200 + Math.random() * 500, y: -50 }, velocity: { x: (Math.random() - 0.5) * 5, y: 0 }, color, delay: delays[arr.length] });
                }
                return arr;
            }, [])
        };
    }

    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState((oldState) => {
                let newState = _.clone(oldState);
                newState.time++;
                _.forEach(newState.balls, (ball) => {
                    if (ball.delay > newState.time) {
                        return;
                    }
                    ball.velocity.y += 0.3;
                    ball.position.x += ball.velocity.x;
                    ball.position.y += ball.velocity.y;
                });
                return newState;
            })
        }, 10);
    }

    render() {
        return (
            _.map(this.state.balls, (ball, i) => {
                return <div key={i} className="ball" style={{
                    backgroundColor: ball.color,
                    left: ball.position.x,
                    top: ball.position.y
                }} />
            })
        );
    }
}

Simulation.propTypes = {
    balls: PropTypes.any
};

export default Simulation;