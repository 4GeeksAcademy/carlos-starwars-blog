import React from "react";
import "../../styles/details.css";

const Details = () => {

    return (
        <div className="container">
            <div className="infoDetails d-flex flex-nowrap col-12">
               <div className="image justify-content-center col-6 ">
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-wolf-animals-images-wallpaper-for-pc-384x480-image_2916211.jpg" alt="Image.jpg" className="justify-content-center" style={{ objectFit: "cover", maxWidth: "100%" }} />
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
    )
}

export default Details;