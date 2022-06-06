import React from "react";

const scaleNames = {
    c : 'celcius',
    f : 'fahrenheit',
};

export default function InputTemparature ({temparature, temparatureHandle, scale}) {
        return (
            <div>
                <fieldset>
                    <legend>
                        Temparature in {scaleNames[scale]} :
                    </legend>
                    <input type="text" value={temparature} onChange= {(e)=>{temparatureHandle(e,scale)}} />
                </fieldset>
            </div>
        )
    
}