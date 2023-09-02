import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-scroll';
import { Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons'

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='header__wrapper'>
            <div className="container common__container">
                <div className='__nav__lg'>
                    <div className="__nav">
                        <Link to="home" activeStyle={{ color: '#000' }} spy={true} smooth={true} offset={-70} duration={500} delay={500}>Ansh </Link>
                        <Link to="about" activeStyle={{ color: '#000' }} spy={true} smooth={true} offset={50} duration={500} delay={500}> About </Link>
                        <Link to="projects" activeStyle={{ color: '#000' }} spy={true} smooth={true} offset={-80} duration={500} delay={500}> Projects </Link>
                        <Link to="contact" activeStyle={{ color: '#000' }} spy={true} smooth={true} offset={-50} duration={500} delay={500}> Contact </Link>
                    </div>
                </div>
                <div className='show__btn'>
                    <Link to="home" activeStyle={{ color: '#000' }} spy={true} smooth={true} offset={50} duration={500} delay={500}>Ansh </Link>
                    <Button onClick={() => setOpen(!open)} icon={<MenuOutlined />} />
                </div>
            </div>

            <Drawer placement="right" onClose={() => setOpen(!open)} open={open}>
                <div className="__nav">
                    <Link onClick={() => setOpen(!open)} to="home" activeStyle={{ color: '#000' }} spy={true} smooth={true} offset={-70} duration={500} delay={500}>Ansh </Link>
                    <Link onClick={() => setOpen(!open)} to="about" activeStyle={{ color: '#000' }} spy={true} smooth={true} offset={50} duration={500} delay={500}> About </Link>
                    <Link onClick={() => setOpen(!open)} to="projects" activeStyle={{ color: '#000' }} spy={true} smooth={true} offset={-80} duration={500} delay={500}> Projects </Link>
                    <Link onClick={() => setOpen(!open)} to="contact" activeStyle={{ color: '#000' }} spy={true} smooth={true} offset={-50} duration={500} delay={500}> Contact </Link>
                </div>
            </Drawer>
        </div>
    )
}

export default Header