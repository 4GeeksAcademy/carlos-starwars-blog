import React, { useEffect } from "react";
import "../../styles/details.css";
import { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const VehiclesDetails = () => {

    const { store, actions } = useContext(Context);
    const { uid } = useParams();

    const [detailVehicles, setDetailVehicles] = useState({
        name: "",
        manufacturer: "", 
        model: "",
        length: "",
        cargo_capacity: "",
        description: "",
    });

    useEffect(()=>{
        if(store.vehicles && store.vehicles.length > 0 && uid) {
        const vehiclesDetail = store.vehicles.find(vehicle => vehicle.url.split("/")[5] === uid)
        if(vehiclesDetail){
            setDetailVehicles({
                name: vehiclesDetail.name,
                manufacturer: vehiclesDetail.manufacturer, 
                model: vehiclesDetail.model,
                length: vehiclesDetail.length,
                cargo_capacity: vehiclesDetail.cargo_capacity,
                description: vehiclesDetail.description,
            });
        }}
    }, [store.vehicles, uid])

    return(
        <div className="container">
                <div className="m-1" key={uid}>
                    <div className="infoDetails d-flex flex-nowrap col-12">
                        <div className="image justify-content-center col-6">
                            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`} alt="Image.jpg" className="justify-content-center" style={{ objectFit: "cover", maxWidth: "100%" }} />
                        </div>
                        <div className="infoDetails text-center col-6">
                            <h3 className="mainName">{detailVehicles.name}</h3>
                            <p className="detailsText">{detailVehicles.description}</p>
                        </div> 
                    </div>
                    <hr className="line my-4" />
                    <div className="infoBasic d-flex flex justify-content-between text-center m-2"> 
                        <div className="m-2">
                            <p className="name text-danger">Manufacturer</p>
                            <p className="name text-danger justify-content-center">{detailVehicles.manufacturer}</p>  
                        </div>
                        <div className="m-2"> 
                            <p className="name text-danger">Model</p>
                            <p className="name text-danger justify-content-center">{detailVehicles.model}</p>
                        </div>
                        <div className="m-2">
                            <p className="name text-danger">Length</p>
                            <p className="name text-danger">{detailVehicles.length}</p>
                        </div>
                        <div className="m-2">
                            <p className="name text-danger">Cargo capacity</p>
                            <p className="name text-danger">{detailVehicles.cargo_capacity}</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default VehiclesDetails;