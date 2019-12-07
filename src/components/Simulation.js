import React, { Component } from 'react';
import PropTypes from 'prop-types'
import _ from 'lodash';

import '../styles/Simulation.css';

const GRAVITY = 0.5;
const START_OFFSET = { y: -100 };
const START_RAND = 200;
const VELOCITY_RAND = 5;
const SPACING = 4
const START_DELAY = 25;
const FPS = 50;

class Simulation extends Component {
    constructor(props) {
        super(props);
        
        this.screen = React.createRef();
        this.state = { balls: [] };
    }

    getStartState = () => {
        const totalBalls = _.reduce(this.props.balls, (count, curr) => {
            return count + curr;
        });
        const tmp = _.range(START_DELAY, totalBalls * SPACING + START_DELAY + 1, SPACING);
        const delays = _.shuffle(tmp);
        let number = 1;
        return {
            time: 0,
            balls: _.reduce(this.props.balls, (arr, count, color) => {
                for (let i = 0; i < count; i++) {
                    arr.push({ position: { x: (Math.random() - 0.5) * START_RAND * 2, y: START_OFFSET.y }, velocity: { x: (Math.random() - 0.5) * VELOCITY_RAND * 2, y: 0 }, color, delay: delays[arr.length], text: i === 0 ? number++ : null });
                }
                return arr;
            }, [])
        };
    }

    componentDidMount() {
        this.setState(this.getStartState());
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
        }, 1000/FPS);
    }

    render() {
        return [
            <div ref={this.screen} id="ballHolder">
                {_.map(this.state.balls, (ball, i) => {
                    const mult = this.screen.current.offsetWidth / 1300;
                    const position = {x: ball.position.x * mult + this.screen.current.offsetWidth / 2, y: ball.position.y * mult};
                    if (position.x < -50 || position.y < -50 || position.y > this.screen.current.offsetHeight + 50 || position.x > this.screen.current.offsetWidth + 50) {
                        return null;
                    }
                    return <div key={i} className={"ball " + ball.color} style={{
                        left: position.x,
                        top: position.y
                    }} ></div>
                })}
            </div>,
            <div className="button" onClick={() => this.setState(this.getStartState)}>{'Reset'}</div>
        ];
    }
}

Simulation.propTypes = {
    balls: PropTypes.any
};

export default Simulation;