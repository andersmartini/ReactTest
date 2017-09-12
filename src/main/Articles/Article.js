import React, {Component} from 'react';
import Section from "./Section"

class Article extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentSection: 0,
            sectionCount: this.props.sections.length
        }
    }


    render(){

        let section = this.props.sections[this.state.currentSection];
        return(
            <div className="Article">
                <Section text={section.text} imageIndex={section.imageIndex} />
            </div>
        )
    }
}

export default Article;
