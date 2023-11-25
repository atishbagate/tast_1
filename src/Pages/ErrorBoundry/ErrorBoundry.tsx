import { Component, ReactNode } from "react";

class ErrorBoundry extends Component{
    state = {hasError: false};

    static getDerivedStateFromError(){
        return {hasError:true};
    }
    componentDidCatch(error: unknown,info: unknown): void {
        console.log(error,info);
    }

    render(): ReactNode {
        if(this.state.hasError){
            return <div>Something Went Wrong.</div>;
        }
        return this.props.children;
    }
}

export default ErrorBoundry;