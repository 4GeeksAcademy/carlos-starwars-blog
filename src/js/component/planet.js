import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";

const Planets = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="text-center mt-5">
            <h1 className="text-danger">Planets</h1>
            <div className="container overflow-auto d-flex flex-nowrap" style={{ overflowX: "scroll" }}>
                {store.planets.map((planets) => 
                    <div className="card mx-2" style={{minWidth: "300px"}} key={planets.uid}>						
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`} className="card-img-top" alt="..."  style={{ objectFit: "cover" }}/>
                        <div className="card-body">
                            <h5 className="card-title">{planets.properties.name}</h5>
                            <p className="card-text fl">Population: {planets.properties.population}</p>
                            <p className="card-text fl">Terrain: {planets.properties.terrain}</p>
                            <div className="d-flex justify-content-between">
                                <button className="learnMore btn btn-primary">Learn more!</button>
                                <button className="favoritos btn">
                                    <i className="fa-regular fa-heart" 
                                        onClick={() => actions.addFavoritos( {name: planets.properties.name, uid: planets.uid} )}>
                                    </i>
                                </button>								
                            </div>
                        </div>
                    </div>
                )}	
            </div>
        </div>
    )
}

export default Planets;