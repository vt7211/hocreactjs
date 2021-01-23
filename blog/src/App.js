import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/404';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      
      <Switch>
        <Route path="/login" >
          <LoginPage />
        </Route>

        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;