import ClickCounter from './Components/ClickCounter';
import ClickHover from './Components/ClickHover';
import Intermediate from './Components/Intermediate';

function App() {
  return (
    <div>
      <Intermediate>
        {(count,increment) =>{
              return (<ClickCounter count={count} increment={increment}/>)
        }}
      </Intermediate>
      <Intermediate>
      {(count,increment) =>{
          return (<ClickHover count={count} increment={increment}/>)
        }}
      </Intermediate>
    </div>
  )
  
}

export default App;

