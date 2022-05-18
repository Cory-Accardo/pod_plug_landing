import React, { Fragment } from 'react';
import Fade from 'react-reveal/Fade';
import { Icon } from 'react-icons-kit';
import featOne from '../../../common/assets/image/Podplug/1. Discovery.png'
import featTwo from '../../../common/assets/image/Podplug/2. Report Card.png'
import featThree from '../../../common/assets/image/Podplug/3. Partnership.png'
import featFour from '../../../common/assets/image/Podplug/4. Onboarding.png'
import featSix from '../../../common/assets/image/Podplug/6. Lifetime Expert Support.png'


import { mediaRecordOutline } from 'react-icons-kit/typicons/mediaRecordOutline';
import { plus } from 'react-icons-kit/typicons/plus';
import { starOutline } from 'react-icons-kit/typicons/starOutline';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import FeatureBlock from 'common/components/FeatureBlock';
import { SectionHeader } from '../Podplug.style';
import SectionWrapper, { FeatureWrapper } from './features.style';

import { features } from 'common/data/Podplug';

const Features = () => {
  const { slogan, title, items } = features;


  return (
    <>
      <SectionWrapper id="features">
        <Container>
          <SectionHeader>
            <Fade up>
              <Heading as="h5" content={slogan} />
              <Heading content={title} />
            </Fade>
          </SectionHeader>
          <div style={{marginLeft: '12vw'}}>
            <Fade right>
              <NextImage className="ml-5" width="672" height="378" src={featSix} />
            </Fade>
            <Fade left>
              <NextImage width="672" height="378" src={featOne} />
            </Fade>
            <Fade right>
              <NextImage width="672" height="378" src={featTwo} />
            </Fade>
            <Fade left>
              <NextImage width="672" height="378" src={featThree} />
            </Fade>
            <Fade right>
              <NextImage width="672" height="378" src={featFour} />
            </Fade>
          </div>
        </Container>
      </SectionWrapper>

    </>
  );
};

export default Features;
