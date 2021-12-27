import React, {useState, useEffect, useRef} from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";

function Player(props){
    const audioElement = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(()=>{
        isPlaying ? audioElement.current.play() : 
        audioElement.current.pause();
    });

    const SkipSong = (forwards=true)=>{
        if(forwards) props.setCurrentSongIndex(()=>{
            let temp = props.setCurrentSongIndex;
            console.log(temp);
            temp++;
            if(temp>props.songs.length-1) temp=0;
            return temp;
        })
        else props.setCurrentSongIndex(()=>{
            let temp = props.setCurrentSongIndex;
            console.log(temp);
            temp--;
            if(temp<0) temp=props.songs.length-1;
            return temp;
        })
    }

    return(
        <div className="player">
            <audio src={props.songs[props.currentSongIndex].src} ref={audioElement}></audio>
            <h4>Playing now:</h4>
            <PlayerDetails song={props.songs[props.currentSongIndex]}/>
            <PlayerControls 
                isPlaying={isPlaying} 
                setIsPlaying={setIsPlaying} 
                SkipSong={SkipSong}
            />
            <p><strong>Next up:</strong>{props.songs[props.nextSongIndex].artist} - {props.songs[props.nextSongIndex].title}</p>
        </div>
    )
}

export default Player;