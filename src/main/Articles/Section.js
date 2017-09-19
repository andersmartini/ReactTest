import React, {Component} from 'react';

class Section extends Component {

    constructor(props){
        super(props);
        this.callBack = this.callBack.bind(this);
    }

    render(){
        return(
            <div onMouseOver={this.callBack} className="section" >{this.props.text}</div>
        );
    }

    callBack(){
        this.props.callBack(this.props.image);
    }
}

export default Section;
