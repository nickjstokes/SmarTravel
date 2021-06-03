import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const ViewProperty = (props) => {
    const [property, setProperty] = useState({});
    const { id } = props;

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/properties_db/" + id)
            .then((res) => {
                setProperty(res.data);
            });
    }, []);

    return (
        <div
            style={{
                border: "2px solid black",
                backgroundColor: "rgb(0, 156, 235)",
                borderRadius: "15px",
            }}
        >
            <div
                style={{
                    backgroundColor: "lightGrey",
                    padding: "10px",
                    borderBottom: "2px solid black",
                    color: "white",
                    borderRadius: "15px",
                }}
            >
                <h1
                    style={{
                        color: "rgb(0, 156, 235)",
                        textShadow: "2px 2px 2px white",
                    }}
                >
                    SmarTravel
                </h1>
                <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="blueButton"
                >
                    Dashboard
                </button>
            </div>
            <>
                <div style={{ display: "flex" }}>
                    <div
                        style={{ margin: "30px 0px 0px 30px", width: "400px" }}
                    >
                        <img
                            style={{
                                height: "255px",
                                width: "370px",
                                border: "2px solid black",
                                borderRadius: "10px",
                            }}
                            src={property.imageUrl}
                            alt="property"
                        ></img>
                        <h2 style={{ textAlign: "center" }}>{property.name}</h2>
                    </div>
                    <div
                        style={{
                            backgroundColor: "rgb(189, 228, 255)",
                            width: "300px",
                            margin: "30px",
                            padding: "10px",
                            fontWeight: "bold",
                            border: "2px solid black",
                            borderRadius: "10px",
                        }}
                    >
                        <p>Property Type: {property.propertyType}</p>
                        <p>Square ft: {property.squareFeet}</p>
                        <p>Rooms: {property.rooms}</p>
                        <p>
                            Self Check-in: {property.selfCheckIn ? "yes" : "no"}
                        </p>
                        <p>Wi-Fi: {property.wiFi ? "yes" : "no"}</p>
                        <p>WorkSpace: {property.workSpace ? "yes" : "no"}</p>
                        <p>Kitchen: {property.kitchen ? "yes" : "no"}</p>
                        Washer / Dryer: {property.washerDryer ? "yes" : "no"}
                    </div>
                </div>
            </>
        </div>
    );
};

export default ViewProperty;
