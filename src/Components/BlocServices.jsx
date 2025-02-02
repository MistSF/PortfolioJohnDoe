import {ReactSVG} from 'react-svg';

export default function BlocServices(props) {
    const { service } = props;
    return (
        <div className="col-3 bloc-service">
            <ReactSVG 
                src={service.icon} 
                beforeInjection={(svg) => {
                    svg.classList.add('service-icon');
                    svg.classList.add('text-primary');
                }}
            />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
        </div>
    )
}