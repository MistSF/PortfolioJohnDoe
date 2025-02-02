import Realisation from "../Components/Realisation";
import "../CSS/Realisations.css"

import ImageFreshFood from "../images/portfolio/fresh-food.jpg";
import ImageAkira from "../images/portfolio/restaurant-japonais.jpg";
import ImageBienEtre from "../images/portfolio/espace-bien-etre.jpg";
import ImageSEO from "../images/portfolio/seo.jpg";
import ImageAPI from "../images/portfolio/coder.jpg";
import ImageScreen from "../images/portfolio/screens.jpg";

export default function Portfolio() {
    const realisation = [
        {name: "Fresh Food", image:ImageFreshFood, description: "Site de vente de produits frais en ligne", info:"Site réalisé avec PHP et MySQL"},
        {name: "Restaurant Akira", image:ImageAkira, description: "Site de vente de produits frais en ligne", info:"Site réalisé avec WordPress"},
        {name: "Espace bien-être", image:ImageBienEtre, description: "Site de vente de produits frais en ligne", info:"Site réalisé avec LARAVEL"},
        {name: "SEO", image:ImageSEO, description: "Amélioration du référencement d'un site e-commerce", info:"Utilisation des outils SEO"},
        {name: "Création d'une API", image:ImageAPI, description: "Création d'une API RESTFULL publique", info:"PHP - SYMFONY"},
        {name: "Maquette d'un site web", image:ImageScreen, description: "Création du prototype d'un site", info:"Réalisé avec FIGMA"},
    ]

    return (
        <div className="page-realisation">
            <div className="row titre-realisation">
                <h1>Portfolio</h1>
                <p>Voici quelques une de mes réalisations</p>
                <div className="bg-primary underline"/>
            </div>
            <div className="row liste-realisation">
                {realisation.map((realisation) => {
                    return (
                    <Realisation real={realisation}  />)
                })}
            </div>
        </div>  
    );
}