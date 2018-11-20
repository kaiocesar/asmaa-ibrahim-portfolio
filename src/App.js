import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import {
  Route, 
  HashRouter
} from 'react-router-dom';

import Contacts from './Contacts';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Portfolio from './Portfolio';
import Blog from './Blog';
import BlogSinglePage from './BlogSinglePage';

class App extends Component {

  render() {    
    return (
      <HashRouter>
        <div id="general-content">
          
          <Header />

          <main role="main" class="container">
            <Route exact path="/" component={Home} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={Blog} />
            <Route path="/post/:id" component={BlogSinglePage} />
            <Footer />
          </main>
          
        </div>{/* .general-content */}
      </HashRouter>
    );
  }

}

export default App;
