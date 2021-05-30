import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import "../App.css";

const Main = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/properties_db").then((res) => {
            setProperties(res.data);
        });
    }, []);

    const deleteHandler = (deletedPropertyId) => {
        axios
            .delete(
                "http://localhost:8000/api/properties_db/" + deletedPropertyId
            )
            .then((res) => {
                setProperties(
                    properties.filter(
                        (property) => property._id !== deletedPropertyId
                    )
                );
            });
    };

    return (
        <div className="wrapper">
            <div className="header">
                <h1>SmarTravel</h1>
                <button
                    type="button"
                    onClick={() => navigate("/new/")}
                    className="button"
                >
                    Add Property
                </button>
            </div>
            <table className="table">
                {properties.map((property, idx) => {
                    return (
                        <tr key={idx}>
                            <td>
                                <img
                                    className="image"
                                    src={property.imageUrl}
                                    alt="property"
                                ></img>
                            </td>
                            <td>{property.name}</td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        navigate("/view/" + property._id)
                                    }
                                    className="view_button"
                                >
                                    View
                                </button>
                                <button
                                    type="button"
                                    onClick={() => deleteHandler(property._id)}
                                    className="del_button"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
};

export default Main;
