import React from 'react';
import { menu } from '../../../../menu';
import { NavbarMenu, NavbarMenuItem } from './styles';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

interface NavbarLinksProps {
  onLinkClick?: () => void
}

const NavbarLinks: React.FC<NavbarLinksProps> = ({ onLinkClick }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <NavbarMenu selectedKeys={[pathname]}>
      {menu.map(item => (
        <NavbarMenuItem
          icon={item.icon}
          key={item.pathname}
        >
          <Link to={item.pathname} onClick={onLinkClick}>{item.title}</Link>
        </NavbarMenuItem>
      ))}
    </NavbarMenu>
  );
};

export default NavbarLinks;