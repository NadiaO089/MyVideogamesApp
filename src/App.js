
import { Route } from 'react-router-dom';

import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import Detail from './Components/Detail';
import Create from './Components/Create';
import Errors from './Components/Errors';
import About from './Components/About';
import Created from './Components/Created';


function App() {
  return (
    <div className="App">
      <Route exact path = '/' component={LandingPage} />
      <Route exact path = '/home' component={Home} />
      <Route exact path = '/videogame/:idVideogame' component = {Detail}/>
      <Route exact path = '/create' component={Create}/>
      <Route exact path = '/errors' component={Errors}/>
      <Route exact path = '/about' component={About} />
      <Route exact path = '/created' component={Created} />
    </div>
  );
}

export default App;
