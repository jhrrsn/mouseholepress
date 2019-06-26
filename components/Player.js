import AudioPlayer from "react-h5-audio-player";

const Player = props => (
  <AudioPlayer
    autoPlay
    src="static/audio/{props.name}"
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);

export default Player;
