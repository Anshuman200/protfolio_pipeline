import React from 'react';
import './style.css'
import { Link } from 'react-scroll';
import { Image } from 'antd';

const Header = () => {
    return (
        <div className="container common__container">
            <div className="left__nav">
                <Image src={`next.svg`} width={50} height={50} blurDataURL='next.svg' alt='logo' />
            </div>
            <div className="right__nav">
                <Link to="home" scroll={false}>
                    Home
                </Link>
                <Link to="about" scroll={false}>
                    About
                </Link>
                <Link to="projects" scroll={false}>
                    Projects
                </Link>
                <Link to="contact" scroll={false}>
                    Contact
                </Link>
            </div>

        </div>
    )
}

export default Header