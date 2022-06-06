import React from "react";
import { celciousToFahrenheit, convert, FahrenheitToCelsius } from "../lib/converter";
import BoilingPointVerdict from './BoilingPointVerdict';
import InputTemparature from './InputTemparature';

export default class Calculator extends React.Component {
    state = {
        temparature: 0,
        scale: 'c'
    }

    handlerTemparature = (e, scale)=>{
        this.setState({
            temparature: e.target.value,
            scale,
        })
    };

    render(){
        const {temparature,scale} = this.state;
        const celcius = (scale === 'f') ? convert(temparature,FahrenheitToCelsius): temparature;
        const fahrenheit = (scale === 'c') ? convert(temparature,celciousToFahrenheit): temparature;
        return (
            <div>
                <InputTemparature temparature = {celcius} temparatureHandle = {this.handlerTemparature} scale = "c" />
                <InputTemparature temparature = {fahrenheit} temparatureHandle = {this.handlerTemparature}  scale = "f" />
                <BoilingPointVerdict temparature={parseFloat(temparature)} />
            </div>
        )
    }
}