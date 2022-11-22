import React from 'react'
import '../style.css';
import { ReactDOM } from 'react';
import Mona from '../../Images/mona-the-rivetertocat.png';


function Dashboard() {
    return (
        <div className='dashboardWrapper'>
            <GitHubCard 
                img={Mona} alt='monaOctacat'
                title="Mclee GitHub Page"
                description="This has been an amazing but trying three months of learning new things with new people, exploring the world of tech and getting ready for an illustrious career as a developer. Preview my gitHub to see what ive been working on"
            />
            <ResumeCard 
                 img={Mona} alt='monaOctacat'
                title="Resume"
                description="This Resume shows my prior work experience and lets you know why im the perfect fit for your company."
            />
            <LinkedinCard
                 img={Mona} alt='monaOctacat'
                title="Linked-in"
                description="Explore my Linked-in Page"
            />
            <SpecialProjectCard
                 img={Mona} alt='monaOctacat'
                title="Special Projects"
                description="Here are some special projects i've had the pleasure of working on"
            />
            <ContactCard 
                 img={Mona} alt='monaOctacat'
                title="Contact Me"
                description="Send me your info, so we can keep in touch! "
            />

        </div>
    )
}

function GitHubCard(props) {
    return (
        <section>
        <div id="dashCard" className="dashCard">
            <div className="dashCard_body">
                <img src={props.img}/>
                    <h2 className='dashCard_title'>{props.title}</h2>
                    <p className='dashCard_description'>{props.description}</p>
                    <a href='https://github.com/McLee0218' className="dashCard_btn">My GitHub</a>
            </div>
        </div>
        </section>
    )
}

function ResumeCard(props) {
    return (
        <div className="dashCard1">
            <div className="dashCard_body1">
                <img src={props.img}/>
                    <h2 className='dashCard_title1'>{props.title}</h2>
                    <p className='dashCard_description1'>{props.description}</p>
                    <button className="dashCard_btn">Resume</button>
            </div>
        </div>
    )
}

function LinkedinCard(props) {
    return (
        <div className="dashCard2">
            <div className="dashCard_body2">
                <img src={props.img}/>
                    <h2 className='dashCard_title2'>{props.title}</h2>
                    <p className='dashCard_description2'>{props.description}</p>
                    <a href='https://www.linkedin.com/in/tameka-mclean-37639b58/' className="dashCard_btn">Linked-In</a>
            </div>
        </div>
    )
}

function SpecialProjectCard(props) {
    return (
        <div className="dashCard3">
            <div className="dashCard_body3">
                <img src={props.img}/>
                    <h2 className='dashCard_title3'>{props.title}</h2>
                    <p className='dashCard_description3'>{props.description}</p>
                    <button className="dashCard_btn">First Special Project</button>
                    <button className="dashCard_btn1">Second Special Project</button>
            </div>
        </div>
    )
}

function ContactCard(props) {
    return (
        <div className="dashCard4">
            <div className="dashCard_body4">
                <img src={props.img}/>
                    <h2 className='dashCard_title4'>{props.title}</h2>
                    <p className='dashCard_description4'>{props.description}</p>
                    <button className="dashCard_btn">Contact Me</button>
            </div>
        </div>
    )
}

{/* <button className='dashCard_btn'>Enter Here</button> */}

export { Dashboard, GitHubCard, ResumeCard, LinkedinCard, SpecialProjectCard, ContactCard }
