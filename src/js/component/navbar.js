import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Home } from "../views/home";
import { useContext } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	
	const { store } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container d-flex justify-content-between">
				<div className="iconStarWars d-flex w-1">
					<Link to={"/"}>
						<img src="https://img.icons8.com/color/200/star-wars.png" style={{width: "5em"}}/>
					</Link>
				</div>
				<div className="botonFavoritos ml-auto">
					<div className="dropdown d-flex">
						<button className="btn btn-primary d-flex flex dropdown-toggle align-item-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos
							<p className="contador mx-2 px-2 rounded" 
								style={{color: "white", background: "gray"}}>{store.favoritos.length}</p>
						</button>
												
						<ul className="dropdown-menu">
							<li><a className="dropdown-item" href="#">Action</a></li>
						</ul>
					</div>
				</div>
			</div>
			
		</nav>
	);
};
