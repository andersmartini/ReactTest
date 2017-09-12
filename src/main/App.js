import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from "./Slider/Slider";
import Article from "./Articles/Article";


class App extends Component {
    constructor(props){
        super(props);
        this.state={date:new Date()};

    }

    sections = [
            {
            text:"här står det lite text..."
            },
            {
            text:"här står det lite till"
            }
        ]

    images = [
        {
            url:"https://d3jkudlc7u70kh.cloudfront.net/penguins-fact.jpg",
            alt:"små pingviner",
            subtitle:"pyttesmå pingviner"
        },
        {
            url:"http://www.bakgrundsbild.com/save.php?id=1439",
            alt:"fast dom är ju fejk såklart.....",
            subtitle:"En pingvinFamilj som posar!"
        },
        {
            url:"https://pbs.twimg.com/profile_images/510360817800183808/Bm19YLZO_400x400.jpeg",
            alt:"fast dom är ju fejk såklart.....",
            subtitle:"WooHoooo!!"
        }
    ];

  render() {

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className='App-intro'>
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <p>the time is {this.state.date.toLocaleTimeString()} </p>

          <Article sections={this.sections} />
          <Slider images={this.images} />
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
