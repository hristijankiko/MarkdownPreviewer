import React from 'react';
import ReactDOM from 'react-dom';
import InputField from './InputField.js';
import ResultsField from './ResultsField.js';

class MarkdownPreviewer extends React.Component {
    constructor() {
        super();
        this.state = {
            input: "Heading\n=======\n\nSub-heading\n---------\n\n### Another deeper heading\n\nParagraphs are separated\n" 
            + "by a blank line.\n\nLeave 2 spaces at the end of a line to do a\n line break\n\nText attributes *italic*," 
            + " **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered"
            + " list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman"
            + " Fassett](https://freecodecamp.com/hermanfassett)*",
        }
    }
    onChangeHandler(text) {
        this.setState({input: text});
    }
    render() {
        return (
            <div>
                <InputField inputText={this.state.input} onChange={this.onChangeHandler.bind(this)} />
                <ResultsField inputText={this.state.input} />
            </div>
        );
    }
}

ReactDOM.render(
    <MarkdownPreviewer />,
    document.getElementById('app')
    );