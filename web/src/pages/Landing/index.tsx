import React from 'react';
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassIcon from '../../assets/images/icons/give-classes.svg';
import purpleHearIcon from '../../assets/images/icons/purple-heart.svg'
import './style.css';

function Landing()
{
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div id="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} 
                alt="Plataforma de estudos"
                className = "hero-image"
                />
                    <div className="buttons-container">

                        <Link to="/study" className="study">
                            <img src={studyIcon} alt="Estudar"/>
                            Estudar
                        </Link>

                        <Link to="/give-classes" className="give-classes">
                            <img src={giveClassIcon} alt="dar aulas"/>
                            Dar aulas
                        </Link>

                    </div>

                    <span className="total-connections">
                        200 conexões ja realizadas
                        <img src={purpleHearIcon} alt=""/>
                    </span>
            </div>
            
        </div>
    )
}
export default Landing; 