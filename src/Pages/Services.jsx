import BlocServices from "../Components/BlocServices";
import "../CSS/Services.css";

import brushIcon from "../images/icon/brush.svg";
import webIcon from "../images/icon/code-slash.svg";
import searchIcon from "../images/icon/search.svg";

export default function Services() {
    const services = [
        { name: 'UX Design', icon:brushIcon, description: "L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobiles, logiciels, objects connectés, etc.) en plaçant l'utilisateur au centre des préoccupations. L'objectif est de rendre l'expérience utilisateur la plus fluide et agréable possible."},
        { name: 'Développement web', icon:webIcon, description: 'Le développement de site web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, Javascript, PHP, etc.) et des frameworks (Bootstrap, React, Angular, etc.)'},
        { name: 'Référencement', icon:searchIcon, description: "Le référencement naturel (SEO) est une technique qui consiste à optimier les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.) L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site"}
    ];

    return (
        <div className="services">
            <div className="row bandeau"/>
            <div className="row">
                <h1>Mon offre de services</h1>
                <p>voici les prestations sur lesquelles je peux intervenir</p>
                <span className="bg-primary underline" />
            </div>
            <div className="row services-blocs">
                {services.map((service) => {
                    return (
                    <BlocServices service={service}  />)
                })}
            </div>
        </div>
    )
}