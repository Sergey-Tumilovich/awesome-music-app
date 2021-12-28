import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {//TODO: get this into a database
  const [songs] = useState([
    {
      title: "Blood and Stone",//title
      artist: "Audiomachine",//artist
      img_src: "./images/blood_and_stone.jpeg",//./images/src of image
      src: "./music/blood_and_stone.mp3"//./music/src of music
    },
    {
      title: "Assassins of Kings",//title
      artist: "Adam Skorupa & Krzysztof Wierzynkiewicz",//artist
      img_src: "./images/Witcher_2_cover.jpg",//./images/src of image
      src: "./music/assassins_of_kings.mp3"//./music/src of music
    },
    {
      title: "Final Destination",//title
      artist: "Within Temptation",//artist
      img_src: "./images/final_destination.jpg",//./images/src of image
      src: "./music/within_temptation-final_destination.mp3"//./music/src of music
    },
    {
      title: "Endless War",//title
      artist: "Within Temptation",//artist
      img_src: "./images/endless_war.jpg",//./images/src of image
      src: "./music/within-temptation-endless-war_(freemuzon.net).mp3"//./music/src of music
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);//currentSongIndex+1
  
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  
  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex = {setCurrentSongIndex}
        nextSongIndex = {nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
