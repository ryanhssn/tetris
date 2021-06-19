import React from 'react';
import styled from 'styled-components';
import { createStage } from '../utils/util';
import Stage from './Stage';
import Display from './Display';
import StartGame from './StartGame';

const Tetris  = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()} />
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartGame />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
}

const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  overflow: hidden;  
`;

const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;

  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }
`;

export default Tetris;