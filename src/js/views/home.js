import React, { useState } from "react";
import "../../styles/home.css";
import { useContext } from "react"; //importamos el hook useContext
import { Context } from "../store/appContext";
import Characters from "../component/characters.js"
import Planets from "../component/planet.js";
import Vehicles from "../component/vehicles.js";

export const Home = () => { // se ponen en llaves y no es paréntesis para usar JS
	
	const { store, actions } = useContext(Context); // Aquí se ejecuta el hook que devuelve el objeto flux	

	return(
		<>
			<div className="text-center mt-5">
				<Characters />
			</div>
			<div className="text-center mt-5">
				<Planets />
			</div>
			<div className="text-center mt-5">
				<Vehicles />
			</div>
		</>
	)
};
