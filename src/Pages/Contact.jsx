import FormulaireContact from "../Components/FormulaireContact"
import Coordonnees from "../Components/Coordonnees"
import "../CSS/Contact.css"

export default function Contact() {
    return (
        <div className="page-contact" >
            <div className="row contact-title">
                <h1>Contact</h1>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <div className="bg-primary underline" />
            </div>
            <div className="row contact-box container">
                <div className="col-md-5 col-xs-12">
                    <h2>Formulaire de contact</h2>
                    <div className="bg-primary underline" />
                    <form className="contact-form">
                        <input type="text" placeholder="Votre nom" />
                        <input type="email" placeholder="Votre adresse email" />
                        <input type="text" placeholder="Votre numéro de téléphone" />
                        <input type="text" placeholder="Sujet" />
                        <textarea placeholder="Votre message"></textarea>
                        <button type="submit" className="btn btn-primary">Envoyer</button>
                    </form>
                </div>
                <Coordonnees />
            </div>
        </div> 
    )
}