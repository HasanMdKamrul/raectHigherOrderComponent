import React from 'react';


export default class ClickHover extends React.Component {

    render() {
        const {countHover,change} = this.props;
        return (
            <div>
                <h1 onMouseOver={change}>
                    Hovered {countHover} times clicked
                </h1>
            </div>
        )
    }
}