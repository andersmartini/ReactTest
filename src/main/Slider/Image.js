import React, { Component } from 'react';

class Image extends Component {
   render()
    {
        console.log("rendering image with alt: "+ this.props.alt)
        var subtitle = this.props.subtitle == null ? "" : <p className="subtitle">{this.props.subtitle}</p>
        let img = <img src={this.props.url} alt={this.props.alt} /> ;
        return (
            <div className="slide">
                {img}
                {subtitle}
            </div>

        );
    }
}


export default Image