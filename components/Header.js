/* eslint-disable react/jsx-key */
"use client"

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../public/icons/logo.svg";
import "../styles/globals.css";

const navLinks = [
    {
        name: 'about',
        path: '/about',
    },
    {
        name: 'services',
        path: '/services',
    },
    {
        name: 'contact',
        path: '/contact',
    }
];

const homeLinks = [
    {
        name: 'home',
        path: '/',
    },
    {
        name: 'home 2',
        path: '/home',
    }
];

const subLinks = [
    {
        name: 'blog',
        path: '/blog',
    },
    {
        name: 'faq',
        path: '/faq',
    },
    {
        name: 'partner',
        path: '/partner',
    },
    {
        name: 'quote',
        path: '/quote',
    },
    {
        name: 'service-process',
        path: '/service-process',
    },
    {
        name: 'team',
        path: '/team',
    },
    {
        name: 'testimonials',
        path: '/testimonials',
    },
];

const Header = () => {
    const path = usePathname();
    return (
        <header id='header' className='header header-1'>
            <Navbar
                expand="lg"
                className=""
            >
                <Container>
                    <Navbar.Brand>
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Landscape picture"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown
                                title="Home"
                                id="basic-nav-dropdown"
                            >
                                {homeLinks.map((homeLink, index) => {
                                    return (
                                        <NavDropdown.Item key={index}>
                                            <Link
                                                className={`${
                                                    homeLink.path === path
                                                        ? 'active'
                                                        : ''
                                                } nav-link`}
                                                href={homeLink.path}
                                            >
                                                {homeLink.name}
                                            </Link>
                                        </NavDropdown.Item>
                                    );
                                })}
                            </NavDropdown>
                            {navLinks.map((navLink, index) => {
                                return (
                                    <Link
                                        className={`${
                                            navLink.path === path
                                                ? 'active'
                                                : ''
                                        } nav-link`}
                                        href={navLink.path}
                                    >
                                        {navLink.name}
                                    </Link>
                                );
                            })}
                            <NavDropdown
                                title="Pages"
                                id="basic-nav-dropdown"
                            >
                                {subLinks.map((subLink, index) => {
                                    return (
                                        <NavDropdown.Item key={index}>
                                            <Link
                                                className={`${
                                                    subLink.path === path
                                                        ? 'active'
                                                        : ''
                                                } nav-link`}
                                                href={subLink.path}
                                            >
                                                {subLink.name}
                                            </Link>
                                        </NavDropdown.Item>
                                    );
                                })}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
