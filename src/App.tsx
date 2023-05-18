import Layout from './components/Layout/Layout';
import Calculator from './components/Calculator/Calculator';

import './globals.css';
import Screen from './components/Screen/Screen';

function App() {
  return (
    <Layout>
      <Screen />
      <Calculator />
    </Layout>
  );
}

export default App;
