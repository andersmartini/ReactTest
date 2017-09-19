import React, {Component} from 'react';


class ArticlePreview extends Component {
    render(){
        return(
            <div className="articlePreview item">
                <h4>{this.props.item.title}</h4>
                <img src={this.props.item.image} />
                <p>{this.props.item.text}</p>
            </div>
        );
    }
}

export default ArticlePreview;