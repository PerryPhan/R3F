import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Component
import { Environment, PerspectiveCamera, Scroll, ScrollControls } from '@react-three/drei';
import {GundamPhenex} from './components/GundamPhenex';
import { folder, useControls } from 'leva';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  // Remember to press on screen to activate music. It is big to load
  const {x, y, z, rx, ry, rz, damping, distance} = useControls({
    position: folder({
      x: 315,
      y: -750,
      z: 800
    }),
    rotation: folder({
      rx: {
        value: 0,
        max: 1,
        min: -1,
        step: 0.1
      },
      ry: {
        value: 0,
        max: 1,
        min: -1,
        step: 0.1
      },
      rz: {
        value: 0,
        max: 1,
        min: -1,
        step: 0.1
      }
    }),
    scroll: folder({
      damping: {
        value: 0.5,
        max: 1,
        min: -1,
        step: 0.1
      },
      distance: {
        value: 0.2,
        max: 1,
        min: -1,
        step: 0.1
      }
    })
  })
 
  return (
    <>
      <PerspectiveCamera position={[0, 50, 1000]} pov={3000} makeDefault />
      <color attach='background' args={['#000']} />
      <Environment preset='warehouse' />

      <ScrollControls pages={3} damping={damping} distance={distance}>
        <GundamPhenex position={[x, y, z]}  rotation={[rx, ry, rz]}/>

        <Scroll html style={{ width: '100%' }}>
          <Container style={{ position: 'relative' }}>
            <Row style={{ height: '100vh' }} className='text-center align-items-center justify-content-center'>
              <Col>
                <div>
                  <h1 style={{marginBottom: '0px'}}> Home page </h1>
                </div>
              </Col>
            </Row>
            <Row style={{ height: '100vh' }} className='text-center align-items-center justify-content-center'>
              <Col>
                <div>
                  <h1 style={{marginBottom: '0px'}}> About page </h1>
                </div>
              </Col>
            </Row>
            <Row style={{ height: '100vh' }} className='text-center align-items-center justify-content-center'>
              <Col>
                <div>
                  <h1 style={{marginBottom: '0px'}}> Product page </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
