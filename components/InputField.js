import React from 'react';
import ReactDOM from 'react-dom';

class InputField extends React.Component {
    render() {
        return (
            <textarea value={this.props.inputText} onChange={(e) => this.props.onChange(e.target.value)}></textarea>
        );
    }
};

module.exports = InputField;