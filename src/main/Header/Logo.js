import React, {Component} from 'react';

class Logo extends Component {


    render(){
        return (
            <div className="logo">
                <img src={this.props.url} />
                <div className="joiner">

                </div>
            </div>



        )
    }
}

export default Logo
