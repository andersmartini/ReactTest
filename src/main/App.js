import React, { Component } from 'react';
import './App.css';
import Article from "./Articles/Article";
import Header from "./Header/Header";


class App extends Component {
    constructor(props){
        super(props);
        this.state={date:new Date()};

    }

    sections = [
            {
                text:"<p> display\n" +
                "This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.\n" +
                "\n" +
                ".container {\n" +
                "  display: flex; /* or inline-flex */\n" +
                "}\n" +
                "Note that CSS columns have no effect on a flex container.\n</p>" +
                "\n" +
                "<p>#flex-direction\n" +
                "\n" +
                "\n"+
                "\n"+
                "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.\n" +
                "\n" +
                ".container {\n" +
                "  flex-direction: row | row-reverse | column | column-reverse;\n" +
                "}\n" +
                "row (default): left to right in ltr; right to left in rtl\n" +
                "row-reverse: right to left in ltr; left to right in rtl\n" +
                "column: same as row but top to bottom\n" +
                "column-reverse: same as row-reverse but bottom to top\n</p>" +
                "#flex-wrap\n" +
                "\n" +
                "\n" +
                "<p>By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.\n" +
                "\n" +
                ".container{\n" +
                "  flex-wrap: nowrap | wrap | wrap-reverse;\n" +
                "}\n" +
                "nowrap (default): all flex items will be on one line\n" +
                "wrap: flex items will wrap onto multiple lines, from top to bottom.\n" +
                "wrap-reverse: flex items will wrap onto multiple lines from bottom to top.\n" +
                "There are some visual demos of flex-wrap here.\n</p>" +
                "\n" +
                "#flex-flow (Applies to: parent flex container element)\n" +
                "This is a shorthand flex-direction and flex-wrap properties, which together define the flex container's main and cross axes. Default is row nowrap.\n" +
                "\n" +
                "flex-flow: <‘flex-direction’> || <‘flex-wrap’>\n",
                image:{
                    url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg/1200px-South_Shetland-2016-Deception_Island%E2%80%93Chinstrap_penguin_%28Pygoscelis_antarctica%29_04.jpg",
                    alt:"små pingviner",
                    subtitle:"grumpy    "
                }
            },
            {
                text:"display\n" +
                "This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.\n" +
                "\n" +
                ".container {\n" +
                "  display: flex; /* or inline-flex */\n" +
                "}\n" +
                "Note that CSS columns have no effect on a flex container.\n" +
                "\n" +
                "#flex-direction\n" +
                "\n" +
                "This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.\n" +
                "\n" +
                ".container {\n" +
                "  flex-direction: row | row-reverse | column | column-reverse;\n" +
                "}\n" +
                "row (default): left to right in ltr; right to left in rtl\n" +
                "row-reverse: right to left in ltr; left to right in rtl\n" +
                "column: same as row but top to bottom\n" +
                "column-reverse: same as row-reverse but bottom to top\n" +
                "#flex-wrap\n" +
                "\n" +
                "\n" +
                "By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.\n" +
                "\n" +
                ".container{\n" +
                "  flex-wrap: nowrap | wrap | wrap-reverse;\n" +
                "}\n" +
                "nowrap (default): all flex items will be on one line\n" +
                "wrap: flex items will wrap onto multiple lines, from top to bottom.\n" +
                "wrap-reverse: flex items will wrap onto multiple lines from bottom to top.\n" +
                "There are some visual demos of flex-wrap here.\n" +
                "\n" +
                "#flex-flow (Applies to: parent flex container element)\n" +
                "This is a shorthand flex-direction and flex-wrap properties, which together define the flex container's main and cross axes. Default is row nowrap.\n" +
                "\n" +
                "flex-flow: <‘flex-direction’> || <‘flex-wrap’>\n",
                image: {
                    url:"http://media.johanna.hantverkskollektivet.se/2012/05/IMG_8852.jpg",
                    alt:"fast dom är ju fejk såklart.....",
                    subtitle:"Andra undertexten!"
                }
            },
            {
                text:"flex-basis\n" +
                "This defines the default size of an element before the remaining space is distributed. It can be a length (e.g. 20%, 5rem, etc.) or a keyword. The auto keyword means \"look at my width or height property\" (which was temporarily done by the main-size keyword until deprecated). The content keyword means \"size it based on the item's content\" - this keyword isn't well supported yet, so it's hard to test and harder to know what its brethren max-content, min-content, and fit-content do.",
                image:{
                    url:"http://wordpresslab.se/lab/wp-content/gallery/pingvin-parken/1258.jpg",
                    alt:"fast dom är ju fejk såklart.....",
                    subtitle:"tredje undertexten"
                }
            }
        ];

    modals = [
        {
            title:"Articles",
            items:[{
                type:"articlePreview",
                title:"penguins",
                text:"another article about penguins",
                thumb:"http://wordpresslab.se/lab/wp-content/gallery/pingvin-parken/1258.jpg"
            }]
        }
    ];




  render() {

    return (
      <div className='App'>

          <Header modals={this.modals}/>

          <Article sections={this.sections} images={this.images} />
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
