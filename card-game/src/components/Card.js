import React from "react";


function Card (props) {

    return (
        props.images.map((image) => {
            const i = props.images.indexOf(image);
            return (
                <ul key={i}>
                    <li>
                        <div className="card" onClick={props.shuffleCards}>
                            <div className="image">
                                {props.images[i]}
                            </div>
                        </div>
                    </li>
              </ul>
          )
      })
  );
}

export default Card;