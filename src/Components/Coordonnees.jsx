import React, { useContext } from "react"
import { MyContext } from "./MyProvider"
import { GoogleMap, LoadScript } from "@react-google-maps/api"
import env from "react-dotenv"

import mapIcon from "../images/icon/map.svg"
import geoIcon from "../images/icon/geo-alt.svg"
import phoneIcon from "../images/icon/phone.svg"
import mailIcon from "../images/icon/envelope-at.svg"


const containerStyle = {
    height: "300px",
    width: "100%",
};
  
const center = {
    lat: 48.8566,
    lng: 2.3522, // Paris, France
};

export default function Coordonnees() {
    const { coordonnees } = useContext(MyContext)
    
    return (
        <div  className="col-md-5 col-xs-12 coordonnees">
            <h2>Mes Coordonnées</h2>
            <div className="bg-primary underline" />
            <h3>John Doe</h3>
            <p><img src={mapIcon} alt="icon-adresse" /> {coordonnees.adresse}</p>
            <p><img src={geoIcon} alt="icon-ville" /> {coordonnees.codePostal} {coordonnees.ville}, {coordonnees.pays}</p>
            <p><img src={phoneIcon} alt="icon-telephone" /> {coordonnees.telephone}</p>
            <p><img src={mailIcon} alt="icon-mail" /> {coordonnees.email}</p>
            <LoadScript className="google-map" googleMapsApiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                </GoogleMap>
            </LoadScript>
        </div>
    )
}
