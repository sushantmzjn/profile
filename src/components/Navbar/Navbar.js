import React from 'react';
import { Link } from 'react-scroll';
import { MenuItems } from './Menuitems';
import './Navbar.css';


export default class Navbar extends React.Component {

    state = { clicked: false }
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <nav className="NavbarItems fixed-top" >
                <h1 className="navbar-logo"><i className="fab fa-react">Sushant</i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <Link to={item.url} smooth="true">
                                <li key={index} className={item.cName} >
                                    {item.title}
                                </li>
                            </Link>
                        )
                    })}
                </ul>
            </nav >
        )
    }
}