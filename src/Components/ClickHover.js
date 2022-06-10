export default function ClickHover({count,increment,theme}){

    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff'} : null;
    return (
        <div>
            <h1 onMouseOver={increment} style={style}>
                Hovered {count} times clicked
            </h1>
        </div>
    )

}