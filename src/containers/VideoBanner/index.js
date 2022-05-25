import React, { useEffect } from 'react';
import Image from 'next/image'
import Container from 'common/components/UI/Container';
import { CustomerWrapper, ImageWrapper, VideoBannerWrapper } from '../Podplug/Banner/banner.style';
import { client } from 'common/data/Podplug';
import Text from 'common/components/Text';
import LegacyImage from 'common/components/Image';
import { useState } from 'react';
import useWindowSize from '../../common/hooks/useWindowSize';



const Banner = () => {

    const size = useWindowSize();

    function videoComp() {
        
        if(size.width > 560) {return <video loop autoPlay muted style={{width:'100%', overflow:'hidden'}} src='banner(1080).mp4'/>}
        else {return <video loop autoPlay muted style={{right:'26%', position:'relative', width:'150%', overflow:'hidden'}} src='banner(square).mp4'/>}
    }
    return (
        <>
        <VideoBannerWrapper>
            {videoComp()}
      </VideoBannerWrapper>
      <CustomerWrapper>
            <Text content="In collaboration with:" />
            <ImageWrapper>
            {client.map((item) => (
                <LegacyImage
                key={`client-key${item.id}`}
                src={item.image?.src}
                alt={item.title}
                />
            ))}
            </ImageWrapper>
      </CustomerWrapper>

      </>
  );
};

export default Banner;
