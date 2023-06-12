
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import "./nav.styles.scss";
import { useState } from 'react';

const Nav = () => {

    const [displayMobNav, setDisplayMobNav] = useState(false);


    return (
        <nav>
            {/* Nav For Desktop */}
            <section className="nav-desktop">
                <div className='w-11/12 lg:w-10/12  m-auto flex justify-between py-5'>
                    <div className='logo'>
                        <Link to="/">
                            <img src={Logo} alt='Car Rental' width="150px" />
                        </Link>
                    </div>

                    <div className='flex justify-center items-center '>
                        <ul className='flex justify-between lg:gap-x-4 xl:gap-x-4 w-full p-0 m-0'>
                            <li>
                                <Link to="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Vehicle Models
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    Testomonials
                                </Link>
                            </li>

                            <li>
                                <Link to="#">
                                    Our Team
                                </Link>
                            </li>

                            <li>
                                <Link to="#">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className='nav-btns flex justify-end items-center gap-x-4'>
                        <span className='text-lg font-bold'>
                            Sign In
                        </span>

                        <button className=' bg-orange-btn common-btn'>
                            Register
                        </button>
                    </div>
                </div>

            </section>

            {/* Nav For Mobile */}
            <section className="nav-mob w-11/12 lg:w-10/12 m-auto">
                <div className='flex justify-between items-center py-5'>

                    <div>
                        <Link to="/">
                            <img src={Logo} alt='Car Rental' width="120px" />
                        </Link>
                    </div>

                    <div>
                        <button onClick={() => setDisplayMobNav(true)}>
                            <i className="fa-solid fa-bars"></i>
                        </button>
                    </div>

                    {
                        <div className={`nav-mob-contents ${displayMobNav ? 'open-nav' : ''} `}>

                            <div className="flex justify-end py-7 px-10">
                                <button onClick={() => setDisplayMobNav(false)}>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>

                            <ul className='flex flex-col text-center leading-10 justify-between w-full p-0 m-0'>
                                <li>
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Vehicle Models
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#">
                                        Testomonials
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        Our Team
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    }

                </div>
            </section>

        </nav >
    )
}

export default Nav
