import React from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import { playCircle } from 'react-icons-kit/fa/playCircle';
import { openModal, closeModal } from '@redq/reuse-modal';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import NextImage from 'common/components/NextImage';
import Button from 'common/components/Button';
import Heading from 'common/components/Heading';
import Rating from 'common/components/Rating';
import Container from 'common/components/UI/Container';
import BannerWrapper, {
  BannerContent,
  RatingInfo,
  BannerImage,
  ButtonGroup,
  VideoGroup,
  VideoWrapper,
  CustomerWrapper,
  ImageWrapper,
} from './banner.style';


import { client } from 'common/data/Podplug';

import microsoft from 'common/assets/image/Podplug/envato-icon.png';
import bannerImg from 'common/assets/image/Podplug/banner2.png';
import circleBorder from 'common/assets/image/Podplug/shape.svg';
// close button for modal
const CloseModalButton = () => (
  <Button
    className="modalCloseBtn"
    variant="fab"
    onClick={() => closeModal()}
    icon={<i className="flaticon-plus-symbol" />}
  />
);

const Banner = () => {
  // modal handler
  const handleVideoModal = () => {
    openModal({
      config: {
        className: 'video-modal',
        disableDragging: true,
        default: {
          width: 'auto',
          height: 'auto',
          x: 0,
          y: 0,
        },
      },
      component: ModalContent,
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: true,
    });
  };
  return (
    <div style={{
      border: 'solid 5px',
      width: "100%",
      zIndex: 15,
      height: '800px',
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"
    }}>
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="Modernizing Bars and Clubs throughout the US"
            />
          </Fade>
          <Fade up delay={200}>
            <Text
              content="We put the convenience of a CVS in your venue, for free. It's that simple."
            />
          </Fade>
          <Fade up delay={300}>
            <ButtonGroup>
              <a href="#team"><Button className="primary" title="Contact Us!" /></a>
              <Button
                className="text"
                variant="textButton"
                icon={<Icon icon={playCircle} />}
                iconPosition="left"
                title="Watch Video"
              />
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade up delay={100}>
            <NextImage width='385px' height='600px' src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
      <CustomerWrapper>
        <div style={{opacity: 0.7}}> In collaboration with: </div>
        <ImageWrapper>
          {client.map((item) => (
            <Image
              key={`client-key${item.id}`}
              src={item.image?.src}
              alt={item.title}
            />
          ))}
        </ImageWrapper>
      </CustomerWrapper>
      <img
        className="bannerBottomShape"
        src={circleBorder?.src}
        alt="Bottom Circle"
      />
    </BannerWrapper>
    </div>
  );
};

export default Banner;
