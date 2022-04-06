import styled from 'styled-components';
import { Drawer, Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { Sider } = Layout;

export const SiderWrapper = styled(Sider)`
  flex: 0 0 16.66% !important;
  min-width: 16.66% !important;
  width: 16.66% !important;
  
  
  @media (max-width: 1200px) {
    flex: 0 !important;
    min-width: 70px !important;
    width: 70px !important;
  }
`

export const SiderMenuIcon = styled(MenuOutlined)`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 32px;
  color: #ffffff;

  @media (min-width: 1200px) {
    display: none;
  }
`

export const SiderDrawer = styled(Drawer)`
  & .ant-drawer-content {
    background: linear-gradient(200deg, #B380FD 12%, #6347F5 78%);
  }
  
  & .ant-drawer-header {
    background-color: transparent;
  }
  
  & .ant-drawer-close {
    font-size: 24px;
    color: #ffffff;
  }
`