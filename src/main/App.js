import React, { Component } from 'react';
import './App.css';
import HeaderController from "./Controllers/HeaderController";
import ArticleController from "./Controllers/ArticleController";


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            date:new Date(),
            sections:null,
            modals:null
        };
        this.articleController = new ArticleController(this.state, this.setState);
    }

  render() {

    return (
      <div className='App'>
          <HeaderController />
          <ArticleController />

      </div>
    );
  }

    componentDidMount(){
        this.timerId = setInterval( ()=>this.tick() , 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    tick(){
        this.setState({date:new Date()})
    }

}


export default App;
