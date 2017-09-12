import React, {Component} from 'react';

class Section extends Component {

    constructor(props){
        super(props);
        this.onFocus.bind(this);
    }

    render(){
        return(
            <div onFocus={this.onFocus} >{this.props.text}</div>
        );
    }

    onFocus(){
        if(!this.props.imageIndex == null){
            //todo: switch sliders activeImage to this.props.imageIndex!
        }
    }

}

export default Section;
