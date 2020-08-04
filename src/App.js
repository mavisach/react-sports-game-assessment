import React from 'react';
import bunniesImage from './assets/images/bunny.png';
import houndsImage from './assets/images/hound.png';
import squirrelsImage from './assets/images/squirrel.png';
import raccoonsImage from './assets/images/raccoon.png';
import './App.css';
import Game from './components/game/Game'

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: raccoonsImage
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrelsImage
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunniesImage
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: houndsImage
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  );
}

export default App;
