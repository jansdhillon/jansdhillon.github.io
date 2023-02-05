import React from 'react';
import Sound from 'react-sound';
 
function MyComponentWithSound () {
        return (
          <Sound
                url="./assets/bg.mp3" playStatus={'PLAYING'}          />
        );
      }

export default MyComponentWithSound