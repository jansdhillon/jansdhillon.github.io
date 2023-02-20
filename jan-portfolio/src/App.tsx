import { useState, useRef, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import autoAnimate from "@formkit/auto-animate";
import './App.css'
import Sound, {ReactSoundProps} from 'react-sound'
import LayerCake from '/bg.mp3'
import { Button, Stack } from 'react-bootstrap';

function App() {
  const [status, setStatus] = useState<ReactSoundProps['playStatus']>('PLAYING');

  return (
      <div className="App">
      <div className="header">
        <h1>Jan Yaeger Dhillon</h1>
      </div>
      <Button as="a" variant="success" href="https://www.linkedin.com/in/jan-yaeger-dhillon-572674239/">
        GitHub
      </Button>
      <Button as="a" variant="primary" href="https://github.com/jansdhillon">
        LinkedIn
      </Button>
      <h2 className="center">Hey, I'm Jan. Welcome to my personal page! I'll be updating this regularily as my web development skills advance.</h2><div className="card">
        <h2>About Me</h2>
        <p className="center">I'm a fourth year at UBC Okanagan pursuing a degree in computer science. I like to learn new things and love
          to use coding as an outlet for creativity. I've really been enjoying Python but I'm also trying to learn web development (like this!)</p>
      </div><div className="card">
        <h2>Projects</h2>
        <p className="center">This portfolio is the main project I'm working on right now, but you can find more things I've done over at my GitHub!</p>
      </div>
      <Sound
        url={LayerCake}
        playStatus={"PLAYING"}
      />
    </div>
  
  );
}

export default App;
