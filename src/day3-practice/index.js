import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import TransferApp from "../day2-practice/components";

export default function RouterApp() {
    return (
        <Router>
            <div>
                <ul class="flex border-b">
                    <li class="-mb-px mr-1">
                        <Link class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" to="/" >Home</Link>
                    </li>
                    <li class="mr-1">
                        <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/about" >About</Link>
                    </li>
                    <li class="mr-1">
                        <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/users" >Users</Link>
                    </li>
                    <li class="mr-1">
                        <Link class="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" to="/bank" >Bank</Link>
                    </li>
                    
                </ul>
                {/* <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3">
                    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                            <Link to="/" className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                                Home
                            </Link>
                            <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                                <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                                <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                            </button>
                        </div>
                        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                            <ul className="flex flex-col lg:flex-row list-none ml-auto">
                                <li className="nav-item">
                                    <Link to="/about" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >
                                        About
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/users" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >
                                        Users
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/bank" className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" >
                                        Bank
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about" component={About} />
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/bank">
                        <TransferApp />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <Fragment>
            <h1>My Home</h1>
            <p>lalallala</p>
        </Fragment>
    );
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

