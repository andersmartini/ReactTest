import React, {Component} from 'react';
import Section from "./Section"
import Image from "./Image";

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeImage: this.props.sections[0].image,
            sectionCount: this.props.sections.length
        };
        this.setImage = this.setImage.bind(this);
    }


    render(){
        let sections =[];
        this.props.sections.map((section, index)=> {
           sections.push(<Section text={section.text} image={section.image} callBack={this.setImage}/>);
        });
        let image = this.state.activeImage;
        return(
            <div className="main">
                <div className="article">
                    {sections}
                </div>
                <div className="slider">
                    <Image url={image.url} alt={image.alt} subtitle={image.subtitle} onClick={this.nextSlide} />
                </div>
            </div>
        )
    }

    setImage = function(index){
        this.setState({activeImage:index});
    }
}

export default Article;
