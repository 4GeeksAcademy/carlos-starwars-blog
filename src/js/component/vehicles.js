import React from "react";
import { Context } from "../store/appContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router";


const Vehicles = () => {

    const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	
    return (
        <div className="container text-center mt-5">
				<h1 className="text-danger">Vehicles</h1>
				<div className="container overflow-auto d-flex flex-nowrap" style={{ overflowX: "scroll" }}>
					{store.vehicles == null ? <h1>Cargando vehículos...</h1> : 
					store.vehicles == false ? <h1 className="text-danger">Ocurrió un error al cargar los vehículos</h1> : 
					store.vehicles && store.vehicles.length > 0 && store.vehicles.map((item) => {
						return (
							<div className="card mx-2" style={{minWidth: "300px"}} key={item.url.split("/")[5]}>
								<div>
									<img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.url.split("/")[5]}.jpg`} className="card-img-top" alt="..."  style={{ objectFit: "cover" }}/>
								</div>
								<div className="card-body">
									<h5 className="card-title">Name: {item.name}</h5>
									<p className="card-text fl">Model: {item.model}:</p>
									<p className="card-text fl">Passengers: {item.passengers}:</p>
									<p className="card-text fl">Cargo capacity: {item.cargo_capacity}:</p>
									<p className="card-text fl">Crew: {item.crew}:</p>
								</div>
								<div className="d-flex justify-content-between">
									<button className="learnMore btn btn-primary"
										onClick={
											() => {navigate(`/vehicleDetails/${item.url.split("/")[5]}`)}
										}
									>Learn more</button>
									<button className={`favoritos btn ${actions.isFavorite({name: item.name, uid: item.url.split("/")[5], type: "vehicleDetails"}) && "btn-danger"} `}
											onClick={() => actions.addFavoritos( {name: item.name, uid: item.url.split("/")[5], type: "vehicleDetails"})}>
										<i className={`text-warning ${actions.isFavorite({name: item.name, uid: item.url.split("/")[5], type: "vehicleDetails"}) ? "fa-solid" : "fa-regular"} fa-heart`}>
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

export default Vehicles;