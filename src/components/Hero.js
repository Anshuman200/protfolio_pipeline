import React from 'react';
import { Button, Col, Row } from 'antd';
import { DownloadOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

const otherStyle = {
    textAlign: 'center',
    backgroundColor: '#cdecde',
    width: 'fit-content',
    padding: 20,
    borderRadius: '30% 0'
}

const Hero = ({ title = "", description = "", nav = "home", titleBtn = "", hasGrid = false, media, hasBgImg, gitLink, linkedInLink }) => {
    console.log("hasGrid", hasGrid, media, linkedInLink, gitLink)
    const handleDownloadPDF = () => {
        const url = '/dummy.pdf'; // Replace with the URL of your PDF file

        const link = document.createElement('a');
        link.href = url;
        link.download = 'ansh_resume.pdf';
        link.target = '_blank';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div id={nav} style={{ minHeight: '80vh' }} className={nav === "projects" ? 'm__auto' : 'm__auto'}>
            <div style={{ minHeight: '80vh' }} className='bs'>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={hasGrid ? 12 : 24}>
                        <div className='common__container'>
                            {title && <h1 style={nav === "projects" ? otherStyle : {}}>{title}</h1>}
                            {description && <article dangerouslySetInnerHTML={{ __html: `${description}` }} />}
                            {titleBtn && <Button type='ghost' onClick={() => handleDownloadPDF()} icon={<DownloadOutlined />}>{titleBtn}</Button>}
                            <div>
                                {gitLink && <a href={gitLink} target='_blank' rel="noreferrer"><GithubOutlined style={{ fontSize: 45, color: '#171515', marginRight: 20 }} /></a>}
                                {linkedInLink && <a href={linkedInLink} target='_blank' rel="noreferrer"><LinkedinOutlined style={{ fontSize: 45, color: '#0A66C2' }} /></a>}
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={hasGrid ? 12 : 24}>
                        {media}
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Hero