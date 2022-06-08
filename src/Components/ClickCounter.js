import WithCounter from './HOC/WithCounter';

const ClickCounter = (props) =>{

    const {count,increament} = props;
    return (
        <div>
            <button type="button" onClick={increament}>
                Button {count} times clicked
            </button>
        </div>
    )
}

export default WithCounter(ClickCounter);