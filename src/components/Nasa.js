import React, { useState, useEffect} from "react";
import axios from "axios";
import { Segment, Image, Header } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';

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

 <Segment padded textAlign='left'>

            <Image src={photo.hdurl}  floated='left' size='large' circular fluid />
            <Header as='h2' >
            {photo.title}
              <Header.Subheader className="date">{photo.date}</Header.Subheader>
              </Header>
            <p>{photo.explanation}
            </p>

            </Segment>

        // <div className="container">
        //
        //     <h2>{photo.title}</h2>
        //     <img src={photo.hdurl}  width="70%" height="90%" alt="moon" />
        //     <p className="date">{photo.date}</p>
        //     <p className="description">{photo.explanation}</p>
        // </div>

        );



}

export default Nasa;
