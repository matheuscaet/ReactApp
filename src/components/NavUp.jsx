import React from 'react';
import { CgLogOut } from 'react-icons/cg';
import { useHistory } from "react-router";

import { logout } from '../helper/auth';



const NavUp = () => {
    const history = useHistory();

    const handleLogout = () => {
        logout();
        history.push("/");
    }

    return (
        <div className="up-nav">
            <button className="btn-2 logout" onClick={handleLogout}>Logout <CgLogOut/></button>
        </div>
    )
}

export default NavUp;