import React, { useEffect } from "react";
import Card from "./Card";
import { useState } from "react";

const firstImg = <img src="/images/1.png" alt=" " />
const seconImg = <img src="/images/2.png" alt=" " />
const thirdImg = <img src="/images/3.png" alt=" " />
const fourthImg = <img src="/images/4.png" alt=" " />




function Board() {

    const imgUrls = [firstImg, seconImg, thirdImg, fourthImg];
    
    const [images, setImages] = useState(imgUrls);

    const handleImgChange = () => {
        const shuffleArray = imgUrls.sort((a, b) => 0.5 - Math.random());
        console.log(shuffleArray)
        setImages(shuffleArray);
    }

    

  return (
    <div className="board">
          <Card
              images={images}
              shuffleCards={ handleImgChange} />
    </div>
  );
}

export default Board;


// const imgUrls = [];

//     function imgPopulater() {
//         for (let i = 1; i < 5; i++){
//             const img = <img src={`/images/${i}.png`} alt=" " />
//             imgUrls.push(img);
//         }
//         console.log(imgUrls);
//     }