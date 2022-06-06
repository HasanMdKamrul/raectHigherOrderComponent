
export function celciousToFahrenheit(temparature){
    return (temparature*9/5)+32 ;
}

export function FahrenheitToCelsius(temparature){
    return (temparature-32)*5/9
}


export function convert(temparature,toConvert){
    const input = parseFloat(temparature);

    if (Number.isNaN(input)) {

        return '';
        
    }

    const output = toConvert(input);

    const outputRounded = Math.round(output*1000)/1000;

    return outputRounded;
}