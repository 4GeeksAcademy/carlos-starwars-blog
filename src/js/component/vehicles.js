import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";


const Vehicles = () => {

    const { store, actions } = useContext(Context);

    return (
        <div className="container text-center mt-5">
				<h1 className="text-danger">Vehicles</h1>
				<div className="container overflow-auto d-flex flex-nowrap" style={{ overflowX: "scroll" }}>
					{store.vehicles.map((item) => {
						return (
							<div className="card mx-2" style={{minWidth: "300px"}} key={item.uid}>
								<div>
									<img src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`} className="card-img-top" alt="..."  style={{ objectFit: "cover" }}/>
								</div>
								<div className="card-body">
									<h5 className="card-title">Name: {item.properties.name}</h5>
									<p className="card-text fl">Model: {item.properties.model}:</p>
									<p className="card-text fl">Passengers: {item.properties.passengers}:</p>
									<p className="card-text fl">Cargo capacity: {item.properties.cargo_capacity}:</p>
									<p className="card-text fl">Crew: {item.properties.crew}:</p>
								</div>
								<div className="d-flex justify-content-between">
									<button className="learnMore btn btn-primary">Learn more</button>
									<button className="favoritos btn">
										<i className="fa-regular fa-heart" onClick={() => actions.addFavoritos({ name: item.properties.name, uid: item.uid})}></i>
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