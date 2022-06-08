import React from 'react';


export default class ClickCounter extends React.Component {

    state = {count: 0};

    buttonClick = () => {
        this.setState((prevState)=>{
            return ({count: prevState.count + 1});
        })
    }


    render() {
        const {count} = this.state;
        return (
            <div>
                <button type="button" onClick={this.buttonClick}>
                    Button {count} times clicked
                </button>
            </div>
        )
    }
}