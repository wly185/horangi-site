import React from 'react';
import { colors } from '../constants/colors';
import Check from '../public/icons/Checkmark.svg';
import Cross from '../public/icons/Cross.svg';
import { options as priceOptions } from '../constants/prices';
import Radium from 'radium';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

function Board({ item, index }) {
  const { name, short, options, cta, pressShort = null } = item;
  const darkStyle = index === 1;
  return (
    <div
      style={{
        padding: 20,

        backgroundColor: darkStyle ? 'black' : 'white',
        boxShadow: darkStyle
          ? '0px 0px 20px rgba(0,0,0,0.6)'
          : '0px 0px 10px rgba(0,0,0,0.3)',
        borderRadius: 10,
        '@media only screen': {
          marginLeft: 'auto',
          marginRight: 'auto'
        }
      }}
    >
      <div
        style={{
          fontSize: '2rem',
          fontFamily: 'Montserrat',
          fontWeight: 700,
          paddingBottom: 5,
          color: darkStyle ? '#fff' : '#000'
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontSize: '1rem',
          fontFamily: 'Montserrat',
          paddingBottom: 5,
          color: darkStyle ? '#fff' : '#000',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        {short}
        {pressShort && (
          <div
            style={{ color: colors.orange, marginLeft: 5 }}
            onClick={() => pressShort?.handler()}
          >
            {pressShort?.title}
          </div>
        )}
      </div>
      {options.map(({ check, info = null, title }, index) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
          key={index}
        >
          <div
            style={{
              position: 'relative',
              top: 5,
              height: 15,
              width: 15,
              marginRight: 10,
              minWidth: 15,
              backgroundColor: '#fff',
              borderRadius: 15 / 2
            }}
          >
            {check ? <Check /> : <Cross />}
          </div>

          <div
            style={{
              fontSize: '1rem',
              fontFamily: 'Montserrat',
              paddingBottom: 5,
              color: darkStyle ? '#fff' : 'black'
            }}
          >
            {title}
          </div>
        </div>
      ))}
      <div
        style={{
          margin: 10,
          zIndex: 1,
          backgroundColor: colors.orange,
          textAlign: 'center',
          height: 40,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff'
        }}
      >
        {cta}
      </div>
    </div>
  );
}

function Prices() {
  return (
    <Container>
      <div className='d-none d-md-block' style={{ height: 10 }}></div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',

          fontSize: '3rem',
          fontFamily: 'Montserrat',
          paddingBottom: 5,

          fontWeight: 700
        }}
      >
        Warden Annual Subscription Pricing
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: '1.5rem',
          fontFamily: 'Montserrat',
          paddingBottom: 5,

          paddingBottom: 10
        }}
      >
        A plan for everyone on the one-click cloud security platform.
      </div>
      <Container className='d-none d-md-block'>
        <Row>
          {priceOptions.map((i, index) => (
            <Col key={index} md={4} lg={4} xl={4}>
              <Board item={i} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container className='d-md-none'>
        <Carousel>
          {priceOptions.map((i, index) => (
            <Carousel.Item key={index}>
              <Board item={i} index={index} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Container>
  );
}

export default Radium(Prices);
