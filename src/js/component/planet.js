import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useNavigate } from "react-router";

const Planets = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="text-center mt-5">
            <h1 className="text-danger">Planets</h1>
            <div className="container overflow-auto d-flex flex-nowrap" style={{ overflowX: "scroll" }}>
                {store.planets == null ? <h1>Cargando planetas...</h1> : 
				store.planets == false ? <h1 className="text-danger">Ocurrió un error al cargar los planetas</h1> : 
				store.planets && store.planets.length > 0 && store.planets.map((planet) => 
                    <div className="card mx-2" style={{minWidth: "300px"}} key={planet.url.split("/")[5]}>						
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.url.split("/")[5]}.jpg`} onError={(e) => e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"} className="card-img-top" alt="..."  style={{ objectFit: "cover" }} height={298}/>
                        <div className="card-body">
                            <h5 className="card-title">{planet.name}</h5>
                            <p className="card-text fl">Population: {planet.population}</p>
                            <p className="card-text fl">Terrain: {planet.terrain}</p>
                            <div className="d-flex justify-content-between">
                                <button className="learnMore btn btn-primary"
                                    onClick={
                                        () => {navigate(`/planetDetails/${planet.url.split("/")[5]}`)}
                                    }>Learn more!</button>
                                <button className={`favoritos btn ${actions.isFavorite({name: planet.name, uid: planet.url.split("/")[5], type: "planetDetails"}) && "btn-danger"} `}
											onClick={() => actions.addFavoritos( {name: planet.name, uid: planet.url.split("/")[5], type: "planetDetails"})}>
										<i className={`text-warning ${actions.isFavorite({name: planet.name, uid: planet.url.split("/")[5], type: "planetDetails"}) ? "fa-solid" : "fa-regular"} fa-heart`}>
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