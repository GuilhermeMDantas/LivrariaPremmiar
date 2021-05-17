import React from 'react';
import { MenuItems } from "./MenuItems";
import './Navbar.css'

class Navbar extends React.Component {

    render() {
        return(
            <nav className="NavbarItems">
                <h1>Livraria</h1>
                <ul className="navbar-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar