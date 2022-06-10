import React from 'react';
import ClickCounter from './Components/ClickCounter';
import ThemeContext from './Components/Contexts/ThemeContext';
import Intermediate from './Components/Intermediate';
import Section from './Components/Section';

class App extends React.Component {
  
  state = {
    theme: 'dark',
  };
  
  render() {
    const {theme} = this.state;
    return (

      <div className="app">
        <Intermediate>
          {(count,increment) =>{
                return (<ClickCounter count={count} increment={increment}/>)
          }}
        </Intermediate>
        <ThemeContext.Provider value={{theme}} >
          <Section  />
        </ThemeContext.Provider>
      </div>
      
    )
  }
  
}

export default App;

