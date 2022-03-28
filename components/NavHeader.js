import Radium from 'radium';
import React from 'react';
import IconHorangi from '../public/icons/horangi_horizontal_light_font.svg';
import { colors } from '../constants/colors';

import {
  Container,
  Modal,
  Overlay,
  OverlayTrigger,
  Popover,
  Row
} from 'react-bootstrap';

function NavHeader() {
  const [lang, setLang] = React.useState('en');
  const langs = ['en', 'cn'];
  const [showLang, setShowLang] = React.useState(null);
  const [showNavOnMobile, setShowNavOnMobile] = React.useState(false);

  const [height, setHeight] = React.useState(100);
  React.useEffect(() => {
    if (window?.innerHeight) {
      setHeight(window?.innerHeight);
    }
  }, []);
  const ref = React.createRef();

  return (
    <>
      <nav
        style={{
          width: '100vw',
          backgroundColor: 'black',
          zIndex: 1,
          position: 'fixed',
          top: 0,
          left: 0
        }}
      >
        <Container className='d-none d-md-block'>
          <Row style={{ backgroundColor: 'black' }}>
            <ul
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                height: 70,

                margin: 0,
                padding: 0
              }}
            >
              <li
                style={{
                  color: '#fff',
                  listStyleType: 'none',
                  paddingRight: 20
                }}
              >
                <div style={{ width: (232 * 50) / 128, height: 50 }}>
                  <IconHorangi />
                </div>
              </li>
              {[
                'products',
                'services',
                'customers',
                'partners',
                'resources',
                'careers'
              ].map((i, index) => (
                <>
                  <li
                    key={index}
                    style={{
                      color: '#fff',
                      listStyleType: 'none',
                      paddingRight: 20,
                      fontSize: '0.7rem',
                      fontFamily: 'Montserrat'
                    }}
                  >
                    {i.toUpperCase()}
                  </li>
                </>
              ))}
              <li style={{ listStyleType: 'none', flex: 1 }}></li>
              <li style={{ display: 'flex', flexDirection: 'column' }}>
                <ul
                  style={{
                    margin: '0 0 5px 0',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    listStyleType: 'none'
                  }}
                >
                  <li
                    style={{
                      color: '#fff',
                      fontSize: '0.7rem',
                      fontFamily: 'Montserrat',
                      listStyleType: 'none'
                    }}
                  >
                    <a href='mailto:sales@horangi.com'>
                      {'sales@horangi.com'.toUpperCase()}
                    </a>
                  </li>

                  <li
                    style={{
                      color: '#fff',
                      fontSize: '9px',
                      listStyleType: 'none',
                      width: 10,
                      textAlign: 'center'
                    }}
                  >
                    |
                  </li>

                  <li
                    onClick={() => setShowLang(!showLang)}
                    style={{
                      color: '#fff',
                      fontSize: '0.7rem',
                      fontFamily: 'Montserrat',
                      listStyleType: 'none',
                      position: 'relative'
                    }}
                  >
                    {lang.toUpperCase()}

                    {showLang && (
                      <ul
                        style={{
                          margin: 0,
                          padding: 0,
                          position: 'absolute',
                          top: 20,
                          right: 0,
                          backgroundColor: 'black',
                          zIndex: 2
                        }}
                      >
                        {langs.map((i, index) => (
                          <li
                            onClick={() => {
                              setLang(i);
                              setShowLang(false);
                            }}
                            key={index}
                            style={{
                              listStyleType: 'none',
                              height: 30,
                              display: 'flex',
                              flexDirection: 'column',
                              justifyContent: 'center',
                              alignItems: 'center',
                              width: 50
                            }}
                          >
                            {i.toUpperCase()}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                </ul>
                <ul
                  style={{
                    height: 30,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',

                    margin: 0,
                    padding: 0
                  }}
                >
                  <li
                    style={{
                      color: '#fff',
                      listStyleType: 'none',
                      marginRight: 10,
                      fontSize: '0.5rem',
                      padding: 10,
                      border: '1px solid #fff'
                    }}
                  >
                    {'sign in'.toUpperCase()}
                  </li>
                  <li
                    style={{
                      color: '#fff',
                      listStyleType: 'none',
                      marginRight: 10,
                      fontSize: '0.5rem',
                      padding: 10,
                      // border: '1px solid #fff',
                      backgroundColor: colors.orange
                    }}
                  >
                    {'contact us'.toUpperCase()}
                  </li>
                </ul>
              </li>
            </ul>
          </Row>
        </Container>
        <Container
          className='d-md-none'
          style={{ backgroundColor: 'black', position: 'relative' }}
        >
          <Row
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div
              onClick={() => setShowNavOnMobile(!showNavOnMobile)}
              style={{
                width: (232 * height) / 10 / 128,
                height: height / 10,
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <IconHorangi />
            </div>
          </Row>
        </Container>
        <Modal
          style={{
            backgroundColor: 'black'
          }}
          show={showNavOnMobile}
          onHide={() => {
            setShowNavOnMobile(false);
            setShowLang(false);
          }}
        >
          <div
            style={{
              height: '100vh',
              overflow: 'scroll'
            }}
          >
            {[
              'products',
              'services',
              'customers',
              'partners',
              'resources',
              'careers',
              'sales@horangi.com',
              'sign in',
              `${lang}`,
              'contact us'
            ].map((i, index) => (
              <>
                <div
                  onClick={() => {
                    if (index === 11) {
                      setShowLang(!showLang);
                    } else {
                      setShowNavOnMobile(false);
                    }
                  }}
                  style={{
                    height: `${100 / 12}vh`,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    backgroundColor: 'black',
                    fontFamily: 'Montserrat',
                    fontSize: '1rem'
                  }}
                  key={index}
                >
                  {index === 8 && showLang && 'CHOOSE LANG'}
                  {index === 8 && !showLang && lang}
                  {index === 6 && (
                    <a href='mailto:sales@horangi.com'>{i?.toUpperCase()}</a>
                  )}
                  {![6, 8].includes(index) && i?.toUpperCase()}
                </div>
                {showLang && i?.length === 2 && langs?.includes(i) && (
                  <>
                    {langs.map((j, index) => (
                      <div
                        onClick={() => {
                          setShowNavOnMobile(false);
                          setLang(j);
                          setShowLang(false);
                        }}
                        style={{
                          height: `${100 / 12}vh`,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                          color: '#fff',
                          backgroundColor: '#838383',
                          fontFamily: 'Montserrat',
                          fontSize: '1rem'
                        }}
                        key={index}
                      >
                        {j.toUpperCase()}
                      </div>
                    ))}
                  </>
                )}
              </>
            ))}
          </div>
        </Modal>
      </nav>
      <div style={{ height: 60 }}></div>
    </>
  );
}
export default Radium(NavHeader);
