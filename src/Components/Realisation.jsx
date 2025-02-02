export default function Realisation(props) {
    const { real } = props;
    return (
        <div className="col-3 realisation">
            <img src={real.image} alt={real.name} className="image-realisation"/>
            <h2>{real.name}</h2>
            <p>{real.description}</p>
            <button onClick={() => props.handleClick(real)} className="btn btn-primary">Voir le site</button>
            <p className="realisation-info">{real.info}</p>
        </div>
    )
}