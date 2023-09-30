import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrase = this.decrase.bind(this);
    }  
    increment(){
        this.setState({count: this.state.count + 1 });
}
    decrase(){
        this.setState({count : this.state.count - 1});
    }


render(){
    return(
        <div>
            <p>
                Count : {this.state.count}
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrase}>Decrease</button>
            </p>
        </div>
    );
}
}
export default Counter;
