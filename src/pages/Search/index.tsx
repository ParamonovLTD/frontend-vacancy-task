import React from 'react';
import { MainContainer, PageTitle } from '../../shared/GlobalStyles';
import Undeveloped from '../Undeveloped';

const Search: React.FC = () => {
  return (
    <MainContainer>
      <PageTitle level={1}>Поиск</PageTitle>
      <Undeveloped />
    </MainContainer>
  );
};

export default Search;