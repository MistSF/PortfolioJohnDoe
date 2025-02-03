import React, { useState, useEffect} from 'react';

import Competences from '../Components/Competences';
import Modale from '../Components/Modale';
import "../CSS/Accueil.css"

import JohnDoe from '../images/john-doe-about.jpg';

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        document.body.classList.add('modal-open');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.classList.remove('modal-open');
    };

    return (
        <div className="HomePage">
            <section className="Section-1">
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <Modale isOpen={isModalOpen} closeModal={closeModal} />
                <button className="btn-info bg-danger" onClick={openModal}>En savoir plus</button>
            </section>
            <section className="Section-2">
                <article className="col-md-5 col-xs-12">
                    <h3>A propos</h3>
                    <div className="bg-primary underline" />
                    <img src={JohnDoe}></img>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, purus vitae interdum feugiat, sapien nunc pulvinar ex, in tempor ex ex et lectus. Donec vel massa a dolor accumsan malesuada id id neque.</p>
                </article>
                <article className="col-md-5 col-xs-12">
                    <h3>Mes compétences</h3>
                    <div className="bg-primary underline" />
                    <Competences />
                </article>
            </section> 
        </div>
    )
}