import React from 'react';
import styled from 'styled-components';
import {Header } from 'semantic-ui-react';

// export const AppHeader = styled.Header`

// `

export const AppTitle = styled.h1`
  background: linear-gradient(to bottom right, aliceblue, grey);
  // font-size: 23px;
  font-size: ${props => props.large ? '60px' : '20px'} !important;
  color: white;

  @media (max-width: 650px) {
    color: red;
    background: blue;
  }
`

export const AppContainter  = styled.div`
  max-width: 650px;
`

// export default AppTitle;