import React from 'react';
import { Col } from 'antd';
import { MainContainer, PageTitle } from '../../shared/GlobalStyles';
import Filter from '../../shared/components/Filter';
import { categories, tokens } from '../../tokens';
import TokensList from '../../shared/components/TokensList';
import { HomeTopWrapper } from './styles';

const Home: React.FC = () => {
  return (
    <MainContainer>
      <HomeTopWrapper justify='space-between' align='middle'>
        <Col>
          <PageTitle level={1}>Токены Everscale</PageTitle>
        </Col>
        <Col>
          <Filter items={categories}/>
        </Col>
      </HomeTopWrapper>

      <TokensList tokens={tokens} />
    </MainContainer>

  );
};

export default Home;