import { Component } from "react";
import Hello from "./Hello";

class HelloAsClass extends Component{
    render(){
     
        return <div>Hello   {this.props.who} - {this.props.address}</div>
        
        
    }
}
export default HelloAsClass;