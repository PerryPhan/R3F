import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Component
import { Environment } from '@react-three/drei';
import Box from './shape/Box';

function App() {
  // Remember to press on screen to activate music. It is big to load

  return (
    <>
      <color attach='background' args={['#000000']} />
      <ambientLight intensity={1} />
      <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
      <Environment preset='warehouse' />
      <Box/>
    </>
  );
}

export default App;
