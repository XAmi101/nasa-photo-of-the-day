import React, { useState, useEffect} from "react";
import axios from "axios";

const Nasa = () => {

    const [photo, setPhoto] = useState([]);

    useEffect(()=>{
      axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
          console.log(response);
      const nasaPhoto =response.data;
      console.log(nasaPhoto);
      setPhoto(nasaPhoto);
        });
    }, [])


    return (

        <div className="container">

            <h2>{photo.title}</h2>
            <img src={photo.hdurl}  width="70%" height="90%" alt="moon" />
            <p className="date">{photo.date}</p>
            <p className="description">{photo.explanation}</p>
        </div>

        );



}

export default Nasa;
