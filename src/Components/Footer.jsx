import React, { useContext } from "react"
import { MyContext } from "./MyProvider"

import github from "../images/icon/github.svg"
import twitter from "../images/icon/twitter-x.svg"
import linkedin from "../images/icon/linkedin.svg"

export default function Footer() {
    const { coordonnees } = useContext(MyContext)

    return (
        <footer className="App-footer">
            <div className="footer-contact col-3">
                <h3>John Doe</h3>
                <p>{coordonnees.adresse}</p>
                <p>{coordonnees.codePostal} {coordonnees.ville}, {coordonnees.pays}</p>
                <p>{coordonnees.telephone}</p>
                <p>{coordonnees.email}</p>
                <div className="footer-social">
                    <a href="https://www.Github.com/example" target="_blank" rel="Github">
                        <img src={github} alt="Github" />
                    </a>
                    <a href="https://www.twitter.com/example" target="_blank" rel="Twitterr">
                        <img src={twitter} alt="Twitter" />
                    </a>
                    <a href="https://www.linkedin.com/in/example" target="_blank" rel="LinkedIn">
                        <img src={linkedin} alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className="footer-liens col-3">
                <h3>Liens utiles</h3>
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Me contacter</a></li>
                    <li><a href="/mentions-legales">Mentions légales</a></li>
                </ul>
            </div>
            <div className="footer-realisation col-3">
                <h3>Mes dernières réalisations</h3>
                <ul>
                    <li>Fresh Food</li>
                    <li>Restaurant Akira</li>
                    <li>Espace bien-être</li>
                    <li>SEO</li>
                    <li>Création d'une API</li>
                    <li>Maquette d'un site</li>
                </ul>
            </div>
        </footer>
    );  
}