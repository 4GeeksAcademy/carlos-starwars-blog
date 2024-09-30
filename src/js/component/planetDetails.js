import React from "react";
import "../../styles/details.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

const PlanetDetails = () => {

    const { store, actions } = useContext(Context);

    const { uid } = useParams();

    const [detailsPlanet, setDetailsPlanet] = useState({
        name: "",
        diameter: "",
        terrain: "",
        population: "",
        terrain: "",
        gravity: "",
        description: "",
    })

    useEffect(()=> {
        if(store.planets && store.planets.length > 0 && uid) {
        const planetDetails = store.planets.find(planet => planet.url.split("/")[5] === uid)
        if (planetDetails){
            setDetailsPlanet({
                name: planetDetails.name,
                diameter: planetDetails.diameter,
                terrain: planetDetails.terrain,
                population: planetDetails.population,
                terrain: planetDetails.terrain,
                gravity: planetDetails.gravity,
                description: planetDetails.description,
            });
        }}
    }, [store.planets, uid]);
        
    return(
        <div className="container">
                    <div className="m-1" key={uid}>
                        <div className="infoDetails d-flex flex-nowrap col-12">
                            <div className="image justify-content-center col-6">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`} onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} alt="Image.jpg" className="justify-content-center" style={{ objectFit: "cover", maxWidth: "100%" }} />
                            </div>
                            <div className="infoDetails text-center col-6">
                                <h3 className="mainName">{detailsPlanet.name}</h3>
                                <p className="detailsText">{detailsPlanet.description}</p>
                            </div> 
                        </div>
                        <hr className="line my-4" />
                        <div className="infoBasic d-flex flex justify-content-between text-center m-2"> 
                            <div className="m-2">
                                <p className="name text-danger">Name</p>
                                <p className="name text-danger justify-content-center">{detailsPlanet.name}</p>  
                            </div>
                            <div className="m-2"> 
                                <p className="name text-danger">Diameter</p>
                                <p className="name text-danger justify-content-center">{detailsPlanet.diameter}</p>
                            </div>
                            <div className="m-2">
                                <p className="name text-danger">Terrain</p>
                                <p className="name text-danger">{detailsPlanet.terrain}</p>
                            </div>
                            <div className="m-2">
                                <p className="name text-danger">Population</p>
                                <p className="name text-danger">{detailsPlanet.population}</p>
                            </div>
                            <div className="m-2">
                                <p className="name text-danger">Climate</p>
                                <p className="name text-danger">{detailsPlanet.climate}</p>
                            </div>
                            <div className="m-2">
                                <p className="name text-danger">Gravity</p>
                                <p className="name text-danger">{detailsPlanet.gravity}</p>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default PlanetDetails;