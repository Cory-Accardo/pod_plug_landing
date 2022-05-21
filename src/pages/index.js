import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { theme } from 'common/theme/Podplug';
import ResetCSS from 'common/assets/css/style';
import Sticky from 'react-stickynode';
import Navbar from 'containers/Podplug/Navbar';
import Banner from 'containers/Podplug/Banner';
import AppSlider from 'containers/Podplug/AppSlider';
import Features from 'containers/Podplug/Features';
import DashboardFeatures from 'containers/Podplug/Dashboard';
import TeamPortfolio from 'containers/Podplug/TeamPortfoilo';
import Testimonial from 'containers/Podplug/Testimonial';
import Footer from 'containers/Podplug/Footer';
import FaqSection from 'containers/Podplug/FaqSection';
import ContactSection from '../containers/Podplug/Contact';
import VideoBanner from '../containers/VideoBanner';

import GlobalStyle, {
  AppWrapper,
  ContentWrapper,
} from 'containers/Podplug/Podplug.style';

const Podplug = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Pod Plug - Convenience When Out</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#2563FF" />
          <meta
            name="keywords"
            content="pod plug vending convenience when out "
          />
          <link
            href="https://fonts.googleapis.com/css?family=Heebo:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <AppWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <VideoBanner/>
            <Features />
            <FaqSection/>
            <AppSlider />
            <Testimonial />
            {/* <TeamPortfolio /> */}
            <ContactSection/>
          </ContentWrapper>
          <Footer />
        </AppWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
};
export default Podplug;
