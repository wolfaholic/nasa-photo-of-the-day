import React, { useEffect, useState } from "react";
import axios from "axios";

const Picture = () => {
    const [picture, setPicture] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [explanation, setExplanation] = useState("");
    const [copyright, setCopyright] = useState("");

    useEffect(() => {
        function getImg() {
            axios
                .get(
                    'https://api.nasa.gov/planetary/apod?api_key=pVMkN1DjKBHaNYvfFsKlnAnPNBeW7yyWrfo8FtNy'
                )
                .then(response => {
                    
                    setPicture(response.data.url);
                    setDate(response.data.date);
                    setTitle(response.data.title);
                    setExplanation(response.data.explanation);
                    setCopyright(response.data.copyright);
                    console.log(response.data);
                })
                .catch (error => console.log(error));
        }
        getImg();
    },[date]);

    return (
        <div className = "container">
            <div className = "topSection">
                <h1 className = "mainHeader">
                    <img src="/assets/projectnasa_logo.png" alt= "project nasa logo"/>
                </h1>
                <h3 className = "subHeader">
                    Photograph of the Day
                </h3>
            </div>
            <div className = "pictureCard">
                <h2>
                    {title}
                </h2>
                <p>{date} {copyright}</p>
                <p>{explanation}</p>
            </div>
            <img src={picture} alt= "NASA PIC of the Day" />
        </div>



    );
};


export default Picture;