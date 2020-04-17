import React from 'react';
import Card from './objects/Card';
import Player from './objects/Player';
import Header from './components/Header';

function App() {
    return (
        <>
            <Header />
            <Card>
                <Player player="o"/>
                <Player player="o"/>
                <Player player="o"/>

                <Player player="x"/>
                <Player player="o"/>
                <Player player="x"/>

                <Player player="o"/>
                <Player player="x"/>
                <Player player="o"/>
            </Card>
        </>
    );
}

export default App;