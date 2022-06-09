export default function ClickHover({count,increment}){

    return (
        <div>
            <h1 onMouseOver={increment}>
                Hovered {count} times clicked
            </h1>
        </div>
    )

}