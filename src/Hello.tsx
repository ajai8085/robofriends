import React from 'react'
import './Hello.css';

class Hello extends React.Component<{ greetings: string, age: number }> {


    render(): React.ReactNode {
        return (
            <div className="f1 tc">
                <h1>Hello world</h1>
                <p>Welcome to react {this.props.greetings}</p>
            </div>
        );
    }
}

export default Hello;