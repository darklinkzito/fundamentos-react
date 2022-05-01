const TemplateExpressions = () => {
    const name = "André";
    const data = {
        age: 31,
        job: "Programmer",
    }
    return (
        <div>
            <h1> Olá {name}, tudo bem?</h1>
            <h2> Você atua como: {data.job} a {4+4} anos.</h2>
            <p>{console.log("JSX REACT")}</p>
        </div>
    )
}

export default TemplateExpressions;