import React, { Component } from 'react';
import AsmaaLogo from './asmaa.svg';
import {
    NavLink
} from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="container">   
                <header className="blog-header py-3">
                    <div className="row flex-nowrap justify-content-between align-items-center">
                        <div className="col-4 pt-1"></div>
                        <div className="col-4 text-center">
                            <NavLink to="/" className="blog-header-logo text-dark">
                                <img src={AsmaaLogo} height="50" alt="Asmaa Ibrahim - Graphic Designer" title="Asmaa Ibrahim - Graphic Designer"></img>
                            </NavLink>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center"></div>
                    </div>
                </header>  
                
                <div className="nav-scroller py-1 mb-2">
                    <nav className="nav d-flex justify-content-between">
                        <NavLink to="/#" className="p-2 text-muted">Home</NavLink>
                        <NavLink to="/blog" className="p-2 text-muted">Blog</NavLink>
                        <NavLink to="/portfolio" className="p-2 text-muted">Portfolio</NavLink>
                        <NavLink to="/contacts" className="p-2 text-muted">Contacts</NavLink>
                    </nav>
                </div>

            </div>
        )
    }
}

export default Header