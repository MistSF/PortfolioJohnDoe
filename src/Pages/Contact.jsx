import FormulaireContact from "../Components/FormulaireContact"
import Coordonnees from "../Components/Coordonnees"
import "../CSS/Contact.css"

export default function Contact() {
    return (
        <div className="container page-contact" >
            <div className="row contact-title">
                <h1>Contact</h1>
                <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <span className="bg-primary underline" />
            </div>
            <div className="row contact-box">
                <FormulaireContact />
                <Coordonnees />
            </div>
        </div> 
    )
}