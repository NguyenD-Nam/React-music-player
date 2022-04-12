import React from 'react';

function PlayerDetails(props){
  return (
    <div className="player-details">
      <div className="details-image">
        <img src={props.song.img_src}/>
      </div>
      <h3 className="details-title">{props.song.title}</h3>
      <h4 className="details-artist">{props.song.artist}</h4>
    </div>
  )
}

export default PlayerDetails;
