import React from 'react';
import './exp.css';

export const Experience = () => {
  return (
    <section className='experience'>
        <div className='accordian'>
        <h2 className='exp'>/ experience</h2>
            <div className='accordian-tab-wrapper'>
                <input type='radio' id='one' name='accordian-group' className='radio' checked></input>
                <input type='radio' id='two' name='accordian-group' className='radio' ></input>
                <div className='accordion-tab-indicator'></div>
                <div className='accordian-tab-group'>
                    <label for='one' className='tab' id='one-tab'>Sak's</label>
                    <label for='two' className='tab' id='two-tab'>UMass</label>
                </div>
                <div className='accordian-tab-contents'>
                    <div className='accordian-tab-content' id='one-tab-content'>
                        <h2 className='accordian-tab-title'>SAKS Off 5th Retail Associate</h2>
                        <h4>DEC 2022 - Present</h4>
                        <ul className='accordian-tab-description'>
                            <li>Operate the fitting rooms, assisting customers with trying on clothes and providing helpful suggestions.</li>
                            <li>Assist shoppers in finding clothing and accessories that suit their style and preferences.</li>
                            <li>Provide product knowledge and detailed information about our merchandise.</li>
                            <li>Maintain the appearance and organization of the sales floor, ensuring it is clean and well-stocked.</li>
                        </ul>
                    </div>
                    <div className='accordian-tab-content' id='two-tab-content'>
                        <h2 className='accordian-tab-title'>Riverview Fitness Center Attendant</h2>
                        <h4>SEPT 2021 - Present</h4>
                        <ul className='accordian-tab-description'>
                            <li>Greet and welcome members and guests with a warm and friendly demeanor.</li>
                            <li> Provide exceptional customer service by assisting members with inquiries, membership sign-ups, and facility orientations.</li>
                            <li>Collaborate with other team members to create a positive and motivational fitness environment.</li>
                            <li>Monitor fitness center activities to ensure the safety and comfort of all members.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience;