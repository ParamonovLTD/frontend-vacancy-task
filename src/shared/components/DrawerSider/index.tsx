import React, { useCallback, useState } from 'react';
import Navbar from '../Navbar';
import { SiderDrawer, SiderMenuIcon, SiderWrapper } from './styles';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const DrawerSider: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const { width } = useWindowDimensions()

  const onLinkClick = () => useCallback(() => {
    setVisible(false)
  }, [])

  return (
    <SiderWrapper>
      <SiderMenuIcon onClick={() => setVisible(true)} />

      {width > 1200
        ?
          <Navbar />
        :
          <SiderDrawer placement="left" onClose={() => setVisible(false)} visible={visible}>
            <Navbar onLinkClick={onLinkClick} />
          </SiderDrawer>
      }
    </SiderWrapper>
  );
};

export default DrawerSider;