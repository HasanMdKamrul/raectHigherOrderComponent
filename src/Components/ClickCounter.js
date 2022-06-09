
export default function ClickCounter({count,increment}){

    return (
        <div>
            <button type="button" onClick={increment}>
                Button {count} times clicked
            </button>
        </div>
    )

}