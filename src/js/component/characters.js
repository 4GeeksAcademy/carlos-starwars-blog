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
					{store.characters.map((item) => {
						return (
							<div className="card mx-2" style={{minWidth: "300px"}} key={item.uid}>
								<div>
									<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."  style={{ objectFit: "cover" }}/>
								</div>
								<div className="card-body">
									<h5 className="card-title">Name: {item.properties.name}</h5>
									<p className="card-text fl">Gender: {item.properties.gender}:</p>
									<p className="card-text fl">Hair color: {item.properties.hair_color}:</p>
									<p className="card-text fl">Eye color: {item.properties.eye_color}:</p>
								</div>
								<div className="d-flex justify-content-between">
									<button className="learnMore btn btn-primary" onClick={
										() => {navigate("/details/")}
									}>Learn more</button>
									<button className="favoritos btn">
										<i className="fa-regular fa-heart" 
											onClick={() => 
												actions.addFavoritos( {name: item.properties.name, uid: item.uid})}
												>
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