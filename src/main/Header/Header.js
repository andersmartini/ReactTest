import React, {Component} from 'react';
import Modal from "./Modal"
import Logo from "./Logo"

class Header extends Component {

    render(){

        let modals= [];

        for(let i=0;i<this.props.modals.length; i++){
            let modal = this.props.modals[i];
            //maybe add a prop for extra features, such as adding comments...or maybe make that another Component?
            modals.push(<Modal title={modal.title} items={modal.items} /> )

        }

        return (
            <div className="header">
                <Logo image={this.props.image} />
                <div className="menu">
                    {modals}
                </div>


            </div>
        );
    }

}

export default Header;