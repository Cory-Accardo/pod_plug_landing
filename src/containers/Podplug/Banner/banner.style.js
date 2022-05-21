import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerWrapper = styled.div`
  padding-top: 150px;
  min-height: 802px;
  overflow: hidden;
  position: relative;
  background-image: -moz-linear-gradient(
    139deg,
    rgb(100, 43, 115) 0%,
    rgb(198, 66, 110) 100%
  );
  background-image: -webkit-linear-gradient(
    139deg,
    rgb(100, 43, 115) 20%,
    rgb(8, 69, 125) 100%
  );
  background-image: -ms-linear-gradient(
    139deg,
    rgb(100, 43, 115) 0%,
    rgb(198, 66, 110) 100%
  );
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 100vh;
  }
  @media only screen and (max-width: 1099px) {
    min-height: 100%;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 90px;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: calc(100vh - 100px);
      margin-top: 35px;
      align-items: flex-start;
    }
    @media only screen and (max-width: 1099px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }
  .bannerBottomShape {
    // position: absolute;
    // right: 0;
    // bottom: -2px;
    display:none;
    @media only screen and (max-width: 999px) {
      display: none;
    }
  }
`;

export const BannerContent = styled.div`
  width: 40%;
  flex-shrink: 0;
  @media only screen and (max-width: 1199px) {
    flex-shrink: 0;
    width: 100%;
    margin-top: 25px;
  }

  h1 {
    font-size: 56px;
    line-height: 55px;
    font-weight: 700;
    color: ${themeGet('colors.white', '#fff')};
    margin-bottom: 24px;
    @media only screen and (max-width: 1366px) {
      font-size: 32px;
      line-height: 42px;
      margin-bottom: 20px;
    }
  }

  p {
    color: ${themeGet('colors.white', '#fff')};
    font-size: 16px;
    line-height: 29px;
  }
`;


export const BannerImage = styled.div`
  flex-shrink: 0;
  img {
    margin-left: -40px;
    margin-top: 50px;
    @media only screen and (max-width: 1440px) {
      margin-top: 0px;
    }
  }
  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;

    &.primary {
      background-color: ${themeGet('colors.white', '#fff')};
      color: rgb(15, 33, 55);
      font-size: 16px;
      letter-spacing: -0.1px;
      &:hover {
        box-shadow: #1e2a4a 0px 12px 24px -10px;
      }
    }

    &.text {
      font-size: 16px;
      color: ${themeGet('colors.white', '#fff')};
      letter-spacing: -0.1px;
      font-weight: 500;
      .btn-icon {
        i {
          color: #fff;
        }
        svg {
          width: auto;
          height: 25px;
        }
      }
    }
  }
`;
export const VideoGroup = styled.div`
  display: flex;
  margin-top: 60px;
  @media only screen and (max-width: 768px) {
    margin-top: 45px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  img {
    margin-right: 10px;
    max-width: 100%;
    object-fit: cover;
    cursor: pointer;
    height: 100%;
    @media only screen and (max-width: 600px) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }
`;
export const VideoWrapper = styled.div`
  max-width: 100%;
  width: 900px;
  position: relative;
  &:before {
    content: '';
    display: block;
    padding-top: 56.25%;
  }
  iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
export const CustomerWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 5px 7px #d1d1e0;
  background-color: #08457D;



  @media only screen and (max-width: 3840px) {
    padding: 25px 0 25px 32%;
    margin: -1% 0 1% 0;

  }

  @media only screen and (max-width: 1920px) {
    padding: 25px 0 20px 32%;
    margin: -1% 0 1% 0;

  }

  @media only screen and (max-width: 1440px) {
    padding: 20px 0 15px 21%;
    margin: -1% 0 3% 0;

  }
  @media only screen and (max-width: 1099px) {
    padding: 12px 0 15px;
    margin: -1% 0 4% 0;

  }
  @media only screen and (max-width: 991px) {
    padding: 7px 0;
    margin: -1% 0 3% 0;

  }
  @media only screen and (max-width: 600px) {
    margin: -2% 0 0 0;
    padding: 10px 0;
  }

  p {
    margin: 0 12px 0 0;
    color: ${themeGet('colors.menu', '#ffff')};
    @media only screen and (max-width: 991px) {
      display: none;
    }
  }
`;

export const VideoBannerWrapper = styled.div`



img{
  opacity: 0.35;
  filter: blur(5px);
  filter: brightness(0.4);
  filter: contrast(200%);
  filter: drop-shadow(16px 16px 20px blue);
  filter: hue-rotate(90deg);
  filter: saturate(30%);
}

background-image: -moz-linear-gradient(
  139deg,
  rgb(100, 43, 115) 0%,
  rgb(198, 66, 110) 100%
);
background-image: -webkit-linear-gradient(
  139deg,
  rgb(100, 43, 115) 20%,
  rgb(8, 69, 125) 100%
);
background-image: -ms-linear-gradient(
  139deg,
  rgb(100, 43, 115) 0%,
  rgb(198, 66, 110) 100%
);

`;


export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 991px) {
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
  }
  img {
    opacity: 0.75;
    margin: 0 12px;
    max-height: 50px;
    max-width: 70px;
    @media only screen and (max-width: 667px) {
      margin: 5px 10px;
    }
  }
`;
export default BannerWrapper;
