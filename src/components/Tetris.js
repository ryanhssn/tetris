import React from 'react';

import { createStage } from '../utils/util';
import Stage from './Stage';
import Display from './Display';
import StartGame from './StartGame';

const Tetris  = () => {
  return (
    <div>
      <Stage stage={createStage()} />
      <aside>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level" />
        <StartGame />
      </aside>
    </div>
  )
}

export default Tetris;