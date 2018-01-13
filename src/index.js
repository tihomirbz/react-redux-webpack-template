import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import appStore from './redux/store.js';
import './styles/style.scss';

import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import Redux from './components/Redux.jsx';

render(
    <Provider store={ appStore }>
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path='/' component={ () => <Redirect to='/home'/> }/>
                <Route path='/home' component={ Home }/>
                <Route path='/redux' component={ Redux }/>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
