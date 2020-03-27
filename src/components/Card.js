import React from 'react';
import { ThemeContext } from '../theme-context';

function Card() {

    return (
        <ThemeContext.Consumer>{({ theme, toggleTheme, isLight }) => (

            <div class="card" style={{ width: "50vw", height: "200px", margin: "15vh auto", color: theme.secondary, background: theme.primary }}>
                <div class="card-content center" style={{ padding: "40px" }}>
                    <span class="card-title">Change Theme</span>
                    <br />
                    <button class="btn-large waves-effect waves-light" onClick={toggleTheme}>
                        {isLight  ? "Dark" : "Light"}
                        <i class="material-icons right">
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