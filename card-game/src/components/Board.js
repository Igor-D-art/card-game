import Card from "./Card";
import { useEffect, useState } from "react";

function Board() {

    const initCards = [];

    (function cardPopulater() {
        for (let i = 0; i < 12; i++) {
            // const card = <img src={`/images/${i+1}.png`} alt=" " />
            const card = {
                // img: <img id=" " src={`/images/${i + 1}.png`} alt=" " />,
                link: `/images/${i + 1}.png`,
                counter: 0,
            }
            initCards.push(card);
        }
    })()
    
    const [cards, setCards] = useState(initCards);

    const [score, setScore] = useState(0);

    const [bestScore, setBestScore] = useState(0);

    const incremCounter = (event, tempCards) => {
        console.log(event.target)
        // make a shallow copy of the element where the counter needs to be increased
        const tempCard = { ...tempCards[event.target.id] }
        // updating the property
        if (tempCard.counter < 1) {
            tempCard.counter = tempCard.counter + 1;
            // putting back to the temporary array
            tempCards[event.target.id] = tempCard;
            // setting state
            setCards(tempCards)
            setScore(score + 1)
        } else {
            resetCounters(tempCards);
        }
    }

    function resetCounters(tempCards) {
        tempCards.forEach((card) => {
            card.counter = 0;
        })
        if (bestScore < score) {
            setBestScore(score)
        }
        setCards(tempCards);
        setScore(0);
    }

    const checkCounters = () => {
        cards.forEach((card) => {
            card.counter > 1 ? resetCounters() : setScore(score + 1);
        });
    }


    const shuffleCards = (tempCards) => {
        const shuffledCards = tempCards.sort((a, b) => 0.5 - Math.random());
        setCards(shuffledCards);
        console.log('re-rener!');
    }

    const handleCardChange = (event) => {
        // making a shallow copy of the cards array
        const tempCards = [...cards];

        if (event !== undefined) {
            incremCounter(event, tempCards);
        }

        // shuffling array and setting cards
        shuffleCards(tempCards);
    } 

    useEffect(() => {
        console.log('component did mount');
        handleCardChange();
    }, [])

    useEffect(() => {
        console.log('component did update');
        console.log(cards)
    }, [score])


  return (
      <div className="board">
          <header>
            <h1>Cards Memory Game</h1>
            <div className="scores">
                {`Current score: ` + score}
            </div>
            <div className="scores">
                {`Best score: ` + bestScore}
            </div>
          </header>
          
          <div className="cards">
              <Card
              cards={cards}
              shuffleCards={handleCardChange} />
          </div>
          
    </div>
  );
}

export default Board;


