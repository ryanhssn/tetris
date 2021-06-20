import { useState } from 'react';
import { createStage } from '../utils/util';

export const useStage = () => {
  const [stage, setStage] = useState(createStage());

  return [stage, setStage];
}