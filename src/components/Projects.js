import React from 'react'
import ProjectSlider from './ProjectSlider';
import { useInView } from 'react-intersection-observer';
import CounterUp from './CounterUp';
import './style.css';

const Projects = () => {
    const [inViewRef, inView] = useInView({
        triggerOnce: false, // "true" --> Only trigger once
    });
    return (
        <div className='m__auto common__container' id='projects' style={{minHeight:'75vh'}}>
            <h2>My Projects</h2>
            <div style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
                <ProjectSlider />
            </div>
            <div className='project__counter' ref={inViewRef}>
                <CounterUp title='Project Completed' inView={inView} end={8} duration={2} />
                <CounterUp title='Total Year' inView={inView} end={1} duration={2} />
                <CounterUp title='Completion Ration' inView={inView} end={1.5} duration={2} />
            </div>
        </div>
    )
}

export default Projects