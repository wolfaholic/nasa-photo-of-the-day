import React, { useEffect, useState } from "react";
import axios from "axios";

const Picture = () => {
    const [picture, setPicture] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [explaination, setExplaination] = useState("");

    useEffect(() => {
        function getImg() {
            axios
                .get(
                    'https://api.nasa.gov/planetary/apod?api_key=pVMkN1DjKBHaNYvfFsKlnAnPNBeW7yyWrfo8FtNy'
                )
                .then(response => {
                    /* console.log(response.data); */
                    setPicture(response.data.url);
                    setDate(response.data.date);
                    setTitle(response.data.title);
                    setExplaination(response.data.explaination);
                })
                .catch (error => console.log(error));
        }

    },[date]);

    return (
        <div className = "container">
            <div className = "topSection">
                <h1 className = "mainHeader">
                    Project NASA
                </h1>
                <h3 className = "subHeader">
                    Photograph of the Day
                </h3>
            </div>
            <div className = "pictureCard">
                <h2>
                    {title}
                </h2>
                <p>{date}</p>
                <p>{explaination}</p>
            </div>
            <img src={picture} alt= "NASA PIC of the Day" />
        </div>



    );
};


export default Picture;