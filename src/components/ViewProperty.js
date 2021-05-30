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
                    }}
                >
                    {property.name}
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
                    <div style={{ margin: "30px", width: "400px" }}>
                        <img
                            style={{
                                height: "250px",
                                width: "360px",
                                border: "2px solid black",
                                borderRadius: "10px",
                            }}
                            src={property.imageUrl}
                            alt="property"
                        ></img>
                        <h1 style={{ textAlign: "center" }}>
                            {property.squareFeet} sq ft
                        </h1>
                    </div>
                    <div
                        style={{
                            backgroundColor: "white",
                            width: "300px",
                            margin: "30px",
                            padding: "10px",
                            fontWeight: "bold",
                            border: "2px solid black",
                            borderRadius: "10px",
                        }}
                    >
                        <h2 style={{ textAlign: "center" }}>Info</h2>
                        {/* <br /> */}
                        <p>Property Type: {property.propertyType}</p>
                        {/* <br /> */}
                        <p>Rooms: {property.rooms}</p>
                        {/* <br /> */}
                        <div>
                            Self Check-in: {property.selfCheckIn ? "yes" : "no"}
                        </div>
                        <br />
                        <div>Wi-Fi: {property.wiFi ? "yes" : "no"}</div>
                        <br />
                        <div>
                            WorkSpace: {property.workSpace ? "yes" : "no"}
                        </div>
                        <br />
                        <div>Kitchen: {property.kitchen ? "yes" : "no"}</div>
                        <br />
                        <div>
                            Washer / Dryer:{" "}
                            {property.washerDryer ? "yes" : "no"}
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};

export default ViewProperty;
