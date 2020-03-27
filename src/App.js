import React from 'react';

import Nav from './components/Nav';
import Card from './components/Card';

class App extends React.Component {

    state = {
        theme: "light",
    }

    render() {
        return (
            <div>
                <Nav theme={this.state.theme}/>
                <Card theme={this.state.theme}/>
            </div>
        )
    }
}

export default App;
