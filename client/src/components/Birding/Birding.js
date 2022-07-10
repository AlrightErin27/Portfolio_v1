import React, { useState, useEffect } from "react";
import bird0 from "../../game-imgs/bird-game/eagle-owl.png";
import bird1 from "../../game-imgs/bird-game/falco-vespertinus.png";
import bird2 from "../../game-imgs/bird-game/great-cormorant.png";
import bird3 from "../../game-imgs/bird-game/honey-buzzard.png";
import bird4 from "../../game-imgs/bird-game/red-crossbills.png";
import bird5 from "../../game-imgs/bird-game/yellow-oriole.png";
import bird6 from "../../game-imgs/bird-game/bohemian-waxing-bird.png";
import bird7 from "../../game-imgs/bird-game/spotted-woodpecker.png";

export default function App() {
  const [birds, setBirds] = useState([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState();

  const generateIndex = () => {
    setIndex(Math.floor(Math.random() * 6));
  };

  const startGame = () => {
    const timer = setInterval(generateIndex, 2000);
    setTimer(timer);

    const mixBirds = [
      {
        img: bird0,
        name: "Eagle Owl",
      },
      {
        img: bird1,
        name: "Falco Vespertinus",
      },
      {
        img: bird2,
        name: "Great Cormorant",
      },
      {
        img: bird3,
        name: "Honey Buzzard",
      },
      {
        img: bird4,
        name: "Red Crossbills",
      },
      {
        img: bird5,
        name: "Yellow Oriole",
      },
      {
        img: bird6,
        name: "Bohemian Waxing Bird",
      },
      {
        img: bird7,
        name: "Spotted Woodpecker",
      },
    ]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    setBirds(mixBirds);
  };

  const endGame = () => {
    clearInterval(timer);
    setScore(0);
    setIndex(0);
    setBirds([]);
  };

  const onClick = (n) => {
    if (index === n) {
      setScore((score) => score + 1);
    }
  };

  return (
    <div>
      <style>
        {`
        .hole {
          width: 10rem;
          height: 2rem;
        }
        .container {
          display: inline-block;
        }
        img {
          width: 10rem;
  
        animation: fadeinout .5s linear 1 forwards;
        }

        }
        @keyframes fadeinout {
            0% { opacity: 0, z-index: -1 }, 
            50% { opacity: 1; }
            100% { opacity: 0, z-index: -1 }
          }
      `}
      </style>
      <button onClick={startGame}>start game</button>
      <button onClick={endGame}>end game</button>
      <p>score: {score}</p>
      <div>
        {Array(6)
          .fill()
          .map((_, n) => {
            if (index === n) {
              return (
                <div className="container">
                  {birds.length > 0 ? (
                    <img
                      src={
                        birds[Math.floor(Math.random() * (7 - 1 + 1) + 1)].img
                      }
                      alt="bird"
                      onClick={() => onClick(n)}
                    />
                  ) : (
                    <></>
                  )}
                </div>
              );
            } else {
              return (
                <div className="container">
                  <div className="hole"></div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}