import ClickHover from './ClickHover';
import ThemeContext from './Contexts/ThemeContext';
import Intermediate from './Intermediate';

export default function Content(){

    return (
       <div>
            <h1>This is Content</h1>
            <Intermediate>
                {(count,increment) => (
                    <ThemeContext.Consumer>
                        {({theme}) => (
                            <ClickHover count={count} increment={increment} theme={theme}/>
                        )}
                    </ThemeContext.Consumer>
                )}
            </Intermediate>
       </div>
    )
}