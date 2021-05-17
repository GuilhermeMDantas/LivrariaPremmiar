import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

import Home from './pages';
import NotFound from './pages/404';
import NovoLivro from './pages/novoLivro';
import EditarLivro from './pages/editarLivro';

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/new" component={NovoLivro}/>
            <Route name="editar" path="/editar/" component={EditarLivro}/>
            <Route exact path="/404" component={NotFound}/>
            <Redirect to="/404"/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
