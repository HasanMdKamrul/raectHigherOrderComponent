import { useContext } from 'react';
import ClickHover from './ClickHover';
import ThemeContext from './Contexts/ThemeContext';
import Intermediate from './Intermediate';

export default function Content(){
    const {theme,switchTheme} = useContext(ThemeContext);
    console.log('Content rendered');
    return (
       <div>
            <h1>This is Content</h1>
            <Intermediate>
                {(count,increment) => (
                    <ClickHover count={count} increment={increment} theme={theme} switchTheme={switchTheme}/>
                )}
            </Intermediate>
       </div>
    )
}