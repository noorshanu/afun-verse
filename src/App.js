import Home from 'Pages/Home';
import Privacy from 'Pages/Privacy';
import RiskWarning from 'Pages/RiskWarning';
import Terms from 'Pages/Terms';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <Router>
    <Routes>
    <Route  exact path='/' element={<Home/>}  />
    <Route  exact path='/privacy-policy' element={<Privacy/>}  />
    <Route  exact path='/risk-warning' element={<RiskWarning/>}  />
    <Route  exact path='/terms' element={<Terms/>}  />

    </Routes>
    </Router>

   
  );
}

export default App;
