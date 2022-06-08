import React from 'react';


export default class ClickCounter extends React.Component {

 
    render() {
        const {countClick,change} = this.props;
        return (
            <div>
                <button type="button" onClick={change}>
                    Button {countClick} times clicked
                </button>
            </div>
        )
    }
}