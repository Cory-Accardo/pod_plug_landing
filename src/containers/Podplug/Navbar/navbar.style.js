import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import searchIcon from 'common/assets/image/Podplug/search.svg';

const NavbarWrapper = styled.nav`
  width: 100%;
  padding: 25px 0 26px;
  border-bottom: 1px solid rgba(186, 209, 250, .12);
  position: fixed;
  z-index: 9999;
  transition: all 0.3s ease;
  @media only screen and (max-width: 1366px) {
    padding: 20px 0 21px;
  }
  > div.container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .main-logo {
      img {
        width: 90px;
        height: auto;
      }
    }
    .logo-alt {
      width: 90px;
      height: auto;
      display: none;
    }
  }
  ul {
    li {
      //Scrolled up menu text
      a {
        color: ${themeGet('colors.white', '#fff')};
        font-size: 16px;
        font-weight: 400;
        transition: all 0.3s ease;
        &:hover {
          font-weight: 700;
        }
      }
      &.is-current {
        a {
          font-weight: 700;
        }
      }
    }
  }
`;

export const MenuArea = styled.div`
  display: flex;
  align-items: center;
  .menu {
    display: flex;
    align-items: center;
    margin-right: 11px;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease;
    @media only screen and (max-width: 1366px) {
      margin-right: 13px;
    }
    @media only screen and (max-width: 991px) {
      display: none;
    }
    li {
      margin: 0 19px;
      @media only screen and (max-width: 1366px) {
        margin: 0 17px;
      }
      &:first-child {
        margin-left: 0;
      }
      &:last-child {
        margin-right: 0;
      }
    }
  }
  &.active {
    .menu {
      opacity: 0;
      visibility: hidden;
    }
    .search {
      form {
        opacity: 1;
        visibility: visible;
      }
      input {
        width: 320px;
        @media only screen and (min-width: 1367px) {
          width: 350px;
        }
        @media only screen and (max-width: 480px) {
          width: calc(100vw - 122px);
        }
      }
    }
  }
  .reusecore__button {
    border-radius: 5px;
    font-weight: 500;
    text-transform: inherit;
    padding-left: 13px;
    padding-right: 13px;
    min-height: 42px;

    &.text {
      padding: 0;
      margin-right: 28px;
      cursor: pointer;
      .btn-icon {
        svg {
          width: 22px;
          height: auto;
          stroke: ${themeGet('colors.white', '0D233E')};
          @media only screen and (max-width: 991px) {
            width: 24px;
          }
        }
      }
      @media only screen and (max-width: 1366px) {
        margin-right: 20px;
      }
      @media only screen and (max-width: 991px) {
        margin-right: 0;
      }
    }
    &.trail {
      &:hover {
        box-shadow: #d1397c 0px 12px 24px -10px;
      }
      @media only screen and (max-width: 991px) {
        display: none;
      }
    }
    &.menubar {
      display: none;
      @media only screen and (max-width: 991px) {
        display: inline-flex;
        padding: 0;
        justify-content: flex-end;
        min-width: 35px;
        color: #fff;
        svg {
          width: 27px;
          height: auto;
        }
      }
    }
  }
`;

export const MobileMenu = styled.div`
  display: none;
  @media only screen and (max-width: 991px) {
    display: flex;
    width: 100%;
    height: calc(100vh - 70px);
    padding: 27px 0 40px;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 82px;
    flex-direction: column;

    //burger menu background

    background-color: ${themeGet('colors.primary', '#ffffff')};

    transition: all 0.3s ease;
    color: ${themeGet('colors.purple', '#000')};
    &.active {
      opacity: 1;
      visibility: visible;
      box-shadow: 0 3px 12px
        ${themeGet('colors.purple', 'rgba(38, 78, 118, 0.1)')};
    }
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    ul {
      padding-bottom: 20px;
      li {
        a {
          display: block;
          padding: 13px 0;
          border-radius: 5px;
          transition: all 0.3s ease;
          color: ${themeGet('colors.purple', '#000')};
        }
        &:hover {
          a {
            padding: 13px 15px;
            color: ${themeGet('colors.purple')};
          }
        }
      }
    }
    .reusecore__button {
      width: 100%;
      border-radius: 5px;
      @media only screen and (max-width: 480px) {
        margin-top: 20px;
      }
    }
  }
`;

export default NavbarWrapper;
