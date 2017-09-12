import React, {Component} from 'react';
import Image from "./Image";

class Slider extends Component {

    constructor(props){
        super(props)
        this.state = {
            activeImage:0,
            numSlides: this.props.images.length
        }
        this.nextSlide = this.nextSlide.bind(this)
    }

    render(){

        let button = (<button onClick={this.nextSlide}> ClickMe!</button>);
        let image = this.props.images[this.state.activeImage];

        return (
            <div className="slider">
                <Image url={image.url} alt={image.alt} subtitle={image.subtitle} onClick={this.nextSlide} />
                {button}
            </div>


        )
    }

    nextSlide = function(e){
        this.setState((prevState, props)=>{
            let nextImage = 0;
            if( (prevState.activeImage+1) < props.images.length ){
                nextImage = prevState.activeImage + 1;
            }
            console.log("previmage: " + prevState.activeImage + " lastimage: " + props.images.length + " nextimage: " + nextImage);

            return {activeImage:nextImage};
        } )
    }
}


export default Slider;