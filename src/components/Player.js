import React, {useState, useEffect, useRef} from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

function Player(props){
    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(()=>{
        if(isPlaying) audioElement.current.play();
        else audioElement.current.pause();
    });

    const SkipSong = (forwards=true)=>{
        console.log('beginning skipsong')
        console.log(props.songs.length);
        console.log(props.songs);
        if(forwards) {
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                console.log(temp);
                temp++;
                if(temp>props.songs.length-1) temp=0;
                return temp;
            });
        }
        else {
            props.setCurrentSongIndex(()=>{
                let temp = props.currentSongIndex;
                console.log(temp);
                temp--;
                if(temp<0) temp=props.songs.length-1;
                return temp;
            });
        }
    }

    return(
        <div className="player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioElement}></audio>
            <h4>Playing now</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
            <PlayerControls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                SkipSong={SkipSong} 
            />
            <p>Next up: <span>{props.songs[props.nextSongIndex].title} by {props.songs[props.nextSongIndex].artist}</span></p>
        </div>
    )
}

export default Player;