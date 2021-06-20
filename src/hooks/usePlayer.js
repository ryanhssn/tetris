import { useState } from 'react';
import { randomTetro } from '../utils/tetrominos';

export const usePlayer = () => {
  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    tetromino: randomTetro().shape,
    collided: false,
  });

  return [player];
}