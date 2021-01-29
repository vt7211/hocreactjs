import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SearchPage from './pages/Search';
import CategoryPage from './pages/Category';
import PageNotFound from './pages/404';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import { useEffect, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actFetchCategoriesAsync } from './store/category/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchCategoriesAsync());

  }, []);
  useLayoutEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "/js/jquery.js";
    jquery.async = true;
    document.body.appendChild(jquery);

    const plugins = document.createElement("script");
    plugins.src = "/js/plugins.js";
    plugins.async = true;
    document.body.appendChild(plugins);

    const scroll = document.createElement("script");
    scroll.src = "/plugins/metafizzy/infinite-scroll.min.js";
    scroll.async = true;
    document.body.appendChild(scroll);

    const functions = document.createElement("script");
    functions.src = "/js/functions.js";
    functions.async = true;
    document.body.appendChild(functions);

  }, []);



  return (
  <>
    <Sidebar />
    <div className="body-inner">
      <Header />
      
      <Switch>
        <Route path="/login" >
          <LoginPage />
        </Route>

        <Route path="/search" >
          <SearchPage />
        </Route>

        <Route path="/category/:slug" >
          <CategoryPage />
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
    <a id="scrollTop"><i class="icon-chevron-up"></i><i class="icon-chevron-up"></i></a>
  </>
  );
}

export default App;