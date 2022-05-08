import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Heebo', sans-serif;
  }
  .reuseModalParentWrapper,
  .reuseModalOverlay {
    z-index: 99999;
    .reuseModalHolder{
      border: 0;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Heebo', sans-serif;
  }
  section {
    position: relative;
  }
  .reusecore__button {
    font-weight: 500;
  }
  @media only screen and (max-width: 667px) {
    .container {
      width: 100%;
    }
  }
  @media only screen and (max-width: 667px) {
    .container {
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  @media only screen and (width: 320px) {
    .container {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

export const AppWrapper = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  .sticky-active {
    .navbar {
      padding: 20px 0 21px;

      //Navbar when scrolled down
      
      background-color: ${themeGet('colors.primary', '#13182C')};
      box-shadow: 0px 3px 8px 0px rgba(08, 69, 125, .25);
      @media only screen and (max-width: 1366px) {
        padding: 15px 0 16px;
      }
      .main-logo {
        display: none;
      }
      .logo-alt {
        display: block;
      }
      .mobile-menu {
        top: 72px;
      }

      //SCROLLE DOWN MENU TEXT
      ul {
        li {
          a {
            color: ${themeGet('colors.kindBlue', '#1B407B')};
            font-size: 16px;
            font-weight: 400;
            transition: all 0.3s ease;
            &:hover {
              color: ${themeGet('colors.white', '#d1397c')};
            }
          }
          &.is-current {
            a {
              color: ${themeGet('colors.white', '#d1397c')};
            }
          }
        }
      }

      //These are the navbar scrolled down buttons

      .reusecore__button {
        &.menubar {
          color: ${themeGet('colors.purple', '#000')};
        }
        &.text {
          color: ${themeGet('colors.purple', '#000')};
          .btn-icon {
            svg {
              stroke: ${themeGet('colors.purple', '#000')};
            }
          }
          @media only screen and (max-width: 991px) {
          }
        }
      }
    }
  }
`;

export const ContentWrapper = styled.div`
  flex: 1 0 auto;
  width: 100%;
  overflow: hidden;
`;

export const SectionHeader = styled.header`
  max-width: 352px;
  width: 100%;
  margin: 0 auto 58px;
  text-align: center;
  @media only screen and (max-width: 991px) {
    margin-bottom: 50px;
  }
  h5 {
    font-size: 14px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 12px;
    letter-spacing: 1.5px;

    //Headers of sections
    color: ${themeGet('colors.primary', '#2563FF')};

    text-transform: uppercase;
    @media only screen and (max-width: 991px) {
      font-size: 13px;
      margin-bottom: 10px;
    }
  }
  h2 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;

    //subtitles of sections
    color: ${themeGet('colors.purple', '#0F2137')};
    
    margin: 0;
    letter-spacing: -1px;
    @media only screen and (max-width: 1366px) {
      font-size: 28px;
      letter-spacing: -0.7px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
      letter-spacing: -0.5px;
    }
  }
`;

export default GlobalStyle;

export const ButtonWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
`;
