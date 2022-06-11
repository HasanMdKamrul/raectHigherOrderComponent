import React from 'react';
import ClickHover from './ClickHover';
import ThemeContext from './Contexts/ThemeContext';
import Intermediate from './Intermediate';

export default class Content extends React.Component {

    componentDidMount() {
        const {theme,switchTheme} = this.context;
        console.log(theme);
        console.log(switchTheme);
    }

    render() {
        return (
            <div>
                 <h1>This is Content</h1>
                 <Intermediate>
                     {(count,increment) => (
                         <ThemeContext.Consumer>
                             {({theme, switchTheme}) => (
                                 <ClickHover count={count} increment={increment} theme={theme} switchTheme={switchTheme}/>
                             )}
                         </ThemeContext.Consumer>
                     )}
                 </Intermediate>
            </div>
         )
    }
}

Content.contextType = ThemeContext;