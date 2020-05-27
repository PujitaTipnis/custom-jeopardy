import React from 'react';
import Player from '../Player/Player';
import './Scoreboard.css';

const Scoreboard = ({ players }) => {
    const playersArr = Object.values(players);

    return (
       <div className="scoreboardContainer">
           {playersArr.map(player => (
               <Player {...player} />
           ))}
       </div> 
    );
};

export default Scoreboard;