import React, { Component } from "react";
import {Link,NavLink}               from "react-router-dom";

import Cookies from 'js-cookie';
//Import Image
import logoMain             from "../../assets/images/logo.png"
import secondLogo           from "../../assets/images/logo-2.png"

class Headers extends Component {
    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    handleSignOut = () => {
        //remove JWT Token 
        Cookies.remove('jwt');
        console.log('jwt token expired')
        this.props.history.push('/signin');
    }
    render() {
        return (
            <>
            {/* ===============  header area start =============== */}
            <header>
                <div className="header-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                <div className="navbar-wrap">
                                    <div className="logo d-flex justify-content-between">
                                        <Link to={`${process.env.PUBLIC_URL}/homepage`} className="navbar-brand" onClick={this.scrollTop}><img src={logoMain} alt="" /></Link>
                                    </div>
                                    <div className="navbar-icons">
                                        <div className="searchbar-open">
                                            <i className="flaticon-magnifier" />
                                        </div>
                                        <div className="user-dropdown-icon">
                                            <i className="flaticon-user" />
                                            <div className="account-dropdown">
                                                <ul>
                                                    <li className="account-el">
                                                        <i className="bx bx-cog" />
                                                        <Link to={`${process.env.PUBLIC_URL}/settings`}>Account Settings</Link>
                                                    </li>
                                                    <li className="account-el">
                                                        <i className="bx bx-log-in-circle" />
                                                        <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/`} className="sub-item" onClick={this.handleSignOut}>Sign Out</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mobile-menu d-flex ">
                                            <div className="top-search-bar m-0 d-block d-xl-none">
                                            </div>
                                            <Link to={"#"} className="hamburger d-block d-xl-none">
                                                <span className="h-top" />
                                                <span className="h-middle" />
                                                <span className="h-bottom" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                <nav className="main-nav">
                                    <div className="navber-logo-sm">
                                        <img src={secondLogo} alt="" className="img-fluid" />
                                    </div>
                                    <ul>
                                        <li>
                                            <NavLink  activeClassName="active" to={`${process.env.PUBLIC_URL}/homepage`} onClick={this.scrollTop} >Home</NavLink >
                                        </li>
                                        <li>
                                            <NavLink  activeClassName="active" to={`${process.env.PUBLIC_URL}/about-us`} onClick={this.scrollTop} >About Us</NavLink >
                                        </li>
                                        <li>
                                            <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/search`} onClick={this.scrollTop} >Search</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/all-locations`} onClick={this.scrollTop} >All Locations</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/contact`} onClick={this.scrollTop} >Contact Us</NavLink>
                                        </li>
                                    </ul>
                                    <div className="navbar-icons-2">
                                        <div className="searchbar-open">
                                            <Link to={`${process.env.PUBLIC_URL}/search`}>
                                                <i className="flaticon-magnifier" />
                                            </Link>
                                        </div>
                                        <div className="user-dropdown-icon">
                                            <i className="flaticon-user" />
                                            <div className="account-dropdown">
                                                <ul>
                                                    <li className="account-el">
                                                        <i className="bx bx-cog" />
                                                        <Link to={`${process.env.PUBLIC_URL}/settings`} >Account Settings</Link>
                                                    </li>
                                                    <li className="account-el">
                                                        <i className="bx bx-log-in-circle" />
                                                        {/* </li><Link to={`#`} >Log out</Link> */}
                                                        <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/`} className="sub-item" onClick={this.handleSignOut}>Sign Out</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-contact">
                                        <ul>
                                            <li className="sidebar-single-contact"><i className="bx bxs-phone" />
                                                <Link to={`tel:(123) 456 7890)`} >(123) 456 7890</Link>
                                            </li>
                                            <li className="sidebar-single-contact"><i className="bx bxs-envelope" />
                                                <Link to={`mailto:info@example.com`} >localens2024@gmail.com</Link>
                                            </li>
                                            <li className="sidebar-single-contact">
                                                <i className="bx bx-cog" />
                                                <Link to={`${process.env.PUBLIC_URL}/settings`} >Account Settings</Link>
                                            </li>
                                            <li className="sidebar-single-contact">
                                                <i className="bx bx-log-in-circle" />
                                                {/* </li><Link to={`#`} >Log out</Link> */}
                                                <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/`} className="sub-item" onClick={this.handleSignOut}>Sign Out</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* ===============  header area end =============== */}
            </>
        );
    }
}

export default Headers;