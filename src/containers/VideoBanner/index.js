import React, { useEffect } from 'react';
import Image from 'next/image'
import Container from 'common/components/UI/Container';
import bannerGif from 'common/assets/image/Podplug/banner.gif';
import { CustomerWrapper, ImageWrapper, VideoBannerWrapper } from '../Podplug/Banner/banner.style';
import { client } from 'common/data/Podplug';
import Text from 'common/components/Text';
import LegacyImage from 'common/components/Image';
import { useState } from 'react';



const Banner = () => {

    const size = useWindowSize();

    // Hook
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        });
        useEffect(() => {
        function handleResize() {
            setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
        }, []); 
        return windowSize;
    }

    function determineSize(){
        if(size.width < 450){
            return{
                width: (1920 * 2),
                height: (1080 * 3.5)
            }
        }
        if(size.width > 1920){
            return {
                width: (1920* 1.1),
                height: 1080 * 1.1
            }
        }
        else{
            return {
                width: 1920,
                height: 1080
            }
        }
    }


  

    return (
        <>
        <VideoBannerWrapper>
        <Image width={determineSize().width} height={determineSize().height} src={bannerGif}/>
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
