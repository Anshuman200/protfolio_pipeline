import React from 'react';
import { Carousel, Image } from 'antd';
import vooImg from '../assets/voo.png';
import vmdImg from '../assets/vmd.png';
import mcImg from '../assets/mc.png';
import flImg from '../assets/fl.png';
import ftImg from '../assets/ft.png';
import tlImg from '../assets/tl.png';
import ehsImg from '../assets/ehs.png';

const ProjectSlider = () => {
    const settings = {
        responsive: [
            {
                breakpoint: 992, // Medium screen breakpoint (md)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768, // Small screen breakpoint (sm)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const projectData = [
        {
            media: vooImg,
            web_link: `http://dev.voorideshare.com`
        },
        {
            media: vmdImg,
            web_link: `http://vegansmeetdaily.com`
        },
        {
            media: mcImg,
            web_link: `http://miraclecloset.com`
        },
        {
            media: flImg,
            web_link: `http://admin.frontlinefinishca.com`
        },
        {
            media: ftImg,
            web_link: `http://familyadmin.solidappmaker.ml`
        },
        {
            media: tlImg,
            web_link: `http://admin.turkestanlines.com`
        },
        {
            media: ehsImg,
            web_link: `http://admin.ehsrecruitingcompany.com`
        },
    ]

    return (
        <Carousel {...settings} dots={true} autoPlay slidesToShow={3} slickGoTo={2} arrows={true} autoplaySpeed={1000} >
            {projectData?.map((itm, index) => {
                return (
                    <div key={index} className='slider___containet'>
                        <Image src={itm?.media} height={200} width={400} preview={false} style={{ minHeight: 250, width: '100%', paddingRight: 20 }} alt='project media' />
                        <a className='visit__btn' href={itm?.web_link} target="_blank">
                            Visit Site
                        </a>
                    </div>
                )
            })}
        </Carousel>
    )
}

export default ProjectSlider