import * as React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0};
    }

    tick() {
        if (this.state.seconds + 1 >= 60)
        {
            this.setState({minutes: this.state.minutes+1,
            seconds:0})
        }else {
            this.setState(state => ({
                seconds: state.seconds + 1
            }));
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentDidUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="time col">
                <i className="far fa-clock"/>
                <div className="timer">
                    <h1>{this.state.minutes}:{this.state.seconds}</h1>
                </div>
            </div>
        );
    }
}

export default Timer;