import Error from "../components/ErrorPage/Error";
import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        return <Error />;
      }
      return this.props.children;
    }
  }  

export default ErrorBoundary;