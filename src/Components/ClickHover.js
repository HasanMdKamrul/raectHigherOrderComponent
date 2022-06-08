import WithCounter from './HOC/WithCounter';

const ClickHover = ({count, increament})=>{    
    return (
        <div>
            <h1 onMouseOver={increament}>
                Hovered {count} times clicked
            </h1>
        </div>
    )
};

export default WithCounter(ClickHover);