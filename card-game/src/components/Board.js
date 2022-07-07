import Card from "./Card";
import { useEffect, useState } from "react";

function Board() {

    const imgUrls = [];

    (function imgPopulater() {
        for (let i = 1; i < 13; i++){
            const img = <img src={`/images/${i}.png`} alt=" " />
            imgUrls.push(img);
        }
        console.log(imgUrls);
    })()
    
    const [images, setImages] = useState(imgUrls);

    const handleImgChange = () => {
        const tempImgs = [...images];
        const shuffleArray = tempImgs.sort((a, b) => 0.5 - Math.random());
        setImages(shuffleArray);
        console.log('re-rener!')
    } 

    useEffect(() => {
       console.log('use effect is here')
    }, [])

  return (
    <div className="board">
          <Card
              images={images}
              shuffleCards={ handleImgChange } />
    </div>
  );
}

export default Board;


