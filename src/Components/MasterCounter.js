import React from 'react';
import ClickCounter from './ClickCounter';
import ClickHover from './ClickHover';

export default class MasterCounter extends React.Component{

    state = { countClick: 0,countHover: 0 };

    buttonClick = () => {
        this.setState((prevState)=>{
            return ({countClick: prevState.countClick + 1})
        })
    }

    hoverClick = () => {
        this.setState((prevState)=>{
            return ({countHover: prevState.countHover + 1})
        })
    }
            
    render(){
        const {countClick,countHover} = this.state;
        return (
            <div>
                <ClickCounter countClick = {countClick} change = {this.buttonClick} /> 
                <ClickHover countHover = {countHover} change = {this.hoverClick}/> 
            </div>
        )
    }
}