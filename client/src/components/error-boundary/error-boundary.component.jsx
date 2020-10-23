import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasErrored: false
    }
  }

  static getDerivedStateFromError(error) {
    return {hasErrored: true}
  }
}

export default ErrorBoundary
