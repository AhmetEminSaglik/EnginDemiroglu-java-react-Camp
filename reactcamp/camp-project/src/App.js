import { Container } from 'semantic-ui-react';
import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi';
// import 'semantic-ui-css/semantic.min.css'; // buga giriyor html de hallettim

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
//2.21 de kaldim