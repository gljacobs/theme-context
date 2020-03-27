import React from 'react';
import { ThemeContext } from '../theme-context';

function Nav() {

    return (

        <ThemeContext.Consumer>{({ theme }) => (
            <nav style={{ background: theme.primary }}>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center" style={{ color: theme.secondary }}>React Context</a>
                </div>
            </nav>
        )}
        </ThemeContext.Consumer>
    )
};

export default Nav; 