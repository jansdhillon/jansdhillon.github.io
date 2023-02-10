import React from 'react';
import Sound from 'react-sound';
import LayerCake from 'assets/bg.mp3';
 
const PlaySound = (
    handleSongLoading,
    handlSongPlaying,
    handleSongFinishedPlaying,
) => {
    return {
        <div>
            <Sound
                url={LayerCake}
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handlSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            />
        </div>
    }
}