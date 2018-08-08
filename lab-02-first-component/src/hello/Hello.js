import React from 'react';

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          greeting: 'Howdy!!',
          count: 0
        };
    }

    decrement () {
        this.setState(state => ({
            count: state.count - 1
        }));
    }
    increment () {
        this.setState(state => ({
            count: state.count + 1
        }));
    }
    render () {
        return (
            <div className="hello">
                <h1>{this.state.greeting}</h1>
                <h2>{this.props.friend}</h2>
                <h1>{this.state.count}</h1>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

Hello.defaultProps = {
    friend: 'Partner!!',
};

export default Hello;