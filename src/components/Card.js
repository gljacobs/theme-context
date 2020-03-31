import React from 'react';
import { ThemeContext } from '../theme-context';

function Card() {

    return (
        <ThemeContext.Consumer>{({ theme, toggleTheme, isLight }) => (
            <div className="card" style={{ width: "50vw", height: "200px", margin: "15vh auto", color: theme.secondary, background: theme.primary }}>
                <div className="card-content center" style={{ padding: "40px" }}>
                    <span className="card-title">Change Theme</span>
                    <br />
                    <button className={"btn-large waves-effect waves-light " + (isLight ? "teal lighten-2" : "orange")} onClick={toggleTheme}>
                        {isLight  ? "Dark" : "Light"}
                        <i className="material-icons right">
                            {isLight ? "brightness_4" : "brightness_5"}
                        </i>
                    </button>
                </div>
            </div>
        )}
        </ThemeContext.Consumer>
    )
}

export default Card;