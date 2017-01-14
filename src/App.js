import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyD0R6fXp4o4gOe_s89BpdF_iPTk2gntc6E',
            authDomain: 'manager-27e52.firebaseapp.com',
            databaseURL: 'https://manager-27e52.firebaseio.com',
            storageBucket: 'manager-27e52.appspot.com',
            messagingSenderId: '758745696870'
        };

        firebase.initializeApp(config);
    }

    render() {
        //requrired for reduxthunk
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); 
        return (
            <Provider store={store}>
				<LoginForm />
			</Provider>
        );
    }
}

export default App;
