import React from 'react';
import './projects.css';
import github from '../../assets/github.svg';

const Projects = () => {
  return (
    <section className='projects'>
      <h2 className='project-divider'>/ projects</h2>
      <div className='grid-container'>
        <div class="project">
          <div class="title">Photo Encryption</div>
          <div class="description">A application designed using a Linear Feedback Shift Register to produce encrypted and decrypted photos.</div>
          <div class="technologies">SFML, C++ </div>
          <div class="github-button">
              <a href="https://github.com/yourrepositorylink">
              <img src={github}/>
              </a>
          </div>
        </div>
        <div class="project">
          <div class="title">Hexaflake Generator</div>
          <div class="description">This program was designed to generate a Sierpinski Triangle but with hexagons. It uses
          a recursive function to generate the mesmerizing image.</div>
          <div class="technologies">SFML, C++</div>
          <div class="github-button">
              <a href="https://github.com/yourrepositorylink">
              <img src={github}/>
              </a>
          </div>
        </div>
        <div class="project">
          <div class="title">The TaskManager</div>
          <div class="description">A simple to-do-list in the form of a website. The user is allowed to create and remove their tasks.</div>
          <div class="technologies">HTML, CSS, JavaScript</div>
          <div class="github-button">
              <a href="https://github.com/quangt23/The-Task-Manager">
              <img src={github}/>
              </a>
          </div>
        </div>
        <div class="project">
          <div class="title">Online Guessing Game</div>
          <div class="description">Choose a number between 1 and 10 with a limited number of tries. 
           The user has as a health bar and an incorrect guesses will decrease your chances of winning.</div>
          <div class="technologies">HTML, CSS, JavaScript</div>
          <div class="github-button">
              <a href="https://github.com/quangt23/Online-Guessing-Game">
              <img src={github}/>
              </a>
          </div>
        </div>
        <div class="project">
          <div class="title">Evil Hangman</div>
          <div class="description">Written in C, Evil Hangman is a game that makes it impossible for the user to gues the correct word. Try it yourself!  </div>
          <div class="technologies">C Programming</div>
          <div class="github-button">
              <a href="https://github.com/yourrepositorylink">
              <img src={github}/>
              </a>
          </div>
        </div>
        <div class="project">
          <div class="title">qt codes</div>
          <div class="description">A fully-responsive personal website portfolio designed from the top-down. Created by Quang Tran. </div>
          <div class="technologies">React.js, HTML, CSS, JavaScript</div>
          <div class="github-button">
              <a href="https://github.com/yourrepositorylink">
              <img src={github}/>
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;