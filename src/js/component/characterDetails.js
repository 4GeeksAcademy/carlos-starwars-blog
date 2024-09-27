import React, { useEffect } from "react";
import "../../styles/details.css";
import { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const CharacterDetails = () => {

    const { store, actions } = useContext(Context);

    const { uid } = useParams();

    const [detailsCharacter, setDetailsCharacter] = useState({
        name: "",
        birth_year: "",
        gender: "",
        height: "",
        skin_color: "",
        eye_color: "",
        description: "",
    })

    useEffect(()=> {
        const charactersDetails = store.characters.find(character => character.uid === uid);
        if (charactersDetails){
            setDetailsCharacter({
                name: charactersDetails.properties.name,
                birth_year: charactersDetails.properties.birth_year,
                gender: charactersDetails.properties.gender,
                height: charactersDetails.properties.height,
                skin_color: charactersDetails.properties.skin_color,
                eye_color: charactersDetails.properties.eye_color,
                description: charactersDetails.description
            });
        }
    }, [store.characters, uid]);
    
    return (
        <div className="container">
                    <div className="m-1" key={uid}>
                        <div className="infoDetails d-flex flex-nowrap col-12">
                            <div className="image justify-content-center col-6">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} alt="Image.jpg" className="justify-content-center" style={{ objectFit: "cover", maxWidth: "100%" }} />
                            </div>
                            <div className="infoDetails text-center col-6">
                                <h3 className="mainName">{detailsCharacter.name}</h3>
                                <p className="detailsText">{detailsCharacter.description}</p>
                            </div> 
                        </div>
                        <hr className="line my-4" />
                        <div className="infoBasic d-flex flex justify-content-between text-center m-2"> 
                            <div className="m-2">
                                <p className="name text-danger">Name</p>
                                <p className="name text-danger justify-content-center">{detailsCharacter.name}</p>  
                            </div>
                            <div className="m-2"> 
                                <p className="name text-danger">Birth</p>
                                <p className="name text-danger justify-content-center">{detailsCharacter.birth_year}</p>
                            </div>
                            <div className="m-2">
                                <p className="name text-danger">Gender</p>
                                <p className="name text-danger">{detailsCharacter.gender}</p>
                            </div>
                            <div className="m-2">
                                <p className="name text-danger">Height</p>
                                <p className="name text-danger">{detailsCharacter.height}</p>
                            </div>
                            <div className="m-2">
                                <p className="name text-danger">Skin Color</p>
                                <p className="name text-danger">{detailsCharacter.skin_color}</p>
                            </div>
                            <div className="m-2">
                                <p className="name text-danger">Eye color</p>
                                <p className="name text-danger">{detailsCharacter.eye_color}</p>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default CharacterDetails;