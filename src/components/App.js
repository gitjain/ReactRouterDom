import * as React from "react";
import * as ReactDOM from "react-dom";
import {Label} from "./Label/Label";
import {User} from "./User";
import {About} from "./About";
import {Home} from "./Home";
import {HashRouter as Router,Route,IndexRoute,BrowserRouter, hashHistory,Switch,Link} from 'react-router-dom';

import "../SCSS/App.scss"

export class App extends React.Component {
  render() {
    return (
      <div>
      <div className='App-header'>       
          <h2>Welcome to React</h2>
          <h2>done</h2>
          <Label name="helloj"></Label>
          </div>
          <div>
          <header> <nav>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/user'>User</Link></li>
        <li><Link to='/about'>About</Link></li>
      </ul>
      </nav>   </header>
      </div>
      <div>
     <Main/>
      </div>
      </div>
    );
  }

}

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/home' component={Home}/>
      <Route path='/user' component={User}/>
      <Route path='/about' component={About}/>
    </Switch>
  </main>
)
