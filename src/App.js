import React, { Component } from 'react';
import firebase from 'firebase';
import ParticlesBg from "particles-bg";

import { Route, Switch } from 'react-router-dom';
import FAQ from './components/FAQ';
import Header from './containers/Header';
import Public from './App/Public';
import User from './App/User';
import ErrorMessage from './components/ErrorMessage';
import Banner from './components/Banner';
import Body from './components/Body';
import ProductView from './containers/public/ProductView';

class App extends Component {
  state = {
    user: ''
  };

  componentDidMount() {
    this.auth();
  }

  // check logged in user
  auth = () =>
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: {
            displayName: user.displayName,
            email: user.email,
            uid: user.uid
          }
        });
      } else {
        this.setState({ user: '' });
      }
    });

  render() {
    return (
		<div>
			<ParticlesBg type="random" bg={true}/>
			<React.Fragment>
        <Body>
          <Route
            path="/"
            component={props => <Header {...props} user={this.state.user} />}
          />
          <Switch>
            <Route exact path="/" component={Public} />
			 <Route exact path="/help" component={FAQ} /> 
            <Route
              path="/user"
              component={props => <User {...props} user={this.state.user} />}
            />
            <Route exact path="/view/:id" component={ProductView} />
            <Route
              component={props => (
                // eslint-disable-next-line
                <ErrorMessage {...props}>Page not found 😞</ErrorMessage>
              )}
            />
          </Switch>
        </Body>
		<Banner>
          Made with
          <span style={{ color: '#F6360B' }}> ❤️ </span>
          by JaiHindCoders Team
        </Banner>
      </React.Fragment>
		</div>
      
    );
  }
}

export default App;
