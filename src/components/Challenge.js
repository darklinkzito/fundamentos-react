const Challenge = () => {

    let x = 3;
    let y = 4;
    return (
        <div>
            <h3>X: {x}</h3>
            <h3>Y: {y}</h3>
            <div>
                <button onClick={() => console.log(x+y)}>Somar</button>
            </div>
        </div>
    )
}

export default Challenge;