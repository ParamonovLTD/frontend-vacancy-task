import styled from 'styled-components';
import { Collapse } from 'antd';

const { Panel } = Collapse;

interface TokenArrowProps {
  isActive: boolean | undefined;
}

export const TokenWrapper = styled(Collapse)`
  padding: 0;
  background-color: #ffffff;
  border-radius: 32px;
  
  & .ant-collapse-content {
    border-radius: 0 0 32px 32px !important;
    
    & > .ant-collapse-content-box {
      margin-top: -6px;
      padding: 0 24px 24px;
      font-weight: 500;
      font-size: 16px;
      color: #5D5E6C;
    }
  }

  & .ant-collapse-header {
    padding: 0 !important;
    
    & .ant-collapse-arrow {
      right: 32px!important;
    }
  }

  &,
  & .ant-collapse-content,
  & .ant-collapse-item{
    border: none;
  }
  
  &:hover {
    outline: 2px solid #6347F5;
  }
`

export const TokenArrow = styled.img<TokenArrowProps>`
  width: 19px;
  height: 11px;
  transform: ${props => props.isActive ? 'rotateX(180deg) translateY(50%)' : 'rotateX(0) translateY(-50%)'} !important;
`

export const TokenDescription = styled(Panel)`
`