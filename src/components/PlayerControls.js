import React from 'react';

function PlayerControls(props){
  return (
    <div className="player-controls">
      <button className="skip-btn" onClick={()=>{props.SkipSong(false)}}>
        <i className="fas fa-step-backward"></i>
      </button>
      <button id="btn" className="play-btn" onClick={()=>{props.setIsPlaying(!props.isPlaying)}}>
        <i className={props.isPlaying?"fas fa-pause":"fas fa-play"}></i>
      </button>
      <button className="skip-btn" onClick={()=>{props.SkipSong(true)}}>
        <i className="fas fa-step-forward"></i>
      </button>
      <script>

      </script>
    </div>
  )
}

export default PlayerControls;
