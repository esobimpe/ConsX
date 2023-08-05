import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/home';
import Navbar from './component/navbar';
import Footer from './component/footer';
import WhyConsX from './pages/whyconsx';
import Terms from './pages/terms';
import Privacy from './pages/privacy';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/home' render={(props) => <Home {...props} />} />
        <Route path='/whyconsx' render={(props) => <WhyConsX {...props} />} />
        <Route path='/terms' render={(props) => <Terms {...props} />} />
        <Route path='/privacy' render={(props) => <Privacy {...props} />} />
        
        <Redirect from='/' to='/home' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
