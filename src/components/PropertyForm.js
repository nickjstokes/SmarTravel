import React, { useState } from "react";
import { navigate } from "@reach/router";

const PropertyForm = (props) => {
    const { onSubmitProp, errors } = props;
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [rooms, setRooms] = useState(1);
    const [wiFi, setWiFi] = useState(true);
    const [workSpace, setWorkSpace] = useState(true);
    const [kitchen, setKitchen] = useState(true);
    const [selfCheckIn, setSelfCheckIn] = useState(true);
    const [washerDryer, setWasherDryer] = useState(true);
    const [squareFeet, setSquareFeet] = useState("");
    const [propertyType, setPropertyType] = useState("House");

    return (
        <>
            <div
                style={{
                    border: "2px solid black",
                    backgroundColor: "rgb(0, 156, 235)",
                    borderRadius: "15px",
                    fontWeight: "bold",
                    color: "darkBlue",
                }}
            >
                <div className="header">
                    <h1>SmarTravel</h1>
                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="blueButton"
                    >
                        Dashboard
                    </button>
                </div>
                {errors.map((err, index) => (
                    <p key={index} style={{ color: "red", marginLeft: "20px" }}>
                        {err}
                    </p>
                ))}

                <form
                    onSubmit={(e) =>
                        onSubmitProp(e, {
                            name,
                            imageUrl,
                            rooms,
                            wiFi,
                            workSpace,
                            kitchen,
                            squareFeet,
                            propertyType,
                            washerDryer,
                            selfCheckIn,
                        })
                    }
                    style={{ margin: "20px" }}
                >
                    <div style={{ display: "flex" }}>
                        <div className="left-box">
                            <label>Property Name:</label>
                            <br />
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="textInputs"
                            />
                            <br />
                            <label>Image Url:</label>
                            <br />
                            <input
                                type="text"
                                name="imageUrl"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="textInputs"
                            />
                            <br />
                            <label>Rooms:</label>
                            <br />
                            <select
                                name="rooms"
                                value={rooms}
                                onChange={(e) => setRooms(e.target.value)}
                                className="dropdownInputs"
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            <br />
                            <label>Square Feet:</label>
                            <br />
                            <input
                                type="text"
                                name="squareFeet"
                                value={squareFeet}
                                onChange={(e) => setSquareFeet(e.target.value)}
                                className="textInputs"
                            />
                            <br />
                        </div>
                        <div className="right-box">
                            <label>Property Type:</label>
                            <br />
                            <select
                                name="propertyType"
                                value={propertyType}
                                onChange={(e) =>
                                    setPropertyType(e.target.value)
                                }
                                className="textInputs"
                            >
                                <option value="house">House</option>
                                <option value="townhouse">Townhouse</option>
                                <option value="apartment">Apartment</option>
                                <option value="condo">Condo</option>
                                <option value="cabin">Cabin</option>
                            </select>
                            <br />
                            <br />
                            <br />
                            <input
                                type="checkbox"
                                id="selfCheckIn"
                                defaultChecked={selfCheckIn}
                                onChange={(e) =>
                                    setSelfCheckIn(e.target.checked)
                                }
                            />
                            <label htmlFor="selfCheckIn">Self Check-in</label>
                            <br />
                            <br />
                            <input
                                type="checkbox"
                                id="wiFi"
                                defaultChecked={wiFi}
                                onChange={(e) => setWiFi(e.target.checked)}
                            />
                            <label htmlFor="wiFi">Wi-Fi</label>
                            <br />
                            <br />
                            <input
                                type="checkbox"
                                id="workSpace"
                                defaultChecked={workSpace}
                                onChange={(e) => setWorkSpace(e.target.checked)}
                            />
                            <label htmlFor="workSpace">WorkSpace</label>
                            <br />
                            <br />
                            <input
                                type="checkbox"
                                id="kitchen"
                                defaultChecked={kitchen}
                                onChange={(e) => setKitchen(e.target.checked)}
                            />
                            <label htmlFor="kitchen">Kitchen</label>
                            <br />
                            <br />
                            <input
                                type="checkbox"
                                id="washerDryer"
                                defaultChecked={washerDryer}
                                onChange={(e) =>
                                    setWasherDryer(e.target.checked)
                                }
                            />
                            <label htmlFor="wiFi">Washer / Dryer</label>
                            <br />
                            <br />
                            <input
                                type="submit"
                                value="Add Property"
                                className="blueButton"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default PropertyForm;
