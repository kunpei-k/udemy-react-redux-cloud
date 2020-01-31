import React, {Component} from 'react';

const App = () => {
    return (
        <Counter></Counter>
    );
}

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count : 0 }
    }

    handlePlus = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleMinus = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        console.log(this.state);
        return (
            <div className="ui" style={{margin:'200px'}}>
                <div>count: {this.state.count}</div>
                <button onClick={this.handlePlus}>+</button>
                <button onClick={this.handleMinus}>-</button>
            </div>
        )
    }
}

export default App;
