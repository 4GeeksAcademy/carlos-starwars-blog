import React, { useEffect } from "react";
import "../../styles/details.css";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const Details = () => {

    const { store, actions } = useContext(Context);
    const { type, id } = useParams();

    return (
        <div className="container">
            {/* {store.characters.map((item) => {
                return ( */}
                        <div className="m-1">
                            <div className="infoDetails d-flex flex-nowrap col-12">
                                <div className="image justify-content-center col-6">
                                    <img src={`https://starwars-visualguide.com/assets/img/people/1`} alt="Image.jpg" className="justify-content-center" style={{ objectFit: "cover", maxWidth: "100%" }} />
                                </div>
                                <div className="infoDetails text-center col-6">
                                    <h3 className="mainName">Nombre</h3>
                                    <p className="detailsText">lorem</p>
                                </div> 
                            </div>
                            <hr className="line my-4" />
                            <div className="infoBasic d-flex flex justify-content-between text-center m-2"> 
                                <div className="m-2">
                                    <p className="name text-danger">Name</p>
                                    <p className="name text-danger justify-content-center">Name</p>  
                                </div>
                                <div className="m-2"> 
                                    <p className="name text-danger">Birth</p>
                                    <p className="name text-danger justify-content-center">Name</p>
                                </div>
                                <div className="m-2">
                                    <p className="name text-danger">Gender</p>
                                    <p className="name text-danger">Name</p>
                                </div>
                                <div className="m-2">
                                    <p className="name text-danger">Height</p>
                                    <p className="name text-danger">Name</p>
                                </div>
                                <div className="m-2">
                                    <p className="name text-danger">Skin Color</p>
                                    <p className="name text-danger">Name</p>
                                </div>
                                <div className="m-2">
                                    <p className="name text-danger">Eye color</p>
                                    <p className="name text-danger">Name</p>
                                </div>
                            </div>
                        </div>
                      
                {/* )
            })} */}
            
        </div>
    )
}

export default Details;