import React, { useState, useEffect } from 'react';
import '../style/landing.css';
import psMiniLogo from '../logos/ps-mini-logo.png'

const LandingPage = ({ loggedIn, setLoggedIn }) => {
    const [questionText, setQuestionText] = useState('"When should I water my lawn?"')
    const [answerText, setAnswerText] = useState('"Before it dies... and for 18 minutes, 3 times a week"')

  const prompts = [
    {
      questionText: "When should I water my lawn?",
      answerText: "Before it dies... and for 18 minutes, 3 times a week"
    },
    {
      questionText: "Why does your landscaping look so good?",
      answerText: "I use my Pro-Sprinkler app to adjust run times based on the seasons and evapotranspiration requirements."
    }
  ];

  const [showAnswer, setShowAnswer] = useState(false);
  const [typedQuestion, setTypedQuestion] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLoginClick = () => {
    setLoggedIn(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnswer(true);
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (currentIndex < questionText.length) {
      setTimeout(() => {
        setTypedQuestion(questionText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 90); 
    }
  }, [currentIndex]);


  useEffect(() => {
    if (prompts[0].questionText == prompts[0].questionText) {
        setTimeout(() => {
            setQuestionText(prompts[1].questionText)
        }, 4000) 
    }
  }, [prompts])

  return (
    <div>
        <div className='circle'></div>

      <div className="landing-content">

        
    
        <div className="text-container">
          <h1 className="question">{typedQuestion}</h1>
          <h2 className={`answer ${showAnswer ? 'fade-in' : ''}`}>{answerText}</h2>
        </div>
        <div className="start-side">
          <div>
        <img className="ps-mini" src={psMiniLogo} alt="Pro-Sprinkler logo" />

          </div>
          <h2>Get Started</h2>
          
          <div className='btn-container'>
            <button className="get-started" onClick={handleLoginClick}>
              Login
            </button>
            <button className="get-started" onClick={handleLoginClick}>
              Sign up
            </button>
          </div>
          <div className="footer">
            <p className="footer-text">
              <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

