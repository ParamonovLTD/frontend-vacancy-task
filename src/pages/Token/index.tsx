import React from 'react';
import { MainContainer, PageTitle } from '../../shared/GlobalStyles';
import Undeveloped from '../Undeveloped';
import { useParams } from 'react-router';
import { tokens } from '../../tokens';

const Token: React.FC = () => {
  const { id } = useParams() as { id: string }
  const currentToken = tokens.find(token => token.id === id)

  return (
    <MainContainer>
      <PageTitle level={1}>{currentToken?.name || 'Token'}</PageTitle>
      <Undeveloped />
    </MainContainer>
  );
};

export default Token;