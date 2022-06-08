// ** HigherOrderComponent ---> is a function returns a new component using the original component as parameter

// ** const newComponent = HOC(originalComponent)

import React from 'react';

const WithCounter = (OriginalComponent)=>{

    class NewComponent extends React.Component {

        state = {count: 0};

        increament = () => {
            this.setState((prevState)=>{
                return ({count: prevState.count + 1});
            })
        }

        render() {
            const {count} = this.state;
            return <OriginalComponent count={count} increament={this.increament}/>;
            
        }


    }

    return NewComponent;
}

export default WithCounter;
