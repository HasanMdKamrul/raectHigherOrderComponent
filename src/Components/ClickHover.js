import React from 'react';


export default class ClickHover extends React.Component {

    state = {count: 0};

    buttonClick = () => {
        this.setState((prevState)=>{
            return ({count: prevState.count + 1})
        })
    }


    render() {
        const {count} = this.state;
        return (
            <div>
                <h1 onMouseOver={this.buttonClick}>
                    Button {count} times clicked
                </h1>
            </div>
        )
    }
}