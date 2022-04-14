import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Voyager",
      artist: "Kihyun",
      img_src: "./images/1.jpg",
      src: "./music/1.mp3"
    },
    {
      title: "Dramarama",
      artist: "Monsta X",
      img_src: "./images/4.jpg",
      src: "./music/4.mp3"
    },
    {
      title: "Not By The Moon",
      artist: "GOT7",
      img_src: "./images/12.jpg",
      src: "./music/12.mp3"
    },
    {
      title: "Follow",
      artist: "Monsta X",
      img_src: "./images/11.jpg",
      src: "./music/11.mp3"
    },
    {
      title: "MIROH",
      artist: "Stray kids",
      img_src: "./images/2.jpg",
      src: "./music/2.mp3"
    },
    {
      title: "Warning!",
      artist: "DAY6",
      img_src: "./images/3.jpg",
      src: "./music/3.mp3"
    },
    {
      title: "Back Door",
      artist: "Stray kids",
      img_src: "./images/5.jpg",
      src: "./music/5.mp3"
    },
    {
      title: "I Wait",
      artist: "DAY6",
      img_src: "./images/9.jpg",
      src: "./music/9.mp3"
    },
    {
      title: "Letting Go",
      artist: "DAY6",
      img_src: "./images/13.jpg",
      src: "./music/13.mp3"
    },
    {
      title: "Shoot Me",
      artist: "DAY6",
      img_src: "./images/3.jpg",
      src: "./music/6.mp3"
    },
    {
      title: "Thunderous",
      artist: "Stray kids",
      img_src: "./images/8.jpg",
      src: "./music/8.mp3"
    },
    {
      title: "You can't hold my heart",
      artist: "Monsta X",
      img_src: "./images/7.jpg",
      src: "./music/7.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(()=>{
    setNextSongIndex(()=>{
      if(currentSongIndex + 1 > songs.length - 1){
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    })
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
