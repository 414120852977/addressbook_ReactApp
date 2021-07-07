import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import AddressBookForm from '../../address_book/src/component/addressbook-form/addressbook-form';
import HomePage from '../../address_book/src/component/homePage/homePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/homePage"component={HomePage} >
    </Route>
        <Route exact path="/addressbook-form" component={AddressBookForm}>
        </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
