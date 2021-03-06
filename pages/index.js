import Head from 'next/head';

import NavHeader from '../components/NavHeader';
import Prices from '../components/Prices';

import Radium, { StyleRoot } from 'radium';
import { Container } from 'react-bootstrap';
import Features from '../components/Features';
import React from 'react';
import useWindowDimensions from '../utils/useWindow';
import useScrollY from '../utils/useScrollY';
import FloatScrollSpy from '../components/FloatScrollSpy';

function Home() {
  const { height, width } = useWindowDimensions();
  const scrollY = useScrollY();

  const showSpy = scrollY / height < 0.4;
  const [section, setSection] = React.useState(0);

  function jumpSectionHandler() {
    if (section + 1 > 1) {
      setSection(0);
    } else {
      setSection(section + 1);
    }
  }
  return (
    <div>
      <Head>
        <title>horangi cybersecurity</title>
        <meta name='description' content='pricing and features' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
          integrity='sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3'
          crossOrigin='anonymous'
        />
      </Head>

      <StyleRoot>
        <body>
          <NavHeader />
          <div
            style={{
              position: 'fixed',
              height: 10,
              width: 10,
              top: 100,
              left: 0,
              zIndex: 2
            }}
          ></div>
          <Container>
            {section === 0 && <Prices />}
            {section === 1 && <Features />}
          </Container>
          <FloatScrollSpy
            showSpy={true}
            height={height}
            width={width}
            handler={jumpSectionHandler}
            section={section}
          />
        </body>
      </StyleRoot>
    </div>
  );
}

export default Radium(Home);
