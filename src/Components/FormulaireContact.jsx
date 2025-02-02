export default function FormulaireContact() {
    return (
        <div className="col-md-5 col-xs-12">
            <h2>Formulaire de contact</h2>
            <form className="contact-form">
                <input type="text" placeholder="Votre nom" />
                <input type="email" placeholder="Votre adresse email" />
                <input type="text" placeholder="Votre numéro de téléphone" />
                <input type="text" placeholder="Sujet" />
                <textarea placeholder="Votre message"></textarea>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        </div>
    );
}