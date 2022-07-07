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

    const [score, setScore] = useState(0);

    const [bestScore, setBestScore] = useState(0);

    const handleImgChange = () => {
        const tempImgs = [...images];
        const shuffleArray = tempImgs.sort((a, b) => 0.5 - Math.random());
        setImages(shuffleArray);
        console.log('re-rener!')
    } 

    useEffect(() => {
        console.log('component did mount');
        handleImgChange();
    }, [])

  return (
      <div className="board">
          <div className="score">
              {`Score: ` + score}
          </div>
          <div className="bestScore">
              {`Best score: ` + bestScore}
          </div>
          <div className="cards">
              <Card
              images={images}
              shuffleCards={handleImgChange} />
          </div>
          
    </div>
  );
}

export default Board;


