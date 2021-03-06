import React from 'react'
import styled from 'styled-components';

const StyledStartGame = styled.div`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border-radius: 20px;
  border: none;
  color: white;
  background: #333;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`;

export default function StartGame({ cb }) {
  return (
    <StyledStartGame onClick={cb}>
      Start Game..
    </StyledStartGame>
  )
}
