import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Demo.css'

class Demo extends Component{

    render(){
        return <div className="mydiv">
                <h1>Hello {this.props.first_name}</h1>
            </div>
    }

}

export default Demo;