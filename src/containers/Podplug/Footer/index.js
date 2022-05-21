import React from 'react';
import Link from 'next/link';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Logo from 'common/components/UIElements/Logo';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import FooterArea, {
  WidgetArea,
  MenuArea,
  Menu,
  MenuItem,
  CopyrightText,
} from './footer.style';

import logoImg from '../../../common/assets/image/Podplug/logo.png'

import { footer } from 'common/data/Podplug';

const Footer = () => {
  const { logo, menu, widgets } = footer;
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterArea>
      <Container>
        <MenuArea>
          <Logo
            className="logo"
            href="/appclassic"
            logoSrc={logoImg}
            title="App Classic"
          />
          <Menu>
            {menu.map((item) => (
              <MenuItem key={`footer-link${item.id}`}>
                <Link href={item.link}>
                  <a>{item.text}</a>
                </Link>
              </MenuItem>
            ))}
          </Menu>
          <CopyrightText>
            We provide convenience to bars and venues throughout the US
          </CopyrightText>
          <CopyrightText>
            No cost. No risk. Only sales.
          </CopyrightText>

        </MenuArea>
      </Container>
    </FooterArea>
  );
};

export default Footer;
