import React, { useContext} from "react"
import { MyContext } from "../Components/MyProvider"
import "../CSS/mentions.css"

import mapIcon from "../images/icon/map.svg"
import geoIcon from "../images/icon/geo-alt.svg"
import phoneIcon from "../images/icon/phone.svg"
import mailIcon from "../images/icon/envelope-at.svg"

export default function Mentions() {
    const {coordonnees} = useContext(MyContext)
    const [active, setActive] = React.useState(true)

    const handleClick = (name) => {
        if (active === name) {
            setActive(null);
        } else {
            setActive(name);
        }
    };

    return (
        <div className="page-mentions">
            <h1>Mentions légales</h1>
            <span className="bg-primary underline" />
            <div className="mention-box">
                <div className="mention">
                    <h2 className={active === 'john' ? 'select' : ''} onClick={() => handleClick('john')}>John Doe</h2>
                    <div className={active === 'john' ? '' : 'hide'}>
                        <p><img className="icon" src={mapIcon} />{coordonnees.adresse}</p>
                        <p><img className="icon" src={geoIcon} />{coordonnees.codePostal} {coordonnees.ville}, {coordonnees.pays}</p>
                        <p><img className="icon" src={phoneIcon} />{coordonnees.telephone}</p>
                        <p><img className="icon" src={mailIcon} />{coordonnees.email}</p>
                    </div>
                </div>
                <div className="mention">
                    <h2 className={active === 'data' ? 'select' : ''} onClick={() => handleClick('data')}>alwaysdata</h2>
                    <div className={active === 'data' ? '' : 'hide'}>
                        <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                        <a href="https://www.alwaysdata.com">www.alwaysdata.com</a>
                    </div>
                </div>
                <div className="mention">
                    <h2 className={active === 'credits' ? 'select' : ''} onClick={() => handleClick('credits')}>Crédits</h2>
                    <div className={active === 'credits' ? '' : 'hide'}>
                        <p>Ce site à été réalisé par John Doe, étudiant au <a>Centre Européen de formation</a></p>
                        <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a>Pixabay</a></p>
                        <p>La favicon de ce site à été fournis par <a>John doe Icons ertsellt von Freepik - Flaticon</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}