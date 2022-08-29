import { Route, Switch, Link } from "react-router-dom";
import React, { useState } from 'react'
import Intro from './intro/Intro';
import Services from './Services'
import Contact from './Contact';
import Crud from './Crud';
import About from './About/About'



const Navbar = (props) => {
    const [show, setShow] = useState();

    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container">
                    <Link className="navbar-brand" as={Link} to={'/Intro'}>My portfolio</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setShow(!show)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${show ? "show" : ""}`} >
                        <ul className="navbar-nav ms-auto mb-4 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" as={Link} to={'/Intro'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" as={Link} to={"/about"}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" as={Link} to={"/Services"}>Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" as={Link} to={"/Contact"}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" as={Link} to={"/Crud"}>Crud</Link>
                            </li>
                        </ul>
                        <div class={`form-check form-switch text-${props.mode==='light'? 'dark':'light'} mx-3`}>
                            <input class="form-check-input" onClick={props.toggelemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" htmlfor="flexSwitchCheckDefault">enable dark mode</label>
                        </div>
                    </div>
                </div>
            </nav>
          
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/Contact">
                    <Contact />
                </Route>
                <Route path="/Services">
                    <Services />
                </Route>
                <Route path="/Crud">
                    <Crud />
                </Route>
                <Route path="/">
                    <Intro />
                </Route>
            </Switch>

        </>
    )
}

export default Navbar