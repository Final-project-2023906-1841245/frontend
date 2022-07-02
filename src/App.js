import './App.css';
import React, {BrowserRouter} from 'react-router-dom';
import Layout from './components/Layout.js';
import Routes from './Routes.js'

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex align-items-center justify-content-center">
        <Layout>
          <Routes/>
        </Layout> 
      </div>
    </BrowserRouter>

  );
}

export default App;
