import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Home } from "../views/home";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

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
							Favorites
							<p className="contador mx-2 px-2 rounded" 
								style={{color: "white", background: "gray"}}>{store.favoritos.length}</p>
						</button>
												
						<ul className="dropdown-menu dropdown-menu-end">
							{store.favoritos.length == 0 ? (
									<p className="d-flex flex justify-content-center text-secondary p-1">Favorites empty</p>
							) : (
								store.favoritos.map((favorite, index) => (
									<li key={index} className="dropdown-item favoriteName d-flex justify-content-between align-item-center border">
										<span className="dropdown-item" role="button" onClick={() => navigate(`/${favorite.type}/${favorite.uid}`)}>{favorite.name}</span>
          								<i className="delete fa-solid fa-trash-can d-flex flex p-2" role="button"
											onClick={(e) => {
												e.stopPropagation()
												actions.deleteFavorite({name: favorite.name})
												}}>
										</i>
									</li>
								))
							)}

							
						</ul>
					</div>
				</div>
			</div>
			
		</nav>
	);
};
