import styled from 'styled-components';
import { Button } from 'antd';

interface FilterItemButtonProps {
  readonly isSelected: boolean;
}

export const FilterItemButton = styled(Button)<FilterItemButtonProps>`
  height: auto;
  padding: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: ${props => props.isSelected ? '#ffffff' : '#93949D'};
  border: none;
  border-radius: 16px;
  transition: none;

  &[ant-click-animating-without-extra-node]:after {
    border: 0 none;
    opacity: 0;
    animation:none;
  }
  
  &,
  &:active,
  &:hover,
  &:focus {
    background: ${props => props.isSelected ? 'linear-gradient(201.66deg, #B380FD 12.94%, #6347F5 78.23%)' : 'transparent'};
    box-shadow: ${props => props.isSelected ? '0px 3px 5px rgba(0, 0, 0, 0.07)' : 'none'};
  }

  &:active,
  &:hover,
  &:focus {
    color: ${props => props.isSelected ? '#ffffff' : '#000000'};
  }
`