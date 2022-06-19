import React from 'react';
import { Button } from 'reactstrap';

const getWebcam = (callback) => {
  try {
    const constraints = {
      'video': true,
      'audio': false
    }
    navigator.mediaDevices.getUserMedia(constraints)
      .then(callback);
  } catch (err) {
    console.log(err);
    return undefined;
  }
}

const Styles = {
  Video: { width: "300px", height: "300px"},
  None: { display: 'none' }
}

function Cam() {
  const [playing, setPlaying] = React.useState(undefined);

  const videoRef = React.useRef(null);

  React.useEffect(() => {
    getWebcam((stream => {
      setPlaying(true);
      videoRef.current.srcObject = stream;
    }));
  }, []);

  const startOrStop = () => {
    if (playing) {
      const s = videoRef.current.srcObject;
      s.getTracks().forEach((track) => {
        track.stop();
      });
    } else {
      getWebcam((stream => {
        setPlaying(true);
        videoRef.current.srcObject = stream;
      }));
    }
    setPlaying(!playing);
  }

  return (<>
    <div style={{ width: '300px', height: '300px'}}>
      <video ref={videoRef} autoPlay style={Styles.Video} />
    </div >
  </>);
}

export default Cam;