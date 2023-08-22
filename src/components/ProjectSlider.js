import { Carousel, Image } from 'antd';
import React from 'react';

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

    return (
        <Carousel {...settings} autoPlay slidesToShow={3} slickGoTo={2} arrows={true} autoplaySpeed={1000} >
            <div>
                <a href={"http://dev.voorideshare.com"} passHref legacyBehavior>

                    <Image height={300} width={400} style={{ minHeight: 250, width: '100%', paddingRight: 20 }} src="../assets/voo.png" alt='project media' />
                </a>
                {/* <a href="http://dev.voorideshare.com" target="_blank" rel="noopener noreferrer">
                </a> */}
            </div>
            <div>
                <a href="https://vegansmeetdaily.com/" target="_blank" rel="noopener noreferrer">
                    <Image height={300} width={400} style={{ minHeight: 250, width: '100%', paddingRight: 20 }} src="../assets/vmd.png" alt='project media' />
                </a>
            </div>
            <div>
                <a href="https://miraclecloset.com/" target="_blank" rel="noopener noreferrer">
                    <Image height={300} width={400} style={{ minHeight: 250, width: '100%', paddingRight: 20 }} src="../assets/mc.png" alt='project media' />
                </a>
            </div>
            <div>
                <a href="https://admin.frontlinefinishca.com/" target="_blank" rel="noopener noreferrer">
                    <Image height={300} width={400} style={{ minHeight: 250, width: '100%', paddingRight: 20 }} src="../assets/fl.png" alt='project media' />
                </a>
            </div>
            <div>
                <a href="https://familyadmin.solidappmaker.ml/" target="_blank" rel="noopener noreferrer">
                    <Image height={300} width={400} style={{ minHeight: 250, width: '100%', paddingRight: 20 }} src="../assets/ft.png" alt='project media' />
                </a>
            </div>
            <div>
                <a href="https://admin.ehsrecruitingcompany.com/" target="_blank" rel="noopener noreferrer">
                    <Image height={300} width={400} style={{ minHeight: 250, width: '100%', paddingRight: 20 }} src="../assets/ehs.png" alt='project media' />
                </a>
            </div>
            <div>
                <a href="https://admin.turkestanlines.com/" target="_blank" rel="noopener noreferrer">
                    <Image height={300} width={400} style={{ minHeight: 250, width: '100%', paddingRight: 20 }} src="../assets/tl.png" alt='project media' />
                </a>
            </div>
        </Carousel>
    )
}

export default ProjectSlider