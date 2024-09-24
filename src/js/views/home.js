import React, { useState } from "react";
import "../../styles/home.css";
import { useContext } from "react"; //importamos el hook useContext
import { Context } from "../store/appContext";
import Characters from "../component/characters.js"
import Planets from "../component/planet.js";

export const Home = () => { // se ponen en llaves y no es paréntesis para usar JS
	
	const { store, actions } = useContext(Context); // Aquí se ejecuta el hook que devuelve el objeto flux
	
	addEventListener("click", (addFavorites) => {})		

	return(
		<>
			<div className="text-center mt-5">
				<Characters />
			</div>
			<div className="text-center mt-5">
				<Planets />
			</div>
		</>
	)
};
