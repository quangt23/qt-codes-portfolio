import React from 'react';
import './skills.css';

export const Skills = () => {
  return (
    <section className='about'>
        <div className='aboutContent'>
            <h2 className='knowMe'>/ about me</h2>
            <p className='fullTime'>I'm currently a full-time computer science student at the 
            <a className='umass' href="https://www.uml.edu/about/"> University of Massachusetts - Lowell</a>
                . Even with my relatively new experience, I have a strong passion to start working in the tech industry!</p>
            <span className='techTitle'>Here are some technologies I have worked with:</span>
            <ul className='techs'>
                <li>C++ Programming</li>
                <li>C Programming</li>
                <li>React.js</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <p className='outside'>Outside of school, I love to keep up to date with the developments of modern artificial intelligence, like chatGPT. <br></br>
                Also, I'd like to say I'm pretty good at video games.</p>
        </div>
    </section>
  )
}

export default Skills;