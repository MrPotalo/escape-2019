import React, { Component } from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash';

import '../styles/Simulation.css';

const GRAVITY = 0.3;
const START_OFFSET = { x: 600, y: -100 };
const START_RAND = 200;
const VELOCITY_RAND = 3;
const SPACING = 5
const START_DELAY = 50;

class Simulation extends Component {
    constructor(props) {
        super(props);
        const totalBalls = _.reduce(this.props.balls, (count, curr) => {
            return count + curr;
        });
        const START_DELAY = 50;
        const tmp = _.range(START_DELAY, totalBalls * SPACING + START_DELAY + 1, SPACING);
        const delays = _.shuffle(tmp);
        let number = 1;
        this.state = {
            time: 0,
            balls: _.reduce(this.props.balls, (arr, count, color) => {
                for (let i = 0; i < count; i++) {
                    arr.push({ position: { x: START_OFFSET.x + (Math.random() - 0.5) * START_RAND * 2, y: START_OFFSET.y }, velocity: { x: (Math.random() - 0.5) * VELOCITY_RAND * 2, y: 0 }, color, delay: delays[arr.length], text: i === 0 ? number++ : null });
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
                    ball.velocity.y += GRAVITY;
                    ball.position.x += ball.velocity.x;
                    ball.position.y += ball.velocity.y;
                });
                return newState;
            })
        }, 10);
    }

    render() {
        return (
            <div id="ballHolder">
                {_.map(this.state.balls, (ball, i) => {
                    return <div key={i} className={"ball " + ball.color} style={{
                        left: ball.position.x,
                        top: ball.position.y
                    }} ></div>
                })}
            </div>
        );
    }
}

Simulation.propTypes = {
    balls: PropTypes.any
};

export default Simulation;