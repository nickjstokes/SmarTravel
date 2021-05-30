import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import PropertyForm from "./PropertyForm";

const AddProperty = () => {
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        //Send a post request to our API to create an Author
        axios
            .post("http://localhost:8000/api/properties_db", data)
            .then(res => {
                console.log(res);
                if (res.data.errors) {
                    const errorArr = []; // Define a temp error array to push the messages in
                    for (const key of Object.keys(res.data.errors)) {
                        // Loop through all errors and get the messages
                        errorArr.push(res.data.errors[key].message);
                    }
                    // Set Errors
                    setErrors(errorArr);
                } else {
                    navigate("/");
                }
            }) // If successful, do something with the response.
            .catch(err => {
                console.error(err);
            });
    };

    return <PropertyForm onSubmitProp={onSubmitHandler} errors={errors} />;
};

export default AddProperty;
