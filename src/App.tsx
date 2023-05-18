import Layout from './components/Layout/Layout';
import Screen from './components/Screen/Screen';
import Calculator from './components/Calculator/Calculator';

import './globals.css';

function App() {
  return (
    <Layout>
      <Screen />
      <Calculator />
    </Layout>
  );
}

export default App;
