import { useState } from 'react'
import './App.css';
import Sound, {ReactSoundProps} from 'react-sound';
import LayerCake from './assets/bg.mp3';

function App() {
  const [status, setStatus] = useState<ReactSoundProps['playStatus']>('STOPPED');

  function togglePlayStatus() {
    setStatus(status => status === 'STOPPED' ? 'PLAYING' : 'STOPPED')
  }

  function statusLabel(status: ReactSoundProps['playStatus']): string {
    switch(status) {
      case 'STOPPED':
        return 'PLAY';
      case 'PLAYING':
        return 'STOP';
      default:
        return 'STOP';
    }
  }

  return (
    <div className="App">
      <h1 className="title">Jan-Yaeger Dhillon</h1>
      <div>
        <a href="https://github.com/jansdhillon" className="github">GitHub</a>
        <a href="https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/" className="linkedin">LinkedIn</a>
      </div>
      <div className="card">
        <h2>About Me</h2>
        <p className="center">Hey, I'm Jan. Welcome to my personal page! I'll be updating this regularily as my web develoopment skills advance.</p>
      </div>
      <button onClick={(click) => togglePlayStatus()}>{statusLabel(status)}</button>
      <Sound
        url={LayerCake}
        playStatus={status}
      />
    </div>
  );
}

export default App;
