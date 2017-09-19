import React, {Component} from 'react';
import Header from '../Header/Header'

class HeaderController extends Component{

    constructor(props){
        super(props);
        let dummyModals = [{title: "Articles", items: [{type: "articlePreview", title: "penguins", text: "another article about penguins", thumb: "http://wordpresslab.se/lab/wp-content/gallery/pingvin-parken/1258.jpg"}]}];

        this.state = {
            modals:dummyModals
        }

    }

    render(){
        return <Header modals={this.state.modals}/>;
    }
}

export default HeaderController;
