import React from 'react';
import './skills.css';

export const Skills = () => {
  return (
    <section className='about'>
        <div className='aboutContent'>
            <h2 className='knowMe'>/ about me</h2>
            <p className='fullTime'>I am currently a full-time computer science student at the 
            <a className='umass' href="https://www.uml.edu/about/"> University of Massachusetts - Lowell</a>
                . <br/>Even with my relatively new experience, I am excited to embark on my journey in the tech industry!</p>
            <span className='techTitle'>Here are some technologies I have been working with:</span>
            <ul className='techs'>
                <li> C++ Programming</li>
                <li> C Programming</li>
                <li> React.js</li>
                <li> Javascript</li>
                <li> HTML & CSS</li>
                <li> SFML</li>
            </ul>
            <p className='outside'>Outside of school, I love to keep up to date with the developments of modern artificial intelligence and machine learning, 
            always eager to explore the ever-evolving landscape of technology. <br/>I also play videogames . . . and binge watch movies.</p>
        </div>
    </section>
  )
}

export default Skills;