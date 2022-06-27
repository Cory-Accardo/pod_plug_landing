import React, { Fragment, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Image from 'next/dist/client/image';
import { Icon } from 'react-icons-kit';
import featOne from '../../../common/assets/image/Podplug/1. Discovery.png'
import featTwo from '../../../common/assets/image/Podplug/2. Report Card.png'
import featThree from '../../../common/assets/image/Podplug/3. Partnership.png'
import featFour from '../../../common/assets/image/Podplug/4. Onboarding.png'
import featSix from '../../../common/assets/image/Podplug/6. Lifetime Expert Support.png'

import Typewriter from 'typewriter-effect';

import Heading from 'common/components/Heading';
import { SectionHeader } from '../Podplug.style';
import SectionWrapper, { FeatureWrapper } from './features.style';

import { features } from 'common/data/Podplug';
import useScrollPosition from '../../../common/hooks/useScrollPosition';
import useWindowSize from '../../../common/hooks/useWindowSize';


const coloredStyle = { display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center', width: '100%', backgroundColor: '#F5F8FF', transition: 'all 0.9s ease-in-out' }

const Features = () => {
  const { slogan, title, items } = features;


  const { width } = useWindowSize();
  const viewPos = useScrollPosition();

  const AnimationsForChaining = ["Convenience", "when", "out"]

  const [animationIndex, setAnimationIndex] = useState(0)
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0])

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1)
    setAnimationType(selectedItems[animationIndex + 1])
  }



  function shouldStartColor(picIdx) {

    if (width <= 800) return false;

    const intervalHeight = ((0.6 * width + 292.89) - (0.44 * width - 3.29)) - ((width / 120) * picIdx);

    const start = (intervalHeight * picIdx);
    const end = (intervalHeight * picIdx) + intervalHeight;

    if (viewPos >= start && viewPos <= end && (shouldStartColor(picIdx - 1) === false)) return true;

    return false;

  }



  return (
    <>

      <SectionWrapper id="features">


        <div style={{ margin: 'auto', border: '2px solid', width: 'fit-content', fontFamily:'Heebo', fontSize: '30px', fontWeight: 'lighter'}}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(`<strong> Convenience, when out </strong>`)
                .callFunction(() => {
                  console.log('String typed out!');
                })
                .pauseFor(2500)
                .start();
            }}
          />
        </div>


        <SectionHeader>
          <div style={{ paddingTop: '5%' }}>
            <Fade up>
              <Heading as="h5" content={slogan} />
              <Heading content={title} />
            </Fade>
          </div>
        </SectionHeader>



        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', alignItems: 'center', width: '100%' }}>
          {shouldStartColor(1) ?
            <div style={coloredStyle}>
              <Fade right>
                <Image width="672" height="378" src={featSix} />
              </Fade>
            </div>
            :
            <div>
              <Fade right>
                <Image width="672" height="378" src={featSix} />
              </Fade>
            </div>

          }

          {shouldStartColor(2) ?
            <div style={coloredStyle}>
              <Fade left>
                <Image width="672" height="378" src={featOne} />
              </Fade>
            </div>
            :
            <div>
              <Fade left>
                <Image width="672" height="378" src={featOne} />
              </Fade>
            </div>

          }
          {shouldStartColor(3) ?
            <div style={coloredStyle}>
              <Fade right>
                <Image width="672" height="378" src={featTwo} />
              </Fade>
            </div>
            :
            <div>
              <Fade right>
                <Image width="672" height="378" src={featTwo} />
              </Fade>
            </div>

          }
          {shouldStartColor(4) ?
            <div style={coloredStyle}>
              <Fade left>
                <Image width="672" height="378" src={featThree} />
              </Fade>
            </div>
            :
            <div>
              <Fade left>
                <Image width="672" height="378" src={featThree} />
              </Fade>
            </div>
          }
          {shouldStartColor(5) ?
            <div style={coloredStyle}>
              <Fade right>
                <Image width="672" height="378" src={featFour} />
              </Fade>
            </div>
            :
            <div>
              <Fade right>
                <Image width="672" height="378" src={featFour} />
              </Fade>
            </div>
          }
        </div>
      </SectionWrapper>

    </>
  );
};

export default Features;
