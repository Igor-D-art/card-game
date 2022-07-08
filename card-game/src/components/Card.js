import React from "react";


function Card (props) {

    return (
        <ul>
            {props.cards.map((card) => {
                const i = props.cards.indexOf(card);
                return (
                    
                        <li key={i}>
                            <div id={i} className="card" onClick={props.shuffleCards}>
                                <img id={i} src={props.cards[i].link} alt=""/>
                            </div>
                        </li>
                
                )
            })}
      </ul>
    );
}

export default Card;