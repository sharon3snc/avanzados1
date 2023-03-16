import React from 'react';

class ErrorBoundary extends React.Component {
    state= {
        hasError: false
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    render() {
        if (this.state.hasError) {
            return <p>'Ops! Something went wrong'</p>
        }

        return this.props.children;
    }
};

export default ErrorBoundary;
