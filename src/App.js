import React from 'react';
import './App.css';
import Header from './components/Header';
import Hashtag from './components/Hashtag';
import Events from './components/Events';

const App = () =>  (
        <main className="app">
            <Header />
            <Hashtag />
            <Events />
        </main>
)

export default App;