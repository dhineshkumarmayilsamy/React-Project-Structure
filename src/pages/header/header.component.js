import React, { useContext, useState } from 'react'
import {useHistory} from 'react-router'
import { NavLink } from "react-router-dom";
import { GlobalContext } from '../../context/GlobalState';
import { useAuth } from '../../hooks/useAuth';

export const Header = (props) => {

    // Global value
    const { appState, setToggle, setDarkMode } = useContext(GlobalContext);
    const auth = useAuth();
    const history = useHistory()

    // Local value
    const [isToggled, setIsToggled] = useState(appState.isToggled);
    const [isDarkMode, setIsDarkMode] = useState(appState.isDarkMode);

    // useEffect(() => {
    //     console.log("Header mounted");
    //     setDarkMode(isDarkMode)
    //   }, []);

    const toggleClass = () => {
        setIsToggled(!isToggled);
        setToggle(!isToggled)

    }

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        setDarkMode(!isDarkMode)

    }

    const signout = () => {
        auth.signout();
        history.push("/login")
    }



    return (
        <nav className={"sb-topnav navbar navbar-expand navbar-dark " + (isDarkMode ? "bg-dark" : "bg-nav-light")}>
            <NavLink className="navbar-brand" to="/home">
                React
            </NavLink>

            <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" onClick={() => toggleClass()}>
                <i className="fas fa-bars"></i>
            </button>
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            </form>
            <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" onClick={() => toggleDarkMode()}>
                <i className="fas fa-adjust"></i>
            </button>
            <ul className="navbar-nav ml-auto ml-md-0">
                <li className="nav-item dropdown">
                    <NavLink to="#" className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-user fa-fw"></i>
                    </NavLink>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                        <NavLink to="/admin" className="dropdown-item" activeClassName="active">Admin</NavLink>
                        <NavLink to="/home" className="dropdown-item" activeClassName="active">Home</NavLink>
                        <div className="dropdown-divider"></div>
                        <NavLink to="/login" className="dropdown-item" activeClassName="" onClick={() => signout()}>Log Out</NavLink>
                    </div>
                </li>

            </ul>
        </nav>
    )
}

