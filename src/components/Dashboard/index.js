import React from 'react'
import '../style.css';
import { ReactDOM } from 'react';
import Mona from '../../Images/mona-the-rivetertocat.png';


function Dashboard() {
    return (
        <div className='dashboardWrapper'>
            <GitHubCard />
            <ResumeCard />
            <LinkedinCard />
            <SpecialProjectCard />
            <ContactCard />

        </div>
    )
}

function GitHubCard() {
    return (
        <div className="dashCard">
            <div className="dashCard_body">
            <button>
                <img style={{width: "30%"}} src={Mona} alt='mona-the-rivertcat.png'/>
                    <h2 className='dashCard_title'></h2>
                    <p className='dashCard_description'>This has been an amazing but trying three months of learning new things with new people, exploring the world of tech and getting ready for an illustrious career as a developer. Preview my gitHub to see what ive been working on</p>
                    </button>
            </div>
        </div>
    )
}

function ResumeCard() {
    return (
        <div className="dashCard1">
            <div className="dashCard_body1">
            <button>
                <img style={{width: "30%"}} src={Mona} alt='mona-the-rivertcat.png'/>
                    <h2 className='dashCard_title1'></h2>
                    <p className='dashCard_description1'>This has been an amazing but trying three months of learning new things with new people, exploring the world of tech and getting ready for an illustrious career as a developer. Preview my gitHub to see what ive been working on</p>
                    </button>
            </div>
        </div>
    )
}

function LinkedinCard() {
    return (
        <div className="dashCard2">
            <div className="dashCard_body2">
            <button>
                <img style={{width: "30%"}} src={Mona} alt='mona-the-rivertcat.png'/>
                    <h2 className='dashCard_title2'></h2>
                    <p className='dashCard_description2'>This has been an amazing but trying three months of learning new things with new people, exploring the world of tech and getting ready for an illustrious career as a developer. Preview my gitHub to see what ive been working on</p>
                    </button>
            </div>
        </div>
    )
}

function SpecialProjectCard() {
    return (
        <div className="dashCard3">
            <div className="dashCard_body3">
            <button>
                <img style={{width: "30%"}} src={Mona} alt='mona-the-rivertcat.png'/>
                    <h2 className='dashCard_title3'></h2>
                    <p className='dashCard_description3'>This has been an amazing but trying three months of learning new things with new people, exploring the world of tech and getting ready for an illustrious career as a developer. Preview my gitHub to see what ive been working on</p>
                    </button>
            </div>
        </div>
    )
}

function ContactCard() {
    return (
        <div className="dashCard4">
            <div className="dashCard_body4">
            <button>
                <img style={{width: "30%"}} src={Mona} alt='mona-the-rivertcat.png'/>
                    <h2 className='dashCard_title4'></h2>
                    <p className='dashCard_description4'>This has been an amazing but trying three months of learning new things with new people, exploring the world of tech and getting ready for an illustrious career as a developer. Preview my gitHub to see what ive been working on</p>
                    </button>
            </div>
        </div>
    )
}

{/* <button className='dashCard_btn'>Enter Here</button> */}

export { Dashboard, GitHubCard, ResumeCard, LinkedinCard, SpecialProjectCard, ContactCard }
