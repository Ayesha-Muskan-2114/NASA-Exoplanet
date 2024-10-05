import React from "react";
const Card = (props) => {
    return (
     
      <div 
      className='tc white dib pa3 br3 ma3 grow bw2 shadow-6 border-2 border-white'

    style={{ 
        backgroundImage: "url('https://wallpaper.dog/large/10809642.jpg')", // Replace with your image URL
        backgroundSize: 'cover', // Ensures the image covers the entire div
        backgroundPosition: 'center' // Centers the image
    }}>
       
        <div className='tc' style={{ width: '150px', height: '200px'}} >
            
          <h1>{props.name}</h1>
          <h6>{props.meaning}</h6>
        </div>
      </div>
      
    );
  }
  
export default Card;