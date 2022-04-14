import React, {useState, useRef, useEffect} from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

function Player(props){

  const audioEle = useRef(null);
  // audioEle.current
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(()=>{
    if(isPlaying){
      audioEle.current.play();
      audioEle.current.volume = 0.0575;
    } else {
      audioEle.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if(forwards){
      props.setCurrentSongIndex(()=>{
        let temp = props.currentSongIndex;
        temp++;
        if(temp > props.songs.length - 1){
          temp = 0;
        }
        return temp;
      });
    } else {
      props.setCurrentSongIndex(()=>{
        let temp = props.currentSongIndex;
        temp--;
        if(temp < 0){
          temp = props.songs.length - 1;
        }
        return temp;
      });
    }
  }

  return (
    <>
    <div className="player">
      <div className="screen">
      <audio loop id="myaudio" volume="0.1" src={props.songs[props.currentSongIndex].src} ref={audioEle}></audio>
      <PlayerDetails song={props.songs[props.currentSongIndex]}/>
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>Next: {props.songs[props.nextSongIndex].title} - {props.songs[props.nextSongIndex].artist}</p>
      <p className="ftr-mobile">&copy; 2022 Nam Nguyen Dinh</p>
      </div>
    </div>
    <div className="ftr">
    &copy; 2022 Nam Nguyen Dinh</div>
    </>
  )
}

export default Player;
