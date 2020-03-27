import React from 'react';

export const themes = {
    dark: {
        primary: '#19191B',
        secondary: '#eeeeee',
    },
    light: {
        primary: '#ffffff',
        secondary: '#222222',
    },
};

export const ThemeContext = React.createContext({
    theme: themes.light, // default value
    toggleTheme: () => {},
    isLight: true,
});