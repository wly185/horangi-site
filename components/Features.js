import React from 'react';
import Radium from 'radium';
import { Carousel, Container } from 'react-bootstrap';
import { featureOptions } from '../constants/features';
import { colors } from '../constants/colors';

function renderTabBody(index) {
  const para = (
    <div>
      {/* <p>{`${index}`}</p> */}
      <p
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 700,
          fontSize: '1.2rem'
        }}
      >
        Lorem ipsum dolor sit amet
      </p>
      <p
        style={{
          fontFamily: 'Montserrat',
          fontSize: '1rem'
        }}
      >
        Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p
        style={{
          fontFamily: 'Montserrat',
          fontWeight: 700,
          fontSize: '1.2rem'
        }}
      >
        Sed ut perspiciatis unde omnis
      </p>
      <p
        style={{
          fontFamily: 'Montserrat',
          fontSize: '1rem'
        }}
      >
        Iste natus error sit voluptatem accusantium doloremque laudantium, totam
        rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
        architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
        quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
        magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro
        quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
        adipisci velit, sed quia non numquam eius modi tempora incidunt ut
        labore et dolore magnam aliquam quaerat voluptatem.
      </p>
      <p
        style={{
          fontFamily: 'Montserrat',
          fontSize: '1rem'
        }}
      >
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
    </div>
  );
  switch (index) {
    case 0:
      return para;
    case 1:
      return para;
    case 2:
      return para;
    case 3:
      return para;
    case 4:
      return para;

    default:
      break;
  }
}

function Features() {
  const [tab, setTab] = React.useState(0);

  return (
    <>
      <Container
        style={{ height: 20 }}
        className='d-none d-md-block'
      ></Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontFamily: 'Montserrat',
          fontSize: '2rem',
          fontWeight: 700
        }}
      >
        More On Warden Features
      </div>
      <Container className='d-none d-md-block'>
        <ul
          style={{
            flexDirection: 'row',
            display: 'flex',
            margin: '0.8rem 0 0 0',
            padding: 0
          }}
        >
          {featureOptions.map((i, index) => (
            <li
              onClick={() => setTab(index)}
              style={{
                height: 40,
                fontSize: '1rem',
                fontFamily: 'Montserrat',
                listStyleType: 'none',
                borderBottom: tab === index ? '1px solid #F69546' : 'none',
                flex: 1 / 5,
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
              key={index}
            >
              {i}
            </li>
          ))}
        </ul>
        <div>{renderTabBody(tab)}</div>
      </Container>
      <Container className='d-md-none'>
        <Carousel>
          {featureOptions.map((i, index) => (
            <Carousel.Item key={index}>
              <div>{i}</div>
              <div>{renderTabBody(index)}</div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </>
  );
}

export default Radium(Features);
