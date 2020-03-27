import React from 'react';
import { ThemeContext, themes } from './theme-context';

import Nav from './components/Nav';
import Card from './components/Card';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
                isLight: !state.isLight,
            }));
        };

        this.state = {
            theme: themes.light,
            isLight: true,
            toggleTheme: this.toggleTheme,
        }
    }

    render() {
        return (
            <div id="app" style={ this.state.isLight ? {background: "#F2F2F2"} : {background: "#0D0D0E"}}>
                <ThemeContext.Provider value={this.state}>
                    <Nav />
                    <Card />
                </ThemeContext.Provider>
            </div>
        )
    }
}

export default App;
