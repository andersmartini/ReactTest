import React, {Component} from 'react';
import ArticlePreview from './ArticlePreview.js'


class Modal extends Component{

    constructor(props){
        super(props);
        this.state = {
            isActive:false,
            willBeActive:false
        };
        this.mouseLeave = this.mouseLeave.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
    }

    render(){
        let items = [];
        let modal = null;

        for(let i=0;i<this.props.items;i++){
            let item = this.props.items[i];
            if(item.type === "articlePreview")
            {
                items.push(<ArticlePreview item={item} />);
            }
        }
        return (
            <div onMouseOver={this.mouseOver} onMouseLeave={this.mouseLeave}>
                <p className="menu-item"> {this.props.title} </p>
                {this.state.isActive ? <div className="modal"> {items} </div> : null}
            </div>
        );
    }

    //Todo: move these up one level to the parent, switching will have to be quicker if another menuItem is selected!
    mouseOver(){
        this.setState({isActive:true});
        this.FAD=null;
    }

    mouseLeave(){
        let fad = Math.random();
        this.FAD= fad;
        let that = this;
        setTimeout(function () {
            let nextStatus = that.FAD !== fad;
            that.setState({isActive:nextStatus})
        },600)
    }
}

export default Modal;