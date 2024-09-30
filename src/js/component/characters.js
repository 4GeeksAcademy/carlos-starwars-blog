import React, { Component } from "react";
import { Context } from "../store/appContext"; 
import { useContext } from "react"; //importamos el hook useContext
import { useNavigate } from "react-router";


const Characters = () => {
    
    const { store, actions } = useContext(Context);
	const navigate = useNavigate();

    return (
        <div className="container text-center mt-5">
				<h1 className="text-danger">Characters</h1>
				<div className="container overflow-auto d-flex flex-nowrap" style={{ overflowX: "scroll" }}>
					{store.characters == null ? <h1>Cargando personajes...</h1> : 
					store.characters == false ? <h1 className="text-danger">Ocurrió un error al cargar los personajes</h1> : 
					store.characters && store.characters.length > 0 && store.characters.map((item) => {
						return (
							<div className="card mx-2" style={{minWidth: "300px"}} key={item.url.split("/")[5]}>
								<div>
									<img src={`https://starwars-visualguide.com/assets/img/characters/${item.url.split("/")[5]}.jpg`} className="card-img-top" alt="..."  style={{ objectFit: "cover" }}/>
								</div>
								<div className="card-body">
									<h5 className="card-title">Name: {item.name}</h5>
									<p className="card-text fl">Gender: {item.gender}:</p>
									<p className="card-text fl">Hair color: {item.hair_color}:</p>
									<p className="card-text fl">Eye color: {item.eye_color}:</p>
								</div>
								<div className="d-flex justify-content-between">
									<button className="learnMore btn btn-primary" onClick={
										() => {navigate(`/characterDetails/${item.url.split("/")[5]}`)}
									}>Learn more</button>
									<button className={`favoritos btn ${actions.isFavorite({name: item.name, uid: item.url.split("/")[5], type: "characterDetails"}) && "btn-danger"} `}
											onClick={() => actions.addFavoritos( {name: item.name, uid: item.url.split("/")[5], type: "characterDetails"})}>
										<i className={`text-warning ${actions.isFavorite({name: item.name, uid: item.url.split("/")[5], type: "characterDetails"}) ? "fa-solid" : "fa-regular"} fa-heart`}>
										</i>
									</button>
								</div>
							</div>
						)}
					)}	
				</div>
		</div>
    )
}


export default Characters;