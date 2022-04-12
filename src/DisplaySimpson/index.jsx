function DisplaySimpson(props) {

    return (
    <section>
        <img src={props.image} />
        <div>
        <p>{props.quote}</p>
        <p>{props.character}</p>
        </div>
    </section>)
}

export default DisplaySimpson;