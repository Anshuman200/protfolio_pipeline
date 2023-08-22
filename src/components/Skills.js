import { Col, Progress, Row } from 'antd'
import React from 'react'

const skillData = [
    {
        id: 0,
        title: 'React.JS',
        percentage: 80
    },
    {
        id: 1,
        title: 'Next.JS',
        percentage: 75
    },
    {
        id: 2,
        title: 'Bootstrap',
        percentage: 80
    },
    {
        id: 3,
        title: 'React Bootstrap',
        percentage: 80
    },
    {
        id: 4,
        title: 'Firebase',
        percentage: 60
    },
    {
        id: 5,
        title: 'HTML 5',
        percentage: 80
    },
    {
        id: 6,
        title: 'CSS 3',
        percentage: 80
    },
]

const Skills = () => {
    return (
        <div className='common__container' style={{ marginTop: '1rem' }}>
            <div className='skill' style={{ backgroundColor: 'rgba(255,255,255,0.8)' }} >
                <h1 style={{ marginBottom: '1rem' }}>Skills</h1>
                <Row gutter={[16, 16]}>
                    {skillData?.map((data, index) => {
                        return (
                            <Col xs={24} sm={24} md={12} lg={12} xl={6} key={index}>
                                <div className='skill__container'>
                                    <h2 style={{ minWidth: '9rem' }}>{data?.title}</h2>
                                    <Progress type='dashboard' gapDegree={30} gapPosition='bottom' trailColor='red' strokeColor='rgb(51, 51, 223)' percent={data?.percentage} />
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default Skills