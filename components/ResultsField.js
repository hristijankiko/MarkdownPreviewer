import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';

class ResultsField extends React.Component {
    render() {
        return (
            <div className="resultContainer">
                <div dangerouslySetInnerHTML={ {__html: marked(this.props.inputText)} }>
                </div>
            </div>
        );
    }
}

module.exports = ResultsField;