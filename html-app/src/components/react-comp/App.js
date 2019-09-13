import React, { Component } from 'react';

export class App extends Component {
    state = {
        hello: 'React Web Component'
    };

    render() {
        return (
            <div>
                <user-card user-id="1"></user-card>
                <h3>Title: {this.props.title}</h3>
                <p>Greeting: {this.state.hello}</p>
            </div>
            
        )
    }
}
