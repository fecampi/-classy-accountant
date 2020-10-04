import React, { Component } from 'react';
export default class Contador extends Component {




    state = {
        step: this.props.step || 1,
        value: 0
    }

    inc = () => {
        console.log('inc');
        this.setState({
            value: this.state.value + this.state.step

        })
    }

    dec = () => {
        this.setState({
            value: this.state.value - this.state.step
        })
    }



    render() {
        return (
            <div>
                <div>
                    <h2>Contador</h2>
                    <h4>value:{this.state.value}</h4>
                    <label>Step:</label>
                    <input
                        style={{fontSize: '2.0rem',width:'60px'}}
                        type="number"
                        value={this.state.step}
                        onChange={e => this.setState({ step: +e.target.value })} />
                </div>
                <div>
                    <button onClick={this.inc}>+</button>
                    <button onClick={this.dec}>-</button>
                </div>
            </div>
        )

    }
}