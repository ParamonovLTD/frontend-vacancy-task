import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 64px 48px 24px;
  color: #ffffff;

  @media (max-width: 1500px) {
    padding: 64px 16px 24px;
  }
`

export const NavbarTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const NavbarLogo = styled.img`
  width: 200px;
  height: 63px;
  margin-bottom: 72px;
`

export const NavbarLanguage = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.02em;
`


