import React, { ErrorInfo, PureComponent, ReactNode } from 'react';

import ErrorPage from 'src/pages/errors/SomethingWentWrong';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export default class ErrorBoundary extends PureComponent<Props, State> {
  // Prefer to declare the state in that way
  // eslint-disable-next-line react/state-in-constructor
  state = {
    error: null,
    errorInfo: null,
  };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): ReactNode {
    const { error, errorInfo } = this.state;

    if (errorInfo || error) {
      return <ErrorPage />;
    }

    // Normally, just render children
    return this.props.children;
  }
}
