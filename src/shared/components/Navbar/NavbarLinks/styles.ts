import styled from 'styled-components';
import { Menu } from 'antd';

export const NavbarMenu = styled(Menu)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  background-color: transparent;
  border-right: 0;
`

export const NavbarMenuItem = styled(Menu.Item)`
  display: flex;
  align-items: center;
  gap: 1em;
  height: auto !important;
  margin: 0 !important;
  padding: 16px 24px !important;
  line-height: 0 !important;
  border: 2px solid transparent;
  border-radius: 16px;
  
  & svg {
    fill: #ffffff;
  }
  
  & a {
    font-weight: 500;
    font-size: 18px;
    line-height: 120%;
    color: #ffffff !important;
  }

  &.ant-menu-item-selected {
    background-color: #ffffff !important;

    & svg {
      fill: #6347F5;
    }

    & a {
      color: #000000 !important;
    }
  }
  
  &:hover {
    border: 2px solid #ffffff;
  }
  
  &:active {
    background-color: inherit;
  }
`