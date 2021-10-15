import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialState = {

    isToggled: false,
    isDarkMode: true,

};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    function setToggle(toggle) {
        dispatch({
            type: "TOGGLE_SIDEBAR",
            payload: toggle
        });

        if (toggle)
            document.body.classList.add("sb-sidenav-toggled");
        else
            document.body.classList.remove("sb-sidenav-toggled");
    }

    function setDarkMode(toggle) {
        dispatch({
            type: "SET_DARKMODE",
            payload: toggle
        });
    }

    return (
        <GlobalContext.Provider
            value={{
                appState: state,
                setToggle,
                setDarkMode
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};