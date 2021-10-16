import React, { createContext, useReducer } from 'react';
import appReducer from './AppReducer';

const initialState = {

    isToggled: false,
    isDarkMode: true,

};

(function(){
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");

})();

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

        if (toggle) {
            document.body.classList.add("dark-theme");
            document.body.classList.remove("light-theme");
        }
        else {
            document.body.classList.add("light-theme");
            document.body.classList.remove("dark-theme");
        }
            
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