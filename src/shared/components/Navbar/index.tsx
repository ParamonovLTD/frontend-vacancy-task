import React from 'react';
import { NavbarLanguage, NavbarLogo, NavbarTopWrapper, NavbarWrapper } from './styles';
import NavbarLinks from './NavbarLinks';

interface NavbarProps {
  onLinkClick?: () => void
}

const Navbar: React.FC<NavbarProps> = ({ onLinkClick }) => {
  return (
    <NavbarWrapper>
      <NavbarTopWrapper>
        <NavbarLogo src='./images/logo.svg' width={200} height={63} alt='everboard logo'/>
        <NavbarLinks onLinkClick={onLinkClick} />
      </NavbarTopWrapper>

      <NavbarLanguage>
        Русский
      </NavbarLanguage>
    </NavbarWrapper>
  );
};

export default Navbar;