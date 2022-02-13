import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = { hasError: false }
    render(): React.ReactNode {
        if (this.state.hasError) {
            return (<h1>Oops . That is not good!</h1>)
        }

        return this.props.children;
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }
}

export default ErrorBoundary;